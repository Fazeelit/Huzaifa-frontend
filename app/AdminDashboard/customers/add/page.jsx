"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X, User, Save, AlertCircle, CheckCircle } from "lucide-react";
import { apiRequest } from "../../authservice/api";
import { hasPermission, readStoredAuth } from "../../authservice/auth";

export default function AddCustomer() {
  const router = useRouter();

  const [customer, setCustomer] = useState({
    name: "",
    fatherName: "",
    cnic: "",
    mobile: "",
    email: "",
    address: "",
    gender: "",
    customerType: "individual",
    status: "active",
    tags: [],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [canCreateCustomer, setCanCreateCustomer] = useState(false);

  useEffect(() => {
    const { permissions } = readStoredAuth();
    setCanCreateCustomer(hasPermission(permissions, "CUSTOMER_CREATE"));
  }, []);

  // -------- Validation Functions --------
  const validateCNIC = (cnic) => /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/.test(cnic);
  const validatePhone = (phone) => /^03\d{2}-\d{7}$/.test(phone);
  const validateEmail = (email) =>
    email === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const formatCNIC = (value) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 5) return numbers;
    if (numbers.length <= 12) return `${numbers.slice(0, 5)}-${numbers.slice(5)}`;
    return `${numbers.slice(0, 5)}-${numbers.slice(5, 12)}-${numbers.slice(12, 13)}`;
  };

  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, "").slice(0, 11);
    if (numbers.length <= 4) return numbers;
    return `${numbers.slice(0, 4)}-${numbers.slice(4)}`;
  };

  const validateForm = () => {
    const newErrors = {};
    if (!customer.name.trim()) newErrors.name = "Customer name is required";
    if (!customer.cnic.trim()) newErrors.cnic = "CNIC is required";
    else if (!validateCNIC(customer.cnic)) newErrors.cnic = "Invalid CNIC format (xxxxx-xxxxxxx-x)";
    if (!customer.mobile.trim()) newErrors.mobile = "Mobile number is required";
    else if (!validatePhone(customer.mobile)) newErrors.mobile = "Phone must be in format 0300-1234567";
    if (customer.email && !validateEmail(customer.email)) newErrors.email = "Invalid email format";
    if (!customer.address.trim()) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // -------- Submit Function --------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!canCreateCustomer) {
      setModalMessage("You do not have permission to create customers.");
      setShowErrorModal(true);
      return;
    }

    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors((prev) => {
      const next = { ...prev };
      delete next.submit;
      return next;
    });

    try {
      const payload = {
        ...customer,
        name: customer.name.trim(),
        fatherName: customer.fatherName.trim(),
        cnic: customer.cnic.trim(),
        mobile: customer.mobile.trim(),
        email: customer.email.trim(),
        address: customer.address.trim(),
      };

      const response = await apiRequest("/customers/createCustomer", {
        method: "POST",
        includeAuth: true,
        data: payload,
      });

      if (response?.success) {
        setModalMessage("Customer added successfully. Redirecting...");
        setShowSuccessModal(true);
        setTimeout(() => router.push("/AdminDashboard/customers"), 1200);
      } else {
        setModalMessage(response?.message || "Failed to save customer.");
        setShowErrorModal(true);
      }
    } catch (error) {
      setModalMessage(error?.message || "Failed to save customer.");
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setShowCancelModal(true);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),radial-gradient(circle_at_85%_20%,#dcfce7,transparent_30%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] dark:bg-[radial-gradient(circle_at_top_left,#0f172a,transparent_35%),radial-gradient(circle_at_85%_20%,#0b1324,transparent_30%),linear-gradient(to_bottom,#0b1220,#0f172a)] pt-12 pb-6 px-3 sm:px-4 lg:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 dark:bg-gray-900/70 rounded-lg shadow-xl shadow-black/5 border border-white/70 dark:border-gray-700/60 overflow-hidden backdrop-blur">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 p-4 sm:p-6">
            <h1 className="min-w-0 text-base font-bold text-white sm:text-xl">Add New Customer</h1>
            <button onClick={handleCancel} className="text-white hover:text-gray-200 transition">
              <X size={22} />
            </button>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Customer Info */}
              <div className="space-y-5">
                <div>
                  <h2 className="mb-4 flex items-center gap-3 text-base font-bold text-gray-900 dark:text-white sm:mb-5 sm:text-xl">
                    <User className="h-4 w-4 shrink-0 text-green-600 dark:text-green-400 sm:h-5 sm:w-5" />
                    Personal Information
                  </h2>

                  <div className="grid grid-cols-1 gap-4 sm:gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={customer.name}
                        onChange={handleCustomerChange}
                        placeholder="Enter customer full name"
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition text-xs sm:text-base ${
                          errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        } bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white`}
                        required
                      />
                      {errors.name && <p className="mt-2 text-xs text-red-600 dark:text-red-400">{errors.name}</p>}
                    </div>

                    {/* Father's Name */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Father&apos;s Name
                      </label>
                      <input
                        type="text"
                        name="fatherName"
                        value={customer.fatherName}
                        onChange={handleCustomerChange}
                        placeholder="Enter father's name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition text-xs sm:text-base"
                      />
                    </div>

                    {/* CNIC */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-3">
                        CNIC Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="cnic"
                        value={customer.cnic}
                        onChange={(e) => setCustomer((prev) => ({ ...prev, cnic: formatCNIC(e.target.value) }))}
                        placeholder="xxxxx-xxxxxxx-x"
                        maxLength={15}
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition text-xs sm:text-base ${
                          errors.cnic ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        } bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white`}
                        required
                      />
                      {errors.cnic && <p className="mt-2 text-xs text-red-600 dark:text-red-400">{errors.cnic}</p>}
                    </div>

                    {/* Mobile */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={customer.mobile}
                        onChange={(e) => setCustomer((prev) => ({ ...prev, mobile: formatPhone(e.target.value) }))}
                        placeholder="0300-1234567"
                        inputMode="numeric"
                        maxLength={12}
                        pattern="^03\\d{2}-\\d{7}$"
                        title="Use format 0300-1234567 (11 digits)."
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition text-xs sm:text-base ${
                          errors.mobile ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        } bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white`}
                        required
                      />
                      {errors.mobile && <p className="mt-2 text-xs text-red-600 dark:text-red-400">{errors.mobile}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={customer.email}
                        onChange={handleCustomerChange}
                        placeholder="customer@example.com"
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition text-xs sm:text-base ${
                          errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        } bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white`}
                      />
                      {errors.email && <p className="mt-2 text-xs text-red-600 dark:text-red-400">{errors.email}</p>}
                    </div>

                    {/* Gender */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Gender
                      </label>
                      <select
                        name="gender"
                        value={customer.gender}
                        onChange={handleCustomerChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition text-xs sm:text-base"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Customer Type */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Customer Type
                      </label>
                      <select
                        name="customerType"
                        value={customer.customerType}
                        onChange={handleCustomerChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition text-xs sm:text-base"
                      >
                        <option value="individual">Individual</option>
                        <option value="business">Business</option>
                        <option value="corporate">Corporate</option>
                      </select>
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-3">
                        Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="address"
                        value={customer.address}
                        onChange={handleCustomerChange}
                        placeholder="Enter complete address with city and area"
                        rows={4}
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition text-xs sm:text-base resize-none ${
                          errors.address ? "border-red-500" : "border-gray-300 dark:border-gray-600"
                        } bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white`}
                        required
                      />
                      {errors.address && <p className="mt-2 text-xs text-red-600 dark:text-red-400">{errors.address}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-5 mt-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <div className="text-xs text-gray-500 dark:text-gray-400 text-center sm:text-left">
                    * Required fields must be filled
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="px-6 py-3 rounded-lg border border-red-500/60 bg-red-600 text-white hover:bg-red-700 transition text-xs sm:text-base w-full sm:w-auto shadow-sm"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting || !canCreateCustomer}
                      className="px-7 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-70 text-white font-bold text-xs sm:text-base rounded-lg shadow-lg shadow-emerald-500/20 transition flex items-center justify-center gap-3 w-full sm:w-auto"
                    >
                      <Save className="w-4 h-4 sm:w-5 sm:h-5" />
                      {isSubmitting ? "Saving..." : "Save Customer"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-2xl dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300">
                <CheckCircle className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Success
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">{modalMessage}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showErrorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-2xl dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300">
                <AlertCircle className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Something went wrong
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">{modalMessage}</p>
              </div>
            </div>
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={() => setShowErrorModal(false)}
                className="rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showCancelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-2xl dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-300">
                <AlertCircle className="h-4 w-4" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  Unsaved changes
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300">
                  Are you sure? All unsaved changes will be lost.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowCancelModal(false)}
                className="rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => router.back()}
                className="rounded-lg bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



