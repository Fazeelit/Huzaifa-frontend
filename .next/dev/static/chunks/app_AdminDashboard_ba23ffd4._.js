(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/AdminDashboard/authservice/usePermissions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePermissions",
    ()=>usePermissions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/authStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/permissions.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const usePermissions = ()=>{
    _s();
    const [permissions, setPermissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePermissions.useEffect": ()=>{
            setPermissions((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseStoredPermissions"])());
            const sync = {
                "usePermissions.useEffect.sync": ()=>setPermissions((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseStoredPermissions"])())
            }["usePermissions.useEffect.sync"];
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(sync);
        }
    }["usePermissions.useEffect"], []);
    const can = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePermissions.useMemo[can]": ()=>({
                "usePermissions.useMemo[can]": (permission)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPermission"])(permission, permissions)
            })["usePermissions.useMemo[can]"]
    }["usePermissions.useMemo[can]"], [
        permissions
    ]);
    const crud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePermissions.useMemo[crud]": ()=>({
                "usePermissions.useMemo[crud]": (moduleKey)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCrudPermissions"])(moduleKey, permissions)
            })["usePermissions.useMemo[crud]"]
    }["usePermissions.useMemo[crud]"], [
        permissions
    ]);
    return {
        permissions,
        can,
        crud
    };
};
_s(usePermissions, "QGKSXeDcPdKESDJd+Cj3IaqrfRM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/AdminDashboard/utils/uomConverter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/AdminDashboard/utils/formatting.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewOutdoorSupplyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as LoaderCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-client] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$usePermissions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/usePermissions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/permissions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$uomConverter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/utils/uomConverter.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/utils/formatting.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const createEmptyItem = ()=>({
        id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
        productId: "",
        productName: "",
        manufacturer: "",
        receivedQuantity: "",
        price: "",
        returnedQuantity: "",
        searchText: ""
    });
const formatCurrency = (value)=>`Rs. ${Number(value || 0).toLocaleString("en-PK", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
const normalizeName = (value = "")=>String(value).toLowerCase().normalize("NFKC").replace(/\s+/g, "").replace(/[^\p{L}\p{N}]/gu, "");
const getSaleQuantity = (item)=>Math.max(Number(item?.receivedQuantity || 0) - Number(item?.returnedQuantity || 0), 0);
const getTotalPrice = (item)=>getSaleQuantity(item) * Number(item?.price || 0);
const calculateItemsTotal = (itemsList)=>(Array.isArray(itemsList) ? itemsList : []).reduce((sum, currentItem)=>sum + getTotalPrice(currentItem), 0);
const mapSupplyItems = (savedItems)=>Array.isArray(savedItems) && savedItems.length ? savedItems.map((item)=>({
            id: item?.id || createEmptyItem().id,
            productId: item?.productId || "",
            productName: item?.productName || "",
            manufacturer: item?.manufacturer || "",
            receivedQuantity: Number(item?.receivedQuantity || 0),
            price: Number(item?.price || 0),
            returnedQuantity: Number(item?.returnedQuantity || 0),
            searchText: item?.productName || ""
        })) : [
        createEmptyItem()
    ];
function NewOutdoorSupplyPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const redirectTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { crud } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$usePermissions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermissions"])();
    const { canCreate } = crud("PURCHASE");
    const supplyId = Array.isArray(params?.id) ? String(params.id[0] || "").trim() : String(params?.id || "").trim();
    const isEditMode = Boolean(supplyId);
    const canSubmit = isEditMode ? true : canCreate;
    const [suppliers, setSuppliers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [productsList, setProductsList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [supplierId, setSupplierId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [supplyDate, setSupplyDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "NewOutdoorSupplyPage.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateDDMMYYYY"])(new Date())
    }["NewOutdoorSupplyPage.useState"]);
    const [invoiceNumber, setInvoiceNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "NewOutdoorSupplyPage.useState": ()=>[
                createEmptyItem()
            ]
    }["NewOutdoorSupplyPage.useState"]);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        type: "",
        text: ""
    });
    const [processingSaleItemId, setProcessingSaleItemId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoadingSupply, setIsLoadingSupply] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSuccessModal, setShowSuccessModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showErrorModal, setShowErrorModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCreateSaleSuccessModal, setShowCreateSaleSuccessModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalMessage, setModalMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [backendSupplyId, setBackendSupplyId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "NewOutdoorSupplyPage.useState": ()=>String(supplyId || "").trim()
    }["NewOutdoorSupplyPage.useState"]);
    const [linkedSaleId, setLinkedSaleId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [linkedSaleInvoiceNo, setLinkedSaleInvoiceNo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewOutdoorSupplyPage.useEffect": ()=>{
            return ({
                "NewOutdoorSupplyPage.useEffect": ()=>{
                    if (redirectTimeoutRef.current) {
                        window.clearTimeout(redirectTimeoutRef.current);
                    }
                }
            })["NewOutdoorSupplyPage.useEffect"];
        }
    }["NewOutdoorSupplyPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewOutdoorSupplyPage.useEffect": ()=>{
            if (!isEditMode) {
                setSupplierId("");
                setSupplyDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateDDMMYYYY"])(new Date()));
                setInvoiceNumber("");
                setItems([
                    createEmptyItem()
                ]);
                setErrors({});
                setMessage({
                    type: "",
                    text: ""
                });
                setBackendSupplyId("");
                setLinkedSaleId("");
                setLinkedSaleInvoiceNo("");
                return;
            }
        }
    }["NewOutdoorSupplyPage.useEffect"], [
        isEditMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewOutdoorSupplyPage.useEffect": ()=>{
            const normalizeSupplierRecord = {
                "NewOutdoorSupplyPage.useEffect.normalizeSupplierRecord": (supplier)=>({
                        ...supplier,
                        id: supplier?._id || supplier?.id || "",
                        supplierName: supplier?.supplierName || supplier?.name || "",
                        phoneNo: supplier?.phoneNo || supplier?.phone || "",
                        gariNo: supplier?.gariNo || "",
                        routeName: supplier?.routeName || "",
                        monthlyPay: Number(supplier?.monthlyPay || 0),
                        commission: Number(supplier?.commission || 0),
                        address: supplier?.address || "",
                        notes: supplier?.notes || ""
                    })
            }["NewOutdoorSupplyPage.useEffect.normalizeSupplierRecord"];
            const loadSuppliers = {
                "NewOutdoorSupplyPage.useEffect.loadSuppliers": async ()=>{
                    try {
                        const suppliersResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/outdoor-supply-management/suppliers", {
                            method: "GET",
                            suppressErrorToast: true
                        });
                        const supplierRows = Array.isArray(suppliersResponse?.data) ? suppliersResponse.data : Array.isArray(suppliersResponse) ? suppliersResponse : [];
                        setSuppliers(supplierRows.map(normalizeSupplierRecord));
                    } catch (error) {
                        console.error("Failed to load outdoor suppliers:", error);
                        setSuppliers([]);
                    }
                }
            }["NewOutdoorSupplyPage.useEffect.loadSuppliers"];
            const loadEditData = {
                "NewOutdoorSupplyPage.useEffect.loadEditData": async ()=>{
                    if (!isEditMode || !supplyId) return;
                    try {
                        setIsLoadingSupply(true);
                        setMessage({
                            type: "",
                            text: ""
                        });
                        const supplyResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])(`/outdoor-supply-management/${supplyId}`, {
                            method: "GET",
                            suppressErrorToast: true
                        });
                        const supply = supplyResponse?.data || supplyResponse;
                        if (!supply?._id && !supply?.id) {
                            throw new Error("This outdoor supply record was not found.");
                        }
                        setBackendSupplyId(String(supply?._id || supply?.id || supplyId).trim());
                        setLinkedSaleId(String(supply?.createdSaleId || "").trim());
                        setLinkedSaleInvoiceNo(String(supply?.createdSaleInvoiceNo || supply?.invoiceNumber || "").trim());
                        const resolvedSupplier = supply?.supplierId && typeof supply.supplierId === "object" ? normalizeSupplierRecord(supply.supplierId) : null;
                        setSupplierId(String(resolvedSupplier?.id || supply?.supplierId?._id || supply?.supplierId?.id || supply?.supplierId || ""));
                        setSupplyDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateDDMMYYYY"])(new Date()));
                        setInvoiceNumber(String(supply?.invoiceNumber || ""));
                        setItems(mapSupplyItems(supply?.items));
                        setErrors({});
                    } catch (error) {
                        setMessage({
                            type: "error",
                            text: error?.message || "This outdoor supply record was not found."
                        });
                    } finally{
                        setIsLoadingSupply(false);
                    }
                }
            }["NewOutdoorSupplyPage.useEffect.loadEditData"];
            loadSuppliers();
            loadEditData();
        }
    }["NewOutdoorSupplyPage.useEffect"], [
        isEditMode,
        supplyId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewOutdoorSupplyPage.useEffect": ()=>{
            const mapProductsForDropdown = {
                "NewOutdoorSupplyPage.useEffect.mapProductsForDropdown": (products)=>Array.from(new Map((products || []).filter({
                        "NewOutdoorSupplyPage.useEffect.mapProductsForDropdown": (product)=>product?.name
                    }["NewOutdoorSupplyPage.useEffect.mapProductsForDropdown"]).map({
                        "NewOutdoorSupplyPage.useEffect.mapProductsForDropdown": (product)=>[
                                String(product.name).trim().toLowerCase(),
                                {
                                    id: product._id || product.id || "",
                                    name: product.name,
                                    manufacturer: product.manufacturer || "",
                                    wholeSalePrice: Number(product.wholeSalePrice ?? product.wholesalePrice ?? product.retailSalePrice ?? product.salePrice ?? product.price ?? product.purchasePrice ?? product.cost ?? 0)
                                }
                            ]
                    }["NewOutdoorSupplyPage.useEffect.mapProductsForDropdown"])).values())
            }["NewOutdoorSupplyPage.useEffect.mapProductsForDropdown"];
            const fetchProducts = {
                "NewOutdoorSupplyPage.useEffect.fetchProducts": async ()=>{
                    try {
                        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/products/ProductName", {
                            method: "GET"
                        });
                        const primaryList = mapProductsForDropdown(response?.data || response);
                        if (primaryList.length) {
                            setProductsList(primaryList);
                            return;
                        }
                        const fallbackResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/products", {
                            method: "GET"
                        });
                        setProductsList(mapProductsForDropdown(fallbackResponse?.data || fallbackResponse));
                    } catch (error) {
                        console.error("Failed to load products for outdoor supply:", error);
                        setProductsList([]);
                    }
                }
            }["NewOutdoorSupplyPage.useEffect.fetchProducts"];
            fetchProducts();
        }
    }["NewOutdoorSupplyPage.useEffect"], []);
    const selectedSupplier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NewOutdoorSupplyPage.useMemo[selectedSupplier]": ()=>suppliers.find({
                "NewOutdoorSupplyPage.useMemo[selectedSupplier]": (supplier)=>String(supplier.id) === String(supplierId)
            }["NewOutdoorSupplyPage.useMemo[selectedSupplier]"]) || null
    }["NewOutdoorSupplyPage.useMemo[selectedSupplier]"], [
        supplierId,
        suppliers
    ]);
    const totalBill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NewOutdoorSupplyPage.useMemo[totalBill]": ()=>calculateItemsTotal(items)
    }["NewOutdoorSupplyPage.useMemo[totalBill]"], [
        items
    ]);
    const handleItemChange = (id, field, value)=>{
        setItems((prev)=>prev.map((item)=>item.id !== id ? item : {
                    ...item,
                    [field]: [
                        "receivedQuantity",
                        "returnedQuantity",
                        "price"
                    ].includes(field) ? value === "" ? "" : Number(value) : value
                }));
        setErrors((prev)=>({
                ...prev,
                [`${id}-${field}`]: ""
            }));
    };
    const handleProductSearchChange = (id, typedValue)=>{
        const matchedProduct = productsList.find((product)=>product.name.toLowerCase() === typedValue.trim().toLowerCase());
        setItems((prev)=>prev.map((item)=>{
                if (item.id !== id) return item;
                if (!matchedProduct) {
                    return {
                        ...item,
                        productId: "",
                        productName: typedValue,
                        searchText: typedValue
                    };
                }
                return {
                    ...item,
                    productId: matchedProduct.id,
                    productName: matchedProduct.name,
                    searchText: matchedProduct.name,
                    manufacturer: matchedProduct.manufacturer || item.manufacturer,
                    price: Number(item.price || 0) > 0 ? Number(item.price || 0) : Number(matchedProduct.wholeSalePrice || 0)
                };
            }));
        setErrors((prev)=>({
                ...prev,
                [`${id}-productName`]: ""
            }));
    };
    const handleAddItem = ()=>setItems((prev)=>[
                ...prev,
                createEmptyItem()
            ]);
    const handleRemoveItem = (id)=>{
        setItems((prev)=>prev.length > 1 ? prev.filter((item)=>item.id !== id) : prev);
    };
    const handleCreateSale = async (item)=>{
        const saleQuantity = getSaleQuantity(item);
        if (!supplierId) {
            setErrors((prev)=>({
                    ...prev,
                    supplierId: "Outdoor supplier is required."
                }));
            setMessage({
                type: "error",
                text: "Select an outdoor supplier before creating a sale."
            });
            return;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toIsoFromDDMMYYYY"])(supplyDate)) {
            setErrors((prev)=>({
                    ...prev,
                    supplyDate: "Supply date must be dd/mm/yyyy."
                }));
            setMessage({
                type: "error",
                text: "Enter a valid supply date before creating a sale."
            });
            return;
        }
        if (!String(invoiceNumber || "").trim()) {
            setErrors((prev)=>({
                    ...prev,
                    invoiceNumber: "Invoice number is required."
                }));
            setMessage({
                type: "error",
                text: "Enter an invoice number before creating a sale."
            });
            return;
        }
        if (!String(item.productName || "").trim()) {
            setErrors((prev)=>({
                    ...prev,
                    [`${item.id}-productName`]: "Product name is required."
                }));
            setMessage({
                type: "error",
                text: "Select a product before creating a sale."
            });
            return;
        }
        if (!String(item.manufacturer || "").trim()) {
            setErrors((prev)=>({
                    ...prev,
                    [`${item.id}-manufacturer`]: "Manufacturer is required."
                }));
            setMessage({
                type: "error",
                text: "Enter manufacturer before creating a sale."
            });
            return;
        }
        if (!Number(item.receivedQuantity || 0)) {
            setErrors((prev)=>({
                    ...prev,
                    [`${item.id}-receivedQuantity`]: "Received quantity is required."
                }));
            setMessage({
                type: "error",
                text: "Enter received quantity before creating a sale."
            });
            return;
        }
        if (!Number(item.price || 0)) {
            setErrors((prev)=>({
                    ...prev,
                    [`${item.id}-price`]: "Price is required."
                }));
            setMessage({
                type: "error",
                text: "Enter price before creating a sale."
            });
            return;
        }
        if (saleQuantity < 1) return;
        try {
            setProcessingSaleItemId(item.id);
            setMessage({
                type: "",
                text: ""
            });
            setShowCreateSaleSuccessModal(false);
            const productsResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/products", {
                method: "GET",
                suppressErrorToast: true
            });
            const products = Array.isArray(productsResponse?.data) ? productsResponse.data : Array.isArray(productsResponse) ? productsResponse : [];
            const requestedProductId = String(item?.productId || "").trim();
            const requestedProductNameKey = normalizeName(item?.productName || "");
            const matchingProducts = products.filter((product)=>{
                const currentProductId = String(product?._id || product?.id || "").trim();
                if (requestedProductId && currentProductId) {
                    return currentProductId === requestedProductId;
                }
                return normalizeName(product?.name || "") === requestedProductNameKey;
            });
            const availableStock = matchingProducts.reduce((sum, product)=>sum + (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$uomConverter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActualStockValue"])(product), 0);
            if (availableStock < saleQuantity) {
                setMessage({
                    type: "error",
                    text: `Insufficient stock for ${item.productName || "this product"} (requested ${saleQuantity}, available ${Math.floor(availableStock)}).`
                });
                return;
            }
            const payload = {
                invoiceNo: String(invoiceNumber || "").trim(),
                products: [
                    {
                        productId: item?.productId || undefined,
                        name: String(item?.productName || "").trim(),
                        manufacturer: String(item?.manufacturer || "").trim(),
                        quantity: saleQuantity,
                        price: Number(item?.price || 0),
                        totalPrice: getTotalPrice(item),
                        returnedQuantity: Number(item?.returnedQuantity || 0),
                        receivedQuantity: Number(item?.receivedQuantity || 0)
                    }
                ],
                subtotal: getTotalPrice(item),
                discount: 0,
                totalAmount: getTotalPrice(item),
                paidAmount: getTotalPrice(item),
                returnAmount: 0,
                saleDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toIsoFromDDMMYYYY"])(supplyDate),
                customerName: String(selectedSupplier?.supplierName || "Outdoor Supply"),
                paymentMethod: "Cash",
                paymentStatus: "Paid"
            };
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/sales/createSale", {
                method: "POST",
                data: payload
            });
            if (response?.success === false) {
                setMessage({
                    type: "error",
                    text: response?.message || "Failed to create sale for this item."
                });
                return;
            }
            const normalizedReceivedQuantity = Number(item?.returnedQuantity || 0);
            const nextItems = items.map((currentItem)=>currentItem.id !== item.id ? currentItem : {
                    ...currentItem,
                    receivedQuantity: normalizedReceivedQuantity,
                    returnedQuantity: 0
                });
            setItems(nextItems);
            setShowCreateSaleSuccessModal(true);
        } catch (error) {
            console.error("Failed to create sale for outdoor supply item:", error);
            setMessage({
                type: "error",
                text: error?.response?.data?.message || error?.message || "Failed to create sale for this item."
            });
        } finally{
            setProcessingSaleItemId("");
        }
    };
    const validate = ()=>{
        const nextErrors = {};
        if (!supplierId) nextErrors.supplierId = "Outdoor supplier is required.";
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toIsoFromDDMMYYYY"])(supplyDate)) nextErrors.supplyDate = "Supply date must be dd/mm/yyyy.";
        if (!invoiceNumber.trim()) nextErrors.invoiceNumber = "Invoice number is required.";
        items.forEach((item)=>{
            if (!String(item.productName || "").trim()) nextErrors[`${item.id}-productName`] = "Product name is required.";
            if (!String(item.manufacturer || "").trim()) nextErrors[`${item.id}-manufacturer`] = "Manufacturer is required.";
            if (!Number(item.receivedQuantity || 0)) nextErrors[`${item.id}-receivedQuantity`] = "Received quantity is required.";
            if (Number(item.returnedQuantity || 0) < 0) nextErrors[`${item.id}-returnedQuantity`] = "Returned quantity cannot be negative.";
            if (Number(item.returnedQuantity || 0) > Number(item.receivedQuantity || 0)) {
                nextErrors[`${item.id}-returnedQuantity`] = "Returned quantity cannot exceed received quantity.";
            }
            if (!Number(item.price || 0)) nextErrors[`${item.id}-price`] = "Price is required.";
            if (getSaleQuantity(item) <= 0) nextErrors[`${item.id}-returnedQuantity`] = "Sale quantity must be greater than zero.";
        });
        if (totalBill <= 0) nextErrors.totalBill = "Total bill must be greater than zero.";
        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if (!validate()) return;
        const normalizedItems = items.map((item)=>({
                id: item.id,
                productId: item.productId,
                productName: String(item.productName || "").trim(),
                manufacturer: String(item.manufacturer || "").trim(),
                receivedQuantity: Number(item.receivedQuantity || 0),
                returnedQuantity: Number(item.returnedQuantity || 0),
                saleQuantity: getSaleQuantity(item),
                price: Number(item.price || 0),
                totalPrice: getTotalPrice(item)
            }));
        const payload = {
            supplierId,
            supplierName: selectedSupplier?.supplierName || "",
            routeName: selectedSupplier?.routeName || "",
            invoiceNumber: invoiceNumber.trim(),
            supplyDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toIsoFromDDMMYYYY"])(supplyDate),
            items: normalizedItems,
            totalBill,
            createdSaleId: linkedSaleId || undefined,
            createdSaleInvoiceNo: linkedSaleInvoiceNo || undefined
        };
        try {
            setIsSubmitting(true);
            setShowErrorModal(false);
            setShowSuccessModal(false);
            setModalMessage("");
            if (isEditMode) {
                const updateTargetId = backendSupplyId;
                if (!updateTargetId) {
                    throw new Error("Outdoor supply is missing a valid database ID");
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])(`/outdoor-supply-management/updateOutdoorSupply/${updateTargetId}`, {
                    method: "PUT",
                    data: payload,
                    timeoutMs: 120000
                });
                setMessage({
                    type: "success",
                    text: "Outdoor Supply has been successfully updated"
                });
                setModalMessage("Outdoor Supply has been successfully updated");
                setShowSuccessModal(true);
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/outdoor-supply-management/createOutdoorSupply", {
                    method: "POST",
                    data: payload
                });
                setMessage({
                    type: "success",
                    text: "Outdoor supply saved successfully."
                });
                if (redirectTimeoutRef.current) {
                    window.clearTimeout(redirectTimeoutRef.current);
                }
                redirectTimeoutRef.current = window.setTimeout(()=>{
                    router.push(`/AdminDashboard/outdoor-supply?success=1&message=${encodeURIComponent("Outdoor supply saved successfully.")}`);
                }, 900);
            }
        } catch (error) {
            const nextMessage = error?.response?.data?.message || error?.message || "Failed to update outdoor supply.";
            setMessage({
                type: "error",
                text: nextMessage
            });
            setModalMessage(nextMessage);
            setShowErrorModal(true);
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleSuccessModalClose = ()=>{
        setShowSuccessModal(false);
        router.push(isEditMode ? "/AdminDashboard/outdoor-supply" : `/AdminDashboard/outdoor-supply?success=1&message=${encodeURIComponent(modalMessage)}`);
    };
    const handleCreateSaleSuccessModalClose = ()=>{
        setShowCreateSaleSuccessModal(false);
    };
    if (isLoadingSupply) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-[420px] items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 shadow-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 text-slate-600",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                        className: "h-5 w-5 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                        lineNumber: 598,
                        columnNumber: 11
                    }, this),
                    "Loading outdoor supply..."
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                lineNumber: 597,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
            lineNumber: 596,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-7xl space-y-5 pb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/AdminDashboard/outdoor-supply",
                                    className: "mb-2 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                            lineNumber: 614,
                                            columnNumber: 13
                                        }, this),
                                        "Back to Outdoor Supply"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                    lineNumber: 610,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-slate-900",
                                    children: isEditMode ? "Edit Outdoor Supply" : "Add New Outdoor Supply"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                    lineNumber: 617,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm text-slate-500",
                                    children: isEditMode ? "Update the saved outdoor supply bill and its item details." : "Add item rows like purchase entry and save the full outdoor supply bill."
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                    lineNumber: 620,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                            lineNumber: 609,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                        lineNumber: 608,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid gap-4 md:grid-cols-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-slate-700",
                                                        children: "Outdoor Supplier *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                        lineNumber: 632,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: supplierId,
                                                        onChange: (e)=>{
                                                            setSupplierId(e.target.value);
                                                            setErrors((prev)=>({
                                                                    ...prev,
                                                                    supplierId: ""
                                                                }));
                                                        },
                                                        className: "h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none transition focus:border-blue-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Select supplier"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                lineNumber: 641,
                                                                columnNumber: 17
                                                            }, this),
                                                            suppliers.map((supplier)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: supplier.id,
                                                                    children: supplier.supplierName
                                                                }, supplier.id, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 643,
                                                                    columnNumber: 19
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                        lineNumber: 633,
                                                        columnNumber: 15
                                                    }, this),
                                                    errors.supplierId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-rose-600",
                                                        children: errors.supplierId
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                        lineNumber: 648,
                                                        columnNumber: 36
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                lineNumber: 631,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-slate-700",
                                                        children: "Supply Date *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                        lineNumber: 652,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: supplyDate,
                                                        onChange: (e)=>{
                                                            setSupplyDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$formatting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeDateInputDDMMYYYY"])(e.target.value));
                                                            setErrors((prev)=>({
                                                                    ...prev,
                                                                    supplyDate: ""
                                                                }));
                                                        },
                                                        maxLength: 10,
                                                        placeholder: "dd/mm/yyyy",
                                                        className: "h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none transition focus:border-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                        lineNumber: 653,
                                                        columnNumber: 15
                                                    }, this),
                                                    errors.supplyDate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-rose-600",
                                                        children: errors.supplyDate
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                        lineNumber: 663,
                                                        columnNumber: 36
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                lineNumber: 651,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-slate-700",
                                                        children: "Invoice Number *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                        lineNumber: 667,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        value: invoiceNumber,
                                                        onChange: (e)=>{
                                                            setInvoiceNumber(e.target.value);
                                                            setErrors((prev)=>({
                                                                    ...prev,
                                                                    invoiceNumber: ""
                                                                }));
                                                        },
                                                        placeholder: "Enter invoice number",
                                                        className: "h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none transition focus:border-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                        lineNumber: 668,
                                                        columnNumber: 15
                                                    }, this),
                                                    errors.invoiceNumber ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-rose-600",
                                                        children: errors.invoiceNumber
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                        lineNumber: 677,
                                                        columnNumber: 39
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                lineNumber: 666,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                        lineNumber: 630,
                                        columnNumber: 11
                                    }, this),
                                    selectedSupplier ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3 text-sm text-sky-700",
                                        children: [
                                            "Route Name: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: selectedSupplier.routeName || "-"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                lineNumber: 683,
                                                columnNumber: 27
                                            }, this),
                                            "  ",
                                            " | Gari No.: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: selectedSupplier.gariNo || "-"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                lineNumber: 684,
                                                columnNumber: 34
                                            }, this),
                                            "  ",
                                            " | Monthly Pay: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: formatCurrency(selectedSupplier.monthlyPay)
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                lineNumber: 685,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                        lineNumber: 682,
                                        columnNumber: 13
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                lineNumber: 629,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-semibold text-slate-900",
                                                    children: "Outdoor Supply Items"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                    lineNumber: 693,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-500",
                                                    children: "Sale Quantity is auto calculated as Received Quantity minus Returned Quantity."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                    lineNumber: 694,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                            lineNumber: 692,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                        lineNumber: 691,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-2xl border border-slate-200 bg-slate-50 p-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-2 md:grid-cols-2 xl:grid-cols-[1.9fr_1.2fr_0.85fr_1fr_0.85fr_0.85fr_1fr_auto] xl:items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block min-h-[2rem] text-[11px] font-semibold uppercase leading-4 tracking-wide text-slate-500",
                                                                    children: "Product Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 705,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    list: `outdoor-product-${item.id}`,
                                                                    value: item.searchText || item.productName,
                                                                    onChange: (e)=>handleProductSearchChange(item.id, e.target.value),
                                                                    placeholder: "Select product",
                                                                    className: "h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-blue-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 706,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                                                    id: `outdoor-product-${item.id}`,
                                                                    children: productsList.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: product.name
                                                                        }, product.id || product.name, false, {
                                                                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                            lineNumber: 715,
                                                                            columnNumber: 25
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 713,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors[`${item.id}-productName`] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-rose-600",
                                                                    children: errors[`${item.id}-productName`]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 718,
                                                                    columnNumber: 57
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                            lineNumber: 704,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block min-h-[2rem] text-[11px] font-semibold uppercase leading-4 tracking-wide text-slate-500",
                                                                    children: "Manufacturer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 722,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: item.manufacturer,
                                                                    onChange: (e)=>handleItemChange(item.id, "manufacturer", e.target.value),
                                                                    placeholder: "Manufacturer",
                                                                    className: "h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-blue-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 723,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors[`${item.id}-manufacturer`] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-rose-600",
                                                                    children: errors[`${item.id}-manufacturer`]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 729,
                                                                    columnNumber: 58
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                            lineNumber: 721,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block min-h-[2rem] text-[11px] font-semibold uppercase leading-4 tracking-wide text-slate-500",
                                                                    children: "Received Qty"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 733,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    value: item.receivedQuantity,
                                                                    onChange: (e)=>handleItemChange(item.id, "receivedQuantity", e.target.value),
                                                                    placeholder: "0",
                                                                    className: "h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-blue-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 734,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors[`${item.id}-receivedQuantity`] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-rose-600",
                                                                    children: errors[`${item.id}-receivedQuantity`]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 742,
                                                                    columnNumber: 62
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                            lineNumber: 732,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block min-h-[2rem] text-[11px] font-semibold uppercase leading-4 tracking-wide text-slate-500",
                                                                    children: "Whole Sale Price"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 746,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    step: "0.01",
                                                                    value: item.price,
                                                                    onChange: (e)=>handleItemChange(item.id, "price", e.target.value),
                                                                    placeholder: "0.00",
                                                                    className: "h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-blue-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 747,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors[`${item.id}-price`] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-rose-600",
                                                                    children: errors[`${item.id}-price`]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 756,
                                                                    columnNumber: 51
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                            lineNumber: 745,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block min-h-[2rem] text-[11px] font-semibold uppercase leading-4 tracking-wide text-slate-500",
                                                                    children: "Returned Qty"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 760,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    min: "0",
                                                                    value: item.returnedQuantity,
                                                                    onChange: (e)=>handleItemChange(item.id, "returnedQuantity", e.target.value),
                                                                    placeholder: "0",
                                                                    className: "h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-blue-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 761,
                                                                    columnNumber: 21
                                                                }, this),
                                                                errors[`${item.id}-returnedQuantity`] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-rose-600",
                                                                    children: errors[`${item.id}-returnedQuantity`]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 769,
                                                                    columnNumber: 62
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                            lineNumber: 759,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block min-h-[2rem] text-[11px] font-semibold uppercase leading-4 tracking-wide text-slate-500",
                                                                    children: "Sale Quantity"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 773,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex h-10 items-center rounded-xl border border-slate-200 bg-slate-100 px-3 text-sm font-semibold text-slate-700",
                                                                    children: getSaleQuantity(item)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 774,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                            lineNumber: 772,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block min-h-[2rem] text-[11px] font-semibold uppercase leading-4 tracking-wide text-slate-500",
                                                                    children: "Total Price"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 780,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex h-10 items-center rounded-xl border border-slate-200 bg-slate-100 px-3 text-sm font-semibold text-slate-900",
                                                                    children: formatCurrency(getTotalPrice(item))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 781,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                            lineNumber: 779,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block min-h-[2rem] text-[11px] font-semibold uppercase leading-4 tracking-wide text-slate-500",
                                                                    children: "Action"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 787,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-wrap items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>handleRemoveItem(item.id),
                                                                            className: "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-rose-200 bg-white text-rose-600 transition hover:bg-rose-50",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                className: "h-4 w-4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                                lineNumber: 794,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                            lineNumber: 789,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        getSaleQuantity(item) >= 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "button",
                                                                            onClick: ()=>handleCreateSale(item),
                                                                            disabled: processingSaleItemId === item.id,
                                                                            className: `inline-flex h-10 items-center gap-2 rounded-xl bg-blue-600 px-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockedButtonClass"]}`,
                                                                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockedButtonProps"])(canSubmit),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                                                    className: "h-4 w-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                                    lineNumber: 804,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                processingSaleItemId === item.id ? "Creating..." : "Create Sale"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                            lineNumber: 797,
                                                                            columnNumber: 25
                                                                        }, this) : null
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                    lineNumber: 788,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                            lineNumber: 786,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                    lineNumber: 703,
                                                    columnNumber: 17
                                                }, this)
                                            }, item.id, false, {
                                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                lineNumber: 702,
                                                columnNumber: 15
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                        lineNumber: 700,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex justify-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleAddItem,
                                            className: "inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                    lineNumber: 821,
                                                    columnNumber: 15
                                                }, this),
                                                "Add Item"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                            lineNumber: 816,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                        lineNumber: 815,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                lineNumber: 690,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold uppercase tracking-wide text-slate-500",
                                                        children: "Calculated Total Bill"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                        lineNumber: 830,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-3xl font-bold text-slate-900",
                                                        children: formatCurrency(totalBill)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                        lineNumber: 831,
                                                        columnNumber: 15
                                                    }, this),
                                                    errors.totalBill ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-xs text-rose-600",
                                                        children: errors.totalBill
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                        lineNumber: 832,
                                                        columnNumber: 35
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                lineNumber: 829,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-3 sm:flex-row",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/AdminDashboard/outdoor-supply",
                                                        className: "inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                        lineNumber: 836,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        disabled: isSubmitting,
                                                        className: `inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockedButtonClass"]}`,
                                                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockedButtonProps"])(canSubmit),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                lineNumber: 848,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                                lineNumber: 849,
                                                                columnNumber: 17
                                                            }, this),
                                                            isSubmitting ? isEditMode ? "Updating..." : "Saving..." : isEditMode ? "Update Outdoor Supply" : "Save Outdoor Supply"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                        lineNumber: 842,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                lineNumber: 835,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                        lineNumber: 828,
                                        columnNumber: 11
                                    }, this),
                                    message.text ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `mt-4 rounded-2xl border px-4 py-3 text-sm ${message.type === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-rose-200 bg-rose-50 text-rose-700"}`,
                                        children: message.text
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                        lineNumber: 858,
                                        columnNumber: 13
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                lineNumber: 827,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                        lineNumber: 628,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                lineNumber: 607,
                columnNumber: 5
            }, this),
            showSuccessModal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                        lineNumber: 876,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                    lineNumber: 875,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-base font-semibold text-slate-900",
                                            children: "Success"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                            lineNumber: 879,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-slate-600",
                                            children: modalMessage
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                            lineNumber: 880,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                    lineNumber: 878,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                            lineNumber: 874,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleSuccessModalClose,
                                className: "rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700",
                                children: "OK"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                lineNumber: 884,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                            lineNumber: 883,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                    lineNumber: 873,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                lineNumber: 872,
                columnNumber: 7
            }, this) : null,
            showCreateSaleSuccessModal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                        lineNumber: 900,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                    lineNumber: 899,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-base font-semibold text-slate-900",
                                            children: "Success"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                            lineNumber: 903,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-slate-600",
                                            children: "Create sale successfully."
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                            lineNumber: 904,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                    lineNumber: 902,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                            lineNumber: 898,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleCreateSaleSuccessModalClose,
                                className: "rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700",
                                children: "OK"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                lineNumber: 908,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                            lineNumber: 907,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                    lineNumber: 897,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                lineNumber: 896,
                columnNumber: 7
            }, this) : null,
            showErrorModal ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                        lineNumber: 924,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                    lineNumber: 923,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-base font-semibold text-slate-900",
                                                        children: "Something went wrong"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                        lineNumber: 929,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm text-slate-600",
                                                        children: modalMessage
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                        lineNumber: 930,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                lineNumber: 928,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setShowErrorModal(false),
                                                className: "text-slate-400 transition hover:text-slate-600",
                                                "aria-label": "Close modal",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                    lineNumber: 938,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                                lineNumber: 932,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                        lineNumber: 927,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                    lineNumber: 926,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                            lineNumber: 922,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowErrorModal(false),
                                className: "rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                                lineNumber: 944,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                            lineNumber: 943,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                    lineNumber: 921,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx",
                lineNumber: 920,
                columnNumber: 7
            }, this) : null
        ]
    }, void 0, true);
}
_s(NewOutdoorSupplyPage, "OZfYlqRJYAb7xy2tb6Ssh1+7yoI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$usePermissions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePermissions"]
    ];
});
_c = NewOutdoorSupplyPage;
var _c;
__turbopack_context__.k.register(_c, "NewOutdoorSupplyPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/AdminDashboard/outdoor-supply/[id]/edit/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditOutdoorSupplyRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$outdoorSupply$2f$NewOutdoorSupplyPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/outdoorSupply/NewOutdoorSupplyPage.jsx [app-client] (ecmascript)");
"use client";
;
;
function EditOutdoorSupplyRoute() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$outdoorSupply$2f$NewOutdoorSupplyPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/AdminDashboard/outdoor-supply/[id]/edit/page.jsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = EditOutdoorSupplyRoute;
var _c;
__turbopack_context__.k.register(_c, "EditOutdoorSupplyRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_AdminDashboard_ba23ffd4._.js.map