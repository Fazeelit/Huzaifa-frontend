"use client";

import { hasAnyPermission, hasModuleAccess } from "./permissions";

export const DASHBOARD_ROUTE_CONFIG = [
  { path: "/AdminDashboard", permission: "DASHBOARD_VIEW" },
  { path: "/AdminDashboard/pos", moduleKey: "POS" },
  { path: "/AdminDashboard/customers", moduleKey: "CUSTOMER" },
  { path: "/AdminDashboard/products", moduleKey: "PRODUCT" },
  { path: "/AdminDashboard/purchases", moduleKey: "PURCHASE" },
  { path: "/AdminDashboard/suppliers", moduleKey: "SUPPLIER" },
  { path: "/AdminDashboard/sales", moduleKey: "SALE" },
  { path: "/AdminDashboard/expenses", moduleKey: "EXPENSE" },
  { path: "/AdminDashboard/reports", permission: "REPORT_VIEW" },
  { path: "/AdminDashboard/users", moduleKey: "USER" },
  { path: "/AdminDashboard/roles", moduleKey: "ROLE" },
];

export function getFirstAllowedRoute(permissions = []) {
  const safePermissions = Array.isArray(permissions) ? permissions : [];

  if (safePermissions.includes("*")) {
    return "/AdminDashboard";
  }

  const match = DASHBOARD_ROUTE_CONFIG.find((route) =>
    route.moduleKey
      ? hasModuleAccess(route.moduleKey, safePermissions)
      : hasAnyPermission([route.permission], safePermissions)
  );

  return match?.path || null;
}
