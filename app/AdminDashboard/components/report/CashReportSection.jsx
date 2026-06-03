"use client";

import React, { useEffect, useMemo, useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { apiRequest } from "../../authservice/api";
import { hasPermission, parseStoredPermissions } from "../../authservice/permissions";
import { Eye, EyeOff } from "lucide-react";
import {
  getSupplierPaymentDateValue,
  getSupplierPaymentsArray,
  getTotalSupplierPaidAmount,
  getUnifiedSupplierPayments,
  getSaleTotal,
  isCashPaymentMethod,
  isSupplierCashPaymentMethod,
  isWalkInSale,
  parseLocalDate,
  toNumber as normalizeAmount,
} from "../../utils/dailyCash";

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

const getSuppliersArray = (response) =>
  Array.isArray(response?.suppliers)
    ? response.suppliers
    : Array.isArray(response?.data?.suppliers)
    ? response.data.suppliers
    : getArray(response);

const normalizeSale = (sale) => ({
  ...sale,
  reportDate: parseLocalDate(sale?.createdAt || sale?.saleDate || sale?.date),
  amountValue: getSaleTotal(sale),
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

const normalizeSupplierPayment = (payment) => ({
  ...payment,
  reportDate: parseLocalDate(getSupplierPaymentDateValue(payment)),
  amountValue: normalizeAmount(payment?.paidAmount ?? payment?.amount ?? payment?.appliedAmount),
  referenceLabel: payment?.reference || payment?.id || payment?._id || payment?.billId || "-",
  methodLabel: payment?.method || payment?.paymentMethod || "N/A",
  supplierLabel: payment?.supplierName || payment?.supplier?.name || payment?.name || "Supplier",
});

const CashReportSection = () => {
  const { start: defaultStart, end: defaultEnd } = buildDefaultDates();
  const [startDate, setStartDate] = useState(formatDateInput(defaultStart));
  const [endDate, setEndDate] = useState(formatDateInput(defaultEnd));
  const [sales, setSales] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [supplierPayments, setSupplierPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showValues, setShowValues] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const permissions = parseStoredPermissions();
      const canSaleView = hasPermission("SALE_VIEW", permissions);
      const canExpenseView = hasPermission("EXPENSE_VIEW", permissions);
      const canCustomerView = hasPermission("CUSTOMER_VIEW", permissions);
      const canSupplierView = hasPermission("SUPPLIER_VIEW", permissions);
      const canPurchaseView = hasPermission("PURCHASE_VIEW", permissions);

      try {
        setLoading(true);

        const [salesRes, expenseRes, customersRes, suppliersRes, purchasesRes, supplierPaymentsRes] = await Promise.all([
          canSaleView ? apiRequest("/sales", { method: "GET" }) : Promise.resolve({ data: [] }),
          canExpenseView ? apiRequest("/expenses", { method: "GET" }) : Promise.resolve({ data: [] }),
          canCustomerView ? apiRequest("/customers", { method: "GET" }) : Promise.resolve({ customers: [] }),
          canSupplierView ? apiRequest("/suppliers", { method: "GET" }) : Promise.resolve({ data: [] }),
          canPurchaseView ? apiRequest("/purchases", { method: "GET" }) : Promise.resolve({ data: [] }),
          canSupplierView
            ? apiRequest("/supplierpayments", {
                method: "GET",
                suppressErrorToast: true,
                suppressErrorLog: true,
              })
            : Promise.resolve({ data: [] }),
        ]);

        setSales(getArray(salesRes).map(normalizeSale));
        setExpenses(getArray(expenseRes).map(normalizeExpense));
        setCustomers(getCustomersArray(customersRes));
        setSuppliers(getSuppliersArray(suppliersRes));
        setPurchases(getArray(purchasesRes));
        setSupplierPayments(getSupplierPaymentsArray(supplierPaymentsRes));
      } catch (error) {
        console.error("Failed to fetch cash report data:", error);
        setSales([]);
        setExpenses([]);
        setCustomers([]);
        setSuppliers([]);
        setPurchases([]);
        setSupplierPayments([]);
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
        supplierPaymentsInRange: [],
        totalWalkInSales: 0,
        totalCustomerPaid: 0,
        totalSupplierPaid: 0,
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

    const supplierPaymentsInRange = getUnifiedSupplierPayments({
      suppliers,
      purchases,
      supplierPayments,
    })
      .map((payment) => normalizeSupplierPayment(payment))
      .filter(
        (payment) =>
          payment.reportDate &&
          payment.reportDate >= start &&
          payment.reportDate <= end &&
          isSupplierCashPaymentMethod(payment.methodLabel)
      );

    const totalWalkInSales = walkInSalesInRange.reduce(
      (sum, sale) => sum + sale.amountValue,
      0
    );
    const totalCustomerPaid = customerPaymentsInRange.reduce(
      (sum, payment) =>
        isCashPaymentMethod(payment.methodLabel) ? sum + payment.amountValue : sum,
      0
    );
    const totalSupplierPaid = getTotalSupplierPaidAmount({
      suppliers,
      purchases,
    });
    const totalExpenses = expensesInRange.reduce((sum, expense) => sum + expense.amountValue, 0);
    const dailyCash =
      totalWalkInSales + totalCustomerPaid - totalSupplierPaid - totalExpenses;

    return {
      salesInRange,
      walkInSalesInRange,
      expensesInRange,
      customerPaymentsInRange,
      supplierPaymentsInRange,
      totalWalkInSales,
      totalCustomerPaid,
      totalSupplierPaid,
      totalExpenses,
      netCash: dailyCash,
    };
  }, [customers, endDate, expenses, sales, startDate, suppliers, purchases, supplierPayments]);

  const handleExportCashReport = () => {
    const {
      walkInSalesInRange,
      expensesInRange,
      customerPaymentsInRange,
      supplierPaymentsInRange,
      totalWalkInSales,
      totalCustomerPaid,
      totalSupplierPaid,
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
        ["Total Walk-in Sale", totalWalkInSales.toFixed(2)],
        ["Total Customer Paid", totalCustomerPaid.toFixed(2)],
        ["Total paid to suppliers", totalSupplierPaid.toFixed(2)],
        ["Total Expense", totalExpenses.toFixed(2)],
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
      ...supplierPaymentsInRange.map((payment) => ({
        sortTime: payment.reportDate?.getTime() || 0,
        row: [
          "Supplier Paid",
          payment.reportDate ? payment.reportDate.toLocaleDateString("en-IN") : "-",
          payment.referenceLabel,
          payment.supplierLabel,
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
    walkInSalesInRange,
    expensesInRange,
    customerPaymentsInRange,
    supplierPaymentsInRange,
    totalWalkInSales,
    totalCustomerPaid,
    totalSupplierPaid,
    totalExpenses,
    netCash,
  } = cashReport;

  return (
    <div className="rounded-xl border border-gray-200 bg-white/80 shadow-lg backdrop-blur">
      <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Cash Report</h3>
          <p className="text-sm text-gray-500">
            {startDate} to {endDate}
          </p>
          <p className="text-sm font-medium text-gray-700">
            Daily Cash: PKR {netCash.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500">
            Formula: previous positive daily cash + walk-in sale + customer paid - supplier paid - expense
          </p>
        </div>

        <div className="flex flex-wrap items-end gap-2 sm:justify-end">
          <button
            type="button"
            onClick={() => setShowValues((prev) => !prev)}
            className="h-9 rounded-full border border-slate-200 bg-white/90 px-4 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
          >
            <span className="inline-flex items-center gap-2">
              {showValues ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showValues ? "Hide Values" : "Show Values"}
            </span>
          </button>

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
            onClick={handleExportCashReport}
            className="h-9 rounded-md bg-blue-600 px-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Export Cash Report
          </button>
        </div>
      </div>

      <div className="grid gap-4 border-t border-gray-100 p-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">Walk-in Sale</p>
          <p className="mt-2 text-2xl font-semibold text-emerald-800">
            {showValues ? `PKR ${totalWalkInSales.toFixed(2)}` : "PKR ****"}
          </p>
          <p className="mt-1 text-xs text-emerald-700">{walkInSalesInRange.length} walk-in sale transactions in the selected date window</p>
        </div>

        <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-amber-700">Customer Paid</p>
          <p className="mt-2 text-2xl font-semibold text-rose-800">
            {showValues ? `PKR ${totalCustomerPaid.toFixed(2)}` : "PKR ****"}
          </p>
          <p className="mt-1 text-xs text-amber-700">
            {customerPaymentsInRange.length} cash customer payments added to daily cash
          </p>
        </div>

        <div className="rounded-lg border border-violet-100 bg-violet-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-violet-700">Paid to Suppliers</p>
          <p className="mt-2 text-2xl font-semibold text-violet-800">
            {showValues ? `PKR ${totalSupplierPaid.toFixed(2)}` : "PKR ****"}
          </p>
          <p className="mt-1 text-xs text-violet-700">
            Based on supplier table paid totals, deducted from daily cash
          </p>
        </div>

        <div className="rounded-lg border border-rose-100 bg-rose-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-rose-700">Expense</p>
          <p className="mt-2 text-2xl font-semibold text-rose-800">
            {showValues ? `PKR ${totalExpenses.toFixed(2)}` : "PKR ****"}
          </p>
          <p className="mt-1 text-xs text-rose-700">
            {expensesInRange.length} expense entries deducted from daily cash
          </p>
        </div>
      </div>

      <div className="border-t border-gray-100 px-6 pb-6">
        <div className="rounded-lg border border-sky-100 bg-sky-50 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-sky-700">Daily Cash</p>
          <p className="mt-2 text-2xl font-semibold text-sky-800">
            {showValues ? `PKR ${netCash.toFixed(2)}` : "PKR ****"}
          </p>
          <p className="mt-1 text-xs text-sky-700">
            Previous positive daily cash + walk-in sale + customer paid - supplier paid - expense
          </p>
        </div>
      </div>
    </div>
  );
};

export default CashReportSection;


