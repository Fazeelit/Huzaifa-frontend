(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[next]/internal/font/google/noto_nastaliq_urdu_e38ad957.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "noto_nastaliq_urdu_e38ad957-module__1Ut4wW__className",
});
}),
"[next]/internal/font/google/noto_nastaliq_urdu_e38ad957.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_e38ad957$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/noto_nastaliq_urdu_e38ad957.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_e38ad957$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Noto Nastaliq Urdu', 'Noto Nastaliq Urdu Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_e38ad957$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_e38ad957$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/app/AdminDashboard/components/POS/ProductsCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_e38ad957$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/noto_nastaliq_urdu_e38ad957.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const urduNameStyle = {
    fontFamily: `"Urdu Noori Nastaliq", "Noori Nastaliq", "Jameel Noori Nastaleeq", ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_e38ad957$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].style.fontFamily}, serif`
};
const getActualStock = (product)=>{
    const directActualStock = Number(product?.actualStock);
    if (Number.isFinite(directActualStock)) return directActualStock;
    return Number(product?.stock) || 0;
};
const getPackSize = (item)=>{
    const packSize = Number(item?.packSize);
    return Number.isFinite(packSize) && packSize > 0 ? packSize : 1;
};
const getQuantityMode = (item)=>item?.quantityMode === "pack" ? "pack" : "unit";
const getSelectedSalePrice = (item, quantityMode = getQuantityMode(item))=>{
    const customUnitSalePrice = Number(item?.customUnitSalePrice);
    const packSize = getPackSize(item);
    if (Number.isFinite(customUnitSalePrice) && customUnitSalePrice >= 0) {
        return quantityMode === "pack" ? Number((customUnitSalePrice * packSize).toFixed(2)) : Number(customUnitSalePrice.toFixed(2));
    }
    const wholeSalePrice = Number(item?.wholeSalePrice ?? item?.wholesalePrice ?? 0) || 0;
    const retailSalePrice = Number(item?.retailSalePrice ?? item?.salePrice ?? item?.price ?? item?.purchasePrice ?? item?.cost ?? 0) || 0;
    const maxAllowedDiscount = Number(item?.maxAllowedDiscount ?? 0) || 0;
    const discountedRetailSalePrice = Number((retailSalePrice - retailSalePrice * maxAllowedDiscount / 100).toFixed(2));
    if (quantityMode === "pack") {
        return wholeSalePrice || discountedRetailSalePrice;
    }
    return Number((discountedRetailSalePrice / packSize).toFixed(2));
};
const getDisplayQty = (item)=>{
    const quantity = Number(item?.displayQty ?? item?.qty ?? 0);
    return Number.isFinite(quantity) && quantity > 0 ? quantity : 1;
};
const toTitleCase = (value)=>String(value || "").toLowerCase().replace(/\b\w/g, (char)=>char.toUpperCase());
function ProductsCard({ products = [], cart = [], addToCart, increaseQty, decreaseQty, updateQty, updateQuantityMode, updateLineAmount, updateFreeQty, removeItem }) {
    _s();
    const [selectedProductKey, setSelectedProductKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showProductDropdown, setShowProductDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [highlightedProductIndex, setHighlightedProductIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [amountDrafts, setAmountDrafts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const productSearchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const editingAmountKeyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const processedProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductsCard.useMemo[processedProducts]": ()=>{
            const map = new Map();
            products.forEach({
                "ProductsCard.useMemo[processedProducts]": (product)=>{
                    const nameKey = product.name?.trim().toLowerCase();
                    if (!nameKey) return;
                    if (map.has(nameKey)) {
                        const existing = map.get(nameKey);
                        map.set(nameKey, {
                            ...existing,
                            stock: existing.stock + (Number(product.stock) || 0),
                            availableTabs: existing.availableTabs + getActualStock(product)
                        });
                        return;
                    }
                    map.set(nameKey, {
                        ...product,
                        stock: Number(product.stock) || 0,
                        availableTabs: getActualStock(product),
                        _uniqueKey: nameKey
                    });
                }
            }["ProductsCard.useMemo[processedProducts]"]);
            return Array.from(map.values());
        }
    }["ProductsCard.useMemo[processedProducts]"], [
        products
    ]);
    const unitSalesByProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductsCard.useMemo[unitSalesByProduct]": ()=>{
            const salesMap = new Map();
            cart.forEach({
                "ProductsCard.useMemo[unitSalesByProduct]": (item)=>{
                    const productKey = String(item?._id || item?.id || item?.name || "").trim().toLowerCase();
                    if (!productKey) return;
                    const packSize = getPackSize(item);
                    const freeQty = Math.max(Math.floor(Number(item?.freeQty) || 0), 0);
                    const freeUnits = getQuantityMode(item) === "pack" ? freeQty * packSize : freeQty;
                    salesMap.set(productKey, (salesMap.get(productKey) || 0) + (Number(item?.qty) || 0) + freeUnits);
                }
            }["ProductsCard.useMemo[unitSalesByProduct]"]);
            return salesMap;
        }
    }["ProductsCard.useMemo[unitSalesByProduct]"], [
        cart
    ]);
    const filteredProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProductsCard.useMemo[filteredProducts]": ()=>{
            const normalizedSearch = searchTerm.trim().toLowerCase();
            return processedProducts.filter({
                "ProductsCard.useMemo[filteredProducts]": (product)=>{
                    if ((Number(product.stock) || 0) < 1) return false;
                    if (!normalizedSearch) return true;
                    return product.name?.toLowerCase().includes(normalizedSearch);
                }
            }["ProductsCard.useMemo[filteredProducts]"]);
        }
    }["ProductsCard.useMemo[filteredProducts]"], [
        processedProducts,
        searchTerm
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsCard.useEffect": ()=>{
            if (!showProductDropdown || filteredProducts.length === 0) {
                setHighlightedProductIndex(-1);
                return;
            }
            setHighlightedProductIndex(0);
        }
    }["ProductsCard.useEffect"], [
        showProductDropdown,
        filteredProducts
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsCard.useEffect": ()=>{
            const handleDocumentClick = {
                "ProductsCard.useEffect.handleDocumentClick": (event)=>{
                    if (!productSearchRef.current?.contains(event.target)) {
                        setShowProductDropdown(false);
                        setHighlightedProductIndex(-1);
                    }
                }
            }["ProductsCard.useEffect.handleDocumentClick"];
            document.addEventListener("mousedown", handleDocumentClick);
            return ({
                "ProductsCard.useEffect": ()=>document.removeEventListener("mousedown", handleDocumentClick)
            })["ProductsCard.useEffect"];
        }
    }["ProductsCard.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsCard.useEffect": ()=>{
            setAmountDrafts({
                "ProductsCard.useEffect": (prev)=>{
                    const next = {
                        ...prev
                    };
                    cart.forEach({
                        "ProductsCard.useEffect": (item)=>{
                            if (editingAmountKeyRef.current === item.key) return;
                            const quantityMode = getQuantityMode(item);
                            const salePrice = getSelectedSalePrice(item, quantityMode);
                            const displayQty = getDisplayQty(item);
                            next[item.key] = String(Number((salePrice * displayQty).toFixed(2)));
                        }
                    }["ProductsCard.useEffect"]);
                    Object.keys(next).forEach({
                        "ProductsCard.useEffect": (key)=>{
                            if (!cart.some({
                                "ProductsCard.useEffect": (item)=>item.key === key
                            }["ProductsCard.useEffect"])) delete next[key];
                        }
                    }["ProductsCard.useEffect"]);
                    return next;
                }
            }["ProductsCard.useEffect"]);
        }
    }["ProductsCard.useEffect"], [
        cart
    ]);
    const handleAdd = async (product)=>{
        try {
            if (!product?._id) return;
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])(`/products/getProductById/${product._id}`, {
                method: "GET"
            });
            const fullProduct = response?.data || response;
            if (!fullProduct) throw new Error("Product not found");
            addToCart({
                ...fullProduct,
                availableTabs: getActualStock(fullProduct),
                displayStock: Number(fullProduct.stock) || 0,
                stock: getActualStock(fullProduct),
                salePrice: product.salePrice || product.price || product.purchasePrice || product.cost
            });
            setSelectedProductKey("");
            setSearchTerm("");
            setShowProductDropdown(false);
        } catch (error) {
            console.error(error);
            alert("Failed to add product");
        }
    };
    const handleProductSearchKeyDown = (event)=>{
        if (!showProductDropdown || filteredProducts.length === 0) return;
        if (event.key === "ArrowDown") {
            event.preventDefault();
            setHighlightedProductIndex((prev)=>(prev + 1) % filteredProducts.length);
            return;
        }
        if (event.key === "ArrowUp") {
            event.preventDefault();
            setHighlightedProductIndex((prev)=>{
                if (prev < 0) return filteredProducts.length - 1;
                return prev === 0 ? filteredProducts.length - 1 : prev - 1;
            });
            return;
        }
        if (event.key === "Enter") {
            event.preventDefault();
            const highlightedProduct = filteredProducts[highlightedProductIndex];
            if (highlightedProduct) {
                setSelectedProductKey(String(highlightedProduct._uniqueKey || highlightedProduct._id));
                handleAdd(highlightedProduct);
            }
            return;
        }
        if (event.key === "Escape") {
            setShowProductDropdown(false);
            setHighlightedProductIndex(-1);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-white/70 bg-white/80 p-3 shadow-lg shadow-black/5 sm:p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "mb-1 block text-sm font-medium text-slate-700",
                        children: "Product Search"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: productSearchRef,
                        className: "relative z-[150] min-w-0 overflow-visible",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "absolute left-3 top-3 h-4 w-4 text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: searchTerm,
                                onChange: (event)=>{
                                    const nextValue = event.target.value;
                                    setSearchTerm(nextValue);
                                    setSelectedProductKey("");
                                    setShowProductDropdown(true);
                                },
                                onFocus: ()=>setShowProductDropdown(true),
                                onKeyDown: handleProductSearchKeyDown,
                                placeholder: "Select product from dropdown list",
                                className: "w-full min-w-0 rounded-md border border-slate-300 bg-white py-2 pl-9 pr-10 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "pointer-events-none absolute right-3 top-3 h-4 w-4 text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            showProductDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-0 right-0 top-full z-50 mt-2 max-h-72 overflow-y-auto rounded-md border border-slate-200 bg-white shadow-lg",
                                children: filteredProducts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-3 py-2 text-sm text-slate-500",
                                    children: "No product found"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                    lineNumber: 263,
                                    columnNumber: 17
                                }, this) : filteredProducts.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setSelectedProductKey(String(product._uniqueKey || product._id));
                                            handleAdd(product);
                                        },
                                        onMouseEnter: ()=>setHighlightedProductIndex(index),
                                        className: `w-full border-b border-slate-100 px-3 pt-0 pb-0 text-left text-sm last:border-b-0 ${highlightedProductIndex === index ? "bg-blue-600 text-white" : "text-slate-900 hover:bg-slate-50"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex min-h-10 items-center justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "min-w-0 flex-1 truncate text-sm font-medium leading-7",
                                                    style: urduNameStyle,
                                                    children: toTitleCase(product.name)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                    lineNumber: 281,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `shrink-0 text-xs font-semibold ${highlightedProductIndex === index ? "text-white/90" : "text-blue-600"}`,
                                                    children: [
                                                        "Rs.",
                                                        Number(product.salePrice || product.price || product.purchasePrice || product.cost || 0).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                    lineNumber: 282,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                            lineNumber: 280,
                                            columnNumber: 21
                                        }, this)
                                    }, product._uniqueKey || product._id, false, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                        lineNumber: 266,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden rounded-xl border border-white/70 bg-white/80 shadow-lg shadow-black/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-blue-600 to-emerald-500 p-3 text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: "Product Sale Table"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                        lineNumber: 299,
                        columnNumber: 12
                    }, this),
                    cart.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 text-center text-slate-500 sm:p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                className: "mx-auto mb-3 h-12 w-12 opacity-30"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                lineNumber: 308,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No product selected"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                lineNumber: 309,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm",
                                children: "Use the dropdown list above to add items"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                        lineNumber: 307,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto overscroll-x-contain",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full min-w-[760px] divide-y divide-slate-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-slate-50/90",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600",
                                                children: "Product Name"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                lineNumber: 317,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600",
                                                children: "Menufacture"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                lineNumber: 318,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600",
                                                children: "Sale Type"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                lineNumber: 319,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600",
                                                children: "Quantity"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                lineNumber: 320,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-2 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600",
                                                children: "Amount"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                lineNumber: 321,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-1.5 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600",
                                                children: "Retail Price"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                lineNumber: 322,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-1.5 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600",
                                                children: "Total Price"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                lineNumber: 323,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "pl-1.5 pr-1 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600",
                                                children: "Delete"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                lineNumber: 324,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                        lineNumber: 316,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                    lineNumber: 315,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-slate-200",
                                    children: cart.map((item)=>{
                                        const quantity = Number(item.qty) || 0;
                                        const displayQty = getDisplayQty(item);
                                        const quantityMode = getQuantityMode(item);
                                        const salePrice = getSelectedSalePrice(item, quantityMode);
                                        const packSize = getPackSize(item);
                                        const unitPurchasePrice = (Number(item?.purchasePrice || item?.cost || 0) || 0) / packSize;
                                        const totalPrice = salePrice * displayQty;
                                        const totalPurchasePrice = unitPurchasePrice * (quantityMode === "pack" ? packSize * displayQty : displayQty);
                                        const productKey = String(item?._id || item?.id || item?.name || "").trim().toLowerCase();
                                        const totalStock = Number(item.displayStock ?? item.stock) || 0;
                                        const totalUnitSales = unitSalesByProduct.get(productKey) || 0;
                                        const availableStockInUnit = Math.max(totalStock * packSize - totalUnitSales, 0);
                                        const remainingDisplayStock = quantityMode === "pack" ? Math.max(totalStock - displayQty, 0) : totalStock;
                                        const maxDisplayQty = quantityMode === "pack" ? Math.floor((Number(item.stock) || 0) / packSize) : Math.floor(Number(item.stock) || 0);
                                        const canSellPack = (Number(item.stock) || 0) >= packSize;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "align-top",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-4 py-2.5 sm:px-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "break-words text-xs font-semibold text-slate-900",
                                                            style: urduNameStyle,
                                                            children: toTitleCase(item.name)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                            lineNumber: 357,
                                                            columnNumber: 26
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-xs text-slate-500",
                                                            children: [
                                                                "Stock: ",
                                                                remainingDisplayStock.toLocaleString(),
                                                                " | Units: ",
                                                                availableStockInUnit.toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                            lineNumber: 360,
                                                            columnNumber: 25
                                                        }, this),
                                                        Number.isFinite(Number(item.stock)) && quantity >= Number(item.stock) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-[11px] text-red-600",
                                                            children: [
                                                                "Only ",
                                                                Math.floor(Number(item.stock) || 0),
                                                                " units are available in stock."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                            lineNumber: 364,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                    lineNumber: 356,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2 py-2.5 text-xs text-black sm:px-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "break-words",
                                                        children: item.manufacturer || "-"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                        lineNumber: 370,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                    lineNumber: 369,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1.5 py-2.5 sm:px-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex min-w-[60px] items-center gap-1 text-xs",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: quantityMode,
                                                            onChange: (event)=>updateQuantityMode?.(item.key, event.target.value),
                                                            className: "w-full rounded-md border border-slate-300 bg-white px-2 py-1 text-xs font-medium text-slate-700",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "unit",
                                                                    children: "Unit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                                    lineNumber: 379,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "pack",
                                                                    disabled: !canSellPack,
                                                                    children: "Pack"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                                    lineNumber: 380,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                            lineNumber: 374,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                        lineNumber: 373,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                    lineNumber: 372,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1 py-2.5 sm:px-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex min-w-[90px] items-center gap-0.5 rounded-lg border border-slate-200 px-1 py-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>decreaseQty?.(item.key, 1),
                                                                    className: "flex h-6 w-6 items-center justify-center rounded border border-slate-300 text-slate-700 hover:bg-slate-100",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                                                        className: "h-3 w-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                                        lineNumber: 393,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                                    lineNumber: 388,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    min: "1",
                                                                    max: maxDisplayQty || undefined,
                                                                    value: displayQty,
                                                                    onChange: (event)=>{
                                                                        const nextValue = event.target.value;
                                                                        if (nextValue === "") return;
                                                                        const normalizedValue = Number(nextValue);
                                                                        if (!Number.isFinite(normalizedValue)) return;
                                                                        updateQty?.(item.key, normalizedValue);
                                                                    },
                                                                    className: "w-10 rounded border border-transparent bg-transparent text-center text-sm font-semibold text-slate-900 outline-none focus:border-blue-300 sm:w-12"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                                    lineNumber: 395,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>increaseQty?.(item.key, 1),
                                                                    disabled: maxDisplayQty > 0 ? displayQty >= maxDisplayQty : true,
                                                                    className: "flex h-6 w-6 items-center justify-center rounded border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "h-3 w-3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                                        lineNumber: 415,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                                    lineNumber: 409,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                            lineNumber: 387,
                                                            columnNumber: 26
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1.5 flex items-center gap-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "shrink-0 font-bold text-[12px] font-bold text-black",
                                                                    children: "Free"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                                    lineNumber: 419,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    placeholder: "0",
                                                                    inputMode: "numeric",
                                                                    value: Number(item.freeQty) > 0 ? String(item.freeQty) : "",
                                                                    onChange: (event)=>updateFreeQty?.(item.key, String(event.target.value || "").replace(/[^\d]/g, "")),
                                                                    className: "w-10 rounded-md border border-slate-300 px-1 py-1 font-bold text-[12px] text-black text-center outline-none focus:border-blue-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                                    lineNumber: 420,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                            lineNumber: 418,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                    lineNumber: 386,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2 py-2.5 sm:px-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        inputMode: "decimal",
                                                        value: amountDrafts[item.key] ?? String(Number(totalPrice.toFixed(2))),
                                                        onFocus: ()=>{
                                                            editingAmountKeyRef.current = item.key;
                                                        },
                                                        onChange: (event)=>{
                                                            const nextValue = String(event.target.value || "").replace(/[^\d.]/g, "");
                                                            setAmountDrafts((prev)=>({
                                                                    ...prev,
                                                                    [item.key]: nextValue
                                                                }));
                                                            updateLineAmount?.(item.key, nextValue);
                                                        },
                                                        onBlur: ()=>{
                                                            editingAmountKeyRef.current = null;
                                                            const nextValue = amountDrafts[item.key] ?? "";
                                                            const numericAmount = Number(nextValue);
                                                            if (!nextValue.trim() || Number.isFinite(numericAmount) && numericAmount >= 0) {
                                                                updateLineAmount?.(item.key, nextValue);
                                                                return;
                                                            }
                                                            setAmountDrafts((prev)=>({
                                                                    ...prev,
                                                                    [item.key]: String(Number(totalPrice.toFixed(2)))
                                                                }));
                                                        },
                                                        className: "w-20 rounded-md border border-slate-300 bg-white px-2 py-2 text-center text-sm font-medium text-slate-900 outline-none focus:border-blue-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                        lineNumber: 434,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                    lineNumber: 433,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1.5 py-2.5 text-sm font-medium text-slate-900 sm:px-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "break-words",
                                                            children: [
                                                                "PKR ",
                                                                salePrice.toLocaleString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                            lineNumber: 465,
                                                            columnNumber: 26
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 break-words text-xs font-medium text-slate-500",
                                                            children: [
                                                                "P.Prince: ",
                                                                unitPurchasePrice.toLocaleString(undefined, {
                                                                    minimumFractionDigits: 2,
                                                                    maximumFractionDigits: 2
                                                                })
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                            lineNumber: 466,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                    lineNumber: 464,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-1.5 py-2.5 text-sm font-semibold text-blue-600 sm:px-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "break-words",
                                                        children: [
                                                            "PKR ",
                                                            totalPrice.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                        lineNumber: 471,
                                                        columnNumber: 26
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                    lineNumber: 470,
                                                    columnNumber: 24
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "pl-1.5 pr-1 py-2.5 sm:pl-2 sm:pr-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>removeItem?.(item.key),
                                                        className: "flex h-8 w-8 items-center justify-center rounded-lg border border-rose-200 text-rose-600 hover:bg-rose-50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                            lineNumber: 479,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                        lineNumber: 474,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                                    lineNumber: 473,
                                                    columnNumber: 24
                                                }, this)
                                            ]
                                        }, item.key || item._id || item.id, true, {
                                            fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                            lineNumber: 355,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                            lineNumber: 314,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                        lineNumber: 313,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
                lineNumber: 298,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminDashboard/components/POS/ProductsCard.jsx",
        lineNumber: 239,
        columnNumber: 5
    }, this);
}
_s(ProductsCard, "cxvAr6XUKqsl1Uqg1IKyyhY/3iY=");
_c = ProductsCard;
var _c;
__turbopack_context__.k.register(_c, "ProductsCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/internal/font/google/noto_nastaliq_urdu_f90299ea.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "noto_nastaliq_urdu_f90299ea-module__rnatla__className",
});
}),
"[next]/internal/font/google/noto_nastaliq_urdu_f90299ea.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_f90299ea$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/noto_nastaliq_urdu_f90299ea.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_f90299ea$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Noto Nastaliq Urdu', 'Noto Nastaliq Urdu Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_f90299ea$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_f90299ea$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
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
"[project]/app/AdminDashboard/components/POS/CartCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_f90299ea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/noto_nastaliq_urdu_f90299ea.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$footprints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Footprints$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/footprints.js [app-client] (ecmascript) <export default as Footprints>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$uomConverter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/utils/uomConverter.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const getCustomerType = (customer)=>{
    const type = String(customer?.type || customer?.customerType || "").trim().toLowerCase();
    if (type) return type === "walk-in" ? "walk-in" : type === "vip" ? "VIP" : "registered";
    return Array.isArray(customer?.tags) && customer.tags.some((tag)=>String(tag || "").trim().toLowerCase() === "vip") ? "VIP" : "registered";
};
const normalizeName = (value = "")=>String(value).toLowerCase().normalize("NFKC").replace(/\s+/g, "").replace(/[^\p{L}\p{N}]/gu, "");
const getActualStock = (product)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$uomConverter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActualStockValue"])(product);
const getPackSize = (item)=>{
    const packSize = Number(item?.packSize);
    return Number.isFinite(packSize) && packSize > 0 ? packSize : 1;
};
const getUnitSalePrice = (item)=>{
    const customUnitSalePrice = Number(item?.customUnitSalePrice);
    if (Number.isFinite(customUnitSalePrice) && customUnitSalePrice >= 0) {
        return Number(customUnitSalePrice.toFixed(2));
    }
    const baseSalePrice = Number(item?.salePrice || item?.price || item?.purchasePrice || item?.cost) || 0;
    const maxAllowedDiscount = Number(item?.maxAllowedDiscount ?? 0) || 0;
    const discountedSalePrice = Number((baseSalePrice - baseSalePrice * maxAllowedDiscount / 100).toFixed(2));
    return Number((discountedSalePrice / getPackSize(item)).toFixed(2));
};
const getSelectedSalePrice = (item)=>{
    const quantityMode = item?.quantityMode === "pack" ? "pack" : "unit";
    const customUnitSalePrice = Number(item?.customUnitSalePrice);
    const packSize = getPackSize(item);
    if (Number.isFinite(customUnitSalePrice) && customUnitSalePrice >= 0) {
        return quantityMode === "pack" ? Number((customUnitSalePrice * packSize).toFixed(2)) : Number(customUnitSalePrice.toFixed(2));
    }
    const wholeSalePrice = Number(item?.wholeSalePrice ?? item?.wholesalePrice ?? 0) || 0;
    const retailSalePrice = Number(item?.retailSalePrice ?? item?.salePrice ?? item?.price ?? item?.purchasePrice ?? item?.cost ?? 0) || 0;
    const maxAllowedDiscount = Number(item?.maxAllowedDiscount ?? 0) || 0;
    const discountedRetailSalePrice = Number((retailSalePrice - retailSalePrice * maxAllowedDiscount / 100).toFixed(2));
    if (quantityMode === "pack") {
        return wholeSalePrice || discountedRetailSalePrice;
    }
    return Number((discountedRetailSalePrice / packSize).toFixed(2));
};
const sanitizeNumericInput = (value)=>String(value || "").replace(/[^\d.]/g, "");
const getDisplayUnitPurchasePrice = (item)=>{
    return (Number(item?.purchasePrice || item?.cost || 0) || 0) / getPackSize(item);
};
const getLineTotal = (item)=>{
    const quantity = Number(item?.displayQty ?? item?.qty ?? 0);
    return Number((getSelectedSalePrice(item) * quantity).toFixed(2));
};
const getLinePurchaseTotal = (item)=>{
    const quantity = Number(item?.displayQty ?? 0);
    const quantityMode = item?.quantityMode === "pack" ? "pack" : "unit";
    const units = quantityMode === "pack" ? quantity * getPackSize(item) : quantity;
    return Number((getDisplayUnitPurchasePrice(item) * units).toFixed(2));
};
const getFreeUnits = (item)=>{
    const freeQty = Math.max(Math.floor(Number(item?.freeQty) || 0), 0);
    const quantityMode = item?.quantityMode === "pack" ? "pack" : "unit";
    return quantityMode === "pack" ? freeQty * getPackSize(item) : freeQty;
};
const getChargedUnits = (item)=>Number(item?.qty) || 0;
const toSaleLine = (item)=>{
    const unitSalePrice = getUnitSalePrice(item);
    const unitPurchasePrice = getDisplayUnitPurchasePrice(item);
    const chargedUnits = getChargedUnits(item);
    const freeUnits = getFreeUnits(item);
    return {
        productId: item?._id || item?.id,
        name: typeof item?.name === "string" ? item.name : "",
        quantity: chargedUnits + freeUnits,
        chargedQuantity: chargedUnits,
        chargedDisplayQty: Number(item?.displayQty ?? item?.qty ?? 0) || 0,
        freeQty: Math.max(Math.floor(Number(item?.freeQty) || 0), 0),
        freeQuantity: freeUnits,
        quantityMode: item?.quantityMode === "pack" ? "pack" : "unit",
        purchasePrice: unitPurchasePrice,
        salePrice: unitSalePrice,
        packSize: getPackSize(item)
    };
};
const formatReceipt = (value, digits = 2)=>Number(value || 0).toLocaleString(undefined, {
        minimumFractionDigits: digits,
        maximumFractionDigits: 3
    });
const roundReceiptToWhole = (value)=>{
    const amount = Number(value || 0);
    if (!Number.isFinite(amount)) return 0;
    const sign = amount < 0 ? -1 : 1;
    const [wholePartRaw, decimalPartRaw = ""] = Math.abs(amount).toString().split(".");
    if (!decimalPartRaw) return sign * Number(wholePartRaw || 0);
    const digits = decimalPartRaw.split("").map((digit)=>Number(digit));
    let carry = 0;
    for(let index = digits.length - 1; index >= 0; index -= 1){
        let current = digits[index] + carry;
        carry = 0;
        if (current > 5) {
            carry = 1;
            current = 0;
        }
    }
    return sign * (Number(wholePartRaw || 0) + carry);
};
const formatRoundedReceiptAmount = (value)=>roundReceiptToWhole(value).toLocaleString();
const DEFAULT_WALK_IN_CUSTOMER = {
    id: "walkin-default",
    name: "Walk-in",
    phone: "",
    cnic: "Not Provided",
    address: "Not Provided",
    type: "walk-in",
    totalPurchases: 0,
    totalSpent: 0
};
const URDU_RECEIPT_FONT_STACK = `"Urdu Noori Nastaliq", "Noori Nastaliq", "Jameel Noori Nastaleeq", ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$noto_nastaliq_urdu_f90299ea$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].style.fontFamily}, serif`;
const formatReceiptSequence = (value)=>String(Math.max(Number(value) || 1, 1)).padStart(2, "0");
const toTitleCase = (value = "")=>String(value).toLowerCase().replace(/\b\w/g, (char)=>char.toUpperCase());
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
const buildReceiptHtml = ({ items, subtotal, discount, total, paidAmount, returnAmount, selectedCustomer, invoiceNo, invoiceDisplayNo })=>`
  <html>
    <head>
      <title>Invoice - Huzaifa Autos Feroza</title>
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
        .stars {
          text-align: center;
          font-size: 11px;
          line-height: 1.1;
        }
        .section-copy {
          margin-top: 6px;
          font-size: 13px;
        }
        .section-title {
          font-size: 13px;
          font-weight: 700;
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
      ${(()=>{
        const visibleInvoiceNo = invoiceDisplayNo || invoiceNo;
        const starCount = Math.max(30, String(visibleInvoiceNo || "").length + 39);
        const stars = "*".repeat(starCount);
        return `
          <div class="invoice-container bg-white shadow p-4 mx-auto">
            <div class="bill-header">
              <div class="shop-name">Huzaifa Autos Feroza</div>
              <br>
              <div class="counter-sale">(Counter Sale)</div>
               <div class="counter-sale">Mobile #: 0346-3696038</div>
            </div>

            <div class="bill-meta">Invoice #: ${visibleInvoiceNo}</div>
            <div class="bill-meta">Date: ${formatReceiptDate()}</div>
            

            <div class="section-copy">
              <div class="customer-line">CUSTOMER: ${selectedCustomer?.name || "Walk-in"}</div>
             
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
                  ${items.map((item, idx)=>{
            const qty = Number(item.displayQty ?? item.qty ?? 0);
            const freeQty = Math.max(Math.floor(Number(item.freeQty) || 0), 0);
            const salePrice = getSelectedSalePrice(item);
            const lineTotal = getLineTotal(item);
            const itemLabel = `${toTitleCase(item.name || "-")}${freeQty > 0 ? `<div class="item-subtext">Free: ${freeQty}</div>` : ""}`;
            return `
                        <tr class="product-row" key="${item._id || item.id || idx}">
                          <td class="item-name">${itemLabel}</td>
                          <td>${qty}</td>
                          <td> ${salePrice.toLocaleString()}</td>
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
                        <td colspan="3" class="summary-label">Discount:</td>
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
              <div class="thanks">آپکی تشریف آوری کاشکریہ</div>
              <div class="divider"></div>
              <div class="footer-contact">
                Rehan Software Solution, Mob#: 0345-8019548
              </div>
            </div>
          </div>
          <script>
            window.print();
            window.onafterprint = () => window.close();
          </script>
        `;
    })()}
    </body>
  </html>
`;
function CartCard({ cart, removeItem, increaseQty, decreaseQty }) {
    _s();
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [paidAmount, setPaidAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [qtyDrafts, setQtyDrafts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const editingKeyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedCustomer, setSelectedCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_WALK_IN_CUSTOMER);
    const [showCustomerPopup, setShowCustomerPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customerType, setCustomerType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [registeredCustomers, setRegisteredCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchRegisteredCustomers, setSearchRegisteredCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedRegisteredCustomer, setSelectedRegisteredCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [walkInCustomer, setWalkInCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        phone: "",
        address: ""
    });
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [processing, setProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CartCard.useMemo[items]": ()=>(cart || []).map({
                "CartCard.useMemo[items]": (item)=>({
                        ...item,
                        qty: item.qty || 1,
                        stock: Number(item.stock ?? Infinity)
                    })
            }["CartCard.useMemo[items]"])
    }["CartCard.useMemo[items]"], [
        cart
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartCard.useEffect": ()=>{
            setQtyDrafts({
                "CartCard.useEffect": (prev)=>{
                    const next = {
                        ...prev
                    };
                    items.forEach({
                        "CartCard.useEffect": (item)=>{
                            if (editingKeyRef.current !== item.key) next[item.key] = String(item.qty);
                        }
                    }["CartCard.useEffect"]);
                    Object.keys(next).forEach({
                        "CartCard.useEffect": (key)=>{
                            if (!items.some({
                                "CartCard.useEffect": (item)=>item.key === key
                            }["CartCard.useEffect"])) delete next[key];
                        }
                    }["CartCard.useEffect"]);
                    return next;
                }
            }["CartCard.useEffect"]);
        }
    }["CartCard.useEffect"], [
        items
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartCard.useEffect": ()=>{
            ({
                "CartCard.useEffect": async ()=>{
                    try {
                        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/customers", {
                            method: "GET"
                        });
                        const customers = Array.isArray(response?.customers) ? response.customers : [];
                        setRegisteredCustomers(customers.map({
                            "CartCard.useEffect": (customer, index)=>({
                                    id: customer?._id || customer?.id || `cust-${index}`,
                                    name: customer?.name || "Customer",
                                    phone: customer?.mobile || customer?.phone || "",
                                    cnic: customer?.cnic || "",
                                    email: customer?.email || "",
                                    type: getCustomerType(customer),
                                    totalPurchases: Number(customer?.totalPurchases ?? customer?.orders ?? 0) || 0,
                                    totalSpent: Number(String(customer?.totalSpent ?? 0).replace(/[^\d.]/g, "")) || 0
                                })
                        }["CartCard.useEffect"]));
                    } catch  {
                        setRegisteredCustomers([]);
                    }
                }
            })["CartCard.useEffect"]();
        }
    }["CartCard.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartCard.useEffect": ()=>{
            try {
                const stored = localStorage.getItem("posCartDraft");
                if (!stored) return;
                const parsed = JSON.parse(stored);
                if (parsed?.selectedCustomer) {
                    setSelectedCustomer(parsed.selectedCustomer);
                } else {
                    setSelectedCustomer(DEFAULT_WALK_IN_CUSTOMER);
                }
                if (parsed?.amount !== undefined) setAmount(String(parsed.amount || ""));
                if (parsed?.paidAmount !== undefined) setPaidAmount(String(parsed.paidAmount || ""));
            } catch  {}
        }
    }["CartCard.useEffect"], []);
    const subtotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CartCard.useMemo[subtotal]": ()=>Number(items.reduce({
                "CartCard.useMemo[subtotal]": (sum, item)=>sum + getLineTotal(item)
            }["CartCard.useMemo[subtotal]"], 0).toFixed(2))
    }["CartCard.useMemo[subtotal]"], [
        items
    ]);
    const subtotalPurchasePrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CartCard.useMemo[subtotalPurchasePrice]": ()=>Number(items.reduce({
                "CartCard.useMemo[subtotalPurchasePrice]": (sum, item)=>sum + getLinePurchaseTotal(item)
            }["CartCard.useMemo[subtotalPurchasePrice]"], 0).toFixed(2))
    }["CartCard.useMemo[subtotalPurchasePrice]"], [
        items
    ]);
    const enteredDiscountAmount = amount === "" ? 0 : Number(amount || 0);
    const discount = Math.min(Math.max(Number.isFinite(enteredDiscountAmount) ? enteredDiscountAmount : 0, 0), subtotal);
    const totalAmount = Math.max(Number((subtotal - discount).toFixed(2)), 0);
    const paid = Number(paidAmount || 0);
    const isWalkInCustomer = selectedCustomer?.type === "walk-in";
    const isCreditCustomer = Boolean(selectedCustomer) && !isWalkInCustomer;
    const effectivePaidAmount = isCreditCustomer ? 0 : paid;
    const syncCustomerCreditBill = async ({ customerId, invoiceNo, totalAmount, soldItems })=>{
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])(`/customers/${customerId}`, {
            method: "GET"
        });
        if (!response?.success || !response?.customer) {
            throw new Error(response?.message || "Failed to load customer for bill update");
        }
        const customer = response.customer;
        const existingBills = Array.isArray(customer.bills) ? customer.bills : [];
        const existingTotalPurchases = Number(customer.totalPurchases || 0) || 0;
        const existingTotalSpent = Number(customer.totalSpent || 0) || 0;
        const existingTotalDue = Number(customer.totalDue || 0) || 0;
        const description = soldItems.length === 1 ? `POS Sale - ${soldItems[0]?.name || "Item"}` : `POS Sale - ${soldItems.length} items`;
        const updatedPayload = {
            ...customer,
            totalPurchases: existingTotalPurchases + 1,
            totalSpent: existingTotalSpent + Number(totalAmount || 0),
            totalDue: existingTotalDue + Number(totalAmount || 0),
            lastPurchase: new Date().toISOString(),
            bills: [
                ...existingBills,
                {
                    id: `BILL-${invoiceNo}`,
                    description,
                    amount: ` ${Number(totalAmount || 0).toLocaleString()}`,
                    date: new Date().toISOString().split("T")[0],
                    dueDate: "",
                    notes: `Auto-generated from POS sale ${invoiceNo}`,
                    status: "pending",
                    paidAmount: 0
                }
            ]
        };
        const updateResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])(`/customers/${customerId}`, {
            method: "PUT",
            data: updatedPayload
        });
        if (!updateResponse?.success) {
            throw new Error(updateResponse?.message || "Failed to update customer bill");
        }
    };
    const applyQuantity = (item)=>{
        let qty = Number(qtyDrafts[item.key]);
        if (!Number.isFinite(qty) || qty < 1) qty = 1;
        qty = Math.min(Math.floor(qty), item.stock);
        const delta = qty - item.qty;
        if (delta > 0) increaseQty(item.key, delta);
        if (delta < 0) decreaseQty(item.key, Math.abs(delta));
        setQtyDrafts((prev)=>({
                ...prev,
                [item.key]: String(qty)
            }));
    };
    const filteredCustomers = registeredCustomers.filter((customer)=>{
        const query = searchRegisteredCustomers.trim().toLowerCase();
        return !query || String(customer.name || "").toLowerCase().includes(query) || String(customer.phone || "").includes(searchRegisteredCustomers) || String(customer.cnic || "").includes(searchRegisteredCustomers) || String(customer.email || "").toLowerCase().includes(query);
    });
    const resetPopup = ()=>{
        setShowCustomerPopup(false);
        setCustomerType(null);
        setSearchRegisteredCustomers("");
        setSelectedRegisteredCustomer(null);
        setWalkInCustomer({
            name: "",
            phone: "",
            address: ""
        });
        setFormErrors({});
    };
    const submitWalkIn = ()=>{
        const errors = {};
        if (!walkInCustomer.name.trim()) errors.name = "Name is required";
        if (!walkInCustomer.phone.trim()) {
            errors.phone = "Phone number is required";
        } else if (!/^03\d{2}-\d{7}$/.test(walkInCustomer.phone.trim())) {
            errors.phone = "Phone must be in format 0300-1234567";
        }
        setFormErrors(errors);
        if (Object.keys(errors).length) return;
        setSelectedCustomer({
            ...DEFAULT_WALK_IN_CUSTOMER,
            id: `walkin-${Date.now()}`,
            name: walkInCustomer.name.trim(),
            phone: walkInCustomer.phone.trim(),
            address: walkInCustomer.address.trim() || "Not Provided"
        });
        setPaidAmount("");
        resetPopup();
    };
    const createSaleAndPrintBill = async ()=>{
        if (!items.length) return;
        if (isWalkInCustomer && paid < totalAmount) return alert("Paid amount is less than the total bill.");
        const invoiceNo = `INV-${Math.random().toString(16).slice(2, 8)}`;
        const returnAmount = isWalkInCustomer ? Math.max(paid - totalAmount, 0) : 0;
        const printWindow = window.open("", "_blank", "width=420,height=700");
        if (!printWindow) {
            alert("Popup blocked. Please allow popups to print the bill.");
            return;
        }
        printWindow.document.write("<html><body style='font-family:Courier New,monospace;padding:20px;'>Preparing bill...</body></html>");
        printWindow.document.close();
        try {
            setProcessing(true);
            const latestResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/products", {
                method: "GET"
            });
            const products = latestResponse?.data || latestResponse || [];
            const availableByName = new Map();
            products.forEach((product)=>{
                const key = normalizeName(product?.name || "");
                if (!key) return;
                availableByName.set(key, (availableByName.get(key) || 0) + getActualStock(product));
            });
            const requestedByName = new Map();
            items.forEach((item)=>{
                const key = normalizeName(item?.name || "");
                if (!key) return;
                requestedByName.set(key, (requestedByName.get(key) || 0) + getChargedUnits(item) + getFreeUnits(item));
            });
            const insufficient = items.find((item)=>{
                const key = normalizeName(item?.name || "");
                return key && (requestedByName.get(key) || 0) > (availableByName.get(key) || 0);
            });
            if (insufficient) {
                const key = normalizeName(insufficient?.name || "");
                return alert(`Insufficient stock for ${insufficient.name} (requested ${requestedByName.get(key) || 0}, available ${Math.floor(availableByName.get(key) || 0)})`);
            }
            const saleData = {
                invoiceNo,
                products: items.map(toSaleLine),
                subtotal,
                discount,
                totalAmount,
                paidAmount: effectivePaidAmount,
                returnAmount,
                customerName: String(selectedCustomer?.name || "Walk-in"),
                customerId: selectedCustomer?.id || selectedCustomer?._id || "",
                customerCnic: String(selectedCustomer?.cnic || ""),
                customerPhone: String(selectedCustomer?.phone || ""),
                customerMobile: String(selectedCustomer?.mobile || selectedCustomer?.phone || ""),
                selectedCustomer: selectedCustomer?.id ? {
                    id: selectedCustomer.id || selectedCustomer?._id || "",
                    _id: selectedCustomer?._id || selectedCustomer?.id || "",
                    name: selectedCustomer?.name || "",
                    cnic: selectedCustomer?.cnic || "",
                    phone: selectedCustomer?.phone || "",
                    mobile: selectedCustomer?.mobile || selectedCustomer?.phone || ""
                } : null,
                paymentMethod: isCreditCustomer ? "Credit" : "Cash",
                paymentStatus: isCreditCustomer ? "Pending" : "Paid"
            };
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/sales/createSale", {
                method: "POST",
                data: saleData
            });
            if (!result?.success) {
                printWindow.close();
                return alert(result?.message || "Failed to create sale");
            }
            let invoiceDisplayNo = "01";
            try {
                const savedSaleId = String(result?.data?._id || "");
                const salesResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/sales", {
                    method: "GET",
                    suppressErrorLog: true,
                    suppressErrorToast: true
                });
                const salesList = Array.isArray(salesResponse?.data) ? salesResponse.data : [];
                const orderedSales = [
                    ...salesList
                ].sort((left, right)=>new Date(left?.createdAt || 0).getTime() - new Date(right?.createdAt || 0).getTime());
                const saleIndex = orderedSales.findIndex((sale)=>String(sale?._id || "") === savedSaleId);
                invoiceDisplayNo = formatReceiptSequence(saleIndex >= 0 ? saleIndex + 1 : orderedSales.length);
            } catch  {}
            if (isCreditCustomer && selectedCustomer?.id) {
                await syncCustomerCreditBill({
                    customerId: selectedCustomer.id,
                    invoiceNo,
                    totalAmount,
                    soldItems: items
                });
            }
            printWindow.document.open();
            printWindow.document.write(buildReceiptHtml({
                items,
                subtotal,
                discount,
                total: totalAmount,
                paidAmount: effectivePaidAmount,
                returnAmount,
                selectedCustomer,
                invoiceNo,
                invoiceDisplayNo
            }));
            printWindow.document.close();
            printWindow.focus();
            localStorage.removeItem("posCartDraft");
            removeItem("all");
            setSelectedCustomer(DEFAULT_WALK_IN_CUSTOMER);
            setAmount("");
            setPaidAmount("");
            setTimeout(()=>{
                printWindow.print();
            }, 250);
        } catch (error) {
            try {
                printWindow.close();
            } catch  {}
            console.error(error);
            alert(error?.message || "Failed to create sale");
        } finally{
            setProcessing(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden rounded-xl border border-white/70 bg-white/80 shadow-lg shadow-black/5 backdrop-blur",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-t-xl bg-gradient-to-r from-blue-600 to-emerald-500 p-3 text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                    lineNumber: 874,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: "Customer Information"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                    lineNumber: 875,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                            lineNumber: 873,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                        lineNumber: 872,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex min-w-0 items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex h-10 w-10 items-center justify-center rounded-lg ${selectedCustomer.type === "VIP" ? "bg-gradient-to-br from-yellow-500 to-orange-500" : "bg-gradient-to-br from-blue-500 to-emerald-500"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-white",
                                                        children: selectedCustomer.name?.charAt(0) || "C"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                        lineNumber: 883,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                    lineNumber: 882,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "break-words text-sm font-semibold text-slate-900",
                                                            children: selectedCustomer.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                            lineNumber: 886,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "flex break-all items-center gap-1 text-xs text-slate-600",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                    className: "h-3 w-3 shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                                    lineNumber: 887,
                                                                    columnNumber: 91
                                                                }, this),
                                                                selectedCustomer.phone || "-"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                            lineNumber: 887,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                    lineNumber: 885,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                            lineNumber: 881,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setCustomerType("registered");
                                                setShowCustomerPopup(true);
                                            },
                                            className: "self-start text-left text-xs font-medium text-blue-600 hover:text-blue-700 sm:self-auto",
                                            children: "Change Customer"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                            lineNumber: 890,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                    lineNumber: 880,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `inline-flex w-fit max-w-full items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-medium ${selectedCustomer.type === "VIP" ? "bg-yellow-100 text-yellow-800" : selectedCustomer.type === "walk-in" ? "bg-amber-100 text-amber-800" : "bg-blue-100 text-blue-800"}`,
                                    children: [
                                        selectedCustomer.type === "VIP" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                            lineNumber: 895,
                                            columnNumber: 50
                                        }, this) : selectedCustomer.type === "walk-in" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$footprints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Footprints$3e$__["Footprints"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                            lineNumber: 895,
                                            columnNumber: 119
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                            lineNumber: 895,
                                            columnNumber: 156
                                        }, this),
                                        selectedCustomer.type === "VIP" ? "VIP Customer" : selectedCustomer.type === "walk-in" ? "Walk-in Customer" : "Registered Customer"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                    lineNumber: 894,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                            lineNumber: 879,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                        lineNumber: 878,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                lineNumber: 871,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-hidden rounded-xl border border-white/70 bg-white/80 shadow-lg shadow-black/5 backdrop-blur",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between rounded-t-xl bg-gradient-to-r from-blue-600 to-emerald-500 p-3 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                        lineNumber: 904,
                                        columnNumber: 52
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold",
                                        children: "Shopping Cart"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                        lineNumber: 904,
                                        columnNumber: 88
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                lineNumber: 904,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded bg-white/20 px-2 py-1 text-xs",
                                children: cart.length
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                lineNumber: 905,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                        lineNumber: 903,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-72 overflow-y-auto p-3",
                        children: !cart.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-8 text-center text-slate-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                    className: "mx-auto mb-3 h-12 w-12 opacity-30"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                    lineNumber: 910,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "Your cart is empty"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                    lineNumber: 911,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs",
                                    children: "Add products from the list"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                    lineNumber: 912,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                            lineNumber: 909,
                            columnNumber: 13
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                        lineNumber: 907,
                        columnNumber: 9
                    }, this),
                    cart.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 pb-0 pt-0 sm:px-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-3 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-slate-600",
                                            children: "Subtotal P.Price"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                            lineNumber: 920,
                                            columnNumber: 79
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "break-words text-right text-slate-900",
                                            children: [
                                                " ",
                                                subtotalPurchasePrice.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                            lineNumber: 920,
                                            columnNumber: 135
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                    lineNumber: 920,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                lineNumber: 919,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 border-t border-slate-200 p-3 sm:p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-3 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-600",
                                                children: "Subtotal"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 923,
                                                columnNumber: 77
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "break-words text-right text-slate-900",
                                                children: [
                                                    " ",
                                                    subtotal.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 923,
                                                columnNumber: 125
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                        lineNumber: 923,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-3 text-xs font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-600",
                                                children: "Discount"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 924,
                                                columnNumber: 89
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "break-words text-right text-red-600",
                                                children: [
                                                    "-",
                                                    discount.toFixed(2)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 924,
                                                columnNumber: 135
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                        lineNumber: 924,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-slate-200 pt-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-3 text-base font-bold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-900",
                                                    children: "Total"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                    lineNumber: 925,
                                                    columnNumber: 137
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "break-words text-right text-blue-600",
                                                    children: [
                                                        " ",
                                                        totalAmount.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                    lineNumber: 925,
                                                    columnNumber: 182
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                            lineNumber: 925,
                                            columnNumber: 61
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                        lineNumber: 925,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-slate-200 bg-slate-50/80 p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mb-3 text-xs font-semibold text-slate-900",
                                                children: "Payment Detail"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 927,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-2 text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-600",
                                                                children: "Discount"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                                lineNumber: 930,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                inputMode: "decimal",
                                                                value: amount,
                                                                onChange: (event)=>setAmount(sanitizeNumericInput(event.target.value)),
                                                                className: "w-20 shrink-0 rounded-lg border border-slate-300 px-3 py-2 text-right text-xs sm:w-24"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                                lineNumber: 931,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                        lineNumber: 929,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-2 text-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-600",
                                                                children: "Payment Option"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                                lineNumber: 934,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `shrink-0 rounded-lg px-3 py-2 text-[11px] font-semibold ${isCreditCustomer ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"}`,
                                                                children: isCreditCustomer ? "Credit" : "Cash"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                                lineNumber: 935,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                        lineNumber: 933,
                                                        columnNumber: 17
                                                    }, this),
                                                    isWalkInCustomer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between gap-2 text-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-600",
                                                                        children: "Pakistani Rupees"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                                        lineNumber: 942,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        inputMode: "decimal",
                                                                        value: paidAmount,
                                                                        onChange: (event)=>setPaidAmount(sanitizeNumericInput(event.target.value)),
                                                                        className: "w-20 shrink-0 rounded-lg border border-slate-300 px-3 py-2 text-right text-xs sm:w-24"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                                        lineNumber: 943,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                                lineNumber: 941,
                                                                columnNumber: 21
                                                            }, this),
                                                            paidAmount !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `rounded-lg p-2 text-center text-xs ${paid >= totalAmount ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`,
                                                                children: [
                                                                    paid >= totalAmount ? "Return Pakistani Rupees" : "Insufficient Amount",
                                                                    ":  ",
                                                                    Math.abs(paid - totalAmount).toFixed(2)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                                lineNumber: 945,
                                                                columnNumber: 43
                                                            }, this)
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-lg bg-amber-50 p-2 text-center text-xs text-amber-800",
                                                        children: "Total bill will be added to this customer's pending bills."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                        lineNumber: 948,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 928,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                        lineNumber: 926,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: createSaleAndPrintBill,
                                                disabled: !cart.length || isWalkInCustomer && paid < totalAmount || processing,
                                                className: "flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 py-3 text-sm font-bold text-white disabled:opacity-60",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                        lineNumber: 956,
                                                        columnNumber: 17
                                                    }, this),
                                                    processing ? "Processing..." : "Create Sale & Print Bill"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 955,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>removeItem("all"),
                                                className: "w-full py-2 text-xs text-red-600 hover:text-red-700",
                                                children: "Clear Cart"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 959,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                        lineNumber: 954,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                lineNumber: 922,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                lineNumber: 902,
                columnNumber: 7
            }, this),
            showCustomerPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-blue-600 to-emerald-500 p-4 text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-bold sm:text-xl",
                                                children: "Select Customer Type"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 971,
                                                columnNumber: 44
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-white/90",
                                                children: "Choose how to proceed with the sale"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 971,
                                                columnNumber: 114
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                        lineNumber: 971,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: resetPopup,
                                        className: "rounded-lg p-1.5 hover:bg-white/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                            lineNumber: 972,
                                            columnNumber: 95
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                        lineNumber: 972,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                lineNumber: 970,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                            lineNumber: 969,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-[calc(90vh-96px)] overflow-y-auto p-3 sm:p-4",
                            children: !customerType ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCustomerType("registered"),
                                    className: "rounded-xl border bg-slate-50 p-4 text-left hover:border-blue-500 hover:bg-blue-50 sm:p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                            className: "mb-3 h-8 w-8 text-purple-600"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                            lineNumber: 978,
                                            columnNumber: 177
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg font-bold text-slate-900 sm:text-xl",
                                            children: "Registered Customer"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                            lineNumber: 978,
                                            columnNumber: 231
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-slate-600",
                                            children: "Search and choose from saved customers."
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                            lineNumber: 978,
                                            columnNumber: 313
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                    lineNumber: 978,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                lineNumber: 977,
                                columnNumber: 19
                            }, this) : customerType === "walk-in" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCustomerType(null),
                                        className: "flex items-center gap-2 text-sm text-blue-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 982,
                                                columnNumber: 123
                                            }, this),
                                            "Back to customer type selection"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                        lineNumber: 982,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-2 block text-xs font-medium text-slate-700",
                                                children: [
                                                    "Customer Name ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                        lineNumber: 984,
                                                        columnNumber: 100
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 984,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: walkInCustomer.name,
                                                onChange: (event)=>setWalkInCustomer((prev)=>({
                                                            ...prev,
                                                            name: event.target.value
                                                        })),
                                                placeholder: "Enter customer name",
                                                className: "w-full rounded-lg border border-slate-300 px-3 py-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 985,
                                                columnNumber: 21
                                            }, this),
                                            formErrors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-red-600",
                                                children: formErrors.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 986,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                        lineNumber: 983,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-2 block text-xs font-medium text-slate-700",
                                                children: [
                                                    "Mobile ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                        lineNumber: 989,
                                                        columnNumber: 93
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 989,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: walkInCustomer.phone,
                                                onChange: (event)=>{
                                                    const digits = String(event.target.value || "").replace(/\D/g, "").slice(0, 11);
                                                    let formatted = digits;
                                                    if (digits.length > 4) formatted = `${digits.slice(0, 4)}-${digits.slice(4)}`;
                                                    setWalkInCustomer((prev)=>({
                                                            ...prev,
                                                            phone: formatted
                                                        }));
                                                },
                                                maxLength: 12,
                                                placeholder: "0300-1234567",
                                                className: "w-full rounded-lg border border-slate-300 px-3 py-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 990,
                                                columnNumber: 21
                                            }, this),
                                            formErrors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-red-600",
                                                children: formErrors.phone
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 991,
                                                columnNumber: 42
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                        lineNumber: 988,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "mb-2 block text-xs font-medium text-slate-700",
                                                children: "Address (Optional)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 994,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: walkInCustomer.address,
                                                onChange: (event)=>setWalkInCustomer((prev)=>({
                                                            ...prev,
                                                            address: event.target.value
                                                        })),
                                                rows: "3",
                                                placeholder: "Enter address (optional)",
                                                className: "w-full rounded-lg border border-slate-300 px-3 py-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 995,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                        lineNumber: 993,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-2 sm:flex-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: submitWalkIn,
                                                className: "flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 py-2.5 font-semibold text-white",
                                                children: "Confirm & Continue"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 998,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setCustomerType(null),
                                                className: "rounded-lg border border-slate-300 px-5 py-2.5 text-sm",
                                                children: "Back"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 999,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                        lineNumber: 997,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                lineNumber: 981,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCustomerType(null),
                                        className: "flex items-center gap-2 text-sm text-blue-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 1004,
                                                columnNumber: 123
                                            }, this),
                                            "Back to customer type selection"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                        lineNumber: 1004,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 1006,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                value: searchRegisteredCustomers,
                                                onChange: (event)=>setSearchRegisteredCustomers(event.target.value),
                                                placeholder: "Search by name, phone, CNIC, or email...",
                                                className: "w-full rounded-lg border border-slate-300 py-2 pl-9 pr-3"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 1007,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                        lineNumber: 1005,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-h-80 overflow-y-auto rounded-lg border border-slate-200",
                                        children: filteredCustomers.length ? filteredCustomers.map((customer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setSelectedRegisteredCustomer(customer),
                                                className: `w-full border-b p-3 text-left ${selectedRegisteredCustomer?.id === customer.id ? "bg-blue-50" : "hover:bg-slate-50"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "break-words font-semibold text-slate-900",
                                                        children: customer.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                        lineNumber: 1012,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "break-all text-xs text-slate-500",
                                                        children: [
                                                            customer.phone,
                                                            " | ",
                                                            customer.type
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                        lineNumber: 1013,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, customer.id, true, {
                                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                                lineNumber: 1011,
                                                columnNumber: 23
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-8 text-center text-sm text-slate-500",
                                            children: "No customers found"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                            lineNumber: 1015,
                                            columnNumber: 26
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                        lineNumber: 1009,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (selectedRegisteredCustomer) {
                                                setSelectedCustomer(selectedRegisteredCustomer);
                                                setPaidAmount("0");
                                                resetPopup();
                                            }
                                        },
                                        disabled: !selectedRegisteredCustomer,
                                        className: "w-full rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 py-2.5 font-semibold text-white disabled:opacity-50",
                                        children: "Select Customer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                        lineNumber: 1017,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                                lineNumber: 1003,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                            lineNumber: 975,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                    lineNumber: 968,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
                lineNumber: 967,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminDashboard/components/POS/CartCard.jsx",
        lineNumber: 870,
        columnNumber: 5
    }, this);
}
_s(CartCard, "LvWSCsCRdc6xzGY/MfjjCaW6pVM=");
_c = CartCard;
var _c;
__turbopack_context__.k.register(_c, "CartCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/AdminDashboard/components/pages/POSPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>POSPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$POS$2f$ProductsCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/POS/ProductsCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$POS$2f$CartCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/POS/CartCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$uomConverter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/utils/uomConverter.js [app-client] (ecmascript)");
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
const getPackSize = (product)=>{
    const packSize = Number(product?.packSize);
    return Number.isFinite(packSize) && packSize > 0 ? packSize : 1;
};
function POSPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const getActualStock = (product)=>{
        const availableTabs = Number(product?.availableTabs);
        if (Number.isFinite(availableTabs)) return availableTabs;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$utils$2f$uomConverter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActualStockValue"])(product);
    };
    const getAvailableStockInUnits = (product)=>{
        const totalStock = Number(product?.displayStock ?? product?.stock) || 0;
        return Math.max(getActualStock(product), totalStock * getPackSize(product));
    };
    const getMaxDisplayQty = (item, quantityMode = item?.quantityMode || "unit")=>{
        const stockUnits = Math.max(Number(item?.stock) || 0, 0);
        if (quantityMode === "pack") {
            return Math.floor(stockUnits / getPackSize(item));
        }
        return Math.floor(stockUnits);
    };
    const getUnitsFromDisplayQty = (item, displayQty, quantityMode = item?.quantityMode || "unit")=>{
        const normalizedDisplayQty = Math.max(Math.floor(Number(displayQty) || 0), 0);
        return quantityMode === "pack" ? normalizedDisplayQty * getPackSize(item) : normalizedDisplayQty;
    };
    const getMaxFreeDisplayQty = (item, displayQty, quantityMode = item?.quantityMode || "unit")=>{
        const soldUnits = getUnitsFromDisplayQty(item, displayQty, quantityMode);
        const remainingUnits = Math.max((Number(item?.stock) || 0) - soldUnits, 0);
        return quantityMode === "pack" ? Math.floor(remainingUnits / getPackSize(item)) : Math.floor(remainingUnits);
    };
    const normalizeCartItemQuantity = (item, displayQty, quantityMode = item?.quantityMode || "unit")=>{
        const normalizedMode = quantityMode === "pack" ? "pack" : "unit";
        const maxDisplayQty = getMaxDisplayQty(item, normalizedMode);
        if (maxDisplayQty <= 0) {
            return {
                ...item,
                quantityMode: normalizedMode,
                displayQty: 0,
                qty: 0
            };
        }
        const nextDisplayQty = Math.min(Math.max(Math.floor(Number(displayQty) || 1), 1), maxDisplayQty);
        const nextFreeQty = Math.min(Math.max(Math.floor(Number(item?.freeQty) || 0), 0), getMaxFreeDisplayQty(item, nextDisplayQty, normalizedMode));
        return {
            ...item,
            quantityMode: normalizedMode,
            displayQty: nextDisplayQty,
            qty: getUnitsFromDisplayQty(item, nextDisplayQty, normalizedMode),
            freeQty: nextFreeQty
        };
    };
    const updateLineAmount = (key, nextAmount)=>{
        setCart((prev)=>prev.map((item)=>{
                if (item.key !== key) return item;
                const trimmedAmount = String(nextAmount ?? "").trim();
                if (!trimmedAmount) {
                    const { customUnitSalePrice, ...rest } = item;
                    return rest;
                }
                const numericAmount = Number(trimmedAmount);
                if (!Number.isFinite(numericAmount) || numericAmount < 0) return item;
                const displayQty = Math.max(Number(item.displayQty ?? item.qty ?? 0) || 0, 1);
                const quantityMode = item?.quantityMode === "pack" ? "pack" : "unit";
                const divisor = quantityMode === "pack" ? displayQty * getPackSize(item) : displayQty;
                if (!Number.isFinite(divisor) || divisor <= 0) return item;
                return {
                    ...item,
                    customUnitSalePrice: Number((numericAmount / divisor).toFixed(2))
                };
            }));
    };
    const fetchProducts = async ()=>{
        try {
            setLoading(true);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/products", {
                method: "GET"
            });
            setProducts(res?.data || res);
        } catch (err) {
            setError("Failed to fetch products");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "POSPage.useEffect": ()=>{
            fetchProducts();
        }
    }["POSPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "POSPage.useEffect": ()=>{
            try {
                const draftRaw = localStorage.getItem("posCartDraft");
                if (!draftRaw) return;
                const parsed = JSON.parse(draftRaw);
                const items = Array.isArray(parsed) ? parsed : parsed?.items;
                if (Array.isArray(items) && items.length) {
                    setCart(items.map({
                        "POSPage.useEffect": (item)=>({
                                ...item,
                                freeQty: Math.max(Math.floor(Number(item?.freeQty) || 0), 0)
                            })
                    }["POSPage.useEffect"]));
                }
            } catch  {
            // Ignore invalid local draft payloads.
            }
        }
    }["POSPage.useEffect"], []);
    const addToCart = (product)=>{
        setCart((prev)=>{
            const uniqueKey = `${product._id}-${product.purchasePrice ?? product.cost}`;
            const exists = prev.find((item)=>item.key === uniqueKey);
            const availableStock = getAvailableStockInUnits(product);
            if (exists) {
                const currentDisplayQty = Number(exists.displayQty ?? 1) || 1;
                const maxDisplayQty = getMaxDisplayQty(exists, exists.quantityMode);
                if (currentDisplayQty < maxDisplayQty) {
                    return prev.map((item)=>item.key === uniqueKey ? normalizeCartItemQuantity(item, currentDisplayQty + 1, item.quantityMode) : item);
                }
                return prev;
            }
            return [
                ...prev,
                {
                    ...product,
                    qty: 1,
                    displayQty: 1,
                    freeQty: 0,
                    quantityMode: "unit",
                    key: uniqueKey,
                    stock: availableStock
                }
            ];
        });
    };
    const removeItem = (key)=>{
        if (key === "all") return setCart([]);
        setCart((prev)=>prev.filter((item)=>item.key !== key));
    };
    const increaseQty = (key, amount = 1)=>{
        setCart((prev)=>prev.map((item)=>item.key === key ? normalizeCartItemQuantity(item, (Number(item.displayQty ?? 1) || 1) + amount, item.quantityMode) : item));
    };
    const decreaseQty = (key, amount = 1)=>{
        setCart((prev)=>prev.map((item)=>item.key === key ? normalizeCartItemQuantity(item, Math.max((Number(item.displayQty ?? 1) || 1) - amount, 1), item.quantityMode) : item));
    };
    const updateQty = (key, nextQty)=>{
        setCart((prev)=>prev.map((item)=>{
                if (item.key !== key) return item;
                const normalizedQty = Number(nextQty);
                if (!Number.isFinite(normalizedQty)) return item;
                return normalizeCartItemQuantity(item, normalizedQty, item.quantityMode);
            }));
    };
    const updateQuantityMode = (key, nextMode)=>{
        setCart((prev)=>prev.map((item)=>{
                if (item.key !== key) return item;
                const normalizedMode = nextMode === "pack" ? "pack" : "unit";
                return normalizeCartItemQuantity(item, 1, normalizedMode);
            }));
    };
    const updateFreeQty = (key, nextFreeQty)=>{
        setCart((prev)=>prev.map((item)=>{
                if (item.key !== key) return item;
                const normalizedFreeQty = Math.max(Math.floor(Number(nextFreeQty) || 0), 0);
                const maxFreeQty = getMaxFreeDisplayQty(item, Number(item.displayQty ?? 1) || 1, item.quantityMode);
                return {
                    ...item,
                    freeQty: Math.min(normalizedFreeQty, maxFreeQty)
                };
            }));
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[70vh] rounded-3xl border border-slate-200/70 bg-gradient-to-br from-sky-50 via-white to-emerald-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-medium text-slate-600",
                children: "Loading products..."
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                lineNumber: 259,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
            lineNumber: 258,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-[70vh] rounded-3xl border border-rose-200/70 bg-gradient-to-br from-rose-50 via-white to-orange-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-medium text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                lineNumber: 267,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
            lineNumber: 266,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[radial-gradient(circle_at_top_left,#e0f2fe,transparent_35%),radial-gradient(circle_at_85%_20%,#ecfdf3,transparent_30%),linear-gradient(to_bottom,#f8fafc,#eef2ff)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-10 border-b border-white/70 bg-white/80 backdrop-blur shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex max-w-7xl flex-col gap-3 px-3 py-4 sm:px-4 lg:flex-row lg:items-center lg:justify-between lg:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-0 items-center gap-3 sm:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>router.push("/AdminDashboard/dashboard"),
                                    className: "rounded-xl border border-slate-200/70 bg-white/80 p-2 text-slate-700 shadow-sm transition hover:bg-white hover:shadow-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-lg font-bold text-slate-900 sm:text-xl",
                                            children: "New Sale"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-600",
                                            children: "Create a new sales transaction"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                                    lineNumber: 283,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/AdminDashboard/sales",
                            className: "w-full lg:w-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl lg:w-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                                        lineNumber: 291,
                                        columnNumber: 15
                                    }, this),
                                    "View All Sales"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                                lineNumber: 290,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                    lineNumber: 275,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mx-auto max-w-7xl px-3 py-4 sm:px-4 sm:py-5 lg:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,2.95fr)_minmax(220px,0.5fr)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-white/70 bg-white/80 p-3 shadow-lg shadow-black/5 backdrop-blur sm:p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$POS$2f$ProductsCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    products: products,
                                    cart: cart,
                                    addToCart: addToCart,
                                    increaseQty: increaseQty,
                                    decreaseQty: decreaseQty,
                                    updateQty: updateQty,
                                    updateQuantityMode: updateQuantityMode,
                                    updateLineAmount: updateLineAmount,
                                    updateFreeQty: updateFreeQty,
                                    removeItem: removeItem
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$POS$2f$CartCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                cart: cart,
                                removeItem: removeItem,
                                increaseQty: increaseQty,
                                decreaseQty: decreaseQty
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                            lineNumber: 317,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                    lineNumber: 299,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
                lineNumber: 298,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminDashboard/components/pages/POSPage.jsx",
        lineNumber: 273,
        columnNumber: 5
    }, this);
}
_s(POSPage, "ey/oQDczit4WvZ1hLTAM0YoH/NE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = POSPage;
var _c;
__turbopack_context__.k.register(_c, "POSPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/AdminDashboard/pos/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/AdminDashboard/pos/page.jsx
__turbopack_context__.s([
    "default",
    ()=>POSRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$pages$2f$POSPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/pages/POSPage.jsx [app-client] (ecmascript)");
"use client";
;
;
function POSRoute() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$pages$2f$POSPage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/AdminDashboard/pos/page.jsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
_c = POSRoute;
var _c;
__turbopack_context__.k.register(_c, "POSRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__56b68b3f._.js.map