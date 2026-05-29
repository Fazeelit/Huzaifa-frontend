"use client";

import React, { useState, useEffect } from "react";
import { LucidePlus, Trash2 } from "lucide-react";
import { apiRequest } from "./../../authservice/api";

import RoleCard from "../roles/RoleCard";
import AddRoleModal from "../roles/AddRoleModal";
import PermissionsModal from "../roles/PermissionModal";
import { usePermissions } from "../../authservice/usePermissions";
import { blockedButtonClass, blockedButtonProps } from "../../authservice/permissions";

const RolesPage = () => {
  const { crud } = usePermissions();
  const { canCreate, canEdit, canDelete } = crud("ROLE");
  const [roles, setRoles] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showPermissionsModal, setShowPermissionsModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [loading, setLoading] = useState(true);

  // ================= FETCH ALL ROLES =================
  const fetchRoles = async ({ silent = false } = {}) => {
    try {
      if (!silent) setLoading(true);

      const res = await apiRequest("/roles", {
        method: "GET",
      });

      console.log("✅ Roles API Response:", res);

      // Normalize response safely
      const rolesData =
        res?.data?.roles ||
        res?.roles ||
        res?.data ||
        res ||
        [];

      setRoles(Array.isArray(rolesData) ? rolesData : []);
    } catch (error) {
      console.error("❌ Failed to fetch roles:", error.message);
      if (!silent) setRoles([]);
    } finally {
      if (!silent) setLoading(false);
    }
  };

  useEffect(() => {
    fetchRoles();

    const intervalId = setInterval(() => {
      fetchRoles({ silent: true });
    }, 5000);

    const handleFocus = () => fetchRoles({ silent: true });
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchRoles({ silent: true });
      }
    };

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // ================= ADD / UPDATE ROLE =================
  const handleSaveRole = (role) => {
    setRoles((prev) => {
      if (role?._id) {
        return prev.map((r) =>
          r._id === role._id ? { ...r, ...role } : r
        );
      }
      return [...prev, role];
    });

    setShowAddModal(false);
  };

  // Open Add Role Modal
  const handleAddRole = () => {
    if (!canCreate) return;
    setSelectedRole(null);
    setShowAddModal(true);
  };

  // Open Edit Role Modal
  const handleEditRole = (role) => {
    if (!canEdit) return;
    setSelectedRole(role);
    setShowAddModal(true);
  };

  // Open Permissions Modal
  const handlePermissions = (role) => {
    if (!canEdit) return;
    setSelectedRole(role);
    setShowPermissionsModal(true);
  };

  // Save Permissions (local update only)
  const handleSavePermissions = (roleId, updatedPermissions) => {
    setRoles((prev) =>
      prev.map((role) =>
        role._id === roleId
          ? { ...role, permissions: updatedPermissions }
          : role
      )
    );

    setShowPermissionsModal(false);
  };

  const handleDeleteRole = async (role) => {
    if (!canDelete || !role?._id) return;

    try {
      const res = await apiRequest(`/roles/deleteRole/${role._id}`, {
        method: "DELETE",
      });

      if (res?.success !== false) {
        setRoles((prev) => prev.filter((r) => r._id !== role._id));
      }
    } catch (error) {
      console.error("Failed to delete role:", error?.message || error);
    }
  };

  const openDeleteModal = (role) => {
    if (!canDelete) return;
    setDeleteTarget(role);
  };

  const closeDeleteModal = () => {
    setDeleteTarget(null);
  };

  const confirmDeleteRole = async () => {
    if (!deleteTarget) return;
    await handleDeleteRole(deleteTarget);
    closeDeleteModal();
  };

  return (
    <main className="space-y-6 p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-gradient-to-r from-white via-slate-50 to-indigo-50/60 p-4 shadow-sm sm:p-5 md:flex-row md:items-center md:p-6">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            User Roles & Permissions
          </h1>
          <p className="text-slate-600 mt-1 text-sm md:text-base">
            Configure roles and access control
          </p>
        </div>

        <button
          onClick={handleAddRole}
          className={`inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold
          bg-gradient-to-r from-slate-900 to-indigo-700 hover:from-slate-800 hover:to-indigo-600
          text-white shadow-md shadow-indigo-900/25 transition-all sm:w-auto ${blockedButtonClass} blocked-action`}
          {...blockedButtonProps(canCreate)}
        >
          <LucidePlus className="w-5 h-5" />
          Create Role
        </button>
      </div>

      {/* Roles Grid */}
      {loading ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500 shadow-sm">
          Loading roles...
        </div>
      ) : roles.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500 shadow-sm">
          No roles available.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <RoleCard
              key={role._id}
              role={role}
              onEdit={handleEditRole}
              onDelete={openDeleteModal}
              onPermissions={handlePermissions}
              canEdit={canEdit}
              canDelete={canDelete}
            />
          ))}
        </div>
      )}

      {/* Add / Edit Role Modal */}
      {showAddModal && (canCreate || canEdit) && (
        <AddRoleModal
          open={showAddModal}
          onClose={() => setShowAddModal(false)}
          onSave={handleSaveRole}
          role={selectedRole}
        />
      )}

      {/* Permissions Modal */}
      {showPermissionsModal && selectedRole && canEdit && (
        <PermissionsModal
          role={selectedRole}
          open={showPermissionsModal}
          onClose={() => setShowPermissionsModal(false)}
          onSave={handleSavePermissions}
        />
      )}

      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-3 sm:p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-full bg-red-100 p-2 text-red-600">
                <Trash2 size={18} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Delete Role</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Are you sure you want to delete this role{" "}
                  <span className="font-semibold text-slate-900">{deleteTarget.name}</span>?
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col justify-end gap-2 sm:flex-row">
              <button
                type="button"
                onClick={confirmDeleteRole}
                className="w-full rounded-lg border border-red-200 bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 sm:w-auto"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={closeDeleteModal}
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 sm:w-auto"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default RolesPage;
