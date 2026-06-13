"use client";

import { Noto_Nastaliq_Urdu } from "next/font/google";
import React, { useMemo, useState } from "react";
import { Pen, Package, Trash2 } from "lucide-react";
import { blockedButtonClass, blockedButtonProps } from "../../authservice/permissions";
import { formatDateDDMMYYYY } from "../../utils/formatting";

const urduFormFont = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const urduNameStyle = {
  fontFamily: `"Urdu Noori Nastaliq", "Noori Nastaliq", "Jameel Noori Nastaleeq", ${urduFormFont.style.fontFamily}, serif`,
};

const ProductTable = ({ products = [], onEdit, onDelete, canEdit = true, canDelete = true }) => {
  const [sortConfig, setSortConfig] = useState({ key: "name", direction: "asc" });

  const today = new Date();

  const parseExpiry = (exp) => {
    if (!exp) return null;

    const expStr = exp.toString().trim();
    const parts = expStr.split(".");
    if (parts.length !== 2) return null;

    let month = parseInt(parts[0], 10);
    let year = parts[1];

    if (Number.isNaN(month) || month < 1 || month > 12) return null;

    if (year.length === 1) {
      year = `${year}0`;
    }

    year = parseInt(year, 10);
    if (Number.isNaN(year)) return null;

    const fullYear = 2000 + year;

    return {
      month,
      year: fullYear,
      shortYear: year.toString().padStart(2, "0"),
    };
  };

  const getMonthsLeft = (exp) => {
    const parsed = parseExpiry(exp);
    if (!parsed) return null;

    const yearDiff = parsed.year - today.getFullYear();
    const monthDiff = parsed.month - (today.getMonth() + 1);

    const totalMonths = yearDiff * 12 + monthDiff;
    return totalMonths >= 0 ? totalMonths : 0;
  };

  const formatExpiry = (exp) => {
    const parsed = parseExpiry(exp);
    if (!parsed) return "-";

    const month = parsed.month.toString().padStart(2, "0");
    return `${month}/${parsed.shortYear}`;
  };

  const mergedProducts = useMemo(() => {
    const map = new Map();

    products.forEach((p) => {
      const key = p.name?.trim().toLowerCase();
      const stock = Number(p.stock) || 0;
      if (!key) return;

      if (map.has(key)) {
        const existing = map.get(key);
        map.set(key, {
          ...existing,
          stock: existing.stock + stock,
          unit: existing.unit || p.unit || "",
          manufacturer: existing.manufacturer || p.manufacturer,
          code: p.code || existing.code,
          category: existing.category || p.category,
          bno: existing.bno || p.bno,
          date: existing.date || existing.purchaseDate || p.date || p.purchaseDate || p.createdAt,
          salePrice: p.salePrice || p.price || existing.salePrice || existing.price,
          purchasePrice: p.purchasePrice || p.cost || existing.purchasePrice || existing.cost,
          status: p.status || existing.status,
          shelf: p.shelf || existing.shelf,
          exp: p.exp || existing.exp,
        });
      } else {
        map.set(key, {
          ...p,
          stock,
          unit: p.unit || "",
          exp: p.exp,
          bno: p.bno,
          date: p.date || p.purchaseDate || p.createdAt,
        });
      }
    });

    return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
  }, [products]);

  const displayedProducts = mergedProducts;

  const getSortValue = (product, key) => {
      switch (key) {
      case "name":
        return String(product.name || "").toLowerCase();
      case "bno":
        return String(product.bno || "").toLowerCase();
      case "code":
        return String(product.code || "").toLowerCase();
      case "shelf":
        return Number(product.shelf || 0);
      case "salePrice":
        return Number(product.salePrice || product.price || 0);
      case "stock":
        return Number(product.stock || 0);
      case "date":
        return new Date(product.date || product.purchaseDate || product.createdAt || 0).getTime();
      case "exp":
        return formatExpiry(product.exp);
      case "monthsLeft":
        return Number(getMonthsLeft(product.exp) ?? 9999);
      case "status":
        return String(product.status || "").toLowerCase();
      default:
        return String(product[key] || "").toLowerCase();
    }
  };

  const sortedProducts = useMemo(() => {
    const sorted = [...displayedProducts].sort((a, b) => {
      const aVal = getSortValue(a, sortConfig.key);
      const bVal = getSortValue(b, sortConfig.key);
      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [displayedProducts, sortConfig]);

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  const sortIndicator = (key) => {
    if (sortConfig.key !== key) return "";
    return sortConfig.direction === "asc" ? " ▲" : " ▼";
  };

  return (
    <div className="rounded-2xl border border-white/80 bg-white/95 p-0 shadow-sm backdrop-blur-sm">
      <div className="relative w-full max-h-[500px] overflow-y-auto overflow-x-auto" id="expiry-table">
        <table className="w-full text-sm caption-bottom">
          <thead className="sticky top-0 z-10 bg-slate-900">
            <tr className="text-white">
              <th onClick={() => handleSort("name")} className="h-11 cursor-pointer rounded-tl-xl px-3 text-left text-xs font-bold uppercase tracking-wide text-white">Product{sortIndicator("name")}</th>
              <th onClick={() => handleSort("bno")} className="h-11 cursor-pointer px-3 text-left text-xs font-bold uppercase tracking-wide text-white">Batch No.{sortIndicator("bno")}</th>
              <th onClick={() => handleSort("code")} className="h-11 cursor-pointer px-3 text-left text-xs font-bold uppercase tracking-wide text-white">Code{sortIndicator("code")}</th>
              <th onClick={() => handleSort("shelf")} className="h-11 cursor-pointer px-3 text-left text-xs font-bold uppercase tracking-wide text-white">Shelf No.{sortIndicator("shelf")}</th>
              <th onClick={() => handleSort("salePrice")} className="h-11 cursor-pointer px-3 text-left text-xs font-bold uppercase tracking-wide text-white">Sale Price{sortIndicator("salePrice")}</th>
              <th onClick={() => handleSort("stock")} className="h-11 cursor-pointer px-3 text-left text-xs font-bold uppercase tracking-wide text-white">Stock{sortIndicator("stock")}</th>
              <th onClick={() => handleSort("date")} className="h-11 cursor-pointer px-3 text-left text-xs font-bold uppercase tracking-wide text-white">Purchase Date{sortIndicator("date")}</th>
              <th onClick={() => handleSort("exp")} className="h-11 cursor-pointer px-3 text-left text-xs font-bold uppercase tracking-wide text-white">Expiry Date{sortIndicator("exp")}</th>
              <th onClick={() => handleSort("monthsLeft")} className="h-11 cursor-pointer px-3 text-left text-xs font-bold uppercase tracking-wide text-white">Months Left{sortIndicator("monthsLeft")}</th>
              <th onClick={() => handleSort("status")} className="h-11 cursor-pointer px-3 text-left text-xs font-bold uppercase tracking-wide text-white">Status{sortIndicator("status")}</th>
              <th className="h-11 rounded-tr-xl px-3 text-left text-xs font-bold uppercase tracking-wide text-white">Actions</th>
            </tr>
          </thead>

          <tbody>
            {sortedProducts.length === 0 ? (
              <tr>
                <td colSpan={11}>
                  <div className="py-12 text-center text-slate-500">
                    <Package className="mx-auto mb-3 h-12 w-12 text-slate-300" />
                    <p className="text-lg font-medium">No products found</p>
                  </div>
                </td>
              </tr>
            ) : (
              sortedProducts.map((p) => {
                const monthsLeft = getMonthsLeft(p.exp);
                const expiryClass = monthsLeft !== null && monthsLeft <= 1 ? "text-red-600 font-bold" : "";

                return (
                  <tr key={p.name + p.code} className="border-b border-slate-100 transition hover:bg-sky-50/50">
                    <td className="p-3">
                      <p className="text-xs font-medium text-slate-900" style={urduNameStyle}>{p.name}</p>
                      <p className="text-xs text-slate-500">{p.manufacturer}</p>
                    </td>

                    <td className="p-3 font-mono text-slate-700">{p.bno || "-"}</td>
                    <td className="p-3 font-mono text-slate-700">{p.code}</td>
                    <td className="p-3">
                      <span className="inline-flex rounded-lg border border-slate-200 bg-white px-2 py-0.5 text-xs font-medium text-slate-700">
                        {p.shelf}
                      </span>
                    </td>

                    <td className="p-3">
                      <p className="font-semibold text-slate-900">Rs.{p.salePrice ?? p.price}</p>
                      {(p.purchasePrice ?? p.cost) && <p className="text-xs text-slate-500">Purchase: Rs.{p.purchasePrice ?? p.cost}</p>}
                    </td>

                    <td className="p-3">
                      <span
                        className={`font-semibold ${
                          p.stock === 0 ? "text-red-600" : p.stock <= 10 ? "text-amber-600" : "text-emerald-600"
                        }`}
                      >
                        {p.stock}
                      </span>
                      <span className="ml-1 text-xs text-slate-500">{p.unit}</span>
                    </td>

                    <td className="p-3 text-slate-700">
                      {p.date || p.purchaseDate ? formatDateDDMMYYYY(p.date || p.purchaseDate) : "-"}
                    </td>
                    <td className={`p-3 ${expiryClass}`}>{formatExpiry(p.exp)}</td>
                    <td className={`p-3 ${expiryClass}`}>{monthsLeft !== null ? monthsLeft : "-"}</td>

                    <td className="p-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                          p.status === "Active" ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800"
                        }`}
                      >
                        {p.status}
                      </span>
                    </td>

                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => canEdit && onEdit?.(p)}
                          className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 ${blockedButtonClass} blocked-action`}
                          {...blockedButtonProps(canEdit)}
                        >
                          <Pen className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => canDelete && onDelete?.(p)}
                          className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 ${blockedButtonClass} blocked-action`}
                          {...blockedButtonProps(canDelete)}
                        >
                          <Trash2 className="h-4 w-4" />
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
  );
};

export default ProductTable;
