"use client";

import { Star, Phone, MoreVertical, Calendar, FileText, Wallet, Monitor, Eye, FilePen, PrinterIcon, EyeIcon, Trash2 } from "lucide-react";

function SupplierCard({ 
  supplier, 
  selectedSupplier, 
  setSelectedSupplier, 
  togglePreferred, 
  handleViewBillManagement, 
  handleAddNewPayment, 
  handlePrintAction, 
  handlePrintPreview,
  handleViewSupplier, 
  handleEditSupplier,
  handleAddNewBill, 
  handleDeleteSupplier, 
  canEditSupplier = true,
  canUpdateSupplier = true,
  canDeleteSupplier = true,
  getStatusBadge, 
  formatDate 
}) {
  const parseAmount = (value) => {
    if (typeof value === "number") return value;
    const cleaned = String(value || "").replace(/[^0-9.-]/g, "");
    return cleaned ? Number(cleaned) : 0;
  };

  const formatRs = (amount) => `Rs. ${Number(amount || 0).toLocaleString("en-IN")}`;

  const billStats = (() => {
    const bills = Array.isArray(supplier?.bills) ? supplier.bills : [];
    return bills.reduce(
      (acc, bill) => {
        const amount = parseAmount(bill?.amount);
        acc.totalBills += 1;
        if (bill?.status === "paid") acc.paidAmount += amount;
        if (bill?.status === "pending") acc.pendingAmount += amount;
        if (bill?.status === "overdue") acc.overdueAmount += amount;
        return acc;
      },
      { totalBills: 0, paidAmount: 0, pendingAmount: 0, overdueAmount: 0 }
    );
  })();

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-2xl border border-white/70 dark:border-gray-700/70 overflow-hidden hover:shadow-2xl shadow-lg shadow-black/5 transition-shadow duration-300">
      {/* Supplier Header */}
      <div className="p-6 border-b border-gray-200/70 dark:border-gray-700">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {supplier.name.charAt(0)}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="break-words text-lg font-semibold text-gray-900 dark:text-white">
                  {supplier.name}
                </h3>
                {supplier.preferred && (
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                )}
              </div>
              <p className="break-words text-sm text-gray-500 dark:text-gray-400">{supplier.company}</p>
              <div className="flex items-center gap-2 mt-1">
                <Phone className="w-3 h-3 text-gray-400" />
                <span className="break-words text-xs text-gray-500">{supplier.phone}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => togglePreferred(supplier.id)}
              className={`p-1 rounded ${supplier.preferred
                  ? 'text-amber-600'
                  : 'text-gray-400'
                }`}
            >
              <Star className={`w-5 h-5 ${supplier.preferred ? 'fill-amber-500' : ''}`} />
            </button>
            <button
              onClick={() => setSelectedSupplier(selectedSupplier?.id === supplier.id ? null : supplier)}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products */}
        {supplier.products && supplier.products.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-2">Key Laptop Models:</p>
            <div className="flex flex-wrap gap-2">
              {supplier.products.map((product, idx) => (
                <span key={idx} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                  {product}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Stats Summary */}
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-xl">
            <div className="text-xs text-gray-500">Total Bills</div>
            <div className="break-words text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
              {billStats.totalBills}
            </div>
          </div>
          <div className="text-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
            <div className="text-xs text-gray-500">Paid Amount</div>
            <div className="break-words text-lg font-bold text-green-600 dark:text-green-400 sm:text-xl">
              {formatRs(billStats.paidAmount)}
            </div>
          </div>
          <div className="text-center p-3 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl">
            <div className="text-xs text-gray-500">Pending Amount</div>
            <div className="break-words text-lg font-bold text-amber-600 dark:text-amber-400 sm:text-xl">
              {formatRs(billStats.pendingAmount)}
            </div>
          </div>
          <div className="text-center p-3 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl">
            <div className="text-xs text-gray-500">Overdue Amount</div>
            <div className="break-words text-lg font-bold text-red-600 dark:text-red-400 sm:text-xl">
              {formatRs(billStats.overdueAmount)}
            </div>
          </div>
        </div>

        {/* Status Info */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            {getStatusBadge(supplier.status)}
          </div>
          <div className="break-words text-sm text-gray-500">
            <Calendar className="w-4 h-4 inline mr-1" />
            Last: {formatDate(supplier.purchaseStats?.lastPaymentDate ?? supplier.statistics.lastPaymentDate)}
          </div>
        </div>
      </div>

      {/* Bill Summary */}
      <div className="p-6">
        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Recent Bills</h4>
        <div className="space-y-3 mb-6">
          {supplier.bills.slice(0, 3).map((bill) => (
            <div key={bill.id} className="flex items-start justify-between gap-3 p-3 bg-white/70 dark:bg-gray-700/50 rounded-xl border border-white/70 dark:border-gray-700/70">
              <div className="min-w-0">
                <div className="font-medium text-gray-900 dark:text-white text-sm">{bill.id}</div>
                <div className="text-xs text-gray-500">{formatDate(bill.date)}</div>
                <div className="mt-1 max-w-[150px] break-words text-xs text-gray-600 dark:text-gray-400">{bill.description}</div>
              </div>
              <div className="shrink-0 text-right">
                <div className="break-words font-bold text-gray-900 dark:text-white">{bill.amount}</div>
                <div className="text-xs mt-1">{bill.status === "paid" ? (
                  <span className="text-green-600">Paid</span>
                ) : bill.status === "pending" ? (
                  <span className="text-amber-600">Pending</span>
                ) : (
                  <span className="text-red-600">Overdue</span>
                )}</div>
              </div>
            </div>
          ))}
          {supplier.bills.length === 0 && (
            <div className="text-center py-4 bg-white/70 dark:bg-gray-700/50 rounded-xl border border-white/70 dark:border-gray-700/70">
              <p className="text-gray-600 dark:text-gray-400">No bills found</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => handleViewBillManagement(supplier)}
            disabled={!canUpdateSupplier}
            className="px-3 py-2 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-600 hover:to-green-600 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Manage Bills
          </button>
          <button
            onClick={() => handleAddNewPayment(supplier)}
            disabled={!canUpdateSupplier}
            className="px-3 py-2 border border-green-300 dark:border-green-700 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
          >
            <Wallet className="w-4 h-4" />
            Add Payment
          </button>
          <button
            onClick={() => handlePrintPreview(supplier, "statement")}
            className="px-3 py-2 border border-purple-300 dark:border-purple-700 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
          >
            <Monitor className="w-4 h-4" />
            Print Preview
          </button>
          <button
            onClick={() => handleViewSupplier(supplier)}
            className="px-3 py-2 border border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg text-sm font-medium flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4" />
            View Details
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {selectedSupplier?.id === supplier.id && (
        <div className="p-4 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => handleAddNewBill(supplier)}
              disabled={!canUpdateSupplier}
              className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded flex items-center justify-center gap-2"
            >
              <FilePen className="w-4 h-4" />
              Add Bill
            </button>
            <button 
              onClick={() => handlePrintAction(supplier, "all_bills")}
              className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded flex items-center justify-center gap-2"
            >
              <PrinterIcon className="w-4 h-4" />
              Print All Bills
            </button>
            <button 
              onClick={() => handlePrintPreview(supplier, "all_bills")}
              className="px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded flex items-center justify-center gap-2"
            >
              <EyeIcon className="w-4 h-4" />
              Preview All
            </button>
            <button 
              onClick={() => handleEditSupplier(supplier)}
              disabled={!canEditSupplier}
              className="px-3 py-2 text-sm text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded flex items-center justify-center gap-2"
            >
              <FilePen className="w-4 h-4" />
              Edit Supplier
            </button>
            <button 
              onClick={() => handleDeleteSupplier(supplier)}
              disabled={!canDeleteSupplier}
              className="px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded flex items-center justify-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Delete Supplier
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


export default SupplierCard;

