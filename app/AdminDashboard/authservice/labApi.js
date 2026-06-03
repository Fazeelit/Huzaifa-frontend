import { apiRequest } from "./api";

const asList = (res) => {
  if (Array.isArray(res)) return res;
  if (Array.isArray(res?.data)) return res.data;
  if (Array.isArray(res?.data?.data)) return res.data.data;
  return [];
};

const isMissingRouteError = (error) => {
  const status = error?.status || error?.response?.status || 0;
  const message = String(
    error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "",
  ).trim();

  return status === 404 || /api route not found/i.test(message);
};

export const listLabOrders = async (options = {}) => {
  try {
    const res = await apiRequest("/tests", options);
    return asList(res);
  } catch (error) {
    if (isMissingRouteError(error)) {
      return [];
    }

    throw error;
  }
};

export const getLabOrderById = async (id, options = {}) =>
  apiRequest(`/tests/${id}`, options);

export const createLabOrder = async (payload, options = {}) =>
  apiRequest("/tests/createTest", { method: "POST", data: payload, ...options });

export const updateLabOrder = async (id, payload, options = {}) =>
  apiRequest(`/tests/updateTest/${id}`, { method: "PUT", data: payload, ...options });

export const deleteLabOrder = async (id, options = {}) =>
  apiRequest(`/tests/deleteTest/${id}`, { method: "DELETE", ...options });

export const listLabTemplates = async (options = {}) => {
  const res = await apiRequest("/testParameters", options);
  return asList(res);
};

export const createLabTemplate = async (payload, options = {}) =>
  apiRequest("/testParameters/createTestparameter", {
    method: "POST",
    data: payload,
    ...options,
  });

export const updateLabTemplate = async (id, payload, options = {}) =>
  apiRequest(`/testParameters/updateTestparameter/${id}`, {
    method: "PUT",
    data: payload,
    ...options,
  });

export const deleteLabTemplate = async (id, options = {}) =>
  apiRequest(`/testParameters/deleteTestparameter/${id}`, {
    method: "DELETE",
    ...options,
  });

export const listLabCategories = async (options = {}) => {
  const res = await apiRequest("/lab-categories", options);
  return asList(res);
};

export const createLabCategory = async (payload, options = {}) =>
  apiRequest("/lab-categories/create", {
    method: "POST",
    data: payload,
    ...options,
  });

export const updateLabCategory = async (id, payload, options = {}) =>
  apiRequest(`/lab-categories/update/${id}`, {
    method: "PUT",
    data: payload,
    ...options,
  });

export const deleteLabCategory = async (id, options = {}) =>
  apiRequest(`/lab-categories/delete/${id}`, {
    method: "DELETE",
    ...options,
  });
