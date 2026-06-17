"use client";

import React from "react";
import { formatDateDDMMYYYY } from "../../utils/formatting";

const getReturnedSaleQuantity = (product = {}) =>
  Math.max(
    Number(
      product?.returnedQuantity ??
        product?.returnedQty ??
        product?.returnQty ??
        product?.quantityReturned ??
        0
    ) || 0,
    0
  );

const getChargedSaleQuantity = (product = {}) =>
  Math.max(
    Number(product?.chargedQuantity ?? product?.quantity ?? product?.qty ?? 0) -
      getReturnedSaleQuantity(product),
    0
  );

const getDeductedSaleQuantity = (product = {}) =>
  Math.max(Number(product?.quantity ?? product?.qty ?? 0) - getReturnedSaleQuantity(product), 0);

const getInvoiceAmount = (quantity, unitPrice) =>
  Number((Math.max(Number(quantity) || 0, 0) * (Number(unitPrice) || 0)).toFixed(2));

const SalesRow = ({ sale, onInvoiceClick, isSelected = false, onToggleSelect }) => {
  const toNumber = (value) => {
    if (typeof value === "number") return value;
    const normalized = String(value || "").replace(/,/g, "");
    const match = normalized.match(/-?\d+(?:\.\d+)?/);
    return match ? Number(match[0]) : 0;
  };

  const date = new Date(sale.createdAt);
  const saleId = String(sale._id || sale.invoiceNumber || "");
  const invoiceLabel = sale.invoiceNumber || String(sale._id || "").slice(-6) || "-";
  const formattedDate = Number.isNaN(date.getTime())
    ? "-"
    : formatDateDDMMYYYY(date);
  const formattedTime = Number.isNaN(date.getTime())
    ? "-"
    : date.toLocaleTimeString();
  const saleProducts = Array.isArray(sale?.products) ? sale.products : [];
  const lineCount = saleProducts.length;
  const soldQuantity = saleProducts.reduce(
    (sum, product) => sum + getChargedSaleQuantity(product),
    0
  );
  const invoiceTotal = saleProducts.reduce(
    (sum, product) =>
      sum +
      getInvoiceAmount(
        getChargedSaleQuantity(product),
        Number(product?.salePrice ?? product?.price ?? product?.retailSalePrice ?? 0)
      ),
    0
  );
  const discountAmount = toNumber(sale?.discount);
  const totalAmount = Math.max(invoiceTotal - discountAmount, 0);
  const paidAmount = toNumber(sale.paidAmount ?? sale.cashReceived);
  const totalPurchaseAmount = saleProducts.reduce(
    (sum, product) =>
      sum +
      Number(product?.purchasePrice ?? product?.cost ?? 0) * getDeductedSaleQuantity(product),
    0
  );
  const profitAmount = Number((totalAmount - totalPurchaseAmount).toFixed(2));
  const derivedPaymentStatus =
    totalAmount > 0 && paidAmount >= totalAmount ? "Paid" : "Pending";
  const displayPaymentStatus =
    derivedPaymentStatus === "Paid" ? "Paid" : sale.paymentStatus || "Pending";

  return (
    <tr className="border-b border-slate-100 text-sm transition hover:bg-sky-50/50">
      <td className="p-3">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggleSelect?.(saleId)}
          aria-label={`Select sale ${invoiceLabel || "record"}`}
          className="h-4 w-4 cursor-pointer rounded border-slate-300 text-sky-600 focus:ring-sky-500"
        />
      </td>

      {/* Invoice */}
      <td className="p-3 font-mono font-medium text-slate-800">
        <button
          type="button"
          onClick={() => onInvoiceClick?.(sale)}
          className="break-words text-left font-mono font-medium text-sky-700 underline-offset-2 hover:underline"
          title="View invoice details"
        >
          {invoiceLabel}
        </button>
      </td>

      {/* Date / Time */}
      <td className="p-3">
        <p className="font-medium">{formattedDate}</p>
        <p className="text-xs text-slate-500">{formattedTime}</p>
      </td>

      <td className="p-3 font-medium text-slate-900 break-words">{sale.customerName || "Walk-in"}</td>

      {/* Items */}
      <td className="p-3 text-slate-600">
        <div className="flex flex-col">
          <span>{soldQuantity} qty</span>
          <span className="text-xs text-slate-500">
            {lineCount} {lineCount === 1 ? "item" : "items"}
          </span>
        </div>
      </td>

      {/* Payment Status */}
      <td className="p-3">
        <span
          className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${
            displayPaymentStatus === "Paid"
              ? "bg-emerald-100 text-emerald-700 border-emerald-200"
              : "bg-amber-100 text-amber-700 border-amber-200"
          }`}
        >
          {displayPaymentStatus}
        </span>
      </td>

      {/* Amount */}
      <td className="p-3 font-bold text-slate-900">
        Rs {totalAmount.toFixed(2)}
      </td>

      {/* Profit */}
      <td className="p-3 font-bold">
        <span
          className={profitAmount >= 0 ? "text-emerald-600" : "text-red-600"}
          title={`Revenue: Rs ${(totalAmount - profitAmount).toFixed(2)}`}
        >
          Rs {profitAmount.toFixed(2)}
        </span>
      </td>

      {/* Status */}
      <td className="p-3">
        <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800">
          Completed
        </span>
      </td>
    </tr>
  );
};

export default SalesRow;
