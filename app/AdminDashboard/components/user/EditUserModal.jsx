"use client";

import React, { useState, useEffect } from "react";
import { apiRequest } from "./../../authservice/api";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { X } from "lucide-react";
import { formatPhoneInput, isValidPhone, PHONE_PATTERN } from "../../utils/formatting";

const EditUserModal = ({ isOpen, onClose, userData, onSuccess, availableRoles = [] }) => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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
  const [initialized, setInitialized] = useState(false);

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

  useEffect(() => {
    if (!isOpen) {
      setInitialized(false);
      return;
    }

    if (!initialized && userData) {
      setFormData({
        name: userData.name || "",
        email: userData.email || "",
        password: "",
        confirmPassword: "",
        phone: formatPhoneInput(userData.phone || ""),
        employeeId: userData.employeeId || "",
        role: userData.role || availableRoles[0] || "",
        department: userData.department || "",
        status: userData.status || "Active",
        ipRestrictions: userData.securitySettings?.ipRestrictions?.join(", ") || "",
        requirePasswordChange: userData.securitySettings?.requirePasswordChange || false,
        twoFactorAuth: userData.securitySettings?.twoFactorAuth || false,
      });
      setInitialized(true);
    }
  }, [isOpen, userData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid.";
    if (!formData.phone) {
      errors.phone = "Phone is required.";
    } else if (!isValidPhone(formData.phone)) {
      errors.phone = "Phone must be in format 0300-1234567.";
    }
    if (!formData.employeeId) errors.employeeId = "Employee ID is required.";
    if (!formData.role) errors.role = "Role is required.";

    if (formData.password) {
      if (formData.password !== formData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match.";
      }
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      employeeId: formData.employeeId,
      role: formData.role,
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
      const userId = userData?._id || userData?.id;
      if (!userId) {
        throw new Error("Invalid user selection. Cannot update user.");
      }

      const response = await apiRequest(`/user-management/updateUser/${userId}`, {
        method: "PUT",
        data: payload,
        successMessage: "User updated successfully!",
      });

      if (response) {
        setShowSuccess(true);
        onSuccess?.();
      }
    } catch (err) {
      console.error(err);
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong!";
      setErrorMessage(msg);
      setShowError(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/55 p-3 backdrop-blur-sm sm:p-4">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-slate-200 bg-white shadow-2xl">
        <div className="sticky top-0 flex items-start justify-between gap-3 rounded-t-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-700 p-4 text-white sm:p-6">
          <h2 className="text-xl font-bold sm:text-2xl">Edit User</h2>
          <button
            onClick={onClose}
            className="h-9 w-9 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form className="space-y-6 bg-gradient-to-b from-slate-50 to-white p-4 sm:p-6" onSubmit={handleSubmit}>
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

              <div className="relative space-y-1">
                <label className="text-sm font-medium text-slate-700">New Password</label>
                <div className="relative space-y-1">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    placeholder="New Password"
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-xl border border-slate-300 px-3 py-1 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
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

              <div className="relative space-y-1">
                <label className="text-sm font-medium text-slate-700">Confirm Password</label>
                <div className="relative space-y-1">
                  <input
                    type={showConfirm ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-xl border border-slate-300 px-3 py-1 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
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
                  {availableRoles.map((role) => (
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
              Update User
            </button>
          </div>
        </form>

        {showSuccess && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 p-3 sm:p-4">
            <div className="w-full max-w-sm rounded-xl bg-white p-5 text-center shadow-xl sm:p-6">
              <h3 className="text-lg font-bold mb-2">Success!</h3>
              <p>User has been updated successfully.</p>
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

export default EditUserModal;

