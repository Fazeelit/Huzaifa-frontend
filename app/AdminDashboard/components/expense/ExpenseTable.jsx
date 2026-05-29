"use client";

import React, { useEffect, useState } from "react";
import ExpenseRow from "./ExpenseRow";

const ExpensesTable = ({ data = [], onEdit, onDelete, canEdit = true, canDelete = true }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const recordsPerPage = 10;

  const totalPages = Math.max(1, Math.ceil(data.length / recordsPerPage));
  const paginatedData = data.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const openDeleteModal = (expense) => {
    setDeleteTarget(expense);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteTarget(null);
    setDeleteModalOpen(false);
  };

  const confirmDelete = async () => {
    if (!deleteTarget || !canDelete) return;
    try {
      setDeleting(true);
      if (onDelete) await onDelete(deleteTarget);
    } finally {
      setDeleting(false);
      closeDeleteModal();
    }
  };

  if (data.length === 0) {
    return (
      <div className="text-center p-6 text-gray-500">No expenses found.</div>
    );
  }

  return (
    <div className="flex min-h-[490px] flex-col rounded-xl border-0 bg-white/80 p-0 shadow-lg backdrop-blur">
      <div className="overflow-x-auto flex-1">
      <table className="h-full w-full min-w-[860px] caption-bottom text-sm">
        <thead className="bg-slate-900">
          <tr className="border-b border-slate-700 text-white">
            <th className="h-10 px-2 text-left font-semibold text-white">Date</th>
            <th className="h-10 px-2 text-left font-semibold text-white">Category</th>
            <th className="h-10 px-2 text-left font-semibold text-white">Description</th>
            <th className="h-10 px-2 text-left font-semibold text-white">Vendor</th>
            <th className="h-10 px-2 text-left font-semibold text-white">Payment</th>
            <th className="h-10 px-2 text-left font-semibold text-white">Amount</th>
            <th className="h-10 px-2 text-left font-semibold text-white">Payment Status</th>
            <th className="h-10 px-2 text-left font-semibold text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((expense) => (
            <ExpenseRow
              key={expense._id}
              expense={expense}
              onEdit={() => {
                if (!canEdit) return;
                if (onEdit) onEdit(expense);
              }}
              canEdit={canEdit}
              onDelete={() => {
                if (!canDelete) return;
                openDeleteModal(expense);
              }}
              canDelete={canDelete}
            />
          ))}
        </tbody>
      </table>
      </div>

      {data.length > 0 && (
        <div className="mt-auto flex flex-col items-stretch justify-between gap-3 border-t border-slate-200 bg-white/90 px-4 py-3 text-sm sm:flex-row sm:items-center">
          <p className="text-center text-slate-600 sm:text-left">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-slate-700 disabled:opacity-50 sm:w-auto"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-slate-700 disabled:opacity-50 sm:w-auto"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {deleteModalOpen && (
        <div className="fixed inset-0 z-[12000] flex items-start justify-center bg-black/40 p-4 pt-24 backdrop-blur-[1px]">
          <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-2xl text-center border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Delete Expense</h3>
            <p className="text-sm text-slate-700 mb-5">
              Are you sure you want to delete this expense?
            </p>
            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={confirmDelete}
                disabled={deleting}
                className="h-9 w-full rounded-lg bg-red-600 px-4 text-white hover:bg-red-700 disabled:opacity-60 sm:w-auto"
              >
                Yes
              </button>
              <button
                type="button"
                onClick={closeDeleteModal}
                disabled={deleting}
                className="h-9 w-full rounded-lg border border-slate-300 px-4 text-slate-700 hover:bg-slate-100 disabled:opacity-60 sm:w-auto"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpensesTable;
