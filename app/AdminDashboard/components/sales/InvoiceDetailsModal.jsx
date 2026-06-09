"use client";

import React from "react";
import { Pen, Printer, RotateCcw, X } from "lucide-react";
import { blockedButtonClass, blockedButtonProps } from "../../authservice/permissions";

const toNumber = (value) => {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
};

const getReturnedSaleQuantity = (item = {}) =>
  Math.max(
    toNumber(
      item.returnedQuantity ??
        item.returnedQty ??
        item.returnQty ??
        item.quantityReturned ??
        0
    ),
    0
  );

const getStatusLabel = (status) => {
  const normalizedStatus = String(status || "SOLD").toUpperCase();

  if (normalizedStatus === "RETURNED") return "Returned";
  if (normalizedStatus === "CLAIM") return "Claim";
  return "Sold";
};

const getStatusBadgeClass = (status) => {
  const normalizedStatus = String(status || "SOLD").toUpperCase();

  if (normalizedStatus === "RETURNED") return "bg-rose-100 text-rose-700";
  if (normalizedStatus === "CLAIM") return "bg-amber-100 text-amber-700";
  return "bg-emerald-100 text-emerald-700";
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
  const [returnedDraft, setReturnedDraft] = React.useState({});
  const [savedStatusMap, setSavedStatusMap] = React.useState({});
  const [savedReturnedMap, setSavedReturnedMap] = React.useState({});

  React.useEffect(() => {
    setSelectedRows({});
    setIsEditMode(false);
    setStatusDraft({});
    setReturnedDraft({});
    setSavedStatusMap({});
    setSavedReturnedMap({});
  }, [sale?._id]);

  if (!sale) return null;

  const items = Array.isArray(sale.products) ? sale.products : [];
  const rows = items.map((item, index) => {
    const qty = toNumber(item.chargedQuantity ?? item.quantity ?? item.qty ?? 0);
    const baseReturnedQty = Number.isFinite(savedReturnedMap[index])
      ? savedReturnedMap[index]
      : getReturnedSaleQuantity(item);
    const draftReturnedQty = returnedDraft[index];
    const returnedQty = Number.isFinite(draftReturnedQty)
      ? Math.max(0, Math.min(draftReturnedQty, qty))
      : baseReturnedQty;
    const displaySoldQty = Math.max(qty - returnedQty, 0);
    const returnableQty = displaySoldQty;
    const salePrice = toNumber(item.salePrice ?? item.price ?? item.purchasePrice ?? item.cost ?? 0);
    const total = displaySoldQty * salePrice;
    const derivedStatus = returnedQty >= qty && qty > 0 ? "RETURNED" : "SOLD";
    const baseStatus = String(savedStatusMap[index] || item.status || derivedStatus).toUpperCase();
    const status = String(statusDraft[index] || baseStatus).toUpperCase();
    return {
      sNo: index + 1,
      index,
      item: item.name || "-",
      manufacturer:
        item.manufacturer ||
        item.company ||
        item.brand ||
        item.category ||
        "-",
      qty,
      soldQty: displaySoldQty,
      returnedQty,
      returnableQty,
      price: salePrice,
      total,
      baseStatus,
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
    const normalizedStatus = String(nextStatus || "SOLD").toUpperCase();
    setStatusDraft((prev) => ({
      ...prev,
      [rowIndex]: normalizedStatus,
    }));

    const row = rows.find((entry) => entry.index === rowIndex);
    if (!row) return;

    setReturnedDraft((prev) => ({
      ...prev,
      [rowIndex]: normalizedStatus === "RETURNED" ? row.qty : 0,
    }));
  };

  const setRowReturnedQty = (rowIndex, qty, nextValue) => {
    const normalized = String(nextValue ?? "").replace(/[^\d]/g, "");
    if (normalized === "") {
      setReturnedDraft((prev) => ({
        ...prev,
        [rowIndex]: "",
      }));
      setStatusDraft((prev) => ({
        ...prev,
        [rowIndex]: "SOLD",
      }));
      return;
    }

    const nextReturnedQty = Math.max(0, Math.min(Number(normalized), qty));
    setReturnedDraft((prev) => ({
      ...prev,
      [rowIndex]: nextReturnedQty,
    }));

    setStatusDraft((prev) => ({
      ...prev,
      [rowIndex]: nextReturnedQty > 0 ? "RETURNED" : "SOLD",
    }));
  };

  const handleSaveStatuses = async () => {
    if (!onUpdateStatuses || isSavingStatuses) return;

    const updates = rows
      .map((row) => {
        const normalizedOriginalReturnedQty = getReturnedSaleQuantity(items[row.index]);
        const draftReturnedQty = returnedDraft[row.index];
        const nextReturnedQty =
          draftReturnedQty === ""
            ? 0
            : Number.isFinite(draftReturnedQty)
              ? Math.max(0, Math.min(draftReturnedQty, row.qty))
              : normalizedOriginalReturnedQty;
        const nextStatus = String(
          statusDraft[row.index] ||
            (nextReturnedQty > 0 ? "RETURNED" : row.baseStatus)
        ).toUpperCase();
        const originalStatus = String(
          items[row.index]?.status ||
            (normalizedOriginalReturnedQty >= row.qty && row.qty > 0 ? "RETURNED" : "SOLD")
        ).toUpperCase();

        if (
          nextStatus === originalStatus &&
          nextReturnedQty === normalizedOriginalReturnedQty
        ) {
          return null;
        }

        return {
          index: row.index,
          itemIndex: row.index,
          lineIndex: row.index,
          productId: items[row.index]?.productId || items[row.index]?._id || null,
          itemId: items[row.index]?.productId || items[row.index]?._id || null,
          quantity: row.qty,
          chargedQuantity: toNumber(
            items[row.index]?.chargedQuantity ??
              items[row.index]?.quantity ??
              items[row.index]?.qty ??
              0
          ),
          status: nextStatus,
          returnedQuantity: nextReturnedQty,
          returnedQty: nextReturnedQty,
          returnQty: nextReturnedQty,
          quantityReturned: nextReturnedQty,
        };
      })
      .filter(Boolean);

    if (!updates.length) {
      setIsEditMode(false);
      return;
    }

    const nextSavedStatusMap = {};
    const nextSavedReturnedMap = {};
    updates.forEach((update) => {
      nextSavedStatusMap[update.index] = String(update.status || "SOLD").toUpperCase();
      nextSavedReturnedMap[update.index] = Number(update.returnedQuantity || 0);
    });

    setSavedStatusMap((prev) => ({ ...prev, ...nextSavedStatusMap }));
    setSavedReturnedMap((prev) => ({ ...prev, ...nextSavedReturnedMap }));

    await onUpdateStatuses(sale, updates);
    setIsEditMode(false);
    setStatusDraft({});
    setReturnedDraft({});
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
            <table className="w-full min-w-[760px] text-sm">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-2 py-2 text-center">Return</th>
                  <th className="px-2 py-2 text-left">S.No</th>
                  <th className="px-2 py-2 text-left">Item</th>
                  <th className="px-2 py-2 text-left">Manufactur</th>
                  <th className="px-2 py-2 text-right">Qty</th>
                  <th className="px-2 py-2 text-right">Returned</th>
                  <th className="px-2 py-2 text-left">Status</th>
                  <th className="px-2 py-2 text-right">Price</th>
                  <th className="px-2 py-2 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {rows.length ? (
                  rows.map((row) => (
                    <tr key={row.sNo} className="border-t border-slate-100">
                      <td className="px-2 py-2 text-center">
                        <input
                          type="checkbox"
                          checked={!!selectedRows[row.index]}
                          disabled={row.returnableQty <= 0 || isReturning || isEditMode}
                          onChange={() => toggleRow(row.index)}
                          className="h-4 w-4 cursor-pointer rounded border-slate-300 text-sky-600 focus:ring-sky-500 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </td>
                      <td className="px-2 py-2">{row.sNo}</td>
                      <td className="px-2 py-2 break-words">{row.item}</td>
                      <td className="px-2 py-2 break-words">{row.manufacturer}</td>
                      <td className="px-2 py-2 text-right">{row.soldQty}</td>
                      <td className="px-2 py-2 text-right">
                        {isEditMode ? (
                          <input
                            type="number"
                            min="0"
                            max={row.qty}
                            value={
                              returnedDraft[row.index] ??
                              (row.returnedQty > 0 ? row.returnedQty : "")
                            }
                            placeholder="0"
                            onChange={(e) =>
                              setRowReturnedQty(row.index, row.qty, e.target.value)
                            }
                            className="h-8 w-20 rounded-md border border-slate-300 bg-white px-2 text-right text-xs font-semibold text-slate-700 placeholder:text-slate-400"
                          />
                        ) : (
                          row.returnedQty
                        )}
                      </td>
                      <td className="px-2 py-2">
                        {isEditMode ? (
                          <select
                            value={statusDraft[row.index] || row.status}
                            onChange={(e) => setRowStatus(row.index, e.target.value)}
                            className="h-8 rounded-md border border-slate-300 bg-white px-2 text-xs font-semibold text-slate-700"
                          >
                            <option value="SOLD">Sold</option>
                            <option value="RETURNED">Returned</option>
                            <option value="CLAIM">Claim</option>
                          </select>
                        ) : (
                          <span
                            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusBadgeClass(row.status)}`}
                          >
                            {getStatusLabel(row.status)}
                          </span>
                        )}
                      </td>
                      <td className="px-2 py-2 text-right">Rs {row.price.toFixed(2)}</td>
                      <td className="px-2 py-2 text-right font-medium">Rs {row.total.toFixed(2)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="px-2 py-6 text-center text-slate-500">
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
              onClick={() => {
                setIsEditMode((prev) => {
                  const next = !prev;
                  if (!next) {
                    setStatusDraft({});
                    setReturnedDraft({});
                  }
                  return next;
                });
              }}
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
