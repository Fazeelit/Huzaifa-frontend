module.exports = [
"[project]/app/AdminDashboard/authservice/auth.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasPermission",
    ()=>hasPermission,
    "readStoredAuth",
    ()=>readStoredAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/permissions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/authStorage.js [app-ssr] (ecmascript)");
"use client";
;
;
const readStoredAuth = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            token: null,
            user: null,
            role: null,
            permissions: []
        };
    }
    //TURBOPACK unreachable
    ;
    const token = undefined;
    const role = undefined;
    const permissions = undefined;
    let user;
};
const hasPermission = (permissions, permission)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasPermission"])(permission, permissions);
}),
"[project]/app/AdminDashboard/suppliers/[id]/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>supplierDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-ssr] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$id$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IdCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/id-card.js [app-ssr] (ecmascript) <export default as IdCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-ssr] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/auth.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const parseAmount = (value)=>{
    if (typeof value === "number") return value;
    const normalized = String(value || "").replace(/,/g, "");
    const match = normalized.match(/-?\d+(?:\.\d+)?/);
    return match ? Number(match[0]) : 0;
};
const formatRs = (value)=>`Rs. ${Number(value || 0).toLocaleString("en-IN")}`;
const CRUD_CACHE_KEY = "appCrudResponseCache";
const toTitleCase = (value)=>String(value || "").toLowerCase().replace(/\b\w/g, (char)=>char.toUpperCase());
const REMAINING_BILL_MARKER = "__remaining_bill__";
const REMAINING_BILL_PAYMENT_NOTE = "__remaining_bill_payment__";
const REMAINING_BILL_REFERENCE = "remaining-bill";
const formatDate = (value)=>{
    if (!value) return "N/A";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return String(value);
    return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
};
const toDateInputValue = (date)=>{
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};
const getDefaultDateRange = ()=>{
    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 29);
    return {
        from: toDateInputValue(startDate),
        to: toDateInputValue(endDate)
    };
};
const normalizesupplier = (raw = {})=>({
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
            swiftCode: ""
        },
        totalDue: Number(raw.totalDue || 0) || 0,
        totalSpent: Number(raw.totalSpent || 0) || 0,
        creditLimit: Number(raw.creditLimit || 0) || 0
    });
const normalizeSupplierPayment = (payment = {})=>{
    const amountNumber = Number(payment?.paidAmount ?? payment?.amount ?? 0);
    const paymentDate = payment?.appliedAt || payment?.date || "";
    return {
        ...payment,
        id: String(payment?._id || payment?.id || payment?.paymentId || "").trim(),
        paymentId: String(payment?._id || payment?.id || payment?.paymentId || "").trim(),
        supplierId: String(payment?.supplierId || "").trim(),
        purchaseId: String(payment?.purchaseId || "").trim(),
        amount: formatRs(amountNumber),
        amountNumber,
        date: paymentDate,
        appliedAt: paymentDate,
        method: payment?.paymentMethod || payment?.method || "Cash",
        paymentMethod: payment?.paymentMethod || payment?.method || "Cash",
        reference: payment?.reference || "",
        billId: payment?.billId || "",
        notes: payment?.notes || "",
        transactionTimestamp: payment?.updatedAt || payment?.createdAt || paymentDate || "",
        source: "payment"
    };
};
const extractSupplierPaymentsArray = (response)=>Array.isArray(response?.supplierpayments) ? response.supplierpayments : Array.isArray(response?.data?.supplierpayments) ? response.data.supplierpayments : Array.isArray(response?.data) ? response.data : Array.isArray(response) ? response : [];
const isRemainingBillPaymentEntry = (entry = {})=>String(entry?.billId || "").trim() === REMAINING_BILL_REFERENCE && String(entry?.notes || "").trim() !== REMAINING_BILL_MARKER;
const getNormalizedDateValue = (value)=>{
    if (!value) return null;
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return null;
    date.setHours(0, 0, 0, 0);
    return date.getTime();
};
const getTransactionSortValue = (timestamp, fallbackDate = "")=>{
    const first = new Date(timestamp || fallbackDate);
    if (!Number.isNaN(first.getTime())) return first.getTime();
    return 0;
};
const getpurchasePaymentStatus = (paidAmount, totalAmount)=>{
    const paid = Number(paidAmount || 0);
    const total = Number(totalAmount || 0);
    if (paid <= 0) return "Pending";
    if (total > 0 && paid >= total) return "Paid";
    return "Partial";
};
const formatStatusLabel = (value, fallback = "Pending")=>{
    const normalized = String(value || fallback).trim();
    if (!normalized) return fallback;
    return normalized.charAt(0).toUpperCase() + normalized.slice(1).toLowerCase();
};
const getStatusBadgeClassName = (status)=>{
    const normalized = String(status || "").trim().toLowerCase();
    if (normalized === "paid" || normalized === "received") {
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300";
    }
    if (normalized === "partial") {
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300";
    }
    return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
};
const strippurchaseMetaFields = (purchase)=>{
    const requestBody = {
        ...purchase
    };
    delete requestBody._id;
    delete requestBody.createdAt;
    delete requestBody.updatedAt;
    delete requestBody.__v;
    return requestBody;
};
const extractpurchasesArray = (response)=>Array.isArray(response?.data) ? response.data : Array.isArray(response?.purchases) ? response.purchases : Array.isArray(response) ? response : [];
const extractSuppliersArray = (response)=>Array.isArray(response?.data) ? response.data : Array.isArray(response?.suppliers) ? response.suppliers : Array.isArray(response?.data?.suppliers) ? response.data.suppliers : Array.isArray(response) ? response : [];
const normalizesupplierLookupValue = (value)=>String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
const buildsupplierLookupKeys = (supplierLike = {})=>{
    const supplierObject = supplierLike?.supplier && typeof supplierLike.supplier === "object" ? supplierLike.supplier : {};
    const keys = [
        supplierLike?.name,
        supplierLike?.company,
        supplierLike?.contactPerson,
        supplierLike?.supplier,
        supplierObject?.name,
        supplierObject?.company,
        supplierObject?.contactPerson
    ].map(normalizesupplierLookupValue).filter(Boolean);
    return [
        ...new Set(keys)
    ];
};
const getpurchaseQuantity = (item = {})=>Number(item?.quantity ?? item?.qty ?? 0) || 0;
const getpurchaseUnitPrice = (item = {})=>parseAmount(item?.purchasePrice ?? item?.price ?? item?.unitPrice ?? item?.salePrice);
const getNormalizedpurchaseAmounts = (purchase = {})=>{
    const items = Array.isArray(purchase?.items) ? purchase.items : Array.isArray(purchase?.products) ? purchase.products : [];
    const derivedSubtotal = items.reduce((sum, item)=>sum + getpurchaseQuantity(item) * getpurchaseUnitPrice(item), 0);
    const derivedTotal = derivedSubtotal + parseAmount(purchase?.taxAmount);
    const rawTotal = parseAmount(purchase?.totalAmount ?? purchase?.totalPrice ?? purchase?.total);
    const rawPaid = parseAmount(purchase?.paidAmount);
    const rawBalance = parseAmount(purchase?.balance);
    const totalAmount = rawTotal > 0 ? rawTotal : derivedTotal;
    const paidAmount = rawPaid;
    const balanceAmount = rawBalance > 0 ? rawBalance : Math.max(totalAmount - paidAmount, 0);
    return {
        totalAmount,
        paidAmount,
        balanceAmount
    };
};
const normalizepurchasePaymentHistory = (payment = {})=>{
    const amount = parseAmount(payment?.appliedAmount ?? payment?.amount);
    const date = payment?.appliedAt || payment?.date || "";
    return {
        ...payment,
        appliedAmount: amount,
        amount,
        appliedAt: date,
        date
    };
};
const getPaymentEntryId = (paymentLike = {})=>String(paymentLike?.id || paymentLike?._id || paymentLike?.paymentId || "").trim();
const buildpurchasePaymentEntry = (purchase = {}, payment = {}, purchaseIndex = 0, paymentIndex = 0)=>{
    const normalizedPayment = normalizepurchasePaymentHistory(payment);
    const billReference = String(purchase?.invoiceNo || purchase?.invoiceNumber || purchase?._id || "");
    return {
        ...payment,
        id: String(getPaymentEntryId(payment) || `${billReference || "PURCHASE"}-PAY-${purchaseIndex + 1}-${paymentIndex + 1}`),
        amount: formatRs(normalizedPayment.amount),
        amountNumber: normalizedPayment.amount,
        date: normalizedPayment.date || "",
        method: payment?.method || "N/A",
        reference: payment?.reference || billReference,
        billId: payment?.billId || billReference,
        notes: payment?.notes || "",
        transactionTimestamp: normalizedPayment.appliedAt || normalizedPayment.date || purchase?.updatedAt || purchase?.purchaseDate || "",
        source: "payment"
    };
};
const buildpurchaseUpdatePayload = (purchase = {}, overrides = {})=>{
    const nextpurchase = {
        ...purchase,
        ...overrides
    };
    const totalAmount = Number(nextpurchase?.totalAmount || nextpurchase?.totalPrice || nextpurchase?.total || 0);
    const paidAmount = Number(nextpurchase?.paidAmount || 0);
    const paymentHistory = Array.isArray(nextpurchase?.paymentHistory) ? nextpurchase.paymentHistory.map((entry)=>normalizepurchasePaymentHistory(entry)) : [];
    return strippurchaseMetaFields({
        ...nextpurchase,
        totalAmount,
        paidAmount,
        balance: Math.max(totalAmount - paidAmount, 0),
        paymentStatus: getpurchasePaymentStatus(paidAmount, totalAmount),
        paymentHistory
    });
};
const syncCachedpurchase = (nextpurchase)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
};
const syncCachedSupplier = (nextSupplier)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
};
const clearSupplierLocalCaches = (supplierLike = {}, options = {})=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
    const clearPurchases = undefined;
};
const readCachedpurchases = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return [];
    }
    //TURBOPACK unreachable
    ;
};
const mergeLatestpurchases = (networkpurchases)=>{
    if (Array.isArray(networkpurchases) && networkpurchases.length) {
        return networkpurchases;
    }
    return readCachedpurchases();
};
const matchessupplierpurchase = (purchase, supplier)=>{
    const purchasesupplier = purchase?.supplier || purchase?.selectedsupplier || {};
    const purchasesupplierId = purchase?.supplierId || purchasesupplier?._id || purchasesupplier?.id || "";
    const targetId = supplier?.id || supplier?._id || "";
    const purchaseCnic = String(purchasesupplier?.cnic || "").trim();
    const targetCnic = String(supplier?.cnic || "").trim();
    const purchasePhone = String(purchasesupplier?.phone || purchasesupplier?.mobile || "").trim();
    const targetPhone = String(supplier?.phone || supplier?.mobile || "").trim();
    const purchaseLookupKeys = buildsupplierLookupKeys({
        supplier: purchasesupplier,
        name: purchase?.supplierName,
        company: purchase?.company,
        contactPerson: purchase?.contactPerson
    });
    const supplierLookupKeys = buildsupplierLookupKeys(supplier);
    return targetId && purchasesupplierId && String(purchasesupplierId) === String(targetId) || targetCnic && purchaseCnic && purchaseCnic === targetCnic || targetPhone && purchasePhone && purchasePhone === targetPhone || purchaseLookupKeys.some((key)=>supplierLookupKeys.includes(key));
};
const getEntryMatchKeys = (...values)=>values.map((value)=>String(value || "").trim().toLowerCase()).filter(Boolean);
const getProductpurchaseStatus = (item = {})=>{
    const explicitStatus = String(item?.status || "").trim().toUpperCase();
    if (explicitStatus) {
        return explicitStatus;
    }
    const quantity = Number(item?.chargedQuantity ?? item?.quantity ?? item?.qty ?? 0) || 0;
    const returnedQuantity = Number(item?.returnedQuantity ?? item?.returnedQty ?? item?.returnQty ?? item?.quantityReturned ?? 0) || 0;
    return returnedQuantity >= quantity && quantity > 0 ? "RETURNED" : "SOLD";
};
function supplierDetailPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const supplierId = Array.isArray(params?.id) ? params.id[0] : params?.id;
    const defaultDateRange = getDefaultDateRange();
    const [supplier, setsupplier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [supplierpurchases, setsupplierpurchases] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [supplierPayments, setSupplierPayments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("bills");
    const [billDateRange, setBillDateRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultDateRange);
    const [transactionPage, setTransactionPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [showPaymentModal, setShowPaymentModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedBill, setSelectedBill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [blankBillDebit, setBlankBillDebit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [blankBillDebitDraft, setBlankBillDebitDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("0");
    const [blankBillPaymentId, setBlankBillPaymentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showBlankBillModal, setShowBlankBillModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editTransactionTarget, setEditTransactionTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSavingEditedPayment, setIsSavingEditedPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteTransactionTarget, setDeleteTransactionTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDeletingTransaction, setIsDeletingTransaction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canEditsupplier, setCanEditsupplier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canDeletepurchase, setCanDeletepurchase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [paymentForm, setPaymentForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        method: "Cash",
        reference: "",
        date: new Date().toISOString().split("T")[0],
        partialAmount: ""
    });
    const transactionsPerPage = 10;
    const findLinkedpurchase = (bill)=>{
        const billKeys = [
            String(bill?.id || ""),
            String(bill?.reference || ""),
            String(bill?.billId || "")
        ].map((value)=>String(value || "").trim()).filter(Boolean);
        return supplierpurchases.find((purchase)=>{
            const purchaseKeys = [
                String(purchase?._id || ""),
                String(purchase?.invoiceNo || ""),
                String(purchase?.invoiceNumber || "")
            ].map((value)=>String(value || "").trim()).filter(Boolean);
            return billKeys.some((billKey)=>purchaseKeys.some((purchaseKey)=>{
                    if (billKey === purchaseKey) return true;
                    const normalizedBillKey = billKey.toLowerCase();
                    const normalizedpurchaseKey = purchaseKey.toLowerCase();
                    return normalizedBillKey.includes(normalizedpurchaseKey) || normalizedpurchaseKey.includes(normalizedBillKey);
                }));
        });
    };
    const getLinkedPurchaseRemainingAmount = (purchase = null, fallbackBill = null)=>{
        const fallbackRemainingAmount = Math.max(Number(fallbackBill?.remainingAmountNumber || 0), 0);
        if (purchase?._id) {
            return Math.max(getNormalizedpurchaseAmounts(purchase).balanceAmount, fallbackRemainingAmount, 0);
        }
        return fallbackRemainingAmount;
    };
    const getSelectedBillPayableAmount = (bill = null)=>{
        if (bill?.source === "supplier-total") {
            return Math.max(Number(latestTransactionBalance || 0), 0);
        }
        return Math.max(Number(bill?.remainingAmountNumber || 0), 0);
    };
    const getEditablePaymentPayableAmount = (entry = null)=>Math.max(Number(entry?.linkedBillRemaining || 0) + Number(entry?.credit || 0), 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const { permissions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readStoredAuth"])();
        setCanEditsupplier((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasPermission"])(permissions, "supplier_EDIT"));
        setCanDeletepurchase((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasPermission"])(permissions, "purchase_DELETE"));
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!showPaymentModal || !selectedBill) return;
        setPaymentForm({
            method: "Cash",
            reference: "",
            date: new Date().toISOString().split("T")[0],
            partialAmount: getSelectedBillPayableAmount(selectedBill)
        });
    }, [
        showPaymentModal,
        selectedBill
    ]);
    const loadsupplierData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ({ silent = false } = {})=>{
        if (!supplierId) {
            setLoading(false);
            return;
        }
        if (!silent) {
            setLoading(true);
        }
        try {
            const [supplierResponse, purchasesResponse, paymentsResponse] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/suppliers/${supplierId}`, {
                    method: "GET",
                    suppressErrorToast: silent
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/purchases", {
                    method: "GET",
                    suppressErrorToast: true,
                    suppressErrorLog: true
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/supplierpayments/getSupplierPaymentsBySupplier/${supplierId}`, {
                    method: "GET",
                    suppressErrorToast: true,
                    suppressErrorLog: true
                })
            ]);
            if (supplierResponse?.success && supplierResponse?.supplier) {
                const normalizedsupplier = normalizesupplier(supplierResponse.supplier);
                setsupplier(normalizedsupplier);
                const purchasesArray = mergeLatestpurchases(extractpurchasesArray(purchasesResponse));
                setsupplierpurchases(purchasesArray.filter((purchase)=>matchessupplierpurchase(purchase, normalizedsupplier)));
                const normalizedPayments = extractSupplierPaymentsArray(paymentsResponse).map((payment)=>normalizeSupplierPayment(payment));
                const remainingBillPayment = normalizedPayments.find((payment)=>String(payment?.notes || "").trim() === REMAINING_BILL_MARKER);
                setBlankBillDebit(Number(remainingBillPayment?.amountNumber || 0));
                setBlankBillPaymentId(String(remainingBillPayment?.paymentId || remainingBillPayment?.id || "").trim());
                setSupplierPayments(normalizedPayments.filter((payment)=>String(payment?.notes || "").trim() !== REMAINING_BILL_MARKER));
            } else {
                setsupplier(null);
                setBlankBillDebit(0);
                setBlankBillPaymentId("");
                setSupplierPayments([]);
            }
        } catch (error) {
            console.error("supplier detail load error:", error);
            setsupplier(null);
            setBlankBillDebit(0);
            setBlankBillPaymentId("");
            setSupplierPayments([]);
        } finally{
            if (!silent) {
                setLoading(false);
            }
        }
    }, [
        supplierId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadsupplierData();
        const handleFocus = ()=>loadsupplierData({
                silent: true
            });
        const handleVisibilityChange = ()=>{
            if (document.visibilityState === "visible") {
                loadsupplierData({
                    silent: true
                });
            }
        };
        const intervalId = window.setInterval(()=>{
            loadsupplierData({
                silent: true
            });
        }, 15000);
        window.addEventListener("focus", handleFocus);
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return ()=>{
            window.clearInterval(intervalId);
            window.removeEventListener("focus", handleFocus);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [
        loadsupplierData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTransactionPage(1);
    }, [
        billDateRange.from,
        billDateRange.to,
        supplier?.id
    ]);
    const displayBills = (()=>{
        const sourceBills = Array.isArray(supplier?.bills) ? supplier.bills : [];
        const sourceBillsByKey = new Map();
        sourceBills.forEach((bill)=>{
            getEntryMatchKeys(bill?.id, bill?.reference, bill?.billId).forEach((key)=>{
                sourceBillsByKey.set(key, bill);
            });
        });
        return supplierpurchases.map((purchase, index)=>{
            const { totalAmount, paidAmount, balanceAmount } = getNormalizedpurchaseAmounts(purchase);
            const matchedStoredBill = getEntryMatchKeys(purchase?._id, purchase?.invoiceNo, purchase?.invoiceNumber).map((key)=>sourceBillsByKey.get(key)).find(Boolean);
            const items = Array.isArray(purchase?.items) ? purchase.items : Array.isArray(purchase?.products) ? purchase.products : [];
            const effectivePaidAmount = Number(paidAmount || parseAmount(matchedStoredBill?.paidAmount) || 0);
            const remaining = Math.max(balanceAmount || totalAmount - effectivePaidAmount, 0);
            const description = items.map((item)=>item?.productName || item?.name).filter(Boolean).join(", ");
            const reference = String(purchase?.invoiceNo || purchase?.invoiceNumber || purchase?._id || "");
            const purchaseStatus = formatStatusLabel(purchase?.paymentStatus || purchase?.purchaseStatus || matchedStoredBill?.status || getpurchasePaymentStatus(effectivePaidAmount, totalAmount), "Pending").toLowerCase();
            return {
                id: reference || `purchase-${index + 1}`,
                purchaseId: String(purchase?._id || ""),
                date: purchase?.purchaseDate || purchase?.createdAt || "",
                description: description || "N/A",
                amount: formatRs(totalAmount),
                paidAmount: formatRs(effectivePaidAmount),
                remainingAmount: formatRs(remaining),
                amountNumber: totalAmount,
                paidAmountNumber: effectivePaidAmount,
                remainingAmountNumber: remaining,
                status: purchaseStatus,
                reference,
                transactionTimestamp: purchase?.updatedAt || matchedStoredBill?.updatedAt || purchase?.createdAt || purchase?.purchaseDate || "",
                source: "bill"
            };
        });
    })();
    const totalBillAmount = displayBills.reduce((sum, bill)=>sum + bill.amountNumber, 0);
    const totalPurchaseAmount = Number(totalBillAmount || 0) + Number(blankBillDebit || 0);
    const totalOutstandingAmount = displayBills.reduce((sum, bill)=>sum + bill.remainingAmountNumber, 0);
    const totalSupplierPendingAmount = Math.max(Number(totalOutstandingAmount || 0) + Number(blankBillDebit || 0), 0);
    const paymentHistoryByKey = new Map();
    supplierPayments.forEach((payment, index)=>{
        const key = String(payment?.paymentId || payment?.id || `PAY-${index + 1}`).trim();
        paymentHistoryByKey.set(key, payment);
    });
    const paymentHistoryToShow = Array.from(paymentHistoryByKey.values()).sort((a, b)=>{
        const dateDiff = (getNormalizedDateValue(b.date) ?? 0) - (getNormalizedDateValue(a.date) ?? 0);
        if (dateDiff !== 0) return dateDiff;
        return getTransactionSortValue(b.transactionTimestamp, b.date) - getTransactionSortValue(a.transactionTimestamp, a.date);
    });
    const transactionFeed = [
        ...displayBills.map((bill, index)=>({
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
                status: formatStatusLabel(bill.status, "Pending")
            })),
        ...paymentHistoryToShow.map((payment, index)=>({
                id: `payment-${payment.id}-${index}`,
                paymentId: String(payment?.id || ""),
                type: "payment",
                typeLabel: "Payment",
                date: payment.date,
                transactionTimestamp: payment.transactionTimestamp,
                reference: payment.reference || payment.billId || payment.id,
                billId: payment.billId || "",
                paymentReference: payment.reference || "",
                particulars: String(payment?.notes || "").trim() === REMAINING_BILL_PAYMENT_NOTE ? "old bill payment" : payment.notes || "N/A",
                debit: 0,
                credit: payment.amountNumber,
                savedOrder: displayBills.length + index,
                status: "Received",
                method: payment.method,
                notes: payment.notes || ""
            }))
    ].sort((a, b)=>{
        const dateDiff = (getNormalizedDateValue(b.date) ?? 0) - (getNormalizedDateValue(a.date) ?? 0);
        if (dateDiff !== 0) return dateDiff;
        const timestampDiff = getTransactionSortValue(b.transactionTimestamp, b.date) - getTransactionSortValue(a.transactionTimestamp, a.date);
        if (timestampDiff !== 0) return timestampDiff;
        return b.savedOrder - a.savedOrder;
    });
    let runningBalance = 0;
    const chronologicalTransactions = [
        ...transactionFeed
    ].sort((a, b)=>{
        const dateDiff = (getNormalizedDateValue(a.date) ?? 0) - (getNormalizedDateValue(b.date) ?? 0);
        if (dateDiff !== 0) return dateDiff;
        const timestampDiff = getTransactionSortValue(a.transactionTimestamp, a.date) - getTransactionSortValue(b.transactionTimestamp, b.date);
        if (timestampDiff !== 0) return timestampDiff;
        return a.savedOrder - b.savedOrder;
    });
    const transactionsWithBalance = chronologicalTransactions.map((entry)=>{
        runningBalance = Math.max(0, runningBalance + entry.debit - entry.credit);
        return {
            ...entry,
            balance: runningBalance
        };
    }).sort((a, b)=>{
        const dateDiff = (getNormalizedDateValue(b.date) ?? 0) - (getNormalizedDateValue(a.date) ?? 0);
        if (dateDiff !== 0) return dateDiff;
        const timestampDiff = getTransactionSortValue(b.transactionTimestamp, b.date) - getTransactionSortValue(a.transactionTimestamp, a.date);
        if (timestampDiff !== 0) return timestampDiff;
        return b.savedOrder - a.savedOrder;
    });
    const filteredTransactions = transactionsWithBalance.filter((entry)=>{
        const entryDate = getNormalizedDateValue(entry.date);
        const fromDate = billDateRange.from ? getNormalizedDateValue(billDateRange.from) : null;
        const toDate = billDateRange.to ? getNormalizedDateValue(billDateRange.to) : null;
        if (entryDate === null) return false;
        if (fromDate !== null && entryDate < fromDate) return false;
        if (toDate !== null && entryDate > toDate) return false;
        return true;
    });
    const adjustedFilteredTransactions = filteredTransactions.map((entry)=>({
            ...entry,
            balance: Math.max(0, Number(entry.balance || 0) + Number(blankBillDebit || 0))
        }));
    const latestBillBalance = Number(adjustedFilteredTransactions.find((entry)=>String(entry?.type || "").toLowerCase() === "bill")?.balance || adjustedFilteredTransactions?.[0]?.balance || 0);
    const latestTransactionBalance = Number(adjustedFilteredTransactions?.[0]?.balance || 0);
    const canAddPayment = Number(latestTransactionBalance || 0) > 0 && Number(latestBillBalance || 0) > 0;
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
        savedOrder: -1,
        transactionTimestamp: ""
    };
    const displayTransactions = [
        ...adjustedFilteredTransactions,
        blankBillRow
    ].sort((a, b)=>{
        if (a?.isBlankBillRow) return 1;
        if (b?.isBlankBillRow) return -1;
        const dateDiff = (getNormalizedDateValue(b?.date) ?? 0) - (getNormalizedDateValue(a?.date) ?? 0);
        if (dateDiff !== 0) return dateDiff;
        const timestampDiff = getTransactionSortValue(b?.transactionTimestamp, b?.date) - getTransactionSortValue(a?.transactionTimestamp, a?.date);
        if (timestampDiff !== 0) return timestampDiff;
        return Number(b?.savedOrder || 0) - Number(a?.savedOrder || 0);
    });
    const totalTransactionPages = Math.max(1, Math.ceil(displayTransactions.length / transactionsPerPage));
    const safeTransactionPage = Math.min(transactionPage, totalTransactionPages);
    const paginatedTransactions = displayTransactions.slice((safeTransactionPage - 1) * transactionsPerPage, safeTransactionPage * transactionsPerPage);
    const purchasedProducts = supplierpurchases.flatMap((purchase, purchaseIndex)=>(Array.isArray(purchase?.items) ? purchase.items : Array.isArray(purchase?.products) ? purchase.products : []).map((item, itemIndex)=>({
                id: [
                    String(purchase?._id || purchaseIndex),
                    String(item?.productId?._id || item?.productId || itemIndex),
                    String(item?.productName || item?.name || itemIndex),
                    String(itemIndex)
                ].join("-"),
                date: purchase?.purchaseDate || purchase?.createdAt || "",
                reference: purchase?.invoiceNo || purchase?._id || "-",
                name: item?.productName || item?.name || "Item",
                quantity: Number(item?.quantity || 0),
                unitPrice: Number((item?.unitPrice ?? item?.purchasePrice) || 0),
                status: getProductpurchaseStatus(item),
                total: Number(item?.totalPrice ?? 0) || Number((item?.unitPrice ?? item?.purchasePrice) || 0) * Number(item?.quantity || 0)
            })));
    const persistsupplierLedger = async (nextBills)=>{
        const nextTotalDue = nextBills.reduce((sum, bill)=>sum + Math.max(parseAmount(bill.amount) - parseAmount(bill.paidAmount), 0), 0);
        const payload = {
            bills: nextBills,
            totalDue: nextTotalDue,
            lastPurchase: supplier?.lastPurchase || ""
        };
        let response = null;
        try {
            response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/suppliers/${supplierId}`, {
                method: "PUT",
                data: payload
            });
        } catch (primaryError) {
            try {
                response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/suppliers/updateSupplier/${supplierId}`, {
                    method: "PUT",
                    data: payload
                });
            } catch (fallbackError) {
                console.error("supplier ledger save error:", fallbackError || primaryError);
                return false;
            }
        }
        if (response?.success && response?.supplier) {
            const normalizedNextSupplier = normalizesupplier(response.supplier);
            setsupplier(normalizedNextSupplier);
            syncCachedSupplier(normalizedNextSupplier);
            return true;
        }
        if (response?.success) {
            let normalizedNextSupplier = null;
            setsupplier((prev)=>{
                if (!prev) {
                    return prev;
                }
                normalizedNextSupplier = normalizesupplier({
                    ...prev,
                    bills: nextBills,
                    totalDue: nextTotalDue,
                    lastPurchase: prev?.lastPurchase || ""
                });
                return normalizedNextSupplier;
            });
            if (normalizedNextSupplier) {
                syncCachedSupplier(normalizedNextSupplier);
            }
            return true;
        }
        return false;
    };
    const buildPersistableBills = ()=>displayBills.map((bill)=>({
                id: String(bill.id || ""),
                date: bill.date || "",
                description: bill.description || "",
                amount: bill.amount,
                paidAmount: bill.paidAmount,
                status: bill.status,
                dueDate: bill.dueDate || "",
                notes: ""
            })).map((bill)=>({
                ...bill
            }));
    const getBillReferenceValue = (billLike = {})=>String(billLike?.reference || billLike?.id || billLike?.billId || billLike?.invoiceNo || billLike?.invoiceNumber || "");
    const removeFirstMatchingPayment = (payments, matcher)=>{
        let removed = false;
        return payments.filter((payment, index)=>{
            if (removed || !matcher(payment, index)) return true;
            removed = true;
            return false;
        });
    };
    const hasMatchingReferenceValue = (values = [], candidates = [])=>values.some((value)=>value && candidates.some((candidate)=>candidate && candidate === value));
    const isSupplierLedgerPaymentMatch = (payment, entry, linkedpurchase = null)=>{
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
        const sameDate = paymentDate === entryDate || getNormalizedDateValue(paymentDate) === getNormalizedDateValue(entryDate);
        if (!sameDate) {
            return false;
        }
        const referenceCandidates = [
            String(entry?.reference || "").trim(),
            String(entry?.billId || "").trim(),
            String(entry?.paymentReference || "").trim(),
            String(linkedpurchase?.invoiceNo || linkedpurchase?.invoiceNumber || linkedpurchase?._id || "").trim()
        ].filter(Boolean);
        const paymentCandidates = [
            String(payment?.reference || "").trim(),
            String(payment?.billId || "").trim(),
            getPaymentEntryId(payment)
        ].filter(Boolean);
        return hasMatchingReferenceValue(referenceCandidates, paymentCandidates);
    };
    const isPaymentEntryMatch = (payment, entry)=>{
        if (entry?.paymentId && getPaymentEntryId(payment) === String(entry.paymentId)) {
            return true;
        }
        const paymentAmount = parseAmount(payment?.amountNumber ?? payment?.amount);
        const entryAmount = Number(entry?.credit || 0);
        const sameAmount = paymentAmount === entryAmount;
        const paymentDate = String(payment?.date || payment?.appliedAt || "").trim();
        const entryDate = String(entry?.date || "").trim();
        const sameDate = paymentDate === entryDate || getNormalizedDateValue(paymentDate) === getNormalizedDateValue(entryDate);
        const entryReferenceCandidates = [
            String(entry?.reference || "").trim(),
            String(entry?.billId || "").trim(),
            String(entry?.paymentReference || "").trim()
        ].filter(Boolean);
        const paymentReferenceCandidates = [
            String(payment?.reference || "").trim(),
            String(payment?.billId || "").trim(),
            getPaymentEntryId(payment)
        ].filter(Boolean);
        const sameMethod = String(payment?.method || "") === String(entry?.method || "");
        return sameAmount && sameDate && (hasMatchingReferenceValue(entryReferenceCandidates, paymentReferenceCandidates) || sameMethod);
    };
    const isPurchasePaymentEntryMatch = (purchase, payment, entry, purchaseIndex = 0, paymentIndex = 0)=>{
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
        const sameDate = paymentDate === entryDate || getNormalizedDateValue(paymentDate) === getNormalizedDateValue(entryDate);
        if (!sameDate) {
            return false;
        }
        const referenceCandidates = [
            String(payment?.reference || "").trim(),
            String(payment?.billId || "").trim(),
            String(purchase?.invoiceNo || purchase?.invoiceNumber || purchase?._id || "").trim(),
            getPaymentEntryId(payment),
            builtPaymentEntry.id
        ].filter(Boolean);
        const entryReferenceCandidates = [
            String(entry?.reference || "").trim(),
            String(entry?.billId || "").trim(),
            String(entry?.paymentReference || "").trim(),
            String(entry?.paymentId || "").trim()
        ].filter(Boolean);
        const sameMethod = String(payment?.method || "") === String(entry?.method || "");
        return sameDate && (hasMatchingReferenceValue(entryReferenceCandidates, referenceCandidates) || sameMethod);
    };
    const removeMatchingSupplierLedgerPayments = (payments = [], entry, linkedpurchase = null)=>(Array.isArray(payments) ? payments : []).filter((payment)=>!isSupplierLedgerPaymentMatch(payment, entry, linkedpurchase));
    const requestEditTransaction = (entry)=>{
        if (entry?.type !== "payment") return;
        if (!canEditsupplier) {
            alert("You do not have permission to edit this payment.");
            return;
        }
        const linkedBill = displayBills.find((bill)=>String(bill?.id || "") === String(entry?.billId || entry?.reference || "")) || null;
        setEditTransactionTarget({
            ...entry,
            linkedBillRemaining: Number(linkedBill?.remainingAmountNumber ?? (isRemainingBillPaymentEntry(entry) ? entry?.balance : 0) ?? 0),
            linkedBillAmount: Number(linkedBill?.amountNumber || 0)
        });
        setPaymentForm({
            method: entry.method || "Cash",
            reference: String(entry.paymentReference || entry.reference || getBillReferenceValue(linkedBill || entry) || "").trim(),
            date: (()=>{
                const nextDate = entry.date ? new Date(entry.date) : new Date();
                return Number.isNaN(nextDate.getTime()) ? toDateInputValue(new Date()) : toDateInputValue(nextDate);
            })(),
            partialAmount: String(Number(entry.credit || 0))
        });
    };
    const requestEditBlankBill = ()=>{
        setBlankBillDebitDraft(String(Number(blankBillDebit || 0)));
        setShowBlankBillModal(true);
    };
    const handleSaveBlankBillCredit = async (event)=>{
        event.preventDefault();
        if (!supplier) return;
        const nextDebit = Number(blankBillDebitDraft || 0);
        if (Number.isNaN(nextDebit) || nextDebit < 0) {
            alert("Debit amount must be 0 or greater.");
            return;
        }
        try {
            const supplierIdentifier = supplier.id || supplier._id;
            const existingPaymentId = String(blankBillPaymentId || "").trim();
            if (nextDebit <= 0) {
                if (existingPaymentId) {
                    const deleteResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/supplierpayments/deleteSupplierPayment/${existingPaymentId}`, {
                        method: "DELETE",
                        allowOfflineCrud: false,
                        data: {
                            supplierId: supplierIdentifier,
                            purchaseId: "",
                            billId: REMAINING_BILL_REFERENCE,
                            paidAmount: Number(blankBillDebit || 0),
                            paymentDate: new Date().toISOString().split("T")[0]
                        }
                    });
                    if (!deleteResponse?.success) {
                        alert(deleteResponse?.message || "Failed to update old bill.");
                        return;
                    }
                }
            } else if (existingPaymentId) {
                const updateResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/supplierpayments/updateSupplierPayment/${existingPaymentId}`, {
                    method: "PUT",
                    allowOfflineCrud: false,
                    data: {
                        supplierId: supplierIdentifier,
                        purchaseId: "",
                        previousPurchaseId: "",
                        billId: REMAINING_BILL_REFERENCE,
                        paidAmount: nextDebit,
                        paymentMethod: "Cash",
                        paymentDate: new Date().toISOString().split("T")[0],
                        reference: REMAINING_BILL_REFERENCE,
                        notes: REMAINING_BILL_MARKER
                    }
                });
                if (!updateResponse?.success) {
                    alert(updateResponse?.message || "Failed to update old bill.");
                    return;
                }
            } else {
                const createResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/supplierpayments/createSupplierPayment", {
                    method: "POST",
                    allowOfflineCrud: false,
                    data: {
                        supplierId: supplierIdentifier,
                        purchaseId: "",
                        billId: REMAINING_BILL_REFERENCE,
                        paidAmount: nextDebit,
                        paymentMethod: "Cash",
                        paymentDate: new Date().toISOString().split("T")[0],
                        reference: REMAINING_BILL_REFERENCE,
                        notes: REMAINING_BILL_MARKER
                    }
                });
                if (!createResponse?.success) {
                    alert(createResponse?.message || "Failed to update old bill.");
                    return;
                }
            }
            clearSupplierLocalCaches(supplier, {
                clearPurchases: false
            });
            await loadsupplierData({
                silent: true
            });
            setShowBlankBillModal(false);
        } catch (error) {
            alert(error?.message || "Failed to update old bill.");
        }
    };
    const handleEditPaymentTransaction = async (event)=>{
        event.preventDefault();
        if (!supplier || !editTransactionTarget) return;
        const nextAmount = Number(paymentForm.partialAmount || 0);
        const previousAmount = Number(editTransactionTarget.credit || 0);
        const maxAllowedAmount = previousAmount + Number(editTransactionTarget.linkedBillRemaining || 0);
        if (!nextAmount || nextAmount <= 0 || nextAmount > maxAllowedAmount) {
            alert(`Payment amount must be > 0 and <= ${maxAllowedAmount}.`);
            return;
        }
        setIsSavingEditedPayment(true);
        try {
            const paymentId = String(editTransactionTarget.paymentId || editTransactionTarget.id || "").trim();
            if (!paymentId) {
                alert("Payment record not found.");
                return;
            }
            const linkedpurchase = findLinkedpurchase(editTransactionTarget);
            const linkedBill = displayBills.find((bill)=>hasMatchingReferenceValue([
                    String(editTransactionTarget?.billId || "").trim(),
                    String(editTransactionTarget?.reference || "").trim()
                ], [
                    String(bill?.id || "").trim(),
                    String(bill?.reference || "").trim(),
                    String(getBillReferenceValue(bill) || "").trim()
                ])) || null;
            const billReference = isRemainingBillPaymentEntry(editTransactionTarget) ? REMAINING_BILL_REFERENCE : getBillReferenceValue(linkedBill || editTransactionTarget);
            const updateResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/supplierpayments/updateSupplierPayment/${paymentId}`, {
                method: "PUT",
                allowOfflineCrud: false,
                data: {
                    supplierId: supplier.id || supplier._id,
                    purchaseId: linkedpurchase?._id || "",
                    previousPurchaseId: linkedpurchase?._id || "",
                    billId: billReference,
                    paidAmount: nextAmount,
                    paymentMethod: paymentForm.method,
                    paymentDate: paymentForm.date,
                    reference: String(paymentForm.reference || "").trim(),
                    notes: editTransactionTarget.notes || ""
                }
            });
            if (!updateResponse?.success) {
                alert(updateResponse?.message || "Failed to update payment.");
                return;
            }
            if (updateResponse?.purchase?._id) {
                syncCachedpurchase(updateResponse.purchase);
            }
            clearSupplierLocalCaches(supplier, {
                clearPurchases: Boolean(linkedpurchase?._id)
            });
            await loadsupplierData({
                silent: true
            });
            setEditTransactionTarget(null);
        } catch (error) {
            alert(error?.message || "Failed to update payment.");
        } finally{
            setIsSavingEditedPayment(false);
        }
    };
    const requestDeleteTransaction = (entry)=>{
        if (entry?.type !== "payment") return;
        if (!canEditsupplier) {
            alert("You do not have permission to delete this payment.");
            return;
        }
        setDeleteTransactionTarget(entry);
    };
    const handleDeleteTransaction = async (entry = deleteTransactionTarget)=>{
        if (!supplier) return;
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
            const deleteResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/purchases/deletepurchase/${linkedpurchase._id}`, {
                method: "DELETE"
            });
            if (!deleteResponse?.success) {
                alert(deleteResponse?.message || "Failed to delete bill.");
                setIsDeletingTransaction(false);
                return;
            }
            const nextBills = buildPersistableBills().filter((bill)=>String(bill.id || "") !== String(entry.reference || entry.id || ""));
            const saved = await persistsupplierLedger(nextBills);
            if (!saved) {
                alert("Bill deleted, but supplier ledger cleanup failed. Please refresh and verify the remaining transactions.");
            }
            await loadsupplierData({
                silent: true
            });
            setDeleteTransactionTarget(null);
            setIsDeletingTransaction(false);
            return;
        }
        if (!canEditsupplier) {
            alert("You do not have permission to delete this payment.");
            setIsDeletingTransaction(false);
            return;
        }
        try {
            const paymentId = String(entry?.paymentId || entry?.id || "").trim();
            if (!paymentId) {
                alert("Payment record not found.");
                return;
            }
            const entryBillReference = String(entry?.billId || entry?.paymentReference || entry?.reference || "").trim();
            const linkedpurchase = findLinkedpurchase({
                ...entry,
                id: entryBillReference || entry?.id || "",
                reference: entryBillReference || entry?.reference || "",
                billId: entryBillReference || entry?.billId || ""
            }) || supplierpurchases.find((purchase, purchaseIndex)=>(Array.isArray(purchase?.paymentHistory) ? purchase.paymentHistory : []).some((payment, paymentIndex)=>isPurchasePaymentEntryMatch(purchase, payment, entry, purchaseIndex, paymentIndex)));
            const deleteResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/supplierpayments/deleteSupplierPayment/${paymentId}`, {
                method: "DELETE",
                allowOfflineCrud: false,
                data: {
                    supplierId: supplier.id || supplier._id,
                    purchaseId: linkedpurchase?._id || "",
                    billId: entryBillReference,
                    paidAmount: Number(entry?.credit || 0),
                    paymentDate: entry?.date || ""
                }
            });
            if (!deleteResponse?.success) {
                alert(deleteResponse?.message || "Failed to delete payment.");
                return;
            }
            if (deleteResponse?.purchase?._id) {
                syncCachedpurchase(deleteResponse.purchase);
            }
            clearSupplierLocalCaches(supplier, {
                clearPurchases: Boolean(linkedpurchase?._id)
            });
            await loadsupplierData({
                silent: true
            });
            setDeleteTransactionTarget(null);
        } catch (error) {
            alert(error?.message || "Failed to delete payment.");
        } finally{
            setIsDeletingTransaction(false);
        }
    };
    const openPaymentModal = (bill = null)=>{
        const fallbackOutstandingBill = [
            ...displayBills
        ].filter((entry)=>Number(entry?.remainingAmountNumber || 0) > 0).sort((a, b)=>getTransactionSortValue(a.transactionTimestamp, a.date) - getTransactionSortValue(b.transactionTimestamp, b.date))[0] || null;
        if (!bill) {
            const supplierLevelPendingAmount = Math.max(Number(latestTransactionBalance || 0), 0);
            setSelectedBill({
                id: `TOTAL-${supplier?.name || "supplier"}`,
                reference: `TOTAL-${supplier?.name || "supplier"}`,
                description: `Outstanding balance for ${supplier?.name || "supplier"}`,
                date: new Date().toISOString().split("T")[0],
                amountNumber: supplierLevelPendingAmount,
                paidAmountNumber: 0,
                remainingAmountNumber: supplierLevelPendingAmount,
                amount: formatRs(supplierLevelPendingAmount),
                paidAmount: formatRs(0),
                remainingAmount: formatRs(supplierLevelPendingAmount),
                source: "supplier-total",
                linkedInvoiceReference: getBillReferenceValue(fallbackOutstandingBill)
            });
        } else {
            setSelectedBill({
                ...bill,
                linkedInvoiceReference: getBillReferenceValue(bill)
            });
        }
        setPaymentForm((prev)=>({
                ...prev,
                reference: ""
            }));
        setShowPaymentModal(true);
    };
    const handleRecordPayment = async (event)=>{
        event.preventDefault();
        if (!canEditsupplier || !supplier) return;
        const paidAmount = Number(paymentForm.partialAmount || 0);
        if (!paidAmount || paidAmount <= 0) {
            alert("Partial amount must be > 0.");
            return;
        }
        if (paidAmount > getSelectedBillPayableAmount(selectedBill)) {
            alert("Partial amount must be <= payable amount.");
            return;
        }
        const paymentDate = paymentForm.date || new Date().toISOString().split("T")[0];
        let targetBill = selectedBill;
        if (selectedBill?.source === "supplier-total") {
            const outstandingBills = [
                ...displayBills
            ].filter((billEntry)=>Number(billEntry?.remainingAmountNumber || 0) > 0).sort((a, b)=>getTransactionSortValue(a.transactionTimestamp, a.date) - getTransactionSortValue(b.transactionTimestamp, b.date));
            const payableAmount = getSelectedBillPayableAmount(selectedBill);
            const outstandingBillsTotal = outstandingBills.reduce((sum, billEntry)=>sum + Number(billEntry?.remainingAmountNumber || 0), 0);
            let remainingToAllocate = paidAmount;
            let touchedPurchasePayments = false;
            try {
                for (const outstandingBill of outstandingBills){
                    if (remainingToAllocate <= 0) {
                        break;
                    }
                    const outstandingBillAmount = Number(outstandingBill?.remainingAmountNumber || 0);
                    const allocationAmount = Math.min(outstandingBillAmount, remainingToAllocate);
                    if (allocationAmount <= 0) {
                        continue;
                    }
                    const linkedOutstandingPurchase = findLinkedpurchase(outstandingBill);
                    const paymentResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/supplierpayments/createSupplierPayment", {
                        method: "POST",
                        allowOfflineCrud: false,
                        data: {
                            supplierId: supplier.id || supplier._id,
                            purchaseId: linkedOutstandingPurchase?._id || "",
                            billId: getBillReferenceValue(outstandingBill),
                            paidAmount: allocationAmount,
                            paymentMethod: paymentForm.method,
                            paymentDate,
                            reference: String(paymentForm.reference || "").trim(),
                            notes: ""
                        }
                    });
                    if (!paymentResponse?.success) {
                        alert(paymentResponse?.message || "Failed to record payment.");
                        return;
                    }
                    if (paymentResponse?.purchase?._id) {
                        touchedPurchasePayments = true;
                        syncCachedpurchase(paymentResponse.purchase);
                    }
                    remainingToAllocate -= allocationAmount;
                }
                if (remainingToAllocate > 0) {
                    const supplierRemainingBillAmount = Math.max(payableAmount - outstandingBillsTotal, 0);
                    if (supplierRemainingBillAmount <= 0) {
                        alert("No payable amount available for payment.");
                        return;
                    }
                    const remainingBillPaymentResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/supplierpayments/createSupplierPayment", {
                        method: "POST",
                        allowOfflineCrud: false,
                        data: {
                            supplierId: supplier.id || supplier._id,
                            purchaseId: "",
                            billId: REMAINING_BILL_REFERENCE,
                            paidAmount: remainingToAllocate,
                            paymentMethod: paymentForm.method,
                            paymentDate,
                            reference: String(paymentForm.reference || "").trim(),
                            notes: REMAINING_BILL_PAYMENT_NOTE
                        }
                    });
                    if (!remainingBillPaymentResponse?.success) {
                        alert(remainingBillPaymentResponse?.message || "Failed to record payment.");
                        return;
                    }
                }
                clearSupplierLocalCaches(supplier, {
                    clearPurchases: touchedPurchasePayments
                });
                await loadsupplierData({
                    silent: true
                });
                setShowPaymentModal(false);
                setSelectedBill(null);
            } catch (error) {
                alert(error?.message || "Failed to record payment.");
            }
            return;
        }
        if (!targetBill) {
            alert("Bill not found for this supplier.");
            return;
        }
        const linkedpurchase = findLinkedpurchase(targetBill);
        const maxPayableAmount = linkedpurchase?._id ? getLinkedPurchaseRemainingAmount(linkedpurchase, targetBill) : getSelectedBillPayableAmount(targetBill);
        if (maxPayableAmount <= 0) {
            alert("No payable amount available for payment.");
            return;
        }
        if (paidAmount > maxPayableAmount) {
            alert(`Partial amount must be <= ${maxPayableAmount}.`);
            return;
        }
        try {
            const paymentResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/supplierpayments/createSupplierPayment", {
                method: "POST",
                allowOfflineCrud: false,
                data: {
                    supplierId: supplier.id || supplier._id,
                    purchaseId: linkedpurchase?._id || "",
                    billId: getBillReferenceValue(targetBill),
                    paidAmount,
                    paymentMethod: paymentForm.method,
                    paymentDate,
                    reference: String(paymentForm.reference || "").trim(),
                    notes: ""
                }
            });
            if (!paymentResponse?.success) {
                alert(paymentResponse?.message || "Failed to record payment.");
                return;
            }
            if (paymentResponse?.purchase?._id) {
                syncCachedpurchase(paymentResponse.purchase);
            }
            clearSupplierLocalCaches(supplier, {
                clearPurchases: Boolean(linkedpurchase?._id)
            });
            await loadsupplierData({
                silent: true
            });
            setShowPaymentModal(false);
            setSelectedBill(null);
        } catch (error) {
            alert(error?.message || "Failed to record payment.");
        }
    };
    const handlePrintTransactions = ()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const printTransactions = undefined;
        const rows = undefined;
        const printWindow = undefined;
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600 dark:text-gray-400",
                children: "Loading supplier details..."
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                lineNumber: 1878,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
            lineNumber: 1877,
            columnNumber: 7
        }, this);
    }
    if (!supplier) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-semibold text-gray-900 dark:text-white",
                        children: "supplier not found."
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                        lineNumber: 1887,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/AdminDashboard/suppliers"),
                        className: "mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white",
                        children: "Back to suppliers"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                        lineNumber: 1888,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                lineNumber: 1886,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
            lineNumber: 1885,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>router.push("/AdminDashboard/suppliers"),
                                            className: "rounded-xl bg-gray-100 p-3 text-gray-700 transition hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 1909,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                            lineNumber: 1905,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-500 text-xl font-bold text-white",
                                                    children: String(supplier.name || "C").charAt(0)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                    lineNumber: 1912,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xl font-bold uppercase tracking-wide text-blue-600",
                                                            children: "Supplier Details"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                            lineNumber: 1916,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                            className: "text-2xl font-bold text-gray-900 dark:text-white",
                                                            children: toTitleCase(supplier.name)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                            lineNumber: 1917,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500 dark:text-gray-400",
                                                            children: "View and manage supplier information"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                            lineNumber: 1918,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                    lineNumber: 1915,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                            lineNumber: 1911,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                    lineNumber: 1904,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                lineNumber: 1903,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl bg-blue-50 px-4 py-3 dark:bg-blue-900/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-blue-700 dark:text-blue-300",
                                                children: "Total Bills"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 1927,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-bold text-blue-900 dark:text-white",
                                                children: displayBills.length
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 1928,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 1926,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl bg-emerald-50 px-4 py-3 dark:bg-emerald-900/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-emerald-700 dark:text-emerald-300",
                                                children: "Total Purchase"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 1931,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-bold text-emerald-900 dark:text-white",
                                                children: formatRs(totalPurchaseAmount)
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 1932,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 1930,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl bg-amber-50 px-4 py-3 dark:bg-amber-900/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-amber-700 dark:text-amber-300",
                                                children: "Total Pending"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 1935,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-bold text-amber-900 dark:text-white",
                                                children: formatRs(latestTransactionBalance)
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 1936,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 1934,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl bg-violet-50 px-4 py-3 dark:bg-violet-900/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-violet-700 dark:text-violet-300",
                                                children: "Payments"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 1939,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-bold text-violet-900 dark:text-white",
                                                children: paymentHistoryToShow.length
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 1940,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 1938,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                lineNumber: 1925,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                        lineNumber: 1902,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                        "bills",
                                        "products",
                                        "payments",
                                        "profile"
                                    ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab(tab),
                                            className: `rounded-xl px-4 py-2 text-sm font-medium transition ${activeTab === tab ? "bg-gradient-to-r from-blue-600 to-emerald-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300"}`,
                                            children: tab.charAt(0).toUpperCase() + tab.slice(1)
                                        }, tab, false, {
                                            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                            lineNumber: 1949,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                    lineNumber: 1947,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                lineNumber: 1946,
                                columnNumber: 11
                            }, this),
                            activeTab === "bills" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4 rounded-2xl bg-gray-50 p-4 dark:bg-gray-700/40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-nowrap items-center gap-3 overflow-x-auto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex shrink-0 items-center gap-2 whitespace-nowrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs font-medium text-gray-500 dark:text-gray-400",
                                                                children: "From"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 1969,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                value: billDateRange.from,
                                                                onChange: (e)=>setBillDateRange((prev)=>({
                                                                            ...prev,
                                                                            from: e.target.value
                                                                        })),
                                                                className: "rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 1970,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 1968,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex shrink-0 items-center gap-2 whitespace-nowrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-xs font-medium text-gray-500 dark:text-gray-400",
                                                                children: "To"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 1973,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "date",
                                                                value: billDateRange.to,
                                                                onChange: (e)=>setBillDateRange((prev)=>({
                                                                            ...prev,
                                                                            to: e.target.value
                                                                        })),
                                                                className: "rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 1974,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 1972,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            if (!canAddPayment || !canEditsupplier) return;
                                                            openPaymentModal();
                                                        },
                                                        disabled: !canEditsupplier || !canAddPayment,
                                                        className: "inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2 text-sm font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-60",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 1984,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Add Payment"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 1976,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handlePrintTransactions,
                                                        className: "inline-flex shrink-0 items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 1988,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Print Total Bills"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 1987,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 1967,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-left text-sm font-semibold text-gray-900 dark:text-white",
                                                    children: [
                                                        "Total Bill Amount: ",
                                                        formatRs(totalBillAmount)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                    lineNumber: 1993,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 1992,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 1966,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-x-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                className: "w-full min-w-[940px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                        className: "bg-gray-100 dark:bg-gray-700/60",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                "Date",
                                                                "Type",
                                                                "Reference",
                                                                "Particulars",
                                                                "Status",
                                                                "Debit",
                                                                "Credit",
                                                                "Balance",
                                                                "Action"
                                                            ].map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                    className: `px-2.5 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-300 ${label === "Date" ? "w-[90px] min-w-[90px]" : label === "Type" ? "w-[85px] min-w-[85px]" : label === "Reference" ? "w-[95px] min-w-[95px]" : label === "Particulars" ? "w-[160px] min-w-[160px]" : label === "Status" ? "w-[85px] min-w-[85px]" : label === "Debit" || label === "Credit" || label === "Balance" ? "w-[90px] min-w-[90px]" : label === "Action" ? "w-[70px] min-w-[70px]" : ""}`,
                                                                    children: label
                                                                }, label, false, {
                                                                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                    lineNumber: 2003,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                            lineNumber: 2001,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2000,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                        className: "divide-y divide-gray-200 dark:divide-gray-700",
                                                        children: paginatedTransactions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                colSpan: 9,
                                                                className: "px-2.5 py-8 text-center text-sm text-gray-500 dark:text-gray-400",
                                                                children: "No transactions found for the selected date range."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2031,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                            lineNumber: 2030,
                                                            columnNumber: 25
                                                        }, this) : paginatedTransactions.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "hover:bg-gray-50 dark:hover:bg-gray-700/30",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-2.5 py-2.5 text-sm text-gray-700 dark:text-gray-300",
                                                                        children: formatDate(entry.date)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2036,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-2.5 py-2.5 text-sm font-medium text-gray-900 dark:text-white",
                                                                        children: entry.typeLabel || entry.type
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2037,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-2.5 py-2.5 text-sm text-gray-700 dark:text-gray-300",
                                                                        children: entry.reference || "N/A"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2038,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "w-[160px] min-w-[160px] px-2.5 py-2.5 text-sm text-gray-700 dark:text-gray-300",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "overflow-hidden break-words",
                                                                            style: {
                                                                                display: "-webkit-box",
                                                                                WebkitLineClamp: 2,
                                                                                WebkitBoxOrient: "vertical"
                                                                            },
                                                                            children: entry.particulars || "N/A"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                            lineNumber: 2040,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2039,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-2.5 py-2.5 text-sm text-gray-700 dark:text-gray-300",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: `inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusBadgeClassName(entry.status)}`,
                                                                            children: entry.status || "N/A"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                            lineNumber: 2052,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2051,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-2.5 py-2.5 text-sm text-gray-700 dark:text-gray-300",
                                                                        children: formatRs(entry.debit)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2056,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-2.5 py-2.5 text-sm text-gray-700 dark:text-gray-300",
                                                                        children: formatRs(entry.credit)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2057,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-2.5 py-2.5 text-sm font-medium text-gray-900 dark:text-white",
                                                                        children: formatRs(entry.balance)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2058,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "px-2.5 py-2.5 text-sm text-gray-700 dark:text-gray-300",
                                                                        children: entry.isBlankBillRow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: requestEditBlankBill,
                                                                            className: "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-200 text-blue-600 transition hover:bg-blue-50 dark:border-blue-900/60 dark:text-blue-300 dark:hover:bg-blue-950/30",
                                                                            "aria-label": "Edit old bill credit",
                                                                            title: "Edit old bill",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                                                className: "h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                                lineNumber: 2068,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                            lineNumber: 2061,
                                                                            columnNumber: 33
                                                                        }, this) : entry.type === "payment" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>requestEditTransaction(entry),
                                                                                    disabled: !canEditsupplier,
                                                                                    className: "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-200 text-blue-600 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-blue-900/60 dark:text-blue-300 dark:hover:bg-blue-950/30",
                                                                                    "aria-label": "Edit payment transaction",
                                                                                    title: "Edit payment",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                                                        className: "h-4 w-4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                                        lineNumber: 2080,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                                    lineNumber: 2072,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>requestDeleteTransaction(entry),
                                                                                    disabled: !canEditsupplier,
                                                                                    className: "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-red-200 text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-red-900/60 dark:text-red-300 dark:hover:bg-red-950/30",
                                                                                    "aria-label": "Delete payment transaction",
                                                                                    title: "Delete payment",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                        className: "h-4 w-4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                                        lineNumber: 2090,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                                    lineNumber: 2082,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                            lineNumber: 2071,
                                                                            columnNumber: 33
                                                                        }, this) : null
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2059,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, entry.id, true, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2035,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2028,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 1999,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                            lineNumber: 1998,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 1997,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-400",
                                                children: [
                                                    "Showing ",
                                                    paginatedTransactions.length,
                                                    " of ",
                                                    displayTransactions.length,
                                                    " transactions"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2104,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setTransactionPage((prev)=>Math.max(1, prev - 1)),
                                                        disabled: safeTransactionPage === 1,
                                                        className: "rounded-lg border border-gray-300 px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600",
                                                        children: "Prev"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2106,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: [
                                                            safeTransactionPage,
                                                            " / ",
                                                            totalTransactionPages
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2107,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setTransactionPage((prev)=>Math.min(totalTransactionPages, prev + 1)),
                                                        disabled: safeTransactionPage === totalTransactionPages,
                                                        className: "rounded-lg border border-gray-300 px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600",
                                                        children: "Next"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2108,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2105,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                lineNumber: 1965,
                                columnNumber: 13
                            }, this),
                            activeTab === "products" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full min-w-[760px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-gray-100 dark:bg-gray-700/60",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        "Date",
                                                        "Reference",
                                                        "Product",
                                                        "Qty",
                                                        "Unit Price",
                                                        "Status",
                                                        "Total"
                                                    ].map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-300",
                                                            children: label
                                                        }, label, false, {
                                                            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                            lineNumber: 2122,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                    lineNumber: 2120,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2119,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-gray-200 dark:divide-gray-700",
                                                children: purchasedProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 7,
                                                        className: "px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400",
                                                        children: "No products found for this supplier."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2129,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                    lineNumber: 2128,
                                                    columnNumber: 23
                                                }, this) : purchasedProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 text-sm text-gray-700 dark:text-gray-300",
                                                                children: formatDate(product.date)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2134,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 text-sm text-gray-700 dark:text-gray-300",
                                                                children: product.reference
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2135,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 text-sm font-medium text-gray-900 dark:text-white",
                                                                children: product.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2136,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 text-sm text-gray-700 dark:text-gray-300",
                                                                children: product.quantity
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2137,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 text-sm text-gray-700 dark:text-gray-300",
                                                                children: formatRs(product.unitPrice)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2138,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 text-sm text-gray-700 dark:text-gray-300",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${product.status === "RETURNED" ? "bg-rose-100 text-rose-700" : product.status === "CLAIM" ? "bg-amber-100 text-amber-700" : "bg-emerald-100 text-emerald-700"}`,
                                                                    children: product.status === "RETURNED" ? "Returned" : product.status === "CLAIM" ? "Claim" : "Sold"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                    lineNumber: 2140,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2139,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 text-sm text-gray-700 dark:text-gray-300",
                                                                children: formatRs(product.total)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2156,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, product.id, true, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2133,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2126,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2118,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                    lineNumber: 2117,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                lineNumber: 2116,
                                columnNumber: 13
                            }, this),
                            activeTab === "payments" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full min-w-[760px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "bg-gray-100 dark:bg-gray-700/60",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        "Payment ID",
                                                        "Date",
                                                        "Bill ID",
                                                        "Amount",
                                                        "Method",
                                                        "Reference"
                                                    ].map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-300",
                                                            children: label
                                                        }, label, false, {
                                                            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                            lineNumber: 2173,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                    lineNumber: 2171,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2170,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-gray-200 dark:divide-gray-700",
                                                children: paymentHistoryToShow.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        colSpan: 6,
                                                        className: "px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400",
                                                        children: "No payment history found."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2180,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                    lineNumber: 2179,
                                                    columnNumber: 23
                                                }, this) : paymentHistoryToShow.map((payment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 text-sm font-medium text-gray-900 dark:text-white",
                                                                children: payment.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2185,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 text-sm text-gray-700 dark:text-gray-300",
                                                                children: formatDate(payment.date)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2186,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 text-sm text-gray-700 dark:text-gray-300",
                                                                children: payment.billId
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2187,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 text-sm text-gray-700 dark:text-gray-300",
                                                                children: payment.amount
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2188,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 text-sm text-gray-700 dark:text-gray-300",
                                                                children: payment.method
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2189,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-3 text-sm text-gray-700 dark:text-gray-300",
                                                                children: payment.reference || "N/A"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2190,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, payment.id, true, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2184,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2177,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2169,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                    lineNumber: 2168,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                lineNumber: 2167,
                                columnNumber: 13
                            }, this),
                            activeTab === "profile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 grid gap-6 lg:grid-cols-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-gray-200 p-5 dark:border-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mb-4 text-lg font-semibold text-gray-900 dark:text-white",
                                                children: "supplier Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2203,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                className: "mt-0.5 h-5 w-5 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2205,
                                                                columnNumber: 59
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-500",
                                                                        children: "Name"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2205,
                                                                        columnNumber: 113
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium text-gray-900 dark:text-white",
                                                                        children: toTitleCase(supplier.name)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2205,
                                                                        columnNumber: 158
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2205,
                                                                columnNumber: 108
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2205,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$id$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IdCard$3e$__["IdCard"], {
                                                                className: "mt-0.5 h-5 w-5 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2206,
                                                                columnNumber: 59
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-500",
                                                                        children: "CNIC"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2206,
                                                                        columnNumber: 115
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium text-gray-900 dark:text-white",
                                                                        children: supplier.cnic || "N/A"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2206,
                                                                        columnNumber: 160
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2206,
                                                                columnNumber: 110
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2206,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                className: "mt-0.5 h-5 w-5 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2207,
                                                                columnNumber: 59
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-500",
                                                                        children: "Phone"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2207,
                                                                        columnNumber: 114
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium text-gray-900 dark:text-white",
                                                                        children: supplier.phone || "N/A"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2207,
                                                                        columnNumber: 160
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2207,
                                                                columnNumber: 109
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2207,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                className: "mt-0.5 h-5 w-5 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2208,
                                                                columnNumber: 59
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-500",
                                                                        children: "Email"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2208,
                                                                        columnNumber: 113
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium text-gray-900 dark:text-white",
                                                                        children: supplier.email || "N/A"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2208,
                                                                        columnNumber: 159
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2208,
                                                                columnNumber: 108
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2208,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "mt-0.5 h-5 w-5 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2209,
                                                                columnNumber: 59
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-500",
                                                                        children: "Address"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2209,
                                                                        columnNumber: 115
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium text-gray-900 dark:text-white",
                                                                        children: supplier.address || "N/A"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2209,
                                                                        columnNumber: 163
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2209,
                                                                columnNumber: 110
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2209,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2204,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2202,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-gray-200 p-5 dark:border-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mb-4 text-lg font-semibold text-gray-900 dark:text-white",
                                                children: "Billing Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2214,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                className: "mt-0.5 h-5 w-5 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2216,
                                                                columnNumber: 59
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-500",
                                                                        children: "Registered Date"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2216,
                                                                        columnNumber: 117
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium text-gray-900 dark:text-white",
                                                                        children: formatDate(supplier.registeredDate || supplier.createdAt)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2216,
                                                                        columnNumber: 173
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2216,
                                                                columnNumber: 112
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2216,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                                className: "mt-0.5 h-5 w-5 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2217,
                                                                columnNumber: 59
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-500",
                                                                        children: "Credit Limit"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2217,
                                                                        columnNumber: 119
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium text-gray-900 dark:text-white",
                                                                        children: formatRs(supplier.creditLimit)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2217,
                                                                        columnNumber: 172
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2217,
                                                                columnNumber: 114
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2217,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                                className: "mt-0.5 h-5 w-5 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2218,
                                                                columnNumber: 59
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-500",
                                                                        children: "Total Due"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2218,
                                                                        columnNumber: 115
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium text-gray-900 dark:text-white",
                                                                        children: formatRs(supplier.totalDue)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2218,
                                                                        columnNumber: 165
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2218,
                                                                columnNumber: 110
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2218,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                className: "mt-0.5 h-5 w-5 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2219,
                                                                columnNumber: 59
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-500",
                                                                        children: "Notes"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2219,
                                                                        columnNumber: 117
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium text-gray-900 dark:text-white",
                                                                        children: supplier.notes || "N/A"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2219,
                                                                        columnNumber: 163
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2219,
                                                                columnNumber: 112
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2219,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                                className: "mt-0.5 h-5 w-5 text-gray-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2220,
                                                                columnNumber: 59
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-500",
                                                                        children: "Purchased Products"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2220,
                                                                        columnNumber: 116
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium text-gray-900 dark:text-white",
                                                                        children: purchasedProducts.length
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                        lineNumber: 2220,
                                                                        columnNumber: 175
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                                lineNumber: 2220,
                                                                columnNumber: 111
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2220,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2215,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                lineNumber: 2201,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                        lineNumber: 1945,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                lineNumber: 1901,
                columnNumber: 7
            }, this),
            showBlankBillModal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-sm rounded-2xl bg-white shadow-2xl dark:bg-gray-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-4 text-lg font-bold text-gray-900 dark:text-white",
                                children: "Edit old bill"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                lineNumber: 2232,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSaveBlankBillCredit,
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300",
                                                children: "Debit Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2235,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "0",
                                                value: blankBillDebitDraft,
                                                onChange: (e)=>setBlankBillDebitDraft(e.target.value),
                                                className: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2236,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2234,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-3 border-t border-gray-200 pt-4 dark:border-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setShowBlankBillModal(false),
                                                className: "rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-600 dark:text-gray-300",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2245,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2 text-sm font-medium text-white",
                                                children: "Save"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2252,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2244,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                lineNumber: 2233,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                        lineNumber: 2231,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                    lineNumber: 2230,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                lineNumber: 2229,
                columnNumber: 9
            }, this) : null,
            editTransactionTarget?.type === "payment" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-sm rounded-2xl bg-white shadow-2xl dark:bg-gray-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-4 text-lg font-bold text-gray-900 dark:text-white",
                                children: "Edit Payment"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                lineNumber: 2269,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleEditPaymentTransaction,
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300",
                                                children: "Payable Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2272,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                readOnly: true,
                                                value: formatRs(getEditablePaymentPayableAmount(editTransactionTarget)),
                                                className: "w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-700"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2273,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2271,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300",
                                                children: "Edit Payment"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2281,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "0",
                                                max: getEditablePaymentPayableAmount(editTransactionTarget),
                                                value: paymentForm.partialAmount,
                                                onChange: (e)=>setPaymentForm((prev)=>({
                                                            ...prev,
                                                            partialAmount: e.target.value
                                                        })),
                                                className: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2282,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2280,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300",
                                                children: "Reference No."
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2292,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                readOnly: true,
                                                value: paymentForm.reference || editTransactionTarget.billId || editTransactionTarget.reference || "N/A",
                                                className: "w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-700"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2293,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2291,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300",
                                                children: "Payment Method *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2301,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: paymentForm.method,
                                                onChange: (e)=>setPaymentForm((prev)=>({
                                                            ...prev,
                                                            method: e.target.value
                                                        })),
                                                className: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Cash",
                                                        children: "Cash"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2307,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Bank Transfer",
                                                        children: "Bank Transfer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2308,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Card",
                                                        children: "Card"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2309,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Check",
                                                        children: "Check"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2310,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2302,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2300,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300",
                                                children: "Date *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2314,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: paymentForm.date,
                                                onChange: (e)=>setPaymentForm((prev)=>({
                                                            ...prev,
                                                            date: e.target.value
                                                        })),
                                                className: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2315,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2313,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-3 border-t border-gray-200 pt-4 dark:border-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setEditTransactionTarget(null),
                                                disabled: isSavingEditedPayment,
                                                className: "rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:text-gray-300",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2323,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: isSavingEditedPayment,
                                                className: "rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50",
                                                children: "Save Payment"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2331,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2322,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                lineNumber: 2270,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                        lineNumber: 2268,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                    lineNumber: 2267,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                lineNumber: 2266,
                columnNumber: 9
            }, this) : null,
            deleteTransactionTarget?.type === "payment" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md rounded-xl bg-gradient-to-br from-white to-gray-50 p-5 shadow-2xl dark:from-gray-800 dark:to-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-lg bg-gradient-to-r from-red-100 to-pink-100 p-2 dark:from-red-900/30 dark:to-pink-900/30",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                        className: "h-5 w-5 text-red-600 dark:text-red-400"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2350,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                    lineNumber: 2349,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-gray-900 dark:text-white",
                                    children: "Delete Payment?"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                    lineNumber: 2352,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                            lineNumber: 2348,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800/30 dark:bg-red-900/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-800 dark:text-gray-200",
                                children: [
                                    "Are you sure want to Delete payment",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: deleteTransactionTarget.reference || deleteTransactionTarget.id || "N/A"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2358,
                                        columnNumber: 17
                                    }, this),
                                    "?"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                lineNumber: 2356,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                            lineNumber: 2355,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setDeleteTransactionTarget(null),
                                    disabled: isDeletingTransaction,
                                    className: "rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition-all duration-200 hover:from-gray-300 hover:to-gray-400 disabled:cursor-not-allowed disabled:opacity-50 dark:from-gray-700 dark:to-gray-600 dark:text-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500",
                                    children: "No"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                    lineNumber: 2364,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleDeleteTransaction(),
                                    disabled: isDeletingTransaction,
                                    className: "rounded-lg bg-gradient-to-r from-red-600 to-pink-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:from-red-700 hover:to-pink-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50",
                                    children: "Yes"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                    lineNumber: 2372,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                            lineNumber: 2363,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                    lineNumber: 2347,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                lineNumber: 2346,
                columnNumber: 9
            }, this) : null,
            showPaymentModal && selectedBill && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-sm rounded-2xl bg-white shadow-2xl dark:bg-gray-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "mb-4 text-lg font-bold text-gray-900 dark:text-white",
                                children: "Add Payment"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                lineNumber: 2389,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleRecordPayment,
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300",
                                                children: "Payable Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2392,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                readOnly: true,
                                                value: formatRs(getSelectedBillPayableAmount(selectedBill)),
                                                className: "w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-700"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2393,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2391,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300",
                                                children: "Add Payment"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2396,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "0",
                                                max: getSelectedBillPayableAmount(selectedBill),
                                                value: paymentForm.partialAmount,
                                                onChange: (e)=>setPaymentForm((prev)=>({
                                                            ...prev,
                                                            partialAmount: e.target.value
                                                        })),
                                                className: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2397,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2395,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300",
                                                children: "Remaining Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2400,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                readOnly: true,
                                                value: formatRs(Math.max(getSelectedBillPayableAmount(selectedBill) - Number(paymentForm.partialAmount || 0), 0)),
                                                className: "w-full rounded-lg border border-gray-300 bg-gray-100 px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-700"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2401,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2399,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300",
                                                children: "Reference No."
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2414,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: paymentForm.reference,
                                                onChange: (e)=>setPaymentForm((prev)=>({
                                                            ...prev,
                                                            reference: e.target.value
                                                        })),
                                                className: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2415,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2413,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300",
                                                children: "Payment Method *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2423,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: paymentForm.method,
                                                onChange: (e)=>setPaymentForm((prev)=>({
                                                            ...prev,
                                                            method: e.target.value
                                                        })),
                                                className: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Cash",
                                                        children: "Cash"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2425,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Bank Transfer",
                                                        children: "Bank Transfer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2426,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Card",
                                                        children: "Card"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2427,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Check",
                                                        children: "Check"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                        lineNumber: 2428,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2424,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2422,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300",
                                                children: "Date *"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2432,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: paymentForm.date,
                                                onChange: (e)=>setPaymentForm((prev)=>({
                                                            ...prev,
                                                            date: e.target.value
                                                        })),
                                                className: "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm dark:border-gray-600 dark:bg-gray-800"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2433,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2431,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-3 border-t border-gray-200 pt-4 dark:border-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setShowPaymentModal(false);
                                                    setSelectedBill(null);
                                                },
                                                className: "rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-600 dark:text-gray-300",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2436,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2 text-sm font-medium text-white",
                                                children: "Save Payment"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                                lineNumber: 2437,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                        lineNumber: 2435,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                                lineNumber: 2390,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                        lineNumber: 2388,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                    lineNumber: 2387,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
                lineNumber: 2386,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminDashboard/suppliers/[id]/page.jsx",
        lineNumber: 1900,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_AdminDashboard_ede0b6ac._.js.map