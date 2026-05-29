"use client";

import React from "react";
import { Pen, Trash2 } from "lucide-react";
import { blockedButtonClass, blockedButtonProps } from "../../authservice/permissions";
import { formatDateDDMMYYYY } from "../../utils/formatting";

const ExpenseRow = ({ expense, onEdit, onDelete, canEdit = true, canDelete = true }) => {
  const statusColors = {
    Paid: "bg-green-100 text-green-800 border-green-200",
    Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Cancelled: "bg-red-100 text-red-800 border-red-200",
  };

  return (
    <tr
      className={`border-b border-gray-200 transition-colors ${canEdit ? "hover:bg-slate-50" : "cursor-not-allowed bg-red-50/40"}`}
    >
      <td className="p-2 text-sm whitespace-nowrap">{formatDateDDMMYYYY(expense.date)}</td>
      <td className="p-2">
        <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold text-foreground border-slate-200">
          {expense.category}
        </div>
      </td>
      <td className="max-w-xs truncate p-2 sm:max-w-none">{expense.description}</td>
      <td className="p-2 break-words">{expense.vendor}</td>
      <td className="p-2 text-sm text-slate-600">{expense.paymentMethod}</td>
      <td className="p-2 font-bold text-red-600">Rs.{expense.amount.toFixed(2)}</td>
      <td className="p-2">
        <div
          className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold border ${
            statusColors[expense.paymentStatus] || "bg-gray-100 text-gray-800 border-gray-200"
          }`}
        >
          {expense.paymentStatus}
        </div>
      </td>
      <td className="p-2">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => canEdit && onEdit?.(expense)}
            className={`h-8 w-8 flex items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition ${blockedButtonClass} blocked-action`}
            {...blockedButtonProps(canEdit)}
          >
            <Pen className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => canDelete && onDelete?.(expense)}
            className={`h-8 w-8 flex items-center justify-center rounded-lg border border-rose-200 bg-white text-rose-600 hover:bg-rose-50 transition ${blockedButtonClass} blocked-action`}
            {...blockedButtonProps(canDelete)}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ExpenseRow;
