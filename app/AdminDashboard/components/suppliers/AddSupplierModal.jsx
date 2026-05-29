"use client";

import { useState } from "react";
import { Building, X, Phone, MapPin, Settings, Plus, CheckCircle } from "lucide-react";
import { apiRequest } from "../../authservice/api";

function AddSupplierModal({
  newSupplier,
  setNewSupplier,
  handleAddSupplier,
  setShowAddModal,
  canCreateSupplier = true,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const formatPhoneWithDash = (value) => {
    const digits = String(value || "").replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 4) return digits;
    return `${digits.slice(0, 4)}-${digits.slice(4)}`;
  };

  const handleCancel = () => {
    setShowAddModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canCreateSupplier) {
      alert("You do not have permission to create suppliers.");
      return;
    }

    const { name, contactPerson, email, phone } = newSupplier;
    if (!name || !contactPerson || !email || !phone) {
      alert("Please fill required fields: Name, Contact Person, Email, and Phone");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await apiRequest("/suppliers/createSupplier", {
        method: "POST",
        data: newSupplier,
      });

      if (response?.success && response?.supplier) {
        handleAddSupplier?.(response.supplier);
        setShowSuccessModal(true);
        setTimeout(() => {
          setShowSuccessModal(false);
          setShowAddModal(false);
        }, 1200);
      }
    } catch (error) {
      console.error("Create Supplier Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-4">
        <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/70 bg-white/90 shadow-2xl backdrop-blur dark:border-gray-700/60 dark:bg-gray-900/70">
          <div className="flex items-start justify-between gap-3 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 p-5 sm:p-8">
            <div className="min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">Add New Supplier</h1>
              <p className="text-sm text-white/90 mt-1">Create a supplier profile with contact and billing details.</p>
            </div>
            <button onClick={handleCancel} className="text-white hover:text-white/80 transition">
              <X size={28} />
            </button>
          </div>
        
        <form onSubmit={handleSubmit} className="p-4 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300">
                  <Building className="w-5 h-5" />
                </span>
                Basic Information
              </h4>
              
              {[
                { label: "Supplier Name *", value: newSupplier.name, onChange: (e) => setNewSupplier({...newSupplier, name: e.target.value}), placeholder: "Enter supplier name" },
                { label: "Company Name", value: newSupplier.company, onChange: (e) => setNewSupplier({...newSupplier, company: e.target.value}), placeholder: "Enter company name" },
                { label: "Contact Person *", value: newSupplier.contactPerson, onChange: (e) => setNewSupplier({...newSupplier, contactPerson: e.target.value}), placeholder: "Enter contact person name" },
                { label: "Tax ID", value: newSupplier.taxId, onChange: (e) => setNewSupplier({...newSupplier, taxId: e.target.value}), placeholder: "Enter tax identification number" },
              ].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border border-gray-300/80 dark:border-gray-600 rounded-2xl bg-white/90 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition"
                    required={field.label.includes('*')}
                  />
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                  <Phone className="w-5 h-5" />
                </span>
                Contact Information
              </h4>
              
              {[
                { key: "email", label: "Email *", value: newSupplier.email, onChange: (e) => setNewSupplier({...newSupplier, email: e.target.value}), placeholder: "example@gmail.com", type: "email", pattern: "^[a-zA-Z0-9._%+-]+@gmail\\.com$", title: "Use a valid Gmail address (example@gmail.com)." },
                { key: "phone", label: "Phone *", value: newSupplier.phone, onChange: (e) => setNewSupplier({...newSupplier, phone: formatPhoneWithDash(e.target.value)}), placeholder: "0300-1234567", type: "tel", pattern: "^\\d{4}-\\d{7}$", title: "Use format 0300-1234567 (11 digits)." },
                { key: "mobile", label: "Mobile", value: newSupplier.mobile, onChange: (e) => setNewSupplier({...newSupplier, mobile: formatPhoneWithDash(e.target.value)}), placeholder: "0300-1234567", type: "tel", pattern: "^\\d{4}-\\d{7}$", title: "Use format 0300-1234567 (11 digits)." },
                { key: "website", label: "Website", value: newSupplier.website, onChange: (e) => setNewSupplier({...newSupplier, website: e.target.value}), placeholder: "https://example.com", type: "url" },
              ].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={field.placeholder}
                    pattern={field.pattern}
                    title={field.title}
                    maxLength={field.type === "tel" ? 12 : undefined}
                    className="w-full px-4 py-3 border border-gray-300/80 dark:border-gray-600 rounded-2xl bg-white/90 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition"
                    required={field.label.includes('*')}
                  />
                </div>
              ))}
            </div>

            {/* Address Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300">
                  <MapPin className="w-5 h-5" />
                </span>
                Address Information
              </h4>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Address
                </label>
                <textarea
                  value={newSupplier.address}
                  onChange={(e) => setNewSupplier({...newSupplier, address: e.target.value})}
                  placeholder="Enter complete address"
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300/80 dark:border-gray-600 rounded-2xl bg-white/90 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition"
                />
              </div>
            </div>

            {/* Business Settings */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300">
                  <Settings className="w-5 h-5" />
                </span>
                Business Settings
              </h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Opening Balance (Rs.)
                </label>
                <input
                  type="number"
                  value={newSupplier.openingBalance || ""}
                  onChange={(e) =>
                    setNewSupplier({ ...newSupplier, openingBalance: e.target.value })
                  }
                  placeholder="0"
                  className="w-full px-4 py-3 border border-gray-300/80 dark:border-gray-600 rounded-2xl bg-white/90 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Credit Limit (Rs.)
                </label>
                <input
                  type="number"
                  value={newSupplier.creditLimit}
                  onChange={(e) => setNewSupplier({...newSupplier, creditLimit: e.target.value})}
                  placeholder="50000"
                  className="w-full px-4 py-3 border border-gray-300/80 dark:border-gray-600 rounded-2xl bg-white/90 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Status
                </label>
                <select
                  value={newSupplier.status}
                  onChange={(e) => setNewSupplier({...newSupplier, status: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300/80 dark:border-gray-600 rounded-2xl bg-white/90 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition"
                >
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="preferred"
                  checked={newSupplier.preferred}
                  onChange={(e) => setNewSupplier({...newSupplier, preferred: e.target.checked})}
                  className="w-5 h-5 text-emerald-600 rounded focus:ring-emerald-500"
                />
                <label htmlFor="preferred" className="text-sm font-medium leading-5 text-gray-700 dark:text-gray-300">
                  Mark as Preferred Supplier
                </label>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Additional Notes
            </label>
            <textarea
              value={newSupplier.notes}
              onChange={(e) => setNewSupplier({...newSupplier, notes: e.target.value})}
              placeholder="Any additional information about this supplier..."
              rows="2"
              className="w-full px-4 py-3 border border-gray-300/80 dark:border-gray-600 rounded-2xl bg-white/90 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition"
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t dark:border-gray-700">
            <button
              type="button"
              onClick={handleCancel}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-red-600 text-white font-semibold shadow-sm hover:bg-red-700 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !canCreateSupplier}
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-emerald-600 to-cyan-500 hover:from-emerald-600 hover:to-teal-500 text-white font-bold rounded-2xl shadow-lg shadow-emerald-500/20 hover:shadow-xl transition flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              {isSubmitting ? "Creating..." : "Create Supplier"}
            </button>
          </div>
        </form>
        </div>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-sm text-center shadow-2xl">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300">
              <CheckCircle className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Success</h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">Supplier added successfully.</p>
            <button
              onClick={() => {
                setShowSuccessModal(false);
                setShowAddModal(false);
              }}
              className="w-full rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 sm:w-auto"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}


export default AddSupplierModal;

