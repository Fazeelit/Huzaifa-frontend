"use client";

import { toast } from "react-hot-toast";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://backendaihub.onrender.com/api";
const NORMALIZED_BASE_URL = BASE_URL.replace(/\/+$/, "");
const AUTH_TOKEN_KEY = "authToken";
const AUTH_USER_KEY = "authUser";

function parseResponseBody(rawValue, headers = {}) {
  if (rawValue == null || rawValue === "") {
    return null;
  }

  if (typeof rawValue !== "string") {
    return rawValue;
  }

  const trimmedValue = rawValue.trim();

  if (
    trimmedValue === "" ||
    trimmedValue === "null" ||
    trimmedValue === "undefined"
  ) {
    return null;
  }

  const contentTypeHeader =
    headers["content-type"] || headers["Content-Type"] || "";
  const looksLikeJson =
    contentTypeHeader.includes("application/json") ||
    /^[\[{"]/.test(trimmedValue) ||
    /^(true|false|-?\d+(\.\d+)?)$/i.test(trimmedValue);

  if (!looksLikeJson) {
    return rawValue;
  }

  try {
    return JSON.parse(trimmedValue);
  } catch {
    return rawValue;
  }
}

function createRequestError(message, { status = 0, data = null } = {}) {
  const error = new Error(message);
  error.status = status;
  error.response = {
    status,
    data,
  };
  return error;
}

function normalizeStoredValue(value) {
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

function getAuthStorage() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage;
}

function migrateLegacyAuthStorage() {
  if (typeof window === "undefined") {
    return;
  }

  const localStorage = getAuthStorage();
  const sessionStorage = window.sessionStorage;

  if (!localStorage || !sessionStorage) {
    return;
  }

  const legacyToken = sessionStorage.getItem(AUTH_TOKEN_KEY);
  const legacyUser = sessionStorage.getItem(AUTH_USER_KEY);

  if (legacyToken && !localStorage.getItem(AUTH_TOKEN_KEY)) {
    localStorage.setItem(AUTH_TOKEN_KEY, legacyToken);
  }

  if (legacyUser && !localStorage.getItem(AUTH_USER_KEY)) {
    localStorage.setItem(AUTH_USER_KEY, legacyUser);
  }

  sessionStorage.removeItem(AUTH_TOKEN_KEY);
  sessionStorage.removeItem(AUTH_USER_KEY);
}

async function authRequest(
  endpoint,
  {
    method = "POST",
    data = null,
    includeAuth = false,
    showSuccessToast = true,
    showErrorToast = true,
  } = {},
) {
  const abortController = new AbortController();
  const timeoutId = setTimeout(() => abortController.abort(), 30000);

  try {
    const headers = {
      "Content-Type": "application/json",
    };

    if (includeAuth && typeof window !== "undefined") {
      const token = getStoredAuthToken();
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
    }

    const response = await fetch(`${NORMALIZED_BASE_URL}${endpoint}`, {
      method,
      headers,
      body: data == null ? undefined : JSON.stringify(data),
      signal: abortController.signal,
    });

    const rawResponse = await response.text();
    const parsedResponse = parseResponseBody(rawResponse, {
      "content-type": response.headers.get("content-type") || "",
    });

    if (!response.ok) {
      const message =
        parsedResponse?.message ||
        parsedResponse?.error ||
        response.statusText ||
        "Something went wrong";
      throw createRequestError(message, {
        status: response.status,
        data: parsedResponse,
      });
    }

    if (showSuccessToast && parsedResponse?.message) {
      toast.success(parsedResponse.message);
    }

    return parsedResponse;
  } catch (error) {
    const fallbackMessage = "Something went wrong";
    const message =
      error?.name === "AbortError"
        ? `The request to ${NORMALIZED_BASE_URL}${endpoint} timed out.`
        :
      typeof Event !== "undefined" && error instanceof Event
        ? fallbackMessage
        :
      error instanceof TypeError && !error.response
        ? `Unable to reach the API at ${NORMALIZED_BASE_URL}. Check the API URL, CORS settings, and whether the backend is running.`
        :
      error?.message === "[object Event]"
        ? fallbackMessage
        :
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      fallbackMessage;

    if (showErrorToast) {
      toast.error(message);
    }
    throw createRequestError(message, {
      status: error?.response?.status || error?.status || 0,
      data: error?.response?.data ?? null,
    });
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function apiRequest(endpoint, options = {}) {
  const normalizedOptions =
    typeof options === "string" ? { method: options } : options;

  const {
    method = "GET",
    suppressSuccessToast = false,
    suppressErrorToast = false,
    includeAuth = true,
    ...restOptions
  } = normalizedOptions || {};

  return authRequest(endpoint, {
    method,
    includeAuth,
    showSuccessToast: !suppressSuccessToast,
    showErrorToast: !suppressErrorToast,
    ...restOptions,
  });
}

export function getStoredAuthToken() {
  const storage = getAuthStorage();

  if (!storage) {
    return null;
  }

  migrateLegacyAuthStorage();
  return normalizeStoredValue(storage.getItem(AUTH_TOKEN_KEY));
}

export function getStoredAuthUser() {
  const storage = getAuthStorage();

  if (!storage) {
    return null;
  }

  migrateLegacyAuthStorage();
  return normalizeStoredValue(storage.getItem(AUTH_USER_KEY));
}

export function setStoredAuthSession({ token, user }) {
  const storage = getAuthStorage();

  if (!storage) {
    return;
  }

  if (token) {
    storage.setItem(AUTH_TOKEN_KEY, token);
  }

  if (user) {
    storage.setItem(AUTH_USER_KEY, JSON.stringify(user));
  }
}

export function clearStoredAuthSession() {
  const storage = getAuthStorage();

  if (!storage) {
    return;
  }

  storage.removeItem(AUTH_TOKEN_KEY);
  storage.removeItem(AUTH_USER_KEY);

  if (typeof window !== "undefined") {
    window.sessionStorage.removeItem(AUTH_TOKEN_KEY);
    window.sessionStorage.removeItem(AUTH_USER_KEY);
  }
}

export async function loginUser(payload) {
  return authRequest("/users/login", {
    method: "POST",
    data: payload,
  });
}

export async function signupUser(payload) {
  return authRequest("/users/signup", {
    method: "POST",
    data: payload,
  });
}

export async function getOnboardingConfig() {
  return authRequest("/onboarding/config", {
    method: "GET",
    showSuccessToast: false,
  });
}

export async function getMyOnboarding({ silent = false } = {}) {
  return authRequest("/onboarding/me", {
    method: "GET",
    includeAuth: true,
    showSuccessToast: false,
    showErrorToast: !silent,
  });
}

export async function saveMyOnboarding(payload, { silent = false } = {}) {
  return authRequest("/onboarding/me", {
    method: "PUT",
    data: payload,
    includeAuth: true,
    showSuccessToast: !silent,
    showErrorToast: !silent,
  });
}

export async function deleteOnboardingById(id) {
  return authRequest(`/onboarding/${id}`, {
    method: "DELETE",
    includeAuth: true,
  });
}

export async function getUserDashboardBootstrap({ silent = false } = {}) {
  return authRequest("/userdashboard/bootstrap", {
    method: "GET",
    includeAuth: true,
    showSuccessToast: false,
    showErrorToast: !silent,
  });
}

export async function getMyUserDashboard({ silent = false } = {}) {
  return authRequest("/userdashboard/me", {
    method: "GET",
    includeAuth: true,
    showSuccessToast: false,
    showErrorToast: !silent,
  });
}

export async function saveMyUserDashboard(payload, { silent = false } = {}) {
  return authRequest("/userdashboard/me", {
    method: "PUT",
    data: payload,
    includeAuth: true,
    showSuccessToast: !silent,
    showErrorToast: !silent,
  });
}

export async function deleteUserDashboardById(id) {
  return authRequest(`/userdashboard/${id}`, {
    method: "DELETE",
    includeAuth: true,
  });
}

export { authRequest };
