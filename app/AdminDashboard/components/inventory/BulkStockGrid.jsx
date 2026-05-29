"use client";

import React from "react";

const cellInputClass =
  "h-9 w-full rounded-lg border border-slate-200 bg-white px-2 text-xs text-slate-700 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100";

const readOnlyCellClass = "px-2 py-2 text-xs text-slate-700";

export default function BulkStockGrid({ rows = [], onCellChange }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[760px] text-left text-xs sm:min-w-[900px]">
        <thead className="bg-slate-900 text-white">
          <tr>
            <th className="px-2 py-2 font-semibold">Product Name</th>
            <th className="px-2 py-2 font-semibold">Company</th>
            <th className="px-2 py-2 font-semibold">Purchase Qty</th>
            <th className="px-2 py-2 font-semibold">Purchase Price</th>
            <th className="w-24 px-2 py-2 font-semibold">Retail Price</th>
            <th className="w-24 px-2 py-2 font-semibold">Whole Sale Price</th>
            <th className="px-2 py-2 font-semibold">Discount Allowed</th>
            <th className="px-2 py-2 font-semibold">Max Discount (%)</th>
            <th className="px-2 py-2 font-semibold">UOM</th>
            <th className="px-2 py-2 font-semibold">Stock Qty</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={10} className="px-3 py-8 text-center text-sm text-slate-500">
                No bill items loaded yet.
              </td>
            </tr>
          ) : (
            rows.map((row, idx) => (
              <tr key={row.rowId || `${row.name}-${idx}`} className="border-t border-slate-100">
                <td className={readOnlyCellClass}>{row.name || "-"}</td>
                <td className={readOnlyCellClass}>{row.company || "-"}</td>
                <td className={readOnlyCellClass}>{row.purchaseQty}</td>
                <td className={readOnlyCellClass}>{row.purchasePrice}</td>
                <td className="w-24 px-2 py-1">
                  <input
                    type="number"
                    min={0}
                    step="0.01"
                    value={row.retailSalePrice ?? ""}
                    onChange={(e) => onCellChange?.(idx, "retailSalePrice", e.target.value)}
                    className={`${cellInputClass} text-center`}
                  />
                </td>
                <td className="w-24 px-2 py-1">
                  <input
                    type="number"
                    min={0}
                    step="0.01"
                    value={row.wholeSalePrice ?? ""}
                    onChange={(e) => onCellChange?.(idx, "wholeSalePrice", e.target.value)}
                    className={`${cellInputClass} text-center`}
                  />
                </td>
                <td className="px-2 py-1">
                  <button
                    type="button"
                    onClick={() => onCellChange?.(idx, "discountAllowed", !Boolean(row.discountAllowed))}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                      row.discountAllowed ? "bg-emerald-500" : "bg-slate-300"
                    }`}
                    aria-pressed={Boolean(row.discountAllowed)}
                    aria-label="Toggle discount allowed"
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${
                        row.discountAllowed ? "translate-x-5" : "translate-x-1"
                      }`}
                    />
                  </button>
                </td>
                <td className="px-2 py-1">
                  <input
                    type="number"
                    min={0}
                    max={100}
                    step="0.01"
                    value={row.maxAllowedDiscount ?? 0}
                    onChange={(e) => onCellChange?.(idx, "maxAllowedDiscount", e.target.value)}
                    className={`${cellInputClass} ${row.discountAllowed ? "" : "cursor-not-allowed bg-slate-100 text-slate-400"}`}
                    disabled={!row.discountAllowed}
                  />
                </td>
                <td className={readOnlyCellClass}>{row.uom || "-"}</td>
                <td className={readOnlyCellClass}>{row.stockQty}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
