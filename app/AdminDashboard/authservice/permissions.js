"use client";

import { readPersistedAuthValue } from "./authStorage";

const BLOCKED_TOOLTIP = "Blocked: You do not have permission for this action.";
const CRUD_ACTION_BY_METHOD = {
  POST: "CREATE",
  PUT: "EDIT",
  PATCH: "EDIT",
  DELETE: "DELETE",
};

const CRUD_ENDPOINT_PERMISSION_RULES = [
  { pattern: /^\/purchases\/[^/]+\/payment(?:\/|$)/i, permissionKey: "PARTIAL_PAYMENT_ADD" },
  { pattern: /^\/purchases\/supplierPayment(?:\/|$)/i, permissionKey: "PARTIAL_PAYMENT_ADD" },
  { pattern: /^\/suppliers\/[^/]+\/bills\/[^/]+\/payment(?:\/|$)/i, permissionKey: "PARTIAL_PAYMENT_ADD" },
  { pattern: /^\/products(?:\/|$)/i, moduleKey: "PRODUCT" },
  { pattern: /^\/purchases(?:\/|$)/i, moduleKey: "PURCHASE" },
  { pattern: /^\/suppliers(?:\/|$)/i, moduleKey: "SUPPLIER" },
  { pattern: /^\/customers(?:\/|$)/i, moduleKey: "CUSTOMER" },
  { pattern: /^\/sales(?:\/|$)/i, moduleKey: "SALE" },
  { pattern: /^\/expenses(?:\/|$)/i, moduleKey: "EXPENSE" },
  { pattern: /^\/user-management(?:\/|$)/i, moduleKey: "USER" },
  { pattern: /^\/roles(?:\/|$)/i, moduleKey: "ROLE" },
];

export const blockedButtonClass =
  "disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-red-50 disabled:hover:text-red-700 disabled:hover:border-red-300";

export const normalizeRoleValue = (value) => String(value || "").trim().toUpperCase();

export const isAdminRole = (role = readPersistedAuthValue("role")) => {
  const normalizedRole = normalizeRoleValue(role);
  return normalizedRole === "ADMIN" || normalizedRole.includes("ADMIN");
};

export const normalizePermissionsForRole = (
  permissions = [],
  role = readPersistedAuthValue("role")
) => {
  const normalizedPermissions = Array.isArray(permissions)
    ? permissions.filter((permission) => typeof permission === "string" && permission.trim())
    : [];

  if (!isAdminRole(role)) {
    return Array.from(new Set(normalizedPermissions));
  }

  return Array.from(new Set(["*", ...normalizedPermissions]));
};

export const parseStoredPermissions = () => {
  if (typeof window === "undefined") return [];

  try {
    const raw = readPersistedAuthValue("permissions");
    const parsed = raw ? JSON.parse(raw) : [];
    return normalizePermissionsForRole(parsed);
  } catch {
    return normalizePermissionsForRole([]);
  }
};

export const hasPermission = (permission, permissions = parseStoredPermissions()) => {
  if (!permission) return true;
  if (isAdminRole()) return true;
  if (!Array.isArray(permissions)) return false;
  return permissions.includes("*") || permissions.includes(permission);
};

export const hasAnyPermission = (
  requiredPermissions = [],
  permissions = parseStoredPermissions()
) => {
  if (!Array.isArray(requiredPermissions) || requiredPermissions.length === 0) {
    return true;
  }

  return requiredPermissions.some((permission) =>
    hasPermission(permission, permissions)
  );
};

export const hasModuleAccess = (
  moduleKey,
  permissions = parseStoredPermissions()
) => {
  if (!moduleKey) return false;

  return hasAnyPermission(
    [
      `${moduleKey}_VIEW`,
      `${moduleKey}_CREATE`,
      `${moduleKey}_EDIT`,
      `${moduleKey}_DELETE`,
    ],
    permissions
  );
};

export const getCrudPermissions = (moduleKey, permissions = parseStoredPermissions()) => {
  return {
    canView: hasPermission(`${moduleKey}_VIEW`, permissions),
    canCreate: hasPermission(`${moduleKey}_CREATE`, permissions),
    canEdit: hasPermission(`${moduleKey}_EDIT`, permissions),
    canDelete: hasPermission(`${moduleKey}_DELETE`, permissions),
  };
};

export const getCrudPermissionKey = (moduleKey, action) => {
  if (!moduleKey || !action) return null;
  return `${String(moduleKey).toUpperCase()}_${String(action).toUpperCase()}`;
};

export const resolveCrudPermissionFromRequest = (endpoint, method) => {
  const normalizedMethod = String(method || "GET").toUpperCase();
  const action = CRUD_ACTION_BY_METHOD[normalizedMethod];

  if (!action || typeof endpoint !== "string") return null;

  const matchedRule = CRUD_ENDPOINT_PERMISSION_RULES.find(({ pattern }) =>
    pattern.test(endpoint)
  );

  if (matchedRule?.permissionKey) return matchedRule.permissionKey;
  if (!matchedRule?.moduleKey) return null;
  return getCrudPermissionKey(matchedRule.moduleKey, action);
};

export const blockedButtonProps = (allowed) => {
  if (allowed) return {};
  return {
    disabled: true,
    title: BLOCKED_TOOLTIP,
  };
};
