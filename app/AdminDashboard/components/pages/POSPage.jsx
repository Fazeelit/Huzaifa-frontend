"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import ProductsCard from "../POS/ProductsCard";
import CartCard from "../POS/CartCard";
import { apiRequest } from "./../../authservice/api";
import { getActualStockValue } from "../../utils/uomConverter";

const getPackSize = (product) => {
  const packSize = Number(product?.packSize);
  return Number.isFinite(packSize) && packSize > 0 ? packSize : 1;
};

export default function POSPage() {
  const router = useRouter();
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getActualStock = (product) => {
    const availableTabs = Number(product?.availableTabs);
    if (Number.isFinite(availableTabs)) return availableTabs;
    return getActualStockValue(product);
  };

  const getAvailableStockInUnits = (product) => {
    const totalStock = Number(product?.displayStock ?? product?.stock) || 0;
    return Math.max(getActualStock(product), totalStock * getPackSize(product));
  };

  const getMaxDisplayQty = (item, quantityMode = item?.quantityMode || "unit") => {
    const stockUnits = Math.max(Number(item?.stock) || 0, 0);
    if (quantityMode === "pack") {
      return Math.floor(stockUnits / getPackSize(item));
    }
    return Math.floor(stockUnits);
  };

  const getUnitsFromDisplayQty = (item, displayQty, quantityMode = item?.quantityMode || "unit") => {
    const normalizedDisplayQty = Math.max(Math.floor(Number(displayQty) || 0), 0);
    return quantityMode === "pack"
      ? normalizedDisplayQty * getPackSize(item)
      : normalizedDisplayQty;
  };

  const getMaxFreeDisplayQty = (item, displayQty, quantityMode = item?.quantityMode || "unit") => {
    const soldUnits = getUnitsFromDisplayQty(item, displayQty, quantityMode);
    const remainingUnits = Math.max((Number(item?.stock) || 0) - soldUnits, 0);
    return quantityMode === "pack"
      ? Math.floor(remainingUnits / getPackSize(item))
      : Math.floor(remainingUnits);
  };

  const normalizeCartItemQuantity = (item, displayQty, quantityMode = item?.quantityMode || "unit") => {
    const normalizedMode = quantityMode === "pack" ? "pack" : "unit";
    const maxDisplayQty = getMaxDisplayQty(item, normalizedMode);

    if (maxDisplayQty <= 0) {
      return {
        ...item,
        quantityMode: normalizedMode,
        displayQty: 0,
        qty: 0,
      };
    }

    const nextDisplayQty = Math.min(Math.max(Math.floor(Number(displayQty) || 1), 1), maxDisplayQty);
    const nextFreeQty = Math.min(
      Math.max(Math.floor(Number(item?.freeQty) || 0), 0),
      getMaxFreeDisplayQty(item, nextDisplayQty, normalizedMode)
    );
    return {
      ...item,
      quantityMode: normalizedMode,
      displayQty: nextDisplayQty,
      qty: getUnitsFromDisplayQty(item, nextDisplayQty, normalizedMode),
      freeQty: nextFreeQty,
    };
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await apiRequest("/products", { method: "GET" });
      setProducts(res?.data || res);
    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    try {
      const draftRaw = localStorage.getItem("posCartDraft");
      if (!draftRaw) return;

      const parsed = JSON.parse(draftRaw);
      const items = Array.isArray(parsed) ? parsed : parsed?.items;
      if (Array.isArray(items) && items.length) {
        setCart(
          items.map((item) => ({
            ...item,
            freeQty: Math.max(Math.floor(Number(item?.freeQty) || 0), 0),
          }))
        );
      }
    } catch {
      // Ignore invalid local draft payloads.
    }
  }, []);

  const addToCart = (product) => {
    setCart((prev) => {
      const uniqueKey = `${product._id}-${product.purchasePrice ?? product.cost}`;
      const exists = prev.find((item) => item.key === uniqueKey);
      const availableStock = getAvailableStockInUnits(product);

      if (exists) {
        const currentDisplayQty = Number(exists.displayQty ?? 1) || 1;
        const maxDisplayQty = getMaxDisplayQty(exists, exists.quantityMode);
        if (currentDisplayQty < maxDisplayQty) {
          return prev.map((item) =>
            item.key === uniqueKey
              ? normalizeCartItemQuantity(item, currentDisplayQty + 1, item.quantityMode)
              : item
          );
        }
        return prev;
      }

      return [
        ...prev,
        {
          ...product,
          qty: 1,
          displayQty: 1,
          freeQty: 0,
          quantityMode: "unit",
          key: uniqueKey,
          stock: availableStock,
        },
      ];
    });
  };

  const removeItem = (key) => {
    if (key === "all") return setCart([]);
    setCart((prev) => prev.filter((item) => item.key !== key));
  };

  const increaseQty = (key, amount = 1) => {
    setCart((prev) =>
      prev.map((item) =>
        item.key === key
          ? normalizeCartItemQuantity(
              item,
              (Number(item.displayQty ?? 1) || 1) + amount,
              item.quantityMode
            )
          : item
      )
    );
  };

  const decreaseQty = (key, amount = 1) => {
    setCart((prev) =>
      prev.map((item) =>
        item.key === key
          ? normalizeCartItemQuantity(
              item,
              Math.max((Number(item.displayQty ?? 1) || 1) - amount, 1),
              item.quantityMode
            )
          : item
      )
    );
  };

  const updateQty = (key, nextQty) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.key !== key) return item;
        const normalizedQty = Number(nextQty);
        if (!Number.isFinite(normalizedQty)) return item;
        return normalizeCartItemQuantity(item, normalizedQty, item.quantityMode);
      })
    );
  };

  const updateQuantityMode = (key, nextMode) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.key !== key) return item;
        const normalizedMode = nextMode === "pack" ? "pack" : "unit";
        return normalizeCartItemQuantity(item, 1, normalizedMode);
      })
    );
  };

  const updateFreeQty = (key, nextFreeQty) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.key !== key) return item;
        const normalizedFreeQty = Math.max(Math.floor(Number(nextFreeQty) || 0), 0);
        const maxFreeQty = getMaxFreeDisplayQty(
          item,
          Number(item.displayQty ?? 1) || 1,
          item.quantityMode
        );
        return {
          ...item,
          freeQty: Math.min(normalizedFreeQty, maxFreeQty),
        };
      })
    );
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] rounded-3xl border border-slate-200/70 bg-gradient-to-br from-sky-50 via-white to-emerald-50 flex items-center justify-center">
        <p className="font-medium text-slate-600">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[70vh] rounded-3xl border border-rose-200/70 bg-gradient-to-br from-rose-50 via-white to-orange-50 flex items-center justify-center">
        <p className="font-medium text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0f2fe,transparent_35%),radial-gradient(circle_at_85%_20%,#ecfdf3,transparent_30%),linear-gradient(to_bottom,#f8fafc,#eef2ff)]">
      <div className="sticky top-0 z-10 border-b border-white/70 bg-white/80 backdrop-blur shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-3 py-4 sm:px-4 lg:flex-row lg:items-center lg:justify-between lg:px-6">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <button
              onClick={() => router.push("/AdminDashboard/dashboard")}
              className="rounded-xl border border-slate-200/70 bg-white/80 p-2 text-slate-700 shadow-sm transition hover:bg-white hover:shadow-md"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <div className="min-w-0">
              <h1 className="text-lg font-bold text-slate-900 sm:text-xl">New Sale</h1>
              <p className="text-xs text-slate-600">Create a new sales transaction</p>
            </div>
          </div>

          <Link href="/AdminDashboard/sales" className="w-full lg:w-auto">
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl lg:w-auto">
              <ShoppingCart className="h-4 w-4" />
              View All Sales
            </button>
          </Link>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-3 py-4 sm:px-4 sm:py-5 lg:px-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,2.55fr)_minmax(250px,0.65fr)]">
          <div className="space-y-4">
            <div className="rounded-xl border border-white/70 bg-white/80 p-3 shadow-lg shadow-black/5 backdrop-blur sm:p-4">
              <ProductsCard
                products={products}
                cart={cart}
                addToCart={addToCart}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                updateQty={updateQty}
                updateQuantityMode={updateQuantityMode}
                updateFreeQty={updateFreeQty}
                removeItem={removeItem}
              />
            </div>
          </div>

          <div className="space-y-4">
            <CartCard
              cart={cart}
              removeItem={removeItem}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
