"use client";

import React, { useState, useEffect } from "react";
import { apiRequest } from "./../../authservice/api";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { formatPhoneInput, isValidPhone, PHONE_PATTERN } from "../../utils/formatting";

const SALES_MANAGER_ROLE_LABEL = "Sales_Manager";
const SALES_MANAGER_ROLE_VALUE = "SALES_MANAGER";
const SALES_MANAGER_DEFAULT_PERMISSIONS = [
  "DASHBOARD_VIEW",
  "POS_VIEW",
  "POS_CREATE",
  "POS_EDIT",
  "POS_DELETE",
  "CUSTOMER_VIEW",
  "CUSTOMER_CREATE",
  "CUSTOMER_EDIT",
  "PRODUCT_VIEW",
  "SALE_VIEW",
  "SALE_CREATE",
  "SALE_EDIT",
  "REPORT_VIEW",
];

const normalizeRoleValue = (value) => String(value || "").trim().toUpperCase();

const UserModal = ({ isOpen, onClose, userData, onSuccess, availableRoles = [] }) => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [initialized, setInitialized] = useState(false); // ✅ FIX

  const roleOptions = Array.from(new Set([...availableRoles, SALES_MANAGER_ROLE_LABEL]));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    employeeId: "",
    role: "",
    department: "",
    status: "Active",
    ipRestrictions: "",
    requirePasswordChange: false,
    twoFactorAuth: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /* ---------------- Handle Change ---------------- */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let nextValue = type === "checkbox" ? checked : value;

    if (name === "phone" && type !== "checkbox") {
      nextValue = formatPhoneInput(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: nextValue,
    }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  /* ---------------- FIXED Auto-fill ---------------- */
  useEffect(() => {
    if (isOpen && !initialized) {
      if (userData) {
        setFormData({
          name: userData.name || "",
          email: userData.email || "",
          password: "",
          confirmPassword: "",
          phone: formatPhoneInput(userData.phone || ""),
          employeeId: userData.employeeId || "",
          role: userData.role || roleOptions[0] || "",
          department: userData.department || "",
          status: userData.status || "Active",
          ipRestrictions:
            userData.securitySettings?.ipRestrictions?.join(", ") || "",
          requirePasswordChange:
            userData.securitySettings?.requirePasswordChange || false,
          twoFactorAuth: userData.securitySettings?.twoFactorAuth || false,
        });
      } else {
        const randomNum = Math.floor(100 + Math.random() * 900);
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
          employeeId: `EMP-${randomNum}`,
          role: roleOptions[0] || "",
          department: "",
          status: "Active",
          ipRestrictions: "",
          requirePasswordChange: false,
          twoFactorAuth: false,
        });
      }

      setInitialized(true);
    }

    if (!isOpen) {
      setInitialized(false); // reset when modal closes
    }
  }, [isOpen, userData]); // ✅ FIX (removed availableRoles)

  /* ---------------- Handle Submit ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid.";

    if (!userData) {
      if (!formData.password) errors.password = "Password is required.";
      if (formData.password !== formData.confirmPassword)
        errors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.phone) {
      errors.phone = "Phone is required.";
    } else if (!isValidPhone(formData.phone)) {
      errors.phone = "Phone must be in format 0300-1234567.";
    }
    if (!formData.employeeId) errors.employeeId = "Employee ID is required.";
    if (!formData.role) errors.role = "Role is required.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const normalizedRole = normalizeRoleValue(formData.role);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      employeeId: formData.employeeId,
      role: normalizedRole,
      department: formData.department,
      status: formData.status,
      ...(formData.password && { password: formData.password }),
      securitySettings: {
        requirePasswordChange: formData.requirePasswordChange,
        twoFactorAuth: formData.twoFactorAuth,
        ipRestrictions: formData.ipRestrictions
          ? formData.ipRestrictions.split(",").map((ip) => ip.trim())
          : [],
      },
    };

    try {
      let response;
      if (userData) {
        response = await apiRequest(`/user-management/updateUser/${userData._id}`, {
          method: "PUT",
          data: payload,
          successMessage: "User updated successfully!",
        });
      } else {
        if (normalizedRole === SALES_MANAGER_ROLE_VALUE) {
          const roleLookup = await apiRequest("/roles", {
            method: "GET",
            suppressErrorToast: true,
            suppressErrorLog: true,
          });

          const rolesData =
            roleLookup?.data?.roles ||
            roleLookup?.roles ||
            roleLookup?.data ||
            roleLookup ||
            [];

          const salesManagerRole = Array.isArray(rolesData)
            ? rolesData.find(
                (role) =>
                  normalizeRoleValue(role?.role) === SALES_MANAGER_ROLE_VALUE,
              )
            : null;

          if (!salesManagerRole) {
            await apiRequest("/roles/createRole", {
              method: "POST",
              includeAuth: true,
              suppressErrorToast: true,
              data: {
                role: SALES_MANAGER_ROLE_VALUE,
                description: "Sales manager access",
                permissions: SALES_MANAGER_DEFAULT_PERMISSIONS,
                status: "ACTIVE",
              },
            });
          } else if (String(salesManagerRole?.status || "").toUpperCase() !== "ACTIVE") {
            await apiRequest(`/roles/updateRole/${salesManagerRole._id}`, {
              method: "PUT",
              includeAuth: true,
              suppressErrorToast: true,
              data: {
                role: SALES_MANAGER_ROLE_VALUE,
                description: salesManagerRole?.description || "Sales manager access",
                permissions:
                  Array.isArray(salesManagerRole?.permissions) &&
                  salesManagerRole.permissions.length > 0
                    ? salesManagerRole.permissions
                    : SALES_MANAGER_DEFAULT_PERMISSIONS,
                status: "ACTIVE",
              },
            });
          }
        }

        response = await apiRequest("/user-management/createUser", {
          method: "POST",
          data: payload,
          successMessage: "User created successfully!",
        });
      }

      if (response) {
        setShowSuccess(true);
        onSuccess?.();
      }
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || "Something went wrong!");
      setShowError(true);
    }
  };

  if (!isOpen) return null;

  return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/55 p-3 backdrop-blur-sm sm:p-4">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-slate-200 bg-white shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 flex items-start justify-between gap-3 rounded-t-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-700 p-4 text-white sm:p-6">
          <h2 className="text-xl font-bold sm:text-2xl">
            {userData ? "Update User" : "Add User"}
          </h2>
          <button
            onClick={onClose}
            className="h-9 w-9 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 transition-colors"
          >
            X
          </button>
        </div>

        {/* Form */}
        <form className="space-y-6 bg-gradient-to-b from-slate-50 to-white p-4 sm:p-6" onSubmit={handleSubmit}>
          {/* Basic Information */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-xl border border-slate-300 px-3 py-1 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  required
                />
                {formErrors.name && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="user@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-xl border border-slate-300 px-3 py-1 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  required
                />
                {formErrors.email && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="relative space-y-1">
                <label className="text-sm font-medium text-slate-700">Password *</label>
                <div className="relative space-y-1">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-xl border border-slate-300 px-3 py-1 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    required
                  />
                  <span
                    className="absolute right-3 top-3 text-gray-600 text-xl cursor-pointer"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {formErrors.password && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>
                  )}
                </div>
              </div>
              {/* Confirm Password */}
              <div className="relative space-y-1">
                <label className="text-sm font-medium text-slate-700">Confirm Password *</label>
                <div className="relative space-y-1">
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-xl border border-slate-300 px-3 py-1 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  required
                />
                <span
                  className="absolute right-3 top-3 text-gray-600 text-xl cursor-pointer"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </span>
                {formErrors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.confirmPassword}</p>
                )}
              </div>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="0300-1234567"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern={PHONE_PATTERN.source}
                  title="Phone format: 0300-1234567"
                  maxLength={12}
                  className="flex h-10 w-full rounded-xl border border-slate-300 px-3 py-1 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  required
                />
                {formErrors.phone && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>
                )}
              </div>

              {/* Employee ID */}
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">Employee ID *</label>
                <input
                  type="text"
                  name="employeeId"
                  placeholder="EMP-001"
                  value={formData.employeeId}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-xl border border-slate-300 px-3 py-1 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  required
                />
                {formErrors.employeeId && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.employeeId}</p>
                )}
              </div>
            </div>
          </div>

          {/* Role & Access */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Role & Access</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">User Role *</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  required
                >
                  <option value="">Select role</option>
                  {roleOptions.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
                {formErrors.role && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.role}</p>
                )}
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">Department *</label>
                <input
                  type="text"
                  name="department"
                  placeholder="e.g., Administration"
                  value={formData.department}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-xl border border-slate-300 px-3 py-1 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">Account Status *</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  required
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Security Settings</h3>
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="requirePasswordChange"
                checked={formData.requirePasswordChange}
                onChange={handleChange}
                className="w-4 h-4 text-indigo-600 rounded"
              />
              <span className="text-sm text-slate-700">Require password change on next login</span>
            </label>
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="twoFactorAuth"
                checked={formData.twoFactorAuth}
                onChange={handleChange}
                className="w-4 h-4 text-indigo-600 rounded"
              />
              <span className="text-sm text-slate-700">Enable Two-Factor Authentication (2FA)</span>
            </label>
            <div className="space-y-2 mt-2">
              <label className="text-sm font-medium text-slate-700">IP Restrictions (comma-separated)</label>
              <input
                type="text"
                name="ipRestrictions"
                placeholder="e.g., 192.168.1.1, 10.0.0.1"
                value={formData.ipRestrictions}
                onChange={handleChange}
                className="flex h-10 w-full rounded-xl border border-slate-300 px-3 py-1 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col justify-end gap-3 border-t border-slate-200 pt-4 sm:flex-row">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-100 sm:w-auto"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:from-indigo-700 hover:to-blue-700 sm:w-auto"
            >
              {userData ? "Update User" : "Create User"}
            </button>
          </div>
        </form>

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 p-3 sm:p-4">
            <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-xl sm:p-6">
              <h3 className="text-lg font-bold mb-2">Success!</h3>
              <p>User has been {userData ? "updated" : "created"} successfully.</p>
              <button
                onClick={() => {
                  setShowSuccess(false);
                  onClose();
                }}
                className="mt-4 w-full rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 sm:w-auto"
              >
                OK
              </button>
            </div>
          </div>
        )}

        {/* Error Modal */}
        {showError && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 p-3 sm:p-4">
            <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-xl sm:p-6">
              <h3 className="text-lg font-bold mb-2 text-red-600">Error!</h3>
              <p>{errorMessage}</p>
              <button
                onClick={() => setShowError(false)}
                className="mt-4 w-full rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700 sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserModal;
