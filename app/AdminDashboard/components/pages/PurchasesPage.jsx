"use client";

import React, { useState, useEffect } from "react";
import { Plus, CheckCircle, AlertTriangle, Search } from "lucide-react";
import PurchasesModal from "../purchases/PurchasesModal";
import EditPurchaseModel from "../purchases/EditPurchaseModel";
import PurchasesTable from "../purchases/PurchasesTable";
import { apiRequest } from "./../../authservice/api";
import { usePermissions } from "../../authservice/usePermissions";
import { blockedButtonClass, blockedButtonProps } from "../../authservice/permissions";
import { formatDateDDMMYYYY } from "../../utils/formatting";

const PurchasesPage = () => {
  const { crud, can } = usePermissions();
  const { canCreate, canEdit, canDelete } = crud("PURCHASE");
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editPurchase, setEditPurchase] = useState(null);
  const [purchases, setPurchases] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState("");
  const [invoiceSearch, setInvoiceSearch] = useState("");
  const [purchaseFromDate, setPurchaseFromDate] = useState("");
  const [purchaseToDate, setPurchaseToDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: "date", direction: "desc" });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const recordsPerPage = 10;

  // ---------------- FETCH ----------------
  const fetchPurchases = async ({ silent = false } = {}) => {
    if (!silent) setLoading(true);
    try {
      const response = await apiRequest("/purchases", "GET");
      if (Array.isArray(response)) {
        setPurchases(response);
        return;
      }
      if (Array.isArray(response?.data)) {
        setPurchases(response.data);
        return;
      }
      setPurchases([]);
    } catch (error) {
      console.error("Failed to fetch purchases:", error);
      if (!silent) {
        setErrorMessage("Failed to fetch purchases");
        setShowError(true);
      }
    } finally {
      if (!silent) setLoading(false);
    }
  };

  useEffect(() => {
    fetchPurchases();

    const intervalId = setInterval(() => {
      fetchPurchases({ silent: true });
    }, 5000);

    const handleFocus = () => fetchPurchases({ silent: true });
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchPurchases({ silent: true });
      }
    };

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const res = await apiRequest("/suppliers", "GET");
        const supplierList = Array.isArray(res)
          ? res
          : Array.isArray(res?.suppliers)
          ? res.suppliers
          : Array.isArray(res?.data?.suppliers)
          ? res.data.suppliers
          : Array.isArray(res?.data)
          ? res.data
          : [];

        if (supplierList.length) {
          setSuppliers(supplierList);
          return;
        }

        setSuppliers([]);
      } catch {
        setSuppliers([]);
      }
    };
    fetchSuppliers();
  }, []);

  // ---------------- FILTER ----------------
  const supplierNames = [
    ...new Set(
      [
        ...(suppliers || []).map((s) => String(s?.name || "").trim()),
        ...(purchases || []).map((purchase) => String(purchase?.supplier || "").trim()),
      ].filter(Boolean)
    ),
  ].sort((a, b) => a.localeCompare(b));
  const filteredPurchases = purchases.filter((purchase) => {
    const supplierMatches = selectedSupplier
      ? String(purchase?.supplier || "").trim().toLowerCase() === selectedSupplier.trim().toLowerCase()
      : true;
    const invoiceMatches = invoiceSearch
      ? String(purchase.invoiceNumber || "")
          .toLowerCase()
          .includes(invoiceSearch.trim().toLowerCase())
      : true;
    const purchaseDateValue = purchase?.purchaseDate
      ? new Date(purchase.purchaseDate).toISOString().slice(0, 10)
      : "";
    const dateRangeMatches =
      (!purchaseFromDate || (purchaseDateValue && purchaseDateValue >= purchaseFromDate)) &&
      (!purchaseToDate || (purchaseDateValue && purchaseDateValue <= purchaseToDate));

    return supplierMatches && invoiceMatches && dateRangeMatches;
  });

  const handleEditPurchase = (purchase) => {
    if (!canEdit) return;
    setEditPurchase(purchase);
    setOpenEditModal(true);
  };

  const handleDeletePurchase = async (purchase) => {
    if (!canDelete) return;
    if (!purchase?._id) return;

    try {
      const res = await apiRequest(`/purchases/deletePurchase/${purchase._id}`, {
        method: "DELETE",
      });

      if (res?.success === false) {
        setErrorMessage(res?.message || "Failed to delete purchase");
        setShowError(true);
        return;
      }

      fetchPurchases();
    } catch (error) {
      console.error("Failed to delete purchase:", error);
      setErrorMessage("Failed to delete purchase");
      setShowError(true);
    }
  };

  // ---------------- HELPERS ----------------
  const getQuantity = (prod) => prod.qty ?? prod.quantity ?? 0;

  const getDisplayRecords = (list = filteredPurchases) => {
    let records = [];
    list.forEach((p) => {
      records.push({
        ...p,
        isPartial: false,
        displayPaid: p.paidAmount,
        displayBalance: (p.totalAmount || 0) - (p.paidAmount || 0),
        displayDate: p.purchaseDate,
      });
    });
    return records;
  };

  const displayRecords = getDisplayRecords();
  const sortedDisplayRecords = [...displayRecords].sort((a, b) => {
    const getValue = (record) => {
      switch (sortConfig.key) {
        case "supplier":
          return String(record.supplier || "").toLowerCase();
        case "date":
          return new Date(record.displayDate || record.purchaseDate || 0).getTime();
        case "invoice":
          return Number(record.invoiceNumber || 0);
        case "items":
          return Number(Array.isArray(record.products) ? record.products.length : 0);
        case "total":
          return Number(record.totalAmount || 0);
        case "paid":
          return Number(record.displayPaid || 0);
        case "balance":
          return Number(record.displayBalance || 0);
        case "status":
          return String(record.purchaseStatus || "").toLowerCase();
        default:
          return 0;
      }
    };

    const aVal = getValue(a);
    const bVal = getValue(b);
    if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = Math.max(1, Math.ceil(sortedDisplayRecords.length / recordsPerPage));
  const paginatedDisplayRecords = sortedDisplayRecords.slice(
    (currentPage - 1) * recordsPerPage,
    currentPage * recordsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedSupplier, invoiceSearch, purchaseFromDate, purchaseToDate, sortConfig.key, sortConfig.direction]);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  // ---------------- GRAND TOTALS ----------------
  const calculateGrandTotals = (records) => {
    let total = 0,
      paid = 0,
      balance = 0;

    records.forEach((p) => {
      total += p.totalAmount || 0;
      paid += p.displayPaid || 0;
      balance += p.displayBalance || 0;
    });

    return { total, paid, balance };
  };

  // ---------------- PRINT SUPPLIER LEDGER ----------------
  const handlePrintLedgerReport = () => {
    const supplier = selectedSupplier.trim();
    if (!supplier) {
      setErrorMessage("Please select or enter a supplier.");
      setShowError(true);
      return;
    }

    if (purchaseFromDate && purchaseToDate && purchaseFromDate > purchaseToDate) {
      setErrorMessage("From date cannot be after To date.");
      setShowError(true);
      return;
    }

    const supplierPurchases = purchases.filter(
      (p) => String(p?.supplier || "").trim().toLowerCase() === supplier.toLowerCase()
    );

    const allEntries = [];

    supplierPurchases.forEach((p) => {
      const purchaseDate = new Date(p.purchaseDate);
      if (!Number.isNaN(purchaseDate.getTime())) {
        allEntries.push({
          date: purchaseDate,
          type: "Purchase",
          particulars: "Purchase Bill",
          invoice: p.invoiceNumber,
          debit: Number(p.totalAmount || 0),
          credit: 0,
          signedAmount: Number(p.totalAmount || 0),
        });
      }

      (p.paymentHistory || []).forEach((h) => {
        const paymentDate = new Date(h.appliedAt);
        if (!Number.isNaN(paymentDate.getTime())) {
          const amount = Number(h.appliedAmount || 0);
          allEntries.push({
            date: paymentDate,
            type: "Payment",
            particulars: "Payment Received",
            invoice: p.invoiceNumber,
            debit: 0,
            credit: amount,
            signedAmount: -amount,
          });
        }
      });
    });

    allEntries.sort((a, b) => a.date - b.date);

    const fromStart = purchaseFromDate ? new Date(`${purchaseFromDate}T00:00:00`) : null;
    const toEnd = purchaseToDate ? new Date(`${purchaseToDate}T23:59:59.999`) : null;

    const openingBalance = allEntries
      .filter((entry) => (fromStart ? entry.date < fromStart : false))
      .reduce((sum, entry) => sum + entry.signedAmount, 0);

    const rangeEntries = allEntries.filter((entry) => {
      if (fromStart && entry.date < fromStart) return false;
      if (toEnd && entry.date > toEnd) return false;
      return true;
    });

    let runningBalance = openingBalance;
    const ledgerRows = rangeEntries.map((entry) => {
      runningBalance += entry.signedAmount;
      return { ...entry, balance: runningBalance };
    });

    const totalDebit = ledgerRows.reduce((sum, row) => sum + row.debit, 0);
    const totalCredit = ledgerRows.reduce((sum, row) => sum + row.credit, 0);
    const currentBalance = runningBalance;

    const dateRangeText = purchaseFromDate || purchaseToDate
      ? `${purchaseFromDate || "Beginning"} to ${purchaseToDate || "Today"}`
      : "All Dates";

    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Supplier Ledger - ${supplier}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 18px; color: #111827; }
            h2 { margin: 0; text-align: center; }
            .sub { margin: 4px 0 14px; text-align: center; color: #374151; font-size: 13px; }
            table { width: 100%; border-collapse: collapse; margin-top: 8px; }
            th, td { border: 1px solid #cbd5e1; padding: 7px; font-size: 12px; text-align: left; }
            th { background: #f1f5f9; }
            .num { text-align: right; font-variant-numeric: tabular-nums; }
            .opening, .totals, .closing { font-weight: 700; background: #f8fafc; }
            .negative { color: #b91c1c; }
            .positive { color: #166534; }
          </style>
        </head>
        <body>
          <h2>Supplier Ledger</h2>
          <div class="sub">Supplier: ${supplier} | Date Range: ${dateRangeText}</div>

          <table>
            <thead>
              <tr>
                <th style="width:4%">#</th>
                <th style="width:12%">Date</th>
                <th style="width:18%">Particulars</th>
                <th style="width:10%">Invoice</th>
                <th style="width:12%" class="num">Debit (+)</th>
                <th style="width:12%" class="num">Credit (-)</th>
                <th style="width:14%" class="num">Amount (+/-)</th>
                <th style="width:18%" class="num">Running Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr class="opening">
                <td colspan="7">Opening Balance</td>
                <td class="num ${openingBalance < 0 ? "negative" : "positive"}">Rs.${openingBalance.toFixed(2)}</td>
              </tr>
              ${
                ledgerRows.length
                  ? ledgerRows
                      .map(
                        (row, idx) => `
                    <tr>
                      <td>${idx + 1}</td>
                      <td>${formatDateDDMMYYYY(row.date)}</td>
                      <td>${row.particulars}</td>
                      <td>${row.invoice || "-"}</td>
                      <td class="num">${row.debit ? `Rs.${row.debit.toFixed(2)}` : "-"}</td>
                      <td class="num">${row.credit ? `Rs.${row.credit.toFixed(2)}` : "-"}</td>
                      <td class="num ${row.signedAmount < 0 ? "negative" : "positive"}">Rs.${row.signedAmount.toFixed(2)}</td>
                      <td class="num ${row.balance < 0 ? "negative" : "positive"}">Rs.${row.balance.toFixed(2)}</td>
                    </tr>
                  `
                      )
                      .join("")
                  : `<tr><td colspan="8" style="text-align:center;color:#64748b;">No transactions in selected range.</td></tr>`
              }
              <tr class="totals">
                <td colspan="4">Period Totals</td>
                <td class="num">Rs.${totalDebit.toFixed(2)}</td>
                <td class="num">Rs.${totalCredit.toFixed(2)}</td>
                <td class="num ${totalDebit - totalCredit < 0 ? "negative" : "positive"}">Rs.${(totalDebit - totalCredit).toFixed(2)}</td>
                <td class="num ${currentBalance < 0 ? "negative" : "positive"}">Rs.${currentBalance.toFixed(2)}</td>
              </tr>
              <tr class="closing">
                <td colspan="7">Current Balance</td>
                <td class="num ${currentBalance < 0 ? "negative" : "positive"}">Rs.${currentBalance.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.print();
  };

  // ---------------- PRINT SINGLE INVOICE ----------------
  const handlePrintInvoice = (purchase) => {
    const printWindow = window.open("", "_blank");
    const paymentHistoryRows = purchase.paymentHistory?.length
      ? purchase.paymentHistory
          .map(
            (h, idx) => `
          <tr>
            <td>${idx + 1}</td>
            <td>${formatDateDDMMYYYY(h.appliedAt)}</td>
            <td>Rs.${h.appliedAmount?.toFixed(2) || 0}</td>
          </tr>
        `
          )
          .join("")
      : "";

    printWindow.document.write(`
      <html>
        <head>
          <title>Invoice - ${purchase.invoiceNumber}</title>
          <style>
            body { font-family: Arial; padding: 20px; }
            h2, h3 { text-align: center; }
            table { width: 100%; border-collapse: collapse; margin-top: 10px; }
            th, td { border: 1px solid #000; padding: 6px; text-align: center; font-size: 12px; }
            th { background: #eee; }
            .partial { background-color: #fff6d6; }
          </style>
        </head>
        <body>
          <h2>Invoice: ${purchase.invoiceNumber}</h2>
          <h3>Supplier: ${purchase.supplier} | Date: ${formatDateDDMMYYYY(purchase.displayDate)}</h3>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              ${purchase.products
                ?.map(
                  (prod, idx) => `
                  <tr class="${purchase.isPartial ? "partial" : ""}">
                    <td>${idx + 1}</td>
                    <td>${prod.productName || prod.name || prod.title}</td>
                    <td>${getQuantity(prod)}</td>
                    <td>Rs.${(prod.purchasePrice ?? prod.price)?.toFixed(2) || 0}</td>
                    <td>Rs.${(getQuantity(prod) * ((prod.purchasePrice ?? prod.price) || 0)).toFixed(2)}</td>
                  </tr>
                `
                )
                .join("")}
              <tr>
                <td colspan="4" style="text-align:right;font-weight:bold;">Total</td>
                <td>Rs.${purchase.totalAmount?.toFixed(2) || 0}</td>
              </tr>
              <tr>
                <td colspan="4" style="text-align:right;font-weight:bold;">Paid</td>
                <td>Rs.${purchase.displayPaid?.toFixed(2) || 0}</td>
              </tr>
              <tr>
                <td colspan="4" style="text-align:right;font-weight:bold;">Balance</td>
                <td>Rs.${purchase.displayBalance?.toFixed(2) || 0}</td>
              </tr>
            </tbody>
          </table>
          ${
            paymentHistoryRows
              ? `
          <h3>Payment History</h3>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              ${paymentHistoryRows}
            </tbody>
          </table>
          `
              : ""
          }
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.print();
  };

  return (
    <main className="relative w-full max-w-none overflow-visible rounded-3xl border border-slate-200/70 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-3 shadow-sm sm:p-4 space-y-5">
      <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-80 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl" />

      {/* Header */}
      <div className="relative flex flex-col gap-3 rounded-2xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur-sm md:flex-row md:items-center md:justify-between md:p-5">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">Purchases</h1>
          <p className="text-sm text-slate-600 mt-1">Manage purchase orders and supplier balances</p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <button
            onClick={() => canCreate && setOpenModal(true)}
            className={`inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 text-sm text-white shadow-md hover:from-blue-700 hover:to-cyan-700 sm:w-auto ${blockedButtonClass} blocked-action`}
            {...blockedButtonProps(canCreate)}
          >
            <Plus size={16} /> New Purchase
          </button>

        </div>
      </div>

      {/* Filters */}
      <div className="relative rounded-2xl border border-white/70 bg-white/80 backdrop-blur-sm p-4 shadow-sm space-y-3">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="min-w-0">
            <label className="mb-1 block text-sm font-semibold text-slate-700">
              Search by Invoice Number:
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={invoiceSearch}
                onChange={(e) => setInvoiceSearch(e.target.value)}
                placeholder="Enter invoice number..."
                className="h-10 w-full rounded-xl border border-slate-300 bg-white pl-9 pr-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
            </div>
          </div>

          <div className="min-w-0">
            <label className="mb-1 block text-sm font-semibold text-slate-700">
              Search by Purchase Date Range:
            </label>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <input
                type="date"
                value={purchaseFromDate}
                onChange={(e) => setPurchaseFromDate(e.target.value)}
                className="h-10 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
              <input
                type="date"
                value={purchaseToDate}
                onChange={(e) => setPurchaseToDate(e.target.value)}
                className="h-10 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-end">
          <label className="text-sm font-semibold text-slate-700">Select Supplier:</label>
          <select
            value={selectedSupplier}
            onChange={(e) => setSelectedSupplier(e.target.value)}
            className="h-10 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-300 sm:min-w-[220px] sm:w-auto"
          >
            <option value="">All Suppliers</option>
            {supplierNames.map((name, i) => (
              <option key={`${name}-${i}`} value={name}>
                {name}
              </option>
            ))}
          </select>

          {selectedSupplier && (
            <button
              onClick={handlePrintLedgerReport}
              className="h-10 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 text-sm text-white shadow-sm hover:from-blue-700 hover:to-indigo-700 sm:w-auto"
            >
              Print Ledger Report
            </button>
          )}
        </div>
      </div>

      {/* Purchases Table */}
      <PurchasesTable
        loading={loading}
        paginatedDisplayRecords={paginatedDisplayRecords}
        displayRecords={displayRecords}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        getQuantity={getQuantity}
        calculateGrandTotals={calculateGrandTotals}
        sortConfig={sortConfig}
        handleSort={handleSort}
        handleEditPurchase={handleEditPurchase}
        handleDeletePurchase={handleDeletePurchase}
        handlePrintInvoice={handlePrintInvoice}
        canEdit={canEdit}
        canDelete={canDelete}
        recordsPerPage={recordsPerPage}
      />

      {/* Modals */}
      {openModal && canCreate && (
        <PurchasesModal
          onClose={() => setOpenModal(false)}
          onCreated={fetchPurchases}
        />
      )}
      {openEditModal && editPurchase && canEdit && (
        <EditPurchaseModel
          purchase={editPurchase}
          onClose={() => setOpenEditModal(false)}
          onUpdated={fetchPurchases}
        />
      )}

      {/* Alerts */}
      {showError && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl text-center">
            <AlertTriangle className="w-10 h-10 text-red-600 mx-auto mb-2" />
            <p>{errorMessage}</p>
            <button
              onClick={() => setShowError(false)}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl text-center">
            <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-2" />
            <p>Success</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default PurchasesPage;
