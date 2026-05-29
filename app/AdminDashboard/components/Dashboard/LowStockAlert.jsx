"use client";

import React, { useEffect, useState, useMemo } from "react";
import { TriangleAlert } from "lucide-react";
import { apiRequest } from "./../../authservice/api";

/* =========================
   Safe array extractor
========================= */
const getArray = (res) =>
  Array.isArray(res?.data)
    ? res.data
    : Array.isArray(res?.data?.data)
    ? res.data.data
    : [];

const LOW_STOCK_LIMIT = 10;

const LowStockAlert = () => {
  const [products, setProducts] = useState([]);

  /* =========================
     Fetch products
  ========================= */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await apiRequest("/products");
        setProducts(getArray(res));
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  /* =========================
     Merge + Low stock logic
  ========================= */
  const lowStockItems = useMemo(() => {
    if (!Array.isArray(products) || products.length === 0) return [];

    const map = new Map();

    products.forEach((p) => {
      // ✅ SAFE string handling
      const rawName = typeof p?.name === "string" ? p.name : "";
      const name = rawName.trim();

      if (!name) return; // skip invalid products safely

      const key = name.toLowerCase();

      // ✅ SAFE number handling
      const stock = Number(p?.stock) || 0;
      const unit = typeof p?.unit === "string" ? p.unit : "";

      if (map.has(key)) {
        const existing = map.get(key);
        map.set(key, {
          ...existing,
          stock: existing.stock + stock,
        });
      } else {
        map.set(key, {
          name,
          stock,
          unit,
        });
      }
    });

    // Filter only low stock products
    return Array.from(map.values())
      .filter((p) => p.stock <= LOW_STOCK_LIMIT)
      .map((p) => ({
        name: p.name,
        stock: `${p.stock}${p.unit ? ` ${p.unit}` : ""}`,
        status: "Reorder",
      }));
  }, [products]);

  /* =========================
     Hide if no alerts
  ========================= */
  if (lowStockItems.length === 0) return null;

  /* =========================
     UI
  ========================= */
  return (
    <div className="overflow-hidden rounded-2xl border border-amber-100/70 bg-gradient-to-br from-amber-50 to-orange-50 shadow-sm">
      <div className="flex flex-col space-y-1.5 p-4 pt-5 sm:p-6 sm:pt-7">
        <div className="flex items-center text-base font-semibold leading-none tracking-tight text-amber-900 sm:text-lg">
          <TriangleAlert className="w-5 h-5 mr-2 text-amber-600" />
          Low Stock Alert
        </div>
      </div>

      <div className="p-4 pt-0 sm:p-6 sm:pt-0">
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {lowStockItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start justify-between gap-3 rounded-xl border border-white/80 bg-white/95 p-3 shadow-sm transition hover:shadow-md"
            >
              <div className="min-w-0 flex-1">
                <p className="break-words font-medium text-slate-900">{item.name}</p>
                <p className="break-words text-sm text-slate-600">
                  Stock: {item.stock}
                </p>
              </div>

              <div className="shrink-0 text-right">
                <span className="text-xs text-amber-700 bg-amber-100 px-3 py-1 rounded-full font-medium">
                  {item.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LowStockAlert;
