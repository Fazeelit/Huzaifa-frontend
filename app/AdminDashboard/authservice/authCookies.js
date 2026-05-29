"use client";

const AUTH_SESSION_COOKIE = "app_auth";
const AUTH_ROLE_COOKIE = "app_role";
const COOKIE_PATH = "path=/";
const COOKIE_SAME_SITE = "SameSite=Lax";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;
const COOKIE_PERSISTENCE = `max-age=${COOKIE_MAX_AGE}`;

export function setAuthCookies(role) {
  if (typeof document === "undefined") return;

  const normalizedRole = encodeURIComponent(
    String(role || "").trim().toUpperCase()
  );

  document.cookie = `${AUTH_SESSION_COOKIE}=1; ${COOKIE_PATH}; ${COOKIE_SAME_SITE}; ${COOKIE_PERSISTENCE}`;
  document.cookie = `${AUTH_ROLE_COOKIE}=${normalizedRole}; ${COOKIE_PATH}; ${COOKIE_SAME_SITE}; ${COOKIE_PERSISTENCE}`;
}

export function clearAuthCookies() {
  if (typeof document === "undefined") return;

  document.cookie = `${AUTH_SESSION_COOKIE}=; max-age=0; ${COOKIE_PATH}; ${COOKIE_SAME_SITE}`;
  document.cookie = `${AUTH_ROLE_COOKIE}=; max-age=0; ${COOKIE_PATH}; ${COOKIE_SAME_SITE}`;
}
