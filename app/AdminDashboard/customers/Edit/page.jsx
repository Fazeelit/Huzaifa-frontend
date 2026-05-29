"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AlertCircle, CheckCircle, LoaderCircle, Save, User, X } from "lucide-react";
import { apiRequest } from "../../authservice/api";
import { hasPermission, readStoredAuth } from "../../authservice/auth";

const initialForm = {
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
};

export default function EditCustomerPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const customerId = useMemo(() => searchParams.get("id"), [searchParams]);

  const [customer, setCustomer] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [canEditCustomer, setCanEditCustomer] = useState(false);

  useEffect(() => {
    const { permissions } = readStoredAuth();
    setCanEditCustomer(hasPermission(permissions, "CUSTOMER_EDIT"));
  }, []);

  const validateCNIC = (cnic) => /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/.test(cnic);
  const validatePhone = (phone) => /^03\d{2}-\d{7}$/.test(phone);
  const validateEmail = (email) =>
    email === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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

  useEffect(() => {
    const fetchCustomer = async () => {
      if (!customerId) {
        setModalMessage("Customer id is missing.");
        setShowErrorModal(true);
        setIsLoading(false);
        return;
      }

      try {
        const res = await apiRequest(`/customers/${customerId}`, { method: "GET" });
        if (res?.success && res.customer) {
          setCustomer({
            ...initialForm,
            ...res.customer,
            mobile: res.customer.mobile || "",
            tags: Array.isArray(res.customer.tags) ? res.customer.tags : [],
          });
        } else {
          setModalMessage(res?.message || "Failed to load customer.");
          setShowErrorModal(true);
        }
      } catch (error) {
        console.error("Fetch Customer Error:", error);
        setModalMessage("Failed to load customer.");
        setShowErrorModal(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCustomer();
  }, [customerId]);

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canEditCustomer) {
      setModalMessage("You do not have permission to update customers.");
      setShowErrorModal(true);
      return;
    }
    if (!validateForm() || !customerId) return;

    setIsSubmitting(true);
    try {
      const payload = {
        name: customer.name,
        fatherName: customer.fatherName,
        cnic: customer.cnic,
        mobile: customer.mobile,
        email: customer.email,
        address: customer.address,
        gender: customer.gender,
        customerType: customer.customerType,
        status: customer.status,
        tags: customer.tags,
      };

      const res = await apiRequest(`/customers/${customerId}`, {
        method: "PUT",
        data: payload,
      });

      if (res?.success) {
        setModalMessage("Customer updated successfully. Redirecting...");
        setShowSuccessModal(true);
        setTimeout(() => router.push("/AdminDashboard/customers"), 1200);
      } else {
        setModalMessage(res?.message || "Failed to update customer.");
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error("Update Customer Error:", error);
      setModalMessage("Server error. Please try again.");
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setShowCancelModal(true);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),radial-gradient(circle_at_85%_20%,#dcfce7,transparent_30%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] dark:bg-[radial-gradient(circle_at_top_left,#0f172a,transparent_35%),radial-gradient(circle_at_85%_20%,#0b1324,transparent_30%),linear-gradient(to_bottom,#0b1220,#0f172a)] pt-16 px-3 flex items-center justify-center">
        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
          <LoaderCircle className="w-5 h-5 animate-spin" />
          Loading customer...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),radial-gradient(circle_at_85%_20%,#dcfce7,transparent_30%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] dark:bg-[radial-gradient(circle_at_top_left,#0f172a,transparent_35%),radial-gradient(circle_at_85%_20%,#0b1324,transparent_30%),linear-gradient(to_bottom,#0b1220,#0f172a)] pt-12 pb-6 px-3 sm:px-4 lg:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 dark:bg-gray-900/70 rounded-lg shadow-xl shadow-black/5 border border-white/70 dark:border-gray-700/60 overflow-hidden backdrop-blur">
          <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 p-4 sm:p-6">
            <h1 className="min-w-0 text-lg font-bold text-white sm:text-2xl">Edit Customer</h1>
            <button onClick={handleCancel} className="text-white hover:text-gray-200 transition">
              <X size={22} />
            </button>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="flex items-center gap-2 text-base font-bold text-gray-900 dark:text-white">
                <User className="h-5 w-5 shrink-0 text-emerald-500" />
                Personal Information
              </h2>

              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  name="name"
                  value={customer.name}
                  onChange={handleCustomerChange}
                  placeholder="Full Name"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition ${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-600"} bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white`}
                />
                {errors.name ? <p className="text-xs text-red-600">{errors.name}</p> : null}

                <input
                  type="text"
                  name="fatherName"
                  value={customer.fatherName}
                  onChange={handleCustomerChange}
                  placeholder="Father's Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition"
                />

                <input
                  type="text"
                  name="cnic"
                  value={customer.cnic}
                  onChange={(e) => setCustomer((prev) => ({ ...prev, cnic: formatCNIC(e.target.value) }))}
                  placeholder="CNIC (xxxxx-xxxxxxx-x)"
                  maxLength={15}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition ${errors.cnic ? "border-red-500" : "border-gray-300 dark:border-gray-600"} bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white`}
                />
                {errors.cnic ? <p className="text-xs text-red-600">{errors.cnic}</p> : null}

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
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition ${errors.mobile ? "border-red-500" : "border-gray-300 dark:border-gray-600"} bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white`}
                />
                {errors.mobile ? <p className="text-xs text-red-600">{errors.mobile}</p> : null}

                <input
                  type="email"
                  name="email"
                  value={customer.email}
                  onChange={handleCustomerChange}
                  placeholder="Email"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"} bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white`}
                />
                {errors.email ? <p className="text-xs text-red-600">{errors.email}</p> : null}

                <select
                  name="gender"
                  value={customer.gender}
                  onChange={handleCustomerChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                <select
                  name="customerType"
                  value={customer.customerType}
                  onChange={handleCustomerChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition"
                >
                  <option value="individual">Individual</option>
                  <option value="business">Business</option>
                  <option value="corporate">Corporate</option>
                </select>

                <select
                  name="status"
                  value={customer.status}
                  onChange={handleCustomerChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>

                <textarea
                  name="address"
                  value={customer.address}
                  onChange={handleCustomerChange}
                  placeholder="Address"
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border resize-none focus:ring-4 focus:ring-emerald-500/30 focus:border-emerald-500 transition ${errors.address ? "border-red-500" : "border-gray-300 dark:border-gray-600"} bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white`}
                />
                {errors.address ? <p className="text-xs text-red-600">{errors.address}</p> : null}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="w-full rounded-lg bg-red-600 px-6 py-3 text-white transition shadow-sm hover:bg-red-700 sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !canEditCustomer}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-7 py-3 font-bold text-white transition shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 disabled:opacity-70 sm:w-auto"
                >
                  <Save className="w-5 h-5" />
                  {isSubmitting ? "Updating..." : "Update Customer"}
                </button>
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
                onClick={() => router.push("/AdminDashboard/customers")}
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

