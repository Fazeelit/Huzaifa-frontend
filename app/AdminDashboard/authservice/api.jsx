"use client";

import { toast } from "react-hot-toast";
import { hasModuleAccess, hasPermission } from "./permissions";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://backendaihub.onrender.com/api";
const NORMALIZED_BASE_URL = BASE_URL.replace(/\/+$/, "");
const AUTH_TOKEN_KEY = "authToken";
const AUTH_USER_KEY = "authUser";
const CRUD_CACHE_KEY = "appCrudResponseCache";
const CRUD_QUEUE_KEY = "appCrudPendingQueue";
const CRUD_SYNC_EVENT = "app-crud-sync-updated";

const CRUD_RESOURCE_CONFIGS = [
  {
    name: "customers",
    match: (endpoint) => endpoint.startsWith("/customers"),
    listEndpoint: "/customers",
    collectionKey: "customers",
    entityKey: "customer",
    detailMatchers: [/^\/customers\/([^/]+)$/],
  },
  {
    name: "suppliers",
    match: (endpoint) => endpoint.startsWith("/suppliers"),
    listEndpoint: "/suppliers",
    collectionKey: "suppliers",
    entityKey: "supplier",
    detailMatchers: [/^\/suppliers\/([^/]+)$/],
  },
  {
    name: "products",
    match: (endpoint) => endpoint.startsWith("/products"),
    listEndpoint: "/products",
    collectionKey: "data",
    entityKey: "product",
    detailMatchers: [/^\/products\/getProductById\/([^/]+)$/],
  },
  {
    name: "purchases",
    match: (endpoint) => endpoint.startsWith("/purchases"),
    listEndpoint: "/purchases",
    collectionKey: "data",
    entityKey: "purchase",
    detailMatchers: [/^\/purchases\/([^/]+)$/],
  },
  {
    name: "expenses",
    match: (endpoint) => endpoint.startsWith("/expenses"),
    listEndpoint: "/expenses",
    collectionKey: "data",
    entityKey: "expense",
    detailMatchers: [/^\/expenses\/([^/]+)$/],
  },
  {
    name: "sales",
    match: (endpoint) => endpoint.startsWith("/sales"),
    listEndpoint: "/sales",
    collectionKey: "sales",
    entityKey: "sale",
    detailMatchers: [/^\/sales\/([^/]+)$/],
  },
  {
    name: "roles",
    match: (endpoint) => endpoint.startsWith("/roles"),
    listEndpoint: "/roles",
    collectionKey: "roles",
    entityKey: "role",
    detailMatchers: [/^\/roles\/([^/]+)$/],
  },
  {
    name: "users",
    match: (endpoint) => endpoint.startsWith("/user-management"),
    listEndpoint: "/user-management",
    collectionKey: "users",
    entityKey: "user",
    detailMatchers: [/^\/user-management\/([^/]+)$/],
  },
  {
    name: "tests",
    match: (endpoint) => endpoint.startsWith("/tests"),
    listEndpoint: "/tests",
    collectionKey: "data",
    entityKey: "test",
    detailMatchers: [/^\/tests\/([^/]+)$/],
  },
  {
    name: "testParameters",
    match: (endpoint) => endpoint.startsWith("/testParameters"),
    listEndpoint: "/testParameters",
    collectionKey: "data",
    entityKey: "testParameter",
    detailMatchers: [/^\/testParameters\/([^/]+)$/],
  },
  {
    name: "labCategories",
    match: (endpoint) => endpoint.startsWith("/lab-categories"),
    listEndpoint: "/lab-categories",
    collectionKey: "data",
    entityKey: "labCategory",
    detailMatchers: [/^\/lab-categories\/([^/]+)$/],
  },
];

const PRELOAD_RESOURCE_RULES = [
  { endpoints: ["/customers"], canLoad: (permissions) => hasModuleAccess("CUSTOMER", permissions) },
  {
    endpoints: ["/suppliers", "/supplierpayments"],
    canLoad: (permissions) => hasModuleAccess("SUPPLIER", permissions),
  },
  {
    endpoints: ["/products", "/products/ProductName"],
    canLoad: (permissions) => hasModuleAccess("PRODUCT", permissions),
  },
  { endpoints: ["/purchases"], canLoad: (permissions) => hasModuleAccess("PURCHASE", permissions) },
  { endpoints: ["/expenses"], canLoad: (permissions) => hasModuleAccess("EXPENSE", permissions) },
  { endpoints: ["/sales"], canLoad: (permissions) => hasModuleAccess("SALE", permissions) },
  { endpoints: ["/roles"], canLoad: (permissions) => hasModuleAccess("ROLE", permissions) },
  { endpoints: ["/user-management"], canLoad: (permissions) => hasModuleAccess("USER", permissions) },
  { endpoints: ["/tests"], canLoad: (permissions) => hasPermission("TEST_VIEW", permissions) },
  { endpoints: ["/testParameters"], canLoad: (permissions) => hasPermission("TEST_VIEW", permissions) },
  { endpoints: ["/lab-categories"], canLoad: (permissions) => hasPermission("TEST_VIEW", permissions) },
];

function getPreloadEndpoints(permissions = []) {
  const safePermissions = Array.isArray(permissions) ? permissions : [];

  return PRELOAD_RESOURCE_RULES.flatMap(({ endpoints, canLoad }) => {
    if (safePermissions.includes("*")) {
      return endpoints;
    }

    return canLoad(safePermissions) ? endpoints : [];
  });
}

function normalizeAuthTokenValue(value) {
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

  if (
    normalizedValue.startsWith("{") ||
    normalizedValue.startsWith("[")
  ) {
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

  return normalizedValue;
}

function getAuthStorage() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage;
}

function getBrowserStorage() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.localStorage;
}

function clearLocalAuthSession() {
  const storage = getAuthStorage();
  const keysToClear = [
    AUTH_TOKEN_KEY,
    AUTH_USER_KEY,
    "user",
    "role",
    "permissions",
  ];

  if (!storage) {
    return;
  }

  for (const key of keysToClear) {
    storage.removeItem(key);
  }

  if (typeof window !== "undefined") {
    for (const key of keysToClear) {
      window.sessionStorage.removeItem(key);
    }
  }
}

function cloneJson(value, fallback) {
  try {
    return JSON.parse(JSON.stringify(value));
  } catch {
    return fallback;
  }
}

function readStorageJson(key, fallback) {
  const storage = getBrowserStorage();

  if (!storage) {
    return fallback;
  }

  try {
    const rawValue = storage.getItem(key);
    return rawValue ? JSON.parse(rawValue) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorageJson(key, value) {
  const storage = getBrowserStorage();

  if (!storage) {
    return;
  }

  storage.setItem(key, JSON.stringify(value));
}

function removeStorageKey(key) {
  const storage = getBrowserStorage();

  if (!storage) {
    return;
  }

  storage.removeItem(key);
}

function getCachedResponses() {
  return readStorageJson(CRUD_CACHE_KEY, {});
}

function setCachedResponses(value) {
  writeStorageJson(CRUD_CACHE_KEY, value);
}

function getPendingCrudQueue() {
  return readStorageJson(CRUD_QUEUE_KEY, []);
}

function dispatchCrudSyncEvent() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent(CRUD_SYNC_EVENT, {
      detail: { pendingCount: getPendingCrudCount() },
    }),
  );
}

function setPendingCrudQueue(value) {
  writeStorageJson(CRUD_QUEUE_KEY, value);
  dispatchCrudSyncEvent();
}

function resolveResourceConfig(endpoint) {
  return CRUD_RESOURCE_CONFIGS.find((config) => config.match(endpoint)) || null;
}

function extractDetailId(config, endpoint) {
  if (!config) {
    return null;
  }

  for (const matcher of config.detailMatchers || []) {
    const match = endpoint.match(matcher);
    if (match?.[1]) {
      return match[1];
    }
  }

  return null;
}

function inferTargetId(endpoint) {
  const patterns = [
    /\/(?:update[A-Za-z]+|delete[A-Za-z]+)\/([^/]+)$/,
    /\/([^/]+)\/payment$/,
    /\/([^/]+)\/returnItems$/,
    /\/([^/]+)\/updateItemStatuses$/,
    /\/([^/]+)$/,
  ];

  for (const pattern of patterns) {
    const match = endpoint.match(pattern);
    const candidate = match?.[1];

    if (
      candidate &&
      ![
        "create",
        "createCustomer",
        "createSupplier",
        "createProduct",
        "createPurchase",
        "createExpense",
        "createRole",
        "createUser",
      ].includes(candidate)
    ) {
      return candidate;
    }
  }

  return null;
}

function getCrudAction(method, endpoint) {
  const normalizedMethod = String(method || "GET").toUpperCase();

  if (normalizedMethod === "DELETE") {
    return "delete";
  }

  if (normalizedMethod === "PUT" || normalizedMethod === "PATCH") {
    return "update";
  }

  if (normalizedMethod === "POST") {
    if (/\/create/i.test(endpoint)) {
      return "create";
    }

    return inferTargetId(endpoint) ? "update" : "create";
  }

  return null;
}

function getEntityId(entity) {
  if (!entity || typeof entity !== "object") {
    return null;
  }

  return entity._id || entity.id || entity.saleId || entity.invoiceNo || null;
}

function idsMatch(left, right) {
  if (left == null || right == null) {
    return false;
  }

  return String(left) === String(right);
}

function ensureEntityIdentifiers(entity, preferredId) {
  const nextEntity = { ...(entity || {}) };
  const resolvedId = getEntityId(nextEntity) || preferredId;

  if (!resolvedId) {
    return nextEntity;
  }

  if (!nextEntity._id) {
    nextEntity._id = resolvedId;
  }

  if (!nextEntity.id) {
    nextEntity.id = resolvedId;
  }

  return nextEntity;
}

function extractArrayFromResponse(response, config) {
  if (Array.isArray(response)) return response;
  if (!response || typeof response !== "object") return [];

  if (Array.isArray(response?.[config.collectionKey])) {
    return response[config.collectionKey];
  }

  if (Array.isArray(response?.data?.[config.collectionKey])) {
    return response.data[config.collectionKey];
  }

  if (Array.isArray(response?.data?.data)) {
    return response.data.data;
  }

  if (Array.isArray(response?.data)) {
    return response.data;
  }

  return [];
}

function replaceArrayInResponse(response, nextList, config) {
  if (Array.isArray(response)) {
    return nextList;
  }

  const nextResponse = cloneJson(response, {}) || {};

  if (config.collectionKey === "data") {
    nextResponse.data = nextList;
    nextResponse.success = nextResponse.success ?? true;
    return nextResponse;
  }

  if (Array.isArray(nextResponse?.[config.collectionKey])) {
    nextResponse[config.collectionKey] = nextList;
    nextResponse.success = nextResponse.success ?? true;
    return nextResponse;
  }

  if (Array.isArray(nextResponse?.data?.[config.collectionKey])) {
    nextResponse.data = {
      ...nextResponse.data,
      [config.collectionKey]: nextList,
    };
    nextResponse.success = nextResponse.success ?? true;
    return nextResponse;
  }

  if (Array.isArray(nextResponse?.data?.data)) {
    nextResponse.data = {
      ...nextResponse.data,
      data: nextList,
    };
    nextResponse.success = nextResponse.success ?? true;
    return nextResponse;
  }

  if (Array.isArray(nextResponse?.data)) {
    nextResponse.data = nextList;
    nextResponse.success = nextResponse.success ?? true;
    return nextResponse;
  }

  nextResponse[config.collectionKey] = nextList;
  nextResponse.data = nextResponse.data ?? nextList;
  nextResponse.success = nextResponse.success ?? true;
  return nextResponse;
}

function buildDefaultListResponse(config, nextList) {
  const base = {
    success: true,
    message: "Loaded from local storage.",
  };

  if (config.collectionKey === "data") {
    base.data = nextList;
    return base;
  }

  base[config.collectionKey] = nextList;
  base.data = nextList;
  return base;
}

function extractEntityFromResponse(response, config) {
  if (!response || typeof response !== "object") {
    return null;
  }

  if (
    response[config.entityKey] &&
    typeof response[config.entityKey] === "object" &&
    !Array.isArray(response[config.entityKey])
  ) {
    return response[config.entityKey];
  }

  if (
    response.data &&
    typeof response.data === "object" &&
    !Array.isArray(response.data)
  ) {
    return response.data;
  }

  if (getEntityId(response)) {
    return response;
  }

  return null;
}

function buildDefaultDetailResponse(config, entity) {
  return {
    success: true,
    message: "Loaded from local storage.",
    [config.entityKey]: entity,
    data: entity,
  };
}

function findCachedEntityFromStore(store, config, targetId) {
  if (!targetId) {
    return null;
  }

  const listResponse = store[config.listEndpoint];
  const list = extractArrayFromResponse(listResponse, config);
  const fromList = list.find((entry) => idsMatch(getEntityId(entry), targetId));

  if (fromList) {
    return fromList;
  }

  for (const [endpoint, cachedResponse] of Object.entries(store || {})) {
    if (!config.match(endpoint)) {
      continue;
    }

    const detailEntity = extractEntityFromResponse(cachedResponse, config);
    if (detailEntity && idsMatch(getEntityId(detailEntity), targetId)) {
      return detailEntity;
    }
  }

  return null;
}

function buildOptimisticPaymentEntity(baseEntity, payload) {
  const paidDelta = Number(payload?.paidAmount || payload?.amount || 0) || 0;
  const previousPaid = Number(baseEntity?.paidAmount ?? baseEntity?.cashReceived ?? 0);
  const totalAmount = Number(baseEntity?.totalAmount ?? baseEntity?.total ?? 0);
  const nextPaid = previousPaid + paidDelta;
  const nextBalance =
    Number(baseEntity?.balance ?? Math.max(totalAmount - previousPaid, 0)) - paidDelta;

  const currentHistory = Array.isArray(baseEntity?.paymentHistory)
    ? baseEntity.paymentHistory
    : [];

  return {
    ...baseEntity,
    paidAmount: nextPaid,
    cashReceived: nextPaid,
    balance: Math.max(nextBalance, 0),
    paymentMethod: payload?.paymentMethod || baseEntity?.paymentMethod || "",
    paymentHistory: [
      {
        amount: paidDelta,
        method: payload?.paymentMethod || "",
        date: payload?.paymentDate || payload?.date || new Date().toISOString(),
      },
      ...currentHistory,
    ],
    updatedAt: new Date().toISOString(),
  };
}

function buildOptimisticEntity(store, config, operation, serverResponse = null) {
  const targetId =
    operation.targetId || operation.optimisticId || inferTargetId(operation.endpoint);
  const serverEntity = extractEntityFromResponse(serverResponse, config);

  if (serverEntity) {
    return ensureEntityIdentifiers(serverEntity, targetId || operation.optimisticId);
  }

  if (
    /\/payment$/i.test(operation.endpoint) &&
    (config.name === "sales" || config.name === "purchases")
  ) {
    const baseEntity = findCachedEntityFromStore(store, config, targetId) || {};
    return ensureEntityIdentifiers(
      buildOptimisticPaymentEntity(baseEntity, operation.data),
      targetId,
    );
  }

  const baseEntity =
    operation.action === "update"
      ? findCachedEntityFromStore(store, config, targetId) || {}
      : {};

  return ensureEntityIdentifiers(
    {
      ...baseEntity,
      ...(operation.data || {}),
      updatedAt: new Date().toISOString(),
      createdAt:
        operation.action === "create"
          ? baseEntity.createdAt || new Date().toISOString()
          : baseEntity.createdAt,
    },
    targetId || operation.optimisticId,
  );
}

function applyOperationToStore(store, operation, serverResponse = null) {
  const config = resolveResourceConfig(operation.endpoint);

  if (!config) {
    return store;
  }

  const nextStore = cloneJson(store, {}) || {};
  const listResponse = nextStore[config.listEndpoint];
  const currentList = extractArrayFromResponse(listResponse, config);
  const optimisticEntity = buildOptimisticEntity(
    nextStore,
    config,
    operation,
    serverResponse,
  );
  const targetId = operation.targetId || operation.optimisticId;

  let nextList = currentList.slice();

  if (operation.action === "create") {
    const optimisticId = operation.optimisticId;
    const actualId = getEntityId(optimisticEntity);
    let replaced = false;

    nextList = nextList.map((entry) => {
      const entryId = getEntityId(entry);
      if (
        (optimisticId && idsMatch(entryId, optimisticId)) ||
        (actualId && idsMatch(entryId, actualId))
      ) {
        replaced = true;
        return optimisticEntity;
      }

      return entry;
    });

    if (!replaced) {
      nextList.unshift(optimisticEntity);
    }
  } else if (operation.action === "update") {
    let replaced = false;

    nextList = nextList.map((entry) => {
      const entryId = getEntityId(entry);
      if (
        (targetId && idsMatch(entryId, targetId)) ||
        (operation.optimisticId && idsMatch(entryId, operation.optimisticId))
      ) {
        replaced = true;
        return optimisticEntity;
      }

      return entry;
    });

    if (!replaced && getEntityId(optimisticEntity)) {
      nextList.unshift(optimisticEntity);
    }
  } else if (operation.action === "delete") {
    nextList = nextList.filter((entry) => !idsMatch(getEntityId(entry), targetId));
  }

  nextStore[config.listEndpoint] = replaceArrayInResponse(
    listResponse || buildDefaultListResponse(config, currentList),
    nextList,
    config,
  );

  for (const endpoint of Object.keys(nextStore)) {
    if (!config.match(endpoint)) {
      continue;
    }

    const detailId = extractDetailId(config, endpoint);
    if (!detailId) {
      continue;
    }

    if (operation.action === "delete" && idsMatch(detailId, targetId)) {
      delete nextStore[endpoint];
      continue;
    }

    const entityId = getEntityId(optimisticEntity);
    if (
      entityId &&
      (idsMatch(detailId, entityId) ||
        (operation.optimisticId && idsMatch(detailId, operation.optimisticId)))
    ) {
      nextStore[endpoint] = buildDefaultDetailResponse(config, optimisticEntity);
    }
  }

  if (operation.action !== "delete" && (targetId || getEntityId(optimisticEntity))) {
    const detailId = getEntityId(optimisticEntity) || targetId;
    const detailEndpoint =
      config.name === "products"
        ? `/products/getProductById/${detailId}`
        : `${config.listEndpoint}/${detailId}`;

    nextStore[detailEndpoint] = buildDefaultDetailResponse(config, optimisticEntity);
  }

  return nextStore;
}

function applyPendingOperationsToResponse(endpoint, response) {
  const config = resolveResourceConfig(endpoint);

  if (!config) {
    return response;
  }

  const queue = getPendingCrudQueue().filter(
    (operation) => resolveResourceConfig(operation.endpoint)?.name === config.name,
  );

  if (!queue.length) {
    return response;
  }

  const initialStore = {
    [endpoint]: cloneJson(response, response),
  };

  const updatedStore = queue.reduce(
    (currentStore, operation) => applyOperationToStore(currentStore, operation),
    initialStore,
  );

  return updatedStore[endpoint];
}

function createQueuedOperation(endpoint, options = {}) {
  const method = String(options.method || "GET").toUpperCase();
  const action = getCrudAction(method, endpoint);
  const targetId = inferTargetId(endpoint);
  const optimisticId =
    action === "create"
      ? `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
      : targetId;

  return {
    id: `queue-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    endpoint,
    method,
    data: cloneJson(options.data, options.data),
    includeAuth: options.includeAuth !== false,
    action,
    targetId,
    optimisticId,
    createdAt: new Date().toISOString(),
  };
}

function isRecoverableSyncError(error) {
  const message = String(error?.message || "").toLowerCase();
  return (
    error?.status === 0 ||
    error?.response?.status === 0 ||
    error?.name === "AbortError" ||
    message.includes("unable to reach the api") ||
    message.includes("timed out") ||
    message.includes("failed to fetch")
  );
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

    if (
      typeof window !== "undefined" &&
      /invalid token|jwt malformed|jwt must be provided|unauthorized/i.test(message)
    ) {
      clearLocalAuthSession();
    }

    throw createRequestError(message, {
      status: error?.response?.status || error?.status || 0,
      data: error?.response?.data ?? null,
    });
  } finally {
    clearTimeout(timeoutId);
  }
}

async function networkApiRequest(
  endpoint,
  {
    method = "POST",
    data = null,
    includeAuth = false,
  } = {},
) {
  return authRequest(endpoint, {
    method,
    data,
    includeAuth,
    showSuccessToast: false,
    showErrorToast: false,
  });
}

export async function apiRequest(endpoint, options = {}) {
  const normalizedOptions =
    typeof options === "string" ? { method: options } : options;

  const {
    method = "GET",
    suppressSuccessToast = false,
    suppressErrorToast = false,
    includeAuth = true,
    allowOfflineCrud = true,
    ...restOptions
  } = normalizedOptions || {};

  const normalizedMethod = String(method || "GET").toUpperCase();
  const action = getCrudAction(normalizedMethod, endpoint);
  const config = resolveResourceConfig(endpoint);

  if (normalizedMethod === "GET") {
    try {
      const response = await networkApiRequest(endpoint, {
        method: normalizedMethod,
        includeAuth,
        ...restOptions,
      });
      const mergedResponse = applyPendingOperationsToResponse(endpoint, response);
      const cachedResponses = getCachedResponses();
      cachedResponses[endpoint] = mergedResponse;
      setCachedResponses(cachedResponses);
      return mergedResponse;
    } catch (error) {
      const cachedResponses = getCachedResponses();
      const cachedResponse = cachedResponses[endpoint];

      if (cachedResponse) {
        return applyPendingOperationsToResponse(endpoint, cachedResponse);
      }

      if (config) {
        if (endpoint !== config.listEndpoint) {
          const cachedListResponse = cachedResponses[config.listEndpoint];

          if (cachedListResponse && !extractDetailId(config, endpoint)) {
            return applyPendingOperationsToResponse(config.listEndpoint, cachedListResponse);
          }
        }

        const detailId = extractDetailId(config, endpoint);
        const cachedEntity = findCachedEntityFromStore(cachedResponses, config, detailId);

        if (cachedEntity) {
          return buildDefaultDetailResponse(config, cachedEntity);
        }
      }

      if (!suppressErrorToast) {
        toast.error(error?.message || "Failed to fetch data.");
      }

      throw error;
    }
  }

  if (!allowOfflineCrud || !action || !config) {
    try {
      const response = await networkApiRequest(endpoint, {
        method: normalizedMethod,
        includeAuth,
        ...restOptions,
      });

      if (!suppressSuccessToast && response?.message) {
        toast.success(response.message);
      }

      return response;
    } catch (error) {
      if (!suppressErrorToast) {
        toast.error(error?.message || "Something went wrong.");
      }
      throw error;
    }
  }

  const queuedOperation = createQueuedOperation(endpoint, {
    method: normalizedMethod,
    includeAuth,
    ...restOptions,
  });

  const previousCache = getCachedResponses();
  const nextCache = applyOperationToStore(previousCache, queuedOperation);
  setCachedResponses(nextCache);

  try {
    const response = await networkApiRequest(endpoint, {
      method: normalizedMethod,
      includeAuth,
      ...restOptions,
    });

    const syncedCache = applyOperationToStore(nextCache, queuedOperation, response);
    setCachedResponses(syncedCache);

    if (!suppressSuccessToast && response?.message) {
      toast.success(response.message);
    }

    return response;
  } catch (error) {
    if (!isRecoverableSyncError(error)) {
      setCachedResponses(previousCache);

      if (!suppressErrorToast) {
        toast.error(error?.message || "Something went wrong.");
      }

      throw error;
    }

    const queue = getPendingCrudQueue();
    queue.push(queuedOperation);
    setPendingCrudQueue(queue);

    if (!suppressSuccessToast) {
      toast.success("Saved locally. Use Sync Data to upload changes.");
    }

    const configEntity = buildOptimisticEntity(nextCache, config, queuedOperation);

    return {
      success: true,
      pendingSync: true,
      message: "Saved locally. Use Sync Data to upload changes.",
      data: action === "delete" ? { id: queuedOperation.targetId } : configEntity,
      [config.entityKey]: action === "delete" ? undefined : configEntity,
    };
  }
}

export function getStoredAuthToken() {
  const storage = getAuthStorage();

  if (!storage) {
    return null;
  }

  migrateLegacyAuthStorage();
  const token = normalizeAuthTokenValue(storage.getItem(AUTH_TOKEN_KEY));

  if (!token) {
    clearLocalAuthSession();
  }

  return token;
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
    const normalizedToken = normalizeAuthTokenValue(token);
    if (normalizedToken) {
      storage.setItem(AUTH_TOKEN_KEY, normalizedToken);
    }
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

export function getPendingCrudCount() {
  return getPendingCrudQueue().length;
}

export function getCachedCrudEndpointCount() {
  return Object.keys(getCachedResponses()).length;
}

export function hasPreloadedCrudData(permissions = []) {
  const cachedResponses = getCachedResponses();
  const requiredEndpoints = getPreloadEndpoints(permissions);

  if (!requiredEndpoints.length) {
    return true;
  }

  return requiredEndpoints.every((endpoint) => cachedResponses[endpoint]);
}

export function clearCrudLocalData() {
  removeStorageKey(CRUD_CACHE_KEY);
  removeStorageKey(CRUD_QUEUE_KEY);
  dispatchCrudSyncEvent();
}

export function subscribeToCrudSync(listener) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handler = (event) => {
    listener?.(event?.detail || { pendingCount: getPendingCrudCount() });
  };

  window.addEventListener(CRUD_SYNC_EVENT, handler);
  return () => window.removeEventListener(CRUD_SYNC_EVENT, handler);
}

export async function syncPendingCrudOperations() {
  const queue = getPendingCrudQueue();

  if (!queue.length) {
    return { synced: 0, failed: 0, pending: 0 };
  }

  const remainingQueue = [];
  let synced = 0;
  let nextCache = getCachedResponses();

  for (let index = 0; index < queue.length; index += 1) {
    const operation = queue[index];

    try {
      const response = await networkApiRequest(operation.endpoint, {
        method: operation.method,
        data: operation.data,
        includeAuth: operation.includeAuth,
      });

      nextCache = applyOperationToStore(nextCache, operation, response);
      synced += 1;
    } catch (error) {
      remainingQueue.push(operation);

      if (isRecoverableSyncError(error)) {
        remainingQueue.push(...queue.slice(index + 1));
        break;
      }
    }
  }

  setCachedResponses(nextCache);
  setPendingCrudQueue(remainingQueue);

  return {
    synced,
    failed: remainingQueue.length,
    pending: remainingQueue.length,
  };
}

export async function preloadCrudDataToLocalStorage(
  permissions = [],
  { clearExisting = false } = {},
) {
  if (clearExisting) {
    clearCrudLocalData();
  }

  const endpointsToLoad = getPreloadEndpoints(permissions);

  const cachedResponses = getCachedResponses();
  const results = await Promise.allSettled(
    endpointsToLoad.map((endpoint) =>
      networkApiRequest(endpoint, {
        method: "GET",
        includeAuth: true,
      }).then((response) => ({ endpoint, response })),
    ),
  );

  for (const result of results) {
    if (result.status !== "fulfilled") {
      continue;
    }

    const { endpoint, response } = result.value;
    cachedResponses[endpoint] = response;
  }

  setCachedResponses(cachedResponses);

  return {
    loaded: results.filter((result) => result.status === "fulfilled").length,
    failed: results.filter((result) => result.status === "rejected").length,
    endpoints: endpointsToLoad,
  };
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
