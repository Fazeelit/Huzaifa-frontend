"use client";

import { useEffect, useState } from "react";
import { Building, MapPin, Phone, Save, Settings, X } from "lucide-react";
import { apiRequest } from "../../authservice/api";

export default function EditSupplierModal({
  supplier,
  setShowEditModal,
  onSupplierUpdated,
  canEditSupplier = true,
}) {
  const [form, setForm] = useState(supplier || {});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const formatPhoneWithDash = (value) => {
    const digits = String(value || "").replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 4) return digits;
    return `${digits.slice(0, 4)}-${digits.slice(4)}`;
  };

  useEffect(() => {
    setForm({
      ...(supplier || {}),
      openingBalance: supplier?.openingBalance || "",
      creditLimit: supplier?.creditLimit || "",
      status: supplier?.status || "active",
      preferred: Boolean(supplier?.preferred),
      notes: supplier?.notes || "",
    });
  }, [supplier]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canEditSupplier) {
      alert("You do not have permission to edit suppliers.");
      return;
    }

    const { name, contactPerson, email, phone } = form;
    if (!name || !contactPerson || !email || !phone) {
      alert("Please fill required fields: Name, Contact Person, Email, and Phone");
      return;
    }

    if (!supplier?.id) return;

    try {
      setIsSubmitting(true);
      const response = await apiRequest(`/suppliers/${supplier.id}`, {
        method: "PUT",
        data: form,
      });

      if (response?.success && response?.supplier) {
        onSupplierUpdated?.(response.supplier);
        setShowSuccessModal(true);
        setTimeout(() => {
          setShowSuccessModal(false);
          setShowEditModal(false);
        }, 1200);
      }
    } catch (error) {
      console.error("Update Supplier Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-4">
        <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-gray-800">
        <div className="flex items-start justify-between gap-3 bg-blue-500 p-5 sm:p-8">
          <h1 className="break-words text-2xl font-bold text-white sm:text-3xl">Edit Supplier</h1>
          <button
            onClick={() => setShowEditModal(false)}
            className="text-white hover:text-gray-200 transition"
          >
            <X size={28} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
                <Building className="w-5 h-5" />
                Basic Information
              </h4>
              {[
                {
                  key: "name",
                  label: "Supplier Name *",
                  placeholder: "Enter supplier name",
                  type: "text",
                },
                {
                  key: "company",
                  label: "Company Name",
                  placeholder: "Enter company name",
                  type: "text",
                },
                {
                  key: "contactPerson",
                  label: "Contact Person *",
                  placeholder: "Enter contact person name",
                  type: "text",
                },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={form[field.key] || ""}
                    onChange={(e) => handleChange(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition"
                    required={field.label.includes("*")}
                  />
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Information
              </h4>
              {[
                {
                  key: "email",
                  label: "Email *",
                  type: "email",
                  placeholder: "example@gmail.com",
                  pattern: "^[a-zA-Z0-9._%+-]+@gmail\\.com$",
                  title: "Use a valid Gmail address (example@gmail.com).",
                },
                {
                  key: "phone",
                  label: "Phone *",
                  type: "tel",
                  placeholder: "0300-1234567",
                  pattern: "^\\d{4}-\\d{7}$",
                  title: "Use format 0300-1234567 (11 digits).",
                },
                {
                  key: "mobile",
                  label: "Mobile",
                  type: "tel",
                  placeholder: "0300-1234567",
                  pattern: "^\\d{4}-\\d{7}$",
                  title: "Use format 0300-1234567 (11 digits).",
                },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={form[field.key] || ""}
                    onChange={(e) =>
                      handleChange(
                        field.key,
                        field.key === "phone" || field.key === "mobile"
                          ? formatPhoneWithDash(e.target.value)
                          : e.target.value
                      )
                    }
                    placeholder={field.placeholder}
                    pattern={field.pattern}
                    title={field.title}
                    maxLength={field.type === "tel" ? 12 : undefined}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition"
                    required={field.label.includes("*")}
                  />
                </div>
              ))}
            </div>

            {/* Address Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Address Information
              </h4>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Address
                </label>
                <textarea
                  value={form.address || ""}
                  onChange={(e) => handleChange("address", e.target.value)}
                  placeholder="Enter complete address"
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition"
                />
              </div>
            </div>

            {/* Business Settings */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Business Settings
              </h4>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Opening Balance (Rs.)
                </label>
                <input
                  type="number"
                  value={form.openingBalance || ""}
                  onChange={(e) => handleChange("openingBalance", e.target.value)}
                  placeholder="0"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Credit Limit (Rs.)
                </label>
                <input
                  type="number"
                  value={form.creditLimit || ""}
                  onChange={(e) => handleChange("creditLimit", e.target.value)}
                  placeholder="50000"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Status
                </label>
              <select
                value={form.status || "active"}
                onChange={(e) => handleChange("status", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition"
              >
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="inactive">Inactive</option>
              </select>
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="edit-preferred"
                  checked={Boolean(form.preferred)}
                  onChange={(e) => handleChange("preferred", e.target.checked)}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="edit-preferred" className="text-sm font-medium leading-5 text-gray-700 dark:text-gray-300">
                  Mark as Preferred Supplier
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t dark:border-gray-700">
            <button
              type="button"
              onClick={() => setShowEditModal(false)}
              className="w-full sm:w-auto px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !canEditSupplier}
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" />
              {isSubmitting ? "Saving..." : "Update Supplier"}
            </button>
          </div>
        </form>
        </div>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-3 sm:p-4">
          <div className="w-full max-w-[350px] rounded-xl bg-white p-5 text-center shadow-2xl sm:p-6">
            <h3 className="mb-2 text-lg font-bold text-green-600 sm:text-xl">Success</h3>
            <p className="mb-4 text-gray-700">It shows “Supplier updated successfully.”</p>
            <button
              onClick={() => {
                setShowSuccessModal(false);
                setShowEditModal(false);
              }}
              className="w-full rounded bg-blue-600 px-4 py-2 text-white sm:w-auto"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
