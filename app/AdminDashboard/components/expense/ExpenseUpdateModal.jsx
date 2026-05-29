"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";
import { apiRequest } from "./../../authservice/api";

const formatDateToDisplay = (value) => {
  if (typeof value === "string" && /^\d{2}\/\d{2}\/\d{4}$/.test(value)) return value;
  const date = value ? new Date(value) : null;
  if (!date || Number.isNaN(date.getTime())) return "";
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
};

const normalizeDateInput = (value) => {
  const digits = String(value || "").replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
};

const isValidDateDisplay = (value) => {
  const match = String(value || "").match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return false;
  const [, dd, mm, yyyy] = match;
  const day = Number(dd);
  const month = Number(mm);
  const year = Number(yyyy);
  const d = new Date(year, month - 1, day);
  return d.getFullYear() === year && d.getMonth() === month - 1 && d.getDate() === day;
};

const toIsoFromDisplay = (value) => {
  const match = String(value || "").match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return value;
  const [, dd, mm, yyyy] = match;
  return `${yyyy}-${mm}-${dd}`;
};

const ExpenseUpdateModal = ({ isOpen, onClose, onSave, editData }) => {
  const [form, setForm] = useState({
    date: "",
    category: "Other",
    description: "",
    vendor: "",
    paymentMethod: "Cash",
    paymentStatus: "Pending",
    amount: "",    
    referenceNumber: "",
    notes: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Populate form when editData changes
  useEffect(() => {
    if (editData) {
      setForm({
        date: formatDateToDisplay(editData.date),
        category: editData.category || "Other",
        description: editData.description || "",
        vendor: editData.vendor || "",
        paymentMethod: editData.paymentMethod || "Cash",
        paymentStatus: editData.paymentStatus || "Pending",
        amount: editData.amount ? String(editData.amount) : "",        
        referenceNumber: editData.referenceNumber || "",
        notes: editData.notes || "",
      });
    } else {
      setForm({
        date: "",
        category: "Other",
        description: "",
        vendor: "",
        paymentMethod: "Cash",
        paymentStatus: "Pending",
        amount: "",        
        referenceNumber: "",
        notes: "",
      });
    }
    setFormErrors({});
  }, [editData, isOpen]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFormErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const expenseId = editData?.id || editData?._id;
    if (!expenseId) {
      setErrorMessage("No expense selected for update.");
      setShowError(true);
      return;
    }

    // Validation: Only date and paymentStatus need validation
    const errors = {};
    if (!form.date) errors.date = "Date is required.";
    else if (!isValidDateDisplay(form.date)) errors.date = "Date must be dd/mm/yyyy.";
    if (!form.paymentStatus) errors.paymentStatus = "Payment Status is required.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const payload = {
      date: toIsoFromDisplay(form.date),
      paymentStatus: form.paymentStatus,
    };

    try {
      setLoading(true);

      const response = await apiRequest(`/expenses/updateExpense/${expenseId}`, {
        method: "PUT",
        data: payload,
      });

      if (response?.success) {
        setShowSuccess(true);
        onSave(response.data);
        setTimeout(() => {
          setShowSuccess(false);
          onClose();
        }, 1500);
      } else {
        throw new Error(response?.message || "Failed to update expense.");
      }
    } catch (error) {
      console.error("Expense update error:", error);
      setErrorMessage(
        error?.response?.data?.message || error.message || "Something went wrong while updating expense."
      );
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 p-3 sm:p-4">
          <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-2xl sm:p-6">
            <CheckCircle className="text-green-600 w-12 h-12 mx-auto mb-2" />
            <h2 className="text-lg font-bold text-green-700">Success</h2>
            <p className="text-gray-600">Expense updated successfully</p>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showError && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/40 p-3 sm:p-4">
          <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-2xl sm:p-6">
            <AlertTriangle className="text-red-600 w-12 h-12 mx-auto mb-2" />
            <h2 className="text-lg font-bold text-red-700">Error</h2>
            <p className="text-gray-600">{errorMessage}</p>
            <button
              onClick={() => setShowError(false)}
              className="mt-4 w-full rounded-md bg-red-600 px-4 py-2 text-white sm:w-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/55 p-3 backdrop-blur-sm sm:p-4">
        <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-slate-200 bg-white shadow-2xl">
          <div className="sticky top-0 flex items-start justify-between gap-3 rounded-t-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-red-700 p-4 text-white sm:p-6">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">Edit Expense</h2>
            <button
              onClick={onClose}
              className="h-9 w-9 rounded-lg border border-white/20 bg-white/10 hover:bg-white/20 transition-colors"
            >
              X
            </button>
          </div>

          <form className="space-y-6 bg-gradient-to-b from-slate-50 to-white p-4 sm:p-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["date", "Date *", "date"],
                ["category", "Category", "text"],
                ["amount", "Amount", "number"],
                ["paymentMethod", "Payment Method", "text"],
                ["paymentStatus", "Payment Status", "select"],
                ["vendor", "Vendor", "text"],
                ["referenceNumber", "Reference Number", "text"],                
                ["description", "Description", "textarea"],
                ["notes", "Notes", "textarea"],
              ].map(([key, label, type]) => (
                <div
                  key={key}
                  className={
                    key === "description" || key === "notes"
                      ? "md:col-span-2 space-y-2"
                      : "space-y-2"
                  }
                >
                  <label className="text-xs font-semibold uppercase tracking-wide text-slate-600">{label}</label>
                  {type === "textarea" ? (
                    <textarea
                      rows={key === "description" ? 3 : 2}
                      value={form[key]}
                      onChange={key === "date" || key === "paymentStatus" ? (e) => handleChange(key, e.target.value) : undefined}
                      disabled={!(key === "date" || key === "paymentStatus") || loading}
                      className="flex min-h-[60px] w-full rounded-xl border border-slate-300 bg-slate-100 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-200"
                    />
                  ) : type === "select" ? (
                    <select
                      value={form[key]}
                      onChange={key === "paymentStatus" ? (e) => handleChange(key, e.target.value) : undefined}
                      disabled={!(key === "paymentStatus") || loading}
                      className="flex h-10 w-full rounded-xl border border-slate-300 bg-slate-100 px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-200"
                    >
                      {key === "paymentStatus" &&
                        ["Pending", "Completed", "Failed"].map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                    </select>
                  ) : (
                    <input
                      type={key === "date" ? "text" : type}
                      value={form[key]}
                      onChange={
                        key === "date"
                          ? (e) => handleChange(key, normalizeDateInput(e.target.value))
                          : undefined
                      }
                      disabled={!(key === "date") || loading}
                      maxLength={key === "date" ? 10 : undefined}
                      placeholder={key === "date" ? "dd/mm/yyyy" : ""}
                      className="flex h-10 w-full rounded-xl border border-slate-300 bg-slate-100 px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-200"
                    />
                  )}
                  {formErrors[key] && <p className="text-xs text-red-600">{formErrors[key]}</p>}
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-end gap-3 border-t border-slate-200 pt-4 sm:flex-row">
              <button
                type="button"
                onClick={onClose}
                disabled={loading}
                className="h-10 w-full rounded-xl border border-slate-300 px-4 text-slate-700 hover:bg-slate-100 sm:w-auto"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`h-10 w-full rounded-xl px-4 text-white shadow-md sm:w-auto ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                }`}
              >
                Update Expense
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ExpenseUpdateModal;
