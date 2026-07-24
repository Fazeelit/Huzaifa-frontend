module.exports = [
"[project]/app/AdminDashboard/authservice/usePermissions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePermissions",
    ()=>usePermissions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/authStorage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/permissions.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const usePermissions = ()=>{
    const [permissions, setPermissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setPermissions((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseStoredPermissions"])());
        const sync = ()=>setPermissions((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseStoredPermissions"])());
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(sync);
    }, []);
    const can = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(permission)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasPermission"])(permission, permissions), [
        permissions
    ]);
    const crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(moduleKey)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCrudPermissions"])(moduleKey, permissions), [
        permissions
    ]);
    return {
        permissions,
        can,
        crud
    };
};
}),
"[project]/app/AdminDashboard/utils/dailyCash.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeDailyCashSnapshot",
    ()=>computeDailyCashSnapshot,
    "getCustomerPaymentHistory",
    ()=>getCustomerPaymentHistory,
    "getDayKey",
    ()=>getDayKey,
    "getPurchaseSupplierPayments",
    ()=>getPurchaseSupplierPayments,
    "getSaleReportDateValue",
    ()=>getSaleReportDateValue,
    "getSaleTotal",
    ()=>getSaleTotal,
    "getStartOfYear",
    ()=>getStartOfYear,
    "getSupplierPaidAmountInRange",
    ()=>getSupplierPaidAmountInRange,
    "getSupplierPaymentDateValue",
    ()=>getSupplierPaymentDateValue,
    "getSupplierPaymentHistory",
    ()=>getSupplierPaymentHistory,
    "getSupplierPaymentsArray",
    ()=>getSupplierPaymentsArray,
    "getTotalSupplierPaidAmount",
    ()=>getTotalSupplierPaidAmount,
    "getUnifiedSupplierPayments",
    ()=>getUnifiedSupplierPayments,
    "isCashPaymentMethod",
    ()=>isCashPaymentMethod,
    "isSupplierCashPaymentMethod",
    ()=>isSupplierCashPaymentMethod,
    "isToday",
    ()=>isToday,
    "isWalkInSale",
    ()=>isWalkInSale,
    "parseLocalDate",
    ()=>parseLocalDate,
    "startOfDay",
    ()=>startOfDay,
    "toNumber",
    ()=>toNumber
]);
"use client";
const parseLocalDate = (value)=>{
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
const isToday = (date)=>{
    const parsed = parseLocalDate(date);
    if (!parsed) return false;
    return parsed.toDateString() === new Date().toDateString();
};
const startOfDay = (date)=>{
    const normalized = parseLocalDate(date);
    if (!normalized) return null;
    const localDate = new Date(normalized);
    localDate.setHours(0, 0, 0, 0);
    return localDate;
};
const getDayKey = (date)=>{
    const normalized = startOfDay(date);
    return normalized ? normalized.toISOString().slice(0, 10) : null;
};
const getStartOfYear = (date)=>{
    const normalized = startOfDay(date);
    if (!normalized) return null;
    return new Date(normalized.getFullYear(), 0, 1);
};
const toNumber = (value)=>{
    if (typeof value === "number") return value;
    const normalized = String(value || "").replace(/,/g, "");
    const match = normalized.match(/-?\d+(?:\.\d+)?/);
    return match ? Number(match[0]) : 0;
};
const getCustomerPaymentHistory = (customer)=>Array.isArray(customer?.paymentHistory) ? customer.paymentHistory : [];
const getSupplierPaymentHistory = (supplier)=>Array.isArray(supplier?.paymentHistory) ? supplier.paymentHistory : [];
const getSupplierPaymentsArray = (response)=>Array.isArray(response) ? response : Array.isArray(response?.data) ? response.data : Array.isArray(response?.data?.data) ? response.data.data : Array.isArray(response?.supplierpayments) ? response.supplierpayments : Array.isArray(response?.data?.supplierpayments) ? response.data.supplierpayments : [];
const getSupplierPaymentKey = (payment = {})=>{
    const dateKey = getDayKey(payment?.date || payment?.paymentDate || payment?.createdAt || payment?.appliedAt);
    const amountKey = toNumber(payment?.amount ?? payment?.appliedAmount);
    const billKey = String(payment?.billId || payment?.invoice || payment?.reference || "").trim();
    return `${billKey}|${dateKey || ""}|${amountKey}`;
};
const getSaleReportDateValue = (sale)=>sale?.createdAt || sale?.saleDate || sale?.date;
const getSaleTotal = (sale)=>{
    const directTotal = toNumber(sale?.totalAmount ?? sale?.total ?? sale?.grandTotal ?? sale?.subtotal);
    if (directTotal > 0) return directTotal;
    return sale?.products?.reduce((sum, product)=>sum + toNumber(product?.salePrice ?? product?.price) * toNumber(product?.quantity ?? product?.qty), 0) || 0;
};
const isWalkInSale = (sale)=>{
    const selectedCustomerType = String(sale?.selectedCustomer?.type || sale?.customer?.type || "").trim().toLowerCase();
    const customerName = String(sale?.customerName ?? sale?.selectedCustomer?.name ?? sale?.customer?.name ?? "").trim().toLowerCase();
    const hasCustomerId = Boolean(sale?.customerId || sale?.selectedCustomer?.id || sale?.customer?._id || sale?.customer?.id);
    if (selectedCustomerType) {
        return selectedCustomerType === "walk-in" || selectedCustomerType === "walk in";
    }
    if (customerName) {
        return customerName === "walk-in" || customerName === "walk in";
    }
    return !hasCustomerId;
};
const isCashPaymentMethod = (value)=>String(value || "").trim().toLowerCase() === "cash";
const isSupplierCashPaymentMethod = (value)=>{
    const normalized = String(value || "").trim().toLowerCase();
    if (!normalized || normalized === "n/a" || normalized === "na") return true;
    return normalized === "cash";
};
const getPurchaseSupplierPayments = (purchase)=>{
    const totalAmount = toNumber(purchase?.totalAmount);
    const pendingAmount = toNumber(purchase?.balance) || Math.max(totalAmount - toNumber(purchase?.paidAmount), 0);
    const derivedPaidAmount = Math.max(totalAmount - pendingAmount, 0);
    if (Array.isArray(purchase?.payments) && purchase.payments.length > 0) {
        return purchase.payments.map((payment)=>({
                amount: payment?.amount,
                date: payment?.date || purchase?.purchaseDate || purchase?.date || purchase?.createdAt,
                method: payment?.method || payment?.paymentMethod || purchase?.paymentMethod || "N/A"
            }));
    }
    if (Array.isArray(purchase?.paymentHistory) && purchase.paymentHistory.length > 0) {
        return purchase.paymentHistory.map((payment)=>({
                amount: payment?.appliedAmount ?? payment?.amount,
                date: payment?.appliedAt || payment?.date || purchase?.purchaseDate || purchase?.date || purchase?.createdAt,
                method: payment?.method || payment?.paymentMethod || purchase?.paymentMethod || "N/A"
            }));
    }
    if (derivedPaidAmount > 0) {
        return [
            {
                amount: derivedPaidAmount,
                date: purchase?.purchaseDate || purchase?.date || purchase?.createdAt,
                method: purchase?.paymentMethod || "N/A"
            }
        ];
    }
    return [];
};
const getSupplierPaymentDateValue = (payment)=>payment?.date || payment?.paymentDate || payment?.createdAt || payment?.appliedAt;
const getUnifiedSupplierPayments = ({ suppliers = [], purchases = [], supplierPayments = [] })=>{
    if (Array.isArray(supplierPayments) && supplierPayments.length > 0) {
        return supplierPayments.map((payment)=>({
                ...payment,
                amount: payment?.paidAmount ?? payment?.amount,
                date: getSupplierPaymentDateValue(payment),
                method: payment?.method || payment?.paymentMethod || "N/A"
            }));
    }
    const purchasePayments = purchases.flatMap((purchase)=>getPurchaseSupplierPayments(purchase));
    const seenPurchaseKeys = new Set(purchasePayments.map((payment)=>getSupplierPaymentKey(payment)));
    const supplierOnlyPayments = suppliers.flatMap((supplier)=>getSupplierPaymentHistory(supplier).filter((payment)=>!seenPurchaseKeys.has(getSupplierPaymentKey(payment))));
    return [
        ...purchasePayments,
        ...supplierOnlyPayments
    ];
};
const getTotalSupplierPaidAmount = ({ suppliers = [], purchases = [] } = {})=>{
    const safeSuppliers = Array.isArray(suppliers) ? suppliers : [];
    const safePurchases = Array.isArray(purchases) ? purchases : [];
    if (safeSuppliers.length > 0) {
        return safeSuppliers.reduce((sum, supplier)=>{
            const totalAmount = toNumber(supplier?.purchaseStats?.totalAmount ?? supplier?.statistics?.totalAmount);
            const pendingAmount = toNumber(supplier?.purchaseStats?.pendingAmount ?? supplier?.statistics?.pendingAmount);
            const paidAmount = Math.max(totalAmount - pendingAmount, 0);
            return sum + paidAmount;
        }, 0);
    }
    return safePurchases.reduce((sum, purchase)=>{
        const totalAmount = toNumber(purchase?.totalAmount);
        const paidAmount = toNumber(purchase?.paidAmount);
        const pendingAmount = toNumber(purchase?.balance) || Math.max(totalAmount - paidAmount, 0);
        return sum + Math.max(totalAmount - pendingAmount, 0);
    }, 0);
};
const getSupplierPaidAmountInRange = ({ suppliers = [], purchases = [], supplierPayments = [], startDate, endDate })=>{
    return getTotalSupplierPaidAmount({
        suppliers,
        purchases,
        supplierPayments,
        startDate,
        endDate
    });
};
const computeDailyCashSnapshot = ({ sales = [], expenses = [], customers = [], suppliers = [], purchases = [], supplierPayments = [], targetDate = new Date() })=>{
    const targetDay = startOfDay(targetDate);
    const targetDayKey = getDayKey(targetDay);
    const startOfTargetYear = getStartOfYear(targetDay);
    const startOfTargetYearKey = getDayKey(startOfTargetYear);
    const isOnTargetDay = (value)=>{
        const parsed = parseLocalDate(value);
        return Boolean(parsed && targetDay && parsed.toDateString() === targetDay.toDateString());
    };
    const todaysSales = sales.filter((sale)=>isOnTargetDay(getSaleReportDateValue(sale)));
    const todaysSalesTotal = todaysSales.reduce((sum, sale)=>sum + getSaleTotal(sale), 0);
    const todaysWalkInSales = todaysSales.filter((sale)=>isWalkInSale(sale)).reduce((sum, sale)=>sum + getSaleTotal(sale), 0);
    const todaysExpenses = expenses.filter((expense)=>isOnTargetDay(expense?.date || expense?.createdAt)).reduce((sum, expense)=>sum + toNumber(expense?.amount || expense?.totalamount), 0);
    const todaysCustomerPaid = customers.reduce((sum, customer)=>sum + getCustomerPaymentHistory(customer).filter((payment)=>isOnTargetDay(payment?.date || payment?.paymentDate || payment?.createdAt) && isCashPaymentMethod(payment?.method || payment?.paymentMethod)).reduce((paymentSum, payment)=>paymentSum + toNumber(payment?.amount), 0), 0);
    const todaysSupplierPaid = getSupplierPaidAmountInRange({
        suppliers,
        purchases,
        supplierPayments,
        startDate: targetDay,
        endDate: targetDay
    });
    const dailyCashMovementByDay = new Map();
    const addCashMovement = (date, amount)=>{
        const dayKey = getDayKey(date);
        if (!dayKey || !amount) return;
        dailyCashMovementByDay.set(dayKey, (dailyCashMovementByDay.get(dayKey) || 0) + amount);
    };
    sales.forEach((sale)=>{
        addCashMovement(getSaleReportDateValue(sale), getSaleTotal(sale));
    });
    getUnifiedSupplierPayments({
        suppliers,
        purchases,
        supplierPayments
    }).forEach((payment)=>{
        if (!isSupplierCashPaymentMethod(payment?.method || payment?.paymentMethod)) return;
        addCashMovement(getSupplierPaymentDateValue(payment), -toNumber(payment?.paidAmount ?? payment?.amount ?? payment?.appliedAmount));
    });
    expenses.forEach((expense)=>{
        addCashMovement(expense?.date || expense?.createdAt, -toNumber(expense?.amount || expense?.totalamount));
    });
    const relevantDayKeys = Array.from(dailyCashMovementByDay.keys()).filter((dayKey)=>!startOfTargetYearKey || dayKey >= startOfTargetYearKey).sort();
    if (targetDayKey && !relevantDayKeys.includes(targetDayKey)) {
        relevantDayKeys.push(targetDayKey);
        relevantDayKeys.sort();
    }
    const computedDailyCashByDay = new Map();
    relevantDayKeys.forEach((dayKey, index)=>{
        let previousPositiveDailyCash = 0;
        for(let previousIndex = index - 1; previousIndex >= 0; previousIndex -= 1){
            const previousDailyCash = computedDailyCashByDay.get(relevantDayKeys[previousIndex]) || 0;
            if (previousDailyCash > 0) {
                previousPositiveDailyCash = previousDailyCash;
                break;
            }
        }
        const movementForDay = dailyCashMovementByDay.get(dayKey) || 0;
        computedDailyCashByDay.set(dayKey, previousPositiveDailyCash + movementForDay);
    });
    const computedDailyCash = targetDayKey ? computedDailyCashByDay.get(targetDayKey) || 0 : 0;
    return {
        totalSales: todaysSalesTotal,
        totalWalkInSales: todaysWalkInSales,
        totalCustomerPaid: todaysCustomerPaid,
        totalSupplierPaid: todaysSupplierPaid,
        totalExpenses: todaysExpenses,
        dailyCash: computedDailyCash,
        yearlyDailyCash: computedDailyCash
    };
};
}),
"[project]/app/AdminDashboard/components/Dashboard/Card.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as TriangleAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-ssr] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-3.js [app-ssr] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$usePermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/usePermissions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$dailyCash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/utils/dailyCash.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
/* ===================== HELPERS ===================== */ // Normalize API responses
const getArray = (res)=>Array.isArray(res?.data) ? res.data : Array.isArray(res?.data?.data) ? res.data.data : [];
const getCustomersArray = (res)=>Array.isArray(res?.customers) ? res.customers : Array.isArray(res?.data?.customers) ? res.data.customers : getArray(res);
const getSuppliersArray = (res)=>Array.isArray(res?.suppliers) ? res.suppliers : Array.isArray(res?.data?.suppliers) ? res.data.suppliers : getArray(res);
const getSalesArray = (res)=>Array.isArray(res?.data) ? res.data : Array.isArray(res?.data?.data) ? res.data.data : Array.isArray(res) ? res : [];
const getCustomerPaymentHistory = (customer)=>Array.isArray(customer?.paymentHistory) ? customer.paymentHistory : [];
const parseLocalDate = (value)=>{
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
const isToday = (date)=>{
    const parsed = parseLocalDate(date);
    if (!parsed) return false;
    return parsed.toDateString() === new Date().toDateString();
};
const toNumber = (value)=>{
    if (typeof value === "number") return value;
    const normalized = String(value || "").replace(/,/g, "");
    const match = normalized.match(/-?\d+(?:\.\d+)?/);
    return match ? Number(match[0]) : 0;
};
const isDateInRange = (value, start, endExclusive)=>{
    const parsed = parseLocalDate(value);
    return Boolean(parsed && parsed >= start && parsed < endExclusive);
};
const getExpenseAmount = (expense)=>toNumber(expense?.amount ?? expense?.totalamount ?? expense?.totalAmount ?? expense?.expenseAmount);
const getPurchaseAmount = (purchase)=>{
    const directTotal = toNumber(purchase?.totalAmount ?? purchase?.grandTotal ?? purchase?.subtotal ?? purchase?.total);
    if (directTotal > 0) {
        return directTotal;
    }
    return (Array.isArray(purchase?.products) ? purchase.products : []).reduce((sum, product)=>sum + toNumber(product?.purchasePrice ?? product?.price) * toNumber(product?.qty ?? product?.quantity), 0);
};
const getCustomerOutstandingAmount = (customer)=>{
    const bills = Array.isArray(customer?.bills) ? customer.bills : [];
    if (bills.length > 0) {
        return bills.reduce((sum, bill)=>sum + Math.max(toNumber(bill?.amount) - toNumber(bill?.paidAmount), 0), 0);
    }
    const accountBalance = toNumber(customer?.accountBalance);
    if (accountBalance > 0) {
        return accountBalance;
    }
    return Math.max(toNumber(customer?.totalDue), 0);
};
const getSaleTotal = (sale)=>{
    const directTotal = toNumber(sale?.totalAmount ?? sale?.total ?? sale?.grandTotal ?? sale?.subtotal);
    if (directTotal > 0) return directTotal;
    return sale?.products?.reduce((sum, product)=>sum + toNumber(product?.salePrice ?? product?.price) * toNumber(product?.quantity ?? product?.qty), 0) || 0;
};
const getProductLookupKeys = (product = {})=>{
    const keys = [];
    const idKey = String(product?._id || product?.productId || "").trim();
    const nameKey = String(product?.name || "").trim().toLowerCase();
    if (idKey) keys.push(idKey);
    if (nameKey) keys.push(nameKey);
    return keys;
};
const isWalkInSale = (sale)=>{
    const selectedCustomerType = String(sale?.selectedCustomer?.type || sale?.customer?.type || "").trim().toLowerCase();
    const customerName = String(sale?.customerName ?? sale?.selectedCustomer?.name ?? sale?.customer?.name ?? "").trim().toLowerCase();
    const hasCustomerId = Boolean(sale?.customerId || sale?.selectedCustomer?.id || sale?.customer?._id || sale?.customer?.id);
    if (selectedCustomerType) {
        return selectedCustomerType === "walk-in" || selectedCustomerType === "walk in";
    }
    if (customerName) {
        return customerName === "walk-in" || customerName === "walk in";
    }
    return !hasCustomerId;
};
const Cards = ()=>{
    const { can } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$usePermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePermissions"])();
    const [cards, setCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showValues, setShowValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const getHiddenValue = (value)=>{
        if (typeof value === "number") return "****";
        if (typeof value !== "string") return "****";
        if (/^Rs\./.test(value)) return "Rs.****";
        return "****";
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchData = async ()=>{
            try {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const currentYearStart = new Date(today.getFullYear(), 0, 1);
                const nextYearStart = new Date(today.getFullYear() + 1, 0, 1);
                const currentMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
                const nextMonthStart = new Date(today.getFullYear(), today.getMonth() + 1, 1);
                /* ================= FETCH DATA ================= */ const canSaleView = can("SALE_VIEW");
                const canExpenseView = can("EXPENSE_VIEW");
                const canProductView = can("PRODUCT_VIEW");
                const canPurchaseView = can("PURCHASE_VIEW");
                const canCustomerView = can("CUSTOMER_VIEW");
                const canSupplierView = can("SUPPLIER_VIEW");
                const [salesRes, expenseRes, productRes, purchaseRes, customersRes, suppliersRes, supplierPaymentsRes] = await Promise.allSettled([
                    canSaleView ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/sales") : Promise.resolve({
                        data: []
                    }),
                    canExpenseView ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/expenses") : Promise.resolve({
                        data: []
                    }),
                    canProductView ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/products") : Promise.resolve({
                        data: []
                    }),
                    canPurchaseView ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/purchases") : Promise.resolve({
                        data: []
                    }),
                    canCustomerView ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/customers") : Promise.resolve({
                        customers: []
                    }),
                    canSupplierView ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/suppliers") : Promise.resolve({
                        data: []
                    }),
                    canSupplierView ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/supplierpayments", {
                        suppressErrorToast: true,
                        suppressErrorLog: true
                    }) : Promise.resolve({
                        data: []
                    })
                ]);
                const settledValue = (result)=>result.status === "fulfilled" ? result.value : {
                        data: []
                    };
                const sales = getSalesArray(settledValue(salesRes));
                const expenses = getArray(settledValue(expenseRes));
                const products = getArray(settledValue(productRes));
                const purchases = getArray(settledValue(purchaseRes));
                const customers = getCustomersArray(settledValue(customersRes));
                const suppliers = getSuppliersArray(settledValue(suppliersRes));
                const supplierPayments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$dailyCash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSupplierPaymentsArray"])(settledValue(supplierPaymentsRes));
                /* ================= MERGE PRODUCTS ================= */ const productMap = new Map();
                products.forEach((p)=>{
                    const normalizedProduct = {
                        ...p,
                        stock: Number(p.stock || 0),
                        purchasePrice: Number(p.purchasePrice || p.cost || 0),
                        salePrice: Number(p.salePrice || p.price || 0)
                    };
                    getProductLookupKeys(p).forEach((key)=>{
                        if (!productMap.has(key)) {
                            productMap.set(key, normalizedProduct);
                            return;
                        }
                        const existing = productMap.get(key);
                        productMap.set(key, {
                            ...existing,
                            stock: existing.stock + normalizedProduct.stock
                        });
                    });
                });
                const mergedProducts = Array.from(new Map(Array.from(productMap.values()).map((product)=>[
                        String(product?._id || product?.name || "").trim().toLowerCase(),
                        product
                    ])).values());
                /* ================= TODAY FILTERS ================= */ const todaysSales = sales.filter((s)=>isToday(s.saleDate || s.createdAt));
                /* ================= SALE PROFIT ================= */ const calculateProfit = (sale)=>{
                    const saleTotal = getSaleTotal(sale);
                    const totalPurchaseAmount = (Array.isArray(sale?.products) ? sale.products : []).reduce((sum, product)=>{
                        const quantity = Math.max(Number(product?.quantity || product?.qty || 0) - Number(product?.returnedQuantity || 0), 0);
                        return sum + Number(product?.purchasePrice || 0) * quantity;
                    }, 0);
                    return Number((saleTotal - totalPurchaseAmount).toFixed(2));
                };
                const calculateSalesPageProfit = (sale)=>{
                    const totalPurchaseAmount = (Array.isArray(sale?.products) ? sale.products : []).reduce((sum, product)=>{
                        const quantity = Math.max(Number(product?.quantity || product?.qty || 0) - Number(product?.returnedQuantity || 0), 0);
                        return sum + Number(product?.purchasePrice || 0) * quantity;
                    }, 0);
                    return Number((Number(sale?.totalAmount || 0) - totalPurchaseAmount).toFixed(2));
                };
                const todayProfit = todaysSales.reduce((sum, sale)=>sum + calculateProfit(sale), 0);
                const todaySale = todaysSales.reduce((sum, sale)=>sum + getSaleTotal(sale), 0);
                const { dailyCash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$dailyCash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["computeDailyCashSnapshot"])({
                    sales,
                    expenses,
                    customers,
                    suppliers,
                    purchases,
                    supplierPayments,
                    targetDate: today
                });
                const pendingAmount = customers.reduce((sum, customer)=>sum + getCustomerOutstandingAmount(customer), 0);
                /* ================= JANUARY 1 RESET CARDS ================= */ const yearToDateSales = sales.filter((sale)=>isDateInRange(sale.saleDate || sale.createdAt, currentYearStart, nextYearStart));
                const isFirstDayOfMonth = today.getDate() === 1;
                const currentMonthSales = sales.filter((sale)=>isDateInRange(sale.saleDate || sale.createdAt, currentMonthStart, nextMonthStart));
                const monthlySalesAmount = isFirstDayOfMonth ? 0 : currentMonthSales.reduce((sum, sale)=>sum + getSaleTotal(sale), 0);
                const monthlyProfit = isFirstDayOfMonth ? 0 : currentMonthSales.reduce((sum, sale)=>sum + calculateSalesPageProfit(sale), 0);
                /* ================= EXPENSES ================= */ const currentMonthExpenses = expenses.filter((expense)=>{
                    return isDateInRange(expense.date || expense.createdAt, currentMonthStart, nextMonthStart);
                });
                const totalExpenses = isFirstDayOfMonth ? 0 : currentMonthExpenses.reduce((sum, e)=>sum + getExpenseAmount(e), 0);
                const pendingPayments = isFirstDayOfMonth ? 0 : currentMonthExpenses.filter((e)=>String(e.paymentStatus || "").toLowerCase() === "pending").reduce((sum, e)=>sum + getExpenseAmount(e), 0);
                const completedPayments = isFirstDayOfMonth ? 0 : currentMonthExpenses.filter((e)=>[
                        "completed",
                        "paid"
                    ].includes(String(e.paymentStatus || "").toLowerCase())).reduce((sum, e)=>sum + getExpenseAmount(e), 0);
                /* ================= OTHER METRICS ================= */ const lowStockItems = mergedProducts.filter((p)=>p.stock < 5).length;
                const currentMonthPurchases = purchases.filter((purchase)=>{
                    return isDateInRange(purchase.purchaseDate || purchase.date || purchase.createdAt, currentMonthStart, nextMonthStart);
                });
                const totalProductPurchase = isFirstDayOfMonth ? 0 : currentMonthPurchases.reduce((sum, p)=>sum + getPurchaseAmount(p), 0);
                /* ================= DASHBOARD CARDS ================= */ setCards([
                    {
                        title: "Today Sale",
                        value: `Rs.${todaySale.toFixed(2)}`,
                        subtitle: `${todaysSales.length} transactions`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                            className: "w-7 h-7 text-white"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                            lineNumber: 430,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        iconBg: "bg-gradient-to-br from-green-500 to-blue-600"
                    },
                    {
                        title: "Daily Cash",
                        value: `Rs.${dailyCash.toFixed(2)}`,
                        subtitle: "Daily cash balance for this year, reset every January 1",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                            className: "w-7 h-7 text-white"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                            lineNumber: 437,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        iconBg: "bg-gradient-to-br from-teal-500 to-emerald-600"
                    },
                    {
                        title: "Pending Amount",
                        value: `Rs.${pendingAmount.toFixed(2)}`,
                        subtitle: "Customer outstanding balance",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                            className: "w-7 h-7 text-white"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                            lineNumber: 444,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        iconBg: "bg-gradient-to-br from-amber-500 to-red-500"
                    },
                    {
                        title: "Today's Profit",
                        value: `Rs.${todayProfit.toFixed(2)}`,
                        subtitle: "(Price - Cost) x quantity",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                            className: "w-7 h-7 text-white"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                            lineNumber: 451,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        iconBg: "bg-gradient-to-br from-emerald-500 to-blue-600"
                    },
                    {
                        title: "Low Stock Items",
                        value: lowStockItems,
                        subtitle: "Stock < 5",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__["TriangleAlert"], {
                            className: "w-7 h-7 text-white"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                            lineNumber: 458,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        iconBg: "bg-gradient-to-br from-amber-500 to-orange-600"
                    },
                    {
                        title: "Monthly Profit",
                        value: `Rs.${monthlyProfit.toFixed(2)}`,
                        subtitle: "Current monthly sales profit, reset on next month 1st",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                            className: "w-7 h-7 text-white"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                            lineNumber: 465,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        iconBg: "bg-gradient-to-br from-purple-500 to-pink-600"
                    },
                    {
                        title: "Total Product Purchase",
                        value: `Rs.${totalProductPurchase.toFixed(2)}`,
                        subtitle: "Current month product purchases from day 1 to month end, reset on next month 1st",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                            className: "w-7 h-7 text-white"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                            lineNumber: 472,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600"
                    },
                    {
                        title: "Monthly Sales",
                        value: `Rs.${monthlySalesAmount.toFixed(2)}`,
                        subtitle: "Current month sales amount from day 1 to month end, reset on next month 1st",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                            className: "w-7 h-7 text-white"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                            lineNumber: 479,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        iconBg: "bg-gradient-to-br from-rose-500 to-red-600"
                    },
                    {
                        title: "Total Expenses",
                        value: `Rs.${totalExpenses.toFixed(2)}`,
                        subtitle: `Pending: Rs.${pendingPayments.toFixed(2)} | Completed: Rs.${completedPayments.toFixed(2)} | Reset on next month 1st`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                            className: "w-7 h-7 text-white"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                            lineNumber: 488,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        iconBg: "bg-gradient-to-br from-slate-500 to-slate-700"
                    }
                ]);
            } catch (error) {
                console.error("Dashboard cards error:", error);
            }
        };
        fetchData();
    }, [
        can
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>setShowValues((prev)=>!prev),
                    className: "inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 sm:w-auto",
                    children: [
                        showValues ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                            lineNumber: 509,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                            lineNumber: 511,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        showValues ? "Hide Values" : "Show Values"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                    lineNumber: 503,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                lineNumber: 502,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3",
                children: cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 rounded-2xl border border-white/80 bg-white/90 p-0 shadow-sm ring-1 ring-slate-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-3 p-4 sm:p-5 md:p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-slate-600",
                                            children: card.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                                            lineNumber: 525,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "break-words text-lg font-bold tracking-tight text-slate-900 sm:text-xl",
                                            children: showValues ? card.value : getHiddenValue(card.value)
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                                            lineNumber: 526,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "break-words text-xs leading-5 text-slate-500",
                                            children: card.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                                            lineNumber: 529,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                                    lineNumber: 524,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-12 w-12 shrink-0 ${card.iconBg} flex items-center justify-center rounded-2xl shadow-lg shadow-slate-200/60 sm:h-14 sm:w-14`,
                                    children: card.icon
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                                    lineNumber: 531,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                            lineNumber: 523,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, index, false, {
                        fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                        lineNumber: 519,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
                lineNumber: 517,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminDashboard/components/Dashboard/Card.jsx",
        lineNumber: 501,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Cards;
}),
"[project]/app/AdminDashboard/authservice/labApi.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createLabCategory",
    ()=>createLabCategory,
    "createLabOrder",
    ()=>createLabOrder,
    "createLabTemplate",
    ()=>createLabTemplate,
    "deleteLabCategory",
    ()=>deleteLabCategory,
    "deleteLabOrder",
    ()=>deleteLabOrder,
    "deleteLabTemplate",
    ()=>deleteLabTemplate,
    "getLabOrderById",
    ()=>getLabOrderById,
    "listLabCategories",
    ()=>listLabCategories,
    "listLabOrders",
    ()=>listLabOrders,
    "listLabTemplates",
    ()=>listLabTemplates,
    "updateLabCategory",
    ()=>updateLabCategory,
    "updateLabOrder",
    ()=>updateLabOrder,
    "updateLabTemplate",
    ()=>updateLabTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-ssr] (ecmascript)");
;
const asList = (res)=>{
    if (Array.isArray(res)) return res;
    if (Array.isArray(res?.data)) return res.data;
    if (Array.isArray(res?.data?.data)) return res.data.data;
    return [];
};
const isMissingRouteError = (error)=>{
    const status = error?.status || error?.response?.status || 0;
    const message = String(error?.response?.data?.message || error?.response?.data?.error || error?.message || "").trim();
    return status === 404 || /api route not found/i.test(message);
};
const listLabOrders = async (options = {})=>{
    try {
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/tests", options);
        return asList(res);
    } catch (error) {
        if (isMissingRouteError(error)) {
            return [];
        }
        throw error;
    }
};
const getLabOrderById = async (id, options = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/tests/${id}`, options);
const createLabOrder = async (payload, options = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/tests/createTest", {
        method: "POST",
        data: payload,
        ...options
    });
const updateLabOrder = async (id, payload, options = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/tests/updateTest/${id}`, {
        method: "PUT",
        data: payload,
        ...options
    });
const deleteLabOrder = async (id, options = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/tests/deleteTest/${id}`, {
        method: "DELETE",
        ...options
    });
const listLabTemplates = async (options = {})=>{
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/testParameters", options);
    return asList(res);
};
const createLabTemplate = async (payload, options = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/testParameters/createTestparameter", {
        method: "POST",
        data: payload,
        ...options
    });
const updateLabTemplate = async (id, payload, options = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/testParameters/updateTestparameter/${id}`, {
        method: "PUT",
        data: payload,
        ...options
    });
const deleteLabTemplate = async (id, options = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/testParameters/deleteTestparameter/${id}`, {
        method: "DELETE",
        ...options
    });
const listLabCategories = async (options = {})=>{
    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/lab-categories", options);
    return asList(res);
};
const createLabCategory = async (payload, options = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/lab-categories/create", {
        method: "POST",
        data: payload,
        ...options
    });
const updateLabCategory = async (id, payload, options = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/lab-categories/update/${id}`, {
        method: "PUT",
        data: payload,
        ...options
    });
const deleteLabCategory = async (id, options = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/lab-categories/delete/${id}`, {
        method: "DELETE",
        ...options
    });
}),
"[project]/app/AdminDashboard/utils/formatting.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PHONE_PATTERN",
    ()=>PHONE_PATTERN,
    "formatDateDDMMYYYY",
    ()=>formatDateDDMMYYYY,
    "formatPhoneInput",
    ()=>formatPhoneInput,
    "isValidPhone",
    ()=>isValidPhone,
    "normalizeDateInputDDMMYYYY",
    ()=>normalizeDateInputDDMMYYYY,
    "toIsoFromDDMMYYYY",
    ()=>toIsoFromDDMMYYYY
]);
"use client";
const PHONE_PATTERN = /^03\d{2}-\d{7}$/;
const formatPhoneInput = (value)=>{
    const digits = String(value || "").replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 4) return digits;
    return `${digits.slice(0, 4)}-${digits.slice(4)}`;
};
const isValidPhone = (value)=>PHONE_PATTERN.test(String(value || "").trim());
const asDate = (value)=>{
    const date = value instanceof Date ? value : new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
};
const formatDateDDMMYYYY = (value)=>{
    const date = asDate(value);
    if (!date) return "";
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
};
const normalizeDateInputDDMMYYYY = (value)=>{
    const digits = String(value || "").replace(/\D/g, "").slice(0, 8);
    if (digits.length <= 2) return digits;
    if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
};
const toIsoFromDDMMYYYY = (value)=>{
    const match = String(value || "").match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!match) return null;
    const [, dd, mm, yyyy] = match;
    return `${yyyy}-${mm}-${dd}`;
};
}),
"[project]/app/AdminDashboard/components/Dashboard/RevenueTrend.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$usePermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/usePermissions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$labApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/labApi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/utils/formatting.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
/**
 * Normalize API response
 */ const getArray = (res)=>Array.isArray(res?.data) ? res.data : Array.isArray(res?.data?.data) ? res.data.data : [];
const RevenueTrend = ()=>{
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const chartHostRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [chartReady, setChartReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [chartSize, setChartSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 300
    });
    const { can } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$usePermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePermissions"])();
    const isCompactChart = chartSize.width > 0 && chartSize.width < 480;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchRevenue = async ()=>{
            try {
                const canSaleView = can("SALE_VIEW");
                const canTestView = can("TEST_VIEW");
                const safeFetch = async (endpoint, allowed)=>{
                    if (!allowed) return {
                        data: []
                    };
                    try {
                        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(endpoint, {
                            suppressErrorToast: true,
                            suppressErrorLog: true
                        });
                    } catch  {
                        return {
                            data: []
                        };
                    }
                };
                const [salesRes, testsRes] = await Promise.all([
                    safeFetch("/sales", canSaleView),
                    canTestView ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$labApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["listLabOrders"])({
                        suppressErrorToast: true,
                        suppressErrorLog: true
                    }) : Promise.resolve([])
                ]);
                const sales = getArray(salesRes);
                const tests = Array.isArray(testsRes) ? testsRes : getArray(testsRes);
                // Get last 7 days
                const today = new Date();
                const last7Days = Array.from({
                    length: 7
                }).map((_, i)=>{
                    const d = new Date();
                    d.setDate(today.getDate() - (6 - i)); // oldest first
                    d.setHours(0, 0, 0, 0);
                    return d;
                });
                const revenueData = last7Days.map((day)=>{
                    const dayStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateDDMMYYYY"])(day);
                    // Calculate revenue for the day
                    const dayRevenue = sales.filter((s)=>new Date(s.createdAt).toDateString() === day.toDateString()).reduce((sum, s)=>sum + Number(s.profit || 0), 0) + tests.filter((t)=>new Date(t.createdAt).toDateString() === day.toDateString()).reduce((sum, t)=>sum + Number(t.totalfee || 0), 0);
                    return {
                        date: dayStr,
                        revenue: dayRevenue
                    };
                });
                setData(revenueData);
            } catch (error) {
                setData([]);
            }
        };
        fetchRevenue();
    }, [
        can
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const node = chartHostRef.current;
        if (!node) return undefined;
        const updateChartReady = ()=>{
            const { width, height } = node.getBoundingClientRect();
            const resolvedHeight = width > 0 && width < 640 ? 240 : Math.max(Math.floor(height), 300);
            setChartSize({
                width: Math.max(Math.floor(width), 0),
                height: resolvedHeight
            });
            setChartReady(width > 0 && height > 0);
        };
        updateChartReady();
        const observer = new ResizeObserver(updateChartReady);
        observer.observe(node);
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm backdrop-blur-sm sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 text-base font-semibold tracking-tight text-slate-900 sm:text-lg",
                children: "Revenue Trend (Last 7 Days)"
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/Dashboard/RevenueTrend.jsx",
                lineNumber: 125,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: chartHostRef,
                className: "h-[240px] min-h-[240px] w-full min-w-0 overflow-hidden sm:h-[300px] sm:min-h-[300px]",
                children: chartReady ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LineChart"], {
                    width: chartSize.width,
                    height: chartSize.height,
                    data: data,
                    margin: {
                        top: 5,
                        right: isCompactChart ? 8 : 20,
                        bottom: isCompactChart ? 20 : 5,
                        left: isCompactChart ? -16 : 0
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                            strokeDasharray: "3 3",
                            stroke: "#e2e8f0"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/RevenueTrend.jsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: "date",
                            stroke: "#64748b",
                            tick: {
                                fontSize: isCompactChart ? 10 : 12
                            },
                            interval: "preserveStartEnd",
                            angle: isCompactChart ? -20 : 0,
                            textAnchor: isCompactChart ? "end" : "middle",
                            height: isCompactChart ? 46 : 30
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/RevenueTrend.jsx",
                            lineNumber: 142,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YAxis"], {
                            stroke: "#64748b",
                            tick: {
                                fontSize: isCompactChart ? 10 : 12
                            },
                            width: isCompactChart ? 44 : 60
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/RevenueTrend.jsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                            contentStyle: {
                                borderRadius: "12px",
                                border: "1px solid #e2e8f0",
                                boxShadow: "0 4px 12px rgba(15,23,42,0.08)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/RevenueTrend.jsx",
                            lineNumber: 156,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        !isCompactChart ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/RevenueTrend.jsx",
                            lineNumber: 163,
                            columnNumber: 32
                        }, ("TURBOPACK compile-time value", void 0)) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Line"], {
                            type: "monotone",
                            dataKey: "revenue",
                            stroke: "#14B8A6",
                            strokeWidth: 3,
                            dot: {
                                r: isCompactChart ? 3 : 5
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/RevenueTrend.jsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/Dashboard/RevenueTrend.jsx",
                    lineNumber: 130,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : null
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/Dashboard/RevenueTrend.jsx",
                lineNumber: 128,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminDashboard/components/Dashboard/RevenueTrend.jsx",
        lineNumber: 124,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = RevenueTrend;
}),
"[project]/app/AdminDashboard/components/Dashboard/LowStockAlert.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as TriangleAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/* =========================
   Safe array extractor
========================= */ const getArray = (res)=>Array.isArray(res?.data) ? res.data : Array.isArray(res?.data?.data) ? res.data.data : [];
const LOW_STOCK_LIMIT = 10;
const LowStockAlert = ()=>{
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    /* =========================
     Fetch products
  ========================= */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchProducts = async ()=>{
            try {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/products", {
                    method: "GET"
                });
                setProducts(getArray(res));
            } catch (error) {
                console.error("Failed to fetch products:", error);
                setProducts([]);
            }
        };
        fetchProducts();
    }, []);
    /* =========================
     Merge + Low stock logic
  ========================= */ const lowStockItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!Array.isArray(products) || products.length === 0) return [];
        const map = new Map();
        products.forEach((p)=>{
            // ✅ SAFE string handling
            const rawName = typeof p?.name === "string" ? p.name : "";
            const name = rawName.trim();
            if (!name) return; // skip invalid products safely
            const key = name.toLowerCase();
            // ✅ SAFE number handling
            const stock = Number(p?.stock) || 0;
            const unit = typeof p?.unit === "string" ? p.unit : "";
            if (map.has(key)) {
                const existing = map.get(key);
                map.set(key, {
                    ...existing,
                    stock: existing.stock + stock
                });
            } else {
                map.set(key, {
                    name,
                    stock,
                    unit
                });
            }
        });
        // Filter only low stock products
        return Array.from(map.values()).filter((p)=>p.stock <= LOW_STOCK_LIMIT).map((p)=>({
                name: p.name,
                stock: `${p.stock}${p.unit ? ` ${p.unit}` : ""}`,
                status: "Reorder"
            }));
    }, [
        products
    ]);
    /* =========================
     Hide if no alerts
  ========================= */ if (lowStockItems.length === 0) return null;
    /* =========================
     UI
  ========================= */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-2xl border border-amber-100/70 bg-gradient-to-br from-amber-50 to-orange-50 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col space-y-1.5 p-4 pt-5 sm:p-6 sm:pt-7",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center text-base font-semibold leading-none tracking-tight text-amber-900 sm:text-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__["TriangleAlert"], {
                            className: "w-5 h-5 mr-2 text-amber-600"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/LowStockAlert.jsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Low Stock Alert"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/Dashboard/LowStockAlert.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/Dashboard/LowStockAlert.jsx",
                lineNumber: 95,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 pt-0 sm:p-6 sm:pt-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 max-h-64 overflow-y-auto",
                    children: lowStockItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-3 rounded-xl border border-white/80 bg-white/95 p-3 shadow-sm transition hover:shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "break-words font-medium text-slate-900",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/Dashboard/LowStockAlert.jsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "break-words text-sm text-slate-600",
                                            children: [
                                                "Stock: ",
                                                item.stock
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/Dashboard/LowStockAlert.jsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/Dashboard/LowStockAlert.jsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "shrink-0 text-right",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-amber-700 bg-amber-100 px-3 py-1 rounded-full font-medium",
                                        children: item.status
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/Dashboard/LowStockAlert.jsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/Dashboard/LowStockAlert.jsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/app/AdminDashboard/components/Dashboard/LowStockAlert.jsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/AdminDashboard/components/Dashboard/LowStockAlert.jsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/Dashboard/LowStockAlert.jsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminDashboard/components/Dashboard/LowStockAlert.jsx",
        lineNumber: 94,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LowStockAlert;
}),
];

//# sourceMappingURL=app_AdminDashboard_e1b50709._.js.map