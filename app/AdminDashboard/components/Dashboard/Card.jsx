"use client";

import React, { useEffect, useState } from "react";
import {
  DollarSign,
  TriangleAlert,
  TrendingUp,
  Package,
  Receipt,
  Activity,
  Wallet,
  Clock3,
  Eye,
  EyeOff,
} from "lucide-react";
import { apiRequest } from "./../../authservice/api";
import { usePermissions } from "../../authservice/usePermissions";

/* ===================== HELPERS ===================== */

// Normalize API responses
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

const getCustomerPaymentHistory = (customer) =>
  Array.isArray(customer?.paymentHistory) ? customer.paymentHistory : [];

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

// Check if date is today using local date parsing for YYYY-MM-DD values
const isToday = (date) => {
  const parsed = parseLocalDate(date);
  if (!parsed) return false;
  return parsed.toDateString() === new Date().toDateString();
};

const isSameDay = (date, targetDate) => {
  const parsed = parseLocalDate(date);
  if (!parsed || !targetDate) return false;
  return parsed.toDateString() === targetDate.toDateString();
};

const toNumber = (value) => {
  if (typeof value === "number") return value;
  const normalized = String(value || "").replace(/,/g, "");
  const match = normalized.match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : 0;
};

const getCustomerOutstandingAmount = (customer) => {
  const bills = Array.isArray(customer?.bills) ? customer.bills : [];
  if (bills.length > 0) {
    return bills.reduce(
      (sum, bill) =>
        sum + Math.max(toNumber(bill?.amount) - toNumber(bill?.paidAmount), 0),
      0
    );
  }

  const accountBalance = toNumber(customer?.accountBalance);
  if (accountBalance > 0) {
    return accountBalance;
  }

  return Math.max(toNumber(customer?.totalDue), 0);
};

const getSaleTotal = (sale) => {
  const directTotal = toNumber(
    sale?.totalAmount ?? sale?.total ?? sale?.grandTotal ?? sale?.subtotal
  );
  if (directTotal > 0) return directTotal;

  return (
    sale?.products?.reduce(
      (sum, product) =>
        sum + toNumber(product?.salePrice ?? product?.price) * toNumber(product?.quantity ?? product?.qty),
      0
    ) || 0
  );
};

const getProductLookupKeys = (product = {}) => {
  const keys = [];
  const idKey = String(product?._id || product?.productId || "").trim();
  const nameKey = String(product?.name || "").trim().toLowerCase();

  if (idKey) keys.push(idKey);
  if (nameKey) keys.push(nameKey);

  return keys;
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

const Cards = () => {
  const { can } = usePermissions();
  const [cards, setCards] = useState([]);
  const [showValues, setShowValues] = useState(false);

  const getHiddenValue = (value) => {
    if (typeof value === "number") return "****";
    if (typeof value !== "string") return "****";
    if (/^Rs\./.test(value)) return "Rs.****";
    return "****";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const currentMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
        const nextMonthStart = new Date(today.getFullYear(), today.getMonth() + 1, 1);
        const last30Days = new Date(today);
        last30Days.setDate(today.getDate() - 30);
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);

        /* ================= FETCH DATA ================= */
        const canSaleView = can("SALE_VIEW");
        const canExpenseView = can("EXPENSE_VIEW");
        const canProductView = can("PRODUCT_VIEW");
        const canPurchaseView = can("PURCHASE_VIEW");
        const canCustomerView = can("CUSTOMER_VIEW");
        const [
          salesRes,
          expenseRes,
          productRes,
          purchaseRes,
          customersRes,
        ] = await Promise.allSettled([
          canSaleView ? apiRequest("/sales") : Promise.resolve({ data: [] }),
          canExpenseView ? apiRequest("/expenses") : Promise.resolve({ data: [] }),
          canProductView ? apiRequest("/products") : Promise.resolve({ data: [] }),
          canPurchaseView ? apiRequest("/purchases") : Promise.resolve({ data: [] }),
          canCustomerView ? apiRequest("/customers") : Promise.resolve({ customers: [] }),
        ]);

        const settledValue = (result) =>
          result.status === "fulfilled" ? result.value : { data: [] };

        const sales = getArray(settledValue(salesRes));
        const expenses = getArray(settledValue(expenseRes));
        const products = getArray(settledValue(productRes));
        const purchases = getArray(settledValue(purchaseRes));
        const customers = getCustomersArray(settledValue(customersRes));

        /* ================= MERGE PRODUCTS ================= */
        const productMap = new Map();
        products.forEach((p) => {
          const normalizedProduct = {
            ...p,
            stock: Number(p.stock || 0),
            purchasePrice: Number(p.purchasePrice || p.cost || 0),
            salePrice: Number(p.salePrice || p.price || 0),
          };

          getProductLookupKeys(p).forEach((key) => {
            if (!productMap.has(key)) {
              productMap.set(key, normalizedProduct);
              return;
            }

            const existing = productMap.get(key);
            productMap.set(key, {
              ...existing,
              stock: existing.stock + normalizedProduct.stock,
            });
          });
        });
        const mergedProducts = Array.from(
          new Map(
            Array.from(productMap.values()).map((product) => [
              String(product?._id || product?.name || "").trim().toLowerCase(),
              product,
            ])
          ).values()
        );

        /* ================= TODAY FILTERS ================= */
        const todaysSales = sales.filter((s) =>
          isToday(s.saleDate || s.createdAt)
        );

        /* ================= SALE PROFIT ================= */
        const calculateProfit = (sale) => {
          const totalPurchaseAmount = (Array.isArray(sale?.products) ? sale.products : []).reduce(
            (sum, product) => {
              const quantity = Math.max(
                Number(product?.quantity || product?.qty || 0) - Number(product?.returnedQuantity || 0),
                0
              );
              return sum + Number(product?.purchasePrice || 0) * quantity;
            },
            0
          );

          return Number((Number(sale?.totalAmount || 0) - totalPurchaseAmount).toFixed(2));
        };

        const todayProfit = todaysSales.reduce(
          (sum, sale) => sum + calculateProfit(sale),
          0
        );

        const todaySale = todaysSales.reduce(
          (sum, sale) => sum + getSaleTotal(sale),
          0
        );

        const todaysExpenses = expenses
          .filter((expense) => isToday(expense.date || expense.createdAt))
          .reduce((sum, expense) => sum + toNumber(expense.amount || expense.totalamount), 0);

        const todaysCustomerPaid = customers.reduce(
          (sum, customer) =>
            sum +
            getCustomerPaymentHistory(customer)
              .filter((payment) => isToday(payment?.date || payment?.paymentDate || payment?.createdAt))
              .reduce((paymentSum, payment) => paymentSum + toNumber(payment?.amount), 0),
          0
        );

        const todaysWalkInSales = todaysSales
          .filter((sale) => isWalkInSale(sale))
          .reduce((sum, sale) => sum + getSaleTotal(sale), 0);

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
              .reduce((paymentSum, payment) => paymentSum + toNumber(payment?.amount), 0),
          0
        );

        const yesterdaysExpenses = expenses
          .filter((expense) => isSameDay(expense.date || expense.createdAt, yesterday))
          .reduce((sum, expense) => sum + toNumber(expense.amount || expense.totalamount), 0);

        const previousDayDailyCash =
          (yesterdaysWalkInSales + yesterdaysCustomerPaid) - yesterdaysExpenses;

        const dailyCash =
          previousDayDailyCash +
          (todaysWalkInSales + todaysCustomerPaid) -
          todaysExpenses;
        const pendingAmount = customers.reduce(
          (sum, customer) => sum + getCustomerOutstandingAmount(customer),
          0
        );

        /* ================= MONTHLY ================= */
        const currentMonthSales = sales.filter(
          (s) => {
            const saleDate = new Date(s.saleDate || s.createdAt);
            return !Number.isNaN(saleDate.getTime()) && saleDate >= currentMonthStart && saleDate < nextMonthStart;
          }
        );

        const monthlySalesAmount = currentMonthSales.reduce(
          (sum, s) => sum + getSaleTotal(s),
          0
        );

        const monthlyProfit = sales
          .filter((sale) => {
            const saleDate = parseLocalDate(sale.createdAt || sale.saleDate);
            return saleDate && saleDate >= last30Days;
          })
          .reduce((sum, sale) => sum + calculateProfit(sale), 0);

        /* ================= EXPENSES ================= */
        const currentMonthExpenses = expenses.filter((expense) => {
          const expenseDate = parseLocalDate(expense.date || expense.createdAt);
          return expenseDate && expenseDate >= currentMonthStart && expenseDate < nextMonthStart;
        });

        const totalExpenses = currentMonthExpenses.reduce(
          (sum, e) => sum + Number(e.amount || 0),
          0
        );

        const totalInvestment = currentMonthExpenses.reduce(
          (sum, e) => sum + Number(e.investment || 0),
          0
        );

        const pendingPayments = currentMonthExpenses
          .filter((e) => e.paymentStatus === "Pending")
          .reduce((sum, e) => sum + Number(e.amount || 0), 0);

        const completedPayments = currentMonthExpenses
          .filter((e) => e.paymentStatus === "Completed")
          .reduce((sum, e) => sum + Number(e.amount || 0), 0);

        /* ================= OTHER METRICS ================= */
        const lowStockItems = mergedProducts.filter(
          (p) => p.stock < 5
        ).length;

        const currentMonthPurchases = purchases.filter((purchase) => {
          const purchaseDate = parseLocalDate(
            purchase.purchaseDate || purchase.date || purchase.createdAt
          );
          return purchaseDate && purchaseDate >= currentMonthStart && purchaseDate < nextMonthStart;
        });

        const totalProductPurchase = currentMonthPurchases.reduce(
          (sum, p) => sum + Number(p.totalAmount || 0),
          0
        );

        /* ================= DASHBOARD CARDS ================= */
        setCards([
          {
            title: "Today Sale",
            value: `Rs.${todaySale.toFixed(2)}`,
            subtitle: `${todaysSales.length} transactions`,
            icon: <DollarSign className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-green-500 to-blue-600",
          },
          {
            title: "Daily Cash",
            value: `Rs.${dailyCash.toFixed(2)}`,
            subtitle: "Yesterday daily cash + today's net cash activity",
            icon: <Wallet className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-teal-500 to-emerald-600",
          },
          {
            title: "Pending Amount",
            value: `Rs.${pendingAmount.toFixed(2)}`,
            subtitle: "Customer outstanding balance",
            icon: <Clock3 className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-amber-500 to-red-500",
          },
          {
            title: "Today's Profit",
            value: `Rs.${todayProfit.toFixed(2)}`,
            subtitle: "(Price - Cost) x quantity",
            icon: <TrendingUp className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-emerald-500 to-blue-600",
          },
          {
            title: "Low Stock Items",
            value: lowStockItems,
            subtitle: "Stock < 5",
            icon: <TriangleAlert className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-amber-500 to-orange-600",
          },
          {
            title: "Monthly Profit",
            value: `Rs.${monthlyProfit.toFixed(2)}`,
            subtitle: "Current month sales profit",
            icon: <TrendingUp className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
          },
          {
            title: "Total Product Purchase",
            value: `Rs.${totalProductPurchase.toFixed(2)}`,
            subtitle: "Current month purchases",
            icon: <Package className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600",
          },          
          {
            title: "Month Sales",
            value: `Rs.${monthlySalesAmount.toFixed(2)}`,
            subtitle: "Current month sales amount",
            icon: <Receipt className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-rose-500 to-red-600",
          },
          {
            title: "Total Expenses",
            value: `Rs.${totalExpenses.toFixed(2)}`,
            subtitle: `Pending: Rs.${pendingPayments.toFixed(
              2
            )} | Completed: Rs.${completedPayments.toFixed(2)}`,
            icon: <Activity className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-slate-500 to-slate-700",
          },
        ]);
      } catch (error) {
        console.error("Dashboard cards error:", error);
      }
    };

    fetchData();
  }, [can]);

  return (
    <div className="space-y-3">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setShowValues((prev) => !prev)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 sm:w-auto"
        >
          {showValues ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
          {showValues ? "Hide Values" : "Show Values"}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="min-w-0 rounded-2xl border border-white/80 bg-white/90 p-0 shadow-sm ring-1 ring-slate-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="flex items-start justify-between gap-3 p-4 sm:p-5 md:p-6">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-600">{card.title}</p>
                <h3 className="break-words text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                  {showValues ? card.value : getHiddenValue(card.value)}
                </h3>
                <p className="break-words text-xs leading-5 text-slate-500">{card.subtitle}</p>
              </div>
              <div
                className={`h-12 w-12 shrink-0 ${card.iconBg} flex items-center justify-center rounded-2xl shadow-lg shadow-slate-200/60 sm:h-14 sm:w-14`}
              >
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;


