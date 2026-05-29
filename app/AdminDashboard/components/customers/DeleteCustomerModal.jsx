"use client";

import { Trash2 } from "lucide-react";

export default function DeleteCustomerModal({
  deleteModalOpen,
  setDeleteModalOpen,
  customerToDelete,
  confirmDelete,
}) {
  if (!deleteModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-3">
      <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-2xl max-w-md w-full p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 rounded-lg">
            <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Delete Customer?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1 text-xs">
              This action cannot be undone
            </p>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-lg p-3 mb-4">
          <p className="text-gray-800 dark:text-gray-200 text-sm">
            Are you sure you want to delete customer{" "}
            <span className="font-semibold">{customerToDelete?.name || "this customer"}</span>?
          </p>
        </div>

        <div className="flex justify-end gap-2.5">
          <button
            onClick={() => setDeleteModalOpen(false)}
            className="px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-300 rounded-lg text-sm font-medium hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-200"
          >
            No
          </button>
          <button
            onClick={confirmDelete}
            className="px-4 py-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg text-sm font-medium hover:from-red-700 hover:to-pink-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}
