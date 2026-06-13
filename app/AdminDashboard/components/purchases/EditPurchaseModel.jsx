"use client";

import React, { useState, useMemo, useEffect } from "react";
import { X, Plus, Trash2 } from "lucide-react";
import { apiRequest } from "./../../authservice/api";

const formatDateToDisplay = (value) => {
  if (!value) {
    const d = new Date();
    return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    const d = new Date();
    return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
  }
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

const normalizeProductStatus = (value) => {
  const normalized = String(value || "").trim().toLowerCase();
  if (normalized === "claim") return "Claim";
  if (normalized === "returned") return "Returned";
  return "";
};

const getStatusQuantityValue = (value) => {
  const quantity = Number(value || 0);
  return Number.isFinite(quantity) ? Math.max(quantity, 0) : 0;
};

const createPurchaseItem = (product = {}) => {
  const status = normalizeProductStatus(product.status);
  const statusQuantity =
    product.statusQuantity ??
    product.returnedQuantity ??
    product.quantityReturned ??
    product.claimQuantity ??
    "";
  const numericQuantity = Number(product.quantity || 0);
  const baseQuantity =
    status === "Returned"
      ? numericQuantity + getStatusQuantityValue(statusQuantity)
      : numericQuantity;

  return {
    id: Date.now() + Math.random(),
    productId: product.productId || "",
    name: product.name || "",
    quantity: numericQuantity,
    baseQuantity,
    purchasePrice: product.purchasePrice || product.price || 0,
    manufacturer: product.manufacturer || "",
    status,
    statusQuantity,
    searchText: product.name || "",
  };
};

const EditPurchaseModal = ({ purchase, onClose, onUpdated }) => {
  const [supplier, setSupplier] = useState(purchase?.supplier || "");
  const [suppliersList, setSuppliersList] = useState([]);
  const [purchaseDate, setPurchaseDate] = useState(() => formatDateToDisplay(purchase?.purchaseDate));
  const [invoiceNumber, setInvoiceNumber] = useState(
    purchase?.invoiceNumber != null ? String(purchase.invoiceNumber) : ""
  );
  const [items, setItems] = useState(() => (purchase?.products || []).map((p) => createPurchaseItem(p)));
  const [taxAmount, setTaxAmount] = useState(Number(purchase?.taxAmount || 0));
  const [productsList, setProductsList] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState({ show: false, message: "" });

  useEffect(() => {
    setSupplier(purchase?.supplier || "");
    setPurchaseDate(formatDateToDisplay(purchase?.purchaseDate));
    setInvoiceNumber(purchase?.invoiceNumber != null ? String(purchase.invoiceNumber) : "");
    setItems((purchase?.products || []).map((p) => createPurchaseItem(p)));
    setTaxAmount(Number(purchase?.taxAmount || 0));
    setErrors({});
  }, [purchase]);

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
        const data = res?.suppliers || res?.data || res;
        if (!Array.isArray(data)) throw new Error("Invalid supplier response");
        setSuppliersList(data.map((s) => s.name));
      } catch (err) {
        console.error(err);
        setErrorModal({ show: true, message: "Failed to fetch suppliers" });
      }
    };
    fetchSuppliers();
  }, []);

  const handleAddItem = () => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        productId: "",
        name: "",
        quantity: 1,
        baseQuantity: 1,
        purchasePrice: 0,
        manufacturer: "",
        status: "",
        statusQuantity: "",
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
          : (() => {
              const numericValue = Number(value || 0);
              const nextItem = { ...it };

              if (field === "quantity") {
                const nextQuantity = Math.max(numericValue, 0);
                const statusQuantity = getStatusQuantityValue(it.statusQuantity);

                nextItem.baseQuantity =
                  normalizeProductStatus(it.status) === "Returned"
                    ? nextQuantity + statusQuantity
                    : nextQuantity;
                nextItem.quantity = nextQuantity;
                return nextItem;
              }

              if (field === "statusQuantity") {
                nextItem.statusQuantity = value;
                nextItem.quantity =
                  normalizeProductStatus(it.status) === "Returned"
                    ? Math.max(Number(it.baseQuantity || 0) - getStatusQuantityValue(value), 0)
                    : Number(it.baseQuantity || it.quantity || 0);
                return nextItem;
              }

              if (field === "status") {
                const nextStatus = normalizeProductStatus(value);
                nextItem.status = nextStatus;
                nextItem.quantity =
                  nextStatus === "Returned"
                    ? Math.max(
                        Number(it.baseQuantity || it.quantity || 0) - getStatusQuantityValue(it.statusQuantity),
                        0
                      )
                    : Number(it.baseQuantity || it.quantity || 0);
                return nextItem;
              }

              nextItem[field] = field === "purchasePrice" ? numericValue : value;
              return nextItem;
            })()
      )
    );
    setErrors((prev) => ({ ...prev, [`${id}-${field}`]: "" }));
  };

  const syncSelectedProduct = (itemId, rawValue) => {
    const typedValue = String(rawValue || "");
    const matchedProduct = productsList.find(
      (product) => product.name.trim().toLowerCase() === typedValue.trim().toLowerCase()
    );

    handleItemChange(itemId, "searchText", typedValue);

    if (matchedProduct) {
      handleItemChange(itemId, "productId", matchedProduct.id);
      handleItemChange(itemId, "name", matchedProduct.name);
      handleItemChange(itemId, "manufacturer", matchedProduct.manufacturer || "");
      return;
    }

    handleItemChange(itemId, "productId", "");
    handleItemChange(itemId, "name", typedValue);
    handleItemChange(itemId, "manufacturer", "");
  };

  const getEffectiveQuantity = (it) => {
    const baseQuantity = Number(it.baseQuantity ?? it.quantity ?? 0);
    const statusQuantity = getStatusQuantityValue(it.statusQuantity);

    if (normalizeProductStatus(it.status) !== "Returned") {
      return baseQuantity;
    }

    return Math.max(baseQuantity - statusQuantity, 0);
  };

  const rowTotal = (it) => getEffectiveQuantity(it) * Number(it.purchasePrice || 0);
  const subtotal = useMemo(() => items.reduce((acc, it) => acc + rowTotal(it), 0), [items]);
  const totalAmount = subtotal + Number(taxAmount || 0);



  const validateForm = () => {
    let temp = {};
    if (!supplier) temp.supplier = "Supplier is required";
    if (!purchaseDate) temp.purchaseDate = "Purchase date is required";
    else if (!isValidDateDisplay(purchaseDate)) temp.purchaseDate = "Date must be dd/mm/yyyy";
    if (!invoiceNumber) temp.invoiceNumber = "Invoice number is required";
    if (items.length === 0) temp.items = "Value is required";

    items.forEach((it) => {
      const normalizedStatus = normalizeProductStatus(it.status);
      const statusQuantity = getStatusQuantityValue(it.statusQuantity);

      if (!it.productId) temp[`${it.id}-productId`] = "Value is required";
      if (!getEffectiveQuantity(it) || getEffectiveQuantity(it) <= 0) temp[`${it.id}-quantity`] = "Value is required";
      if (!it.purchasePrice || it.purchasePrice <= 0) temp[`${it.id}-purchasePrice`] = "Value is required";
      if (!it.manufacturer?.trim()) temp[`${it.id}-manufacturer`] = "Value is required";
      if (normalizedStatus && statusQuantity <= 0) {
        temp[`${it.id}-statusQuantity`] = "Status quantity must be greater than 0";
      }
      if (normalizedStatus === "Returned" && statusQuantity > Number(it.baseQuantity || 0)) {
        temp[`${it.id}-statusQuantity`] = "Returned quantity cannot exceed quantity";
      }
    });



    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const purchaseDateIso = toIsoFromDisplay(purchaseDate);
      const payload = {
        supplier,
        purchaseDate: purchaseDateIso,
        invoiceNumber: String(invoiceNumber || "").trim(),
        totalAmount,
        taxAmount,
        purchaseStatus: "Draft",
        products: items.map((it) => {
          const normalizedStatus = normalizeProductStatus(it.status);
          const statusQuantity = getStatusQuantityValue(it.statusQuantity);

          return {
            productId: it.productId,
            name: it.name,
            quantity:
              normalizedStatus === "Returned"
                ? Math.max(Number(it.baseQuantity || 0) - statusQuantity, 0)
                : Number(it.baseQuantity || it.quantity || 0),
            purchasePrice: it.purchasePrice,
            manufacturer: it.manufacturer,
            status: normalizedStatus || undefined,
            statusQuantity: normalizedStatus ? statusQuantity : undefined,
          };
        }),
      };

      const response = await apiRequest(`/purchases/updatePurchase/${purchase?._id}`, {
        method: "PUT",
        data: payload,
      });

      if (response?.success !== false) {
        setSuccessModal(true);
        setTimeout(() => {
          setSuccessModal(false);
          onUpdated?.();
          onClose();
        }, 1500);
      } else {
        setErrorModal({ show: true, message: response?.message || "Failed to update purchase" });
      }
    } catch (err) {
      console.error(err);
      setErrorModal({
        show: true,
        message: err?.response?.data?.message || "Failed to update purchase",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {successModal && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 p-3 sm:p-4">
          <div className="w-full max-w-[350px] rounded-xl bg-white p-5 text-center sm:p-6">
            <h3 className="mb-2 text-lg font-bold text-green-600 sm:text-xl">Success</h3>
            <p className="mb-4">Purchase updated successfully.</p>
            <button
              onClick={() => setSuccessModal(false)}
              className="w-full rounded bg-blue-600 px-4 py-2 text-white sm:w-auto"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {errorModal.show && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/50 p-3 sm:p-4">
          <div className="w-full max-w-[350px] rounded-xl bg-white p-5 text-center sm:p-6">
            <h3 className="mb-2 text-lg font-bold text-red-600 sm:text-xl">Unsuccessful</h3>
            <p className="mb-4">{errorModal.message}</p>
            <button
              onClick={() => setErrorModal({ show: false, message: "" })}
              className="w-full rounded bg-red-600 px-4 py-2 text-white sm:w-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/50 p-3 backdrop-blur-sm sm:p-4">
        <div className="flex max-h-[90vh] w-full max-w-[935px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
          <div className="sticky top-0 flex items-center justify-between gap-3 bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white sm:p-6">
            <h2 className="min-w-0 text-xl font-bold sm:text-2xl">Edit Purchase</h2>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Supplier *</label>
                <select
                  value={supplier}
                  onChange={(e) => setSupplier(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-gray-200 bg-white px-3 py-1 text-sm shadow-sm"
                >
                  <option value="">Select supplier</option>
                  {suppliersList.map((name, i) => (
                    <option key={i} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
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
                {errors.purchaseDate && (
                  <p className="text-xs text-red-600">{errors.purchaseDate}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Invoice Number *</label>
                <input
                  type="text"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-gray-200 px-3 py-1 text-sm shadow-sm"
                  placeholder="Enter invoice #"
                />
                {errors.invoiceNumber && (
                  <p className="text-xs text-red-600">{errors.invoiceNumber}</p>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-lg font-semibold">Items</label>
              </div>

              <div className="hidden gap-2 px-2 text-sm font-semibold text-gray-600 md:flex">
                <div className="w-40 lg:w-48 xl:w-56">Product Name</div>
                <div className="w-20 text-center">QTY</div>
                <div className="w-24 text-center">Purchase Price</div>
                <div className="w-24 text-center">Manufacturer</div>
                <div className="w-24 text-center">Status</div>
                <div className="w-24 text-center">Status Quantity</div>
                <div className="w-20 text-center">Total</div>
                <div className="w-9" />
              </div>
              {errors.items && <p className="text-xs text-red-600 px-2">{errors.items}</p>}

              {items.map((it) => (
                <div key={it.id} className="flex flex-wrap items-center gap-2 rounded-lg bg-slate-50 p-2">
                  <div className="w-full sm:w-40 lg:w-48 xl:w-56">
                    <input
                      list={`products-${it.id}`}
                      value={it.searchText ?? it.name ?? ""}
                      onChange={(e) => syncSelectedProduct(it.id, e.target.value)}
                      onBlur={(e) => syncSelectedProduct(it.id, e.target.value)}
                      className="w-full h-9 rounded-md border border-gray-200 px-3 text-sm shadow-sm bg-white"
                      placeholder="Select product"
                    />
                    <datalist id={`products-${it.id}`}>
                      {productsList.map((p) => (
                        <option key={p.id} value={p.name} />
                      ))}
                    </datalist>
                    {errors[`${it.id}-productId`] && (
                      <p className="text-xs text-red-600 mt-1">{errors[`${it.id}-productId`]}</p>
                    )}
                  </div>

                  <div className="w-[calc(50%-0.25rem)] sm:w-20">
                    <input
                      type="number"
                      placeholder="0"
                      value={getEffectiveQuantity(it)}
                      onChange={(e) => handleItemChange(it.id, "quantity", e.target.value)}
                      className="w-full h-9 rounded-md border border-gray-200 px-2 text-sm shadow-sm text-center"
                    />
                    {errors[`${it.id}-quantity`] && (
                      <p className="text-xs text-red-600 mt-1 text-center">{errors[`${it.id}-quantity`]}</p>
                    )}
                  </div>

                  <div className="w-[calc(50%-0.25rem)] sm:w-24">
                    <input
                      type="number"
                      step="0.01"
                      placeholder="0"
                      value={it.purchasePrice}
                      onChange={(e) => handleItemChange(it.id, "purchasePrice", e.target.value)}
                      className="w-full h-9 rounded-md border border-gray-200 px-2 text-sm shadow-sm text-center"
                    />
                    {errors[`${it.id}-purchasePrice`] && (
                      <p className="text-xs text-red-600 mt-1 text-center">{errors[`${it.id}-purchasePrice`]}</p>
                    )}
                  </div>

                  <div className="w-full sm:w-24">
                    <input
                      type="text"
                      value={it.manufacturer}
                      readOnly
                      className="w-full h-9 rounded-md border border-gray-200 bg-gray-50 px-2 text-sm shadow-sm text-center text-gray-700"
                    />
                    {errors[`${it.id}-manufacturer`] && (
                      <p className="text-xs text-red-600 mt-1 text-center">{errors[`${it.id}-manufacturer`]}</p>
                    )}
                  </div>

                  <div className="w-[calc(50%-0.25rem)] sm:w-24">
                    <select
                      value={it.status || ""}
                      onChange={(e) => handleItemChange(it.id, "status", e.target.value)}
                      className="w-full h-9 rounded-md border border-gray-200 bg-white px-2 text-left text-sm shadow-sm"
                    >
                      <option value="">Select</option>
                      <option value="Claim">Claim</option>
                      <option value="Returned">Returned</option>
                    </select>
                  </div>

                  <div className="w-[calc(50%-0.25rem)] sm:w-24">
                    <input
                      type="text"
                      placeholder="0"
                      value={it.statusQuantity}
                      onChange={(e) => handleItemChange(it.id, "statusQuantity", e.target.value)}
                      className="w-full h-9 rounded-md border border-gray-200 px-2 text-sm shadow-sm text-center"
                    />
                    {errors[`${it.id}-statusQuantity`] && (
                      <p className="text-xs text-red-600 mt-1 text-center">{errors[`${it.id}-statusQuantity`]}</p>
                    )}
                  </div>

                  <p className="w-[calc(100%-2.75rem)] break-words text-sm font-medium sm:w-20 sm:text-center">
                    Rs. {rowTotal(it).toFixed(2)}
                  </p>

                  <button
                    type="button"
                    onClick={() => handleRemoveItem(it.id)}
                    className="h-9 w-9 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-md"
                  >
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

            {items.length > 0 && (
              <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-medium">Rs. {subtotal.toFixed(2)}</span>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  <label className="w-16 text-sm text-slate-600">Tax</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={taxAmount}
                    onChange={(e) => setTaxAmount(Number(e.target.value || 0))}
                    className="h-9 w-full rounded-md border border-gray-200 px-3 text-sm shadow-sm sm:w-36"
                  />
                  <div className="flex-1" />
                  <span className="font-medium">Rs. {taxAmount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-blue-600">Rs. {totalAmount.toFixed(2)}</span>
                </div>
              </div>
            )}



            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="h-9 w-full rounded-md border border-gray-200 px-4 py-2 shadow-sm hover:bg-slate-100 sm:w-auto"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="h-9 w-full rounded-md bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 text-white shadow hover:from-blue-600 hover:to-blue-700 sm:w-auto"
              >
                {loading ? "Updating..." : "Update Purchase"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPurchaseModal;
