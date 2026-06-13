"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Pencil, Plus, Save, ShoppingCart, Store, Trash2, Truck } from "lucide-react";
import { apiRequest } from "../../authservice/api";
import { usePermissions } from "../../authservice/usePermissions";
import { blockedButtonClass, blockedButtonProps } from "../../authservice/permissions";
import { formatDateDDMMYYYY } from "../../utils/formatting";
import {
  deleteOutdoorSupply,
  getOutdoorSupplies,
  getOutdoorSupplySalePayload,
  updateOutdoorSupply,
} from "../outdoorSupply/storage";

const formatCurrency = (value) =>
  `Rs. ${Number(value || 0).toLocaleString("en-PK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export default function OutdoorSupplyPage() {
  const { crud } = usePermissions();
  const { canCreate, canDelete } = crud("PURCHASE");
  const [supplies, setSupplies] = useState([]);
  const [processingId, setProcessingId] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const [deleteTarget, setDeleteTarget] = useState(null);

  const syncSupplies = () => setSupplies(getOutdoorSupplies());

  useEffect(() => {
    syncSupplies();
    window.addEventListener("storage", syncSupplies);
    return () => window.removeEventListener("storage", syncSupplies);
  }, []);

  const totals = useMemo(
    () =>
      supplies.reduce(
        (acc, supply) => {
          acc.totalBills += 1;
          acc.totalAmount += Number(supply?.totalBill || 0);
          acc.totalItems += Array.isArray(supply?.items) ? supply.items.length : 0;
          return acc;
        },
        { totalBills: 0, totalAmount: 0, totalItems: 0 }
      ),
    [supplies]
  );

  const handleCreateSale = async (supply) => {
    if (!supply?.id || supply?.createdSaleId) return;

    try {
      setProcessingId(supply.id);
      setMessage({ type: "", text: "" });
      const payload = getOutdoorSupplySalePayload(supply);
      if (!payload.products.length) {
        setMessage({
          type: "error",
          text: "This outdoor supply has no sale quantity left to create a sale.",
        });
        return;
      }
      const response = await apiRequest("/sales/createSale", {
        method: "POST",
        data: payload,
      });

      if (response?.success === false) {
        setMessage({
          type: "error",
          text: response?.message || "Failed to create sale for outdoor supply.",
        });
        return;
      }

      updateOutdoorSupply(supply.id, {
        createdSaleId: response?.data?._id || `local-${Date.now()}`,
        createdSaleInvoiceNo: payload.invoiceNo,
      });
      syncSupplies();
      setMessage({
        type: "success",
        text: `Sale created successfully for ${supply.supplierName || "Outdoor Supply"}.`,
      });
    } catch (error) {
      console.error("Failed to create outdoor supply sale:", error);
      setMessage({
        type: "error",
        text:
          error?.response?.data?.message ||
          error?.message ||
          "Failed to create sale for outdoor supply.",
      });
    } finally {
      setProcessingId("");
    }
  };

  const handleDeleteRequest = (supply) => {
    if (!canDelete || !supply?.id) return;
    setDeleteTarget(supply);
  };

  const closeDeleteModal = () => setDeleteTarget(null);

  const handleConfirmDelete = () => {
    if (!deleteTarget?.id) return;
    deleteOutdoorSupply(deleteTarget.id);
    syncSupplies();
    setMessage({
      type: "success",
      text: `Outdoor supply deleted successfully for ${deleteTarget.supplierName || "Outdoor Supply"}.`,
    });
    closeDeleteModal();
  };

  return (
    <>
      <div className="space-y-5 pb-6">
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-sky-50 via-white to-emerald-50 p-5 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-sky-700 shadow-sm">
              <Truck className="h-4 w-4" />
              Outdoor Supply
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Outdoor Supply Management</h2>
            <p className="mt-1 text-sm text-slate-600">
              Save supplier-wise outdoor supply bills and create final sales from the main page.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <Link
              href="/AdminDashboard/outdoor-supply/suppliers/new"
              className={`inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 ${blockedButtonClass}`}
              {...blockedButtonProps(canCreate)}
            >
              <Store className="h-4 w-4" />
              Add New Outdoor Supplier
            </Link>
            <Link
              href="/AdminDashboard/outdoor-supply/new"
              className={`inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 ${blockedButtonClass}`}
              {...blockedButtonProps(canCreate)}
            >
              <Plus className="h-4 w-4" />
              Add New Outdoor Supply
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Saved Bills</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{totals.totalBills}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Total Items</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{totals.totalItems}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Total Bill</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{formatCurrency(totals.totalAmount)}</p>
        </div>
      </section>

      {message.text ? (
        <div
          className={`rounded-2xl border px-4 py-3 text-sm ${
            message.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-rose-200 bg-rose-50 text-rose-700"
          }`}
        >
          {message.text}
        </div>
      ) : null}

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Outdoor Supply Table</h3>
            <p className="text-sm text-slate-500">Every saved outdoor supply bill appears here.</p>
          </div>
        </div>

        {supplies.length === 0 ? (
          <div className="px-5 py-14 text-center">
            <div className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
              <Save className="h-6 w-6" />
            </div>
            <p className="text-base font-semibold text-slate-900">No outdoor supply saved yet.</p>
            <p className="mt-1 text-sm text-slate-500">
              Add a supplier and save a bill to see the table here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr className="text-left text-slate-600">
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold">Supplier</th>
                  <th className="px-4 py-3 font-semibold">Route</th>
                  <th className="px-4 py-3 font-semibold">Invoice</th>
                  <th className="px-4 py-3 font-semibold">Items</th>
                  <th className="px-4 py-3 font-semibold">Total Bill</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {supplies.map((supply) => (
                  <tr key={supply.id} className="align-top">
                    <td className="px-4 py-3 text-slate-700">
                      {formatDateDDMMYYYY(supply.supplyDate || supply.createdAt)}
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-slate-900">{supply.supplierName || "-"}</p>
                    </td>
                    <td className="px-4 py-3 text-slate-700">{supply.routeName || "-"}</td>
                    <td className="px-4 py-3 text-slate-700">{supply.invoiceNumber || "-"}</td>
                    <td className="px-4 py-3 text-slate-700">
                      {Array.isArray(supply.items) ? supply.items.length : 0}
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {formatCurrency(supply.totalBill)}
                    </td>
                    <td className="px-4 py-3">
                      {supply.createdSaleId ? (
                        <span className="inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                          Sale Created
                        </span>
                      ) : (
                        <span className="inline-flex rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                          Saved
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/AdminDashboard/outdoor-supply/${supply.id}/edit`}
                          className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-3 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-50"
                        >
                          <Pencil className="h-4 w-4" />
                          Edit
                        </Link>
                        <button
                          type="button"
                          onClick={() => handleDeleteRequest(supply)}
                          className={`inline-flex items-center gap-2 rounded-xl border border-rose-200 bg-white px-3 py-2 text-xs font-semibold text-rose-600 transition hover:bg-rose-50 ${blockedButtonClass}`}
                          {...blockedButtonProps(canDelete)}
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete
                        </button>
                        <button
                          type="button"
                          onClick={() => handleCreateSale(supply)}
                          disabled={Boolean(supply.createdSaleId) || processingId === supply.id}
                          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                        >
                          <ShoppingCart className="h-4 w-4" />
                          {processingId === supply.id
                            ? "Creating..."
                            : supply.createdSaleId
                            ? "Sale Created"
                            : "Create Sale"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
      </div>

      {deleteTarget ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-4">
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">
            <h3 className="text-lg font-semibold text-slate-900">Delete Outdoor Supply</h3>
            <p className="mt-2 text-sm text-slate-600">Are you sure want to delete ?</p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={closeDeleteModal}
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                No
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="inline-flex items-center justify-center rounded-xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-700"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
