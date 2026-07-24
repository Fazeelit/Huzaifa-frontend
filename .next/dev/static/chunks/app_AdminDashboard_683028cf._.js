(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomersFilterBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3x3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid3x3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
"use client";
;
;
function CustomersFilterBar({ searchTerm, setSearchTerm, showFilters, setShowFilters, sortBy, setSortBy, sortOptions, viewMode, setViewMode, statusFilters, selectedStatus, setSelectedStatus, tagFilters, selectedTag, setSelectedTag }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-xl shadow-lg shadow-black/5 border border-white/70 dark:border-gray-700/70 p-4 mb-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Search by name, email, phone, CNIC, address, or last purchase...",
                            value: searchTerm,
                            onChange: (e)=>setSearchTerm(e.target.value),
                            className: "w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200/80 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSearchTerm(""),
                            className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowFilters(!showFilters),
                            className: `px-4 py-2 rounded-lg border flex items-center gap-2 transition text-sm ${showFilters ? "border-blue-500 bg-blue-50/70 dark:bg-blue-900/20 text-blue-600" : "border-gray-200/80 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: "Filters"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: `w-3.5 h-3.5 transition-transform ${showFilters ? "rotate-180" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: sortBy,
                            onChange: (e)=>setSortBy(e.target.value),
                            className: "px-4 py-2 rounded-lg border border-gray-200/80 dark:border-gray-700 bg-white/90 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-medium focus:outline-none focus:border-blue-500",
                            children: sortOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: option.value,
                                    children: option.label
                                }, option.value, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex ml-auto border border-gray-200/80 dark:border-gray-700 rounded-lg overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setViewMode("grid"),
                                    className: `px-3 py-2 transition flex items-center gap-2 text-sm ${viewMode === "grid" ? "bg-blue-500 text-white" : "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid3x3$3e$__["Grid3x3"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Grid"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setViewMode("list"),
                                    className: `px-3 py-2 transition flex items-center gap-2 text-sm ${viewMode === "list" ? "bg-blue-500 text-white" : "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "List"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                showFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 pt-3 border-t border-gray-200/70 dark:border-gray-700 space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-medium text-gray-700 dark:text-gray-300 mb-2",
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: statusFilters.map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedStatus(filter.value),
                                            className: `px-3 py-2 rounded-lg text-xs font-medium inline-flex items-center gap-2 transition ${selectedStatus === filter.value ? "bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-md" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`,
                                            children: [
                                                filter.icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(filter.icon, {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                                    lineNumber: 107,
                                                    columnNumber: 36
                                                }, this) : null,
                                                filter.label
                                            ]
                                        }, filter.value, true, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                            lineNumber: 99,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                    lineNumber: 97,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                            lineNumber: 95,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-medium text-gray-700 dark:text-gray-300 mb-2",
                                    children: "Customer Tags"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                    lineNumber: 115,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: tagFilters.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelectedTag(tag.value),
                                            className: `px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition ${selectedTag === tag.value ? "bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-md" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`,
                                            children: [
                                                tag.value !== "All" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                    className: "w-3.5 h-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                                    lineNumber: 126,
                                                    columnNumber: 45
                                                }, this),
                                                tag.label
                                            ]
                                        }, tag.value, true, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                            lineNumber: 118,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                            lineNumber: 114,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setSelectedStatus("all");
                                setSelectedTag("All");
                                setSearchTerm("");
                            },
                            className: "text-blue-600 dark:text-blue-400 text-xs font-medium flex items-center gap-2 hover:underline",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this),
                                "Reset all filters"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
                    lineNumber: 94,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = CustomersFilterBar;
var _c;
__turbopack_context__.k.register(_c, "CustomersFilterBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/AdminDashboard/components/customers/DeleteCustomerModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeleteCustomerModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
"use client";
;
;
function DeleteCustomerModal({ deleteModalOpen, setDeleteModalOpen, customerToDelete, confirmDelete }) {
    if (!deleteModalOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-2xl max-w-md w-full p-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                className: "w-5 h-5 text-red-600 dark:text-red-400"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/customers/DeleteCustomerModal.jsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/customers/DeleteCustomerModal.jsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-bold text-gray-900 dark:text-white",
                                    children: "Delete Customer?"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/DeleteCustomerModal.jsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 dark:text-gray-400 mt-1 text-xs",
                                    children: "This action cannot be undone"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/DeleteCustomerModal.jsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/customers/DeleteCustomerModal.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/customers/DeleteCustomerModal.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-lg p-3 mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-800 dark:text-gray-200 text-sm",
                        children: [
                            "Are you sure you want to delete customer",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold",
                                children: customerToDelete?.name || "this customer"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/customers/DeleteCustomerModal.jsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            "?"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/customers/DeleteCustomerModal.jsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/AdminDashboard/components/customers/DeleteCustomerModal.jsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setDeleteModalOpen(false),
                            className: "px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-300 rounded-lg text-sm font-medium hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-200",
                            children: "No"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/customers/DeleteCustomerModal.jsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: confirmDelete,
                            className: "px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg text-sm font-medium hover:from-red-700 hover:to-pink-700 transition-all duration-200 shadow-md hover:shadow-lg",
                            children: "Yes"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/customers/DeleteCustomerModal.jsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/customers/DeleteCustomerModal.jsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/AdminDashboard/components/customers/DeleteCustomerModal.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/AdminDashboard/components/customers/DeleteCustomerModal.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = DeleteCustomerModal;
var _c;
__turbopack_context__.k.register(_c, "DeleteCustomerModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomersGridView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/laptop.js [app-client] (ecmascript) <export default as Laptop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
"use client";
;
;
;
function CustomersGridView({ paginatedCustomers, setViewCustomer, getStatusBadge, handleDeleteCustomer, canEditCustomer = true, canDeleteCustomer = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
        children: paginatedCustomers.map((customer)=>{
            const exactPendingAmount = Math.round(Number(customer.latestTransactionBalance ?? customer.exactPendingAmount ?? customer.totalDue ?? customer.pendingAmount ?? customer.balance ?? customer.accountBalance ?? 0) || 0);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "group bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-xl border border-white/70 dark:border-gray-700/70 overflow-hidden hover:border-blue-400 hover:shadow-xl shadow-lg shadow-black/5 transition-all duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between mb-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-md transform group-hover:scale-105 transition-transform",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-bold text-white",
                                            children: customer.name?.charAt(0)
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                            lineNumber: 38,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                        lineNumber: 37,
                                        columnNumber: 17
                                    }, this),
                                    customer.tags?.includes("VIP") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "w-2.5 h-2.5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                            lineNumber: 44,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                        lineNumber: 43,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                lineNumber: 36,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-semibold text-gray-900 dark:text-white mb-1",
                            children: customer.name
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500 dark:text-gray-400 mb-2.5",
                            children: [
                                "Customer since",
                                " ",
                                customer.customerSince ? new Date(customer.customerSince).toLocaleDateString("en-US", {
                                    month: "short",
                                    year: "numeric"
                                }) : "-"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2 mb-3",
                            children: [
                                getStatusBadge(customer.status),
                                customer.tags?.slice(0, 2).map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium",
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)),
                                customer.tags?.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium",
                                    children: [
                                        "+",
                                        customer.tags.length - 2
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2.5 mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 dark:text-gray-400 mb-1",
                                            children: "Total Pending"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold text-gray-900 dark:text-white",
                                            children: [
                                                "PKR ",
                                                exactPendingAmount.toLocaleString()
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 dark:text-gray-400 mb-1",
                                            children: "Satisfaction"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: "w-3.5 h-3.5 text-yellow-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this),
                                                customer.satisfaction || 0,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate flex-1",
                                    children: [
                                        "Last: ",
                                        customer.lastPurchase
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 pt-3 border-t border-gray-200 dark:border-gray-700",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/AdminDashboard/customers/${customer.id}`,
                                        className: "flex-1 px-3 py-1.5 rounded-lg text-center text-xs font-medium transition bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, this),
                                            "View"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: canEditCustomer ? `/AdminDashboard/customers/Edit?id=${customer.id}` : "#",
                                        "aria-disabled": !canEditCustomer,
                                        onClick: (event)=>{
                                            if (!canEditCustomer) event.preventDefault();
                                        },
                                        className: `flex-1 px-3 py-1.5 rounded-lg text-center text-xs font-medium transition flex items-center justify-center gap-2 ${canEditCustomer ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/50" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this),
                                            "Edit"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleDeleteCustomer(customer),
                                        disabled: !canDeleteCustomer,
                                        className: `p-1.5 rounded-lg transition ${canDeleteCustomer ? "bg-red-100 dark:bg-red-900/20 text-red-600 hover:bg-red-200 dark:hover:bg-red-900/40" : "bg-gray-100 text-gray-300 cursor-not-allowed"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            }, customer.id, false, {
                fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
                lineNumber: 30,
                columnNumber: 9
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = CustomersGridView;
var _c;
__turbopack_context__.k.register(_c, "CustomersGridView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomersHeaderSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-plus.js [app-client] (ecmascript) <export default as UserPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CustomersHeaderSection({ stats, canCreateCustomer = true, onExport }) {
    _s();
    const [showValues, setShowValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/AdminDashboard",
                        className: "hover:text-blue-600 dark:hover:text-blue-400",
                        children: "Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        className: "w-3.5 h-3.5"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-900 dark:text-white font-medium",
                        children: "Customers"
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2.5 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl shadow-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                    className: "w-6 h-6 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-gray-900 dark:text-white",
                                        children: "Customer Management"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 dark:text-gray-400 mt-1 text-sm",
                                        children: "Manage your customer relationships and track their laptop preferences"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: canCreateCustomer ? "/AdminDashboard/customers/add" : "#",
                                "aria-disabled": !canCreateCustomer,
                                onClick: (event)=>{
                                    if (!canCreateCustomer) event.preventDefault();
                                },
                                className: `inline-flex flex-row flex-nowrap items-center justify-center gap-2 whitespace-nowrap font-semibold px-3.5 py-2 rounded-lg text-sm transition-all ${canCreateCustomer ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" : "bg-gray-200 text-gray-500 cursor-not-allowed"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserPlus$3e$__["UserPlus"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Add Customer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onExport,
                                className: "bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white px-3.5 py-2 rounded-lg shadow-md transition-all duration-300 flex flex-row flex-nowrap items-center gap-2 whitespace-nowrap hover:shadow-lg transform hover:-translate-y-0.5 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Export List"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>setShowValues((prev)=>!prev),
                    className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 dark:border-gray-700 dark:bg-gray-800/90 dark:text-gray-200 dark:hover:bg-gray-800",
                    children: [
                        showValues ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                            lineNumber: 81,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                            lineNumber: 81,
                            columnNumber: 58
                        }, this),
                        showValues ? "Hide Values" : "Show Values"
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-xl p-3 shadow-lg shadow-blue-500/25 border border-white/30 hover:shadow-xl transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base font-bold text-white",
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                            lineNumber: 91,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-white/85",
                                children: "Registered Customers"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-bold text-white",
                                children: stats.total
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-emerald-500 via-green-500 to-blue-500 rounded-xl p-3 shadow-lg shadow-emerald-500/25 border border-white/30 hover:shadow-xl transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base font-bold text-white",
                                        children: "Active"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-white/85",
                                children: "Active Customers"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-bold text-white",
                                children: stats.active
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 rounded-xl p-3 shadow-lg shadow-orange-500/25 border border-white/30 hover:shadow-xl transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base font-bold text-white",
                                        children: "Revenue"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-white/85",
                                children: "Total Revenue"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-bold text-white",
                                children: showValues ? `PKR ${stats.totalSpent.toLocaleString()}` : "PKR ****"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 rounded-xl p-3 shadow-lg shadow-rose-500/25 border border-white/30 hover:shadow-xl transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base font-bold text-white",
                                        children: "Satisfaction"
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-white/85",
                                children: "Avg. Satisfaction"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl font-bold text-white",
                                children: showValues ? `${stats.avgSatisfaction}%` : "****"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(CustomersHeaderSection, "+oSsQJwgkCrLu12BOCjPT4/Y4Gs=");
_c = CustomersHeaderSection;
var _c;
__turbopack_context__.k.register(_c, "CustomersHeaderSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/AdminDashboard/components/customers/CustomersListView.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomersListView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
"use client";
;
;
;
const formatAmount = (value)=>`PKR ${(Number(value) || 0).toLocaleString()}`;
const formatLastSale = (value)=>{
    if (!value || value === "No purchases yet") return "No purchases yet";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${day}/${month}/${year} ${String(hours).padStart(2, "0")}:${minutes} ${period}`;
};
function CustomersListView({ paginatedCustomers, getStatusBadge, handleDeleteCustomer, canEditCustomer = true, canDeleteCustomer = true, setViewCustomer }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-xl border border-white/70 dark:border-gray-700/70 overflow-hidden shadow-lg shadow-black/5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                        className: "bg-blue-600 text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "rounded-tl-xl px-4 py-2 text-left text-[11px] font-medium text-white uppercase tracking-wider",
                                    children: "Customer"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                    lineNumber: 39,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "w-[170px] px-2 py-2 text-left text-[11px] font-medium text-white uppercase tracking-wider",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-2 py-2 text-left text-[11px] font-medium text-white uppercase tracking-wider",
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-2 text-left text-[11px] font-medium text-white uppercase tracking-wider",
                                    children: "Last Sale"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-2 text-left text-[11px] font-medium text-white uppercase tracking-wider",
                                    children: "Total Spending"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                    lineNumber: 43,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-2 text-left text-[11px] font-medium text-white uppercase tracking-wider",
                                    children: "Total Paid"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "px-4 py-2 text-left text-[11px] font-medium text-white uppercase tracking-wider",
                                    children: "Total Pending"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                    className: "rounded-tr-xl px-4 py-2 text-right text-[11px] font-medium text-white uppercase tracking-wider",
                                    children: "Actions"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        className: "divide-y divide-gray-200 dark:divide-gray-700",
                        children: paginatedCustomers.map((customer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "hover:bg-gray-50 dark:hover:bg-gray-700/50 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-9 h-9 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white font-bold",
                                                        children: customer.name?.charAt(0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                                        lineNumber: 59,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                                    lineNumber: 58,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-medium text-gray-900 dark:text-white",
                                                            children: customer.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                                            lineNumber: 64,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500 dark:text-gray-400",
                                                            children: [
                                                                "Since",
                                                                " ",
                                                                customer.customerSince ? new Date(customer.customerSince).toLocaleDateString("en-US", {
                                                                    month: "short",
                                                                    year: "numeric"
                                                                }) : "-"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                                            lineNumber: 67,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                                    lineNumber: 63,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                            lineNumber: 57,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "w-[170px] pl-2 pr-2 py-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[150px] space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2 truncate",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            className: "w-3.5 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                                            lineNumber: 83,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate",
                                                            children: customer.email || "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                                            lineNumber: 84,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                                    lineNumber: 82,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2 truncate",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            className: "w-2 h-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                                            lineNumber: 87,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate",
                                                            children: customer.phone || "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                                            lineNumber: 88,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                                    lineNumber: 86,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                        lineNumber: 80,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-2 py-2",
                                        children: getStatusBadge(customer.status)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-gray-900 dark:text-white",
                                                children: formatLastSale(customer.lastPurchase)
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 dark:text-gray-400",
                                                children: [
                                                    "Since",
                                                    " ",
                                                    customer.customerSince ? new Date(customer.customerSince).toLocaleDateString("en-US", {
                                                        month: "short",
                                                        year: "numeric"
                                                    }) : "-"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                        lineNumber: 95,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-bold text-blue-600 dark:text-blue-400",
                                            children: formatAmount(Math.round(Number(customer.totalSpent) || 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                            lineNumber: 111,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-bold text-emerald-600 dark:text-emerald-400",
                                            children: formatAmount(customer.totalPaid)
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                            lineNumber: 117,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-bold text-green-600 dark:text-green-400",
                                            children: formatAmount(Math.round((Number(customer.totalSpent) || 0) - (Number(customer.totalPaid) || 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "px-4 py-2 text-right",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-end gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/AdminDashboard/customers/${customer.id}`,
                                                    className: "p-1.5 rounded-lg transition hover:bg-gray-100 dark:hover:bg-gray-700",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                                        lineNumber: 138,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                                    lineNumber: 134,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: canEditCustomer ? `/AdminDashboard/customers/Edit?id=${customer.id}` : "#",
                                                    "aria-disabled": !canEditCustomer,
                                                    onClick: (event)=>{
                                                        if (!canEditCustomer) event.preventDefault();
                                                    },
                                                    className: `p-1.5 rounded-lg transition ${canEditCustomer ? "hover:bg-gray-100 dark:hover:bg-gray-700" : "text-gray-300 bg-gray-100 cursor-not-allowed"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                                        lineNumber: 153,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                                    lineNumber: 141,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDeleteCustomer(customer),
                                                    disabled: !canDeleteCustomer,
                                                    className: `p-1.5 rounded-lg transition ${canDeleteCustomer ? "hover:bg-red-100 dark:hover:bg-red-900/20 text-red-600" : "text-gray-300 bg-gray-100 cursor-not-allowed"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                                        lineNumber: 165,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                                    lineNumber: 156,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                            lineNumber: 133,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                        lineNumber: 132,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, customer.id, true, {
                                fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/AdminDashboard/components/customers/CustomersListView.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = CustomersListView;
var _c;
__turbopack_context__.k.register(_c, "CustomersListView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/AdminDashboard/components/customers/CustomersResultsSummary.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomersResultsSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function CustomersResultsSummary({ paginatedCustomers, filteredCustomers, searchTerm }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "inline-flex items-center gap-2 rounded-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur border border-white/70 dark:border-gray-700/70 px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 shadow-sm",
            children: [
                "Showing ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-gray-900 dark:text-white",
                    children: paginatedCustomers.length
                }, void 0, false, {
                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersResultsSummary.jsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, this),
                " of ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-gray-900 dark:text-white",
                    children: filteredCustomers.length
                }, void 0, false, {
                    fileName: "[project]/app/AdminDashboard/components/customers/CustomersResultsSummary.jsx",
                    lineNumber: 13,
                    columnNumber: 20
                }, this),
                " customers",
                searchTerm && ` matching "${searchTerm}"`
            ]
        }, void 0, true, {
            fileName: "[project]/app/AdminDashboard/components/customers/CustomersResultsSummary.jsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/AdminDashboard/components/customers/CustomersResultsSummary.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = CustomersResultsSummary;
var _c;
__turbopack_context__.k.register(_c, "CustomersResultsSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/AdminDashboard/components/customers/CustomersTips.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomersTips
]);
"use client";
;
function CustomersTips() {
    return null;
}
_c = CustomersTips;
var _c;
__turbopack_context__.k.register(_c, "CustomersTips");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/AdminDashboard/authservice/auth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasPermission",
    ()=>hasPermission,
    "readStoredAuth",
    ()=>readStoredAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/permissions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/authStorage.js [app-client] (ecmascript)");
"use client";
;
;
const readStoredAuth = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readPersistedAuthValue"])("authToken");
    const role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readPersistedAuthValue"])("role");
    const permissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseStoredPermissions"])();
    let user = null;
    try {
        const rawUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readPersistedAuthValue"])("user");
        user = rawUser ? JSON.parse(rawUser) : null;
    } catch  {
        user = null;
    }
    return {
        token,
        user,
        role,
        permissions
    };
};
const hasPermission = (permissions, permission)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPermission"])(permission, permissions);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/AdminDashboard/customers/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Customers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$barcode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Barcode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/barcode.js [app-client] (ecmascript) <export default as Barcode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.js [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-client] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$customers$2f$CustomersFilterBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/customers/CustomersFilterBar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$customers$2f$DeleteCustomerModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/customers/DeleteCustomerModal.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$customers$2f$CustomersGridView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/customers/CustomersGridView.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$customers$2f$CustomersHeaderSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/customers/CustomersHeaderSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$customers$2f$CustomersListView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/customers/CustomersListView.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$customers$2f$CustomersResultsSummary$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/customers/CustomersResultsSummary.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$customers$2f$CustomersTips$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/customers/CustomersTips.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/auth.js [app-client] (ecmascript)");
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
;
;
;
;
const sortOptions = [
    {
        label: "A to Z",
        value: "name-asc"
    },
    {
        label: "Z to A",
        value: "name-desc"
    },
    {
        label: "Newest",
        value: "newest"
    },
    {
        label: "Oldest",
        value: "oldest"
    },
    {
        label: "Highest Spent",
        value: "spent-high"
    },
    {
        label: "Lowest Spent",
        value: "spent-low"
    }
];
const statusFilters = [
    {
        label: "All",
        value: "all",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"]
    },
    {
        label: "Active",
        value: "active",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"]
    },
    {
        label: "Inactive",
        value: "inactive",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"]
    },
    {
        label: "Pending",
        value: "pending",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
    }
];
const tagFilters = [
    {
        label: "All",
        value: "All",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"]
    },
    {
        label: "VIP",
        value: "VIP",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"]
    },
    {
        label: "New",
        value: "New",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"]
    },
    {
        label: "Returning",
        value: "Returning",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"]
    }
];
const toNumber = (value)=>{
    if (typeof value === "number") return value;
    const normalized = String(value || "").replace(/,/g, "");
    const match = normalized.match(/-?\d+(?:\.\d+)?/);
    return match ? Number(match[0]) : 0;
};
const parseAmount = (value)=>{
    if (typeof value === "number") return value;
    const normalized = String(value || "").replace(/,/g, "");
    const match = normalized.match(/-?\d+(?:\.\d+)?/);
    return match ? Number(match[0]) : 0;
};
const REMAINING_BILL_MARKER = "__remaining_bill__";
const REMAINING_BILL_PAYMENT_NOTE = "__remaining_bill_payment__";
const CUSTOMER_TOTAL_PAYMENT_BATCH_PREFIX = "__customer_total_payment__:";
const getRemainingBillDebit = (payments = [])=>(Array.isArray(payments) ? payments : []).reduce((sum, payment)=>{
        if (String(payment?.notes || "").trim() !== REMAINING_BILL_MARKER) {
            return sum;
        }
        return sum + parseAmount(payment?.paidAmount ?? payment?.amount);
    }, 0);
const normalizeCustomerPayment = (payment = {})=>{
    const amountNumber = Number(payment?.paidAmount ?? payment?.amount ?? 0);
    const paymentDate = payment?.appliedAt || payment?.date || "";
    return {
        ...payment,
        id: String(payment?._id || payment?.id || payment?.paymentId || "").trim(),
        paymentId: String(payment?._id || payment?.id || payment?.paymentId || "").trim(),
        customerId: String(payment?.customerId || "").trim(),
        saleId: String(payment?.saleId || "").trim(),
        amount: amountNumber,
        amountNumber,
        date: paymentDate,
        appliedAt: paymentDate,
        method: payment?.paymentMethod || payment?.method || "Cash",
        paymentMethod: payment?.paymentMethod || payment?.method || "Cash",
        reference: payment?.reference || "",
        billId: payment?.billId || "",
        notes: payment?.notes || "",
        transactionTimestamp: payment?.updatedAt || paymentDate || payment?.createdAt || "",
        source: "payment"
    };
};
const isCustomerTotalPaymentBatchNote = (value = "")=>String(value || "").trim().startsWith(CUSTOMER_TOTAL_PAYMENT_BATCH_PREFIX);
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
const formatStatusLabel = (value, fallback = "Pending")=>{
    const normalized = String(value || fallback).trim();
    if (!normalized) return fallback;
    return normalized.charAt(0).toUpperCase() + normalized.slice(1).toLowerCase();
};
const getEntryMatchKeys = (...values)=>values.map((value)=>String(value || "").trim().toLowerCase()).filter(Boolean);
const getCustomerSalePaymentStatus = (paidAmount, totalAmount)=>{
    const paid = Number(paidAmount || 0);
    const total = Number(totalAmount || 0);
    if (paid <= 0) return "Pending";
    if (total > 0 && paid >= total) return "Paid";
    return "Partial";
};
const getNormalizedCustomerSaleAmounts = (sale = {})=>{
    const items = Array.isArray(sale?.items) ? sale.items : Array.isArray(sale?.products) ? sale.products : [];
    const derivedSubtotal = items.reduce((sum, item)=>sum + getInvoiceAmount(getChargedSaleQuantity(item), Number(item?.salePrice ?? item?.price ?? item?.unitPrice ?? item?.retailSalePrice ?? 0)), 0);
    const derivedTotal = Math.max(Number((derivedSubtotal - parseAmount(sale?.discount) + parseAmount(sale?.taxAmount)).toFixed(2)), 0);
    const rawTotal = parseAmount(sale?.totalAmount ?? sale?.totalPrice ?? sale?.total);
    const rawPaid = parseAmount(sale?.paidAmount ?? sale?.cashReceived);
    const rawBalance = parseAmount(sale?.balance);
    const totalAmount = rawTotal > 0 ? Math.max(rawTotal, derivedTotal) : derivedTotal;
    const paidAmount = rawPaid;
    const computedBalanceAmount = Math.max(totalAmount - paidAmount, 0);
    const balanceAmount = rawBalance > 0 ? Math.max(rawBalance, computedBalanceAmount) : computedBalanceAmount;
    return {
        totalAmount,
        paidAmount,
        balanceAmount
    };
};
const formatDate = (value)=>{
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};
const downloadCSV = (filename, rows)=>{
    const csv = rows.map((row)=>row.map((cell)=>`"${String(cell ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([
        csv
    ], {
        type: "text/csv;charset=utf-8;"
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
const normalizeCustomer = (customer)=>({
        ...customer,
        id: customer._id || customer.id,
        phone: customer.mobile || customer.phone || "",
        mobile: customer.mobile || customer.phone || "",
        createdAt: customer.createdAt || customer.customerSince || null,
        customerSince: customer.createdAt || customer.customerSince || null,
        purchaseCount: Number(customer.totalPurchases ?? customer.orders ?? 0) || 0,
        totalSpent: toNumber(customer.totalSpent),
        totalPaid: toNumber(customer.totalPaid),
        accountBalance: toNumber(customer.accountBalance),
        totalDue: toNumber(customer.totalDue),
        pendingAmount: toNumber(customer.pendingAmount),
        balance: toNumber(customer.balance),
        creditLimit: toNumber(customer.creditLimit),
        lastPurchase: customer.lastPurchase || "No purchases yet",
        tags: Array.isArray(customer.tags) ? customer.tags : [],
        status: String(customer.status || "active").toLowerCase(),
        satisfaction: Number(customer.satisfaction) || 0,
        bills: Array.isArray(customer.bills) ? customer.bills : [],
        customerPayments: Array.isArray(customer.customerPayments) ? customer.customerPayments.map(normalizeCustomerPayment) : [],
        latestTransactionBalance: toNumber(customer.latestTransactionBalance ?? customer.exactPendingAmount ?? customer.totalDue ?? customer.pendingAmount ?? customer.balance ?? customer.accountBalance),
        exactPendingAmount: toNumber(customer.latestTransactionBalance ?? customer.exactPendingAmount ?? customer.totalDue ?? customer.pendingAmount ?? customer.balance ?? customer.accountBalance)
    });
const getCustomerLatestTransactionBalance = (customer = {}, matchedSales = [])=>{
    const sourceBills = Array.isArray(customer?.bills) ? customer.bills : [];
    const sourceBillsByKey = new Map();
    sourceBills.forEach((bill)=>{
        getEntryMatchKeys(bill?.id, bill?.reference, bill?.billId).forEach((key)=>{
            sourceBillsByKey.set(key, bill);
        });
    });
    const displayBills = matchedSales.map((sale, index)=>{
        const { totalAmount, paidAmount, balanceAmount } = getNormalizedCustomerSaleAmounts(sale);
        const matchedStoredBill = getEntryMatchKeys(sale?._id, sale?.invoiceNo, sale?.invoiceNumber).map((key)=>sourceBillsByKey.get(key)).find(Boolean);
        const items = Array.isArray(sale?.items) ? sale.items : Array.isArray(sale?.products) ? sale.products : [];
        const hasStoredPaidAmount = matchedStoredBill && Object.prototype.hasOwnProperty.call(matchedStoredBill, "paidAmount") && String(matchedStoredBill?.paidAmount ?? "").trim() !== "";
        const storedPaidAmount = parseAmount(matchedStoredBill?.paidAmount);
        const effectivePaidAmount = hasStoredPaidAmount ? storedPaidAmount : Number(paidAmount || 0);
        const remaining = hasStoredPaidAmount ? Math.max(totalAmount - effectivePaidAmount, 0) : Math.max(balanceAmount || totalAmount - effectivePaidAmount, 0);
        const description = items.map((item)=>item?.productName || item?.name).filter(Boolean).join(", ");
        const reference = String(sale?.invoiceNo || sale?.invoiceNumber || sale?._id || "");
        const saleStatus = formatStatusLabel(sale?.paymentStatus || sale?.purchaseStatus || matchedStoredBill?.status || getCustomerSalePaymentStatus(effectivePaidAmount, totalAmount), "Pending").toLowerCase();
        return {
            id: reference || `sale-${index + 1}`,
            date: sale?.saleDate || sale?.createdAt || "",
            description: description || "N/A",
            amountNumber: totalAmount,
            paidAmountNumber: effectivePaidAmount,
            remainingAmountNumber: remaining,
            status: saleStatus,
            reference,
            transactionTimestamp: sale?.updatedAt || matchedStoredBill?.updatedAt || sale?.createdAt || sale?.saleDate || "",
            source: "bill"
        };
    });
    const paymentHistoryByKey = new Map();
    (Array.isArray(customer?.customerPayments) ? customer.customerPayments : []).forEach((payment, index)=>{
        const normalizedPayment = normalizeCustomerPayment(payment);
        const key = String(normalizedPayment?.paymentId || normalizedPayment?.id || `PAY-${index + 1}`).trim();
        paymentHistoryByKey.set(key, normalizedPayment);
    });
    const paymentHistoryToShow = Array.from(paymentHistoryByKey.values()).sort((a, b)=>{
        const dateDiff = (getNormalizedDateValue(b.date) ?? 0) - (getNormalizedDateValue(a.date) ?? 0);
        if (dateDiff !== 0) return dateDiff;
        return getTransactionSortValue(b.transactionTimestamp, b.date) - getTransactionSortValue(a.transactionTimestamp, a.date);
    });
    const paymentTransactionsToShow = paymentHistoryToShow.reduce((entries, payment)=>{
        const isCustomerTotalPaymentBatch = isCustomerTotalPaymentBatchNote(payment?.notes);
        const isOldBillPayment = String(payment?.notes || "").trim() === REMAINING_BILL_PAYMENT_NOTE;
        if (isCustomerTotalPaymentBatch) {
            const batchKey = String(payment?.notes || "").trim();
            const matchingEntry = entries.find((entry)=>String(entry?.notes || "").trim() === batchKey);
            if (matchingEntry) {
                matchingEntry.amountNumber = Number(matchingEntry.amountNumber || 0) + Number(payment?.amountNumber || 0);
                matchingEntry.paymentIds = [
                    ...new Set([
                        ...Array.isArray(matchingEntry.paymentIds) ? matchingEntry.paymentIds : [],
                        String(payment?.paymentId || payment?.id || "").trim()
                    ].filter(Boolean))
                ];
                matchingEntry.isGroupedPayment = matchingEntry.paymentIds.length > 1;
                return entries;
            }
            entries.push({
                ...payment,
                paymentIds: [
                    String(payment?.paymentId || payment?.id || "").trim()
                ].filter(Boolean),
                isGroupedPayment: false
            });
            return entries;
        }
        if (!isOldBillPayment) {
            entries.push({
                ...payment
            });
            return entries;
        }
        const matchingEntry = entries.find((entry)=>String(entry?.notes || "").trim() !== REMAINING_BILL_PAYMENT_NOTE && String(entry?.reference || "").trim() === String(payment?.reference || "").trim() && String(entry?.method || "").trim() === String(payment?.method || "").trim() && getNormalizedDateValue(entry?.date) === getNormalizedDateValue(payment?.date));
        if (matchingEntry) {
            matchingEntry.amountNumber = Number(matchingEntry.amountNumber || 0) + Number(payment?.amountNumber || 0);
            return entries;
        }
        entries.push({
            ...payment
        });
        return entries;
    }, []);
    const transactionFeed = [
        ...displayBills.map((bill, index)=>({
                id: `bill-${bill.id}-${index}`,
                type: "bill",
                date: bill.date,
                transactionTimestamp: bill.transactionTimestamp,
                reference: bill.reference,
                particulars: bill.description,
                debit: bill.amountNumber,
                credit: 0,
                savedOrder: index,
                status: formatStatusLabel(bill.status, "Pending")
            })),
        ...paymentTransactionsToShow.map((payment, index)=>({
                id: `payment-${payment.id}-${index}`,
                type: "payment",
                date: payment.date,
                transactionTimestamp: payment.transactionTimestamp,
                reference: payment.reference || payment.billId || payment.id,
                particulars: isCustomerTotalPaymentBatchNote(payment?.notes) ? "N/A" : String(payment?.notes || "").trim() === REMAINING_BILL_PAYMENT_NOTE ? "old bill payment" : payment.notes || "N/A",
                debit: 0,
                credit: Number(payment.amountNumber || 0),
                savedOrder: displayBills.length + index,
                status: "Received",
                method: payment.method,
                notes: payment.notes || ""
            }))
    ];
    let runningBalance = 0;
    const baseTransactionsWithBalance = [
        ...transactionFeed
    ].sort((a, b)=>{
        const dateDiff = (getNormalizedDateValue(a.date) ?? 0) - (getNormalizedDateValue(b.date) ?? 0);
        if (dateDiff !== 0) return dateDiff;
        const timestampDiff = getTransactionSortValue(a.transactionTimestamp, a.date) - getTransactionSortValue(b.transactionTimestamp, b.date);
        if (timestampDiff !== 0) return timestampDiff;
        return a.savedOrder - b.savedOrder;
    }).map((entry)=>{
        runningBalance = runningBalance + entry.debit - entry.credit;
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
    const latestComputedBalanceBeforeOldBill = Number(baseTransactionsWithBalance?.[0]?.balance || 0);
    const persistedPendingAmount = toNumber(customer?.latestTransactionBalance ?? customer?.exactPendingAmount ?? customer?.totalDue ?? customer?.pendingAmount ?? customer?.balance ?? customer?.accountBalance);
    const explicitBlankBillDebit = getRemainingBillDebit(customer?.customerPayments);
    const blankBillDebit = explicitBlankBillDebit > 0 ? explicitBlankBillDebit : Math.max(persistedPendingAmount - latestComputedBalanceBeforeOldBill, 0);
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
    runningBalance = 0;
    const chronologicalTransactions = [
        ...transactionFeed,
        blankBillRow
    ].sort((a, b)=>{
        const dateDiff = (getNormalizedDateValue(a.date) ?? 0) - (getNormalizedDateValue(b.date) ?? 0);
        if (dateDiff !== 0) return dateDiff;
        const timestampDiff = getTransactionSortValue(a.transactionTimestamp, a.date) - getTransactionSortValue(b.transactionTimestamp, b.date);
        if (timestampDiff !== 0) return timestampDiff;
        return a.savedOrder - b.savedOrder;
    });
    const transactionsWithBalance = chronologicalTransactions.map((entry)=>{
        runningBalance = runningBalance + entry.debit - entry.credit;
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
    const latestTransactionBalance = Number(transactionsWithBalance?.[0]?.balance || 0);
    if (latestTransactionBalance < 0 && persistedPendingAmount > 0) {
        return persistedPendingAmount;
    }
    return latestTransactionBalance;
};
const extractSalesArray = (response)=>{
    if (Array.isArray(response?.sales)) return response.sales;
    if (Array.isArray(response?.data?.sales)) return response.data.sales;
    if (Array.isArray(response?.data?.data)) return response.data.data;
    if (Array.isArray(response?.data)) return response.data;
    if (Array.isArray(response)) return response;
    return [];
};
const getCustomerTimestamp = (customer)=>{
    const parsed = new Date(customer?.createdAt || customer?.customerSince || 0).getTime();
    return Number.isNaN(parsed) ? 0 : parsed;
};
const normalizeCustomerLookupValue = (value)=>String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
const buildCustomerLookupKeys = (customerLike = {})=>{
    const customerObject = customerLike?.customer && typeof customerLike.customer === "object" ? customerLike.customer : customerLike?.selectedCustomer && typeof customerLike.selectedCustomer === "object" ? customerLike.selectedCustomer : {};
    const keys = [
        customerLike?.name,
        customerLike?.customerName,
        customerLike?.companyName,
        customerLike?.company,
        customerLike?.contactPerson,
        customerObject?.name,
        customerObject?.companyName,
        customerObject?.company,
        customerObject?.contactPerson
    ].map(normalizeCustomerLookupValue).filter(Boolean).filter((value)=>value !== "walk-in" && value !== "walk in");
    return [
        ...new Set(keys)
    ];
};
const matchesCustomerSale = (sale, customer)=>{
    const saleCustomer = sale?.customer || sale?.selectedCustomer || {};
    const saleCustomerId = sale?.customerId || saleCustomer?._id || saleCustomer?.id || "";
    const targetId = customer?.id || customer?._id || "";
    const saleCnic = String(sale?.cnic || sale?.customerCnic || saleCustomer?.cnic || "").trim();
    const targetCnic = String(customer?.cnic || "").trim();
    const salePhone = String(sale?.phone || sale?.mobile || sale?.customerPhone || sale?.customerMobile || saleCustomer?.phone || saleCustomer?.mobile || "").replace(/\D/g, "").trim();
    const targetPhone = String(customer?.phone || customer?.mobile || "").replace(/\D/g, "").trim();
    const saleLookupKeys = buildCustomerLookupKeys({
        ...sale,
        customer: saleCustomer
    });
    const customerLookupKeys = buildCustomerLookupKeys(customer);
    return targetId && saleCustomerId && String(saleCustomerId) === String(targetId) || targetCnic && saleCnic && saleCnic === targetCnic || targetPhone && salePhone && salePhone === targetPhone || saleLookupKeys.some((key)=>customerLookupKeys.includes(key));
};
const getSaleDateValue = (sale)=>sale?.saleDate || sale?.createdAt || sale?.timestamp || null;
const getReturnedSaleQuantity = (product = {})=>Math.max(Number(product?.returnedQuantity ?? product?.returnedQty ?? product?.returnQty ?? product?.quantityReturned ?? 0) || 0, 0);
const getChargedSaleQuantity = (product = {})=>Math.max(Number(product?.chargedQuantity ?? product?.quantity ?? product?.qty ?? 0) - getReturnedSaleQuantity(product), 0);
const getInvoiceAmount = (quantity, unitPrice)=>Number((Math.max(Number(quantity) || 0, 0) * (Number(unitPrice) || 0)).toFixed(2));
const getCustomerSaleTotal = (sale = {})=>{
    const invoiceTotal = (Array.isArray(sale?.products) ? sale.products : []).reduce((sum, product)=>sum + getInvoiceAmount(getChargedSaleQuantity(product), Number(product?.salePrice ?? product?.price ?? product?.retailSalePrice ?? 0)), 0);
    return Number(Math.max(invoiceTotal - (Number(sale?.discount) || 0), 0).toFixed(2));
};
const extractCustomerPayments = (response)=>Array.isArray(response?.customerpayments) ? response.customerpayments : Array.isArray(response?.data?.customerpayments) ? response.data.customerpayments : Array.isArray(response?.data) ? response.data : Array.isArray(response) ? response : [];
const getDocumentTotalAmount = (entry = {})=>{
    const explicitTotal = [
        entry?.totalAmount,
        entry?.grandTotal,
        entry?.invoiceTotal,
        entry?.billAmount,
        entry?.billTotal,
        entry?.saleTotal,
        entry?.total
    ].find((value)=>value !== undefined && value !== null && String(value).trim() !== "");
    if (explicitTotal !== undefined) {
        return toNumber(explicitTotal);
    }
    if (Array.isArray(entry?.items) || Array.isArray(entry?.products)) {
        return getCustomerSaleTotal(entry);
    }
    return 0;
};
const sumUniqueDocumentTotals = (entries = [])=>{
    const seen = new Set();
    return entries.reduce((sum, entry, index)=>{
        if (!entry || typeof entry !== "object") return sum;
        const total = getDocumentTotalAmount(entry);
        const key = String(entry?._id || entry?.id || entry?.saleId || entry?.billId || entry?.invoiceNo || entry?.invoiceNumber || `entry-${index}-${total}`).trim();
        if (!key || seen.has(key)) return sum;
        seen.add(key);
        return sum + total;
    }, 0);
};
const resolveCustomerTotalSpending = (response, fallbackCustomer = {})=>{
    const directTotalCandidates = [
        response?.totalSpent,
        response?.totalSalesAmount,
        response?.totalBillAmount,
        response?.billTotal,
        response?.salesTotal,
        response?.data?.totalSpent,
        response?.data?.totalSalesAmount,
        response?.data?.totalBillAmount,
        response?.customerPayment?.totalSpent,
        response?.customerPayment?.totalSalesAmount,
        response?.customerPayment?.totalBillAmount,
        response?.data?.customerPayment?.totalSpent,
        response?.data?.customerPayment?.totalSalesAmount,
        response?.data?.customerPayment?.totalBillAmount
    ];
    const directTotal = directTotalCandidates.find((value)=>value !== undefined && value !== null && String(value).trim() !== "");
    if (directTotal !== undefined) {
        return {
            totalSpent: toNumber(directTotal),
            resolved: true
        };
    }
    const nestedCollections = [
        response?.bills,
        response?.sales,
        response?.customerPayment?.bills,
        response?.customerPayment?.sales,
        response?.data?.bills,
        response?.data?.sales,
        response?.data?.customerPayment?.bills,
        response?.data?.customerPayment?.sales
    ].find((collection)=>Array.isArray(collection) && collection.length > 0);
    if (nestedCollections) {
        return {
            totalSpent: sumUniqueDocumentTotals(nestedCollections),
            resolved: true
        };
    }
    const paymentEntries = extractCustomerPayments(response);
    if (paymentEntries.length > 0) {
        const relatedDocuments = paymentEntries.flatMap((payment)=>[
                payment?.sale,
                payment?.bill,
                payment
            ]).filter((entry)=>entry && typeof entry === "object");
        const relatedTotal = sumUniqueDocumentTotals(relatedDocuments);
        if (relatedTotal > 0) {
            return {
                totalSpent: relatedTotal,
                resolved: true
            };
        }
    }
    return {
        totalSpent: toNumber(fallbackCustomer?.totalSpent),
        resolved: false
    };
};
const resolveCustomerTotalPaid = (response, fallbackCustomer = {})=>{
    const getDisplayedCustomerPaymentTotal = (entries = [])=>{
        const paymentHistoryByKey = new Map();
        (Array.isArray(entries) ? entries : []).forEach((payment, index)=>{
            const normalizedPayment = normalizeCustomerPayment(payment);
            const key = String(normalizedPayment?.paymentId || normalizedPayment?.id || `PAY-${index + 1}`).trim();
            paymentHistoryByKey.set(key, normalizedPayment);
        });
        const paymentHistoryToShow = Array.from(paymentHistoryByKey.values()).sort((a, b)=>{
            const dateDiff = (getNormalizedDateValue(b.date) ?? 0) - (getNormalizedDateValue(a.date) ?? 0);
            if (dateDiff !== 0) return dateDiff;
            return getTransactionSortValue(b.transactionTimestamp, b.date) - getTransactionSortValue(a.transactionTimestamp, a.date);
        });
        const paymentTransactionsToShow = paymentHistoryToShow.reduce((entriesToShow, payment)=>{
            const isRemainingBillMarker = String(payment?.notes || "").trim() === REMAINING_BILL_MARKER;
            const isCustomerTotalPaymentBatch = isCustomerTotalPaymentBatchNote(payment?.notes);
            const isOldBillPayment = String(payment?.notes || "").trim() === REMAINING_BILL_PAYMENT_NOTE;
            if (isRemainingBillMarker) {
                return entriesToShow;
            }
            if (isCustomerTotalPaymentBatch) {
                const batchKey = String(payment?.notes || "").trim();
                const matchingEntry = entriesToShow.find((entry)=>String(entry?.notes || "").trim() === batchKey);
                if (matchingEntry) {
                    matchingEntry.amountNumber = Number(matchingEntry.amountNumber || 0) + Number(payment?.amountNumber || 0);
                    matchingEntry.paymentIds = [
                        ...new Set([
                            ...Array.isArray(matchingEntry.paymentIds) ? matchingEntry.paymentIds : [],
                            String(payment?.paymentId || payment?.id || "").trim()
                        ].filter(Boolean))
                    ];
                    matchingEntry.isGroupedPayment = matchingEntry.paymentIds.length > 1;
                    return entriesToShow;
                }
                entriesToShow.push({
                    ...payment,
                    paymentIds: [
                        String(payment?.paymentId || payment?.id || "").trim()
                    ].filter(Boolean),
                    isGroupedPayment: false
                });
                return entriesToShow;
            }
            if (!isOldBillPayment) {
                entriesToShow.push({
                    ...payment
                });
                return entriesToShow;
            }
            const matchingEntry = entriesToShow.find((entry)=>String(entry?.notes || "").trim() !== REMAINING_BILL_PAYMENT_NOTE && String(entry?.reference || "").trim() === String(payment?.reference || "").trim() && String(entry?.method || "").trim() === String(payment?.method || "").trim() && getNormalizedDateValue(entry?.date) === getNormalizedDateValue(payment?.date));
            if (matchingEntry) {
                matchingEntry.amountNumber = Number(matchingEntry.amountNumber || 0) + Number(payment?.amountNumber || 0);
                return entriesToShow;
            }
            entriesToShow.push({
                ...payment
            });
            return entriesToShow;
        }, []);
        return paymentTransactionsToShow.reduce((sum, payment)=>sum + Number(payment?.amountNumber || 0), 0);
    };
    const paymentEntries = extractCustomerPayments(response);
    if (paymentEntries.length > 0) {
        return {
            totalPaid: getDisplayedCustomerPaymentTotal(paymentEntries),
            resolved: true
        };
    }
    const nestedPayments = [
        response?.payments,
        response?.customerPayment?.payments,
        response?.data?.payments,
        response?.data?.customerPayment?.payments
    ].find((collection)=>Array.isArray(collection) && collection.length > 0);
    if (nestedPayments) {
        return {
            totalPaid: getDisplayedCustomerPaymentTotal(nestedPayments),
            resolved: true
        };
    }
    const directPaidCandidates = [
        response?.totalPaid,
        response?.totalPayments,
        response?.totalReceived,
        response?.paidAmount,
        response?.receivedAmount,
        response?.data?.totalPaid,
        response?.data?.totalPayments,
        response?.data?.totalReceived,
        response?.data?.paidAmount,
        response?.data?.receivedAmount,
        response?.customerPayment?.totalPaid,
        response?.customerPayment?.totalPayments,
        response?.customerPayment?.totalReceived,
        response?.customerPayment?.paidAmount,
        response?.data?.customerPayment?.totalPaid,
        response?.data?.customerPayment?.totalPayments,
        response?.data?.customerPayment?.totalReceived,
        response?.data?.customerPayment?.paidAmount
    ];
    const directPaid = directPaidCandidates.find((value)=>value !== undefined && value !== null && String(value).trim() !== "");
    if (directPaid !== undefined) {
        return {
            totalPaid: toNumber(directPaid),
            resolved: true
        };
    }
    const fallbackPayments = Array.isArray(fallbackCustomer?.customerPayments) ? fallbackCustomer.customerPayments : [];
    return {
        totalPaid: getDisplayedCustomerPaymentTotal(fallbackPayments),
        resolved: fallbackPayments.length > 0
    };
};
function Customers() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const requestedCustomerId = searchParams.get("customerId");
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [customers, setCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sales, setSales] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedStatus, setSelectedStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedTag, setSelectedTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("list");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("name-asc");
    const [viewCustomer, setViewCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeCustomerTab, setActiveCustomerTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    const [deleteModalOpen, setDeleteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [customerToDelete, setCustomerToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [canCreateCustomer, setCanCreateCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canEditCustomer, setCanEditCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canDeleteCustomer, setCanDeleteCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPaymentModal, setShowPaymentModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedBill, setSelectedBill] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [paymentForm, setPaymentForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        method: "",
        date: new Date().toISOString().split("T")[0],
        partialAmount: ""
    });
    const [payingBillId, setPayingBillId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Customers.useEffect": ()=>{
            const syncPermissions = {
                "Customers.useEffect.syncPermissions": ()=>{
                    const { permissions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readStoredAuth"])();
                    setCanCreateCustomer((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPermission"])(permissions, "CUSTOMER_CREATE"));
                    setCanEditCustomer((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPermission"])(permissions, "CUSTOMER_EDIT"));
                    setCanDeleteCustomer((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPermission"])(permissions, "CUSTOMER_DELETE"));
                }
            }["Customers.useEffect.syncPermissions"];
            syncPermissions();
            window.addEventListener("storage", syncPermissions);
            return ({
                "Customers.useEffect": ()=>window.removeEventListener("storage", syncPermissions)
            })["Customers.useEffect"];
        }
    }["Customers.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Customers.useEffect": ()=>{
            if (viewCustomer) {
                setActiveCustomerTab("overview");
            }
        }
    }["Customers.useEffect"], [
        viewCustomer
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Customers.useEffect": ()=>{
            if (!showPaymentModal || !selectedBill) return;
            setPaymentForm({
                method: "",
                date: new Date().toISOString().split("T")[0],
                partialAmount: selectedBill?.source === "customer-total" ? Number(selectedBill.remaining || 0) : 0
            });
        }
    }["Customers.useEffect"], [
        showPaymentModal,
        selectedBill
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Customers.useEffect": ()=>{
            const fetchCustomers = {
                "Customers.useEffect.fetchCustomers": async ()=>{
                    try {
                        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/customers", {
                            method: "GET"
                        });
                        if (res.success) {
                            const baseCustomers = (res.customers || []).map(normalizeCustomer);
                            const refreshedCustomers = await Promise.all(baseCustomers.map({
                                "Customers.useEffect.fetchCustomers": async (customer)=>{
                                    const customerId = String(customer?.id || "").trim();
                                    if (!customerId) {
                                        return customer;
                                    }
                                    try {
                                        const [detailResult, spendingResult, paymentsResult] = await Promise.allSettled([
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])(`/customers/${customerId}`, {
                                                method: "GET",
                                                suppressErrorToast: true,
                                                suppressErrorLog: true
                                            }),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])(`/customerpayments/getCustomerPaymentById/${customerId}`, {
                                                method: "GET",
                                                suppressErrorToast: true,
                                                suppressErrorLog: true
                                            }),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])(`/customerpayments/getCustomerPaymentsByCustomer/${customerId}`, {
                                                method: "GET",
                                                suppressErrorToast: true,
                                                suppressErrorLog: true
                                            })
                                        ]);
                                        const detailResponse = detailResult.status === "fulfilled" ? detailResult.value : null;
                                        const paymentsResponse = paymentsResult.status === "fulfilled" ? paymentsResult.value : null;
                                        const spendingResponse = spendingResult.status === "fulfilled" ? spendingResult.value : null;
                                        const customerPayments = extractCustomerPayments(paymentsResponse);
                                        const mergedCustomer = {
                                            ...customer,
                                            ...detailResponse?.success && detailResponse?.customer ? detailResponse.customer : {}
                                        };
                                        const totalSpendingResult = resolveCustomerTotalSpending(spendingResponse, mergedCustomer);
                                        const totalPaidResult = resolveCustomerTotalPaid(paymentsResponse, {
                                            ...mergedCustomer,
                                            customerPayments
                                        });
                                        return normalizeCustomer({
                                            ...mergedCustomer,
                                            customerPayments,
                                            totalSpent: totalSpendingResult.totalSpent,
                                            totalSpentFromPayments: totalSpendingResult.resolved,
                                            totalPaid: totalPaidResult.totalPaid,
                                            totalPaidFromPayments: totalPaidResult.resolved
                                        });
                                    } catch  {
                                    // Keep the list usable even if a detail refresh fails for one customer.
                                    }
                                    return customer;
                                }
                            }["Customers.useEffect.fetchCustomers"]));
                            setCustomers(refreshedCustomers);
                        } else {
                            console.error("Failed to fetch customers:", res.message);
                        }
                    } catch (error) {
                        console.error("Fetch Customers Error:", error);
                    }
                }
            }["Customers.useEffect.fetchCustomers"];
            fetchCustomers();
            const handleFocus = {
                "Customers.useEffect.handleFocus": ()=>{
                    fetchCustomers();
                }
            }["Customers.useEffect.handleFocus"];
            const handleVisibilityChange = {
                "Customers.useEffect.handleVisibilityChange": ()=>{
                    if (document.visibilityState === "visible") {
                        fetchCustomers();
                    }
                }
            }["Customers.useEffect.handleVisibilityChange"];
            const intervalId = window.setInterval({
                "Customers.useEffect.intervalId": ()=>{
                    fetchCustomers();
                }
            }["Customers.useEffect.intervalId"], 15000);
            window.addEventListener("focus", handleFocus);
            document.addEventListener("visibilitychange", handleVisibilityChange);
            return ({
                "Customers.useEffect": ()=>{
                    window.clearInterval(intervalId);
                    window.removeEventListener("focus", handleFocus);
                    document.removeEventListener("visibilitychange", handleVisibilityChange);
                }
            })["Customers.useEffect"];
        }
    }["Customers.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Customers.useEffect": ()=>{
            const fetchSales = {
                "Customers.useEffect.fetchSales": async ()=>{
                    try {
                        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/sales", {
                            method: "GET"
                        });
                        setSales(extractSalesArray(response));
                    } catch (error) {
                        console.error("Fetch Sales Error:", error);
                    }
                }
            }["Customers.useEffect.fetchSales"];
            fetchSales();
        }
    }["Customers.useEffect"], []);
    const enrichedCustomers = customers.map((customer)=>{
        const matchedSales = sales.filter((sale)=>matchesCustomerSale(sale, customer));
        const baseTotalSpent = customer.totalSpentFromPayments ? toNumber(customer.totalSpent) : matchedSales.reduce((sum, sale)=>sum + getCustomerSaleTotal(sale), 0);
        const oldBillAmount = getRemainingBillDebit(customer?.customerPayments);
        const totalSpent = baseTotalSpent + oldBillAmount;
        const customerPaymentEntries = Array.isArray(customer.customerPayments) ? customer.customerPayments : [];
        const entriesWithType = customerPaymentEntries.filter((payment)=>{
            const rawType = payment?.type ?? payment?.Type ?? payment?.transactionType ?? payment?.paymentType;
            return rawType !== undefined && rawType !== null && String(rawType).trim() !== "";
        });
        const paymentEntriesToSum = entriesWithType.length > 0 ? entriesWithType.filter((payment)=>String(payment?.type ?? payment?.Type ?? payment?.transactionType ?? payment?.paymentType ?? "").trim().toLowerCase() === "payment") : customerPaymentEntries;
        const totalPaid = customer.totalPaidFromPayments ? toNumber(customer.totalPaid) : paymentEntriesToSum.reduce((sum, payment)=>sum + toNumber(payment?.paidAmount ?? payment?.amount), 0);
        const latestTransactionBalance = getCustomerLatestTransactionBalance(customer, matchedSales);
        const latestSale = matchedSales.slice().sort((a, b)=>new Date(getSaleDateValue(b) || 0).getTime() - new Date(getSaleDateValue(a) || 0).getTime())[0];
        return {
            ...customer,
            purchaseCount: matchedSales.length,
            totalSpent,
            totalPaid,
            latestTransactionBalance,
            accountBalance: latestTransactionBalance,
            totalDue: latestTransactionBalance,
            pendingAmount: latestTransactionBalance,
            balance: latestTransactionBalance,
            exactPendingAmount: latestTransactionBalance,
            lastPurchase: latestSale ? getSaleDateValue(latestSale) || customer.lastPurchase : "No purchases yet"
        };
    });
    const resolvedViewCustomer = viewCustomer ? enrichedCustomers.find((customer)=>String(customer.id) === String(viewCustomer.id)) || viewCustomer : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Customers.useEffect": ()=>{
            if (!requestedCustomerId || customers.length === 0) return;
            const matchedCustomer = enrichedCustomers.find({
                "Customers.useEffect": (customer)=>String(customer.id) === String(requestedCustomerId)
            }["Customers.useEffect"]) || customers.find({
                "Customers.useEffect": (customer)=>String(customer.id) === String(requestedCustomerId)
            }["Customers.useEffect"]);
            if (!matchedCustomer) return;
            if (String(viewCustomer?.id) === String(matchedCustomer.id)) return;
            setViewCustomer(matchedCustomer);
        }
    }["Customers.useEffect"], [
        customers,
        enrichedCustomers,
        requestedCustomerId,
        viewCustomer
    ]);
    const filteredCustomers = enrichedCustomers.filter((customer)=>{
        const q = searchTerm.toLowerCase();
        const customerStatus = String(customer.status || "").toLowerCase();
        const normalizedSelectedStatus = String(selectedStatus || "").toLowerCase();
        const normalizedSelectedTag = String(selectedTag || "").toLowerCase();
        const customerTags = Array.isArray(customer.tags) ? customer.tags.map((tag)=>String(tag || "").toLowerCase()) : [];
        const purchaseCount = Number(customer.purchaseCount || 0);
        const matchesSearch = customer.name?.toLowerCase().includes(q) || customer.email?.toLowerCase().includes(q) || customer.phone?.includes(searchTerm) || customer.cnic?.includes(searchTerm) || customer.address?.toLowerCase().includes(q) || customer.lastPurchase?.toLowerCase().includes(q);
        const matchesStatus = normalizedSelectedStatus === "all" || customerStatus === normalizedSelectedStatus;
        const matchesTag = normalizedSelectedTag === "all" || (normalizedSelectedTag === "new" ? purchaseCount <= 1 : normalizedSelectedTag === "returning" ? purchaseCount > 1 : customerTags.includes(normalizedSelectedTag));
        return matchesSearch && matchesStatus && matchesTag;
    }).sort((a, b)=>{
        const nameComparison = String(a?.name || "").localeCompare(String(b?.name || ""), undefined, {
            sensitivity: "base"
        });
        switch(sortBy){
            case "name-asc":
                return nameComparison || getCustomerTimestamp(b) - getCustomerTimestamp(a);
            case "name-desc":
                return nameComparison * -1 || getCustomerTimestamp(b) - getCustomerTimestamp(a);
            case "newest":
                return getCustomerTimestamp(b) - getCustomerTimestamp(a);
            case "oldest":
                return getCustomerTimestamp(a) - getCustomerTimestamp(b);
            case "spent-high":
                return toNumber(b.totalSpent) - toNumber(a.totalSpent);
            case "spent-low":
                return toNumber(a.totalSpent) - toNumber(b.totalSpent);
            default:
                return 0;
        }
    });
    const stats = {
        total: enrichedCustomers.length,
        active: enrichedCustomers.filter((c)=>c.status === "active").length,
        totalSpent: enrichedCustomers.reduce((sum, c)=>sum + toNumber(c.totalSpent), 0),
        avgSatisfaction: enrichedCustomers.length > 0 ? Math.round(enrichedCustomers.reduce((sum, c)=>sum + (c.satisfaction || 0), 0) / enrichedCustomers.length) : 0
    };
    const customerSales = resolvedViewCustomer ? sales.filter((sale)=>matchesCustomerSale(sale, resolvedViewCustomer)) : [];
    const customerPurchasedProducts = customerSales.flatMap((sale)=>(Array.isArray(sale?.items) ? sale.items : Array.isArray(sale?.products) ? sale.products : []).map((item, index)=>({
                id: `${sale?._id || sale?.invoiceNo || "sale"}-${item?.productId || index}`,
                saleId: sale?._id || "",
                invoiceNo: sale?.invoiceNo || "-",
                date: formatDate(sale?.createdAt || sale?.timestamp) || "-",
                productName: item?.productName || item?.name || "-",
                brand: item?.brand || "-",
                category: item?.category || "-",
                serialNumber: item?.serialNumber || "-",
                quantity: Number(item?.quantity ?? item?.qty) || 0,
                unitPrice: Number(item?.unitPrice ?? item?.salePrice ?? item?.price) || 0,
                totalPrice: Number(item?.totalPrice ?? item?.total) || (Number(item?.quantity ?? item?.qty) || 0) * (Number(item?.unitPrice ?? item?.salePrice ?? item?.price) || 0),
                status: sale?.status || "Completed",
                storage: [
                    item?.selectedStorageType,
                    item?.selectedStorageCapacity
                ].filter(Boolean).join(" ") || "-",
                ram: item?.selectedRamMemory || "-"
            })));
    const customerBills = customerSales.map((sale, index)=>{
        const totalAmount = Number(sale?.totalAmount ?? sale?.total ?? getCustomerSaleTotal(sale)) || 0;
        const paidAmount = Number(sale?.paidAmount ?? sale?.cashReceived) || 0;
        const remainingAmount = Math.max(totalAmount - paidAmount, 0);
        const saleItems = Array.isArray(sale?.items) ? sale.items : Array.isArray(sale?.products) ? sale.products : [];
        const description = saleItems.map((item)=>item?.productName || item?.name).filter(Boolean).join(", ");
        return {
            id: sale?._id || `bill-${index}`,
            saleId: sale?._id || "",
            billId: sale?.invoiceNo || sale?._id || `BILL-${index + 1}`,
            date: formatDate(sale?.createdAt || sale?.timestamp) || "-",
            description: description || `Sale bill ${sale?.invoiceNo || index + 1}`,
            amount: totalAmount,
            paidAmount: Math.max(0, paidAmount),
            remaining: remainingAmount,
            status: remainingAmount <= 0 ? "paid" : paidAmount > 0 ? "partial" : "pending",
            dueDate: "N/A"
        };
    });
    const totalOutstandingAmount = resolvedViewCustomer ? Number(resolvedViewCustomer.latestTransactionBalance || 0) : customerBills.reduce((sum, bill)=>sum + Number(bill.remaining || 0), 0);
    const customerPaymentHistory = customerSales.flatMap((sale)=>{
        const billId = sale?.invoiceNo || sale?._id || "-";
        const payments = Array.isArray(sale?.paymentHistory) ? sale.paymentHistory : [];
        if (payments.length > 0) {
            return payments.map((payment, index)=>({
                    id: payment?.id || `PURPAY-${String(sale?._id || sale?.invoiceNo || index).slice(-6)}`,
                    date: payment?.date || sale?.timestamp || sale?.createdAt || "",
                    billId,
                    amount: Number(payment?.amount) || 0,
                    method: payment?.method || "N/A",
                    reference: payment?.reference || ""
                }));
        }
        const initialPaidAmount = Number(sale?.paidAmount ?? sale?.cashReceived) || 0;
        if (initialPaidAmount > 0) {
            return [
                {
                    id: `PURPAY-${String(sale?._id || sale?.invoiceNo || "").slice(-6)}`,
                    date: sale?.timestamp || sale?.createdAt || "",
                    billId,
                    amount: initialPaidAmount,
                    method: sale?.paymentMethod || "N/A",
                    reference: ""
                }
            ];
        }
        return [];
    });
    const handlePrintCustomerBills = ()=>{
        if (("TURBOPACK compile-time value", "object") === "undefined" || customerBills.length === 0 || !resolvedViewCustomer) return;
        const rows = customerBills.map((bill)=>`
          <tr>
            <td>${bill.billId}</td>
            <td>${bill.date}</td>
            <td>${bill.description}</td>
            <td>Rs. ${Number(bill.amount).toLocaleString()}</td>
            <td>Rs. ${Number(bill.remaining).toLocaleString()}</td>
            <td>${bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}</td>
            <td>${bill.dueDate}</td>
          </tr>`).join("");
        const printWindow = window.open("", "_blank", "width=1000,height=700");
        if (!printWindow) return;
        printWindow.document.write(`
      <html>
        <head>
          <title>Bills from ${resolvedViewCustomer.name}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 24px; color: #111827; }
            h1 { margin: 0 0 8px; }
            p { margin: 0 0 20px; color: #4b5563; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #d1d5db; padding: 10px; text-align: left; font-size: 12px; }
            th { background: #f3f4f6; }
          </style>
        </head>
        <body>
          <h1>Bills from ${resolvedViewCustomer.name}</h1>
          <p>Total outstanding: Rs. ${totalOutstandingAmount.toLocaleString()}</p>
          <table>
            <thead>
              <tr>
                <th>Bill ID</th>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Remaining</th>
                <th>Status</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </body>
      </html>
    `);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    };
    const handlePrintCustomerPaymentReport = (payment = null)=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const payments = payment ? [
            payment
        ] : customerPaymentHistory;
        if (!payments.length || !resolvedViewCustomer) return;
        const rows = payments.map((entry)=>`
          <tr>
            <td>${entry.id}</td>
            <td>${formatDate(entry.date)}</td>
            <td>${entry.billId}</td>
            <td>Rs. ${Number(entry.amount || 0).toLocaleString()}</td>
            <td>${entry.method || "N/A"}</td>
            <td>${entry.reference || ""}</td>
          </tr>`).join("");
        const printWindow = window.open("", "_blank", "width=1000,height=700");
        if (!printWindow) return;
        printWindow.document.write(`
      <html>
        <head>
          <title>Payment History Report</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 24px; color: #111827; }
            h1 { margin: 0 0 8px; }
            p { margin: 0 0 20px; color: #4b5563; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #d1d5db; padding: 10px; text-align: left; font-size: 12px; }
            th { background: #f3f4f6; }
          </style>
        </head>
        <body>
          <h1>Payment History Report</h1>
          <p>${resolvedViewCustomer.name}</p>
          <table>
            <thead>
              <tr>
                <th>Payment ID</th>
                <th>Date</th>
                <th>Bill ID</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Reference</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </body>
      </html>
    `);
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
    };
    const handleRecordBillPayment = async (e)=>{
        e.preventDefault();
        if (!selectedBill || payingBillId) return;
        const paidAmount = Number(paymentForm.partialAmount || 0);
        if (!paidAmount || paidAmount <= 0 || paidAmount > Number(selectedBill.remaining || 0)) {
            alert("Partial amount must be greater than 0 and less than or equal to remaining amount.");
            return;
        }
        if (!paymentForm.method) {
            alert("Payment method is required.");
            return;
        }
        try {
            setPayingBillId(selectedBill.saleId || selectedBill.billId);
            if (selectedBill.source === "customer-total") {
                let remainingToApply = paidAmount;
                const unpaidBills = customerBills.filter((bill)=>Number(bill.remaining || 0) > 0);
                const updatedSalesMap = new Map();
                for (const bill of unpaidBills){
                    if (remainingToApply <= 0) break;
                    const amountForBill = Math.min(remainingToApply, Number(bill.remaining || 0));
                    const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])(`/sales/${bill.saleId}/payment`, {
                        method: "POST",
                        data: {
                            paidAmount: amountForBill,
                            paymentMethod: paymentForm.method,
                            paymentDate: paymentForm.date
                        }
                    });
                    if (!response?.success) {
                        alert(response?.message || `Failed to record payment for bill ${bill.billId}.`);
                        return;
                    }
                    if (response.sale?._id) {
                        updatedSalesMap.set(String(response.sale._id), response.sale);
                    }
                    remainingToApply -= amountForBill;
                }
                if (updatedSalesMap.size > 0) {
                    setSales((prev)=>prev.map((sale)=>updatedSalesMap.get(String(sale?._id)) || sale));
                }
            } else {
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])(`/sales/${selectedBill.saleId}/payment`, {
                    method: "POST",
                    data: {
                        paidAmount,
                        paymentMethod: paymentForm.method,
                        paymentDate: paymentForm.date
                    }
                });
                if (!response?.success) {
                    alert(response?.message || "Failed to record payment.");
                    return;
                }
                const updatedSale = response.sale;
                if (updatedSale?._id) {
                    setSales((prev)=>prev.map((sale)=>String(sale?._id) === String(updatedSale._id) ? updatedSale : sale));
                }
            }
            setCustomers((prev)=>prev.map((customer)=>customer.id === viewCustomer?.id ? {
                        ...customer,
                        latestTransactionBalance: Math.max(0, Number(customer.latestTransactionBalance ?? customer.exactPendingAmount ?? customer.accountBalance ?? 0) - paidAmount),
                        accountBalance: Math.max(0, Number(customer.latestTransactionBalance ?? customer.exactPendingAmount ?? customer.accountBalance ?? 0) - paidAmount),
                        totalDue: Math.max(0, Number(customer.latestTransactionBalance ?? customer.exactPendingAmount ?? customer.totalDue ?? 0) - paidAmount),
                        pendingAmount: Math.max(0, Number(customer.latestTransactionBalance ?? customer.exactPendingAmount ?? customer.pendingAmount ?? 0) - paidAmount),
                        balance: Math.max(0, Number(customer.latestTransactionBalance ?? customer.exactPendingAmount ?? customer.balance ?? 0) - paidAmount),
                        exactPendingAmount: Math.max(0, Number(customer.latestTransactionBalance ?? customer.exactPendingAmount ?? customer.accountBalance ?? 0) - paidAmount)
                    } : customer));
            setViewCustomer((prev)=>prev ? {
                    ...prev,
                    latestTransactionBalance: Math.max(0, Number(prev.latestTransactionBalance ?? prev.exactPendingAmount ?? prev.accountBalance ?? 0) - paidAmount),
                    accountBalance: Math.max(0, Number(prev.latestTransactionBalance ?? prev.exactPendingAmount ?? prev.accountBalance ?? 0) - paidAmount),
                    totalDue: Math.max(0, Number(prev.latestTransactionBalance ?? prev.exactPendingAmount ?? prev.totalDue ?? 0) - paidAmount),
                    pendingAmount: Math.max(0, Number(prev.latestTransactionBalance ?? prev.exactPendingAmount ?? prev.pendingAmount ?? 0) - paidAmount),
                    balance: Math.max(0, Number(prev.latestTransactionBalance ?? prev.exactPendingAmount ?? prev.balance ?? 0) - paidAmount),
                    exactPendingAmount: Math.max(0, Number(prev.latestTransactionBalance ?? prev.exactPendingAmount ?? prev.accountBalance ?? 0) - paidAmount)
                } : prev);
            setShowPaymentModal(false);
            setSelectedBill(null);
        } catch (error) {
            console.error("Record Bill Payment Error:", error);
            alert("Failed to record payment.");
        } finally{
            setPayingBillId("");
        }
    };
    const requestDeleteCustomer = (customer)=>{
        if (!canDeleteCustomer) {
            return;
        }
        setCustomerToDelete(customer);
        setDeleteModalOpen(true);
    };
    const confirmDeleteCustomer = async ()=>{
        if (!customerToDelete?.id) return;
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])(`/customers/${customerToDelete.id}`, {
                method: "DELETE"
            });
            if (res?.success) {
                setCustomers((prev)=>prev.filter((c)=>c.id !== customerToDelete.id));
                if (viewCustomer?.id === customerToDelete.id) {
                    setViewCustomer(null);
                }
            }
        } catch (error) {
            console.error("Delete Customer Error:", error);
        } finally{
            setDeleteModalOpen(false);
            setCustomerToDelete(null);
        }
    };
    const getStatusBadge = (status)=>{
        const colors = {
            active: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
            inactive: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
            pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
        };
        const icons = {
            active: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
            inactive: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"],
            pending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"]
        };
        const Icon = icons[status];
        const colorClass = colors[status] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `px-3 py-1.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5 ${colorClass}`,
            children: [
                Icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "w-3 h-3"
                }, void 0, false, {
                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                    lineNumber: 1702,
                    columnNumber: 17
                }, this) : null,
                status?.charAt(0).toUpperCase() + status?.slice(1)
            ]
        }, void 0, true, {
            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
            lineNumber: 1699,
            columnNumber: 7
        }, this);
    };
    const handleExportCustomers = ()=>{
        const rows = filteredCustomers.map((customer)=>[
                customer.id || "",
                customer.name || "",
                customer.email || "",
                customer.phone || "",
                customer.cnic || "",
                customer.address || "",
                customer.status || "",
                (customer.tags || []).join(" | "),
                formatDate(customer.customerSince),
                customer.lastPurchase || "",
                toNumber(customer.totalSpent),
                toNumber(customer.satisfaction)
            ]);
        const header = [
            "Customer ID",
            "Name",
            "Email",
            "Phone",
            "CNIC",
            "Address",
            "Status",
            "Tags",
            "Customer Since",
            "Last Purchase",
            "Total Spent",
            "Satisfaction"
        ];
        const dateStamp = new Date().toISOString().slice(0, 10);
        downloadCSV(`customers-detail-${dateStamp}.csv`, [
            header,
            ...rows
        ]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[radial-gradient(circle_at_top_left,#e0f2fe,transparent_35%),radial-gradient(circle_at_85%_20%,#ecfdf3,transparent_30%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] dark:bg-[radial-gradient(circle_at_top_left,#0f172a,transparent_35%),radial-gradient(circle_at_85%_20%,#0b1324,transparent_30%),linear-gradient(to_bottom,#0b1220,#0f172a)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col min-h-screen transition-all duration-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 py-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$customers$2f$CustomersHeaderSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                stats: stats,
                                canCreateCustomer: canCreateCustomer,
                                onExport: handleExportCustomers
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                lineNumber: 1749,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$customers$2f$CustomersFilterBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                searchTerm: searchTerm,
                                setSearchTerm: setSearchTerm,
                                showFilters: showFilters,
                                setShowFilters: setShowFilters,
                                sortBy: sortBy,
                                setSortBy: setSortBy,
                                sortOptions: sortOptions,
                                viewMode: viewMode,
                                setViewMode: setViewMode,
                                statusFilters: statusFilters,
                                selectedStatus: selectedStatus,
                                setSelectedStatus: setSelectedStatus,
                                tagFilters: tagFilters,
                                selectedTag: selectedTag,
                                setSelectedTag: setSelectedTag
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                lineNumber: 1755,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$customers$2f$CustomersResultsSummary$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                paginatedCustomers: filteredCustomers,
                                filteredCustomers: filteredCustomers,
                                searchTerm: searchTerm
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                lineNumber: 1773,
                                columnNumber: 13
                            }, this),
                            resolvedViewCustomer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setViewCustomer(null);
                                                            if (requestedCustomerId) {
                                                                router.replace("/AdminDashboard/customers");
                                                            }
                                                        },
                                                        className: "p-2.5 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-300 hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-600 dark:hover:to-gray-500 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 1792,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 1783,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white",
                                                                children: "Customer Details"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 1795,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600 dark:text-gray-400 mt-1",
                                                                children: "View and manage customer information"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 1798,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 1794,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                lineNumber: 1782,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: canEditCustomer ? `/AdminDashboard/customers/Edit?id=${resolvedViewCustomer.id}` : "#",
                                                    "aria-disabled": !canEditCustomer,
                                                    onClick: (event)=>{
                                                        if (!canEditCustomer) event.preventDefault();
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "p-2.5 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-600 dark:text-blue-400 hover:from-blue-200 hover:to-cyan-200 dark:hover:from-blue-800/30 dark:hover:to-cyan-800/30 rounded-xl transition-all",
                                                        title: "Edit Customer",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 1816,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 1812,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                    lineNumber: 1805,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                lineNumber: 1804,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                        lineNumber: 1781,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-20 h-20 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-lg",
                                                            children: resolvedViewCustomer.name?.charAt(0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 1825,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-3 flex-wrap",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-2xl font-bold text-gray-900 dark:text-white",
                                                                            children: resolvedViewCustomer.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 1830,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        getStatusBadge(resolvedViewCustomer.status)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 1829,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 text-gray-600 dark:text-gray-400 flex-wrap",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 1836,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: resolvedViewCustomer.name || "-"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 1837,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "w-1 h-1 bg-gray-300 rounded-full mx-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 1838,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 1839,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "capitalize",
                                                                            children: resolvedViewCustomer.customerType || "individual"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 1840,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "w-1 h-1 bg-gray-300 rounded-full mx-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 1843,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 1844,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: resolvedViewCustomer.address || "-"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 1845,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 1835,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                                    className: "w-4 h-4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 1849,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                "Registered: ",
                                                                                formatDate(resolvedViewCustomer.customerSince) || "-"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 1848,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                                    className: "w-4 h-4 text-amber-500 fill-amber-500"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 1853,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                "Rating: ",
                                                                                Math.max(1, Math.min(5, Math.round((resolvedViewCustomer.satisfaction || 0) / 20) || 0)),
                                                                                "/5"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 1852,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 1847,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 1828,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                    lineNumber: 1824,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-4 py-3 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-xl",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-600 dark:text-gray-400",
                                                                    children: "Total Spent"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 1862,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xl font-bold text-gray-900 dark:text-white",
                                                                    children: resolvedViewCustomer.purchaseCount || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 1863,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 1861,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-4 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-600 dark:text-gray-400",
                                                                    children: "Total Amount"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 1868,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xl font-bold text-gray-900 dark:text-white",
                                                                    children: [
                                                                        "PKR ",
                                                                        (Number(resolvedViewCustomer.totalSpent) || 0).toLocaleString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 1869,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 1867,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-4 py-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-gray-600 dark:text-gray-400",
                                                                    children: "Credit Limit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 1874,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xl font-bold text-gray-900 dark:text-white",
                                                                    children: Number(resolvedViewCustomer.creditLimit || 0).toLocaleString()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 1875,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 1873,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                    lineNumber: 1860,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                            lineNumber: 1823,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                        lineNumber: 1822,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                                    children: "Total Bills"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 1887,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-2xl font-bold text-gray-900 dark:text-white",
                                                                    children: resolvedViewCustomer.purchaseCount || 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 1888,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 1886,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 rounded-xl",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                                className: "w-5 h-5 text-blue-600 dark:text-blue-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 1893,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 1892,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                    lineNumber: 1885,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                lineNumber: 1884,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                                    children: "Paid Amount"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 1901,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-2xl font-bold text-green-600 dark:text-green-400",
                                                                    children: [
                                                                        "PKR ",
                                                                        (Number(resolvedViewCustomer.totalSpent) || 0).toLocaleString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 1902,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 1900,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                                className: "w-5 h-5 text-green-600 dark:text-green-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 1907,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 1906,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                    lineNumber: 1899,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                lineNumber: 1898,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                                    children: "Pending Amount"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 1915,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-lg font-bold text-amber-600 dark:text-amber-400",
                                                                    children: [
                                                                        "PKR ",
                                                                        (Number(resolvedViewCustomer.latestTransactionBalance ?? resolvedViewCustomer.exactPendingAmount ?? resolvedViewCustomer.accountBalance ?? 0) || 0).toLocaleString()
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 1916,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 1914,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 rounded-xl",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                                className: "w-5 h-5 text-amber-600 dark:text-amber-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 1926,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 1925,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                    lineNumber: 1913,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                lineNumber: 1912,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                                    children: "Overdue Amount"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 1934,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-2xl font-bold text-red-600 dark:text-red-400",
                                                                    children: "PKR 0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 1935,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 1933,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 rounded-xl",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                className: "w-5 h-5 text-red-600 dark:text-red-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 1940,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 1939,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                    lineNumber: 1932,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                lineNumber: 1931,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                        lineNumber: 1883,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-b border-gray-200 dark:border-gray-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                            className: "flex gap-6 overflow-x-auto",
                                            children: [
                                                {
                                                    id: "overview",
                                                    label: "Overview",
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"]
                                                },
                                                {
                                                    id: "products",
                                                    label: "Products",
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"]
                                                },
                                                {
                                                    id: "bills",
                                                    label: "Bills",
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"]
                                                },
                                                {
                                                    id: "payments",
                                                    label: "Payments",
                                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"]
                                                }
                                            ].map((tab)=>{
                                                const Icon = tab.icon;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveCustomerTab(tab.id),
                                                    className: `py-3 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${activeCustomerTab === tab.id ? "border-blue-600 text-blue-600 dark:text-blue-400" : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 1965,
                                                            columnNumber: 27
                                                        }, this),
                                                        tab.label
                                                    ]
                                                }, tab.id, true, {
                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                    lineNumber: 1956,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                            lineNumber: 1947,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                        lineNumber: 1946,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6",
                                        children: [
                                            activeCustomerTab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                                className: "w-5 h-5 text-blue-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 1979,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            "Company Information"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                        lineNumber: 1978,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                                        className: "w-5 h-5 text-gray-400 mt-0.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 1984,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-sm text-gray-500",
                                                                                                children: "Company Name"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 1986,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "font-medium text-gray-900 dark:text-white",
                                                                                                children: resolvedViewCustomer.name || "-"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 1987,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 1985,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 1983,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                                        className: "w-5 h-5 text-gray-400 mt-0.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 1993,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-sm text-gray-500",
                                                                                                children: "Contact Person"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 1995,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "font-medium text-gray-900 dark:text-white",
                                                                                                children: resolvedViewCustomer.fatherName || resolvedViewCustomer.name || "-"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 1996,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 1994,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 1992,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                                        className: "w-5 h-5 text-gray-400 mt-0.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2002,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-sm text-gray-500",
                                                                                                children: "Email"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2004,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "font-medium text-gray-900 dark:text-white",
                                                                                                children: resolvedViewCustomer.email || "-"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2005,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2003,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2001,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                                        className: "w-5 h-5 text-gray-400 mt-0.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2011,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-sm text-gray-500",
                                                                                                children: "Phone"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2013,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "font-medium text-gray-900 dark:text-white",
                                                                                                children: resolvedViewCustomer.phone || "-"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2014,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2012,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2010,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                                                                        className: "w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2020,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-sm text-gray-500",
                                                                                                children: "Mobile"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2022,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "font-medium text-gray-900 dark:text-white",
                                                                                                children: resolvedViewCustomer.mobile || "-"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2023,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2021,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2019,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                                                        className: "w-5 h-5 text-gray-400 mt-0.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2029,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-sm text-gray-500",
                                                                                                children: "Website"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2031,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "font-medium text-gray-900 dark:text-white",
                                                                                                children: "-"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2032,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2030,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2028,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                        className: "w-5 h-5 text-gray-400 mt-0.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2036,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-sm text-gray-500",
                                                                                                children: "Address"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2038,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "font-medium text-gray-900 dark:text-white",
                                                                                                children: resolvedViewCustomer.address || "-"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2039,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2037,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2035,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                        lineNumber: 1982,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 1977,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                                className: "w-5 h-5 text-blue-600"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2049,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            "Business Details"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                        lineNumber: 2048,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$barcode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Barcode$3e$__["Barcode"], {
                                                                                        className: "w-5 h-5 text-gray-400 mt-0.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2054,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-sm text-gray-500",
                                                                                                children: "Tax ID"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2056,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "font-medium text-gray-900 dark:text-white",
                                                                                                children: resolvedViewCustomer.cnic || "-"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2057,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2055,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2053,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                                        className: "w-5 h-5 text-gray-400 mt-0.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2063,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-sm text-gray-500",
                                                                                                children: "Registered Date"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2065,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "font-medium text-gray-900 dark:text-white",
                                                                                                children: formatDate(resolvedViewCustomer.customerSince) || "-"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2066,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2064,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2062,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                                                        className: "w-5 h-5 text-gray-400 mt-0.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2072,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-sm text-gray-500",
                                                                                                children: "Credit Limit"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2074,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "font-medium text-gray-900 dark:text-white",
                                                                                                children: Number(resolvedViewCustomer.creditLimit || 0).toLocaleString()
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2075,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2073,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2071,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-start gap-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                                        className: "w-5 h-5 text-gray-400 mt-0.5"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2081,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "text-sm text-gray-500",
                                                                                                children: "Average Payment Days"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2083,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "font-medium text-gray-900 dark:text-white",
                                                                                                children: "0 days"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2084,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2082,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2080,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                        lineNumber: 2052,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 2047,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 1976,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                                                                        className: "w-5 h-5 text-blue-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                        lineNumber: 2095,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Bank Details"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 2094,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm text-gray-500",
                                                                                    children: "Bank Name"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2101,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-medium text-gray-900 dark:text-white",
                                                                                    children: "-"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2102,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 2100,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm text-gray-500",
                                                                                    children: "Account Title"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2105,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-medium text-gray-900 dark:text-white",
                                                                                    children: "-"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2106,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 2104,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm text-gray-500",
                                                                                    children: "Account Number"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2109,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-medium text-gray-900 dark:text-white",
                                                                                    children: "-"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2110,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 2108,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-sm text-gray-500",
                                                                                    children: "IBAN"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2113,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-medium text-gray-900 dark:text-white",
                                                                                    children: "-"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2114,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 2112,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 2099,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 2098,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2093,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                lineNumber: 1975,
                                                columnNumber: 21
                                            }, this),
                                            activeCustomerTab === "products" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"], {
                                                                            className: "w-5 h-5 text-blue-600"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 2127,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Laptop Details"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 2126,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-500 dark:text-gray-400",
                                                                    children: [
                                                                        "Total purchased items: ",
                                                                        customerPurchasedProducts.length
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 2130,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 2125,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2124,
                                                        columnNumber: 23
                                                    }, this),
                                                    customerPurchasedProducts.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-x-auto max-h-[420px] overflow-y-scroll pr-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                            className: "w-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                    className: "bg-gray-50 dark:bg-gray-700/50",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Laptop Details"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2141,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Invoice No."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2142,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Qty"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2143,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Total Value"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2144,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Date"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2145,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Status"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2146,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Actions"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2147,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                        lineNumber: 2140,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 2139,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                    className: "divide-y divide-gray-200 dark:divide-gray-700",
                                                                    children: customerPurchasedProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700/50",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "font-medium text-gray-900 dark:text-white",
                                                                                            children: product.productName
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                            lineNumber: 2157,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "text-xs text-gray-500 dark:text-gray-400 mt-1 space-y-1",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    children: product.brand || product.category
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                    lineNumber: 2161,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                (product.storage !== "-" || product.ram !== "-") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                    children: [
                                                                                                        product.storage !== "-" ? product.storage : "",
                                                                                                        product.ram !== "-" ? product.ram : ""
                                                                                                    ].filter(Boolean).join(" | ")
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                    lineNumber: 2163,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                            lineNumber: 2160,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2156,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3 text-sm text-gray-700 dark:text-gray-300",
                                                                                    children: product.invoiceNo
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2171,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3 text-sm text-gray-700 dark:text-gray-300",
                                                                                    children: product.quantity
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2174,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white",
                                                                                    children: [
                                                                                        "Rs. ",
                                                                                        product.totalPrice.toLocaleString()
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2177,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3 text-sm text-gray-600 dark:text-gray-400",
                                                                                    children: product.date
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2180,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3",
                                                                                    children: getStatusBadge(String(product.status || "completed").toLowerCase())
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2183,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            type: "button",
                                                                                            className: "p-1 text-blue-600 hover:text-blue-800",
                                                                                            onClick: ()=>setActiveCustomerTab("bills"),
                                                                                            title: "View Bill",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                                                className: "w-4 h-4"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2194,
                                                                                                columnNumber: 41
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                            lineNumber: 2188,
                                                                                            columnNumber: 39
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2187,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2186,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, product.id, true, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 2152,
                                                                            columnNumber: 33
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 2150,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 2138,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2137,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl border border-dashed border-gray-200 dark:border-gray-700 p-8 text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                                className: "w-10 h-10 mx-auto text-gray-300 dark:text-gray-600 mb-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 2205,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold text-gray-900 dark:text-white",
                                                                children: "Products"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 2206,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-sm text-gray-500 dark:text-gray-400",
                                                                children: "No purchase record found for this customer."
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 2209,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-500 dark:text-gray-400",
                                                                children: [
                                                                    "Total purchases: ",
                                                                    resolvedViewCustomer.purchaseCount || 0
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 2212,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2204,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                lineNumber: 2123,
                                                columnNumber: 21
                                            }, this),
                                            activeCustomerTab === "bills" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                        className: "w-5 h-5 text-blue-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                        lineNumber: 2224,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Bills from ",
                                                                    resolvedViewCustomer.name
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 2223,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>{
                                                                            setSelectedBill({
                                                                                id: `total-${resolvedViewCustomer.id || resolvedViewCustomer.name}`,
                                                                                billId: `TOTAL-${resolvedViewCustomer.name}`,
                                                                                amount: totalOutstandingAmount,
                                                                                remaining: totalOutstandingAmount,
                                                                                status: totalOutstandingAmount > 0 ? "pending" : "paid",
                                                                                dueDate: "N/A",
                                                                                source: "customer-total"
                                                                            });
                                                                            setShowPaymentModal(true);
                                                                        },
                                                                        disabled: totalOutstandingAmount <= 0,
                                                                        className: "rounded-lg bg-gradient-to-r from-emerald-600 to-green-500 px-4 py-2 text-sm font-medium text-white hover:from-emerald-700 hover:to-green-600 disabled:cursor-not-allowed disabled:opacity-60",
                                                                        children: "Total Mark to Paid"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                        lineNumber: 2228,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: handlePrintCustomerBills,
                                                                        disabled: customerBills.length === 0,
                                                                        className: "rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 px-4 py-2 text-sm font-medium text-white hover:from-slate-800 hover:to-slate-700 disabled:cursor-not-allowed disabled:opacity-60",
                                                                        children: "Print Total Bills"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                        lineNumber: 2247,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 2227,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2222,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-x-auto max-h-[420px] overflow-y-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                            className: "w-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                    className: "bg-gray-50 dark:bg-gray-700/50",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Bill ID"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2262,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Date"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2263,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Description"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2264,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Amount"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2265,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Remaining"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2266,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Status"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2267,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Due Date"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2268,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Actions"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2269,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                        lineNumber: 2261,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 2260,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                    className: "divide-y divide-gray-200 dark:divide-gray-700",
                                                                    children: customerBills.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                            colSpan: 8,
                                                                            className: "px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400",
                                                                            children: "No bills found for this customer."
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 2275,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                        lineNumber: 2274,
                                                                        columnNumber: 31
                                                                    }, this) : customerBills.map((bill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            className: "hover:bg-gray-50 dark:hover:bg-gray-700/50",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "font-medium text-gray-900 dark:text-white",
                                                                                        children: bill.billId
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2283,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2282,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3 text-sm text-gray-600 dark:text-gray-400",
                                                                                    children: bill.date
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2285,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3 text-sm text-gray-600 dark:text-gray-400 max-w-xs truncate",
                                                                                    children: bill.description
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2286,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3 text-sm font-medium text-gray-900 dark:text-white",
                                                                                    children: [
                                                                                        "Rs. ",
                                                                                        bill.amount.toLocaleString()
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2287,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3 text-sm font-medium text-gray-900 dark:text-white",
                                                                                    children: [
                                                                                        "Rs. ",
                                                                                        bill.remaining.toLocaleString()
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2290,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: `px-2 py-1 rounded-full text-xs ${bill.status === "paid" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`,
                                                                                        children: bill.status.charAt(0).toUpperCase() + bill.status.slice(1)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2294,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2293,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3 text-sm text-gray-600 dark:text-gray-400",
                                                                                    children: bill.dueDate
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2304,
                                                                                    columnNumber: 35
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                    className: "px-4 py-3",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center gap-2",
                                                                                        children: [
                                                                                            bill.status !== "paid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "button",
                                                                                                onClick: ()=>{
                                                                                                    setSelectedBill(bill);
                                                                                                    setShowPaymentModal(true);
                                                                                                },
                                                                                                className: "rounded-md border border-green-200 px-2 py-1 text-xs font-medium text-green-700 disabled:cursor-not-allowed disabled:opacity-60",
                                                                                                children: "Mark to Paid"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2308,
                                                                                                columnNumber: 41
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "button",
                                                                                                onClick: handlePrintCustomerBills,
                                                                                                className: "p-1 text-purple-600 hover:text-purple-800",
                                                                                                title: "Print",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                                                                    className: "w-4 h-4"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                    lineNumber: 2325,
                                                                                                    columnNumber: 41
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2319,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2306,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                    lineNumber: 2305,
                                                                                    columnNumber: 35
                                                                                }, this)
                                                                            ]
                                                                        }, bill.id, true, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 2281,
                                                                            columnNumber: 33
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 2272,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 2259,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2258,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                lineNumber: 2221,
                                                columnNumber: 21
                                            }, this),
                                            activeCustomerTab === "payments" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                                        className: "w-5 h-5 text-blue-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                        lineNumber: 2342,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Payment History"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 2341,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>handlePrintCustomerPaymentReport(),
                                                                disabled: customerPaymentHistory.length === 0,
                                                                className: "px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 bg-purple-600 text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                                        className: "w-4 h-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                        lineNumber: 2351,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Print Report"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 2345,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2340,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-x-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                                            className: "w-full",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                                    className: "bg-gray-50 dark:bg-gray-700/50",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Payment ID"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2360,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Date"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2361,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Bill ID"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2362,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Amount"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2363,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Method"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2364,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Reference"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2365,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                                className: "px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase",
                                                                                children: "Actions"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2366,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                        lineNumber: 2359,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 2358,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                                    className: "divide-y divide-gray-200 dark:divide-gray-700",
                                                                    children: [
                                                                        customerPaymentHistory.map((payment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                                className: "hover:bg-gray-50 dark:hover:bg-gray-700/50",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-4 py-3",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "font-medium text-gray-900 dark:text-white",
                                                                                            children: payment.id
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                            lineNumber: 2373,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2372,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-4 py-3 text-sm text-gray-600 dark:text-gray-400",
                                                                                        children: formatDate(payment.date)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2375,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-4 py-3 text-sm text-gray-600 dark:text-gray-400",
                                                                                        children: payment.billId
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2378,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-4 py-3 text-sm font-medium text-green-600",
                                                                                        children: [
                                                                                            "Rs. ",
                                                                                            Number(payment.amount || 0).toLocaleString()
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2381,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-4 py-3 text-sm text-gray-600 dark:text-gray-400",
                                                                                        children: payment.method
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2384,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-4 py-3 text-sm text-gray-600 dark:text-gray-400",
                                                                                        children: payment.reference
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2387,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                        className: "px-4 py-3",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center gap-2",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                type: "button",
                                                                                                onClick: ()=>handlePrintCustomerPaymentReport(payment),
                                                                                                className: "p-1 text-purple-600 hover:text-purple-800",
                                                                                                title: "Print Receipt",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                                                                                    className: "w-4 h-4"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                    lineNumber: 2398,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                                lineNumber: 2392,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                            lineNumber: 2391,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                        lineNumber: 2390,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, payment.id, true, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2371,
                                                                                columnNumber: 31
                                                                            }, this)),
                                                                        customerPaymentHistory.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                                colSpan: 7,
                                                                                className: "px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400",
                                                                                children: "No payment history found."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                                lineNumber: 2406,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                            lineNumber: 2405,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                    lineNumber: 2369,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                            lineNumber: 2357,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2356,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                lineNumber: 2339,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                        lineNumber: 1973,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                lineNumber: 1780,
                                columnNumber: 15
                            }, this) : viewMode === "grid" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$customers$2f$CustomersGridView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                paginatedCustomers: filteredCustomers,
                                setViewCustomer: setViewCustomer,
                                getStatusBadge: getStatusBadge,
                                handleDeleteCustomer: requestDeleteCustomer,
                                canEditCustomer: canEditCustomer,
                                canDeleteCustomer: canDeleteCustomer
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                lineNumber: 2419,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$customers$2f$CustomersListView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                paginatedCustomers: filteredCustomers,
                                getStatusBadge: getStatusBadge,
                                handleDeleteCustomer: requestDeleteCustomer,
                                canEditCustomer: canEditCustomer,
                                canDeleteCustomer: canDeleteCustomer,
                                setViewCustomer: setViewCustomer
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                lineNumber: 2428,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$customers$2f$CustomersTips$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                lineNumber: 2439,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                        lineNumber: 1748,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                    lineNumber: 1747,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                lineNumber: 1745,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$customers$2f$DeleteCustomerModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                deleteModalOpen: deleteModalOpen,
                setDeleteModalOpen: setDeleteModalOpen,
                customerToDelete: customerToDelete,
                confirmDelete: confirmDeleteCustomer
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                lineNumber: 2444,
                columnNumber: 7
            }, this),
            showPaymentModal && selectedBill && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-gray-900 dark:text-white mb-4",
                                children: "Record Payment"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                lineNumber: 2455,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleRecordBillPayment,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                                        children: "Bill ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2461,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: selectedBill.billId || "",
                                                        readOnly: true,
                                                        className: "w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white cursor-not-allowed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2464,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                lineNumber: 2460,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                                        children: "Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2472,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: `Rs. ${Number(selectedBill.amount || 0).toLocaleString()}`,
                                                        readOnly: true,
                                                        className: "w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white cursor-not-allowed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2475,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                lineNumber: 2471,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                                        children: "Partial Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2483,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        min: "0",
                                                        max: Number(selectedBill.remaining || 0),
                                                        value: paymentForm.partialAmount,
                                                        placeholder: "0",
                                                        onChange: (e)=>{
                                                            const raw = e.target.value;
                                                            setPaymentForm((prev)=>({
                                                                    ...prev,
                                                                    partialAmount: raw === "" ? "" : Number(raw)
                                                                }));
                                                        },
                                                        className: "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2486,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                lineNumber: 2482,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                                        children: "Remaining Amount"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2503,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: `Rs. ${Math.max(Number(selectedBill.remaining || 0) - (paymentForm.partialAmount === "" ? 0 : Number(paymentForm.partialAmount || 0)), 0).toLocaleString()}`,
                                                        readOnly: true,
                                                        className: "w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white cursor-not-allowed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2506,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                lineNumber: 2502,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                                        children: "Payment Method *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2518,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        required: true,
                                                        value: paymentForm.method,
                                                        onChange: (e)=>setPaymentForm((prev)=>({
                                                                    ...prev,
                                                                    method: e.target.value
                                                                })),
                                                        className: "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Select method"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 2527,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Cash",
                                                                children: "Cash"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 2528,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Bank Transfer",
                                                                children: "Bank Transfer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 2529,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Check",
                                                                children: "Check"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 2530,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Credit Card",
                                                                children: "Credit Card"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                                lineNumber: 2531,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2521,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                lineNumber: 2517,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                                        children: "Payment Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2535,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "date",
                                                        value: paymentForm.date,
                                                        onChange: (e)=>setPaymentForm((prev)=>({
                                                                    ...prev,
                                                                    date: e.target.value
                                                                })),
                                                        className: "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                        lineNumber: 2538,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                lineNumber: 2534,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                        lineNumber: 2459,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-end gap-3 mt-6 pt-4 border-t dark:border-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setShowPaymentModal(false);
                                                    setSelectedBill(null);
                                                },
                                                className: "px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                lineNumber: 2547,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: payingBillId === (selectedBill.saleId || selectedBill.billId),
                                                className: "px-6 py-2 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-green-600 transition disabled:cursor-not-allowed disabled:opacity-60",
                                                children: payingBillId === (selectedBill.saleId || selectedBill.billId) ? "Recording..." : "Record Payment"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                                lineNumber: 2557,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                        lineNumber: 2546,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                                lineNumber: 2458,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                        lineNumber: 2454,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                    lineNumber: 2453,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/customers/page.jsx",
                lineNumber: 2452,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminDashboard/customers/page.jsx",
        lineNumber: 1744,
        columnNumber: 5
    }, this);
}
_s(Customers, "WBv0ZAilyEtDUop99aH3GZoZ2/4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = Customers;
var _c;
__turbopack_context__.k.register(_c, "Customers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_AdminDashboard_683028cf._.js.map