module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/worker_threads [external] (worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("worker_threads", () => require("worker_threads"));

module.exports = mod;
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
"[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OutdoorSupplyReportPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.node.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarRange$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-range.js [app-ssr] (ecmascript) <export default as CalendarRange>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-down.js [app-ssr] (ecmascript) <export default as FileDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-ssr] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/permissions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/utils/formatting.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const formatCurrency = (value)=>`Rs. ${Number(value || 0).toLocaleString("en-PK", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
const formatDateInput = (date)=>{
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};
const buildDefaultDates = ()=>{
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return {
        start: new Date(today),
        end: new Date(today)
    };
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
const getDayKey = (value)=>{
    const date = parseLocalDate(value);
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
};
const getSaleQuantity = (item)=>{
    const derivedQuantity = Number(item?.receivedQuantity || 0) - Number(item?.returnedQuantity || 0);
    return Math.max(Number(item?.saleQuantity ?? derivedQuantity ?? 0), 0);
};
const getArray = (response)=>Array.isArray(response?.data) ? response.data : Array.isArray(response?.data?.data) ? response.data.data : Array.isArray(response?.sales) ? response.sales : Array.isArray(response) ? response : [];
const getSaleItems = (sale)=>Array.isArray(sale?.products) ? sale.products : Array.isArray(sale?.items) ? sale.items : [];
const getSaleTotal = (sale)=>Number(sale?.totalAmount ?? sale?.total ?? sale?.grandTotal ?? sale?.subtotal ?? 0) || 0;
const isOutdoorSupplySale = (sale, supplierNames)=>{
    const customerName = String(sale?.customerName || sale?.customer?.name || "").trim().toLowerCase();
    if (customerName) {
        if (supplierNames.has(customerName)) return true;
        if (customerName === "outdoor supply") return true;
    }
    return getSaleItems(sale).some((item)=>{
        const hasOutdoorQuantityFields = item?.receivedQuantity !== undefined || item?.returnedQuantity !== undefined || item?.returnedQty !== undefined || item?.returnQty !== undefined || item?.quantityReturned !== undefined;
        return hasOutdoorQuantityFields;
    });
};
const buildOutdoorSuppliesFromSales = (sales, suppliers)=>{
    const supplierNames = new Set((Array.isArray(suppliers) ? suppliers : []).map((supplier)=>String(supplier?.supplierName || "").trim().toLowerCase()).filter(Boolean));
    const outdoorSales = (Array.isArray(sales) ? sales : []).filter((sale)=>{
        return isOutdoorSupplySale(sale, supplierNames);
    });
    const groupedSupplies = new Map();
    outdoorSales.forEach((sale, saleIndex)=>{
        const saleDate = sale?.saleDate || sale?.createdAt || "";
        const customerName = String(sale?.customerName || sale?.customer?.name || "Outdoor Supply").trim() || "Outdoor Supply";
        const invoiceNumber = String(sale?.invoiceNo || sale?.invoiceNumber || sale?._id || `OUTDOOR-SALE-${saleIndex + 1}`).trim() || `OUTDOOR-SALE-${saleIndex + 1}`;
        const groupKey = [
            getDayKey(saleDate),
            customerName.toLowerCase(),
            invoiceNumber.toLowerCase()
        ].join("::");
        const existing = groupedSupplies.get(groupKey) || {
            id: `outdoor-report-${groupKey}`,
            supplierId: "",
            supplierName: customerName,
            routeName: "",
            invoiceNumber,
            supplyDate: saleDate,
            items: [],
            totalBill: 0,
            createdSaleId: "",
            createdSaleInvoiceNo: invoiceNumber,
            createdAt: sale?.createdAt || saleDate || new Date().toISOString()
        };
        existing.totalBill += Number(sale?.totalAmount || sale?.total || 0);
        existing.createdSaleId = String(existing.createdSaleId || sale?._id || "").trim();
        existing.items.push(...getSaleItems(sale).map((item, itemIndex)=>{
            const quantity = Math.max(Number(item?.chargedQuantity ?? item?.quantity ?? item?.qty ?? 0) || 0, 0);
            const returnedQuantity = Math.max(Number(item?.returnedQuantity ?? item?.returnedQty ?? item?.returnQty ?? item?.quantityReturned ?? 0) || 0, 0);
            return {
                id: `${sale?._id || saleIndex}-${item?.productId?._id || item?.productId || itemIndex}`,
                productId: item?.productId?._id || item?.productId || "",
                productName: item?.name || item?.productName || "Item",
                manufacturer: String(item?.manufacturer || "").trim(),
                receivedQuantity: quantity,
                returnedQuantity,
                saleQuantity: Math.max(quantity - returnedQuantity, 0),
                price: Number(item?.purchasePrice ?? item?.price ?? item?.salePrice ?? 0),
                totalPrice: Number(item?.totalPrice ?? item?.total ?? 0) || Number(item?.price ?? item?.salePrice ?? 0) * quantity
            };
        }));
        groupedSupplies.set(groupKey, existing);
    });
    return Array.from(groupedSupplies.values());
};
const buildProductLookup = (products)=>{
    const map = new Map();
    products.forEach((product)=>{
        const keys = [
            product?._id,
            product?.id,
            String(product?.name || "").trim().toLowerCase()
        ].filter(Boolean);
        keys.forEach((key)=>{
            if (!map.has(String(key))) {
                map.set(String(key), product);
            }
        });
    });
    return map;
};
const getProductPurchasePrice = (product, fallbackItem)=>Number(product?.purchasePrice ?? product?.cost ?? fallbackItem?.purchasePrice ?? 0) || 0;
const getOutdoorSupplyItemWholesalePrice = (item, product)=>Number(item?.price ?? item?.wholeSalePrice ?? item?.wholesalePrice ?? product?.wholeSalePrice ?? product?.wholesalePrice ?? product?.retailSalePrice ?? product?.salePrice ?? product?.price ?? 0) || 0;
const buildReportRows = ({ outdoorSupplies, outdoorSuppliers, products, sales, startDate, endDate })=>{
    const start = parseLocalDate(startDate);
    const end = parseLocalDate(endDate);
    if ((startDate || endDate) && (!start || !end)) {
        return {
            filteredSupplies: [],
            summary: {
                dailyOutdoorSale: 0,
                dailyOutdoorPendingProducts: 0,
                dailyOutdoorProfit: 0
            },
            dailyRows: []
        };
    }
    if (start) {
        start.setHours(0, 0, 0, 0);
    }
    if (end) {
        end.setHours(23, 59, 59, 999);
    }
    const productLookup = buildProductLookup(products);
    const salesByKey = new Map();
    sales.forEach((sale)=>{
        [
            sale?._id,
            sale?.invoiceNo,
            sale?.invoiceNumber
        ].map((value)=>String(value || "").trim()).filter(Boolean).forEach((key)=>{
            salesByKey.set(key, sale);
        });
    });
    const resolvedSupplies = (Array.isArray(outdoorSupplies) ? outdoorSupplies : []).map((supply)=>{
        const linkedSale = [
            supply?.createdSaleId,
            supply?.createdSaleInvoiceNo,
            supply?.invoiceNumber
        ].map((value)=>salesByKey.get(String(value || "").trim())).find(Boolean) || null;
        const resolvedTotalBill = Number(supply?.totalBill || 0) > 0 ? Number(supply?.totalBill || 0) : getSaleTotal(linkedSale);
        const reportDate = supply?.supplyDate || supply?.createdAt || linkedSale?.saleDate || linkedSale?.createdAt || "";
        return {
            ...supply,
            linkedSale,
            reportDate,
            totalBill: resolvedTotalBill
        };
    });
    const filteredSupplies = resolvedSupplies.filter((supply)=>{
        if (!start || !end) {
            return true;
        }
        const supplyDate = parseLocalDate(supply?.reportDate || supply?.supplyDate || supply?.createdAt);
        return supplyDate && supplyDate >= start && supplyDate <= end;
    });
    const dailyRows = filteredSupplies.map((supply, index)=>{
        const dateKey = getDayKey(supply?.reportDate || supply?.supplyDate || supply?.createdAt);
        const supplyDate = parseLocalDate(supply?.reportDate || supply?.supplyDate || supply?.createdAt);
        const sortDate = parseLocalDate(supply?.supplyDate) || parseLocalDate(supply?.reportDate) || parseLocalDate(supply?.createdAt) || null;
        const items = Array.isArray(supply?.items) ? supply.items : [];
        const row = {
            rowKey: String(supply?._id || supply?.id || `${dateKey}-${index}`),
            dateKey,
            dateLabel: supplyDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDateDDMMYYYY"])(supplyDate) : "-",
            sortTimestamp: sortDate ? sortDate.getTime() : 0,
            bills: 1,
            supplierCount: 1,
            items: items.length,
            outdoorSale: Number(supply?.totalBill || 0),
            pendingProducts: 0,
            outdoorProfit: 0
        };
        items.forEach((item)=>{
            const saleQuantity = getSaleQuantity(item);
            row.pendingProducts += saleQuantity;
            const product = productLookup.get(String(item?.productId || "")) || productLookup.get(String(item?.productName || "").trim().toLowerCase());
            const wholeSalePrice = getOutdoorSupplyItemWholesalePrice(item, product);
            const purchasePrice = getProductPurchasePrice(product, item);
            row.outdoorProfit += (wholeSalePrice - purchasePrice) * saleQuantity;
        });
        return row;
    }).sort((a, b)=>{
        if (b.sortTimestamp !== a.sortTimestamp) {
            return b.sortTimestamp - a.sortTimestamp;
        }
        return b.dateKey.localeCompare(a.dateKey);
    });
    const summary = dailyRows.reduce((acc, row)=>{
        acc.dailyOutdoorSale += row.outdoorSale;
        acc.dailyOutdoorPendingProducts += row.pendingProducts;
        acc.dailyOutdoorProfit += row.outdoorProfit;
        return acc;
    }, {
        dailyOutdoorSale: 0,
        dailyOutdoorPendingProducts: 0,
        dailyOutdoorProfit: 0
    });
    return {
        filteredSupplies,
        summary,
        dailyRows
    };
};
const reportCardStyles = [
    "from-blue-600 to-cyan-500",
    "from-amber-500 to-orange-500",
    "from-emerald-600 to-teal-500"
];
function OutdoorSupplyReportPage() {
    const { start: defaultStart, end: defaultEnd } = buildDefaultDates();
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(formatDateInput(defaultStart));
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(formatDateInput(defaultEnd));
    const [outdoorSupplies, setOutdoorSupplies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [outdoorSuppliers, setOutdoorSuppliers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sales, setSales] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchOutdoorData = async ()=>{
            try {
                const [suppliersResponse, suppliesResponse] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/outdoor-supply-management/suppliers", {
                        method: "GET",
                        suppressErrorToast: true
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/outdoor-supply-management", {
                        method: "GET",
                        suppressErrorToast: true
                    })
                ]);
                const supplierRows = Array.isArray(suppliersResponse?.data) ? suppliersResponse.data : Array.isArray(suppliersResponse) ? suppliersResponse : [];
                const supplyRows = Array.isArray(suppliesResponse?.data) ? suppliesResponse.data : Array.isArray(suppliesResponse) ? suppliesResponse : [];
                setOutdoorSuppliers(supplierRows);
                setOutdoorSupplies(supplyRows);
            } catch (error) {
                console.error("Failed to fetch outdoor supply report data:", error);
                setOutdoorSuppliers([]);
                setOutdoorSupplies([]);
            }
        };
        const fetchSales = async ()=>{
            try {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/sales", {
                    method: "GET",
                    suppressErrorToast: true
                });
                setSales(getArray(response));
            } catch (error) {
                console.error("Failed to fetch sales for outdoor supply report:", error);
                setSales([]);
            }
        };
        const fetchProducts = async ()=>{
            const permissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseStoredPermissions"])();
            const canProductView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasPermission"])("PRODUCT_VIEW", permissions);
            if (!canProductView) {
                setProducts([]);
                return;
            }
            try {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/products", {
                    method: "GET",
                    suppressErrorToast: true
                });
                setProducts(getArray(response));
            } catch (error) {
                console.error("Failed to fetch products for outdoor supply report:", error);
                setProducts([]);
            }
        };
        const load = async ()=>{
            setLoading(true);
            await Promise.all([
                fetchOutdoorData(),
                fetchProducts(),
                fetchSales()
            ]);
            setLoading(false);
        };
        load();
    }, []);
    const pageReportData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>buildReportRows({
            outdoorSupplies,
            outdoorSuppliers,
            products,
            sales
        }), [
        outdoorSupplies,
        outdoorSuppliers,
        products,
        sales
    ]);
    const exportReportData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>buildReportRows({
            outdoorSupplies,
            outdoorSuppliers,
            products,
            sales,
            startDate,
            endDate
        }), [
        endDate,
        outdoorSupplies,
        outdoorSuppliers,
        products,
        sales,
        startDate
    ]);
    const handleExportPdf = ()=>{
        const { summary, dailyRows } = exportReportData;
        const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$node$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsPDF"]("l", "mm", "a4");
        const generatedAt = new Date().toLocaleString("en-PK");
        doc.setFontSize(18);
        doc.text("Outdoor Supply Report", 14, 18);
        doc.setFontSize(10);
        doc.text(`From: ${startDate}  To: ${endDate}`, 14, 26);
        doc.text(`Generated: ${generatedAt}`, 14, 32);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(doc, {
            startY: 38,
            head: [
                [
                    "Metric",
                    "Value"
                ]
            ],
            body: [
                [
                    "Daily Outdoor Sale",
                    formatCurrency(summary.dailyOutdoorSale)
                ],
                [
                    "Daily Outdoor Pending Products",
                    String(summary.dailyOutdoorPendingProducts)
                ],
                [
                    "Daily Outdoor Profit",
                    formatCurrency(summary.dailyOutdoorProfit)
                ]
            ],
            styles: {
                fontSize: 10,
                cellPadding: 3,
                textColor: [
                    0,
                    0,
                    0
                ],
                lineColor: [
                    0,
                    0,
                    0
                ],
                lineWidth: 0.1
            },
            headStyles: {
                fillColor: [
                    37,
                    99,
                    235
                ],
                textColor: [
                    255,
                    255,
                    255
                ]
            },
            columnStyles: {
                0: {
                    cellWidth: 90
                },
                1: {
                    cellWidth: 60,
                    halign: "right"
                }
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(doc, {
            startY: doc.lastAutoTable.finalY + 8,
            head: [
                [
                    "Date",
                    "Bills",
                    "Suppliers",
                    "Items",
                    "Outdoor Sale",
                    "Pending Products",
                    "Outdoor Profit"
                ]
            ],
            body: dailyRows.length ? dailyRows.map((row)=>[
                    row.dateLabel,
                    String(row.bills),
                    String(row.supplierCount),
                    String(row.items),
                    formatCurrency(row.outdoorSale),
                    String(row.pendingProducts),
                    formatCurrency(row.outdoorProfit)
                ]) : [
                [
                    "-",
                    "-",
                    "-",
                    "-",
                    "No outdoor supply report data found for the selected date range.",
                    "-",
                    "-"
                ]
            ],
            styles: {
                fontSize: 9,
                cellPadding: 2.5,
                textColor: [
                    0,
                    0,
                    0
                ],
                lineColor: [
                    0,
                    0,
                    0
                ],
                lineWidth: 0.1
            },
            headStyles: {
                fillColor: [
                    15,
                    23,
                    42
                ],
                textColor: [
                    255,
                    255,
                    255
                ]
            }
        });
        doc.save(`Outdoor_Supply_Report_${startDate}_to_${endDate}.pdf`);
    };
    const cards = [
        {
            title: "Daily Outdoor Sale",
            value: formatCurrency(pageReportData.summary.dailyOutdoorSale),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"]
        },
        {
            title: "Daily Outdoor Pending Products",
            value: String(pageReportData.summary.dailyOutdoorPendingProducts),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"]
        },
        {
            title: "Daily Outdoor Profit",
            value: formatCurrency(pageReportData.summary.dailyOutdoorProfit),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
        }
    ];
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500 shadow-sm",
                children: "Loading outdoor supply report..."
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                lineNumber: 561,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
            lineNumber: 560,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "space-y-6 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-3xl border border-slate-200 bg-gradient-to-r from-sky-50 via-white to-emerald-50 p-6 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sky-700 shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                            lineNumber: 574,
                                            columnNumber: 15
                                        }, this),
                                        "Outdoor Supply Report"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                    lineNumber: 573,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold text-slate-900",
                                    children: "Outdoor Supply Report"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                    lineNumber: 577,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-slate-600",
                                    children: "Track outdoor sale, pending products, and expected outdoor profit with date-wise export."
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                    lineNumber: 578,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                            lineNumber: 572,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mb-1 block text-[11px] font-semibold uppercase tracking-wide text-slate-500",
                                            children: "From Date"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                            lineNumber: 585,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: startDate,
                                            onChange: (event)=>setStartDate(event.target.value),
                                            className: "h-9 rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-700 outline-none transition focus:border-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                            lineNumber: 588,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                    lineNumber: 584,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "mb-1 block text-[11px] font-semibold uppercase tracking-wide text-slate-500",
                                            children: "To Date"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                            lineNumber: 596,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: endDate,
                                            onChange: (event)=>setEndDate(event.target.value),
                                            className: "h-9 rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-700 outline-none transition focus:border-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                            lineNumber: 599,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                    lineNumber: 595,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleExportPdf,
                                    className: "inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-3 text-xs font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileDown$3e$__["FileDown"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                            lineNumber: 611,
                                            columnNumber: 17
                                        }, this),
                                        "Export PDF"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                    lineNumber: 606,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                            lineNumber: 583,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                    lineNumber: 571,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                lineNumber: 570,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-4 md:grid-cols-3",
                children: cards.map((card, index)=>{
                    const Icon = card.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `rounded-3xl bg-gradient-to-br ${reportCardStyles[index]} p-5 text-white shadow-lg`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-medium text-white/80",
                                            children: card.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                            lineNumber: 628,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-3xl font-bold",
                                            children: card.value
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                            lineNumber: 629,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xs text-white/75",
                                            children: "All saved outdoor supply data"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                            lineNumber: 630,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                    lineNumber: 627,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "h-6 w-6"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                        lineNumber: 635,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                    lineNumber: 634,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                            lineNumber: 626,
                            columnNumber: 15
                        }, this)
                    }, card.title, false, {
                        fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                        lineNumber: 622,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                lineNumber: 618,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "rounded-3xl border border-slate-200 bg-white shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-slate-900",
                                        children: "Outdoor Supply Daily Report"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                        lineNumber: 646,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-500",
                                        children: "Date-wise outdoor supply summary with bills, pending products, and expected profit."
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                        lineNumber: 647,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                lineNumber: 645,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$range$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarRange$3e$__["CalendarRange"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                        lineNumber: 652,
                                        columnNumber: 13
                                    }, this),
                                    "Export range: ",
                                    startDate,
                                    " to ",
                                    endDate
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                lineNumber: 651,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                        lineNumber: 644,
                        columnNumber: 9
                    }, this),
                    pageReportData.dailyRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-5 py-12 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                    className: "h-6 w-6"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                    lineNumber: 660,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                lineNumber: 659,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-semibold text-slate-900",
                                children: "No outdoor supply report found."
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                lineNumber: 662,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-slate-500",
                                children: "Change the date range or save outdoor supply bills to see the report here."
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                lineNumber: 663,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                        lineNumber: 658,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "min-w-full divide-y divide-slate-200 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-blue-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "text-left text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "rounded-tl-2xl px-4 py-3 font-semibold",
                                                children: "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                                lineNumber: 672,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 font-semibold",
                                                children: "Bills"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                                lineNumber: 673,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 font-semibold",
                                                children: "Suppliers"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                                lineNumber: 674,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 font-semibold",
                                                children: "Items"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                                lineNumber: 675,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 font-semibold",
                                                children: "Daily Outdoor Sale"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                                lineNumber: 676,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-3 font-semibold",
                                                children: "Daily Outdoor Pending Products"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                                lineNumber: 677,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "rounded-tr-2xl px-4 py-3 font-semibold",
                                                children: "Daily Outdoor Profit"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                                lineNumber: 678,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                        lineNumber: 671,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                    lineNumber: 670,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-100",
                                    children: pageReportData.dailyRows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "align-top",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 font-semibold text-slate-900",
                                                    children: row.dateLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                                    lineNumber: 684,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-slate-700",
                                                    children: row.bills
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                                    lineNumber: 685,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-slate-700",
                                                    children: row.supplierCount
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                                    lineNumber: 686,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 text-slate-700",
                                                    children: row.items
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                                    lineNumber: 687,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 font-semibold text-slate-900",
                                                    children: formatCurrency(row.outdoorSale)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                                    lineNumber: 688,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 font-semibold text-amber-700",
                                                    children: row.pendingProducts
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                                    lineNumber: 689,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-3 font-semibold text-emerald-700",
                                                    children: formatCurrency(row.outdoorProfit)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                                    lineNumber: 690,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, row.rowKey, true, {
                                            fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                            lineNumber: 683,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                                    lineNumber: 681,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                            lineNumber: 669,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                        lineNumber: 668,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
                lineNumber: 643,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx",
        lineNumber: 569,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/AdminDashboard/outdoor-supply-report/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OutdoorSupplyReportRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$pages$2f$OutdoorSupplyReportPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/pages/OutdoorSupplyReportPage.jsx [app-ssr] (ecmascript)");
"use client";
;
;
function OutdoorSupplyReportRoute() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$pages$2f$OutdoorSupplyReportPage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/AdminDashboard/outdoor-supply-report/page.jsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__da5e2c51._.js.map