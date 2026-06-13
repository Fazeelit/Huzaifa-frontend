"use client";

import { Noto_Nastaliq_Urdu } from "next/font/google";
import { useMemo, useRef, useEffect, useState } from "react";
import { ChevronDown, Minus, Plus, Search, ShoppingCart, Trash2 } from "lucide-react";
import { apiRequest } from "./../../authservice/api";

const urduFormFont = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const urduNameStyle = {
  fontFamily: `"Urdu Noori Nastaliq", "Noori Nastaliq", "Jameel Noori Nastaleeq", ${urduFormFont.style.fontFamily}, serif`,
};

const getActualStock = (product) => {
  const directActualStock = Number(product?.actualStock);
  if (Number.isFinite(directActualStock)) return directActualStock;
  return Number(product?.stock) || 0;
};

const getPackSize = (item) => {
  const packSize = Number(item?.packSize);
  return Number.isFinite(packSize) && packSize > 0 ? packSize : 1;
};

const getQuantityMode = (item) => (item?.quantityMode === "pack" ? "pack" : "unit");

const getSelectedSalePrice = (item, quantityMode = getQuantityMode(item)) => {
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

const getDisplayQty = (item) => {
  const quantity = Number(item?.displayQty ?? item?.qty ?? 0);
  return Number.isFinite(quantity) && quantity > 0 ? quantity : 1;
};

export default function ProductsCard({
  products = [],
  cart = [],
  addToCart,
  increaseQty,
  decreaseQty,
  updateQty,
  updateQuantityMode,
  updateLineAmount,
  updateFreeQty,
  removeItem,
}) {
  const [selectedProductKey, setSelectedProductKey] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [highlightedProductIndex, setHighlightedProductIndex] = useState(-1);
  const [amountDrafts, setAmountDrafts] = useState({});
  const productSearchRef = useRef(null);
  const editingAmountKeyRef = useRef(null);

  const processedProducts = useMemo(() => {
    const map = new Map();

    products.forEach((product) => {
      const nameKey = product.name?.trim().toLowerCase();
      if (!nameKey) return;

      if (map.has(nameKey)) {
        const existing = map.get(nameKey);
        map.set(nameKey, {
          ...existing,
          stock: existing.stock + (Number(product.stock) || 0),
          availableTabs: existing.availableTabs + getActualStock(product),
        });
        return;
      }

      map.set(nameKey, {
        ...product,
        stock: Number(product.stock) || 0,
        availableTabs: getActualStock(product),
        _uniqueKey: nameKey,
      });
    });

    return Array.from(map.values());
  }, [products]);

  const unitSalesByProduct = useMemo(() => {
    const salesMap = new Map();

    cart.forEach((item) => {
      const productKey = String(item?._id || item?.id || item?.name || "").trim().toLowerCase();
      if (!productKey) return;
      const packSize = getPackSize(item);
      const freeQty = Math.max(Math.floor(Number(item?.freeQty) || 0), 0);
      const freeUnits = getQuantityMode(item) === "pack" ? freeQty * packSize : freeQty;
      salesMap.set(productKey, (salesMap.get(productKey) || 0) + (Number(item?.qty) || 0) + freeUnits);
    });

    return salesMap;
  }, [cart]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    return processedProducts.filter((product) => {
      if ((Number(product.stock) || 0) < 1) return false;
      if (!normalizedSearch) return true;
      return product.name?.toLowerCase().includes(normalizedSearch);
    });
  }, [processedProducts, searchTerm]);

  useEffect(() => {
    if (!showProductDropdown || filteredProducts.length === 0) {
      setHighlightedProductIndex(-1);
      return;
    }
    setHighlightedProductIndex(0);
  }, [showProductDropdown, filteredProducts]);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!productSearchRef.current?.contains(event.target)) {
        setShowProductDropdown(false);
        setHighlightedProductIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    return () => document.removeEventListener("mousedown", handleDocumentClick);
  }, []);

  useEffect(() => {
    setAmountDrafts((prev) => {
      const next = { ...prev };

      cart.forEach((item) => {
        if (editingAmountKeyRef.current === item.key) return;

        const quantityMode = getQuantityMode(item);
        const salePrice = getSelectedSalePrice(item, quantityMode);
        const displayQty = getDisplayQty(item);
        next[item.key] = String(Number((salePrice * displayQty).toFixed(2)));
      });

      Object.keys(next).forEach((key) => {
        if (!cart.some((item) => item.key === key)) delete next[key];
      });

      return next;
    });
  }, [cart]);

  const handleAdd = async (product) => {
    try {
      if (!product?._id) return;

      const response = await apiRequest(`/products/getProductById/${product._id}`, {
        method: "GET",
      });

      const fullProduct = response?.data || response;
      if (!fullProduct) throw new Error("Product not found");

      addToCart({
        ...fullProduct,
        availableTabs: getActualStock(fullProduct),
        displayStock: Number(fullProduct.stock) || 0,
        stock: getActualStock(fullProduct),
        salePrice: product.salePrice || product.price || product.purchasePrice || product.cost,
      });

      setSelectedProductKey("");
      setSearchTerm("");
      setShowProductDropdown(false);
    } catch (error) {
      console.error(error);
      alert("Failed to add product");
    }
  };

  const handleProductSearchKeyDown = (event) => {
    if (!showProductDropdown || filteredProducts.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlightedProductIndex((prev) => (prev + 1) % filteredProducts.length);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedProductIndex((prev) => {
        if (prev < 0) return filteredProducts.length - 1;
        return prev === 0 ? filteredProducts.length - 1 : prev - 1;
      });
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const highlightedProduct = filteredProducts[highlightedProductIndex];
      if (highlightedProduct) {
        setSelectedProductKey(String(highlightedProduct._uniqueKey || highlightedProduct._id));
        handleAdd(highlightedProduct);
      }
      return;
    }

    if (event.key === "Escape") {
      setShowProductDropdown(false);
      setHighlightedProductIndex(-1);
    }
  };

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-white/70 bg-white/80 p-3 shadow-lg shadow-black/5 sm:p-4">
        <label className="mb-1 block text-sm font-medium text-slate-700">Product Search</label>
        <div ref={productSearchRef} className="relative z-[150] min-w-0 overflow-visible">
          <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => {
              const nextValue = event.target.value;
              setSearchTerm(nextValue);
              setSelectedProductKey("");
              setShowProductDropdown(true);
            }}
            onFocus={() => setShowProductDropdown(true)}
            onKeyDown={handleProductSearchKeyDown}
            placeholder="Select product from dropdown list"
            className="w-full min-w-0 rounded-md border border-slate-300 bg-white py-2 pl-9 pr-10 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ChevronDown className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-slate-400" />

          {showProductDropdown && (
            <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-72 overflow-y-auto rounded-md border border-slate-200 bg-white shadow-lg">
              {filteredProducts.length === 0 ? (
                <div className="px-3 py-2 text-sm text-slate-500">No product found</div>
              ) : (
                filteredProducts.map((product, index) => (
                  <button
                    key={product._uniqueKey || product._id}
                    type="button"
                    onClick={() => {
                      setSelectedProductKey(String(product._uniqueKey || product._id));
                      handleAdd(product);
                    }}
                    onMouseEnter={() => setHighlightedProductIndex(index)}
                    className={`w-full border-b border-slate-100 px-3 pt-0 pb-0 text-left text-sm last:border-b-0 ${
                      highlightedProductIndex === index
                        ? "bg-blue-600 text-white"
                        : "text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex min-h-10 items-center justify-between gap-2">
                      <span className="min-w-0 flex-1 truncate text-sm font-medium leading-7" style={urduNameStyle}>{product.name}</span>
                      <span
                        className={`shrink-0 text-xs font-semibold ${
                          highlightedProductIndex === index ? "text-white/90" : "text-blue-600"
                        }`}
                      >
                        Rs.{Number(product.salePrice || product.price || product.purchasePrice || product.cost || 0).toLocaleString()}
                      </span>
                    </div>
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-white/70 bg-white/80 shadow-lg shadow-black/5">
           <div className="bg-gradient-to-r from-blue-600 to-emerald-500 p-3 text-white">
          <div className="flex items-center gap-0">
            <ShoppingCart className="h-4 w-4" />
            <span className="font-semibold">Product Sale Table</span>
          </div>
        </div>

        {cart.length === 0 ? (
            <div className="p-6 text-center text-slate-500 sm:p-8">
            <ShoppingCart className="mx-auto mb-3 h-12 w-12 opacity-30" />
            <p>No product selected</p>
            <p className="mt-1 text-sm">Use the dropdown list above to add items</p>
          </div>
        ) : (
            <div className="overflow-x-auto overscroll-x-contain">
             <table className="w-full min-w-[760px] divide-y divide-slate-200">
              <thead className="bg-slate-50/90">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Product Name</th>
                  <th className="px-2 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Menufacture</th>
                  <th className="px-2 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Sale Type</th>
                  <th className="px-2 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Quantity</th>
                  <th className="px-2 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Amount</th>
                  <th className="px-1.5 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Retail Price</th>
                  <th className="px-1.5 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Total Price</th>
                  <th className="pl-1.5 pr-1 py-2 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Delete</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {cart.map((item) => {
                  const quantity = Number(item.qty) || 0;
                  const displayQty = getDisplayQty(item);
                  const quantityMode = getQuantityMode(item);
                  const salePrice = getSelectedSalePrice(item, quantityMode);
                  const packSize = getPackSize(item);
                  const unitPurchasePrice =
                    (Number(item?.purchasePrice || item?.cost || 0) || 0) / packSize;
                  const totalPrice =
                    salePrice * displayQty;
                  const totalPurchasePrice =
                    unitPurchasePrice * (quantityMode === "pack" ? packSize * displayQty : displayQty);
                  const productKey = String(item?._id || item?.id || item?.name || "").trim().toLowerCase();
                  const totalStock = Number(item.displayStock ?? item.stock) || 0;
                  const totalUnitSales = unitSalesByProduct.get(productKey) || 0;
                  const availableStockInUnit = Math.max((totalStock * packSize) - totalUnitSales, 0);
                  const remainingDisplayStock =
                    quantityMode === "pack"
                      ? Math.max(totalStock - displayQty, 0)
                      : totalStock;
                  const maxDisplayQty =
                    quantityMode === "pack"
                      ? Math.floor((Number(item.stock) || 0) / packSize)
                      : Math.floor(Number(item.stock) || 0);
                  const canSellPack = (Number(item.stock) || 0) >= packSize;

                  return (
                    <tr key={item.key || item._id || item.id} className="align-top">
                       <td className="px-4 py-2.5 sm:px-3">
                         <p className="break-words text-xs font-semibold text-slate-900" style={urduNameStyle}>
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          Stock: {remainingDisplayStock.toLocaleString()} | Units: {availableStockInUnit.toLocaleString()}
                        </p>
                        {Number.isFinite(Number(item.stock)) && quantity >= Number(item.stock) && (
                          <p className="mt-1 text-[11px] text-red-600">
                            Only {Math.floor(Number(item.stock) || 0)} units are available in stock.
                          </p>
                        )}
                      </td>
                       <td className="px-2 py-2.5 text-xs text-black sm:px-3">
                        <p className="break-words">{item.manufacturer || "-"}</p>
                      </td>
                       <td className="px-1.5 py-2.5 sm:px-2">
                        <div className="flex min-w-[60px] items-center gap-1 text-xs">
                          <select
                            value={quantityMode}
                            onChange={(event) => updateQuantityMode?.(item.key, event.target.value)}
                            className="w-full rounded-md border border-slate-300 bg-white px-2 py-1 text-xs font-medium text-slate-700"
                          >
                            <option value="unit">Unit</option>
                            <option value="pack" disabled={!canSellPack}>
                              Pack
                            </option>
                          </select>
                        </div>
                      </td>
                       <td className="px-1 py-2.5 sm:px-1">
                         <div className="flex min-w-[90px] items-center gap-0.5 rounded-lg border border-slate-200 px-1 py-1">
                          <button
                            type="button"
                            onClick={() => decreaseQty?.(item.key, 1)}
                            className="flex h-6 w-6 items-center justify-center rounded border border-slate-300 text-slate-700 hover:bg-slate-100"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <input
                            type="number"
                            min="1"
                            max={maxDisplayQty || undefined}
                            value={displayQty}
                            onChange={(event) => {
                              const nextValue = event.target.value;
                              if (nextValue === "") return;
                              const normalizedValue = Number(nextValue);
                              if (!Number.isFinite(normalizedValue)) return;
                              updateQty?.(item.key, normalizedValue);
                            }}
                             className="w-10 rounded border border-transparent bg-transparent text-center text-sm font-semibold text-slate-900 outline-none focus:border-blue-300 sm:w-12"
                          />
                          <button
                            type="button"
                            onClick={() => increaseQty?.(item.key, 1)}
                            disabled={maxDisplayQty > 0 ? displayQty >= maxDisplayQty : true}
                            className="flex h-6 w-6 items-center justify-center rounded border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <div className="mt-1.5 flex items-center gap-0.5">
                          <label className="shrink-0 font-bold text-[12px] font-bold text-black">Free</label>
                          <input
                            type="text"
                            placeholder="0"
                            inputMode="numeric"
                            value={Number(item.freeQty) > 0 ? String(item.freeQty) : ""}
                            onChange={(event) =>
                              updateFreeQty?.(item.key, String(event.target.value || "").replace(/[^\d]/g, ""))
                            }
                            className="w-10 rounded-md border border-slate-300 px-1 py-1 font-bold text-[12px] text-black text-center outline-none focus:border-blue-300"
                          />
                        </div>
                         
                       </td>
                       <td className="px-2 py-2.5 sm:px-3">
                        <input
                          type="text"
                          inputMode="decimal"
                          value={amountDrafts[item.key] ?? String(Number(totalPrice.toFixed(2)))}
                          onFocus={() => {
                            editingAmountKeyRef.current = item.key;
                          }}
                          onChange={(event) => {
                            const nextValue = String(event.target.value || "").replace(/[^\d.]/g, "");
                            setAmountDrafts((prev) => ({ ...prev, [item.key]: nextValue }));
                            updateLineAmount?.(item.key, nextValue);
                          }}
                          onBlur={() => {
                            editingAmountKeyRef.current = null;
                            const nextValue = amountDrafts[item.key] ?? "";
                            const numericAmount = Number(nextValue);

                            if (!nextValue.trim() || (Number.isFinite(numericAmount) && numericAmount >= 0)) {
                              updateLineAmount?.(item.key, nextValue);
                              return;
                            }

                            setAmountDrafts((prev) => ({
                              ...prev,
                              [item.key]: String(Number(totalPrice.toFixed(2))),
                            }));
                          }}
                          className="w-20 rounded-md border border-slate-300 bg-white px-2 py-2 text-center text-sm font-medium text-slate-900 outline-none focus:border-blue-400"
                        />
                       </td>
                       <td className="px-1.5 py-2.5 text-sm font-medium text-slate-900 sm:px-2">
                         <p className="break-words">PKR {salePrice.toLocaleString()}</p>
                        <p className="mt-1 break-words text-xs font-medium text-slate-500">
                          P.Prince: {unitPurchasePrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                      </td>
                       <td className="px-1.5 py-2.5 text-sm font-semibold text-blue-600 sm:px-2">
                         <p className="break-words">PKR {totalPrice.toLocaleString()}</p>
                      </td>
                       <td className="pl-1.5 pr-1 py-2.5 sm:pl-2 sm:pr-1">
                        <button
                          type="button"
                          onClick={() => removeItem?.(item.key)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-rose-200 text-rose-600 hover:bg-rose-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
