"use client";

import React, { useState } from "react";
import { Edit, Trash2, Printer } from "lucide-react";
import { blockedButtonClass, blockedButtonProps } from "../../authservice/permissions";
import { formatDateDDMMYYYY } from "../../utils/formatting";

const PurchasesTable = ({
  loading,
  paginatedDisplayRecords,
  displayRecords,
  currentPage,
  totalPages,
  setCurrentPage,
  getQuantity,
  calculateGrandTotals,
  sortConfig,
  handleSort,
  handleEditPurchase,
  handleDeletePurchase,
  handlePrintInvoice,
  canEdit,
  canDelete,
  recordsPerPage = 10,
}) => {
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [detailsTarget, setDetailsTarget] = useState(null);
  const [paymentTarget, setPaymentTarget] = useState(null);

  const openDeleteModal = (purchase) => {
    if (!canDelete) return;
    setDeleteTarget(purchase);
  };

  const closeDeleteModal = () => setDeleteTarget(null);
  const closeDetailsModal = () => setDetailsTarget(null);
  const closePaymentModal = () => setPaymentTarget(null);

  const getSortIndicator = (key) => {
    if (sortConfig?.key !== key) return "";
    return sortConfig.direction === "asc" ? " ▲" : " ▼";
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    handleDeletePurchase(deleteTarget);
    closeDeleteModal();
  };

  if (loading) {
    return (
      <div className="rounded-2xl border border-white/70 bg-white/75 backdrop-blur-sm p-10 text-center text-sm text-slate-600 shadow-sm">
        Loading purchases...
      </div>
    );
  }

  return (
    <div className="relative rounded-2xl border border-white/70 bg-white/85 backdrop-blur-sm shadow-sm">
      <div className="w-full overflow-x-auto overflow-y-visible pb-2">
        <table className="w-full min-w-[980px] text-sm text-slate-700">
          <thead className="top-0 z-10 bg-gradient-to-r from-slate-700 to-slate-800 text-slate-100 text-xs uppercase tracking-wide">
            <tr>
              <th className="rounded-tl-xl px-2 py-2 text-left">#</th>
              <th className="px-2 py-2 text-left cursor-pointer select-none" onClick={() => handleSort?.("supplier")}>Supplier{getSortIndicator("supplier")}</th>
              <th className="px-2 py-2 text-left cursor-pointer select-none" onClick={() => handleSort?.("date")}>Date{getSortIndicator("date")}</th>
              <th className="px-2 py-2 text-left cursor-pointer select-none" onClick={() => handleSort?.("invoice")}>Invoice{getSortIndicator("invoice")}</th>
              <th className="px-2 py-2 text-left cursor-pointer select-none" onClick={() => handleSort?.("items")}>Items{getSortIndicator("items")}</th>
              <th className="px-2 py-2 text-left cursor-pointer select-none" onClick={() => handleSort?.("total")}>Total{getSortIndicator("total")}</th>
              <th className="px-2 py-2 text-left cursor-pointer select-none" onClick={() => handleSort?.("paid")}>Paid{getSortIndicator("paid")}</th>
              <th className="px-2 py-2 text-left cursor-pointer select-none" onClick={() => handleSort?.("balance")}>Balance{getSortIndicator("balance")}</th>
              <th className="px-2 py-2 text-left cursor-pointer select-none" onClick={() => handleSort?.("status")}>Status{getSortIndicator("status")}</th>
              <th className="rounded-tr-xl px-2 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedDisplayRecords.map((p, idx) => {
              const rowNumber = (currentPage - 1) * recordsPerPage + idx + 1;
              const isOddRow = rowNumber % 2 === 1;
              const rowToneClass = p.isPartial
                ? isOddRow
                  ? "bg-amber-100/70"
                  : "bg-amber-50/50"
                : isOddRow
                  ? "bg-slate-100/65"
                  : "bg-white";
              return (
                <tr
                  key={p._id + (p.isPartial ? `-partial-${p.partialId}` : "")}
                  className={`border-b border-slate-100 transition-colors hover:bg-slate-50/70 ${rowToneClass}`}
                >
                  <td className="px-1.5 py-1.5">{rowNumber}</td>
                  <td className="px-1.5 py-1.5 font-medium text-slate-800 break-words">{p.supplier}</td>
                  <td className="px-1.5 py-1.5">{formatDateDDMMYYYY(p.displayDate)}</td>
                  <td className="px-1.5 py-1.5 font-mono text-xs md:text-sm">
                    <button
                      type="button"
                      onClick={() => setDetailsTarget(p)}
                      className="text-sky-700 underline underline-offset-2 hover:text-sky-900"
                    >
                      {p.invoiceNumber}
                    </button>
                  </td>
                  <td className="px-1.5 py-1.5">{Array.isArray(p.products) ? p.products.length : 0}</td>
                  <td className="px-1.5 py-1.5 font-semibold text-slate-800">Rs.{p.totalAmount?.toFixed(2) || 0}</td>
                  <td className="px-1.5 py-1.5 text-emerald-700 font-semibold">
                    <button
                      type="button"
                      onClick={() => setPaymentTarget(p)}
                      className="underline underline-offset-2 hover:text-emerald-900"
                    >
                      Rs.{p.displayPaid?.toFixed(2) || 0}
                    </button>
                  </td>
                  <td className="px-1.5 py-1.5 text-rose-700 font-semibold">Rs.{p.displayBalance?.toFixed(2) || 0}</td>
                  <td className="px-1.5 py-1.5">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                        p.purchaseStatus === "Completed"
                          ? "bg-emerald-100 text-emerald-700"
                          : p.purchaseStatus === "Partial"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {p.purchaseStatus}
                    </span>
                  </td>
                  <td className="px-1.5 py-1.5">
                    <div className="flex items-center gap-1.5">
                      {!p.isPartial && p.purchaseStatus !== "Completed" ? (
                        <button
                          onClick={() => canEdit && handleEditPurchase(p)}
                          className={`h-8 w-8 inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 ${blockedButtonClass} blocked-action`}
                          {...blockedButtonProps(canEdit)}
                        >
                          <Edit size={14} />
                        </button>
                      ) : (
                        <span className="text-xs text-slate-400">-</span>
                      )}

                      {!p.isPartial ? (
                        <button
                          onClick={() => openDeleteModal(p)}
                          className={`h-8 w-8 inline-flex items-center justify-center rounded-lg border border-red-200 bg-white text-red-600 hover:bg-red-50 ${blockedButtonClass} blocked-action`}
                          {...blockedButtonProps(canDelete)}
                        >
                          <Trash2 size={14} />
                        </button>
                      ) : null}

                      <button
                        onClick={() => handlePrintInvoice(p)}
                        className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-blue-200 bg-white text-blue-700 hover:bg-blue-50"
                      >
                        <Printer size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}

            <tr className="bg-slate-100/90 font-bold text-slate-800">
              <td colSpan={6} className="px-2 py-2 text-right">
                Grand Total
              </td>
              <td className="px-2 py-2">Rs.{calculateGrandTotals(displayRecords).total.toFixed(2)}</td>
              <td className="px-2 py-2 text-emerald-700">Rs.{calculateGrandTotals(displayRecords).paid.toFixed(2)}</td>
              <td className="px-2 py-2 text-rose-700">Rs.{calculateGrandTotals(displayRecords).balance.toFixed(2)}</td>
              <td colSpan={1} className="px-2 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {displayRecords.length > 0 && (
        <div className="flex flex-col gap-3 border-t border-slate-200 px-4 py-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="text-slate-600">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex-1 rounded-lg border border-slate-300 px-3 py-1.5 text-slate-700 disabled:opacity-50 sm:flex-none"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex-1 rounded-lg border border-slate-300 px-3 py-1.5 text-slate-700 disabled:opacity-50 sm:flex-none"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 rounded-full bg-red-100 p-2 text-red-600">
                <Trash2 size={18} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Delete Purchase Invoice</h3>
                <p className="mt-1 text-sm text-slate-600">
                  Are your sure want to delete{" "}
                  <span className="font-semibold text-slate-900">
                    Invoice No. {deleteTarget.invoiceNumber}
                  </span>
                  ?
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={closeDeleteModal}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                No
              </button>
              <button
                type="button"
                onClick={confirmDelete}
                className="rounded-lg border border-red-200 bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}

      {detailsTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-5xl rounded-2xl bg-white p-4 shadow-xl sm:p-5">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-slate-900">
                  Invoice #{detailsTarget.invoiceNumber}
                </h3>
                <p className="text-sm text-slate-600">
                  Supplier: {detailsTarget.supplier} | Date:{" "}
                  {formatDateDDMMYYYY(detailsTarget.purchaseDate || detailsTarget.displayDate)}
                </p>
              </div>
              <button
                type="button"
                onClick={closeDetailsModal}
                className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
            </div>

            <div className="max-h-[60vh] overflow-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm text-slate-700">
                <thead className="bg-slate-800 text-xs uppercase tracking-wide text-slate-100">
                  <tr>
                    <th className="px-3 py-2 text-left">#</th>
                    <th className="px-3 py-2 text-left">Medicine Name</th>
                    <th className="px-3 py-2 text-left">Qty</th>
                    <th className="px-3 py-2 text-left">Price</th>
                    <th className="px-3 py-2 text-left">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {(detailsTarget.products || []).map((prod, index) => (
                    <tr key={`${detailsTarget._id}-prod-${index}`} className="border-t border-slate-100">
                      <td className="px-3 py-2">{index + 1}</td>
                      <td className="px-3 py-2">{prod.productName || prod.name || prod.title}</td>
                      <td className="px-3 py-2">{getQuantity(prod)}</td>
                      <td className="px-3 py-2">Rs.{Number(prod.price || 0).toFixed(2)}</td>
                      <td className="px-3 py-2">
                        Rs.{(getQuantity(prod) * Number(prod.price || 0)).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t border-slate-200 bg-slate-50 font-semibold">
                    <td colSpan={4} className="px-3 py-2 text-right">
                      Total
                    </td>
                    <td className="px-3 py-2">Rs.{Number(detailsTarget.totalAmount || 0).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {paymentTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-3xl rounded-2xl bg-white p-4 shadow-xl sm:p-5">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-slate-900">
                  Payment Transactions - Invoice #{paymentTarget.invoiceNumber}
                </h3>
                <p className="text-sm text-slate-600">
                  Supplier: {paymentTarget.supplier}
                </p>
              </div>
              <button
                type="button"
                onClick={closePaymentModal}
                className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
            </div>

            <div className="max-h-[55vh] overflow-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm text-slate-700">
                <thead className="bg-slate-800 text-xs uppercase tracking-wide text-slate-100">
                  <tr>
                    <th className="px-3 py-2 text-left">#</th>
                    <th className="px-3 py-2 text-left">Date</th>
                    <th className="px-3 py-2 text-left">Payment ID</th>
                    <th className="px-3 py-2 text-left">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {(paymentTarget.paymentHistory || []).length > 0 ? (
                    (paymentTarget.paymentHistory || []).map((h, index) => (
                      <tr key={`${paymentTarget._id}-payment-${index}`} className="border-t border-slate-100">
                        <td className="px-3 py-2">{index + 1}</td>
                        <td className="px-3 py-2">{formatDateDDMMYYYY(h.appliedAt)}</td>
                        <td className="px-3 py-2 font-mono text-xs">{String(h.paymentId || "-")}</td>
                        <td className="px-3 py-2 text-emerald-700 font-semibold">
                          Rs.{Number(h.appliedAmount || 0).toFixed(2)}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-3 py-8 text-center text-slate-500">
                        No payment transactions found for this invoice.
                      </td>
                    </tr>
                  )}
                  <tr className="border-t border-slate-200 bg-slate-50 font-semibold">
                    <td colSpan={3} className="px-3 py-2 text-right">
                      Total Paid
                    </td>
                    <td className="px-3 py-2 text-emerald-700">
                      Rs.{Number(paymentTarget.paidAmount || 0).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchasesTable;
