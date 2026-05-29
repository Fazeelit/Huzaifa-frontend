"use client";

import axios from "axios";
import { toast } from "react-hot-toast";
import { clearAuthCookies } from "./authCookies";
import { clearPersistedAuth, readPersistedAuthValue } from "./authStorage";
import {
  hasPermission,
  parseStoredPermissions,
  resolveCrudPermissionFromRequest,
} from "./permissions";

function resolveApiBaseUrl() {
  const configuredBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.trim();

  if (configuredBaseUrl && !configuredBaseUrl.includes("0.0.0.0")) {
    return configuredBaseUrl;
  }

  if (typeof window !== "undefined") {
    const protocol = /^https?:$/.test(window.location.protocol)
      ? window.location.protocol
      : "http:";
    const hostname = window.location.hostname || "localhost";
    return `${protocol}//${hostname}:8000/api`;
  }

  return "http://localhost:8000/api";
}

const BASE_URL = resolveApiBaseUrl();

/**
 * Generic API request function
 */
export async function apiRequest(
  endpoint,
  options = {}
) {
  const normalized =
    typeof options === "string" ? { method: options } : options || {};
  const isLoginEndpoint =
    typeof endpoint === "string" &&
    endpoint.toLowerCase().includes("/login");

  const {
    method = "GET",
    data: rawData = null,
    headers = {},
    includeAuth = true,
    formData = false,
    successMessage = null,
    timeout = 30 * 60 * 1000,
    params = null,
    onUploadProgress = null,
    fullResponse = false,
    suppressErrorToast = false,
    suppressErrorLog = false,
  } = normalized;

  const normalizedMethod = String(method || "GET").toUpperCase();

  try {
    const requiredCrudPermission =
      includeAuth && !isLoginEndpoint
        ? resolveCrudPermissionFromRequest(endpoint, normalizedMethod)
        : null;

    if (requiredCrudPermission && typeof window !== "undefined") {
      const storedPermissions = parseStoredPermissions();

      if (!hasPermission(requiredCrudPermission, storedPermissions)) {
        const permissionError = new Error(
          "You do not have permission to perform this action."
        );
        permissionError.status = 403;
        permissionError.code = "PERMISSION_DENIED";
        throw permissionError;
      }
    }

    let data = rawData;
    let finalHeaders = { ...headers };

    // ----------------------------
    // FormData Handling
    // ----------------------------
    if (formData) {
      if (!(data instanceof FormData)) {
        console.warn("apiRequest: formData=true but data is not FormData");
      }
      delete finalHeaders["Content-Type"];
    } else if (data && typeof data === "object") {
      finalHeaders["Content-Type"] = "application/json";
      data = JSON.stringify(data);
    }

    // ----------------------------
    // Optional Bearer Token (if used)
    // ----------------------------
    if (includeAuth && !isLoginEndpoint && typeof window !== "undefined") {
      const token = readPersistedAuthValue("authToken");
      if (token) {
        finalHeaders["Authorization"] = `Bearer ${token}`;
      }
    }

    // ----------------------------
    // Build URL
    // ----------------------------
    const url = `${BASE_URL}${
      endpoint.startsWith("/") ? endpoint : "/" + endpoint
    }`;

    if (process.env.NODE_ENV === "development") {
      console.log("API Request:", {
        url,
        method,
        headers: finalHeaders,
        params,
      });
    }

    // ----------------------------
    // Axios Config (🔥 IMPORTANT FIX)
    // ----------------------------
    const config = {
      url,
      method: normalizedMethod,
      headers: finalHeaders,
      timeout,
      params,
      withCredentials: true, // 🔥 REQUIRED FOR COOKIES
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
      validateStatus: () => true,
      onUploadProgress:
        typeof onUploadProgress === "function"
          ? onUploadProgress
          : undefined,
    };

    if (!["GET", "HEAD"].includes(config.method)) {
      config.data = data;
    }

    // ----------------------------
    // Make Request
    // ----------------------------
    const response = await axios(config);

    if (response.status >= 400) {
      const requestError = new Error(
        response?.data?.message ||
          response?.data?.error ||
          `Request failed with status code ${response.status}`
      );
      requestError.response = response;
      requestError.status = response.status;
      throw requestError;
    }

    // ----------------------------
    // Success Toast
    // ----------------------------
    const msg = successMessage || response.data?.message;

    if (
      msg &&
      typeof window !== "undefined" &&
      !["GET", "HEAD"].includes(config.method)
    ) {
      toast.success(msg);
    }

    return fullResponse ? response : response.data;
  } catch (error) {
    const statusCode = error?.response?.status;
    const backendMessage =
      error?.response?.data?.message || error?.response?.data?.error || "";

    const tokenExpiredOrInvalid =
      !isLoginEndpoint &&
      (statusCode === 401 ||
        (statusCode === 403 &&
          /token|expired|jwt/i.test(String(backendMessage))));

    if (tokenExpiredOrInvalid && typeof window !== "undefined") {
      clearPersistedAuth();
      clearAuthCookies();

      if (!window.location.pathname.startsWith("/auth/login")) {
        if (!suppressErrorToast) {
          toast.error("Session expired. Please login again.");
        }
        window.location.replace("/auth/login");
      }

      return {
        success: false,
        data: [],
        message: backendMessage || "Session expired",
        status: statusCode,
      };
    }

    // Permission-denied responses are expected in role-based UI.
    // Return a safe payload instead of throwing noisy runtime errors.
    if (statusCode === 403) {
      const isReadRequest = ["GET", "HEAD"].includes(normalizedMethod);

      if (!isReadRequest) {
        const permissionMessage = backendMessage || "Access denied";

        if (!suppressErrorToast && typeof window !== "undefined") {
          toast.error(permissionMessage);
        }

        const permissionError = new Error(permissionMessage);
        permissionError.status = statusCode;
        permissionError.response = error?.response;
        throw permissionError;
      }

      return {
        success: false,
        data: [],
        message: backendMessage || "Access denied",
        status: statusCode,
      };
    }

    if (!suppressErrorLog) {
      console.error("API Request Error:", error);
    }

    const errorMessage =
      error.response?.data?.message ||
      error.response?.data?.error ||
      (error.code === "ECONNABORTED"
        ? "Request timed out. Please try again."
        : null) ||
      (error.message?.includes("Network Error")
        ? "Network error — check backend connection."
        : null) ||
      error.message ||
      "Something went wrong";

    if (!suppressErrorToast && typeof window !== "undefined") {
      toast.error(errorMessage);
    }

    // Silent mode for dashboards/widgets:
    // callers can opt-in to non-throwing behavior for permission-restricted endpoints.
    if (suppressErrorToast && suppressErrorLog) {
      return {
        success: false,
        data: [],
        message: errorMessage,
        status: error?.response?.status,
      };
    }

    const customError = new Error(errorMessage);
    customError.original = error;
    customError.status = error?.response?.status;
    customError.response = error?.response;
    throw customError;
  }
}
