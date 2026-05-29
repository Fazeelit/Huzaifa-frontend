"use client";

import React, { useEffect, useMemo, useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { apiRequest } from "../../authservice/api";

const PAGE_SIZE = 10;

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
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;
  const normalized = String(value ?? "").replace(/,/g, "");
  const match = normalized.match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : 0;
};

const formatCurrency = (value) => `Rs ${Number(value || 0).toLocaleString("en-IN")}`;

const formatAmountForPdf = (value) => Number(value || 0).toFixed(2);

const formatDisplayDate = (value) => {
  const date = parseLocalDate(value);
  return date ? date.toLocaleDateString("en-GB") : "-";
};

const calculateProductProfit = (sale) =>
  sale?.products?.reduce((sum, product) => {
    const quantity = Math.max(
      Number(product?.quantity || product?.qty || 0) - Number(product?.returnedQuantity || 0),
      0
    );
    const salePrice = Number(product?.salePrice || 0);
    const purchasePrice = Number(product?.purchasePrice || 0);
    const unitProfit = Math.round(salePrice - purchasePrice);

    return sum + unitProfit * quantity;
  }, 0) || 0;

const normalizeInvoiceKeys = (...values) => {
  const keys = new Set();

  values.forEach((value) => {
    const normalized = String(value || "").trim().toLowerCase();
    if (!normalized) return;
    keys.add(normalized);
    if (normalized.startsWith("inv-")) {
      keys.add(normalized.slice(4));
    }
    if (normalized.startsWith("bill-")) {
      keys.add(normalized.slice(5));
    }
  });

  return Array.from(keys);
};

const getCustomersArray = (response) =>
  Array.isArray(response?.data)
    ? response.data
    : Array.isArray(response?.data?.data)
    ? response.data.data
    : [];

const getSalesArray = (response) =>
  Array.isArray(response?.data)
    ? response.data
    : Array.isArray(response?.data?.data)
    ? response.data.data
    : [];

const buildCustomerBillStatusMap = (customers) => {
  const statusMap = new Map();

  customers.forEach((customer) => {
    const bills = Array.isArray(customer?.bills) ? customer.bills : [];

    bills.forEach((bill) => {
      const amount = normalizeAmount(bill?.amount);
      const paidAmount = normalizeAmount(bill?.paidAmount);
      const remainingAmount = Math.max(amount - paidAmount, 0);
      const paymentStatus =
        remainingAmount <= 0 ? "Paid" : paidAmount > 0 ? "Partial" : "Pending";

      normalizeInvoiceKeys(bill?.id, bill?.reference, bill?.billId).forEach((key) => {
        statusMap.set(key, {
          paymentStatus,
          paidAmount,
          remainingAmount,
        });
      });
    });
  });

  return statusMap;
};

const normalizeSale = (sale, customerBillStatusMap) => {
  const invoiceMatch = normalizeInvoiceKeys(sale?.invoiceNo, sale?.invoiceNumber, sale?._id)
    .map((key) => customerBillStatusMap.get(key))
    .find(Boolean);

  const totalAmount = normalizeAmount(sale?.totalAmount ?? sale?.grandTotal ?? sale?.total);
  const paidAmount = invoiceMatch && invoiceMatch.paidAmount > normalizeAmount(sale?.paidAmount)
    ? invoiceMatch.paidAmount
    : normalizeAmount(sale?.paidAmount ?? sale?.cashReceived);
  const remainingAmount =
    invoiceMatch?.remainingAmount ?? Math.max(totalAmount - paidAmount, 0);
  const products = Array.isArray(sale?.products) ? sale.products : [];
  const productNames = products
    .map((product) => product?.name)
    .filter(Boolean)
    .join(", ");

  return {
    ...sale,
    reportDate: parseLocalDate(sale?.createdAt || sale?.saleDate || sale?.date),
    referenceLabel: sale?.invoiceNumber || sale?.invoiceNo || `INV-${String(sale?._id || "").slice(-6)}`,
    customerLabel: sale?.customerName || "Walk-In",
    productsLabel: productNames || "-",
    paymentTypeLabel: sale?.paymentMethod || "-",
    cashSaleAmount:
      String(sale?.paymentMethod || "").toLowerCase().includes("cash") ? totalAmount : 0,
    totalAmountValue: totalAmount,
    receivedAmountValue: paidAmount,
    remainingAmountValue: remainingAmount,
    profitValue: Number(sale?.profit ?? calculateProductProfit(sale)),
    statusLabel:
      totalAmount > 0 && paidAmount >= totalAmount
        ? "Paid"
        : invoiceMatch?.paymentStatus || sale?.paymentStatus || "Pending",
  };
};

const SalesStatementSection = () => {
  const { start: defaultStart, end: defaultEnd } = buildDefaultDates();
  const [startDate, setStartDate] = useState(formatDateInput(defaultStart));
  const [endDate, setEndDate] = useState(formatDateInput(defaultEnd));
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchSalesStatement = async () => {
      try {
        setLoading(true);

        const salesRes = await apiRequest("/sales", { method: "GET" });
        const rawSales = getSalesArray(salesRes);

        let customerBillStatusMap = new Map();

        try {
          const customersRes = await apiRequest("/customers", {
            method: "GET",
            suppressErrorLog: true,
            suppressErrorToast: true,
          });
          customerBillStatusMap = buildCustomerBillStatusMap(getCustomersArray(customersRes));
        } catch (customerError) {
          console.warn("Sales statement customer enrichment skipped:", customerError);
        }

        setSales(rawSales.map((sale) => normalizeSale(sale, customerBillStatusMap)));
      } catch (error) {
        console.error("Failed to fetch sales statement data:", error);
        setSales([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSalesStatement();
  }, []);

  const filteredSales = useMemo(() => {
    const start = parseLocalDate(startDate);
    const end = parseLocalDate(endDate);

    if (!start || !end) return [];

    end.setHours(23, 59, 59, 999);

    return sales
      .filter((sale) => sale.reportDate && sale.reportDate >= start && sale.reportDate <= end)
      .sort((a, b) => (b.reportDate?.getTime() || 0) - (a.reportDate?.getTime() || 0));
  }, [endDate, sales, startDate]);

  const totalPages = Math.max(1, Math.ceil(filteredSales.length / PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [startDate, endDate]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  const paginatedSales = useMemo(() => {
    const startIndex = (page - 1) * PAGE_SIZE;
    return filteredSales.slice(startIndex, startIndex + PAGE_SIZE);
  }, [filteredSales, page]);

  const handleExportSalesStatement = () => {
    const doc = new jsPDF("l", "mm", "a4");
    const generatedAt = new Date().toLocaleString("en-IN");

    doc.setFontSize(18);
    doc.text("Sales Statement", 14, 20);
    doc.setFontSize(11);
    doc.text("Detailed statement of sales", 14, 28);
    doc.text(`From: ${formatDisplayDate(startDate)}`, 14, 36);
    doc.text(`To: ${formatDisplayDate(endDate)}`, 14, 42);
    doc.text(`Total Records: ${filteredSales.length}`, 14, 48);
    doc.text(`Generated: ${generatedAt}`, 14, 54);

    const rows = filteredSales.map((sale) => [
      sale.referenceLabel,
      sale.reportDate ? sale.reportDate.toLocaleDateString("en-GB") : "-",
      sale.customerLabel,
      sale.productsLabel,
      sale.paymentTypeLabel,
      formatAmountForPdf(sale.cashSaleAmount),
      formatAmountForPdf(sale.totalAmountValue),
      formatAmountForPdf(sale.receivedAmountValue),
      formatAmountForPdf(sale.profitValue),
      formatAmountForPdf(sale.remainingAmountValue),
      sale.statusLabel,
    ]);

    autoTable(doc, {
      startY: 62,
      head: [[
        "Invoice No",
        "Sale Date",
        "Customer",
        "Products",
        "Payment Type",
        "Cash Sale",
        "Total Amount",
        "Received",
        "Profit",
        "Remaining",
        "Status",
      ]],
      body: rows.length
        ? rows
        : [[
            "",
            "",
            "",
            "No sales found for the selected date range.",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
          ]],
      styles: {
        fontSize: 7,
        cellPadding: 1.2,
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
        1: { cellWidth: 16 },
        2: { cellWidth: 20 },
        3: { cellWidth: 30 },
        4: { cellWidth: 18 },
        5: { cellWidth: 18, halign: "right" },
        6: { cellWidth: 20, halign: "right" },
        7: { cellWidth: 18, halign: "right" },
        8: { cellWidth: 16, halign: "right" },
        9: { cellWidth: 18, halign: "right" },
        10: { cellWidth: 14 },
      },
      margin: { left: 8, right: 8 },
    });

    doc.save(`Sales_Statement_${startDate}_to_${endDate}.pdf`);
  };

  if (loading) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white/80 p-6 text-center shadow-lg backdrop-blur">
        Loading sales statement...
      </div>
    );
  }

  const pageStart = filteredSales.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const pageEnd = Math.min(page * PAGE_SIZE, filteredSales.length);

  return (
    <div className="rounded-xl border border-gray-200 bg-white/80 shadow-lg backdrop-blur">
      <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Sales Statement</h3>
          <p className="text-sm text-gray-500">Detailed statement of sales</p>
        </div>

        <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-end sm:justify-end">
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
            onClick={handleExportSalesStatement}
            className="h-9 w-full rounded-md bg-blue-600 px-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 sm:w-auto"
          >
            Export Sales Statement
          </button>
        </div>
      </div>

      <div className="overflow-x-auto border-t border-gray-100">
        <table className="min-w-[1100px] divide-y divide-gray-200 text-xs">
          <thead className="bg-gray-50">
            <tr>
              {[
                "Invoice No",
                "Sale Date",
                "Customer",
                "Products",
                "Payment Type",
                "Cash Sale",
                "Total Amount",
                "Received",
                "Profit",
                "Remaining",
                "Status",
              ].map((heading) => (
                <th
                  key={heading}
                  className="whitespace-nowrap px-2 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-600"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 bg-white">
            {paginatedSales.length ? (
              paginatedSales.map((sale) => (
                <tr key={String(sale._id || sale.referenceLabel)} className="align-top">
                  <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                    {sale.referenceLabel}
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                    {sale.reportDate ? sale.reportDate.toLocaleDateString("en-GB") : "-"}
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 text-gray-700">{sale.customerLabel}</td>
                  <td className="min-w-32 px-2 py-2 text-gray-700 break-words">{sale.productsLabel}</td>
                  <td className="whitespace-nowrap px-2 py-2 text-gray-700">{sale.paymentTypeLabel}</td>
                  <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                    {formatCurrency(sale.cashSaleAmount)}
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                    {formatCurrency(sale.totalAmountValue)}
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                    {formatCurrency(sale.receivedAmountValue)}
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 font-medium text-emerald-700">
                    {formatCurrency(sale.profitValue)}
                  </td>
                  <td className="whitespace-nowrap px-2 py-2 text-gray-700">
                    {formatCurrency(sale.remainingAmountValue)}
                  </td>
                  <td className="whitespace-nowrap px-2 py-2">
                    <span
                      className={`inline-flex rounded-full border px-2 py-0.5 text-[11px] font-semibold ${
                        sale.statusLabel === "Paid"
                          ? "border-emerald-200 bg-emerald-100 text-emerald-700"
                          : sale.statusLabel === "Partial"
                          ? "border-amber-200 bg-amber-100 text-amber-700"
                          : "border-rose-200 bg-rose-100 text-rose-700"
                      }`}
                    >
                      {sale.statusLabel}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={11} className="px-2 py-6 text-center text-xs text-gray-500">
                  No sales found for the selected date range.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Showing {pageStart} to {pageEnd} of {filteredSales.length} records
        </p>

        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => setPage((current) => Math.max(current - 1, 1))}
            disabled={page <= 1}
            className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            Prev
          </button>
          <span className="text-center text-sm font-medium text-gray-700">
            Page {totalPages === 0 ? 0 : page} of {totalPages}
          </span>
          <button
            type="button"
            onClick={() => setPage((current) => Math.min(current + 1, totalPages))}
            disabled={page >= totalPages}
            className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesStatementSection;
