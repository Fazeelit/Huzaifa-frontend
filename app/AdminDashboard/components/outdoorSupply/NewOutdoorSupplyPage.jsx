"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft, CheckCircle, LoaderCircle, Plus, Save, ShoppingCart, Trash2, Truck, X } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { apiRequest } from "../../authservice/api";
import { usePermissions } from "../../authservice/usePermissions";
import { blockedButtonClass, blockedButtonProps } from "../../authservice/permissions";
import { getActualStockValue } from "../../utils/uomConverter";
import {
  formatDateDDMMYYYY,
  normalizeDateInputDDMMYYYY,
  toIsoFromDDMMYYYY,
} from "../../utils/formatting";

const createEmptyItem = () => ({
  id: `${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
  productId: "",
  productName: "",
  manufacturer: "",
  receivedQuantity: "",
  price: "",
  returnedQuantity: "",
  searchText: "",
});

const formatCurrency = (value) =>
  `Rs. ${Number(value || 0).toLocaleString("en-PK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const normalizeName = (value = "") =>
  String(value)
    .toLowerCase()
    .normalize("NFKC")
    .replace(/\s+/g, "")
    .replace(/[^\p{L}\p{N}]/gu, "");

const getSaleQuantity = (item) =>
  Math.max(
    Number(item?.receivedQuantity || 0) - Number(item?.returnedQuantity || 0),
    0
  );

const getTotalPrice = (item) => getSaleQuantity(item) * Number(item?.price || 0);
const calculateItemsTotal = (itemsList) =>
  (Array.isArray(itemsList) ? itemsList : []).reduce(
    (sum, currentItem) => sum + getTotalPrice(currentItem),
    0
  );

const mapSupplyItems = (savedItems) =>
  Array.isArray(savedItems) && savedItems.length
    ? savedItems.map((item) => ({
        id: item?.id || createEmptyItem().id,
        productId: item?.productId || "",
        productName: item?.productName || "",
        manufacturer: item?.manufacturer || "",
        receivedQuantity: Number(item?.receivedQuantity || 0),
        price: Number(item?.price || 0),
        returnedQuantity: Number(item?.returnedQuantity || 0),
        searchText: item?.productName || "",
      }))
    : [createEmptyItem()];

export default function NewOutdoorSupplyPage() {
  const params = useParams();
  const router = useRouter();
  const redirectTimeoutRef = useRef(null);
  const { crud } = usePermissions();
  const { canCreate } = crud("PURCHASE");
  const supplyId = Array.isArray(params?.id)
    ? String(params.id[0] || "").trim()
    : String(params?.id || "").trim();
  const isEditMode = Boolean(supplyId);
  const canSubmit = isEditMode ? true : canCreate;
  const [suppliers, setSuppliers] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [supplierId, setSupplierId] = useState("");
  const [supplyDate, setSupplyDate] = useState(() => formatDateDDMMYYYY(new Date()));
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [items, setItems] = useState(() => [createEmptyItem()]);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ type: "", text: "" });
  const [processingSaleItemId, setProcessingSaleItemId] = useState("");
  const [isLoadingSupply, setIsLoadingSupply] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showCreateSaleSuccessModal, setShowCreateSaleSuccessModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [backendSupplyId, setBackendSupplyId] = useState(() => String(supplyId || "").trim());

  useEffect(() => {
    return () => {
      if (redirectTimeoutRef.current) {
        window.clearTimeout(redirectTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isEditMode) {
      setSupplierId("");
      setSupplyDate(formatDateDDMMYYYY(new Date()));
      setInvoiceNumber("");
      setItems([createEmptyItem()]);
      setErrors({});
      setMessage({ type: "", text: "" });
      setBackendSupplyId("");
      return;
    }
  }, [isEditMode]);

  useEffect(() => {
    const normalizeSupplierRecord = (supplier) => ({
      ...supplier,
      id: supplier?._id || supplier?.id || "",
      supplierName: supplier?.supplierName || supplier?.name || "",
      phoneNo: supplier?.phoneNo || supplier?.phone || "",
      gariNo: supplier?.gariNo || "",
      routeName: supplier?.routeName || "",
      monthlyPay: Number(supplier?.monthlyPay || 0),
      commission: Number(supplier?.commission || 0),
      address: supplier?.address || "",
      notes: supplier?.notes || "",
    });

    const loadSuppliers = async () => {
      try {
        const suppliersResponse = await apiRequest("/outdoor-supply-management/suppliers", {
          method: "GET",
          suppressErrorToast: true,
        });
        const supplierRows = Array.isArray(suppliersResponse?.data)
          ? suppliersResponse.data
          : Array.isArray(suppliersResponse)
            ? suppliersResponse
            : [];
        setSuppliers(supplierRows.map(normalizeSupplierRecord));
      } catch (error) {
        console.error("Failed to load outdoor suppliers:", error);
        setSuppliers([]);
      }
    };

    const loadEditData = async () => {
      if (!isEditMode || !supplyId) return;

      try {
        setIsLoadingSupply(true);
        setMessage({ type: "", text: "" });

        const supplyResponse = await apiRequest(`/outdoor-supply-management/${supplyId}`, {
          method: "GET",
          suppressErrorToast: true,
        });

        const supply = supplyResponse?.data || supplyResponse;
        if (!supply?._id && !supply?.id) {
          throw new Error("This outdoor supply record was not found.");
        }

        setBackendSupplyId(String(supply?._id || supply?.id || supplyId).trim());
        const resolvedSupplier =
          supply?.supplierId && typeof supply.supplierId === "object"
            ? normalizeSupplierRecord(supply.supplierId)
            : null;

        setSupplierId(
          String(
            resolvedSupplier?.id ||
              supply?.supplierId?._id ||
              supply?.supplierId?.id ||
              supply?.supplierId ||
              ""
          )
        );
        setSupplyDate(
          formatDateDDMMYYYY(supply?.supplyDate || supply?.createdAt || new Date())
        );
        setInvoiceNumber(String(supply?.invoiceNumber || ""));
        setItems(mapSupplyItems(supply?.items));
        setErrors({});
      } catch (error) {
        setMessage({
          type: "error",
          text: error?.message || "This outdoor supply record was not found.",
        });
      } finally {
        setIsLoadingSupply(false);
      }
    };

    loadSuppliers();
    loadEditData();
  }, [isEditMode, supplyId]);

  useEffect(() => {
    const mapProductsForDropdown = (products) =>
      Array.from(
        new Map(
          (products || [])
            .filter((product) => product?.name)
            .map((product) => [
              String(product.name).trim().toLowerCase(),
              {
                id: product._id || product.id || "",
                name: product.name,
                manufacturer: product.manufacturer || "",
                wholeSalePrice: Number(
                  product.wholeSalePrice ??
                    product.wholesalePrice ??
                    product.retailSalePrice ??
                    product.salePrice ??
                    product.price ??
                    product.purchasePrice ??
                    product.cost ??
                    0
                ),
              },
            ])
        ).values()
      );

    const fetchProducts = async () => {
      try {
        const response = await apiRequest("/products/ProductName", { method: "GET" });
        const primaryList = mapProductsForDropdown(response?.data || response);

        if (primaryList.length) {
          setProductsList(primaryList);
          return;
        }

        const fallbackResponse = await apiRequest("/products", { method: "GET" });
        setProductsList(mapProductsForDropdown(fallbackResponse?.data || fallbackResponse));
      } catch (error) {
        console.error("Failed to load products for outdoor supply:", error);
        setProductsList([]);
      }
    };

    fetchProducts();
  }, []);

  const selectedSupplier = useMemo(
    () => suppliers.find((supplier) => String(supplier.id) === String(supplierId)) || null,
    [supplierId, suppliers]
  );

  const totalBill = useMemo(
    () => calculateItemsTotal(items),
    [items]
  );

  const handleItemChange = (id, field, value) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id !== id
          ? item
          : {
              ...item,
              [field]: ["receivedQuantity", "returnedQuantity", "price"].includes(field)
                ? value === ""
                  ? ""
                  : Number(value)
                : value,
            }
      )
    );
    setErrors((prev) => ({ ...prev, [`${id}-${field}`]: "" }));
  };

  const handleProductSearchChange = (id, typedValue) => {
    const matchedProduct = productsList.find(
      (product) => product.name.toLowerCase() === typedValue.trim().toLowerCase()
    );

    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        if (!matchedProduct) {
          return {
            ...item,
            productId: "",
            productName: typedValue,
            searchText: typedValue,
          };
        }

        return {
          ...item,
          productId: matchedProduct.id,
          productName: matchedProduct.name,
          searchText: matchedProduct.name,
          manufacturer: matchedProduct.manufacturer || item.manufacturer,
          price:
            Number(item.price || 0) > 0
              ? Number(item.price || 0)
              : Number(matchedProduct.wholeSalePrice || 0),
        };
      })
    );
    setErrors((prev) => ({ ...prev, [`${id}-productName`]: "" }));
  };

  const handleAddItem = () => setItems((prev) => [...prev, createEmptyItem()]);

  const handleRemoveItem = (id) => {
    setItems((prev) => (prev.length > 1 ? prev.filter((item) => item.id !== id) : prev));
  };

  const handleCreateSale = async (item) => {
    const saleQuantity = getSaleQuantity(item);

    if (!supplierId) {
      setErrors((prev) => ({ ...prev, supplierId: "Outdoor supplier is required." }));
      setMessage({ type: "error", text: "Select an outdoor supplier before creating a sale." });
      return;
    }

    if (!toIsoFromDDMMYYYY(supplyDate)) {
      setErrors((prev) => ({ ...prev, supplyDate: "Supply date must be dd/mm/yyyy." }));
      setMessage({ type: "error", text: "Enter a valid supply date before creating a sale." });
      return;
    }

    if (!String(invoiceNumber || "").trim()) {
      setErrors((prev) => ({ ...prev, invoiceNumber: "Invoice number is required." }));
      setMessage({ type: "error", text: "Enter an invoice number before creating a sale." });
      return;
    }

    if (!String(item.productName || "").trim()) {
      setErrors((prev) => ({ ...prev, [`${item.id}-productName`]: "Product name is required." }));
      setMessage({ type: "error", text: "Select a product before creating a sale." });
      return;
    }

    if (!String(item.manufacturer || "").trim()) {
      setErrors((prev) => ({ ...prev, [`${item.id}-manufacturer`]: "Manufacturer is required." }));
      setMessage({ type: "error", text: "Enter manufacturer before creating a sale." });
      return;
    }

    if (!Number(item.receivedQuantity || 0)) {
      setErrors((prev) => ({ ...prev, [`${item.id}-receivedQuantity`]: "Received quantity is required." }));
      setMessage({ type: "error", text: "Enter received quantity before creating a sale." });
      return;
    }

    if (!Number(item.price || 0)) {
      setErrors((prev) => ({ ...prev, [`${item.id}-price`]: "Price is required." }));
      setMessage({ type: "error", text: "Enter price before creating a sale." });
      return;
    }

    if (saleQuantity < 1) return;

    try {
      setProcessingSaleItemId(item.id);
      setMessage({ type: "", text: "" });
      setShowCreateSaleSuccessModal(false);

      const productsResponse = await apiRequest("/products", {
        method: "GET",
        suppressErrorToast: true,
      });
      const products = Array.isArray(productsResponse?.data)
        ? productsResponse.data
        : Array.isArray(productsResponse)
          ? productsResponse
          : [];
      const requestedProductId = String(item?.productId || "").trim();
      const requestedProductNameKey = normalizeName(item?.productName || "");
      const matchingProducts = products.filter((product) => {
        const currentProductId = String(product?._id || product?.id || "").trim();
        if (requestedProductId && currentProductId) {
          return currentProductId === requestedProductId;
        }
        return normalizeName(product?.name || "") === requestedProductNameKey;
      });
      const availableStock = matchingProducts.reduce(
        (sum, product) => sum + getActualStockValue(product),
        0
      );

      if (availableStock < saleQuantity) {
        setMessage({
          type: "error",
          text: `Insufficient stock for ${item.productName || "this product"} (requested ${saleQuantity}, available ${Math.floor(availableStock)}).`,
        });
        return;
      }

      const payload = {
        invoiceNo: String(invoiceNumber || "").trim(),
        products: [
          {
            productId: item?.productId || undefined,
            name: String(item?.productName || "").trim(),
            manufacturer: String(item?.manufacturer || "").trim(),
            quantity: saleQuantity,
            price: Number(item?.price || 0),
            totalPrice: getTotalPrice(item),
            returnedQuantity: Number(item?.returnedQuantity || 0),
            receivedQuantity: Number(item?.receivedQuantity || 0),
          },
        ],
        subtotal: getTotalPrice(item),
        discount: 0,
        totalAmount: getTotalPrice(item),
        paidAmount: getTotalPrice(item),
        returnAmount: 0,
        customerName: String(selectedSupplier?.supplierName || "Outdoor Supply"),
        paymentMethod: "Cash",
        paymentStatus: "Paid",
      };

      const response = await apiRequest("/sales/createSale", {
        method: "POST",
        data: payload,
      });

      if (response?.success === false) {
        setMessage({
          type: "error",
          text: response?.message || "Failed to create sale for this item.",
        });
        return;
      }

      const normalizedReceivedQuantity = Number(item?.returnedQuantity || 0);
      const nextItems = items.map((currentItem) =>
        currentItem.id !== item.id
          ? currentItem
          : {
              ...currentItem,
              receivedQuantity: normalizedReceivedQuantity,
              returnedQuantity: 0,
            }
      );

      setItems(nextItems);
      setShowCreateSaleSuccessModal(true);
    } catch (error) {
      console.error("Failed to create sale for outdoor supply item:", error);
      setMessage({
        type: "error",
        text:
          error?.response?.data?.message ||
          error?.message ||
          "Failed to create sale for this item.",
      });
    } finally {
      setProcessingSaleItemId("");
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!supplierId) nextErrors.supplierId = "Outdoor supplier is required.";
    if (!toIsoFromDDMMYYYY(supplyDate)) nextErrors.supplyDate = "Supply date must be dd/mm/yyyy.";
    if (!invoiceNumber.trim()) nextErrors.invoiceNumber = "Invoice number is required.";

    items.forEach((item) => {
      if (!String(item.productName || "").trim()) nextErrors[`${item.id}-productName`] = "Product name is required.";
      if (!String(item.manufacturer || "").trim()) nextErrors[`${item.id}-manufacturer`] = "Manufacturer is required.";
      if (!Number(item.receivedQuantity || 0)) nextErrors[`${item.id}-receivedQuantity`] = "Received quantity is required.";
      if (Number(item.returnedQuantity || 0) < 0) nextErrors[`${item.id}-returnedQuantity`] = "Returned quantity cannot be negative.";
      if (Number(item.returnedQuantity || 0) > Number(item.receivedQuantity || 0)) {
        nextErrors[`${item.id}-returnedQuantity`] = "Returned quantity cannot exceed received quantity.";
      }
      if (!Number(item.price || 0)) nextErrors[`${item.id}-price`] = "Price is required.";
      if (getSaleQuantity(item) <= 0) nextErrors[`${item.id}-returnedQuantity`] = "Sale quantity must be greater than zero.";
    });

    if (totalBill <= 0) nextErrors.totalBill = "Total bill must be greater than zero.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    const normalizedItems = items.map((item) => ({
      id: item.id,
      productId: item.productId,
      productName: String(item.productName || "").trim(),
      manufacturer: String(item.manufacturer || "").trim(),
      receivedQuantity: Number(item.receivedQuantity || 0),
      returnedQuantity: Number(item.returnedQuantity || 0),
      saleQuantity: getSaleQuantity(item),
      price: Number(item.price || 0),
      totalPrice: getTotalPrice(item),
    }));

    const payload = {
      supplierId,
      supplierName: selectedSupplier?.supplierName || "",
      routeName: selectedSupplier?.routeName || "",
      invoiceNumber: invoiceNumber.trim(),
      supplyDate: toIsoFromDDMMYYYY(supplyDate),
      items: normalizedItems,
      totalBill,
    };

    try {
      setIsSubmitting(true);
      setShowErrorModal(false);
      setShowSuccessModal(false);
      setModalMessage("");

      if (isEditMode) {
        const updateTargetId = backendSupplyId;
        if (!updateTargetId) {
          throw new Error("Outdoor supply is missing a valid database ID");
        }

        await apiRequest(`/outdoor-supply-management/updateOutdoorSupply/${updateTargetId}`, {
          method: "PUT",
          data: payload,
        });

        setMessage({
          type: "success",
          text: "Outdoor Supply has been successfully updated",
        });
        setModalMessage("Outdoor Supply has been successfully updated");
        setShowSuccessModal(true);
      } else {
        await apiRequest("/outdoor-supply-management/createOutdoorSupply", {
          method: "POST",
          data: payload,
        });
        setMessage({
          type: "success",
          text: "Outdoor supply saved successfully.",
        });

        if (redirectTimeoutRef.current) {
          window.clearTimeout(redirectTimeoutRef.current);
        }

        redirectTimeoutRef.current = window.setTimeout(() => {
          router.push(
            `/AdminDashboard/outdoor-supply?success=1&message=${encodeURIComponent(
              "Outdoor supply saved successfully."
            )}`
          );
        }, 900);
      }
    } catch (error) {
      const nextMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to update outdoor supply.";

      setMessage({ type: "error", text: nextMessage });
      setModalMessage(nextMessage);
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    router.push(
      isEditMode
        ? "/AdminDashboard/outdoor-supply"
        : `/AdminDashboard/outdoor-supply?success=1&message=${encodeURIComponent(modalMessage)}`
    );
  };

  const handleCreateSaleSuccessModalClose = () => {
    setShowCreateSaleSuccessModal(false);
  };

  if (isLoadingSupply) {
    return (
      <div className="flex min-h-[420px] items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-3 text-slate-600">
          <LoaderCircle className="h-5 w-5 animate-spin" />
          Loading outdoor supply...
        </div>
      </div>
    );
  }

  return (
    <>
    <div className="mx-auto w-full max-w-7xl space-y-5 pb-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <Link
            href="/AdminDashboard/outdoor-supply"
            className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Outdoor Supply
          </Link>
          <h2 className="text-2xl font-bold text-slate-900">
            {isEditMode ? "Edit Outdoor Supply" : "Add New Outdoor Supply"}
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            {isEditMode
              ? "Update the saved outdoor supply bill and its item details."
              : "Add item rows like purchase entry and save the full outdoor supply bill."}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Outdoor Supplier *</label>
              <select
                value={supplierId}
                onChange={(e) => {
                  setSupplierId(e.target.value);
                  setErrors((prev) => ({ ...prev, supplierId: "" }));
                }}
                className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none transition focus:border-blue-500"
              >
                <option value="">Select supplier</option>
                {suppliers.map((supplier) => (
                  <option key={supplier.id} value={supplier.id}>
                    {supplier.supplierName}
                  </option>
                ))}
              </select>
              {errors.supplierId ? <p className="text-xs text-rose-600">{errors.supplierId}</p> : null}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Supply Date *</label>
              <input
                value={supplyDate}
                onChange={(e) => {
                  setSupplyDate(normalizeDateInputDDMMYYYY(e.target.value));
                  setErrors((prev) => ({ ...prev, supplyDate: "" }));
                }}
                maxLength={10}
                placeholder="dd/mm/yyyy"
                className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none transition focus:border-blue-500"
              />
              {errors.supplyDate ? <p className="text-xs text-rose-600">{errors.supplyDate}</p> : null}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Invoice Number *</label>
              <input
                value={invoiceNumber}
                onChange={(e) => {
                  setInvoiceNumber(e.target.value);
                  setErrors((prev) => ({ ...prev, invoiceNumber: "" }));
                }}
                placeholder="Enter invoice number"
                className="h-11 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none transition focus:border-blue-500"
              />
              {errors.invoiceNumber ? <p className="text-xs text-rose-600">{errors.invoiceNumber}</p> : null}
            </div>
          </div>

          {selectedSupplier ? (
            <div className="mt-4 rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3 text-sm text-sky-700">
              Route Name: <span className="font-semibold">{selectedSupplier.routeName || "-"}</span>
              {"  "} | Gari No.: <span className="font-semibold">{selectedSupplier.gariNo || "-"}</span>
              {"  "} | Monthly Pay: <span className="font-semibold">{formatCurrency(selectedSupplier.monthlyPay)}</span>
            </div>
          ) : null}
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="mb-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Outdoor Supply Items</h3>
              <p className="text-sm text-slate-500">
                Sale Quantity is auto calculated as Received Quantity minus Returned Quantity.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-[1.9fr_1.2fr_0.85fr_1fr_0.85fr_0.85fr_1fr_auto] xl:items-start">
                  <div className="space-y-1">
                    <label className="block min-h-[2rem] text-[11px] font-semibold uppercase leading-4 tracking-wide text-slate-500">Product Name</label>
                    <input
                      list={`outdoor-product-${item.id}`}
                      value={item.searchText || item.productName}
                      onChange={(e) => handleProductSearchChange(item.id, e.target.value)}
                      placeholder="Select product"
                      className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-blue-500"
                    />
                    <datalist id={`outdoor-product-${item.id}`}>
                      {productsList.map((product) => (
                        <option key={product.id || product.name} value={product.name} />
                      ))}
                    </datalist>
                    {errors[`${item.id}-productName`] ? <p className="text-xs text-rose-600">{errors[`${item.id}-productName`]}</p> : null}
                  </div>

                  <div className="space-y-1">
                    <label className="block min-h-[2rem] text-[11px] font-semibold uppercase leading-4 tracking-wide text-slate-500">Manufacturer</label>
                    <input
                      value={item.manufacturer}
                      onChange={(e) => handleItemChange(item.id, "manufacturer", e.target.value)}
                      placeholder="Manufacturer"
                      className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-blue-500"
                    />
                    {errors[`${item.id}-manufacturer`] ? <p className="text-xs text-rose-600">{errors[`${item.id}-manufacturer`]}</p> : null}
                  </div>

                  <div className="space-y-1">
                    <label className="block min-h-[2rem] text-[11px] font-semibold uppercase leading-4 tracking-wide text-slate-500">Received Qty</label>
                    <input
                      type="number"
                      min="0"
                      value={item.receivedQuantity}
                      onChange={(e) => handleItemChange(item.id, "receivedQuantity", e.target.value)}
                      placeholder="0"
                      className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-blue-500"
                    />
                    {errors[`${item.id}-receivedQuantity`] ? <p className="text-xs text-rose-600">{errors[`${item.id}-receivedQuantity`]}</p> : null}
                  </div>

                  <div className="space-y-1">
                    <label className="block min-h-[2rem] text-[11px] font-semibold uppercase leading-4 tracking-wide text-slate-500">Whole Sale Price</label>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.price}
                      onChange={(e) => handleItemChange(item.id, "price", e.target.value)}
                      placeholder="0.00"
                      className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-blue-500"
                    />
                    {errors[`${item.id}-price`] ? <p className="text-xs text-rose-600">{errors[`${item.id}-price`]}</p> : null}
                  </div>

                  <div className="space-y-1">
                    <label className="block min-h-[2rem] text-[11px] font-semibold uppercase leading-4 tracking-wide text-slate-500">Returned Qty</label>
                    <input
                      type="number"
                      min="0"
                      value={item.returnedQuantity}
                      onChange={(e) => handleItemChange(item.id, "returnedQuantity", e.target.value)}
                      placeholder="0"
                      className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-blue-500"
                    />
                    {errors[`${item.id}-returnedQuantity`] ? <p className="text-xs text-rose-600">{errors[`${item.id}-returnedQuantity`]}</p> : null}
                  </div>

                  <div className="space-y-1">
                    <label className="block min-h-[2rem] text-[11px] font-semibold uppercase leading-4 tracking-wide text-slate-500">Sale Quantity</label>
                    <div className="flex h-10 items-center rounded-xl border border-slate-200 bg-slate-100 px-3 text-sm font-semibold text-slate-700">
                      {getSaleQuantity(item)}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block min-h-[2rem] text-[11px] font-semibold uppercase leading-4 tracking-wide text-slate-500">Total Price</label>
                    <div className="flex h-10 items-center rounded-xl border border-slate-200 bg-slate-100 px-3 text-sm font-semibold text-slate-900">
                      {formatCurrency(getTotalPrice(item))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block min-h-[2rem] text-[11px] font-semibold uppercase leading-4 tracking-wide text-slate-500">Action</label>
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleRemoveItem(item.id)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-rose-200 bg-white text-rose-600 transition hover:bg-rose-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                      {getSaleQuantity(item) >= 1 ? (
                        <button
                          type="button"
                          onClick={() => handleCreateSale(item)}
                          disabled={processingSaleItemId === item.id}
                          className={`inline-flex h-10 items-center gap-2 rounded-xl bg-blue-600 px-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300 ${blockedButtonClass}`}
                          {...blockedButtonProps(canSubmit)}
                        >
                          <ShoppingCart className="h-4 w-4" />
                          {processingSaleItemId === item.id ? "Creating..." : "Create Sale"}
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={handleAddItem}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <Plus className="h-4 w-4" />
              Add Item
            </button>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Calculated Total Bill</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{formatCurrency(totalBill)}</p>
              {errors.totalBill ? <p className="mt-2 text-xs text-rose-600">{errors.totalBill}</p> : null}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/AdminDashboard/outdoor-supply"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 ${blockedButtonClass}`}
                {...blockedButtonProps(canSubmit)}
              >
                <Truck className="h-4 w-4" />
                <Save className="h-4 w-4" />
                {isSubmitting
                  ? (isEditMode ? "Updating..." : "Saving...")
                  : (isEditMode ? "Update Outdoor Supply" : "Save Outdoor Supply")}
              </button>
            </div>
          </div>

          {message.text ? (
            <div
              className={`mt-4 rounded-2xl border px-4 py-3 text-sm ${
                message.type === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-rose-200 bg-rose-50 text-rose-700"
              }`}
            >
              {message.text}
            </div>
          ) : null}
        </section>
      </form>
    </div>
    {showSuccessModal ? (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
        <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-semibold text-slate-900">Success</h3>
              <p className="mt-1 text-sm text-slate-600">{modalMessage}</p>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleSuccessModalClose}
              className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    ) : null}
    {showCreateSaleSuccessModal ? (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
        <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-base font-semibold text-slate-900">Success</h3>
              <p className="mt-1 text-sm text-slate-600">Create sale successfully.</p>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={handleCreateSaleSuccessModalClose}
              className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    ) : null}
    {showErrorModal ? (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
        <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600">
              <AlertCircle className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Something went wrong</h3>
                  <p className="mt-1 text-sm text-slate-600">{modalMessage}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowErrorModal(false)}
                  className="text-slate-400 transition hover:text-slate-600"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={() => setShowErrorModal(false)}
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    ) : null}
    </>
  );
}
