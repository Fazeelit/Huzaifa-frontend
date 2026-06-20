// app/suppliers/page.jsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Truck,
  Building,
  Search,
  Filter,
  Plus,
  CheckCircle,
  XCircle,
  AlertCircle,
  ChevronDown,
  FileText,
  Printer,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  AlertTriangle,
  IndianRupee,
  PrinterIcon,
  ArrowLeft,
  Grid3x3,
  List,
  Eye,
  EyeOff,
  FilePen,
  Trash2
} from "lucide-react";

import SupplierCard from "../suppliers/SupplierCard";
import AddSupplierModal from "../suppliers/AddSupplierModal";
import EditSupplierModal from "../suppliers/EditSupplierModal";
import BillManagementModal from "../suppliers/BillManagementModal";
import AddPaymentModal from "../suppliers/AddPaymentModal";
import PrintModal from "../suppliers/PrintModal";
import PrintPreviewModal from "../suppliers/PrintPreviewModal";
import DeleteSupplierModal from "../suppliers/DeleteSupplierModal";
import { apiRequest } from "../../authservice/api";
import { hasPermission, readStoredAuth } from "../../authservice/auth";
const statuses = ["All Status", "active", "pending", "inactive"];
const billStatuses = ["All Bills", "paid", "pending", "overdue"];
const paymentMethods = ["Cash", "Bank Transfer", "Check", "Mobile Payment", "Credit Card"];
const printerTypes = ["Thermal Printer", "Document Printer", "Label Printer", "Mobile Printer"];

const defaultStatistics = {
  totalBills: 0,
  paidBills: 0,
  pendingBills: 0,
  overdueBills: 0,
  totalAmount: "Rs. 0",
  paidAmount: "Rs. 0",
  pendingAmount: "Rs. 0",
  overdueAmount: "Rs. 0",
  lastPaymentDate: "",
  nextPaymentDue: "",
  averagePaymentDays: 0,
};
const REMAINING_BILL_MARKER = "__remaining_bill__";

const buildStatisticsFromBills = (bills = []) => {
  const normalizedBills = Array.isArray(bills) ? bills : [];

  return normalizedBills.reduce(
    (acc, bill) => {
      const amount = parseAmount(bill?.amount);
      const paidAmount = parseAmount(bill?.paidAmount);
      const remainingAmount = Math.max(amount - paidAmount, 0);
      const status = String(bill?.status || "").toLowerCase();

      acc.totalBills += 1;
      acc.totalAmount += amount;

      if (status === "paid") {
        acc.paidBills += 1;
        acc.paidAmount += amount;
      } else if (status === "overdue") {
        acc.overdueBills += 1;
        acc.overdueAmount += remainingAmount;
      } else {
        acc.pendingBills += 1;
        acc.pendingAmount += remainingAmount;
      }

      return acc;
    },
    {
      totalBills: 0,
      paidBills: 0,
      pendingBills: 0,
      overdueBills: 0,
      totalAmount: 0,
      paidAmount: 0,
      pendingAmount: 0,
      overdueAmount: 0,
      lastPaymentDate: "",
      nextPaymentDue: "",
      averagePaymentDays: 0,
    }
  );
};

const hasMeaningfulStatistics = (statistics = {}) =>
  Number(statistics?.totalBills || 0) > 0 ||
  parseAmount(statistics?.totalAmount) > 0 ||
  parseAmount(statistics?.paidAmount) > 0 ||
  parseAmount(statistics?.pendingAmount) > 0 ||
  parseAmount(statistics?.overdueAmount) > 0;

const hasMeaningfulPurchaseStats = (purchaseStats = null) =>
  Number(purchaseStats?.totalBills || 0) > 0 ||
  parseAmount(purchaseStats?.totalAmount) > 0 ||
  parseAmount(purchaseStats?.paidAmount) > 0 ||
  parseAmount(purchaseStats?.pendingAmount) > 0;

const normalizeSupplier = (supplier) => ({
  ...supplier,
  id: supplier._id || supplier.id,
  name: supplier.name || "",
  contactPerson: supplier.contactPerson || "",
  email: supplier.email || "",
  phone: supplier.phone || supplier.mobile || "",
  company: supplier.company || "",
  status: supplier.status || "active",
  openingBalance: supplier.openingBalance || "",
  creditLimit: supplier.creditLimit || "",
  preferred: Boolean(supplier.preferred),
  products: Array.isArray(supplier.products) ? supplier.products : [],
  bills: Array.isArray(supplier.bills) ? supplier.bills : [],
  paymentHistory: Array.isArray(supplier.paymentHistory)
    ? supplier.paymentHistory
    : [],
  statistics: (() => {
    const bills = Array.isArray(supplier.bills) ? supplier.bills : [];
    const providedStatistics = { ...defaultStatistics, ...(supplier.statistics || {}) };

    if (hasMeaningfulStatistics(providedStatistics) || bills.length === 0) {
      return providedStatistics;
    }

    const derivedStatistics = buildStatisticsFromBills(bills);
    return {
      ...defaultStatistics,
      ...derivedStatistics,
      totalAmount: formatRs(derivedStatistics.totalAmount),
      paidAmount: formatRs(derivedStatistics.paidAmount),
      pendingAmount: formatRs(derivedStatistics.pendingAmount),
      overdueAmount: formatRs(derivedStatistics.overdueAmount),
    };
  })(),
  purchaseCount: Number(supplier.purchaseCount) || 0,
});

const normalizePurchase = (purchase) => ({
  ...purchase,
  id: purchase._id || purchase.id,
  supplier: purchase.supplier || purchase.supplierName || "",
});

const normalizeSupplierPayment = (payment = {}) => ({
  ...payment,
  id: String(payment?._id || payment?.id || payment?.paymentId || "").trim(),
  supplierId: String(payment?.supplierId || "").trim(),
  supplier: payment?.supplier || payment?.supplierName || "",
  supplierName: payment?.supplierName || payment?.supplier || "",
  amount: Number(payment?.paidAmount ?? payment?.amount ?? 0),
  notes: String(payment?.notes || "").trim(),
});

const formatRs = (amount) => `Rs. ${Number(amount || 0).toLocaleString("en-IN")}`;

const parseAmount = (value) => {
  if (typeof value === "number") return value;
  const cleaned = String(value || "").replace(/[^0-9-]/g, "");
  return cleaned ? Number(cleaned) : 0;
};

const getSupplierAccountPendingAmount = (supplier, purchaseStats = null, supplierPayments = []) => {
  const supplierBills = Array.isArray(supplier?.bills) ? supplier.bills : [];
  const totalRemainingFromBills = supplierBills.reduce((sum, bill) => {
    const explicitRemaining = parseAmount(bill?.remainingAmount);
    if (explicitRemaining > 0) {
      return sum + explicitRemaining;
    }

    const billAmount = parseAmount(bill?.amount);
    const billPaidAmount = parseAmount(bill?.paidAmount);
    return sum + Math.max(billAmount - billPaidAmount, 0);
  }, 0);
  const totalDebitFromBills = supplierBills.reduce(
    (sum, bill) => sum + parseAmount(bill?.amount),
    0
  );
  const supplierPaymentHistory =
    Array.isArray(supplierPayments) && supplierPayments.length > 0
      ? supplierPayments
      : Array.isArray(supplier?.paymentHistory)
        ? supplier.paymentHistory
        : [];
  const totalCredit = supplierPaymentHistory.reduce((sum, payment) => {
    if (String(payment?.notes || "").trim() === REMAINING_BILL_MARKER) {
      return sum;
    }
    return sum + parseAmount(payment?.amount ?? payment?.paidAmount);
  }, 0);
  const fallbackDebit =
    parseAmount(purchaseStats?.totalAmount) ||
    parseAmount(supplier?.statistics?.totalAmount);

  if (supplierBills.length > 0 && totalCredit <= 0) {
    return Math.max(totalRemainingFromBills, 0);
  }

  const totalDebit = totalDebitFromBills > 0 ? totalDebitFromBills : fallbackDebit;
  return Math.max(totalDebit - totalCredit, 0);
};

const hasSupplierAccountSnapshot = (supplier = {}) =>
  Array.isArray(supplier?.bills) && supplier.bills.length > 0 ||
  Array.isArray(supplier?.paymentHistory) && supplier.paymentHistory.length > 0 ||
  typeof supplier?.totalDue !== "undefined";

const emptySupplierForm = {
  name: "",
  company: "",
  contactPerson: "",
  email: "",
  phone: "",
  mobile: "",
  address: "",
  website: "",
  taxId: "",
  openingBalance: "",
  creditLimit: "",
  notes: "",
  status: "active",
  preferred: false,
  products: [],
};

export default function SuppliersPage() {
  const router = useRouter();
  const [suppliers, setSuppliers] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [supplierPayments, setSupplierPayments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedBillStatus, setSelectedBillStatus] = useState("All Bills");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState("list");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState(null);
  const [showBillModal, setShowBillModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [showPrintPreview, setShowPrintPreview] = useState(false);
  const [viewSupplier, setViewSupplier] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [supplierToDelete, setSupplierToDelete] = useState(null);
  const [printerStatus, setPrinterStatus] = useState({
    thermal: "disconnected",
    document: "disconnected"
  });
  const [bluetoothDevices, setBluetoothDevices] = useState([]);
  const [networkPrinters, setNetworkPrinters] = useState([]);
  const [selectedPrinter, setSelectedPrinter] = useState(null);
  const [selectedPrinterType, setSelectedPrinterType] = useState("thermal");
  const [printType, setPrintType] = useState("invoice");
  const [printDocument, setPrintDocument] = useState(null);
  const [printPreviewZoom, setPrintPreviewZoom] = useState(100);
  const [printPreviewType, setPrintPreviewType] = useState("thermal");
  const [newSupplier, setNewSupplier] = useState(emptySupplierForm);
  const [newBill, setNewBill] = useState({
    description: "",
    amount: "",
    date: new Date().toISOString().split('T')[0],
    dueDate: "",
    notes: ""
  });
  const [newPayment, setNewPayment] = useState({
    amount: "",
    date: new Date().toISOString().split('T')[0],
    method: "Cash",
    reference: "",
    notes: "",
    billId: ""
  });
  const [canCreateSupplier, setCanCreateSupplier] = useState(false);
  const [canEditSupplier, setCanEditSupplier] = useState(false);
  const [canUpdateSupplier, setCanUpdateSupplier] = useState(false);
  const [canDeleteSupplier, setCanDeleteSupplier] = useState(false);
  const [showSummaryValues, setShowSummaryValues] = useState(false);

  useEffect(() => {
    const syncPermissions = () => {
      const { permissions } = readStoredAuth();
      setCanCreateSupplier(hasPermission(permissions, "SUPPLIER_CREATE"));
      setCanEditSupplier(hasPermission(permissions, "SUPPLIER_EDIT"));
      setCanUpdateSupplier(hasPermission(permissions, "SUPPLIER_EDIT"));
      setCanDeleteSupplier(hasPermission(permissions, "SUPPLIER_DELETE"));
    };

    syncPermissions();
    window.addEventListener("storage", syncPermissions);
    return () => window.removeEventListener("storage", syncPermissions);
  }, []);

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const response = await apiRequest("/suppliers", { method: "GET" });
        if (response?.success) {
          setSuppliers((response.suppliers || []).map(normalizeSupplier));
        }
      } catch (error) {
        console.error("Fetch Suppliers Error:", error);
      }
    };

    fetchSuppliers();
  }, []);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await apiRequest("/purchases", { method: "GET" });
        if (response?.success) {
          setPurchases((response.purchases || []).map(normalizePurchase));
        }
      } catch (error) {
        console.error("Fetch Purchases Error:", error);
      }
    };

    fetchPurchases();
  }, []);

  useEffect(() => {
    const fetchSupplierPayments = async () => {
      try {
        const response = await apiRequest("/supplierpayments", { method: "GET" });
        if (response?.success) {
          setSupplierPayments(
            (Array.isArray(response?.supplierpayments) ? response.supplierpayments : []).map(normalizeSupplierPayment)
          );
        }
      } catch (error) {
        console.error("Fetch Supplier Payments Error:", error);
      }
    };

    fetchSupplierPayments();
  }, []);

  const purchaseCountBySupplier = purchases.reduce((map, purchase) => {
    const key = String(purchase.supplier || "").trim();
    if (!key) return map;
    map.set(key, (map.get(key) || 0) + 1);
    return map;
  }, new Map());

  const purchaseStatsBySupplier = purchases.reduce((map, purchase) => {
    const key = String(purchase.supplier || "").trim();
    if (!key) return map;
    const current = map.get(key) || {
      totalBills: 0,
      totalAmount: 0,
      paidAmount: 0,
      pendingAmount: 0,
      lastPaymentDate: "",
    };

    const totalAmount = Number(purchase.totalAmount || 0);
    const paidAmount = Number(purchase.paidAmount || 0);
    const pendingAmount =
      Number(purchase.balance || 0) ||
      Math.max(totalAmount - paidAmount, 0);
    const purchaseDate = String(purchase.purchaseDate || purchase.date || "").trim();

    current.totalBills += 1;
    current.totalAmount += totalAmount;
    current.paidAmount += paidAmount;
    current.pendingAmount += pendingAmount;
    if (purchaseDate) {
      if (!current.lastPaymentDate || new Date(purchaseDate) > new Date(current.lastPaymentDate)) {
        current.lastPaymentDate = purchaseDate;
      }
    }

    map.set(key, current);
    return map;
  }, new Map());

  const suppliersWithPurchaseCounts = suppliers.map((supplier) => {
    const key = String(supplier.name || "").trim();
    const purchaseStats = purchaseStatsBySupplier.get(key);
    const purchaseCount = purchaseCountBySupplier.get(key) || 0;
    const supplierLookupKeys = buildSupplierLookupKeys(supplier);
    const supplierIds = [supplier?._id, supplier?.id].map((value) => String(value || "").trim()).filter(Boolean);
    const matchedSupplierPayments = supplierPayments.filter((payment) => {
      const paymentLookupKeys = buildSupplierLookupKeys(payment);
      return (
        (payment.supplierId && supplierIds.includes(String(payment.supplierId || "").trim())) ||
        paymentLookupKeys.some((keyValue) => supplierLookupKeys.includes(keyValue))
      );
    });
    const accountPendingAmount = getSupplierAccountPendingAmount(
      supplier,
      purchaseStats,
      matchedSupplierPayments
    );
    const supplierSnapshotPendingAmount = Math.max(
      parseAmount(supplier?.totalDue ?? supplier?.statistics?.pendingAmount),
      0
    );
    const effectivePendingAmount = hasSupplierAccountSnapshot(supplier)
      ? Math.max(accountPendingAmount, supplierSnapshotPendingAmount)
      : accountPendingAmount;

    return {
      ...supplier,
      purchaseCount,
      accountPendingAmount: effectivePendingAmount,
      purchaseStats: purchaseStats
        ? {
            ...purchaseStats,
            totalAmount: formatRs(purchaseStats.totalAmount),
            paidAmount: formatRs(purchaseStats.paidAmount),
            pendingAmount: formatRs(effectivePendingAmount),
          }
        : null,
    };
  });

  // Filter suppliers
  const filteredSuppliers = suppliersWithPurchaseCounts.filter(supplier => {
    const supplierBills = Array.isArray(supplier.bills) ? supplier.bills : [];
    const matchesSearch = 
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.phone.includes(searchTerm) ||
      supplier.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (supplier.products && supplier.products.some(p => p.toLowerCase().includes(searchTerm.toLowerCase())));
    
    const matchesStatus = selectedStatus === "All Status" || supplier.status === selectedStatus;
    const normalizedBillFilter = String(selectedBillStatus || "").toLowerCase();
    const matchesBillStatus =
      selectedBillStatus === "All Bills" ||
      (supplierBills.length > 0
        ? supplierBills.some(
            (bill) => String(bill?.status || "").toLowerCase() === normalizedBillFilter
          )
        : normalizedBillFilter === "paid"
          ? Number(supplier.statistics.paidBills) > 0
          : normalizedBillFilter === "pending"
            ? Number(supplier.statistics.pendingBills) > 0
            : normalizedBillFilter === "overdue"
              ? Number(supplier.statistics.overdueBills) > 0
              : true);
    
    return matchesSearch && matchesStatus && matchesBillStatus;
  });

  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(filteredSuppliers.length / pageSize));
  const paginatedSuppliers = filteredSuppliers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedStatus, selectedBillStatus]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  // Calculate overall statistics
  const calculateOverallStats = (supplierList) => {
    let totalSuppliers = supplierList.length;
    let totalBills = 0;
    let totalAmount = 0;
    let totalPaid = 0;
    let totalPendingAmount = 0;
    let totalPendingBills = 0;
    let totalOverdueBills = 0;

    supplierList.forEach((supplier) => {
      const purchaseStats = hasMeaningfulPurchaseStats(supplier.purchaseStats)
        ? supplier.purchaseStats
        : null;
      const supplierBills = Array.isArray(supplier.bills) ? supplier.bills : [];

      totalBills +=
        purchaseStats?.totalBills ??
        supplier.statistics.totalBills ??
        supplierBills.length;

      const amountDisplay =
        purchaseStats?.totalAmount ?? supplier.statistics.totalAmount ?? "Rs. 0";
      totalAmount += parseAmount(amountDisplay);

      totalPaid +=
        purchaseStats?.paidAmount
          ? parseAmount(purchaseStats.paidAmount)
          : parseAmount(supplier.statistics.paidAmount);

      totalPendingAmount +=
        purchaseStats?.pendingAmount
          ? parseAmount(purchaseStats.pendingAmount)
          : parseAmount(supplier.statistics.pendingAmount);

      if (supplierBills.length) {
        supplierBills.forEach((bill) => {
          if (bill.status === "pending") totalPendingBills += 1;
          if (bill.status === "overdue") totalOverdueBills += 1;
        });
      } else {
        totalPendingBills += supplier.statistics.pendingBills || 0;
        totalOverdueBills += supplier.statistics.overdueBills || 0;
      }
    });

    return {
      totalSuppliers,
      totalBills,
      totalAmount: `Rs. ${totalAmount.toLocaleString('en-IN')}`,
      totalPaid: `Rs. ${totalPaid.toLocaleString('en-IN')}`,
      totalPendingAmount: `Rs. ${totalPendingAmount.toLocaleString('en-IN')}`,
      pendingBills: totalPendingBills,
      overdueBills: totalOverdueBills,
      pendingPercentage: totalAmount > 0 ? ((totalPendingAmount / totalAmount) * 100).toFixed(1) : "0"
    };
  };

  const overallStats = calculateOverallStats(filteredSuppliers);

  // Handle add supplier
  const handleAddSupplier = (createdSupplier) => {
    if (!canCreateSupplier) {
      alert("You do not have permission to create suppliers.");
      return;
    }
    if (!createdSupplier) return;
    setSuppliers((prev) => [normalizeSupplier(createdSupplier), ...prev]);
    setNewSupplier(emptySupplierForm);
  };

  // Handle add bill
  const handleAddBill = (e) => {
    if (!canUpdateSupplier) {
      alert("You do not have permission to update supplier bills.");
      return;
    }
    e.preventDefault();
    
    const { description, amount, date } = newBill;
    
    if (!description || !amount || !date) {
      alert("Please fill required fields: Description, Amount, and Date");
      return;
    }

    const billId = `BILL-${Date.now().toString().slice(-6)}`;
    const newBillData = {
      id: billId,
      ...newBill,
      amount: `Rs. ${parseInt(amount).toLocaleString('en-IN')}`,
      status: "pending",
      paidDate: "",
      paymentMethod: "",
      reference: ""
    };

    const updatedSuppliers = suppliers.map(supplier => {
      if (supplier.id === viewSupplier.id) {
        const updatedBills = [newBillData, ...supplier.bills];
        const stats = calculateSupplierStats(supplier, updatedBills);
        
        return {
          ...supplier,
          bills: updatedBills,
          statistics: stats
        };
      }
      return supplier;
    });

    setSuppliers(updatedSuppliers);
    setNewBill({
      description: "",
      amount: "",
      date: new Date().toISOString().split('T')[0],
      dueDate: "",
      notes: ""
    });
    setShowBillModal(false);
    
    alert("Bill added successfully!");
  };

  // Handle add payment
  const handleAddPayment = (e) => {
    if (!canUpdateSupplier) {
      alert("You do not have permission to add supplier payments.");
      return;
    }
    e.preventDefault();
    
    const { amount, date, method, billId } = newPayment;
    
    if (!amount || !date || !method) {
      alert("Please fill required fields: Amount, Date, and Payment Method");
      return;
    }

    const paymentId = `PAY-${Date.now().toString().slice(-6)}`;
    const newPaymentData = {
      id: paymentId,
      ...newPayment,
      amount: `Rs. ${parseInt(amount).toLocaleString('en-IN')}`,
      reference: newPayment.reference || `REF-${Date.now().toString().slice(-6)}`
    };

    const updatedSuppliers = suppliers.map(supplier => {
      if (supplier.id === viewSupplier.id) {
        // Update bill status if billId is provided
        const updatedBills = supplier.bills.map(bill => {
          if (bill.id === billId) {
            return {
              ...bill,
              status: "paid",
              paidDate: date,
              paymentMethod: method,
              reference: newPaymentData.reference
            };
          }
          return bill;
        });

        // Add to payment history
        const updatedPaymentHistory = [newPaymentData, ...supplier.paymentHistory];
        
        const stats = calculateSupplierStats(supplier, updatedBills);
        
        return {
          ...supplier,
          bills: updatedBills,
          paymentHistory: updatedPaymentHistory,
          statistics: stats
        };
      }
      return supplier;
    });

    setSuppliers(updatedSuppliers);
    setNewPayment({
      amount: "",
      date: new Date().toISOString().split('T')[0],
      method: "Cash",
      reference: "",
      notes: "",
      billId: ""
    });
    setShowPaymentModal(false);
    
    alert("Payment recorded successfully!");
  };

  // Calculate supplier statistics
  const calculateSupplierStats = (supplier, bills = supplier.bills) => {
    let totalBills = bills.length;
    let paidBills = 0;
    let pendingBills = 0;
    let overdueBills = 0;
    let totalAmount = 0;
    let paidAmount = 0;
    let pendingAmount = 0;
    let overdueAmount = 0;
    let lastPaymentDate = "";
    let totalPaymentDays = 0;
    let paymentCount = 0;

    bills.forEach(bill => {
      const amount = parseFloat(bill.amount.replace(/[^0-9.-]+/g, ""));
      totalAmount += amount;
      
      if (bill.status === "paid") {
        paidBills++;
        paidAmount += amount;
        if (bill.paidDate) {
          lastPaymentDate = bill.paidDate;
          // Calculate payment days
          const billDate = new Date(bill.date);
          const paidDate = new Date(bill.paidDate);
          const daysDiff = Math.ceil((paidDate - billDate) / (1000 * 60 * 60 * 24));
          totalPaymentDays += daysDiff;
          paymentCount++;
        }
      } else if (bill.status === "pending") {
        pendingBills++;
        pendingAmount += amount;
      } else if (bill.status === "overdue") {
        overdueBills++;
        overdueAmount += amount;
      }
    });

    // Calculate average payment days
    const averagePaymentDays = paymentCount > 0 ? Math.round(totalPaymentDays / paymentCount) : 0;

    // Calculate next payment due (if there are pending bills)
    let nextPaymentDue = "";
    if (pendingBills > 0) {
      const pendingBillsWithDate = bills.filter(bill => bill.status === "pending" && bill.date);
      if (pendingBillsWithDate.length > 0) {
        // Find the oldest pending bill and add payment terms
        const oldestBill = pendingBillsWithDate.reduce((oldest, current) => 
          new Date(current.date) < new Date(oldest.date) ? current : oldest
        );
        const dueDate = new Date(oldestBill.date);
        dueDate.setDate(dueDate.getDate() + 30); // Default Net 30
        nextPaymentDue = dueDate.toISOString().split('T')[0];
      }
    }

    return {
      totalBills,
      paidBills,
      pendingBills,
      overdueBills,
      totalAmount: `Rs. ${totalAmount.toLocaleString('en-IN')}`,
      paidAmount: `Rs. ${paidAmount.toLocaleString('en-IN')}`,
      pendingAmount: `Rs. ${pendingAmount.toLocaleString('en-IN')}`,
      overdueAmount: `Rs. ${overdueAmount.toLocaleString('en-IN')}`,
      lastPaymentDate,
      nextPaymentDue,
      averagePaymentDays
    };
  };

  // Handle delete supplier
  const requestDeleteSupplier = (supplier) => {
    if (!canDeleteSupplier) {
      alert("You do not have permission to delete suppliers.");
      return;
    }

    setSupplierToDelete(supplier);
    setDeleteModalOpen(true);
  };

  const confirmDeleteSupplier = async () => {
    if (!supplierToDelete?.id) return;

    try {
      const response = await apiRequest(`/suppliers/${supplierToDelete.id}`, {
        method: "DELETE",
      });
      if (response?.success) {
        setSuppliers((prev) => prev.filter((s) => s.id !== supplierToDelete.id));
        if (viewSupplier?.id === supplierToDelete.id) {
          setViewSupplier(null);
        }
      }
    } catch (error) {
      console.error("Delete Supplier Error:", error);
    } finally {
      setDeleteModalOpen(false);
      setSupplierToDelete(null);
    }
  };

  // Handle view supplier
  const handleViewSupplier = (supplier) => {
    router.push(`/AdminDashboard/suppliers/${supplier.id}`);
  };

  const handleEditSupplier = (supplier) => {
    if (!canEditSupplier) {
      alert("You do not have permission to edit suppliers.");
      return;
    }
    setEditingSupplier(supplier);
    setShowEditModal(true);
  };

  const handleSupplierUpdated = (updatedSupplier) => {
    const normalized = normalizeSupplier(updatedSupplier);
    setSuppliers((prev) =>
      prev.map((supplier) =>
        supplier.id === normalized.id ? normalized : supplier
      )
    );
  };

  // Handle view bill management
  const handleViewBillManagement = (supplier) => {
    if (!canUpdateSupplier) {
      alert("You do not have permission to manage supplier bills.");
      return;
    }
    setViewSupplier(supplier);
    setShowBillModal(true);
  };

  // Handle add new bill
  const handleAddNewBill = (supplier) => {
    if (!canUpdateSupplier) {
      alert("You do not have permission to add bills.");
      return;
    }
    setViewSupplier(supplier);
    setNewBill({
      description: "",
      amount: "",
      date: new Date().toISOString().split('T')[0],
      dueDate: "",
      notes: ""
    });
    setShowBillModal(true);
  };

  // Handle add new payment
  const handleAddNewPayment = (supplier, billId = "") => {
    if (!canUpdateSupplier) {
      alert("You do not have permission to add payments.");
      return;
    }
    setViewSupplier(supplier);
    setNewPayment({
      amount: billId ? supplier.bills.find(b => b.id === billId)?.amount.replace(/[^0-9.-]+/g, "") || "" : "",
      date: new Date().toISOString().split('T')[0],
      method: "Cash",
      reference: "",
      notes: "",
      billId: billId
    });
    setShowPaymentModal(true);
  };

  // Handle print actions
  const handlePrintAction = (supplier, type, bill = null) => {
    setViewSupplier(supplier);
    setPrintType(type);
    if (bill) {
      setViewSupplier({...supplier, selectedBill: bill});
    }
    
    // Generate print document for preview
    const printDoc = generatePrintDocument(supplier, type, bill);
    setPrintDocument(printDoc);
    
    setShowPrintModal(true);
  };

  // Handle print preview
  const handlePrintPreview = (supplier, type, bill = null) => {
    setViewSupplier(supplier);
    setPrintType(type);
    if (bill) {
      setViewSupplier({...supplier, selectedBill: bill});
    }
    
    // Generate print document for preview
    const printDoc = generatePrintDocument(supplier, type, bill);
    setPrintDocument(printDoc);
    setPrintPreviewType("document"); // Default to document preview
    setShowPrintPreview(true);
  };

  // Toggle preferred status
  const togglePreferred = async (supplierId) => {
    const target = suppliers.find((s) => s.id === supplierId);
    if (!target) return;

    const nextPreferred = !target.preferred;
    try {
      const response = await apiRequest(`/suppliers/${supplierId}`, {
        method: "PUT",
        data: { preferred: nextPreferred },
      });

      if (response?.success && response?.supplier) {
        setSuppliers((prev) =>
          prev.map((supplier) =>
            supplier.id === supplierId
              ? normalizeSupplier(response.supplier)
              : supplier
          )
        );
      }
    } catch (error) {
      console.error("Update Preferred Supplier Error:", error);
    }
  };

  // Get status badge
  const getStatusBadge = (status) => {
    const styles = {
      active: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
      pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
      inactive: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
      paid: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
      overdue: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
    };
    
    const icons = {
      active: <CheckCircle className="w-3 h-3" />,
      pending: <AlertCircle className="w-3 h-3" />,
      inactive: <XCircle className="w-3 h-3" />,
      paid: <CheckCircle className="w-3 h-3" />,
      overdue: <AlertTriangle className="w-3 h-3" />
    };
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${styles[status] || 'bg-gray-100 text-gray-800'}`}>
        {icons[status]}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  // Simulate Bluetooth device discovery
  const discoverBluetoothDevices = () => {
    const devices = [
      { name: "Thermal Printer MP-420", id: "printer-001", type: "thermal" },
      { name: "Star TSP143", id: "printer-002", type: "thermal" },
      { name: "Epson TM-T88V", id: "printer-003", type: "thermal" },
      { name: "Zebra ZQ520", id: "printer-004", type: "thermal" },
    ];
    setBluetoothDevices(devices);
  };

  // Simulate network printer discovery
  const discoverNetworkPrinters = () => {
    const printers = [
      { name: "HP LaserJet Pro M404dn", id: "printer-101", type: "document", connection: "WiFi" },
      { name: "Canon PIXMA TR4520", id: "printer-102", type: "document", connection: "WiFi" },
      { name: "Brother HL-L2350DW", id: "printer-103", type: "document", connection: "Ethernet" },
      { name: "Epson Workforce WF-2830", id: "printer-104", type: "document", connection: "WiFi" },
    ];
    setNetworkPrinters(printers);
  };

  // Connect to printer
  const connectToPrinter = (device) => {
    setSelectedPrinter(device);
    if (device.type === "thermal") {
      setPrinterStatus({...printerStatus, thermal: "connected"});
    } else {
      setPrinterStatus({...printerStatus, document: "connected"});
    }
    alert(`Connected to ${device.name} (${device.type})`);
  };

  // Disconnect printer
  const disconnectPrinter = () => {
    if (selectedPrinter.type === "thermal") {
      setPrinterStatus({...printerStatus, thermal: "disconnected"});
    } else {
      setPrinterStatus({...printerStatus, document: "disconnected"});
    }
    setSelectedPrinter(null);
    alert("Printer disconnected");
  };

  // Simulate printing
  const handlePrint = () => {
    if (printType === "all_bills" && viewSupplier) {
      const summary = viewSupplier.purchaseStats || viewSupplier.statistics || defaultStatistics;
      const now = new Date().toLocaleString("en-IN");
      const bills = Array.isArray(viewSupplier.bills) ? viewSupplier.bills : [];
      const html = `
        <html>
          <head>
            <title>${viewSupplier.name} Bills Report</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 24px; color: #111; }
              h1 { font-size: 22px; margin: 0 0 8px; }
              h2 { font-size: 16px; margin: 0 0 12px; }
              .muted { color: #666; font-size: 12px; margin-bottom: 16px; }
              .box { border: 1px solid #ddd; border-radius: 8px; padding: 12px; margin-bottom: 16px; }
              .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 16px; }
              .row { display: flex; justify-content: space-between; gap: 12px; }
              table { width: 100%; border-collapse: collapse; margin-top: 12px; }
              th, td { text-align: left; padding: 8px 6px; border-bottom: 1px solid #eee; font-size: 13px; vertical-align: top; }
              th { background: #f6f6f6; }
            </style>
          </head>
          <body>
            <h1>Supplier Bills Report</h1>
            <h2>${viewSupplier.name || "N/A"}</h2>
            <div class="muted">Printed: ${now}</div>
            <div class="box">
              <div class="grid">
                <div class="row"><strong>Supplier</strong><span>${viewSupplier.name || "N/A"}</span></div>
                <div class="row"><strong>Company</strong><span>${viewSupplier.company || "N/A"}</span></div>
                <div class="row"><strong>Contact</strong><span>${viewSupplier.contactPerson || "N/A"}</span></div>
                <div class="row"><strong>Phone</strong><span>${viewSupplier.phone || "N/A"}</span></div>
                <div class="row"><strong>Total Bills</strong><span>${summary.totalBills || bills.length || 0}</span></div>
                <div class="row"><strong>Total Amount</strong><span>${summary.totalAmount || "Rs. 0"}</span></div>
                <div class="row"><strong>Paid Amount</strong><span>${summary.paidAmount || "Rs. 0"}</span></div>
                <div class="row"><strong>Pending Amount</strong><span>${summary.pendingAmount || "Rs. 0"}</span></div>
              </div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Bill ID</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Paid Date</th>
                </tr>
              </thead>
              <tbody>
                ${
                  bills.length
                    ? bills
                        .map(
                          (bill, index) => `
                    <tr>
                      <td>${index + 1}</td>
                      <td>${bill.id || "N/A"}</td>
                      <td>${formatDate(bill.date)}</td>
                      <td>${bill.description || "-"}</td>
                      <td>${bill.amount || "Rs. 0"}</td>
                      <td>${bill.status || "N/A"}</td>
                      <td>${formatDate(bill.paidDate)}</td>
                    </tr>`
                        )
                        .join("")
                    : `<tr><td colSpan="7">No bills found for this supplier.</td></tr>`
                }
              </tbody>
            </table>
          </body>
        </html>
      `;
      const printWindow = window.open("", "_blank", "width=1100,height=750");
      if (!printWindow) {
        alert("Popup blocked. Please allow popups to print.");
        return;
      }
      printWindow.document.open();
      printWindow.document.write(html);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
      setShowPrintModal(false);
      return;
    }

    if (!selectedPrinter) {
      alert("Please select a printer first");
      return;
    }

    console.log(`Printing ${printType} to ${selectedPrinter.name} (${selectedPrinter.type})`);
    
    // In a real app, this would send data to the appropriate printer
    if (selectedPrinter.type === "thermal") {
      // Send thermal printer format
      const thermalContent = generateThermalContent(viewSupplier, printType, viewSupplier.selectedBill);
      console.log("Thermal printer content:", thermalContent);
    } else {
      // Send document printer format
      const documentContent = generateDocumentContent(viewSupplier, printType, viewSupplier.selectedBill);
      console.log("Document printer content:", documentContent);
    }
    
    alert(`Printing ${printType} for ${viewSupplier.name} to ${selectedPrinter.name}`);
    setShowPrintModal(false);
  };

  // Generate thermal printer content
  const generateThermalContent = (supplier, type, bill = null) => {
    const now = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Karachi',
      dateStyle: 'medium',
      timeStyle: 'short'
    });
    
    let content = `
    ===============================
         LAPTOP SHOP - SUPPLIER
    ===============================
    Date: ${now}
    
    Supplier: ${supplier.name}
    Contact: ${supplier.contactPerson}
    Phone: ${supplier.phone}
    
    ===============================
    `;

    if (type === "invoice" && bill) {
      content += `
      INVOICE: ${bill.id}
      ===============================
      Date: ${bill.date}
      Description: ${bill.description}
      
      Amount: ${bill.amount}
      Status: ${bill.status.toUpperCase()}
      
      ${bill.status === "paid" ? `
      Paid Date: ${bill.paidDate}
      Method: ${bill.paymentMethod}
      Ref: ${bill.reference}
      ` : "Status: PENDING"}
      
      `;
    } else if (type === "statement") {
      content += `
      ACCOUNT STATEMENT
      ===============================
      Total Bills: ${supplier.statistics.totalBills}
      Paid Bills: ${supplier.statistics.paidBills}
      Pending Bills: ${supplier.statistics.pendingBills}
      Overdue Bills: ${supplier.statistics.overdueBills}
      
      Total Amount: ${supplier.statistics.totalAmount}
      Paid Amount: ${supplier.statistics.paidAmount}
      Pending Amount: ${supplier.statistics.pendingAmount}
      Overdue Amount: ${supplier.statistics.overdueAmount}
      
      Last Payment: ${supplier.statistics.lastPaymentDate || 'N/A'}
      Next Due: ${supplier.statistics.nextPaymentDue || 'N/A'}
      
      `;
    } else if (type === "receipt" && bill) {
      content += `
      PAYMENT RECEIPT
      ===============================
      Receipt No: REC-${Date.now().toString().slice(-6)}
      Date: ${now}
      
      Supplier: ${supplier.name}
      Bill No: ${bill.id}
      Bill Date: ${bill.date}
      
      Description: ${bill.description}
      Amount Paid: ${bill.amount}
      
      Payment Method: ${bill.paymentMethod}
      Reference: ${bill.reference}
      
      Thank you for your payment!
      `;
    } else if (type === "all_bills") {
      content += `
      ALL BILLS SUMMARY
      ===============================
      Supplier: ${supplier.name}
      Date: ${now}
      
      TOTAL BILLS: ${supplier.statistics.totalBills}
      ===============================
      `;
      
      supplier.bills.forEach((bill, index) => {
        content += `
        ${index + 1}. ${bill.id}
           Date: ${bill.date}
           Desc: ${bill.description.slice(0, 20)}...
           Amount: ${bill.amount}
           Status: ${bill.status}
        `;
      });
      
      content += `
      ===============================
      Total: ${supplier.statistics.totalAmount}
      Paid: ${supplier.statistics.paidAmount}
      Pending: ${supplier.statistics.pendingAmount}
      ===============================
      `;
    }

    content += `
    ===============================
          THANK YOU!
    ===============================
    Printed: ${now}
    `;

    return content;
  };

  // Generate document printer content
  const generateDocumentContent = (supplier, type, bill = null) => {
    const now = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Karachi',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    let content = {
      header: {
        title: "LAPTOP SHOP - SUPPLIER MANAGEMENT",
        subtitle: "Supplier Bill Management System",
        date: now,
        logo: "💻"
      },
      supplierInfo: {
        name: supplier.name,
        contact: supplier.contactPerson,
        phone: supplier.phone,
        email: supplier.email,
        address: supplier.address
      },
      content: {},
      footer: {
        note: "This is a computer generated document",
        page: "Page 1 of 1"
      }
    };

    if (type === "invoice" && bill) {
      content.content = {
        type: "INVOICE",
        details: {
          invoiceNo: bill.id,
          date: bill.date,
          description: bill.description,
          amount: bill.amount,
          status: bill.status,
          paymentDetails: bill.status === "paid" ? {
            paidDate: bill.paidDate,
            method: bill.paymentMethod,
            reference: bill.reference
          } : null
        }
      };
    } else if (type === "statement") {
      content.content = {
        type: "ACCOUNT STATEMENT",
        summary: {
          totalBills: supplier.statistics.totalBills,
          paidBills: supplier.statistics.paidBills,
          pendingBills: supplier.statistics.pendingBills,
          overdueBills: supplier.statistics.overdueBills,
          totalAmount: supplier.statistics.totalAmount,
          paidAmount: supplier.statistics.paidAmount,
          pendingAmount: supplier.statistics.pendingAmount,
          overdueAmount: supplier.statistics.overdueAmount,
          lastPayment: supplier.statistics.lastPaymentDate || "N/A",
          nextDue: supplier.statistics.nextPaymentDue || "N/A"
        }
      };
    } else if (type === "receipt" && bill) {
      content.content = {
        type: "PAYMENT RECEIPT",
        details: {
          receiptNo: `REC-${Date.now().toString().slice(-6)}`,
          date: now,
          billNo: bill.id,
          billDate: bill.date,
          description: bill.description,
          amountPaid: bill.amount,
          paymentMethod: bill.paymentMethod,
          reference: bill.reference
        }
      };
    } else if (type === "all_bills") {
      content.content = {
        type: "BILLS SUMMARY REPORT",
        bills: supplier.bills.map(bill => ({
          id: bill.id,
          date: bill.date,
          description: bill.description,
          amount: bill.amount,
          status: bill.status,
          paidDate: bill.paidDate || "N/A"
        })),
        summary: {
          total: supplier.statistics.totalAmount,
          paid: supplier.statistics.paidAmount,
          pending: supplier.statistics.pendingAmount
        }
      };
    }

    return content;
  };

  // Generate print document for preview
  const generatePrintDocument = (supplier, type, bill = null) => {
    return {
      thermal: generateThermalContent(supplier, type, bill),
      document: generateDocumentContent(supplier, type, bill),
      type: type,
      timestamp: new Date().toISOString(),
      supplierName: supplier.name
    };
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Handle print preview zoom
  const handleZoomIn = () => {
    setPrintPreviewZoom(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setPrintPreviewZoom(prev => Math.max(prev - 25, 50));
  };

  const handleZoomReset = () => {
    setPrintPreviewZoom(100);
  };

  // Download print document
  const handleDownloadPrint = () => {
    if (!printDocument) return;
    
    const content = JSON.stringify(printDocument, null, 2);
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${viewSupplier.name}_${printType}_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert("Print document downloaded!");
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0f2fe,transparent_35%),radial-gradient(circle_at_85%_20%,#ecfdf3,transparent_30%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] dark:bg-[radial-gradient(circle_at_top_left,#0f172a,transparent_35%),radial-gradient(circle_at_85%_20%,#0b1324,transparent_30%),linear-gradient(to_bottom,#0b1220,#0f172a)] p-2 sm:p-3 md:p-4">
      {/* Mobile Spacer */}
      <div className="h-16 md:h-0" />

      {/* Header with Back Button */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push('/AdminDashboard/dashboard')}
              className="p-1.5 bg-white/80 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md border border-gray-200/70 dark:border-gray-600"
              aria-label="Back to Dashboard"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 rounded-lg">
                <Truck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  Laptop Suppliers
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">
                  Manage laptop suppliers, bills, and payments
                </p>
              </div>
            </div>
          </div>
          
          {/* Printer Status */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5">
            <div className="flex items-center gap-2">
              <div className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 text-xs ${
                printerStatus.thermal === "connected" 
                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                  : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                }`}>
                <Printer className="w-3.5 h-3.5" />
                <span>Thermal: {printerStatus.thermal === "connected" ? "Connected" : "Disconnected"}</span>
              </div>
              <div className={`px-2.5 py-1 rounded-lg flex items-center gap-1.5 text-xs ${
                printerStatus.document === "connected" 
                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                  : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                }`}>
                <PrinterIcon className="w-3.5 h-3.5" />
                <span>Document: {printerStatus.document === "connected" ? "Connected" : "Disconnected"}</span>
              </div>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              disabled={!canCreateSupplier}
              className="bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-600 hover:to-green-600 text-white font-medium px-2.5 py-2 rounded-lg inline-flex flex-nowrap items-center justify-center gap-1.5 whitespace-nowrap shadow-sm hover:shadow transition-all text-xs"
            >
              <Plus className="w-4 h-4" />
              <span className="whitespace-nowrap">Add Supplier</span>
            </button>
          </div>
        </div>

        <div className="mb-3 flex justify-end">
          <button
            type="button"
            onClick={() => setShowSummaryValues((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 dark:border-gray-700 dark:bg-gray-800/90 dark:text-gray-200 dark:hover:bg-gray-800"
          >
            {showSummaryValues ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showSummaryValues ? "Hide Values" : "Show Values"}
          </button>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {[
            { 
              label: "Total Suppliers", 
              value: overallStats.totalSuppliers, 
              color: "from-cyan-500 via-blue-500 to-emerald-500", 
              icon: Building,
              trend: "+12%",
              trendUp: true 
            },
            { 
              label: "Total Bills", 
              value: overallStats.totalBills, 
              color: "from-blue-500 via-indigo-500 to-violet-500", 
              icon: FileText,
              trend: "+8%",
              trendUp: true 
            },
            { 
              label: "Total Amount", 
              value: overallStats.totalAmount, 
              color: "from-fuchsia-500 via-purple-500 to-indigo-500", 
              icon: IndianRupee,
              trend: "+15%",
              trendUp: true,
              hideValue: true,
            },
            { 
              label: "Pending Amount", 
              value: overallStats.totalPendingAmount, 
              color: "from-amber-500 via-orange-500 to-rose-500", 
              icon: AlertTriangle,
              trend: "+5%",
              trendUp: false,
              hideValue: true,
            },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className={`bg-gradient-to-br ${stat.color} rounded-lg p-3.5 text-white border border-white/30 shadow-md shadow-black/10 hover:shadow-lg hover:shadow-black/15 transition-all duration-300`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs font-medium opacity-90">{stat.label}</p>
                    <p className="text-xl font-bold mt-1.5">
                      {stat.hideValue && !showSummaryValues ? "Rs. ****" : stat.value}
                    </p>
                    <div className={`flex items-center gap-1 mt-1 text-xs ${stat.trendUp ? 'opacity-90' : 'opacity-75'}`}>
                      {stat.trendUp ? (
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowDownRight className="w-3.5 h-3.5" />
                      )}
                      <span>{stat.trend}</span>
                    </div>
                  </div>
                  <div className="p-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Search and Filters */}
      <div className="mb-6">
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex-1 relative">
            <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search suppliers by name, contact, email, phone, or laptop models..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-200/80 dark:border-gray-600 rounded-lg bg-white/90 dark:bg-gray-800/80 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition text-sm"
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="w-full px-3 py-2 border border-gray-200/80 dark:border-gray-600 rounded-lg bg-white/90 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition flex items-center justify-center gap-1.5 text-sm md:w-auto"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          <div className="flex w-full border border-gray-200/80 dark:border-gray-600 rounded-lg overflow-hidden bg-white/90 dark:bg-gray-800/80 md:w-auto">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex-1 px-3 py-2 transition flex items-center justify-center gap-1.5 md:flex-none ${
                viewMode === "grid"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
              title="Grid View"
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`flex-1 px-3 py-2 transition flex items-center justify-center gap-1.5 md:flex-none ${
                viewMode === "list"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
              title="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {showFilters && (
          <div className="mt-2.5 p-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-lg border border-white/70 dark:border-gray-700/70 grid grid-cols-1 md:grid-cols-2 gap-3 shadow-md shadow-black/5">
            <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                Filter by Status
              </label>
              <div className="flex flex-wrap gap-2">
                {statuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition ${
                      selectedStatus === status
                        ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {status === "All Status" ? "All" : status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                Filter by Bill Status
              </label>
              <div className="flex flex-wrap gap-2">
                {billStatuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedBillStatus(status)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition ${
                      selectedBillStatus === status
                        ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {status === "All Bills" ? "All" : status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>

      {/* Suppliers Grid/List */}
      {filteredSuppliers.length > 0 ? (
        viewMode === "grid" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {paginatedSuppliers.map((supplier) => (
              <SupplierCard
                key={supplier.id}
                supplier={supplier}
                selectedSupplier={selectedSupplier}
                setSelectedSupplier={setSelectedSupplier}
                togglePreferred={togglePreferred}
                handleViewBillManagement={handleViewBillManagement}
                handleAddNewPayment={handleAddNewPayment}
                handlePrintAction={handlePrintAction}
                handlePrintPreview={handlePrintPreview}
                handleViewSupplier={handleViewSupplier}
                handleEditSupplier={handleEditSupplier}
                handleAddNewBill={handleAddNewBill}
                canEditSupplier={canEditSupplier}
                canUpdateSupplier={canUpdateSupplier}
                handleDeleteSupplier={requestDeleteSupplier}
                canDeleteSupplier={canDeleteSupplier}
                getStatusBadge={getStatusBadge}
                formatDate={formatDate}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-lg border border-white/70 dark:border-gray-700/70 overflow-hidden shadow-md shadow-black/5">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px]">
                <thead className="bg-white/60 dark:bg-gray-700/50">
                  <tr>
                    <th className="px-3 py-2.5 text-left text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Supplier</th>
                    <th className="px-3 py-2.5 text-left text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-3 py-2.5 text-left text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Bills</th>
                    <th className="px-3 py-2.5 text-left text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                    <th className="px-3 py-2.5 text-left text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Pending Amount</th>
                    <th className="px-3 py-2.5 text-right text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {paginatedSuppliers.map((supplier) => (
                    <tr key={supplier.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition">
                      <td className="px-3 py-2.5">
                        <div className="min-w-0">
                          <p className="break-words text-sm font-semibold text-gray-900 dark:text-white">{supplier.name}</p>
                          <p className="break-words text-xs text-gray-500 dark:text-gray-400">{supplier.contactPerson} • {supplier.phone}</p>
                        </div>
                      </td>
                      <td className="px-3 py-2.5">
                        {getStatusBadge(supplier.status)}
                      </td>
                      <td className="px-3 py-2.5">
                        <span className="text-xs font-medium text-gray-900 dark:text-white">
                          {hasMeaningfulPurchaseStats(supplier.purchaseStats)
                            ? supplier.purchaseStats.totalBills
                            : Number(supplier.statistics?.totalBills || 0) > 0
                              ? supplier.statistics.totalBills
                              : supplier.purchaseCount}
                        </span>
                      </td>
                      <td className="px-3 py-2.5">
                        <span className="text-xs font-semibold text-gray-900 dark:text-white">
                          {hasMeaningfulPurchaseStats(supplier.purchaseStats)
                            ? supplier.purchaseStats.totalAmount
                            : supplier.statistics.totalAmount}
                        </span>
                      </td>
                      <td className="px-3 py-2.5">
                        <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                          {hasMeaningfulPurchaseStats(supplier.purchaseStats)
                            ? supplier.purchaseStats.pendingAmount
                            : supplier.statistics.pendingAmount}
                        </span>
                      </td>
                      <td className="px-3 py-2.5">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleViewSupplier(supplier)}
                            className="p-1.5 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:from-blue-100 hover:to-emerald-100"
                            title="View Supplier"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleEditSupplier(supplier)}
                            disabled={!canEditSupplier}
                            className="p-1.5 bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg hover:from-violet-100 hover:to-indigo-100"
                            title="Edit Supplier"
                          >
                            <FilePen className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => requestDeleteSupplier(supplier)}
                            disabled={!canDeleteSupplier}
                            className="p-1.5 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 text-red-600 dark:text-red-400 rounded-lg hover:from-red-100 hover:to-pink-100"
                            title="Delete Supplier"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      ) : (
        <div className="text-center py-9 bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-lg border border-white/70 dark:border-gray-700/70 shadow-md shadow-black/5">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Truck className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No laptop suppliers found
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 max-w-md mx-auto">
            {searchTerm || selectedStatus !== "All Status"
              ? "Try adjusting your search or filters to find suppliers"
              : "Add your first laptop supplier to start managing your vendor relationships"}
          </p>
          <button
            onClick={() => setShowAddModal(true)}
            disabled={!canCreateSupplier}
            className="bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-600 hover:to-green-600 text-white font-medium px-4 py-2 rounded-lg flex items-center justify-center gap-1.5 mx-auto shadow-sm hover:shadow transition text-xs"
          >
            <Plus className="w-4 h-4" />
            Add New Supplier
          </button>
        </div>
      )}

      {/* Add Supplier Modal */}
      {showAddModal && (
        <AddSupplierModal 
          newSupplier={newSupplier}
          setNewSupplier={setNewSupplier}
          handleAddSupplier={handleAddSupplier}
          setShowAddModal={setShowAddModal}
          canCreateSupplier={canCreateSupplier}
        />
      )}

      {filteredSuppliers.length > 0 && (
        <div className="mt-5 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200/80 dark:border-gray-600 bg-white/90 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 disabled:opacity-50 text-xs sm:w-auto"
          >
            Prev
          </button>
          <div className="text-center text-xs text-gray-600 dark:text-gray-400">
            Page {currentPage} of {totalPages}
          </div>
          <button
            type="button"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="w-full px-2.5 py-1.5 rounded-lg border border-gray-200/80 dark:border-gray-600 bg-white/90 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 disabled:opacity-50 text-xs sm:w-auto"
          >
            Next
          </button>
        </div>
      )}

      {/* Edit Supplier Modal */}
      {showEditModal && editingSupplier && (
        <EditSupplierModal
          supplier={editingSupplier}
          setShowEditModal={setShowEditModal}
          onSupplierUpdated={handleSupplierUpdated}
          canEditSupplier={canEditSupplier}
        />
      )}

      {/* View Supplier Bill Management Modal */}
      {showBillModal && viewSupplier && (
        <BillManagementModal 
          supplier={viewSupplier}
          newBill={newBill}
          setNewBill={setNewBill}
          handleAddBill={handleAddBill}
          setShowBillModal={setShowBillModal}
          handleAddNewPayment={handleAddNewPayment}
          handlePrintAction={handlePrintAction}
          handlePrintPreview={handlePrintPreview}
          getStatusBadge={getStatusBadge}
          formatDate={formatDate}
        />
      )}

      {/* Add Payment Modal */}
      {showPaymentModal && viewSupplier && (
        <AddPaymentModal 
          supplier={viewSupplier}
          newPayment={newPayment}
          setNewPayment={setNewPayment}
          handleAddPayment={handleAddPayment}
          setShowPaymentModal={setShowPaymentModal}
          paymentMethods={paymentMethods}
        />
      )}

      {/* Print Modal */}
      {showPrintModal && viewSupplier && (
        <PrintModal 
          supplier={viewSupplier}
          printType={printType}
          setPrintType={setPrintType}
          printerStatus={printerStatus}
          selectedPrinter={selectedPrinter}
          selectedPrinterType={selectedPrinterType}
          setSelectedPrinterType={setSelectedPrinterType}
          bluetoothDevices={bluetoothDevices}
          networkPrinters={networkPrinters}
          discoverBluetoothDevices={discoverBluetoothDevices}
          discoverNetworkPrinters={discoverNetworkPrinters}
          connectToPrinter={connectToPrinter}
          disconnectPrinter={disconnectPrinter}
          handlePrint={handlePrint}
          setShowPrintModal={setShowPrintModal}
          printerTypes={printerTypes}
          handlePrintPreview={handlePrintPreview}
        />
      )}

      {/* Print Preview Modal */}
      {showPrintPreview && viewSupplier && printDocument && (
        <PrintPreviewModal 
          printDocument={printDocument}
          printPreviewZoom={printPreviewZoom}
          printPreviewType={printPreviewType}
          setPrintPreviewType={setPrintPreviewType}
          handleZoomIn={handleZoomIn}
          handleZoomOut={handleZoomOut}
          handleZoomReset={handleZoomReset}
          handleDownloadPrint={handleDownloadPrint}
          setShowPrintPreview={setShowPrintPreview}
          handlePrint={() => {
            setShowPrintPreview(false);
            setShowPrintModal(true);
          }}
        />
      )}

      <DeleteSupplierModal
        deleteModalOpen={deleteModalOpen}
        setDeleteModalOpen={setDeleteModalOpen}
        supplierToDelete={supplierToDelete}
        confirmDelete={confirmDeleteSupplier}
      />

    </div>
  );
}
