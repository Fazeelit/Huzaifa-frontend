"use client";

import { Trash2 } from "lucide-react";

export default function DeleteSalesModal({
  isOpen,
  message,
  onClose,
  onConfirm,
  isDeleting = false,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-2xl sm:p-8">
        <div className="mb-6 flex items-start gap-4">
          <div className="rounded-xl bg-gradient-to-r from-red-100 to-pink-100 p-3">
            <Trash2 className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Delete Sales Record?</h3>
            <p className="mt-1 text-sm text-gray-600">This action cannot be undone.</p>
          </div>
        </div>

        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-gray-800">{message}</p>
        </div>

        <div className="flex flex-col justify-end gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onClose}
            disabled={isDeleting}
            className="w-full rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 px-6 py-3 font-medium text-gray-800 transition-all duration-200 hover:from-gray-300 hover:to-gray-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            No
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isDeleting}
            className="w-full rounded-xl bg-gradient-to-r from-red-600 to-pink-600 px-6 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:from-red-700 hover:to-pink-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
