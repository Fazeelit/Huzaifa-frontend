"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  Package,
  PackagePlus,
  Receipt,
  FlaskConical,
  Wallet,
  BarChart3,
  UserCog,
  ShieldCheck,
  Layers,
} from "lucide-react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { hasAnyPermission, hasModuleAccess } from "../authservice/permissions";
import { getFirstAllowedRoute } from "../authservice/navigation";
import { onAuthStateChanged, readPersistedAuthValue } from "../authservice/authStorage";
import {
  getPendingCrudCount,
  subscribeToCrudSync,
  syncPendingCrudOperations,
} from "../authservice/api";

function parsePermissions(value) {
  if (!value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

const ROUTES = {
  "/AdminDashboard": {
    title: "Dashboard",
    icon: LayoutDashboard,
    permission: "DASHBOARD_VIEW",
  },
  "/AdminDashboard/pos": {
    title: "POS",
    icon: ShoppingCart,
    moduleKey: "POS",
  },
  "/AdminDashboard/customers": {
    title: "Customers",
    icon: Users,
    moduleKey: "CUSTOMER",
  },
  "/AdminDashboard/products": {
    title: "Products",
    icon: Package,
    moduleKey: "PRODUCT",
  },
  "/AdminDashboard/purchases": {
    title: "Purchases",
    icon: PackagePlus,
    moduleKey: "PURCHASE",
  },
  "/AdminDashboard/suppliers": {
    title: "Suppliers",
    icon: Layers,
    moduleKey: "SUPPLIER",
  },
  "/AdminDashboard/sales": {
    title: "Sales",
    icon: Receipt,
    moduleKey: "SALE",
  },
  "/AdminDashboard/tests": {
    title: "Tests",
    icon: FlaskConical,
    permission: "TEST_VIEW",
  },
  "/AdminDashboard/expenses": {
    title: "Expenses",
    icon: Wallet,
    moduleKey: "EXPENSE",
  },
  "/AdminDashboard/reports": {
    title: "Reports",
    icon: BarChart3,
    permission: "REPORT_VIEW",
  },
  "/AdminDashboard/users": {
    title: "Users",
    icon: UserCog,
    moduleKey: "USER",
  },
  "/AdminDashboard/roles": {
    title: "Roles",
    icon: ShieldCheck,
    moduleKey: "ROLE",
  },
};

export default function MainLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [role, setRole] = useState(null);
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pendingSyncCount, setPendingSyncCount] = useState(0);
  const [syncing, setSyncing] = useState(false);
  const pendingSyncCountRef = useRef(0);
  const syncingRef = useRef(false);

  const handleTopbarIconClick = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setMobileSidebarOpen((p) => !p);
      return;
    }
    setSidebarCollapsed((p) => !p);
  };

  useEffect(() => {
    setMobileSidebarOpen(false);
  }, [pathname]);

  useEffect(() => {
    setPendingSyncCount(getPendingCrudCount());
    return subscribeToCrudSync(({ pendingCount = 0 } = {}) => {
      setPendingSyncCount(pendingCount);
    });
  }, []);

  useEffect(() => {
    pendingSyncCountRef.current = pendingSyncCount;
  }, [pendingSyncCount]);

  useEffect(() => {
    syncingRef.current = syncing;
  }, [syncing]);

  /* ================= LOAD AUTH ================= */
  useEffect(() => {
    const loadAuth = () => {
      try {
        const storedRole = readPersistedAuthValue("role");
        const storedPermissionsRaw = readPersistedAuthValue("permissions");
        const storedPermissions = parsePermissions(storedPermissionsRaw);

        if (!storedRole) {
          router.replace("/auth/login");
          return;
        }

        setRole(storedRole);

        setPermissions(Array.isArray(storedPermissions) ? storedPermissions : []);
      } catch (err) {
        router.replace("/auth/login");
      } finally {
        setLoading(false);
      }
    };

    loadAuth();
    return onAuthStateChanged(loadAuth);
  }, [router]);

  /* ================= MATCH ROUTE ================= */
  const matchedRoute = useMemo(() => {
    return Object.keys(ROUTES)
      .sort((a, b) => b.length - a.length)
      .find((route) => pathname.startsWith(route));
  }, [pathname]);

  /* ================= PAGE TITLE ================= */
  const pageTitle = useMemo(() => {
    return matchedRoute ? ROUTES[matchedRoute]?.title : "";
  }, [matchedRoute]);

  const pageTitleIcon = useMemo(() => {
    return matchedRoute ? ROUTES[matchedRoute]?.icon || LayoutDashboard : LayoutDashboard;
  }, [matchedRoute]);

  /* ================= ACCESS CHECK ================= */
  const hasAccess = useMemo(() => {
    if (!matchedRoute) return true;
    const routeConfig = ROUTES[matchedRoute];
    if (!routeConfig) return true;

    if (routeConfig.moduleKey) {
      return hasModuleAccess(routeConfig.moduleKey, permissions);
    }

    return hasAnyPermission([routeConfig.permission], permissions);
  }, [matchedRoute, permissions]);

  /* ================= BLOCK UNAUTHORIZED ================= */
  useEffect(() => {
    if (loading || hasAccess) {
      return;
    }

    const fallbackRoute = getFirstAllowedRoute(permissions);

    if (fallbackRoute && fallbackRoute !== pathname) {
      router.replace(fallbackRoute);
      return;
    }

    if (!fallbackRoute) {
      router.replace("/auth/login");
    }
  }, [hasAccess, loading, pathname, permissions, router]);

  const performSync = async ({ silentWhenEmpty = false, autoTriggered = false } = {}) => {
    if (syncingRef.current) {
      return;
    }

    if (pendingSyncCountRef.current <= 0) {
      if (!silentWhenEmpty) {
        toast.success("No local data is waiting to sync.");
      }
      return;
    }

    try {
      setSyncing(true);
      const result = await syncPendingCrudOperations();

      if (result.failed > 0) {
        toast.error(`${result.synced} synced, ${result.pending} still pending.`);
        return;
      }

      toast.success(
        autoTriggered
          ? `Internet restored. Synced ${result.synced} local change(s).`
          : `Synced ${result.synced} local change(s).`,
      );
    } catch (error) {
      toast.error(error?.message || "Failed to sync local data.");
    } finally {
      setSyncing(false);
      setPendingSyncCount(getPendingCrudCount());
    }
  };

  useEffect(() => {
    const handleOnline = () => {
      performSync({ silentWhenEmpty: true, autoTriggered: true });
    };

    window.addEventListener("online", handleOnline);
    return () => window.removeEventListener("online", handleOnline);
  }, []);

  const handleSyncClick = async () => {
    await performSync();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50 md:flex">
      <Sidebar
        isOpen={mobileSidebarOpen}
        isCollapsed={sidebarCollapsed}
        toggleSidebar={() => setMobileSidebarOpen((p) => !p)}
      />

      <div
        className={`relative flex min-w-0 flex-1 flex-col transition-all duration-300 ${
          sidebarCollapsed ? "md:ml-16" : "md:ml-60"
        }`}
      >
        <TopBar
          title={pageTitle}
          titleIcon={pageTitleIcon}
          onTopIconClick={handleTopbarIconClick}
          onSyncClick={handleSyncClick}
          pendingSyncCount={pendingSyncCount}
          syncing={syncing}
        />

        <main className="min-w-0 flex-1 px-3 pt-3 sm:px-4 sm:pt-4">
          {hasAccess ? (
            children
          ) : !loading ? (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-6 text-sm text-amber-900">
              You do not have permission to view this page.
            </div>
          ) : null}
        </main>
      </div>
    </div>
  );
}
