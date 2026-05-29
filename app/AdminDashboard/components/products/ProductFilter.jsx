"use client"; // required for client-side state

import React from "react";
import { Noto_Nastaliq_Urdu } from "next/font/google";
import { Search } from "lucide-react";

const urduFormFont = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const urduInputStyle = {
  fontFamily: `"Urdu Noori Nastaliq", "Noori Nastaliq", "Jameel Noori Nastaleeq", ${urduFormFont.style.fontFamily}, serif`,
};

const ProductFilter = ({
  searchTerm,
  setSearchTerm,
  filter,
  setFilter,
  batchSearchTerm,
  setBatchSearchTerm,
  purchaseStartDate,
  setPurchaseStartDate,
  purchaseEndDate,
  setPurchaseEndDate,
}) => {
  const filters = ["All", "Active", "Low Stock", "Out of Stock"];

  return (
    <div className="rounded-xl bg-gradient-to-r from-white to-slate-50 p-4">
      <div className="flex flex-col gap-4">
        {/* Search Input */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by product name, code, or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
              style={urduInputStyle}
            />
          </div>
          <input
            type="text"
            placeholder="Search by batch number..."
            value={batchSearchTerm}
            onChange={(e) => setBatchSearchTerm(e.target.value)}
            className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
            style={urduInputStyle}
          />
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 md:col-span-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`h-10 rounded-xl px-4 text-xs font-semibold shadow-sm transition ${
                  filter === f
                    ? "bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-cyan-200/70"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <input
              type="date"
              value={purchaseStartDate}
              onChange={(e) => setPurchaseStartDate(e.target.value)}
              className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-700 shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
            />
            <input
              type="date"
              value={purchaseEndDate}
              onChange={(e) => setPurchaseEndDate(e.target.value)}
              className="h-10 rounded-xl border border-slate-200 bg-white px-3 text-xs text-slate-700 shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
