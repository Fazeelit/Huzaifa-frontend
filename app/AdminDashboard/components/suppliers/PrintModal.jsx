"use client";

import { X, ReceiptIndianRupee, Wallet, FileText, FileSpreadsheet, Printer, Bluetooth, Wifi, EyeIcon } from "lucide-react";

function PrintModal({ 
  supplier, 
  printType, 
  setPrintType, 
  printerStatus, 
  selectedPrinter, 
  selectedPrinterType, 
  setSelectedPrinterType,
  bluetoothDevices, 
  networkPrinters, 
  discoverBluetoothDevices, 
  discoverNetworkPrinters, 
  connectToPrinter, 
  disconnectPrinter, 
  handlePrint, 
  setShowPrintModal,
  printerTypes,
  handlePrintPreview 
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-3 sm:p-4">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-gray-800">
        <div className="sticky top-0 flex items-start justify-between gap-3 rounded-t-2xl border-b bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <div className="min-w-0">
            <h3 className="break-words text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">
              Print Document - {supplier.name}
            </h3>
            <p className="mt-1 break-words text-sm text-gray-500 dark:text-gray-400">
              Print {printType} for {supplier.name}
            </p>
          </div>
          <button
            onClick={() => setShowPrintModal(false)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Print Settings */}
            <div className="lg:col-span-2 space-y-6">
              {/* Print Type Selection */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Select Document Type
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { value: "invoice", label: "Invoice", icon: ReceiptIndianRupee },
                    { value: "receipt", label: "Receipt", icon: Wallet },
                    { value: "statement", label: "Statement", icon: FileText },
                    { value: "all_bills", label: "All Bills", icon: FileSpreadsheet },
                  ].map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.value}
                        onClick={() => setPrintType(type.value)}
                        className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${
                          printType === type.value
                            ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/30 dark:to-emerald-900/30'
                            : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                        }`}
                      >
                        <Icon className={`w-6 h-6 ${
                          printType === type.value
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-400 dark:text-gray-500'
                        }`} />
                        <span className={`text-sm font-medium ${
                          printType === type.value
                            ? 'text-blue-700 dark:text-blue-300'
                            : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {type.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Printer Type Selection */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Select Printer Type
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {printerTypes.map((type) => {
                    const isSelected = selectedPrinterType === type.toLowerCase().split(' ')[0];
                    return (
                      <button
                        key={type}
                        onClick={() => setSelectedPrinterType(type.toLowerCase().split(' ')[0])}
                        className={`p-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${
                          isSelected
                            ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/30 dark:to-emerald-900/30'
                            : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                        }`}
                      >
                        <Printer className={`w-6 h-6 ${
                          isSelected
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-400 dark:text-gray-500'
                        }`} />
                        <span className={`text-sm font-medium ${
                          isSelected
                            ? 'text-blue-700 dark:text-blue-300'
                            : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {type}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Available Printers */}
              <div>
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Available Printers
                  </h4>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <button
                      onClick={discoverBluetoothDevices}
                      className="w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-center justify-center gap-2 sm:w-auto"
                    >
                      <Bluetooth className="w-4 h-4" />
                      Scan Bluetooth
                    </button>
                    <button
                      onClick={discoverNetworkPrinters}
                      className="w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-center justify-center gap-2 sm:w-auto"
                    >
                      <Wifi className="w-4 h-4" />
                      Scan Network
                    </button>
                  </div>
                </div>

                <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                  {(selectedPrinterType === "thermal" ? bluetoothDevices : networkPrinters).map((device) => (
                    <div
                      key={device.id}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedPrinter?.id === device.id
                          ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/30 dark:to-emerald-900/30'
                          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex min-w-0 items-center gap-3">
                          {device.type === "thermal" ? (
                            <Bluetooth className="w-5 h-5 text-blue-500" />
                          ) : (
                            <Wifi className="w-5 h-5 text-green-500" />
                          )}
                          <div className="min-w-0">
                            <div className="break-words font-medium text-gray-900 dark:text-white">
                              {device.name}
                            </div>
                            <div className="break-words text-xs text-gray-500">
                              {device.type === "thermal" ? "Bluetooth Thermal Printer" : "Network Document Printer"}
                            </div>
                          </div>
                        </div>
                        {selectedPrinter?.id === device.id ? (
                          <button
                            onClick={disconnectPrinter}
                            className="px-3 py-1.5 text-sm bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition"
                          >
                            Disconnect
                          </button>
                        ) : (
                          <button
                            onClick={() => connectToPrinter(device)}
                            className="px-3 py-1.5 text-sm bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-600 hover:to-green-600 text-white rounded-lg transition"
                          >
                            Connect
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Print Preview & Actions */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-xl p-5">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Print Preview
                </h4>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 h-48 overflow-auto">
                  <div className="text-center space-y-2">
                    <div className="text-xs text-gray-500">Document Preview</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {printType.charAt(0).toUpperCase() + printType.slice(1)}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {supplier.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      Total Amount: {supplier.statistics.totalAmount}
                    </div>
                    <div className="text-xs text-gray-500">
                      Total Bills: {supplier.statistics.totalBills}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowPrintModal(false);
                    handlePrintPreview(supplier, printType, supplier.selectedBill);
                  }}
                  className="w-full mt-4 px-4 py-2 border border-purple-300 dark:border-purple-600 rounded-lg text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition flex items-center justify-center gap-2"
                >
                  <EyeIcon className="w-4 h-4" />
                  Full Preview
                </button>
              </div>

              {/* Print Status */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-5">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Print Status
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Thermal Printer</span>
                    <span className={`text-sm font-medium ${printerStatus.thermal === "connected" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                      {printerStatus.thermal === "connected" ? "Connected" : "Disconnected"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Document Printer</span>
                    <span className={`text-sm font-medium ${printerStatus.document === "connected" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                      {printerStatus.document === "connected" ? "Connected" : "Disconnected"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Selected Printer</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {selectedPrinter ? selectedPrinter.name : "None"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handlePrint}
                  disabled={!selectedPrinter}
                  className={`w-full py-3 rounded-xl font-bold transition flex items-center justify-center gap-2 ${
                    selectedPrinter
                      ? 'bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-600 hover:to-green-600 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <Printer className="w-5 h-5" />
                  Print Now
                </button>
                <button
                  onClick={() => setShowPrintModal(false)}
                  className="w-full py-3 border border-gray-300 dark:border-gray-600 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default PrintModal;

