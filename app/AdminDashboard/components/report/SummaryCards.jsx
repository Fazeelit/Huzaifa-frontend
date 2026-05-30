"use client";

import React, { useState, useEffect } from "react";
import { apiRequest } from "./../../authservice/api";
import { hasPermission, parseStoredPermissions } from "../../authservice/permissions";
import { Eye, EyeOff } from "lucide-react";

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

const toNumber = (value) => {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : 0;
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

const isWalkInSale = (sale) => {
  const customerName = String(sale?.customerName || sale?.customer || "").trim().toLowerCase();
  const customerId = sale?.customerId || sale?.customer?._id || "";
  return !customerId && (!customerName || customerName === "walk-in");
};

const getSaleTotal = (sale) => {
  const directTotal = toNumber(
    sale?.totalAmount ?? sale?.total ?? sale?.grandTotal ?? sale?.subtotal
  );

  if (directTotal > 0) {
    return directTotal;
  }

  return sale?.products?.reduce((sum, product) => {
    const unitPrice = toNumber(product?.salePrice ?? product?.price);
    const qty = toNumber(product?.quantity ?? product?.qty);
    return sum + unitPrice * qty;
  }, 0) || 0;
};

const SummaryCards = () => {
  const [cards, setCards] = useState([]);
  const [showValues, setShowValues] = useState(false);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        const currentMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
        const nextMonthStart = new Date(today.getFullYear(), today.getMonth() + 1, 1);
        const permissions = parseStoredPermissions();

        const canSaleView = hasPermission("SALE_VIEW", permissions);
        const canExpenseView = hasPermission("EXPENSE_VIEW", permissions);
        const canProductView = hasPermission("PRODUCT_VIEW", permissions);
        const canPurchaseView = hasPermission("PURCHASE_VIEW", permissions);
        const canCustomerView = hasPermission("CUSTOMER_VIEW", permissions);

        /* ================= FETCH ALL ================= */
        const [
          salesRes,
          expenseRes,
          productRes,
          purchaseRes,
          customerRes,
        ] = await Promise.all([
          canSaleView ? apiRequest("/sales") : Promise.resolve({ data: [] }),
          canExpenseView ? apiRequest("/expenses") : Promise.resolve({ data: [] }),
          canProductView ? apiRequest("/products") : Promise.resolve({ data: [] }),
          canPurchaseView ? apiRequest("/purchases") : Promise.resolve({ data: [] }),
          canCustomerView ? apiRequest("/customers") : Promise.resolve({ data: [] }),
        ]);

        const sales = getArray(salesRes);
        const expenses = getArray(expenseRes);
        const products = getArray(productRes);
        const purchases = getArray(purchaseRes);
        const customers = getCustomersArray(customerRes);

        /* ================= TODAY FILTER ================= */
        const todaysSales = sales.filter((s) =>
          isToday(s.saleDate || s.createdAt)
        );

        const calculateProductTotals = (sale) =>
          sale.products?.reduce(
            (acc, p) => {
              const product = products.find(
                (prod) => prod._id === p.productId || prod.name === p.name
              );
              const unitCost = Number(p.purchasePrice ?? p.cost ?? product?.purchasePrice ?? product?.cost ?? 0);
              const unitPrice = Number(p.salePrice ?? p.price ?? product?.salePrice ?? product?.price ?? 0);
              const qty = Number(p.quantity ?? 0);
              acc.totalAmount += unitPrice * qty;
              acc.totalCost += unitCost * qty;
              return acc;
            },
            { totalAmount: 0, totalCost: 0 }
          ) || { totalAmount: 0, totalCost: 0 };

        const todaySale = todaysSales.reduce((sum, sale) => sum + getSaleTotal(sale), 0);

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

        /* ================= EXPENSES ================= */
        const currentMonthExpenses = expenses.filter((expense) => {
          const expenseDate = parseLocalDate(expense.date || expense.createdAt);
          return expenseDate && expenseDate >= currentMonthStart && expenseDate < nextMonthStart;
        });

        const totalExpenses = currentMonthExpenses.reduce(
          (sum, e) => sum + Number(e.amount || e.totalamount || 0),
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

        /* ================= SET CARDS ================= */
        setCards([
          {
            title: "Today Sale",
            value: `Rs.${todaySale.toFixed(2)}`,
            bg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
          },
          {
            title: "Daily Cash",
            value: `Rs.${dailyCash.toFixed(2)}`,
            bg: "bg-gradient-to-br from-teal-500 to-emerald-600",
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
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 sm:w-auto"
        >
          {showValues ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {showValues ? "Hide Values" : "Show Values"}
        </button>
      </div>

      <div className="mx-auto grid w-full max-w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`rounded-xl shadow-lg text-white ${card.bg} hover:shadow-xl transition-all`}
          >
            <div className="p-5">
              <p className="mb-1 text-sm">{card.title}</p>
              <p className="break-words text-2xl font-bold sm:text-3xl">
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
