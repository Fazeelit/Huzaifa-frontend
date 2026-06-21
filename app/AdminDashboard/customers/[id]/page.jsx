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
const formatRoundedRs = (value) => `Rs. ${Math.round(Number(value || 0)).toLocaleString("en-IN")}`;
const CRUD_CACHE_KEY = "appCrudResponseCache";
const REMAINING_BILL_MARKER = "__remaining_bill__";
const REMAINING_BILL_PAYMENT_NOTE = "__remaining_bill_payment__";
const REMAINING_BILL_REFERENCE = "remaining-bill";
const CUSTOMER_TOTAL_PAYMENT_BATCH_PREFIX = "__customer_total_payment__:";

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
  return {
    from: "",
    to: "",
  };
};

const normalizecustomer = (raw = {}) => ({
  ...raw,
  id: raw._id || raw.id,
  phone: raw.phone || raw.mobile || "",
  mobile: raw.mobile || raw.phone || "",
  bills: Array.isArray(raw.bills) ? raw.bills : [],
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

const normalizecustomerPayment = (payment = {}) => {
  const amountNumber = Number(payment?.paidAmount ?? payment?.amount ?? 0);
  const paymentDate = payment?.appliedAt || payment?.date || "";

  return {
    ...payment,
    id: String(payment?._id || payment?.id || payment?.paymentId || "").trim(),
    paymentId: String(payment?._id || payment?.id || payment?.paymentId || "").trim(),
    customerId: String(payment?.customerId || "").trim(),
    saleId: String(payment?.saleId || "").trim(),
    amount: formatRs(amountNumber),
    amountNumber,
    date: paymentDate,
    appliedAt: paymentDate,
    method: payment?.paymentMethod || payment?.method || "Cash",
    paymentMethod: payment?.paymentMethod || payment?.method || "Cash",
    reference: payment?.reference || "",
    billId: payment?.billId || "",
    notes: payment?.notes || "",
    transactionTimestamp: payment?.updatedAt || paymentDate || payment?.createdAt || "",
    source: "payment",
  };
};

const isCustomerTotalPaymentBatchNote = (value = "") =>
  String(value || "").trim().startsWith(CUSTOMER_TOTAL_PAYMENT_BATCH_PREFIX);

const extractcustomerPaymentsArray = (response) =>
  Array.isArray(response?.customerpayments)
    ? response.customerpayments
    : Array.isArray(response?.data?.customerpayments)
      ? response.data.customerpayments
      : Array.isArray(response?.data)
        ? response.data
        : Array.isArray(response)
          ? response
          : [];

const isRemainingBillPaymentEntry = (entry = {}) =>
  String(entry?.billId || "").trim() === REMAINING_BILL_REFERENCE &&
  String(entry?.notes || "").trim() !== REMAINING_BILL_MARKER;

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

const getpurchasePaymentStatus = (paidAmount, totalAmount) => {
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

const strippurchaseMetaFields = (purchase) => {
  const requestBody = { ...purchase };
  delete requestBody._id;
  delete requestBody.createdAt;
  delete requestBody.updatedAt;
  delete requestBody.__v;
  return requestBody;
};

const extractpurchasesArray = (response) =>
  Array.isArray(response?.sales)
    ? response.sales
    : Array.isArray(response?.data?.sales)
      ? response.data.sales
      : Array.isArray(response?.data?.data)
        ? response.data.data
        : Array.isArray(response?.data)
          ? response.data
          : Array.isArray(response?.purchases)
            ? response.purchases
            : Array.isArray(response)
              ? response
              : [];

const extractcustomersArray = (response) =>
  Array.isArray(response?.data)
    ? response.data
    : Array.isArray(response?.customers)
      ? response.customers
      : Array.isArray(response?.data?.customers)
        ? response.data.customers
        : Array.isArray(response)
          ? response
          : [];

const normalizecustomerLookupValue = (value) =>
  String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

const buildcustomerLookupKeys = (customerLike = {}) => {
  const customerObject =
    customerLike?.customer && typeof customerLike.customer === "object"
      ? customerLike.customer
      : customerLike?.selectedCustomer && typeof customerLike.selectedCustomer === "object"
        ? customerLike.selectedCustomer
      : {};

  const keys = [
    customerLike?.name,
    customerLike?.customerName,
    customerLike?.companyName,
    customerLike?.company,
    customerLike?.contactPerson,
    customerLike?.customer,
    customerObject?.name,
    customerObject?.companyName,
    customerObject?.company,
    customerObject?.contactPerson,
  ]
    .map(normalizecustomerLookupValue)
    .filter(Boolean)
    .filter((value) => value !== "walk-in" && value !== "walk in");

  return [...new Set(keys)];
};

const getpurchaseQuantity = (item = {}) => Number(item?.quantity ?? item?.qty ?? 0) || 0;

const getpurchaseUnitPrice = (item = {}) =>
  parseAmount(item?.salePrice ?? item?.price ?? item?.unitPrice ?? item?.purchasePrice ?? item?.retailSalePrice);

const getReturnedpurchaseQuantity = (item = {}) =>
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

const getChargedpurchaseQuantity = (item = {}) =>
  Math.max(
    Number(item?.chargedQuantity ?? item?.quantity ?? item?.qty ?? 0) - getReturnedpurchaseQuantity(item),
    0
  );

const getNormalizedpurchaseAmounts = (purchase = {}) => {
  const items = Array.isArray(purchase?.items)
    ? purchase.items
    : Array.isArray(purchase?.products)
      ? purchase.products
      : [];
  const derivedSubtotal = items.reduce(
    (sum, item) => sum + getChargedpurchaseQuantity(item) * getpurchaseUnitPrice(item),
    0,
  );
  const derivedTotal = Math.max(
    Number((derivedSubtotal - parseAmount(purchase?.discount) + parseAmount(purchase?.taxAmount)).toFixed(2)),
    0
  );
  const rawTotal = parseAmount(purchase?.totalAmount ?? purchase?.totalPrice ?? purchase?.total);
  const rawPaid = parseAmount(purchase?.paidAmount ?? purchase?.cashReceived);
  const rawBalance = parseAmount(purchase?.balance);
  const totalAmount = rawTotal > 0 ? Math.max(rawTotal, derivedTotal) : derivedTotal;
  const paidAmount = rawPaid;
  const computedBalanceAmount = Math.max(totalAmount - paidAmount, 0);
  const balanceAmount = rawBalance > 0 ? Math.max(rawBalance, computedBalanceAmount) : computedBalanceAmount;

  return {
    totalAmount,
    paidAmount,
    balanceAmount,
  };
};

const normalizepurchasePaymentHistory = (payment = {}) => {
  const amount = parseAmount(payment?.appliedAmount ?? payment?.amount);
  const date = payment?.appliedAt || payment?.date || "";

  return {
    ...payment,
    appliedAmount: amount,
    amount,
    appliedAt: date,
    date,
  };
};

const getPaymentEntryId = (paymentLike = {}) =>
  String(paymentLike?.id || paymentLike?._id || paymentLike?.paymentId || "").trim();

const buildpurchasePaymentEntry = (purchase = {}, payment = {}, purchaseIndex = 0, paymentIndex = 0) => {
  const normalizedPayment = normalizepurchasePaymentHistory(payment);
  const billReference = String(purchase?.invoiceNo || purchase?.invoiceNumber || purchase?._id || "");

  return {
    ...payment,
    id: String(
      getPaymentEntryId(payment) ||
        `${billReference || "PURCHASE"}-PAY-${purchaseIndex + 1}-${paymentIndex + 1}`,
    ),
    amount: formatRs(normalizedPayment.amount),
    amountNumber: normalizedPayment.amount,
    date: normalizedPayment.date || "",
    method: payment?.method || "N/A",
    reference: payment?.reference || billReference,
    billId: payment?.billId || billReference,
    notes: payment?.notes || "",
    transactionTimestamp:
      normalizedPayment.appliedAt || normalizedPayment.date || purchase?.updatedAt || purchase?.saleDate || purchase?.purchaseDate || "",
    source: "payment",
  };
};

const buildpurchaseUpdatePayload = (purchase = {}, overrides = {}) => {
  const nextpurchase = {
    ...purchase,
    ...overrides,
  };
  const totalAmount = Number(nextpurchase?.totalAmount || nextpurchase?.totalPrice || nextpurchase?.total || 0);
  const paidAmount = Number(nextpurchase?.paidAmount || 0);
  const paymentHistory = Array.isArray(nextpurchase?.paymentHistory)
    ? nextpurchase.paymentHistory.map((entry) => normalizepurchasePaymentHistory(entry))
    : [];

  return strippurchaseMetaFields({
    ...nextpurchase,
    totalAmount,
    paidAmount,
    balance: Math.max(totalAmount - paidAmount, 0),
    paymentStatus: getpurchasePaymentStatus(paidAmount, totalAmount),
    paymentHistory,
  });
};

const syncCachedpurchase = (nextpurchase) => {
  if (typeof window === "undefined" || !nextpurchase) {
    return;
  }

  try {
    const raw = window.localStorage.getItem(CRUD_CACHE_KEY);
    if (!raw) {
      return;
    }

    const parsed = JSON.parse(raw);
    const cachedResponse = parsed?.["/sales"];
    const currentpurchases = extractpurchasesArray(cachedResponse);
    if (!currentpurchases.length) {
      return;
    }

    const targetKeys = [nextpurchase?._id, nextpurchase?.invoiceNo, nextpurchase?.invoiceNumber]
      .map((value) => String(value || "").trim())
      .filter(Boolean);

    let replaced = false;
    const updatedpurchases = currentpurchases.map((purchase) => {
      const purchaseKeys = [purchase?._id, purchase?.invoiceNo, purchase?.invoiceNumber]
        .map((value) => String(value || "").trim())
        .filter(Boolean);

      if (targetKeys.some((key) => purchaseKeys.includes(key))) {
        replaced = true;
        return { ...purchase, ...nextpurchase };
      }

      return purchase;
    });

    if (!replaced) {
      return;
    }

    if (Array.isArray(cachedResponse?.data)) {
      parsed["/sales"] = { ...cachedResponse, data: updatedpurchases };
    } else if (Array.isArray(cachedResponse?.data?.data)) {
      parsed["/sales"] = {
        ...cachedResponse,
        data: {
          ...cachedResponse.data,
          data: updatedpurchases,
        },
      };
    } else if (Array.isArray(cachedResponse)) {
      parsed["/sales"] = updatedpurchases;
    } else {
      parsed["/sales"] = {
        ...(cachedResponse || {}),
        data: updatedpurchases,
      };
    }

    window.localStorage.setItem(CRUD_CACHE_KEY, JSON.stringify(parsed));
  } catch {
    // Ignore cache sync issues and keep the page flow working from live state.
  }
};

const syncCachedcustomer = (nextcustomer) => {
  if (typeof window === "undefined" || !nextcustomer) {
    return;
  }

  try {
    const raw = window.localStorage.getItem(CRUD_CACHE_KEY);
    if (!raw) {
      return;
    }

    const parsed = JSON.parse(raw);
    const targetIds = [nextcustomer?._id, nextcustomer?.id]
      .map((value) => String(value || "").trim())
      .filter(Boolean);

    if (!targetIds.length) {
      return;
    }

    const hasMatchingcustomerId = (customerLike = {}) => {
      const customerIds = [customerLike?._id, customerLike?.id]
        .map((value) => String(value || "").trim())
        .filter(Boolean);
      return targetIds.some((id) => customerIds.includes(id));
    };

    let changed = false;
    const cachedcustomersResponse = parsed?.["/customers"];
    const currentcustomers = extractcustomersArray(cachedcustomersResponse);

    if (currentcustomers.length) {
      let replaced = false;
      const updatedcustomers = currentcustomers.map((customerEntry) => {
        if (!hasMatchingcustomerId(customerEntry)) {
          return customerEntry;
        }

        replaced = true;
        return {
          ...customerEntry,
          ...nextcustomer,
        };
      });

      if (replaced) {
        changed = true;
        if (Array.isArray(cachedcustomersResponse?.data)) {
          parsed["/customers"] = { ...cachedcustomersResponse, data: updatedcustomers };
        } else if (Array.isArray(cachedcustomersResponse?.customers)) {
          parsed["/customers"] = { ...cachedcustomersResponse, customers: updatedcustomers };
        } else if (Array.isArray(cachedcustomersResponse?.data?.customers)) {
          parsed["/customers"] = {
            ...cachedcustomersResponse,
            data: {
              ...cachedcustomersResponse.data,
              customers: updatedcustomers,
            },
          };
        } else if (Array.isArray(cachedcustomersResponse)) {
          parsed["/customers"] = updatedcustomers;
        } else {
          parsed["/customers"] = {
            ...(cachedcustomersResponse || {}),
            data: updatedcustomers,
          };
        }
      }
    }

    Object.keys(parsed).forEach((cacheKey) => {
      const detailMatch = cacheKey.match(/^\/customers\/([^/]+)$/);
      if (!detailMatch || !targetIds.includes(String(detailMatch[1] || "").trim())) {
        return;
      }

      const cachedValue = parsed[cacheKey];
      changed = true;

      if (cachedValue?.customer) {
        parsed[cacheKey] = {
          ...cachedValue,
          customer: {
            ...cachedValue.customer,
            ...nextcustomer,
          },
        };
        return;
      }

      if (cachedValue?.data?.customer) {
        parsed[cacheKey] = {
          ...cachedValue,
          data: {
            ...cachedValue.data,
            customer: {
              ...cachedValue.data.customer,
              ...nextcustomer,
            },
          },
        };
        return;
      }

      if (cachedValue?.data && hasMatchingcustomerId(cachedValue.data)) {
        parsed[cacheKey] = {
          ...cachedValue,
          data: {
            ...cachedValue.data,
            ...nextcustomer,
          },
        };
        return;
      }

      parsed[cacheKey] = {
        ...(cachedValue || {}),
        ...nextcustomer,
      };
    });

    if (!changed) {
      return;
    }

    window.localStorage.setItem(CRUD_CACHE_KEY, JSON.stringify(parsed));
    targetIds.forEach((id) => {
      window.localStorage.removeItem(`customer-payment-history:${id}`);
    });
  } catch {
    // Ignore cache sync issues and keep the page flow working from live state.
  }
};

const clearcustomerLocalCaches = (customerLike = {}, options = {}) => {
  if (typeof window === "undefined") {
    return;
  }

  const { clearPurchases = false } = options;

  try {
    const customerIds = [customerLike?._id, customerLike?.id]
      .map((value) => String(value || "").trim())
      .filter(Boolean);

    customerIds.forEach((id) => {
      window.localStorage.removeItem(`customer-payment-history:${id}`);
    });

    const raw = window.localStorage.getItem(CRUD_CACHE_KEY);
    if (!raw) {
      return;
    }

    const parsed = JSON.parse(raw);

    if (customerIds.length) {
      delete parsed["/customers"];
      delete parsed["/customerpayments"];
      customerIds.forEach((id) => {
        delete parsed[`/customers/${id}`];
        delete parsed[`/customers/updatecustomer/${id}`];
        delete parsed[`/customerpayments?customerId=${id}`];
        delete parsed[`/customerpayments/getCustomerPaymentsByCustomer/${id}`];
      });
    }

    if (clearPurchases) {
      delete parsed["/sales"];
    }

    window.localStorage.setItem(CRUD_CACHE_KEY, JSON.stringify(parsed));
  } catch {
    // Ignore cache cleanup issues and let live reload keep the page correct.
  }
};

const readCachedpurchases = () => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(CRUD_CACHE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return extractpurchasesArray(parsed?.["/sales"]);
  } catch {
    return [];
  }
};

const mergeLatestpurchases = (networkpurchases) => {
  if (Array.isArray(networkpurchases) && networkpurchases.length) {
    return networkpurchases;
  }

  return readCachedpurchases();
};

const matchescustomerpurchase = (purchase, customer) => {
  const purchasecustomer = purchase?.customer || purchase?.selectedCustomer || purchase?.selectedcustomer || {};
  const purchasecustomerId = purchase?.customerId || purchasecustomer?._id || purchasecustomer?.id || "";
  const targetId = customer?.id || customer?._id || "";
  const purchaseCnic = String(purchase?.cnic || purchase?.customerCnic || purchasecustomer?.cnic || "").trim();
  const targetCnic = String(customer?.cnic || "").trim();
  const purchasePhone = String(
    purchase?.phone ||
      purchase?.mobile ||
      purchase?.customerPhone ||
      purchase?.customerMobile ||
      purchasecustomer?.phone ||
      purchasecustomer?.mobile ||
      ""
  )
    .replace(/\D/g, "")
    .trim();
  const targetPhone = String(customer?.phone || customer?.mobile || "")
    .replace(/\D/g, "")
    .trim();
  const purchaseLookupKeys = buildcustomerLookupKeys({
    ...purchase,
    customer: purchasecustomer,
    selectedCustomer: purchasecustomer,
    name: purchase?.customerName,
    company: purchase?.companyName || purchase?.company || purchasecustomer?.companyName || purchasecustomer?.company,
    contactPerson: purchase?.contactPerson || purchasecustomer?.contactPerson,
  });
  const customerLookupKeys = buildcustomerLookupKeys(customer);

  return (
    (targetId && purchasecustomerId && String(purchasecustomerId) === String(targetId)) ||
    (targetCnic && purchaseCnic && purchaseCnic === targetCnic) ||
    (targetPhone && purchasePhone && purchasePhone === targetPhone) ||
    purchaseLookupKeys.some((key) => customerLookupKeys.includes(key))
  );
};

const getEntryMatchKeys = (...values) =>
  values
    .map((value) => String(value || "").trim().toLowerCase())
    .filter(Boolean);

const getProductpurchaseStatus = (item = {}) => {
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

export default function customerDetailPage() {
  const router = useRouter();
  const params = useParams();
  const customerId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const defaultDateRange = getDefaultDateRange();

  const [customer, setcustomer] = useState(null);
  const [customerpurchases, setcustomerpurchases] = useState([]);
  const [customerPayments, setcustomerPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("bills");
  const [billDateRange, setBillDateRange] = useState(defaultDateRange);
  const [transactionPage, setTransactionPage] = useState(1);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);
  const [blankBillDebit, setBlankBillDebit] = useState(0);
  const [blankBillDebitDraft, setBlankBillDebitDraft] = useState("0");
  const [blankBillPaymentId, setBlankBillPaymentId] = useState("");
  const [showBlankBillModal, setShowBlankBillModal] = useState(false);
  const [editTransactionTarget, setEditTransactionTarget] = useState(null);
  const [isSavingEditedPayment, setIsSavingEditedPayment] = useState(false);
  const [deleteTransactionTarget, setDeleteTransactionTarget] = useState(null);
  const [isDeletingTransaction, setIsDeletingTransaction] = useState(false);
  const [canEditcustomer, setCanEditcustomer] = useState(false);
  const [canDeletepurchase, setCanDeletepurchase] = useState(false);
  const [paymentForm, setPaymentForm] = useState({
    method: "Cash",
    reference: "",
    date: new Date().toISOString().split("T")[0],
    partialAmount: "",
  });

  const transactionsPerPage = 10;

  const findLinkedpurchase = (bill) => {
    const billKeys = [
      String(bill?.id || ""),
      String(bill?.reference || ""),
      String(bill?.billId || ""),
    ]
      .map((value) => String(value || "").trim())
      .filter(Boolean);

    return customerpurchases.find((purchase) => {
      const purchaseKeys = [
        String(purchase?._id || ""),
        String(purchase?.invoiceNo || ""),
        String(purchase?.invoiceNumber || ""),
      ]
        .map((value) => String(value || "").trim())
        .filter(Boolean);

      return billKeys.some((billKey) =>
        purchaseKeys.some((purchaseKey) => {
          if (billKey === purchaseKey) return true;

          const normalizedBillKey = billKey.toLowerCase();
          const normalizedpurchaseKey = purchaseKey.toLowerCase();

          return (
            normalizedBillKey.includes(normalizedpurchaseKey) ||
            normalizedpurchaseKey.includes(normalizedBillKey)
          );
        })
      );
    });
  };

  const getLinkedPurchaseRemainingAmount = (purchase = null, fallbackBill = null) => {
    const fallbackRemainingAmount = Math.max(Number(fallbackBill?.remainingAmountNumber || 0), 0);

    if (purchase?._id) {
      return Math.max(
        getNormalizedpurchaseAmounts(purchase).balanceAmount,
        fallbackRemainingAmount,
        0
      );
    }

    return fallbackRemainingAmount;
  };

  const getCustomerPendingPayableAmount = () => {
    if (adjustedFilteredTransactions.length > 0) {
      return Math.max(Number(latestTransactionBalance || 0), 0);
    }

    const latestBillPendingAmount = Number(latestBillBalance || 0);
    if (latestBillPendingAmount > 0) {
      return latestBillPendingAmount;
    }

    const totalPendingAmount = Number(totalcustomerPendingAmount || 0);
    if (totalPendingAmount > 0) {
      return totalPendingAmount;
    }

    return Math.max(Number(customer?.totalDue || 0), 0);
  };

  const getSelectedBillPayableAmount = (bill = null) => {
    if (bill?.source === "customer-total") {
      return getCustomerPendingPayableAmount();
    }

    const billPendingAmount = Math.max(
      Number(bill?.remainingAmountNumber || 0),
      Number(bill?.balance || 0),
      0
    );

    return billPendingAmount > 0 ? billPendingAmount : getCustomerPendingPayableAmount();
  };

  const getEditablePaymentPayableAmount = (entry = null) =>
    Math.max(
      Number(entry?.linkedBillRemaining || 0) + Number(entry?.credit || 0),
      0
    );

  useEffect(() => {
    const { permissions } = readStoredAuth();
    setCanEditcustomer(hasPermission(permissions, "customer_EDIT"));
    setCanDeletepurchase(hasPermission(permissions, "purchase_DELETE"));
  }, []);

  useEffect(() => {
    if (!showPaymentModal || !selectedBill) return;
    setPaymentForm({
      method: "Cash",
      reference: "",
      date: new Date().toISOString().split("T")[0],
      partialAmount: getSelectedBillPayableAmount(selectedBill),
    });
  }, [showPaymentModal, selectedBill]);

  const loadcustomerData = useCallback(async ({ silent = false } = {}) => {
    if (!customerId) {
      setLoading(false);
      return;
    }

    if (!silent) {
      setLoading(true);
    }

    try {
      const [customerResponse, purchasesResponse, paymentsResponse] = await Promise.all([
        apiRequest(`/customers/${customerId}`, { method: "GET", suppressErrorToast: silent }),
        apiRequest("/sales", {
          method: "GET",
          suppressErrorToast: true,
          suppressErrorLog: true,
        }),
        apiRequest(`/customerpayments/getCustomerPaymentsByCustomer/${customerId}`, {
          method: "GET",
          suppressErrorToast: true,
          suppressErrorLog: true,
        }),
      ]);

      if (customerResponse?.success && customerResponse?.customer) {
        const normalizedcustomer = normalizecustomer(customerResponse.customer);
        setcustomer(normalizedcustomer);

        const purchasesArray = mergeLatestpurchases(extractpurchasesArray(purchasesResponse));

        setcustomerpurchases(purchasesArray.filter((purchase) => matchescustomerpurchase(purchase, normalizedcustomer)));
        const normalizedPayments = extractcustomerPaymentsArray(paymentsResponse).map((payment) =>
          normalizecustomerPayment(payment)
        );
        const remainingBillPayment = normalizedPayments.find(
          (payment) =>
            String(payment?.notes || "").trim() === REMAINING_BILL_MARKER
        );
        setBlankBillDebit(Number(remainingBillPayment?.amountNumber || 0));
        setBlankBillPaymentId(String(remainingBillPayment?.paymentId || remainingBillPayment?.id || "").trim());
        setcustomerPayments(
          normalizedPayments.filter(
            (payment) =>
              String(payment?.notes || "").trim() !== REMAINING_BILL_MARKER
          )
        );
      } else {
        setcustomer(null);
        setBlankBillDebit(0);
        setBlankBillPaymentId("");
        setcustomerPayments([]);
      }
    } catch (error) {
      console.error("customer detail load error:", error);
      setcustomer(null);
      setBlankBillDebit(0);
      setBlankBillPaymentId("");
      setcustomerPayments([]);
    } finally {
      if (!silent) {
        setLoading(false);
      }
    }
  }, [customerId]);

  useEffect(() => {
    loadcustomerData();

    const handleFocus = () => loadcustomerData({ silent: true });
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        loadcustomerData({ silent: true });
      }
    };

    const intervalId = window.setInterval(() => {
      loadcustomerData({ silent: true });
    }, 15000);

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [loadcustomerData]);

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

    return customerpurchases.map((purchase, index) => {
      const { totalAmount, paidAmount, balanceAmount } = getNormalizedpurchaseAmounts(purchase);
      const matchedStoredBill = getEntryMatchKeys(purchase?._id, purchase?.invoiceNo, purchase?.invoiceNumber)
        .map((key) => sourceBillsByKey.get(key))
        .find(Boolean);
      const items = Array.isArray(purchase?.items)
        ? purchase.items
        : Array.isArray(purchase?.products)
          ? purchase.products
          : [];
      const hasStoredPaidAmount =
        matchedStoredBill &&
        Object.prototype.hasOwnProperty.call(matchedStoredBill, "paidAmount") &&
        String(matchedStoredBill?.paidAmount ?? "").trim() !== "";
      const storedPaidAmount = parseAmount(matchedStoredBill?.paidAmount);
      const effectivePaidAmount = hasStoredPaidAmount ? storedPaidAmount : Number(paidAmount || 0);
      const remaining = hasStoredPaidAmount
        ? Math.max(totalAmount - effectivePaidAmount, 0)
        : Math.max(balanceAmount || totalAmount - effectivePaidAmount, 0);
      const description = items
        .map((item) => item?.productName || item?.name)
        .filter(Boolean)
        .join(", ");
      const reference = String(purchase?.invoiceNo || purchase?.invoiceNumber || purchase?._id || "");
      const purchaseStatus = formatStatusLabel(
        purchase?.paymentStatus ||
          purchase?.purchaseStatus ||
          matchedStoredBill?.status ||
          getpurchasePaymentStatus(effectivePaidAmount, totalAmount),
        "Pending",
      ).toLowerCase();

      return {
        id: reference || `purchase-${index + 1}`,
        purchaseId: String(purchase?._id || ""),
        date: purchase?.saleDate || purchase?.createdAt || "",
        description: description || "N/A",
        amount: formatRs(totalAmount),
        paidAmount: formatRs(effectivePaidAmount),
        remainingAmount: formatRs(remaining),
        amountNumber: totalAmount,
        paidAmountNumber: effectivePaidAmount,
        remainingAmountNumber: remaining,
        status: purchaseStatus,
        reference,
        transactionTimestamp:
          purchase?.updatedAt ||
          matchedStoredBill?.updatedAt ||
          purchase?.createdAt ||
          purchase?.saleDate ||
          purchase?.purchaseDate ||
          "",
        source: "bill",
      };
    });
  })();

  const totalBillAmount = displayBills.reduce((sum, bill) => sum + bill.amountNumber, 0);
  const totalOutstandingAmount = displayBills.reduce((sum, bill) => sum + bill.remainingAmountNumber, 0);
  const totalcustomerPendingAmount = Math.max(
    Number(totalOutstandingAmount || 0) + Number(blankBillDebit || 0),
    0
  );

  const paymentHistoryByKey = new Map();
  customerPayments.forEach((payment, index) => {
    const key = String(payment?.paymentId || payment?.id || `PAY-${index + 1}`).trim();
    paymentHistoryByKey.set(key, payment);
  });

  const paymentHistoryToShow = Array.from(paymentHistoryByKey.values()).sort((a, b) => {
    const dateDiff = (getNormalizedDateValue(b.date) ?? 0) - (getNormalizedDateValue(a.date) ?? 0);
    if (dateDiff !== 0) return dateDiff;
    return (
      getTransactionSortValue(b.transactionTimestamp, b.date) -
      getTransactionSortValue(a.transactionTimestamp, a.date)
    );
  });

  const paymentTransactionsToShow = paymentHistoryToShow.reduce((entries, payment) => {
    const isCustomerTotalPaymentBatch = isCustomerTotalPaymentBatchNote(payment?.notes);
    const isOldBillPayment =
      String(payment?.notes || "").trim() === REMAINING_BILL_PAYMENT_NOTE;

    if (isCustomerTotalPaymentBatch) {
      const batchKey = String(payment?.notes || "").trim();
      const matchingEntry = entries.find(
        (entry) => String(entry?.notes || "").trim() === batchKey
      );

      if (matchingEntry) {
        matchingEntry.amountNumber =
          Number(matchingEntry.amountNumber || 0) + Number(payment?.amountNumber || 0);
        matchingEntry.amount = formatRs(matchingEntry.amountNumber);
        matchingEntry.paymentIds = [
          ...new Set(
            [
              ...(Array.isArray(matchingEntry.paymentIds) ? matchingEntry.paymentIds : []),
              String(payment?.paymentId || payment?.id || "").trim(),
            ].filter(Boolean)
          ),
        ];
        matchingEntry.isGroupedPayment = matchingEntry.paymentIds.length > 1;
        return entries;
      }

      entries.push({
        ...payment,
        paymentIds: [String(payment?.paymentId || payment?.id || "").trim()].filter(Boolean),
        isGroupedPayment: false,
      });
      return entries;
    }

    if (!isOldBillPayment) {
      entries.push({ ...payment });
      return entries;
    }

    const matchingEntry = entries.find(
      (entry) =>
        String(entry?.notes || "").trim() !== REMAINING_BILL_PAYMENT_NOTE &&
        String(entry?.reference || "").trim() === String(payment?.reference || "").trim() &&
        String(entry?.method || "").trim() === String(payment?.method || "").trim() &&
        getNormalizedDateValue(entry?.date) === getNormalizedDateValue(payment?.date)
    );

    if (matchingEntry) {
      matchingEntry.amountNumber =
        Number(matchingEntry.amountNumber || 0) + Number(payment?.amountNumber || 0);
      matchingEntry.amount = formatRs(matchingEntry.amountNumber);
      return entries;
    }

    entries.push({ ...payment });
    return entries;
  }, []);

  const transactionFeed = [...displayBills.map((bill, index) => ({
    id: `bill-${bill.id}-${index}`,
    type: "bill",
    typeLabel: "bill",
    date: bill.date,
    transactionTimestamp: bill.transactionTimestamp,
    reference: bill.reference,
    particulars: bill.description,
    debit: bill.amountNumber,
        credit: 0,
        savedOrder: index,
        status: formatStatusLabel(bill.status, "Pending"),
      })), ...paymentTransactionsToShow.map((payment, index) => ({
        id: `payment-${payment.id}-${index}`,
        paymentId: String(payment?.id || ""),
        type: "payment",
        typeLabel: "payment",
        date: payment.date,
        transactionTimestamp: payment.transactionTimestamp,
        reference: payment.reference || payment.billId || payment.id,
        billId: payment.billId || "",
        paymentReference: payment.reference || "",
        particulars:
          isCustomerTotalPaymentBatchNote(payment?.notes)
            ? "N/A"
            : String(payment?.notes || "").trim() === REMAINING_BILL_PAYMENT_NOTE
            ? "old bill payment"
            : payment.notes || "N/A",
        debit: 0,
        credit: payment.amountNumber,
        savedOrder: displayBills.length + index,
        status: "Received",
        method: payment.method,
        notes: payment.notes || "",
        paymentIds: Array.isArray(payment?.paymentIds) ? payment.paymentIds : [],
        isGroupedPayment: Boolean(payment?.isGroupedPayment),
  }))].sort((a, b) => {
    const dateDiff = (getNormalizedDateValue(b.date) ?? 0) - (getNormalizedDateValue(a.date) ?? 0);
    if (dateDiff !== 0) return dateDiff;
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
  const latestTransactionBalance = Number(adjustedFilteredTransactions?.[0]?.balance || 0);
  const shouldShowAddPaymentButton =
    Number(latestTransactionBalance || 0) > 0 || Number(latestBillBalance || 0) > 0;
  const blankBillRow = {
    id: "blank-bill-row",
    type: "Old Bill",
    date: "",
    reference: "",
    particulars: "Old Bill",
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

  const purchasedProducts = customerpurchases.flatMap((purchase, purchaseIndex) =>
    (Array.isArray(purchase?.items) ? purchase.items : Array.isArray(purchase?.products) ? purchase.products : []).map((item, itemIndex) => ({
      id: [
        String(purchase?._id || purchaseIndex),
        String(item?.productId?._id || item?.productId || itemIndex),
        String(item?.productName || item?.name || itemIndex),
        String(itemIndex),
      ].join("-"),
      date: purchase?.saleDate || purchase?.createdAt || "",
      reference: purchase?.invoiceNo || purchase?._id || "-",
      name: item?.productName || item?.name || "Item",
      quantity: Number(item?.quantity || 0),
      unitPrice: Number((item?.unitPrice ?? item?.purchasePrice) || 0),
      status: getProductpurchaseStatus(item),
      total:
        Number(item?.totalPrice ?? 0) ||
        Number((item?.unitPrice ?? item?.purchasePrice) || 0) * Number(item?.quantity || 0),
    }))
  );

  const persistcustomerLedger = async (nextBills) => {
    const nextTotalDue = nextBills.reduce(
      (sum, bill) => sum + Math.max(parseAmount(bill.amount) - parseAmount(bill.paidAmount), 0),
      0
    );

    const payload = {
      bills: nextBills,
      totalDue: nextTotalDue,
      lastPurchase: customer?.lastPurchase || "",
    };

    let response = null;
    try {
      response = await apiRequest(`/customers/${customerId}`, {
        method: "PUT",
        data: payload,
      });
    } catch (primaryError) {
      try {
        response = await apiRequest(`/customers/updatecustomer/${customerId}`, {
          method: "PUT",
          data: payload,
        });
      } catch (fallbackError) {
        console.error("customer ledger save error:", fallbackError || primaryError);
        return false;
      }
    }

    if (response?.success && response?.customer) {
      const normalizedNextcustomer = normalizecustomer(response.customer);
      setcustomer(normalizedNextcustomer);
      syncCachedcustomer(normalizedNextcustomer);
      return true;
    }

    if (response?.success) {
      let normalizedNextcustomer = null;
      setcustomer((prev) => {
        if (!prev) {
          return prev;
        }

        normalizedNextcustomer = normalizecustomer({
          ...prev,
          bills: nextBills,
          totalDue: nextTotalDue,
          lastPurchase: prev?.lastPurchase || "",
        });
        return normalizedNextcustomer;
      });
      if (normalizedNextcustomer) {
        syncCachedcustomer(normalizedNextcustomer);
      }
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

  const hasMatchingReferenceValue = (values = [], candidates = []) =>
    values.some((value) => value && candidates.some((candidate) => candidate && candidate === value));

  const iscustomerLedgerPaymentMatch = (payment, entry, linkedpurchase = null) => {
    if (isPaymentEntryMatch(payment, entry)) {
      return true;
    }

    const paymentAmount = parseAmount(payment?.amountNumber ?? payment?.amount);
    const entryAmount = Number(entry?.credit || 0);
    if (paymentAmount !== entryAmount) {
      return false;
    }

    const paymentDate = String(payment?.date || payment?.appliedAt || "").trim();
    const entryDate = String(entry?.date || "").trim();
    const sameDate =
      paymentDate === entryDate ||
      getNormalizedDateValue(paymentDate) === getNormalizedDateValue(entryDate);

    if (!sameDate) {
      return false;
    }

    const referenceCandidates = [
      String(entry?.reference || "").trim(),
      String(entry?.billId || "").trim(),
      String(entry?.paymentReference || "").trim(),
      String(linkedpurchase?.invoiceNo || linkedpurchase?.invoiceNumber || linkedpurchase?._id || "").trim(),
    ].filter(Boolean);

    const paymentCandidates = [
      String(payment?.reference || "").trim(),
      String(payment?.billId || "").trim(),
      getPaymentEntryId(payment),
    ].filter(Boolean);

    return hasMatchingReferenceValue(referenceCandidates, paymentCandidates);
  };

  const isPaymentEntryMatch = (payment, entry) => {
    if (entry?.paymentId && getPaymentEntryId(payment) === String(entry.paymentId)) {
      return true;
    }

    const paymentAmount = parseAmount(payment?.amountNumber ?? payment?.amount);
    const entryAmount = Number(entry?.credit || 0);
    const sameAmount = paymentAmount === entryAmount;
    const paymentDate = String(payment?.date || payment?.appliedAt || "").trim();
    const entryDate = String(entry?.date || "").trim();
    const sameDate =
      paymentDate === entryDate ||
      getNormalizedDateValue(paymentDate) === getNormalizedDateValue(entryDate);
    const entryReferenceCandidates = [
      String(entry?.reference || "").trim(),
      String(entry?.billId || "").trim(),
      String(entry?.paymentReference || "").trim(),
    ].filter(Boolean);
    const paymentReferenceCandidates = [
      String(payment?.reference || "").trim(),
      String(payment?.billId || "").trim(),
      getPaymentEntryId(payment),
    ].filter(Boolean);
    const sameMethod = String(payment?.method || "") === String(entry?.method || "");

    return sameAmount && sameDate && (hasMatchingReferenceValue(entryReferenceCandidates, paymentReferenceCandidates) || sameMethod);
  };

  const isPurchasePaymentEntryMatch = (purchase, payment, entry, purchaseIndex = 0, paymentIndex = 0) => {
    const builtPaymentEntry = buildpurchasePaymentEntry(purchase, payment, purchaseIndex, paymentIndex);
    if (isPaymentEntryMatch(builtPaymentEntry, entry)) {
      return true;
    }

    const paymentAmount = parseAmount(payment?.amount ?? payment?.appliedAmount);
    const entryAmount = Number(entry?.credit || 0);
    if (paymentAmount !== entryAmount) {
      return false;
    }

    const paymentDate = String(payment?.date || payment?.appliedAt || "").trim();
    const entryDate = String(entry?.date || "").trim();
    const sameDate =
      paymentDate === entryDate ||
      getNormalizedDateValue(paymentDate) === getNormalizedDateValue(entryDate);

    if (!sameDate) {
      return false;
    }

    const referenceCandidates = [
      String(payment?.reference || "").trim(),
      String(payment?.billId || "").trim(),
      String(purchase?.invoiceNo || purchase?.invoiceNumber || purchase?._id || "").trim(),
      getPaymentEntryId(payment),
      builtPaymentEntry.id,
    ].filter(Boolean);
    const entryReferenceCandidates = [
      String(entry?.reference || "").trim(),
      String(entry?.billId || "").trim(),
      String(entry?.paymentReference || "").trim(),
      String(entry?.paymentId || "").trim(),
    ].filter(Boolean);
    const sameMethod = String(payment?.method || "") === String(entry?.method || "");

    return sameDate && (hasMatchingReferenceValue(entryReferenceCandidates, referenceCandidates) || sameMethod);
  };

  const removeMatchingcustomerLedgerPayments = (payments = [], entry, linkedpurchase = null) =>
    (Array.isArray(payments) ? payments : []).filter(
      (payment) => !iscustomerLedgerPaymentMatch(payment, entry, linkedpurchase)
    );

  const getGroupedPaymentEntries = (entry = null) => {
    if (!entry?.isGroupedPayment) {
      return [];
    }

    const batchKey = String(entry?.notes || "").trim();
    if (!batchKey) {
      return [];
    }

    return customerPayments.filter(
      (payment) => String(payment?.notes || "").trim() === batchKey
    );
  };

  const findLinkedpurchaseForPaymentRecord = (paymentRecord = {}) => {
    const directSaleId = String(paymentRecord?.saleId || "").trim();
    if (directSaleId) {
      const directMatch = customerpurchases.find(
        (purchase) => String(purchase?._id || "").trim() === directSaleId
      );
      if (directMatch) {
        return directMatch;
      }
    }

    return (
      findLinkedpurchase({
        ...paymentRecord,
        id: String(paymentRecord?.billId || paymentRecord?.reference || paymentRecord?.id || ""),
        reference: String(paymentRecord?.billId || paymentRecord?.reference || ""),
        billId: String(paymentRecord?.billId || ""),
      }) || null
    );
  };

  const createCustomerTotalPaymentBatch = async ({
    amount,
    paymentDate,
    reference,
    method,
    batchNote = `${CUSTOMER_TOTAL_PAYMENT_BATCH_PREFIX}${Date.now()}`,
  }) => {
    const outstandingBills = [...displayBills]
      .filter((billEntry) => Number(billEntry?.remainingAmountNumber || 0) > 0)
      .sort(
        (a, b) =>
          getTransactionSortValue(a.transactionTimestamp, a.date) -
          getTransactionSortValue(b.transactionTimestamp, b.date)
      );
    const payableAmount = getSelectedBillPayableAmount(selectedBill);
    const outstandingBillsTotal = outstandingBills.reduce(
      (sum, billEntry) => sum + Number(billEntry?.remainingAmountNumber || 0),
      0
    );
    let remainingToAllocate = Number(amount || 0);
    let touchedPurchasePayments = false;

    for (const outstandingBill of outstandingBills) {
      if (remainingToAllocate <= 0) {
        break;
      }

      const outstandingBillAmount = Number(outstandingBill?.remainingAmountNumber || 0);
      const allocationAmount = Math.min(outstandingBillAmount, remainingToAllocate);
      if (allocationAmount <= 0) {
        continue;
      }

      const linkedOutstandingPurchase = findLinkedpurchase(outstandingBill);
      const paymentResponse = await apiRequest("/customerpayments/createCustomerPayment", {
        method: "POST",
        allowOfflineCrud: false,
        data: {
          customerId: customer.id || customer._id,
          saleId: linkedOutstandingPurchase?._id || "",
          billId: getBillReferenceValue(outstandingBill),
          paidAmount: allocationAmount,
          paymentMethod: method,
          paymentDate,
          reference,
          notes: batchNote,
        },
      });

      if (!paymentResponse?.success) {
        throw new Error(paymentResponse?.message || "Failed to record payment.");
      }

      if (paymentResponse?.sale?._id) {
        touchedPurchasePayments = true;
        syncCachedpurchase(paymentResponse.sale);
      }

      remainingToAllocate -= allocationAmount;
    }

    if (remainingToAllocate > 0) {
      const customerRemainingBillAmount = Math.max(
        payableAmount - outstandingBillsTotal,
        0
      );

      if (customerRemainingBillAmount > 0) {
        const remainingBillPaymentResponse = await apiRequest(
          "/customerpayments/createCustomerPayment",
          {
            method: "POST",
            allowOfflineCrud: false,
            data: {
              customerId: customer.id || customer._id,
              saleId: "",
              billId: REMAINING_BILL_REFERENCE,
              paidAmount: remainingToAllocate,
              paymentMethod: method,
              paymentDate,
              reference,
              notes: batchNote,
            },
          }
        );

        if (!remainingBillPaymentResponse?.success) {
          throw new Error(remainingBillPaymentResponse?.message || "Failed to record payment.");
        }
      }
    }

    return { touchedPurchasePayments };
  };

  const requestEditTransaction = (entry) => {
    if (entry?.type !== "payment") return;
    if (!canEditcustomer) {
      alert("You do not have permission to edit this payment.");
      return;
    }

    if (entry?.isGroupedPayment) {
      setEditTransactionTarget({
        ...entry,
        linkedBillRemaining: Number(getCustomerPendingPayableAmount() || 0),
        linkedBillAmount: Number(entry?.credit || 0),
      });
      setPaymentForm({
        method: entry.method || "Cash",
        reference: String(entry.paymentReference || entry.reference || "").trim(),
        date: (() => {
          const nextDate = entry.date ? new Date(entry.date) : new Date();
          return Number.isNaN(nextDate.getTime())
            ? toDateInputValue(new Date())
            : toDateInputValue(nextDate);
        })(),
        partialAmount: String(Number(entry.credit || 0)),
      });
      return;
    }

    const linkedBill =
      displayBills.find((bill) => String(bill?.id || "") === String(entry?.billId || entry?.reference || "")) || null;

    setEditTransactionTarget({
      ...entry,
      linkedBillRemaining: Number(
        linkedBill?.remainingAmountNumber ??
          (isRemainingBillPaymentEntry(entry) ? entry?.balance : 0) ??
          0
      ),
      linkedBillAmount: Number(linkedBill?.amountNumber || 0),
    });
    setPaymentForm({
      method: entry.method || "Cash",
      reference: String(
        entry.paymentReference ||
          entry.reference ||
          getBillReferenceValue(linkedBill || entry) ||
          ""
      ).trim(),
      date: (() => {
        const nextDate = entry.date ? new Date(entry.date) : new Date();
        return Number.isNaN(nextDate.getTime())
          ? toDateInputValue(new Date())
          : toDateInputValue(nextDate);
      })(),
      partialAmount: String(Number(entry.credit || 0)),
    });
  };

  const requestEditBlankBill = () => {
    setBlankBillDebitDraft(String(Number(blankBillDebit || 0)));
    setShowBlankBillModal(true);
  };

  const handleSaveBlankBillCredit = async (event) => {
    event.preventDefault();
    if (!customer) return;
    const nextDebit = Number(blankBillDebitDraft || 0);
    if (Number.isNaN(nextDebit) || nextDebit < 0) {
      alert("Debit amount must be 0 or greater.");
      return;
    }

    try {
      const customerIdentifier = customer.id || customer._id;
      const existingPaymentId = String(blankBillPaymentId || "").trim();

      if (nextDebit <= 0) {
        if (existingPaymentId) {
          const deleteResponse = await apiRequest(
            `/customerpayments/deleteCustomerPayment/${existingPaymentId}`,
            {
              method: "DELETE",
              allowOfflineCrud: false,
              data: {
                customerId: customerIdentifier,
                saleId: "",
                billId: REMAINING_BILL_REFERENCE,
                paidAmount: Number(blankBillDebit || 0),
                paymentDate: new Date().toISOString().split("T")[0],
              },
            }
          );

          if (!deleteResponse?.success) {
            alert(deleteResponse?.message || "Failed to update old bill.");
            return;
          }
        }
      } else if (existingPaymentId) {
        const updateResponse = await apiRequest(
          `/customerpayments/updateCustomerPayment/${existingPaymentId}`,
          {
            method: "PUT",
            allowOfflineCrud: false,
            data: {
              customerId: customerIdentifier,
              saleId: "",
              previousSaleId: "",
              billId: REMAINING_BILL_REFERENCE,
              paidAmount: nextDebit,
              paymentMethod: "Cash",
              paymentDate: new Date().toISOString().split("T")[0],
              reference: REMAINING_BILL_REFERENCE,
              notes: REMAINING_BILL_MARKER,
            },
          }
        );

        if (!updateResponse?.success) {
          alert(updateResponse?.message || "Failed to update old bill.");
          return;
        }
      } else {
        const createResponse = await apiRequest("/customerpayments/createCustomerPayment", {
          method: "POST",
          allowOfflineCrud: false,
          data: {
            customerId: customerIdentifier,
            saleId: "",
            billId: REMAINING_BILL_REFERENCE,
            paidAmount: nextDebit,
            paymentMethod: "Cash",
            paymentDate: new Date().toISOString().split("T")[0],
            reference: REMAINING_BILL_REFERENCE,
            notes: REMAINING_BILL_MARKER,
          },
        });

        if (!createResponse?.success) {
          alert(createResponse?.message || "Failed to update old bill.");
          return;
        }
      }

      clearcustomerLocalCaches(customer, { clearPurchases: false });
      await loadcustomerData({ silent: true });
      setShowBlankBillModal(false);
    } catch (error) {
      alert(error?.message || "Failed to update old bill.");
    }
  };

  const handleEditPaymentTransaction = async (event) => {
    event.preventDefault();
    if (!customer || !editTransactionTarget) return;

    const nextAmount = Number(paymentForm.partialAmount || 0);
    const previousAmount = Number(editTransactionTarget.credit || 0);
    const maxAllowedAmount = editTransactionTarget?.isGroupedPayment
      ? previousAmount + Number(getCustomerPendingPayableAmount() || 0)
      : previousAmount + Number(editTransactionTarget.linkedBillRemaining || 0);

    if (!nextAmount || nextAmount <= 0 || nextAmount > maxAllowedAmount) {
      alert(`Payment amount must be > 0 and <= ${maxAllowedAmount}.`);
      return;
    }

    setIsSavingEditedPayment(true);
    try {
      if (editTransactionTarget?.isGroupedPayment) {
        const groupedPayments = getGroupedPaymentEntries(editTransactionTarget);
        if (groupedPayments.length === 0) {
          alert("Grouped payment records not found.");
          return;
        }

        let touchedPurchasePayments = false;

        for (const groupedPayment of groupedPayments) {
          const paymentId = String(groupedPayment?.paymentId || groupedPayment?.id || "").trim();
          if (!paymentId) {
            continue;
          }

          const linkedpurchase = findLinkedpurchaseForPaymentRecord(groupedPayment);
          const deleteResponse = await apiRequest(`/customerpayments/deleteCustomerPayment/${paymentId}`, {
            method: "DELETE",
            allowOfflineCrud: false,
            data: {
              customerId: customer.id || customer._id,
              saleId: linkedpurchase?._id || "",
              billId: String(groupedPayment?.billId || groupedPayment?.reference || "").trim(),
              paidAmount: Number(groupedPayment?.amountNumber || 0),
              paymentDate: groupedPayment?.date || "",
            },
          });

          if (!deleteResponse?.success) {
            alert(deleteResponse?.message || "Failed to update payment.");
            return;
          }

          if (deleteResponse?.sale?._id) {
            touchedPurchasePayments = true;
            syncCachedpurchase(deleteResponse.sale);
          }
        }

        const recreatedPayment = await createCustomerTotalPaymentBatch({
          amount: nextAmount,
          paymentDate: paymentForm.date,
          reference: String(paymentForm.reference || "").trim(),
          method: paymentForm.method,
        });

        clearcustomerLocalCaches(customer, {
          clearPurchases: touchedPurchasePayments || recreatedPayment.touchedPurchasePayments,
        });
        await loadcustomerData({ silent: true });
        setEditTransactionTarget(null);
        return;
      }

      const paymentId = String(editTransactionTarget.paymentId || editTransactionTarget.id || "").trim();
      if (!paymentId) {
        alert("Payment record not found.");
        return;
      }

      const linkedpurchase = findLinkedpurchase(editTransactionTarget);
      const linkedBill =
        displayBills.find((bill) =>
          hasMatchingReferenceValue(
            [
              String(editTransactionTarget?.billId || "").trim(),
              String(editTransactionTarget?.reference || "").trim(),
            ],
            [
              String(bill?.id || "").trim(),
              String(bill?.reference || "").trim(),
              String(getBillReferenceValue(bill) || "").trim(),
            ],
          ),
        ) || null;
      const billReference = isRemainingBillPaymentEntry(editTransactionTarget)
        ? REMAINING_BILL_REFERENCE
        : getBillReferenceValue(linkedBill || editTransactionTarget);

      const updateResponse = await apiRequest(`/customerpayments/updateCustomerPayment/${paymentId}`, {
        method: "PUT",
        allowOfflineCrud: false,
        data: {
          customerId: customer.id || customer._id,
          saleId: linkedpurchase?._id || "",
          previousSaleId: linkedpurchase?._id || "",
          billId: billReference,
          paidAmount: nextAmount,
          paymentMethod: paymentForm.method,
          paymentDate: paymentForm.date,
          reference: String(paymentForm.reference || "").trim(),
          notes: editTransactionTarget.notes || "",
        },
      });

      if (!updateResponse?.success) {
        alert(updateResponse?.message || "Failed to update payment.");
        return;
      }

      if (updateResponse?.sale?._id) {
        syncCachedpurchase(updateResponse.sale);
      }

      clearcustomerLocalCaches(customer, { clearPurchases: Boolean(linkedpurchase?._id) });
      await loadcustomerData({ silent: true });
      setEditTransactionTarget(null);
    } catch (error) {
      alert(error?.message || "Failed to update payment.");
    } finally {
      setIsSavingEditedPayment(false);
    }
  };

  const requestDeleteTransaction = (entry) => {
    if (entry?.type !== "payment") return;
    if (!canEditcustomer) {
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
      if (!canDeletepurchase) {
        alert("You do not have permission to delete this bill.");
        setIsDeletingTransaction(false);
        return;
      }

      const linkedpurchase = findLinkedpurchase(entry);
      if (!linkedpurchase?._id) {
        alert("Linked bill record not found.");
        setIsDeletingTransaction(false);
        return;
      }

      const confirmed = window.confirm(`Delete bill ${entry.reference || linkedpurchase.invoiceNo || ""}?`);
      if (!confirmed) {
        setIsDeletingTransaction(false);
        return;
      }

      const deleteResponse = await apiRequest(`/purchases/deletepurchase/${linkedpurchase._id}`, {
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
      const saved = await persistcustomerLedger(nextBills);
      if (!saved) {
        alert("Bill deleted, but customer ledger cleanup failed. Please refresh and verify the remaining transactions.");
      }
      await loadcustomerData({ silent: true });
      setDeleteTransactionTarget(null);
      setIsDeletingTransaction(false);
      return;
    }

    if (!canEditcustomer) {
      alert("You do not have permission to delete this payment.");
      setIsDeletingTransaction(false);
      return;
    }

    try {
      if (entry?.isGroupedPayment) {
        const groupedPayments = getGroupedPaymentEntries(entry);
        if (groupedPayments.length === 0) {
          alert("Grouped payment records not found.");
          return;
        }

        let touchedPurchasePayments = false;

        for (const groupedPayment of groupedPayments) {
          const paymentId = String(groupedPayment?.paymentId || groupedPayment?.id || "").trim();
          if (!paymentId) {
            continue;
          }

          const linkedpurchase = findLinkedpurchaseForPaymentRecord(groupedPayment);
          const deleteResponse = await apiRequest(`/customerpayments/deleteCustomerPayment/${paymentId}`, {
            method: "DELETE",
            allowOfflineCrud: false,
            data: {
              customerId: customer.id || customer._id,
              saleId: linkedpurchase?._id || "",
              billId: String(groupedPayment?.billId || groupedPayment?.reference || "").trim(),
              paidAmount: Number(groupedPayment?.amountNumber || 0),
              paymentDate: groupedPayment?.date || "",
            },
          });

          if (!deleteResponse?.success) {
            alert(deleteResponse?.message || "Failed to delete payment.");
            return;
          }

          if (deleteResponse?.sale?._id) {
            touchedPurchasePayments = true;
            syncCachedpurchase(deleteResponse.sale);
          }
        }

        clearcustomerLocalCaches(customer, { clearPurchases: touchedPurchasePayments });
        await loadcustomerData({ silent: true });
        setDeleteTransactionTarget(null);
        return;
      }

      const paymentId = String(entry?.paymentId || entry?.id || "").trim();
      if (!paymentId) {
        alert("Payment record not found.");
        return;
      }

      const entryBillReference = String(
        entry?.billId || entry?.paymentReference || entry?.reference || ""
      ).trim();
      const linkedpurchase =
        findLinkedpurchase({
          ...entry,
          id: entryBillReference || entry?.id || "",
          reference: entryBillReference || entry?.reference || "",
          billId: entryBillReference || entry?.billId || "",
        }) ||
        customerpurchases.find((purchase, purchaseIndex) =>
          (Array.isArray(purchase?.paymentHistory) ? purchase.paymentHistory : []).some((payment, paymentIndex) =>
            isPurchasePaymentEntryMatch(purchase, payment, entry, purchaseIndex, paymentIndex)
          )
        );
      const deleteResponse = await apiRequest(`/customerpayments/deleteCustomerPayment/${paymentId}`, {
        method: "DELETE",
        allowOfflineCrud: false,
        data: {
          customerId: customer.id || customer._id,
          saleId: linkedpurchase?._id || "",
          billId: entryBillReference,
          paidAmount: Number(entry?.credit || 0),
          paymentDate: entry?.date || "",
        },
      });

      if (!deleteResponse?.success) {
        alert(deleteResponse?.message || "Failed to delete payment.");
        return;
      }

      if (deleteResponse?.sale?._id) {
        syncCachedpurchase(deleteResponse.sale);
      }

      clearcustomerLocalCaches(customer, { clearPurchases: Boolean(linkedpurchase?._id) });
      await loadcustomerData({ silent: true });
      setDeleteTransactionTarget(null);
    } catch (error) {
      alert(error?.message || "Failed to delete payment.");
    } finally {
      setIsDeletingTransaction(false);
    }
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
      const customerLevelPendingAmount = getCustomerPendingPayableAmount();
      setSelectedBill({
        id: `TOTAL-${customer?.name || "customer"}`,
        reference: `TOTAL-${customer?.name || "customer"}`,
        description: `Outstanding balance for ${customer?.name || "customer"}`,
        date: new Date().toISOString().split("T")[0],
        amountNumber: customerLevelPendingAmount,
        paidAmountNumber: 0,
        remainingAmountNumber: customerLevelPendingAmount,
        amount: formatRs(customerLevelPendingAmount),
        paidAmount: formatRs(0),
        remainingAmount: formatRs(customerLevelPendingAmount),
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
      reference: "",
    }));
    setShowPaymentModal(true);
  };

  const handleRecordPayment = async (event) => {
    event.preventDefault();
    if (!canEditcustomer || !customer) return;

    const paidAmount = Number(paymentForm.partialAmount || 0);
    if (!paidAmount || paidAmount <= 0) {
      alert("Partial amount must be > 0.");
      return;
    }

    const paymentDate = paymentForm.date || new Date().toISOString().split("T")[0];
    let targetBill = selectedBill;

    if (selectedBill?.source === "customer-total") {
      const customerTotalPaymentBatchNote = `${CUSTOMER_TOTAL_PAYMENT_BATCH_PREFIX}${Date.now()}`;
      const outstandingBills = [...displayBills]
        .filter((billEntry) => Number(billEntry?.remainingAmountNumber || 0) > 0)
        .sort(
          (a, b) =>
            getTransactionSortValue(a.transactionTimestamp, a.date) -
            getTransactionSortValue(b.transactionTimestamp, b.date)
        );
      const payableAmount = getSelectedBillPayableAmount(selectedBill);
      const outstandingBillsTotal = outstandingBills.reduce(
        (sum, billEntry) => sum + Number(billEntry?.remainingAmountNumber || 0),
        0
      );
      let remainingToAllocate = paidAmount;
      let touchedPurchasePayments = false;

      try {
        for (const outstandingBill of outstandingBills) {
          if (remainingToAllocate <= 0) {
            break;
          }

          const outstandingBillAmount = Number(outstandingBill?.remainingAmountNumber || 0);
          const allocationAmount = Math.min(outstandingBillAmount, remainingToAllocate);
          if (allocationAmount <= 0) {
            continue;
          }

          const linkedOutstandingPurchase = findLinkedpurchase(outstandingBill);
          const paymentResponse = await apiRequest("/customerpayments/createCustomerPayment", {
            method: "POST",
            allowOfflineCrud: false,
            data: {
              customerId: customer.id || customer._id,
              saleId: linkedOutstandingPurchase?._id || "",
              billId: getBillReferenceValue(outstandingBill),
              paidAmount: allocationAmount,
              paymentMethod: paymentForm.method,
              paymentDate,
              reference: String(paymentForm.reference || "").trim(),
              notes: customerTotalPaymentBatchNote,
            },
          });

          if (!paymentResponse?.success) {
            alert(paymentResponse?.message || "Failed to record payment.");
            return;
          }

          if (paymentResponse?.sale?._id) {
            touchedPurchasePayments = true;
            syncCachedpurchase(paymentResponse.sale);
          }

          remainingToAllocate -= allocationAmount;
        }

        if (remainingToAllocate > 0) {
          const customerRemainingBillAmount = Math.max(
            payableAmount - outstandingBillsTotal,
            0
          );
          if (customerRemainingBillAmount <= 0) {
            return;
          }

          const remainingBillPaymentResponse = await apiRequest(
            "/customerpayments/createCustomerPayment",
            {
              method: "POST",
              allowOfflineCrud: false,
              data: {
                customerId: customer.id || customer._id,
                saleId: "",
                billId: REMAINING_BILL_REFERENCE,
                paidAmount: remainingToAllocate,
                paymentMethod: paymentForm.method,
                paymentDate,
                reference: String(paymentForm.reference || "").trim(),
                notes: customerTotalPaymentBatchNote,
              },
            }
          );

          if (!remainingBillPaymentResponse?.success) {
            alert(remainingBillPaymentResponse?.message || "Failed to record payment.");
            return;
          }
        }

        clearcustomerLocalCaches(customer, { clearPurchases: touchedPurchasePayments });
        await loadcustomerData({ silent: true });
        setShowPaymentModal(false);
        setSelectedBill(null);
      } catch (error) {
        alert(error?.message || "Failed to record payment.");
      }
      return;
    }

    if (!targetBill) {
      alert("Bill not found for this customer.");
      return;
    }

    const linkedpurchase = findLinkedpurchase(targetBill);
    const maxPayableAmount = linkedpurchase?._id
      ? getLinkedPurchaseRemainingAmount(linkedpurchase, targetBill)
      : getSelectedBillPayableAmount(targetBill);

    try {
      const paymentResponse = await apiRequest("/customerpayments/createCustomerPayment", {
        method: "POST",
        allowOfflineCrud: false,
        data: {
          customerId: customer.id || customer._id,
          saleId: linkedpurchase?._id || "",
          billId: getBillReferenceValue(targetBill),
          paidAmount,
          paymentMethod: paymentForm.method,
          paymentDate,
          reference: String(paymentForm.reference || "").trim(),
          notes: "",
        },
      });

      if (!paymentResponse?.success) {
        alert(paymentResponse?.message || "Failed to record payment.");
        return;
      }

      if (paymentResponse?.sale?._id) {
        syncCachedpurchase(paymentResponse.sale);
      }

      clearcustomerLocalCaches(customer, { clearPurchases: Boolean(linkedpurchase?._id) });
      await loadcustomerData({ silent: true });
      setShowPaymentModal(false);
      setSelectedBill(null);
    } catch (error) {
      alert(error?.message || "Failed to record payment.");
    }
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
            <td>${formatRoundedRs(entry.debit)}</td>
            <td>${formatRs(entry.credit)}</td>
            <td>${formatRoundedRs(entry.balance)}</td>
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
          <h1>customer Bills Report</h1>
          <div class="box">
            <div class="row"><strong>customer</strong><span>${customer.name}</span></div>
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
          <p className="text-lg font-semibold text-gray-900 dark:text-white">customer not found.</p>
          <button
            onClick={() => router.push("/AdminDashboard/customers")}
            className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white"
          >
            Back to customers
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
              <p className="text-lg font-bold text-emerald-900 dark:text-white">{formatRoundedRs(totalBillAmount)}</p>
            </div>
            <div className="rounded-2xl bg-amber-50 px-4 py-3 dark:bg-amber-900/20">
              <p className="text-xs text-amber-700 dark:text-amber-300">Total Pending</p>
              <p className="text-lg font-bold text-amber-900 dark:text-white">{formatRoundedRs(latestTransactionBalance)}</p>
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
              <div className="flex flex-col gap-4 rounded-2xl bg-gray-50 p-4 dark:bg-gray-700/40">
                <div className="flex flex-nowrap items-center gap-3 overflow-x-auto">
                  <div className="flex shrink-0 items-center gap-2 whitespace-nowrap">
                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400">From</label>
                    <input type="date" value={billDateRange.from} onChange={(e) => setBillDateRange((prev) => ({ ...prev, from: e.target.value }))} className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800" />
                  </div>
                  <div className="flex shrink-0 items-center gap-2 whitespace-nowrap">
                    <label className="text-xs font-medium text-gray-500 dark:text-gray-400">To</label>
                    <input type="date" value={billDateRange.to} onChange={(e) => setBillDateRange((prev) => ({ ...prev, to: e.target.value }))} className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800" />
                  </div>
                  {shouldShowAddPaymentButton ? (
                    <button
                      onClick={() => openPaymentModal()}
                      disabled={!canEditcustomer}
                      className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2 text-sm font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <Wallet className="h-4 w-4" />
                      Add Payment
                    </button>
                  ) : null}
                  <button onClick={handlePrintTransactions} className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700">
                    <Printer className="h-4 w-4" />
                    Print Total Bills
                  </button>
                </div>
                <div className="space-y-2">
                  <p className="text-left text-sm font-semibold text-gray-900 dark:text-white">Total Bill Amount: {formatRs(totalBillAmount)}</p>
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
                            <td className="px-2.5 py-2.5 text-sm font-medium text-gray-900 dark:text-white">{entry.typeLabel || entry.type}</td>
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
                            <td className="px-2.5 py-2.5 text-sm text-gray-700 dark:text-gray-300">{formatRoundedRs(entry.debit)}</td>
                            <td className="px-2.5 py-2.5 text-sm text-gray-700 dark:text-gray-300">{formatRs(entry.credit)}</td>
                            <td className="px-2.5 py-2.5 text-sm font-medium text-gray-900 dark:text-white">{formatRoundedRs(entry.balance)}</td>
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
                                    disabled={!canEditcustomer}
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-200 text-blue-600 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-blue-900/60 dark:text-blue-300 dark:hover:bg-blue-950/30"
                                    aria-label="Edit payment transaction"
                                    title="Edit payment"
                                  >
                                    <Edit3 className="h-4 w-4" />
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => requestDeleteTransaction(entry)}
                                    disabled={!canEditcustomer}
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
                <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">customer Profile</h3>
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
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Payable Amount</label>
                  <input
                    type="text"
                    readOnly
                    value={formatRs(getEditablePaymentPayableAmount(editTransactionTarget))}
                    className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Edit Payment</label>
                  <input
                    type="number"
                    min="0"
                    max={getEditablePaymentPayableAmount(editTransactionTarget)}
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
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Payable Amount</label>
                  <input type="text" readOnly value={formatRs(getSelectedBillPayableAmount(selectedBill))} className="w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-700" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Add Payment</label>
                  <input type="number" min="0" max={getSelectedBillPayableAmount(selectedBill)} value={paymentForm.partialAmount} onChange={(e) => setPaymentForm((prev) => ({ ...prev, partialAmount: e.target.value }))} className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Remaining Amount</label>
                  <input
                    type="text"
                    readOnly
                    value={formatRs(
                      Math.max(
                        getSelectedBillPayableAmount(selectedBill) - Number(paymentForm.partialAmount || 0),
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
                    value={paymentForm.reference}
                    onChange={(e) => setPaymentForm((prev) => ({ ...prev, reference: e.target.value }))}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800"
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
