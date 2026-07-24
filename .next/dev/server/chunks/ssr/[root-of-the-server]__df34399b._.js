module.exports = [
"[project]/app/AdminDashboard/components/products/ProductCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client"; // required for client-side state
;
;
function ProductCard({ title, count, color, Icon, compactValue = false }) {
    const tone = {
        blue: {
            badge: "from-sky-500 to-blue-600",
            ring: "ring-sky-100",
            count: "text-sky-700"
        },
        pink: {
            badge: "from-fuchsia-500 to-pink-600",
            ring: "ring-pink-100",
            count: "text-pink-700"
        },
        amber: {
            badge: "from-amber-500 to-orange-600",
            ring: "ring-amber-100",
            count: "text-amber-700"
        },
        red: {
            badge: "from-rose-500 to-red-600",
            ring: "ring-red-100",
            count: "text-red-700"
        },
        emerald: {
            badge: "from-emerald-500 to-green-600",
            ring: "ring-emerald-100",
            count: "text-emerald-700"
        },
        violet: {
            badge: "from-violet-500 to-indigo-600",
            ring: "ring-violet-100",
            count: "text-violet-700"
        }
    }[color] || {
        badge: "from-slate-500 to-slate-600",
        ring: "ring-slate-100",
        count: "text-slate-900"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `group rounded-2xl border border-white/80 bg-white/90 backdrop-blur-sm shadow-sm ring-1 ${tone.ring} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 md:p-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium text-slate-600",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/products/ProductCard.jsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `mt-1 ${compactValue ? "text-xl" : "text-2xl"} font-bold tracking-tight ${tone.count}`,
                                children: count
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/products/ProductCard.jsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/products/ProductCard.jsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `h-12 w-12 rounded-2xl bg-gradient-to-br ${tone.badge} shadow-lg shadow-slate-200/60 flex items-center justify-center`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "w-6 h-6 text-white"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductCard.jsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/products/ProductCard.jsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/products/ProductCard.jsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/AdminDashboard/components/products/ProductCard.jsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/AdminDashboard/components/products/ProductCard.jsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}),
"[next]/internal/font/google/noto_nastaliq_urdu_a7233569.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "noto_nastaliq_urdu_a7233569-module__OfjHSG__className",
});
}),
"[next]/internal/font/google/noto_nastaliq_urdu_a7233569.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_a7233569$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/noto_nastaliq_urdu_a7233569.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_a7233569$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Noto Nastaliq Urdu', 'Noto Nastaliq Urdu Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_a7233569$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_a7233569$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
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
"[project]/app/AdminDashboard/components/products/ProductTable.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_a7233569$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/noto_nastaliq_urdu_a7233569.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript) <export default as Pen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/permissions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/utils/formatting.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const urduNameStyle = {
    fontFamily: `"Urdu Noori Nastaliq", "Noori Nastaliq", "Jameel Noori Nastaleeq", ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_a7233569$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].style.fontFamily}, serif`
};
const ProductTable = ({ products = [], onEdit, onDelete, canEdit = true, canDelete = true })=>{
    const [sortConfig, setSortConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        key: "name",
        direction: "asc"
    });
    const today = new Date();
    const parseExpiry = (exp)=>{
        if (!exp) return null;
        const expStr = exp.toString().trim();
        const parts = expStr.split(".");
        if (parts.length !== 2) return null;
        let month = parseInt(parts[0], 10);
        let year = parts[1];
        if (Number.isNaN(month) || month < 1 || month > 12) return null;
        if (year.length === 1) {
            year = `${year}0`;
        }
        year = parseInt(year, 10);
        if (Number.isNaN(year)) return null;
        const fullYear = 2000 + year;
        return {
            month,
            year: fullYear,
            shortYear: year.toString().padStart(2, "0")
        };
    };
    const getMonthsLeft = (exp)=>{
        const parsed = parseExpiry(exp);
        if (!parsed) return null;
        const yearDiff = parsed.year - today.getFullYear();
        const monthDiff = parsed.month - (today.getMonth() + 1);
        const totalMonths = yearDiff * 12 + monthDiff;
        return totalMonths >= 0 ? totalMonths : 0;
    };
    const formatExpiry = (exp)=>{
        const parsed = parseExpiry(exp);
        if (!parsed) return "-";
        const month = parsed.month.toString().padStart(2, "0");
        return `${month}/${parsed.shortYear}`;
    };
    const mergedProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        products.forEach((p)=>{
            const key = p.name?.trim().toLowerCase();
            const stock = Number(p.stock) || 0;
            if (!key) return;
            if (map.has(key)) {
                const existing = map.get(key);
                map.set(key, {
                    ...existing,
                    stock: existing.stock + stock,
                    unit: existing.unit || p.unit || "",
                    manufacturer: existing.manufacturer || p.manufacturer,
                    code: p.code || existing.code,
                    category: existing.category || p.category,
                    bno: existing.bno || p.bno,
                    date: existing.date || existing.purchaseDate || p.date || p.purchaseDate || p.createdAt,
                    salePrice: p.salePrice || p.price || existing.salePrice || existing.price,
                    purchasePrice: p.purchasePrice || p.cost || existing.purchasePrice || existing.cost,
                    status: p.status || existing.status,
                    shelf: p.shelf || existing.shelf,
                    exp: p.exp || existing.exp
                });
            } else {
                map.set(key, {
                    ...p,
                    stock,
                    unit: p.unit || "",
                    exp: p.exp,
                    bno: p.bno,
                    date: p.date || p.purchaseDate || p.createdAt
                });
            }
        });
        return Array.from(map.values()).sort((a, b)=>a.name.localeCompare(b.name));
    }, [
        products
    ]);
    const displayedProducts = mergedProducts;
    const getSortValue = (product, key)=>{
        switch(key){
            case "name":
                return String(product.name || "").toLowerCase();
            case "bno":
                return String(product.bno || "").toLowerCase();
            case "code":
                return String(product.code || "").toLowerCase();
            case "shelf":
                return Number(product.shelf || 0);
            case "salePrice":
                return Number(product.salePrice || product.price || 0);
            case "stock":
                return Number(product.stock || 0);
            case "date":
                return new Date(product.date || product.purchaseDate || product.createdAt || 0).getTime();
            case "exp":
                return formatExpiry(product.exp);
            case "monthsLeft":
                return Number(getMonthsLeft(product.exp) ?? 9999);
            case "status":
                return String(product.status || "").toLowerCase();
            default:
                return String(product[key] || "").toLowerCase();
        }
    };
    const sortedProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const sorted = [
            ...displayedProducts
        ].sort((a, b)=>{
            const aVal = getSortValue(a, sortConfig.key);
            const bVal = getSortValue(b, sortConfig.key);
            if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
            if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
            return 0;
        });
        return sorted;
    }, [
        displayedProducts,
        sortConfig
    ]);
    const handleSort = (key)=>{
        setSortConfig((prev)=>{
            if (prev.key === key) {
                return {
                    key,
                    direction: prev.direction === "asc" ? "desc" : "asc"
                };
            }
            return {
                key,
                direction: "asc"
            };
        });
    };
    const sortIndicator = (key)=>{
        if (sortConfig.key !== key) return "";
        return sortConfig.direction === "asc" ? " ▲" : " ▼";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-white/80 bg-white/95 p-0 shadow-sm backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-h-[500px] overflow-y-auto overflow-x-auto",
            id: "expiry-table",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full text-sm caption-bottom",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        className: "sticky top-0 z-10 bg-slate-900",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    onClick: ()=>handleSort("name"),
                                    className: "h-11 cursor-pointer rounded-tl-xl px-3 text-left text-xs font-bold uppercase tracking-wide text-white",
                                    children: [
                                        "Product",
                                        sortIndicator("name")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    onClick: ()=>handleSort("bno"),
                                    className: "h-11 cursor-pointer px-3 text-left text-xs font-bold uppercase tracking-wide text-white",
                                    children: [
                                        "Batch No.",
                                        sortIndicator("bno")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    onClick: ()=>handleSort("code"),
                                    className: "h-11 cursor-pointer px-3 text-left text-xs font-bold uppercase tracking-wide text-white",
                                    children: [
                                        "Code",
                                        sortIndicator("code")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    onClick: ()=>handleSort("shelf"),
                                    className: "h-11 cursor-pointer px-3 text-left text-xs font-bold uppercase tracking-wide text-white",
                                    children: [
                                        "Shelf No.",
                                        sortIndicator("shelf")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    onClick: ()=>handleSort("salePrice"),
                                    className: "h-11 cursor-pointer px-3 text-left text-xs font-bold uppercase tracking-wide text-white",
                                    children: [
                                        "Sale Price",
                                        sortIndicator("salePrice")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    onClick: ()=>handleSort("stock"),
                                    className: "h-11 cursor-pointer px-3 text-left text-xs font-bold uppercase tracking-wide text-white",
                                    children: [
                                        "Stock",
                                        sortIndicator("stock")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    onClick: ()=>handleSort("date"),
                                    className: "h-11 cursor-pointer px-3 text-left text-xs font-bold uppercase tracking-wide text-white",
                                    children: [
                                        "Purchase Date",
                                        sortIndicator("date")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    onClick: ()=>handleSort("exp"),
                                    className: "h-11 cursor-pointer px-3 text-left text-xs font-bold uppercase tracking-wide text-white",
                                    children: [
                                        "Expiry Date",
                                        sortIndicator("exp")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    onClick: ()=>handleSort("monthsLeft"),
                                    className: "h-11 cursor-pointer px-3 text-left text-xs font-bold uppercase tracking-wide text-white",
                                    children: [
                                        "Months Left",
                                        sortIndicator("monthsLeft")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    onClick: ()=>handleSort("status"),
                                    className: "h-11 cursor-pointer px-3 text-left text-xs font-bold uppercase tracking-wide text-white",
                                    children: [
                                        "Status",
                                        sortIndicator("status")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "h-11 rounded-tr-xl px-3 text-left text-xs font-bold uppercase tracking-wide text-white",
                                    children: "Actions"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: sortedProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                colSpan: 11,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-12 text-center text-slate-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                            className: "mx-auto mb-3 h-12 w-12 text-slate-300"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                            lineNumber: 189,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-medium",
                                            children: "No products found"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                            lineNumber: 190,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                    lineNumber: 188,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                lineNumber: 187,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                            lineNumber: 186,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : sortedProducts.map((p)=>{
                            const monthsLeft = getMonthsLeft(p.exp);
                            const expiryClass = monthsLeft !== null && monthsLeft <= 1 ? "text-red-600 font-bold" : "";
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-slate-100 transition hover:bg-sky-50/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-slate-900",
                                                style: urduNameStyle,
                                                children: p.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                                lineNumber: 202,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500",
                                                children: p.manufacturer
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                                lineNumber: 203,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                        lineNumber: 201,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-3 font-mono text-slate-700",
                                        children: p.bno || "-"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                        lineNumber: 206,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-3 font-mono text-slate-700",
                                        children: p.code
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                        lineNumber: 207,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex rounded-lg border border-slate-200 bg-white px-2 py-0.5 text-xs font-medium text-slate-700",
                                            children: p.shelf
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                            lineNumber: 209,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                        lineNumber: 208,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-slate-900",
                                                children: [
                                                    "Rs.",
                                                    p.salePrice ?? p.price
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                                lineNumber: 215,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            (p.purchasePrice ?? p.cost) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500",
                                                children: [
                                                    "Purchase: Rs.",
                                                    p.purchasePrice ?? p.cost
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                                lineNumber: 216,
                                                columnNumber: 55
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                        lineNumber: 214,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-semibold ${p.stock === 0 ? "text-red-600" : p.stock <= 10 ? "text-amber-600" : "text-emerald-600"}`,
                                                children: p.stock
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                                lineNumber: 220,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-1 text-xs text-slate-500",
                                                children: p.unit
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                                lineNumber: 227,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                        lineNumber: 219,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-3 text-slate-700",
                                        children: p.date || p.purchaseDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateDDMMYYYY"])(p.date || p.purchaseDate) : "-"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                        lineNumber: 230,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: `p-3 ${expiryClass}`,
                                        children: formatExpiry(p.exp)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                        lineNumber: 233,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: `p-3 ${expiryClass}`,
                                        children: monthsLeft !== null ? monthsLeft : "-"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                        lineNumber: 234,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${p.status === "Active" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"}`,
                                            children: p.status
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                            lineNumber: 237,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                        lineNumber: 236,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "p-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>canEdit && onEdit?.(p),
                                                    className: `inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockedButtonClass"]} blocked-action`,
                                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockedButtonProps"])(canEdit),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pen$3e$__["Pen"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                                        lineNumber: 253,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                                    lineNumber: 248,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>canDelete && onDelete?.(p),
                                                    className: `inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockedButtonClass"]} blocked-action`,
                                                    ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockedButtonProps"])(canDelete),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                                        lineNumber: 260,
                                                        columnNumber: 27
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                                    lineNumber: 255,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                            lineNumber: 247,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                        lineNumber: 246,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, p.name + p.code, true, {
                                fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                                lineNumber: 200,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                        lineNumber: 184,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
                lineNumber: 167,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
            lineNumber: 166,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/AdminDashboard/components/products/ProductTable.jsx",
        lineNumber: 165,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProductTable;
}),
"[next]/internal/font/google/noto_nastaliq_urdu_4dc62355.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "noto_nastaliq_urdu_4dc62355-module__aHIpca__className",
});
}),
"[next]/internal/font/google/noto_nastaliq_urdu_4dc62355.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_4dc62355$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/noto_nastaliq_urdu_4dc62355.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_4dc62355$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Noto Nastaliq Urdu', 'Noto Nastaliq Urdu Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_4dc62355$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_4dc62355$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/app/AdminDashboard/components/products/ProductEditModel.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_4dc62355$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/noto_nastaliq_urdu_4dc62355.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const urduInputStyle = {
    fontFamily: `"Urdu Noori Nastaliq", "Noori Nastaliq", "Jameel Noori Nastaleeq", ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_4dc62355$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].style.fontFamily}, serif`
};
const fieldClass = "min-h-12 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-base leading-8 text-slate-700 shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100";
const labelClass = "mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600";
const categoryOptions = [
    "Engine Parts",
    "Brake Parts",
    "Clutch Parts",
    "Transmission Parts",
    "Suspension Parts",
    "Steering Parts",
    "Electrical Parts",
    "Battery Parts",
    "Fuel System Parts",
    "Exhaust Parts",
    "Cooling System Parts",
    "Chain & Sprockets",
    "Wheel & Tire Parts",
    "Lighting Parts",
    "Body Parts",
    "Handlebar Parts",
    "Seat Parts",
    "Filters",
    "Belts & Hoses",
    "Lubricants & Oils",
    "Safety & Riding Gear",
    "Mirrors",
    "Foot Pegs",
    "Side Stand & Center Stand",
    "Accessories"
];
const unitOptions = [
    "Piece",
    "Set",
    "Pair",
    "Pack",
    "Box",
    "Dozen",
    "Kilogram",
    "Gram",
    "Liter",
    "Milliliter",
    "Meter",
    "Centimeter",
    "Inch",
    "Foot",
    "Roll",
    "Bottle",
    "Can",
    "Bag",
    "Carton",
    "Unit"
];
const statusOptions = [
    "Active",
    "Inactive"
];
const shelfOptions = Array.from({
    length: 100
}, (_, index)=>String(index + 1));
const urduTextFields = new Set([
    "manufacturer"
]);
const leftAlignedFields = new Set([
    "manufacturer"
]);
const normalizeUrduText = (value)=>String(value || "").replace(/[\u200B-\u200D\u2060\uFEFF]/g, "").replace(/[ \t]+/g, " ");
const sanitizeCodeSegment = (value, fallback = "XXX", maxLength = 3)=>{
    const normalized = String(value || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (!normalized) return fallback;
    return normalized.slice(0, maxLength).padEnd(maxLength, "X");
};
const generateProductCode = (category, seed)=>{
    const categoryCode = sanitizeCodeSegment(category, "AUT", 3);
    return `${categoryCode}-${seed}`;
};
const extractCodeSuffix = (code)=>{
    const parts = String(code || "").split("-").map((part)=>part.trim()).filter(Boolean);
    return parts.length ? parts[parts.length - 1] : "";
};
const ProductEditModal = ({ productId, onClose })=>{
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fetching, setFetching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showError, setShowError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [codeSeed, setCodeSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        packSize: "",
        shelf: "",
        code: "",
        category: "Engine Parts",
        unit: "Piece",
        purchasePrice: "",
        retailSalePrice: "",
        wholeSalePrice: "",
        stock: "",
        manufacturer: "",
        date: new Date().toISOString().slice(0, 10),
        status: "Active",
        description: "",
        discountAllowed: false,
        maxAllowedDiscount: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!productId) return;
        const fetchProduct = async ()=>{
            try {
                setFetching(true);
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/products/getProductById/${productId}`, {
                    method: "GET"
                });
                const product = res?.data || res?.product || res;
                if (!product?._id) throw new Error("Invalid product response");
                setFormData({
                    name: product.name || "",
                    packSize: product.packSize || "",
                    shelf: String(product.shelf ?? ""),
                    code: product.code || "",
                    category: product.category || "Engine Parts",
                    unit: product.unit || "Piece",
                    purchasePrice: product.purchasePrice ?? product.cost ?? "",
                    retailSalePrice: product.retailSalePrice ?? product.salePrice ?? product.price ?? "",
                    wholeSalePrice: product.wholeSalePrice ?? "",
                    stock: product.stock ?? "",
                    manufacturer: product.manufacturer || "",
                    date: product.date ? new Date(product.date).toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10),
                    status: product.status || "Active",
                    description: product.description || "",
                    discountAllowed: Boolean(product.discountAllowed),
                    maxAllowedDiscount: product.maxAllowedDiscount ?? ""
                });
                setCodeSeed(extractCodeSuffix(product.code) || String(Date.now() % 1000).padStart(3, "0"));
            } catch (err) {
                setErrorMessage(err?.message || "Failed to fetch product.");
                setShowError(true);
            } finally{
                setFetching(false);
            }
        };
        fetchProduct();
    }, [
        productId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!codeSeed) return;
        setFormData((prev)=>({
                ...prev,
                code: generateProductCode(prev.category, codeSeed)
            }));
    }, [
        codeSeed,
        formData.category
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        const nextValue = urduTextFields.has(name) ? normalizeUrduText(value) : value;
        if (name === "category" && codeSeed) {
            setFormData((prev)=>({
                    ...prev,
                    [name]: nextValue,
                    code: generateProductCode(nextValue, codeSeed)
                }));
            return;
        }
        setFormData((prev)=>({
                ...prev,
                [name]: nextValue
            }));
    };
    const toggleDiscountAllowed = ()=>{
        setFormData((prev)=>({
                ...prev,
                discountAllowed: !prev.discountAllowed,
                maxAllowedDiscount: !prev.discountAllowed ? prev.maxAllowedDiscount : ""
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (formData.discountAllowed) {
            const maxDiscount = Number(formData.maxAllowedDiscount);
            if (!Number.isFinite(maxDiscount) || maxDiscount < 0 || maxDiscount > 100) {
                setErrorMessage("Max Allowed Discount must be between 0 and 100.");
                setShowError(true);
                return;
            }
        }
        try {
            setLoading(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/products/updateProduct/${productId}`, {
                method: "PUT",
                data: {
                    ...formData,
                    name: normalizeUrduText(formData.name).trim(),
                    manufacturer: normalizeUrduText(formData.manufacturer).trim(),
                    shelf: Number(formData.shelf || 0),
                    purchasePrice: Number(formData.purchasePrice || 0),
                    retailSalePrice: Number(formData.retailSalePrice || 0),
                    wholeSalePrice: Number(formData.wholeSalePrice || 0),
                    stock: Number(formData.stock || 0),
                    discountAllowed: Boolean(formData.discountAllowed),
                    maxAllowedDiscount: formData.discountAllowed ? Number(formData.maxAllowedDiscount || 0) : 0
                }
            });
            setShowSuccess(true);
            setTimeout(()=>{
                setShowSuccess(false);
                onClose?.();
            }, 1200);
        } catch (err) {
            setErrorMessage(err?.response?.data?.message || err?.response?.data?.error || err?.message || "Failed to update product.");
            setShowError(true);
        } finally{
            setLoading(false);
        }
    };
    if (fetching) return null;
    const fields = [
        [
            "name",
            "Product Name"
        ],
        [
            "packSize",
            "Paking Size"
        ],
        [
            "unit",
            "Unit"
        ],
        [
            "category",
            "Category"
        ],
        [
            "shelf",
            "Shelf Number"
        ],
        [
            "code",
            "Product Code"
        ],
        [
            "stock",
            "Opening Stock"
        ],
        [
            "purchasePrice",
            "Purchase Price"
        ],
        [
            "retailSalePrice",
            "Retail Sale Price"
        ],
        [
            "wholeSalePrice",
            "Whole Sale Price"
        ],
        [
            "manufacturer",
            "Manufacturer"
        ],
        [
            "date",
            "Date"
        ],
        [
            "status",
            "Status"
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "mx-auto mb-2 h-12 w-12 text-green-600"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                            lineNumber: 234,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-slate-800",
                            children: "Product master data saved successfully"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                    lineNumber: 233,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                lineNumber: 232,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-red-100 bg-white p-6 text-center shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "mx-auto mb-2 h-12 w-12 text-red-600"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                            lineNumber: 243,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600",
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                            lineNumber: 244,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowError(false),
                            className: "mt-4 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                            lineNumber: 245,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                    lineNumber: 242,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                lineNumber: 241,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9998] flex items-center justify-center bg-slate-900/50 p-3 backdrop-blur-sm sm:p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/80 bg-white shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-3 rounded-t-2xl bg-gradient-to-r from-sky-600 to-cyan-600 p-4 text-white sm:p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "min-w-0 text-xl font-bold sm:text-2xl",
                                    children: "Edit Product Master Data"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                    lineNumber: 258,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "rounded-lg p-1 transition hover:bg-white/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                        lineNumber: 260,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-y-auto p-4 sm:p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 md:grid-cols-2",
                                        children: fields.map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: labelClass,
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                        lineNumber: 269,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    key === "category" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: key,
                                                        value: formData[key],
                                                        onChange: handleChange,
                                                        className: fieldClass,
                                                        style: urduInputStyle,
                                                        required: true,
                                                        children: categoryOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: option,
                                                                children: option
                                                            }, option, false, {
                                                                fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                                lineNumber: 280,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                        lineNumber: 271,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)) : key === "unit" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: key,
                                                        value: formData[key],
                                                        onChange: handleChange,
                                                        className: fieldClass,
                                                        style: urduInputStyle,
                                                        required: true,
                                                        children: unitOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: option,
                                                                children: option
                                                            }, option, false, {
                                                                fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                                lineNumber: 295,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                        lineNumber: 286,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)) : key === "status" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: key,
                                                        value: formData[key],
                                                        onChange: handleChange,
                                                        className: fieldClass,
                                                        style: urduInputStyle,
                                                        required: true,
                                                        children: statusOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: option,
                                                                children: option
                                                            }, option, false, {
                                                                fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                                lineNumber: 310,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                        lineNumber: 301,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)) : key === "shelf" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: key,
                                                        value: formData[key],
                                                        onChange: handleChange,
                                                        className: fieldClass,
                                                        style: urduInputStyle,
                                                        required: true,
                                                        children: shelfOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: option,
                                                                children: option
                                                            }, option, false, {
                                                                fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                                lineNumber: 325,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                        lineNumber: 316,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: key,
                                                        value: formData[key],
                                                        onChange: handleChange,
                                                        readOnly: key === "code",
                                                        type: key === "date" ? "date" : "text",
                                                        lang: urduTextFields.has(key) ? "ur" : undefined,
                                                        dir: leftAlignedFields.has(key) ? "ltr" : urduTextFields.has(key) ? "rtl" : "ltr",
                                                        className: `${key === "code" ? `${fieldClass} bg-slate-100 text-slate-500` : fieldClass} ${leftAlignedFields.has(key) ? "text-left" : ""}`,
                                                        style: urduInputStyle,
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                        lineNumber: 331,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    key === "code" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-xs text-slate-500",
                                                        children: "Auto generated from category and product name."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                        lineNumber: 347,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)) : null
                                                ]
                                            }, key, true, {
                                                fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                lineNumber: 268,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                        lineNumber: 266,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 md:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: labelClass,
                                                        children: "Discount Allowed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                        lineNumber: 357,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: toggleDiscountAllowed,
                                                        className: `relative inline-flex h-7 w-12 items-center rounded-full transition ${formData.discountAllowed ? "bg-emerald-500" : "bg-slate-300"}`,
                                                        "aria-pressed": formData.discountAllowed,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${formData.discountAllowed ? "translate-x-6" : "translate-x-1"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                            lineNumber: 366,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                        lineNumber: 358,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                lineNumber: 356,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: labelClass,
                                                        children: "Max Allowed Discount (%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                        lineNumber: 374,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "maxAllowedDiscount",
                                                        type: "number",
                                                        min: 0,
                                                        max: 100,
                                                        step: "0.01",
                                                        value: formData.maxAllowedDiscount,
                                                        onChange: handleChange,
                                                        disabled: !formData.discountAllowed,
                                                        className: `${fieldClass} ${formData.discountAllowed ? "" : "cursor-not-allowed bg-slate-100 text-slate-400"}`,
                                                        style: urduInputStyle,
                                                        placeholder: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                        lineNumber: 375,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                lineNumber: 373,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3 sm:flex-row sm:justify-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: onClose,
                                                className: "h-10 w-full rounded-xl border border-slate-300 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                lineNumber: 394,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: loading,
                                                className: `h-10 w-full rounded-xl px-4 text-sm font-semibold text-white transition sm:w-auto ${loading ? "bg-slate-400" : "bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700"}`,
                                                children: loading ? "Saving..." : "Save Master Product"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                                lineNumber: 401,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                        lineNumber: 393,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                                lineNumber: 265,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                    lineNumber: 256,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/products/ProductEditModel.jsx",
                lineNumber: 255,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = ProductEditModal;
}),
"[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BulkStockGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const cellInputClass = "h-9 w-full rounded-lg border border-slate-200 bg-white px-2 text-xs text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100";
const readOnlyCellClass = "px-2 py-2 text-xs text-slate-700";
function BulkStockGrid({ rows = [], onCellChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto rounded-xl border border-slate-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full min-w-[760px] text-left text-xs sm:min-w-[900px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "bg-slate-900 text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-2 py-2 font-semibold",
                                children: "Product Name"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-2 py-2 font-semibold",
                                children: "Company"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-2 py-2 font-semibold",
                                children: "Purchase Qty"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-2 py-2 font-semibold",
                                children: "Purchase Price"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "w-24 px-2 py-2 font-semibold",
                                children: "Retail Price"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "w-24 px-2 py-2 font-semibold",
                                children: "Whole Sale Price"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-2 py-2 font-semibold",
                                children: "Discount Allowed"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-2 py-2 font-semibold",
                                children: "Max Discount (%)"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-2 py-2 font-semibold",
                                children: "UOM"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "px-2 py-2 font-semibold",
                                children: "Stock Qty"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            colSpan: 10,
                            className: "px-3 py-8 text-center text-sm text-slate-500",
                            children: "No bill items loaded yet."
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                            lineNumber: 31,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this) : rows.map((row, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "border-t border-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: readOnlyCellClass,
                                    children: row.name || "-"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                    lineNumber: 38,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: readOnlyCellClass,
                                    children: row.company || "-"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                    lineNumber: 39,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: readOnlyCellClass,
                                    children: row.purchaseQty
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                    lineNumber: 40,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: readOnlyCellClass,
                                    children: row.purchasePrice
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                    lineNumber: 41,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "w-24 px-2 py-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 0,
                                        step: "0.01",
                                        value: row.retailSalePrice ?? "",
                                        onChange: (e)=>onCellChange?.(idx, "retailSalePrice", e.target.value),
                                        className: `${cellInputClass} text-center`
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                        lineNumber: 43,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                    lineNumber: 42,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "w-24 px-2 py-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 0,
                                        step: "0.01",
                                        value: row.wholeSalePrice ?? "",
                                        onChange: (e)=>onCellChange?.(idx, "wholeSalePrice", e.target.value),
                                        className: `${cellInputClass} text-center`
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                        lineNumber: 53,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-2 py-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onCellChange?.(idx, "discountAllowed", !Boolean(row.discountAllowed)),
                                        className: `relative inline-flex h-6 w-11 items-center rounded-full transition ${row.discountAllowed ? "bg-emerald-500" : "bg-slate-300"}`,
                                        "aria-pressed": Boolean(row.discountAllowed),
                                        "aria-label": "Toggle discount allowed",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${row.discountAllowed ? "translate-x-5" : "translate-x-1"}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                            lineNumber: 72,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                        lineNumber: 63,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                    lineNumber: 62,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "px-2 py-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 0,
                                        max: 100,
                                        step: "0.01",
                                        value: row.maxAllowedDiscount ?? 0,
                                        onChange: (e)=>onCellChange?.(idx, "maxAllowedDiscount", e.target.value),
                                        className: `${cellInputClass} ${row.discountAllowed ? "" : "cursor-not-allowed bg-slate-100 text-slate-400"}`,
                                        disabled: !row.discountAllowed
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                        lineNumber: 80,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                    lineNumber: 79,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: readOnlyCellClass,
                                    children: row.uom || "-"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                    lineNumber: 91,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: readOnlyCellClass,
                                    children: row.stockQty
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                                    lineNumber: 92,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, row.rowId || `${row.name}-${idx}`, true, {
                            fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                            lineNumber: 37,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/AdminDashboard/utils/uomConverter.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convertToBaseUnit",
    ()=>convertToBaseUnit,
    "getActualStockValue",
    ()=>getActualStockValue,
    "getUnitToBaseFactor",
    ()=>getUnitToBaseFactor
]);
const normalizeUnit = (unit)=>String(unit || "").trim().toLowerCase();
const getUnitToBaseFactor = (unit, product = {})=>{
    const levels = Array.isArray(product?.uomLevels) ? product.uomLevels : [];
    const baseUnit = normalizeUnit(product?.baseUnit || product?.unit);
    const sourceUnit = normalizeUnit(unit || product?.unit || baseUnit);
    if (!sourceUnit || !baseUnit) {
        return 1;
    }
    if (sourceUnit === baseUnit) return 1;
    let factor = 1;
    let cursor = sourceUnit;
    const maxHops = levels.length + 2;
    for(let hop = 0; hop < maxHops; hop += 1){
        const level = levels.find((entry)=>normalizeUnit(entry?.unit) === cursor);
        if (!level) break;
        const contains = Number(level?.contains);
        if (!Number.isFinite(contains) || contains <= 0) break;
        factor *= contains;
        cursor = normalizeUnit(level?.child);
        if (cursor === baseUnit) return factor;
    }
    return 1;
};
const convertToBaseUnit = (qty, unit, product = {})=>{
    const quantity = Number(qty) || 0;
    return Number((quantity * getUnitToBaseFactor(unit, product)).toFixed(4));
};
const getActualStockValue = (product = {})=>{
    const directActualStock = Number(product?.actualStock);
    const directStock = Number(product?.stock) || 0;
    if (!Number.isFinite(directActualStock) || directActualStock < 0) {
        return Number(directStock.toFixed(4));
    }
    if (directStock > 0 && directActualStock === 0) {
        return Number(directStock.toFixed(4));
    }
    return Number(Math.max(directActualStock, directStock).toFixed(4));
};
}),
"[project]/app/AdminDashboard/components/products/ProductModel.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$inventory$2f$BulkStockGrid$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/inventory/BulkStockGrid.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$uomConverter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/utils/uomConverter.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const fieldClass = "h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100";
const labelClass = "mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600";
const normalizeProductKey = (value)=>String(value || "").trim().toLowerCase();
const ProductModal = ({ onClose })=>{
    const [invoiceNumber, setInvoiceNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [allProducts, setAllProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [draftPurchases, setDraftPurchases] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [gridRows, setGridRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [fetchingBill, setFetchingBill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savingAll, setSavingAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Bulk stock saved successfully.");
    const [showError, setShowError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [rowErrors, setRowErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchProducts = async ()=>{
            try {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/products", {
                    method: "GET"
                });
                setAllProducts(res?.data || []);
            } catch  {
                setAllProducts([]);
            }
        };
        fetchProducts();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchDraftPurchases = async ()=>{
            try {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/purchases", {
                    method: "GET"
                });
                const purchases = Array.isArray(res?.data) ? res.data : [];
                const drafts = purchases.filter((p)=>String(p?.purchaseStatus || "").toLowerCase() === "draft");
                setDraftPurchases(drafts);
            } catch  {
                setDraftPurchases([]);
            }
        };
        fetchDraftPurchases();
        // Refresh draft purchases every 5 seconds
        const intervalId = setInterval(fetchDraftPurchases, 5000);
        return ()=>clearInterval(intervalId);
    }, []);
    const productsByName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        for (const p of allProducts){
            const key = normalizeProductKey(p?.name);
            if (key && !map.has(key)) map.set(key, p);
        }
        return map;
    }, [
        allProducts
    ]);
    const mergeBillItems = (purchase = {})=>{
        const purchaseItems = Array.isArray(purchase?.products) ? purchase.products : [];
        const purchaseDate = purchase?.purchaseDate || purchase?.date || "";
        const isDraftPurchase = String(purchase?.purchaseStatus || "").trim().toLowerCase() === "draft";
        return purchaseItems.map((item, index)=>{
            const nameKey = normalizeProductKey(item?.name);
            const masterById = allProducts.find((p)=>String(p?._id) === String(item?.productId || ""));
            const masterByName = isDraftPurchase ? null : productsByName.get(nameKey);
            const masterProduct = masterById || masterByName || {};
            const purchaseQty = Number(item?.quantity || 0);
            const uom = masterProduct?.unit || masterProduct?.baseUnit || "unit";
            const manufacturer = item?.manufacturer || masterProduct?.manufacturer || "";
            return {
                rowId: `${item?.productId || item?.name || "row"}-${index}`,
                productId: String(item?.productId || masterProduct?._id || ""),
                name: item?.name || "",
                company: manufacturer,
                purchaseQty,
                purchasePrice: Number((item?.purchasePrice ?? item?.price) || 0),
                retailSalePrice: Number(item?.retailSalePrice ?? item?.salePrice ?? item?.price ?? (isDraftPurchase ? undefined : masterProduct?.retailSalePrice) ?? (isDraftPurchase ? undefined : masterProduct?.salePrice) ?? (isDraftPurchase ? undefined : masterProduct?.price) ?? 0),
                wholeSalePrice: Number(item?.wholeSalePrice ?? (isDraftPurchase ? undefined : masterProduct?.wholeSalePrice) ?? 0),
                discountAllowed: Boolean(masterProduct?.discountAllowed || false),
                maxAllowedDiscount: Number(masterProduct?.maxAllowedDiscount || 0),
                uom,
                unit: masterProduct?.unit || uom,
                baseUnit: masterProduct?.baseUnit || masterProduct?.unit || "unit",
                uomLevels: Array.isArray(masterProduct?.uomLevels) ? masterProduct.uomLevels : [],
                category: masterProduct?.category || "Food",
                shelf: Number(masterProduct?.shelf || 0),
                manufacturer,
                stockQty: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$uomConverter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertToBaseUnit"])(purchaseQty, uom, masterProduct),
                date: purchaseDate || masterProduct?.date || masterProduct?.createdAt || ""
            };
        });
    };
    const fetchBillProducts = async ()=>{
        if (!invoiceNumber.trim()) return;
        try {
            setFetchingBill(true);
            setRowErrors({});
            const normalizedInvoice = String(invoiceNumber).trim();
            // Fetch all purchases to check status
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/purchases", {
                method: "GET"
            });
            const allPurchases = Array.isArray(res?.data) ? res.data : [];
            // Check if invoice exists and get its current status
            const purchase = allPurchases.find((p)=>String(p?.invoiceNumber) === normalizedInvoice) || null;
            if (!purchase) {
                setGridRows([]);
                setShowError(true);
                setErrorMessage("Invoice not found.");
                return;
            }
            // Check if purchase is already completed
            if (String(purchase?.purchaseStatus || "").toLowerCase() === "completed") {
                setGridRows([]);
                setShowError(true);
                setErrorMessage("Already products are saved from this invoice. Cannot reuse.");
                return;
            }
            // Check if it's draft
            if (String(purchase?.purchaseStatus || "").toLowerCase() !== "draft") {
                setGridRows([]);
                setShowError(true);
                setErrorMessage("This purchase bill is not in Draft status.");
                return;
            }
            if (!purchase?.products?.length) {
                setGridRows([]);
                setShowError(true);
                setErrorMessage("Draft invoice not found or has no products.");
                return;
            }
            // Update draft purchases list
            const drafts = allPurchases.filter((p)=>String(p?.purchaseStatus || "").toLowerCase() === "draft");
            setDraftPurchases(drafts);
            const mergedRows = mergeBillItems(purchase);
            setGridRows(mergedRows);
        } catch  {
            setGridRows([]);
            setShowError(true);
            setErrorMessage("Failed to fetch purchase bill.");
        } finally{
            setFetchingBill(false);
        }
    };
    const onInvoiceKeyDown = async (e)=>{
        if (e.key !== "Enter") return;
        e.preventDefault();
        await fetchBillProducts();
    };
    const handleCellChange = (rowIndex, field, value)=>{
        setGridRows((prev)=>prev.map((row, idx)=>{
                if (idx !== rowIndex) return row;
                const next = {
                    ...row,
                    [field]: value
                };
                if (field === "discountAllowed" && !value) {
                    next.maxAllowedDiscount = 0;
                }
                const qty = Number(next.purchaseQty || 0);
                next.stockQty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$uomConverter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["convertToBaseUnit"])(qty, next.uom, next);
                return next;
            }));
        setRowErrors((prev)=>{
            const copy = {
                ...prev
            };
            delete copy[rowIndex];
            return copy;
        });
    };
    const validateRows = ()=>{
        const nextErrors = {};
        gridRows.forEach((row, idx)=>{
            const errs = [];
            if (!row.name) errs.push("Product name missing");
            if (!Number.isFinite(Number(row.purchaseQty)) || Number(row.purchaseQty) <= 0) {
                errs.push("Purchase Qty must be greater than 0");
            }
            if (!Number.isFinite(Number(row.purchasePrice)) || Number(row.purchasePrice) < 0) {
                errs.push("Purchase Price is invalid");
            }
            if (!Number.isFinite(Number(row.retailSalePrice)) || Number(row.retailSalePrice) < 0) {
                errs.push("Retail Sale Price is invalid");
            }
            if (!Number.isFinite(Number(row.wholeSalePrice)) || Number(row.wholeSalePrice) < 0) {
                errs.push("Whole Sale Price is invalid");
            }
            if (row.discountAllowed) {
                const maxDiscount = Number(row.maxAllowedDiscount);
                if (!Number.isFinite(maxDiscount) || maxDiscount < 0 || maxDiscount > 100) {
                    errs.push("Max Discount must be between 0 and 100");
                }
            }
            if (errs.length) nextErrors[idx] = errs.join(", ");
        });
        setRowErrors(nextErrors);
        return nextErrors;
    };
    const syncEditedPricesToProducts = async (rows)=>{
        const productsRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/products", {
            method: "GET"
        });
        const latestProducts = Array.isArray(productsRes?.data) ? productsRes.data : [];
        setAllProducts(latestProducts);
        const productsById = new Map(latestProducts.filter((product)=>product?._id).map((product)=>[
                String(product._id),
                product
            ]));
        const latestProductsByName = new Map();
        latestProducts.forEach((product)=>{
            const key = normalizeProductKey(product?.name);
            if (key && !latestProductsByName.has(key)) {
                latestProductsByName.set(key, product);
            }
        });
        await Promise.all(rows.map(async (row)=>{
            const matchedProduct = productsById.get(String(row?.productId || "")) || latestProductsByName.get(normalizeProductKey(row?.name));
            if (!matchedProduct?._id) return;
            const discountAllowed = typeof row?.discountAllowed === "boolean" ? row.discountAllowed : Boolean(matchedProduct?.discountAllowed);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/products/updateProduct/${matchedProduct._id}`, {
                method: "PUT",
                data: {
                    ...matchedProduct,
                    name: row?.name || matchedProduct?.name || "",
                    manufacturer: row?.manufacturer || row?.company || matchedProduct?.manufacturer || "",
                    category: row?.category || matchedProduct?.category || "Food",
                    shelf: Number(row?.shelf ?? matchedProduct?.shelf ?? 0),
                    purchasePrice: Number(row?.purchasePrice ?? matchedProduct?.purchasePrice ?? matchedProduct?.cost ?? 0),
                    retailSalePrice: Number(row?.retailSalePrice || 0),
                    wholeSalePrice: Number(row?.wholeSalePrice || 0),
                    stock: Number(matchedProduct?.stock ?? 0),
                    discountAllowed,
                    maxAllowedDiscount: discountAllowed ? Number(row?.maxAllowedDiscount ?? matchedProduct?.maxAllowedDiscount ?? 0) : 0,
                    unit: row?.unit || matchedProduct?.unit || row?.uom || "unit",
                    baseUnit: row?.baseUnit || matchedProduct?.baseUnit || row?.unit || row?.uom || "unit",
                    uomLevels: Array.isArray(row?.uomLevels) ? row.uomLevels : Array.isArray(matchedProduct?.uomLevels) ? matchedProduct.uomLevels : []
                }
            });
        }));
    };
    const handleSaveAll = async ()=>{
        if (!gridRows.length) {
            setShowError(true);
            setErrorMessage("Please load a purchase bill first.");
            return;
        }
        const nextErrors = validateRows();
        if (Object.keys(nextErrors).length > 0) {
            setShowError(true);
            const firstError = Object.entries(nextErrors)[0];
            setErrorMessage(firstError ? `Row ${Number(firstError[0]) + 1}: ${firstError[1]}` : "Please fix validation errors in grid rows.");
            return;
        }
        try {
            setSavingAll(true);
            const payload = {
                billNo: String(invoiceNumber).trim(),
                items: gridRows.map((row)=>({
                        name: row.name,
                        manufacturer: row.manufacturer,
                        category: row.category || "Food",
                        shelf: Number(row.shelf || 0),
                        purchaseQty: Number(row.purchaseQty || 0),
                        purchasePrice: Number(row.purchasePrice || 0),
                        retailSalePrice: Number(row.retailSalePrice || 0),
                        wholeSalePrice: Number(row.wholeSalePrice || 0),
                        discountAllowed: Boolean(row.discountAllowed),
                        maxAllowedDiscount: row.discountAllowed ? Number(row.maxAllowedDiscount || 0) : 0,
                        uom: row.uom || row.unit || "unit",
                        unit: row.unit || row.uom || "unit",
                        baseUnit: row.baseUnit || row.unit || "unit",
                        uomLevels: Array.isArray(row.uomLevels) ? row.uomLevels : [],
                        stockQty: Number(row.stockQty || 0),
                        date: row.date || ""
                    }))
            };
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/inventory/bulk-stock", {
                method: "POST",
                data: payload
            });
            // After successful save, update the purchase status to "Completed"
            if (response?.success !== false) {
                await syncEditedPricesToProducts(gridRows);
                try {
                    // Fetch all purchases to find the one we just used
                    const purchasesRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/purchases", {
                        method: "GET"
                    });
                    const allPurchases = Array.isArray(purchasesRes?.data) ? purchasesRes.data : [];
                    const purchase = allPurchases.find((p)=>String(p?.invoiceNumber) === String(invoiceNumber).trim());
                    if (purchase?._id) {
                        // Update the purchase status to Completed
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/purchases/updatePurchase/${purchase._id}`, {
                            method: "PUT",
                            data: {
                                supplier: purchase.supplier,
                                purchaseDate: purchase.purchaseDate,
                                invoiceNumber: purchase.invoiceNumber,
                                totalAmount: purchase.totalAmount,
                                taxAmount: purchase.taxAmount,
                                products: purchase.products || [],
                                purchaseStatus: "Completed"
                            }
                        });
                    }
                } catch (err) {
                    console.error("Failed to update purchase status:", err);
                // Don't fail the whole operation if status update fails
                }
                // Refresh the purchases list to exclude completed ones
                try {
                    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/purchases", {
                        method: "GET"
                    });
                    const purchases = Array.isArray(res?.data) ? res.data : [];
                    const drafts = purchases.filter((p)=>String(p?.purchaseStatus || "").toLowerCase() === "draft");
                    setDraftPurchases(drafts);
                } catch  {
                    setDraftPurchases([]);
                }
            }
            setSuccessMessage("Bulk stock saved and purchase bill marked as Completed.");
            setShowSuccess(true);
            setInvoiceNumber("");
            setGridRows([]);
            setTimeout(()=>{
                setShowSuccess(false);
                onClose?.();
            }, 1400);
        } catch (err) {
            setShowError(true);
            setErrorMessage(err?.message || "Failed to save bulk stock.");
        } finally{
            setSavingAll(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "mx-auto mb-2 h-12 w-12 text-green-600"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                            lineNumber: 425,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold text-green-700",
                            children: "Success"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                            lineNumber: 426,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600",
                            children: successMessage
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                            lineNumber: 427,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                    lineNumber: 424,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                lineNumber: 423,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-red-100 bg-white p-6 text-center shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "mx-auto mb-2 h-12 w-12 text-red-600"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                            lineNumber: 435,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-bold text-red-700",
                            children: "Error"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                            lineNumber: 436,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600",
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                            lineNumber: 437,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowError(false),
                            className: "mt-4 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                            lineNumber: 438,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                    lineNumber: 434,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                lineNumber: 433,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9998] flex items-center justify-center bg-slate-900/50 p-2 backdrop-blur-sm sm:p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[92vh] w-full max-w-[96vw] overflow-y-auto rounded-2xl border border-white/80 bg-white shadow-2xl sm:max-w-5xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-3 rounded-t-2xl bg-gradient-to-r from-sky-600 to-cyan-600 p-4 text-white sm:p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "min-w-0 text-xl font-bold sm:text-2xl",
                                    children: "Bulk Stock From Purchase Bill"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                                    lineNumber: 451,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "rounded-lg p-1 transition hover:bg-white/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                                        lineNumber: 453,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                                    lineNumber: 452,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                            lineNumber: 450,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 p-4 sm:p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: labelClass,
                                                    children: "Purchase Bill Number"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                                                    lineNumber: 460,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: invoiceNumber,
                                                    onChange: (e)=>setInvoiceNumber(e.target.value),
                                                    onKeyDown: onInvoiceKeyDown,
                                                    list: "draft-bill-suggestions",
                                                    placeholder: "Enter bill number and press Enter",
                                                    className: fieldClass
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                                                    lineNumber: 461,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                                    id: "draft-bill-suggestions",
                                                    children: draftPurchases.map((purchase)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: String(purchase?.invoiceNumber || ""),
                                                            children: purchase?.supplier ? `${purchase.invoiceNumber} - ${purchase.supplier}` : ""
                                                        }, purchase?._id || purchase?.invoiceNumber, false, {
                                                            fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                                                            lineNumber: 472,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                                                    lineNumber: 470,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                                            lineNumber: 459,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: fetchBillProducts,
                                            disabled: fetchingBill,
                                            className: `h-10 w-full rounded-xl px-4 text-sm font-semibold text-white transition md:mt-6 md:w-auto ${fetchingBill ? "bg-slate-400" : "bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700"}`,
                                            children: fetchingBill ? "Loading..." : "Load Bill"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                                            lineNumber: 481,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                                    lineNumber: 458,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                fetchingBill && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 rounded-lg border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-sky-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-4 w-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                                            lineNumber: 497,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Fetching bill items..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                                    lineNumber: 496,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$inventory$2f$BulkStockGrid$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    rows: gridRows,
                                    onCellChange: handleCellChange
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                                    lineNumber: 502,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                Object.keys(rowErrors).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700",
                                    children: Object.entries(rowErrors).map(([idx, message])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "Row ",
                                                Number(idx) + 1,
                                                ": ",
                                                message
                                            ]
                                        }, idx, true, {
                                            fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                                            lineNumber: 507,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                                    lineNumber: 505,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 sm:flex-row sm:justify-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onClose,
                                            className: "h-10 w-full rounded-xl border border-slate-300 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                                            lineNumber: 515,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleSaveAll,
                                            disabled: savingAll || fetchingBill,
                                            className: `h-10 w-full rounded-xl px-4 text-sm font-semibold text-white transition sm:w-auto ${savingAll || fetchingBill ? "bg-slate-400" : "bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700"}`,
                                            children: savingAll ? "Saving..." : "Save All"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                                            lineNumber: 522,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                                    lineNumber: 514,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                            lineNumber: 457,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                    lineNumber: 449,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/products/ProductModel.jsx",
                lineNumber: 448,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = ProductModal;
}),
"[next]/internal/font/google/noto_nastaliq_urdu_c7f93394.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "noto_nastaliq_urdu_c7f93394-module__wgitiG__className",
});
}),
"[next]/internal/font/google/noto_nastaliq_urdu_c7f93394.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_c7f93394$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/noto_nastaliq_urdu_c7f93394.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_c7f93394$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Noto Nastaliq Urdu', 'Noto Nastaliq Urdu Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_c7f93394$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_c7f93394$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_c7f93394$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/noto_nastaliq_urdu_c7f93394.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const urduInputStyle = {
    fontFamily: `"Urdu Noori Nastaliq", "Noori Nastaliq", "Jameel Noori Nastaleeq", ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_c7f93394$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].style.fontFamily}, serif`
};
const fieldClass = "min-h-10 w-full rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-sm leading-6 text-black shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100";
const labelClass = "mb-1 block text-xs font-semibold uppercase tracking-wide text-black";
const categoryOptions = [
    "Engine Parts",
    "Brake Parts",
    "Clutch Parts",
    "Transmission Parts",
    "Suspension Parts",
    "Steering Parts",
    "Electrical Parts",
    "Battery Parts",
    "Fuel System Parts",
    "Exhaust Parts",
    "Cooling System Parts",
    "Chain & Sprockets",
    "Wheel & Tire Parts",
    "Lighting Parts",
    "Body Parts",
    "Handlebar Parts",
    "Seat Parts",
    "Filters",
    "Belts & Hoses",
    "Lubricants & Oils",
    "Safety & Riding Gear",
    "Mirrors",
    "Foot Pegs",
    "Side Stand & Center Stand",
    "Accessories"
];
const unitOptions = [
    "Piece",
    "Set",
    "Pair",
    "Pack",
    "Box",
    "Dozen",
    "Kilogram",
    "Gram",
    "Liter",
    "Milliliter",
    "Meter",
    "Centimeter",
    "Inch",
    "Foot",
    "Roll",
    "Bottle",
    "Can",
    "Bag",
    "Carton",
    "Unit"
];
const statusOptions = [
    "Active",
    "Inactive"
];
const shelfOptions = Array.from({
    length: 100
}, (_, index)=>String(index + 1));
const urduTextFields = new Set([
    "manufacturer"
]);
const optionalFields = new Set([
    "bno",
    "mfg",
    "exp"
]);
const leftAlignedFields = new Set([
    "manufacturer"
]);
const isValidMMYY = (value)=>/^(0[1-9]|1[0-2])[./]\d{2}$/.test(String(value || "").trim());
const normalizeUrduText = (value)=>String(value || "").replace(/[\u200B-\u200D\u2060\uFEFF]/g, "").replace(/[ \t]+/g, " ");
const sanitizeCodeSegment = (value, fallback = "XXX", maxLength = 3)=>{
    const normalized = String(value || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (!normalized) return fallback;
    return normalized.slice(0, maxLength).padEnd(maxLength, "X");
};
const generateProductCode = (category, seed)=>{
    const categoryCode = sanitizeCodeSegment(category, "AUT", 3);
    return `${categoryCode}-${seed}`;
};
const ProductMasterModal = ({ onClose, onSaved })=>{
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showError, setShowError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [codeSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>String(Date.now() % 1000).padStart(3, "0"));
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        packSize: "",
        shelf: "",
        code: "",
        category: "Engine Parts",
        unit: "Piece",
        purchasePrice: "",
        retailSalePrice: "",
        wholeSalePrice: "",
        stock: "",
        manufacturer: "",
        bno: "",
        mfg: "",
        exp: "",
        date: new Date().toISOString().slice(0, 10),
        status: "Active",
        description: "",
        discountAllowed: false,
        maxAllowedDiscount: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setFormData((prev)=>({
                ...prev,
                code: generateProductCode(prev.category, codeSeed)
            }));
    }, [
        codeSeed,
        formData.category
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: urduTextFields.has(name) ? normalizeUrduText(value) : value
            }));
    };
    const toggleDiscountAllowed = ()=>{
        setFormData((prev)=>({
                ...prev,
                discountAllowed: !prev.discountAllowed,
                maxAllowedDiscount: !prev.discountAllowed ? prev.maxAllowedDiscount : ""
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (formData.mfg && !isValidMMYY(formData.mfg) || formData.exp && !isValidMMYY(formData.exp)) {
            setErrorMessage("MFG and EXP must be in MM.YY format (example: 05.26).");
            setShowError(true);
            return;
        }
        if (formData.discountAllowed) {
            const maxDiscount = Number(formData.maxAllowedDiscount);
            if (!Number.isFinite(maxDiscount) || maxDiscount < 0 || maxDiscount > 100) {
                setErrorMessage("Max Allowed Discount must be between 0 and 100.");
                setShowError(true);
                return;
            }
        }
        try {
            setLoading(true);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/products/createProduct", {
                method: "POST",
                data: {
                    ...formData,
                    name: normalizeUrduText(formData.name).trim(),
                    manufacturer: normalizeUrduText(formData.manufacturer).trim(),
                    shelf: Number(formData.shelf || 0),
                    purchasePrice: Number(formData.purchasePrice || 0),
                    retailSalePrice: Number(formData.retailSalePrice || 0),
                    wholeSalePrice: Number(formData.wholeSalePrice || 0),
                    stock: Number(formData.stock || 0),
                    discountAllowed: Boolean(formData.discountAllowed),
                    maxAllowedDiscount: formData.discountAllowed ? Number(formData.maxAllowedDiscount || 0) : 0
                }
            });
            setShowSuccess(true);
            setTimeout(()=>{
                setShowSuccess(false);
                onSaved?.();
                onClose?.();
            }, 1200);
        } catch (err) {
            setErrorMessage(err?.message || "Failed to create product.");
            setShowError(true);
        } finally{
            setLoading(false);
        }
    };
    const fields = [
        [
            "name",
            "Product Name"
        ],
        [
            "packSize",
            "Paking Size"
        ],
        [
            "unit",
            "Unit"
        ],
        [
            "category",
            "Category"
        ],
        [
            "shelf",
            "Shelf Number"
        ],
        [
            "code",
            "Product Code"
        ],
        [
            "stock",
            "Opening Stock"
        ],
        [
            "purchasePrice",
            "Purchase Price"
        ],
        [
            "retailSalePrice",
            "Retail Sale Price"
        ],
        [
            "wholeSalePrice",
            "Whole Sale Price"
        ],
        [
            "manufacturer",
            "Manufacturer"
        ],
        [
            "date",
            "Date"
        ],
        [
            "status",
            "Status"
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "mx-auto mb-2 h-12 w-12 text-green-600"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-semibold text-slate-800",
                            children: "Product master data saved successfully"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                    lineNumber: 179,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                lineNumber: 178,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-red-100 bg-white p-6 text-center shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "mx-auto mb-2 h-12 w-12 text-red-600"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                            lineNumber: 189,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600",
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowError(false),
                            className: "mt-4 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                            lineNumber: 191,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                    lineNumber: 188,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                lineNumber: 187,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9998] flex items-center justify-center bg-slate-900/50 p-3 backdrop-blur-sm sm:p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/80 bg-white shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-3 rounded-t-2xl bg-gradient-to-r from-sky-600 to-cyan-600 p-4 text-white sm:p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "min-w-0 text-xl font-bold sm:text-2xl",
                                    children: "Add Product Master Data"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "rounded-lg p-1 transition hover:bg-white/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-y-auto p-4 sm:p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 md:grid-cols-2",
                                        children: fields.map(([key, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: labelClass,
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                        lineNumber: 215,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    key === "category" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: key,
                                                        value: formData[key],
                                                        onChange: handleChange,
                                                        className: fieldClass,
                                                        style: urduInputStyle,
                                                        required: true,
                                                        children: categoryOptions.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: option,
                                                                children: option
                                                            }, `${option}-${index}`, false, {
                                                                fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                                lineNumber: 226,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                        lineNumber: 217,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)) : key === "unit" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: key,
                                                        value: formData[key],
                                                        onChange: handleChange,
                                                        className: fieldClass,
                                                        style: urduInputStyle,
                                                        required: true,
                                                        children: unitOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: option,
                                                                children: option
                                                            }, option, false, {
                                                                fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                                lineNumber: 241,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                        lineNumber: 232,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)) : key === "status" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: key,
                                                        value: formData[key],
                                                        onChange: handleChange,
                                                        className: fieldClass,
                                                        style: urduInputStyle,
                                                        required: true,
                                                        children: statusOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: option,
                                                                children: option
                                                            }, option, false, {
                                                                fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                                lineNumber: 256,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                        lineNumber: 247,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)) : key === "shelf" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        name: key,
                                                        value: formData[key],
                                                        onChange: handleChange,
                                                        className: fieldClass,
                                                        style: urduInputStyle,
                                                        required: true,
                                                        children: shelfOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: option,
                                                                children: option
                                                            }, option, false, {
                                                                fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                                lineNumber: 272,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                        lineNumber: 262,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: key,
                                                        value: formData[key],
                                                        onChange: handleChange,
                                                        readOnly: key === "code",
                                                        type: key === "date" ? "date" : "text",
                                                        lang: urduTextFields.has(key) ? "ur" : undefined,
                                                        dir: leftAlignedFields.has(key) ? "ltr" : urduTextFields.has(key) ? "rtl" : "ltr",
                                                        className: `${key === "code" ? `${fieldClass} bg-slate-100 text-black` : fieldClass} ${leftAlignedFields.has(key) ? "text-left" : ""}`,
                                                        style: urduInputStyle,
                                                        placeholder: key === "mfg" || key === "exp" ? "MM.YY (example: 05.26)" : undefined,
                                                        required: !optionalFields.has(key)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                        lineNumber: 278,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, key, true, {
                                                fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                lineNumber: 214,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 md:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: labelClass,
                                                        children: "Discount Allowed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                        lineNumber: 302,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: toggleDiscountAllowed,
                                                        className: `relative inline-flex h-7 w-12 items-center rounded-full transition ${formData.discountAllowed ? "bg-emerald-500" : "bg-slate-300"}`,
                                                        "aria-pressed": formData.discountAllowed,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${formData.discountAllowed ? "translate-x-6" : "translate-x-1"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                            lineNumber: 311,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                        lineNumber: 303,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                lineNumber: 301,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: labelClass,
                                                        children: "Max Allowed Discount (%)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                        lineNumber: 319,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        name: "maxAllowedDiscount",
                                                        type: "number",
                                                        min: 0,
                                                        max: 100,
                                                        step: "0.01",
                                                        value: formData.maxAllowedDiscount,
                                                        onChange: handleChange,
                                                        disabled: !formData.discountAllowed,
                                                        className: `${fieldClass} ${formData.discountAllowed ? "" : "cursor-not-allowed bg-slate-100 text-black"}`,
                                                        style: urduInputStyle,
                                                        placeholder: "0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                        lineNumber: 320,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                lineNumber: 318,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                        lineNumber: 300,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3 sm:flex-row sm:justify-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: onClose,
                                                className: "h-10 w-full rounded-xl border border-slate-300 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                lineNumber: 339,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: loading,
                                                className: `h-10 w-full rounded-xl px-4 text-sm font-semibold text-white transition sm:w-auto ${loading ? "bg-slate-400" : "bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700"}`,
                                                children: loading ? "Saving..." : "Save Master Product"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                                lineNumber: 346,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                        lineNumber: 338,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx",
                lineNumber: 201,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = ProductMasterModal;
}),
"[next]/internal/font/google/noto_nastaliq_urdu_c642d274.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "noto_nastaliq_urdu_c642d274-module__OhQWYa__className",
});
}),
"[next]/internal/font/google/noto_nastaliq_urdu_c642d274.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_c642d274$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/noto_nastaliq_urdu_c642d274.module.css [app-ssr] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_c642d274$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Noto Nastaliq Urdu', 'Noto Nastaliq Urdu Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_c642d274$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_c642d274$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/app/AdminDashboard/components/products/ProductFilter.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_c642d274$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/noto_nastaliq_urdu_c642d274.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
"use client"; // required for client-side state
;
;
;
;
const urduInputStyle = {
    fontFamily: `"Urdu Noori Nastaliq", "Noori Nastaliq", "Jameel Noori Nastaleeq", ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_c642d274$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].style.fontFamily}, serif`
};
const ProductFilter = ({ searchTerm, setSearchTerm, filter, setFilter, batchSearchTerm, setBatchSearchTerm, purchaseStartDate, setPurchaseStartDate, purchaseEndDate, setPurchaseEndDate })=>{
    const filters = [
        "All",
        "Active",
        "Low Stock",
        "Out of Stock"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl bg-gradient-to-r from-white to-slate-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-3 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductFilter.jsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search by product name, code, or category...",
                                    value: searchTerm,
                                    onChange: (e)=>setSearchTerm(e.target.value),
                                    className: "h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100",
                                    style: urduInputStyle
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductFilter.jsx",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductFilter.jsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Search by batch number...",
                            value: batchSearchTerm,
                            onChange: (e)=>setBatchSearchTerm(e.target.value),
                            className: "h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100",
                            style: urduInputStyle
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductFilter.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/products/ProductFilter.jsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-3 md:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2 md:col-span-2",
                            children: filters.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setFilter(f),
                                    className: `h-10 rounded-xl px-4 text-xs font-semibold shadow-sm transition ${filter === f ? "bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-cyan-200/70" : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"}`,
                                    children: f
                                }, f, false, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductFilter.jsx",
                                    lineNumber: 60,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductFilter.jsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: purchaseStartDate,
                                    onChange: (e)=>setPurchaseStartDate(e.target.value),
                                    className: "h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-700 shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductFilter.jsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "date",
                                    value: purchaseEndDate,
                                    onChange: (e)=>setPurchaseEndDate(e.target.value),
                                    className: "h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-700 shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/products/ProductFilter.jsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/products/ProductFilter.jsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/products/ProductFilter.jsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/AdminDashboard/components/products/ProductFilter.jsx",
            lineNumber: 32,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/AdminDashboard/components/products/ProductFilter.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProductFilter;
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
"[project]/app/AdminDashboard/components/pages/ProductsPage.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package-check.js [app-ssr] (ecmascript) <export default as PackageCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as TriangleAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-ssr] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HandCoins$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hand-coins.js [app-ssr] (ecmascript) <export default as HandCoins>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeDollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/badge-dollar-sign.js [app-ssr] (ecmascript) <export default as BadgeDollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-ssr] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$products$2f$ProductCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/products/ProductCard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$products$2f$ProductTable$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/products/ProductTable.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$products$2f$ProductEditModel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/products/ProductEditModel.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$products$2f$ProductModel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/products/ProductModel.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$products$2f$ProductMasterModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/products/ProductMasterModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$products$2f$ProductFilter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/products/ProductFilter.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$usePermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/usePermissions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/permissions.js [app-ssr] (ecmascript)");
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
;
function ProductsPage() {
    const { crud } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$usePermissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePermissions"])();
    const { canCreate, canEdit, canDelete } = crud("PRODUCT");
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [batchSearchTerm, setBatchSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [purchaseStartDate, setPurchaseStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [purchaseEndDate, setPurchaseEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bulkStockOpen, setBulkStockOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [masterProductOpen, setMasterProductOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingProductId, setEditingProductId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deleteProduct, setDeleteProduct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showError, setShowError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showFinancialTotals, setShowFinancialTotals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    /* ---------------- FETCH PRODUCTS ---------------- */ const fetchProducts = async ({ silent = false } = {})=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/products", {
                method: "GET"
            });
            const nextProducts = Array.isArray(res?.data?.data) ? res.data.data : Array.isArray(res?.data) ? res.data : [];
            setProducts(nextProducts);
        } catch (err) {
            if (!silent) {
                setErrorMessage(err?.response?.data?.message || "Failed to fetch products");
                setShowError(true);
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchProducts();
        const intervalId = setInterval(()=>{
            fetchProducts({
                silent: true
            });
        }, 5000);
        const handleFocus = ()=>fetchProducts({
                silent: true
            });
        const handleVisibilityChange = ()=>{
            if (document.visibilityState === "visible") {
                fetchProducts({
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
    }, []);
    const inventoryProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const map = new Map();
        products.forEach((product)=>{
            const key = String(product?.name || "").trim().toLowerCase();
            if (!key) {
                return;
            }
            const stock = Number(product?.stock ?? 0);
            const retailSalePrice = Number(product?.retailSalePrice ?? product?.salePrice ?? product?.price ?? 0);
            const purchasePrice = Number(product?.purchasePrice ?? product?.cost ?? 0);
            if (map.has(key)) {
                const existing = map.get(key);
                map.set(key, {
                    ...existing,
                    stock: existing.stock + stock,
                    retailSalePrice: retailSalePrice || existing.retailSalePrice || 0,
                    purchasePrice: purchasePrice || existing.purchasePrice || 0,
                    discountAllowed: typeof product?.discountAllowed === "boolean" ? product.discountAllowed : existing.discountAllowed,
                    maxAllowedDiscount: Number(product?.maxAllowedDiscount ?? 0) || Number(existing.maxAllowedDiscount ?? 0)
                });
                return;
            }
            map.set(key, {
                ...product,
                stock,
                retailSalePrice,
                purchasePrice,
                discountAllowed: Boolean(product?.discountAllowed),
                maxAllowedDiscount: Number(product?.maxAllowedDiscount ?? 0)
            });
        });
        return Array.from(map.values());
    }, [
        products
    ]);
    /* ---------------- FILTERING ---------------- */ const filteredProducts = products.filter((p)=>{
        const normalizedSearch = String(searchTerm || "").toLowerCase();
        const normalizedBatchSearch = String(batchSearchTerm || "").toLowerCase();
        const matchesSearch = String(p.name || "").toLowerCase().includes(normalizedSearch) || String(p.code || "").toLowerCase().includes(normalizedSearch) || String(p.category || "").toLowerCase().includes(normalizedSearch);
        const matchesBatch = String(p.bno || "").toLowerCase().includes(normalizedBatchSearch);
        const purchaseDate = p.date || p.purchaseDate || p.createdAt;
        const productDate = purchaseDate ? new Date(purchaseDate) : null;
        const matchesPurchaseStart = !purchaseStartDate || productDate && productDate >= new Date(`${purchaseStartDate}T00:00:00`);
        const matchesPurchaseEnd = !purchaseEndDate || productDate && productDate <= new Date(`${purchaseEndDate}T23:59:59.999`);
        const matchesFilter = filter === "All" || filter === "Active" && String(p.status || "").toLowerCase() === "active" || filter === "Low Stock" && Number(p.stock) <= 10 && Number(p.stock) > 0 || filter === "Out of Stock" && Number(p.stock) === 0;
        return matchesSearch && matchesBatch && matchesPurchaseStart && matchesPurchaseEnd && matchesFilter;
    });
    /* ---------------- EDIT ACTION ---------------- */ const openEditModal = (product)=>{
        if (!canEdit) return;
        setEditingProductId(product._id);
        setModalOpen(true);
    };
    const closeModal = ()=>{
        setModalOpen(false);
        setEditingProductId(null);
        fetchProducts(); // refresh list after update
    };
    /* ---------------- NEW PRODUCT ACTION ---------------- */ const openBulkStockModal = ()=>{
        if (!canCreate) return;
        setBulkStockOpen(true);
    };
    const closeBulkStockModal = ()=>{
        setBulkStockOpen(false);
        fetchProducts();
    };
    const openMasterProductModal = ()=>{
        if (!canCreate) return;
        setMasterProductOpen(true);
    };
    const closeMasterProductModal = ()=>{
        setMasterProductOpen(false);
        fetchProducts(); // refresh list after adding new product
    };
    const openDeleteModal = (product)=>{
        if (!canDelete || !product?._id) return;
        setDeleteProduct(product);
    };
    const closeDeleteModal = ()=>{
        setDeleteProduct(null);
    };
    const handleDeleteProduct = async ()=>{
        if (!canDelete || !deleteProduct?._id) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])(`/products/deleteProduct/${deleteProduct._id}`, {
                method: "DELETE"
            });
            closeDeleteModal();
            fetchProducts();
        } catch (err) {
            setErrorMessage(err?.response?.data?.message || "Failed to delete product");
            setShowError(true);
            closeDeleteModal();
        }
    };
    /* ---------------- STATS ---------------- */ const inStockProducts = inventoryProducts.filter((p)=>Number(p.stock) >= 1);
    const totalRetailSalesAmount = inventoryProducts.reduce((sum, product)=>{
        const retailSalePrice = Number(product.retailSalePrice ?? product.salePrice ?? product.price ?? 0);
        const stock = Number(product.stock ?? 0);
        return sum + retailSalePrice * stock;
    }, 0);
    const totalPurchaseAmount = inventoryProducts.reduce((sum, product)=>{
        const purchasePrice = Number(product.purchasePrice ?? product.cost ?? 0);
        const stock = Number(product.stock ?? 0);
        return sum + purchasePrice * stock;
    }, 0);
    const totalProfit = totalRetailSalesAmount - totalPurchaseAmount;
    const totalDiscountAmount = inventoryProducts.reduce((sum, product)=>{
        if (!product.discountAllowed) {
            return sum;
        }
        const retailSalePrice = Number(product.retailSalePrice ?? product.salePrice ?? product.price ?? 0);
        const purchasePrice = Number(product.purchasePrice ?? product.cost ?? 0);
        const stock = Number(product.stock ?? 0);
        const grossProfit = (retailSalePrice - purchasePrice) * stock;
        const discountPercent = Number(product.maxAllowedDiscount ?? 0);
        if (!Number.isFinite(discountPercent) || discountPercent <= 0) {
            return sum;
        }
        return sum + grossProfit * (discountPercent / 100);
    }, 0);
    const expectedProfit = totalProfit - totalDiscountAmount;
    const stats = [
        {
            title: "Total Products",
            count: inStockProducts.length,
            color: "blue",
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"]
        },
        {
            title: "Active Products",
            count: inStockProducts.filter((p)=>String(p.status || "").toLowerCase() === "active").length,
            color: "pink",
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PackageCheck$3e$__["PackageCheck"],
            compactValue: true
        },
        {
            title: "Low Stock",
            count: inStockProducts.filter((p)=>Number(p.stock) <= 10).length,
            color: "amber",
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__["TriangleAlert"],
            compactValue: true
        },
        {
            title: "Out of Stock",
            count: inventoryProducts.filter((p)=>Number(p.stock) === 0).length,
            color: "red",
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"],
            compactValue: true
        },
        {
            title: "All Products Purchase Amount",
            count: showFinancialTotals ? `Rs. ${totalPurchaseAmount.toFixed(2)}` : "Rs. ******",
            color: "emerald",
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hand$2d$coins$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HandCoins$3e$__["HandCoins"],
            compactValue: true
        },
        {
            title: "Total Expected Profit",
            count: showFinancialTotals ? `Rs. ${expectedProfit.toFixed(2)}` : "Rs. ******",
            color: "violet",
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$badge$2d$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BadgeDollarSign$3e$__["BadgeDollarSign"],
            compactValue: true
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-cyan-50 via-white to-sky-100 p-3 shadow-sm sm:p-4 lg:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-cyan-200/40 via-sky-200/20 to-transparent"
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                lineNumber: 305,
                columnNumber: 7
            }, this),
            showError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-red-100 bg-white p-6 text-center shadow-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__["TriangleAlert"], {
                            className: "w-12 h-12 text-red-600 mx-auto mb-2"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                            lineNumber: 310,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-bold text-red-700",
                            children: "Error"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                            lineNumber: 311,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600",
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                            lineNumber: 312,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowError(false),
                            className: "mt-4 rounded-xl bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                            lineNumber: 313,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                    lineNumber: 309,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                lineNumber: 308,
                columnNumber: 9
            }, this),
            deleteProduct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xl w-[92%] max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-bold text-slate-900 text-lg",
                            children: "Delete Product"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                            lineNumber: 327,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-slate-600",
                            children: [
                                "Are you sure want to delet ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-slate-900",
                                    children: deleteProduct.name
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                                    lineNumber: 329,
                                    columnNumber: 42
                                }, this),
                                "?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                            lineNumber: 328,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 flex items-center justify-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDeleteProduct,
                                    className: "rounded-xl bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700",
                                    children: "Yes"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                                    lineNumber: 332,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closeDeleteModal,
                                    className: "rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-100",
                                    children: "No"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                            lineNumber: 331,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                    lineNumber: 326,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                lineNumber: 325,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mb-6 flex flex-col justify-between gap-4 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-sm backdrop-blur-sm md:flex-row md:p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-1 flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg bg-gradient-to-r from-blue-100 to-emerald-100 p-1.5 dark:from-blue-900/30 dark:to-emerald-900/30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                            className: "h-4 w-4 text-blue-600 dark:text-blue-400"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                                            lineNumber: 354,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                                        lineNumber: 353,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-bold text-gray-900 dark:text-white md:text-2xl",
                                        children: "Products Management"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                                        lineNumber: 356,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-slate-600",
                                children: "Manage your product catalog"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 sm:flex-row sm:flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowFinancialTotals((prev)=>!prev),
                                className: "flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 sm:w-auto",
                                children: [
                                    showFinancialTotals ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                                        lineNumber: 369,
                                        columnNumber: 36
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                                        lineNumber: 369,
                                        columnNumber: 69
                                    }, this),
                                    showFinancialTotals ? "Hide" : "Show"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                                lineNumber: 364,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: openMasterProductModal,
                                className: `h-11 w-full rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 px-5 text-sm font-semibold text-white shadow-md shadow-cyan-200/70 transition hover:-translate-y-0.5 hover:from-sky-700 hover:to-cyan-700 sm:w-auto ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockedButtonClass"]} blocked-action`,
                                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockedButtonProps"])(canCreate),
                                children: "+ Add Product Master"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                                lineNumber: 372,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: openBulkStockModal,
                                className: `h-11 w-full rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-5 text-sm font-semibold text-white shadow-md shadow-emerald-200/70 transition hover:-translate-y-0.5 hover:from-emerald-700 hover:to-green-700 sm:w-auto ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockedButtonClass"]} blocked-action`,
                                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["blockedButtonProps"])(canCreate),
                                children: "+ Bulk Stock From Bill"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                        lineNumber: 363,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                lineNumber: 350,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
                children: stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$products$2f$ProductCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        ...stat
                    }, i, false, {
                        fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                        lineNumber: 392,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                lineNumber: 390,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-white/80 bg-white/90 p-2 shadow-sm backdrop-blur-sm md:p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$products$2f$ProductFilter$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    searchTerm: searchTerm,
                    setSearchTerm: setSearchTerm,
                    batchSearchTerm: batchSearchTerm,
                    setBatchSearchTerm: setBatchSearchTerm,
                    purchaseStartDate: purchaseStartDate,
                    setPurchaseStartDate: setPurchaseStartDate,
                    purchaseEndDate: purchaseEndDate,
                    setPurchaseEndDate: setPurchaseEndDate,
                    filter: filter,
                    setFilter: setFilter
                }, void 0, false, {
                    fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                    lineNumber: 397,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                lineNumber: 396,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 rounded-2xl border border-white/80 bg-white/90 p-2 shadow-sm backdrop-blur-sm md:p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$products$2f$ProductTable$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    products: filteredProducts,
                    onEdit: openEditModal,
                    onDelete: openDeleteModal,
                    canEdit: canEdit,
                    canDelete: canDelete
                }, void 0, false, {
                    fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                    lineNumber: 413,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                lineNumber: 412,
                columnNumber: 7
            }, this),
            modalOpen && editingProductId && canEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$products$2f$ProductEditModel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                productId: editingProductId,
                onClose: closeModal
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                lineNumber: 424,
                columnNumber: 9
            }, this),
            bulkStockOpen && canCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$products$2f$ProductModel$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: closeBulkStockModal
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                lineNumber: 427,
                columnNumber: 38
            }, this),
            masterProductOpen && canCreate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$products$2f$ProductMasterModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onClose: closeMasterProductModal,
                onSaved: fetchProducts
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
                lineNumber: 429,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminDashboard/components/pages/ProductsPage.jsx",
        lineNumber: 304,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/AdminDashboard/products/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/pos/page.jsx
__turbopack_context__.s([
    "default",
    ()=>Product
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$pages$2f$ProductsPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/pages/ProductsPage.jsx [app-ssr] (ecmascript)");
"use client";
;
;
function Product() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$pages$2f$ProductsPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/AdminDashboard/products/page.jsx",
        lineNumber: 7,
        columnNumber: 4
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__df34399b._.js.map