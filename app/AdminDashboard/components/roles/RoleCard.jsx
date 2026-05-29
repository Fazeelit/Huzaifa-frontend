"use client";

import React from "react";
import { Shield, Pen, Trash2, Check, X } from "lucide-react";
import { blockedButtonClass, blockedButtonProps } from "../../authservice/permissions";

const RoleCard = ({ role, onEdit, onDelete, onPermissions, canEdit = true, canDelete = true }) => {
  if (!role) return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all duration-200">
      <div className="flex items-start justify-between gap-3 rounded-t-2xl border-b border-slate-100 bg-gradient-to-r from-white to-slate-50/70 p-6">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-slate-900 to-indigo-700 text-white shadow-sm sm:h-12 sm:w-12
            "
          >
            <Shield className="w-6 h-6" />
          </div>
          <div className="min-w-0">
            <div className="break-words text-lg font-bold tracking-tight text-slate-900">{role.name}</div>
            {role.description && (
              <p className="mt-1 line-clamp-2 break-words text-xs text-slate-500">{role.description}</p>
            )}
          </div>
        </div>

        <span
          className={`px-2.5 py-1 text-xs font-semibold rounded-lg border ${
            role.status === "ACTIVE"
              ? "bg-emerald-100 text-emerald-800 border-emerald-200"
              : "bg-rose-100 text-rose-800 border-rose-200"
          }`}
        >
          {role.status}
        </span>
      </div>

      <div className="p-6 space-y-4">
        {role.permissions && role.permissions.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold text-slate-700 uppercase mb-2">
              Permissions Summary
            </h4>

            <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
              {role.permissions.map((perm) => (
                <div key={perm} className="flex items-center gap-1.5 rounded-md bg-slate-50 px-2 py-1">
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="break-words capitalize text-slate-600">{perm.replace(/_/g, " ")}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            onClick={() => canEdit && onPermissions(role)}
            className={`flex h-9 w-full items-center justify-center gap-2 rounded-xl border border-indigo-600 bg-indigo-600 text-xs font-semibold text-white transition-colors hover:border-indigo-500 hover:bg-indigo-500 sm:flex-1 ${blockedButtonClass} blocked-action`}
            {...blockedButtonProps(canEdit)}
          >
            Permissions
          </button>

          <button
            onClick={() => canEdit && onEdit(role)}
            className={`h-9 w-full rounded-xl border border-slate-300 bg-white px-3 transition-colors hover:bg-slate-100 sm:w-auto ${blockedButtonClass} blocked-action`}
            {...blockedButtonProps(canEdit)}
          >
            <Pen className="w-4 h-4 text-slate-600" />
          </button>

          <button
            onClick={() => canDelete && onDelete && onDelete(role)}
            className={`h-9 w-full rounded-xl border border-rose-200 bg-white px-3 transition-colors hover:bg-rose-50 sm:w-auto ${blockedButtonClass} blocked-action`}
            {...blockedButtonProps(canDelete)}
          >
            <Trash2 className="w-4 h-4 text-rose-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleCard;
