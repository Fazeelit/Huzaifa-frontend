"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft, CheckCircle, LoaderCircle, Save, Store, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { apiRequest } from "../../authservice/api";
import { usePermissions } from "../../authservice/usePermissions";
import { blockedButtonClass, blockedButtonProps } from "../../authservice/permissions";
import { formatPhoneInput } from "../../utils/formatting";

const emptyForm = {
  supplierName: "",
  phoneNo: "",
  gariNo: "",
  routeName: "",
  monthlyPay: "",
  commission: "",
  address: "",
  notes: "",
};

export default function NewOutdoorSupplierPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { crud } = usePermissions();
  const { canCreate, canEdit } = crud("PURCHASE");
  const supplierId = searchParams.get("id");
  const initialSupplier = useMemo(() => null, []);
  const isEditMode = Boolean(initialSupplier?.id);
  const canSubmit = supplierId ? canEdit : canCreate;
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(Boolean(supplierId));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [editingSupplier, setEditingSupplier] = useState(null);

  useEffect(() => {
    const loadSupplier = async () => {
      if (!supplierId) return;

      try {
        setIsLoading(true);
        const response = await apiRequest(`/outdoor-supply-management/suppliers/${supplierId}`, {
          method: "GET",
          suppressErrorToast: true,
        });
        const supplier = response?.data || response;
        setEditingSupplier(supplier);
        setForm({
          supplierName: supplier?.supplierName || "",
          phoneNo: supplier?.phoneNo || "",
          gariNo: supplier?.gariNo || "",
          routeName: supplier?.routeName || "",
          monthlyPay: String(supplier?.monthlyPay ?? ""),
          commission: String(supplier?.commission ?? ""),
          address: supplier?.address || "",
          notes: supplier?.notes || "",
        });
      } catch (error) {
        const nextMessage =
          error?.response?.data?.message ||
          error?.message ||
          "Failed to load outdoor supplier.";
        setModalMessage(nextMessage);
        setShowErrorModal(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadSupplier();
  }, [supplierId]);

  const setField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.supplierName.trim()) nextErrors.supplierName = "Supplier name is required.";
    if (!form.phoneNo.trim()) nextErrors.phoneNo = "Phone number is required.";
    if (!form.gariNo.trim()) nextErrors.gariNo = "Gari No. is required.";
    if (!form.routeName.trim()) nextErrors.routeName = "Route name is required.";
    if (!Number(form.monthlyPay || 0)) nextErrors.monthlyPay = "Monthly pay is required.";
    if (!Number(form.commission || 0)) nextErrors.commission = "Commission is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    const payload = {
      ...form,
      monthlyPay: Number(form.monthlyPay || 0),
      commission: Number(form.commission || 0),
    };

    try {
      setIsSubmitting(true);
      setShowErrorModal(false);
      setShowSuccessModal(false);
      setModalMessage("");

      if (supplierId) {
        await apiRequest(`/outdoor-supply-management/updateOutdoorSupplier/${supplierId}`, {
          method: "PUT",
          data: payload,
        });
      } else {
        await apiRequest("/outdoor-supply-management/createOutdoorSupplier", {
          method: "POST",
          data: payload,
        });
      }

      const successMessage = supplierId
        ? "Outdoor supplier updated successfully."
        : "Outdoor supplier saved successfully.";

      setMessage(successMessage);
      setModalMessage(successMessage);
      setShowSuccessModal(true);
    } catch (error) {
      const nextMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to save outdoor supplier.";
      setModalMessage(nextMessage);
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    const nextPath = supplierId
      ? "/AdminDashboard/outdoor-supply"
      : `/AdminDashboard/outdoor-supply?success=1&message=${encodeURIComponent(modalMessage)}`;
    router.push(nextPath);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[420px] items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-3 text-slate-600">
          <LoaderCircle className="h-5 w-5 animate-spin" />
          Loading outdoor supplier...
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl space-y-5 pb-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <Link
            href="/AdminDashboard/outdoor-supply"
            className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Outdoor Supply
          </Link>
          <h2 className="text-2xl font-bold text-slate-900">
            {supplierId ? "Edit Outdoor Supplier" : "New Outdoor Supplier"}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {supplierId
              ? "Update supplier details like phone number, gari number, route and payment information."
              : "Add supplier details like phone number, gari number, route and payment information."}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Supplier Name *</label>
            <input
              value={form.supplierName}
              onChange={(e) => setField("supplierName", e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none transition focus:border-blue-500"
              placeholder="Enter supplier name"
            />
            {errors.supplierName ? <p className="text-xs text-rose-600">{errors.supplierName}</p> : null}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Phone No. *</label>
            <input
              value={form.phoneNo}
              onChange={(e) => setField("phoneNo", formatPhoneInput(e.target.value))}
              className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none transition focus:border-blue-500"
              placeholder="03xx-xxxxxxx"
            />
            {errors.phoneNo ? <p className="text-xs text-rose-600">{errors.phoneNo}</p> : null}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Gari No. *</label>
            <input
              value={form.gariNo}
              onChange={(e) => setField("gariNo", e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none transition focus:border-blue-500"
              placeholder="Enter gari number"
            />
            {errors.gariNo ? <p className="text-xs text-rose-600">{errors.gariNo}</p> : null}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Route Name *</label>
            <input
              value={form.routeName}
              onChange={(e) => setField("routeName", e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none transition focus:border-blue-500"
              placeholder="Enter route name"
            />
            {errors.routeName ? <p className="text-xs text-rose-600">{errors.routeName}</p> : null}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Monthly Pay *</label>
            <input
              type="number"
              min="0"
              value={form.monthlyPay}
              onChange={(e) => setField("monthlyPay", e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none transition focus:border-blue-500"
              placeholder="Enter monthly pay"
            />
            {errors.monthlyPay ? <p className="text-xs text-rose-600">{errors.monthlyPay}</p> : null}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Commission *</label>
            <input
              type="number"
              min="0"
              value={form.commission}
              onChange={(e) => setField("commission", e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none transition focus:border-blue-500"
              placeholder="Enter commission"
            />
            {errors.commission ? <p className="text-xs text-rose-600">{errors.commission}</p> : null}
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-slate-700">Address</label>
            <input
              value={form.address}
              onChange={(e) => setField("address", e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none transition focus:border-blue-500"
              placeholder="Enter address"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-slate-700">Notes</label>
            <textarea
              value={form.notes}
              onChange={(e) => setField("notes", e.target.value)}
              className="min-h-28 w-full rounded-xl border border-slate-200 px-3 py-3 text-sm outline-none transition focus:border-blue-500"
              placeholder="Add extra supplier details"
            />
          </div>
        </div>

        {message ? (
          <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            {message}
          </div>
        ) : null}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Link
            href="/AdminDashboard/outdoor-supply"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 ${blockedButtonClass}`}
            {...blockedButtonProps(canSubmit)}
          >
            <Store className="h-4 w-4" />
            <Save className="h-4 w-4" />
            {isSubmitting
              ? (supplierId ? "Updating..." : "Saving...")
              : (supplierId ? "Update Outdoor Supplier" : "Save Outdoor Supplier")}
          </button>
        </div>
      </form>
      {showSuccessModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-slate-900">Success</h3>
                <p className="mt-1 text-sm text-slate-600">{modalMessage}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={handleSuccessClose}
                className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {showErrorModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                <AlertCircle className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">Something went wrong</h3>
                    <p className="mt-1 text-sm text-slate-600">{modalMessage}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowErrorModal(false)}
                    className="text-slate-400 transition hover:text-slate-600"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setShowErrorModal(false)}
                className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
