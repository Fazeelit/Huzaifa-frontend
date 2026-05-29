"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Check, X } from "lucide-react";
import { apiRequest } from "../../authservice/api";

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
  "USER_VIEW", "USER_CREATE", "USER_EDIT", "USER_DELETE",
  "ROLE_VIEW", "ROLE_CREATE", "ROLE_EDIT", "ROLE_DELETE",
];

const PermissionsModal = ({ role, open, onClose, onSave }) => {
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (open && Array.isArray(role?.permissions)) {
      setPermissions(
        [...new Set(role.permissions)].filter((perm) => ALL_PERMISSIONS.includes(perm))
      );
    } else if (open) {
      setPermissions([]);
    }
  }, [role, open]);

  const filteredPermissions = useMemo(
    () => ALL_PERMISSIONS.filter((perm) => perm.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  const togglePermission = (perm) => {
    setPermissions((prev) =>
      prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
    );
  };

  const selectAll = () => setPermissions([...ALL_PERMISSIONS]);
  const unselectAll = () => setPermissions([]);

  const handleSave = async () => {
    if (!role?._id) return;

    if (permissions.length === 0) {
      alert("At least one permission is required.");
      return;
    }

    try {
      setLoading(true);

      const sanitizedPermissions = permissions.filter((perm) =>
        ALL_PERMISSIONS.includes(perm)
      );

      const payload = {
        role: role.role || role.name,
        permissions: sanitizedPermissions,
      };

      const res = await apiRequest(`/roles/updateRole/${role._id}`, {
        method: "PUT",
        data: payload,
        includeAuth: true,
      });

      const updatedPermissions =
        res?.data?.permissions || res?.role?.permissions || sanitizedPermissions;

      onSave(role._id, updatedPermissions);
      onClose();
    } catch (error) {
      console.error("Failed to save permissions:", error.message);
      alert("Failed to save permissions.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-slate-200 bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-3 rounded-t-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-700 p-4 text-white sm:p-5">
          <div className="min-w-0">
            <h2 className="text-xl font-bold tracking-tight">Manage Permissions</h2>
            <p className="break-words text-sm text-indigo-200">Role: {role?.role || role?.name || "N/A"}</p>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/10 transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-2 border-b border-slate-200 bg-slate-50/70 p-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search permissions..."
            className="h-10 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 sm:w-60"
          />

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              onClick={selectAll}
              className="h-10 w-full rounded-xl bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700 sm:w-auto"
            >
              Select All
            </button>

            <button
              onClick={unselectAll}
              className="h-10 w-full rounded-xl bg-rose-600 px-3 py-2 text-sm font-medium text-white hover:bg-rose-700 sm:w-auto"
            >
              Unselect All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 bg-gradient-to-b from-white to-slate-50/70 p-4 sm:grid-cols-2 sm:p-6">
          {filteredPermissions.map((perm) => (
            <div
              key={perm}
              onClick={() => togglePermission(perm)}
              className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                permissions.includes(perm)
                  ? "border-indigo-600 bg-indigo-600 text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              {permissions.includes(perm) && <Check size={16} />}
              {perm}
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-end gap-3 border-t border-slate-200 bg-white p-4 sm:flex-row">
          <button
            onClick={onClose}
            className="h-10 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm font-medium hover:bg-slate-100 sm:w-auto"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            disabled={loading}
            className="h-10 w-full rounded-xl bg-gradient-to-r from-slate-900 to-indigo-700 px-4 text-sm font-semibold text-white hover:from-slate-800 hover:to-indigo-600 disabled:opacity-60 sm:w-auto"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PermissionsModal;
