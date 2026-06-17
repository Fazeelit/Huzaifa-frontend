"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Barcode,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  Eye,
  FileText,
  Globe,
  IdCard,
  Info,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Printer,
  Package,
  Receipt,
  Smartphone,
  Star,
  Tag,
  TrendingUp,
  User,
  Wallet,
  X,
} from "lucide-react";
import CustomersFilterBar from "../components/customers/CustomersFilterBar";
import DeleteCustomerModal from "../components/customers/DeleteCustomerModal";
import CustomersGridView from "../components/customers/CustomersGridView";
import CustomersHeaderSection from "../components/customers/CustomersHeaderSection";
import CustomersListView from "../components/customers/CustomersListView";
import CustomersResultsSummary from "../components/customers/CustomersResultsSummary";
import CustomersTips from "../components/customers/CustomersTips";
import { apiRequest } from "../authservice/api";
import { hasPermission, readStoredAuth } from "../authservice/auth";

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
  mobile: customer.mobile || customer.phone || "",
  createdAt: customer.createdAt || customer.customerSince || null,
  customerSince: customer.createdAt || customer.customerSince || null,
  purchaseCount: Number(customer.totalPurchases ?? customer.orders ?? 0) || 0,
  totalSpent: toNumber(customer.totalSpent),
  accountBalance: toNumber(customer.accountBalance),
  creditLimit: toNumber(customer.creditLimit),
  lastPurchase: customer.lastPurchase || "No purchases yet",
  tags: Array.isArray(customer.tags) ? customer.tags : [],
  status: String(customer.status || "active").toLowerCase(),
  satisfaction: Number(customer.satisfaction) || 0,
});

const extractSalesArray = (response) => {
  if (Array.isArray(response?.sales)) return response.sales;
  if (Array.isArray(response?.data?.sales)) return response.data.sales;
  if (Array.isArray(response?.data?.data)) return response.data.data;
  if (Array.isArray(response?.data)) return response.data;
  if (Array.isArray(response)) return response;
  return [];
};

const getCustomerTimestamp = (customer) => {
  const parsed = new Date(customer?.createdAt || customer?.customerSince || 0).getTime();
  return Number.isNaN(parsed) ? 0 : parsed;
};

const matchesCustomerSale = (sale, customer) => {
  const saleCustomer = sale?.customer || sale?.selectedCustomer || {};
  const saleCustomerId = sale?.customerId || saleCustomer?._id || saleCustomer?.id || "";
  const targetId = customer?.id || customer?._id || "";
  const saleName = String(sale?.customerName || saleCustomer?.name || "")
    .trim()
    .toLowerCase();
  const targetName = String(customer?.name || "")
    .trim()
    .toLowerCase();
  const saleCnic = String(saleCustomer?.cnic || "").trim();
  const targetCnic = String(customer?.cnic || "").trim();
  const salePhone = String(saleCustomer?.phone || saleCustomer?.mobile || "").trim();
  const targetPhone = String(customer?.phone || customer?.mobile || "").trim();

  return (
    (targetId && saleCustomerId && String(saleCustomerId) === String(targetId)) ||
    (targetCnic && saleCnic && saleCnic === targetCnic) ||
    (targetPhone && salePhone && salePhone === targetPhone) ||
    (targetName && saleName === targetName)
  );
};

const getSaleDateValue = (sale) => sale?.saleDate || sale?.createdAt || sale?.timestamp || null;

const getReturnedSaleQuantity = (product = {}) =>
  Math.max(
    Number(
      product?.returnedQuantity ??
        product?.returnedQty ??
        product?.returnQty ??
        product?.quantityReturned ??
        0
    ) || 0,
    0
  );

const getChargedSaleQuantity = (product = {}) =>
  Math.max(
    Number(product?.chargedQuantity ?? product?.quantity ?? product?.qty ?? 0) -
      getReturnedSaleQuantity(product),
    0
  );

const getInvoiceAmount = (quantity, unitPrice) =>
  Number((Math.max(Number(quantity) || 0, 0) * (Number(unitPrice) || 0)).toFixed(2));

const getCustomerSaleTotal = (sale = {}) => {
  const invoiceTotal = (Array.isArray(sale?.products) ? sale.products : []).reduce(
    (sum, product) =>
      sum +
      getInvoiceAmount(
        getChargedSaleQuantity(product),
        Number(product?.salePrice ?? product?.price ?? product?.retailSalePrice ?? 0)
      ),
    0
  );

  return Number(
    Math.max(invoiceTotal - (Number(sale?.discount) || 0), 0).toFixed(2)
  );
};

export default function Customers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [customers, setCustomers] = useState([]);
  const [sales, setSales] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedTag, setSelectedTag] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState("list");
  const [sortBy, setSortBy] = useState("newest");
  const [viewCustomer, setViewCustomer] = useState(null);
  const [activeCustomerTab, setActiveCustomerTab] = useState("overview");
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [canCreateCustomer, setCanCreateCustomer] = useState(false);
  const [canEditCustomer, setCanEditCustomer] = useState(false);
  const [canDeleteCustomer, setCanDeleteCustomer] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);
  const [paymentForm, setPaymentForm] = useState({
    method: "",
    date: new Date().toISOString().split("T")[0],
    partialAmount: "",
  });
  const [payingBillId, setPayingBillId] = useState("");
  const itemsPerPage = 10;

  useEffect(() => {
    const syncPermissions = () => {
      const { permissions } = readStoredAuth();
      setCanCreateCustomer(hasPermission(permissions, "CUSTOMER_CREATE"));
      setCanEditCustomer(hasPermission(permissions, "CUSTOMER_EDIT"));
      setCanDeleteCustomer(hasPermission(permissions, "CUSTOMER_DELETE"));
    };

    syncPermissions();
    window.addEventListener("storage", syncPermissions);
    return () => window.removeEventListener("storage", syncPermissions);
  }, []);

  useEffect(() => {
    if (viewCustomer) {
      setActiveCustomerTab("overview");
    }
  }, [viewCustomer]);

  useEffect(() => {
    if (!showPaymentModal || !selectedBill) return;
    setPaymentForm({
      method: "",
      date: new Date().toISOString().split("T")[0],
      partialAmount:
        selectedBill?.source === "customer-total" ? Number(selectedBill.remaining || 0) : 0,
    });
  }, [showPaymentModal, selectedBill]);

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

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await apiRequest("/sales", { method: "GET" });
        setSales(extractSalesArray(response));
      } catch (error) {
        console.error("Fetch Sales Error:", error);
      }
    };

    fetchSales();
  }, []);


  const enrichedCustomers = customers.map((customer) => {
    const matchedSales = sales.filter((sale) => matchesCustomerSale(sale, customer));
    const totalSpent = matchedSales.reduce(
      (sum, sale) => sum + getCustomerSaleTotal(sale),
      0
    );
    const latestSale = matchedSales
      .slice()
      .sort((a, b) => new Date(getSaleDateValue(b) || 0).getTime() - new Date(getSaleDateValue(a) || 0).getTime())[0];

    return {
      ...customer,
      purchaseCount: matchedSales.length,
      totalSpent,
      lastPurchase: latestSale ? (getSaleDateValue(latestSale) || customer.lastPurchase) : "No purchases yet",
    };
  });

  const resolvedViewCustomer = viewCustomer
    ? enrichedCustomers.find((customer) => String(customer.id) === String(viewCustomer.id)) || viewCustomer
    : null;

  const filteredCustomers = enrichedCustomers
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
          return getCustomerTimestamp(b) - getCustomerTimestamp(a);
        case "oldest":
          return getCustomerTimestamp(a) - getCustomerTimestamp(b);
        case "spent-high":
          return toNumber(b.totalSpent) - toNumber(a.totalSpent);
        case "spent-low":
          return toNumber(a.totalSpent) - toNumber(b.totalSpent);
        default:
          return 0;
      }
    });

  const totalPages = Math.max(1, Math.ceil(filteredCustomers.length / itemsPerPage));
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const stats = {
    total: enrichedCustomers.length,
    active: enrichedCustomers.filter((c) => c.status === "active").length,
    totalSpent: enrichedCustomers.reduce((sum, c) => sum + toNumber(c.totalSpent), 0),
    avgSatisfaction:
      enrichedCustomers.length > 0
        ? Math.round(
            enrichedCustomers.reduce((sum, c) => sum + (c.satisfaction || 0), 0) /
              enrichedCustomers.length
          )
        : 0,
  };

  const customerSales = resolvedViewCustomer
    ? sales.filter((sale) => matchesCustomerSale(sale, resolvedViewCustomer))
    : [];

  const customerPurchasedProducts = customerSales.flatMap((sale) =>
    (Array.isArray(sale?.items) ? sale.items : []).map((item, index) => ({
      id: `${sale?._id || sale?.invoiceNo || "sale"}-${item?.productId || index}`,
      saleId: sale?._id || "",
      invoiceNo: sale?.invoiceNo || "-",
      date: formatDate(sale?.createdAt || sale?.timestamp) || "-",
      productName: item?.productName || "-",
      brand: item?.brand || "-",
      category: item?.category || "-",
      serialNumber: item?.serialNumber || "-",
      quantity: Number(item?.quantity) || 0,
      unitPrice: Number(item?.unitPrice) || 0,
      totalPrice: Number(item?.totalPrice) || 0,
      status: sale?.status || "Completed",
      storage:
        [item?.selectedStorageType, item?.selectedStorageCapacity].filter(Boolean).join(" ") || "-",
      ram: item?.selectedRamMemory || "-",
    }))
  );

  const customerBills = customerSales.map((sale, index) => {
    const totalAmount = Number(sale?.totalAmount ?? sale?.total) || 0;
    const paidAmount = Number(sale?.paidAmount ?? sale?.cashReceived) || 0;
    const remainingAmount = Math.max(totalAmount - paidAmount, 0);
    const saleItems = Array.isArray(sale?.items)
      ? sale.items
      : Array.isArray(sale?.products)
        ? sale.products
        : [];
    const description = saleItems
      .map((item) => item?.productName || item?.name)
      .filter(Boolean)
      .join(", ");

    return {
      id: sale?._id || `bill-${index}`,
      saleId: sale?._id || "",
      billId: sale?.invoiceNo || sale?._id || `BILL-${index + 1}`,
      date: formatDate(sale?.createdAt || sale?.timestamp) || "-",
      description: description || "N/A",
      amount: totalAmount,
      paidAmount: Math.max(0, paidAmount),
      remaining: remainingAmount,
      status: remainingAmount <= 0 ? "paid" : paidAmount > 0 ? "partial" : "pending",
      dueDate: "N/A",
    };
  });

  const totalOutstandingAmount = customerBills.reduce((sum, bill) => sum + Number(bill.remaining || 0), 0);

  const customerPaymentHistory = customerSales.flatMap((sale) => {
    const billId = sale?.invoiceNo || sale?._id || "-";
    const payments = Array.isArray(sale?.paymentHistory) ? sale.paymentHistory : [];

    if (payments.length > 0) {
      return payments.map((payment, index) => ({
        id:
          payment?.id ||
          `PURPAY-${String(sale?._id || sale?.invoiceNo || index).slice(-6)}`,
        date: payment?.date || sale?.timestamp || sale?.createdAt || "",
        billId,
        amount: Number(payment?.amount) || 0,
        method: payment?.method || "N/A",
        reference: payment?.reference || "",
      }));
    }

    const initialPaidAmount = Number(sale?.paidAmount ?? sale?.cashReceived) || 0;
    if (initialPaidAmount > 0) {
      return [
        {
          id: `PURPAY-${String(sale?._id || sale?.invoiceNo || "").slice(-6)}`,
          date: sale?.timestamp || sale?.createdAt || "",
          billId,
          amount: initialPaidAmount,
          method: sale?.paymentMethod || "N/A",
          reference: "",
        },
      ];
    }

    return [];
  });

  const handlePrintCustomerBills = () => {
    if (typeof window === "undefined" || customerBills.length === 0 || !resolvedViewCustomer) return;

    const rows = customerBills
      .map(
        (bill) => `
          <tr>
            <td>${bill.billId}</td>
            <td>${bill.date}</td>
            <td>${bill.description}</td>
            <td>Rs. ${Number(bill.amount).toLocaleString()}</td>
            <td>Rs. ${Number(bill.remaining).toLocaleString()}</td>
            <td>${bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}</td>
            <td>${bill.dueDate}</td>
          </tr>`
      )
      .join("");

    const printWindow = window.open("", "_blank", "width=1000,height=700");
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Bills from ${resolvedViewCustomer.name}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 24px; color: #111827; }
            h1 { margin: 0 0 8px; }
            p { margin: 0 0 20px; color: #4b5563; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #d1d5db; padding: 10px; text-align: left; font-size: 12px; }
            th { background: #f3f4f6; }
          </style>
        </head>
        <body>
          <h1>Bills from ${resolvedViewCustomer.name}</h1>
          <p>Total outstanding: Rs. ${totalOutstandingAmount.toLocaleString()}</p>
          <table>
            <thead>
              <tr>
                <th>Bill ID</th>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Remaining</th>
                <th>Status</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const handlePrintCustomerPaymentReport = (payment = null) => {
    if (typeof window === "undefined") return;
    const payments = payment ? [payment] : customerPaymentHistory;
    if (!payments.length || !resolvedViewCustomer) return;

    const rows = payments
      .map(
        (entry) => `
          <tr>
            <td>${entry.id}</td>
            <td>${formatDate(entry.date)}</td>
            <td>${entry.billId}</td>
            <td>Rs. ${Number(entry.amount || 0).toLocaleString()}</td>
            <td>${entry.method || "N/A"}</td>
            <td>${entry.reference || ""}</td>
          </tr>`
      )
      .join("");

    const printWindow = window.open("", "_blank", "width=1000,height=700");
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Payment History Report</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 24px; color: #111827; }
            h1 { margin: 0 0 8px; }
            p { margin: 0 0 20px; color: #4b5563; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #d1d5db; padding: 10px; text-align: left; font-size: 12px; }
            th { background: #f3f4f6; }
          </style>
        </head>
        <body>
          <h1>Payment History Report</h1>
          <p>${resolvedViewCustomer.name}</p>
          <table>
            <thead>
              <tr>
                <th>Payment ID</th>
                <th>Date</th>
                <th>Bill ID</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Reference</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const handleRecordBillPayment = async (e) => {
    e.preventDefault();
    if (!selectedBill || payingBillId) return;

    const paidAmount = Number(paymentForm.partialAmount || 0);
    if (!paidAmount || paidAmount <= 0 || paidAmount > Number(selectedBill.remaining || 0)) {
      alert("Partial amount must be greater than 0 and less than or equal to remaining amount.");
      return;
    }

    if (!paymentForm.method) {
      alert("Payment method is required.");
      return;
    }

    try {
      setPayingBillId(selectedBill.saleId || selectedBill.billId);

      if (selectedBill.source === "customer-total") {
        let remainingToApply = paidAmount;
        const unpaidBills = customerBills.filter((bill) => Number(bill.remaining || 0) > 0);
        const updatedSalesMap = new Map();

        for (const bill of unpaidBills) {
          if (remainingToApply <= 0) break;
          const amountForBill = Math.min(remainingToApply, Number(bill.remaining || 0));
          const response = await apiRequest(`/sales/${bill.saleId}/payment`, {
            method: "POST",
            data: {
              paidAmount: amountForBill,
              paymentMethod: paymentForm.method,
              paymentDate: paymentForm.date,
            },
          });

          if (!response?.success) {
            alert(response?.message || `Failed to record payment for bill ${bill.billId}.`);
            return;
          }

          if (response.sale?._id) {
            updatedSalesMap.set(String(response.sale._id), response.sale);
          }
          remainingToApply -= amountForBill;
        }

        if (updatedSalesMap.size > 0) {
          setSales((prev) =>
            prev.map((sale) => updatedSalesMap.get(String(sale?._id)) || sale)
          );
        }
      } else {
        const response = await apiRequest(`/sales/${selectedBill.saleId}/payment`, {
          method: "POST",
          data: {
            paidAmount,
            paymentMethod: paymentForm.method,
            paymentDate: paymentForm.date,
          },
        });

        if (!response?.success) {
          alert(response?.message || "Failed to record payment.");
          return;
        }

        const updatedSale = response.sale;
        if (updatedSale?._id) {
          setSales((prev) =>
            prev.map((sale) => (String(sale?._id) === String(updatedSale._id) ? updatedSale : sale))
          );
        }
      }

      setCustomers((prev) =>
        prev.map((customer) =>
          customer.id === viewCustomer?.id
            ? {
                ...customer,
                accountBalance: Math.max(
                  0,
                  Number(customer.accountBalance || 0) - paidAmount
                ),
              }
            : customer
        )
      );
      setViewCustomer((prev) =>
        prev
          ? {
              ...prev,
              accountBalance: Math.max(
                0,
                Number(prev.accountBalance || 0) - paidAmount
              ),
            }
          : prev
      );
      setShowPaymentModal(false);
      setSelectedBill(null);
    } catch (error) {
      console.error("Record Bill Payment Error:", error);
      alert("Failed to record payment.");
    } finally {
      setPayingBillId("");
    }
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
      "Satisfaction",
    ];

    const dateStamp = new Date().toISOString().slice(0, 10);
    downloadCSV(`customers-detail-${dateStamp}.csv`, [header, ...rows]);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0f2fe,transparent_35%),radial-gradient(circle_at_85%_20%,#ecfdf3,transparent_30%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] dark:bg-[radial-gradient(circle_at_top_left,#0f172a,transparent_35%),radial-gradient(circle_at_85%_20%,#0b1324,transparent_30%),linear-gradient(to_bottom,#0b1220,#0f172a)]">
      <div className="flex-1 flex flex-col min-h-screen transition-all duration-500">        

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-0 py-6">
            <CustomersHeaderSection
              stats={stats}
              canCreateCustomer={canCreateCustomer}
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

            {resolvedViewCustomer ? (
              <div className="space-y-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setViewCustomer(null)}
                      className="p-2.5 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-300 hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-600 dark:hover:to-gray-500 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                        Customer Details
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        View and manage customer information
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      href={canEditCustomer ? `/AdminDashboard/customers/Edit?id=${resolvedViewCustomer.id}` : "#"}
                      aria-disabled={!canEditCustomer}
                      onClick={(event) => {
                        if (!canEditCustomer) event.preventDefault();
                      }}
                    >
                      <button
                        className="p-2.5 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-600 dark:text-blue-400 hover:from-blue-200 hover:to-cyan-200 dark:hover:from-blue-800/30 dark:hover:to-cyan-800/30 rounded-xl transition-all"
                        title="Edit Customer"
                      >
                        <User className="w-5 h-5" />
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex items-start gap-5">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-lg">
                        {resolvedViewCustomer.name?.charAt(0)}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {resolvedViewCustomer.name}
                          </h3>
                          {getStatusBadge(resolvedViewCustomer.status)}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 flex-wrap">
                          <User className="w-4 h-4" />
                          <span>{resolvedViewCustomer.name || "-"}</span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full mx-2"></span>
                          <Tag className="w-4 h-4" />
                          <span className="capitalize">
                            {resolvedViewCustomer.customerType || "individual"}
                          </span>
                          <span className="w-1 h-1 bg-gray-300 rounded-full mx-2"></span>
                          <MapPin className="w-4 h-4" />
                          <span>{resolvedViewCustomer.address || "-"}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Registered: {formatDate(resolvedViewCustomer.customerSince) || "-"}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                            Rating: {Math.max(1, Math.min(5, Math.round((resolvedViewCustomer.satisfaction || 0) / 20) || 0))}/5
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-xl">
                        <p className="text-xs text-gray-600 dark:text-gray-400">Total Purchases</p>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">
                          {resolvedViewCustomer.purchaseCount || 0}
                        </p>
                      </div>
                      <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
                        <p className="text-xs text-gray-600 dark:text-gray-400">Total Amount</p>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">
                          PKR {(Number(resolvedViewCustomer.totalSpent) || 0).toLocaleString()}
                        </p>
                      </div>
                      <div className="px-4 py-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                        <p className="text-xs text-gray-600 dark:text-gray-400">Credit Limit</p>
                        <p className="text-xl font-bold text-gray-900 dark:text-white">
                          {Number(resolvedViewCustomer.creditLimit || 0).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Total Bills</p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                          {resolvedViewCustomer.purchaseCount || 0}
                        </p>
                      </div>
                      <div className="p-3 bg-gradient-to-r from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 rounded-xl">
                        <Receipt className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Paid Amount</p>
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                          PKR {(Number(resolvedViewCustomer.totalSpent) || 0).toLocaleString()}
                        </p>
                      </div>
                      <div className="p-3 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl">
                        <Wallet className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Pending Amount</p>
                        <p className="text-lg font-bold text-amber-600 dark:text-amber-400">
                          PKR {(Number(resolvedViewCustomer.accountBalance) || 0).toLocaleString()}
                        </p>
                      </div>
                      <div className="p-3 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 rounded-xl">
                        <Wallet className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Overdue Amount</p>
                        <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                          PKR 0
                        </p>
                      </div>
                      <div className="p-3 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/30 dark:to-pink-900/30 rounded-xl">
                        <Clock className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 dark:border-gray-700">
                  <nav className="flex gap-6 overflow-x-auto">
                    {[
                      { id: "overview", label: "Overview", icon: Info },
                      { id: "products", label: "Products", icon: Tag },
                      { id: "bills", label: "Bills", icon: Receipt },
                      { id: "payments", label: "Payments", icon: Wallet },
                    ].map((tab) => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveCustomerTab(tab.id)}
                          className={`py-3 px-1 border-b-2 font-medium text-sm flex items-center gap-2 transition-colors ${
                            activeCustomerTab === tab.id
                              ? "border-blue-600 text-blue-600 dark:text-blue-400"
                              : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          {tab.label}
                        </button>
                      );
                    })}
                  </nav>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
                  {activeCustomerTab === "overview" && (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <User className="w-5 h-5 text-blue-600" />
                            Company Information
                          </h3>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <User className="w-5 h-5 text-gray-400 mt-0.5" />
                              <div>
                                <p className="text-sm text-gray-500">Company Name</p>
                                <p className="font-medium text-gray-900 dark:text-white">
                                  {resolvedViewCustomer.name || "-"}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <User className="w-5 h-5 text-gray-400 mt-0.5" />
                              <div>
                                <p className="text-sm text-gray-500">Contact Person</p>
                                <p className="font-medium text-gray-900 dark:text-white">
                                  {resolvedViewCustomer.fatherName || resolvedViewCustomer.name || "-"}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                              <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium text-gray-900 dark:text-white">
                                  {resolvedViewCustomer.email || "-"}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                              <div>
                                <p className="text-sm text-gray-500">Phone</p>
                                <p className="font-medium text-gray-900 dark:text-white">
                                  {resolvedViewCustomer.phone || "-"}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Smartphone className="w-4 h-4 mt-0.5 text-blue-600 dark:text-blue-400" />
                              <div>
                                <p className="text-sm text-gray-500">Mobile</p>
                                <p className="font-medium text-gray-900 dark:text-white">
                                  {resolvedViewCustomer.mobile || "-"}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Globe className="w-5 h-5 text-gray-400 mt-0.5" />
                              <div>
                                <p className="text-sm text-gray-500">Website</p>
                                <p className="font-medium text-gray-900 dark:text-white">-</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                              <div>
                                <p className="text-sm text-gray-500">Address</p>
                                <p className="font-medium text-gray-900 dark:text-white">
                                  {resolvedViewCustomer.address || "-"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Info className="w-5 h-5 text-blue-600" />
                            Business Details
                          </h3>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <Barcode className="w-5 h-5 text-gray-400 mt-0.5" />
                              <div>
                                <p className="text-sm text-gray-500">Tax ID</p>
                                <p className="font-medium text-gray-900 dark:text-white">
                                  {resolvedViewCustomer.cnic || "-"}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                              <div>
                                <p className="text-sm text-gray-500">Registered Date</p>
                                <p className="font-medium text-gray-900 dark:text-white">
                                  {formatDate(resolvedViewCustomer.customerSince) || "-"}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <DollarSign className="w-5 h-5 text-gray-400 mt-0.5" />
                              <div>
                                <p className="text-sm text-gray-500">Credit Limit</p>
                                <p className="font-medium text-gray-900 dark:text-white">
                                  {Number(resolvedViewCustomer.creditLimit || 0).toLocaleString()}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <TrendingUp className="w-5 h-5 text-gray-400 mt-0.5" />
                              <div>
                                <p className="text-sm text-gray-500">Average Payment Days</p>
                                <p className="font-medium text-gray-900 dark:text-white">
                                  0 days
                                </p>
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
                              <p className="font-medium text-gray-900 dark:text-white">-</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Account Title</p>
                              <p className="font-medium text-gray-900 dark:text-white">-</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Account Number</p>
                              <p className="font-medium text-gray-900 dark:text-white">-</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">IBAN</p>
                              <p className="font-medium text-gray-900 dark:text-white">-</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeCustomerTab === "products" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                            <Package className="w-5 h-5 text-blue-600" />
                            Laptop Details
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Total purchased items: {customerPurchasedProducts.length}
                          </p>
                        </div>
                      </div>

                      {customerPurchasedProducts.length > 0 ? (
                        <div className="overflow-x-auto max-h-[420px] overflow-y-scroll pr-1">
                          <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-gray-700/50">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Laptop Details</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Invoice No.</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Qty</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total Value</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                              {customerPurchasedProducts.map((product) => (
                                <tr
                                  key={product.id}
                                  className="hover:bg-gray-50 dark:hover:bg-gray-700/50"
                                >
                                  <td className="px-4 py-3">
                                    <div className="font-medium text-gray-900 dark:text-white">
                                      {product.productName}
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 space-y-1">
                                      <div>{product.brand || product.category}</div>
                                      {(product.storage !== "-" || product.ram !== "-") && (
                                        <div>
                                          {[product.storage !== "-" ? product.storage : "", product.ram !== "-" ? product.ram : ""]
                                            .filter(Boolean)
                                            .join(" | ")}
                                        </div>
                                      )}
                                    </div>
                                  </td>
                                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                                    {product.invoiceNo}
                                  </td>
                                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                                    {product.quantity}
                                  </td>
                                  <td className="px-4 py-3 text-sm font-semibold text-gray-900 dark:text-white">
                                    Rs. {product.totalPrice.toLocaleString()}
                                  </td>
                                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                                    {product.date}
                                  </td>
                                  <td className="px-4 py-3">
                                    {getStatusBadge(String(product.status || "completed").toLowerCase())}
                                  </td>
                                  <td className="px-4 py-3">
                                    <div className="flex items-center gap-2">
                                      <button
                                        type="button"
                                        className="p-1 text-blue-600 hover:text-blue-800"
                                        onClick={() => setActiveCustomerTab("bills")}
                                        title="View Bill"
                                      >
                                        <Eye className="w-4 h-4" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="rounded-xl border border-dashed border-gray-200 dark:border-gray-700 p-8 text-center">
                          <Tag className="w-10 h-10 mx-auto text-gray-300 dark:text-gray-600 mb-3" />
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Products
                          </h3>
                          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            No purchase record found for this customer.
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Total purchases: {resolvedViewCustomer.purchaseCount || 0}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {activeCustomerTab === "bills" && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                          <FileText className="w-5 h-5 text-blue-600" />
                          Bills from {resolvedViewCustomer.name}
                        </h3>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedBill({
                                id: `total-${resolvedViewCustomer.id || resolvedViewCustomer.name}`,
                                billId: `TOTAL-${resolvedViewCustomer.name}`,
                                amount: totalOutstandingAmount,
                                remaining: totalOutstandingAmount,
                                status: totalOutstandingAmount > 0 ? "pending" : "paid",
                                dueDate: "N/A",
                                source: "customer-total",
                              });
                              setShowPaymentModal(true);
                            }}
                            disabled={totalOutstandingAmount <= 0}
                            className="rounded-lg bg-gradient-to-r from-emerald-600 to-green-500 px-4 py-2 text-sm font-medium text-white hover:from-emerald-700 hover:to-green-600 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            Total Mark to Paid
                          </button>
                          <button
                            type="button"
                            onClick={handlePrintCustomerBills}
                            disabled={customerBills.length === 0}
                            className="rounded-lg bg-gradient-to-r from-slate-700 to-slate-600 px-4 py-2 text-sm font-medium text-white hover:from-slate-800 hover:to-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            Print Total Bills
                          </button>
                        </div>
                      </div>

                      <div className="overflow-x-auto max-h-[420px] overflow-y-auto">
                        <table className="w-full">
                          <thead className="bg-gray-50 dark:bg-gray-700/50">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bill ID</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Remaining</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {customerBills.length === 0 ? (
                              <tr>
                                <td colSpan={8} className="px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
                                  No bills found for this customer.
                                </td>
                              </tr>
                            ) : (
                              customerBills.map((bill) => (
                                <tr key={bill.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                  <td className="px-4 py-3">
                                    <div className="font-medium text-gray-900 dark:text-white">{bill.billId}</div>
                                  </td>
                                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{bill.date}</td>
                                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400 max-w-xs truncate">{bill.description}</td>
                                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                                    Rs. {bill.amount.toLocaleString()}
                                  </td>
                                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                                    Rs. {bill.remaining.toLocaleString()}
                                  </td>
                                  <td className="px-4 py-3">
                                    <span
                                      className={`px-2 py-1 rounded-full text-xs ${
                                        bill.status === "paid"
                                          ? "bg-green-100 text-green-800"
                                          : "bg-yellow-100 text-yellow-800"
                                      }`}
                                    >
                                      {bill.status.charAt(0).toUpperCase() + bill.status.slice(1)}
                                    </span>
                                  </td>
                                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">{bill.dueDate}</td>
                                  <td className="px-4 py-3">
                                    <div className="flex items-center gap-2">
                                      {bill.status !== "paid" && (
                                        <button
                                          type="button"
                                          onClick={() => {
                                            setSelectedBill(bill);
                                            setShowPaymentModal(true);
                                          }}
                                          className="rounded-md border border-green-200 px-2 py-1 text-xs font-medium text-green-700 disabled:cursor-not-allowed disabled:opacity-60"
                                        >
                                          Mark to Paid
                                        </button>
                                      )}
                                      <button
                                        type="button"
                                        onClick={handlePrintCustomerBills}
                                        className="p-1 text-purple-600 hover:text-purple-800"
                                        title="Print"
                                      >
                                        <Printer className="w-4 h-4" />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {activeCustomerTab === "payments" && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                          <Wallet className="w-5 h-5 text-blue-600" />
                          Payment History
                        </h3>
                        <button
                          type="button"
                          onClick={() => handlePrintCustomerPaymentReport()}
                          disabled={customerPaymentHistory.length === 0}
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
                            {customerPaymentHistory.map((payment) => (
                              <tr key={payment.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <td className="px-4 py-3">
                                  <div className="font-medium text-gray-900 dark:text-white">{payment.id}</div>
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                                  {formatDate(payment.date)}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                                  {payment.billId}
                                </td>
                                <td className="px-4 py-3 text-sm font-medium text-green-600">
                                  Rs. {Number(payment.amount || 0).toLocaleString()}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                                  {payment.method}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                                  {payment.reference}
                                </td>
                                <td className="px-4 py-3">
                                  <div className="flex items-center gap-2">
                                    <button
                                      type="button"
                                      onClick={() => handlePrintCustomerPaymentReport(payment)}
                                      className="p-1 text-purple-600 hover:text-purple-800"
                                      title="Print Receipt"
                                    >
                                      <Printer className="w-4 h-4" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                            {customerPaymentHistory.length === 0 && (
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
              <div className="mt-8 flex items-center justify-between">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Page {currentPage} of {totalPages}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:border-blue-500 transition"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:border-blue-500 transition"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

            <CustomersTips />
          </div>
        </div>
      </div>

      <DeleteCustomerModal
        deleteModalOpen={deleteModalOpen}
        setDeleteModalOpen={setDeleteModalOpen}
        customerToDelete={customerToDelete}
        confirmDelete={confirmDeleteCustomer}
      />

      {showPaymentModal && selectedBill && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Record Payment
              </h3>
              <form onSubmit={handleRecordBillPayment}>
                <div className="space-y-0">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Bill ID
                    </label>
                    <input
                      type="text"
                      value={selectedBill.billId || ""}
                      readOnly
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Amount
                    </label>
                    <input
                      type="text"
                      value={`Rs. ${Number(selectedBill.amount || 0).toLocaleString()}`}
                      readOnly
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Partial Amount
                    </label>
                    <input
                      type="number"
                      min="0"
                      max={Number(selectedBill.remaining || 0)}
                      value={paymentForm.partialAmount}
                      placeholder="0"
                      onChange={(e) => {
                        const raw = e.target.value;
                        setPaymentForm((prev) => ({
                          ...prev,
                          partialAmount: raw === "" ? "" : Number(raw),
                        }));
                      }}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Remaining Amount
                    </label>
                    <input
                      type="text"
                      value={`Rs. ${Math.max(
                        Number(selectedBill.remaining || 0) -
                          (paymentForm.partialAmount === "" ? 0 : Number(paymentForm.partialAmount || 0)),
                        0
                      ).toLocaleString()}`}
                      readOnly
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white cursor-not-allowed"
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
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select method</option>
                      <option value="Cash">Cash</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                      <option value="Check">Check</option>
                      <option value="Credit Card">Credit Card</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Payment Date
                    </label>
                    <input
                      type="date"
                      value={paymentForm.date}
                      onChange={(e) => setPaymentForm((prev) => ({ ...prev, date: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-3 mt-6 pt-4 border-t dark:border-gray-700">
                  <button
                    type="button"
                    onClick={() => {
                      setShowPaymentModal(false);
                      setSelectedBill(null);
                    }}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={payingBillId === (selectedBill.saleId || selectedBill.billId)}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-green-600 transition disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {payingBillId === (selectedBill.saleId || selectedBill.billId) ? "Recording..." : "Record Payment"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
