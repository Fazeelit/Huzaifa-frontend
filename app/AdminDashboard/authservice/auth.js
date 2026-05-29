"use client";

import { hasPermission as baseHasPermission, parseStoredPermissions } from "./permissions";
import { readPersistedAuthValue } from "./authStorage";

export const readStoredAuth = () => {
  if (typeof window === "undefined") {
    return {
      token: null,
      user: null,
      role: null,
      permissions: [],
    };
  }

  const token = readPersistedAuthValue("authToken");
  const role = readPersistedAuthValue("role");
  const permissions = parseStoredPermissions();

  let user = null;
  try {
    const rawUser = readPersistedAuthValue("user");
    user = rawUser ? JSON.parse(rawUser) : null;
  } catch {
    user = null;
  }

  return { token, user, role, permissions };
};

export const hasPermission = (permissions, permission) =>
  baseHasPermission(permission, permissions);
