"use client";

import React, { useState, useMemo, useEffect } from "react";
import { X, Plus, Trash2 } from "lucide-react";
import { apiRequest } from "./../../authservice/api";

const formatDateToDisplay = (value) => {
  const date = value ? new Date(value) : new Date();
  if (Number.isNaN(date.getTime())) return "";
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
};

const normalizeDateInput = (value) => {
  const digits = String(value || "").replace(/\D/g, "").slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
};

const isValidDateDisplay = (value) => {
  const match = String(value || "").match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return false;
  const [, dd, mm, yyyy] = match;
  const day = Number(dd);
  const month = Number(mm);
  const year = Number(yyyy);
  const d = new Date(year, month - 1, day);
  return d.getFullYear() === year && d.getMonth() === month - 1 && d.getDate() === day;
};

const toIsoFromDisplay = (value) => {
  const match = String(value || "").match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) return null;
  const [, dd, mm, yyyy] = match;
  return `${yyyy}-${mm}-${dd}`;
};

const PurchaseModal = ({ onClose, onCreated }) => {
  const [supplier, setSupplier] = useState("");
  const [suppliersList, setSuppliersList] = useState([]);
  const [purchaseDate, setPurchaseDate] = useState(() => formatDateToDisplay());
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [items, setItems] = useState([]);
  const [paymentStatus, setPaymentStatus] = useState("Pending");
  const [partialAmount, setPartialAmount] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [productsList, setProductsList] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState({ show: false, message: "" });

  // Fetch product list with manufacturer included
  useEffect(() => {
    const mapProductsForDropdown = (products) =>
      Array.from(
        new Map(
          (products || [])
            .filter((p) => p?.name)
            .map((p) => [
              p.name.trim().toLowerCase(),
              {
                id: p._id || p.id || "",
                name: p.name,
                manufacturer: p.manufacturer || "",
              },
            ])
        ).values()
      );

    const fetchProducts = async () => {
      try {
        const res = await apiRequest("/products/ProductName", { method: "GET" });
        const products = res?.data || res;
        let mappedProducts = mapProductsForDropdown(products);

        // Fallback if ProductName route does not return expected array shape.
        if (!mappedProducts.length) {
          const fallbackRes = await apiRequest("/products", { method: "GET" });
          const fallbackProducts = fallbackRes?.data || fallbackRes;
          mappedProducts = mapProductsForDropdown(fallbackProducts);
        }

        setProductsList(mappedProducts);
      } catch (err) {
        console.error(err);
        setErrorModal({ show: true, message: "Failed to fetch product list" });
      }
    };
    fetchProducts();
  }, []);

  // Fetch suppliers
  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const res = await apiRequest("/suppliers", { method: "GET" });
        const supplierList = Array.isArray(res)
          ? res
          : Array.isArray(res?.suppliers)
          ? res.suppliers
          : Array.isArray(res?.data?.suppliers)
          ? res.data.suppliers
          : Array.isArray(res?.data)
          ? res.data
          : [];

        setSuppliersList(
          supplierList
            .map((supplier) => String(supplier?.name || "").trim())
            .filter(Boolean)
        );
      } catch (err) {
        console.error(err);
        setErrorModal({ show: true, message: "Failed to fetch suppliers" });
      }
    };
    fetchSuppliers();
  }, []);

  // Add item row
  const handleAddItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        productId: "",
        name: "",
        quantity: "",
        purchasePrice: "",
        manufacturer: "",
        searchText: "",
      },
    ]);
  };

  const handleRemoveItem = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  const handleItemChange = (id, field, value) => {
    setItems((prev) =>
      prev.map((it) =>
        it.id !== id
          ? it
          : {
              ...it,
              [field]: ["quantity", "purchasePrice"].includes(field)
                ? Number(value || 0)
                : value,
            }
      )
    );
    setErrors((prev) => ({ ...prev, [`${id}-${field}`]: "" }));
  };

  const rowTotal = (it) => Number(it.quantity || 0) * Number(it.purchasePrice || 0);
  const subtotal = useMemo(() => items.reduce((acc, it) => acc + rowTotal(it), 0), [items]);
  const totalAmount = subtotal + Number(taxAmount || 0);

  const balance = useMemo(() => {
    if (paymentStatus === "Paid") return 0;
    if (paymentStatus === "Partial") return Math.max(totalAmount - partialAmount, 0);
    return totalAmount;
  }, [paymentStatus, totalAmount, partialAmount]);

  const validateForm = () => {
    let temp = {};
    if (!String(supplier || "").trim()) temp.supplier = "Supplier is required";
    if (!purchaseDate) temp.purchaseDate = "Purchase date is required";
    else if (!isValidDateDisplay(purchaseDate)) temp.purchaseDate = "Date must be dd/mm/yyyy";
    if (!invoiceNumber) temp.invoiceNumber = "Invoice number is required";
    if (items.length === 0) temp.items = "Value is required";

    items.forEach((it) => {
      if (!it.productId) temp[`${it.id}-productId`] = "Value is required";
      if (!it.quantity || it.quantity <= 0) temp[`${it.id}-quantity`] = "Value is required";
      if (!it.purchasePrice || it.purchasePrice <= 0) {
        temp[`${it.id}-purchasePrice`] = "Value is required";
      }
      if (!it.manufacturer?.trim()) temp[`${it.id}-manufacturer`] = "Value is required";
    });

    if (paymentStatus === "Partial" && (partialAmount <= 0 || partialAmount > totalAmount)) {
      temp.partialAmount = "Partial amount must be >0 and < total";
    }

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const purchaseDateIso = toIsoFromDisplay(purchaseDate);
      const supplierName = String(supplier || "").trim();
      const normalizedInvoiceNumber = String(invoiceNumber || "").trim();
      const payload = {
        supplier: supplierName,
        purchaseDate: purchaseDateIso,
        invoiceNumber: normalizedInvoiceNumber,
        totalAmount,
        paidAmount:
          paymentStatus === "Paid" ? totalAmount : paymentStatus === "Partial" ? partialAmount : 0,
        paymentStatus,
        balance,
        taxAmount,
        products: items.map((it) => ({
          productId: it.productId,
          name: it.name,
          quantity: it.quantity,
          purchasePrice: it.purchasePrice,
          manufacturer: it.manufacturer,
        })),
      };

      const response = await apiRequest("/purchases/createPurchase", {
        method: "POST",
        data: payload,
      });

      if (response?.success !== false) {
        setSuccessModal(true);
        setTimeout(() => {
          setSuccessModal(false);
          if (typeof onCreated === "function") onCreated();
          onClose();
        }, 2000);
      } else {
        setErrorModal({ show: true, message: response?.message || "Failed to create purchase" });
      }
    } catch (err) {
      console.error(err);
      setErrorModal({
        show: true,
        message:
          err?.response?.data?.error ||
          err?.response?.data?.message ||
          err?.message ||
          "Failed to create purchase",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* SUCCESS MODAL */}
      {successModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]">
          <div className="bg-white rounded-xl p-6 w-[350px] text-center">
            <h3 className="text-green-600 text-xl font-bold mb-2">Success</h3>
            <p className="mb-4">Purchase added successfully.</p>
            <button onClick={() => setSuccessModal(false)} className="px-4 py-2 bg-blue-600 text-white rounded">
              OK
            </button>
          </div>
        </div>
      )}

      {/* ERROR MODAL */}
      {errorModal.show && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]">
          <div className="bg-white rounded-xl p-6 w-[350px] text-center">
            <h3 className="text-red-600 text-xl font-bold mb-2">Unsuccessful</h3>
            <p className="mb-4">{errorModal.message}</p>
            <button onClick={() => setErrorModal({ show: false, message: "" })} className="px-4 py-2 bg-red-600 text-white rounded">
              Close
            </button>
          </div>
        </div>
      )}

      {/* MAIN MODAL */}
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/50 p-3 backdrop-blur-sm sm:p-4">
        <div className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
          {/* HEADER */}
          <div className="sticky top-0 flex items-center justify-between gap-3 bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white sm:p-6">
            <h2 className="min-w-0 text-xl font-bold sm:text-2xl">New Purchase</h2>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6 sm:p-6">
            {/* TOP INPUTS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Supplier *</label>
                <input
                  type="text"
                  list="purchase-supplier-suggestions"
                  value={supplier}
                  onChange={(e) => setSupplier(e.target.value)}
                  placeholder="Type or select supplier"
                  className="flex h-9 w-full rounded-md border border-gray-200 bg-white px-3 py-1 text-sm shadow-sm"
                />
                <datalist id="purchase-supplier-suggestions">
                  {suppliersList.map((name, i) => (
                    <option key={`${name}-${i}`} value={name} />
                  ))}
                </datalist>
                {errors.supplier && <p className="text-xs text-red-600">{errors.supplier}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Purchase Date *</label>
                <input
                  type="text"
                  value={purchaseDate}
                  onChange={(e) => setPurchaseDate(normalizeDateInput(e.target.value))}
                  placeholder="dd/mm/yyyy"
                  maxLength={10}
                  className="flex h-9 w-full rounded-md border border-gray-200 px-3 py-1 text-sm shadow-sm"
                />
                {errors.purchaseDate && <p className="text-xs text-red-600">{errors.purchaseDate}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Invoice Number *</label>
                <input type="text" value={invoiceNumber} onChange={(e) => setInvoiceNumber(e.target.value)} className="flex h-9 w-full rounded-md border border-gray-200 px-3 py-1 text-sm shadow-sm" placeholder="Enter invoice #" />
                {errors.invoiceNumber && <p className="text-xs text-red-600">{errors.invoiceNumber}</p>}
              </div>
            </div>

            {/* ITEMS */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-lg font-semibold">Items</label>
              </div>

              <div className="hidden gap-2 px-2 text-sm font-semibold text-gray-600 md:flex">
                <div className="flex-1">Medicine Name</div>
                <div className="w-20 text-center">QTY</div>
                <div className="w-24 text-center">Price</div>
                <div className="w-24 text-center">Manufacturer</div>
                <div className="w-20 text-center">Total</div>
                <div className="w-9" />
              </div>
              {errors.items && <p className="text-xs text-red-600 px-2">{errors.items}</p>}

              {items.map((it) => (
                <div key={it.id} className="flex flex-wrap items-center gap-2 rounded-lg bg-slate-50 p-2">
                  {/* PRODUCT SELECT */}
                  <div className="flex-1 min-w-[220px]">
                    <input
                      list={`products-${it.id}`}
                      value={it.searchText ?? it.name ?? ""}
                      onChange={(e) => {
                        const typedValue = e.target.value;
                        const matchedProduct = productsList.find(
                          (p) => p.name.toLowerCase() === typedValue.trim().toLowerCase()
                        );

                        handleItemChange(it.id, "searchText", typedValue);

                        if (matchedProduct) {
                          handleItemChange(it.id, "productId", matchedProduct.id);
                          handleItemChange(it.id, "name", matchedProduct.name);
                          handleItemChange(
                            it.id,
                            "manufacturer",
                            matchedProduct.manufacturer || ""
                          );
                        } else {
                          handleItemChange(it.id, "productId", "");
                          handleItemChange(it.id, "name", typedValue);
                        }
                      }}
                      className="w-full h-9 rounded-md border border-gray-200 px-3 text-sm shadow-sm bg-white"
                      placeholder="Select product"
                    />
                    <datalist id={`products-${it.id}`}>
                      {productsList.map((p) => (
                        <option key={p.id} value={p.name} />
                      ))}
                    </datalist>
                    {errors[`${it.id}-productId`] && <p className="text-xs text-red-600 mt-1">{errors[`${it.id}-productId`]}</p>}
                  </div>

                  <div className="w-[calc(50%-0.25rem)] sm:w-20">
                    <input type="number" placeholder="0" value={it.quantity} onChange={(e) => handleItemChange(it.id, "quantity", e.target.value)} className="w-full h-9 rounded-md border border-gray-200 px-2 text-sm shadow-sm text-center" />
                    {errors[`${it.id}-quantity`] && <p className="text-xs text-red-600 mt-1 text-center">{errors[`${it.id}-quantity`]}</p>}
                  </div>

                  <div className="w-[calc(50%-0.25rem)] sm:w-24">
                    <input type="number" step="0.01" placeholder="0" value={it.purchasePrice} onChange={(e) => handleItemChange(it.id, "purchasePrice", e.target.value)} className="w-full h-9 rounded-md border border-gray-200 px-2 text-sm shadow-sm text-center" />
                    {errors[`${it.id}-purchasePrice`] && <p className="text-xs text-red-600 mt-1 text-center">{errors[`${it.id}-purchasePrice`]}</p>}
                  </div>

                  <div className="w-full sm:w-24">
                    <input type="text" value={it.manufacturer} onChange={(e) => handleItemChange(it.id, "manufacturer", e.target.value)} className="w-full h-9 rounded-md border border-gray-200 px-2 text-sm shadow-sm text-center" />
                    {errors[`${it.id}-manufacturer`] && <p className="text-xs text-red-600 mt-1 text-center">{errors[`${it.id}-manufacturer`]}</p>}
                  </div>

                  <p className="w-[calc(100%-2.75rem)] text-sm font-medium sm:w-20 sm:text-center">Rs. {rowTotal(it).toFixed(2)}</p>

                  <button type="button" onClick={() => handleRemoveItem(it.id)} className="h-9 w-9 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-md">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleAddItem}
                  className="flex items-center gap-1 border border-gray-200 h-8 px-3 rounded-md text-xs shadow-sm hover:bg-slate-100"
                >
                  <Plus className="w-4 h-4" /> Add Item
                </button>
              </div>
            </div>

            {/* TOTALS & PAYMENTS */}
            {items.length > 0 && (
              <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-medium">Rs. {subtotal.toFixed(2)}</span>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <label className="w-16 text-sm text-slate-600">Tax</label>
                  <input type="number" step="0.01" min="0" value={taxAmount} onChange={(e) => setTaxAmount(Number(e.target.value || 0))} className="h-9 w-full rounded-md border border-gray-200 px-3 text-sm shadow-sm sm:w-36" />
                  <div className="flex-1" />
                  <span className="font-medium">Rs. {taxAmount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-blue-600">Rs. {totalAmount.toFixed(2)}</span>
                </div>
              </div>
            )}

            {/* FOOTER */}
            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-end">
              <button type="button" onClick={onClose} className="h-9 w-full rounded-md border border-gray-200 px-4 py-2 shadow-sm hover:bg-slate-100 sm:w-auto">Cancel</button>
              <button type="button" onClick={handleSubmit} disabled={loading} className="h-9 w-full rounded-md bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 text-white shadow hover:from-blue-600 hover:to-blue-700 sm:w-auto">
                {loading ? "Creating..." : "Create Purchase"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseModal;
