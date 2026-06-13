"use client";

import React, { useState, useEffect } from "react";
import { apiRequest } from "./../../authservice/api";
import { hasPermission, parseStoredPermissions } from "../../authservice/permissions";
import { Eye, EyeOff } from "lucide-react";
import { computeDailyCashSnapshot, getSupplierPaymentsArray } from "../../utils/dailyCash";

const DAILY_CASH_RESET_MONTH = 0;
const DAILY_CASH_RESET_DAY = 1;

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

const isToday = (date) => {
  const parsed = parseLocalDate(date);
  if (!parsed) return false;
  return parsed.toDateString() === new Date().toDateString();
};

const startOfDay = (date) => {
  const normalized = parseLocalDate(date);
  if (!normalized) return null;

  const localDate = new Date(normalized);
  localDate.setHours(0, 0, 0, 0);
  return localDate;
};

const getDayKey = (date) => {
  const normalized = startOfDay(date);
  return normalized ? normalized.toISOString().slice(0, 10) : null;
};

const getStartOfYear = (date) => {
  const normalized = startOfDay(date);
  if (!normalized) return null;

  return new Date(normalized.getFullYear(), DAILY_CASH_RESET_MONTH, DAILY_CASH_RESET_DAY);
};

const toNumber = (value) => {
  if (typeof value === "number") return value;
  const normalized = String(value || "").replace(/,/g, "");
  const match = normalized.match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : 0;
};

const getArray = (res) =>
  Array.isArray(res?.data)
    ? res.data
    : Array.isArray(res?.data?.data)
    ? res.data.data
    : [];

const getCustomersArray = (res) =>
  Array.isArray(res?.customers)
    ? res.customers
    : Array.isArray(res?.data?.customers)
    ? res.data.customers
    : getArray(res);

const getSuppliersArray = (res) =>
  Array.isArray(res?.suppliers)
    ? res.suppliers
    : Array.isArray(res?.data?.suppliers)
    ? res.data.suppliers
    : getArray(res);

const getCustomerPaymentHistory = (customer) =>
  Array.isArray(customer?.paymentHistory) ? customer.paymentHistory : [];

const getSaleTotal = (sale) => {
  const directTotal = toNumber(
    sale?.totalAmount ?? sale?.total ?? sale?.grandTotal ?? sale?.subtotal
  );
  if (directTotal > 0) return directTotal;

  return (
    sale?.products?.reduce(
      (sum, product) =>
        sum +
        toNumber(product?.salePrice ?? product?.price) *
          toNumber(product?.chargedQuantity ?? product?.quantity ?? product?.qty),
      0
    ) || 0
  );
};

const getChargedSaleQuantity = (product = {}) =>
  Math.max(
    toNumber(product?.chargedQuantity ?? product?.quantity ?? product?.qty) -
      toNumber(product?.returnedQuantity),
    0
  );

const getDeductedSaleQuantity = (product = {}) =>
  Math.max(toNumber(product?.quantity ?? product?.qty) - toNumber(product?.returnedQuantity), 0);

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

const isCashPaymentMethod = (value) => String(value || "").trim().toLowerCase() === "cash";

const SummaryCards = () => {
  const [cards, setCards] = useState([]);
  const [showValues, setShowValues] = useState(false);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const currentMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
        const nextMonthStart = new Date(today.getFullYear(), today.getMonth() + 1, 1);
        const permissions = parseStoredPermissions();

        const canSaleView = hasPermission("SALE_VIEW", permissions);
        const canExpenseView = hasPermission("EXPENSE_VIEW", permissions);
        const canProductView = hasPermission("PRODUCT_VIEW", permissions);
        const canPurchaseView = hasPermission("PURCHASE_VIEW", permissions);
        const canSupplierView = hasPermission("SUPPLIER_VIEW", permissions);

        /* ================= FETCH ALL ================= */
        const [
          salesRes,
          expenseRes,
          productRes,
          purchaseRes,
          customersRes,
          suppliersRes,
          supplierPaymentsRes,
        ] = await Promise.all([
          canSaleView ? apiRequest("/sales") : Promise.resolve({ data: [] }),
          canExpenseView ? apiRequest("/expenses") : Promise.resolve({ data: [] }),
          canProductView ? apiRequest("/products") : Promise.resolve({ data: [] }),
          canPurchaseView ? apiRequest("/purchases") : Promise.resolve({ data: [] }),
          hasPermission("CUSTOMER_VIEW", permissions)
            ? apiRequest("/customers")
            : Promise.resolve({ customers: [] }),
          canSupplierView ? apiRequest("/suppliers") : Promise.resolve({ data: [] }),
          canSupplierView
            ? apiRequest("/supplierpayments", {
                suppressErrorToast: true,
                suppressErrorLog: true,
              })
            : Promise.resolve({ data: [] }),
        ]);

         const sales = getArray(salesRes);

         const expenses = getArray(expenseRes);

         const products = getArray(productRes);

         const purchases = getArray(purchaseRes);

         const customers = getCustomersArray(customersRes);
         const suppliers = getSuppliersArray(suppliersRes);
         const supplierPayments = getSupplierPaymentsArray(supplierPaymentsRes);

        /* ================= TODAY FILTER ================= */
        const todaysSales = sales.filter((s) =>
          isToday(s.saleDate || s.createdAt)
        );

        /* ================= PRODUCT PROFIT ================= */
        const calculateProfit = (sale) =>
          sale.products?.reduce((sum, p) => {
            const product = products.find(
              (prod) => prod._id === p.productId || prod.name === p.name
            );
            const unitCost = Number(p.purchasePrice ?? p.cost ?? product?.purchasePrice ?? product?.cost ?? 0);
            const unitPrice = Number(p.salePrice ?? p.price ?? product?.salePrice ?? product?.price ?? 0);
            const chargedQty = getChargedSaleQuantity(p);
            const deductedQty = getDeductedSaleQuantity(p);
            return sum + unitPrice * chargedQty - unitCost * deductedQty;
          }, 0) || 0;

        const calculateProductTotals = (sale) =>
          sale.products?.reduce(
            (acc, p) => {
              const product = products.find(
                (prod) => prod._id === p.productId || prod.name === p.name
              );
              const unitCost = Number(p.purchasePrice ?? p.cost ?? product?.purchasePrice ?? product?.cost ?? 0);
              const unitPrice = Number(p.salePrice ?? p.price ?? product?.salePrice ?? product?.price ?? 0);
              const chargedQty = getChargedSaleQuantity(p);
              const deductedQty = getDeductedSaleQuantity(p);
              acc.totalAmount += unitPrice * chargedQty;
              acc.totalCost += unitCost * deductedQty;
              return acc;
            },
            { totalAmount: 0, totalCost: 0 }
          ) || { totalAmount: 0, totalCost: 0 };

        const todayProfit = todaysSales.reduce(
          (sum, s) => sum + calculateProfit(s),
          0
        );

        const todaySale = todaysSales.reduce((sum, sale) => {
          return sum + getSaleTotal(sale);
        }, 0);

        const { dailyCash } = computeDailyCashSnapshot({
          sales,
          expenses,
          customers,
          suppliers,
          purchases,
          supplierPayments,
          targetDate: today,
        });

        /* ================= EXPENSES ================= */
        const currentMonthExpenses = expenses.filter((expense) => {
          const expenseDate = parseLocalDate(expense.date || expense.createdAt);
          return expenseDate && expenseDate >= currentMonthStart && expenseDate < nextMonthStart;
        });

        const totalExpenses = currentMonthExpenses.reduce(
          (sum, e) => sum + Number(e.amount || e.totalamount || 0),
          0
        );

        const totalInvestment = currentMonthExpenses.reduce(
          (sum, e) => sum + Number(e.investment || 0),
          0
        );

        const currentMonthPurchases = purchases.filter((purchase) => {
          const purchaseDate = parseLocalDate(
            purchase.purchaseDate || purchase.date || purchase.createdAt
          );
          return purchaseDate && purchaseDate >= currentMonthStart && purchaseDate < nextMonthStart;
        });

        const totalProductPurchase = currentMonthPurchases.reduce(
          (sum, purchase) => sum + Number(purchase.totalAmount || 0),
          0
        );

        /* ================= MONTHLY PRODUCT PROFIT ================= */
        let monthlySellingPrice = 0;
        let monthlyCost = 0;

        sales
          .filter((s) => {
            const saleDate = parseLocalDate(s.saleDate || s.createdAt);
            return saleDate && saleDate >= currentMonthStart && saleDate < nextMonthStart;
          })
          .forEach((s) => {
            const { totalAmount, totalCost } =
              calculateProductTotals(s);
            monthlySellingPrice += totalAmount;
            monthlyCost += totalCost;
          });

        const monthlySales = monthlySellingPrice;
        const monthlyProfit = monthlySellingPrice - monthlyCost;

        /* ================= PROFIT MARGIN ================= */
        const profitMargin =
          monthlySellingPrice > 0
            ? ((monthlySellingPrice - monthlyCost) /
                monthlySellingPrice) *
              100
            : 0;

        /* ================= SET CARDS ================= */
        setCards([
          {
            title: "Today Sale",
            value: `Rs.${todaySale.toFixed(2)}`,
            bg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
          },
          {
            title: "Total Expenses",
            value: `Rs.${totalExpenses.toFixed(2)}`,
            bg: "bg-gradient-to-br from-red-500 to-red-600",
          },
          {
            title: "Monthly Profit",
            value: `Rs.${monthlyProfit.toFixed(2)}`,
            bg: "bg-gradient-to-br from-blue-500 to-blue-600",
          },
          {
            title: "Month Sales",
            value: `Rs.${monthlySales.toFixed(2)}`,
            bg: "bg-gradient-to-br from-purple-500 to-purple-600",
          },
          {
            title: "Total Product Purchase",
            value: `Rs.${totalProductPurchase.toFixed(2)}`,
            bg: "bg-gradient-to-br from-cyan-500 to-blue-600",
          },
          {
            title: "Daily Cash",
            value: `Rs.${dailyCash.toFixed(2)}`,
            bg: "bg-gradient-to-br from-teal-500 to-emerald-600",
          },
        ]);
      } catch (err) {
        console.error("SummaryCards error:", err);
      }
    };

    fetchSummary();
  }, []);

  return (
    <div className="space-y-3">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setShowValues((prev) => !prev)}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
        >
          {showValues ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {showValues ? "Hide Values" : "Show Values"}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`rounded-xl shadow-lg text-white ${card.bg} hover:shadow-xl transition-all`}
          >
            <div className="p-6">
              <p className="text-sm mb-1">{card.title}</p>
              <p className="text-sm font-bold">
                {showValues ? card.value : card.title === "Profit Margin" ? "**.**%" : "Rs.****"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryCards;

