"use client";

import React, { useEffect, useMemo, useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { apiRequest } from "../../authservice/api";
import { hasPermission, parseStoredPermissions } from "../../authservice/permissions";
import { Eye, EyeOff } from "lucide-react";

const formatDateInput = (date) => date.toISOString().split("T")[0];

const buildDefaultDates = () => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  return { start, end };
};

const getArray = (response) =>
  Array.isArray(response?.data)
    ? response.data
    : Array.isArray(response?.data?.data)
    ? response.data.data
    : [];

const getCustomersArray = (response) =>
  Array.isArray(response?.customers)
    ? response.customers
    : Array.isArray(response?.data?.customers)
    ? response.data.customers
    : getArray(response);

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
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  const normalized = String(value ?? "").replace(/,/g, "");
  const match = normalized.match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : 0;
};

const normalizeSale = (sale) => ({
  ...sale,
  reportDate: parseLocalDate(sale?.createdAt || sale?.saleDate || sale?.date),
  amountValue: normalizeAmount(sale?.totalAmount ?? sale?.grandTotal ?? sale?.paidAmount),
  paidAmountValue: normalizeAmount(sale?.paidAmount ?? sale?.cashReceived),
  referenceLabel: sale?.invoiceNumber || sale?.invoiceNo || `INV-${String(sale?._id || "").slice(-6)}`,
  customerLabel: sale?.customerName || "Walk-in",
});

const normalizeExpense = (expense) => ({
  ...expense,
  reportDate: parseLocalDate(expense?.date || expense?.createdAt),
  amountValue: normalizeAmount(expense?.amount ?? expense?.totalamount),
  referenceLabel: expense?.voucherNo || expense?._id || "-",
  categoryLabel: expense?.category || "Expense",
});

const normalizeCustomerPayment = (payment, customer) => ({
  ...payment,
  reportDate: parseLocalDate(payment?.date || payment?.paymentDate || payment?.createdAt),
  amountValue: normalizeAmount(payment?.amount),
  customerLabel: customer?.name || customer?.customerName || "Customer",
  referenceLabel: payment?.reference || payment?.id || payment?._id || "-",
  methodLabel: payment?.method || payment?.paymentMethod || "N/A",
});

const getCustomerPaymentHistory = (customer) =>
  Array.isArray(customer?.paymentHistory) ? customer.paymentHistory : [];

const isToday = (date) => {
  const parsed = parseLocalDate(date);
  if (!parsed) return false;
  return parsed.toDateString() === new Date().toDateString();
};

const isSameDay = (date, compareDate) => {
  const parsed = parseLocalDate(date);
  const compare = parseLocalDate(compareDate);
  if (!parsed || !compare) return false;
  return parsed.toDateString() === compare.toDateString();
};

const getSaleTotal = (sale) => {
  const directTotal = normalizeAmount(
    sale?.totalAmount ?? sale?.total ?? sale?.grandTotal ?? sale?.subtotal
  );

  if (directTotal > 0) {
    return directTotal;
  }

  return sale?.products?.reduce((sum, product) => {
    const unitPrice = normalizeAmount(product?.salePrice ?? product?.price);
    const qty = normalizeAmount(product?.quantity ?? product?.qty);
    return sum + unitPrice * qty;
  }, 0) || 0;
};

const isWalkInSale = (sale) => {
  const selectedCustomerType = String(sale?.selectedCustomer?.type || sale?.customer?.type || "")
    .trim()
    .toLowerCase();
  const customerName = String(
    sale?.customerName ?? sale?.selectedCustomer?.name ?? sale?.customer?.name ?? ""
  )
    .trim()
    .toLowerCase();
  const hasCustomerId = Boolean(sale?.customerId || sale?.selectedCustomer?.id || sale?.customer?._id || sale?.customer?.id);

  if (selectedCustomerType) {
    return selectedCustomerType === "walk-in" || selectedCustomerType === "walk in";
  }

  if (customerName) {
    return customerName === "walk-in" || customerName === "walk in";
  }

  return !hasCustomerId;
};

const CashReportSection = () => {
  const { start: defaultStart, end: defaultEnd } = buildDefaultDates();
  const [startDate, setStartDate] = useState(formatDateInput(defaultStart));
  const [endDate, setEndDate] = useState(formatDateInput(defaultEnd));
  const [sales, setSales] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showValues, setShowValues] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const permissions = parseStoredPermissions();
      const canSaleView = hasPermission("SALE_VIEW", permissions);
      const canExpenseView = hasPermission("EXPENSE_VIEW", permissions);
      const canCustomerView = hasPermission("CUSTOMER_VIEW", permissions);

      try {
        setLoading(true);

        const [salesRes, expenseRes, customersRes] = await Promise.all([
          canSaleView ? apiRequest("/sales", { method: "GET" }) : Promise.resolve({ data: [] }),
          canExpenseView ? apiRequest("/expenses", { method: "GET" }) : Promise.resolve({ data: [] }),
          canCustomerView ? apiRequest("/customers", { method: "GET" }) : Promise.resolve({ customers: [] }),
        ]);

        setSales(getArray(salesRes).map(normalizeSale));
        setExpenses(getArray(expenseRes).map(normalizeExpense));
        setCustomers(getCustomersArray(customersRes));
      } catch (error) {
        console.error("Failed to fetch cash report data:", error);
        setSales([]);
        setExpenses([]);
        setCustomers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const cashReport = useMemo(() => {
    const start = parseLocalDate(startDate);
    const end = parseLocalDate(endDate);

      if (!start || !end) {
        return {
          salesInRange: [],
          expensesInRange: [],
          customerPaymentsInRange: [],
          totalWalkInSales: 0,
          totalCustomerPaid: 0,
          totalExpenses: 0,
          netCash: 0,
        };
     }

    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
    const salesInRange = sales.filter(
      (sale) =>
        sale.reportDate &&
        sale.reportDate >= start &&
        sale.reportDate <= end
    );

    const walkInSalesInRange = salesInRange.filter((sale) => isWalkInSale(sale));

    const expensesInRange = expenses.filter(
      (expense) =>
        expense.reportDate &&
        expense.reportDate >= start &&
        expense.reportDate <= end
    );

    const customerPaymentsInRange = customers.flatMap((customer) =>
      (Array.isArray(customer?.paymentHistory) ? customer.paymentHistory : [])
        .map((payment) => normalizeCustomerPayment(payment, customer))
        .filter(
          (payment) =>
            payment.reportDate &&
            payment.reportDate >= start &&
            payment.reportDate <= end
        )
    );

    const totalWalkInSales = walkInSalesInRange.reduce(
      (sum, sale) => sum + sale.amountValue,
      0
    );
    const totalCustomerPaid = customerPaymentsInRange.reduce(
      (sum, payment) => sum + payment.amountValue,
      0
    );
    const totalExpenses = expensesInRange.reduce((sum, expense) => sum + expense.amountValue, 0);

    return {
      salesInRange,
      walkInSalesInRange,
      expensesInRange,
      customerPaymentsInRange,
      totalWalkInSales,
      totalCustomerPaid,
      totalExpenses,
      netCash: (totalWalkInSales + totalCustomerPaid) - totalExpenses,
    };
  }, [customers, endDate, expenses, sales, startDate]);

  const dashboardCashSummary = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const todaysSales = sales.filter((sale) => isToday(sale.saleDate || sale.createdAt));
    const todaysWalkInSales = todaysSales
      .filter((sale) => isWalkInSale(sale))
      .reduce((sum, sale) => sum + getSaleTotal(sale), 0);

    const todaysCustomerPaid = customers.reduce(
      (sum, customer) =>
        sum +
        getCustomerPaymentHistory(customer)
          .filter((payment) => isToday(payment?.date || payment?.paymentDate || payment?.createdAt))
          .reduce((paymentSum, payment) => paymentSum + normalizeAmount(payment?.amount), 0),
      0
    );

    const todaysExpenses = expenses
      .filter((expense) => isToday(expense.date || expense.createdAt))
      .reduce((sum, expense) => sum + normalizeAmount(expense.amount || expense.totalamount), 0);

    const yesterdaysSales = sales.filter((sale) =>
      isSameDay(sale.saleDate || sale.createdAt, yesterday)
    );

    const yesterdaysWalkInSales = yesterdaysSales
      .filter((sale) => isWalkInSale(sale))
      .reduce((sum, sale) => sum + getSaleTotal(sale), 0);

    const yesterdaysCustomerPaid = customers.reduce(
      (sum, customer) =>
        sum +
        getCustomerPaymentHistory(customer)
          .filter((payment) =>
            isSameDay(payment?.date || payment?.paymentDate || payment?.createdAt, yesterday)
          )
          .reduce((paymentSum, payment) => paymentSum + normalizeAmount(payment?.amount), 0),
      0
    );

    const yesterdaysExpenses = expenses
      .filter((expense) => isSameDay(expense.date || expense.createdAt, yesterday))
      .reduce((sum, expense) => sum + normalizeAmount(expense.amount || expense.totalamount), 0);

    const previousDayDailyCash =
      (yesterdaysWalkInSales + yesterdaysCustomerPaid) - yesterdaysExpenses;

    return {
      todaysWalkInSales,
      todaysCustomerPaid,
      todaysExpenses,
      todaysNetPaidExpense: todaysCustomerPaid - todaysExpenses,
      dailyCash: previousDayDailyCash + (todaysWalkInSales + todaysCustomerPaid) - todaysExpenses,
      todaysWalkInSaleCount: todaysSales.filter((sale) => isWalkInSale(sale)).length,
      todaysCustomerPaymentCount: customers.reduce(
        (sum, customer) =>
          sum +
          getCustomerPaymentHistory(customer).filter((payment) =>
            isToday(payment?.date || payment?.paymentDate || payment?.createdAt)
          ).length,
        0
      ),
    };
  }, [customers, expenses, sales]);

  const handleExportCashReport = () => {
    const {
      walkInSalesInRange,
      expensesInRange,
      customerPaymentsInRange,
      totalWalkInSales,
      totalCustomerPaid,
      totalExpenses,
      netCash,
    } = cashReport;
    const doc = new jsPDF();
    const generatedAt = new Date().toLocaleString("en-IN");

    doc.setFontSize(18);
    doc.text("Cash Report", 14, 20);
    doc.setFontSize(11);
    doc.text(`From: ${startDate}  To: ${endDate}`, 14, 28);
    doc.text(`Daily Cash: PKR ${netCash.toFixed(2)}`, 14, 34);
    doc.text(`Generated: ${generatedAt}`, 14, 40);

    autoTable(doc, {
      startY: 48,
      tableWidth: 180,
      head: [["Metric", "Amount (PKR)"]],
      body: [
        ["Today Walk-in Sale", totalWalkInSales.toFixed(2)],
        ["Today Customer Paid", totalCustomerPaid.toFixed(2)],
        ["Today Expense", totalExpenses.toFixed(2)],
        ["Daily Cash", netCash.toFixed(2)],
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
        0: { cellWidth: 100 },
        1: { halign: "right" },
      },
    });

    const transactionRows = [
      ...walkInSalesInRange.map((sale) => ({
        sortTime: sale.reportDate?.getTime() || 0,
        row: [
          "Walk-in Sale",
          sale.reportDate ? sale.reportDate.toLocaleDateString("en-IN") : "-",
          sale.referenceLabel,
          "Walk-in Customer",
          "Sale",
          sale.amountValue.toFixed(2),
        ],
      })),
      ...customerPaymentsInRange.map((payment) => ({
          sortTime: payment.reportDate?.getTime() || 0,
          row: [
            "Customer Paid",
            payment.reportDate ? payment.reportDate.toLocaleDateString("en-IN") : "-",
            payment.referenceLabel,
            payment.customerLabel,
            payment.methodLabel,
            payment.amountValue.toFixed(2),
          ],
        })),
      ...expensesInRange.map((expense) => ({
        sortTime: expense.reportDate?.getTime() || 0,
        row: [
          "Expense",
          expense.reportDate ? expense.reportDate.toLocaleDateString("en-IN") : "-",
          expense.referenceLabel,
          expense.categoryLabel,
          "Expense",
          expense.amountValue.toFixed(2),
        ],
      })),
    ]
      .sort((a, b) => a.sortTime - b.sortTime)
      .map((entry) => entry.row);

    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 8,
      tableWidth: 180,
      head: [["Type", "Date", "Reference", "Particular", "Method", "Amount (PKR)"]],
      body: transactionRows.length
        ? transactionRows
        : [["", "", "", "No daily cash activity found for the selected date range.", "", ""]],
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
        0: { cellWidth: 20 },
        1: { cellWidth: 24 },
        2: { cellWidth: 28 },
        3: { cellWidth: 52 },
        4: { cellWidth: 24 },
        5: { halign: "right", cellWidth: 24 },
      },
    });

    doc.save(`Cash_Report_${startDate}_to_${endDate}.pdf`);
  };

  if (loading) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white/80 p-6 text-center shadow-lg backdrop-blur">
        Loading cash report...
      </div>
    );
  }

  const {
    todaysWalkInSales,
    todaysCustomerPaid,
    todaysExpenses,
    todaysNetPaidExpense,
    dailyCash: dashboardDailyCash,
    todaysWalkInSaleCount,
    todaysCustomerPaymentCount,
  } = dashboardCashSummary;

  return (
    <div className="rounded-xl border border-gray-200 bg-white/80 shadow-lg backdrop-blur">
      <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Cash Report</h3>
          <p className="text-sm text-gray-500">
            {startDate} to {endDate}
          </p>
          <p className="text-sm font-medium text-gray-700">
            Daily Cash: Rs.{dashboardDailyCash.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500">
            Yesterday daily cash + today's net cash activity
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-end sm:justify-end">
          <button
            type="button"
            onClick={() => setShowValues((prev) => !prev)}
            className="h-9 w-full rounded-full border border-slate-200 bg-white/90 px-4 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 sm:w-auto"
          >
            <span className="inline-flex items-center gap-2">
              {showValues ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showValues ? "Hide Values" : "Show Values"}
            </span>
          </button>

          <label className="flex w-full flex-col gap-1 text-xs font-medium text-gray-600 sm:w-auto">
            From
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              max={endDate}
              className="h-9 rounded-md border border-gray-300 px-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </label>

          <label className="flex w-full flex-col gap-1 text-xs font-medium text-gray-600 sm:w-auto">
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
            onClick={handleExportCashReport}
            className="h-9 w-full rounded-md bg-blue-600 px-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:w-auto"
          >
            Export Cash Report
          </button>
        </div>
      </div>

      <div className="grid gap-4 border-t border-gray-100 p-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">Walk-in Sale</p>
          <p className="mt-2 break-words text-2xl font-semibold text-emerald-800">
            {showValues ? `PKR ${todaysWalkInSales.toFixed(2)}` : "PKR ****"}
          </p>
          <p className="mt-1 break-words text-xs text-emerald-700">{todaysWalkInSaleCount} walk-in sale transactions today</p>
        </div>

        <div className="rounded-lg border border-rose-100 bg-rose-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-rose-700">Paid - Expense View</p>
          <p className="mt-2 break-words text-2xl font-semibold text-rose-800">
            {showValues ? `PKR ${todaysNetPaidExpense.toFixed(2)}` : "PKR ****"}
          </p>
          <p className="mt-1 break-words text-xs text-rose-700">
            {todaysCustomerPaymentCount} customer payments | Paid: PKR {showValues ? todaysCustomerPaid.toFixed(2) : "****"} | Expense: PKR {showValues ? todaysExpenses.toFixed(2) : "****"}
          </p>
        </div>

        <div className="rounded-lg border border-sky-100 bg-sky-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-sky-700">Daily Cash</p>
          <p className="mt-2 break-words text-2xl font-semibold text-sky-800">
            {showValues ? `Rs.${dashboardDailyCash.toFixed(2)}` : "Rs.****"}
          </p>
          <p className="mt-1 break-words text-xs text-sky-700">Yesterday daily cash + today's net cash activity</p>
        </div>
      </div>
    </div>
  );
};

export default CashReportSection;


