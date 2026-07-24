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
"[project]/app/AdminDashboard/components/Sidebar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PackagePlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package-plus.js [app-ssr] (ecmascript) <export default as PackagePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-ssr] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-cog.js [app-ssr] (ecmascript) <export default as UserCog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-ssr] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/permissions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authCookies$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/authCookies.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/authStorage.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function parsePermissions(value) {
    if (!value) {
        return [];
    }
    try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [];
    } catch  {
        return [];
    }
}
function Sidebar({ isOpen, toggleSidebar, isCollapsed = false }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [permissions, setPermissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [userInfo, setUserInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadPermissions = ()=>{
            try {
                const storedUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readPersistedAuthValue"])("user");
                const storedRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readPersistedAuthValue"])("role");
                const storedPermissionsRaw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readPersistedAuthValue"])("permissions");
                const storedPermissions = parsePermissions(storedPermissionsRaw);
                if (!storedRole) {
                    router.replace("/auth/login");
                    return;
                }
                if (storedUser) {
                    try {
                        const parsed = JSON.parse(storedUser);
                        setUserInfo({
                            name: parsed?.name || "",
                            email: parsed?.email || ""
                        });
                    } catch  {
                        setUserInfo({
                            name: "",
                            email: ""
                        });
                    }
                }
                setRole(storedRole);
                setPermissions(Array.isArray(storedPermissions) ? storedPermissions : []);
            } catch (err) {
                console.error("Permission load error:", err);
                setPermissions([]);
            } finally{
                setLoading(false);
            }
        };
        loadPermissions();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(loadPermissions);
    }, [
        router
    ]);
    const handleLogout = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearPersistedAuth"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authCookies$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAuthCookies"])();
        router.replace("/auth/login");
    };
    const closeMobileSidebar = ()=>{
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && window.innerWidth < 768) //TURBOPACK unreachable
        ;
    };
    const links = [
        {
            name: "Dashboard",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
            path: "/AdminDashboard",
            permission: "DASHBOARD_VIEW"
        },
        {
            name: "POS",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"],
            path: "/AdminDashboard/pos",
            moduleKey: "POS"
        },
        {
            name: "Customers",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            path: "/AdminDashboard/customers",
            moduleKey: "CUSTOMER"
        },
        {
            name: "Products",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
            path: "/AdminDashboard/products",
            moduleKey: "PRODUCT"
        },
        {
            name: "Purchases",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PackagePlus$3e$__["PackagePlus"],
            path: "/AdminDashboard/purchases",
            moduleKey: "PURCHASE"
        },
        {
            name: "Suppliers",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
            path: "/AdminDashboard/suppliers",
            moduleKey: "SUPPLIER"
        },
        {
            name: "Sales",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"],
            path: "/AdminDashboard/sales",
            moduleKey: "SALE"
        },
        {
            name: "Outdoor Supply",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
            path: "/AdminDashboard/outdoor-supply",
            moduleKey: "PURCHASE"
        },
        {
            name: "Outdoor Supply Report",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
            path: "/AdminDashboard/outdoor-supply-report",
            moduleKey: "PURCHASE"
        },
        {
            name: "Expenses",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
            path: "/AdminDashboard/expenses",
            moduleKey: "EXPENSE"
        },
        {
            name: "Reports",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
            path: "/AdminDashboard/reports",
            permission: "REPORT_VIEW"
        },
        {
            name: "Users",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__["UserCog"],
            path: "/AdminDashboard/users",
            moduleKey: "USER"
        },
        {
            name: "Roles",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
            path: "/AdminDashboard/roles",
            moduleKey: "ROLE"
        }
    ];
    const allowedLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>links.filter((link)=>link.moduleKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasModuleAccess"])(link.moduleKey, permissions) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasAnyPermission"])([
                link.permission
            ], permissions)), [
        permissions
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `fixed left-0 top-0 h-full bg-slate-800 border-r border-slate-800 z-50 flex items-center justify-center transform transition-all duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 ${isCollapsed ? "md:w-16" : "md:w-60"} w-60`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-slate-300",
                children: "Loading menu..."
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                lineNumber: 140,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
            lineNumber: 135,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 bg-black/30 backdrop-blur-[1px] transition-opacity duration-300 z-40 md:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`,
                onClick: toggleSidebar
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `fixed top-0 left-0 h-full max-w-[85vw] bg-slate-800 border-r border-slate-800 z-50 transform transition-all duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 ${isCollapsed ? "md:w-16" : "md:w-60"} w-60`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex h-full min-h-0 flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute right-3 top-4 rounded-md p-1.5 text-slate-200 transition hover:bg-slate-700 md:hidden",
                            onClick: toggleSidebar,
                            "aria-label": "Close sidebar",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-b border-slate-800 px-3 pb-3 pt-4 pr-12 md:pr-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 p-[1px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex min-w-0 items-center gap-2.5 rounded-2xl bg-slate-800 px-3 py-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${isCollapsed ? "md:hidden" : ""}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "break-words text-sm font-semibold text-white",
                                                children: "Huzaifa Autos Feroza"
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "break-words text-xs text-slate-300",
                                                children: role
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                                        lineNumber: 171,
                                        columnNumber: 20
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex-1 overflow-y-auto overscroll-contain py-3 text-sm font-medium [scrollbar-width:thin] [scrollbar-color:#334155_transparent]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `px-4 pb-2 text-[11px] uppercase tracking-wider text-slate-500 ${isCollapsed ? "md:hidden" : ""}`,
                                    children: "Main Navigation"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this),
                                allowedLinks.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-center text-xs text-slate-500 mt-4 ${isCollapsed ? "md:hidden" : ""}`,
                                    children: "No modules assigned"
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this),
                                allowedLinks.map((link, i)=>{
                                    const Icon = link.icon;
                                    const active = pathname === link.path;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.path,
                                        onClick: closeMobileSidebar,
                                        className: `group relative flex items-center px-3 py-2.5 mx-2 my-1 rounded-xl transition-all duration-200 ${isCollapsed ? "md:justify-center md:gap-0" : "gap-2.5"} ${active ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25" : "text-slate-300 hover:bg-slate-900 hover:text-white"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${active ? "bg-white/20" : "bg-slate-800 text-slate-300 group-hover:bg-slate-700 group-hover:text-white"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                                                    lineNumber: 214,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                                                lineNumber: 207,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `min-w-0 truncate ${isCollapsed ? "md:hidden" : ""}`,
                                                children: link.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                                                lineNumber: 216,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this);
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleLogout,
                                    className: `w-[calc(100%-1rem)] mx-2 mt-3 flex items-center px-3 py-2.5 rounded-xl text-rose-400 bg-red-500/10 hover:bg-rose-500/20 transition ${isCollapsed ? "md:justify-center md:gap-0" : "gap-2.5"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex h-7 w-7 items-center justify-center rounded-lg bg-rose-500/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `${isCollapsed ? "md:hidden" : ""}`,
                                            children: "Logout"
                                        }, void 0, false, {
                                            fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        (userInfo.name || userInfo.email) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `mx-3 mb-4 mt-2 rounded-xl border border-slate-800 bg-slate-800/80 px-3 py-3 text-xs ${isCollapsed ? "md:hidden" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-slate-100",
                                    children: userInfo.name
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                                    lineNumber: 240,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 mt-0.5 truncate",
                                    children: userInfo.email
                                }, void 0, false, {
                                    fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                                    lineNumber: 241,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                    lineNumber: 159,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/Sidebar.jsx",
                lineNumber: 154,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/app/AdminDashboard/components/TopBar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Topbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
"use client";
;
;
function Topbar({ title, onTopIconClick, titleIcon: TitleIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"], onSyncClick, pendingSyncCount = 0, syncing = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `
        sticky top-0 z-[35] h-16 sm:h-20
        flex items-center justify-between gap-3
        px-3 sm:px-6
        bg-gradient-to-r from-white via-slate-50 to-white/95
        backdrop-blur-md border-b border-slate-200 shadow-sm
        w-full
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 items-center gap-2 sm:gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 sm:h-10 sm:w-10",
                        onClick: onTopIconClick,
                        "aria-label": "Toggle sidebar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/TopBar.jsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/TopBar.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-600/10 text-blue-600 transition hover:bg-blue-600/20 sm:h-9 sm:w-9",
                        onClick: onTopIconClick,
                        "aria-label": "Toggle sidebar collapse",
                        title: "Toggle sidebar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TitleIcon, {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/TopBar.jsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/TopBar.jsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 leading-tight",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "truncate text-[10px] uppercase tracking-wider text-slate-500 sm:text-[11px]",
                                children: "Admin Panel"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/TopBar.jsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "truncate text-sm font-semibold text-slate-800 sm:text-lg",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/TopBar.jsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/TopBar.jsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/TopBar.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex shrink-0 items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onSyncClick,
                        disabled: syncing,
                        className: `inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-white shadow-md transition disabled:cursor-not-allowed disabled:opacity-60 ${pendingSyncCount > 0 ? "bg-red-600 hover:bg-red-700 shadow-red-600/20" : "bg-blue-600 hover:bg-blue-700 shadow-blue-600/20"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                size: 14,
                                className: syncing ? "animate-spin" : ""
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/TopBar.jsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: syncing ? "Syncing..." : "Sync Data"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/TopBar.jsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rounded-full bg-white/20 px-1.5 py-0.5 text-[10px]",
                                children: pendingSyncCount
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/TopBar.jsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/TopBar.jsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden shrink-0 sm:flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `mr-2 h-2.5 w-2.5 rounded-full ${pendingSyncCount > 0 ? "bg-red-500" : "bg-blue-500"}`
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/TopBar.jsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-medium text-slate-500",
                                children: pendingSyncCount > 0 ? `${pendingSyncCount} Pending` : "Synced"
                            }, void 0, false, {
                                fileName: "[project]/app/AdminDashboard/components/TopBar.jsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/AdminDashboard/components/TopBar.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/TopBar.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminDashboard/components/TopBar.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
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
"[project]/app/AdminDashboard/components/MainLayout.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-ssr] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-ssr] (ecmascript) <export default as Package>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PackagePlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package-plus.js [app-ssr] (ecmascript) <export default as PackagePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-ssr] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-ssr] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-ssr] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-cog.js [app-ssr] (ecmascript) <export default as UserCog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/truck.js [app-ssr] (ecmascript) <export default as Truck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$Sidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/Sidebar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$TopBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/TopBar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/permissions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/authStorage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-ssr] (ecmascript)");
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
function parsePermissions(value) {
    if (!value) {
        return [];
    }
    try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [];
    } catch  {
        return [];
    }
}
const ROUTES = {
    "/AdminDashboard": {
        title: "Dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
        permission: "DASHBOARD_VIEW"
    },
    "/AdminDashboard/pos": {
        title: "POS",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"],
        moduleKey: "POS"
    },
    "/AdminDashboard/customers": {
        title: "Customers",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        moduleKey: "CUSTOMER"
    },
    "/AdminDashboard/products": {
        title: "Products",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Package$3e$__["Package"],
        moduleKey: "PRODUCT"
    },
    "/AdminDashboard/purchases": {
        title: "Purchases",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PackagePlus$3e$__["PackagePlus"],
        moduleKey: "PURCHASE"
    },
    "/AdminDashboard/outdoor-supply": {
        title: "Outdoor Supply",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$truck$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Truck$3e$__["Truck"],
        moduleKey: "PURCHASE"
    },
    "/AdminDashboard/outdoor-supply-report": {
        title: "Outdoor Supply Report",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        moduleKey: "PURCHASE"
    },
    "/AdminDashboard/suppliers": {
        title: "Suppliers",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
        moduleKey: "SUPPLIER"
    },
    "/AdminDashboard/sales": {
        title: "Sales",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"],
        moduleKey: "SALE"
    },
    "/AdminDashboard/tests": {
        title: "Tests",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"],
        permission: "TEST_VIEW"
    },
    "/AdminDashboard/expenses": {
        title: "Expenses",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
        moduleKey: "EXPENSE"
    },
    "/AdminDashboard/reports": {
        title: "Reports",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        permission: "REPORT_VIEW"
    },
    "/AdminDashboard/users": {
        title: "Users",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$cog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCog$3e$__["UserCog"],
        moduleKey: "USER"
    },
    "/AdminDashboard/roles": {
        title: "Roles",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        moduleKey: "ROLE"
    }
};
function MainLayout({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mobileSidebarOpen, setMobileSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sidebarCollapsed, setSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [permissions, setPermissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [pendingSyncCount, setPendingSyncCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [syncing, setSyncing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pendingSyncCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const syncingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const handleTopbarIconClick = ()=>{
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && window.innerWidth < 768) //TURBOPACK unreachable
        ;
        setSidebarCollapsed((p)=>!p);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMobileSidebarOpen(false);
    }, [
        pathname
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setPendingSyncCount((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPendingCrudCount"])());
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["subscribeToCrudSync"])(({ pendingCount = 0 } = {})=>{
            setPendingSyncCount(pendingCount);
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return;
        }
        //TURBOPACK unreachable
        ;
    }, [
        loading,
        permissions,
        role
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        pendingSyncCountRef.current = pendingSyncCount;
    }, [
        pendingSyncCount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        syncingRef.current = syncing;
    }, [
        syncing
    ]);
    /* ================= LOAD AUTH ================= */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadAuth = ()=>{
            try {
                const storedToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readPersistedAuthValue"])("authToken");
                const storedRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readPersistedAuthValue"])("role");
                const storedPermissionsRaw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readPersistedAuthValue"])("permissions");
                const storedPermissions = parsePermissions(storedPermissionsRaw);
                if (!storedToken || !storedRole) {
                    router.replace("/auth/login");
                    return;
                }
                setRole(storedRole);
                setPermissions(Array.isArray(storedPermissions) ? storedPermissions : []);
            } catch (err) {
                router.replace("/auth/login");
            } finally{
                setLoading(false);
            }
        };
        loadAuth();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$authStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["onAuthStateChanged"])(loadAuth);
    }, [
        router
    ]);
    /* ================= MATCH ROUTE ================= */ const matchedRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return Object.keys(ROUTES).sort((a, b)=>b.length - a.length).find((route)=>pathname.startsWith(route));
    }, [
        pathname
    ]);
    /* ================= PAGE TITLE ================= */ const pageTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return matchedRoute ? ROUTES[matchedRoute]?.title : "";
    }, [
        matchedRoute
    ]);
    const pageTitleIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return matchedRoute ? ROUTES[matchedRoute]?.icon || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"];
    }, [
        matchedRoute
    ]);
    /* ================= ACCESS CHECK ================= */ const hasAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!matchedRoute) return true;
        const routeConfig = ROUTES[matchedRoute];
        if (!routeConfig) return true;
        if (routeConfig.moduleKey) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasModuleAccess"])(routeConfig.moduleKey, permissions);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$permissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasAnyPermission"])([
            routeConfig.permission
        ], permissions);
    }, [
        matchedRoute,
        permissions
    ]);
    /* ================= BLOCK UNAUTHORIZED ================= */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (loading || hasAccess) {
            return;
        }
        const fallbackRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirstAllowedRoute"])(permissions);
        if (fallbackRoute && fallbackRoute !== pathname) {
            router.replace(fallbackRoute);
            return;
        }
        if (!fallbackRoute) {
            router.replace("/auth/login");
        }
    }, [
        hasAccess,
        loading,
        pathname,
        permissions,
        router
    ]);
    const performSync = async ({ silentWhenEmpty = false, autoTriggered = false } = {})=>{
        if (syncingRef.current) {
            return;
        }
        if (pendingSyncCountRef.current <= 0) {
            if (!silentWhenEmpty) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("No local data is waiting to sync.");
            }
            return;
        }
        try {
            setSyncing(true);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syncPendingCrudOperations"])();
            if (result.failed > 0) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(`${result.synced} synced, ${result.pending} still pending.`);
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(autoTriggered ? `Internet restored. Synced ${result.synced} local change(s).` : `Synced ${result.synced} local change(s).`);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error?.message || "Failed to sync local data.");
        } finally{
            setSyncing(false);
            setPendingSyncCount((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPendingCrudCount"])());
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleOnline = ()=>{
            performSync({
                silentWhenEmpty: true,
                autoTriggered: true
            });
        };
        window.addEventListener("online", handleOnline);
        return ()=>window.removeEventListener("online", handleOnline);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            return;
        }
        //TURBOPACK unreachable
        ;
    }, [
        loading,
        pendingSyncCount,
        role
    ]);
    const handleSyncClick = async ()=>{
        await performSync();
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center text-gray-500",
            children: "Loading dashboard..."
        }, void 0, false, {
            fileName: "[project]/app/AdminDashboard/components/MainLayout.jsx",
            lineNumber: 311,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen overflow-x-hidden bg-gray-50 md:flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$Sidebar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: mobileSidebarOpen,
                isCollapsed: sidebarCollapsed,
                toggleSidebar: ()=>setMobileSidebarOpen((p)=>!p)
            }, void 0, false, {
                fileName: "[project]/app/AdminDashboard/components/MainLayout.jsx",
                lineNumber: 319,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative flex min-w-0 flex-1 flex-col transition-all duration-300 ${sidebarCollapsed ? "md:ml-16" : "md:ml-60"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$TopBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        title: pageTitle,
                        titleIcon: pageTitleIcon,
                        onTopIconClick: handleTopbarIconClick,
                        onSyncClick: handleSyncClick,
                        pendingSyncCount: pendingSyncCount,
                        syncing: syncing
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/MainLayout.jsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "min-w-0 flex-1 px-3 pt-3 sm:px-4 sm:pt-4",
                        children: hasAccess ? children : !loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-amber-200 bg-amber-50 px-4 py-6 text-sm text-amber-900",
                            children: "You do not have permission to view this page."
                        }, void 0, false, {
                            fileName: "[project]/app/AdminDashboard/components/MainLayout.jsx",
                            lineNumber: 343,
                            columnNumber: 13
                        }, this) : null
                    }, void 0, false, {
                        fileName: "[project]/app/AdminDashboard/components/MainLayout.jsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/AdminDashboard/components/MainLayout.jsx",
                lineNumber: 325,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/AdminDashboard/components/MainLayout.jsx",
        lineNumber: 318,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/AdminDashboard/layout.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/AdminDashboard/layout.jsx
__turbopack_context__.s([
    "default",
    ()=>AdminLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$MainLayout$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/components/MainLayout.jsx [app-ssr] (ecmascript)");
"use client"; // ensure this is a client component
;
;
;
function AdminLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$components$2f$MainLayout$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/app/AdminDashboard/layout.jsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__df311800._.js.map