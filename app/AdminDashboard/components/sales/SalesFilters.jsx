"use client";

import React from "react";
import { Search } from "lucide-react";

const SalesFilters = ({
  search,
  setSearch,
  filter,
  setFilter,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const handleQuickFilter = (selectedFilter) => {
    setFilter(selectedFilter);

    if (selectedFilter === "today") {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      const todayValue = `${yyyy}-${mm}-${dd}`;
      setStartDate(todayValue);
      setEndDate(todayValue);
      return;
    }

    if (selectedFilter === "all") {
      setStartDate("");
      setEndDate("");
    }
  };

  return (
    <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm backdrop-blur-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        {/* 🔍 Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
            placeholder="Search by invoice number and Printable "
          />
        </div>

        {/* 🎯 All / Today filter */}
        <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:flex-wrap md:items-center">
          {["all", "today"].map((f) => (
            <button
              key={f}
              onClick={() => handleQuickFilter(f)}
              className={`h-10 w-full rounded-xl px-4 text-xs font-semibold transition sm:w-auto ${
                filter === f
                  ? "bg-gradient-to-r from-sky-600 to-cyan-600 text-white shadow-sm shadow-cyan-200/70"
                  : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {f === "all" ? "All" : "Today"}
            </button>
          ))}

          {/* 📆 Date range picker */}
          <div className="flex w-full flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="h-10 w-full rounded-xl border border-slate-200 bg-white px-2 text-sm text-slate-700 shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
            />
            <span className="text-center text-sm sm:text-left">to</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="h-10 w-full rounded-xl border border-slate-200 bg-white px-2 text-sm text-slate-700 shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesFilters;
