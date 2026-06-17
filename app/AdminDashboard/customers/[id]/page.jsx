"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  CreditCard,
  Edit3,
  FileText,
  IdCard,
  Mail,
  MapPin,
  Package,
  Phone,
  Printer,
  Trash2,
  User,
  Wallet,
} from "lucide-react";
import { apiRequest } from "../../authservice/api";
import { hasPermission, readStoredAuth } from "../../authservice/auth";

const parseAmount = (value) => {
  if (typeof value === "number") return value;
  const normalized = String(value || "").replace(/,/g, "");
  const match = normalized.match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : 0;
};

const formatRs = (value) => `Rs. ${Number(value || 0).toLocaleString("en-IN")}`;

const formatDate = (value) => {
  if (!value) return "N/A";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const toDateInputValue = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getDefaultDateRange = () => {
  const endDate = new Date();
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - 29);
  return {
    from: toDateInputValue(startDate),
    to: toDateInputValue(endDate),
  };
};

const normalizeCustomer = (raw = {}) => ({
  ...raw,
  id: raw._id || raw.id,
  phone: raw.phone || raw.mobile || "",
  mobile: raw.mobile || raw.phone || "",
  bills: Array.isArray(raw.bills) ? raw.bills : [],
  paymentHistory: Array.isArray(raw.paymentHistory) ? raw.paymentHistory : [],
  products: Array.isArray(raw.products) ? raw.products : [],
  bankDetails: raw.bankDetails || {
    bankName: "",
    accountTitle: "",
    accountNumber: "",
    iban: "",
    swiftCode: "",
  },
  totalDue: Number(raw.totalDue || 0) || 0,
  totalSpent: Number(raw.totalSpent || 0) || 0,
  creditLimit: Number(raw.creditLimit || 0) || 0,
});

const getNormalizedDateValue = (value) => {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  date.setHours(0, 0, 0, 0);
  return date.getTime();
};

const getTransactionSortValue = (timestamp, fallbackDate = "") => {
  const first = new Date(timestamp || fallbackDate);
  if (!Number.isNaN(first.getTime())) return first.getTime();
  return 0;
};

const getTransactionTypePriority = (type) => {
  const normalized = String(type || "").trim().toLowerCase();
  if (normalized === "payment") return 1;
  if (normalized === "bill") return 0;
  return -1;
};

const getSalePaymentStatus = (paidAmount, totalAmount) => {
  const paid = Number(paidAmount || 0);
  const total = Number(totalAmount || 0);
  if (paid <= 0) return "Pending";
  if (total > 0 && paid >= total) return "Paid";
  return "Partial";
};

const formatStatusLabel = (value, fallback = "Pending") => {
  const normalized = String(value || fallback).trim();
  if (!normalized) return fallback;
  return normalized.charAt(0).toUpperCase() + normalized.slice(1).toLowerCase();
};

const getStatusBadgeClassName = (status) => {
  const normalized = String(status || "").trim().toLowerCase();
  if (normalized === "paid" || normalized === "received") {
    return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300";
  }
  if (normalized === "partial") {
    return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300";
  }
  return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
};

const stripSaleMetaFields = (sale) => {
  const requestBody = { ...sale };
  delete requestBody._id;
  delete requestBody.createdAt;
  delete requestBody.updatedAt;
  delete requestBody.__v;
  return requestBody;
};

const extractSalesArray = (response) =>
  Array.isArray(response?.data)
    ? response.data
    : Array.isArray(response?.sales)
      ? response.sales
      : Array.isArray(response)
        ? response
        : [];

const getReturnedSaleQuantity = (item = {}) =>
  Math.max(
    Number(
      item?.returnedQuantity ??
        item?.returnedQty ??
        item?.returnQty ??
        item?.quantityReturned ??
        0
    ) || 0,
    0
  );

const getChargedSaleQuantity = (item = {}) =>
  Math.max(
    Number(item?.chargedQuantity ?? item?.quantity ?? item?.qty ?? 0) -
      getReturnedSaleQuantity(item),
    0
  );

const getInvoiceAmount = (quantity, unitPrice) =>
  Number((Math.max(Number(quantity) || 0, 0) * (Number(unitPrice) || 0)).toFixed(2));

const getCustomerSaleTotal = (sale = {}) => {
  const invoiceTotal = (Array.isArray(sale?.products) ? sale.products : []).reduce(
    (sum, item) =>
      sum +
      getInvoiceAmount(
        getChargedSaleQuantity(item),
        Number(item?.salePrice ?? item?.price ?? item?.retailSalePrice ?? 0)
      ),
    0
  );

  return Number(
    Math.max(invoiceTotal - (Number(sale?.discount) || 0), 0).toFixed(2)
  );
};

const matchesCustomerSale = (sale, customer) => {
  const saleCustomer = sale?.customer || sale?.selectedCustomer || {};
  const saleCustomerId = sale?.customerId || saleCustomer?._id || saleCustomer?.id || "";
  const targetId = customer?.id || customer?._id || "";
  const saleName = String(sale?.customerName || saleCustomer?.name || "")
    .trim()
    .toLowerCase();
  const targetName = String(customer?.name || "")
    .trim()
    .toLowerCase();
  const saleCnic = String(saleCustomer?.cnic || "").trim();
  const targetCnic = String(customer?.cnic || "").trim();
  const salePhone = String(saleCustomer?.phone || saleCustomer?.mobile || "").trim();
  const targetPhone = String(customer?.phone || customer?.mobile || "").trim();

  return (
    (targetId && saleCustomerId && String(saleCustomerId) === String(targetId)) ||
    (targetCnic && saleCnic && saleCnic === targetCnic) ||
    (targetPhone && salePhone && salePhone === targetPhone) ||
    (targetName && saleName === targetName)
  );
};

const getEntryMatchKeys = (...values) =>
  values
    .map((value) => String(value || "").trim().toLowerCase())
    .filter(Boolean);

const getProductSaleStatus = (item = {}) => {
  const explicitStatus = String(item?.status || "").trim().toUpperCase();
  if (explicitStatus) {
    return explicitStatus;
  }

  const quantity = Number(item?.chargedQuantity ?? item?.quantity ?? item?.qty ?? 0) || 0;
  const returnedQuantity =
    Number(
      item?.returnedQuantity ??
        item?.returnedQty ??
        item?.returnQty ??
        item?.quantityReturned ??
        0,
    ) || 0;

  return returnedQuantity >= quantity && quantity > 0 ? "RETURNED" : "SOLD";
};

export default function CustomerDetailPage() {
  const router = useRouter();
  const params = useParams();
  const customerId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const defaultDateRange = getDefaultDateRange();

  const [customer, setCustomer] = useState(null);
  const [customerSales, setCustomerSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("bills");
  const [billDateRange, setBillDateRange] = useState(defaultDateRange);
  const [transactionPage, setTransactionPage] = useState(1);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);
  const [blankBillDebit, setBlankBillDebit] = useState(0);
  const [blankBillDebitDraft, setBlankBillDebitDraft] = useState("0");
  const [showBlankBillModal, setShowBlankBillModal] = useState(false);
  const [editTransactionTarget, setEditTransactionTarget] = useState(null);
  const [isSavingEditedPayment, setIsSavingEditedPayment] = useState(false);
  const [deleteTransactionTarget, setDeleteTransactionTarget] = useState(null);
  const [isDeletingTransaction, setIsDeletingTransaction] = useState(false);
  const [canEditCustomer, setCanEditCustomer] = useState(false);
  const [canDeleteSale, setCanDeleteSale] = useState(false);
  const [paymentForm, setPaymentForm] = useState({
    method: "Cash",
    reference: "",
    date: new Date().toISOString().split("T")[0],
    partialAmount: "",
  });

  const transactionsPerPage = 10;

  const findLinkedSale = (bill) => {
    const billKeys = [
      String(bill?.id || ""),
      String(bill?.reference || ""),
      String(bill?.billId || ""),
    ]
      .map((value) => String(value || "").trim())
      .filter(Boolean);

    return customerSales.find((sale) => {
      const saleKeys = [
        String(sale?._id || ""),
        String(sale?.invoiceNo || ""),
        String(sale?.invoiceNumber || ""),
      ]
        .map((value) => String(value || "").trim())
        .filter(Boolean);

      return billKeys.some((billKey) =>
        saleKeys.some((saleKey) => {
          if (billKey === saleKey) return true;

          const normalizedBillKey = billKey.toLowerCase();
          const normalizedSaleKey = saleKey.toLowerCase();

          return (
            normalizedBillKey.includes(normalizedSaleKey) ||
            normalizedSaleKey.includes(normalizedBillKey)
          );
        })
      );
    });
  };

  useEffect(() => {
    const { permissions } = readStoredAuth();
    setCanEditCustomer(hasPermission(permissions, "CUSTOMER_EDIT"));
    setCanDeleteSale(hasPermission(permissions, "SALE_DELETE"));
  }, []);

  useEffect(() => {
    if (!showPaymentModal || !selectedBill) return;
    setPaymentForm({
      method: "Cash",
      reference: "",
      date: new Date().toISOString().split("T")[0],
      partialAmount: selectedBill.remainingAmountNumber,
    });
  }, [showPaymentModal, selectedBill]);

  const loadCustomerData = useCallback(async ({ silent = false } = {}) => {
    if (!customerId) {
      setLoading(false);
      return;
    }

    if (!silent) {
      setLoading(true);
    }

    try {
      const [customerResponse, salesResponse] = await Promise.all([
        apiRequest(`/customers/${customerId}`, { method: "GET", suppressErrorToast: silent }),
        apiRequest("/sales", {
          method: "GET",
          suppressErrorToast: true,
          suppressErrorLog: true,
        }),
      ]);

      if (customerResponse?.success && customerResponse?.customer) {
        const normalizedCustomer = normalizeCustomer(customerResponse.customer);
        setCustomer(normalizedCustomer);

        const salesArray = extractSalesArray(salesResponse);
        setCustomerSales(salesArray.filter((sale) => matchesCustomerSale(sale, normalizedCustomer)));
      } else {
        setCustomer(null);
      }
    } catch (error) {
      console.error("Customer detail load error:", error);
      setCustomer(null);
    } finally {
      if (!silent) {
        setLoading(false);
      }
    }
  }, [customerId]);

  useEffect(() => {
    loadCustomerData();

    const handleFocus = () => loadCustomerData({ silent: true });
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        loadCustomerData({ silent: true });
      }
    };

    const intervalId = window.setInterval(() => {
      loadCustomerData({ silent: true });
    }, 15000);

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [loadCustomerData]);

  useEffect(() => {
    setTransactionPage(1);
  }, [billDateRange.from, billDateRange.to, customer?.id]);

  const displayBills = (() => {
    const sourceBills = Array.isArray(customer?.bills) ? customer.bills : [];
    const sourceBillsByKey = new Map();

    sourceBills.forEach((bill) => {
      getEntryMatchKeys(bill?.id, bill?.reference, bill?.billId).forEach((key) => {
        sourceBillsByKey.set(key, bill);
      });
    });

    return customerSales.map((sale, index) => {
      const totalAmount = Number(sale?.totalAmount ?? sale?.total ?? getCustomerSaleTotal(sale) ?? 0);
      const matchedStoredBill = getEntryMatchKeys(sale?._id, sale?.invoiceNo, sale?.invoiceNumber)
        .map((key) => sourceBillsByKey.get(key))
        .find(Boolean);
      const paidAmount = Number(
        sale?.paidAmount ??
          matchedStoredBill?.paidAmount ??
          0
      );
      const remaining = Math.max(totalAmount - paidAmount, 0);
      const description = (Array.isArray(sale?.products) ? sale.products : [])
        .map((item) => item?.name)
        .filter(Boolean)
        .join(", ");

      return {
        id: String(sale?.invoiceNo || sale?._id || `SALE-${index + 1}`),
        saleId: String(sale?._id || ""),
        date: sale?.saleDate || sale?.createdAt || "",
        description: description || "N/A",
        amount: formatRs(totalAmount),
        paidAmount: formatRs(paidAmount),
        remainingAmount: formatRs(remaining),
        amountNumber: totalAmount,
        paidAmountNumber: paidAmount,
        remainingAmountNumber: remaining,
        status: remaining <= 0 ? "paid" : paidAmount > 0 ? "partial" : "pending",
        reference: String(sale?.invoiceNo || sale?.invoiceNumber || sale?._id || ""),
        transactionTimestamp:
          sale?.updatedAt ||
          matchedStoredBill?.updatedAt ||
          sale?.createdAt ||
          sale?.saleDate ||
          "",
        source: "bill",
      };
    });
  })();

  const totalBillAmount = displayBills.reduce((sum, bill) => sum + bill.amountNumber, 0);
  const totalOutstandingAmount = displayBills.reduce((sum, bill) => sum + bill.remainingAmountNumber, 0);

  const paymentHistoryToShow = (Array.isArray(customer?.paymentHistory) ? customer.paymentHistory : []).map(
    (payment, index) => ({
      ...payment,
      id: String(payment?.id || `PAY-${index + 1}`),
      amount: formatRs(parseAmount(payment?.amount)),
      amountNumber: parseAmount(payment?.amount),
      date: payment?.date || "",
      method: payment?.method || "N/A",
      reference: payment?.reference || "",
      billId: payment?.billId || "",
      notes: payment?.notes || "",
      transactionTimestamp: payment?.updatedAt || payment?.date || customer?.updatedAt || "",
      source: "payment",
    })
  );

  const transactionFeed = [...displayBills.map((bill, index) => ({
    id: `bill-${bill.id}-${index}`,
    type: "bill",
    date: bill.date,
    transactionTimestamp: bill.transactionTimestamp,
    reference: bill.reference,
    particulars: bill.description,
    debit: bill.amountNumber,
        credit: 0,
        savedOrder: index,
        status: formatStatusLabel(bill.status, "Pending"),
      })), ...paymentHistoryToShow.map((payment, index) => ({
        id: `payment-${payment.id}-${index}`,
        paymentId: String(payment?.id || ""),
        type: "payment",
        date: payment.date,
        transactionTimestamp: payment.transactionTimestamp,
        reference: payment.billId || payment.reference || payment.id,
        billId: payment.billId || "",
        paymentReference: payment.reference || "",
        particulars: payment.notes || "N/A",
        debit: 0,
        credit: payment.amountNumber,
        savedOrder: displayBills.length + index,
        status: "Received",
        method: payment.method,
        notes: payment.notes || "",
  }))].sort((a, b) => {
    const dateDiff = (getNormalizedDateValue(b.date) ?? 0) - (getNormalizedDateValue(a.date) ?? 0);
    if (dateDiff !== 0) return dateDiff;
    const typePriorityDiff = getTransactionTypePriority(b.type) - getTransactionTypePriority(a.type);
    if (typePriorityDiff !== 0) return typePriorityDiff;
    const timestampDiff =
      getTransactionSortValue(b.transactionTimestamp, b.date) -
      getTransactionSortValue(a.transactionTimestamp, a.date);
    if (timestampDiff !== 0) return timestampDiff;
    return b.savedOrder - a.savedOrder;
  });

  let runningBalance = 0;
  const chronologicalTransactions = [...transactionFeed].sort((a, b) => {
    const dateDiff = (getNormalizedDateValue(a.date) ?? 0) - (getNormalizedDateValue(b.date) ?? 0);
    if (dateDiff !== 0) return dateDiff;
    const typePriorityDiff = getTransactionTypePriority(a.type) - getTransactionTypePriority(b.type);
    if (typePriorityDiff !== 0) return typePriorityDiff;
    const timestampDiff =
      getTransactionSortValue(a.transactionTimestamp, a.date) -
      getTransactionSortValue(b.transactionTimestamp, b.date);
    if (timestampDiff !== 0) return timestampDiff;
    return a.savedOrder - b.savedOrder;
  });

  const transactionsWithBalance = chronologicalTransactions.map((entry) => {
    runningBalance = Math.max(0, runningBalance + entry.debit - entry.credit);
    return {
      ...entry,
      balance: runningBalance,
    };
  }).sort((a, b) => {
    const dateDiff = (getNormalizedDateValue(b.date) ?? 0) - (getNormalizedDateValue(a.date) ?? 0);
    if (dateDiff !== 0) return dateDiff;
    const typePriorityDiff = getTransactionTypePriority(b.type) - getTransactionTypePriority(a.type);
    if (typePriorityDiff !== 0) return typePriorityDiff;
    const timestampDiff =
      getTransactionSortValue(b.transactionTimestamp, b.date) -
      getTransactionSortValue(a.transactionTimestamp, a.date);
    if (timestampDiff !== 0) return timestampDiff;
    return b.savedOrder - a.savedOrder;
  });

  const filteredTransactions = transactionsWithBalance.filter((entry) => {
    const entryDate = getNormalizedDateValue(entry.date);
    const fromDate = billDateRange.from ? getNormalizedDateValue(billDateRange.from) : null;
    const toDate = billDateRange.to ? getNormalizedDateValue(billDateRange.to) : null;
    if (entryDate === null) return false;
    if (fromDate !== null && entryDate < fromDate) return false;
    if (toDate !== null && entryDate > toDate) return false;
    return true;
  });

  const adjustedFilteredTransactions = filteredTransactions.map((entry) => ({
    ...entry,
    balance: Math.max(0, Number(entry.balance || 0) + Number(blankBillDebit || 0)),
  }));
  const latestBillBalance = Number(
    adjustedFilteredTransactions.find((entry) => String(entry?.type || "").toLowerCase() === "bill")?.balance ||
      adjustedFilteredTransactions?.[0]?.balance ||
      0
  );
  const blankBillRow = {
    id: "blank-bill-row",
    type: "remaining bill",
    date: "",
    reference: "",
    particulars: "remaining bill",
    status: Number(blankBillDebit || 0) > 0 ? "Adjusted" : "Pending",
    debit: Number(blankBillDebit || 0),
    credit: 0,
    balance: Number(blankBillDebit || 0),
    isBlankBillRow: true,
  };
  const displayTransactions = [...adjustedFilteredTransactions, blankBillRow];

  const totalTransactionPages = Math.max(1, Math.ceil(displayTransactions.length / transactionsPerPage));
  const safeTransactionPage = Math.min(transactionPage, totalTransactionPages);
  const paginatedTransactions = displayTransactions.slice(
    (safeTransactionPage - 1) * transactionsPerPage,
    safeTransactionPage * transactionsPerPage
  );

  const purchasedProducts = customerSales.flatMap((sale, saleIndex) =>
    (Array.isArray(sale?.items) ? sale.items : Array.isArray(sale?.products) ? sale.products : []).map((item, itemIndex) => ({
      id: [
        String(sale?._id || saleIndex),
        String(item?.productId?._id || item?.productId || itemIndex),
        String(item?.productName || item?.name || itemIndex),
        String(itemIndex),
      ].join("-"),
      date: sale?.saleDate || sale?.createdAt || "",
      reference: sale?.invoiceNo || sale?._id || "-",
      name: item?.productName || item?.name || "Item",
      quantity: Number(item?.quantity || 0),
      unitPrice: Number((item?.unitPrice ?? item?.salePrice) || 0),
      status: getProductSaleStatus(item),
      total:
        Number(item?.totalPrice ?? 0) ||
        Number((item?.unitPrice ?? item?.salePrice) || 0) * Number(item?.quantity || 0),
    }))
  );

  const persistCustomerLedger = async (nextBills, nextPayments) => {
    const nextTotalDue = nextBills.reduce(
      (sum, bill) => sum + Math.max(parseAmount(bill.amount) - parseAmount(bill.paidAmount), 0),
      0
    );

    const response = await apiRequest(`/customers/${customerId}`, {
      method: "PUT",
      data: {
        bills: nextBills,
        paymentHistory: nextPayments,
        totalDue: nextTotalDue,
        lastPurchase: customer?.lastPurchase || "",
      },
    });

    if (response?.success && response?.customer) {
      setCustomer(normalizeCustomer(response.customer));
      return true;
    }

    if (response?.success) {
      setCustomer((prev) =>
        prev
          ? normalizeCustomer({
              ...prev,
              bills: nextBills,
              paymentHistory: nextPayments,
              totalDue: nextTotalDue,
              lastPurchase: prev?.lastPurchase || "",
            })
          : prev
      );
      return true;
    }

    return false;
  };

  const buildPersistableBills = () =>
    displayBills
      .map((bill) => ({
        id: String(bill.id || ""),
        date: bill.date || "",
        description: bill.description || "",
        amount: bill.amount,
        paidAmount: bill.paidAmount,
        status: bill.status,
        dueDate: bill.dueDate || "",
        notes: "",
      }))
      .map((bill) => ({ ...bill }));

  const getBillReferenceValue = (billLike = {}) =>
    String(
      billLike?.reference ||
      billLike?.id ||
      billLike?.billId ||
      billLike?.invoiceNo ||
      billLike?.invoiceNumber ||
      ""
    );

  const removeFirstMatchingPayment = (payments, matcher) => {
    let removed = false;
    return payments.filter((payment, index) => {
      if (removed || !matcher(payment, index)) return true;
      removed = true;
      return false;
    });
  };

  const isPaymentEntryMatch = (payment, entry) => {
    if (entry?.paymentId && String(payment?.id || "") === String(entry.paymentId)) {
      return true;
    }

    const paymentAmount = parseAmount(payment?.amount);
    const entryAmount = Number(entry?.credit || 0);
    const sameAmount = paymentAmount === entryAmount;
    const sameDate = String(payment?.date || "") === String(entry?.date || "");
    const sameReference = String(payment?.reference || "") === String(entry?.reference || "");
    const sameBillId = String(payment?.billId || "") === String(entry?.reference || "");
    const sameMethod = String(payment?.method || "") === String(entry?.method || "");

    return sameAmount && sameDate && (sameReference || sameBillId || sameMethod);
  };

  const requestEditTransaction = (entry) => {
    if (entry?.type !== "payment") return;
    if (!canEditCustomer) {
      alert("You do not have permission to edit this payment.");
      return;
    }

    const linkedBill =
      displayBills.find((bill) => String(bill?.id || "") === String(entry?.billId || entry?.reference || "")) || null;

    setEditTransactionTarget({
      ...entry,
      linkedBillRemaining: Number(linkedBill?.remainingAmountNumber || 0),
      linkedBillAmount: Number(linkedBill?.amountNumber || 0),
    });
    setPaymentForm({
      method: entry.method || "Cash",
      reference: getBillReferenceValue(linkedBill || entry),
      date: entry.date || new Date().toISOString().split("T")[0],
      partialAmount: String(Number(entry.balance || 0)),
    });
  };

  const requestEditBlankBill = () => {
    setBlankBillDebitDraft(String(Number(blankBillDebit || 0)));
    setShowBlankBillModal(true);
  };

  const handleSaveBlankBillCredit = (event) => {
    event.preventDefault();
    const nextDebit = Number(blankBillDebitDraft || 0);
    if (Number.isNaN(nextDebit) || nextDebit < 0) {
      alert("Debit amount must be 0 or greater.");
      return;
    }

    setBlankBillDebit(nextDebit);
    setShowBlankBillModal(false);
  };

  const handleEditPaymentTransaction = async (event) => {
    event.preventDefault();
    if (!customer || !editTransactionTarget) return;

    const nextAmount = Number(paymentForm.partialAmount || 0);
    const previousAmount = Number(editTransactionTarget.credit || 0);
    const maxAllowedAmount = previousAmount + Number(editTransactionTarget.linkedBillRemaining || 0);

    if (!nextAmount || nextAmount <= 0 || nextAmount > maxAllowedAmount) {
      alert(`Payment amount must be > 0 and <= ${maxAllowedAmount}.`);
      return;
    }

    setIsSavingEditedPayment(true);

    const currentBills = buildPersistableBills();
    const currentPayments = Array.isArray(customer.paymentHistory) ? [...customer.paymentHistory] : [];
    const paymentIndex = currentPayments.findIndex((payment) => isPaymentEntryMatch(payment, editTransactionTarget));

    if (paymentIndex < 0) {
      alert("Payment record not found.");
      setIsSavingEditedPayment(false);
      return;
    }

    const nextPayments = [...currentPayments];
    const billReference = getBillReferenceValue(
      currentBills.find(
        (bill) => String(bill?.id || "") === String(editTransactionTarget.billId || editTransactionTarget.reference || "")
      ) || editTransactionTarget
    );
    nextPayments[paymentIndex] = {
      ...nextPayments[paymentIndex],
      amount: formatRs(nextAmount),
      method: paymentForm.method,
      reference: billReference,
      date: paymentForm.date,
      billId: billReference,
      notes: editTransactionTarget.notes || "",
    };

    const billId = String(editTransactionTarget.billId || editTransactionTarget.reference || "");
    const targetBillIndex = currentBills.findIndex((bill) => String(bill?.id || "") === billId);

    if (targetBillIndex >= 0) {
      const existingPaid = parseAmount(currentBills[targetBillIndex]?.paidAmount);
      const billAmount = parseAmount(currentBills[targetBillIndex]?.amount);
      const nextPaid = Math.max(existingPaid - previousAmount + nextAmount, 0);
      currentBills[targetBillIndex] = {
        ...currentBills[targetBillIndex],
        paidAmount: formatRs(nextPaid),
        status: nextPaid <= 0 ? "pending" : nextPaid >= billAmount ? "paid" : "partial",
      };
    }

    const linkedSale = findLinkedSale(editTransactionTarget);
    let resolvedEditedSale = null;
    if (linkedSale?._id) {
      const salePaymentHistory = Array.isArray(linkedSale.paymentHistory) ? [...linkedSale.paymentHistory] : [];
      const salePaymentIndex = salePaymentHistory.findIndex((payment) => {
        const sameAmount = parseAmount(payment?.amount) === previousAmount;
        const sameDate = String(payment?.date || "") === String(editTransactionTarget?.date || "");
        const sameMethod = String(payment?.method || "") === String(editTransactionTarget?.method || "");
        return sameAmount && sameDate && sameMethod;
      });

      const nextSalePaymentHistory = [...salePaymentHistory];
      if (salePaymentIndex >= 0) {
        nextSalePaymentHistory[salePaymentIndex] = {
          ...nextSalePaymentHistory[salePaymentIndex],
          amount: nextAmount,
          method: paymentForm.method,
          date: paymentForm.date,
        };
      }

      const nextPaidAmount = Math.max(Number(linkedSale?.paidAmount || 0) - previousAmount + nextAmount, 0);
      const totalAmount = Number(linkedSale?.totalAmount || linkedSale?.total || 0);
      const saleUpdateResponse = await apiRequest(`/sales/updateSale/${linkedSale._id}`, {
        method: "PUT",
        data: stripSaleMetaFields({
          ...linkedSale,
          paidAmount: nextPaidAmount,
          cashReceived: nextPaidAmount,
          paymentHistory: nextSalePaymentHistory,
          paymentStatus: getSalePaymentStatus(nextPaidAmount, totalAmount),
        }),
      });

      if (!saleUpdateResponse?.success) {
        alert(saleUpdateResponse?.message || "Failed to update linked payment.");
        setIsSavingEditedPayment(false);
        return;
      }

      resolvedEditedSale = {
        ...linkedSale,
        ...stripSaleMetaFields({
          ...linkedSale,
          paidAmount: nextPaidAmount,
          cashReceived: nextPaidAmount,
          paymentHistory: nextSalePaymentHistory,
          paymentStatus: getSalePaymentStatus(nextPaidAmount, totalAmount),
        }),
        ...(saleUpdateResponse?.sale || saleUpdateResponse?.data || {}),
      };
    }

    const saved = await persistCustomerLedger(currentBills, nextPayments);
    if (!saved) {
      alert("Failed to update payment.");
      setIsSavingEditedPayment(false);
      return;
    }

    if (resolvedEditedSale?._id) {
      setCustomerSales((prev) =>
        prev.map((sale) =>
          String(sale?._id || "") === String(resolvedEditedSale?._id || "")
            ? { ...sale, ...resolvedEditedSale }
            : sale
        )
      );
    }
    setEditTransactionTarget(null);
    setIsSavingEditedPayment(false);
  };

  const requestDeleteTransaction = (entry) => {
    if (entry?.type !== "payment") return;
    if (!canEditCustomer) {
      alert("You do not have permission to delete this payment.");
      return;
    }
    setDeleteTransactionTarget(entry);
  };

  const handleDeleteTransaction = async (entry = deleteTransactionTarget) => {
    if (!customer) return;
    if (!entry) return;
    setIsDeletingTransaction(true);

    if (entry.type === "bill") {
      if (!canDeleteSale) {
        alert("You do not have permission to delete this bill.");
        setIsDeletingTransaction(false);
        return;
      }

      const linkedSale = findLinkedSale(entry);
      if (!linkedSale?._id) {
        alert("Linked bill record not found.");
        setIsDeletingTransaction(false);
        return;
      }

      const confirmed = window.confirm(`Delete bill ${entry.reference || linkedSale.invoiceNo || ""}?`);
      if (!confirmed) return;

      const deleteResponse = await apiRequest(`/sales/deleteSale/${linkedSale._id}`, {
        method: "DELETE",
      });

      if (!deleteResponse?.success) {
        alert(deleteResponse?.message || "Failed to delete bill.");
        setIsDeletingTransaction(false);
        return;
      }

      const nextBills = buildPersistableBills().filter(
        (bill) => String(bill.id || "") !== String(entry.reference || entry.id || "")
      );
      const nextPayments = (Array.isArray(customer.paymentHistory) ? customer.paymentHistory : []).filter((payment) => {
        const paymentBillId = String(payment?.billId || "").trim();
        if (!paymentBillId) return true;
        return paymentBillId !== String(entry.reference || "").trim();
      });

      const saved = await persistCustomerLedger(nextBills, nextPayments);
      if (!saved) {
        alert("Bill deleted, but customer ledger cleanup failed. Please refresh and verify the remaining transactions.");
      }
      await loadCustomerData({ silent: true });
      setDeleteTransactionTarget(null);
      setIsDeletingTransaction(false);
      return;
    }

    if (!canEditCustomer) {
      alert("You do not have permission to delete this payment.");
      setIsDeletingTransaction(false);
      return;
    }

    const linkedSale = findLinkedSale(entry);
    const currentBills = buildPersistableBills();
    const currentPayments = Array.isArray(customer.paymentHistory) ? [...customer.paymentHistory] : [];
    const nextPayments = removeFirstMatchingPayment(currentPayments, (payment) => isPaymentEntryMatch(payment, entry));

    if (nextPayments.length === currentPayments.length) {
      alert("Payment record not found.");
      setIsDeletingTransaction(false);
      return;
    }

    const targetBillIndex = currentBills.findIndex(
      (bill) => String(bill?.id || "") === String(entry.reference || "")
    );

    if (targetBillIndex >= 0) {
      const existingPaid = parseAmount(currentBills[targetBillIndex]?.paidAmount);
      const billAmount = parseAmount(currentBills[targetBillIndex]?.amount);
      const nextPaid = Math.max(existingPaid - Number(entry.credit || 0), 0);
      currentBills[targetBillIndex] = {
        ...currentBills[targetBillIndex],
        paidAmount: formatRs(nextPaid),
        status: nextPaid <= 0 ? "pending" : nextPaid >= billAmount ? "paid" : "partial",
      };
    }

    if (linkedSale?._id) {
      const salePaymentHistory = Array.isArray(linkedSale.paymentHistory) ? [...linkedSale.paymentHistory] : [];
      const nextSalePaymentHistory = removeFirstMatchingPayment(salePaymentHistory, (payment) => {
        const sameAmount = parseAmount(payment?.amount) === Number(entry.credit || 0);
        const sameDate = String(payment?.date || "") === String(entry?.date || "");
        const sameMethod = String(payment?.method || "") === String(entry?.method || "");
        return sameAmount && sameDate && sameMethod;
      });
      const nextPaidAmount = Math.max(Number(linkedSale?.paidAmount || 0) - Number(entry.credit || 0), 0);
      const totalAmount = Number(linkedSale?.totalAmount || linkedSale?.total || 0);
      const saleUpdateResponse = await apiRequest(`/sales/updateSale/${linkedSale._id}`, {
        method: "PUT",
        data: stripSaleMetaFields({
          ...linkedSale,
          paidAmount: nextPaidAmount,
          cashReceived: nextPaidAmount,
          paymentHistory: nextSalePaymentHistory,
          paymentStatus: getSalePaymentStatus(nextPaidAmount, totalAmount),
        }),
      });

      if (!saleUpdateResponse?.success) {
        alert(saleUpdateResponse?.message || "Failed to delete payment from linked bill.");
        setIsDeletingTransaction(false);
        return;
      }
    }

    const saved = await persistCustomerLedger(currentBills, nextPayments);
    if (!saved) {
      alert("Failed to delete payment.");
      setIsDeletingTransaction(false);
      return;
    }

    await loadCustomerData({ silent: true });
    setDeleteTransactionTarget(null);
    setIsDeletingTransaction(false);
  };

  const openPaymentModal = (bill = null) => {
    const fallbackOutstandingBill =
      [...displayBills]
        .filter((entry) => Number(entry?.remainingAmountNumber || 0) > 0)
        .sort(
          (a, b) =>
            getTransactionSortValue(a.transactionTimestamp, a.date) -
            getTransactionSortValue(b.transactionTimestamp, b.date)
        )[0] || null;

    if (!bill) {
      setSelectedBill({
        id: `TOTAL-${customer?.name || "CUSTOMER"}`,
        reference: `TOTAL-${customer?.name || "CUSTOMER"}`,
        description: `Outstanding balance for ${customer?.name || "customer"}`,
        date: new Date().toISOString().split("T")[0],
        amountNumber: totalOutstandingAmount,
        paidAmountNumber: 0,
        remainingAmountNumber: totalOutstandingAmount,
        amount: formatRs(totalOutstandingAmount),
        paidAmount: formatRs(0),
        remainingAmount: formatRs(totalOutstandingAmount),
        source: "customer-total",
        linkedInvoiceReference: getBillReferenceValue(fallbackOutstandingBill),
      });
    } else {
      setSelectedBill({
        ...bill,
        linkedInvoiceReference: getBillReferenceValue(bill),
      });
    }
    setPaymentForm((prev) => ({
      ...prev,
      reference: getBillReferenceValue(bill || fallbackOutstandingBill),
    }));
    setShowPaymentModal(true);
  };

  const handleRecordPayment = async (event) => {
    event.preventDefault();
    if (!canEditCustomer || !customer) return;

    const paidAmount = Number(paymentForm.partialAmount || 0);
    if (!paidAmount || paidAmount <= 0 || paidAmount > Number(selectedBill?.remainingAmountNumber || 0)) {
      alert("Partial amount must be > 0 and <= remaining amount");
      return;
    }

    const currentBills = displayBills
      .map((bill) => ({
        id: String(bill.id || ""),
        date: bill.date || "",
        description: bill.description || "",
        amount: bill.amount,
        paidAmount: bill.paidAmount,
        status: bill.status,
        dueDate: bill.dueDate || "",
        notes: "",
      }))
      .map((bill) => ({ ...bill }));
    const currentPayments = [...(Array.isArray(customer.paymentHistory) ? customer.paymentHistory : [])];
    const paymentDate = paymentForm.date || new Date().toISOString().split("T")[0];
    const updatedSalesMap = new Map();

    if (selectedBill?.source === "customer-total") {
      const sortedBills = [...displayBills]
        .filter((entry) => Number(entry?.remainingAmountNumber || 0) > 0)
        .sort(
          (a, b) =>
            getTransactionSortValue(a.transactionTimestamp, a.date) -
            getTransactionSortValue(b.transactionTimestamp, b.date)
        );
      const totalAllocatableAmount = sortedBills.reduce((sum, billEntry) => {
        const linkedSale = findLinkedSale(billEntry);
        const billRemaining = Math.max(Number(billEntry?.remainingAmountNumber || 0), 0);
        const linkedSaleRemaining = linkedSale?._id
          ? Math.max(Number(linkedSale?.totalAmount || 0) - Number(linkedSale?.paidAmount || 0), 0)
          : billRemaining;
        return sum + Math.min(billRemaining, linkedSaleRemaining);
      }, 0);

      if (paidAmount > totalAllocatableAmount) {
        alert("Paid amount cannot exceed remaining amount");
        return;
      }

      let remainingToAllocate = paidAmount;

      for (const billEntry of sortedBills) {
        if (remainingToAllocate <= 0) break;

        const targetIndex = currentBills.findIndex(
          (entry) => String(entry?.id || "") === String(billEntry?.id || "")
        );
        if (targetIndex < 0) continue;

        const currentPaid = parseAmount(currentBills[targetIndex]?.paidAmount);
        const billAmount = parseAmount(currentBills[targetIndex]?.amount);
        const billRemaining = Math.max(billAmount - currentPaid, 0);
        if (billRemaining <= 0) continue;

        const linkedSale = findLinkedSale(billEntry);
        const linkedSaleRemaining = linkedSale?._id
          ? Math.max(Number(linkedSale?.totalAmount || 0) - Number(linkedSale?.paidAmount || 0), 0)
          : billRemaining;
        const allocatableAmount = Math.min(remainingToAllocate, billRemaining, linkedSaleRemaining);

        if (allocatableAmount <= 0) continue;

        if (linkedSale?._id) {
          const salePaymentResponse = await apiRequest(`/sales/${linkedSale._id}/payment`, {
            method: "POST",
            data: {
              paidAmount: allocatableAmount,
              paymentMethod: paymentForm.method,
              paymentDate,
            },
          });

          if (!salePaymentResponse?.success) {
            alert(salePaymentResponse?.message || `Failed to record payment for bill ${billEntry.reference || billEntry.id}.`);
            return;
          }

          if (salePaymentResponse.sale?._id) {
            updatedSalesMap.set(String(salePaymentResponse.sale._id), {
              ...salePaymentResponse.sale,
              paymentStatus:
                Number(salePaymentResponse.sale?.paidAmount || 0) >= Number(salePaymentResponse.sale?.totalAmount || 0)
                  ? "Paid"
                  : salePaymentResponse.sale?.paymentStatus || "Pending",
            });
          }
        }

        const nextPaid = Math.min(currentPaid + allocatableAmount, billAmount);
        currentBills[targetIndex] = {
          ...currentBills[targetIndex],
          paidAmount: formatRs(nextPaid),
          status: nextPaid >= billAmount ? "paid" : "partial",
        };

        currentPayments.unshift({
          id: `PAY-${Date.now().toString().slice(-6)}-${targetIndex}`,
          date: paymentDate,
          amount: formatRs(allocatableAmount),
          method: paymentForm.method,
          reference: getBillReferenceValue(currentBills[targetIndex]),
          billId: getBillReferenceValue(currentBills[targetIndex]),
          notes: "",
        });

        remainingToAllocate -= allocatableAmount;
      }

      if (remainingToAllocate > 0) {
        alert("Payment amount cannot exceed remaining amount.");
        return;
      }
    } else {
      const targetIndex = currentBills.findIndex(
        (bill) => String(bill?.id || "") === String(selectedBill?.id || "")
      );

      if (targetIndex < 0) {
        alert("Bill not found for this customer.");
        return;
      }

      const linkedSale = findLinkedSale(selectedBill);
      const currentPaid = parseAmount(currentBills[targetIndex]?.paidAmount);
      const billAmount = parseAmount(currentBills[targetIndex]?.amount);
      const billRemaining = Math.max(billAmount - currentPaid, 0);

      if (paidAmount > billRemaining) {
        alert("Paid amount cannot exceed remaining amount");
        return;
      }

      if (linkedSale?._id) {
        const linkedSaleRemaining = Math.max(
          Number(linkedSale?.totalAmount || 0) - Number(linkedSale?.paidAmount || 0),
          0
        );
        const allowedAmount = Math.min(billRemaining, linkedSaleRemaining);

        if (paidAmount > allowedAmount) {
          alert("Paid amount cannot exceed remaining amount");
          return;
        }

        const salePaymentResponse = await apiRequest(`/sales/${linkedSale._id}/payment`, {
          method: "POST",
          data: {
            paidAmount,
            paymentMethod: paymentForm.method,
            paymentDate,
          },
        });

        if (!salePaymentResponse?.success) {
          alert(salePaymentResponse?.message || "Failed to record payment.");
          return;
        }

        if (salePaymentResponse.sale?._id) {
          updatedSalesMap.set(String(salePaymentResponse.sale._id), {
            ...salePaymentResponse.sale,
            paymentStatus:
              Number(salePaymentResponse.sale?.paidAmount || 0) >= Number(salePaymentResponse.sale?.totalAmount || 0)
                ? "Paid"
                : salePaymentResponse.sale?.paymentStatus || "Pending",
          });
        }
      }

      const nextPaid = currentPaid + paidAmount;

      currentBills[targetIndex] = {
        ...currentBills[targetIndex],
        paidAmount: formatRs(nextPaid),
        status: nextPaid >= billAmount ? "paid" : "partial",
      };

      currentPayments.unshift({
        id: `PAY-${Date.now().toString().slice(-6)}`,
        date: paymentDate,
        amount: formatRs(paidAmount),
        method: paymentForm.method,
        reference: getBillReferenceValue(currentBills[targetIndex]),
        billId: getBillReferenceValue(currentBills[targetIndex]),
        notes: "",
      });
    }

    const saved = await persistCustomerLedger(currentBills, currentPayments);
    if (!saved) {
      alert("Failed to record payment.");
      return;
    }

    if (updatedSalesMap.size > 0) {
      setCustomerSales((prev) =>
        prev.map((sale) => updatedSalesMap.get(String(sale?._id)) || sale)
      );
    }

    setShowPaymentModal(false);
    setSelectedBill(null);
  };

  const handlePrintTransactions = () => {
    if (typeof window === "undefined" || !customer) return;

    const printTransactions = [...adjustedFilteredTransactions, blankBillRow];

    const rows = printTransactions
      .map(
        (entry) => `
          <tr>
            <td>${formatDate(entry.date)}</td>
            <td>${entry.type}</td>
            <td>${entry.reference || "N/A"}</td>
            <td>${entry.particulars || "N/A"}</td>
            <td>${entry.status || "N/A"}</td>
            <td>${formatRs(entry.debit)}</td>
            <td>${formatRs(entry.credit)}</td>
            <td>${formatRs(entry.balance)}</td>
          </tr>`
      )
      .join("");

    const printWindow = window.open("", "_blank", "width=1100,height=800");
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>${customer.name} Bills Report</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 24px; color: #111; }
            h1 { margin: 0 0 8px; }
            .row { display: flex; justify-content: space-between; margin: 6px 0; }
            .box { border: 1px solid #ddd; border-radius: 8px; padding: 12px; margin: 12px 0 16px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #000; padding: 8px; font-size: 12px; text-align: left; }
            th { background: #000; color: #fff; }
          </style>
        </head>
        <body>
          <h1>Customer Bills Report</h1>
          <div class="box">
            <div class="row"><strong>Customer</strong><span>${customer.name}</span></div>
            <div class="row"><strong>Date Range</strong><span>${formatDate(billDateRange.from)} to ${formatDate(billDateRange.to)}</span></div>
            <div class="row"><strong>Total Bill Amount</strong><span>${formatRs(totalBillAmount)}</span></div>
            <div class="row"><strong>Outstanding</strong><span>${formatRs(totalOutstandingAmount)}</span></div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Reference</th>
                <th>Particulars</th>
                <th>Status</th>
                <th>Debit</th>
                <th>Credit</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">Loading customer details...</p>
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-900 dark:text-white">Customer not found.</p>
          <button
            onClick={() => router.push("/AdminDashboard/customers")}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
          >
            Back to Customers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <button
                onClick={() => router.push("/AdminDashboard/customers")}
                className="rounded-xl bg-gray-100 p-3 text-gray-700 transition hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-500 text-xl font-bold text-white">
                  {String(customer.name || "C").charAt(0)}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{customer.name}</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">View and manage customer information</p>
                </div>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl bg-blue-50 px-4 py-3 dark:bg-blue-900/20">
              <p className="text-xs text-blue-700 dark:text-blue-300">Total Bills</p>
              <p className="text-lg font-bold text-blue-900 dark:text-white">{displayBills.length}</p>
            </div>
            <div className="rounded-2xl bg-emerald-50 px-4 py-3 dark:bg-emerald-900/20">
              <p className="text-xs text-emerald-700 dark:text-emerald-300">Total Spent</p>
              <p className="text-lg font-bold text-emerald-900 dark:text-white">{formatRs(totalBillAmount)}</p>
            </div>
            <div className="rounded-2xl bg-amber-50 px-4 py-3 dark:bg-amber-900/20">
              <p className="text-xs text-amber-700 dark:text-amber-300">Outstanding</p>
              <p className="text-lg font-bold text-amber-900 dark:text-white">{formatRs(totalOutstandingAmount)}</p>
            </div>
            <div className="rounded-2xl bg-violet-50 px-4 py-3 dark:bg-violet-900/20">
              <p className="text-xs text-violet-700 dark:text-violet-300">Payments</p>
              <p className="text-lg font-bold text-violet-900 dark:text-white">{paymentHistoryToShow.length}</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {["bills", "products", "payments", "profile"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-blue-600 to-emerald-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "bills" && (
            <div className="mt-6 space-y-6">
              <div className="flex flex-col gap-4 rounded-2xl bg-gray-50 p-4 dark:bg-gray-700/40 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-wrap items-end gap-4">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-500 dark:text-gray-400">From</label>
                    <input type="date" value={billDateRange.from} onChange={(e) => setBillDateRange((prev) => ({ ...prev, from: e.target.value }))} className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800" />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-gray-500 dark:text-gray-400">To</label>
                    <input type="date" value={billDateRange.to} onChange={(e) => setBillDateRange((prev) => ({ ...prev, to: e.target.value }))} className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800" />
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => openPaymentModal()}
                    disabled={!canEditCustomer || totalOutstandingAmount <= 0}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2 text-sm font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Wallet className="h-4 w-4" />
                    Add Payment
                  </button>
                  <button onClick={handlePrintTransactions} className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">
                    <Printer className="h-4 w-4" />
                    Print Total Bills
                  </button>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Total Bill Amount: {formatRs(totalBillAmount)}</p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[940px]">
                    <thead className="bg-gray-100 dark:bg-gray-700/60">
                      <tr>
                        {["Date", "Type", "Reference", "Particulars", "Status", "Debit", "Credit", "Balance", "Action"].map((label) => (
                          <th
                            key={label}
                            className={`px-2.5 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-300 ${
                              label === "Date"
                                ? "w-[90px] min-w-[90px]"
                                : label === "Type"
                                  ? "w-[85px] min-w-[85px]"
                                  : label === "Reference"
                                    ? "w-[95px] min-w-[95px]"
                                    : label === "Particulars"
                                      ? "w-[160px] min-w-[160px]"
                                      : label === "Status"
                                        ? "w-[85px] min-w-[85px]"
                                        : label === "Debit" || label === "Credit" || label === "Balance"
                                          ? "w-[90px] min-w-[90px]"
                                          : label === "Action"
                                            ? "w-[70px] min-w-[70px]"
                                            : ""
                            }`}
                          >
                            {label}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {paginatedTransactions.length === 0 ? (
                        <tr>
                          <td colSpan={9} className="px-2.5 py-8 text-center text-sm text-gray-500 dark:text-gray-400">No transactions found for the selected date range.</td>
                        </tr>
                      ) : (
                        paginatedTransactions.map((entry) => (
                          <tr key={entry.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                            <td className="px-2.5 py-2.5 text-sm text-gray-700 dark:text-gray-300">{formatDate(entry.date)}</td>
                            <td className="px-2.5 py-2.5 text-sm font-medium text-gray-900 dark:text-white">{entry.type}</td>
                            <td className="px-2.5 py-2.5 text-sm text-gray-700 dark:text-gray-300">{entry.reference || "N/A"}</td>
                            <td className="w-[160px] min-w-[160px] px-2.5 py-2.5 text-sm text-gray-700 dark:text-gray-300">
                              <div
                                className="overflow-hidden break-words"
                                style={{
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                }}
                              >
                                {entry.particulars || "N/A"}
                              </div>
                            </td>
                            <td className="px-2.5 py-2.5 text-sm text-gray-700 dark:text-gray-300">
                              <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusBadgeClassName(entry.status)}`}>
                                {entry.status || "N/A"}
                              </span>
                            </td>
                            <td className="px-2.5 py-2.5 text-sm text-gray-700 dark:text-gray-300">{formatRs(entry.debit)}</td>
                            <td className="px-2.5 py-2.5 text-sm text-gray-700 dark:text-gray-300">{formatRs(entry.credit)}</td>
                            <td className="px-2.5 py-2.5 text-sm font-medium text-gray-900 dark:text-white">{formatRs(entry.balance)}</td>
                            <td className="px-2.5 py-2.5 text-sm text-gray-700 dark:text-gray-300">
                              {entry.isBlankBillRow ? (
                                <button
                                  type="button"
                                  onClick={requestEditBlankBill}
                                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-200 text-blue-600 transition hover:bg-blue-50 dark:border-blue-900/60 dark:text-blue-300 dark:hover:bg-blue-950/30"
                                  aria-label="Edit remaining bill credit"
                                  title="Edit remaining bill"
                                >
                                  <Edit3 className="h-4 w-4" />
                                </button>
                              ) : entry.type === "payment" ? (
                                <div className="flex items-center gap-2">
                                  <button
                                    type="button"
                                    onClick={() => requestEditTransaction(entry)}
                                    disabled={!canEditCustomer}
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-200 text-blue-600 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-blue-900/60 dark:text-blue-300 dark:hover:bg-blue-950/30"
                                    aria-label="Edit payment transaction"
                                    title="Edit payment"
                                  >
                                    <Edit3 className="h-4 w-4" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => requestDeleteTransaction(entry)}
                                    disabled={!canEditCustomer}
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-red-200 text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-red-900/60 dark:text-red-300 dark:hover:bg-red-950/30"
                                    aria-label="Delete payment transaction"
                                    title="Delete payment"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </button>
                                </div>
                              ) : null}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gray-500 dark:text-gray-400">Showing {paginatedTransactions.length} of {displayTransactions.length} transactions</p>
                <div className="flex items-center gap-3">
                  <button onClick={() => setTransactionPage((prev) => Math.max(1, prev - 1))} disabled={safeTransactionPage === 1} className="rounded-lg border border-gray-300 px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600">Prev</button>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{safeTransactionPage} / {totalTransactionPages}</span>
                  <button onClick={() => setTransactionPage((prev) => Math.min(totalTransactionPages, prev + 1))} disabled={safeTransactionPage === totalTransactionPages} className="rounded-lg border border-gray-300 px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600">Next</button>
                </div>
              </div>

            </div>
          )}

          {activeTab === "products" && (
            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px]">
                  <thead className="bg-gray-100 dark:bg-gray-700/60">
                    <tr>
                      {["Date", "Reference", "Product", "Qty", "Unit Price", "Status", "Total"].map((label) => (
                        <th key={label} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-300">{label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {purchasedProducts.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">No products found for this customer.</td>
                      </tr>
                    ) : (
                      purchasedProducts.map((product) => (
                        <tr key={product.id}>
                          <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{formatDate(product.date)}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{product.reference}</td>
                          <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{product.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{product.quantity}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{formatRs(product.unitPrice)}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                            <span
                              className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                                product.status === "RETURNED"
                                  ? "bg-rose-100 text-rose-700"
                                  : product.status === "CLAIM"
                                    ? "bg-amber-100 text-amber-700"
                                    : "bg-emerald-100 text-emerald-700"
                              }`}
                            >
                              {product.status === "RETURNED"
                                ? "Returned"
                                : product.status === "CLAIM"
                                  ? "Claim"
                                  : "Sold"}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{formatRs(product.total)}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "payments" && (
            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px]">
                  <thead className="bg-gray-100 dark:bg-gray-700/60">
                    <tr>
                      {["Payment ID", "Date", "Bill ID", "Amount", "Method", "Reference"].map((label) => (
                        <th key={label} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-300">{label}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {paymentHistoryToShow.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">No payment history found.</td>
                      </tr>
                    ) : (
                      paymentHistoryToShow.map((payment) => (
                        <tr key={payment.id}>
                          <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{payment.id}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{formatDate(payment.date)}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{payment.billId}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{payment.amount}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{payment.method}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{payment.reference || "N/A"}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 p-5 dark:border-gray-700">
                <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Customer Profile</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3"><User className="mt-0.5 h-5 w-5 text-gray-400" /><div><p className="text-sm text-gray-500">Name</p><p className="font-medium text-gray-900 dark:text-white">{customer.name}</p></div></div>
                  <div className="flex items-start gap-3"><IdCard className="mt-0.5 h-5 w-5 text-gray-400" /><div><p className="text-sm text-gray-500">CNIC</p><p className="font-medium text-gray-900 dark:text-white">{customer.cnic || "N/A"}</p></div></div>
                  <div className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-gray-400" /><div><p className="text-sm text-gray-500">Phone</p><p className="font-medium text-gray-900 dark:text-white">{customer.phone || "N/A"}</p></div></div>
                  <div className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-gray-400" /><div><p className="text-sm text-gray-500">Email</p><p className="font-medium text-gray-900 dark:text-white">{customer.email || "N/A"}</p></div></div>
                  <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-gray-400" /><div><p className="text-sm text-gray-500">Address</p><p className="font-medium text-gray-900 dark:text-white">{customer.address || "N/A"}</p></div></div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 p-5 dark:border-gray-700">
                <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">Billing Profile</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3"><Calendar className="mt-0.5 h-5 w-5 text-gray-400" /><div><p className="text-sm text-gray-500">Registered Date</p><p className="font-medium text-gray-900 dark:text-white">{formatDate(customer.registeredDate || customer.createdAt)}</p></div></div>
                  <div className="flex items-start gap-3"><CreditCard className="mt-0.5 h-5 w-5 text-gray-400" /><div><p className="text-sm text-gray-500">Credit Limit</p><p className="font-medium text-gray-900 dark:text-white">{formatRs(customer.creditLimit)}</p></div></div>
                  <div className="flex items-start gap-3"><Wallet className="mt-0.5 h-5 w-5 text-gray-400" /><div><p className="text-sm text-gray-500">Total Due</p><p className="font-medium text-gray-900 dark:text-white">{formatRs(customer.totalDue)}</p></div></div>
                  <div className="flex items-start gap-3"><FileText className="mt-0.5 h-5 w-5 text-gray-400" /><div><p className="text-sm text-gray-500">Notes</p><p className="font-medium text-gray-900 dark:text-white">{customer.notes || "N/A"}</p></div></div>
                  <div className="flex items-start gap-3"><Package className="mt-0.5 h-5 w-5 text-gray-400" /><div><p className="text-sm text-gray-500">Purchased Products</p><p className="font-medium text-gray-900 dark:text-white">{purchasedProducts.length}</p></div></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {showBlankBillModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-2xl dark:bg-gray-800">
            <div className="p-5">
              <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Edit remaining bill</h3>
              <form onSubmit={handleSaveBlankBillCredit} className="space-y-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Debit Amount</label>
                  <input
                    type="number"
                    min="0"
                    value={blankBillDebitDraft}
                    onChange={(e) => setBlankBillDebitDraft(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800"
                  />
                </div>
                <div className="flex justify-end gap-3 border-t border-gray-200 pt-4 dark:border-gray-700">
                  <button
                    type="button"
                    onClick={() => setShowBlankBillModal(false)}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-600 dark:text-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2 text-sm font-medium text-white"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}

      {editTransactionTarget?.type === "payment" ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-2xl dark:bg-gray-800">
            <div className="p-5">
              <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Edit Payment</h3>
              <form onSubmit={handleEditPaymentTransaction} className="space-y-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Balance</label>
                  <input
                    type="text"
                    readOnly
                    value={formatRs(editTransactionTarget.balance || 0)}
                    className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Edit Payment</label>
                  <input
                    type="number"
                    min="0"
                    max={Number(editTransactionTarget.linkedBillRemaining || 0) + Number(editTransactionTarget.credit || 0)}
                    value={paymentForm.partialAmount}
                    onChange={(e) => setPaymentForm((prev) => ({ ...prev, partialAmount: e.target.value }))}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Reference No.</label>
                  <input
                    type="text"
                    readOnly
                    value={paymentForm.reference || editTransactionTarget.billId || editTransactionTarget.reference || "N/A"}
                    className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Payment Method *</label>
                  <select
                    value={paymentForm.method}
                    onChange={(e) => setPaymentForm((prev) => ({ ...prev, method: e.target.value }))}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800"
                  >
                    <option value="Cash">Cash</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Card">Card</option>
                    <option value="Check">Check</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Date *</label>
                  <input
                    type="date"
                    value={paymentForm.date}
                    onChange={(e) => setPaymentForm((prev) => ({ ...prev, date: e.target.value }))}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800"
                  />
                </div>
                <div className="flex justify-end gap-3 border-t border-gray-200 pt-4 dark:border-gray-700">
                  <button
                    type="button"
                    onClick={() => setEditTransactionTarget(null)}
                    disabled={isSavingEditedPayment}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:text-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSavingEditedPayment}
                    className="rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Save Payment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}

      {deleteTransactionTarget?.type === "payment" ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-xl bg-gradient-to-br from-white to-gray-50 p-5 shadow-2xl dark:from-gray-800 dark:to-gray-700">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-gradient-to-r from-red-100 to-pink-100 p-2 dark:from-red-900/30 dark:to-pink-900/30">
                <Trash2 className="h-5 w-5 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Delete Payment?</h3>
            </div>

            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800/30 dark:bg-red-900/10">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                Are you sure want to Delete payment{" "}
                <span className="font-semibold">{deleteTransactionTarget.reference || deleteTransactionTarget.id || "N/A"}</span>
                ?
              </p>
            </div>

            <div className="flex justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setDeleteTransactionTarget(null)}
                disabled={isDeletingTransaction}
                className="rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition-all duration-200 hover:from-gray-300 hover:to-gray-400 disabled:cursor-not-allowed disabled:opacity-50 dark:from-gray-700 dark:to-gray-600 dark:text-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500"
              >
                No
              </button>
              <button
                type="button"
                onClick={() => handleDeleteTransaction()}
                disabled={isDeletingTransaction}
                className="rounded-lg bg-gradient-to-r from-red-600 to-pink-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:from-red-700 hover:to-pink-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {showPaymentModal && selectedBill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-2xl dark:bg-gray-800">
            <div className="p-5">
              <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Add Payment</h3>
              <form onSubmit={handleRecordPayment} className="space-y-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Balance (Debit - Credit, if credit is empty then 0)</label>
                  <input type="text" readOnly value={formatRs(latestBillBalance)} className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-700" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Add Payment</label>
                  <input type="number" min="0" max={selectedBill.remainingAmountNumber} value={paymentForm.partialAmount} onChange={(e) => setPaymentForm((prev) => ({ ...prev, partialAmount: e.target.value }))} className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Remaining Amount</label>
                  <input
                    type="text"
                    readOnly
                    value={formatRs(
                      Math.max(
                        Number(selectedBill.remainingAmountNumber || 0) - Number(paymentForm.partialAmount || 0),
                        0
                      )
                    )}
                    className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Reference No.</label>
                  <input
                    type="text"
                    readOnly
                    value={paymentForm.reference || selectedBill.linkedInvoiceReference || selectedBill.reference || "N/A"}
                    className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Payment Method *</label>
                  <select value={paymentForm.method} onChange={(e) => setPaymentForm((prev) => ({ ...prev, method: e.target.value }))} className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800">
                    <option value="Cash">Cash</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Card">Card</option>
                    <option value="Check">Check</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Date *</label>
                  <input type="date" value={paymentForm.date} onChange={(e) => setPaymentForm((prev) => ({ ...prev, date: e.target.value }))} className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800" />
                </div>
                <div className="flex justify-end gap-3 border-t border-gray-200 pt-4 dark:border-gray-700">
                  <button type="button" onClick={() => { setShowPaymentModal(false); setSelectedBill(null); }} className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-600 dark:text-gray-300">Cancel</button>
                  <button type="submit" className="rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2 text-sm font-medium text-white">Save Payment</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
