// app/suppliers/[id]/page.jsx
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { apiRequest } from "../../authservice/api";
import { hasPermission, readStoredAuth } from "../../authservice/auth";
import {
  ArrowLeft,
  Building,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Star,
  Save,
  Printer,
  FileText,
  Wallet,
  Download,
  CheckCircle,
  AlertCircle,
  XCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  DollarSign,
  CreditCard,
  Package,
  ShoppingBag,
  Award,
  Briefcase,
  GraduationCap,
  Gamepad,
  Laptop,
  Cpu,
  MemoryStick,
  HardDrive,
  Battery,
  Shield,
  User,
  Users,
  Globe,
  Copy,
  Share2,
  MoreVertical,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  Settings,
  HelpCircle,
  Info,
  AlertTriangle,
  CheckCheck,
  CalendarDays,
  CalendarClock,
  Clock4,
  CircleDollarSign,
  Coins,
  Landmark,
  HandCoins,
  CreditCard as CardIcon,
  Cash,
  ArrowLeftRight,
  FilePen,
  Trash2,
  FileBarChart,
  FileStack,
  FilePieChart,
  PrinterIcon,
  Plus,
  PackageCheck,
  ClipboardCheck,
  ClipboardList,
  ClipboardCopy,
  Monitor,
  Smartphone,
  Tablet,
  Server,
  Database,
  Layers,
  Box,
  QrCode,
  Barcode,
  Scan,
  ZoomIn,
  ZoomOut,
  RotateCw,
  DownloadCloud,
  UploadCloud,
  ShieldAlert,
  ShieldCheck,
  Lock,
  Unlock,
  Key,
  ExternalLink,
  Link2,
  Share,
  Bookmark,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Bell,
  BellRing,
  Moon,
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  Wind,
  Thermometer,
  Droplets,
  Umbrella
} from "lucide-react";

// Supplier data is fetched from API.
export default function SupplierDetailPage() {
  const router = useRouter();
  const params = useParams();
  const toDateInputValue = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const isExcludedFebruaryDate = (date) =>
    date.getMonth() === 1 && (date.getDate() === 28 || date.getDate() === 29);
  const getDefaultBillDateRange = () => {
    const endDate = new Date();
    const startDate = new Date(endDate);
    let includedDays = isExcludedFebruaryDate(startDate) ? 0 : 1;

    while (includedDays < 30) {
      startDate.setDate(startDate.getDate() - 1);
      if (!isExcludedFebruaryDate(startDate)) {
        includedDays += 1;
      }
    }

    return {
      from: toDateInputValue(startDate),
      to: toDateInputValue(endDate),
    };
  };
  const defaultBillDateRange = getDefaultBillDateRange();
  const transactionsPerPage = 10;
  const supplierId = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const [supplier, setSupplier] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentModalMode, setPaymentModalMode] = useState("add");
  const [showDocumentModal, setShowDocumentModal] = useState(false);
  const [supplierPurchases, setSupplierPurchases] = useState([]);
  const [latestTransactionHint, setLatestTransactionHint] = useState(null);
  const [billDateRange, setBillDateRange] = useState(defaultBillDateRange);
  const [transactionPage, setTransactionPage] = useState(1);
  const [paymentForm, setPaymentForm] = useState({
    method: "Cash",
    reference: "",
    date: new Date().toISOString().split('T')[0],
    partialAmount: "",
  });
  const [selectedBill, setSelectedBill] = useState(null);
  const [selectedPaymentTransaction, setSelectedPaymentTransaction] = useState(null);
  const [deletePaymentTarget, setDeletePaymentTarget] = useState(null);
  const [showBlankBillModal, setShowBlankBillModal] = useState(false);
  const [blankBillTarget, setBlankBillTarget] = useState(null);
  const [blankBillForm, setBlankBillForm] = useState({ amount: "" });
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [canEditSupplier, setCanEditSupplier] = useState(false);
  const [canDeleteSupplier, setCanDeleteSupplier] = useState(false);
  const [canManageSupplierPayments, setCanManageSupplierPayments] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "",
    company: "",
    contactPerson: "",
    email: "",
    phone: "",
    mobile: "",
    address: "",
    category: "Premium Laptops",
    paymentTerms: "Net 30",
    taxId: "",
    website: "",
    status: "active",
    preferred: false,
    notes: "",
  });
  const [expandedSections, setExpandedSections] = useState({
    products: true,
    bills: true,
    payments: true,
    contacts: true
  });

  const normalizeSupplier = (raw) => ({
    ...raw,
    id: raw._id || raw.id,
    products: Array.isArray(raw.products)
      ? raw.products.map((product, index) =>
          typeof product === "string"
            ? {
                name: product,
                sku: `SKU-${index + 1}`,
                price: "Rs. 0",
                stock: 0,
              }
            : {
                name: product?.name || "",
                sku: product?.sku || `SKU-${index + 1}`,
                price: product?.price || "Rs. 0",
                stock: Number(product?.stock) || 0,
              }
        )
      : [],
    bills: Array.isArray(raw.bills) ? raw.bills : [],
    paymentHistory: Array.isArray(raw.paymentHistory) ? raw.paymentHistory : [],
    contacts: Array.isArray(raw.contacts) ? raw.contacts : [],
    documents: Array.isArray(raw.documents) ? raw.documents : [],
    bankDetails: raw.bankDetails || {
      bankName: "",
      accountTitle: "",
      accountNumber: "",
      iban: "",
      swiftCode: "",
    },
    statistics: raw.statistics || {
      totalBills: 0,
      paidBills: 0,
      pendingBills: 0,
      overdueBills: 0,
      paidAmount: "Rs. 0",
      pendingAmount: "Rs. 0",
      overdueAmount: "Rs. 0",
      lastPaymentDate: "",
      nextPaymentDue: "",
      averagePaymentDays: 0,
    },
  });

  const applySupplierState = (normalized) => {
    setLatestTransactionHint(null);
    setSupplier(normalized);
    setEditForm({
      name: normalized.name || "",
      company: normalized.company || "",
      contactPerson: normalized.contactPerson || "",
      email: normalized.email || "",
      phone: normalized.phone || "",
      mobile: normalized.mobile || "",
      address: normalized.address || "",
      category: normalized.category || "Premium Laptops",
      paymentTerms: normalized.paymentTerms || "Net 30",
      taxId: normalized.taxId || "",
      website: normalized.website || "",
      status: normalized.status || "active",
      preferred: Boolean(normalized.preferred),
      notes: normalized.notes || "",
    });
  };

  const fetchSupplierDetails = async ({ withLoader = false } = {}) => {
    if (!supplierId) {
      setSupplier(null);
      setLoading(false);
      return null;
    }

    if (withLoader) setLoading(true);

    try {
      const response = await apiRequest(`/suppliers/${supplierId}`, {
        method: "GET",
      });
      if (response?.success && response?.supplier) {
        const normalized = normalizeSupplier(response.supplier);
        applySupplierState(normalized);
        return normalized;
      }
      setSupplier(null);
      return null;
    } catch (error) {
      console.error("Fetch Supplier Error:", error);
      setSupplier(null);
      return null;
    } finally {
      if (withLoader) setLoading(false);
    }
  };

  const fetchSupplierPurchases = async (supplierName) => {
    if (!supplierName) {
      setSupplierPurchases([]);
      return [];
    }

    try {
      const response = await apiRequest("/purchases", { method: "GET" });
      const purchases = response?.purchases || response?.data || response || [];
      if (!Array.isArray(purchases)) {
        setSupplierPurchases([]);
        return [];
      }
      const matched = purchases.filter(
        (p) => String(p?.supplier || "").trim() === String(supplierName).trim()
      );
      setSupplierPurchases(matched);
      return matched;
    } catch (error) {
      console.error("Fetch Supplier Purchases Error:", error);
      return [];
    }
  };

  const refreshSupplierView = async () => {
    const latestSupplier = await fetchSupplierDetails();
    await fetchSupplierPurchases(latestSupplier?.name || supplier?.name || "");
  };

  useEffect(() => {
    const { permissions } = readStoredAuth();
    const canEdit = hasPermission(permissions, "SUPPLIER_EDIT");
    setCanEditSupplier(canEdit);
    setCanDeleteSupplier(hasPermission(permissions, "SUPPLIER_DELETE"));
    setCanManageSupplierPayments(
      canEdit || hasPermission(permissions, "PARTIAL_PAYMENT_ADD")
    );
  }, []);

  useEffect(() => {
    if (!supplierId) {
      setLoading(false);
      return;
    }
    fetchSupplierDetails({ withLoader: true });
  }, [supplierId]);

  useEffect(() => {
    if (!showPaymentModal || !selectedBill) return;
    if (paymentModalMode === "edit" && selectedPaymentTransaction) return;
    setPaymentForm({
      method: "Cash",
      reference: "",
      date: new Date().toISOString().split('T')[0],
      partialAmount: getRemainingNumber(selectedBill),
    });
  }, [showPaymentModal, selectedBill, paymentModalMode, selectedPaymentTransaction]);

  useEffect(() => {
    fetchSupplierPurchases(supplier?.name);
  }, [supplier?.name]);

  useEffect(() => {
    setTransactionPage(1);
  }, [billDateRange.from, billDateRange.to, supplier?.id, supplierPurchases.length]);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleDeleteSupplier = async () => {
    if (!canDeleteSupplier) {
      alert("You do not have permission to delete suppliers.");
      return;
    }

    if (!supplierId) return;

    try {
      const response = await apiRequest(`/suppliers/${supplierId}`, {
        method: "DELETE",
      });
      if (response?.success) {
        alert("Supplier deleted successfully!");
        router.push("/AdminDashboard/suppliers");
      }
    } catch (error) {
      console.error("Delete Supplier Error:", error);
    }
  };

  const handleUpdateSupplier = async (e) => {
    e.preventDefault();
    if (!canEditSupplier) {
      alert("You do not have permission to update suppliers.");
      return;
    }

    if (!supplierId) return;

    try {
      const response = await apiRequest(`/suppliers/${supplierId}`, {
        method: "PUT",
        data: editForm,
      });
      if (response?.success && response?.supplier) {
        setSupplier((prev) => ({
          ...prev,
          ...response.supplier,
          id: response.supplier._id || response.supplier.id,
        }));
        setShowEditModal(false);
      }
    } catch (error) {
      console.error("Update Supplier Error:", error);
    }
  };

  const handlePrint = (type, data = null) => {
    if (type === "bill" && data) {
      const bill = data;
      const now = new Date().toLocaleString("en-IN");
      const html = `
        <html>
          <head>
            <title>Bill ${bill.id}</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                padding: 24px;
                color: #111;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              h1 { font-size: 20px; margin: 0 0 8px; }
              .muted { color: #666; font-size: 12px; }
              .row { display: flex; justify-content: space-between; margin: 6px 0; }
              .box { border: 1px solid #ddd; border-radius: 8px; padding: 12px; margin-top: 12px; }
              table { width: 100%; border-collapse: collapse; margin-top: 12px; }
              th, td { text-align: left; padding: 6px 4px; border-bottom: 1px solid #eee; font-size: 13px; }
            </style>
          </head>
          <body>
            <h1>Supplier Bill</h1>
            <div class="muted">Printed: ${now}</div>
            <div class="box">
              <div class="row"><strong>Supplier</strong><span>${supplier?.name || "N/A"}</span></div>
              <div class="row"><strong>Bill ID</strong><span>${bill.id || "N/A"}</span></div>
              <div class="row"><strong>Date</strong><span>${formatDate(bill.date)}</span></div>
              <div class="row"><strong>Due Date</strong><span>${formatDate(bill.dueDate)}</span></div>
              <div class="row"><strong>Status</strong><span>${bill.status || "N/A"}</span></div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Particulars</th>
                  <th>Debit</th>
                  <th>Credit</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${bill.description || "-"}</td>
                  <td>${bill.amount || "-"}</td>
                  <td>${bill.paidAmount || "-"}</td>
                  <td>${getRemainingAmount(bill) || "-"}</td>
                </tr>
              </tbody>
            </table>
          </body>
        </html>
      `;
      const printWindow = window.open("", "_blank", "width=900,height=650");
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
      return;
    }

    if (type === "all_bills") {
      const now = new Date().toLocaleString("en-IN");
      const selectedBills = Array.isArray(data?.bills) ? data.bills : displayBills;
      const selectedTransactions = Array.isArray(data?.transactions) ? data.transactions : transactionFeed;
      const printTransactions = [...selectedTransactions].sort((a, b) => {
        const timestampDiff =
          getTransactionSortValue(a.transactionTimestamp, a.date) -
          getTransactionSortValue(b.transactionTimestamp, b.date);
        if (timestampDiff !== 0) return timestampDiff;
        return (a.savedOrder || 0) - (b.savedOrder || 0);
      });
      const dateRange = data?.dateRange || {};
      const rangeLabel =
        dateRange.from || dateRange.to
          ? `${dateRange.from ? formatDate(dateRange.from) : "Start"} to ${dateRange.to ? formatDate(dateRange.to) : "Today"}`
          : "All dates";
      const totalBillsAmount = selectedBills.reduce(
        (sum, bill) => sum + parseAmount(bill?.amount),
        0
      );
      const totalPaidAmount = selectedBills.reduce(
        (sum, bill) => sum + parseAmount(bill?.paidAmount),
        0
      );
      const totalBalanceAmount = selectedBills.reduce(
        (sum, bill) => sum + getRemainingNumber(bill),
        0
      );
      const html = `
        <html>
          <head>
            <title>${supplier?.name || "Supplier"} Bills Report</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 24px; color: #111; }
              h1 { font-size: 22px; margin: 0 0 8px; }
              .muted { color: #666; font-size: 12px; margin-bottom: 16px; }
              .box { border: 1px solid #ddd; border-radius: 8px; padding: 12px; margin-bottom: 16px; }
              .row { display: flex; justify-content: space-between; margin: 6px 0; gap: 12px; }
              table { width: 100%; border-collapse: collapse; margin-top: 12px; table-layout: auto; }
              th, td {
                text-align: left;
                padding: 6px 4px;
                border: 1px solid #000;
                font-size: 11px;
                vertical-align: middle;
                white-space: nowrap;
              }
              th {
                background: #000;
                color: #fff;
                font-weight: 700;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
            </style>
          </head>
          <body>
            <h1>Supplier Bills Report</h1>
            <div class="muted">Printed: ${now}</div>
            <div class="box">
              <div class="row"><strong>Supplier</strong><span>${supplier?.name || "N/A"}</span></div>
              <div class="row"><strong>Company</strong><span>${supplier?.company || "N/A"}</span></div>
              <div class="row"><strong>Contact</strong><span>${supplier?.contactPerson || "N/A"}</span></div>
              <div class="row"><strong>Date Range</strong><span>${rangeLabel}</span></div>
              <div class="row"><strong>Total Bills</strong><span>${selectedBills.length}</span></div>
              <div class="row"><strong>Total Bill Amount</strong><span>${formatRs(totalBillsAmount)}</span></div>
              <div class="row"><strong>Total Paid</strong><span>${formatRs(totalPaidAmount)}</span></div>
              <div class="row"><strong>Total Balance</strong><span>${formatRs(totalBalanceAmount)}</span></div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Reference</th>
                  <th>Particulars</th>
                  <th>Debit</th>
                  <th>Credit</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                ${
                  printTransactions.length
                    ? printTransactions
                        .map(
                          (entry) => `
                  <tr>
                    <td>${formatDate(entry.date)}</td>
                    <td>${entry.type || "N/A"}</td>
                    <td>${entry.reference || "N/A"}</td>
                    <td>${entry.title || "-"}</td>
                    <td>${formatRs(parseAmount(entry.debit))}</td>
                    <td>${formatRs(parseAmount(entry.credit))}</td>
                    <td>${formatRs(parseAmount(entry.balance))}</td>
                  </tr>`
                        )
                        .join("")
                    : `<tr><td colSpan="7">No transactions found for the selected date range.</td></tr>`
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
      return;
    }

    if (type === "receipt" && data) {
      const payment = data;
      const now = new Date().toLocaleString("en-IN");
      const html = `
        <html>
          <head>
            <title>Payment Receipt ${payment.id || ""}</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 24px; color: #111; }
              h1 { font-size: 20px; margin: 0 0 8px; }
              .muted { color: #666; font-size: 12px; }
              .row { display: flex; justify-content: space-between; margin: 6px 0; }
              .box { border: 1px solid #ddd; border-radius: 8px; padding: 12px; margin-top: 12px; }
            </style>
          </head>
          <body>
            <h1>Payment Receipt</h1>
            <div class="muted">Printed: ${now}</div>
            <div class="box">
              <div class="row"><strong>Supplier</strong><span>${supplier?.name || "N/A"}</span></div>
              <div class="row"><strong>Payment ID</strong><span>${payment.id || "N/A"}</span></div>
              <div class="row"><strong>Date</strong><span>${formatDate(payment.date)}</span></div>
              <div class="row"><strong>Bill ID</strong><span>${payment.billId || "N/A"}</span></div>
              <div class="row"><strong>Amount</strong><span>${payment.amount || "N/A"}</span></div>
              <div class="row"><strong>Method</strong><span>${payment.method || "N/A"}</span></div>
              <div class="row"><strong>Reference</strong><span>${payment.reference || "N/A"}</span></div>
            </div>
          </body>
        </html>
      `;
      const printWindow = window.open("", "_blank", "width=900,height=650");
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
      return;
    }

    if (type === "payment_report") {
      const payments = Array.isArray(data) ? data : paymentHistoryToShow;
      const sortedPayments = [...payments].sort((a, b) => {
        const timestampDiff =
          getTransactionSortValue(a.transactionTimestamp, a.date) -
          getTransactionSortValue(b.transactionTimestamp, b.date);
        if (timestampDiff !== 0) return timestampDiff;
        return String(a?.id || "").localeCompare(String(b?.id || ""));
      });
      const now = new Date().toLocaleString("en-IN");
      const total = payments.reduce(
        (sum, p) => sum + parseAmount(p?.amount),
        0
      );
      const html = `
        <html>
          <head>
            <title>Payment History Report</title>
            <style>
              @page { size: Letter; margin: 12mm; }
              body { font-family: Arial, sans-serif; padding: 24px; color: #111; }
              h1 { font-size: 20px; margin: 0 0 8px; }
              .muted { color: #666; font-size: 12px; }
              .row { display: flex; justify-content: space-between; margin: 6px 0; }
              .box { border: 1px solid #ddd; border-radius: 8px; padding: 12px; margin-top: 12px; }
              table { width: 100%; border-collapse: collapse; margin-top: 12px; }
              th, td { text-align: left; padding: 6px 4px; border: 1px solid #000; font-size: 13px; }
              th {
                background: #f6f6f6;
                font-weight: 700;
              }
            </style>
          </head>
          <body>
            <h1>Payment History Report</h1>
            <div class="muted">Printed: ${now}</div>
            <div class="box">
              <div class="row"><strong>Supplier</strong><span>${supplier?.name || "N/A"}</span></div>
              <div class="row"><strong>Total Payments</strong><span>${payments.length}</span></div>
              <div class="row"><strong>Total Amount</strong><span>${formatRs(total)}</span></div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Payment ID</th>
                  <th>Date</th>
                  <th>Reference</th>
                  <th>Bill ID</th>
                  <th>Amount</th>
                  <th>Method</th>
                </tr>
              </thead>
              <tbody>
                ${
                  sortedPayments.length
                    ? sortedPayments
                        .map(
                          (payment) => `
                  <tr>
                    <td>${payment.id || ""}</td>
                    <td>${formatDate(payment.date)}</td>
                    <td>${payment.reference || ""}</td>
                    <td>${payment.billId || ""}</td>
                    <td>${payment.amount || ""}</td>
                    <td>${payment.method || ""}</td>
                  </tr>`
                        )
                        .join("")
                    : `<tr><td colSpan="6">No payment history found.</td></tr>`
                }
              </tbody>
            </table>
          </body>
        </html>
      `;
      const printWindow = window.open("", "_blank", "width=1000,height=700");
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
      return;
    }

    console.log(`Printing ${type}`, data);
    alert(`Printing ${type}...`);
  };

  const handleDownload = (type, data = null) => {
    if (type === "receipt" && data) {
      const payment = data;
      const rows = [
        ["Payment ID", "Date", "Bill ID", "Amount", "Method", "Reference"],
        [
          payment.id || "",
          formatDate(payment.date),
          payment.billId || "",
          payment.amount || "",
          payment.method || "",
          payment.reference || "",
        ],
      ];
      const csv = rows.map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `payment-${payment.id || "receipt"}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      return;
    }

    console.log(`Downloading ${type}`, data);
    alert(`Downloading ${type}...`);
  };

  const buildPurchaseUpdatePayload = (purchase, nextPaidValue, overrides = {}) => {
    const totalAmountValue = parseAmount(purchase?.totalAmount ?? purchase?.totalPrice);
    const boundedPaidValue = Math.min(Math.max(Number(nextPaidValue || 0), 0), totalAmountValue);
    const nextBalanceValue = Math.max(totalAmountValue - boundedPaidValue, 0);
    const nextStatusValue =
      boundedPaidValue >= totalAmountValue ? "Paid" : boundedPaidValue > 0 ? "Partial" : "Pending";

    return {
      supplier: purchase?.supplier || supplier?.name || "",
      purchaseDate: purchase?.purchaseDate || purchase?.date || paymentForm.date,
      invoiceNumber: purchase?.invoiceNumber || purchase?.invoiceNo || "",
      totalAmount: totalAmountValue,
      taxAmount: parseAmount(purchase?.taxAmount),
      products: Array.isArray(purchase?.products) ? purchase.products : [],
      paidAmount: boundedPaidValue,
      balance: nextBalanceValue,
      paymentStatus: nextStatusValue,
      paymentMethod: overrides.paymentMethod ?? paymentForm.method,
      reference: overrides.reference ?? paymentForm.reference ?? "",
    };
  };

  const getSupplierBillReferenceValue = (billLike = {}) =>
    String(
      billLike?.reference ||
        billLike?.invoiceNumber ||
        billLike?.invoiceNo ||
        billLike?.billId ||
        billLike?.id ||
        billLike?._id ||
        ""
    ).trim();

  const removeMatchingSupplierPayment = (payments, matcher) => {
    let removed = false;
    return (Array.isArray(payments) ? payments : []).filter((payment, index) => {
      if (removed || !matcher(payment, index)) return true;
      removed = true;
      return false;
    });
  };

  const matchesSupplierPaymentTransaction = (payment, entry) => {
    const paymentTransactionId = `payment-${String(payment?.id || "").trim()}`;
    const entryTransactionId = String(entry?.id || "").trim();
    if (paymentTransactionId && entryTransactionId && paymentTransactionId === entryTransactionId) {
      return true;
    }
    const sameBill = String(payment?.billId || payment?.id || "").trim() === String(entry?.reference || "").trim();
    const sameAmount = parseAmount(payment?.amount) === parseAmount(entry?.credit);
    const sameDate = String(payment?.date || "") === String(entry?.date || "");
    return sameBill && sameAmount && sameDate;
  };

  const findSourcePaymentForTransaction = (entry) =>
    (Array.isArray(paymentHistoryToShow) ? paymentHistoryToShow : []).find((payment) =>
      matchesSupplierPaymentTransaction(payment, entry)
    ) || null;

  const findLinkedBillForTransaction = (entry) =>
    displayBills.find((bill) => String(bill?.id || "").trim() === String(entry?.reference || "").trim()) || null;

  const getBillPaymentsTotal = (billId, excludedEntry = null) =>
    (Array.isArray(paymentHistoryToShow) ? paymentHistoryToShow : []).reduce((sum, payment) => {
      const paymentBillId = String(payment?.billId || payment?.id || "").trim();
      if (paymentBillId !== String(billId || "").trim()) return sum;
      if (excludedEntry && matchesSupplierPaymentTransaction(payment, excludedEntry)) return sum;
      return sum + parseAmount(payment?.amount);
    }, 0);

  const requestEditPaymentTransaction = (entry) => {
    if (entry?.type !== "payment" || !canManageSupplierPayments) return;
    const linkedBill = findLinkedBillForTransaction(entry);
    const sourcePayment = findSourcePaymentForTransaction(entry);
    if (!linkedBill) {
      alert("Bill not found for this payment.");
      return;
    }

    setSelectedBill(linkedBill);
    setSelectedPaymentTransaction(entry);
    setPaymentModalMode("edit");
    const linkedBillReference = getSupplierBillReferenceValue(linkedBill);
    setPaymentForm({
      method: sourcePayment?.method || entry.title || "Cash",
      reference: linkedBillReference,
      date: sourcePayment?.date || entry.date || new Date().toISOString().split("T")[0],
      partialAmount: parseAmount(entry.credit),
    });
    setShowPaymentModal(true);
  };

  const requestDeletePaymentTransaction = (entry) => {
    if (entry?.type !== "payment" || !canManageSupplierPayments) return;
    setDeletePaymentTarget(entry);
  };

  const requestEditBlankBill = (bill) => {
    if (!canEditSupplier) return;
    setBlankBillTarget(bill);
    setBlankBillForm({
      amount: parseAmount(bill?.amount) ? String(parseAmount(bill.amount)) : "",
    });
    setShowBlankBillModal(true);
  };

  const handleSaveBlankBill = async (e) => {
    e.preventDefault();
    if (!canEditSupplier || !supplierId) return;

    const nextAmount = Number(blankBillForm.amount || 0);
    if (Number.isNaN(nextAmount) || nextAmount < 0) {
      alert("Debit amount must be 0 or greater.");
      return;
    }

    const baseBlankBill = blankBillTarget || blankBill;
    const nextPaidAmount = Math.min(parseAmount(baseBlankBill?.paidAmount), nextAmount);
    const nextRemainingAmount = Math.max(nextAmount - nextPaidAmount, 0);
    const nextBlankBill = normalizeSupplierBill({
      ...baseBlankBill,
      id: blankBillId,
      source: "manual-placeholder",
      isPlaceholderBill: true,
      date: baseBlankBill?.date || new Date().toISOString().split("T")[0],
      description: baseBlankBill?.description || "remaining bill",
      amount: formatRs(nextAmount),
      paidAmount: formatRs(nextPaidAmount),
      remainingAmount: formatRs(nextRemainingAmount),
      status: getComputedBillStatus(
        nextAmount,
        nextPaidAmount,
        nextRemainingAmount,
        baseBlankBill?.status || "pending"
      ),
    });

    const nextManualBills = [
      ...manualBills.filter((bill) => !bill.isPlaceholderBill),
      nextBlankBill,
    ];

    try {
      const response = await apiRequest(`/suppliers/${supplierId}`, {
        method: "PUT",
        data: {
          name: supplier?.name || "",
          company: supplier?.company || "",
          contactPerson: supplier?.contactPerson || "",
          email: supplier?.email || "",
          phone: supplier?.phone || "",
          mobile: supplier?.mobile || "",
          address: supplier?.address || "",
          category: supplier?.category || "",
          paymentTerms: supplier?.paymentTerms || "",
          taxId: supplier?.taxId || "",
          website: supplier?.website || "",
          status: supplier?.status || "active",
          preferred: Boolean(supplier?.preferred),
          notes: supplier?.notes || "",
          bills: nextManualBills.map((bill) => toSupplierBillPayload(bill)),
          paymentHistory: Array.isArray(supplier?.paymentHistory) ? supplier.paymentHistory : [],
        },
      });

      if (response?.success && response?.supplier) {
        applySupplierState(
          normalizeSupplier({
            ...response.supplier,
            bills: nextManualBills.map((bill) => toSupplierBillPayload(bill)),
            paymentHistory:
              Array.isArray(response?.supplier?.paymentHistory) && response.supplier.paymentHistory.length > 0
                ? response.supplier.paymentHistory
                : Array.isArray(supplier?.paymentHistory)
                  ? supplier.paymentHistory
                  : [],
          })
        );
      } else if (response?.success === false) {
        alert(response?.message || "Failed to update remaining bill.");
        return;
      } else {
        setSupplier((prev) =>
          prev
            ? {
                ...prev,
                bills: nextManualBills.map((bill) => toSupplierBillPayload(bill)),
              }
            : prev
        );
      }

      setShowBlankBillModal(false);
      setBlankBillTarget(null);
      setBlankBillForm({ amount: "" });
    } catch (error) {
      console.error("Update remaining bill Error:", error);
      alert("Failed to update remaining bill.");
    }
  };

  const handleRecordPayment = async (e) => {
    e.preventDefault();
    if (!canManageSupplierPayments || !supplierId || !selectedBill?.id) return;

    const currentRemainingAmount = getRemainingNumber(selectedBill);
    const currentEditingAmount = parseAmount(selectedPaymentTransaction?.credit);
    const billAmount =
      paymentModalMode === "edit"
        ? currentRemainingAmount + currentEditingAmount
        : currentRemainingAmount;
    const paidAmount = Number(paymentForm.partialAmount || 0);
    const isSupplierTotalPayment = selectedBill?.source === "supplier-total";

    if (!paidAmount || paidAmount <= 0 || paidAmount > billAmount) {
      alert("Payment amount must be greater than 0 and within the bill balance.");
      return;
    }

    if (!paymentForm.method) {
      alert("Payment method is required");
      return;
    }

    try {
      const submitPurchasePayment = async (purchase, nextPaidValue, overrides = {}) =>
        apiRequest(`/purchases/updatePurchase/${purchase._id}`, {
          method: "PUT",
          data: buildPurchaseUpdatePayload(purchase, nextPaidValue, overrides),
        });

      if (paymentModalMode === "edit" && selectedPaymentTransaction) {
        const purchaseMatch = supplierPurchases.find((p) => {
          const invoiceMatch = String(p?.invoiceNumber ?? p?.invoiceNo ?? "");
          const idMatch = String(p?._id ?? p?.id ?? "");
          return (
            (selectedBill?.purchaseId && idMatch === String(selectedBill.purchaseId)) ||
            (selectedBill?.id && idMatch === String(selectedBill.id)) ||
            (selectedBill?.id && invoiceMatch === String(selectedBill.id))
          );
        });

        if (selectedBill.source === "purchase" || purchaseMatch) {
          const purchase = purchaseMatch;
          const purchaseBillReference = getSupplierBillReferenceValue({
            ...purchase,
            id: selectedBill?.id || purchase?.invoiceNumber || purchase?._id || "",
          });
          if (!purchase?._id) {
            alert("Purchase not found for this payment.");
            return;
          }

          const otherPaymentsTotal = getBillPaymentsTotal(
            selectedBill?.id || purchase.invoiceNumber || purchase._id,
            selectedPaymentTransaction
          );
          const nextPaidValue = Math.min(
            parseAmount(selectedBill?.amount),
            otherPaymentsTotal + paidAmount
          );

          const response = await submitPurchasePayment(purchase, nextPaidValue, {
            paymentMethod: paymentForm.method,
            reference: purchaseBillReference,
          });
          if (response?.success === false) {
            alert(response?.message || "Failed to update payment.");
            return;
          }

          const resolvedPurchase = {
            ...purchase,
            ...buildPurchaseUpdatePayload(purchase, nextPaidValue, {
              paymentMethod: paymentForm.method,
              reference: purchaseBillReference,
            }),
          };

          setSupplierPurchases((prev) =>
            prev.map((p) => (String(p._id) === String(purchase._id) ? resolvedPurchase : p))
          );
          setSupplier((prev) => {
            if (!prev) return prev;
            const nextHistory = removeMatchingSupplierPayment(prev.paymentHistory, (payment) =>
              matchesSupplierPaymentTransaction(payment, selectedPaymentTransaction)
            );
            return {
              ...prev,
              paymentHistory: [
                {
                  id: selectedPaymentTransaction.id.replace(/^payment-/, ""),
                  date: paymentForm.date,
                  amount: formatRs(paidAmount),
                  method: paymentForm.method,
                  reference: purchaseBillReference,
                  billId: purchaseBillReference,
                  notes: "",
                  transactionTimestamp: new Date().toISOString(),
                },
                ...nextHistory,
              ],
            };
          });
        } else {
          const otherPaymentsTotal = getBillPaymentsTotal(selectedBill?.id, selectedPaymentTransaction);
          const nextPaidAmount = Math.min(
            parseAmount(selectedBill?.amount),
            otherPaymentsTotal + paidAmount
          );
          const nextRemainingAmount = Math.max(parseAmount(selectedBill.amount) - nextPaidAmount, 0);
          const nextBills = manualBills.map((bill) => {
            if (String(bill?.id || "") !== String(selectedBill?.id || "")) return bill;
            return {
              ...bill,
              paidAmount: formatRs(nextPaidAmount),
              remainingAmount: formatRs(nextRemainingAmount),
              status: getComputedBillStatus(
                parseAmount(bill.amount),
                nextPaidAmount,
                nextRemainingAmount,
                bill.status
              ),
            };
          });
          const nextPayments = [
            {
              id: selectedPaymentTransaction.id.replace(/^payment-/, ""),
              date: paymentForm.date,
              amount: formatRs(paidAmount),
              method: paymentForm.method,
              reference: paymentForm.reference || "",
              billId: String(selectedBill?.id || ""),
              notes: "",
              transactionTimestamp: new Date().toISOString(),
            },
            ...removeMatchingSupplierPayment(supplier?.paymentHistory, (payment) =>
              matchesSupplierPaymentTransaction(payment, selectedPaymentTransaction)
            ),
          ];
          const response = await apiRequest(`/suppliers/${supplierId}`, {
            method: "PUT",
            data: {
              bills: nextBills.map((bill) => toSupplierBillPayload(bill)),
              paymentHistory: nextPayments,
            },
          });
          if (response?.success && response?.supplier) {
            applySupplierState(normalizeSupplier(response.supplier));
          } else if (response?.success === false) {
            alert(response?.message || "Failed to update payment.");
            return;
          }
        }

        setShowPaymentModal(false);
        setSelectedBill(null);
        setSelectedPaymentTransaction(null);
        setPaymentModalMode("add");
        return;
      }

      if (isSupplierTotalPayment) {
        const unpaidBills = displayBills.filter((bill) => getRemainingNumber(bill) > 0);
        let amountToAllocate = paidAmount;

        for (const bill of unpaidBills) {
          if (amountToAllocate <= 0) break;

          const remainingAmount = getRemainingNumber(bill);
          const allocatedAmount = Math.min(remainingAmount, amountToAllocate);
          const purchaseMatch = supplierPurchases.find((p) => {
            const invoiceMatch = String(p?.invoiceNumber ?? p?.invoiceNo ?? "");
            const idMatch = String(p?._id ?? p?.id ?? "");
            return (
              (bill?.purchaseId && idMatch === String(bill.purchaseId)) ||
              (bill?.id && idMatch === String(bill.id)) ||
              (bill?.id && invoiceMatch === String(bill.id))
            );
          });

          if (bill.source === "purchase" || purchaseMatch) {
            const purchase = purchaseMatch;
            const purchaseBillReference = getSupplierBillReferenceValue({
              ...purchase,
              id: bill?.id || purchase?.invoiceNumber || purchase?._id || "",
            });
            if (!purchase?._id) {
              alert(`Purchase not found for bill ${bill.id}.`);
              return;
            }

            const response = await apiRequest(`/purchases/updatePurchase/${purchase._id}`, {
              method: "PUT",
              data: buildPurchaseUpdatePayload(
                purchase,
                parseAmount(purchase?.paidAmount) + allocatedAmount,
                {
                  paymentMethod: paymentForm.method,
                  reference: purchaseBillReference,
                }
              ),
            });

            if (response?.success === false) {
              alert(response?.message || `Failed to record payment for bill ${bill.id}.`);
              return;
            }
          } else {
            const response = await apiRequest(
              `/suppliers/${supplierId}/bills/${bill.id}/payment`,
              {
                method: "POST",
                data: {
                  paidAmount: allocatedAmount,
                  paymentMethod: paymentForm.method,
                  reference: paymentForm.reference,
                  paymentDate: paymentForm.date,
                },
              }
            );

            if (!response?.success) {
              alert(response?.message || `Failed to record payment for bill ${bill.id}.`);
              return;
            }
          }

          amountToAllocate -= allocatedAmount;
        }

        await refreshSupplierView();
        setShowPaymentModal(false);
        setSelectedBill(null);
        setSelectedPaymentTransaction(null);
        setPaymentModalMode("add");
        return;
      }

      const purchaseMatch = supplierPurchases.find((p) => {
        const invoiceMatch = String(p?.invoiceNumber ?? p?.invoiceNo ?? "");
        const idMatch = String(p?._id ?? p?.id ?? "");
        return (
          (selectedBill?.purchaseId && idMatch === String(selectedBill.purchaseId)) ||
          (selectedBill?.id && idMatch === String(selectedBill.id)) ||
          (selectedBill?.id && invoiceMatch === String(selectedBill.id))
        );
      });

      if (selectedBill.source === "purchase" || purchaseMatch) {
        const purchase = purchaseMatch;
        const purchaseBillReference = getSupplierBillReferenceValue({
          ...purchase,
          id: selectedBill?.id || purchase?.invoiceNumber || purchase?._id || "",
        });
        if (!purchase) {
          alert("Purchase not found for this bill.");
          return;
        }

        const totalAmount = parseAmount(purchase.totalAmount ?? purchase.totalPrice);
        const existingPaid = parseAmount(purchase.paidAmount);
        const remaining = Math.max(totalAmount - existingPaid, 0);
        if (paidAmount > remaining) {
          alert("Partial amount must be <= remaining amount");
          return;
        }

        const nextPaid = Math.min(existingPaid + paidAmount, totalAmount);
        const response = await submitPurchasePayment(purchase, nextPaid, {
          paymentMethod: paymentForm.method,
          reference: purchaseBillReference,
        });

        if (response?.success !== false) {
          const resolvedPurchase = {
            ...purchase,
            ...buildPurchaseUpdatePayload(purchase, nextPaid, {
              paymentMethod: paymentForm.method,
              reference: purchaseBillReference,
            }),
          };
          setSupplierPurchases((prev) =>
            prev.map((p) => (String(p._id) === String(purchase._id) ? resolvedPurchase : p))
          );
          setSupplier((prev) => {
            if (!prev) return prev;
            const savedTimestamp = new Date().toISOString();
            const paymentEntry = {
              id: `PAY-${Date.now().toString().slice(-6)}`,
              date: paymentForm.date,
              amount: formatRs(paidAmount),
              method: paymentForm.method,
              reference: purchaseBillReference,
              billId: purchaseBillReference,
              notes: "",
              createdAt: savedTimestamp,
              updatedAt: savedTimestamp,
              transactionTimestamp: savedTimestamp,
            };
            const history = Array.isArray(prev.paymentHistory) ? prev.paymentHistory : [];
            return { ...prev, paymentHistory: [paymentEntry, ...history] };
          });
          setLatestTransactionHint({
            type: "payment",
            reference: purchaseBillReference,
            date: paymentForm.date,
            debit: 0,
            credit: paidAmount,
          });
          setShowPaymentModal(false);
          setSelectedBill(null);
          setSelectedPaymentTransaction(null);
          setPaymentModalMode("add");
        } else {
          alert(response?.message || "Failed to record payment.");
        }
      } else {
        const response = await apiRequest(
          `/suppliers/${supplierId}/bills/${selectedBill.id}/payment`,
          {
            method: "POST",
            data: {
              paidAmount,
              paymentMethod: paymentForm.method,
              reference: paymentForm.reference,
              paymentDate: paymentForm.date,
            },
          }
        );

        if (response?.success && response?.supplier) {
          const savedTimestamp = new Date().toISOString();
          const normalizedSupplier = normalizeSupplier(response.supplier);
          let matchedPaymentStamped = false;
          normalizedSupplier.paymentHistory = (Array.isArray(normalizedSupplier.paymentHistory)
            ? normalizedSupplier.paymentHistory
            : []
          ).map((payment) => {
            const sameBill = String(payment?.billId || payment?.id || "") === String(selectedBill?.id || "");
            const sameAmount = parseAmount(payment?.amount) === paidAmount;
            const sameDate = String(payment?.date || "") === String(paymentForm.date || "");

            if (!matchedPaymentStamped && sameBill && sameAmount && sameDate) {
              matchedPaymentStamped = true;
              return {
                ...payment,
                createdAt: payment?.createdAt || savedTimestamp,
                updatedAt: payment?.updatedAt || savedTimestamp,
                transactionTimestamp: payment?.transactionTimestamp || savedTimestamp,
              };
            }

            return payment;
          });
          setLatestTransactionHint({
            type: "payment",
            reference: String(selectedBill?.id || ""),
            date: paymentForm.date,
            debit: 0,
            credit: paidAmount,
          });
          applySupplierState(normalizedSupplier);
          setShowPaymentModal(false);
          setSelectedBill(null);
          setSelectedPaymentTransaction(null);
          setPaymentModalMode("add");
        }
      }
    } catch (error) {
      console.error("Record Payment Error:", error);
      alert("Failed to record payment.");
    }
  };

  const handleDeletePaymentTransaction = async () => {
    if (!deletePaymentTarget || !canManageSupplierPayments) return;

    const linkedBill = findLinkedBillForTransaction(deletePaymentTarget);
    if (!linkedBill) {
      alert("Bill not found for this payment.");
      return;
    }

    const purchaseMatch = supplierPurchases.find((p) => {
      const invoiceMatch = String(p?.invoiceNumber ?? p?.invoiceNo ?? "");
      const idMatch = String(p?._id ?? p?.id ?? "");
      return (
        (linkedBill?.purchaseId && idMatch === String(linkedBill.purchaseId)) ||
        (linkedBill?.id && idMatch === String(linkedBill.id)) ||
        (linkedBill?.id && invoiceMatch === String(linkedBill.id))
      );
    });

    try {
      if (linkedBill.source === "purchase" || purchaseMatch) {
        const purchase = purchaseMatch;
        if (!purchase?._id) {
          alert("Purchase not found for this payment.");
          return;
        }

        const nextPaidValue = Math.min(
          parseAmount(linkedBill?.amount),
          getBillPaymentsTotal(linkedBill?.id || purchase.invoiceNumber || purchase._id, deletePaymentTarget)
        );

        const response = await apiRequest(`/purchases/updatePurchase/${purchase._id}`, {
          method: "PUT",
          data: buildPurchaseUpdatePayload(purchase, nextPaidValue, {
            paymentMethod: "",
            reference: "",
          }),
        });

        if (response?.success === false) {
          alert(response?.message || "Failed to delete payment.");
          return;
        }

        const resolvedPurchase = {
          ...purchase,
          ...buildPurchaseUpdatePayload(purchase, nextPaidValue, {
            paymentMethod: "",
            reference: "",
          }),
        };
        setSupplierPurchases((prev) =>
          prev.map((p) => (String(p._id) === String(purchase._id) ? resolvedPurchase : p))
        );
        setSupplier((prev) => {
          if (!prev) return prev;
          return {
            ...prev,
            paymentHistory: removeMatchingSupplierPayment(prev.paymentHistory, (payment) =>
              matchesSupplierPaymentTransaction(payment, deletePaymentTarget)
            ),
          };
        });
      } else {
        const nextPaidAmount = Math.min(
          parseAmount(linkedBill?.amount),
          getBillPaymentsTotal(linkedBill?.id, deletePaymentTarget)
        );
        const nextRemainingAmount = Math.max(parseAmount(linkedBill.amount) - nextPaidAmount, 0);
        const nextBills = manualBills.map((bill) => {
          if (String(bill?.id || "") !== String(linkedBill?.id || "")) return bill;
          return {
            ...bill,
            paidAmount: formatRs(nextPaidAmount),
            remainingAmount: formatRs(nextRemainingAmount),
            status: getComputedBillStatus(
              parseAmount(bill.amount),
              nextPaidAmount,
              nextRemainingAmount,
              bill.status
            ),
          };
        });
        const nextPayments = removeMatchingSupplierPayment(supplier?.paymentHistory, (payment) =>
          matchesSupplierPaymentTransaction(payment, deletePaymentTarget)
        );
        const response = await apiRequest(`/suppliers/${supplierId}`, {
          method: "PUT",
          data: {
            bills: nextBills.map((bill) => toSupplierBillPayload(bill)),
            paymentHistory: nextPayments,
          },
        });
        if (response?.success && response?.supplier) {
          applySupplierState(normalizeSupplier(response.supplier));
        } else if (response?.success === false) {
          alert(response?.message || "Failed to delete payment.");
          return;
        }
      }

      setDeletePaymentTarget(null);
    } catch (error) {
      console.error("Delete Payment Error:", error);
      alert("Failed to delete payment.");
    }
  };

  const getStatusBadge = (status) => {
    const styles = {
      active: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
      inactive: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
      pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
      paid: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
      overdue: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
    };
    
    const icons = {
      active: <CheckCircle className="w-3 h-3" />,
      inactive: <XCircle className="w-3 h-3" />,
      pending: <AlertCircle className="w-3 h-3" />,
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

  const getCategoryIcon = (category) => {
    switch(category) {
      case "Premium Laptops": return <Award className="w-5 h-5" />;
      case "Gaming Laptops": return <Gamepad className="w-5 h-5" />;
      case "Business Laptops": return <Briefcase className="w-5 h-5" />;
      case "Ultrabooks": return <Laptop className="w-5 h-5" />;
      case "Workstations": return <Cpu className="w-5 h-5" />;
      case "Student Laptops": return <GraduationCap className="w-5 h-5" />;
      default: return <Building className="w-5 h-5" />;
    }
  };

  const parseLocalDate = (value) => {
    const raw = String(value || "").trim();
    if (!raw) return null;

    const isoDateMatch = raw.match(/^(\d{4})-(\d{2})-(\d{2})(?:$|T)/);
    if (isoDateMatch) {
      const [, year, month, day] = isoDateMatch;
      return new Date(Number(year), Number(month) - 1, Number(day));
    }

    const parsed = new Date(raw);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = parseLocalDate(dateString);
    if (!date) return "N/A";
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getDateSortValue = (dateString) => {
    const parsed = parseLocalDate(dateString);
    return parsed ? parsed.getTime() : 0;
  };

  const hasExplicitTime = (value) => /T\d{2}:\d{2}:\d{2}| \d{1,2}:\d{2}/.test(String(value || ""));

  const getTransactionSortValue = (timestampValue, dateValue) => {
    const businessDate = parseLocalDate(dateValue);
    const timestamp = parseLocalDate(timestampValue);

    if (businessDate) {
      const merged = new Date(businessDate);
      if (timestamp && hasExplicitTime(timestampValue)) {
        merged.setHours(
          timestamp.getHours(),
          timestamp.getMinutes(),
          timestamp.getSeconds(),
          timestamp.getMilliseconds()
        );
      } else {
        merged.setHours(0, 0, 0, 0);
      }
      return merged.getTime();
    }

    return timestamp ? timestamp.getTime() : 0;
  };

  const getTransactionTimestamp = (entry = {}, fallbacks = []) =>
    [
      entry.transactionTimestamp,
      entry.paymentDate,
      entry.billDateTime,
      entry.createdAt,
      entry.updatedAt,
      entry.purchaseDate,
      entry.date,
      ...fallbacks,
    ].find((value) => getDateSortValue(value) > 0) || "";

  const isSameTransactionGroup = (first, second) =>
    getNormalizedDateValue(first?.date) === getNormalizedDateValue(second?.date) &&
    String(first?.reference || "") === String(second?.reference || "");

  const matchesLatestTransactionHint = (entry, hint) => {
    if (!hint) return false;
    return (
      String(entry?.type || "") === String(hint?.type || "") &&
      String(entry?.reference || "").trim() === String(hint?.reference || "").trim() &&
      getNormalizedDateValue(entry?.date) === getNormalizedDateValue(hint?.date) &&
      parseAmount(entry?.credit) === parseAmount(hint?.credit) &&
      parseAmount(entry?.debit) === parseAmount(hint?.debit)
    );
  };

  const getNormalizedDateValue = (dateString) => {
    const parsed = parseLocalDate(dateString);
    if (!parsed) return null;
    return new Date(parsed.getFullYear(), parsed.getMonth(), parsed.getDate()).getTime();
  };

  const parseAmount = (value) => {
    if (typeof value === "number") return value;
    const cleaned = String(value || "").replace(/[^0-9-]/g, "");
    return cleaned ? Number(cleaned) : 0;
  };

  const formatRs = (amount) => `Rs. ${Number(amount || 0).toLocaleString("en-IN")}`;
  const blankBillId = "Remaining-Bill";

  const normalizeSupplierBill = (bill) => {
    const amount = parseAmount(bill?.amount);
    const paid = parseAmount(bill?.paidAmount);
    const remaining =
      bill?.remainingAmount !== undefined && bill?.remainingAmount !== null && bill?.remainingAmount !== ""
        ? parseAmount(bill.remainingAmount)
        : Math.max(amount - paid, 0);

    return {
      ...bill,
      id: bill?.id || blankBillId,
      source:
        bill?.source === "purchase"
          ? "purchase"
          : bill?.isPlaceholderBill || String(bill?.id || "") === blankBillId
            ? "manual-placeholder"
            : "manual",
      isPlaceholderBill: Boolean(bill?.isPlaceholderBill || String(bill?.id || "") === blankBillId),
      description: bill?.description || (String(bill?.id || "") === blankBillId ? "remaining bill" : "N/A"),
      amount: formatRs(amount),
      paidAmount: formatRs(paid),
      remainingAmount: formatRs(remaining),
      status: getComputedBillStatus(amount, paid, remaining, bill?.status),
      dueDate: bill?.dueDate || "",
      transactionTimestamp:
        bill?.transactionTimestamp ||
        bill?.billDateTime ||
        bill?.createdAt ||
        bill?.purchaseDate ||
        bill?.date ||
        "",
    };
  };

  const toSupplierBillPayload = (bill) => {
    const amount = parseAmount(bill?.amount);
    const paid = parseAmount(bill?.paidAmount);
    const remaining = Math.max(amount - paid, 0);

    return {
      id: bill?.id || blankBillId,
      date: bill?.date || new Date().toISOString().split("T")[0],
      description: bill?.description || "remaining bill",
      amount: formatRs(amount),
      dueDate: bill?.dueDate || "",
      paidAmount: formatRs(paid),
      remainingAmount: formatRs(remaining),
      status: getComputedBillStatus(amount, paid, remaining, bill?.status),
      paidDate: bill?.paidDate || "",
      paymentMethod: bill?.paymentMethod || "",
      reference: bill?.reference || "",
      notes: bill?.notes || "",
    };
  };

  const getRemainingAmount = (bill) => {
    if (!bill) return formatRs(0);
    if (bill.remainingAmount) return bill.remainingAmount;
    const amount = parseAmount(bill.amount);
    const paid = parseAmount(bill.paidAmount);
    if (bill.status === "partial") return formatRs(Math.max(amount - paid, 0));
    if (bill.status === "pending" || bill.status === "overdue") return formatRs(amount);
    return formatRs(0);
  };

  const getRemainingNumber = (bill) => {
    if (!bill) return 0;
    if (bill.remainingAmount) return parseAmount(bill.remainingAmount);
    const amount = parseAmount(bill.amount);
    const paid = parseAmount(bill.paidAmount);
    if (bill.status === "partial") return Math.max(amount - paid, 0);
    if (bill.status === "pending" || bill.status === "overdue") return amount;
    return 0;
  };

  const getComputedBillStatus = (amount, paid, remaining, fallbackStatus = "pending") => {
    const normalizedFallback = String(fallbackStatus || "pending").toLowerCase();
    if (remaining <= 0 && amount > 0) return "paid";
    if (paid > 0 && remaining > 0) return "partial";
    if (normalizedFallback === "overdue") return "overdue";
    return "pending";
  };

  const manualBills = (() => {
    const bills = Array.isArray(supplier?.bills) ? supplier.bills : [];
    return bills.map((bill) => normalizeSupplierBill(bill));
  })();

  const purchaseBills = (() => {
    if (!supplierPurchases.length) return [];

    const manualBillIds = new Set(manualBills.map((bill) => String(bill?.id || "").trim()));

    return supplierPurchases
      .map((purchase) => {
        const products = Array.isArray(purchase.products) ? purchase.products : [];
        const description = products.length
          ? products.map((p) => p?.name || "Item").join(", ")
          : purchase.productName || "Purchase";
        const totalAmount = parseAmount(purchase.totalAmount ?? purchase.totalPrice);
        const paidAmount = parseAmount(purchase.paidAmount);
        const remainingAmount = parseAmount(purchase.balance) || Math.max(totalAmount - paidAmount, 0);
        const rawStatus = purchase.paymentStatus || purchase.purchaseStatus || purchase.status || "pending";
        const status = getComputedBillStatus(totalAmount, paidAmount, remainingAmount, rawStatus);
        const billId = purchase.invoiceNumber ?? purchase.invoiceNo ?? purchase._id ?? purchase.id ?? "N/A";

        return {
          id: billId,
          source: "purchase",
          purchaseId: purchase._id ?? purchase.id ?? null,
          date: purchase.purchaseDate || purchase.date || "",
          description,
          amount: formatRs(totalAmount),
          paidAmount: formatRs(paidAmount),
          remainingAmount: formatRs(remainingAmount),
          status,
        dueDate: purchase.deliveryDate || "",
        transactionTimestamp:
          purchase.createdAt ||
          purchase.purchaseDate ||
          purchase.date ||
          "",
        };
      })
      .filter((bill) => !manualBillIds.has(String(bill?.id || "").trim()));
  })();

  const blankBill = (() => {
    const existingBlankBill = manualBills.find(
      (bill) => bill.isPlaceholderBill || String(bill?.id || "").trim() === blankBillId
    );

    if (existingBlankBill) {
      return {
        ...existingBlankBill,
        id: blankBillId,
        isPlaceholderBill: true,
        source: "manual-placeholder",
        description: existingBlankBill.description || "remaining bill",
      };
    }

    const today = new Date().toISOString().split("T")[0];
    return {
      id: blankBillId,
      source: "manual-placeholder",
      isPlaceholderBill: true,
      date: today,
      description: "remaining bill",
      amount: formatRs(0),
      paidAmount: formatRs(0),
      remainingAmount: formatRs(0),
      status: "pending",
      dueDate: "",
      transactionTimestamp: today,
    };
  })();

  const displayBills = [
    ...manualBills.filter((bill) => !bill.isPlaceholderBill),
    ...purchaseBills,
    blankBill,
  ];

  const compareBillsForDisplay = (first, second) => {
    if (first?.isPlaceholderBill && !second?.isPlaceholderBill) return 1;
    if (!first?.isPlaceholderBill && second?.isPlaceholderBill) return -1;

    const timestampDiff =
      getTransactionSortValue(second?.transactionTimestamp, second?.date) -
      getTransactionSortValue(first?.transactionTimestamp, first?.date);
    if (timestampDiff !== 0) return timestampDiff;

    return String(second?.id || "").localeCompare(String(first?.id || ""));
  };

  const orderedDisplayBills = [...displayBills].sort(compareBillsForDisplay);

  const totalOutstandingAmount = displayBills.reduce(
    (sum, bill) => sum + getRemainingNumber(bill),
    0
  );

  const computedBillStats = (() => {
    if (displayBills.length > 0) {
      const totals = displayBills.reduce(
        (acc, bill) => {
          const paidAmount = parseAmount(bill?.paidAmount);
          const remainingAmount = getRemainingNumber(bill);

          acc.totalBills += 1;
          acc.paidAmount += paidAmount;
          acc.pendingAmount += remainingAmount;

          if (String(bill?.status || "").toLowerCase() === "overdue") {
            acc.overdueAmount += remainingAmount;
          }

          return acc;
        },
        { totalBills: 0, paidAmount: 0, pendingAmount: 0, overdueAmount: 0 }
      );

      return {
        totalBills: totals.totalBills,
        paidAmount: formatRs(totals.paidAmount),
        pendingAmount: formatRs(totals.pendingAmount),
        overdueAmount: formatRs(totals.overdueAmount),
      };
    }

    if (supplierPurchases.length > 0) {
      const totals = supplierPurchases.reduce(
        (acc, purchase) => {
          const totalAmount = parseAmount(purchase?.totalAmount ?? purchase?.totalPrice);
          const paidAmount = parseAmount(purchase?.paidAmount);
          const balance = parseAmount(purchase?.balance) || Math.max(totalAmount - paidAmount, 0);

          acc.totalBills += 1;
          acc.paidAmount += paidAmount;
          acc.pendingAmount += balance;

          if (String(purchase?.paymentStatus || purchase?.status || "").toLowerCase() === "overdue") {
            acc.overdueAmount += balance;
          }

          return acc;
        },
        { totalBills: 0, paidAmount: 0, pendingAmount: 0, overdueAmount: 0 }
      );

      return {
        totalBills: totals.totalBills,
        paidAmount: formatRs(totals.paidAmount),
        pendingAmount: formatRs(totals.pendingAmount),
        overdueAmount: formatRs(totals.overdueAmount),
      };
    }

    return {
      totalBills: Number(supplier?.statistics?.totalBills) || 0,
      paidAmount: formatRs(parseAmount(supplier?.statistics?.paidAmount)),
      pendingAmount: formatRs(parseAmount(supplier?.statistics?.pendingAmount)),
      overdueAmount: formatRs(parseAmount(supplier?.statistics?.overdueAmount)),
    };
  })();

  const filteredBillsForPrint = displayBills.filter((bill) => {
    const billDateValue = getNormalizedDateValue(bill?.date);
    if (billDateValue === null) return false;

    const fromDateValue = billDateRange.from ? getNormalizedDateValue(billDateRange.from) : null;
    const toDateValue = billDateRange.to ? getNormalizedDateValue(billDateRange.to) : null;

    if (fromDateValue !== null && billDateValue < fromDateValue) return false;
    if (toDateValue !== null && billDateValue > toDateValue) return false;
    return true;
  });

  const filteredBillsTotalAmount = filteredBillsForPrint.reduce(
    (sum, bill) => sum + parseAmount(bill?.amount),
    0
  );

  const derivedPaymentHistory = (() => {
    if (!supplierPurchases.length) return [];
      const entries = [];
      for (const purchase of supplierPurchases) {
      const billId = getSupplierBillReferenceValue(purchase);
      if (Array.isArray(purchase.payments) && purchase.payments.length > 0) {
        purchase.payments.forEach((payment) => {
          const amt = parseAmount(payment?.amount || 0);
          if (amt > 0) {
            entries.push({
              id: payment.id || `PURPAY-${String(purchase._id || purchase.id || "").slice(-6)}`,
              date: payment.date || purchase.purchaseDate || purchase.date || "",
              billId,
              amount: formatRs(amt),
              method: payment.method || "N/A",
              reference: payment.reference || billId,
              notes: "",
              transactionTimestamp: getTransactionTimestamp(payment, [
                purchase.updatedAt,
                purchase.createdAt,
                purchase.purchaseDate,
                purchase.date,
              ]),
            });
          }
        });
        continue;
      }

      const paid = parseAmount(purchase?.paidAmount || 0);
      if (paid > 0) {
        entries.push({
          id: `PURPAY-${String(purchase._id || purchase.id || purchase.invoiceNumber || "").slice(-6)}`,
          date: purchase.purchaseDate || purchase.date || "",
          billId,
          amount: formatRs(paid),
          method: purchase.paymentMethod || "N/A",
          reference: purchase.reference || billId,
          notes: "",
          transactionTimestamp: getTransactionTimestamp(purchase),
        });
      }
    }
    return entries;
  })();

  const paymentHistoryToShow = (() => {
    const base = Array.isArray(supplier?.paymentHistory)
      ? supplier.paymentHistory.map((payment) => ({
          ...payment,
          transactionTimestamp: getTransactionTimestamp(payment),
        }))
      : [];
    if (!base.length) return derivedPaymentHistory;
    const seen = new Set(
      base.map((p) => `${p.billId || ""}-${p.amount || ""}-${p.date || ""}`)
    );
    const merged = [...base];
    for (const p of derivedPaymentHistory) {
      const key = `${p.billId || ""}-${p.amount || ""}-${p.date || ""}`;
      if (!seen.has(key)) {
        merged.push(p);
        seen.add(key);
      }
    }
    return merged;
  })();

  const derivedLatestPaymentHint = (() => {
    const latestPayment =
      Array.isArray(paymentHistoryToShow) && paymentHistoryToShow.length > 0
        ? paymentHistoryToShow[paymentHistoryToShow.length - 1]
        : null;

    if (!latestPayment) return null;

    return {
      type: "payment",
      reference: String(latestPayment?.billId || latestPayment?.id || ""),
      date: latestPayment?.date || "",
      debit: 0,
      credit: parseAmount(latestPayment?.amount),
    };
  })();

  const recentSavedPaymentKeys = (() => {
    const payments = Array.isArray(paymentHistoryToShow) ? paymentHistoryToShow : [];
    if (!payments.length) return [];

    return payments.slice(-5).map((payment, index, arr) => ({
      key: [
        String(payment?.billId || payment?.id || "").trim(),
        getNormalizedDateValue(payment?.date),
        parseAmount(payment?.amount),
      ].join("|"),
      priority: arr.length - index,
    }));
  })();

  const transactionFeed = (() => {
    const rawTransactions = [
      ...displayBills.map((bill, index) => ({
        id: `bill-${bill.id}`,
        type: "bill",
        date: bill.date,
        transactionTimestamp: bill.transactionTimestamp || bill.date,
        reference: bill.id,
        title: bill.description,
        debit: parseAmount(bill.amount),
        credit: 0,
        status: bill.status,
        isPlaceholderBill: Boolean(bill?.isPlaceholderBill),
        savedOrder: index,
      })),
      ...paymentHistoryToShow.map((payment, index) => ({
        id: `payment-${payment.id}`,
        type: "payment",
        date: payment.date,
        transactionTimestamp: payment.transactionTimestamp || payment.date,
        reference: payment.billId || payment.id,
        title: payment.method || "Payment",
        debit: 0,
        credit: parseAmount(payment.amount),
        status: "paid",
        savedOrder: displayBills.length + index,
        isLastSavedPayment: index === paymentHistoryToShow.length - 1,
        recentSavedPaymentPriority:
          recentSavedPaymentKeys.find(
            (item) =>
              item.key ===
              [
                String(payment?.billId || payment?.id || "").trim(),
                getNormalizedDateValue(payment?.date),
                parseAmount(payment?.amount),
              ].join("|")
          )?.priority || 0,
      })),
    ];

    const chronologicalTransactions = [...rawTransactions].sort((a, b) => {
      if (a?.isPlaceholderBill && !b?.isPlaceholderBill) return -1;
      if (!a?.isPlaceholderBill && b?.isPlaceholderBill) return 1;

      const timestampDiff =
        getTransactionSortValue(a.transactionTimestamp, a.date) -
        getTransactionSortValue(b.transactionTimestamp, b.date);
      if (timestampDiff !== 0) return timestampDiff;
      return a.savedOrder - b.savedOrder;
    });

    let previousBalance = 0;
    const transactionsWithBalance = chronologicalTransactions.map((entry) => {
      const debitAmount = Number(entry.debit || 0);
      const creditAmount = Number(entry.credit || 0);
      const nextBalance = Math.max(0, previousBalance + debitAmount - creditAmount);

      previousBalance = nextBalance;

      return {
        ...entry,
        balance: nextBalance,
      };
    });

    return transactionsWithBalance.sort((a, b) => {
      if (a?.isPlaceholderBill && !b?.isPlaceholderBill) return 1;
      if (!a?.isPlaceholderBill && b?.isPlaceholderBill) return -1;

      const timestampDiff =
        getTransactionSortValue(b.transactionTimestamp, b.date) -
        getTransactionSortValue(a.transactionTimestamp, a.date);
      if (timestampDiff !== 0) return timestampDiff;
      return b.savedOrder - a.savedOrder;
    });
  })();

  const filteredTransactions = transactionFeed.filter((entry) => {
    const entryDateValue = getNormalizedDateValue(entry?.date);
    if (entryDateValue === null) return false;

    const fromDateValue = billDateRange.from ? getNormalizedDateValue(billDateRange.from) : null;
    const toDateValue = billDateRange.to ? getNormalizedDateValue(billDateRange.to) : null;

    if (fromDateValue !== null && entryDateValue < fromDateValue) return false;
    if (toDateValue !== null && entryDateValue > toDateValue) return false;
    return true;
  });
  const isBillDateRangeValid = (() => {
    const fromDateValue = billDateRange.from ? getNormalizedDateValue(billDateRange.from) : null;
    const toDateValue = billDateRange.to ? getNormalizedDateValue(billDateRange.to) : null;
    const todayDateValue = getNormalizedDateValue(toDateInputValue(new Date()));
    if (fromDateValue !== null && toDateValue !== null) {
      if (fromDateValue > toDateValue) return false;
    }
    if (toDateValue !== null && todayDateValue !== null && toDateValue > todayDateValue) return false;
    return true;
  })();

  const totalTransactionPages = Math.max(
    1,
    Math.ceil(filteredTransactions.length / transactionsPerPage)
  );
  const safeTransactionPage = Math.min(transactionPage, totalTransactionPages);
  const paginatedTransactions = filteredTransactions.slice(
    (safeTransactionPage - 1) * transactionsPerPage,
    safeTransactionPage * transactionsPerPage
  );

  const openSupplierPaymentModal = () => {
    setPaymentModalMode("add");
    setSelectedPaymentTransaction(null);
    setSelectedBill({
      id: `TOTAL-${supplier?.name || "SUPPLIER"}`,
      source: "supplier-total",
      date: new Date().toISOString().split("T")[0],
      dueDate: "",
      description: `Outstanding balance for ${supplier?.name || "supplier"}`,
      amount: formatRs(totalOutstandingAmount),
      paidAmount: formatRs(0),
      remainingAmount: formatRs(totalOutstandingAmount),
      status: "pending",
    });
    setShowPaymentModal(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading supplier details...</p>
        </div>
      </div>
    );
  }

  if (!supplier) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-12 h-12 text-red-600 dark:text-red-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Supplier Not Found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The supplier you're looking for doesn't exist.
          </p>
          <button
            onClick={() => router.push("/AdminDashboard/suppliers")}
            className="bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-600 hover:to-green-600 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center gap-2 mx-auto shadow-sm hover:shadow transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Suppliers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header with Back Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push('/AdminDashboard/suppliers')}
              className="p-2.5 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-300 hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-600 dark:hover:to-gray-500 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Supplier Details
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                View and manage supplier information
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => handlePrint("all_bills")}
              className="p-2.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-600 dark:hover:to-gray-500 rounded-xl transition-all"
              title="Print All Bills"
            >
              <Printer className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Supplier Header Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-lg">
                {supplier.name.charAt(0)}
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {supplier.name}
                  </h2>
                  {supplier.preferred && (
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 rounded-full text-xs font-medium flex items-center gap-1">
                      <Star className="w-3 h-3 fill-amber-500" />
                      Preferred
                    </span>
                  )}
                  {getStatusBadge(supplier.status)}
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  {getCategoryIcon(supplier.category)}
                  <span>{supplier.category}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full mx-2"></span>
                  <Building className="w-4 h-4" />
                  <span>{supplier.company}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Registered: {formatDate(supplier.registeredDate)}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-xl">
                <p className="text-xs text-gray-600 dark:text-gray-400">Total Purchases</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{supplier.totalPurchases}</p>
              </div>
              <div className="px-4 py-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                <p className="text-xs text-gray-600 dark:text-gray-400">Credit Limit</p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{supplier.creditLimit}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Bills</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{computedBillStats.totalBills}</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 rounded-xl">
                <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Paid Amount</p>
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">{computedBillStats.paidAmount}</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pending Amount</p>
                <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">{computedBillStats.pendingAmount}</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 rounded-xl">
                <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Overdue Amount</p>
                <p className="text-2xl font-bold text-red-600 dark:text-red-400">{computedBillStats.overdueAmount}</p>
              </div>
              <div className="p-3 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 rounded-xl">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex gap-6 overflow-x-auto">
            {[
              { id: "overview", label: "Bills", icon: Info },
              { id: "products", label: "Products", icon: Package },
              { id: "payments", label: "Payments", icon: Wallet },
              { id: "profile", label: "Profile", icon: Building },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-8">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <ArrowLeftRight className="w-5 h-5 text-blue-600" />
                    Latest Transactions
                  </h3>
                  <div className="flex items-center gap-3">
                      <button
                        onClick={openSupplierPaymentModal}
                        disabled={!canManageSupplierPayments}
                        className="rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2 text-sm font-medium text-white hover:from-blue-700 hover:to-emerald-600 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        Add Payment
                      </button>
                    <div className="flex flex-wrap items-center gap-2">
                      <input
                        type="date"
                        value={billDateRange.from}
                        onChange={(e) =>
                          setBillDateRange((prev) => ({ ...prev, from: e.target.value }))
                        }
                        className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200"
                        aria-label="Bill from date"
                      />
                      <span className="text-sm text-gray-500 dark:text-gray-400">to</span>
                      <input
                        type="date"
                        value={billDateRange.to}
                        onChange={(e) =>
                          setBillDateRange((prev) => ({ ...prev, to: e.target.value }))
                        }
                        className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200"
                        aria-label="Bill to date"
                      />
                    </div>
                    <button
                      onClick={() =>
                        handlePrint("all_bills", {
                          bills: filteredBillsForPrint,
                          transactions: filteredTransactions,
                          dateRange: billDateRange,
                        })
                      }
                      disabled={!isBillDateRangeValid}
                      className="rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 px-4 py-2 text-sm font-medium text-white hover:from-slate-800 hover:to-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Print Total Bills
                    </button>
                  </div>
                </div>
                <p className="mb-4 text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Bill Amount: <span className="text-gray-900 dark:text-white">{formatRs(filteredBillsTotalAmount)}</span>
                </p>
                <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-700">
                  <table className="w-full min-w-[860px]">
                    <thead className="bg-gray-50 dark:bg-gray-700/50">
                      <tr>
                        <th className="w-[90px] min-w-[90px] px-2.5 py-2.5 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th className="w-[80px] min-w-[80px] px-2.5 py-2.5 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                        <th className="w-[95px] min-w-[95px] px-2.5 py-2.5 text-left text-xs font-medium text-gray-500 uppercase">Reference</th>
                        <th className="w-[150px] min-w-[150px] px-2.5 py-2.5 text-left text-xs font-medium text-gray-500 uppercase">Particulars</th>
                        <th className="w-[90px] min-w-[90px] px-2.5 py-2.5 text-left text-xs font-medium text-gray-500 uppercase">Debit</th>
                        <th className="w-[90px] min-w-[90px] px-2.5 py-2.5 text-left text-xs font-medium text-gray-500 uppercase">Credit</th>
                        <th className="w-[90px] min-w-[90px] px-2.5 py-2.5 text-left text-xs font-medium text-gray-500 uppercase">Balance</th>
                        <th className="w-[70px] min-w-[70px] px-2.5 py-2.5 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {paginatedTransactions.map((entry) => (
                        <tr key={entry.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                          <td className="px-2.5 py-2.5 text-sm text-gray-600 dark:text-gray-400">{formatDate(entry.date)}</td>
                          <td className="px-2.5 py-2.5 text-sm font-medium text-gray-900 dark:text-white capitalize">{entry.type}</td>
                          <td className="px-2.5 py-2.5 text-sm text-gray-600 dark:text-gray-400">{entry.reference}</td>
                          <td className="w-[150px] min-w-[150px] px-2.5 py-2.5 text-sm text-gray-600 dark:text-gray-400">
                            <div
                              className="overflow-hidden break-words"
                              style={{
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                              }}
                            >
                              {entry.title}
                            </div>
                          </td>
                          <td className="px-2.5 py-2.5 text-sm font-medium text-gray-900 dark:text-white">{formatRs(entry.debit)}</td>
                          <td className="px-2.5 py-2.5 text-sm font-medium text-green-600 dark:text-green-400">{formatRs(entry.credit)}</td>
                          <td className="px-2.5 py-2.5 text-sm font-medium text-gray-900 dark:text-white">{formatRs(entry.balance)}</td>
                          <td className="px-2.5 py-2.5 text-sm text-gray-600 dark:text-gray-400">
                            {entry.type === "payment" ? (
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => requestEditPaymentTransaction(entry)}
                                  disabled={!canManageSupplierPayments}
                                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-200 text-blue-600 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-blue-900/60 dark:text-blue-300 dark:hover:bg-blue-950/30"
                                  aria-label="Edit payment transaction"
                                  title="Edit payment"
                                >
                                  <FilePen className="h-4 w-4" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => requestDeletePaymentTransaction(entry)}
                                  disabled={!canManageSupplierPayments}
                                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-red-200 text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-red-900/60 dark:text-red-300 dark:hover:bg-red-950/30"
                                  aria-label="Delete payment transaction"
                                  title="Delete payment"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            ) : entry.isPlaceholderBill ? (
                              <button
                                type="button"
                                onClick={() =>
                                  requestEditBlankBill(findLinkedBillForTransaction(entry) || blankBill)
                                }
                                disabled={!canEditSupplier}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-blue-200 text-blue-600 transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-blue-900/60 dark:text-blue-300 dark:hover:bg-blue-950/30"
                                aria-label="Edit remaining bill transaction"
                                title="Edit remaining bill"
                              >
                                <FilePen className="h-4 w-4" />
                              </button>
                            ) : null}
                          </td>
                        </tr>
                      ))}
                      {filteredTransactions.length === 0 && (
                        <tr>
                          <td colSpan={8} className="px-2.5 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
                            No transactions available for this supplier.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                {filteredTransactions.length > 0 && (
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Showing {paginatedTransactions.length} of {filteredTransactions.length} transactions
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setTransactionPage((prev) => Math.max(prev - 1, 1))}
                        disabled={safeTransactionPage === 1}
                        className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        Prev
                      </button>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {safeTransactionPage} / {totalTransactionPages}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setTransactionPage((prev) => Math.min(prev + 1, totalTransactionPages))
                        }
                        disabled={safeTransactionPage === totalTransactionPages}
                        className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Products Tab */}
          {activeTab === "products" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Package className="w-5 h-5 text-blue-600" />
                  Laptop Details
                </h3>
              </div>

              <div className="overflow-x-auto max-h-[420px] overflow-y-scroll pr-1">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Laptop Details</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Supplier</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Qty</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Value</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {supplierPurchases.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
                          No purchases found for this supplier.
                        </td>
                      </tr>
                    ) : (
                      supplierPurchases.map((purchase) => {
                        const products = Array.isArray(purchase.products) ? purchase.products : [];
                        const firstProduct = products[0] || {};
                        const qty = products.length
                          ? products.reduce((sum, p) => sum + (Number(p.quantity) || 0), 0)
                          : Number(purchase.quantity) || 0;
                        const totalValue = parseAmount(purchase.totalAmount ?? purchase.totalPrice);
                        const status = purchase.purchaseStatus || purchase.status || "Draft";
                        const dateValue = purchase.purchaseDate || purchase.date || "";
                        const productName = firstProduct.name || purchase.productName || "N/A";
                        const brand = firstProduct.manufacturer || purchase.brand || "";

                        return (
                          <tr key={purchase._id || purchase.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                            <td className="px-4 py-3">
                              <div className="font-medium text-gray-900 dark:text-white">{productName}</div>
                              {brand && (
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{brand}</div>
                              )}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                              {purchase.supplier || supplier.name}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                              {qty}
                            </td>
                            <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">
                              {formatRs(totalValue)}
                            </td>
                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                              {formatDate(dateValue)}
                            </td>
                            <td className="px-4 py-3">
                              {getStatusBadge(status)}
                            </td>
                            <td className="px-4 py-3">
                              <div className="flex items-center gap-2">
                                <button
                                  className="p-1 text-blue-600 hover:text-blue-800"
                                  onClick={() => {
                                    setSelectedBill(null);
                                  }}
                                  title="View Purchase"
                                >
                                  <Eye className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Bills Tab */}
          {activeTab === "bills" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Bills from {supplier.name}
                </h3>
              </div>

              <div className="overflow-x-auto max-h-[420px] overflow-y-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bill ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Particulars</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Debit</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Credit</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Balance</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {orderedDisplayBills.map((bill) => (
                      <tr key={bill.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td className="px-4 py-3">
                          <div className="font-medium text-gray-900 dark:text-white">{bill.id}</div>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{formatDate(bill.date)}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 max-w-xs truncate">{bill.description}</td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{bill.amount}</td>
                        <td className="px-4 py-3 text-sm font-medium text-green-600 dark:text-green-400">{formatRs(parseAmount(bill.paidAmount))}</td>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">{getRemainingAmount(bill)}</td>
                        <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              bill.status === "paid" 
                                ? 'bg-green-100 text-green-800'
                                : bill.status === "partial"
                                  ? 'bg-amber-100 text-amber-800'
                                  : bill.status === "pending"
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : bill.status === "overdue"
                                      ? 'bg-red-100 text-red-800'
                                      : 'bg-gray-100 text-gray-800'
                          }`}>
                            {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{formatDate(bill.dueDate)}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            {bill.isPlaceholderBill ? (
                              <button
                                type="button"
                                onClick={() => requestEditBlankBill(bill)}
                                disabled={!canEditSupplier}
                                className="p-1 text-blue-600 hover:text-blue-800 disabled:cursor-not-allowed disabled:opacity-40"
                                title="Edit remaining bill"
                              >
                                <FilePen className="w-4 h-4" />
                              </button>
                            ) : null}
                            <button 
                              onClick={() => setSelectedBill(bill)}
                              className="p-1 text-blue-600 hover:text-blue-800"
                              title="View Details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handlePrint("bill", bill)}
                              className="p-1 text-purple-600 hover:text-purple-800"
                              title="Print"
                            >
                              <Printer className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {orderedDisplayBills.length === 0 && (
                      <tr>
                        <td colSpan={9} className="px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
                          No bills found for this supplier.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Payments Tab */}
          {activeTab === "payments" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-blue-600" />
                  Payment History
                </h3>
                <button
                  onClick={() => handlePrint("payment_report", paymentHistoryToShow)}
                  disabled={paymentHistoryToShow.length === 0}
                  className="px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 bg-purple-600 text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Printer className="w-4 h-4" />
                  Print Report
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bill ID</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reference</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {paymentHistoryToShow.map((payment) => (
                      <tr key={payment.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td className="px-4 py-3">
                          <div className="font-medium text-gray-900 dark:text-white">{payment.id}</div>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{formatDate(payment.date)}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{payment.billId}</td>
                        <td className="px-4 py-3 text-sm font-medium text-green-600">{payment.amount}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{payment.method}</td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{payment.reference}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => handlePrint("receipt", payment)}
                              className="p-1 text-purple-600 hover:text-purple-800"
                              title="Print Receipt"
                            >
                              <Printer className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handleDownload("receipt", payment)}
                              className="p-1 text-blue-600 hover:text-blue-800"
                              title="Download Receipt"
                            >
                              <Download className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {paymentHistoryToShow.length === 0 && (
                      <tr>
                        <td colSpan={7} className="px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
                          No payment history found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Building className="w-5 h-5 text-blue-600" />
                    Company Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Building className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Company Name</p>
                        <p className="font-medium text-gray-900 dark:text-white">{supplier.company}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <User className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Contact Person</p>
                        <p className="font-medium text-gray-900 dark:text-white">{supplier.contactPerson}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium text-gray-900 dark:text-white">{supplier.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium text-gray-900 dark:text-white">{supplier.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Smartphone className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Mobile</p>
                        <p className="font-medium text-gray-900 dark:text-white">{supplier.mobile}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Website</p>
                        <a href={supplier.website} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:text-blue-700">
                          {supplier.website}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium text-gray-900 dark:text-white">{supplier.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-blue-600" />
                    Business Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Barcode className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Tax ID</p>
                        <p className="font-medium text-gray-900 dark:text-white">{supplier.taxId}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Registered Date</p>
                        <p className="font-medium text-gray-900 dark:text-white">{formatDate(supplier.registeredDate)}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Credit Limit</p>
                        <p className="font-medium text-gray-900 dark:text-white">{supplier.creditLimit}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-gray-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Average Payment Days</p>
                        <p className="font-medium text-gray-900 dark:text-white">{supplier.statistics.averagePaymentDays} days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Landmark className="w-5 h-5 text-blue-600" />
                  Bank Details
                </h3>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm text-gray-500">Bank Name</p>
                      <p className="font-medium text-gray-900 dark:text-white">{supplier.bankDetails.bankName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Account Title</p>
                      <p className="font-medium text-gray-900 dark:text-white">{supplier.bankDetails.accountTitle}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Account Number</p>
                      <p className="font-medium text-gray-900 dark:text-white">{supplier.bankDetails.accountNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">IBAN</p>
                      <p className="font-medium text-gray-900 dark:text-white">{supplier.bankDetails.iban}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">SWIFT Code</p>
                      <p className="font-medium text-gray-900 dark:text-white">{supplier.bankDetails.swiftCode}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


          {/* Documents Tab */}
          {activeTab === "documents" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <FileStack className="w-5 h-5 text-blue-600" />
                  Documents
                </h3>
                <button
                  onClick={() => setShowDocumentModal(true)}
                  disabled={!canEditSupplier}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:from-blue-600 hover:to-green-600 transition disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <UploadCloud className="w-4 h-4" />
                  Upload Document
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {supplier.documents.map((doc, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 rounded-xl">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">{doc.name}</h4>
                        <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                          <span>{doc.date}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>{doc.type}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setSelectedDocument(doc)}
                          className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDownload("document", doc)}
                          className="p-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition"
                          title="Download"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => router.push('/AdminDashboard/suppliers')}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            Back to Suppliers
          </button>
        </div>
      </div>

      {/* Edit Supplier Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Edit Supplier</h3>
              <button
                onClick={() => setShowEditModal(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleUpdateSupplier} className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["name", "Supplier Name"],
                ["company", "Company"],
                ["contactPerson", "Contact Person"],
                ["email", "Email"],
                ["phone", "Phone"],
                ["mobile", "Mobile"],
                ["taxId", "Tax ID"],
                ["website", "Website"],
              ].map(([field, label]) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {label}
                  </label>
                  <input
                    type="text"
                    value={editForm[field]}
                    onChange={(e) =>
                      setEditForm((prev) => ({ ...prev, [field]: e.target.value }))
                    }
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  value={editForm.category}
                  onChange={(e) =>
                    setEditForm((prev) => ({ ...prev, category: e.target.value }))
                  }
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Payment Terms
                </label>
                <input
                  type="text"
                  value={editForm.paymentTerms}
                  onChange={(e) =>
                    setEditForm((prev) => ({
                      ...prev,
                      paymentTerms: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Address
                </label>
                <textarea
                  rows={3}
                  value={editForm.address}
                  onChange={(e) =>
                    setEditForm((prev) => ({ ...prev, address: e.target.value }))
                  }
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Notes
                </label>
                <textarea
                  rows={2}
                  value={editForm.notes}
                  onChange={(e) =>
                    setEditForm((prev) => ({ ...prev, notes: e.target.value }))
                  }
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
              </div>
              <div className="md:col-span-2 flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!canEditSupplier}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full max-h-[85vh] overflow-hidden">
            <div className="p-6 overflow-y-scroll max-h-[85vh] pr-1">
              <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
                Delete Supplier?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                Are you sure you want to delete <span className="font-semibold">{supplier.name}</span>? This action cannot be undone.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteSupplier}
                  disabled={!canDeleteSupplier}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl font-medium hover:from-red-700 hover:to-pink-700 transition disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-sm w-full">
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {paymentModalMode === "edit" ? "Edit Payment" : "Add Payment"}
              </h3>
              <form onSubmit={handleRecordPayment}>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Balance (Debit - Credit, if credit is empty then 0)
                    </label>
                    <input
                      type="text"
                      value={formatRs(
                        Math.max(
                          parseAmount(selectedBill?.amount) - parseAmount(selectedBill?.paidAmount),
                          0
                        )
                      )}
                      readOnly
                      className="w-full px-3 py-2.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-900 dark:text-white cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {paymentModalMode === "edit" ? "Edit Payment" : "Add Payment"}
                    </label>
                    <input
                      type="number"
                      min="0"
                      max={
                        paymentModalMode === "edit"
                          ? getRemainingNumber(selectedBill) + parseAmount(selectedPaymentTransaction?.credit)
                          : getRemainingNumber(selectedBill)
                      }
                      value={paymentForm.partialAmount}
                      placeholder="0"
                      onChange={(e) => {
                        const raw = e.target.value;
                        setPaymentForm((prev) => ({
                          ...prev,
                          partialAmount: raw === "" ? "" : Number(raw),
                        }));
                      }}
                      className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Remaining Amount
                    </label>
                    <input
                      type="text"
                      value={formatRs(
                        Math.max(
                          (paymentModalMode === "edit"
                            ? getRemainingNumber(selectedBill) + parseAmount(selectedPaymentTransaction?.credit)
                            : getRemainingNumber(selectedBill)) -
                            (paymentForm.partialAmount === "" ? 0 : Number(paymentForm.partialAmount || 0)),
                          0
                        )
                      )}
                      readOnly
                      className="w-full px-3 py-2.5 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-900 dark:text-white cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Payment Method *
                    </label>
                    <select
                      required
                      value={paymentForm.method}
                      onChange={(e) => setPaymentForm((prev) => ({ ...prev, method: e.target.value }))}
                      className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Cash">Cash</option>
                      <option value="Cash Online">Cash Online</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Date *
                    </label>
                    <input
                      type="date"
                      value={paymentForm.date}
                      onChange={(e) => setPaymentForm((prev) => ({ ...prev, date: e.target.value }))}
                      className="w-full px-3 py-2.5 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-4 pt-3 border-t dark:border-gray-700">
                  <button
                    type="button"
                    onClick={() => {
                      setShowPaymentModal(false);
                      setSelectedBill(null);
                      setSelectedPaymentTransaction(null);
                      setPaymentModalMode("add");
                    }}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!canManageSupplierPayments}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-green-600 transition disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {paymentModalMode === "edit" ? "Update Payment" : "Save Payment"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {showBlankBillModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white shadow-2xl dark:bg-gray-800">
            <div className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                  <FilePen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Edit remaining bill</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Update the debit amount for the remaining bill.
                  </p>
                </div>
              </div>
              <form onSubmit={handleSaveBlankBill} className="space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Debit Amount
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={blankBillForm.amount}
                    onChange={(e) =>
                      setBlankBillForm({
                        amount: e.target.value === "" ? "" : e.target.value,
                      })
                    }
                    placeholder="0"
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                  />
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowBlankBillModal(false);
                      setBlankBillTarget(null);
                      setBlankBillForm({ amount: "" });
                    }}
                    className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!canEditSupplier}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {deletePaymentTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl dark:bg-gray-800">
            <div className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-300">
                  <Trash2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Delete Payment</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Are you sure want to delete payment invoice {deletePaymentTarget.reference || "invoice"}?
                  </p>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setDeletePaymentTarget(null)}
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  No
                </button>
                <button
                  type="button"
                  onClick={handleDeletePaymentTransaction}
                  disabled={!canManageSupplierPayments}
                  className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Upload Document Modal */}
      {showDocumentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Upload Document
              </h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                if (!canEditSupplier) return;
                alert("Document uploaded successfully!");
                setShowDocumentModal(false);
              }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Document Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Vendor Agreement 2024"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Document Type
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500">
                      <option value="Agreement">Agreement</option>
                      <option value="Invoice">Invoice</option>
                      <option value="Tax Document">Tax Document</option>
                      <option value="Price List">Price List</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Choose File *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                      <UploadCloud className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-400 mt-1">PDF, JPG, PNG up to 10MB</p>
                      <input type="file" className="hidden" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Notes
                    </label>
                    <textarea
                      rows="2"
                      placeholder="Any notes about this document..."
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-end gap-3 mt-6 pt-4 border-t dark:border-gray-700">
                  <button
                    type="button"
                    onClick={() => setShowDocumentModal(false)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!canEditSupplier}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-green-600 transition disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Bill Details Modal */}
      {selectedBill && !showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Bill Details - {selectedBill.id}
                </h3>
                <button
                  onClick={() => setSelectedBill(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition"
                >
                  <XCircle className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Bill Header */}
                <div className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/10 dark:to-emerald-900/10 rounded-xl p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Bill ID</p>
                      <p className="font-bold text-gray-900 dark:text-white">{selectedBill.id}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        selectedBill.status === "paid" 
                          ? 'bg-green-100 text-green-800'
                          : selectedBill.status === "pending"
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {selectedBill.status}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-medium text-gray-900 dark:text-white">{formatDate(selectedBill.date)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Due Date</p>
                      <p className="font-medium text-gray-900 dark:text-white">{formatDate(selectedBill.dueDate)}</p>
                    </div>
                  </div>
                </div>

                {/* Particulars */}
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Particulars</h4>
                  <p className="text-gray-600 dark:text-gray-400">{selectedBill.description}</p>
                </div>

                {/* Items */}
                {selectedBill.items && (
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Items</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                          <tr>
                            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500">Product</th>
                            <th className="px-3 py-2 text-right text-xs font-medium text-gray-500">Qty</th>
                            <th className="px-3 py-2 text-right text-xs font-medium text-gray-500">Unit Price</th>
                            <th className="px-3 py-2 text-right text-xs font-medium text-gray-500">Total</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {selectedBill.items.map((item, idx) => (
                            <tr key={idx}>
                              <td className="px-3 py-2 text-sm text-gray-900">{item.name}</td>
                              <td className="px-3 py-2 text-right text-sm text-gray-600">{item.quantity}</td>
                              <td className="px-3 py-2 text-right text-sm text-gray-600">{item.unitPrice}</td>
                              <td className="px-3 py-2 text-right text-sm font-medium text-gray-900">{item.total}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* Total */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Total Amount:</span>
                    <span className="text-2xl font-bold text-blue-600">{selectedBill.amount}</span>
                  </div>
                </div>

                {/* Payment Info if paid */}
                {selectedBill.status === "paid" && selectedBill.paidDate && (
                  <div className="bg-green-50 dark:bg-green-900/10 rounded-xl p-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Payment Information
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-sm text-gray-500">Paid Date</p>
                        <p className="font-medium text-gray-900 dark:text-white">{formatDate(selectedBill.paidDate)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Method</p>
                        <p className="font-medium text-gray-900 dark:text-white">{selectedBill.paymentMethod}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-gray-500">Reference</p>
                        <p className="font-medium text-gray-900 dark:text-white">{selectedBill.reference}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 pt-4 border-t">
                  <button
                    onClick={() => setSelectedBill(null)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => handlePrint("bill", selectedBill)}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition flex items-center gap-2"
                  >
                    <Printer className="w-4 h-4" />
                    Print
                  </button>
                  {selectedBill.status !== "paid" && (
                    <button
                      onClick={() => {
                        if (!canManageSupplierPayments) return;
                        setPaymentModalMode("add");
                        setSelectedPaymentTransaction(null);
                        setShowPaymentModal(true);
                      }}
                      disabled={!canManageSupplierPayments}
                      className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-medium hover:from-green-700 hover:to-emerald-700 transition flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Add Payment
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
