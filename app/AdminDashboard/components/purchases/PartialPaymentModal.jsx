"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, AlertTriangle } from "lucide-react";
import { apiRequest } from "./../../authservice/api";

const PartialPaymentModal = ({ onClose, onUpdate }) => {
  const [purchases, setPurchases] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [selectedSupplier, setSelectedSupplier] = useState("");

  const [outstandingAmount, setOutstandingAmount] = useState(0);
  const [paidAmount, setPaidAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState("Pending");

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /* ================= Fetch Purchases ================= */
  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const res = await apiRequest("/purchases", { method: "GET" });
        const all = res?.data || [];

        setPurchases(all);

        // Get unique suppliers
        const uniqueSuppliers = Array.from(new Set(all.map((p) => p.supplier)));
        setSuppliers(uniqueSuppliers);
      } catch (err) {
        console.error("Fetch Purchases Error:", err);
        setErrorMessage("Failed to fetch purchases");
        setShowError(true);
      }
    };

    fetchPurchases();
  }, []);

  /* ================= Supplier Change ================= */
  const handleSupplierChange = (supplier) => {
    setSelectedSupplier(supplier);
    setPaidAmount("");
    setPaymentStatus("Pending");

    // Filter unpaid or partial purchases
    const supplierPurchases = purchases.filter(
      (p) => p.supplier === supplier && p.paymentStatus !== "Paid"
    );

    const outstanding = supplierPurchases.reduce(
      (sum, p) => sum + (Number(p.balance) || 0),
      0
    );

    setOutstandingAmount(outstanding);
    setBalance(outstanding);
  };

  /* ================= Auto Balance & Status (UI only) ================= */
  useEffect(() => {
    const pay = Number(paidAmount) || 0;
    const remaining = Math.max(outstandingAmount - pay, 0);
    setBalance(remaining);

    if (pay === 0) setPaymentStatus("Pending");
    else if (pay < outstandingAmount) setPaymentStatus("Partial");
    else setPaymentStatus("Paid");
  }, [paidAmount, outstandingAmount]);

  /* ================= Submit ================= */
  const handleSubmit = async () => {
    const payment = Number(paidAmount);

    if (!selectedSupplier || payment <= 0) {
      setErrorMessage("Please select a supplier and enter a valid amount");
      setShowError(true);
      return;
    }

    if (payment > outstandingAmount) {
      setErrorMessage("Paid amount cannot exceed outstanding balance");
      setShowError(true);
      return;
    }

    try {
      // Send numeric value only
      await apiRequest(`/purchases/supplierPayment/${encodeURIComponent(selectedSupplier)}`, {
        method: "PUT",
        data: { paidAmount: payment },
      });

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onUpdate?.();
        onClose();
      }, 1200);
    } catch (err) {
      console.error("Partial Payment Error:", err);
      setErrorMessage(err?.response?.data?.message || "Failed to update payment");
      setShowError(true);
    }
  };

  return (
    <>
      {/* ================= Success ================= */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl text-center">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-2" />
            <h2 className="font-bold text-green-700 text-lg">Success</h2>
            <p>Supplier payment applied successfully</p>
          </div>
        </div>
      )}

      {/* ================= Error ================= */}
      {showError && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl text-center">
            <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-2" />
            <h2 className="font-bold text-red-700 text-lg">Error</h2>
            <p>{errorMessage}</p>
            <button
              onClick={() => setShowError(false)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ================= Modal ================= */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Supplier Partial Payment</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Supplier</label>
              <select
                value={selectedSupplier}
                onChange={(e) => handleSupplierChange(e.target.value)}
                className="w-full h-9 px-3 border rounded-md text-sm"
              >
                <option value="">Select Supplier</option>
                {suppliers.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {selectedSupplier && (
              <>
                <div>
                  <label className="text-sm font-medium">Outstanding Amount</label>
                  <input
                    value={outstandingAmount}
                    readOnly
                    className="w-full h-9 px-3 border rounded-md bg-gray-100 text-sm"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Pay Now</label>
                  <input
                    type="number"
                    value={paidAmount}
                    onChange={(e) => setPaidAmount(e.target.value)}
                    className="w-full h-9 px-3 border rounded-md text-sm"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Remaining Balance</label>
                  <input
                    value={balance}
                    readOnly
                    className="w-full h-9 px-3 border rounded-md bg-gray-100 text-sm"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Payment Status</label>
                  <input
                    value={paymentStatus}
                    readOnly
                    className="w-full h-9 px-3 border rounded-md bg-gray-100 text-sm"
                  />
                </div>
              </>
            )}
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button onClick={onClose} className="px-4 py-2 border rounded-md">
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!selectedSupplier}
              className="px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50"
            >
              Update Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartialPaymentModal;
