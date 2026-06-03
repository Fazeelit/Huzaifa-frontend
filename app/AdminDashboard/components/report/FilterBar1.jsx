"use client";

import React, { useState } from "react";

const FilterBar = ({ onFilter }) => {
  const today = new Date();
  const defaultFrom = new Date();
  defaultFrom.setDate(today.getDate() - 30); // 30 days ago

  const formatDate = (date) => date.toISOString().slice(0, 10);

  const [fromDate, setFromDate] = useState(formatDate(defaultFrom));
  const [toDate, setToDate] = useState(formatDate(today));

  const handleApply = () => {
    if (onFilter) {
      onFilter(fromDate, toDate);
    }
  };

  return (
    <div className="rounded-xl bg-white/80 backdrop-blur shadow-lg max-w-full overflow-hidden">
      <div className="p-4">
        <div className="flex flex-col md:flex-row gap-4 md:items-end">

          {/* From Date */}
          <div className="w-full md:flex-1 space-y-1">
            <label className="text-sm font-medium text-slate-700">From Date</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="h-9 w-full rounded-md border border-gray-300 px-3 text-sm shadow-sm
                         focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          {/* To Date */}
          <div className="w-full md:flex-1 space-y-1">
            <label className="text-sm font-medium text-slate-700">To Date</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="h-9 w-full rounded-md border border-gray-300 px-3 text-sm shadow-sm
                         focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
          </div>

          {/* Apply Filter Button */}
          <button
            onClick={handleApply}
            className="w-full md:w-auto h-9 px-4 rounded-md text-sm font-medium
                       border border-gray-300 text-blue-700 shadow-sm
                       hover:bg-slate-100 transition"
          >
            Apply Filter
          </button>

        </div>
      </div>
    </div>
  );
};

export default FilterBar;
