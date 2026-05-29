"use client";

import React from "react";
import { Pen, Printer, RotateCcw, Trash2, X } from "lucide-react";
import { blockedButtonClass, blockedButtonProps } from "../../authservice/permissions";

const toNumber = (value) => {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
};

export default function InvoiceDetailsModal({
  sale,
  onClose,
  onPrint,
  onReturn,
  onUpdateStatuses,
  onDelete,
  canEdit = true,
  canDelete = true,
  isReturning = false,
  isSavingStatuses = false,
  isDeleting = false,
}) {
  const [selectedRows, setSelectedRows] = React.useState({});
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [statusDraft, setStatusDraft] = React.useState({});

  React.useEffect(() => {
    setSelectedRows({});
    setIsEditMode(false);
    setStatusDraft({});
  }, [sale?._id]);

  if (!sale) return null;

  const items = Array.isArray(sale.products) ? sale.products : [];
  const rows = items.map((item, index) => {
    const qty = toNumber(item.quantity ?? item.qty ?? 0);
    const returnedQty = toNumber(item.returnedQuantity ?? 0);
    const soldQty = Math.max(qty - returnedQty, 0);
    const returnableQty = soldQty;
    const salePrice = toNumber(item.salePrice ?? item.price ?? item.purchasePrice ?? item.cost ?? 0);
    const total = soldQty * salePrice;
    const status = returnedQty >= qty && qty > 0 ? "RETURNED" : "SOLD";
    return {
      sNo: index + 1,
      index,
      item: item.name || "-",
      qty,
      soldQty,
      returnedQty,
      returnableQty,
      price: salePrice,
      total,
      status,
    };
  });

  const invoiceTotal = rows.reduce((sum, row) => sum + row.total, 0);
  const discount = toNumber(sale.discount);
  const netTotal = Math.max(invoiceTotal - discount, 0);
  const paidAmount = toNumber(sale.paidAmount);
  const returnedAmount = toNumber(sale.returnedAmount);

  const selectedIndexes = Object.entries(selectedRows)
    .filter(([, checked]) => checked)
    .map(([rowIndex]) => Number(rowIndex))
    .filter(Number.isInteger);

  const hasReturnSelection = selectedIndexes.length > 0;

  const toggleRow = (rowIndex) => {
    setSelectedRows((prev) => ({
      ...prev,
      [rowIndex]: !prev[rowIndex],
    }));
  };

  const handleReturn = async () => {
    if (!hasReturnSelection || !onReturn || isReturning) return;
    await onReturn(sale, selectedIndexes);
    setSelectedRows({});
  };

  const setRowStatus = (rowIndex, nextStatus) => {
    setStatusDraft((prev) => ({
      ...prev,
      [rowIndex]: nextStatus,
    }));
  };

  const handleSaveStatuses = async () => {
    if (!onUpdateStatuses || isSavingStatuses) return;

    const updates = rows
      .map((row) => {
        const nextStatus = String(statusDraft[row.index] || row.status).toUpperCase();
        if (nextStatus === row.status) return null;
        return { index: row.index, status: nextStatus };
      })
      .filter(Boolean);

    if (!updates.length) {
      setIsEditMode(false);
      return;
    }

    await onUpdateStatuses(sale, updates);
    setIsEditMode(false);
    setStatusDraft({});
  };

  const handleDelete = async () => {
    if (!canDelete || !sale?._id || !onDelete || isDeleting) return;
    await onDelete(sale);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-3 sm:p-4">
      <div className="w-full max-w-4xl rounded-2xl border border-slate-200 bg-white shadow-2xl">
        <div className="flex items-start justify-between gap-3 rounded-t-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-700 px-4 py-4 text-white sm:px-5">
          <div className="min-w-0">
            <h3 className="text-lg font-bold">Invoice Details</h3>
            <p className="break-words text-sm text-slate-200">
              {sale.invoiceNumber || `INV-${String(sale._id || "").slice(-6)}`}
            </p>
          </div>
          <button
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20"
            aria-label="Close invoice details"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[70vh] overflow-auto p-4 sm:p-5">
          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[620px] text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-3 py-2 text-center">Return</th>
                  <th className="px-3 py-2 text-left">S.No</th>
                  <th className="px-3 py-2 text-left">Item</th>
                  <th className="px-3 py-2 text-right">Qty</th>
                  <th className="px-3 py-2 text-right">Returned</th>
                  <th className="px-3 py-2 text-left">Status</th>
                  <th className="px-3 py-2 text-right">Price</th>
                  <th className="px-3 py-2 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {rows.length ? (
                  rows.map((row) => (
                    <tr key={row.sNo} className="border-t border-slate-100">
                      <td className="px-3 py-2 text-center">
                        <input
                          type="checkbox"
                          checked={!!selectedRows[row.index]}
                          disabled={row.returnableQty <= 0 || isReturning || isEditMode}
                          onChange={() => toggleRow(row.index)}
                          className="h-4 w-4 cursor-pointer rounded border-slate-300 text-sky-600 focus:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </td>
                      <td className="px-3 py-2">{row.sNo}</td>
                      <td className="px-3 py-2 break-words">{row.item}</td>
                      <td className="px-3 py-2 text-right">{row.soldQty}</td>
                      <td className="px-3 py-2 text-right">
                        {row.returnedQty > 0 ? row.returnedQty : "-"}
                      </td>
                      <td className="px-3 py-2">
                        {isEditMode ? (
                          <select
                            value={statusDraft[row.index] || row.status}
                            onChange={(e) => setRowStatus(row.index, e.target.value)}
                            className="h-8 rounded-md border border-slate-300 bg-white px-2 text-xs font-semibold text-slate-700"
                          >
                            <option value="SOLD">Sold</option>
                            <option value="RETURNED">Returned</option>
                          </select>
                        ) : (
                          <span
                            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                              row.status === "RETURNED"
                                ? "bg-rose-100 text-rose-700"
                                : "bg-emerald-100 text-emerald-700"
                            }`}
                          >
                            {row.status === "RETURNED" ? "Returned" : "Sold"}
                          </span>
                        )}
                      </td>
                      <td className="px-3 py-2 text-right">Rs {row.price.toFixed(2)}</td>
                      <td className="px-3 py-2 text-right font-medium">Rs {row.total.toFixed(2)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="px-3 py-6 text-center text-slate-500">
                      No items available for this invoice.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-4 ml-auto w-full max-w-xs space-y-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Invoice Total</span>
              <span className="font-semibold text-slate-900">Rs {invoiceTotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Discount</span>
              <span className="font-semibold text-slate-900">Rs {discount.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between border-t border-slate-200 pt-2">
              <span className="font-semibold text-slate-700">Net Total</span>
              <span className="text-base font-bold text-sky-700">Rs {netTotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Paid Amount</span>
              <span className="font-semibold text-slate-900">Rs {paidAmount.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Returned Amount</span>
              <span className="font-semibold text-rose-700">Rs {returnedAmount.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-5 flex flex-col justify-end gap-3 border-t border-slate-200 pt-4 sm:flex-row">
            <button
              type="button"
              onClick={() => setIsEditMode((prev) => !prev)}
              disabled={isSavingStatuses || isDeleting || !canEdit}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto ${blockedButtonClass} blocked-action`}
              {...blockedButtonProps(canEdit)}
              title="Edit invoice line statuses"
            >
              <Pen size={16} />
              {isEditMode ? "Cancel Edit" : "Edit"}
            </button>

            {isEditMode && (
              <button
              type="button"
              onClick={handleSaveStatuses}
              disabled={isSavingStatuses || isDeleting || !canEdit}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto ${blockedButtonClass} blocked-action`}
              {...blockedButtonProps(canEdit)}
            >
                {isSavingStatuses ? "Saving..." : "Save Changes"}
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 sm:w-auto"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleReturn}
              disabled={!hasReturnSelection || !onReturn || isReturning || isEditMode}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 to-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              title="Return selected sold items"
            >
              <RotateCcw size={16} />
              {isReturning ? "Returning..." : `Return Selected (${selectedIndexes.length})`}
            </button>
            <button
              type="button"
              onClick={handleDelete}
              disabled={!canDelete || !onDelete || isDeleting || isSavingStatuses}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-600 to-red-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto ${blockedButtonClass} blocked-action`}
              {...blockedButtonProps(canDelete)}
              title="Delete this sale"
            >
              <Trash2 size={16} />
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
            <button
              type="button"
              onClick={() => onPrint?.(sale)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:brightness-105 sm:w-auto"
            >
              <Printer size={16} />
              Print Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
