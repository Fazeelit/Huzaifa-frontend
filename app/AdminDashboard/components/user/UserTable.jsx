"use client";

import React from "react";
import { Edit3, Trash } from "lucide-react";
import { blockedButtonClass, blockedButtonProps } from "../../authservice/permissions";
import { formatDateDDMMYYYY } from "../../utils/formatting";

const UserTable = ({ users, onEdit, onDelete, canEdit = true, canDelete = true }) => {
  const formatLastLogin = (value) => {
    if (!value) return "-";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return String(value);

    const formattedDate = formatDateDDMMYYYY(date);
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[920px] whitespace-nowrap caption-bottom text-sm">
        <thead className="bg-slate-900 text-white">
          <tr className="border-b border-slate-700">
            {["User", "Email", "Role", "Department", "Last Login", "Status", "Actions"].map(
              (head) => (
                <th
                  key={head}
                  className="h-10 px-3 text-left text-xs uppercase tracking-wide font-semibold"
                >
                  {head}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user._id || user.email} // <-- fixed key
              className="border-b border-slate-100 hover:bg-slate-50 cursor-pointer"
              onClick={() => canEdit && onEdit(user)}
            >
              <td className="px-3 py-2.5 font-medium text-slate-900">{user.name}</td>
              <td className="px-3 py-2.5 text-slate-700">{user.email}</td>
              <td className="px-3 py-2.5 text-slate-700">{user.role}</td>
              <td className="px-3 py-2.5 text-slate-700">{user.department}</td>
              <td className="px-3 py-2.5 text-slate-700">{formatLastLogin(user.lastLogin)}</td>
              <td className="px-3 py-2.5 text-slate-700">{user.status}</td>
              <td className="px-3 py-2.5 gap-3 flex">
                <button
                  className={`h-8 w-8 inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white text-indigo-600 hover:bg-indigo-50 ${blockedButtonClass} blocked-action`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (canEdit) onEdit(user);
                  }}
                  {...blockedButtonProps(canEdit)}
                >
                  <Edit3 className="w-5 h-5" />
                </button>
                <button
                  className={`h-8 w-8 inline-flex items-center justify-center rounded-lg border border-rose-200 bg-white text-red-600 hover:bg-rose-50 ${blockedButtonClass} blocked-action`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (canDelete && onDelete) onDelete(user);
                  }}
                  {...blockedButtonProps(canDelete)}
                >
                  <Trash className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
