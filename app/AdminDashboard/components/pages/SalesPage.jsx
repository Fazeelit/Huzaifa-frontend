"use client";

import React, { useEffect, useState } from "react";
import SalesFilters from "../sales/SalesFilters";
import SalesTable from "../sales/SalesTable";
import SalesStates from "../sales/SalesStates";
import InvoiceDetailsModal from "../sales/InvoiceDetailsModal";
import DeleteSalesModal from "../sales/DeleteSalesModal";
import { apiRequest } from "../../authservice/api";
import { usePermissions } from "../../authservice/usePermissions";
import { blockedButtonClass, blockedButtonProps } from "../../authservice/permissions";
import { Printer, Trash2 } from "lucide-react";

const roundReceiptToWhole = (value) => {
  const amount = Number(value || 0);
  if (!Number.isFinite(amount)) return 0;

  const sign = amount < 0 ? -1 : 1;
  const [wholePartRaw, decimalPartRaw = ""] = Math.abs(amount).toString().split(".");
  if (!decimalPartRaw) return sign * Number(wholePartRaw || 0);

  const digits = decimalPartRaw.split("").map((digit) => Number(digit));
  let carry = 0;

  for (let index = digits.length - 1; index >= 0; index -= 1) {
    const current = digits[index] + carry;
    carry = current > 5 ? 1 : 0;
  }

  return sign * (Number(wholePartRaw || 0) + carry);
};

const formatRoundedReceiptAmount = (value) => roundReceiptToWhole(value).toLocaleString();

const URDU_RECEIPT_FONT_STACK =
  `"Urdu Noori Nastaliq", "Noori Nastaliq", "Jameel Noori Nastaleeq", "Noto Nastaliq Urdu", serif`;

const formatReceiptDate = (value = new Date()) => {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours24 = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const suffix = hours24 >= 12 ? "PM" : "AM";
  const hours12 = String(hours24 % 12 || 12).padStart(2, "0");
  return `${day}/${month}/${year}   ${hours12}:${minutes} ${suffix}`;
};

const inferDiscountPercentageLabel = (subtotal, discount) => {
  const safeSubtotal = Number(subtotal || 0);
  const safeDiscount = Number(discount || 0);

  if (safeSubtotal <= 0 || safeDiscount <= 0) return "0";

  for (let percentage = 0; percentage <= 100; percentage += 1) {
    if (Math.round((safeSubtotal * percentage) / 100) === Math.round(safeDiscount)) {
      return String(percentage);
    }
  }

  for (let percentage = 0; percentage <= 100; percentage += 0.01) {
    const roundedPercentage = Number(percentage.toFixed(2));
    if (Math.round((safeSubtotal * roundedPercentage) / 100) === Math.round(safeDiscount)) {
      return roundedPercentage.toFixed(2);
    }
  }

  const calculated = (safeDiscount / safeSubtotal) * 100;
  return Number.isInteger(calculated) ? calculated.toFixed(0) : calculated.toFixed(2);
};

const getChargedSaleQuantity = (product = {}) => {
  const baseQuantity = Number(product?.chargedQuantity ?? product?.quantity ?? product?.qty ?? 0);
  const returnedQuantity = Math.max(
    Number(
      product?.returnedQuantity ??
        product?.returnedQty ??
        product?.returnQty ??
        product?.quantityReturned ??
        0
    ) || 0,
    0
  );
  return Math.max(baseQuantity - returnedQuantity, 0);
};

const getReturnedSaleQuantity = (product = {}) =>
  Math.max(
    Number(
      product?.returnedQuantity ??
        product?.returnedQty ??
        product?.returnQty ??
        product?.quantityReturned ??
        0
    ) || 0,
    0
  );

const getInvoiceAmount = (quantity, salePrice) =>
  Number((Math.max(Number(quantity) || 0, 0) * (Number(salePrice) || 0)).toFixed(2));

const getSaleLineUnitPrice = (product = {}) =>
  Number(product?.salePrice ?? product?.price ?? product?.retailSalePrice ?? 0) || 0;

const calculateCurrentSaleInvoiceTotal = (sale) =>
  Number(
    (
      (Array.isArray(sale?.products) ? sale.products : []).reduce(
        (sum, product) => sum + getInvoiceAmount(getChargedSaleQuantity(product), getSaleLineUnitPrice(product)),
        0
      ) || 0
    ).toFixed(2)
  );

const calculateCurrentSaleNetTotal = (sale) =>
  Number(
    Math.max(calculateCurrentSaleInvoiceTotal(sale) - (Number(sale?.discount) || 0), 0).toFixed(2)
  );

const derivePaymentStatus = (paidAmount, totalAmount) => {
  const paid = Number(paidAmount) || 0;
  const total = Number(totalAmount) || 0;
  if (paid <= 0) return "Pending";
  if (paid >= total) return "Paid";
  return "Partial";
};

const deriveBillStatus = (paidAmount, totalAmount) => {
  const paid = Number(paidAmount) || 0;
  const total = Number(totalAmount) || 0;
  if (paid <= 0) return "pending";
  if (paid >= total) return "paid";
  return "partial";
};

const toNumber = (value) => {
  if (typeof value === "number") return value;
  const normalized = String(value || "").replace(/,/g, "");
  const match = normalized.match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : 0;
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

const getCustomersArray = (response) => {
  if (Array.isArray(response?.customers)) return response.customers;
  if (Array.isArray(response?.data?.customers)) return response.data.customers;
  if (Array.isArray(response?.data)) return response.data;
  return [];
};

const getProductsArray = (response) => {
  if (Array.isArray(response?.products)) return response.products;
  if (Array.isArray(response?.data?.products)) return response.data.products;
  if (Array.isArray(response?.data)) return response.data;
  return [];
};

const normalizeProductKey = (value) => String(value || "").trim().toLowerCase();

const normalizeInvoiceKeys = (...values) => {
  const keys = new Set();

  values
    .map((value) => String(value || "").trim())
    .filter(Boolean)
    .forEach((value) => {
      const normalized = value.toLowerCase();
      keys.add(normalized);

      if (normalized.startsWith("bill-")) {
        keys.add(normalized.slice(5));
      }
    });

  return Array.from(keys);
};

const buildCustomerBillStatusMap = (customers) => {
  const statusMap = new Map();

  customers.forEach((customer) => {
    const bills = Array.isArray(customer?.bills) ? customer.bills : [];

    bills.forEach((bill) => {
      const amount = toNumber(bill?.amount);
      const paidAmount = toNumber(bill?.paidAmount);
      const remainingAmount = Math.max(amount - paidAmount, 0);
      const billPaymentStatus =
        remainingAmount <= 0 ? "Paid" : paidAmount > 0 ? "Partial" : "Pending";

      normalizeInvoiceKeys(bill?.id, bill?.reference, bill?.billId).forEach((key) => {
        statusMap.set(key, {
          paymentStatus: billPaymentStatus,
          paidAmount,
          remainingAmount,
        });
      });
    });
  });

  return statusMap;
};

const SalesPage = () => {
  const { crud } = usePermissions();
  const { canEdit, canDelete } = crud("SALE");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sales, setSales] = useState([]);
  const [selectedSaleIds, setSelectedSaleIds] = useState([]);
  const [selectedSale, setSelectedSale] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteTargetSaleIds, setDeleteTargetSaleIds] = useState([]);
  const [isReturningItems, setIsReturningItems] = useState(false);
  const [isSavingStatuses, setIsSavingStatuses] = useState(false);
  const [isDeletingSale, setIsDeletingSale] = useState(false);
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalSales: 0,
    todayProfit: 0,
    monthlyProfit: 0,
    totalProfit: 0,
    avgTransaction: 0,
  });

  const calculateSaleProfit = (sale) => {
    const totalPurchaseAmount = (Array.isArray(sale?.products) ? sale.products : []).reduce(
      (sum, product) => {
        const quantity = Math.max(
          Number(product?.quantity || product?.qty || 0) -
            Math.max(
              Number(
                product?.returnedQuantity ??
                  product?.returnedQty ??
                  product?.returnQty ??
                  product?.quantityReturned ??
                  0
              ) || 0,
              0
            ),
          0
        );
        return sum + (Number(product?.purchasePrice || 0) * quantity);
      },
      0
    );

    return Number((calculateCurrentSaleNetTotal(sale) - totalPurchaseAmount).toFixed(2));
  };

  useEffect(() => {
    fetchSales();
  }, [search, filter, startDate, endDate]);

  const fetchSales = async ({ silent = false } = {}) => {
    try {
      const [salesRes, customersRes] = await Promise.all([
        apiRequest("/sales", {
          method: "GET",
          suppressErrorLog: true,
          suppressErrorToast: silent,
        }),
        apiRequest("/customers", {
          method: "GET",
          suppressErrorLog: true,
          suppressErrorToast: true,
        }),
      ]);
      if (!salesRes?.success) {
        setSales([]);
        setSelectedSaleIds([]);
        setStats({
          totalRevenue: 0,
          totalSales: 0,
          avgTransaction: 0,
          totalProfit: 0,
          todayProfit: 0,
          monthlyProfit: 0,
        });
        return;
      }

      const rawData = Array.isArray(salesRes.data) ? salesRes.data : [];
      const customerBillStatusMap = buildCustomerBillStatusMap(
        getCustomersArray(customersRes)
      );
      const enrichedSales = rawData.map((sale) => {
        const invoiceMatch = normalizeInvoiceKeys(
          sale?.invoiceNo,
          sale?.invoiceNumber,
          sale?._id
        )
          .map((key) => customerBillStatusMap.get(key))
          .find(Boolean);

        return {
          ...sale,
          totalAmount: calculateCurrentSaleNetTotal(sale),
          paidAmount:
            invoiceMatch && invoiceMatch.paidAmount > toNumber(sale?.paidAmount)
              ? invoiceMatch.paidAmount
              : sale?.paidAmount,
          paymentStatus: invoiceMatch?.paymentStatus || sale?.paymentStatus,
          profit: calculateSaleProfit(sale),
        };
      });
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const currentMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
      const nextMonthStart = new Date(today.getFullYear(), today.getMonth() + 1, 1);
      const isFirstDayOfMonth = today.getDate() === 1;

      const todayProfit = enrichedSales
        .filter((sale) => {
          const saleDate = parseLocalDate(sale.saleDate || sale.createdAt);
          return Boolean(saleDate && saleDate >= today);
        })
        .reduce((sum, sale) => sum + sale.profit, 0);

      const currentMonthSales = enrichedSales.filter((sale) => {
        const saleDate = parseLocalDate(sale.saleDate || sale.createdAt);
        return Boolean(
          saleDate && saleDate >= currentMonthStart && saleDate < nextMonthStart
        );
      });

      const monthlyProfit = isFirstDayOfMonth
        ? 0
        : currentMonthSales.reduce((sum, sale) => sum + sale.profit, 0);

      let data = enrichedSales;

      // 🔍 Search by invoice / patient / product
      if (search) {
        const q = search.toLowerCase();
        data = data.filter(
          (s) =>
            s.invoiceNumber?.toLowerCase().includes(q) ||
            s._id?.slice(-6).toLowerCase().includes(q) ||
            s.customerName?.toLowerCase().includes(q) ||
            s.products?.some((p) => p.name.toLowerCase().includes(q))
        );
      }

      // 📅 Today filter
      if (filter === "today") {
        const today = new Date().toDateString();
        data = data.filter(
          (s) => new Date(s.createdAt).toDateString() === today
        );
      }

      // 📆 Date range filter
      if (startDate) {
        data = data.filter(
          (s) => new Date(s.createdAt) >= new Date(startDate)
        );
      }
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59);
        data = data.filter((s) => new Date(s.createdAt) <= end);
      }

      setSales(data);
      setSelectedSaleIds((prev) =>
        prev.filter((id) => data.some((sale) => String(sale._id || sale.invoiceNumber || "") === id))
      );

      const totalRevenue = isFirstDayOfMonth
        ? 0
        : currentMonthSales.reduce((sum, sale) => sum + Number(sale.totalAmount || 0), 0);
      const totalProfit = isFirstDayOfMonth
        ? 0
        : currentMonthSales.reduce((sum, sale) => sum + Number(sale.profit || 0), 0);

      setStats({
        totalRevenue,
        totalSales: data.length,
        avgTransaction: data.length ? totalRevenue / data.length : 0,
        totalProfit,
        todayProfit,
        monthlyProfit,
      });
    } catch (error) {
      setSales([]);
      setSelectedSaleIds([]);
      setStats({
        totalRevenue: 0,
        totalSales: 0,
        avgTransaction: 0,
        totalProfit: 0,
        todayProfit: 0,
        monthlyProfit: 0,
      });
    }
  };

  const syncReturnedSaleToCustomerBill = async ({ sale, resolvedSale, returnedValueDelta }) => {
    const customerId = String(
      sale?.customerId || sale?.customer?._id || sale?.customer?.id || ""
    ).trim();

    if (!customerId || Number(returnedValueDelta || 0) <= 0) {
      return;
    }

    const customerResponse = await apiRequest(`/customers/${customerId}`, { method: "GET" });
    if (!customerResponse?.success || !customerResponse?.customer) {
      return;
    }

    const customer = customerResponse.customer;
    const existingBills = Array.isArray(customer?.bills) ? customer.bills : [];
    const saleBillKeys = normalizeInvoiceKeys(
      sale?.invoiceNo,
      sale?.invoiceNumber,
      resolvedSale?.invoiceNo,
      resolvedSale?.invoiceNumber,
      sale?._id
    );

    let matchedBill = false;
    const nextBills = existingBills.map((bill) => {
      const billKeys = normalizeInvoiceKeys(bill?.id, bill?.reference, bill?.billId);
      if (!saleBillKeys.some((key) => billKeys.includes(key))) {
        return bill;
      }

      matchedBill = true;
      const nextAmount = Math.max(Number(resolvedSale?.totalAmount || 0), 0);
      const nextPaidAmount = Math.min(toNumber(bill?.paidAmount), nextAmount);

      return {
        ...bill,
        amount: String(nextAmount),
        paidAmount: nextPaidAmount,
        status: deriveBillStatus(nextPaidAmount, nextAmount),
      };
    });

    if (!matchedBill) {
      return;
    }

    const nextTotalSpent = nextBills.reduce((sum, bill) => sum + toNumber(bill?.amount), 0);
    const nextTotalDue = nextBills.reduce(
      (sum, bill) => sum + Math.max(toNumber(bill?.amount) - toNumber(bill?.paidAmount), 0),
      0
    );

    await apiRequest(`/customers/${customerId}`, {
      method: "PUT",
      data: {
        ...customer,
        bills: nextBills,
        totalSpent: nextTotalSpent,
        totalDue: nextTotalDue,
      },
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchSales({ silent: true });
    }, 5000);

    const handleFocus = () => fetchSales({ silent: true });
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchSales({ silent: true });
      }
    };

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [search, filter, startDate, endDate]);

  const openPrintWindow = (printSales, title) => {
    if (!printSales?.length) return;
    const win = window.open("", "_blank", "width=420,height=700");
    win.document.write(`
      <html>
      <head>
        <title>${title}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap');
          :root {
            --paper-width: 90mm;
            --receipt-padding-x: 2.5mm;
            --receipt-padding-top: 6mm;
            --receipt-padding-bottom: 4mm;
          }
          @page {
            size: 90mm auto;
            margin: 0;
          }
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            box-sizing: border-box;
          }
          html {
            width: 90mm;
            min-width: 90mm;
            max-width: 90mm;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
          }
          body {
            font-family: Arial, sans-serif;
            font-size: 12px;
            line-height: 1.25;
            padding: 0;
            margin: 0;
            width: 90mm;
            min-width: 90mm;
            max-width: 90mm;
            background: #fff;
            overflow-x: hidden;
          }
          .invoice-container {
            width: 100%;
            max-width: 90mm;
            margin: 0;
            padding: var(--receipt-padding-top) var(--receipt-padding-x) var(--receipt-padding-bottom);
            overflow-wrap: anywhere;
            color: #000;
          }
          .bill-header {
            text-align: center;
            margin-bottom: 6px;
            border-bottom: 1px solid #000;
            padding-bottom: 4px;
          }
          .shop-name {
            font-size: 35px;
            font-weight: 700;
            font-style: italic;
            font-family: "Times New Roman", Times, serif;
            color: #000;
            line-height: 1.05;
            direction: rtl;
            margin-bottom: 6px;
          }
          .counter-sale {
            font-size: 14px;
            font-weight: 700;
            margin-top: 2px;
          }
          .bill-meta {
            margin-bottom: 2px;
            font-size: 13px;
          }
          .section-copy {
            margin-top: 6px;
            font-size: 13px;
          }
          .divider {
            border-top: 1px dashed #000;
            margin: 6px 0;
          }
          .items-table {
            width: 100%;
            margin-top: 4px;
            border-collapse: collapse;
            table-layout: fixed;
            font-size: 14px;
          }
          .items-table th,
          .items-table td {
            border-top: 1px solid #000;
            border-bottom: 1px solid #000;
            border-left: 0;
            border-right: 0;
            padding: 4px;
            vertical-align: top;
          }
          .items-table tr.product-row td:not(.item-name) {
            vertical-align: middle;
          }
          .items-table th {
            font-weight: 700;
            text-align: center;
          }
          .items-table tr.product-row td {
            border-top: 1px dotted #000;
            border-bottom: 1px dotted #000;
          }
          .items-table th:first-child,
          .items-table td:first-child {
            width: 46%;
            text-align: left;
            word-break: break-word;
          }
          .items-table td.item-name {
            font-family: ${URDU_RECEIPT_FONT_STACK};
          }
          .items-table th:nth-child(2),
          .items-table td:nth-child(2) {
            width: 12%;
            text-align: center;
          }
          .items-table th:nth-child(3),
          .items-table td:nth-child(3),
          .items-table th:nth-child(4),
          .items-table td:nth-child(4) {
            width: 21%;
            text-align: center;
          }
          .items-table .summary-label {
            font-weight: 700;
            text-align: right;
          }
          .items-table .summary-value {
            font-weight: 700;
            text-align: center;
          }
          .item-details {
            display: flex;
            justify-content: space-between;
            gap: 8px;
            font-size: 13px;
            margin: 2px 0;
          }
          .customer-line {
            font-size: 13px;
            font-weight: 700;
          }
          .customer-name {
            margin-top: 2px;
            font-size: 13px;
          }
          .total-row {
            font-weight: 700;
            font-size: 16px;
          }
          .footer {
            margin-top: 8px;
            text-align: center;
            padding-top: 4px;
          }
          .thanks {
            display: inline-block;
            background: #000;
            color: #fff;
            padding: 4px 12px;
            margin-bottom: 4px;
            font-weight: 700;
            font-size: 16px;
          }
          .footer-contact {
            margin-top: 8px;
            font-size: 12px;
            white-space: nowrap;
          }
          .page-break {
            page-break-after: always;
          }
          @media print {
            html,
            body {
              width: 90mm !important;
              min-width: 90mm !important;
              max-width: 90mm !important;
              overflow-x: hidden !important;
            }
            body * {
              visibility: hidden;
            }
            .invoice-container,
            .invoice-container * {
              visibility: visible;
            }
            .invoice-container {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              max-width: 90mm;
              margin: 0;
            }
          }
        </style>
      </head>
      <body>
        ${printSales
          .map((s, saleIndex) => {
            const invoiceNo = s.invoiceNumber || `INV-${String(s._id || "").slice(-6)}`;
            const products = Array.isArray(s.products) ? s.products : [];
            const soldProducts = products
              .map((p) => {
                const qty = getChargedSaleQuantity(p);
                const soldQty = qty;
                return { ...p, soldQty };
              })
              .filter((p) => p.soldQty > 0);

            const subtotal =
              Number(s.subtotal) ||
              soldProducts.reduce(
                (sum, p) => sum + Number(p.salePrice || p.price || 0) * Number(p.soldQty || 0),
                0
              );
            const discount = Number(s.discount || 0);
            const total = Number(s.totalAmount || 0);
            const paidAmount = Number(s.paidAmount || 0);
            const returnAmount = Math.max(paidAmount - total, 0);
            const discountPercentageLabel = inferDiscountPercentageLabel(subtotal, discount);

            return `
                <div class="invoice-container bg-white shadow p-4 mx-auto">
                  <div class="bill-header">
                    <div class="shop-name">Huzaifa Autos Feroza</div>
                    <br>
                    <div class="counter-sale">(Counter Sale)</div>
                    <div class="counter-sale">Mobile #: 0346-3696038</div>
                  </div>

                  <div class="bill-meta">Invoice #: ${invoiceNo}</div>
                  <div class="bill-meta">Date: ${formatReceiptDate(s.createdAt)}</div>

                  <div class="section-copy">
                    <div class="customer-line">CUSTOMER: ${s.customerName || "Walk-in"}</div>
                  </div>

                  <div class="section-copy">
                    <table class="items-table">
                      <thead>
                        <tr>
                          <th>Item Name</th>
                          <th>QTY</th>
                          <th>Price</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${soldProducts
                          .map((item, idx) => {
                            const qty = Number(item.chargedDisplayQty ?? item.soldQty ?? 0);
                            const freeQty = Math.max(Math.floor(Number(item.freeQty) || 0), 0);
                            const price = Number(item.salePrice || item.price || 0);
                            const lineTotal = price * qty;

                            return `
                              <tr class="product-row" key="${item._id || item.id || idx}">
                                <td class="item-name">${item.name || "-"}${freeQty > 0 ? `<div class="item-subtext">Free: ${freeQty}</div>` : ""}</td>
                                <td>${qty}</td>
                                <td> ${price.toLocaleString()}</td>
                                <td> ${lineTotal.toLocaleString()}</td>
                              </tr>
                            `;
                          })
                          .join("")}
                        <tr>
                          <td colspan="3" class="summary-label">Subtotal:</td>
                          <td class="summary-value"> ${formatRoundedReceiptAmount(subtotal)}</td>
                        </tr>
                        ${discount > 0
                          ? `
                            <tr>
                              <td colspan="3" class="summary-label">Discount ( ${discountPercentageLabel}%):</td>
                              <td class="summary-value">- ${Number(discount || 0).toLocaleString()}</td>
                            </tr>
                          `
                          : ""}
                      </tbody>
                    </table>
                  </div>

                  <div class="item-details total-row">
                    <span>TOTAL:</span>
                    <span> ${formatRoundedReceiptAmount(total)}</span>
                  </div>

                  <div class="item-details">
                    <span>Change Pakistani Rupees:</span>
                    <span> ${Number(paidAmount || 0).toLocaleString()}</span>
                  </div>

                  ${returnAmount > 0 ? `
                    <div class="item-details">
                      <span>Return Pakistani Rupees:</span>
                      <span> ${Number(returnAmount || 0).toLocaleString()}</span>
                    </div>
                  ` : ""}

                  <div class="footer">
                    <div class="thanks">آپکی تشریف آوری کا شکریہ</div>
                    <div class="divider"></div>
                    <div class="footer-contact">
                      Rehan Software Solution, Mob#: 0345-8019548
                    </div>
                  </div>
                </div>
                ${saleIndex < printSales.length - 1 ? '<div class="page-break"></div>' : ""}
              `;
          })
          .join("")}
<script>
  window.print();
          window.onafterprint = () => window.close();
</script>
      </body >
      </html >
  `);
    win.document.close();
  };

  // Print filtered sales in bill layout
  const handlePrint = () => {
    if (!sales.length) return;
    const title = search
      ? `Invoice Report: ${search}`
      : startDate || endDate
        ? `Sales Report (${startDate || "Start"} to ${endDate || "End"})`
        : `Sales Report (${filter === "today" ? "Today" : "All"})`;
    openPrintWindow(sales, title);
  };

  const handlePrintSingleInvoice = (sale) => {
    if (!sale) return;
    const invoiceNo = sale.invoiceNumber || `INV-${String(sale._id || "").slice(-6)}`;
    openPrintWindow([sale], `Invoice ${invoiceNo}`);
  };

  const handleReturnItems = async (sale, selectedIndexes) => {
    if (!sale?._id || !Array.isArray(selectedIndexes) || !selectedIndexes.length) return;
    try {
      setIsReturningItems(true);
      const res = await apiRequest(`/sales/returnItems/${sale._id}`, {
        method: "PUT",
        data: { selectedIndexes },
      });

      if (res?.success && res?.data) {
        setSelectedSale(res.data);
        await fetchSales({ silent: true });
      }
    } catch (error) {
      console.error("Failed to return sale items", error);
    } finally {
      setIsReturningItems(false);
    }
  };

  const handleUpdateItemStatuses = async (sale, updates) => {
    if (!sale?._id || !Array.isArray(updates) || !updates.length) return;
    try {
      setIsSavingStatuses(true);
      const baseProducts = Array.isArray(sale.products) ? sale.products : [];
      const updatesByIndex = new Map(
        updates
          .map((entry) => [Number(entry?.index), entry])
          .filter(([index]) => Number.isInteger(index))
      );
      const stockRestockByProduct = new Map();

      let returnedValueDelta = 0;

      const updatedProducts = baseProducts.map((product, index) => {
        const update = updatesByIndex.get(index);
        if (!update) return product;

        const lineQuantity = Math.max(
          Number(product?.quantity ?? product?.qty ?? update?.quantity ?? update?.chargedQuantity ?? 0) || 0,
          0
        );
        const currentReturnedQty = getReturnedSaleQuantity(product);
        const nextReturnedQty = Math.max(
          0,
          Math.min(Number(update?.returnedQuantity ?? currentReturnedQty) || 0, lineQuantity)
        );
        const unitSalePrice = Number(product?.salePrice ?? product?.price ?? 0) || 0;
        const returnedQtyDelta = nextReturnedQty - currentReturnedQty;
        returnedValueDelta += getInvoiceAmount(
          returnedQtyDelta,
          unitSalePrice
        );

        if (returnedQtyDelta !== 0) {
          const productIdCandidate = String(
            product?.productId?._id ||
              product?.productId ||
              update?.productId ||
              update?.itemId ||
              ""
          ).trim();
          const productNameKey = normalizeProductKey(product?.name);
          const stockKey = productIdCandidate || productNameKey || `line-${index}`;
          const existingAdjustment = stockRestockByProduct.get(stockKey) || {
            productIdCandidate,
            productNameKey,
            delta: 0,
          };
          existingAdjustment.delta += returnedQtyDelta;
          stockRestockByProduct.set(stockKey, existingAdjustment);
        }

        return {
          ...product,
          status: String(update?.status || (nextReturnedQty > 0 ? "RETURNED" : "SOLD")).toUpperCase(),
          returnedQuantity: nextReturnedQty,
        };
      });

      const currentReturnedValue = baseProducts.reduce(
        (sum, product) =>
          sum +
          getInvoiceAmount(
            getReturnedSaleQuantity(product),
            Number(product?.salePrice ?? product?.price ?? 0) || 0
          ),
        0
      );

      const nextReturnedValue = updatedProducts.reduce(
        (sum, product) =>
          sum +
          getInvoiceAmount(
            getReturnedSaleQuantity(product),
            Number(product?.salePrice ?? product?.price ?? 0) || 0
          ),
        0
      );

      const originalSubtotal = Number(
        (Number(sale?.subtotal) || Number(sale?.totalAmount) || 0) + currentReturnedValue
      );
      const originalTotalAmount = Number(
        (Number(sale?.totalAmount) || 0) + currentReturnedValue
      );
      const subtotal = Number(
        Math.max(originalSubtotal - nextReturnedValue, 0).toFixed(2)
      );
      const totalAmount = Number(
        Math.max(originalTotalAmount - nextReturnedValue, 0).toFixed(2)
      );
      const paidAmount = Number(
        Math.max((Number(sale?.paidAmount) || 0) - returnedValueDelta, 0).toFixed(2)
      );
      const returnedAmount = Number(
        Math.max(nextReturnedValue, 0).toFixed(2)
      );
      const returnAmount = Number(Math.max(paidAmount - totalAmount, 0).toFixed(2));
      const paymentStatus = derivePaymentStatus(paidAmount, totalAmount);

      const requestBody = {
        ...sale,
        products: updatedProducts,
        subtotal,
        totalAmount,
        paidAmount,
        returnedAmount,
        returnAmount,
        paymentStatus,
      };

      delete requestBody._id;
      delete requestBody.createdAt;
      delete requestBody.updatedAt;
      delete requestBody.__v;

      const optimisticSale = {
        ...sale,
        _id: sale._id,
        products: updatedProducts,
        subtotal,
        totalAmount,
        paidAmount,
        returnedAmount,
        returnAmount,
        paymentStatus,
      };

      const res = await apiRequest(`/sales/updateSale/${sale._id}`, {
        method: "PUT",
        data: requestBody,
      });

      if (res?.success) {
        const resolvedSale = res?.data || res?.sale || optimisticSale;

        if (stockRestockByProduct.size > 0) {
          const productsResponse = await apiRequest("/products", { method: "GET" });
          const allProducts = getProductsArray(productsResponse);
          const productsById = new Map(
            allProducts
              .map((product) => [String(product?._id || "").trim(), product])
              .filter(([id]) => id)
          );
          const productsByName = new Map();

          allProducts.forEach((product) => {
            const key = normalizeProductKey(product?.name);
            if (key && !productsByName.has(key)) {
              productsByName.set(key, product);
            }
          });

          await Promise.all(
            Array.from(stockRestockByProduct.values()).map(async ({ productIdCandidate, productNameKey, delta }) => {
              const matchedProduct =
                productsById.get(productIdCandidate) ||
                productsByName.get(productNameKey);

              if (!matchedProduct?._id || !delta) {
                return;
              }

              await apiRequest(`/products/updateProduct/${matchedProduct._id}`, {
                method: "PUT",
                data: {
                  ...matchedProduct,
                  stock: Math.max(Number(matchedProduct?.stock ?? 0) + Number(delta || 0), 0),
                },
              });
            })
          );
        }

        await syncReturnedSaleToCustomerBill({
          sale,
          resolvedSale,
          returnedValueDelta,
        });

        setSelectedSale(resolvedSale);
        setSales((prev) =>
          prev.map((entry) =>
            String(entry?._id || "") === String(sale?._id || "")
              ? {
                  ...entry,
                  ...resolvedSale,
                  products: Array.isArray(resolvedSale?.products)
                    ? resolvedSale.products
                    : optimisticSale.products,
                }
              : entry,
          ),
        );
        await fetchSales({ silent: true });
      }
    } catch (error) {
      console.error("Failed to update item statuses", error);
    } finally {
      setIsSavingStatuses(false);
    }
  };

  const handleDeleteSale = async (sale) => {
    if (!canDelete || !sale?._id) return;
    if (!sale?._id) return;
    setDeleteTargetSaleIds([String(sale._id)]);
    setDeleteModalOpen(true);
  };

  const confirmDeleteSales = async () => {
    if (!canDelete || !deleteTargetSaleIds.length) return;
    try {
      setIsDeletingSale(true);
      const deleteResults = await Promise.allSettled(
        deleteTargetSaleIds.map((saleId) =>
          apiRequest(`/sales/deleteSale/${saleId}`, {
            method: "DELETE",
          })
        )
      );

      const deletedIds = deleteResults
        .map((result, index) => {
          if (result.status !== "fulfilled" || !result.value?.success) {
            return null;
          }

          return deleteTargetSaleIds[index];
        })
        .filter(Boolean);

      const hasFailure = deletedIds.length !== deleteTargetSaleIds.length;

      setSelectedSaleIds((prev) => prev.filter((id) => !deletedIds.includes(id)));
      setSelectedSale((current) =>
        current && deletedIds.includes(String(current._id || current.invoiceNumber || ""))
          ? null
          : current
      );
      await fetchSales({ silent: true });

      if (hasFailure) {
        alert("Some selected sales could not be deleted.");
      }
    } catch (error) {
      console.error("Failed to delete sale", error);
    } finally {
      setIsDeletingSale(false);
      setDeleteModalOpen(false);
      setDeleteTargetSaleIds([]);
    }
  };

  const handleDeleteSelectedSales = () => {
    if (!selectedSaleIds.length) return;
    setDeleteTargetSaleIds([...selectedSaleIds]);
    setDeleteModalOpen(true);
  };

  return (
    <main className="space-y-6 rounded-3xl border border-slate-200/70 bg-gradient-to-br from-cyan-50 via-white to-sky-100 p-4 shadow-sm sm:p-6">
      <div className="flex flex-col gap-3 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-sm backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Sales History</h1>

        <button
          onClick={handlePrint}
          disabled={!sales.length}
          className={`inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold text-white transition sm:w-auto ${
            sales.length
              ? "bg-gradient-to-r from-sky-600 to-cyan-600 shadow-sm shadow-cyan-200/70 hover:from-sky-700 hover:to-cyan-700"
              : "bg-gray-400"
          }`}
        >
          <Printer size={18} /> Print
        </button>
      </div>

      <SalesStates stats={stats} />
      <SalesFilters
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <div className="flex justify-end">
        {selectedSaleIds.length > 0 && (
          <button
            onClick={handleDeleteSelectedSales}
            disabled={isDeletingSale || !canDelete}
            className={`inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border px-4 text-sm font-semibold text-white transition focus:outline-none focus-visible:bg-white focus-visible:text-red-600 focus-visible:border-red-600 sm:w-auto ${
              isDeletingSale
                ? "cursor-not-allowed border-red-300 bg-red-300"
                : "border-transparent bg-gradient-to-r from-red-600 to-rose-600 shadow-sm shadow-red-200/70 hover:from-red-700 hover:to-rose-700"
            } ${blockedButtonClass} blocked-action`}
            {...blockedButtonProps(canDelete)}
          >
            <Trash2 size={18} />
            Delete Selected ({selectedSaleIds.length})
          </button>
        )}
      </div>
      <SalesTable
        sales={sales}
        onInvoiceClick={setSelectedSale}
        selectedSaleIds={selectedSaleIds}
        setSelectedSaleIds={setSelectedSaleIds}
      />
      <InvoiceDetailsModal
        sale={selectedSale}
        onClose={() => setSelectedSale(null)}
        onPrint={handlePrintSingleInvoice}
        onReturn={handleReturnItems}
        onUpdateStatuses={handleUpdateItemStatuses}
        onDelete={handleDeleteSale}
        canEdit={canEdit}
        canDelete={canDelete}
        isReturning={isReturningItems}
        isSavingStatuses={isSavingStatuses}
        isDeleting={isDeletingSale}
      />
      <DeleteSalesModal
        isOpen={deleteModalOpen}
        message={`Delete ${deleteTargetSaleIds.length} selected sale record${deleteTargetSaleIds.length > 1 ? "s" : ""}? This will reverse stock for non-returned items.`}
        onClose={() => {
          if (isDeletingSale) return;
          setDeleteModalOpen(false);
          setDeleteTargetSaleIds([]);
        }}
        onConfirm={confirmDeleteSales}
        isDeleting={isDeletingSale}
      />
    </main>
  );
};

export default SalesPage;



