"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  ShoppingCart,
  CalendarCheck,
  Users,
  Stethoscope,
  Package,
  PackagePlus,
  Receipt,
  FlaskConical,
  Wallet,
  BarChart3,
  UserCog,
  ShieldCheck,
  Layers,
  LogOut,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { hasAnyPermission, hasModuleAccess } from "../authservice/permissions";
import { clearAuthCookies } from "../authservice/authCookies";
import {
  clearPersistedAuth,
  onAuthStateChanged,
  readPersistedAuthValue,
} from "../authservice/authStorage";

export default function Sidebar({ isOpen, toggleSidebar, isCollapsed = false }) {
  const pathname = usePathname();
  const router = useRouter();

  const [role, setRole] = useState(null);
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });

  useEffect(() => {
    const loadPermissions = () => {
      try {
        const storedUser = readPersistedAuthValue("user");
        const storedRole = readPersistedAuthValue("role");
        const storedPermissionsRaw = readPersistedAuthValue("permissions");
        const storedPermissions = storedPermissionsRaw
          ? JSON.parse(storedPermissionsRaw)
          : [];

        if (!storedRole) {
          router.replace("/auth/login");
          return;
        }

        if (storedUser) {
          try {
            const parsed = JSON.parse(storedUser);
            setUserInfo({
              name: parsed?.name || "",
              email: parsed?.email || "",
            });
          } catch {
            setUserInfo({ name: "", email: "" });
          }
        }

        setRole(storedRole);

        setPermissions(Array.isArray(storedPermissions) ? storedPermissions : []);
      } catch (err) {
        console.error("Permission load error:", err);
        setPermissions([]);
      } finally {
        setLoading(false);
      }
    };

    loadPermissions();
    return onAuthStateChanged(loadPermissions);
  }, [router]);

  const handleLogout = () => {
    clearPersistedAuth();
    clearAuthCookies();
    router.replace("/auth/login");
  };

  const closeMobileSidebar = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  const links = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/AdminDashboard", permission: "DASHBOARD_VIEW" },
    { name: "POS", icon: ShoppingCart, path: "/AdminDashboard/pos", moduleKey: "POS" },
    { name: "Customers", icon: Users, path: "/AdminDashboard/customers", moduleKey: "CUSTOMER" },
    { name: "Products", icon: Package, path: "/AdminDashboard/products", moduleKey: "PRODUCT" },
    { name: "Purchases", icon: PackagePlus, path: "/AdminDashboard/purchases", moduleKey: "PURCHASE" },
    { name: "Suppliers", icon: Layers, path: "/AdminDashboard/suppliers", moduleKey: "SUPPLIER" },
    { name: "Sales", icon: Receipt, path: "/AdminDashboard/sales", moduleKey: "SALE" },
    { name: "Expenses", icon: Wallet, path: "/AdminDashboard/expenses", moduleKey: "EXPENSE" },
    { name: "Reports", icon: BarChart3, path: "/AdminDashboard/reports", permission: "REPORT_VIEW" },
    { name: "Users", icon: UserCog, path: "/AdminDashboard/users", moduleKey: "USER" },
    { name: "Roles", icon: ShieldCheck, path: "/AdminDashboard/roles", moduleKey: "ROLE" },
  ];

  const allowedLinks = useMemo(
    () =>
      links.filter((link) =>
        link.moduleKey
          ? hasModuleAccess(link.moduleKey, permissions)
          : hasAnyPermission([link.permission], permissions)
      ),
    [permissions]
  );

  if (loading) {
    return (
      <div
        className={`fixed left-0 top-0 h-full bg-slate-800 border-r border-slate-800 z-50 flex items-center justify-center transform transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 ${isCollapsed ? "md:w-16" : "md:w-60"} w-60`}
      >
        <div className="text-sm text-slate-300">Loading menu...</div>
      </div>
    );
  }

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-[1px] transition-opacity duration-300 z-40 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      />

      <aside
        className={`fixed top-0 left-0 h-full max-w-[85vw] bg-slate-800 border-r border-slate-800 z-50 transform transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 ${isCollapsed ? "md:w-16" : "md:w-60"} w-60`}
      >
        <div className="relative flex h-full min-h-0 flex-col">
          <button
            className="absolute right-3 top-4 rounded-md p-1.5 text-slate-200 transition hover:bg-slate-700 md:hidden"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>

          <div className="border-b border-slate-800 px-3 pb-3 pt-4 pr-12 md:pr-3">
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 p-[1px]">
              <div className="flex min-w-0 items-center gap-2.5 rounded-2xl bg-slate-800 px-3 py-3">
                   <div className={`${isCollapsed ? "md:hidden" : ""}`}>
                  <h2 className="break-words text-sm font-semibold text-white">Huzaifa Autos Feroza</h2>
                  <p className="break-words text-xs text-slate-300">{role}</p>
                </div>
              </div>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto overscroll-contain py-3 text-sm font-medium [scrollbar-width:thin] [scrollbar-color:#334155_transparent]">
            <p className={`px-4 pb-2 text-[11px] uppercase tracking-wider text-slate-500 ${isCollapsed ? "md:hidden" : ""}`}>
              Main Navigation
            </p>

            {allowedLinks.length === 0 && (
              <p className={`text-center text-xs text-slate-500 mt-4 ${isCollapsed ? "md:hidden" : ""}`}>
                No modules assigned
              </p>
            )}

            {allowedLinks.map((link, i) => {
              const Icon = link.icon;
              const active = pathname === link.path;

              return (
                <Link
                  key={i}
                  href={link.path}
                  onClick={closeMobileSidebar}
                  className={`group relative flex items-center px-3 py-2.5 mx-2 my-1 rounded-xl transition-all duration-200 ${
                    isCollapsed ? "md:justify-center md:gap-0" : "gap-2.5"
                  } ${
                    active
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                      : "text-slate-300 hover:bg-slate-900 hover:text-white"
                  }`}
                  >
                  <span
                    className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                      active
                        ? "bg-white/20"
                        : "bg-slate-800 text-slate-300 group-hover:bg-slate-700 group-hover:text-white"
                    }`}
                  >
                    <Icon size={16} />
                  </span>
                  <span className={`min-w-0 truncate ${isCollapsed ? "md:hidden" : ""}`}>{link.name}</span>
                </Link>
              );
            })}

            <button
              onClick={handleLogout}
              className={`w-[calc(100%-1rem)] mx-2 mt-3 flex items-center px-3 py-2.5 rounded-xl text-rose-400 bg-red-500/10 hover:bg-rose-500/20 transition ${
                isCollapsed ? "md:justify-center md:gap-0" : "gap-2.5"
              }`}
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-rose-500/20">
                <LogOut size={16} />
              </span>
              <span className={`${isCollapsed ? "md:hidden" : ""}`}>Logout</span>
            </button>
          </nav>

          {(userInfo.name || userInfo.email) && (
            <div
              className={`mx-3 mb-4 mt-2 rounded-xl border border-slate-800 bg-slate-800/80 px-3 py-3 text-xs ${
                isCollapsed ? "md:hidden" : ""
              }`}
            >
              <p className="font-semibold text-slate-100">{userInfo.name}</p>
              <p className="text-slate-400 mt-0.5 truncate">{userInfo.email}</p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
