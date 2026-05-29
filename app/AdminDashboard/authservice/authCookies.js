"use client";

const AUTH_SESSION_COOKIE = "app_auth";
const AUTH_ROLE_COOKIE = "app_role";
const COOKIE_PATH = "path=/";
const COOKIE_SAME_SITE = "SameSite=Lax";

export function setAuthCookies(role) {
  if (typeof document === "undefined") return;

  const normalizedRole = encodeURIComponent(
    String(role || "").trim().toUpperCase()
  );

  document.cookie = `${AUTH_SESSION_COOKIE}=1; ${COOKIE_PATH}; ${COOKIE_SAME_SITE}`;
  document.cookie = `${AUTH_ROLE_COOKIE}=${normalizedRole}; ${COOKIE_PATH}; ${COOKIE_SAME_SITE}`;
}

export function clearAuthCookies() {
  if (typeof document === "undefined") return;

  document.cookie = `${AUTH_SESSION_COOKIE}=; max-age=0; ${COOKIE_PATH}; ${COOKIE_SAME_SITE}`;
  document.cookie = `${AUTH_ROLE_COOKIE}=; max-age=0; ${COOKIE_PATH}; ${COOKIE_SAME_SITE}`;
}
