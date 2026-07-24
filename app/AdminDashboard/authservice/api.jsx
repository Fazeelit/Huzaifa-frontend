"use client";

import axios from "axios";
import { toast } from "react-hot-toast";

function getBaseUrl() {
  const envBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (typeof window === "undefined") {
    return (envBaseUrl || "http://localhost:8080/api").replace(/\/+$/, "");
  }

  const desktopPort = window.desktop?.backendPort;
  const isFileProtocol = window.location?.protocol === "file:";

  if (desktopPort && (isFileProtocol || !window.location?.origin)) {
    return `http://127.0.0.1:${desktopPort}/api`;
  }

  if (envBaseUrl) {
    return envBaseUrl.replace(/\/+$/, "");
  }

  return "/api";
}

/**
 * Generic API request function
 */
export async function apiRequest(
  endpoint,
  {
    method = "GET",
    data = null,
    headers = {},
    includeAuth = false,
    formData = false,
    successMessage = null,
    timeout = 30 * 60 * 1000,
    params = null,
    onUploadProgress = null,
    fullResponse = false,
  } = {}
) {
  try {
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
    if (includeAuth && typeof window !== "undefined") {
      const token = localStorage.getItem("authToken");
      if (token) {
        finalHeaders["Authorization"] = `Bearer ${token}`;
      }
    }

    // ----------------------------
    // Build URL
    // ----------------------------
    const baseUrl = getBaseUrl();
    const url = `${baseUrl}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

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
      method: method.toUpperCase(),
      headers: finalHeaders,
      timeout,
      params,
      withCredentials: true, // 🔥 REQUIRED FOR COOKIES
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
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
    if (![401, 403, 409].includes(error?.response?.status)) {
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

    if (typeof window !== "undefined") {
      toast.error(errorMessage);
    }

    const customError = new Error(errorMessage);
    customError.original = error;
    throw customError;
  }
}


