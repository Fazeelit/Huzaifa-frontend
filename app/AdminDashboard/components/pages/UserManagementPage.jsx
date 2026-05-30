"use client";

import React, { useEffect, useMemo, useState } from "react";
import { apiRequest } from "./../../authservice/api";
import UserStatsCard from "../user/UserStatesCard";
import SearchAndFilter from "../user/SearchAndFilter";
import UserTable from "../user/UserTable";
import UserModal from "../user/UserModal";
import EditUserModal from "../user/EditUserModal";
import { usePermissions } from "../../authservice/usePermissions";
import { blockedButtonClass, blockedButtonProps } from "../../authservice/permissions";
import {
  LucideUserCog,
  LucideLockOpen,
  LucideLock,
  LucideShield,
  Plus,
} from "lucide-react";

const UserManagementPage = () => {
  const { crud } = usePermissions();
  const { canCreate, canEdit, canDelete } = crud("USER");
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);
  const [availableRoles, setAvailableRoles] = useState([]);

  const [users, setUsers] = useState([]); // must always be an array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // Fetch Users from API
  // =========================
  const fetchUsers = async ({ silent = false } = {}) => {
    try {
      if (!silent) {
        setLoading(true);
        setError("");
      }

      const res = await apiRequest("/user-management", "GET");

      /*
        Your API might return:
        1) [ ...users ]
        2) { users: [ ...users ] }
        3) { data: [ ...users ] }

        This logic safely extracts the array.
      */
      const userArray =
        Array.isArray(res)
          ? res
          : Array.isArray(res?.users)
          ? res.users
          : Array.isArray(res?.data)
          ? res.data
          : [];

      setUsers(userArray);
    } catch (err) {
      console.error("❌ Failed to fetch users:", err);
      if (!silent) {
        setError("Failed to load users");
        setUsers([]); // prevent .filter crash
      }
    } finally {
      if (!silent) setLoading(false);
    }
  };

  const fetchRoles = async () => {
    try {
      const res = await apiRequest("/roles", {
        method: "GET",
        suppressErrorToast: true,
        suppressErrorLog: true,
      });

      const rolesData =
        res?.data?.roles ||
        res?.roles ||
        res?.data ||
        res ||
        [];

      const normalizedRoles = Array.isArray(rolesData)
        ? rolesData
            .filter((role) => String(role?.status || "").toUpperCase() === "ACTIVE")
            .map((role) => String(role?.role || "").trim().toUpperCase())
            .filter(Boolean)
        : [];

      if (normalizedRoles.length > 0) {
        setAvailableRoles([...new Set(normalizedRoles)]);
      }
    } catch {
      // Ignore role lookup failures and fall back to roles present on users.
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchRoles();

    const intervalId = setInterval(() => {
      fetchUsers({ silent: true });
    }, 5000);

    const handleFocus = () => fetchUsers({ silent: true });
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchUsers({ silent: true });
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

  // =========================
  // Filter users
  // =========================
  const filteredUsers = Array.isArray(users)
    ? users.filter((user) => {
        const matchesSearch =
          user?.name?.toLowerCase().includes(search.toLowerCase()) ||
          user?.email?.toLowerCase().includes(search.toLowerCase());

        const matchesRole = roleFilter === "All" || user.role === roleFilter;

        return matchesSearch && matchesRole;
      })
    : [];

  const roleOptions = useMemo(() => {
    const rolesFromUsers = users
      .map((user) => String(user?.role || "").trim().toUpperCase())
      .filter(Boolean);

    return [...new Set([...availableRoles, ...rolesFromUsers])];
  }, [availableRoles, users]);

  // =========================
  // Edit Handler
  // =========================
  const handleEdit = (user) => {
    if (!canEdit) return;
    setEditingUser(user);
    setEditModalOpen(true);
  };

  const handleDelete = (user) => {
    if (!canDelete || !user?._id) return;
    setDeleteUser(user);
  };

  const closeDeleteModal = () => {
    setDeleteUser(null);
  };

  const confirmDeleteUser = async () => {
    if (!canDelete || !deleteUser?._id) return;

    try {
      await apiRequest(`/user-management/deleteUser/${deleteUser._id}`, {
        method: "DELETE",
      });
      closeDeleteModal();
      await fetchUsers();
    } catch (err) {
      console.error("Failed to delete user:", err);
      setError(err?.message || "Failed to delete user");
      closeDeleteModal();
    }
  };


  return (
    <main className="space-y-6 p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-gradient-to-r from-white to-slate-50 px-4 py-4 shadow-sm sm:px-5 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">User Management</h1>
          <p className="text-slate-600 mt-1">
            Manage system users, roles, and permissions
          </p>
        </div>
        <button
          onClick={() => canCreate && setModalOpen(true)}
          className={`inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-4 text-white shadow-md hover:brightness-105 sm:w-auto ${blockedButtonClass} blocked-action`}
          {...blockedButtonProps(canCreate)}
        >
          <Plus className="w-5 h-5" /> Add User
        </button>
      </div>

      {/* Loading & Error */}
      {loading && <p className="text-blue-500">Loading users...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Delete Confirm Modal */}
      {deleteUser && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 p-3 sm:p-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xl w-[92%] max-w-md">
            <h2 className="font-bold text-slate-900 text-lg">Delete User</h2>
            <p className="mt-2 text-slate-600">
              Are you sure want to delete{" "}
              <span className="font-bold text-slate-900">{deleteUser.name || "this user"}</span>?
            </p>
            <div className="mt-5 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <button
                onClick={confirmDeleteUser}
                className="w-full rounded-xl bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700 sm:w-auto"
              >
                Yes
              </button>
              <button
                onClick={closeDeleteModal}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-100 sm:w-auto"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <UserStatsCard
          title="Total Users"
          value={users.length}
          icon={<LucideUserCog className="w-6 h-6 text-white" />}
          bgGradient="bg-gradient-to-br from-indigo-500 to-indigo-600"
          textColor="text-slate-900"
        />
        <UserStatsCard
          title="Active Users"
          value={users.filter((u) => u.status === "Active").length}
          icon={<LucideLockOpen className="w-6 h-6 text-white" />}
          bgGradient="bg-gradient-to-br from-emerald-500 to-emerald-600"
          textColor="text-emerald-600"
        />
        <UserStatsCard
          title="Inactive Users"
          value={users.filter((u) => u.status !== "Active").length}
          icon={<LucideLock className="w-6 h-6 text-white" />}
          bgGradient="bg-gradient-to-br from-red-500 to-red-600"
          textColor="text-red-600"
        />
        <UserStatsCard
          title="Total Roles"
          value={[...new Set(users.map((u) => u.role))].length}
          icon={<LucideShield className="w-6 h-6 text-white" />}
          bgGradient="bg-gradient-to-br from-purple-500 to-purple-600"
          textColor="text-purple-600"
        />
      </div>

      {/* Search & Filter */}
      <SearchAndFilter
        searchValue={search}
        onSearchChange={(e) => setSearch(e.target.value)}
        selectedRole={roleFilter}
        onRoleChange={setRoleFilter}
        roles={["All", ...roleOptions]}
      />

      {/* Users Table */}
      <UserTable
        users={filteredUsers}
        onEdit={handleEdit}
        onDelete={handleDelete}
        canEdit={canEdit}
        canDelete={canDelete}
      />

      {/* Modal */}
      <UserModal
        isOpen={modalOpen && canCreate}
        onClose={() => {
          setModalOpen(false);
        }}
        onSuccess={fetchUsers}
        availableRoles={roleOptions}
      />

      <EditUserModal
        isOpen={editModalOpen && canEdit}
        userData={editingUser}
        onClose={() => {
          setEditModalOpen(false);
          setEditingUser(null);
        }}
        onSuccess={fetchUsers}
        availableRoles={roleOptions}
      />
    </main>
  );
};

export default UserManagementPage;
