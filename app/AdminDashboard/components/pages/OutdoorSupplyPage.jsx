"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Pencil, Plus, Save, Store, Trash2, Truck } from "lucide-react";
import { apiRequest } from "../../authservice/api";
import { usePermissions } from "../../authservice/usePermissions";
import { blockedButtonClass, blockedButtonProps } from "../../authservice/permissions";
import { formatDateDDMMYYYY } from "../../utils/formatting";
import {
  deleteOutdoorSupply,
  getOutdoorSuppliers,
  getOutdoorSupplies,
} from "../outdoorSupply/storage";

const formatCurrency = (value) =>
  `Rs. ${Number(value || 0).toLocaleString("en-PK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const getArray = (response) =>
  Array.isArray(response?.data)
    ? response.data
    : Array.isArray(response?.data?.data)
    ? response.data.data
    : Array.isArray(response)
    ? response
    : [];

const getSaleTotal = (sale) =>
  Number(sale?.totalAmount ?? sale?.total ?? sale?.grandTotal ?? sale?.subtotal ?? 0) || 0;

export default function OutdoorSupplyPage() {
  const { crud } = usePermissions();
  const { canCreate, canEdit, canDelete } = crud("PURCHASE");
  const [suppliers, setSuppliers] = useState([]);
  const [supplies, setSupplies] = useState([]);
  const [sales, setSales] = useState([]);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [deleteTarget, setDeleteTarget] = useState(null);

  const syncData = () => {
    setSuppliers(getOutdoorSuppliers());
    setSupplies(getOutdoorSupplies());
  };

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await apiRequest("/sales", {
          method: "GET",
          suppressErrorToast: true,
        });
        setSales(getArray(response));
      } catch (error) {
        console.error("Failed to fetch sales for outdoor supply page:", error);
        setSales([]);
      }
    };

    syncData();
    fetchSales();
    window.addEventListener("storage", syncData);
    return () => window.removeEventListener("storage", syncData);
  }, []);

  const resolvedSupplies = useMemo(() => {
    const salesByKey = new Map();

    sales.forEach((sale) => {
      [sale?._id, sale?.invoiceNo, sale?.invoiceNumber]
        .map((value) => String(value || "").trim())
        .filter(Boolean)
        .forEach((key) => {
          salesByKey.set(key, sale);
        });
    });

    return supplies.map((supply) => {
      const linkedSale =
        [
          supply?.createdSaleId,
          supply?.createdSaleInvoiceNo,
          supply?.invoiceNumber,
        ]
          .map((value) => salesByKey.get(String(value || "").trim()))
          .find(Boolean) || null;

      const resolvedTotalBill =
        Number(supply?.totalBill || 0) > 0
          ? Number(supply?.totalBill || 0)
          : getSaleTotal(linkedSale);

      return {
        ...supply,
        resolvedTotalBill,
      };
    });
  }, [sales, supplies]);

  const totals = useMemo(
    () =>
      resolvedSupplies.reduce(
        (acc, supply) => {
          acc.totalBills += 1;
          acc.totalAmount += Number(supply?.resolvedTotalBill || 0);
          acc.totalItems += Array.isArray(supply?.items) ? supply.items.length : 0;
          return acc;
        },
        { totalBills: 0, totalAmount: 0, totalItems: 0 }
      ),
    [resolvedSupplies]
  );

  const handleDeleteRequest = (supply) => {
    if (!canDelete || !supply?.id) return;
    setDeleteTarget(supply);
  };

  const closeDeleteModal = () => setDeleteTarget(null);

  const handleConfirmDelete = () => {
    if (!deleteTarget?.id) return;
    deleteOutdoorSupply(deleteTarget.id);
    syncData();
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
            <h3 className="text-lg font-semibold text-slate-900">Outdoor Supplier Table</h3>
            <p className="text-sm text-slate-500">Saved outdoor supplier records appear here.</p>
          </div>
        </div>

        {suppliers.length === 0 ? (
          <div className="px-5 py-10 text-center">
            <div className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
              <Store className="h-6 w-6" />
            </div>
            <p className="text-base font-semibold text-slate-900">No outdoor supplier saved yet.</p>
            <p className="mt-1 text-sm text-slate-500">
              Add a supplier to keep their route, gari number and payment record here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr className="text-left text-slate-600">
                  <th className="px-4 py-3 font-semibold">Supplier</th>
                  <th className="px-4 py-3 font-semibold">Phone No.</th>
                  <th className="px-4 py-3 font-semibold">Gari No.</th>
                  <th className="px-4 py-3 font-semibold">Route</th>
                  <th className="px-4 py-3 font-semibold">Monthly Pay</th>
                  <th className="px-4 py-3 font-semibold">Commission</th>
                  <th className="px-4 py-3 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {suppliers.map((supplier) => (
                  <tr key={supplier.id} className="align-top">
                    <td className="px-4 py-3">
                      <p className="font-semibold text-slate-900">{supplier.supplierName || "-"}</p>
                      {supplier.address ? (
                        <p className="mt-1 text-xs text-slate-500">{supplier.address}</p>
                      ) : null}
                    </td>
                    <td className="px-4 py-3 text-slate-700">{supplier.phoneNo || "-"}</td>
                    <td className="px-4 py-3 text-slate-700">{supplier.gariNo || "-"}</td>
                    <td className="px-4 py-3 text-slate-700">{supplier.routeName || "-"}</td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {formatCurrency(supplier.monthlyPay)}
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-900">
                      {formatCurrency(supplier.commission)}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end">
                        <Link
                          href={canEdit ? `/AdminDashboard/outdoor-supply/suppliers/new?id=${supplier.id}` : "#"}
                          aria-disabled={!canEdit}
                          onClick={(event) => {
                            if (!canEdit) event.preventDefault();
                          }}
                          className={`inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-3 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-50 ${blockedButtonClass}`}
                          {...blockedButtonProps(canEdit)}
                        >
                          <Pencil className="h-4 w-4" />
                          Edit
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">Outdoor Supply Table</h3>
            <p className="text-sm text-slate-500">Every saved outdoor supply bill appears here.</p>
          </div>
        </div>

        {resolvedSupplies.length === 0 ? (
          <div className="px-5 py-14 text-center">
            <div className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
              <Save className="h-6 w-6" />
            </div>
            <p className="text-base font-semibold text-slate-900">No outdoor supply saved yet.</p>
            <p className="mt-1 text-sm text-slate-500">
              {suppliers.length
                ? "Supplier records are loaded above. Save an outdoor supply bill to see it here."
                : "Add a supplier and save a bill to see the table here."}
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
                {resolvedSupplies.map((supply) => (
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
                      {formatCurrency(supply.resolvedTotalBill)}
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
