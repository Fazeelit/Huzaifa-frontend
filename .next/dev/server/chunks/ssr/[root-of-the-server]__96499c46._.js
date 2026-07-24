module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/AdminDashboard/authservice/authStorage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearPersistedAuth",
    ()=>clearPersistedAuth,
    "notifyAuthStateChanged",
    ()=>notifyAuthStateChanged,
    "onAuthStateChanged",
    ()=>onAuthStateChanged,
    "persistAuthState",
    ()=>persistAuthState,
    "readPersistedAuthValue",
    ()=>readPersistedAuthValue
]);
"use client";
const AUTH_KEYS = [
    "authToken",
    "user",
    "role",
    "permissions"
];
const AUTH_STORAGE_EVENT = "auth-storage-changed";
function normalizeAuthToken(value) {
    if (value == null) {
        return null;
    }
    let normalizedValue = String(value).trim();
    if (normalizedValue === "" || normalizedValue === "null" || normalizedValue === "undefined") {
        return null;
    }
    if (normalizedValue.startsWith('"') && normalizedValue.endsWith('"') || normalizedValue.startsWith("'") && normalizedValue.endsWith("'")) {
        normalizedValue = normalizedValue.slice(1, -1).trim();
    }
    if (normalizedValue.startsWith("{") || normalizedValue.startsWith("[")) {
        try {
            const parsedValue = JSON.parse(normalizedValue);
            if (typeof parsedValue === "string") {
                normalizedValue = parsedValue.trim();
            } else {
                return null;
            }
        } catch  {
            return null;
        }
    }
    if (!normalizedValue || normalizedValue.includes("[object Object]") || /\s/.test(normalizedValue)) {
        return null;
    }
    return normalizedValue;
}
function normalizeStoredAuthValue(value) {
    if (value == null) {
        return null;
    }
    const normalizedValue = String(value).trim();
    if (normalizedValue === "" || normalizedValue === "null" || normalizedValue === "undefined") {
        return null;
    }
    return normalizedValue;
}
function clearLegacySessionAuth() {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
    const key = undefined;
}
function getBrowserAuthStorage() {
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
}
function migrateLegacySessionAuth() {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
    const persistentStorage = undefined;
    const sessionStorage = undefined;
    const key = undefined;
    const key1 = undefined;
}
function getDesktopAuthStorage() {
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
}
function persistAuthState({ token, user, role, permissions }) {
    const browserAuthStorage = getBrowserAuthStorage();
    if (!browserAuthStorage) {
        return;
    }
    clearLegacySessionAuth();
    const normalizedPermissions = Array.isArray(permissions) ? permissions : [];
    const normalizedToken = normalizeAuthToken(token);
    if (!normalizedToken) {
        throw new Error("Invalid login token");
    }
    browserAuthStorage.setItem("authToken", normalizedToken);
    browserAuthStorage.setItem("user", JSON.stringify(user || null));
    browserAuthStorage.setItem("role", role || "");
    browserAuthStorage.setItem("permissions", JSON.stringify(normalizedPermissions));
    const desktopAuthStorage = getDesktopAuthStorage();
    desktopAuthStorage?.set({
        authToken: normalizedToken,
        user: user || null,
        role: role || "",
        permissions: normalizedPermissions
    });
}
function clearPersistedAuth() {
    const browserAuthStorage = getBrowserAuthStorage();
    if (!browserAuthStorage) {
        return;
    }
    for (const key of AUTH_KEYS){
        browserAuthStorage.removeItem(key);
    }
    clearLegacySessionAuth();
    const desktopAuthStorage = getDesktopAuthStorage();
    desktopAuthStorage?.clear();
    window.dispatchEvent(new Event(AUTH_STORAGE_EVENT));
}
function readPersistedAuthValue(key) {
    const browserAuthStorage = getBrowserAuthStorage();
    if (!browserAuthStorage) {
        return null;
    }
    migrateLegacySessionAuth();
    return normalizeStoredAuthValue(browserAuthStorage.getItem(key));
}
function notifyAuthStateChanged() {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
}
function onAuthStateChanged(callback) {
    if ("TURBOPACK compile-time truthy", 1) {
        return ()=>{};
    }
    //TURBOPACK unreachable
    ;
}
clearLegacySessionAuth();
}),
"[project]/app/AdminDashboard/authservice/permissions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blockedButtonClass",
    ()=>blockedButtonClass,
    "blockedButtonProps",
    ()=>blockedButtonProps,
    "getCrudPermissionKey",
    ()=>getCrudPermissionKey,
    "getCrudPermissions",
    ()=>getCrudPermissions,
    "hasAnyPermission",
    ()=>hasAnyPermission,
    "hasModuleAccess",
    ()=>hasModuleAccess,
    "hasPermission",
    ()=>hasPermission,
    "isAdminRole",
    ()=>isAdminRole,
    "normalizePermissionsForRole",
    ()=>normalizePermissionsForRole,
    "normalizeRoleValue",
    ()=>normalizeRoleValue,
    "parseStoredPermissions",
    ()=>parseStoredPermissions,
    "resolveCrudPermissionFromRequest",
    ()=>resolveCrudPermissionFromRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/authStorage.js [app-ssr] (ecmascript)");
"use client";
;
const BLOCKED_TOOLTIP = "Blocked: You do not have permission for this action.";
const CRUD_ACTION_BY_METHOD = {
    POST: "CREATE",
    PUT: "EDIT",
    PATCH: "EDIT",
    DELETE: "DELETE"
};
const CRUD_ENDPOINT_PERMISSION_RULES = [
    {
        pattern: /^\/purchases\/[^/]+\/payment(?:\/|$)/i,
        permissionKey: "PARTIAL_PAYMENT_ADD"
    },
    {
        pattern: /^\/purchases\/supplierPayment(?:\/|$)/i,
        permissionKey: "PARTIAL_PAYMENT_ADD"
    },
    {
        pattern: /^\/suppliers\/[^/]+\/bills\/[^/]+\/payment(?:\/|$)/i,
        permissionKey: "PARTIAL_PAYMENT_ADD"
    },
    {
        pattern: /^\/products(?:\/|$)/i,
        moduleKey: "PRODUCT"
    },
    {
        pattern: /^\/purchases(?:\/|$)/i,
        moduleKey: "PURCHASE"
    },
    {
        pattern: /^\/suppliers(?:\/|$)/i,
        moduleKey: "SUPPLIER"
    },
    {
        pattern: /^\/customers(?:\/|$)/i,
        moduleKey: "CUSTOMER"
    },
    {
        pattern: /^\/sales(?:\/|$)/i,
        moduleKey: "SALE"
    },
    {
        pattern: /^\/expenses(?:\/|$)/i,
        moduleKey: "EXPENSE"
    },
    {
        pattern: /^\/user-management(?:\/|$)/i,
        moduleKey: "USER"
    },
    {
        pattern: /^\/roles(?:\/|$)/i,
        moduleKey: "ROLE"
    }
];
const blockedButtonClass = "disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-red-50 disabled:hover:text-red-700 disabled:hover:border-red-300";
const normalizeRoleValue = (value)=>String(value || "").trim().toUpperCase();
const isAdminRole = (role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readPersistedAuthValue"])("role"))=>{
    const normalizedRole = normalizeRoleValue(role);
    return normalizedRole === "ADMIN" || normalizedRole.includes("ADMIN");
};
const normalizePermissionsForRole = (permissions = [], role = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readPersistedAuthValue"])("role"))=>{
    const normalizedPermissions = Array.isArray(permissions) ? permissions.filter((permission)=>typeof permission === "string" && permission.trim()) : [];
    if (!isAdminRole(role)) {
        return Array.from(new Set(normalizedPermissions));
    }
    return Array.from(new Set([
        "*",
        ...normalizedPermissions
    ]));
};
const parseStoredPermissions = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
};
const hasPermission = (permission, permissions = parseStoredPermissions())=>{
    if (!permission) return true;
    if (isAdminRole()) return true;
    if (!Array.isArray(permissions)) return false;
    return permissions.includes("*") || permissions.includes(permission);
};
const hasAnyPermission = (requiredPermissions = [], permissions = parseStoredPermissions())=>{
    if (!Array.isArray(requiredPermissions) || requiredPermissions.length === 0) {
        return true;
    }
    return requiredPermissions.some((permission)=>hasPermission(permission, permissions));
};
const hasModuleAccess = (moduleKey, permissions = parseStoredPermissions())=>{
    if (!moduleKey) return false;
    return hasAnyPermission([
        `${moduleKey}_VIEW`,
        `${moduleKey}_CREATE`,
        `${moduleKey}_EDIT`,
        `${moduleKey}_DELETE`
    ], permissions);
};
const getCrudPermissions = (moduleKey, permissions = parseStoredPermissions())=>{
    return {
        canView: hasPermission(`${moduleKey}_VIEW`, permissions),
        canCreate: hasPermission(`${moduleKey}_CREATE`, permissions),
        canEdit: hasPermission(`${moduleKey}_EDIT`, permissions),
        canDelete: hasPermission(`${moduleKey}_DELETE`, permissions)
    };
};
const getCrudPermissionKey = (moduleKey, action)=>{
    if (!moduleKey || !action) return null;
    return `${String(moduleKey).toUpperCase()}_${String(action).toUpperCase()}`;
};
const resolveCrudPermissionFromRequest = (endpoint, method)=>{
    const normalizedMethod = String(method || "GET").toUpperCase();
    const action = CRUD_ACTION_BY_METHOD[normalizedMethod];
    if (!action || typeof endpoint !== "string") return null;
    const matchedRule = CRUD_ENDPOINT_PERMISSION_RULES.find(({ pattern })=>pattern.test(endpoint));
    if (matchedRule?.permissionKey) return matchedRule.permissionKey;
    if (!matchedRule?.moduleKey) return null;
    return getCrudPermissionKey(matchedRule.moduleKey, action);
};
const blockedButtonProps = (allowed)=>{
    if (allowed) return {};
    return {
        disabled: true,
        title: BLOCKED_TOOLTIP
    };
};
}),
"[project]/app/AdminDashboard/authservice/api.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiRequest",
    ()=>apiRequest,
    "authRequest",
    ()=>authRequest,
    "clearCrudLocalData",
    ()=>clearCrudLocalData,
    "clearStoredAuthSession",
    ()=>clearStoredAuthSession,
    "deleteOnboardingById",
    ()=>deleteOnboardingById,
    "deleteUserDashboardById",
    ()=>deleteUserDashboardById,
    "getCachedCrudEndpointCount",
    ()=>getCachedCrudEndpointCount,
    "getMyOnboarding",
    ()=>getMyOnboarding,
    "getMyUserDashboard",
    ()=>getMyUserDashboard,
    "getOnboardingConfig",
    ()=>getOnboardingConfig,
    "getPendingCrudCount",
    ()=>getPendingCrudCount,
    "getStoredAuthToken",
    ()=>getStoredAuthToken,
    "getStoredAuthUser",
    ()=>getStoredAuthUser,
    "getUserDashboardBootstrap",
    ()=>getUserDashboardBootstrap,
    "hasPreloadedCrudData",
    ()=>hasPreloadedCrudData,
    "loginUser",
    ()=>loginUser,
    "preloadCrudDataToLocalStorage",
    ()=>preloadCrudDataToLocalStorage,
    "saveMyOnboarding",
    ()=>saveMyOnboarding,
    "saveMyUserDashboard",
    ()=>saveMyUserDashboard,
    "setStoredAuthSession",
    ()=>setStoredAuthSession,
    "signupUser",
    ()=>signupUser,
    "subscribeToCrudSync",
    ()=>subscribeToCrudSync,
    "syncPendingCrudOperations",
    ()=>syncPendingCrudOperations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/permissions.js [app-ssr] (ecmascript)");
"use client";
;
;
const BASE_URL = ("TURBOPACK compile-time value", "https://huzaifa-backend.onrender.com/api") || "https://backendaihub.onrender.com/api";
const NORMALIZED_BASE_URL = BASE_URL.replace(/\/+$/, "");
const AUTH_TOKEN_KEY = "authToken";
const AUTH_USER_KEY = "authUser";
const CRUD_CACHE_KEY = "appCrudResponseCache";
const CRUD_QUEUE_KEY = "appCrudPendingQueue";
const CRUD_SYNC_EVENT = "app-crud-sync-updated";
const CRUD_RESOURCE_CONFIGS = [
    {
        name: "customers",
        match: (endpoint)=>endpoint.startsWith("/customers"),
        listEndpoint: "/customers",
        collectionKey: "customers",
        entityKey: "customer",
        detailMatchers: [
            /^\/customers\/([^/]+)$/
        ]
    },
    {
        name: "suppliers",
        match: (endpoint)=>endpoint.startsWith("/suppliers"),
        listEndpoint: "/suppliers",
        collectionKey: "suppliers",
        entityKey: "supplier",
        detailMatchers: [
            /^\/suppliers\/([^/]+)$/
        ]
    },
    {
        name: "products",
        match: (endpoint)=>endpoint.startsWith("/products"),
        listEndpoint: "/products",
        collectionKey: "data",
        entityKey: "product",
        detailMatchers: [
            /^\/products\/getProductById\/([^/]+)$/
        ]
    },
    {
        name: "purchases",
        match: (endpoint)=>endpoint.startsWith("/purchases"),
        listEndpoint: "/purchases",
        collectionKey: "data",
        entityKey: "purchase",
        detailMatchers: [
            /^\/purchases\/([^/]+)$/
        ]
    },
    {
        name: "expenses",
        match: (endpoint)=>endpoint.startsWith("/expenses"),
        listEndpoint: "/expenses",
        collectionKey: "data",
        entityKey: "expense",
        detailMatchers: [
            /^\/expenses\/([^/]+)$/
        ]
    },
    {
        name: "sales",
        match: (endpoint)=>endpoint.startsWith("/sales"),
        listEndpoint: "/sales",
        collectionKey: "sales",
        entityKey: "sale",
        detailMatchers: [
            /^\/sales\/([^/]+)$/
        ]
    },
    {
        name: "roles",
        match: (endpoint)=>endpoint.startsWith("/roles"),
        listEndpoint: "/roles",
        collectionKey: "roles",
        entityKey: "role",
        detailMatchers: [
            /^\/roles\/([^/]+)$/
        ]
    },
    {
        name: "users",
        match: (endpoint)=>endpoint.startsWith("/user-management"),
        listEndpoint: "/user-management",
        collectionKey: "users",
        entityKey: "user",
        detailMatchers: [
            /^\/user-management\/([^/]+)$/
        ]
    },
    {
        name: "tests",
        match: (endpoint)=>endpoint.startsWith("/tests"),
        listEndpoint: "/tests",
        collectionKey: "data",
        entityKey: "test",
        detailMatchers: [
            /^\/tests\/([^/]+)$/
        ]
    },
    {
        name: "testParameters",
        match: (endpoint)=>endpoint.startsWith("/testParameters"),
        listEndpoint: "/testParameters",
        collectionKey: "data",
        entityKey: "testParameter",
        detailMatchers: [
            /^\/testParameters\/([^/]+)$/
        ]
    },
    {
        name: "labCategories",
        match: (endpoint)=>endpoint.startsWith("/lab-categories"),
        listEndpoint: "/lab-categories",
        collectionKey: "data",
        entityKey: "labCategory",
        detailMatchers: [
            /^\/lab-categories\/([^/]+)$/
        ]
    }
];
const PRELOAD_RESOURCE_RULES = [
    {
        endpoints: [
            "/customers"
        ],
        canLoad: (permissions)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasModuleAccess"])("CUSTOMER", permissions)
    },
    {
        endpoints: [
            "/suppliers",
            "/supplierpayments"
        ],
        canLoad: (permissions)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasModuleAccess"])("SUPPLIER", permissions)
    },
    {
        endpoints: [
            "/products",
            "/products/ProductName"
        ],
        canLoad: (permissions)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasModuleAccess"])("PRODUCT", permissions)
    },
    {
        endpoints: [
            "/purchases"
        ],
        canLoad: (permissions)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasModuleAccess"])("PURCHASE", permissions)
    },
    {
        endpoints: [
            "/expenses"
        ],
        canLoad: (permissions)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasModuleAccess"])("EXPENSE", permissions)
    },
    {
        endpoints: [
            "/sales"
        ],
        canLoad: (permissions)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasModuleAccess"])("SALE", permissions)
    },
    {
        endpoints: [
            "/roles"
        ],
        canLoad: (permissions)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasModuleAccess"])("ROLE", permissions)
    },
    {
        endpoints: [
            "/user-management"
        ],
        canLoad: (permissions)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasModuleAccess"])("USER", permissions)
    },
    {
        endpoints: [
            "/tests"
        ],
        canLoad: (permissions)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasPermission"])("TEST_VIEW", permissions)
    },
    {
        endpoints: [
            "/testParameters"
        ],
        canLoad: (permissions)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasPermission"])("TEST_VIEW", permissions)
    },
    {
        endpoints: [
            "/lab-categories"
        ],
        canLoad: (permissions)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasPermission"])("TEST_VIEW", permissions)
    }
];
function getPreloadEndpoints(permissions = []) {
    const safePermissions = Array.isArray(permissions) ? permissions : [];
    return PRELOAD_RESOURCE_RULES.flatMap(({ endpoints, canLoad })=>{
        if (safePermissions.includes("*")) {
            return endpoints;
        }
        return canLoad(safePermissions) ? endpoints : [];
    });
}
function normalizeAuthTokenValue(value) {
    if (value == null) {
        return null;
    }
    let normalizedValue = String(value).trim();
    if (normalizedValue === "" || normalizedValue === "null" || normalizedValue === "undefined") {
        return null;
    }
    if (normalizedValue.startsWith('"') && normalizedValue.endsWith('"') || normalizedValue.startsWith("'") && normalizedValue.endsWith("'")) {
        normalizedValue = normalizedValue.slice(1, -1).trim();
    }
    if (normalizedValue.startsWith("{") || normalizedValue.startsWith("[")) {
        try {
            const parsedValue = JSON.parse(normalizedValue);
            if (typeof parsedValue === "string") {
                normalizedValue = parsedValue.trim();
            } else {
                return null;
            }
        } catch  {
            return null;
        }
    }
    if (!normalizedValue || normalizedValue.includes("[object Object]") || /\s/.test(normalizedValue)) {
        return null;
    }
    return normalizedValue;
}
function parseResponseBody(rawValue, headers = {}) {
    if (rawValue == null || rawValue === "") {
        return null;
    }
    if (typeof rawValue !== "string") {
        return rawValue;
    }
    const trimmedValue = rawValue.trim();
    if (trimmedValue === "" || trimmedValue === "null" || trimmedValue === "undefined") {
        return null;
    }
    const contentTypeHeader = headers["content-type"] || headers["Content-Type"] || "";
    const looksLikeJson = contentTypeHeader.includes("application/json") || /^[\[{"]/.test(trimmedValue) || /^(true|false|-?\d+(\.\d+)?)$/i.test(trimmedValue);
    if (!looksLikeJson) {
        return rawValue;
    }
    try {
        return JSON.parse(trimmedValue);
    } catch  {
        return rawValue;
    }
}
function createRequestError(message, { status = 0, data = null } = {}) {
    const error = new Error(message);
    error.status = status;
    error.response = {
        status,
        data
    };
    return error;
}
function normalizeStoredValue(value) {
    if (value == null) {
        return null;
    }
    const normalizedValue = String(value).trim();
    if (normalizedValue === "" || normalizedValue === "null" || normalizedValue === "undefined") {
        return null;
    }
    return normalizedValue;
}
function getAuthStorage() {
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
}
function getBrowserStorage() {
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    //TURBOPACK unreachable
    ;
}
function clearLocalAuthSession() {
    const storage = getAuthStorage();
    const keysToClear = [
        AUTH_TOKEN_KEY,
        AUTH_USER_KEY,
        "user",
        "role",
        "permissions"
    ];
    if (!storage) {
        return;
    }
    for (const key of keysToClear){
        storage.removeItem(key);
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
function cloneJson(value, fallback) {
    try {
        return JSON.parse(JSON.stringify(value));
    } catch  {
        return fallback;
    }
}
function readStorageJson(key, fallback) {
    const storage = getBrowserStorage();
    if (!storage) {
        return fallback;
    }
    try {
        const rawValue = storage.getItem(key);
        return rawValue ? JSON.parse(rawValue) : fallback;
    } catch  {
        return fallback;
    }
}
function writeStorageJson(key, value) {
    const storage = getBrowserStorage();
    if (!storage) {
        return;
    }
    storage.setItem(key, JSON.stringify(value));
}
function removeStorageKey(key) {
    const storage = getBrowserStorage();
    if (!storage) {
        return;
    }
    storage.removeItem(key);
}
function getCachedResponses() {
    return readStorageJson(CRUD_CACHE_KEY, {});
}
function setCachedResponses(value) {
    writeStorageJson(CRUD_CACHE_KEY, value);
}
function getPendingCrudQueue() {
    return readStorageJson(CRUD_QUEUE_KEY, []);
}
function dispatchCrudSyncEvent() {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
}
function setPendingCrudQueue(value) {
    writeStorageJson(CRUD_QUEUE_KEY, value);
    dispatchCrudSyncEvent();
}
function resolveResourceConfig(endpoint) {
    return CRUD_RESOURCE_CONFIGS.find((config)=>config.match(endpoint)) || null;
}
function extractDetailId(config, endpoint) {
    if (!config) {
        return null;
    }
    for (const matcher of config.detailMatchers || []){
        const match = endpoint.match(matcher);
        if (match?.[1]) {
            return match[1];
        }
    }
    return null;
}
function inferTargetId(endpoint) {
    const patterns = [
        /\/(?:update[A-Za-z]+|delete[A-Za-z]+)\/([^/]+)$/,
        /\/([^/]+)\/payment$/,
        /\/([^/]+)\/returnItems$/,
        /\/([^/]+)\/updateItemStatuses$/,
        /\/([^/]+)$/
    ];
    for (const pattern of patterns){
        const match = endpoint.match(pattern);
        const candidate = match?.[1];
        if (candidate && ![
            "create",
            "createCustomer",
            "createSupplier",
            "createProduct",
            "createPurchase",
            "createExpense",
            "createRole",
            "createUser"
        ].includes(candidate)) {
            return candidate;
        }
    }
    return null;
}
function getCrudAction(method, endpoint) {
    const normalizedMethod = String(method || "GET").toUpperCase();
    if (normalizedMethod === "DELETE") {
        return "delete";
    }
    if (normalizedMethod === "PUT" || normalizedMethod === "PATCH") {
        return "update";
    }
    if (normalizedMethod === "POST") {
        if (/\/create/i.test(endpoint)) {
            return "create";
        }
        return inferTargetId(endpoint) ? "update" : "create";
    }
    return null;
}
function getEntityId(entity) {
    if (!entity || typeof entity !== "object") {
        return null;
    }
    return entity._id || entity.id || entity.saleId || entity.invoiceNo || null;
}
function idsMatch(left, right) {
    if (left == null || right == null) {
        return false;
    }
    return String(left) === String(right);
}
function ensureEntityIdentifiers(entity, preferredId) {
    const nextEntity = {
        ...entity || {}
    };
    const resolvedId = getEntityId(nextEntity) || preferredId;
    if (!resolvedId) {
        return nextEntity;
    }
    if (!nextEntity._id) {
        nextEntity._id = resolvedId;
    }
    if (!nextEntity.id) {
        nextEntity.id = resolvedId;
    }
    return nextEntity;
}
function extractArrayFromResponse(response, config) {
    if (Array.isArray(response)) return response;
    if (!response || typeof response !== "object") return [];
    if (Array.isArray(response?.[config.collectionKey])) {
        return response[config.collectionKey];
    }
    if (Array.isArray(response?.data?.[config.collectionKey])) {
        return response.data[config.collectionKey];
    }
    if (Array.isArray(response?.data?.data)) {
        return response.data.data;
    }
    if (Array.isArray(response?.data)) {
        return response.data;
    }
    return [];
}
function replaceArrayInResponse(response, nextList, config) {
    if (Array.isArray(response)) {
        return nextList;
    }
    const nextResponse = cloneJson(response, {}) || {};
    if (config.collectionKey === "data") {
        nextResponse.data = nextList;
        nextResponse.success = nextResponse.success ?? true;
        return nextResponse;
    }
    if (Array.isArray(nextResponse?.[config.collectionKey])) {
        nextResponse[config.collectionKey] = nextList;
        nextResponse.success = nextResponse.success ?? true;
        return nextResponse;
    }
    if (Array.isArray(nextResponse?.data?.[config.collectionKey])) {
        nextResponse.data = {
            ...nextResponse.data,
            [config.collectionKey]: nextList
        };
        nextResponse.success = nextResponse.success ?? true;
        return nextResponse;
    }
    if (Array.isArray(nextResponse?.data?.data)) {
        nextResponse.data = {
            ...nextResponse.data,
            data: nextList
        };
        nextResponse.success = nextResponse.success ?? true;
        return nextResponse;
    }
    if (Array.isArray(nextResponse?.data)) {
        nextResponse.data = nextList;
        nextResponse.success = nextResponse.success ?? true;
        return nextResponse;
    }
    nextResponse[config.collectionKey] = nextList;
    nextResponse.data = nextResponse.data ?? nextList;
    nextResponse.success = nextResponse.success ?? true;
    return nextResponse;
}
function buildDefaultListResponse(config, nextList) {
    const base = {
        success: true,
        message: "Loaded from local storage."
    };
    if (config.collectionKey === "data") {
        base.data = nextList;
        return base;
    }
    base[config.collectionKey] = nextList;
    base.data = nextList;
    return base;
}
function extractEntityFromResponse(response, config) {
    if (!response || typeof response !== "object") {
        return null;
    }
    if (response[config.entityKey] && typeof response[config.entityKey] === "object" && !Array.isArray(response[config.entityKey])) {
        return response[config.entityKey];
    }
    if (response.data && typeof response.data === "object" && !Array.isArray(response.data)) {
        return response.data;
    }
    if (getEntityId(response)) {
        return response;
    }
    return null;
}
function buildDefaultDetailResponse(config, entity) {
    return {
        success: true,
        message: "Loaded from local storage.",
        [config.entityKey]: entity,
        data: entity
    };
}
function findCachedEntityFromStore(store, config, targetId) {
    if (!targetId) {
        return null;
    }
    const listResponse = store[config.listEndpoint];
    const list = extractArrayFromResponse(listResponse, config);
    const fromList = list.find((entry)=>idsMatch(getEntityId(entry), targetId));
    if (fromList) {
        return fromList;
    }
    for (const [endpoint, cachedResponse] of Object.entries(store || {})){
        if (!config.match(endpoint)) {
            continue;
        }
        const detailEntity = extractEntityFromResponse(cachedResponse, config);
        if (detailEntity && idsMatch(getEntityId(detailEntity), targetId)) {
            return detailEntity;
        }
    }
    return null;
}
function buildOptimisticPaymentEntity(baseEntity, payload) {
    const paidDelta = Number(payload?.paidAmount || payload?.amount || 0) || 0;
    const previousPaid = Number(baseEntity?.paidAmount ?? baseEntity?.cashReceived ?? 0);
    const totalAmount = Number(baseEntity?.totalAmount ?? baseEntity?.total ?? 0);
    const nextPaid = previousPaid + paidDelta;
    const nextBalance = Number(baseEntity?.balance ?? Math.max(totalAmount - previousPaid, 0)) - paidDelta;
    const currentHistory = Array.isArray(baseEntity?.paymentHistory) ? baseEntity.paymentHistory : [];
    return {
        ...baseEntity,
        paidAmount: nextPaid,
        cashReceived: nextPaid,
        balance: Math.max(nextBalance, 0),
        paymentMethod: payload?.paymentMethod || baseEntity?.paymentMethod || "",
        paymentHistory: [
            {
                amount: paidDelta,
                method: payload?.paymentMethod || "",
                date: payload?.paymentDate || payload?.date || new Date().toISOString()
            },
            ...currentHistory
        ],
        updatedAt: new Date().toISOString()
    };
}
function buildOptimisticEntity(store, config, operation, serverResponse = null) {
    const targetId = operation.targetId || operation.optimisticId || inferTargetId(operation.endpoint);
    const serverEntity = extractEntityFromResponse(serverResponse, config);
    if (serverEntity) {
        return ensureEntityIdentifiers(serverEntity, targetId || operation.optimisticId);
    }
    if (/\/payment$/i.test(operation.endpoint) && (config.name === "sales" || config.name === "purchases")) {
        const baseEntity = findCachedEntityFromStore(store, config, targetId) || {};
        return ensureEntityIdentifiers(buildOptimisticPaymentEntity(baseEntity, operation.data), targetId);
    }
    const baseEntity = operation.action === "update" ? findCachedEntityFromStore(store, config, targetId) || {} : {};
    return ensureEntityIdentifiers({
        ...baseEntity,
        ...operation.data || {},
        updatedAt: new Date().toISOString(),
        createdAt: operation.action === "create" ? baseEntity.createdAt || new Date().toISOString() : baseEntity.createdAt
    }, targetId || operation.optimisticId);
}
function applyOperationToStore(store, operation, serverResponse = null) {
    const config = resolveResourceConfig(operation.endpoint);
    if (!config) {
        return store;
    }
    const nextStore = cloneJson(store, {}) || {};
    const listResponse = nextStore[config.listEndpoint];
    const currentList = extractArrayFromResponse(listResponse, config);
    const optimisticEntity = buildOptimisticEntity(nextStore, config, operation, serverResponse);
    const targetId = operation.targetId || operation.optimisticId;
    let nextList = currentList.slice();
    if (operation.action === "create") {
        const optimisticId = operation.optimisticId;
        const actualId = getEntityId(optimisticEntity);
        let replaced = false;
        nextList = nextList.map((entry)=>{
            const entryId = getEntityId(entry);
            if (optimisticId && idsMatch(entryId, optimisticId) || actualId && idsMatch(entryId, actualId)) {
                replaced = true;
                return optimisticEntity;
            }
            return entry;
        });
        if (!replaced) {
            nextList.unshift(optimisticEntity);
        }
    } else if (operation.action === "update") {
        let replaced = false;
        nextList = nextList.map((entry)=>{
            const entryId = getEntityId(entry);
            if (targetId && idsMatch(entryId, targetId) || operation.optimisticId && idsMatch(entryId, operation.optimisticId)) {
                replaced = true;
                return optimisticEntity;
            }
            return entry;
        });
        if (!replaced && getEntityId(optimisticEntity)) {
            nextList.unshift(optimisticEntity);
        }
    } else if (operation.action === "delete") {
        nextList = nextList.filter((entry)=>!idsMatch(getEntityId(entry), targetId));
    }
    nextStore[config.listEndpoint] = replaceArrayInResponse(listResponse || buildDefaultListResponse(config, currentList), nextList, config);
    for (const endpoint of Object.keys(nextStore)){
        if (!config.match(endpoint)) {
            continue;
        }
        const detailId = extractDetailId(config, endpoint);
        if (!detailId) {
            continue;
        }
        if (operation.action === "delete" && idsMatch(detailId, targetId)) {
            delete nextStore[endpoint];
            continue;
        }
        const entityId = getEntityId(optimisticEntity);
        if (entityId && (idsMatch(detailId, entityId) || operation.optimisticId && idsMatch(detailId, operation.optimisticId))) {
            nextStore[endpoint] = buildDefaultDetailResponse(config, optimisticEntity);
        }
    }
    if (operation.action !== "delete" && (targetId || getEntityId(optimisticEntity))) {
        const detailId = getEntityId(optimisticEntity) || targetId;
        const detailEndpoint = config.name === "products" ? `/products/getProductById/${detailId}` : `${config.listEndpoint}/${detailId}`;
        nextStore[detailEndpoint] = buildDefaultDetailResponse(config, optimisticEntity);
    }
    return nextStore;
}
function applyPendingOperationsToResponse(endpoint, response) {
    const config = resolveResourceConfig(endpoint);
    if (!config) {
        return response;
    }
    const queue = getPendingCrudQueue().filter((operation)=>resolveResourceConfig(operation.endpoint)?.name === config.name);
    if (!queue.length) {
        return response;
    }
    const initialStore = {
        [endpoint]: cloneJson(response, response)
    };
    const updatedStore = queue.reduce((currentStore, operation)=>applyOperationToStore(currentStore, operation), initialStore);
    return updatedStore[endpoint];
}
function createQueuedOperation(endpoint, options = {}) {
    const method = String(options.method || "GET").toUpperCase();
    const action = getCrudAction(method, endpoint);
    const targetId = inferTargetId(endpoint);
    const optimisticId = action === "create" ? `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}` : targetId;
    return {
        id: `queue-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        endpoint,
        method,
        data: cloneJson(options.data, options.data),
        includeAuth: options.includeAuth !== false,
        action,
        targetId,
        optimisticId,
        createdAt: new Date().toISOString()
    };
}
function isRecoverableSyncError(error) {
    const message = String(error?.message || "").toLowerCase();
    return error?.status === 0 || error?.response?.status === 0 || error?.name === "AbortError" || message.includes("unable to reach the api") || message.includes("timed out") || message.includes("failed to fetch");
}
function migrateLegacyAuthStorage() {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
    const localStorage = undefined;
    const sessionStorage = undefined;
    const legacyToken = undefined;
    const legacyUser = undefined;
}
async function authRequest(endpoint, { method = "POST", data = null, includeAuth = false, showSuccessToast = true, showErrorToast = true, timeoutMs = 30000 } = {}) {
    const abortController = new AbortController();
    const timeoutId = setTimeout(()=>abortController.abort(), timeoutMs);
    try {
        const headers = {
            "Content-Type": "application/json"
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const response = await fetch(`${NORMALIZED_BASE_URL}${endpoint}`, {
            method,
            headers,
            body: data == null ? undefined : JSON.stringify(data),
            signal: abortController.signal
        });
        const rawResponse = await response.text();
        const parsedResponse = parseResponseBody(rawResponse, {
            "content-type": response.headers.get("content-type") || ""
        });
        if (!response.ok) {
            const message = parsedResponse?.message || parsedResponse?.error || response.statusText || "Something went wrong";
            throw createRequestError(message, {
                status: response.status,
                data: parsedResponse
            });
        }
        if (showSuccessToast && parsedResponse?.message) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(parsedResponse.message);
        }
        return parsedResponse;
    } catch (error) {
        const fallbackMessage = "Something went wrong";
        const message = error?.name === "AbortError" ? `The request to ${NORMALIZED_BASE_URL}${endpoint} timed out.` : typeof Event !== "undefined" && error instanceof Event ? fallbackMessage : error instanceof TypeError && !error.response ? `Unable to reach the API at ${NORMALIZED_BASE_URL}. Check the API URL, CORS settings, and whether the backend is running.` : error?.message === "[object Event]" ? fallbackMessage : error.response?.data?.message || error.response?.data?.error || error.message || fallbackMessage;
        if (showErrorToast) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(message);
        }
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && /invalid token|jwt malformed|jwt must be provided|unauthorized/i.test(message)) //TURBOPACK unreachable
        ;
        throw createRequestError(message, {
            status: error?.response?.status || error?.status || 0,
            data: error?.response?.data ?? null
        });
    } finally{
        clearTimeout(timeoutId);
    }
}
async function networkApiRequest(endpoint, { method = "POST", data = null, includeAuth = false, timeoutMs = 30000 } = {}) {
    return authRequest(endpoint, {
        method,
        data,
        includeAuth,
        showSuccessToast: false,
        showErrorToast: false,
        timeoutMs
    });
}
async function apiRequest(endpoint, options = {}) {
    const normalizedOptions = typeof options === "string" ? {
        method: options
    } : options;
    const { method = "GET", suppressSuccessToast = false, suppressErrorToast = false, includeAuth = true, allowOfflineCrud = true, timeoutMs = 30000, ...restOptions } = normalizedOptions || {};
    const normalizedMethod = String(method || "GET").toUpperCase();
    const action = getCrudAction(normalizedMethod, endpoint);
    const config = resolveResourceConfig(endpoint);
    if (normalizedMethod === "GET") {
        try {
            const response = await networkApiRequest(endpoint, {
                method: normalizedMethod,
                includeAuth,
                ...restOptions
            });
            const mergedResponse = applyPendingOperationsToResponse(endpoint, response);
            const cachedResponses = getCachedResponses();
            cachedResponses[endpoint] = mergedResponse;
            setCachedResponses(cachedResponses);
            return mergedResponse;
        } catch (error) {
            const cachedResponses = getCachedResponses();
            const cachedResponse = cachedResponses[endpoint];
            if (cachedResponse) {
                return applyPendingOperationsToResponse(endpoint, cachedResponse);
            }
            if (config) {
                if (endpoint !== config.listEndpoint) {
                    const cachedListResponse = cachedResponses[config.listEndpoint];
                    if (cachedListResponse && !extractDetailId(config, endpoint)) {
                        return applyPendingOperationsToResponse(config.listEndpoint, cachedListResponse);
                    }
                }
                const detailId = extractDetailId(config, endpoint);
                const cachedEntity = findCachedEntityFromStore(cachedResponses, config, detailId);
                if (cachedEntity) {
                    return buildDefaultDetailResponse(config, cachedEntity);
                }
            }
            if (!suppressErrorToast) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error?.message || "Failed to fetch data.");
            }
            throw error;
        }
    }
    if (!allowOfflineCrud || !action || !config) {
        try {
            const response = await networkApiRequest(endpoint, {
                method: normalizedMethod,
                includeAuth,
                ...restOptions
            });
            if (!suppressSuccessToast && response?.message) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(response.message);
            }
            return response;
        } catch (error) {
            if (!suppressErrorToast) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error?.message || "Something went wrong.");
            }
            throw error;
        }
    }
    const queuedOperation = createQueuedOperation(endpoint, {
        method: normalizedMethod,
        includeAuth,
        ...restOptions
    });
    const previousCache = getCachedResponses();
    const nextCache = applyOperationToStore(previousCache, queuedOperation);
    setCachedResponses(nextCache);
    try {
        const response = await networkApiRequest(endpoint, {
            method: normalizedMethod,
            includeAuth,
            ...restOptions
        });
        const syncedCache = applyOperationToStore(nextCache, queuedOperation, response);
        setCachedResponses(syncedCache);
        if (!suppressSuccessToast && response?.message) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(response.message);
        }
        return response;
    } catch (error) {
        if (!isRecoverableSyncError(error)) {
            setCachedResponses(previousCache);
            if (!suppressErrorToast) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error?.message || "Something went wrong.");
            }
            throw error;
        }
        const queue = getPendingCrudQueue();
        queue.push(queuedOperation);
        setPendingCrudQueue(queue);
        if (!suppressSuccessToast) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Saved locally. Use Sync Data to upload changes.");
        }
        const configEntity = buildOptimisticEntity(nextCache, config, queuedOperation);
        return {
            success: true,
            pendingSync: true,
            message: "Saved locally. Use Sync Data to upload changes.",
            data: action === "delete" ? {
                id: queuedOperation.targetId
            } : configEntity,
            [config.entityKey]: action === "delete" ? undefined : configEntity
        };
    }
}
function getStoredAuthToken() {
    const storage = getAuthStorage();
    if (!storage) {
        return null;
    }
    migrateLegacyAuthStorage();
    const token = normalizeAuthTokenValue(storage.getItem(AUTH_TOKEN_KEY));
    if (!token) {
        clearLocalAuthSession();
    }
    return token;
}
function getStoredAuthUser() {
    const storage = getAuthStorage();
    if (!storage) {
        return null;
    }
    migrateLegacyAuthStorage();
    return normalizeStoredValue(storage.getItem(AUTH_USER_KEY));
}
function setStoredAuthSession({ token, user }) {
    const storage = getAuthStorage();
    if (!storage) {
        return;
    }
    if (token) {
        const normalizedToken = normalizeAuthTokenValue(token);
        if (normalizedToken) {
            storage.setItem(AUTH_TOKEN_KEY, normalizedToken);
        }
    }
    if (user) {
        storage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    }
}
function clearStoredAuthSession() {
    const storage = getAuthStorage();
    if (!storage) {
        return;
    }
    storage.removeItem(AUTH_TOKEN_KEY);
    storage.removeItem(AUTH_USER_KEY);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
function getPendingCrudCount() {
    return getPendingCrudQueue().length;
}
function getCachedCrudEndpointCount() {
    return Object.keys(getCachedResponses()).length;
}
function hasPreloadedCrudData(permissions = []) {
    const cachedResponses = getCachedResponses();
    const requiredEndpoints = getPreloadEndpoints(permissions);
    if (!requiredEndpoints.length) {
        return true;
    }
    return requiredEndpoints.every((endpoint)=>cachedResponses[endpoint]);
}
function clearCrudLocalData() {
    removeStorageKey(CRUD_CACHE_KEY);
    removeStorageKey(CRUD_QUEUE_KEY);
    dispatchCrudSyncEvent();
}
function subscribeToCrudSync(listener) {
    if ("TURBOPACK compile-time truthy", 1) {
        return ()=>{};
    }
    //TURBOPACK unreachable
    ;
    const handler = undefined;
}
async function syncPendingCrudOperations() {
    const queue = getPendingCrudQueue();
    if (!queue.length) {
        return {
            synced: 0,
            failed: 0,
            pending: 0
        };
    }
    const remainingQueue = [];
    let synced = 0;
    let nextCache = getCachedResponses();
    for(let index = 0; index < queue.length; index += 1){
        const operation = queue[index];
        try {
            const response = await networkApiRequest(operation.endpoint, {
                method: operation.method,
                data: operation.data,
                includeAuth: operation.includeAuth
            });
            nextCache = applyOperationToStore(nextCache, operation, response);
            synced += 1;
        } catch (error) {
            remainingQueue.push(operation);
            if (isRecoverableSyncError(error)) {
                remainingQueue.push(...queue.slice(index + 1));
                break;
            }
        }
    }
    setCachedResponses(nextCache);
    setPendingCrudQueue(remainingQueue);
    return {
        synced,
        failed: remainingQueue.length,
        pending: remainingQueue.length
    };
}
async function preloadCrudDataToLocalStorage(permissions = [], { clearExisting = false } = {}) {
    if (clearExisting) {
        clearCrudLocalData();
    }
    const endpointsToLoad = getPreloadEndpoints(permissions);
    const cachedResponses = getCachedResponses();
    const results = await Promise.allSettled(endpointsToLoad.map((endpoint)=>networkApiRequest(endpoint, {
            method: "GET",
            includeAuth: true
        }).then((response)=>({
                endpoint,
                response
            }))));
    for (const result of results){
        if (result.status !== "fulfilled") {
            continue;
        }
        const { endpoint, response } = result.value;
        cachedResponses[endpoint] = response;
    }
    setCachedResponses(cachedResponses);
    return {
        loaded: results.filter((result)=>result.status === "fulfilled").length,
        failed: results.filter((result)=>result.status === "rejected").length,
        endpoints: endpointsToLoad
    };
}
async function loginUser(payload) {
    return authRequest("/users/login", {
        method: "POST",
        data: payload
    });
}
async function signupUser(payload) {
    return authRequest("/users/signup", {
        method: "POST",
        data: payload
    });
}
async function getOnboardingConfig() {
    return authRequest("/onboarding/config", {
        method: "GET",
        showSuccessToast: false
    });
}
async function getMyOnboarding({ silent = false } = {}) {
    return authRequest("/onboarding/me", {
        method: "GET",
        includeAuth: true,
        showSuccessToast: false,
        showErrorToast: !silent
    });
}
async function saveMyOnboarding(payload, { silent = false } = {}) {
    return authRequest("/onboarding/me", {
        method: "PUT",
        data: payload,
        includeAuth: true,
        showSuccessToast: !silent,
        showErrorToast: !silent
    });
}
async function deleteOnboardingById(id) {
    return authRequest(`/onboarding/${id}`, {
        method: "DELETE",
        includeAuth: true
    });
}
async function getUserDashboardBootstrap({ silent = false } = {}) {
    return authRequest("/userdashboard/bootstrap", {
        method: "GET",
        includeAuth: true,
        showSuccessToast: false,
        showErrorToast: !silent
    });
}
async function getMyUserDashboard({ silent = false } = {}) {
    return authRequest("/userdashboard/me", {
        method: "GET",
        includeAuth: true,
        showSuccessToast: false,
        showErrorToast: !silent
    });
}
async function saveMyUserDashboard(payload, { silent = false } = {}) {
    return authRequest("/userdashboard/me", {
        method: "PUT",
        data: payload,
        includeAuth: true,
        showSuccessToast: !silent,
        showErrorToast: !silent
    });
}
async function deleteUserDashboardById(id) {
    return authRequest(`/userdashboard/${id}`, {
        method: "DELETE",
        includeAuth: true
    });
}
;
}),
"[project]/app/AdminDashboard/authservice/authCookies.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAuthCookies",
    ()=>clearAuthCookies,
    "setAuthCookies",
    ()=>setAuthCookies
]);
"use client";
const AUTH_SESSION_COOKIE = "app_auth";
const AUTH_ROLE_COOKIE = "app_role";
const COOKIE_PATH = "path=/";
const COOKIE_SAME_SITE = "SameSite=Lax";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;
const COOKIE_PERSISTENCE = `max-age=${COOKIE_MAX_AGE}`;
function setAuthCookies(role) {
    if (typeof document === "undefined") return;
    const normalizedRole = encodeURIComponent(String(role || "").trim().toUpperCase());
    document.cookie = `${AUTH_SESSION_COOKIE}=1; ${COOKIE_PATH}; ${COOKIE_SAME_SITE}; ${COOKIE_PERSISTENCE}`;
    document.cookie = `${AUTH_ROLE_COOKIE}=${normalizedRole}; ${COOKIE_PATH}; ${COOKIE_SAME_SITE}; ${COOKIE_PERSISTENCE}`;
}
function clearAuthCookies() {
    if (typeof document === "undefined") return;
    document.cookie = `${AUTH_SESSION_COOKIE}=; max-age=0; ${COOKIE_PATH}; ${COOKIE_SAME_SITE}`;
    document.cookie = `${AUTH_ROLE_COOKIE}=; max-age=0; ${COOKIE_PATH}; ${COOKIE_SAME_SITE}`;
}
}),
"[project]/app/AdminDashboard/authservice/navigation.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DASHBOARD_ROUTE_CONFIG",
    ()=>DASHBOARD_ROUTE_CONFIG,
    "getFirstAllowedRoute",
    ()=>getFirstAllowedRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/permissions.js [app-ssr] (ecmascript)");
"use client";
;
const DASHBOARD_ROUTE_CONFIG = [
    {
        path: "/AdminDashboard",
        permission: "DASHBOARD_VIEW"
    },
    {
        path: "/AdminDashboard/pos",
        moduleKey: "POS"
    },
    {
        path: "/AdminDashboard/customers",
        moduleKey: "CUSTOMER"
    },
    {
        path: "/AdminDashboard/products",
        moduleKey: "PRODUCT"
    },
    {
        path: "/AdminDashboard/purchases",
        moduleKey: "PURCHASE"
    },
    {
        path: "/AdminDashboard/suppliers",
        moduleKey: "SUPPLIER"
    },
    {
        path: "/AdminDashboard/sales",
        moduleKey: "SALE"
    },
    {
        path: "/AdminDashboard/expenses",
        moduleKey: "EXPENSE"
    },
    {
        path: "/AdminDashboard/reports",
        permission: "REPORT_VIEW"
    },
    {
        path: "/AdminDashboard/users",
        moduleKey: "USER"
    },
    {
        path: "/AdminDashboard/roles",
        moduleKey: "ROLE"
    }
];
function getFirstAllowedRoute(permissions = []) {
    const safePermissions = Array.isArray(permissions) ? permissions : [];
    if (safePermissions.includes("*")) {
        return "/AdminDashboard";
    }
    const match = DASHBOARD_ROUTE_CONFIG.find((route)=>route.moduleKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasModuleAccess"])(route.moduleKey, safePermissions) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasAnyPermission"])([
            route.permission
        ], safePermissions));
    return match?.path || null;
}
}),
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
"[project]/app/auth/login/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authCookies$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/authCookies.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/authStorage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/auth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/permissions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
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
/* ================= PERMISSION PRIORITY ================= */ const PERMISSION_PRIORITY = [
    "DASHBOARD_VIEW",
    "CUSTOMER_VIEW",
    "POS_VIEW",
    "SALE_VIEW",
    "PRODUCT_VIEW",
    "PURCHASE_VIEW",
    "SUPPLIER_VIEW",
    "EXPENSE_VIEW",
    "REPORT_VIEW",
    "DOCTOR_VIEW",
    "ROLE_VIEW",
    "ACTIVITY_VIEW"
];
const ROLE_PERMISSION_PRIORITY = {
    ADMIN: [
        "DASHBOARD_VIEW",
        "CUSTOMER_VIEW",
        "POS_VIEW",
        "SALE_VIEW",
        "PRODUCT_VIEW",
        "PURCHASE_VIEW",
        "SUPPLIER_VIEW",
        "EXPENSE_VIEW",
        "REPORT_VIEW",
        "ROLE_VIEW",
        "ACTIVITY_VIEW"
    ],
    SALES_MANAGER: [
        "POS_VIEW",
        "PRODUCT_VIEW",
        "PURCHASE_VIEW",
        "SUPPLIER_VIEW",
        "SALE_VIEW",
        "EXPENSE_VIEW",
        "REPORT_VIEW",
        "DASHBOARD_VIEW",
        "CUSTOMER_VIEW",
        "ROLE_VIEW",
        "ACTIVITY_VIEW"
    ]
};
const PERMISSION_ROUTES = {
    DASHBOARD_VIEW: "/AdminDashboard",
    POS_VIEW: "/AdminDashboard/pos",
    CUSTOMER_VIEW: "/AdminDashboard/customers",
    PATIENT_VIEW: "/AdminDashboard/patients",
    PRODUCT_VIEW: "/AdminDashboard/products",
    PURCHASE_VIEW: "/AdminDashboard/purchases",
    SUPPLIER_VIEW: "/AdminDashboard/suppliers",
    SALE_VIEW: "/AdminDashboard/sales",
    EXPENSE_VIEW: "/AdminDashboard/expenses",
    REPORT_VIEW: "/AdminDashboard/reports",
    ROLE_VIEW: "/AdminDashboard/roles",
    ACTIVITY_VIEW: "/AdminDashboard/activity"
};
function extractToken(payload) {
    const candidates = [
        payload?.token,
        payload?.accessToken,
        payload?.jwt,
        payload?.data?.token,
        payload?.data?.accessToken,
        payload?.data?.jwt
    ];
    for (const candidate of candidates){
        if (typeof candidate !== "string") {
            continue;
        }
        const normalizedToken = candidate.trim().replace(/^["']|["']$/g, "");
        if (normalizedToken && !normalizedToken.includes("[object Object]") && !/\s/.test(normalizedToken)) {
            return normalizedToken;
        }
    }
    return null;
}
function LoginPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        email: "",
        password: "",
        role: ""
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showErrorModal, setShowErrorModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!showSuccess) return undefined;
        router.prefetch("/AdminDashboard");
        Object.values(PERMISSION_ROUTES).forEach((route)=>{
            router.prefetch(route);
        });
    }, [
        router,
        showSuccess
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const { token, role, permissions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readStoredAuth"])();
        if (!token || !role) {
            return;
        }
        const normalizedPermissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizePermissionsForRole"])(permissions, role);
        const permissionPriority = ROLE_PERMISSION_PRIORITY[String(role || "").toUpperCase()] || PERMISSION_PRIORITY;
        let redirectTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirstAllowedRoute"])(normalizedPermissions) || "/AdminDashboard";
        if (normalizedPermissions.includes("*")) {
            redirectTo = "/AdminDashboard";
        }
        for (const perm of permissionPriority){
            if (normalizedPermissions.includes(perm) && PERMISSION_ROUTES[perm]) {
                redirectTo = PERMISSION_ROUTES[perm];
                break;
            }
        }
        router.replace(redirectTo);
    }, [
        router
    ]);
    /* ================= LOGIN ================= */ const handleLogin = async (e)=>{
        e.preventDefault();
        if (loading) return;
        const { email, password, role } = form;
        if (!emailPattern.test(email.trim())) {
            setMessage("Please enter a valid email address");
            setShowErrorModal(true);
            return;
        }
        if (password.trim().length < 8) {
            setMessage("Password must be at least 8 characters");
            setShowErrorModal(true);
            return;
        }
        if (!role) {
            setMessage("Please select a role");
            setShowErrorModal(true);
            return;
        }
        setLoading(true);
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearPersistedAuth"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authCookies$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAuthCookies"])();
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/user-management/login", {
                method: "POST",
                data: {
                    email,
                    password,
                    role
                },
                allowOfflineCrud: false,
                suppressErrorToast: true,
                suppressErrorLog: true
            });
            const loginPayload = response?.data && typeof response.data === "object" ? response.data : response;
            const token = extractToken(loginPayload) || extractToken(response);
            const user = loginPayload?.user || loginPayload?.admin || loginPayload?.data?.user || null;
            if (!token || !user) {
                throw new Error(response?.message || loginPayload?.message || "Invalid login response");
            }
            /* ===== CLEAR OLD AUTH ===== */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearPersistedAuth"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearCrudLocalData"])();
            const normalizedPermissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizePermissionsForRole"])(user.permissions || [], user.role);
            /* ===== SAVE AUTH (BACKEND IS SOURCE OF TRUTH) ===== */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persistAuthState"])({
                token,
                user,
                role: user.role,
                permissions: normalizedPermissions
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authCookies$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAuthCookies"])(user.role);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notifyAuthStateChanged"])();
            setShowSuccess(true);
            /* ===== SAFE REDIRECT ===== */ const permissions = normalizedPermissions;
            const permissionPriority = ROLE_PERMISSION_PRIORITY[String(user.role || "").toUpperCase()] || PERMISSION_PRIORITY;
            let redirectTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirstAllowedRoute"])(permissions) || "/auth/login";
            if (permissions.includes("*")) {
                redirectTo = "/AdminDashboard";
            }
            for (const perm of permissionPriority){
                if (permissions.includes(perm) && PERMISSION_ROUTES[perm]) {
                    redirectTo = PERMISSION_ROUTES[perm];
                    break;
                }
            }
            router.replace(redirectTo);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["preloadCrudDataToLocalStorage"])(user.permissions || []).catch(()=>{
            // MainLayout will keep trying in the background if preload is incomplete.
            });
        } catch (err) {
            setMessage(err?.message || "Login failed");
            setShowErrorModal(true);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-3 py-4 sm:px-4 sm:py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/app/auth/login/page.jsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -bottom-20 -right-12 h-72 w-72 rounded-full bg-emerald-200/35 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/app/auth/login/page.jsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            showSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/40 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-4 w-full max-w-sm rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheckCircle"], {
                            className: "text-green-600 text-5xl mx-auto mb-3"
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.jsx",
                            lineNumber: 299,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-green-700",
                            children: "Login Successful"
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.jsx",
                            lineNumber: 300,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mt-2",
                            children: "Redirecting..."
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.jsx",
                            lineNumber: 303,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/auth/login/page.jsx",
                    lineNumber: 298,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/auth/login/page.jsx",
                lineNumber: 297,
                columnNumber: 9
            }, this),
            showErrorModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/40 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-4 w-full max-w-sm rounded-2xl border border-rose-100 bg-white p-6 text-center shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimesCircle"], {
                            className: "text-red-600 text-5xl mx-auto mb-3"
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.jsx",
                            lineNumber: 312,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-red-700",
                            children: "Login Failed"
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.jsx",
                            lineNumber: 313,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mt-2",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.jsx",
                            lineNumber: 314,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowErrorModal(false),
                            className: "mt-4 px-4 py-2 bg-red-600 text-white rounded-lg",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.jsx",
                            lineNumber: 315,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/auth/login/page.jsx",
                    lineNumber: 311,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/auth/login/page.jsx",
                lineNumber: 310,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200/60 bg-white/90 shadow-2xl backdrop-blur-sm sm:rounded-3xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-[1.05fr_1fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex flex-col justify-between p-10 bg-gradient-to-br from-slate-900 to-emerald-500 text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm",
                                            children: "Secure Auto Products Access"
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.jsx",
                                            lineNumber: 330,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "font-serif text-5xl font-semibold italic",
                                            children: [
                                                "Huzaifa Autos  ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/auth/login/page.jsx",
                                                    lineNumber: 334,
                                                    columnNumber: 32
                                                }, this),
                                                "Feroza"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/auth/login/page.jsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/90 text-sm leading-6 max-w-md",
                                            children: "Welcome back. Sign in to continue managing Huzaifa Autos, and reports in one place."
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.jsx",
                                            lineNumber: 337,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/auth/login/page.jsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl bg-white/15 p-4 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold",
                                            children: "System Access"
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.jsx",
                                            lineNumber: 343,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-white/90 mt-1",
                                            children: "Choose your assigned role and continue securely."
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.jsx",
                                            lineNumber: 344,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/auth/login/page.jsx",
                                    lineNumber: 342,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/auth/login/page.jsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-5 sm:p-8 md:p-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 rounded-2xl bg-gradient-to-r from-slate-900 to-emerald-500 p-4 text-white md:hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-serif text-2xl font-semibold italic leading-tight sm:text-3xl",
                                            children: "Huzaifa Autos Feroza"
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.jsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            children: " Feroza"
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.jsx",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/auth/login/page.jsx",
                                    lineNumber: 351,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-center text-2xl font-bold text-slate-800 sm:text-3xl",
                                    children: "Autos POS Login"
                                }, void 0, false, {
                                    fileName: "[project]/app/auth/login/page.jsx",
                                    lineNumber: 364,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-6 mt-1 text-center text-sm text-slate-500",
                                    children: "Enter your credentials to continue"
                                }, void 0, false, {
                                    fileName: "[project]/app/auth/login/page.jsx",
                                    lineNumber: 367,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleLogin,
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEnvelope"], {
                                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/auth/login/page.jsx",
                                                        lineNumber: 375,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        placeholder: "Email",
                                                        className: "w-full border border-slate-200 bg-slate-50/70 px-10 py-3 rounded-xl outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 transition",
                                                        value: form.email,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                email: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/auth/login/page.jsx",
                                                        lineNumber: 376,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/auth/login/page.jsx",
                                                lineNumber: 374,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.jsx",
                                            lineNumber: 373,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaLock"], {
                                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/auth/login/page.jsx",
                                                        lineNumber: 391,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: showPassword ? "text" : "password",
                                                        placeholder: "Password",
                                                        className: "w-full border border-slate-200 bg-slate-50/70 px-10 py-3 rounded-xl outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 transition",
                                                        value: form.password,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                password: e.target.value
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/auth/login/page.jsx",
                                                        lineNumber: 392,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setShowPassword(!showPassword),
                                                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700",
                                                        children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEyeSlash"], {}, void 0, false, {
                                                            fileName: "[project]/app/auth/login/page.jsx",
                                                            lineNumber: 406,
                                                            columnNumber: 37
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEye"], {}, void 0, false, {
                                                            fileName: "[project]/app/auth/login/page.jsx",
                                                            lineNumber: 406,
                                                            columnNumber: 54
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/auth/login/page.jsx",
                                                        lineNumber: 401,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/auth/login/page.jsx",
                                                lineNumber: 390,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.jsx",
                                            lineNumber: 389,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full border border-slate-200 bg-slate-50/70 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 transition",
                                                value: form.role,
                                                onChange: (e)=>setForm({
                                                        ...form,
                                                        role: e.target.value
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select Role"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/auth/login/page.jsx",
                                                        lineNumber: 420,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "ADMIN",
                                                        children: "Admin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/auth/login/page.jsx",
                                                        lineNumber: 421,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "SALES_MANAGER",
                                                        children: "Sales Manager"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/auth/login/page.jsx",
                                                        lineNumber: 422,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/auth/login/page.jsx",
                                                lineNumber: 413,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.jsx",
                                            lineNumber: 412,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: loading,
                                            className: "w-full bg-gradient-to-r from-slate-900 to-emerald-500 text-white py-3 rounded-xl font-semibold shadow-lg shadow-sky-200 hover:opacity-95 transition",
                                            children: loading ? "Logging in..." : "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.jsx",
                                            lineNumber: 426,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/auth/login/page.jsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/auth/login/page.jsx",
                            lineNumber: 350,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/auth/login/page.jsx",
                    lineNumber: 327,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/auth/login/page.jsx",
                lineNumber: 326,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/auth/login/page.jsx",
        lineNumber: 291,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__96499c46._.js.map