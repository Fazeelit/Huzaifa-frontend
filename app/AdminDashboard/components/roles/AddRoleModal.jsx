"use client";

import React, { useState, useEffect } from "react";
import { Shield, X } from "lucide-react";
import { apiRequest } from "./../../authservice/api";

/* ================= PERMISSIONS ================= */
const ALL_PERMISSIONS = [
  "DASHBOARD_VIEW",

  "POS_VIEW", "POS_CREATE", "POS_EDIT", "POS_DELETE",
  "CUSTOMER_VIEW", "CUSTOMER_CREATE", "CUSTOMER_EDIT", "CUSTOMER_DELETE",
  "PRODUCT_VIEW", "PRODUCT_CREATE", "PRODUCT_EDIT", "PRODUCT_DELETE",
  "PURCHASE_VIEW", "PURCHASE_CREATE", "PURCHASE_EDIT", "PURCHASE_DELETE",
  "PARTIAL_PAYMENT_ADD",
  "SUPPLIER_VIEW", "SUPPLIER_CREATE", "SUPPLIER_EDIT", "SUPPLIER_DELETE",
  "SALE_VIEW", "SALE_CREATE", "SALE_EDIT", "SALE_DELETE",
  "EXPENSE_VIEW", "EXPENSE_CREATE", "EXPENSE_EDIT", "EXPENSE_DELETE",
  "REPORT_VIEW",  
  "ROLE_VIEW", "ROLE_CREATE", "ROLE_EDIT", "ROLE_DELETE",  
];

const AddRoleModal = ({ open, onClose, onSave, role }) => {
  const [roleName, setRoleName] = useState("");
  const [description, setDescription] = useState("");
  const [permissions, setPermissions] = useState([]);
  const [status, setStatus] = useState("ACTIVE");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /* ================= INIT ================= */
  useEffect(() => {
    if (open && role) {
      setRoleName(role.role || "");
      setDescription(role.description || "");
      setPermissions(role.permissions || []);
      setStatus(role.status || "ACTIVE");
    }

    if (open && !role) {
      setRoleName("");
      setDescription("");
      setPermissions([]);
      setStatus("ACTIVE");
    }
  }, [open, role]);

  if (!open) return null;

  /* ================= TOGGLE ================= */
  const togglePermission = (perm) => {
    setPermissions((prev) =>
      prev.includes(perm)
        ? prev.filter((p) => p !== perm)
        : [...prev, perm]
    );
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!roleName || permissions.length === 0) {
      setErrorMessage("Role and permissions are required.");
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");

      const payload = {
        role: roleName.toUpperCase(),   // ✅ FIX
        description,
        permissions,
        status,
      };

      const res = role?._id
        ? await apiRequest(`/roles/updateRole/${role._id}`, {
            method: "PUT",
            data: payload,
            includeAuth: true,
          })
        : await apiRequest("/roles/createRole", {
            method: "POST",
            data: payload,
            includeAuth: true,
          });

      onSave(res?.role || payload);
      onClose();
    } catch (err) {
      setErrorMessage(
        err?.response?.data?.message || "Failed to save role"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 p-3 backdrop-blur-sm sm:p-4">
      <div className="w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

        {/* HEADER */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-3 rounded-t-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-700 p-4 text-white sm:p-5">
          <div className="flex min-w-0 items-center gap-2">
            <Shield className="w-5 h-5" />
            <h2 className="text-xl font-bold tracking-tight">
              {role ? "Edit Role" : "Create Role"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="h-9 w-9 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4 bg-gradient-to-b from-slate-50 to-white p-4 sm:p-6">

          <input
            type="text"
            value={roleName}
            onChange={(e) => setRoleName(String(e.target.value || "").toUpperCase())}
            placeholder="Enter role name"
            className="w-full h-10 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />

          <textarea
            rows="3"
            placeholder="Role description"
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full h-10 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
          >
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
          </select>

          {/* PERMISSIONS */}
          <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto rounded-xl border border-slate-200 bg-white p-3 shadow-inner sm:grid-cols-2 md:grid-cols-3">
            {ALL_PERMISSIONS.map((perm) => (
              <label key={perm} className="flex items-center gap-2 text-sm rounded-lg px-2 py-1.5 hover:bg-slate-50 transition-colors">
                <input
                  type="checkbox"
                  checked={permissions.includes(perm)}
                  onChange={() => togglePermission(perm)}
                  className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                {perm}
              </label>
            ))}
          </div>

          {errorMessage && (
            <p className="text-red-600 text-sm font-medium">{errorMessage}</p>
          )}

          <div className="flex flex-col justify-end gap-3 pt-2 sm:flex-row">
            <button
              type="button"
              onClick={onClose}
              className="h-10 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-slate-100 sm:w-auto"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="h-10 w-full rounded-xl bg-gradient-to-r from-slate-900 to-indigo-700 px-4 text-sm font-semibold text-white hover:from-slate-800 hover:to-indigo-600 disabled:opacity-60 sm:w-auto"
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRoleModal;
