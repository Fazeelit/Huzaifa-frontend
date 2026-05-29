"use client";

const AUTH_KEYS = ["authToken", "user", "role", "permissions"];
const AUTH_STORAGE_EVENT = "auth-storage-changed";

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

  return value;
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

  browserAuthStorage.setItem("authToken", token);
  browserAuthStorage.setItem("user", JSON.stringify(user || null));
  browserAuthStorage.setItem("role", role || "");
  browserAuthStorage.setItem("permissions", JSON.stringify(normalizedPermissions));

  const desktopAuthStorage = getDesktopAuthStorage();
  desktopAuthStorage?.set({
    authToken: token,
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
