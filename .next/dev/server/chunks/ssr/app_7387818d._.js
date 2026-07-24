module.exports = [
"[project]/app/AdminDashboard/authservice/api.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiRequest",
    ()=>apiRequest
]);
(()=>{
    const e = new Error("Cannot find module 'axios'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function getBaseUrl() {
    const envBaseUrl = ("TURBOPACK compile-time value", "https://huzaifa-backend.onrender.com/api");
    if ("TURBOPACK compile-time truthy", 1) {
        return (envBaseUrl || "http://localhost:8080/api").replace(/\/+$/, "");
    }
    //TURBOPACK unreachable
    ;
    const desktopPort = undefined;
    const isFileProtocol = undefined;
}
async function apiRequest(endpoint, { method = "GET", data = null, headers = {}, includeAuth = false, formData = false, successMessage = null, timeout = 30 * 60 * 1000, params = null, onUploadProgress = null, fullResponse = false } = {}) {
    try {
        let finalHeaders = {
            ...headers
        };
        // ----------------------------
        // FormData Handling
        // ----------------------------
        if (formData) {
            if (!(data instanceof FormData)) {
                console.warn("apiRequest: formData=true but data is not FormData");
            }
            delete finalHeaders["Content-Type"];
        } else if (data && typeof data === "object") {
            finalHeaders["Content-Type"] = "application/json";
            data = JSON.stringify(data);
        }
        // ----------------------------
        // Optional Bearer Token (if used)
        // ----------------------------
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // ----------------------------
        // Build URL
        // ----------------------------
        const baseUrl = getBaseUrl();
        const url = `${baseUrl}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;
        if ("TURBOPACK compile-time truthy", 1) {
            console.log("API Request:", {
                url,
                method,
                headers: finalHeaders,
                params
            });
        }
        // ----------------------------
        // Axios Config (🔥 IMPORTANT FIX)
        // ----------------------------
        const config = {
            url,
            method: method.toUpperCase(),
            headers: finalHeaders,
            timeout,
            params,
            withCredentials: true,
            maxBodyLength: Infinity,
            maxContentLength: Infinity,
            onUploadProgress: typeof onUploadProgress === "function" ? onUploadProgress : undefined
        };
        if (![
            "GET",
            "HEAD"
        ].includes(config.method)) {
            config.data = data;
        }
        // ----------------------------
        // Make Request
        // ----------------------------
        const response = await axios(config);
        // ----------------------------
        // Success Toast
        // ----------------------------
        const msg = successMessage || response.data?.message;
        if (msg && ("TURBOPACK compile-time value", "undefined") !== "undefined" && ![
            "GET",
            "HEAD"
        ].includes(config.method)) //TURBOPACK unreachable
        ;
        return fullResponse ? response : response.data;
    } catch (error) {
        if (![
            401,
            403,
            409
        ].includes(error?.response?.status)) {
            console.error("API Request Error:", error);
        }
        const errorMessage = error.response?.data?.message || error.response?.data?.error || (error.code === "ECONNABORTED" ? "Request timed out. Please try again." : null) || (error.message?.includes("Network Error") ? "Network error — check backend connection." : null) || error.message || "Something went wrong";
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const customError = new Error(errorMessage);
        customError.original = error;
        throw customError;
    }
}
}),
"[project]/app/AdminDashboard/authservice/auth.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALLOWED_ROLES",
    ()=>ALLOWED_ROLES,
    "AUTH_ROLE_COOKIE",
    ()=>AUTH_ROLE_COOKIE,
    "AUTH_SESSION_COOKIE",
    ()=>AUTH_SESSION_COOKIE,
    "AUTH_STORAGE",
    ()=>AUTH_STORAGE,
    "DASHBOARD_ROUTE_PERMISSIONS",
    ()=>DASHBOARD_ROUTE_PERMISSIONS,
    "ROLE_HOME_ROUTES",
    ()=>ROLE_HOME_ROUTES,
    "canAccessDashboardPath",
    ()=>canAccessDashboardPath,
    "clearAuthSessionCookies",
    ()=>clearAuthSessionCookies,
    "clearStoredAuth",
    ()=>clearStoredAuth,
    "getFirstAccessibleDashboardRoute",
    ()=>getFirstAccessibleDashboardRoute,
    "getRoleHomeRoute",
    ()=>getRoleHomeRoute,
    "getRolePermissions",
    ()=>getRolePermissions,
    "hasAnyPermission",
    ()=>hasAnyPermission,
    "hasPermission",
    ()=>hasPermission,
    "isAllowedRole",
    ()=>isAllowedRole,
    "normalizePermission",
    ()=>normalizePermission,
    "normalizeRole",
    ()=>normalizeRole,
    "readStoredAuth",
    ()=>readStoredAuth,
    "sanitizePermissions",
    ()=>sanitizePermissions,
    "setAuthSessionCookies",
    ()=>setAuthSessionCookies
]);
const ALLOWED_ROLES = [
    "ADMIN",
    "CLERK",
    "PRINCIPAL",
    "TEACHERS",
    "STUDENTS"
];
const ROLE_HOME_ROUTES = {
    ADMIN: "/AdminDashboard/dashboard",
    CLERK: "/AdminDashboard/dashboard",
    PRINCIPAL: "/AdminDashboard/dashboard",
    TEACHERS: "/AdminDashboard/dashboard",
    STUDENTS: "/AdminDashboard/dashboard"
};
const DASHBOARD_ROUTE_PERMISSIONS = [
    {
        prefix: "/AdminDashboard/dashboard",
        permissions: [
            "DASHBOARD_VIEW"
        ]
    },
    {
        prefix: "/AdminDashboard/classes",
        permissions: [
            "CLASSES_VIEW"
        ]
    },
    {
        prefix: "/AdminDashboard/enrollment",
        permissions: [
            "STUDENTS_CREATE"
        ]
    },
    {
        prefix: "/AdminDashboard/students/edit",
        permissions: [
            "STUDENTS_EDIT"
        ]
    },
    {
        prefix: "/AdminDashboard/students/student-detail",
        permissions: [
            "STUDENTS_VIEW"
        ]
    },
    {
        prefix: "/AdminDashboard/students/class-detail",
        permissions: [
            "STUDENTS_VIEW"
        ]
    },
    {
        prefix: "/AdminDashboard/students",
        permissions: [
            "STUDENTS_VIEW"
        ]
    },
    {
        prefix: "/AdminDashboard/teachers",
        permissions: [
            "TEACHERS_VIEW"
        ]
    },
    {
        prefix: "/AdminDashboard/results",
        permissions: [
            "RESULTS_VIEW"
        ]
    },
    {
        prefix: "/AdminDashboard/fee",
        permissions: [
            "FEES_VIEW"
        ]
    },
    {
        prefix: "/AdminDashboard/attendance",
        permissions: [
            "ATTENDANCE_VIEW"
        ]
    },
    {
        prefix: "/AdminDashboard/timetable",
        permissions: [
            "TIMETABLE_VIEW"
        ]
    },
    {
        prefix: "/AdminDashboard/monthly-expenses",
        permissions: [
            "MONTHLY_EXPENSES_VIEW"
        ]
    },
    {
        prefix: "/AdminDashboard/admin/print-invoice",
        permissions: [
            "FINANCIAL_ADMINISTRATION_VIEW"
        ]
    },
    {
        prefix: "/AdminDashboard/admin",
        permissions: [
            "FINANCIAL_ADMINISTRATION_VIEW"
        ]
    },
    {
        prefix: "/AdminDashboard/users",
        permissions: [
            "USERS_VIEW"
        ]
    },
    {
        prefix: "/AdminDashboard/roles/add",
        permissions: [
            "ROLES_CREATE",
            "ROLES_EDIT"
        ]
    },
    {
        prefix: "/AdminDashboard/roles",
        permissions: [
            "ROLES_VIEW"
        ]
    }
];
const AUTH_SESSION_COOKIE = "app_auth";
const AUTH_ROLE_COOKIE = "app_role";
const AUTH_STORAGE = "sessionStorage";
function normalizeRole(role) {
    return String(role || "").trim().toUpperCase();
}
function normalizePermission(permission) {
    return String(permission || "").trim().toUpperCase();
}
function sanitizePermissions(permissions) {
    if (!Array.isArray(permissions)) return [];
    return [
        ...new Set(permissions.map(normalizePermission).filter(Boolean))
    ];
}
function hasPermission(permissions, requiredPermission) {
    const normalizedPermissions = sanitizePermissions(permissions);
    if (normalizedPermissions.includes("*")) return true;
    return normalizedPermissions.includes(normalizePermission(requiredPermission));
}
function hasAnyPermission(permissions, requiredPermissions = []) {
    const normalizedRequiredPermissions = Array.isArray(requiredPermissions) ? requiredPermissions.map(normalizePermission).filter(Boolean) : [];
    if (normalizedRequiredPermissions.length === 0) return true;
    return normalizedRequiredPermissions.some((permission)=>hasPermission(permissions, permission));
}
function getRolePermissions(role, permissions = []) {
    return sanitizePermissions(permissions);
}
function isAllowedRole(role) {
    return ALLOWED_ROLES.includes(normalizeRole(role));
}
function getRoleHomeRoute(role) {
    const normalized = normalizeRole(role);
    return ROLE_HOME_ROUTES[normalized] || "/AdminDashboard/dashboard";
}
function canAccessDashboardPath(pathname, permissions = []) {
    const normalizedPath = String(pathname || "").trim();
    if (!normalizedPath.startsWith("/AdminDashboard")) return true;
    const matchedRoute = DASHBOARD_ROUTE_PERMISSIONS.find((route)=>normalizedPath.startsWith(route.prefix));
    if (!matchedRoute) return true;
    return hasAnyPermission(permissions, matchedRoute.permissions);
}
function getFirstAccessibleDashboardRoute(role, permissions = []) {
    const preferredHome = getRoleHomeRoute(role);
    if (canAccessDashboardPath(preferredHome, permissions)) {
        return preferredHome;
    }
    const firstAccessibleRoute = DASHBOARD_ROUTE_PERMISSIONS.find((route)=>canAccessDashboardPath(route.prefix, permissions));
    return firstAccessibleRoute?.prefix || "";
}
function readStoredAuth() {
    if ("TURBOPACK compile-time truthy", 1) {
        return {
            token: "",
            role: "",
            permissions: []
        };
    }
    //TURBOPACK unreachable
    ;
    const token = undefined;
    const role = undefined;
    let permissions;
}
function clearStoredAuth() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
function setAuthSessionCookies(role) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const secure = undefined;
    const normalizedRole = undefined;
}
function clearAuthSessionCookies() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    const secure = undefined;
}
}),
"[project]/app/auth/login/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/api.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/AdminDashboard/authservice/auth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function LoginPage() {
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
    const resolveAllowedRoute = (role, permissions = [])=>{
        const nextRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFirstAccessibleDashboardRoute"])(role, permissions);
        return nextRoute || "/AdminDashboard/dashboard";
    };
    const handleLogin = async (e)=>{
        e.preventDefault();
        if (loading) return;
        const email = form.email.trim().toLowerCase();
        const password = form.password;
        const selectedRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeRole"])(form.role);
        if (!emailPattern.test(email)) {
            setMessage("Please enter a valid email address");
            setShowErrorModal(true);
            return;
        }
        if (password.trim().length < 8) {
            setMessage("Password must be at least 8 characters");
            setShowErrorModal(true);
            return;
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALLOWED_ROLES"].includes(selectedRole)) {
            setMessage("Please select a valid role");
            setShowErrorModal(true);
            return;
        }
        setLoading(true);
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$api$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiRequest"])("/user-management/login", {
                method: "POST",
                data: {
                    email,
                    password,
                    role: selectedRole
                }
            });
            const { token, user } = response?.data || {};
            const returnedRole = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeRole"])(user?.role);
            if (!token || !user || !__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ALLOWED_ROLES"].includes(returnedRole)) {
                throw new Error("Invalid login response");
            }
            if (returnedRole !== selectedRole) {
                throw new Error("Selected role does not match your account role");
            }
            sessionStorage.removeItem("authToken");
            sessionStorage.removeItem("user");
            sessionStorage.removeItem("role");
            sessionStorage.removeItem("permissions");
            localStorage.removeItem("authToken");
            localStorage.removeItem("user");
            localStorage.removeItem("role");
            localStorage.removeItem("permissions");
            const userData = {
                ...user,
                role: returnedRole
            };
            sessionStorage.setItem("authToken", token);
            sessionStorage.setItem("user", JSON.stringify(userData));
            sessionStorage.setItem("role", returnedRole);
            const normalizedPermissions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRolePermissions"])(returnedRole, (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sanitizePermissions"])(Array.isArray(user?.permissions) ? user.permissions : []));
            if (returnedRole !== "ADMIN" && normalizedPermissions.length === 0) {
                throw new Error("Your account has no permissions assigned. Contact administrator.");
            }
            sessionStorage.setItem("permissions", JSON.stringify(normalizedPermissions));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$AdminDashboard$2f$authservice$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAuthSessionCookies"])(returnedRole);
            window.dispatchEvent(new Event("storage"));
            setShowSuccess(true);
            const nextRoute = resolveAllowedRoute(returnedRole, normalizedPermissions);
            setTimeout(()=>{
                window.location.replace(nextRoute);
            }, 800);
        } catch (err) {
            setMessage(err?.response?.data?.message || err?.message || "Login failed");
            setShowErrorModal(true);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#e0f2fe_45%,#fff7ed_100%)] text-slate-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "/impage/loginbg.png",
                alt: "School background image",
                fill: true,
                priority: true,
                className: "object-cover object-center opacity-10"
            }, void 0, false, {
                fileName: "[project]/app/auth/login/page.jsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.18),transparent_24%)]"
            }, void 0, false, {
                fileName: "[project]/app/auth/login/page.jsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[-8rem] top-[-6rem] h-56 w-56 rounded-full bg-cyan-300/30 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/app/auth/login/page.jsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-[-7rem] right-[-4rem] h-64 w-64 rounded-full bg-amber-200/40 blur-3xl"
            }, void 0, false, {
                fileName: "[project]/app/auth/login/page.jsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            showSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/25 px-4 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-sm rounded-[28px] border border-emerald-100 bg-white p-6 text-center shadow-[0_24px_80px_rgba(15,23,42,0.18)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheckCircle"], {
                            className: "text-emerald-600 text-5xl mx-auto mb-3"
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.jsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-emerald-700",
                            children: "Login Successful"
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.jsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600 mt-2",
                            children: "Redirecting..."
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.jsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/auth/login/page.jsx",
                    lineNumber: 149,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/auth/login/page.jsx",
                lineNumber: 148,
                columnNumber: 9
            }, this),
            showErrorModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/25 px-4 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-sm rounded-[28px] border border-rose-100 bg-white p-6 text-center shadow-[0_24px_80px_rgba(15,23,42,0.18)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimesCircle"], {
                            className: "text-rose-600 text-5xl mx-auto mb-3"
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.jsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-rose-700",
                            children: "Login Failed"
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.jsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600 mt-2",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.jsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowErrorModal(false),
                            className: "mt-4 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.jsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/auth/login/page.jsx",
                    lineNumber: 159,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/auth/login/page.jsx",
                lineNumber: 158,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative z-10 flex min-h-screen items-center px-4 py-8 sm:px-6 lg:px-10 xl:px-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-2xl rounded-[2.5rem] border border-white/80 bg-white/75 p-8 shadow-[0_30px_90px_rgba(14,116,144,0.16)] backdrop-blur-xl xl:p-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-8 flex items-center gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-[2rem] border border-cyan-100 bg-white p-2 shadow-[0_16px_50px_rgba(14,165,233,0.20)] xl:h-28 xl:w-36",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/impage/schoollogo.png",
                                                    alt: "AL-Flaha Public Secondary School Feroza logo",
                                                    fill: true,
                                                    className: "rounded-full object-contain "
                                                }, void 0, false, {
                                                    fileName: "[project]/app/auth/login/page.jsx",
                                                    lineNumber: 179,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/auth/login/page.jsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-times uppercase tracking-[0.35em] text-cyan-700/90",
                                                        children: "Welcome To"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/auth/login/page.jsx",
                                                        lineNumber: 187,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "mt-2 bg-gradient-to-r from-slate-900 via-cyan-700 to-sky-500 bg-clip-text text-4xl font-Montserrat font-bold italic leading-tight text-transparent xl:text-5xl",
                                                        children: [
                                                            "AL-Flaha Public",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "block text-sky-600",
                                                                children: "Secondary School Feroza"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/auth/login/page.jsx",
                                                                lineNumber: 192,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/auth/login/page.jsx",
                                                        lineNumber: 190,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/auth/login/page.jsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/auth/login/page.jsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-xl text-lg leading-8 text-slate-600 xl:text-xl",
                                        children: "Empowering bright minds with discipline, knowledge, and the confidence to lead tomorrow."
                                    }, void 0, false, {
                                        fileName: "[project]/app/auth/login/page.jsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 grid gap-4 sm:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-[1.6rem] border border-cyan-100 bg-cyan-50/80 p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700",
                                                        children: "Focused Learning"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/auth/login/page.jsx",
                                                        lineNumber: 203,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-sm leading-6 text-slate-600",
                                                        children: "Learn in a modern academic environment built for focus, growth, and achievement."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/auth/login/page.jsx",
                                                        lineNumber: 204,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/auth/login/page.jsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-[1.6rem] border border-amber-100 bg-amber-50/80 p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold uppercase tracking-[0.2em] text-amber-700",
                                                        children: "Quick Access"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/auth/login/page.jsx",
                                                        lineNumber: 209,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-sm leading-6 text-slate-600",
                                                        children: "Connect with your school system quickly and continue your journey with clarity and purpose."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/auth/login/page.jsx",
                                                        lineNumber: 210,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/auth/login/page.jsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/auth/login/page.jsx",
                                        lineNumber: 201,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/auth/login/page.jsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/auth/login/page.jsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full max-w-[520px] rounded-[2rem] border border-white/90 bg-white/88 p-6 shadow-[0_32px_90px_rgba(15,23,42,0.16)] backdrop-blur-xl sm:p-8 lg:ml-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/app/auth/login/page.jsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-600 text-white text-2xl shadow-[0_16px_40px_rgba(14,165,233,0.35)]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaUserCog"], {}, void 0, false, {
                                                fileName: "[project]/app/auth/login/page.jsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.jsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 lg:hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative mx-auto mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-[1.5rem] border border-cyan-100 bg-white p-2 shadow-[0_12px_35px_rgba(14,165,233,0.24)]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/impage/schoollogo.png",
                                                        alt: "AL-Flaha Public Secondary School Feroza logo",
                                                        fill: true,
                                                        className: "rounded-full object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/auth/login/page.jsx",
                                                        lineNumber: 226,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/auth/login/page.jsx",
                                                    lineNumber: 225,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700/90",
                                                    children: "AL-Flaha Public Secondary School Feroza"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/auth/login/page.jsx",
                                                    lineNumber: 233,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/auth/login/page.jsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl sm:text-4xl font-bold text-slate-900",
                                            children: "Sign In"
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.jsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 text-base sm:text-lg text-slate-500",
                                            children: "Use your account credentials to continue"
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.jsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/auth/login/page.jsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleLogin,
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEnvelope"], {
                                                    className: "absolute left-4 top-1/2 -translate-y-1/2 text-sky-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/auth/login/page.jsx",
                                                    lineNumber: 243,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    placeholder: "Email",
                                                    className: "w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-11 py-3.5 text-base sm:text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500",
                                                    value: form.email,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            email: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/auth/login/page.jsx",
                                                    lineNumber: 244,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/auth/login/page.jsx",
                                            lineNumber: 242,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaLock"], {
                                                    className: "absolute left-4 top-1/2 -translate-y-1/2 text-sky-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/auth/login/page.jsx",
                                                    lineNumber: 254,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: showPassword ? "text" : "password",
                                                    placeholder: "Password",
                                                    className: "w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-11 py-3.5 pr-11 text-base sm:text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500",
                                                    value: form.password,
                                                    onChange: (e)=>setForm({
                                                            ...form,
                                                            password: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/auth/login/page.jsx",
                                                    lineNumber: 255,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowPassword(!showPassword),
                                                    className: "absolute right-4 top-1/2 -translate-y-1/2 text-slate-500",
                                                    children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEyeSlash"], {}, void 0, false, {
                                                        fileName: "[project]/app/auth/login/page.jsx",
                                                        lineNumber: 267,
                                                        columnNumber: 35
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEye"], {}, void 0, false, {
                                                        fileName: "[project]/app/auth/login/page.jsx",
                                                        lineNumber: 267,
                                                        columnNumber: 52
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/auth/login/page.jsx",
                                                    lineNumber: 262,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/auth/login/page.jsx",
                                            lineNumber: 253,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-base sm:text-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 tm-2",
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
                                                    lineNumber: 276,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ADMIN",
                                                    children: "Admin"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/auth/login/page.jsx",
                                                    lineNumber: 277,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "CLERK",
                                                    children: "Clerk"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/auth/login/page.jsx",
                                                    lineNumber: 278,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "PRINCIPAL",
                                                    children: "Principal"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/auth/login/page.jsx",
                                                    lineNumber: 279,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "TEACHERS",
                                                    children: "Teachers"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/auth/login/page.jsx",
                                                    lineNumber: 280,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "STUDENTS",
                                                    children: "Students"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/auth/login/page.jsx",
                                                    lineNumber: 281,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/auth/login/page.jsx",
                                            lineNumber: 271,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: loading,
                                            className: "w-full rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 py-3.5 text-base sm:text-lg font-semibold text-white shadow-[0_18px_40px_rgba(14,165,233,0.35)] hover:from-cyan-400 hover:via-sky-500 hover:to-blue-500 disabled:opacity-70",
                                            children: loading ? "Logging in..." : "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/app/auth/login/page.jsx",
                                            lineNumber: 284,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/auth/login/page.jsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/auth/login/page.jsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/auth/login/page.jsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/auth/login/page.jsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/auth/login/page.jsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_7387818d._.js.map