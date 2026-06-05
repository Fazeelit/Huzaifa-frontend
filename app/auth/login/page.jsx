"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  apiRequest,
  clearCrudLocalData,
  preloadCrudDataToLocalStorage,
} from "../../AdminDashboard/authservice/api";
import {
  setAuthCookies,
  clearAuthCookies,
} from "../../AdminDashboard/authservice/authCookies";
import {
  clearPersistedAuth,
  notifyAuthStateChanged,
  persistAuthState,
} from "../../AdminDashboard/authservice/authStorage";
import { getFirstAllowedRoute } from "../../AdminDashboard/authservice/navigation";
import { readStoredAuth } from "../../AdminDashboard/authservice/auth";
import {
  FaUserCog,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaTimesCircle,  
} from "react-icons/fa";
import { Stethoscope } from "lucide-react";

/* ================= PERMISSION PRIORITY ================= */
const PERMISSION_PRIORITY = [
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
  "ACTIVITY_VIEW",
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
    "ACTIVITY_VIEW",
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
    "ACTIVITY_VIEW",
  ],
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
  ACTIVITY_VIEW: "/AdminDashboard/activity",
};

function extractToken(payload) {
  const candidates = [
    payload?.token,
    payload?.accessToken,
    payload?.jwt,
    payload?.data?.token,
    payload?.data?.accessToken,
    payload?.data?.jwt,
  ];

  for (const candidate of candidates) {
    if (typeof candidate !== "string") {
      continue;
    }

    const normalizedToken = candidate.trim().replace(/^["']|["']$/g, "");
    if (
      normalizedToken &&
      !normalizedToken.includes("[object Object]") &&
      !/\s/.test(normalizedToken)
    ) {
      return normalizedToken;
    }
  }

  return null;
}

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const emailPattern =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    if (!showSuccess) return undefined;

    router.prefetch("/AdminDashboard");
    Object.values(PERMISSION_ROUTES).forEach((route) => {
      router.prefetch(route);
    });
  }, [router, showSuccess]);

  useEffect(() => {
    const { token, role, permissions } = readStoredAuth();

    if (!token || !role) {
      return;
    }

    const normalizedPermissions = Array.isArray(permissions) ? permissions : [];
    const permissionPriority =
      ROLE_PERMISSION_PRIORITY[String(role || "").toUpperCase()] ||
      PERMISSION_PRIORITY;
    let redirectTo =
      getFirstAllowedRoute(normalizedPermissions) || "/AdminDashboard";

    if (normalizedPermissions.includes("*")) {
      redirectTo = "/AdminDashboard";
    }

    for (const perm of permissionPriority) {
      if (normalizedPermissions.includes(perm) && PERMISSION_ROUTES[perm]) {
        redirectTo = PERMISSION_ROUTES[perm];
        break;
      }
    }

    router.replace(redirectTo);
  }, [router]);

  /* ================= LOGIN ================= */
  const handleLogin = async (e) => {
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
      clearPersistedAuth();
      clearAuthCookies();

      const response = await apiRequest("/user-management/login", {
        method: "POST",
        data: {
          email,
          password,
          role, // ✅ sent for validation only
        },
        allowOfflineCrud: false,
        suppressErrorToast: true,
        suppressErrorLog: true,
      });

      const loginPayload =
        response?.data && typeof response.data === "object"
          ? response.data
          : response;

      const token = extractToken(loginPayload) || extractToken(response);
      const user =
        loginPayload?.user ||
        loginPayload?.admin ||
        loginPayload?.data?.user ||
        null;

      if (!token || !user) {
        throw new Error(
          response?.message ||
            loginPayload?.message ||
            "Invalid login response"
        );
      }

      /* ===== CLEAR OLD AUTH ===== */
      clearPersistedAuth();
      clearCrudLocalData();

      /* ===== SAVE AUTH (BACKEND IS SOURCE OF TRUTH) ===== */
      persistAuthState({
        token,
        user,
        role: user.role,
        permissions: user.permissions || [],
      });
      setAuthCookies(user.role);

      await preloadCrudDataToLocalStorage(user.permissions || []);

      notifyAuthStateChanged();
      setShowSuccess(true);

      /* ===== SAFE REDIRECT ===== */
      const permissions = user.permissions || [];
      const permissionPriority =
        ROLE_PERMISSION_PRIORITY[String(user.role || "").toUpperCase()] ||
        PERMISSION_PRIORITY;
      let redirectTo = getFirstAllowedRoute(permissions) || "/auth/login";

      if (permissions.includes("*")) {
        redirectTo = "/AdminDashboard";
      }

      for (const perm of permissionPriority) {
        if (permissions.includes(perm) && PERMISSION_ROUTES[perm]) {
          redirectTo = PERMISSION_ROUTES[perm];
          break;
        }
      }

      router.replace(redirectTo);
    } catch (err) {
      setMessage(err?.message || "Login failed");
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-emerald-50 px-3 py-4 sm:px-4 sm:py-8">
      <div className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-72 w-72 rounded-full bg-emerald-200/35 blur-3xl" />

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="mx-4 w-full max-w-sm rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-2xl">
            <FaCheckCircle className="text-green-600 text-5xl mx-auto mb-3" />
            <h2 className="text-xl font-bold text-green-700">
              Login Successful
            </h2>
            <p className="text-gray-600 mt-2">Redirecting...</p>
          </div>
        </div>
      )}

      {/* ERROR MODAL */}
      {showErrorModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="mx-4 w-full max-w-sm rounded-2xl border border-rose-100 bg-white p-6 text-center shadow-2xl">
            <FaTimesCircle className="text-red-600 text-5xl mx-auto mb-3" />
            <h2 className="text-xl font-bold text-red-700">Login Failed</h2>
            <p className="text-gray-600 mt-2">{message}</p>
            <button
              onClick={() => setShowErrorModal(false)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* LOGIN FORM */}
      <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-slate-200/60 bg-white/90 shadow-2xl backdrop-blur-sm sm:rounded-3xl">
        <div className="grid md:grid-cols-[1.05fr_1fr]">
          <div className="hidden md:flex flex-col justify-between p-10 bg-gradient-to-br from-slate-900 to-emerald-500 text-white">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm">
                Secure Auto Products Access
              </div>
              <h1 className="font-serif text-5xl font-semibold italic">
                Huzaifa Autos  <br />
                Feroza
              </h1>
              <p className="text-white/90 text-sm leading-6 max-w-md">
                Welcome back. Sign in to continue managing Huzaifa Autos, and reports in one place.
              </p>
            </div>

            <div className="rounded-2xl bg-white/15 p-4 text-sm">
              <p className="font-semibold">System Access</p>
              <p className="text-white/90 mt-1">
                Choose your assigned role and continue securely.
              </p>
            </div>
          </div>

          <div className="p-5 sm:p-8 md:p-10">
            <div className="mb-6 rounded-2xl bg-gradient-to-r from-slate-900 to-emerald-500 p-4 text-white md:hidden">
              <p className="font-serif text-2xl font-semibold italic leading-tight sm:text-3xl">Huzaifa Autos Feroza</p>
              <p className="text-sm"> Feroza</p>
            </div>

            {/* <div className="flex justify-center text-3xl text-blue-700 ">
              <img
              src="/logo.png"
              alt="UmerPOS Logo"
              className="mx-auto -mb-2 h-40 w-40 object-contain"
            />
            </div>            */}
           
            <h2 className="text-center text-2xl font-bold text-slate-800 sm:text-3xl">
              Autos POS Login
            </h2>
            <p className="mb-6 mt-1 text-center text-sm text-slate-500">
              Enter your credentials to continue
            </p>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-slate-200 bg-slate-50/70 px-10 py-3 rounded-xl outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 transition"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="relative">
                  <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full border border-slate-200 bg-slate-50/70 px-10 py-3 rounded-xl outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 transition"
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* ROLE */}
              <div className="space-y-2">
                <select
                  className="w-full border border-slate-200 bg-slate-50/70 px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-400 transition"
                  value={form.role}
                  onChange={(e) =>
                    setForm({ ...form, role: e.target.value })
                  }
                >
                  <option value="">Select Role</option>
                  <option value="ADMIN">Admin</option>
                  <option value="SALES_MANAGER">Sales Manager</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-slate-900 to-emerald-500 text-white py-3 rounded-xl font-semibold shadow-lg shadow-sky-200 hover:opacity-95 transition"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
