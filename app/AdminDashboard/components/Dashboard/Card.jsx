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
import {
  computeDailyCashSnapshot,
  getSupplierPaymentsArray,
} from "../../utils/dailyCash";

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

const getSuppliersArray = (res) =>
  Array.isArray(res?.suppliers)
    ? res.suppliers
    : Array.isArray(res?.data?.suppliers)
    ? res.data.suppliers
    : getArray(res);

const getSalesArray = (res) =>
  Array.isArray(res?.data)
    ? res.data
    : Array.isArray(res?.data?.data)
    ? res.data.data
    : Array.isArray(res)
    ? res
    : [];

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

const toNumber = (value) => {
  if (typeof value === "number") return value;
  const normalized = String(value || "").replace(/,/g, "");
  const match = normalized.match(/-?\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : 0;
};

const isDateInRange = (value, start, endExclusive) => {
  const parsed = parseLocalDate(value);
  return Boolean(parsed && parsed >= start && parsed < endExclusive);
};

const getExpenseAmount = (expense) =>
  toNumber(
    expense?.amount ??
      expense?.totalamount ??
      expense?.totalAmount ??
      expense?.expenseAmount
  );

const getPurchaseAmount = (purchase) => {
  const directTotal = toNumber(
    purchase?.totalAmount ??
      purchase?.grandTotal ??
      purchase?.subtotal ??
      purchase?.total
  );

  if (directTotal > 0) {
    return directTotal;
  }

  return (Array.isArray(purchase?.products) ? purchase.products : []).reduce(
    (sum, product) =>
      sum +
      toNumber(product?.purchasePrice ?? product?.price) *
        toNumber(product?.qty ?? product?.quantity),
    0
  );
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
        sum +
        toNumber(product?.salePrice ?? product?.price) *
          toNumber(product?.chargedQuantity ?? product?.quantity ?? product?.qty),
      0
    ) || 0
  );
};

const getDeductedSaleQuantity = (product = {}) =>
  Math.max(toNumber(product?.quantity ?? product?.qty) - toNumber(product?.returnedQuantity), 0);

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

        const currentYearStart = new Date(today.getFullYear(), 0, 1);
        const nextYearStart = new Date(today.getFullYear() + 1, 0, 1);

        /* ================= FETCH DATA ================= */
        const canSaleView = can("SALE_VIEW");
        const canExpenseView = can("EXPENSE_VIEW");
        const canProductView = can("PRODUCT_VIEW");
        const canPurchaseView = can("PURCHASE_VIEW");
        const canCustomerView = can("CUSTOMER_VIEW");
        const canSupplierView = can("SUPPLIER_VIEW");
        const [
          salesRes,
          expenseRes,
          productRes,
          purchaseRes,
          customersRes,
          suppliersRes,
          supplierPaymentsRes,
        ] = await Promise.allSettled([
          canSaleView ? apiRequest("/sales") : Promise.resolve({ data: [] }),
          canExpenseView ? apiRequest("/expenses") : Promise.resolve({ data: [] }),
          canProductView ? apiRequest("/products") : Promise.resolve({ data: [] }),
          canPurchaseView ? apiRequest("/purchases") : Promise.resolve({ data: [] }),
          canCustomerView ? apiRequest("/customers") : Promise.resolve({ customers: [] }),
          canSupplierView ? apiRequest("/suppliers") : Promise.resolve({ data: [] }),
          canSupplierView
            ? apiRequest("/supplierpayments", {
                suppressErrorToast: true,
                suppressErrorLog: true,
              })
            : Promise.resolve({ data: [] }),
        ]);

        const settledValue = (result) =>
          result.status === "fulfilled" ? result.value : { data: [] };

        const sales = getSalesArray(settledValue(salesRes));
        const expenses = getArray(settledValue(expenseRes));
        const products = getArray(settledValue(productRes));
        const purchases = getArray(settledValue(purchaseRes));
        const customers = getCustomersArray(settledValue(customersRes));
        const suppliers = getSuppliersArray(settledValue(suppliersRes));
        const supplierPayments = getSupplierPaymentsArray(
          settledValue(supplierPaymentsRes)
        );

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
          const saleTotal = getSaleTotal(sale);
          const totalPurchaseAmount = (Array.isArray(sale?.products) ? sale.products : []).reduce(
            (sum, product) => {
              const quantity = Math.max(
                getDeductedSaleQuantity(product),
                0
              );
              return sum + Number(product?.purchasePrice || 0) * quantity;
            },
            0
          );

          return Number((saleTotal - totalPurchaseAmount).toFixed(2));
        };

        const calculateSalesPageProfit = (sale) => {
          const totalPurchaseAmount = (Array.isArray(sale?.products) ? sale.products : []).reduce(
            (sum, product) => {
              const quantity = Math.max(
                getDeductedSaleQuantity(product),
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

        const { yearlyDailyCash } = computeDailyCashSnapshot({
          sales,
          expenses,
          customers,
          suppliers,
          purchases,
          supplierPayments,
          targetDate: today,
        });
        const pendingAmount = customers.reduce(
          (sum, customer) => sum + getCustomerOutstandingAmount(customer),
          0
        );

        /* ================= JANUARY 1 RESET CARDS ================= */
        const yearToDateSales = sales.filter((sale) =>
          isDateInRange(
            sale.saleDate || sale.createdAt,
            currentYearStart,
            nextYearStart
          )
        );

        const monthlySalesAmount = yearToDateSales.reduce(
          (sum, sale) => sum + Number(sale?.totalAmount || 0),
          0
        );

        const monthlyProfit = yearToDateSales
          .reduce((sum, sale) => sum + calculateSalesPageProfit(sale), 0);

        /* ================= EXPENSES ================= */
        const currentYearExpenses = expenses.filter((expense) => {
          return isDateInRange(
            expense.date || expense.createdAt,
            currentYearStart,
            nextYearStart
          );
        });

        const totalExpenses = currentYearExpenses.reduce(
          (sum, e) => sum + getExpenseAmount(e),
          0
        );

        const pendingPayments = currentYearExpenses
          .filter((e) => String(e.paymentStatus || "").toLowerCase() === "pending")
          .reduce((sum, e) => sum + getExpenseAmount(e), 0);

        const completedPayments = currentYearExpenses
          .filter((e) =>
            ["completed", "paid"].includes(
              String(e.paymentStatus || "").toLowerCase()
            )
          )
          .reduce((sum, e) => sum + getExpenseAmount(e), 0);

        /* ================= OTHER METRICS ================= */
        const lowStockItems = mergedProducts.filter(
          (p) => p.stock < 5
        ).length;

        const currentYearPurchases = purchases.filter((purchase) => {
          return isDateInRange(
            purchase.purchaseDate || purchase.date || purchase.createdAt,
            currentYearStart,
            nextYearStart
          );
        });

        const totalProductPurchase = currentYearPurchases.reduce(
          (sum, p) => sum + getPurchaseAmount(p),
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
            value: `Rs.${yearlyDailyCash.toFixed(2)}`,
            subtitle: "Daily cash balance for this year, reset every January 1",
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
            subtitle: "Current month sales profit, reset on January 1",
            icon: <TrendingUp className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-purple-500 to-pink-600",
          },
          {
            title: "Total Product Purchase",
            value: `Rs.${totalProductPurchase.toFixed(2)}`,
            subtitle: "Current month purchases, reset on January 1",
            icon: <Package className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600",
          },          
          {
            title: "Month Sales",
            value: `Rs.${monthlySalesAmount.toFixed(2)}`,
            subtitle: "Current month sales amount, reset on January 1",
            icon: <Receipt className="w-7 h-7 text-white" />,
            iconBg: "bg-gradient-to-br from-rose-500 to-red-600",
          },
          {
            title: "Total Expenses",
            value: `Rs.${totalExpenses.toFixed(2)}`,
            subtitle: `Pending: Rs.${pendingPayments.toFixed(
              2
            )} | Completed: Rs.${completedPayments.toFixed(2)} | Reset on January 1`,
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
