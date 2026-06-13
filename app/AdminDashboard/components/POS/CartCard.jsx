"use client";

import { Noto_Nastaliq_Urdu } from "next/font/google";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  CheckCircle,
  ChevronLeft,
  Footprints,
  Minus,
  Phone,
  Plus,
  Search,
  ShoppingCart,
  Star,
  Trash2,
  User,
  UserCheck,
  X,
} from "lucide-react";

import { apiRequest } from "../../authservice/api";
import { getActualStockValue } from "../../utils/uomConverter";

const urduFormFont = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const getCustomerType = (customer) => {
  const type = String(customer?.type || customer?.customerType || "").trim().toLowerCase();
  if (type) return type === "walk-in" ? "walk-in" : type === "vip" ? "VIP" : "registered";
  return Array.isArray(customer?.tags) &&
    customer.tags.some((tag) => String(tag || "").trim().toLowerCase() === "vip")
    ? "VIP"
    : "registered";
};

const normalizeName = (value = "") =>
  String(value)
    .toLowerCase()
    .normalize("NFKC")
    .replace(/\s+/g, "")
    .replace(/[^\p{L}\p{N}]/gu, "");

const getActualStock = (product) => getActualStockValue(product);

const getPackSize = (item) => {
  const packSize = Number(item?.packSize);
  return Number.isFinite(packSize) && packSize > 0 ? packSize : 1;
};

const getUnitSalePrice = (item) => {
  const customUnitSalePrice = Number(item?.customUnitSalePrice);
  if (Number.isFinite(customUnitSalePrice) && customUnitSalePrice >= 0) {
    return Number(customUnitSalePrice.toFixed(2));
  }

  const baseSalePrice = Number(item?.salePrice || item?.price || item?.purchasePrice || item?.cost) || 0;
  const maxAllowedDiscount = Number(item?.maxAllowedDiscount ?? 0) || 0;
  const discountedSalePrice = Number(
    (baseSalePrice - (baseSalePrice * maxAllowedDiscount) / 100).toFixed(2)
  );
  return Number((discountedSalePrice / getPackSize(item)).toFixed(2));
};

const getSelectedSalePrice = (item) => {
  const quantityMode = item?.quantityMode === "pack" ? "pack" : "unit";
  const customUnitSalePrice = Number(item?.customUnitSalePrice);
  const packSize = getPackSize(item);

  if (Number.isFinite(customUnitSalePrice) && customUnitSalePrice >= 0) {
    return quantityMode === "pack"
      ? Number((customUnitSalePrice * packSize).toFixed(2))
      : Number(customUnitSalePrice.toFixed(2));
  }

  const wholeSalePrice = Number(item?.wholeSalePrice ?? item?.wholesalePrice ?? 0) || 0;
  const retailSalePrice = Number(item?.retailSalePrice ?? item?.salePrice ?? item?.price ?? item?.purchasePrice ?? item?.cost ?? 0) || 0;
  const maxAllowedDiscount = Number(item?.maxAllowedDiscount ?? 0) || 0;
  const discountedRetailSalePrice = Number(
    (retailSalePrice - (retailSalePrice * maxAllowedDiscount) / 100).toFixed(2)
  );

  if (quantityMode === "pack") {
    return wholeSalePrice || discountedRetailSalePrice;
  }

  return Number((discountedRetailSalePrice / packSize).toFixed(2));
};

const sanitizeNumericInput = (value) => String(value || "").replace(/[^\d.]/g, "");

const getDisplayUnitPurchasePrice = (item) => {
  return (Number(item?.purchasePrice || item?.cost || 0) || 0) / getPackSize(item);
};

const getLineTotal = (item) => {
  const quantity = Number(item?.displayQty ?? item?.qty ?? 0);
  return Number((getSelectedSalePrice(item) * quantity).toFixed(2));
};

const getLinePurchaseTotal = (item) => {
  const quantity = Number(item?.displayQty ?? 0);
  const quantityMode = item?.quantityMode === "pack" ? "pack" : "unit";
  const units = quantityMode === "pack" ? quantity * getPackSize(item) : quantity;
  return Number((getDisplayUnitPurchasePrice(item) * units).toFixed(2));
};

const getFreeUnits = (item) => {
  const freeQty = Math.max(Math.floor(Number(item?.freeQty) || 0), 0);
  const quantityMode = item?.quantityMode === "pack" ? "pack" : "unit";
  return quantityMode === "pack" ? freeQty * getPackSize(item) : freeQty;
};

const getChargedUnits = (item) => Number(item?.qty) || 0;

const toSaleLine = (item) => {
  const unitSalePrice = getUnitSalePrice(item);
  const unitPurchasePrice = getDisplayUnitPurchasePrice(item);
  const chargedUnits = getChargedUnits(item);
  const freeUnits = getFreeUnits(item);

  return {
    productId: item?._id || item?.id,
    name: typeof item?.name === "string" ? item.name : "",
    quantity: chargedUnits + freeUnits,
    chargedQuantity: chargedUnits,
    chargedDisplayQty: Number(item?.displayQty ?? item?.qty ?? 0) || 0,
    freeQty: Math.max(Math.floor(Number(item?.freeQty) || 0), 0),
    freeQuantity: freeUnits,
    quantityMode: item?.quantityMode === "pack" ? "pack" : "unit",
    purchasePrice: unitPurchasePrice,
    salePrice: unitSalePrice,
    packSize: getPackSize(item),
  };
};

const formatReceipt = (value, digits = 2) =>
  Number(value || 0).toLocaleString(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: 3,
  });

const roundReceiptToWhole = (value) => {
  const amount = Number(value || 0);
  if (!Number.isFinite(amount)) return 0;

  const sign = amount < 0 ? -1 : 1;
  const [wholePartRaw, decimalPartRaw = ""] = Math.abs(amount).toString().split(".");
  if (!decimalPartRaw) return sign * Number(wholePartRaw || 0);

  const digits = decimalPartRaw.split("").map((digit) => Number(digit));
  let carry = 0;

  for (let index = digits.length - 1; index >= 0; index -= 1) {
    let current = digits[index] + carry;
    carry = 0;

    if (current > 5) {
      carry = 1;
      current = 0;
    }
  }

  return sign * (Number(wholePartRaw || 0) + carry);
};

const formatRoundedReceiptAmount = (value) => roundReceiptToWhole(value).toLocaleString();

const DEFAULT_WALK_IN_CUSTOMER = {
  id: "walkin-default",
  name: "Walk-in",
  phone: "",
  cnic: "Not Provided",
  address: "Not Provided",
  type: "walk-in",
  totalPurchases: 0,
  totalSpent: 0,
};

const URDU_RECEIPT_FONT_STACK =
  `"Urdu Noori Nastaliq", "Noori Nastaliq", "Jameel Noori Nastaleeq", ${urduFormFont.style.fontFamily}, serif`;

const formatReceiptSequence = (value) => String(Math.max(Number(value) || 1, 1)).padStart(2, "0");

const formatReceiptDate = (value = new Date()) => {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours24 = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const suffix = hours24 >= 12 ? "PM" : "AM";
  const hours12 = String(hours24 % 12 || 12).padStart(2, "0");
  return `${day}/${month}/${year}   ${hours12}:${minutes} ${suffix}`;
};

const buildReceiptHtml = ({
  items,
  subtotal,
  discount,
  total,
  paidAmount,
  returnAmount,
  selectedCustomer,
  invoiceNo,
  invoiceDisplayNo,
}) => `
  <html>
    <head>
      <title>Invoice - Huzaifa Autos Feroza</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap');
        :root {
          --paper-width: 90mm;
          --receipt-padding-x: 2.5mm;
          --receipt-padding-top: 6mm;
          --receipt-padding-bottom: 4mm;
        }
        @page {
          size: 90mm auto;
          margin: 0;
        }
        * {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          box-sizing: border-box;
        }
        html {
          width: 90mm;
          min-width: 90mm;
          max-width: 90mm;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        body {
          font-family: Arial, sans-serif;
          font-size: 12px;
          line-height: 1.25;
          padding: 0;
          margin: 0;
          width: 90mm;
          min-width: 90mm;
          max-width: 90mm;
          background: #fff;
          overflow-x: hidden;
        }
        .invoice-container {
          width: 100%;
          max-width: 90mm;
          margin: 0;
          padding: var(--receipt-padding-top) var(--receipt-padding-x) var(--receipt-padding-bottom);
          overflow-wrap: anywhere;
          color: #000;
        }
        .bill-header {
          text-align: center;
          margin-bottom: 6px;
          border-bottom: 1px solid #000;
          padding-bottom: 4px;
        }
        .shop-name {
          font-size: 35px;
          font-weight: 700;
          font-style: italic;
          font-family: "Times New Roman", Times, serif;
          color: #000;
          line-height: 1.05;
          direction: rtl;
          margin-bottom: 6px;
        }
        .counter-sale {
          font-size: 14px;
          font-weight: 700;
          margin-top: 2px;
        }
        .bill-meta {
          margin-bottom: 2px;
          font-size: 13px;
        }
        .stars {
          text-align: center;
          font-size: 11px;
          line-height: 1.1;
        }
        .section-copy {
          margin-top: 6px;
          font-size: 13px;
        }
        .section-title {
          font-size: 13px;
          font-weight: 700;
        }
        .divider {
          border-top: 1px dashed #000;
          margin: 6px 0;
        }
        .items-table {
          width: 100%;
          margin-top: 4px;
          border-collapse: collapse;
          table-layout: fixed;
          font-size: 14px;
        }
        .items-table th,
        .items-table td {
          border-top: 1px solid #000;
          border-bottom: 1px solid #000;
          border-left: 0;
          border-right: 0;
          padding: 4px;
          vertical-align: top;
        }
        .items-table tr.product-row td:not(.item-name) {
          vertical-align: middle;
        }
        .items-table th {
          font-weight: 700;
          text-align: center;
        }
        .items-table tr.product-row td {
          border-top: 1px dotted #000;
          border-bottom: 1px dotted #000;
        }
        .items-table th:first-child,
        .items-table td:first-child {
          width: 46%;
          text-align: left;
          word-break: break-word;
        }
        .items-table td.item-name {
          font-family: ${URDU_RECEIPT_FONT_STACK};
        }
        .items-table th:nth-child(2),
        .items-table td:nth-child(2) {
          width: 12%;
          text-align: center;
        }
        .items-table th:nth-child(3),
        .items-table td:nth-child(3),
        .items-table th:nth-child(4),
        .items-table td:nth-child(4) {
          width: 21%;
          text-align: center;
        }
        .items-table .summary-label {
          font-weight: 700;
          text-align: right;
        }
        .items-table .summary-value {
          font-weight: 700;
          text-align: center;
        }
        .item-details {
          display: flex;
          justify-content: space-between;
          gap: 8px;
          font-size: 13px;
          margin: 2px 0;
        }
        .customer-line {
          font-size: 13px;
          font-weight: 700;
        }
        .customer-name {
          margin-top: 2px;
          font-size: 13px;
        }
        .total-row {
          font-weight: 700;
          font-size: 16px;
        }
        .footer {
          margin-top: 8px;
          text-align: center;
          padding-top: 4px;
        }
        .thanks {
          display: inline-block;
          background: #000;
          color: #fff;
          padding: 4px 12px;
          margin-bottom: 4px;
          font-weight: 700;
          font-size: 16px;
        }
        .footer-contact {
          margin-top: 8px;
          font-size: 12px;
          white-space: nowrap;
        }
        @media print {
          html,
          body {
            width: 90mm !important;
            min-width: 90mm !important;
            max-width: 90mm !important;
            overflow-x: hidden !important;
          }
          body * {
            visibility: hidden;
          }
          .invoice-container,
          .invoice-container * {
            visibility: visible;
          }
          .invoice-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 90mm;
            margin: 0;
          }
        }
      </style>
    </head>
    <body>
      ${(() => {
        const visibleInvoiceNo = invoiceDisplayNo || invoiceNo;
        const starCount = Math.max(30, String(visibleInvoiceNo || "").length + 39);
        const stars = "*".repeat(starCount);

        return `
          <div class="invoice-container bg-white shadow p-4 mx-auto">
            <div class="bill-header">
              <div class="shop-name">Huzaifa Autos Feroza</div>
              <br>
              <div class="counter-sale">(Counter Sale)</div>
               <div class="counter-sale">Mobile #: 0346-3696038</div>
            </div>

            <div class="bill-meta">Invoice #: ${visibleInvoiceNo}</div>
            <div class="bill-meta">Date: ${formatReceiptDate()}</div>
            

            <div class="section-copy">
              <div class="customer-line">CUSTOMER: ${selectedCustomer?.name || "Walk-in"}</div>
             
            </div>

            <div class="section-copy">
             
              <table class="items-table">
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>QTY</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${items
                    .map((item, idx) => {
                      const qty = Number(item.displayQty ?? item.qty ?? 0);
                      const freeQty = Math.max(Math.floor(Number(item.freeQty) || 0), 0);
                      const salePrice = getSelectedSalePrice(item);
                      const lineTotal = getLineTotal(item);
                      const itemLabel = `${item.name || "-"}${freeQty > 0 ? `<div class="item-subtext">Free: ${freeQty}</div>` : ""}`;
                      return `
                        <tr class="product-row" key="${item._id || item.id || idx}">
                          <td class="item-name">${itemLabel}</td>
                          <td>${qty}</td>
                          <td> ${salePrice.toLocaleString()}</td>
                          <td> ${lineTotal.toLocaleString()}</td>
                        </tr>
                      `;
                    })
                    .join("")}
                  <tr>
                    <td colspan="3" class="summary-label">Subtotal:</td>
                    <td class="summary-value"> ${formatRoundedReceiptAmount(subtotal)}</td>
                  </tr>
                  ${discount > 0
                    ? `
                      <tr>
                        <td colspan="3" class="summary-label">Discount:</td>
                        <td class="summary-value">- ${Number(discount || 0).toLocaleString()}</td>
                      </tr>
                    `
                    : ""}
                </tbody>
              </table>
            </div>

            <div class="item-details total-row">
              <span>TOTAL:</span>
              <span> ${formatRoundedReceiptAmount(total)}</span>
            </div>

            <div class="item-details">
              <span>Change Pakistani Rupees:</span>
              <span> ${Number(paidAmount || 0).toLocaleString()}</span>
            </div>

            ${returnAmount > 0 ? `
              <div class="item-details">
                <span>Return Pakistani Rupees:</span>
                <span> ${Number(returnAmount || 0).toLocaleString()}</span>
              </div>
            ` : ""}

            <div class="footer">
              <div class="thanks">آپکی تشریف آوری کاشکریہ</div>
              <div class="divider"></div>
              <div class="footer-contact">
                Rehan Software Solution, Mob#: 0345-8019548
              </div>
            </div>
          </div>
          <script>
            window.print();
            window.onafterprint = () => window.close();
          </script>
        `;
      })()}
    </body>
  </html>
`;

export default function CartCard({ cart, removeItem, increaseQty, decreaseQty }) {
  const [amount, setAmount] = useState("");
  const [paidAmount, setPaidAmount] = useState("");
  const [qtyDrafts, setQtyDrafts] = useState({});
  const editingKeyRef = useRef(null);
  const [selectedCustomer, setSelectedCustomer] = useState(DEFAULT_WALK_IN_CUSTOMER);
  const [showCustomerPopup, setShowCustomerPopup] = useState(false);
  const [customerType, setCustomerType] = useState(null);
  const [registeredCustomers, setRegisteredCustomers] = useState([]);
  const [searchRegisteredCustomers, setSearchRegisteredCustomers] = useState("");
  const [selectedRegisteredCustomer, setSelectedRegisteredCustomer] = useState(null);
  const [walkInCustomer, setWalkInCustomer] = useState({ name: "", phone: "", address: "" });
  const [formErrors, setFormErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  const items = useMemo(
    () => (cart || []).map((item) => ({ ...item, qty: item.qty || 1, stock: Number(item.stock ?? Infinity) })),
    [cart]
  );

  useEffect(() => {
    setQtyDrafts((prev) => {
      const next = { ...prev };
      items.forEach((item) => {
        if (editingKeyRef.current !== item.key) next[item.key] = String(item.qty);
      });
      Object.keys(next).forEach((key) => {
        if (!items.some((item) => item.key === key)) delete next[key];
      });
      return next;
    });
  }, [items]);

  useEffect(() => {
    (async () => {
      try {
        const response = await apiRequest("/customers", { method: "GET" });
        const customers = Array.isArray(response?.customers) ? response.customers : [];
        setRegisteredCustomers(
          customers.map((customer, index) => ({
            id: customer?._id || customer?.id || `cust-${index}`,
            name: customer?.name || "Customer",
            phone: customer?.mobile || customer?.phone || "",
            cnic: customer?.cnic || "",
            email: customer?.email || "",
            type: getCustomerType(customer),
            totalPurchases: Number(customer?.totalPurchases ?? customer?.orders ?? 0) || 0,
            totalSpent: Number(String(customer?.totalSpent ?? 0).replace(/[^\d.]/g, "")) || 0,
          }))
        );
      } catch {
        setRegisteredCustomers([]);
      }
    })();
  }, []);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("posCartDraft");
      if (!stored) return;
      const parsed = JSON.parse(stored);
      if (parsed?.selectedCustomer) {
        setSelectedCustomer(parsed.selectedCustomer);
      } else {
        setSelectedCustomer(DEFAULT_WALK_IN_CUSTOMER);
      }
      if (parsed?.amount !== undefined) setAmount(String(parsed.amount || ""));
      if (parsed?.paidAmount !== undefined) setPaidAmount(String(parsed.paidAmount || ""));
    } catch {}
  }, []);

  const subtotal = useMemo(
    () => Number(items.reduce((sum, item) => sum + getLineTotal(item), 0).toFixed(2)),
    [items]
  );
  const subtotalPurchasePrice = useMemo(
    () => Number(items.reduce((sum, item) => sum + getLinePurchaseTotal(item), 0).toFixed(2)),
    [items]
  );
  const enteredDiscountAmount = amount === "" ? 0 : Number(amount || 0);
  const discount = Math.min(
    Math.max(Number.isFinite(enteredDiscountAmount) ? enteredDiscountAmount : 0, 0),
    subtotal
  );
  const totalAmount = Math.max(Number((subtotal - discount).toFixed(2)), 0);
  const paid = Number(paidAmount || 0);
  const isWalkInCustomer = selectedCustomer?.type === "walk-in";
  const isCreditCustomer = Boolean(selectedCustomer) && !isWalkInCustomer;
  const effectivePaidAmount = isCreditCustomer ? 0 : paid;

  const syncCustomerCreditBill = async ({ customerId, invoiceNo, totalAmount, soldItems }) => {
    const response = await apiRequest(`/customers/${customerId}`, { method: "GET" });
    if (!response?.success || !response?.customer) {
      throw new Error(response?.message || "Failed to load customer for bill update");
    }

    const customer = response.customer;
    const existingBills = Array.isArray(customer.bills) ? customer.bills : [];
    const existingTotalPurchases = Number(customer.totalPurchases || 0) || 0;
    const existingTotalSpent = Number(customer.totalSpent || 0) || 0;
    const existingTotalDue = Number(customer.totalDue || 0) || 0;
    const description =
      soldItems.length === 1
        ? `POS Sale - ${soldItems[0]?.name || "Item"}`
        : `POS Sale - ${soldItems.length} items`;

    const updatedPayload = {
      ...customer,
      totalPurchases: existingTotalPurchases + 1,
      totalSpent: existingTotalSpent + Number(totalAmount || 0),
      totalDue: existingTotalDue + Number(totalAmount || 0),
      lastPurchase: new Date().toISOString(),
      bills: [
        ...existingBills,
        {
          id: `BILL-${invoiceNo}`,
          description,
          amount: ` ${Number(totalAmount || 0).toLocaleString()}`,
          date: new Date().toISOString().split("T")[0],
          dueDate: "",
          notes: `Auto-generated from POS sale ${invoiceNo}`,
          status: "pending",
          paidAmount: 0,
        },
      ],
    };

    const updateResponse = await apiRequest(`/customers/${customerId}`, {
      method: "PUT",
      data: updatedPayload,
    });

    if (!updateResponse?.success) {
      throw new Error(updateResponse?.message || "Failed to update customer bill");
    }
  };

  const applyQuantity = (item) => {
    let qty = Number(qtyDrafts[item.key]);
    if (!Number.isFinite(qty) || qty < 1) qty = 1;
    qty = Math.min(Math.floor(qty), item.stock);
    const delta = qty - item.qty;
    if (delta > 0) increaseQty(item.key, delta);
    if (delta < 0) decreaseQty(item.key, Math.abs(delta));
    setQtyDrafts((prev) => ({ ...prev, [item.key]: String(qty) }));
  };

  const filteredCustomers = registeredCustomers.filter((customer) => {
    const query = searchRegisteredCustomers.trim().toLowerCase();
    return (
      !query ||
      String(customer.name || "").toLowerCase().includes(query) ||
      String(customer.phone || "").includes(searchRegisteredCustomers) ||
      String(customer.cnic || "").includes(searchRegisteredCustomers) ||
      String(customer.email || "").toLowerCase().includes(query)
    );
  });

  const resetPopup = () => {
    setShowCustomerPopup(false);
    setCustomerType(null);
    setSearchRegisteredCustomers("");
    setSelectedRegisteredCustomer(null);
    setWalkInCustomer({ name: "", phone: "", address: "" });
    setFormErrors({});
  };

  const submitWalkIn = () => {
    const errors = {};
    if (!walkInCustomer.name.trim()) errors.name = "Name is required";
    if (!walkInCustomer.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^03\d{2}-\d{7}$/.test(walkInCustomer.phone.trim())) {
      errors.phone = "Phone must be in format 0300-1234567";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length) return;

    setSelectedCustomer({
      ...DEFAULT_WALK_IN_CUSTOMER,
      id: `walkin-${Date.now()}`,
      name: walkInCustomer.name.trim(),
      phone: walkInCustomer.phone.trim(),
      address: walkInCustomer.address.trim() || "Not Provided",
    });
    setPaidAmount("");
    resetPopup();
  };

  const createSaleAndPrintBill = async () => {
    if (!items.length) return;
    if (isWalkInCustomer && paid < totalAmount) return alert("Paid amount is less than the total bill.");

    const invoiceNo = `INV-${Math.random().toString(16).slice(2, 8)}`;
    const returnAmount = isWalkInCustomer ? Math.max(paid - totalAmount, 0) : 0;
    const printWindow = window.open("", "_blank", "width=420,height=700");

    if (!printWindow) {
      alert("Popup blocked. Please allow popups to print the bill.");
      return;
    }

    printWindow.document.write("<html><body style='font-family:Courier New,monospace;padding:20px;'>Preparing bill...</body></html>");
    printWindow.document.close();

    try {
      setProcessing(true);
      const latestResponse = await apiRequest("/products", { method: "GET" });
      const products = latestResponse?.data || latestResponse || [];

      const availableByName = new Map();
      products.forEach((product) => {
        const key = normalizeName(product?.name || "");
        if (!key) return;
        availableByName.set(key, (availableByName.get(key) || 0) + getActualStock(product));
      });

      const requestedByName = new Map();
      items.forEach((item) => {
        const key = normalizeName(item?.name || "");
        if (!key) return;
        requestedByName.set(
          key,
          (requestedByName.get(key) || 0) + getChargedUnits(item) + getFreeUnits(item)
        );
      });

      const insufficient = items.find((item) => {
        const key = normalizeName(item?.name || "");
        return key && (requestedByName.get(key) || 0) > (availableByName.get(key) || 0);
      });
      if (insufficient) {
        const key = normalizeName(insufficient?.name || "");
        return alert(
          `Insufficient stock for ${insufficient.name} (requested ${requestedByName.get(key) || 0}, available ${Math.floor(availableByName.get(key) || 0)})`
        );
      }

      const saleData = {
        invoiceNo,
        products: items.map(toSaleLine),
        subtotal,
        discount,
        totalAmount,
        paidAmount: effectivePaidAmount,
        returnAmount,
        customerName: String(selectedCustomer?.name || "Walk-in"),
        paymentMethod: isCreditCustomer ? "Credit" : "Cash",
        paymentStatus: isCreditCustomer ? "Pending" : "Paid",
      };

      const result = await apiRequest("/sales/createSale", { method: "POST", data: saleData });
      if (!result?.success) {
        printWindow.close();
        return alert(result?.message || "Failed to create sale");
      }

      let invoiceDisplayNo = "01";
      try {
        const savedSaleId = String(result?.data?._id || "");
        const salesResponse = await apiRequest("/sales", {
          method: "GET",
          suppressErrorLog: true,
          suppressErrorToast: true,
        });
        const salesList = Array.isArray(salesResponse?.data) ? salesResponse.data : [];
        const orderedSales = [...salesList].sort(
          (left, right) => new Date(left?.createdAt || 0).getTime() - new Date(right?.createdAt || 0).getTime()
        );
        const saleIndex = orderedSales.findIndex((sale) => String(sale?._id || "") === savedSaleId);
        invoiceDisplayNo = formatReceiptSequence(saleIndex >= 0 ? saleIndex + 1 : orderedSales.length);
      } catch {}

      if (isCreditCustomer && selectedCustomer?.id) {
        await syncCustomerCreditBill({
          customerId: selectedCustomer.id,
          invoiceNo,
          totalAmount,
          soldItems: items,
        });
      }

      printWindow.document.open();
      printWindow.document.write(
          buildReceiptHtml({
            items,
            subtotal,
            discount,
            total: totalAmount,
            paidAmount: effectivePaidAmount,
            returnAmount,
          selectedCustomer,
          invoiceNo,
          invoiceDisplayNo,
        })
      );
      printWindow.document.close();
      printWindow.focus();

      localStorage.removeItem("posCartDraft");
      removeItem("all");
      setSelectedCustomer(DEFAULT_WALK_IN_CUSTOMER);
      setAmount("");
      setPaidAmount("");

      setTimeout(() => {
        printWindow.print();
      }, 250);
    } catch (error) {
      try {
        printWindow.close();
      } catch {}
      console.error(error);
      alert(error?.message || "Failed to create sale");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-xl border border-white/70 bg-white/80 shadow-lg shadow-black/5 backdrop-blur">
        <div className="rounded-t-xl bg-gradient-to-r from-blue-600 to-emerald-500 p-3 text-white">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span className="font-semibold">Customer Information</span>
          </div>
        </div>
        <div className="p-3">
          <div className="space-y-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex min-w-0 items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${selectedCustomer.type === "VIP" ? "bg-gradient-to-br from-yellow-500 to-orange-500" : "bg-gradient-to-br from-blue-500 to-emerald-500"}`}>
                  <span className="text-sm font-bold text-white">{selectedCustomer.name?.charAt(0) || "C"}</span>
                </div>
                <div className="min-w-0">
                  <p className="break-words text-sm font-semibold text-slate-900">{selectedCustomer.name}</p>
                  <p className="flex break-all items-center gap-1 text-xs text-slate-600"><Phone className="h-3 w-3 shrink-0" />{selectedCustomer.phone || "-"}</p>
                </div>
              </div>
              <button onClick={() => { setCustomerType("registered"); setShowCustomerPopup(true); }} className="self-start text-left text-xs font-medium text-blue-600 hover:text-blue-700 sm:self-auto">
                Change Customer
              </button>
            </div>
            <span className={`inline-flex w-fit max-w-full items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-medium ${selectedCustomer.type === "VIP" ? "bg-yellow-100 text-yellow-800" : selectedCustomer.type === "walk-in" ? "bg-amber-100 text-amber-800" : "bg-blue-100 text-blue-800"}`}>
              {selectedCustomer.type === "VIP" ? <Star className="h-3 w-3" /> : selectedCustomer.type === "walk-in" ? <Footprints className="h-3 w-3" /> : <UserCheck className="h-3 w-3" />}
              {selectedCustomer.type === "VIP" ? "VIP Customer" : selectedCustomer.type === "walk-in" ? "Walk-in Customer" : "Registered Customer"}
            </span>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/70 bg-white/80 shadow-lg shadow-black/5 backdrop-blur">
          <div className="flex items-center justify-between rounded-t-xl bg-gradient-to-r from-blue-600 to-emerald-500 p-3 text-white">
          <div className="flex items-center gap-2"><ShoppingCart className="h-4 w-4" /><span className="text-sm font-semibold">Shopping Cart</span></div>
          <span className="rounded bg-white/20 px-2 py-1 text-xs">{cart.length}</span>
          </div>
        <div className="max-h-72 overflow-y-auto p-3">
          {!cart.length ? (
            <div className="py-8 text-center text-slate-500">
              <ShoppingCart className="mx-auto mb-3 h-12 w-12 opacity-30" />
              <p className="text-sm">Your cart is empty</p>
              <p className="mt-1 text-xs">Add products from the list</p>
            </div>
          ) : null}
        </div>

        {cart.length > 0 && (
          <>
            <div className="px-3 pb-0 pt-0 sm:px-4">
              <div className="flex items-start justify-between gap-3 text-xs"><span className="text-slate-600">Subtotal P.Price</span><span className="break-words text-right text-slate-900"> {subtotalPurchasePrice.toFixed(2)}</span></div>
            </div>
            <div className="space-y-2 border-t border-slate-200 p-3 sm:p-4">
            <div className="flex items-start justify-between gap-3 text-xs"><span className="text-slate-600">Subtotal</span><span className="break-words text-right text-slate-900"> {subtotal.toFixed(2)}</span></div>
            <div className="flex items-start justify-between gap-3 text-xs font-medium"><span className="text-red-600">Discount</span><span className="break-words text-right text-red-600">-{discount.toFixed(2)}</span></div>
            <div className="border-t border-slate-200 pt-2"><div className="flex items-start justify-between gap-3 text-base font-bold"><span className="text-slate-900">Total</span><span className="break-words text-right text-blue-600"> {totalAmount.toFixed(2)}</span></div></div>
            <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-3">
              <h3 className="mb-3 text-xs font-semibold text-slate-900">Payment Detail</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="text-slate-600">Discount</span>
                  <input type="text" inputMode="decimal" value={amount} onChange={(event) => setAmount(sanitizeNumericInput(event.target.value))} className="w-20 shrink-0 rounded-lg border border-slate-300 px-3 py-2 text-right text-xs sm:w-24" />
                </div>
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="text-slate-600">Payment Option</span>
                  <span className={`shrink-0 rounded-lg px-3 py-2 text-[11px] font-semibold ${isCreditCustomer ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800"}`}>
                    {isCreditCustomer ? "Credit" : "Cash"}
                  </span>
                </div>
                {isWalkInCustomer ? (
                  <>
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="text-slate-600">Pakistani Rupees</span>
                      <input type="text" inputMode="decimal" value={paidAmount} onChange={(event) => setPaidAmount(sanitizeNumericInput(event.target.value))} className="w-20 shrink-0 rounded-lg border border-slate-300 px-3 py-2 text-right text-xs sm:w-24" />
                    </div>
                    {paidAmount !== "" && <div className={`rounded-lg p-2 text-center text-xs ${paid >= totalAmount ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>{paid >= totalAmount ? "Return Pakistani Rupees" : "Insufficient Amount"}:  {Math.abs(paid - totalAmount).toFixed(2)}</div>}
                  </>
                ) : (
                  <div className="rounded-lg bg-amber-50 p-2 text-center text-xs text-amber-800">
                    Total bill will be added to this customer's pending bills.
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-2 pt-2">
              <button onClick={createSaleAndPrintBill} disabled={!cart.length || (isWalkInCustomer && paid < totalAmount) || processing} className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 py-3 text-sm font-bold text-white disabled:opacity-60">
                <CheckCircle className="h-5 w-5" />
                {processing ? "Processing..." : "Create Sale & Print Bill"}
              </button>
              <button onClick={() => removeItem("all")} className="w-full py-2 text-xs text-red-600 hover:text-red-700">Clear Cart</button>
            </div>
            </div>
          </>
        )}
      </div>

      {showCustomerPopup && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-3 backdrop-blur-sm">
            <div className="max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-2xl">
              <div className="bg-gradient-to-r from-blue-600 to-emerald-500 p-4 text-white">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0"><h2 className="text-lg font-bold sm:text-xl">Select Customer Type</h2><p className="text-xs text-white/90">Choose how to proceed with the sale</p></div>
                  <button onClick={resetPopup} className="rounded-lg p-1.5 hover:bg-white/20"><X className="h-5 w-5" /></button>
                </div>
              </div>
              <div className="max-h-[calc(90vh-96px)] overflow-y-auto p-3 sm:p-4">
                {!customerType ? (
                  <div className="grid gap-4">
                    <button onClick={() => setCustomerType("registered")} className="rounded-xl border bg-slate-50 p-4 text-left hover:border-blue-500 hover:bg-blue-50 sm:p-6"><UserCheck className="mb-3 h-8 w-8 text-purple-600" /><p className="text-lg font-bold text-slate-900 sm:text-xl">Registered Customer</p><p className="mt-2 text-sm text-slate-600">Search and choose from saved customers.</p></button>
                  </div>
                ) : customerType === "walk-in" ? (
                <div className="space-y-4">
                  <button onClick={() => setCustomerType(null)} className="flex items-center gap-2 text-sm text-blue-600"><ChevronLeft className="h-4 w-4" />Back to customer type selection</button>
                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-700">Customer Name <span className="text-red-500">*</span></label>
                    <input value={walkInCustomer.name} onChange={(event) => setWalkInCustomer((prev) => ({ ...prev, name: event.target.value }))} placeholder="Enter customer name" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
                    {formErrors.name && <p className="mt-1 text-xs text-red-600">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-700">Mobile <span className="text-red-500">*</span></label>
                    <input value={walkInCustomer.phone} onChange={(event) => { const digits = String(event.target.value || "").replace(/\D/g, "").slice(0, 11); let formatted = digits; if (digits.length > 4) formatted = `${digits.slice(0, 4)}-${digits.slice(4)}`; setWalkInCustomer((prev) => ({ ...prev, phone: formatted })); }} maxLength={12} placeholder="0300-1234567" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
                    {formErrors.phone && <p className="mt-1 text-xs text-red-600">{formErrors.phone}</p>}
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium text-slate-700">Address (Optional)</label>
                    <textarea value={walkInCustomer.address} onChange={(event) => setWalkInCustomer((prev) => ({ ...prev, address: event.target.value }))} rows="3" placeholder="Enter address (optional)" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <button onClick={submitWalkIn} className="flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 py-2.5 font-semibold text-white">Confirm & Continue</button>
                    <button onClick={() => setCustomerType(null)} className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm">Back</button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <button onClick={() => setCustomerType(null)} className="flex items-center gap-2 text-sm text-blue-600"><ChevronLeft className="h-4 w-4" />Back to customer type selection</button>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input value={searchRegisteredCustomers} onChange={(event) => setSearchRegisteredCustomers(event.target.value)} placeholder="Search by name, phone, CNIC, or email..." className="w-full rounded-lg border border-slate-300 py-2 pl-9 pr-3" />
                  </div>
                  <div className="max-h-80 overflow-y-auto rounded-lg border border-slate-200">
                    {filteredCustomers.length ? filteredCustomers.map((customer) => (
                      <button key={customer.id} onClick={() => setSelectedRegisteredCustomer(customer)} className={`w-full border-b p-3 text-left ${selectedRegisteredCustomer?.id === customer.id ? "bg-blue-50" : "hover:bg-slate-50"}`}>
                        <div className="break-words font-semibold text-slate-900">{customer.name}</div>
                        <div className="break-all text-xs text-slate-500">{customer.phone} | {customer.type}</div>
                      </button>
                    )) : <div className="p-8 text-center text-sm text-slate-500">No customers found</div>}
                  </div>
                  <button onClick={() => { if (selectedRegisteredCustomer) { setSelectedCustomer(selectedRegisteredCustomer); setPaidAmount("0"); resetPopup(); } }} disabled={!selectedRegisteredCustomer} className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 py-2.5 font-semibold text-white disabled:opacity-50">Select Customer</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
