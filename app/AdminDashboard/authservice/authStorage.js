"use client";

const AUTH_KEYS = ["authToken", "user", "role", "permissions"];
const AUTH_STORAGE_EVENT = "auth-storage-changed";

function normalizeAuthToken(value) {
  if (value == null) {
    return null;
  }

  let normalizedValue = String(value).trim();

  if (
    normalizedValue === "" ||
    normalizedValue === "null" ||
    normalizedValue === "undefined"
  ) {
    return null;
  }

  if (
    (normalizedValue.startsWith('"') && normalizedValue.endsWith('"')) ||
    (normalizedValue.startsWith("'") && normalizedValue.endsWith("'"))
  ) {
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
    } catch {
      return null;
    }
  }

  if (
    !normalizedValue ||
    normalizedValue.includes("[object Object]") ||
    /\s/.test(normalizedValue)
  ) {
    return null;
  }

  return normalizedValue;
}

function normalizeStoredAuthValue(value) {
  if (value == null) {
    return null;
  }

  const normalizedValue = String(value).trim();

  if (
    normalizedValue === "" ||
    normalizedValue === "null" ||
    normalizedValue === "undefined"
  ) {
    return null;
  }

  return normalizedValue;
}

function clearLegacySessionAuth() {
  if (typeof window === "undefined") {
    return;
  }

  for (const key of AUTH_KEYS) {
    window.sessionStorage.removeItem(key);
  }
}

function getBrowserAuthStorage() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage;
}

function migrateLegacySessionAuth() {
  if (typeof window === "undefined") {
    return;
  }

  const persistentStorage = getBrowserAuthStorage();
  const sessionStorage = window.sessionStorage;

  if (!persistentStorage || !sessionStorage) {
    return;
  }

  for (const key of AUTH_KEYS) {
    const currentValue = normalizeStoredAuthValue(persistentStorage.getItem(key));
    const legacyValue = normalizeStoredAuthValue(sessionStorage.getItem(key));

    if (!currentValue && legacyValue) {
      persistentStorage.setItem(key, legacyValue);
    }
  }

  for (const key of AUTH_KEYS) {
    sessionStorage.removeItem(key);
  }
}

function getDesktopAuthStorage() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.desktop?.authStorage || null;
}

export function persistAuthState({ token, user, role, permissions }) {
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
    permissions: normalizedPermissions,
  });
}

export function clearPersistedAuth() {
  const browserAuthStorage = getBrowserAuthStorage();
  if (!browserAuthStorage) {
    return;
  }

  for (const key of AUTH_KEYS) {
    browserAuthStorage.removeItem(key);
  }

  clearLegacySessionAuth();

  const desktopAuthStorage = getDesktopAuthStorage();
  desktopAuthStorage?.clear();

  window.dispatchEvent(new Event(AUTH_STORAGE_EVENT));
}

export function readPersistedAuthValue(key) {
  const browserAuthStorage = getBrowserAuthStorage();
  if (!browserAuthStorage) {
    return null;
  }

  migrateLegacySessionAuth();
  return normalizeStoredAuthValue(browserAuthStorage.getItem(key));
}

export function notifyAuthStateChanged() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new Event(AUTH_STORAGE_EVENT));
}

export function onAuthStateChanged(callback) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener(AUTH_STORAGE_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(AUTH_STORAGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

clearLegacySessionAuth();
