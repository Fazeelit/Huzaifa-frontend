"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircle, Clock, FileText, Mail, Phone, Tag, Wallet, X } from "lucide-react";
import AddPaymentModal from "../customers/AddPaymentModal";
import BillManagementModal from "../customers/BillManagementModal";
import CustomersFilterBar from "../customers/CustomersFilterBar";
import DeleteCustomerModal from "../customers/DeleteCustomerModal";
import CustomersGridView from "../customers/CustomersGridView";
import CustomersHeaderSection from "../customers/CustomersHeaderSection";
import CustomersListView from "../customers/CustomersListView";
import CustomersResultsSummary from "../customers/CustomersResultsSummary";
import CustomersTips from "../customers/CustomersTips";
import { apiRequest } from "../../authservice/api";
import { hasPermission, readStoredAuth } from "../../authservice/auth";

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Highest Spent", value: "spent-high" },
  { label: "Lowest Spent", value: "spent-low" },
];

const statusFilters = [
  { label: "All", value: "all", icon: CheckCircle },
  { label: "Active", value: "active", icon: CheckCircle },
  { label: "Inactive", value: "inactive", icon: X },
  { label: "Pending", value: "pending", icon: Clock },
];

const tagFilters = [
  { label: "All", value: "All", icon: Tag },
  { label: "VIP", value: "VIP", icon: Tag },
  { label: "New", value: "New", icon: Tag },
  { label: "Returning", value: "Returning", icon: Tag },
];

const toNumber = (value) => {
  if (typeof value === "number") return value;
  return parseFloat(String(value || "").replace(/[^\d.]/g, "")) || 0;
};

const formatDate = (value) => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const calculateCustomerStatistics = (customer) => {
  const bills = Array.isArray(customer?.bills) ? customer.bills : [];
  const totalBills = bills.length;
  const paidAmount = bills
    .filter((bill) => bill.status === "paid")
    .reduce((sum, bill) => sum + toNumber(bill.amount), 0);
  const pendingAmount = bills
    .filter((bill) => bill.status !== "paid")
    .reduce((sum, bill) => sum + Math.max(toNumber(bill.amount) - toNumber(bill.paidAmount), 0), 0);

  return {
    totalBills,
    paidAmount: `PKR ${paidAmount.toLocaleString()}`,
    pendingAmount: `PKR ${pendingAmount.toLocaleString()}`,
  };
};

const downloadCSV = (filename, rows) => {
  const csv = rows
    .map((row) =>
      row.map((cell) => `"${String(cell ?? "").replace(/"/g, '""')}"`).join(",")
    )
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const normalizeCustomer = (customer) => ({
  ...customer,
  id: customer._id || customer.id,
  phone: customer.mobile || customer.phone || "",
  customerSince: customer.createdAt || customer.customerSince || null,
  purchaseCount: Number(customer.totalPurchases ?? customer.orders ?? 0) || 0,
  totalSpent: toNumber(customer.totalSpent),
  totalDue: toNumber(customer.totalDue),
  lastPurchase: customer.lastPurchase || "No purchases yet",
  tags: Array.isArray(customer.tags) ? customer.tags : [],
  status: String(customer.status || "active").toLowerCase(),
  satisfaction: Number(customer.satisfaction) || 0,
  bills: Array.isArray(customer.bills) ? customer.bills : [],
  paymentHistory: Array.isArray(customer.paymentHistory) ? customer.paymentHistory : [],
  statistics: calculateCustomerStatistics(customer),
});

export default function Customers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [customers, setCustomers] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedTag, setSelectedTag] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState("list");
  const [sortBy, setSortBy] = useState("newest");
  const [viewCustomer, setViewCustomer] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [canCreateCustomer, setCanCreateCustomer] = useState(true);
  const [canEditCustomer, setCanEditCustomer] = useState(true);
  const [canDeleteCustomer, setCanDeleteCustomer] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showBillModal, setShowBillModal] = useState(false);
  const [activeCustomerModal, setActiveCustomerModal] = useState(null);
  const [newPayment, setNewPayment] = useState({
    billId: "",
    amount: "",
    date: new Date().toISOString().split("T")[0],
    method: "Cash",
    reference: "",
    notes: "",
  });
  const [newBill, setNewBill] = useState({
    description: "",
    amount: "",
    date: new Date().toISOString().split("T")[0],
    dueDate: "",
    notes: "",
  });
  const itemsPerPage = 10;
  const paymentMethods = ["Cash", "Bank Transfer", "JazzCash", "EasyPaisa", "Card", "Cheque"];

  useEffect(() => {
    const syncPermissions = () => {
      const { permissions } = readStoredAuth();
      setCanCreateCustomer(
        hasPermission(permissions, "CUSTOMER_CREATE")
      );
      setCanEditCustomer(
        hasPermission(permissions, "CUSTOMER_EDIT")
      );
      setCanDeleteCustomer(
        hasPermission(permissions, "CUSTOMER_DELETE")
      );
    };

    syncPermissions();
    window.addEventListener("storage", syncPermissions);
    return () => window.removeEventListener("storage", syncPermissions);
  }, []);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await apiRequest("/customers", { method: "GET" });
        if (res.success) {
          setCustomers((res.customers || []).map(normalizeCustomer));
        } else {
          console.error("Failed to fetch customers:", res.message);
        }
      } catch (error) {
        console.error("Fetch Customers Error:", error);
      }
    };

    fetchCustomers();
  }, []);

  const filteredCustomers = customers
    .filter((customer) => {
      const q = searchTerm.toLowerCase();
      const customerStatus = String(customer.status || "").toLowerCase();
      const normalizedSelectedStatus = String(selectedStatus || "").toLowerCase();
      const normalizedSelectedTag = String(selectedTag || "").toLowerCase();
      const customerTags = Array.isArray(customer.tags)
        ? customer.tags.map((tag) => String(tag || "").toLowerCase())
        : [];
      const purchaseCount = Number(customer.purchaseCount || 0);
      const matchesSearch =
        customer.name?.toLowerCase().includes(q) ||
        customer.email?.toLowerCase().includes(q) ||
        customer.phone?.includes(searchTerm) ||
        customer.cnic?.includes(searchTerm) ||
        customer.address?.toLowerCase().includes(q) ||
        customer.lastPurchase?.toLowerCase().includes(q);

      const matchesStatus =
        normalizedSelectedStatus === "all" || customerStatus === normalizedSelectedStatus;

      const matchesTag =
        normalizedSelectedTag === "all" ||
        (normalizedSelectedTag === "new"
          ? purchaseCount <= 1
          : normalizedSelectedTag === "returning"
            ? purchaseCount > 1
            : customerTags.includes(normalizedSelectedTag));

      return matchesSearch && matchesStatus && matchesTag;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.customerSince) - new Date(a.customerSince);
        case "oldest":
          return new Date(a.customerSince) - new Date(b.customerSince);
        case "spent-high":
          return toNumber(b.totalSpent) - toNumber(a.totalSpent);
        case "spent-low":
          return toNumber(a.totalSpent) - toNumber(b.totalSpent);
        default:
          return 0;
      }
    });

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const stats = {
    total: customers.length,
    active: customers.filter((c) => c.status === "active").length,
    totalSpent: customers.reduce((sum, c) => sum + toNumber(c.totalSpent), 0),
    avgSatisfaction:
      customers.length > 0
        ? Math.round(
            customers.reduce((sum, c) => sum + (c.satisfaction || 0), 0) /
              customers.length
          )
        : 0,
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedStatus, selectedTag, sortBy, viewMode]);

  const requestDeleteCustomer = (customer) => {
    if (!canDeleteCustomer) {
      return;
    }

    setCustomerToDelete(customer);
    setDeleteModalOpen(true);
  };

  const syncCustomerRecord = (updatedCustomer) => {
    const normalized = normalizeCustomer(updatedCustomer);
    setCustomers((prev) => prev.map((customer) => (customer.id === normalized.id ? normalized : customer)));
    setViewCustomer((prev) => (prev?.id === normalized.id ? normalized : prev));
    setActiveCustomerModal((prev) => (prev?.id === normalized.id ? normalized : prev));
  };

  const openBillManagement = (customer) => {
    setActiveCustomerModal(customer);
    setShowBillModal(true);
  };

  const openPaymentModal = (customer, billId = "") => {
    setActiveCustomerModal(customer);
    setShowBillModal(false);
    setNewPayment({
      billId,
      amount: "",
      date: new Date().toISOString().split("T")[0],
      method: "Cash",
      reference: "",
      notes: "",
    });
    setShowPaymentModal(true);
  };

  const openTotalPaymentModal = (customer) => {
    const pendingAmount = (Array.isArray(customer?.bills) ? customer.bills : []).reduce(
      (sum, bill) => {
        if (bill?.status === "paid") return sum;
        return sum + Math.max(toNumber(bill?.amount) - toNumber(bill?.paidAmount), 0);
      },
      0
    );

    if (pendingAmount <= 0) return;

    setActiveCustomerModal(customer);
    setShowBillModal(false);
    setNewPayment({
      billId: "",
      amount: String(pendingAmount),
      date: new Date().toISOString().split("T")[0],
      method: "Cash",
      reference: "",
      notes: "Full outstanding bill payment",
    });
    setShowPaymentModal(true);
  };

  const handleAddBill = (event) => {
    event.preventDefault();
    if (!activeCustomerModal?.id || !newBill.description.trim() || !newBill.amount) return;

    const billAmount = toNumber(newBill.amount);
    const updatedCustomer = {
      ...activeCustomerModal,
      bills: [
        ...(activeCustomerModal.bills || []),
        {
          id: `BILL-${Date.now()}`,
          description: newBill.description.trim(),
          amount: `PKR ${billAmount.toLocaleString()}`,
          date: newBill.date,
          dueDate: newBill.dueDate,
          notes: newBill.notes.trim(),
          status: "pending",
          paidAmount: 0,
        },
      ],
      totalDue: toNumber(activeCustomerModal.totalDue) + billAmount,
    };

    syncCustomerRecord(updatedCustomer);
    setNewBill({
      description: "",
      amount: "",
      date: new Date().toISOString().split("T")[0],
      dueDate: "",
      notes: "",
    });
  };

  const handleAddPayment = (event) => {
    event.preventDefault();
    if (!activeCustomerModal?.id || !newPayment.amount || !newPayment.date) return;

    const paymentAmount = toNumber(newPayment.amount);
    let remainingPayment = paymentAmount;
    const updatedBills = (activeCustomerModal.bills || []).map((bill) => {
      if (remainingPayment <= 0) return bill;
      if (newPayment.billId && bill.id !== newPayment.billId) return bill;
      if (bill.status === "paid") return bill;

      const billAmount = toNumber(bill.amount);
      const currentPaid = toNumber(bill.paidAmount);
      const dueLeft = Math.max(billAmount - currentPaid, 0);
      const applied = Math.min(dueLeft, remainingPayment);
      remainingPayment -= applied;
      const nextPaid = currentPaid + applied;

      return {
        ...bill,
        paidAmount: nextPaid,
        status: nextPaid >= billAmount ? "paid" : "pending",
      };
    });

    const appliedPayment = Math.max(paymentAmount - remainingPayment, 0);
    const refreshedTotalDue = updatedBills.reduce(
      (sum, bill) => sum + Math.max(toNumber(bill.amount) - toNumber(bill.paidAmount), 0),
      0
    );

    if (appliedPayment <= 0) return;

    const updatedCustomer = {
      ...activeCustomerModal,
      bills: updatedBills,
      paymentHistory: [
        ...(activeCustomerModal.paymentHistory || []),
        {
          id: `PAY-${Date.now()}`,
          billId: newPayment.billId,
          amount: appliedPayment,
          date: newPayment.date,
          method: newPayment.method,
          reference: newPayment.reference.trim(),
          notes: newPayment.notes.trim(),
        },
      ],
      totalDue: refreshedTotalDue,
    };

    syncCustomerRecord(updatedCustomer);
    setShowPaymentModal(false);
  };

  const buildCustomerPrintHtml = (customer, type, bill) => {
    const bills = type === "invoice" && bill ? [bill] : customer.bills || [];
    return `
      <html>
        <head>
          <title>${type === "invoice" ? "Customer Invoice" : "Customer Bills"}</title>
          <style>
            body { font-family: "Courier New", monospace; font-size: 12px; padding: 20px; margin: 0 auto; width: 380px; color: #000; }
            .title { text-align: center; font-size: 18px; font-weight: bold; margin-bottom: 10px; }
            .sub { text-align: center; margin-bottom: 12px; }
            .divider { border-top: 1px dashed #000; margin: 10px 0; }
            .row { display: flex; justify-content: space-between; gap: 8px; margin: 6px 0; }
          </style>
        </head>
        <body>
          <div class="title">Customer Bill Management</div>
          <div class="sub">${customer.name}</div>
          <div class="divider"></div>
          ${bills
            .map(
              (entry) => `
                <div class="row"><span>Bill ID:</span><span>${entry.id}</span></div>
                <div class="row"><span>Date:</span><span>${formatDate(entry.date)}</span></div>
                <div class="row"><span>Description:</span><span>${entry.description}</span></div>
                <div class="row"><span>Amount:</span><span>${entry.amount}</span></div>
                <div class="row"><span>Status:</span><span>${entry.status}</span></div>
                <div class="divider"></div>
              `
            )
            .join("")}
          <script>${type === "invoice" ? "window.print(); window.onafterprint = () => window.close();" : ""}</script>
        </body>
      </html>
    `;
  };

  const handlePrintAction = (customer, type, bill = null) => {
    const printWindow = window.open("", "_blank", "width=450,height=700");
    if (!printWindow) return;
    printWindow.document.write(buildCustomerPrintHtml(customer, type, bill));
    printWindow.document.close();
    if (type !== "invoice") {
      printWindow.print();
      printWindow.onafterprint = () => printWindow.close();
    }
  };

  const handlePrintPreview = (customer, type, bill = null) => {
    const previewWindow = window.open("", "_blank", "width=450,height=700");
    if (!previewWindow) return;
    previewWindow.document.write(buildCustomerPrintHtml(customer, type, bill));
    previewWindow.document.close();
  };

  const confirmDeleteCustomer = async () => {
    if (!customerToDelete?.id) return;

    try {
      const res = await apiRequest(`/customers/${customerToDelete.id}`, { method: "DELETE" });
      if (res?.success) {
        setCustomers((prev) => prev.filter((c) => c.id !== customerToDelete.id));
        if (viewCustomer?.id === customerToDelete.id) {
          setViewCustomer(null);
        }
      }
    } catch (error) {
      console.error("Delete Customer Error:", error);
    } finally {
      setDeleteModalOpen(false);
      setCustomerToDelete(null);
    }
  };

  const getStatusBadge = (status) => {
    const colors = {
      active:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
      inactive:
        "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
      pending:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    };

    const icons = {
      active: CheckCircle,
      inactive: X,
      pending: Clock,
    };

    const Icon = icons[status];
    const colorClass =
      colors[status] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";

    return (
      <span
        className={`px-3 py-1.5 rounded-full text-xs font-medium inline-flex items-center gap-1.5 ${colorClass}`}
      >
        {Icon ? <Icon className="w-3 h-3" /> : null}
        {status?.charAt(0).toUpperCase() + status?.slice(1)}
      </span>
    );
  };

  const handleExportCustomers = () => {
    const rows = filteredCustomers.map((customer) => [
      customer.id || "",
      customer.name || "",
      customer.email || "",
      customer.phone || "",
      customer.cnic || "",
      customer.address || "",
      customer.status || "",
      (customer.tags || []).join(" | "),
      formatDate(customer.customerSince),
      customer.lastPurchase || "",
      toNumber(customer.totalSpent),
      toNumber(customer.totalDue),
      toNumber(customer.satisfaction),
    ]);

    const header = [
      "Customer ID",
      "Name",
      "Email",
      "Phone",
      "CNIC",
      "Address",
      "Status",
      "Tags",
      "Customer Since",
      "Last Purchase",
      "Total Spent",
      "Total Due",
      "Satisfaction",
    ];

    const dateStamp = new Date().toISOString().slice(0, 10);
    downloadCSV(`customers-detail-${dateStamp}.csv`, [header, ...rows]);
  };

  return (
    <div className="relative z-0 bg-[radial-gradient(circle_at_top_left,#e0f2fe,transparent_35%),radial-gradient(circle_at_85%_20%,#ecfdf3,transparent_30%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] dark:bg-[radial-gradient(circle_at_top_left,#0f172a,transparent_35%),radial-gradient(circle_at_85%_20%,#0b1324,transparent_30%),linear-gradient(to_bottom,#0b1220,#0f172a)]">
      <div className={`${viewCustomer ? "max-w-7xl" : "max-w-5xl"} mx-auto px-3 py-6 sm:px-6 lg:px-0`}>
            <CustomersHeaderSection
              stats={stats}
              canCreateCustomer={true}
              onExport={handleExportCustomers}
            />

            <CustomersFilterBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              sortBy={sortBy}
              setSortBy={setSortBy}
              sortOptions={sortOptions}
              viewMode={viewMode}
              setViewMode={setViewMode}
              statusFilters={statusFilters}
              selectedStatus={selectedStatus}
              setSelectedStatus={setSelectedStatus}
              tagFilters={tagFilters}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
            />

            <CustomersResultsSummary
              paginatedCustomers={paginatedCustomers}
              filteredCustomers={filteredCustomers}
              searchTerm={searchTerm}
            />

            {viewCustomer ? (
              <div className="space-y-4">
                <div className="flex flex-col gap-3 rounded-2xl border border-white/70 bg-white/80 px-4 py-4 shadow-xl shadow-black/5 backdrop-blur dark:border-gray-700/70 dark:bg-gray-800/80 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                  <div className="min-w-0">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">Customer Details</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Showing 1 record</p>
                  </div>
                  <button
                    onClick={() => setViewCustomer(null)}
                    className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-700/60 dark:text-gray-200 dark:hover:bg-gray-700"
                  >
                    Back to all
                  </button>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
                  <div className="xl:col-span-5 bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg shadow-black/5 border border-white/70 dark:border-gray-700/70 overflow-hidden">
                    <div className="p-6">
                      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <span className="text-2xl font-bold text-white">
                              {viewCustomer.name?.charAt(0)}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <h3 className="break-words font-bold text-gray-900 dark:text-white">{viewCustomer.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Customer since{" "}
                              {viewCustomer.customerSince
                                ? new Date(viewCustomer.customerSince).toLocaleDateString("en-US", {
                                    month: "short",
                                    year: "numeric",
                                  })
                                : "-"}
                            </p>
                          </div>
                        </div>
                        <div className="self-start">{getStatusBadge(viewCustomer.status)}</div>
                      </div>

                      <div className="space-y-2 text-sm mb-4">
                        <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 break-all">
                          <Mail className="w-4 h-4 shrink-0" />
                          {viewCustomer.email || "-"}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 break-all">
                          <Phone className="w-4 h-4 shrink-0" />
                          {viewCustomer.phone || "-"}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          <span className="font-medium text-gray-900 dark:text-white">CNIC:</span>{" "}
                          {viewCustomer.cnic || "-"}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          <span className="font-medium text-gray-900 dark:text-white">Address:</span>{" "}
                          {viewCustomer.address || "-"}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Total Spent</p>
                          <p className="text-sm font-bold text-gray-900 dark:text-white">
                            PKR {(Number(viewCustomer.totalSpent) || 0).toLocaleString()}
                          </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Total Due</p>
                          <p className="text-sm font-bold text-gray-900 dark:text-white">
                            PKR {(Number(viewCustomer.totalDue) || 0).toLocaleString()}
                          </p>
                        </div>
                      </div>

                       <div className="mb-4 flex items-start justify-between gap-3 text-sm text-gray-600 dark:text-gray-400">
                         <span>Last Purchase</span>
                         <span className="text-right font-medium text-gray-900 dark:text-white">
                           {viewCustomer.lastPurchase || "No purchases yet"}
                         </span>
                       </div>

                        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                         <button
                          onClick={() => openBillManagement(viewCustomer)}
                           className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                         >
                          <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4" />Bills</span>
                        </button>
                       <button
                          onClick={() => openPaymentModal(viewCustomer)}
                           className="rounded-lg border border-emerald-300 px-3 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50"
                        >
                          <span className="inline-flex items-center gap-2"><Wallet className="h-4 w-4" />Payment</span>
                        </button>
                        <button
                          onClick={() => openTotalPaymentModal(viewCustomer)}
                          disabled={toNumber(viewCustomer.totalDue) <= 0}
                           className="rounded-lg border border-emerald-300 px-3 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <span className="inline-flex items-center gap-2"><Wallet className="h-4 w-4" />Total Mark to Paid</span>
                        </button>
                        <Link
                          href={canEditCustomer ? `/AdminDashboard/components/customers/Edit?id=${viewCustomer.id}` : "#"}
                          aria-disabled={!canEditCustomer}
                          onClick={(event) => {
                            if (!canEditCustomer) event.preventDefault();
                          }}
                           className={`px-4 py-2 rounded-lg transition text-sm font-medium text-center sm:flex-1 ${
                             canEditCustomer
                               ? "bg-blue-600 text-white hover:bg-blue-700"
                               : "bg-gray-200 text-gray-500 cursor-not-allowed"
                          }`}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => requestDeleteCustomer(viewCustomer)}
                          disabled={!canDeleteCustomer}
                           className="rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
                         >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="xl:col-span-7 bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-lg shadow-black/5 border border-white/70 dark:border-gray-700/70">
                    <div className="p-6">
                      <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                        Customer Overview
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-700/50">
                          <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">Customer Type</p>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {viewCustomer.customerType || "-"}
                          </p>
                        </div>
                        <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-700/50">
                          <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">Purchase Count</p>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {Number(viewCustomer.purchaseCount || 0)}
                          </p>
                        </div>
                        <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-700/50">
                          <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">Payment History</p>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {Array.isArray(viewCustomer.paymentHistory)
                              ? viewCustomer.paymentHistory.length
                              : 0}{" "}
                            records
                          </p>
                        </div>
                        <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-700/50">
                          <p className="mb-1 text-xs text-gray-500 dark:text-gray-400">Bills</p>
                          <p className="text-sm font-semibold text-gray-900 dark:text-white">
                            {Array.isArray(viewCustomer.bills) ? viewCustomer.bills.length : 0}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 rounded-xl bg-gray-50 p-4 dark:bg-gray-700/50">
                        <h4 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
                          Notes
                        </h4>
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                          <p>
                            <span className="font-medium text-gray-900 dark:text-white">Email:</span>{" "}
                            {viewCustomer.email || "-"}
                          </p>
                          <p>
                            <span className="font-medium text-gray-900 dark:text-white">Phone:</span>{" "}
                            {viewCustomer.phone || "-"}
                          </p>
                          <p>
                            <span className="font-medium text-gray-900 dark:text-white">Address:</span>{" "}
                            {viewCustomer.address || "-"}
                          </p>
                          <p>
                            <span className="font-medium text-gray-900 dark:text-white">Tags:</span>{" "}
                            {Array.isArray(viewCustomer.tags) && viewCustomer.tags.length
                              ? viewCustomer.tags.join(", ")
                              : "No tags"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : viewMode === "grid" ? (
              <CustomersGridView
                paginatedCustomers={paginatedCustomers}
                setViewCustomer={setViewCustomer}
                getStatusBadge={getStatusBadge}
                handleDeleteCustomer={requestDeleteCustomer}
                canEditCustomer={canEditCustomer}
                canDeleteCustomer={canDeleteCustomer}
              />
            ) : (
              <CustomersListView
                paginatedCustomers={paginatedCustomers}
                getStatusBadge={getStatusBadge}
                handleDeleteCustomer={requestDeleteCustomer}
                canEditCustomer={canEditCustomer}
                canDeleteCustomer={canDeleteCustomer}
                setViewCustomer={setViewCustomer}
              />
            )}

            {totalPages > 1 && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Page {currentPage} of {totalPages}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="flex-1 rounded-xl border-2 border-gray-200 px-4 py-2 transition hover:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 sm:flex-none"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="flex-1 rounded-xl border-2 border-gray-200 px-4 py-2 transition hover:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 sm:flex-none"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

        <CustomersTips />
      </div>

      <DeleteCustomerModal
        deleteModalOpen={deleteModalOpen}
        setDeleteModalOpen={setDeleteModalOpen}
        customerToDelete={customerToDelete}
        confirmDelete={confirmDeleteCustomer}
      />
      {showBillModal && activeCustomerModal ? (
        <BillManagementModal
          supplier={activeCustomerModal}
          newBill={newBill}
          setNewBill={setNewBill}
          handleAddBill={handleAddBill}
          setShowBillModal={setShowBillModal}
          handleAddNewPayment={openPaymentModal}
          handlePayAllBills={openTotalPaymentModal}
          handlePrintAction={handlePrintAction}
          handlePrintPreview={handlePrintPreview}
          getStatusBadge={getStatusBadge}
          formatDate={formatDate}
        />
      ) : null}
      {showPaymentModal && activeCustomerModal ? (
        <AddPaymentModal
          supplier={activeCustomerModal}
          newPayment={newPayment}
          setNewPayment={setNewPayment}
          handleAddPayment={handleAddPayment}
          setShowPaymentModal={setShowPaymentModal}
          paymentMethods={paymentMethods}
        />
      ) : null}
    </div>
  );
}
