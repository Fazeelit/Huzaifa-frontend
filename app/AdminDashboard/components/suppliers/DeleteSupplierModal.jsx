"use client";

import { Trash2 } from "lucide-react";

export default function DeleteSupplierModal({
  deleteModalOpen,
  setDeleteModalOpen,
  supplierToDelete,
  confirmDelete,
}) {
  if (!deleteModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 shadow-2xl dark:from-gray-800 dark:to-gray-700 sm:p-8">
        <div className="mb-6 flex items-start gap-4">
          <div className="p-3 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 rounded-xl">
            <Trash2 className="w-6 h-6 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Delete Supplier?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
              This action cannot be undone
            </p>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-xl p-4 mb-6">
          <p className="text-gray-800 dark:text-gray-200">
            Are you sure want to delete{" "}
            <span className="font-semibold">{supplierToDelete?.name || "this supplier"}</span>?
          </p>
        </div>

        <div className="flex flex-col justify-end gap-3 sm:flex-row">
          <button
            onClick={() => setDeleteModalOpen(false)}
            className="w-full rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 px-6 py-3 font-medium text-gray-800 transition-all duration-200 hover:from-gray-300 hover:to-gray-400 dark:from-gray-700 dark:to-gray-600 dark:text-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 sm:w-auto"
          >
            No
          </button>
          <button
            onClick={confirmDelete}
            className="w-full rounded-xl bg-gradient-to-r from-red-600 to-pink-600 px-6 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:from-red-700 hover:to-pink-700 hover:shadow-xl sm:w-auto"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
