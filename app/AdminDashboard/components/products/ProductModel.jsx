"use client";

import React, { useEffect, useMemo, useState } from "react";
import { X, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";
import { apiRequest } from "./../../authservice/api";
import BulkStockGrid from "../inventory/BulkStockGrid";
import { convertToBaseUnit } from "../../utils/uomConverter";

const fieldClass =
  "h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100";
const labelClass = "mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-600";
const normalizeProductKey = (value) => String(value || "").trim().toLowerCase();

const ProductModal = ({ onClose }) => {
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [draftPurchases, setDraftPurchases] = useState([]);
  const [gridRows, setGridRows] = useState([]);

  const [fetchingBill, setFetchingBill] = useState(false);
  const [savingAll, setSavingAll] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("Bulk stock saved successfully.");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [rowErrors, setRowErrors] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await apiRequest("/products", { method: "GET" });
        setAllProducts(res?.data || []);
      } catch {
        setAllProducts([]);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchDraftPurchases = async () => {
      try {
        const res = await apiRequest("/purchases", { method: "GET" });
        const purchases = Array.isArray(res?.data) ? res.data : [];
        const drafts = purchases.filter(
          (p) => String(p?.purchaseStatus || "").toLowerCase() === "draft"
        );
        setDraftPurchases(drafts);
      } catch {
        setDraftPurchases([]);
      }
    };
    fetchDraftPurchases();

    // Refresh draft purchases every 5 seconds
    const intervalId = setInterval(fetchDraftPurchases, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const productsByName = useMemo(() => {
    const map = new Map();
    for (const p of allProducts) {
      const key = normalizeProductKey(p?.name);
      if (key && !map.has(key)) map.set(key, p);
    }
    return map;
  }, [allProducts]);

  const mergeBillItems = (purchase = {}) => {
    const purchaseItems = Array.isArray(purchase?.products) ? purchase.products : [];
    const purchaseDate = purchase?.purchaseDate || purchase?.date || "";
    const isDraftPurchase =
      String(purchase?.purchaseStatus || "").trim().toLowerCase() === "draft";

    return purchaseItems.map((item, index) => {
      const nameKey = normalizeProductKey(item?.name);
      const masterById = allProducts.find((p) => String(p?._id) === String(item?.productId || ""));
      const masterByName = isDraftPurchase ? null : productsByName.get(nameKey);
      const masterProduct = masterById || masterByName || {};

      const purchaseQty = Number(item?.quantity || 0);
      const uom = masterProduct?.unit || masterProduct?.baseUnit || "unit";
      const manufacturer = item?.manufacturer || masterProduct?.manufacturer || "";

      return {
        rowId: `${item?.productId || item?.name || "row"}-${index}`,
        productId: String(item?.productId || masterProduct?._id || ""),
        name: item?.name || "",
        company: manufacturer,
        purchaseQty,
        purchasePrice: Number((item?.purchasePrice ?? item?.price) || 0),
        retailSalePrice: Number(
          item?.retailSalePrice ??
            item?.salePrice ??
            item?.price ??
            (isDraftPurchase ? undefined : masterProduct?.retailSalePrice) ??
            (isDraftPurchase ? undefined : masterProduct?.salePrice) ??
            (isDraftPurchase ? undefined : masterProduct?.price) ??
            0
        ),
        wholeSalePrice: Number(
          item?.wholeSalePrice ??
            (isDraftPurchase ? undefined : masterProduct?.wholeSalePrice) ??
            0
        ),
        discountAllowed: Boolean(masterProduct?.discountAllowed || false),
        maxAllowedDiscount: Number(masterProduct?.maxAllowedDiscount || 0),
        uom,
        unit: masterProduct?.unit || uom,
        baseUnit: masterProduct?.baseUnit || masterProduct?.unit || "unit",
        uomLevels: Array.isArray(masterProduct?.uomLevels) ? masterProduct.uomLevels : [],
        category: masterProduct?.category || "Food",
        shelf: Number(masterProduct?.shelf || 0),
        manufacturer,
        stockQty: convertToBaseUnit(purchaseQty, uom, masterProduct),
        date: purchaseDate || masterProduct?.date || masterProduct?.createdAt || "",
      };
    });
  };

  const fetchBillProducts = async () => {
    if (!invoiceNumber.trim()) return;

    try {
      setFetchingBill(true);
      setRowErrors({});
      const normalizedInvoice = String(invoiceNumber).trim();
      
      // Fetch all purchases to check status
      const res = await apiRequest("/purchases", { method: "GET" });
      const allPurchases = Array.isArray(res?.data) ? res.data : [];
      
      // Check if invoice exists and get its current status
      const purchase = allPurchases.find((p) => String(p?.invoiceNumber) === normalizedInvoice) || null;

      if (!purchase) {
        setGridRows([]);
        setShowError(true);
        setErrorMessage("Invoice not found.");
        return;
      }

      // Check if purchase is already completed
      if (String(purchase?.purchaseStatus || "").toLowerCase() === "completed") {
        setGridRows([]);
        setShowError(true);
        setErrorMessage("Already products are saved from this invoice. Cannot reuse.");
        return;
      }

      // Check if it's draft
      if (String(purchase?.purchaseStatus || "").toLowerCase() !== "draft") {
        setGridRows([]);
        setShowError(true);
        setErrorMessage("This purchase bill is not in Draft status.");
        return;
      }

      if (!purchase?.products?.length) {
        setGridRows([]);
        setShowError(true);
        setErrorMessage("Draft invoice not found or has no products.");
        return;
      }

      // Update draft purchases list
      const drafts = allPurchases.filter((p) => String(p?.purchaseStatus || "").toLowerCase() === "draft");
      setDraftPurchases(drafts);

      const mergedRows = mergeBillItems(purchase);
      setGridRows(mergedRows);
    } catch {
      setGridRows([]);
      setShowError(true);
      setErrorMessage("Failed to fetch purchase bill.");
    } finally {
      setFetchingBill(false);
    }
  };

  const onInvoiceKeyDown = async (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    await fetchBillProducts();
  };

  const handleCellChange = (rowIndex, field, value) => {
    setGridRows((prev) =>
      prev.map((row, idx) => {
        if (idx !== rowIndex) return row;

        const next = { ...row, [field]: value };
        if (field === "discountAllowed" && !value) {
          next.maxAllowedDiscount = 0;
        }
        const qty = Number(next.purchaseQty || 0);
        next.stockQty = convertToBaseUnit(qty, next.uom, next);
        return next;
      })
    );

    setRowErrors((prev) => {
      const copy = { ...prev };
      delete copy[rowIndex];
      return copy;
    });
  };

  const validateRows = () => {
    const nextErrors = {};

    gridRows.forEach((row, idx) => {
      const errs = [];
      if (!row.name) errs.push("Product name missing");
      if (!Number.isFinite(Number(row.purchaseQty)) || Number(row.purchaseQty) <= 0) {
        errs.push("Purchase Qty must be greater than 0");
      }
      if (!Number.isFinite(Number(row.purchasePrice)) || Number(row.purchasePrice) < 0) {
        errs.push("Purchase Price is invalid");
      }
      if (!Number.isFinite(Number(row.retailSalePrice)) || Number(row.retailSalePrice) < 0) {
        errs.push("Retail Sale Price is invalid");
      }
      if (!Number.isFinite(Number(row.wholeSalePrice)) || Number(row.wholeSalePrice) < 0) {
        errs.push("Whole Sale Price is invalid");
      }
      if (row.discountAllowed) {
        const maxDiscount = Number(row.maxAllowedDiscount);
        if (!Number.isFinite(maxDiscount) || maxDiscount < 0 || maxDiscount > 100) {
          errs.push("Max Discount must be between 0 and 100");
        }
      }
      if (errs.length) nextErrors[idx] = errs.join(", ");
    });

    setRowErrors(nextErrors);
    return nextErrors;
  };

  const syncEditedPricesToProducts = async (rows) => {
    const productsRes = await apiRequest("/products", { method: "GET" });
    const latestProducts = Array.isArray(productsRes?.data) ? productsRes.data : [];

    setAllProducts(latestProducts);

    const productsById = new Map(
      latestProducts
        .filter((product) => product?._id)
        .map((product) => [String(product._id), product])
    );
    const latestProductsByName = new Map();

    latestProducts.forEach((product) => {
      const key = normalizeProductKey(product?.name);
      if (key && !latestProductsByName.has(key)) {
        latestProductsByName.set(key, product);
      }
    });

    await Promise.all(
      rows.map(async (row) => {
        const matchedProduct =
          productsById.get(String(row?.productId || "")) ||
          latestProductsByName.get(normalizeProductKey(row?.name));

        if (!matchedProduct?._id) return;

        const discountAllowed =
          typeof row?.discountAllowed === "boolean"
            ? row.discountAllowed
            : Boolean(matchedProduct?.discountAllowed);

        await apiRequest(`/products/updateProduct/${matchedProduct._id}`, {
          method: "PUT",
          data: {
            ...matchedProduct,
            name: row?.name || matchedProduct?.name || "",
            manufacturer:
              row?.manufacturer ||
              row?.company ||
              matchedProduct?.manufacturer ||
              "",
            category: row?.category || matchedProduct?.category || "Food",
            shelf: Number(row?.shelf ?? matchedProduct?.shelf ?? 0),
            purchasePrice: Number(
              row?.purchasePrice ??
                matchedProduct?.purchasePrice ??
                matchedProduct?.cost ??
                0
            ),
            retailSalePrice: Number(row?.retailSalePrice || 0),
            wholeSalePrice: Number(row?.wholeSalePrice || 0),
            stock: Number(matchedProduct?.stock ?? 0),
            discountAllowed,
            maxAllowedDiscount: discountAllowed
              ? Number(row?.maxAllowedDiscount ?? matchedProduct?.maxAllowedDiscount ?? 0)
              : 0,
            unit: row?.unit || matchedProduct?.unit || row?.uom || "unit",
            baseUnit:
              row?.baseUnit ||
              matchedProduct?.baseUnit ||
              row?.unit ||
              row?.uom ||
              "unit",
            uomLevels: Array.isArray(row?.uomLevels)
              ? row.uomLevels
              : Array.isArray(matchedProduct?.uomLevels)
                ? matchedProduct.uomLevels
                : [],
          },
        });
      })
    );
  };

  const handleSaveAll = async () => {
    if (!gridRows.length) {
      setShowError(true);
      setErrorMessage("Please load a purchase bill first.");
      return;
    }

    const nextErrors = validateRows();
    if (Object.keys(nextErrors).length > 0) {
      setShowError(true);
      const firstError = Object.entries(nextErrors)[0];
      setErrorMessage(
        firstError
          ? `Row ${Number(firstError[0]) + 1}: ${firstError[1]}`
          : "Please fix validation errors in grid rows."
      );
      return;
    }

    try {
      setSavingAll(true);
      const payload = {
        billNo: String(invoiceNumber).trim(),
        items: gridRows.map((row) => ({
          name: row.name,
          manufacturer: row.manufacturer,
          category: row.category || "Food",
          shelf: Number(row.shelf || 0),
          purchaseQty: Number(row.purchaseQty || 0),
          purchasePrice: Number(row.purchasePrice || 0),
          retailSalePrice: Number(row.retailSalePrice || 0),
          wholeSalePrice: Number(row.wholeSalePrice || 0),
          discountAllowed: Boolean(row.discountAllowed),
          maxAllowedDiscount: row.discountAllowed
            ? Number(row.maxAllowedDiscount || 0)
            : 0,
          uom: row.uom || row.unit || "unit",
          unit: row.unit || row.uom || "unit",
          baseUnit: row.baseUnit || row.unit || "unit",
          uomLevels: Array.isArray(row.uomLevels) ? row.uomLevels : [],
          stockQty: Number(row.stockQty || 0),
          date: row.date || "",
        })),
      };

      const response = await apiRequest("/inventory/bulk-stock", { method: "POST", data: payload });

      // After successful save, update the purchase status to "Completed"
      if (response?.success !== false) {
        await syncEditedPricesToProducts(gridRows);
        try {
          // Fetch all purchases to find the one we just used
          const purchasesRes = await apiRequest("/purchases", { method: "GET" });
          const allPurchases = Array.isArray(purchasesRes?.data) ? purchasesRes.data : [];
          const purchase = allPurchases.find((p) => String(p?.invoiceNumber) === String(invoiceNumber).trim());

          if (purchase?._id) {
            // Update the purchase status to Completed
            await apiRequest(`/purchases/updatePurchase/${purchase._id}`, {
              method: "PUT",
              data: {
                supplier: purchase.supplier,
                purchaseDate: purchase.purchaseDate,
                invoiceNumber: purchase.invoiceNumber,
                totalAmount: purchase.totalAmount,
                taxAmount: purchase.taxAmount,
                products: purchase.products || [],
                purchaseStatus: "Completed",
              },
            });
          }
        } catch (err) {
          console.error("Failed to update purchase status:", err);
          // Don't fail the whole operation if status update fails
        }

        // Refresh the purchases list to exclude completed ones
        try {
          const res = await apiRequest("/purchases", { method: "GET" });
          const purchases = Array.isArray(res?.data) ? res.data : [];
          const drafts = purchases.filter((p) => String(p?.purchaseStatus || "").toLowerCase() === "draft");
          setDraftPurchases(drafts);
        } catch {
          setDraftPurchases([]);
        }
      }

      setSuccessMessage("Bulk stock saved and purchase bill marked as Completed.");
      setShowSuccess(true);
      setInvoiceNumber("");
      setGridRows([]);
      setTimeout(() => {
        setShowSuccess(false);
        onClose?.();
      }, 1400);
    } catch (err) {
      setShowError(true);
      setErrorMessage(err?.message || "Failed to save bulk stock.");
    } finally {
      setSavingAll(false);
    }
  };

  return (
    <>
      {showSuccess && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
          <div className="rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-xl">
            <CheckCircle className="mx-auto mb-2 h-12 w-12 text-green-600" />
            <h2 className="text-lg font-bold text-green-700">Success</h2>
            <p className="text-slate-600">{successMessage}</p>
          </div>
        </div>
      )}

      {showError && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
          <div className="rounded-2xl border border-red-100 bg-white p-6 text-center shadow-xl">
            <AlertTriangle className="mx-auto mb-2 h-12 w-12 text-red-600" />
            <h2 className="text-lg font-bold text-red-700">Error</h2>
            <p className="text-slate-600">{errorMessage}</p>
            <button
              onClick={() => setShowError(false)}
              className="mt-4 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-slate-900/50 p-2 backdrop-blur-sm sm:p-4">
        <div className="max-h-[92vh] w-full max-w-[96vw] overflow-y-auto rounded-2xl border border-white/80 bg-white shadow-2xl sm:max-w-5xl">
          <div className="flex items-center justify-between gap-3 rounded-t-2xl bg-gradient-to-r from-sky-600 to-cyan-600 p-4 text-white sm:p-6">
            <h2 className="min-w-0 text-xl font-bold sm:text-2xl">Bulk Stock From Purchase Bill</h2>
            <button type="button" onClick={onClose} className="rounded-lg p-1 transition hover:bg-white/20">
              <X />
            </button>
          </div>

          <div className="space-y-4 p-4 sm:p-6">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto]">
              <div>
                <label className={labelClass}>Purchase Bill Number</label>
                <input
                  type="text"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  onKeyDown={onInvoiceKeyDown}
                  list="draft-bill-suggestions"
                  placeholder="Enter bill number and press Enter"
                  className={fieldClass}
                />
                <datalist id="draft-bill-suggestions">
                  {draftPurchases.map((purchase) => (
                    <option
                      key={purchase?._id || purchase?.invoiceNumber}
                      value={String(purchase?.invoiceNumber || "")}
                    >
                      {purchase?.supplier ? `${purchase.invoiceNumber} - ${purchase.supplier}` : ""}
                    </option>
                  ))}
                </datalist>
              </div>
              <button
                type="button"
                onClick={fetchBillProducts}
                disabled={fetchingBill}
                className={`h-10 w-full rounded-xl px-4 text-sm font-semibold text-white transition md:mt-6 md:w-auto ${
                  fetchingBill
                    ? "bg-slate-400"
                    : "bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700"
                }`}
              >
                {fetchingBill ? "Loading..." : "Load Bill"}
              </button>
            </div>

            {fetchingBill && (
              <div className="inline-flex items-center gap-2 rounded-lg border border-sky-100 bg-sky-50 px-3 py-2 text-sm text-sky-700">
                <Loader2 className="h-4 w-4 animate-spin" />
                Fetching bill items...
              </div>
            )}

            <BulkStockGrid rows={gridRows} onCellChange={handleCellChange} />

            {Object.keys(rowErrors).length > 0 && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700">
                {Object.entries(rowErrors).map(([idx, message]) => (
                  <p key={idx}>
                    Row {Number(idx) + 1}: {message}
                  </p>
                ))}
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="h-10 w-full rounded-xl border border-slate-300 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveAll}
                disabled={savingAll || fetchingBill}
                className={`h-10 w-full rounded-xl px-4 text-sm font-semibold text-white transition sm:w-auto ${
                  savingAll || fetchingBill
                    ? "bg-slate-400"
                    : "bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700"
                }`}
              >
                {savingAll ? "Saving..." : "Save All"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
