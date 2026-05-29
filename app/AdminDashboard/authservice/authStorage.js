"use client";

const AUTH_KEYS = ["authToken", "user", "role", "permissions"];
const AUTH_STORAGE_EVENT = "auth-storage-changed";

function clearLegacyLocalAuth() {
  if (typeof window === "undefined") {
    return;
  }

  for (const key of AUTH_KEYS) {
    window.localStorage.removeItem(key);
  }
}

function getBrowserAuthStorage() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.sessionStorage;
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

  clearLegacyLocalAuth();

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

  clearLegacyLocalAuth();

  const desktopAuthStorage = getDesktopAuthStorage();
  desktopAuthStorage?.clear();

  window.dispatchEvent(new Event(AUTH_STORAGE_EVENT));
}

export function readPersistedAuthValue(key) {
  const browserAuthStorage = getBrowserAuthStorage();
  if (!browserAuthStorage) {
    return null;
  }

  return browserAuthStorage.getItem(key);
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

clearLegacyLocalAuth();
