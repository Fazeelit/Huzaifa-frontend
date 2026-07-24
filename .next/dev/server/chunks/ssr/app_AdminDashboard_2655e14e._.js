module.exports = [
"[project]/app/AdminDashboard/components/sales/SalesFilters.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
"use client";
;
;
;
const SalesFilters = ({ search, setSearch, filter, setFilter, startDate, setStartDate, endDate, setEndDate })=>{
    const handleQuickFilter = (selectedFilter)=>{
        setFilter(selectedFilter);
        if (selectedFilter === "today") {
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, "0");
            const dd = String(today.getDate()).padStart(2, "0");
            const todayValue = `${yyyy}-${mm}-${dd}`;
            setStartDate(todayValue);
            setEndDate(todayValue);
            return;
        }
        if (selectedFilter === "all") {
            setStartDate("");
            setEndDate("");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/sales/SalesFilters.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: search,
                            onChange: (e)=>setSearch(e.target.value),
                            className: "h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100",
                            placeholder: "Search by invoice number and Printable "
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/sales/SalesFilters.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/sales/SalesFilters.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex w-full flex-wrap items-center gap-3",
                    children: [
                        [
                            "all",
                            "today"
                        ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleQuickFilter(f),
                                className: `h-10 rounded-xl px-4 text-xs font-semibold transition ${filter === f ? "bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-sm shadow-cyan-200/70" : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`,
                                children: f === "all" ? "All" : "Today"
                            }, f, false, {
                                fileName: "[project]/app/AdminDashboard/components/sales/SalesFilters.jsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-1 flex-wrap items-center gap-2 md:flex-nowrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: startDate,
                                    onChange: (e)=>setStartDate(e.target.value),
                                    className: "h-10 min-w-[150px] flex-1 rounded-xl border border-slate-200 bg-white px-2 text-sm text-slate-700 shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/sales/SalesFilters.jsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm whitespace-nowrap",
                                    children: "to"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/sales/SalesFilters.jsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: endDate,
                                    onChange: (e)=>setEndDate(e.target.value),
                                    className: "h-10 min-w-[150px] flex-1 rounded-xl border border-slate-200 bg-white px-2 text-sm text-slate-700 shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/sales/SalesFilters.jsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/sales/SalesFilters.jsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/sales/SalesFilters.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/AdminDashboard/components/sales/SalesFilters.jsx",
            lineNumber: 38,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/AdminDashboard/components/sales/SalesFilters.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SalesFilters;
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
"[project]/app/AdminDashboard/components/sales/SalesRow.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/utils/formatting.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const getReturnedSaleQuantity = (product = {})=>Math.max(Number(product?.returnedQuantity ?? product?.returnedQty ?? product?.returnQty ?? product?.quantityReturned ?? 0) || 0, 0);
const getChargedSaleQuantity = (product = {})=>Math.max(Number(product?.chargedQuantity ?? product?.quantity ?? product?.qty ?? 0) - getReturnedSaleQuantity(product), 0);
const getDeductedSaleQuantity = (product = {})=>Math.max(Number(product?.quantity ?? product?.qty ?? 0) - getReturnedSaleQuantity(product), 0);
const getInvoiceAmount = (quantity, unitPrice)=>Number((Math.max(Number(quantity) || 0, 0) * (Number(unitPrice) || 0)).toFixed(2));
const SalesRow = ({ sale, onInvoiceClick, isSelected = false, onToggleSelect })=>{
    const toNumber = (value)=>{
        if (typeof value === "number") return value;
        const normalized = String(value || "").replace(/,/g, "");
        const match = normalized.match(/-?\d+(?:\.\d+)?/);
        return match ? Number(match[0]) : 0;
    };
    const date = new Date(sale.createdAt);
    const saleId = String(sale._id || sale.invoiceNumber || "");
    const invoiceLabel = sale.invoiceNumber || String(sale._id || "").slice(-6) || "-";
    const formattedDate = Number.isNaN(date.getTime()) ? "-" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateDDMMYYYY"])(date);
    const formattedTime = Number.isNaN(date.getTime()) ? "-" : date.toLocaleTimeString();
    const saleProducts = Array.isArray(sale?.products) ? sale.products : [];
    const lineCount = saleProducts.length;
    const soldQuantity = saleProducts.reduce((sum, product)=>sum + getChargedSaleQuantity(product), 0);
    const invoiceTotal = saleProducts.reduce((sum, product)=>sum + getInvoiceAmount(getChargedSaleQuantity(product), Number(product?.salePrice ?? product?.price ?? product?.retailSalePrice ?? 0)), 0);
    const discountAmount = toNumber(sale?.discount);
    const totalAmount = Math.max(invoiceTotal - discountAmount, 0);
    const paidAmount = toNumber(sale.paidAmount ?? sale.cashReceived);
    const totalPurchaseAmount = saleProducts.reduce((sum, product)=>sum + Number(product?.purchasePrice ?? product?.cost ?? 0) * getDeductedSaleQuantity(product), 0);
    const profitAmount = Number((totalAmount - totalPurchaseAmount).toFixed(2));
    const derivedPaymentStatus = totalAmount > 0 && paidAmount >= totalAmount ? "Paid" : "Pending";
    const displayPaymentStatus = derivedPaymentStatus === "Paid" ? "Paid" : sale.paymentStatus || "Pending";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "border-b border-slate-100 text-sm transition hover:bg-sky-50/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "checkbox",
                    checked: isSelected,
                    onChange: ()=>onToggleSelect?.(saleId),
                    "aria-label": `Select sale ${invoiceLabel || "record"}`,
                    className: "h-4 w-4 cursor-pointer rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                }, void 0, false, {
                    fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "p-3 font-mono font-medium text-slate-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onInvoiceClick?.(sale),
                    className: "break-words text-left font-mono font-medium text-sky-700 underline-offset-2 hover:underline",
                    title: "View invoice details",
                    children: invoiceLabel
                }, void 0, false, {
                    fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
                lineNumber: 91,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-medium",
                        children: formattedDate
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-500",
                        children: formattedTime
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
                lineNumber: 103,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "p-3 font-medium text-slate-900 break-words",
                children: sale.customerName || "Walk-in"
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
                lineNumber: 108,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "p-3 text-slate-600",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                soldQuantity,
                                " qty"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-slate-500",
                            children: [
                                lineCount,
                                " ",
                                lineCount === 1 ? "item" : "items"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${displayPaymentStatus === "Paid" ? "bg-emerald-100 text-emerald-700 border-emerald-200" : "bg-amber-100 text-amber-700 border-amber-200"}`,
                    children: displayPaymentStatus
                }, void 0, false, {
                    fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
                lineNumber: 121,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "p-3 font-bold text-slate-900",
                children: [
                    "Rs ",
                    totalAmount.toFixed(2)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
                lineNumber: 134,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "p-3 font-bold",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: profitAmount >= 0 ? "text-emerald-600" : "text-red-600",
                    title: `Revenue: Rs ${(totalAmount - profitAmount).toFixed(2)}`,
                    children: [
                        "Rs ",
                        profitAmount.toFixed(2)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex rounded-full border border-emerald-200 bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800",
                    children: "Completed"
                }, void 0, false, {
                    fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
                    lineNumber: 150,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
                lineNumber: 149,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminDashboard/components/sales/SalesRow.jsx",
        lineNumber: 79,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SalesRow;
}),
"[project]/app/AdminDashboard/components/sales/SalesTable.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$sales$2f$SalesRow$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/sales/SalesRow.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/utils/formatting.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const getReturnedSaleQuantity = (product = {})=>Math.max(Number(product?.returnedQuantity ?? product?.returnedQty ?? product?.returnQty ?? product?.quantityReturned ?? 0) || 0, 0);
const getChargedSaleQuantity = (product = {})=>Math.max(Number(product?.chargedQuantity ?? product?.quantity ?? product?.qty ?? 0) - getReturnedSaleQuantity(product), 0);
const getDeductedSaleQuantity = (product = {})=>Math.max(Number(product?.quantity ?? product?.qty ?? 0) - getReturnedSaleQuantity(product), 0);
const SalesTable = ({ sales, search = "", filter = "all", onInvoiceClick, selectedSaleIds = [], setSelectedSaleIds })=>{
    const [allSales, setAllSales] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const ITEMS_PER_PAGE = 10;
    const hasProvidedSales = Array.isArray(sales);
    const todayStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateDDMMYYYY"])(new Date());
    // Fetch all sales once
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (hasProvidedSales) return;
        const fetchSales = async ()=>{
            try {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/sales", {
                    method: "GET"
                });
                if (res?.success) {
                    // Calculate profit for each sale
                    const enriched = res.data.map((sale)=>{
                        const profit = sale.products?.reduce((sum, p)=>{
                            const chargedQuantity = getChargedSaleQuantity(p);
                            const deductedQuantity = getDeductedSaleQuantity(p);
                            return sum + Number(p.salePrice || 0) * chargedQuantity - Number(p.purchasePrice || 0) * deductedQuantity;
                        }, 0) || 0;
                        return {
                            ...sale,
                            profit
                        };
                    });
                    setAllSales(enriched);
                }
            } catch (err) {
                console.error("Failed to fetch sales:", err);
            }
        };
        fetchSales();
    }, []);
    // Filter sales by search and date
    const filteredSales = hasProvidedSales ? sales : allSales.filter((sale)=>{
        const matchSearch = sale.invoiceNumber?.toString().toLowerCase().includes(search.toLowerCase()) || false || sale.customerName?.toLowerCase().includes(search.toLowerCase()) || false;
        const saleDateStr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateDDMMYYYY"])(sale.createdAt);
        const matchFilter = filter === "all" || filter === "today" && saleDateStr === todayStr;
        return matchSearch && matchFilter;
    });
    const totalPages = Math.max(1, Math.ceil(filteredSales.length / ITEMS_PER_PAGE));
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedSales = filteredSales.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    const paginatedSaleIds = paginatedSales.map((sale)=>String(sale._id || sale.invoiceNumber || ""));
    const hasPaginatedSales = paginatedSaleIds.length > 0;
    const allVisibleSelected = hasPaginatedSales && paginatedSaleIds.every((id)=>selectedSaleIds.includes(id));
    // Reset page only when explicit filters change (not on live refresh data updates).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCurrentPage(1);
    }, [
        search,
        filter
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof setSelectedSaleIds !== "function") return;
        const validIds = new Set(filteredSales.map((sale)=>String(sale._id || sale.invoiceNumber || "")));
        setSelectedSaleIds((prev)=>prev.filter((id)=>validIds.has(id)));
    }, [
        filteredSales,
        setSelectedSaleIds
    ]);
    // Keep current page valid if total pages shrink after filtering.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCurrentPage((prev)=>Math.min(prev, totalPages));
    }, [
        totalPages
    ]);
    const goToPrevPage = ()=>setCurrentPage((p)=>Math.max(1, p - 1));
    const goToNextPage = ()=>setCurrentPage((p)=>Math.min(totalPages, p + 1));
    const toggleSaleSelection = (saleId)=>{
        if (typeof setSelectedSaleIds !== "function") return;
        setSelectedSaleIds((prev)=>prev.includes(saleId) ? prev.filter((id)=>id !== saleId) : [
                ...prev,
                saleId
            ]);
    };
    const toggleVisibleSelections = ()=>{
        if (typeof setSelectedSaleIds !== "function") return;
        setSelectedSaleIds((prev)=>{
            if (allVisibleSelected) {
                return prev.filter((id)=>!paginatedSaleIds.includes(id));
            }
            return [
                ...new Set([
                    ...prev,
                    ...paginatedSaleIds
                ])
            ];
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto rounded-2xl border border-white/80 bg-white/95 shadow-sm backdrop-blur-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full min-w-[900px] whitespace-nowrap text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        className: "sticky top-0 z-10 bg-slate-900",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                "",
                                "Invoice",
                                "Date & Time",
                                "Customer",
                                "Items",
                                "Payment",
                                "Amount",
                                "Profit",
                                "Status"
                            ].map((h, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "h-11 px-3 text-left text-xs font-bold uppercase tracking-wide text-white",
                                    children: index === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: allVisibleSelected,
                                        onChange: toggleVisibleSelections,
                                        disabled: !hasPaginatedSales,
                                        "aria-label": "Select all sales on current page",
                                        className: "h-4 w-4 cursor-pointer rounded border-slate-300 text-sky-600 focus:ring-sky-500 disabled:cursor-not-allowed"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/sales/SalesTable.jsx",
                                        lineNumber: 148,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)) : h
                                }, `${h}-${index}`, false, {
                                    fileName: "[project]/app/AdminDashboard/components/sales/SalesTable.jsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/sales/SalesTable.jsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/sales/SalesTable.jsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: paginatedSales.length > 0 ? paginatedSales.map((sale)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$sales$2f$SalesRow$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                sale: sale,
                                onInvoiceClick: onInvoiceClick,
                                isSelected: selectedSaleIds.includes(String(sale._id || sale.invoiceNumber || "")),
                                onToggleSelect: toggleSaleSelection
                            }, sale._id, false, {
                                fileName: "[project]/app/AdminDashboard/components/sales/SalesTable.jsx",
                                lineNumber: 167,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                colSpan: "9",
                                className: "p-6 text-center text-slate-500",
                                children: "No sales found"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/sales/SalesTable.jsx",
                                lineNumber: 177,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/sales/SalesTable.jsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/sales/SalesTable.jsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/sales/SalesTable.jsx",
                lineNumber: 132,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            filteredSales.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-stretch gap-2 border-t border-slate-200 p-3 sm:flex-row sm:items-center sm:justify-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToPrevPage,
                        disabled: currentPage === 1,
                        className: "h-9 w-full rounded-lg border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto",
                        children: "Prev"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/sales/SalesTable.jsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-center text-xs font-semibold text-slate-600",
                        children: [
                            "Page ",
                            currentPage,
                            " / ",
                            totalPages
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/sales/SalesTable.jsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: goToNextPage,
                        disabled: currentPage === totalPages,
                        className: "h-9 w-full rounded-lg border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto",
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/sales/SalesTable.jsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/sales/SalesTable.jsx",
                lineNumber: 186,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminDashboard/components/sales/SalesTable.jsx",
        lineNumber: 131,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SalesTable;
}),
"[project]/app/AdminDashboard/components/sales/SalesStates.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-ssr] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-ssr] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
"use client";
;
;
;
const SalesStates = ({ stats })=>{
    const [showValues, setShowValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Default fallback
    const displayStats = stats || {
        totalRevenue: 0,
        totalProfit: 0,
        totalSales: 0,
        avgTransaction: 0,
        todayProfit: 0,
        monthlyProfit: 0
    };
    const items = [
        {
            label: "Today Profit",
            value: `Rs ${displayStats.todayProfit.toFixed(2)}`,
            textClass: "text-emerald-700",
            badgeClass: "from-emerald-500 to-green-600",
            ringClass: "ring-emerald-100",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            hideValue: true
        },
        {
            label: "Monthly Profit",
            value: `Rs ${displayStats.monthlyProfit.toFixed(2)}`,
            textClass: "text-violet-700",
            badgeClass: "from-violet-500 to-fuchsia-600",
            ringClass: "ring-violet-100",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"],
            hideValue: true
        },
        {
            label: "Total Sales",
            value: `Rs ${displayStats.totalRevenue.toFixed(2)}`,
            textClass: "text-sky-700",
            badgeClass: "from-sky-500 to-blue-600",
            ringClass: "ring-sky-100",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
            hideValue: true
        },
        {
            label: "Transactions",
            value: displayStats.totalSales,
            textClass: "text-amber-700",
            badgeClass: "from-amber-500 to-orange-600",
            ringClass: "ring-amber-100",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"]
        }
    ];
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
                            fileName: "[project]/app/AdminDashboard/components/sales/SalesStates.jsx",
                            lineNumber: 65,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/sales/SalesStates.jsx",
                            lineNumber: 65,
                            columnNumber: 58
                        }, ("TURBOPACK compile-time value", void 0)),
                        showValues ? "Hide Values" : "Show Values"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/sales/SalesStates.jsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/sales/SalesStates.jsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4 lg:grid-cols-4",
                children: items.map((item, i)=>{
                    const Icon = item.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center justify-between gap-3 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm ring-1 ${item.ringClass} backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-slate-600",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/sales/SalesStates.jsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `mt-1 break-words text-2xl font-bold tracking-tight ${item.textClass}`,
                                        children: item.hideValue && !showValues ? "Rs ****" : item.value
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/sales/SalesStates.jsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/sales/SalesStates.jsx",
                                lineNumber: 79,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.badgeClass} shadow-lg shadow-slate-200/60 sm:h-12 sm:w-12`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "h-5 w-5 text-white sm:h-6 sm:w-6"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/sales/SalesStates.jsx",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/sales/SalesStates.jsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/app/AdminDashboard/components/sales/SalesStates.jsx",
                        lineNumber: 75,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/sales/SalesStates.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminDashboard/components/sales/SalesStates.jsx",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SalesStates;
}),
"[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InvoiceDetailsModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript) <export default as Pen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-ssr] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/permissions.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const toNumber = (value)=>{
    const n = Number(value);
    return Number.isFinite(n) ? n : 0;
};
const getReturnedSaleQuantity = (item = {})=>Math.max(toNumber(item.returnedQuantity ?? item.returnedQty ?? item.returnQty ?? item.quantityReturned ?? 0), 0);
const getStatusLabel = (status)=>{
    const normalizedStatus = String(status || "SOLD").toUpperCase();
    if (normalizedStatus === "RETURNED") return "Returned";
    if (normalizedStatus === "CLAIM") return "Claim";
    return "Sold";
};
const getStatusBadgeClass = (status)=>{
    const normalizedStatus = String(status || "SOLD").toUpperCase();
    if (normalizedStatus === "RETURNED") return "bg-rose-100 text-rose-700";
    if (normalizedStatus === "CLAIM") return "bg-amber-100 text-amber-700";
    return "bg-emerald-100 text-emerald-700";
};
function InvoiceDetailsModal({ sale, onClose, onPrint, onReturn, onUpdateStatuses, onDelete, canEdit = true, canDelete = true, isReturning = false, isSavingStatuses = false, isDeleting = false }) {
    const [selectedRows, setSelectedRows] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({});
    const [isEditMode, setIsEditMode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [statusDraft, setStatusDraft] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({});
    const [returnedDraft, setReturnedDraft] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({});
    const [savedStatusMap, setSavedStatusMap] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({});
    const [savedReturnedMap, setSavedReturnedMap] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState({});
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        setSelectedRows({});
        setIsEditMode(false);
        setStatusDraft({});
        setReturnedDraft({});
        setSavedStatusMap({});
        setSavedReturnedMap({});
    }, [
        sale?._id
    ]);
    if (!sale) return null;
    const items = Array.isArray(sale.products) ? sale.products : [];
    const rows = items.map((item, index)=>{
        const qty = toNumber(item.chargedQuantity ?? item.quantity ?? item.qty ?? 0);
        const baseReturnedQty = Number.isFinite(savedReturnedMap[index]) ? savedReturnedMap[index] : getReturnedSaleQuantity(item);
        const draftReturnedQty = returnedDraft[index];
        const returnedQty = Number.isFinite(draftReturnedQty) ? Math.max(0, Math.min(draftReturnedQty, qty)) : baseReturnedQty;
        const displaySoldQty = Math.max(qty - returnedQty, 0);
        const returnableQty = displaySoldQty;
        const salePrice = toNumber(item.salePrice ?? item.price ?? item.purchasePrice ?? item.cost ?? 0);
        const total = displaySoldQty * salePrice;
        const derivedStatus = returnedQty >= qty && qty > 0 ? "RETURNED" : "SOLD";
        const baseStatus = String(savedStatusMap[index] || item.status || derivedStatus).toUpperCase();
        const status = String(statusDraft[index] || baseStatus).toUpperCase();
        return {
            sNo: index + 1,
            index,
            item: item.name || "-",
            manufacturer: item.manufacturer || item.company || item.brand || item.category || "-",
            qty,
            soldQty: displaySoldQty,
            returnedQty,
            returnableQty,
            price: salePrice,
            total,
            baseStatus,
            status
        };
    });
    const invoiceTotal = rows.reduce((sum, row)=>sum + row.total, 0);
    const discount = toNumber(sale.discount);
    const netTotal = Math.max(invoiceTotal - discount, 0);
    const paidAmount = 0;
    const returnedAmount = 0;
    const selectedIndexes = Object.entries(selectedRows).filter(([, checked])=>checked).map(([rowIndex])=>Number(rowIndex)).filter(Number.isInteger);
    const hasReturnSelection = selectedIndexes.length > 0;
    const toggleRow = (rowIndex)=>{
        setSelectedRows((prev)=>({
                ...prev,
                [rowIndex]: !prev[rowIndex]
            }));
    };
    const handleReturn = async ()=>{
        if (!hasReturnSelection || !onReturn || isReturning) return;
        await onReturn(sale, selectedIndexes);
        setSelectedRows({});
    };
    const setRowStatus = (rowIndex, nextStatus)=>{
        const normalizedStatus = String(nextStatus || "SOLD").toUpperCase();
        setStatusDraft((prev)=>({
                ...prev,
                [rowIndex]: normalizedStatus
            }));
        const row = rows.find((entry)=>entry.index === rowIndex);
        if (!row) return;
        setReturnedDraft((prev)=>({
                ...prev,
                [rowIndex]: normalizedStatus === "RETURNED" ? row.qty : 0
            }));
    };
    const setRowReturnedQty = (rowIndex, qty, nextValue)=>{
        const normalized = String(nextValue ?? "").replace(/[^\d]/g, "");
        if (normalized === "") {
            setReturnedDraft((prev)=>({
                    ...prev,
                    [rowIndex]: ""
                }));
            setStatusDraft((prev)=>({
                    ...prev,
                    [rowIndex]: "SOLD"
                }));
            return;
        }
        const nextReturnedQty = Math.max(0, Math.min(Number(normalized), qty));
        setReturnedDraft((prev)=>({
                ...prev,
                [rowIndex]: nextReturnedQty
            }));
        setStatusDraft((prev)=>({
                ...prev,
                [rowIndex]: nextReturnedQty > 0 ? "RETURNED" : "SOLD"
            }));
    };
    const handleSaveStatuses = async ()=>{
        if (!onUpdateStatuses || isSavingStatuses) return;
        const updates = rows.map((row)=>{
            const normalizedOriginalReturnedQty = getReturnedSaleQuantity(items[row.index]);
            const draftReturnedQty = returnedDraft[row.index];
            const nextReturnedQty = draftReturnedQty === "" ? 0 : Number.isFinite(draftReturnedQty) ? Math.max(0, Math.min(draftReturnedQty, row.qty)) : normalizedOriginalReturnedQty;
            const nextStatus = String(statusDraft[row.index] || (nextReturnedQty > 0 ? "RETURNED" : row.baseStatus)).toUpperCase();
            const originalStatus = String(items[row.index]?.status || (normalizedOriginalReturnedQty >= row.qty && row.qty > 0 ? "RETURNED" : "SOLD")).toUpperCase();
            if (nextStatus === originalStatus && nextReturnedQty === normalizedOriginalReturnedQty) {
                return null;
            }
            return {
                index: row.index,
                itemIndex: row.index,
                lineIndex: row.index,
                productId: items[row.index]?.productId || items[row.index]?._id || null,
                itemId: items[row.index]?.productId || items[row.index]?._id || null,
                quantity: row.qty,
                chargedQuantity: toNumber(items[row.index]?.chargedQuantity ?? items[row.index]?.quantity ?? items[row.index]?.qty ?? 0),
                status: nextStatus,
                returnedQuantity: nextReturnedQty,
                returnedQty: nextReturnedQty,
                returnQty: nextReturnedQty,
                quantityReturned: nextReturnedQty
            };
        }).filter(Boolean);
        if (!updates.length) {
            setIsEditMode(false);
            return;
        }
        const nextSavedStatusMap = {};
        const nextSavedReturnedMap = {};
        updates.forEach((update)=>{
            nextSavedStatusMap[update.index] = String(update.status || "SOLD").toUpperCase();
            nextSavedReturnedMap[update.index] = Number(update.returnedQuantity || 0);
        });
        setSavedStatusMap((prev)=>({
                ...prev,
                ...nextSavedStatusMap
            }));
        setSavedReturnedMap((prev)=>({
                ...prev,
                ...nextSavedReturnedMap
            }));
        await onUpdateStatuses(sale, updates);
        setIsEditMode(false);
        setStatusDraft({});
        setReturnedDraft({});
    };
    const handleDelete = async ()=>{
        if (!canDelete || !sale?._id || !onDelete || isDeleting) return;
        await onDelete(sale);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-3 sm:p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-4xl rounded-2xl border border-slate-200 bg-white shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-3 rounded-t-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-700 px-4 py-4 text-white sm:px-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold",
                                    children: "Invoice Details"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "break-words text-sm text-slate-200",
                                    children: sale.invoiceNumber || `INV-${String(sale._id || "").slice(-6)}`
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20",
                            "aria-label": "Close invoice details",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                lineNumber: 269,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[70vh] overflow-auto p-4 sm:p-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto rounded-xl border border-slate-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "w-full min-w-[760px] text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-slate-900 text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-2 text-center",
                                                    children: "Return"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                    lineNumber: 278,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-2 text-left",
                                                    children: "S.No"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                    lineNumber: 279,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-2 text-left",
                                                    children: "Item"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                    lineNumber: 280,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-2 text-left",
                                                    children: "Manufactur"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                    lineNumber: 281,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-2 text-right",
                                                    children: "Qty"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                    lineNumber: 282,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-2 text-right",
                                                    children: "Returned"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                    lineNumber: 283,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-2 text-left",
                                                    children: "Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                    lineNumber: 284,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-2 text-right",
                                                    children: "Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                    lineNumber: 285,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-2 py-2 text-right",
                                                    children: "Total"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                    lineNumber: 286,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                            lineNumber: 277,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                        lineNumber: 276,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: rows.length ? rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-t border-slate-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 text-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: !!selectedRows[row.index],
                                                            disabled: row.returnableQty <= 0 || isReturning || isEditMode,
                                                            onChange: ()=>toggleRow(row.index),
                                                            className: "h-4 w-4 cursor-pointer rounded border-slate-300 text-sky-600 focus:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-50"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                            lineNumber: 294,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                        lineNumber: 293,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2",
                                                        children: row.sNo
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                        lineNumber: 302,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 break-words",
                                                        children: row.item
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                        lineNumber: 303,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 break-words",
                                                        children: row.manufacturer
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                        lineNumber: 304,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 text-right",
                                                        children: row.soldQty
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                        lineNumber: 305,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 text-right",
                                                        children: isEditMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "number",
                                                            min: "0",
                                                            max: row.qty,
                                                            value: returnedDraft[row.index] ?? (row.returnedQty > 0 ? row.returnedQty : ""),
                                                            placeholder: "0",
                                                            onChange: (e)=>setRowReturnedQty(row.index, row.qty, e.target.value),
                                                            className: "h-8 w-20 rounded-md border border-slate-300 bg-white px-2 text-right text-xs font-semibold text-slate-700 placeholder:text-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                            lineNumber: 308,
                                                            columnNumber: 27
                                                        }, this) : row.returnedQty
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                        lineNumber: 306,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2",
                                                        children: isEditMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: statusDraft[row.index] || row.status,
                                                            onChange: (e)=>setRowStatus(row.index, e.target.value),
                                                            className: "h-8 rounded-md border border-slate-300 bg-white px-2 text-xs font-semibold text-slate-700",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "SOLD",
                                                                    children: "Sold"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                                    lineNumber: 333,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "RETURNED",
                                                                    children: "Returned"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                                    lineNumber: 334,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "CLAIM",
                                                                    children: "Claim"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                                    lineNumber: 335,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                            lineNumber: 328,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusBadgeClass(row.status)}`,
                                                            children: getStatusLabel(row.status)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                            lineNumber: 338,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                        lineNumber: 326,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 text-right",
                                                        children: [
                                                            "Rs ",
                                                            row.price.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                        lineNumber: 345,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-2 py-2 text-right font-medium",
                                                        children: [
                                                            "Rs ",
                                                            row.total.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                        lineNumber: 346,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, row.sNo, true, {
                                                fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                lineNumber: 292,
                                                columnNumber: 21
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                colSpan: "9",
                                                className: "px-2 py-6 text-center text-slate-500",
                                                children: "No items available for this invoice."
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                                lineNumber: 351,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                            lineNumber: 350,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                            lineNumber: 274,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 ml-auto w-full max-w-xs space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-600",
                                            children: "Invoice Total"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                            lineNumber: 362,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-slate-900",
                                            children: [
                                                "Rs ",
                                                invoiceTotal.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                            lineNumber: 363,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                    lineNumber: 361,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-600",
                                            children: "Discount"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                            lineNumber: 366,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-slate-900",
                                            children: [
                                                "Rs ",
                                                discount.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                            lineNumber: 367,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                    lineNumber: 365,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between border-t border-slate-200 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-slate-700",
                                            children: "Net Total"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                            lineNumber: 370,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base font-bold text-sky-700",
                                            children: [
                                                "Rs ",
                                                netTotal.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                            lineNumber: 371,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                    lineNumber: 369,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-600",
                                            children: "Paid Amount"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                            lineNumber: 374,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-slate-900",
                                            children: [
                                                "Rs ",
                                                paidAmount.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                            lineNumber: 375,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                    lineNumber: 373,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-600",
                                            children: "Returned Amount"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                            lineNumber: 378,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-rose-700",
                                            children: [
                                                "Rs ",
                                                returnedAmount.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                            lineNumber: 379,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                    lineNumber: 377,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                            lineNumber: 360,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 flex flex-col justify-end gap-3 border-t border-slate-200 pt-4 sm:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setIsEditMode((prev)=>{
                                            const next = !prev;
                                            if (!next) {
                                                setStatusDraft({});
                                                setReturnedDraft({});
                                            }
                                            return next;
                                        });
                                    },
                                    disabled: isSavingStatuses || isDeleting || !canEdit,
                                    className: `inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockedButtonClass"]} blocked-action`,
                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockedButtonProps"])(canEdit),
                                    title: "Edit invoice line statuses",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pen$3e$__["Pen"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                            lineNumber: 401,
                                            columnNumber: 15
                                        }, this),
                                        isEditMode ? "Cancel Edit" : "Edit"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                    lineNumber: 384,
                                    columnNumber: 13
                                }, this),
                                isEditMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleSaveStatuses,
                                    disabled: isSavingStatuses || isDeleting || !canEdit,
                                    className: `inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockedButtonClass"]} blocked-action`,
                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockedButtonProps"])(canEdit),
                                    children: isSavingStatuses ? "Saving..." : "Save Changes"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                    lineNumber: 406,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 sm:w-auto",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                    lineNumber: 417,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleReturn,
                                    disabled: !hasReturnSelection || !onReturn || isReturning || isEditMode,
                                    className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto",
                                    title: "Return selected sold items",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                            lineNumber: 431,
                                            columnNumber: 15
                                        }, this),
                                        isReturning ? "Returning..." : `Return Selected (${selectedIndexes.length})`
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                    lineNumber: 424,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onPrint?.(sale),
                                    className: "inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:brightness-105 sm:w-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                            lineNumber: 439,
                                            columnNumber: 15
                                        }, this),
                                        "Print Invoice"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                                    lineNumber: 434,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                            lineNumber: 383,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
                    lineNumber: 273,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
            lineNumber: 256,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/AdminDashboard/components/sales/DeleteSalesModal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeleteSalesModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
"use client";
;
;
function DeleteSalesModal({ isOpen, message, onClose, onConfirm, isDeleting = false }) {
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-2xl sm:p-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex items-start gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl bg-gradient-to-r from-red-100 to-pink-100 p-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                className: "h-6 w-6 text-red-600"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/sales/DeleteSalesModal.jsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/sales/DeleteSalesModal.jsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-gray-900",
                                    children: "Delete Sales Record?"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/sales/DeleteSalesModal.jsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-gray-600",
                                    children: "This action cannot be undone."
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/sales/DeleteSalesModal.jsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/sales/DeleteSalesModal.jsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/sales/DeleteSalesModal.jsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 rounded-xl border border-red-200 bg-red-50 p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-800",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/sales/DeleteSalesModal.jsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/AdminDashboard/components/sales/DeleteSalesModal.jsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col justify-end gap-3 sm:flex-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            disabled: isDeleting,
                            className: "w-full rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 px-6 py-3 font-medium text-gray-800 transition-all duration-200 hover:from-gray-300 hover:to-gray-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto",
                            children: "No"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/sales/DeleteSalesModal.jsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onConfirm,
                            disabled: isDeleting,
                            className: "w-full rounded-xl bg-gradient-to-r from-red-600 to-pink-600 px-6 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:from-red-700 hover:to-pink-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto",
                            children: "Yes"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/sales/DeleteSalesModal.jsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/sales/DeleteSalesModal.jsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/AdminDashboard/components/sales/DeleteSalesModal.jsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/AdminDashboard/components/sales/DeleteSalesModal.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
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
"[project]/app/AdminDashboard/components/pages/SalesPage.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$sales$2f$SalesFilters$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/sales/SalesFilters.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$sales$2f$SalesTable$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/sales/SalesTable.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$sales$2f$SalesStates$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/sales/SalesStates.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$sales$2f$InvoiceDetailsModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/sales/InvoiceDetailsModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$sales$2f$DeleteSalesModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/sales/DeleteSalesModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$usePermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/usePermissions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/permissions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-ssr] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
const roundReceiptToWhole = (value)=>{
    const amount = Number(value || 0);
    if (!Number.isFinite(amount)) return 0;
    const sign = amount < 0 ? -1 : 1;
    const [wholePartRaw, decimalPartRaw = ""] = Math.abs(amount).toString().split(".");
    if (!decimalPartRaw) return sign * Number(wholePartRaw || 0);
    const digits = decimalPartRaw.split("").map((digit)=>Number(digit));
    let carry = 0;
    for(let index = digits.length - 1; index >= 0; index -= 1){
        const current = digits[index] + carry;
        carry = current > 5 ? 1 : 0;
    }
    return sign * (Number(wholePartRaw || 0) + carry);
};
const formatRoundedReceiptAmount = (value)=>roundReceiptToWhole(value).toLocaleString();
const URDU_RECEIPT_FONT_STACK = `"Urdu Noori Nastaliq", "Noori Nastaliq", "Jameel Noori Nastaleeq", "Noto Nastaliq Urdu", serif`;
const formatReceiptDate = (value = new Date())=>{
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
const toTitleCase = (value = "")=>String(value).toLowerCase().replace(/\b\w/g, (char)=>char.toUpperCase());
const inferDiscountPercentageLabel = (subtotal, discount)=>{
    const safeSubtotal = Number(subtotal || 0);
    const safeDiscount = Number(discount || 0);
    if (safeSubtotal <= 0 || safeDiscount <= 0) return "0";
    for(let percentage = 0; percentage <= 100; percentage += 1){
        if (Math.round(safeSubtotal * percentage / 100) === Math.round(safeDiscount)) {
            return String(percentage);
        }
    }
    for(let percentage = 0; percentage <= 100; percentage += 0.01){
        const roundedPercentage = Number(percentage.toFixed(2));
        if (Math.round(safeSubtotal * roundedPercentage / 100) === Math.round(safeDiscount)) {
            return roundedPercentage.toFixed(2);
        }
    }
    const calculated = safeDiscount / safeSubtotal * 100;
    return Number.isInteger(calculated) ? calculated.toFixed(0) : calculated.toFixed(2);
};
const getChargedSaleQuantity = (product = {})=>{
    const baseQuantity = Number(product?.chargedQuantity ?? product?.quantity ?? product?.qty ?? 0);
    const returnedQuantity = Math.max(Number(product?.returnedQuantity ?? product?.returnedQty ?? product?.returnQty ?? product?.quantityReturned ?? 0) || 0, 0);
    return Math.max(baseQuantity - returnedQuantity, 0);
};
const getReturnedSaleQuantity = (product = {})=>Math.max(Number(product?.returnedQuantity ?? product?.returnedQty ?? product?.returnQty ?? product?.quantityReturned ?? 0) || 0, 0);
const getInvoiceAmount = (quantity, salePrice)=>Number((Math.max(Number(quantity) || 0, 0) * (Number(salePrice) || 0)).toFixed(2));
const getSaleLineUnitPrice = (product = {})=>Number(product?.salePrice ?? product?.price ?? product?.retailSalePrice ?? 0) || 0;
const calculateCurrentSaleInvoiceTotal = (sale)=>Number(((Array.isArray(sale?.products) ? sale.products : []).reduce((sum, product)=>sum + getInvoiceAmount(getChargedSaleQuantity(product), getSaleLineUnitPrice(product)), 0) || 0).toFixed(2));
const calculateCurrentSaleNetTotal = (sale)=>Number(Math.max(calculateCurrentSaleInvoiceTotal(sale) - (Number(sale?.discount) || 0), 0).toFixed(2));
const derivePaymentStatus = (paidAmount, totalAmount)=>{
    const paid = Number(paidAmount) || 0;
    const total = Number(totalAmount) || 0;
    if (paid <= 0) return "Pending";
    if (paid >= total) return "Paid";
    return "Partial";
};
const deriveBillStatus = (paidAmount, totalAmount)=>{
    const paid = Number(paidAmount) || 0;
    const total = Number(totalAmount) || 0;
    if (paid <= 0) return "pending";
    if (paid >= total) return "paid";
    return "partial";
};
const toNumber = (value)=>{
    if (typeof value === "number") return value;
    const normalized = String(value || "").replace(/,/g, "");
    const match = normalized.match(/-?\d+(?:\.\d+)?/);
    return match ? Number(match[0]) : 0;
};
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
const getCustomersArray = (response)=>{
    if (Array.isArray(response?.customers)) return response.customers;
    if (Array.isArray(response?.data?.customers)) return response.data.customers;
    if (Array.isArray(response?.data)) return response.data;
    return [];
};
const getProductsArray = (response)=>{
    if (Array.isArray(response?.products)) return response.products;
    if (Array.isArray(response?.data?.products)) return response.data.products;
    if (Array.isArray(response?.data)) return response.data;
    return [];
};
const normalizeProductKey = (value)=>String(value || "").trim().toLowerCase();
const normalizeInvoiceKeys = (...values)=>{
    const keys = new Set();
    values.map((value)=>String(value || "").trim()).filter(Boolean).forEach((value)=>{
        const normalized = value.toLowerCase();
        keys.add(normalized);
        if (normalized.startsWith("bill-")) {
            keys.add(normalized.slice(5));
        }
    });
    return Array.from(keys);
};
const buildCustomerBillStatusMap = (customers)=>{
    const statusMap = new Map();
    customers.forEach((customer)=>{
        const bills = Array.isArray(customer?.bills) ? customer.bills : [];
        bills.forEach((bill)=>{
            const amount = toNumber(bill?.amount);
            const paidAmount = toNumber(bill?.paidAmount);
            const remainingAmount = Math.max(amount - paidAmount, 0);
            const billPaymentStatus = remainingAmount <= 0 ? "Paid" : paidAmount > 0 ? "Partial" : "Pending";
            normalizeInvoiceKeys(bill?.id, bill?.reference, bill?.billId).forEach((key)=>{
                statusMap.set(key, {
                    paymentStatus: billPaymentStatus,
                    paidAmount,
                    remainingAmount
                });
            });
        });
    });
    return statusMap;
};
const SalesPage = ()=>{
    const { crud } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$usePermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePermissions"])();
    const { canEdit, canDelete } = crud("SALE");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [sales, setSales] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSaleIds, setSelectedSaleIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSale, setSelectedSale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleteModalOpen, setDeleteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteTargetSaleIds, setDeleteTargetSaleIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isReturningItems, setIsReturningItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSavingStatuses, setIsSavingStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDeletingSale, setIsDeletingSale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        totalRevenue: 0,
        totalSales: 0,
        todayProfit: 0,
        monthlyProfit: 0,
        totalProfit: 0,
        avgTransaction: 0
    });
    const calculateSaleProfit = (sale)=>{
        const totalPurchaseAmount = (Array.isArray(sale?.products) ? sale.products : []).reduce((sum, product)=>{
            const quantity = Math.max(Number(product?.quantity || product?.qty || 0) - Math.max(Number(product?.returnedQuantity ?? product?.returnedQty ?? product?.returnQty ?? product?.quantityReturned ?? 0) || 0, 0), 0);
            return sum + Number(product?.purchasePrice || 0) * quantity;
        }, 0);
        return Number((calculateCurrentSaleNetTotal(sale) - totalPurchaseAmount).toFixed(2));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchSales();
    }, [
        search,
        filter,
        startDate,
        endDate
    ]);
    const fetchSales = async ({ silent = false } = {})=>{
        try {
            const [salesRes, customersRes] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/sales", {
                    method: "GET",
                    suppressErrorLog: true,
                    suppressErrorToast: silent
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/customers", {
                    method: "GET",
                    suppressErrorLog: true,
                    suppressErrorToast: true
                })
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
                    monthlyProfit: 0
                });
                return;
            }
            const rawData = Array.isArray(salesRes.data) ? salesRes.data : [];
            const customerBillStatusMap = buildCustomerBillStatusMap(getCustomersArray(customersRes));
            const enrichedSales = rawData.map((sale)=>{
                const invoiceMatch = normalizeInvoiceKeys(sale?.invoiceNo, sale?.invoiceNumber, sale?._id).map((key)=>customerBillStatusMap.get(key)).find(Boolean);
                return {
                    ...sale,
                    totalAmount: calculateCurrentSaleNetTotal(sale),
                    paidAmount: invoiceMatch && invoiceMatch.paidAmount > toNumber(sale?.paidAmount) ? invoiceMatch.paidAmount : sale?.paidAmount,
                    paymentStatus: invoiceMatch?.paymentStatus || sale?.paymentStatus,
                    profit: calculateSaleProfit(sale)
                };
            });
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const currentMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
            const nextMonthStart = new Date(today.getFullYear(), today.getMonth() + 1, 1);
            const isFirstDayOfMonth = today.getDate() === 1;
            const todayProfit = enrichedSales.filter((sale)=>{
                const saleDate = parseLocalDate(sale.saleDate || sale.createdAt);
                return Boolean(saleDate && saleDate >= today);
            }).reduce((sum, sale)=>sum + sale.profit, 0);
            const currentMonthSales = enrichedSales.filter((sale)=>{
                const saleDate = parseLocalDate(sale.saleDate || sale.createdAt);
                return Boolean(saleDate && saleDate >= currentMonthStart && saleDate < nextMonthStart);
            });
            const monthlyProfit = isFirstDayOfMonth ? 0 : currentMonthSales.reduce((sum, sale)=>sum + sale.profit, 0);
            let data = enrichedSales;
            // 🔍 Search by invoice / patient / product
            if (search) {
                const q = search.toLowerCase();
                data = data.filter((s)=>s.invoiceNumber?.toLowerCase().includes(q) || s._id?.slice(-6).toLowerCase().includes(q) || s.customerName?.toLowerCase().includes(q) || s.products?.some((p)=>p.name.toLowerCase().includes(q)));
            }
            // 📅 Today filter
            if (filter === "today") {
                const today = new Date().toDateString();
                data = data.filter((s)=>new Date(s.createdAt).toDateString() === today);
            }
            // 📆 Date range filter
            if (startDate) {
                data = data.filter((s)=>new Date(s.createdAt) >= new Date(startDate));
            }
            if (endDate) {
                const end = new Date(endDate);
                end.setHours(23, 59, 59);
                data = data.filter((s)=>new Date(s.createdAt) <= end);
            }
            setSales(data);
            setSelectedSaleIds((prev)=>prev.filter((id)=>data.some((sale)=>String(sale._id || sale.invoiceNumber || "") === id)));
            const totalRevenue = isFirstDayOfMonth ? 0 : currentMonthSales.reduce((sum, sale)=>sum + Number(sale.totalAmount || 0), 0);
            const totalProfit = isFirstDayOfMonth ? 0 : currentMonthSales.reduce((sum, sale)=>sum + Number(sale.profit || 0), 0);
            setStats({
                totalRevenue,
                totalSales: data.length,
                avgTransaction: data.length ? totalRevenue / data.length : 0,
                totalProfit,
                todayProfit,
                monthlyProfit
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
                monthlyProfit: 0
            });
        }
    };
    const syncReturnedSaleToCustomerBill = async ({ sale, resolvedSale, returnedValueDelta })=>{
        const customerId = String(sale?.customerId || sale?.customer?._id || sale?.customer?.id || "").trim();
        if (!customerId || Number(returnedValueDelta || 0) <= 0) {
            return;
        }
        const customerResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/customers/${customerId}`, {
            method: "GET"
        });
        if (!customerResponse?.success || !customerResponse?.customer) {
            return;
        }
        const customer = customerResponse.customer;
        const existingBills = Array.isArray(customer?.bills) ? customer.bills : [];
        const saleBillKeys = normalizeInvoiceKeys(sale?.invoiceNo, sale?.invoiceNumber, resolvedSale?.invoiceNo, resolvedSale?.invoiceNumber, sale?._id);
        let matchedBill = false;
        const nextBills = existingBills.map((bill)=>{
            const billKeys = normalizeInvoiceKeys(bill?.id, bill?.reference, bill?.billId);
            if (!saleBillKeys.some((key)=>billKeys.includes(key))) {
                return bill;
            }
            matchedBill = true;
            const nextAmount = Math.max(Number(resolvedSale?.totalAmount || 0), 0);
            const nextPaidAmount = Math.min(toNumber(bill?.paidAmount), nextAmount);
            return {
                ...bill,
                amount: String(nextAmount),
                paidAmount: nextPaidAmount,
                status: deriveBillStatus(nextPaidAmount, nextAmount)
            };
        });
        if (!matchedBill) {
            return;
        }
        const nextTotalSpent = nextBills.reduce((sum, bill)=>sum + toNumber(bill?.amount), 0);
        const nextTotalDue = nextBills.reduce((sum, bill)=>sum + Math.max(toNumber(bill?.amount) - toNumber(bill?.paidAmount), 0), 0);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/customers/${customerId}`, {
            method: "PUT",
            data: {
                ...customer,
                bills: nextBills,
                totalSpent: nextTotalSpent,
                totalDue: nextTotalDue
            }
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const intervalId = setInterval(()=>{
            fetchSales({
                silent: true
            });
        }, 5000);
        const handleFocus = ()=>fetchSales({
                silent: true
            });
        const handleVisibilityChange = ()=>{
            if (document.visibilityState === "visible") {
                fetchSales({
                    silent: true
                });
            }
        };
        window.addEventListener("focus", handleFocus);
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return ()=>{
            clearInterval(intervalId);
            window.removeEventListener("focus", handleFocus);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [
        search,
        filter,
        startDate,
        endDate
    ]);
    const openPrintWindow = (printSales, title)=>{
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
            padding: 3px 3px;
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
            color: #000;
            line-height: 1;
          }
          .items-table td.item-name .item-subtext {
            display: block;
            margin-top: 1px;
            line-height: 1;
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
        ${printSales.map((s, saleIndex)=>{
            const invoiceNo = s.invoiceNumber || `INV-${String(s._id || "").slice(-6)}`;
            const products = Array.isArray(s.products) ? s.products : [];
            const soldProducts = products.map((p)=>{
                const qty = getChargedSaleQuantity(p);
                const soldQty = qty;
                return {
                    ...p,
                    soldQty
                };
            }).filter((p)=>p.soldQty > 0);
            const subtotal = Number(s.subtotal) || soldProducts.reduce((sum, p)=>sum + Number(p.salePrice || p.price || 0) * Number(p.soldQty || 0), 0);
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
                        ${soldProducts.map((item, idx)=>{
                const qty = Number(item.chargedDisplayQty ?? item.soldQty ?? 0);
                const freeQty = Math.max(Math.floor(Number(item.freeQty) || 0), 0);
                const price = Number(item.salePrice || item.price || 0);
                const lineTotal = price * qty;
                return `
                              <tr class="product-row" key="${item._id || item.id || idx}">
                                <td class="item-name">${toTitleCase(item.name || "-")}${freeQty > 0 ? `<div class="item-subtext">Free: ${freeQty}</div>` : ""}</td>
                                <td>${qty}</td>
                                <td> ${price.toLocaleString()}</td>
                                <td> ${lineTotal.toLocaleString()}</td>
                              </tr>
                            `;
            }).join("")}
                        <tr>
                          <td colspan="3" class="summary-label">Subtotal:</td>
                          <td class="summary-value"> ${formatRoundedReceiptAmount(subtotal)}</td>
                        </tr>
                        ${discount > 0 ? `
                            <tr>
                              <td colspan="3" class="summary-label">Discount ( ${discountPercentageLabel}%):</td>
                              <td class="summary-value">- ${Number(discount || 0).toLocaleString()}</td>
                            </tr>
                          ` : ""}
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
        }).join("")}
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
    const handlePrint = ()=>{
        if (!sales.length) return;
        const title = search ? `Invoice Report: ${search}` : startDate || endDate ? `Sales Report (${startDate || "Start"} to ${endDate || "End"})` : `Sales Report (${filter === "today" ? "Today" : "All"})`;
        openPrintWindow(sales, title);
    };
    const handlePrintSingleInvoice = (sale)=>{
        if (!sale) return;
        const invoiceNo = sale.invoiceNumber || `INV-${String(sale._id || "").slice(-6)}`;
        openPrintWindow([
            sale
        ], `Invoice ${invoiceNo}`);
    };
    const handleReturnItems = async (sale, selectedIndexes)=>{
        if (!sale?._id || !Array.isArray(selectedIndexes) || !selectedIndexes.length) return;
        try {
            setIsReturningItems(true);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/sales/returnItems/${sale._id}`, {
                method: "PUT",
                data: {
                    selectedIndexes
                }
            });
            if (res?.success && res?.data) {
                setSelectedSale(res.data);
                await fetchSales({
                    silent: true
                });
            }
        } catch (error) {
            console.error("Failed to return sale items", error);
        } finally{
            setIsReturningItems(false);
        }
    };
    const handleUpdateItemStatuses = async (sale, updates)=>{
        if (!sale?._id || !Array.isArray(updates) || !updates.length) return;
        try {
            setIsSavingStatuses(true);
            const baseProducts = Array.isArray(sale.products) ? sale.products : [];
            const updatesByIndex = new Map(updates.map((entry)=>[
                    Number(entry?.index),
                    entry
                ]).filter(([index])=>Number.isInteger(index)));
            const stockRestockByProduct = new Map();
            let returnedValueDelta = 0;
            const updatedProducts = baseProducts.map((product, index)=>{
                const update = updatesByIndex.get(index);
                if (!update) return product;
                const lineQuantity = Math.max(Number(product?.quantity ?? product?.qty ?? update?.quantity ?? update?.chargedQuantity ?? 0) || 0, 0);
                const currentReturnedQty = getReturnedSaleQuantity(product);
                const nextReturnedQty = Math.max(0, Math.min(Number(update?.returnedQuantity ?? currentReturnedQty) || 0, lineQuantity));
                const unitSalePrice = Number(product?.salePrice ?? product?.price ?? 0) || 0;
                const returnedQtyDelta = nextReturnedQty - currentReturnedQty;
                returnedValueDelta += getInvoiceAmount(returnedQtyDelta, unitSalePrice);
                if (returnedQtyDelta !== 0) {
                    const productIdCandidate = String(product?.productId?._id || product?.productId || update?.productId || update?.itemId || "").trim();
                    const productNameKey = normalizeProductKey(product?.name);
                    const stockKey = productIdCandidate || productNameKey || `line-${index}`;
                    const existingAdjustment = stockRestockByProduct.get(stockKey) || {
                        productIdCandidate,
                        productNameKey,
                        delta: 0
                    };
                    existingAdjustment.delta += returnedQtyDelta;
                    stockRestockByProduct.set(stockKey, existingAdjustment);
                }
                return {
                    ...product,
                    status: String(update?.status || (nextReturnedQty > 0 ? "RETURNED" : "SOLD")).toUpperCase(),
                    returnedQuantity: nextReturnedQty
                };
            });
            const currentReturnedValue = baseProducts.reduce((sum, product)=>sum + getInvoiceAmount(getReturnedSaleQuantity(product), Number(product?.salePrice ?? product?.price ?? 0) || 0), 0);
            const nextReturnedValue = updatedProducts.reduce((sum, product)=>sum + getInvoiceAmount(getReturnedSaleQuantity(product), Number(product?.salePrice ?? product?.price ?? 0) || 0), 0);
            const originalSubtotal = Number((Number(sale?.subtotal) || Number(sale?.totalAmount) || 0) + currentReturnedValue);
            const originalTotalAmount = Number((Number(sale?.totalAmount) || 0) + currentReturnedValue);
            const subtotal = Number(Math.max(originalSubtotal - nextReturnedValue, 0).toFixed(2));
            const totalAmount = Number(Math.max(originalTotalAmount - nextReturnedValue, 0).toFixed(2));
            const paidAmount = Number(Math.max((Number(sale?.paidAmount) || 0) - returnedValueDelta, 0).toFixed(2));
            const returnedAmount = Number(Math.max(nextReturnedValue, 0).toFixed(2));
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
                paymentStatus
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
                paymentStatus
            };
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/sales/updateSale/${sale._id}`, {
                method: "PUT",
                data: requestBody
            });
            if (res?.success) {
                const resolvedSale = res?.data || res?.sale || optimisticSale;
                if (stockRestockByProduct.size > 0) {
                    const productsResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/products", {
                        method: "GET"
                    });
                    const allProducts = getProductsArray(productsResponse);
                    const productsById = new Map(allProducts.map((product)=>[
                            String(product?._id || "").trim(),
                            product
                        ]).filter(([id])=>id));
                    const productsByName = new Map();
                    allProducts.forEach((product)=>{
                        const key = normalizeProductKey(product?.name);
                        if (key && !productsByName.has(key)) {
                            productsByName.set(key, product);
                        }
                    });
                    await Promise.all(Array.from(stockRestockByProduct.values()).map(async ({ productIdCandidate, productNameKey, delta })=>{
                        const matchedProduct = productsById.get(productIdCandidate) || productsByName.get(productNameKey);
                        if (!matchedProduct?._id || !delta) {
                            return;
                        }
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/products/updateProduct/${matchedProduct._id}`, {
                            method: "PUT",
                            data: {
                                ...matchedProduct,
                                stock: Math.max(Number(matchedProduct?.stock ?? 0) + Number(delta || 0), 0)
                            }
                        });
                    }));
                }
                await syncReturnedSaleToCustomerBill({
                    sale,
                    resolvedSale,
                    returnedValueDelta
                });
                setSelectedSale(resolvedSale);
                setSales((prev)=>prev.map((entry)=>String(entry?._id || "") === String(sale?._id || "") ? {
                            ...entry,
                            ...resolvedSale,
                            products: Array.isArray(resolvedSale?.products) ? resolvedSale.products : optimisticSale.products
                        } : entry));
                await fetchSales({
                    silent: true
                });
            }
        } catch (error) {
            console.error("Failed to update item statuses", error);
        } finally{
            setIsSavingStatuses(false);
        }
    };
    const handleDeleteSale = async (sale)=>{
        if (!canDelete || !sale?._id) return;
        if (!sale?._id) return;
        setDeleteTargetSaleIds([
            String(sale._id)
        ]);
        setDeleteModalOpen(true);
    };
    const confirmDeleteSales = async ()=>{
        if (!canDelete || !deleteTargetSaleIds.length) return;
        try {
            setIsDeletingSale(true);
            const deleteResults = await Promise.allSettled(deleteTargetSaleIds.map((saleId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/sales/deleteSale/${saleId}`, {
                    method: "DELETE"
                })));
            const deletedIds = deleteResults.map((result, index)=>{
                if (result.status !== "fulfilled" || !result.value?.success) {
                    return null;
                }
                return deleteTargetSaleIds[index];
            }).filter(Boolean);
            const hasFailure = deletedIds.length !== deleteTargetSaleIds.length;
            setSelectedSaleIds((prev)=>prev.filter((id)=>!deletedIds.includes(id)));
            setSelectedSale((current)=>current && deletedIds.includes(String(current._id || current.invoiceNumber || "")) ? null : current);
            await fetchSales({
                silent: true
            });
            if (hasFailure) {
                alert("Some selected sales could not be deleted.");
            }
        } catch (error) {
            console.error("Failed to delete sale", error);
        } finally{
            setIsDeletingSale(false);
            setDeleteModalOpen(false);
            setDeleteTargetSaleIds([]);
        }
    };
    const handleDeleteSelectedSales = ()=>{
        if (!selectedSaleIds.length) return;
        setDeleteTargetSaleIds([
            ...selectedSaleIds
        ]);
        setDeleteModalOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "space-y-6 rounded-3xl border border-slate-200/70 bg-gradient-to-br from-cyan-50 via-white to-sky-100 p-4 shadow-sm sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-sm backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl",
                        children: "Sales History"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/pages/SalesPage.jsx",
                        lineNumber: 1153,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePrint,
                        disabled: !sales.length,
                        className: `inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold text-white transition sm:w-auto ${sales.length ? "bg-gradient-to-r from-sky-600 to-cyan-600 shadow-sm shadow-cyan-200/70 hover:from-sky-700 hover:to-cyan-700" : "bg-gray-400"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/pages/SalesPage.jsx",
                                lineNumber: 1164,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Print"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/pages/SalesPage.jsx",
                        lineNumber: 1155,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/pages/SalesPage.jsx",
                lineNumber: 1152,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$sales$2f$SalesStates$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                stats: stats
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/SalesPage.jsx",
                lineNumber: 1168,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$sales$2f$SalesFilters$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                search: search,
                setSearch: setSearch,
                filter: filter,
                setFilter: setFilter,
                startDate: startDate,
                setStartDate: setStartDate,
                endDate: endDate,
                setEndDate: setEndDate
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/SalesPage.jsx",
                lineNumber: 1169,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: selectedSaleIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleDeleteSelectedSales,
                    disabled: isDeletingSale || !canDelete,
                    className: `inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border px-4 text-sm font-semibold text-white transition focus:outline-none focus-visible:bg-white focus-visible:text-red-600 focus-visible:border-red-600 sm:w-auto ${isDeletingSale ? "cursor-not-allowed border-red-300 bg-red-300" : "border-transparent bg-gradient-to-r from-red-600 to-rose-600 shadow-sm shadow-red-200/70 hover:from-red-700 hover:to-rose-700"} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockedButtonClass"]} blocked-action`,
                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockedButtonProps"])(canDelete),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/pages/SalesPage.jsx",
                            lineNumber: 1191,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        "Delete Selected (",
                        selectedSaleIds.length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/pages/SalesPage.jsx",
                    lineNumber: 1181,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/SalesPage.jsx",
                lineNumber: 1179,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$sales$2f$SalesTable$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                sales: sales,
                onInvoiceClick: setSelectedSale,
                selectedSaleIds: selectedSaleIds,
                setSelectedSaleIds: setSelectedSaleIds
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/SalesPage.jsx",
                lineNumber: 1196,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$sales$2f$InvoiceDetailsModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                sale: selectedSale,
                onClose: ()=>setSelectedSale(null),
                onPrint: handlePrintSingleInvoice,
                onReturn: handleReturnItems,
                onUpdateStatuses: handleUpdateItemStatuses,
                onDelete: handleDeleteSale,
                canEdit: canEdit,
                canDelete: canDelete,
                isReturning: isReturningItems,
                isSavingStatuses: isSavingStatuses,
                isDeleting: isDeletingSale
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/SalesPage.jsx",
                lineNumber: 1202,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$sales$2f$DeleteSalesModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: deleteModalOpen,
                message: `Delete ${deleteTargetSaleIds.length} selected sale record${deleteTargetSaleIds.length > 1 ? "s" : ""}? This will reverse stock for non-returned items.`,
                onClose: ()=>{
                    if (isDeletingSale) return;
                    setDeleteModalOpen(false);
                    setDeleteTargetSaleIds([]);
                },
                onConfirm: confirmDeleteSales,
                isDeleting: isDeletingSale
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/SalesPage.jsx",
                lineNumber: 1215,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminDashboard/components/pages/SalesPage.jsx",
        lineNumber: 1151,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SalesPage;
}),
"[project]/app/AdminDashboard/sales/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/pos/page.jsx
__turbopack_context__.s([
    "default",
    ()=>Sales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$pages$2f$SalesPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/pages/SalesPage.jsx [app-ssr] (ecmascript)");
"use client";
;
;
function Sales() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$pages$2f$SalesPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/AdminDashboard/sales/page.jsx",
        lineNumber: 8,
        columnNumber: 3
    }, this);
}
}),
];

//# sourceMappingURL=app_AdminDashboard_2655e14e._.js.map