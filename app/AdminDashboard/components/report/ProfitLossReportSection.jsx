"use client";

import React, { useEffect, useMemo, useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { apiRequest } from "../../authservice/api";
import { hasPermission, parseStoredPermissions } from "../../authservice/permissions";
import { listLabOrders } from "../../authservice/labApi";

const formatDateInput = (date) => date.toISOString().split("T")[0];

const buildDefaultDates = () => {
  const end = new Date();
  end.setHours(0, 0, 0, 0);
  const start = new Date(end);
  start.setDate(start.getDate() - 29);
  return { start, end };
};

const parseLocalDate = (value) => {
  if (!value) return null;

  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : new Date(value);
  }

  const normalized = String(value).trim();
  const isoMatch = normalized.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) {
    const [, yyyy, mm, dd] = isoMatch;
    const date = new Date(Number(yyyy), Number(mm) - 1, Number(dd));
    return Number.isNaN(date.getTime()) ? null : date;
  }

  const parsed = new Date(normalized);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const normalizeAmount = (value) => {
  const amount = Number(value ?? 0);
  return Number.isFinite(amount) ? amount : 0;
};

const getPaidTestFee = (test) => {
  if (!test || String(test.paymentStatus).toLowerCase() !== "paid") return 0;

  const linePriceTotal =
    (test.tests || []).reduce((sum, item) => sum + Number(item.price || 0), 0) || 0;

  if (linePriceTotal > 0) return linePriceTotal;

  return (
    test.tests?.reduce(
      (sumTest, item) =>
        sumTest +
        (item.parameters?.reduce(
          (sumParam, parameter) => sumParam + Number(parameter.cost || 0),
          0
        ) || 0),
      0
    ) || 0
  );
};

const calculateProductProfit = (sale) =>
  sale?.products?.reduce((sum, product) => {
    const chargedQuantity = Math.max(
      Number(product?.chargedQuantity ?? product?.quantity ?? product?.qty ?? 0) -
        Number(product?.returnedQuantity || 0),
      0
    );
    const deductedQuantity = Math.max(
      Number(product?.quantity || product?.qty || 0) - Number(product?.returnedQuantity || 0),
      0
    );
    const salePrice = Number(product?.salePrice || 0);
    const purchasePrice = Number(product?.purchasePrice || 0);
    return sum + salePrice * chargedQuantity - purchasePrice * deductedQuantity;
  }, 0) || 0;

const normalizeSale = (sale) => ({
  ...sale,
  reportDate: parseLocalDate(sale?.createdAt || sale?.saleDate || sale?.date),
  amountValue: normalizeAmount(sale?.totalAmount ?? sale?.grandTotal ?? sale?.paidAmount),
  referenceLabel: sale?.invoiceNumber || sale?.invoiceNo || `INV-${String(sale?._id || "").slice(-6)}`,
  customerLabel: sale?.customerName || "Walk-in",
  profitValue: calculateProductProfit(sale),
});

const normalizeTest = (test) => ({
  ...test,
  reportDate: parseLocalDate(test?.createdAt || test?.date),
  feeValue: getPaidTestFee(test),
  referenceLabel: test?.orderNumber || test?._id || "-",
  customerLabel: test?.customerName || test?.patientName || "Lab Customer",
});

const normalizeExpense = (expense) => ({
  ...expense,
  reportDate: parseLocalDate(expense?.date || expense?.createdAt),
  amountValue: normalizeAmount(expense?.amount ?? expense?.totalamount),
  categoryLabel: expense?.category || "Expense",
  referenceLabel: expense?.voucherNo || expense?._id || "-",
});

const formatDisplayDate = (value) => {
  const date = parseLocalDate(value);
  return date ? date.toLocaleDateString("en-US") : "-";
};

const ProfitLossReportSection = () => {
  const { start: defaultStart, end: defaultEnd } = buildDefaultDates();
  const [startDate, setStartDate] = useState(formatDateInput(defaultStart));
  const [endDate, setEndDate] = useState(formatDateInput(defaultEnd));
  const [sales, setSales] = useState([]);
  const [tests, setTests] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const permissions = parseStoredPermissions();
      const canSaleView = hasPermission("SALE_VIEW", permissions);
      const canTestView = hasPermission("TEST_VIEW", permissions);
      const canExpenseView = hasPermission("EXPENSE_VIEW", permissions);

      try {
        setLoading(true);

        const [salesRes, testsRes, expenseRes] = await Promise.all([
          canSaleView ? apiRequest("/sales", { method: "GET" }) : Promise.resolve({ data: [] }),
          canTestView
            ? listLabOrders({ suppressErrorToast: true, suppressErrorLog: true })
            : Promise.resolve([]),
          canExpenseView ? apiRequest("/expenses", { method: "GET" }) : Promise.resolve({ data: [] }),
        ]);

        const rawSales = Array.isArray(salesRes?.data)
          ? salesRes.data
          : Array.isArray(salesRes?.data?.data)
          ? salesRes.data.data
          : [];

        const rawTests = Array.isArray(testsRes)
          ? testsRes
          : Array.isArray(testsRes?.data)
          ? testsRes.data
          : Array.isArray(testsRes?.data?.data)
          ? testsRes.data.data
          : [];

        const rawExpenses = Array.isArray(expenseRes?.data)
          ? expenseRes.data
          : Array.isArray(expenseRes?.data?.data)
          ? expenseRes.data.data
          : [];

        setSales(rawSales.map(normalizeSale));
        setTests(rawTests.map(normalizeTest));
        setExpenses(rawExpenses.map(normalizeExpense));
      } catch (error) {
        console.error("Failed to fetch profit and loss report data:", error);
        setSales([]);
        setTests([]);
        setExpenses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const report = useMemo(() => {
    const start = parseLocalDate(startDate);
    const end = parseLocalDate(endDate);

    if (!start || !end) {
      return {
        salesInRange: [],
        testsInRange: [],
        expensesInRange: [],
        totalSalesRevenue: 0,
        totalSalesProfit: 0,
        totalTestFees: 0,
        totalIncome: 0,
        totalExpenses: 0,
        netProfitLoss: 0,
      };
    }

    end.setHours(23, 59, 59, 999);

    const salesInRange = sales.filter(
      (sale) => sale.reportDate && sale.reportDate >= start && sale.reportDate <= end
    );
    const testsInRange = tests.filter(
      (test) => test.reportDate && test.reportDate >= start && test.reportDate <= end
    );
    const expensesInRange = expenses.filter(
      (expense) => expense.reportDate && expense.reportDate >= start && expense.reportDate <= end
    );

    const totalSalesRevenue = salesInRange.reduce((sum, sale) => sum + sale.amountValue, 0);
    const totalSalesProfit = salesInRange.reduce((sum, sale) => sum + sale.profitValue, 0);
    const totalTestFees = testsInRange.reduce((sum, test) => sum + test.feeValue, 0);
    const totalIncome = totalSalesProfit + totalTestFees;
    const totalExpenses = expensesInRange.reduce((sum, expense) => sum + expense.amountValue, 0);

    return {
      salesInRange,
      testsInRange,
      expensesInRange,
      totalSalesRevenue,
      totalSalesProfit,
      totalTestFees,
      totalIncome,
      totalExpenses,
      netProfitLoss: totalIncome - totalExpenses,
    };
  }, [endDate, expenses, sales, startDate, tests]);

  const handleExportProfitLossReport = () => {
    const {
      salesInRange,
      testsInRange,
      expensesInRange,
      totalSalesRevenue,
      totalSalesProfit,
      totalTestFees,
      totalIncome,
      totalExpenses,
      netProfitLoss,
    } = report;

    const doc = new jsPDF();
    const generatedAt = new Date().toLocaleString("en-IN");

    doc.setFontSize(18);
    doc.text("Profit and Loss Report", 14, 20);
    doc.setFontSize(11);
    doc.text(`${startDate} to ${endDate}`, 14, 28);
    doc.text(`Total: PKR ${netProfitLoss.toFixed(2)}`, 14, 34);
    doc.text(`From: ${formatDisplayDate(startDate)}`, 14, 42);
    doc.text(`To: ${formatDisplayDate(endDate)}`, 14, 48);
    doc.text(`Generated: ${generatedAt}`, 14, 54);

    autoTable(doc, {
      startY: 62,
      tableWidth: 180,
      head: [["Metric", "Amount (PKR)"]],
      body: [
        ["Sales Revenue", totalSalesRevenue.toFixed(2)],
        ["Sales Profit", totalSalesProfit.toFixed(2)],
        ["Lab Test Income", totalTestFees.toFixed(2)],
        ["Total Income", totalIncome.toFixed(2)],
        ["Total Expenses", totalExpenses.toFixed(2)],
        ["Net Profit / Loss", netProfitLoss.toFixed(2)],
      ],
      styles: {
        fontSize: 10,
        cellPadding: 3,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
      },
      headStyles: {
        fillColor: [37, 99, 235],
        textColor: [255, 255, 255],
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
      },
      columnStyles: {
        0: { cellWidth: 110 },
        1: { halign: "right" },
      },
    });

    const detailRows = [
      ...salesInRange.map((sale) => ({
        sortTime: sale.reportDate?.getTime() || 0,
        row: [
          "Sales Profit",
          sale.reportDate ? sale.reportDate.toLocaleDateString("en-US") : "-",
          sale.referenceLabel,
          sale.customerLabel,
          sale.profitValue.toFixed(2),
        ],
      })),
      ...testsInRange
        .filter((test) => test.feeValue > 0)
        .map((test) => ({
          sortTime: test.reportDate?.getTime() || 0,
          row: [
            "Lab Test Income",
            test.reportDate ? test.reportDate.toLocaleDateString("en-US") : "-",
            test.referenceLabel,
            test.customerLabel,
            test.feeValue.toFixed(2),
          ],
        })),
      ...expensesInRange.map((expense) => ({
        sortTime: expense.reportDate?.getTime() || 0,
        row: [
          "Expense",
          expense.reportDate ? expense.reportDate.toLocaleDateString("en-US") : "-",
          expense.referenceLabel,
          expense.categoryLabel,
          `-${expense.amountValue.toFixed(2)}`,
        ],
      })),
    ]
      .sort((a, b) => a.sortTime - b.sortTime)
      .map((entry) => entry.row);

    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 8,
      tableWidth: 180,
      head: [["Type", "Date", "Reference", "Particular", "Amount (PKR)"]],
      body: detailRows.length
        ? detailRows
        : [["", "", "", "No profit and loss activity found for the selected date range.", ""]],
      styles: {
        fontSize: 9,
        cellPadding: 2.5,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
        halign: "center",
      },
      headStyles: {
        fillColor: [15, 23, 42],
        textColor: [255, 255, 255],
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
        halign: "center",
      },
      columnStyles: {
        0: { cellWidth: 28 },
        1: { cellWidth: 24 },
        2: { cellWidth: 34 },
        3: { cellWidth: 62 },
        4: { halign: "right", cellWidth: 28 },
      },
    });

    doc.save(`Profit_and_Loss_Report_${startDate}_to_${endDate}.pdf`);
  };

  if (loading) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white/80 p-6 text-center shadow-lg backdrop-blur">
        Loading profit and loss report...
      </div>
    );
  }

  const {
    salesInRange,
    expensesInRange,
    totalSalesProfit,
    totalTestFees,
    totalIncome,
    totalExpenses,
    netProfitLoss,
  } = report;

  const netLabel = netProfitLoss >= 0 ? "Net Profit" : "Net Loss";

  return (
    <div className="rounded-xl border border-gray-200 bg-white/80 shadow-lg backdrop-blur">
      <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Profit and Loss Report</h3>
          <p className="text-sm text-gray-500">
            {startDate} to {endDate}
          </p>
          <p className="text-sm font-medium text-gray-700">
            Total: PKR {netProfitLoss.toFixed(2)}
          </p>
        </div>

        <div className="flex flex-wrap items-end gap-2 sm:justify-end">
          <label className="flex flex-col gap-1 text-xs font-medium text-gray-600">
            From
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              max={endDate}
              className="h-9 rounded-md border border-gray-300 px-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </label>

          <label className="flex flex-col gap-1 text-xs font-medium text-gray-600">
            To
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              min={startDate}
              className="h-9 rounded-md border border-gray-300 px-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </label>

          <button
            type="button"
            onClick={handleExportProfitLossReport}
            className="h-9 rounded-md bg-blue-600 px-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Export Profit and Loss Report
          </button>
        </div>
      </div>

      <div className="grid gap-4 border-t border-gray-100 p-6 md:grid-cols-3">
        <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">Total Income</p>
          <p className="mt-2 text-2xl font-semibold text-emerald-800">PKR {totalIncome.toFixed(2)}</p>
          <p className="mt-1 text-xs text-emerald-700">
            PKR {totalSalesProfit.toFixed(2)} sales profit and PKR {totalTestFees.toFixed(2)} test income
          </p>
        </div>

        <div className="rounded-lg border border-rose-100 bg-rose-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-rose-700">Total Expenses</p>
          <p className="mt-2 text-2xl font-semibold text-rose-800">PKR {totalExpenses.toFixed(2)}</p>
          <p className="mt-1 text-xs text-rose-700">
            {expensesInRange.length} expense entries in the selected range
          </p>
        </div>

        <div className={`rounded-lg border p-4 ${netProfitLoss >= 0 ? "border-sky-100 bg-sky-50" : "border-amber-100 bg-amber-50"}`}>
          <p className={`text-xs font-medium uppercase tracking-wide ${netProfitLoss >= 0 ? "text-sky-700" : "text-amber-700"}`}>{netLabel}</p>
          <p className={`mt-2 text-2xl font-semibold ${netProfitLoss >= 0 ? "text-sky-800" : "text-amber-800"}`}>
            PKR {netProfitLoss.toFixed(2)}
          </p>
          <p className={`mt-1 text-xs ${netProfitLoss >= 0 ? "text-sky-700" : "text-amber-700"}`}>
            {salesInRange.length} sales contributed to this period result
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfitLossReportSection;
