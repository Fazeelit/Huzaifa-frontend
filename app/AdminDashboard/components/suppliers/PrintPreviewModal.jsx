"use client";

import { X, Bluetooth, Monitor, ZoomOut, ZoomIn, RotateCw, Download, Printer } from "lucide-react";

function PrintPreviewModal({ 
  printDocument, 
  printPreviewZoom, 
  printPreviewType, 
  setPrintPreviewType, 
  handleZoomIn, 
  handleZoomOut, 
  handleZoomReset, 
  handleDownloadPrint, 
  setShowPrintPreview,
  handlePrint 
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-4">
      <div className="flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-800">
        <div className="sticky top-0 flex items-start justify-between gap-3 rounded-t-2xl border-b bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">
              Print Preview
            </h3>
            <p className="mt-1 break-words text-sm text-gray-500 dark:text-gray-400">
              {printDocument.type.charAt(0).toUpperCase() + printDocument.type.slice(1)} - {printDocument.supplierName}
            </p>
          </div>
          <button
            onClick={() => setShowPrintPreview(false)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        {/* Preview Type Selection */}
        <div className="flex flex-col gap-3 border-b px-4 py-4 dark:border-gray-700 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <button
                onClick={() => setPrintPreviewType("thermal")}
                className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition sm:w-auto ${
                  printPreviewType === "thermal"
                    ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Bluetooth className="w-4 h-4 inline mr-2" />
                Thermal Preview
              </button>
              <button
                onClick={() => setPrintPreviewType("document")}
                className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition sm:w-auto ${
                  printPreviewType === "document"
                    ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Monitor className="w-4 h-4 inline mr-2" />
                Document Preview
              </button>
            </div>
          </div>
          <div className="flex items-center gap-3 self-start lg:self-auto">
            <div className="flex items-center gap-2">
              <button onClick={handleZoomOut} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <ZoomOut className="w-4 h-4 text-gray-600" />
              </button>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 min-w-[50px] text-center">
                {printPreviewZoom}%
              </span>
              <button onClick={handleZoomIn} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <ZoomIn className="w-4 h-4 text-gray-600" />
              </button>
              <button onClick={handleZoomReset} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
                <RotateCw className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Preview Content */}
        <div className="flex-1 overflow-auto bg-gray-50 p-4 dark:bg-gray-900 sm:p-6">
          <div className="flex justify-center">
            <div 
              className={`transition-all duration-200 ${
                printPreviewType === "thermal" ? "bg-white p-2" : "bg-white dark:bg-gray-800 p-8"
              }`}
              style={{ 
                transform: `scale(${printPreviewZoom / 100})`,
                transformOrigin: 'top center'
              }}
            >
              {printPreviewType === "thermal" ? (
                <div className="font-mono text-sm whitespace-pre-wrap bg-white p-6 border-l-4 border-blue-500 max-w-md mx-auto">
                  {printDocument.thermal}
                </div>
              ) : (
                <div className="max-w-3xl mx-auto">
                  {/* Document Header */}
                  <div className="text-center border-b pb-6 mb-8">
                    <div className="text-3xl font-bold text-gray-900 mb-2">LAPTOP SHOP - SUPPLIER MANAGEMENT</div>
                    <div className="text-lg text-gray-600">Supplier Bill Management System</div>
                    <div className="text-sm text-gray-500 mt-4">
                      Generated: {new Date(printDocument.timestamp).toLocaleString()}
                    </div>
                  </div>

                  {/* Document Content */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {printDocument.document.content.type}
                      </h3>
                      
                      {printDocument.type === "statement" && printDocument.document.content.summary && (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          {Object.entries(printDocument.document.content.summary).map(([key, value]) => (
                            <div key={key} className="flex justify-between border-b pb-2">
                              <span className="text-gray-600">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                              <span className="font-medium text-gray-900">{value}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {printDocument.type === "all_bills" && printDocument.document.content.bills && (
                        <div>
                          <table className="w-full mt-4">
                            <thead className="bg-gray-100 dark:bg-gray-700">
                              <tr>
                                <th className="p-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Bill ID</th>
                                <th className="p-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Date</th>
                                <th className="p-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Amount</th>
                                <th className="p-3 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {printDocument.document.content.bills.map((bill, idx) => (
                                <tr key={idx} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700">
                                  <td className="p-3 text-sm">{bill.id}</td>
                                  <td className="p-3 text-sm">{bill.date}</td>
                                  <td className="p-3 text-sm font-medium">{bill.amount}</td>
                                  <td className="p-3 text-sm">
                                    <span className={`px-2 py-1 rounded-full text-xs ${
                                      bill.status === "paid" 
                                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                        : bill.status === "pending"
                                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                                        : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                                    }`}>
                                      {bill.status}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <div className="mt-4 pt-4 border-t text-right">
                            <div className="text-lg font-bold text-gray-900">
                              Total: {printDocument.document.content.summary?.total}
                            </div>
                          </div>
                        </div>
                      )}

                      {["invoice", "receipt"].includes(printDocument.type) && printDocument.document.content.details && (
                        <div className="space-y-4">
                          {Object.entries(printDocument.document.content.details).map(([key, value]) => (
                            value && (
                              <div key={key} className="flex justify-between border-b pb-2">
                                <span className="text-gray-600">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                <span className="font-medium text-gray-900">{value}</span>
                              </div>
                            )
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Supplier Information */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Supplier Information</h4>
                        <div className="space-y-1 text-sm">
                          <div>Name: {printDocument.document.supplierInfo.name}</div>
                          <div>Contact: {printDocument.document.supplierInfo.contact}</div>
                          <div>Phone: {printDocument.document.supplierInfo.phone}</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Document Details</h4>
                        <div className="space-y-1 text-sm">
                          <div>Type: {printDocument.document.content.type}</div>
                          <div>Date: {printDocument.document.header.date}</div>
                          <div>Page: {printDocument.document.footer.page}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Document Footer */}
                  <div className="mt-8 pt-6 border-t text-center text-sm text-gray-500">
                    <div>{printDocument.document.footer.note}</div>
                    <div className="mt-2">{printDocument.document.header.date}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="sticky bottom-0 bg-white dark:bg-gray-800 p-6 border-t dark:border-gray-700 rounded-b-2xl flex flex-col sm:flex-row justify-end gap-4">
          <button
            onClick={handleDownloadPrint}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download JSON
          </button>
          <button
            onClick={() => {
              setShowPrintPreview(false);
              handlePrint();
            }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-600 hover:to-green-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2"
          >
            <Printer className="w-5 h-5" />
            Print Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrintPreviewModal;
