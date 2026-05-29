"use client";

import { X, Wallet } from "lucide-react";

function AddPaymentModal({ 
  supplier, 
  newPayment, 
  setNewPayment, 
  handleAddPayment, 
  setShowPaymentModal, 
  paymentMethods 
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-4">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-gray-800">
        <div className="sticky top-0 flex items-start justify-between gap-3 rounded-t-2xl border-b bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <div className="min-w-0">
            <h3 className="break-words text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">
              Record Payment - {supplier.name}
            </h3>
            <p className="mt-1 break-words text-sm text-gray-500 dark:text-gray-400">
              {newPayment.billId 
                ? `Payment for Bill: ${newPayment.billId}`
                : "General Payment"
              }
            </p>
          </div>
          <button
            onClick={() => setShowPaymentModal(false)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <form onSubmit={handleAddPayment} className="space-y-6 p-4 sm:p-6">
          {/* Bill Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Select Bill (Optional)
            </label>
            <select
              value={newPayment.billId}
              onChange={(e) => {
                const billId = e.target.value;
                const bill = supplier.bills.find(b => b.id === billId);
                setNewPayment({
                  ...newPayment,
                  billId,
                  amount: bill ? bill.amount.replace(/[^0-9.-]+/g, "") : newPayment.amount
                });
              }}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition"
            >
              <option value="">Select a bill (Optional)</option>
              {supplier.bills.filter(bill => bill.status !== "paid").map((bill) => (
                <option key={bill.id} value={bill.id}>
                  {bill.id} - {bill.description.slice(0, 30)}... - {bill.amount}
                </option>
              ))}
            </select>
          </div>

          {/* Payment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Amount (Rs.) *", value: newPayment.amount, onChange: (e) => setNewPayment({...newPayment, amount: e.target.value}), placeholder: "Enter amount", type: "number" },
              { label: "Payment Date *", value: newPayment.date, onChange: (e) => setNewPayment({...newPayment, date: e.target.value}), type: "date" },
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
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition"
                  required={field.label.includes('*')}
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Payment Method *
            </label>
            <select
              value={newPayment.method}
              onChange={(e) => setNewPayment({...newPayment, method: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition"
            >
              {paymentMethods.map((method) => (
                <option key={method} value={method}>{method}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Reference Number
            </label>
            <input
              type="text"
              value={newPayment.reference}
              onChange={(e) => setNewPayment({...newPayment, reference: e.target.value})}
              placeholder="e.g., TRX-2024-001, Check #123"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Notes
            </label>
            <textarea
              value={newPayment.notes}
              onChange={(e) => setNewPayment({...newPayment, notes: e.target.value})}
              placeholder="Any notes about this payment..."
              rows="2"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t dark:border-gray-700">
            <button
              type="button"
              onClick={() => setShowPaymentModal(false)}
              className="w-full sm:w-auto px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-600 hover:to-green-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
            >
              <Wallet className="w-5 h-5" />
              Record Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default AddPaymentModal;

