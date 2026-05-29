"use client";

import { X, FilePen, PrinterIcon, EyeIcon, Wallet, Printer, File } from "lucide-react";

function BillManagementModal({ 
  supplier, 
  newBill, 
  setNewBill, 
  handleAddBill, 
  setShowBillModal, 
  handleAddNewPayment, 
  handlePrintAction, 
  handlePrintPreview,
  getStatusBadge, 
  formatDate 
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-4">
      <div className="max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-gray-800">
        <div className="sticky top-0 flex items-start justify-between gap-3 rounded-t-2xl border-b bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <div className="min-w-0">
            <h3 className="break-words text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">
              Bill Management - {supplier.name}
            </h3>
            <p className="mt-1 break-words text-sm text-gray-500 dark:text-gray-400">
              Total Bills: {supplier.statistics.totalBills} | 
              Paid: {supplier.statistics.paidAmount} | Pending: {supplier.statistics.pendingAmount}
            </p>
          </div>
          <button
            onClick={() => setShowBillModal(false)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="p-4 sm:p-6">
          {/* Add New Bill Form */}
          <div className="mb-8 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-xl p-6">
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Add New Laptop Bill
            </h4>
            <form onSubmit={handleAddBill} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Particulars *", value: newBill.description, onChange: (e) => setNewBill({...newBill, description: e.target.value}), placeholder: "e.g., MacBook Pro M3 (10 units)" },
                { label: "Debit (Rs.) *", value: newBill.amount, onChange: (e) => setNewBill({...newBill, amount: e.target.value}), placeholder: "Enter amount", type: "number" },
                { label: "Bill Date *", value: newBill.date, onChange: (e) => setNewBill({...newBill, date: e.target.value}), type: "date" },
                { label: "Due Date", value: newBill.dueDate, onChange: (e) => setNewBill({...newBill, dueDate: e.target.value}), type: "date" },
              ].map((field, idx) => (
                <div key={idx}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type || "text"}
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition"
                    required={field.label.includes('*')}
                  />
                </div>
              ))}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Notes
                </label>
                <textarea
                  value={newBill.notes}
                  onChange={(e) => setNewBill({...newBill, notes: e.target.value})}
                  placeholder="Any notes about this bill..."
                  rows="2"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition"
                />
              </div>
              <div className="md:col-span-2 flex flex-col justify-end gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setNewBill({
                    description: "",
                    amount: "",
                    date: new Date().toISOString().split('T')[0],
                    dueDate: "",
                    notes: ""
                  })}
                  className="w-full px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition sm:w-auto"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-600 hover:to-green-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 sm:w-auto"
                >
                  <FilePen className="w-5 h-5" />
                  Add Bill
                </button>
              </div>
            </form>
          </div>

          {/* Bills Table */}
          <div>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                All Bills ({supplier.bills.length})
              </h4>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <button
                  onClick={() => handlePrintAction(supplier, "all_bills")}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-center justify-center gap-2 text-sm sm:w-auto"
                >
                  <PrinterIcon className="w-4 h-4" />
                  Print All
                </button>
                <button
                  onClick={() => handlePrintPreview(supplier, "all_bills")}
                  className="w-full px-4 py-2 border border-blue-300 dark:border-blue-600 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition flex items-center justify-center gap-2 text-sm sm:w-auto"
                >
                  <EyeIcon className="w-4 h-4" />
                  Preview All
                </button>
              </div>
            </div>

            {supplier.bills.length > 0 ? (
              <div className="overflow-x-auto rounded-xl bg-gray-50 dark:bg-gray-700/50">
                <table className="w-full min-w-[860px]">
                  <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Bill ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Particulars</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Debit</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Credit</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Balance</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {supplier.bills.map((bill) => (
                      <tr key={bill.id} className="hover:bg-white dark:hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{bill.id}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 dark:text-gray-400">{formatDate(bill.date)}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900 dark:text-white max-w-xs truncate">{bill.description}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{bill.amount}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-green-600 dark:text-green-400">
                            {bill.paidAmount || "Rs. 0"}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {bill.remainingAmount || bill.amount}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            bill.status === "paid" 
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              : bill.status === "pending"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                              : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                          }`}>
                            {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            {bill.status !== "paid" && (
                              <button
                                onClick={() => handleAddNewPayment(supplier, bill.id)}
                                className="p-2 text-green-600 hover:text-green-800 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg transition"
                                title="Add Payment"
                              >
                                <Wallet className="w-4 h-4" />
                              </button>
                            )}
                            <button
                              onClick={() => handlePrintAction(supplier, "invoice", bill)}
                              className="p-2 text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition"
                              title="Print Invoice"
                            >
                              <Printer className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handlePrintPreview(supplier, "invoice", bill)}
                              className="p-2 text-purple-600 hover:text-purple-800 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition"
                              title="Print Preview"
                            >
                              <EyeIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <File className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No bills found
                </h4>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  This supplier doesn&apos;t have any bills yet. Add a bill to get started.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


export default BillManagementModal;

