"use client";

export const parseLocalDate = (value) => {
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

export const isToday = (date) => {
  const parsed = parseLocalDate(date);
  if (!parsed) return false;
  return parsed.toDateString() === new Date().toDateString();
};

export const startOfDay = (date) => {
  const normalized = parseLocalDate(date);
  if (!normalized) return null;

  const localDate = new Date(normalized);
  localDate.setHours(0, 0, 0, 0);
  return localDate;
};

export const getDayKey = (date) => {
  const normalized = startOfDay(date);
  return normalized ? normalized.toISOString().slice(0, 10) : null;
};

export const getStartOfYear = (date) => {
  const normalized = startOfDay(date);
  if (!normalized) return null;
  return new Date(normalized.getFullYear(), 0, 1);
};

export const toNumber = (value) => {
  if (typeof value === "number") return value;
  const normalized = String(value || "").replace(/,/g, "");
  const match = normalized.match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : 0;
};

export const getCustomerPaymentHistory = (customer) =>
  Array.isArray(customer?.paymentHistory) ? customer.paymentHistory : [];

export const getSupplierPaymentHistory = (supplier) =>
  Array.isArray(supplier?.paymentHistory) ? supplier.paymentHistory : [];

export const getSupplierPaymentsArray = (response) =>
  Array.isArray(response)
    ? response
    : Array.isArray(response?.data)
    ? response.data
    : Array.isArray(response?.data?.data)
    ? response.data.data
    : Array.isArray(response?.supplierpayments)
    ? response.supplierpayments
    : Array.isArray(response?.data?.supplierpayments)
    ? response.data.supplierpayments
    : [];

const getSupplierPaymentKey = (payment = {}) => {
  const dateKey = getDayKey(
    payment?.date || payment?.paymentDate || payment?.createdAt || payment?.appliedAt
  );
  const amountKey = toNumber(payment?.amount ?? payment?.appliedAmount);
  const billKey = String(payment?.billId || payment?.invoice || payment?.reference || "").trim();
  return `${billKey}|${dateKey || ""}|${amountKey}`;
};

export const getSaleReportDateValue = (sale) =>
  sale?.createdAt || sale?.saleDate || sale?.date;

export const getSaleTotal = (sale) => {
  const directTotal = toNumber(
    sale?.totalAmount ?? sale?.total ?? sale?.grandTotal ?? sale?.subtotal
  );
  if (directTotal > 0) return directTotal;

  return (
    sale?.products?.reduce(
      (sum, product) =>
        sum +
        toNumber(product?.salePrice ?? product?.price) *
          toNumber(product?.quantity ?? product?.qty),
      0
    ) || 0
  );
};

export const isWalkInSale = (sale) => {
  const selectedCustomerType = String(
    sale?.selectedCustomer?.type || sale?.customer?.type || ""
  )
    .trim()
    .toLowerCase();
  const customerName = String(
    sale?.customerName ?? sale?.selectedCustomer?.name ?? sale?.customer?.name ?? ""
  )
    .trim()
    .toLowerCase();
  const hasCustomerId = Boolean(
    sale?.customerId ||
      sale?.selectedCustomer?.id ||
      sale?.customer?._id ||
      sale?.customer?.id
  );

  if (selectedCustomerType) {
    return selectedCustomerType === "walk-in" || selectedCustomerType === "walk in";
  }

  if (customerName) {
    return customerName === "walk-in" || customerName === "walk in";
  }

  return !hasCustomerId;
};

export const isCashPaymentMethod = (value) =>
  String(value || "").trim().toLowerCase() === "cash";

export const isSupplierCashPaymentMethod = (value) => {
  const normalized = String(value || "").trim().toLowerCase();
  if (!normalized || normalized === "n/a" || normalized === "na") return true;
  return normalized === "cash";
};

export const getPurchaseSupplierPayments = (purchase) => {
  const totalAmount = toNumber(purchase?.totalAmount);
  const pendingAmount =
    toNumber(purchase?.balance) || Math.max(totalAmount - toNumber(purchase?.paidAmount), 0);
  const derivedPaidAmount = Math.max(totalAmount - pendingAmount, 0);

  if (Array.isArray(purchase?.payments) && purchase.payments.length > 0) {
    return purchase.payments.map((payment) => ({
      amount: payment?.amount,
      date: payment?.date || purchase?.purchaseDate || purchase?.date || purchase?.createdAt,
      method: payment?.method || payment?.paymentMethod || purchase?.paymentMethod || "N/A",
    }));
  }

  if (Array.isArray(purchase?.paymentHistory) && purchase.paymentHistory.length > 0) {
    return purchase.paymentHistory.map((payment) => ({
      amount: payment?.appliedAmount ?? payment?.amount,
      date: payment?.appliedAt || payment?.date || purchase?.purchaseDate || purchase?.date || purchase?.createdAt,
      method: payment?.method || payment?.paymentMethod || purchase?.paymentMethod || "N/A",
    }));
  }

  if (derivedPaidAmount > 0) {
    return [
      {
        amount: derivedPaidAmount,
        date: purchase?.purchaseDate || purchase?.date || purchase?.createdAt,
        method: purchase?.paymentMethod || "N/A",
      },
    ];
  }

  return [];
};

export const getSupplierPaymentDateValue = (payment) =>
  payment?.date || payment?.paymentDate || payment?.createdAt || payment?.appliedAt;

export const getUnifiedSupplierPayments = ({
  suppliers = [],
  purchases = [],
  supplierPayments = [],
}) => {
  if (Array.isArray(supplierPayments) && supplierPayments.length > 0) {
    return supplierPayments.map((payment) => ({
      ...payment,
      amount: payment?.paidAmount ?? payment?.amount,
      date: getSupplierPaymentDateValue(payment),
      method: payment?.method || payment?.paymentMethod || "N/A",
    }));
  }

  const purchasePayments = purchases.flatMap((purchase) => getPurchaseSupplierPayments(purchase));
  const seenPurchaseKeys = new Set(purchasePayments.map((payment) => getSupplierPaymentKey(payment)));

  const supplierOnlyPayments = suppliers.flatMap((supplier) =>
    getSupplierPaymentHistory(supplier).filter(
      (payment) => !seenPurchaseKeys.has(getSupplierPaymentKey(payment))
    )
  );

  return [...purchasePayments, ...supplierOnlyPayments];
};

export const getTotalSupplierPaidAmount = ({
  suppliers = [],
  purchases = [],
} = {}) => {
  const safeSuppliers = Array.isArray(suppliers) ? suppliers : [];
  const safePurchases = Array.isArray(purchases) ? purchases : [];

  if (safeSuppliers.length > 0) {
    return safeSuppliers.reduce((sum, supplier) => {
      const totalAmount = toNumber(
        supplier?.purchaseStats?.totalAmount ?? supplier?.statistics?.totalAmount
      );
      const pendingAmount = toNumber(
        supplier?.purchaseStats?.pendingAmount ?? supplier?.statistics?.pendingAmount
      );
      const paidAmount = Math.max(totalAmount - pendingAmount, 0);

      return sum + paidAmount;
    }, 0);
  }

  return safePurchases.reduce((sum, purchase) => {
    const totalAmount = toNumber(purchase?.totalAmount);
    const paidAmount = toNumber(purchase?.paidAmount);
    const pendingAmount =
      toNumber(purchase?.balance) || Math.max(totalAmount - paidAmount, 0);

    return sum + Math.max(totalAmount - pendingAmount, 0);
  }, 0);
};

export const getSupplierPaidAmountInRange = ({
  suppliers = [],
  purchases = [],
  supplierPayments = [],
  startDate,
  endDate,
}) => {
  return getTotalSupplierPaidAmount({
    suppliers,
    purchases,
    supplierPayments,
    startDate,
    endDate,
  });
};

export const computeDailyCashSnapshot = ({
  sales = [],
  expenses = [],
  customers = [],
  suppliers = [],
  purchases = [],
  supplierPayments = [],
  targetDate = new Date(),
}) => {
  const targetDay = startOfDay(targetDate);
  const targetDayKey = getDayKey(targetDay);
  const startOfTargetYear = getStartOfYear(targetDay);
  const startOfTargetYearKey = getDayKey(startOfTargetYear);
  const isOnTargetDay = (value) => {
    const parsed = parseLocalDate(value);
    return Boolean(
      parsed && targetDay && parsed.toDateString() === targetDay.toDateString()
    );
  };

  const todaysSales = sales.filter((sale) => isOnTargetDay(getSaleReportDateValue(sale)));
  const todaysSalesTotal = todaysSales.reduce(
    (sum, sale) => sum + getSaleTotal(sale),
    0
  );
  const todaysWalkInSales = todaysSales
    .filter((sale) => isWalkInSale(sale))
    .reduce((sum, sale) => sum + getSaleTotal(sale), 0);

  const todaysExpenses = expenses
    .filter((expense) => isOnTargetDay(expense?.date || expense?.createdAt))
    .reduce((sum, expense) => sum + toNumber(expense?.amount || expense?.totalamount), 0);

  const todaysCustomerPaid = customers.reduce(
    (sum, customer) =>
      sum +
      getCustomerPaymentHistory(customer)
        .filter(
          (payment) =>
            isOnTargetDay(payment?.date || payment?.paymentDate || payment?.createdAt) &&
            isCashPaymentMethod(payment?.method || payment?.paymentMethod)
        )
        .reduce((paymentSum, payment) => paymentSum + toNumber(payment?.amount), 0),
    0
  );

  const todaysSupplierPaid = getSupplierPaidAmountInRange({
    suppliers,
    purchases,
    supplierPayments,
    startDate: targetDay,
    endDate: targetDay,
  });

  const dailyCashMovementByDay = new Map();
  const addCashMovement = (date, amount) => {
    const dayKey = getDayKey(date);
    if (!dayKey || !amount) return;

    dailyCashMovementByDay.set(
      dayKey,
      (dailyCashMovementByDay.get(dayKey) || 0) + amount
    );
  };

  sales.forEach((sale) => {
    addCashMovement(getSaleReportDateValue(sale), getSaleTotal(sale));
  });

  getUnifiedSupplierPayments({
    suppliers,
    purchases,
    supplierPayments,
  }).forEach((payment) => {
    if (!isSupplierCashPaymentMethod(payment?.method || payment?.paymentMethod)) return;
    addCashMovement(
      getSupplierPaymentDateValue(payment),
      -toNumber(payment?.paidAmount ?? payment?.amount ?? payment?.appliedAmount)
    );
  });

  expenses.forEach((expense) => {
    addCashMovement(
      expense?.date || expense?.createdAt,
      -toNumber(expense?.amount || expense?.totalamount)
    );
  });

  const relevantDayKeys = Array.from(dailyCashMovementByDay.keys())
    .filter((dayKey) => !startOfTargetYearKey || dayKey >= startOfTargetYearKey)
    .sort();
  if (targetDayKey && !relevantDayKeys.includes(targetDayKey)) {
    relevantDayKeys.push(targetDayKey);
    relevantDayKeys.sort();
  }

  const computedDailyCashByDay = new Map();
  relevantDayKeys.forEach((dayKey, index) => {
    let previousPositiveDailyCash = 0;

    for (let previousIndex = index - 1; previousIndex >= 0; previousIndex -= 1) {
      const previousDailyCash =
        computedDailyCashByDay.get(relevantDayKeys[previousIndex]) || 0;

      if (previousDailyCash > 0) {
        previousPositiveDailyCash = previousDailyCash;
        break;
      }
    }

    const movementForDay = dailyCashMovementByDay.get(dayKey) || 0;
    computedDailyCashByDay.set(dayKey, previousPositiveDailyCash + movementForDay);
  });

  const computedDailyCash =
    targetDayKey ? computedDailyCashByDay.get(targetDayKey) || 0 : 0;

  return {
    totalSales: todaysSalesTotal,
    totalWalkInSales: todaysWalkInSales,
    totalCustomerPaid: todaysCustomerPaid,
    totalSupplierPaid: todaysSupplierPaid,
    totalExpenses: todaysExpenses,
    dailyCash: computedDailyCash,
    yearlyDailyCash: computedDailyCash,
  };
};
