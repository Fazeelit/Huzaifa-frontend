"use client";

import React, { useState } from "react";
import { CalendarDays, DollarSign, Eye, EyeOff, Receipt, TrendingUp } from "lucide-react";

const SalesStates = ({ stats }) => {
  const [showValues, setShowValues] = useState(false);

  // Default fallback
  const displayStats = stats || {
    totalRevenue: 0,
    totalProfit: 0,
    totalSales: 0,
    avgTransaction: 0,
    todayProfit: 0,
    monthlyProfit: 0,
  };

  const items = [
    {
      label: "Today Profit",
      value: `Rs ${displayStats.todayProfit.toFixed(2)}`,
      textClass: "text-emerald-700",
      badgeClass: "from-emerald-500 to-green-600",
      ringClass: "ring-emerald-100",
      icon: TrendingUp,
      hideValue: true,
    },
    {
      label: "Monthly Profit",
      value: `Rs ${displayStats.monthlyProfit.toFixed(2)}`,
      textClass: "text-violet-700",
      badgeClass: "from-violet-500 to-fuchsia-600",
      ringClass: "ring-violet-100",
      icon: CalendarDays,
      hideValue: true,
    },
    {
      label: "Total Sales",
      value: `Rs ${displayStats.totalRevenue.toFixed(2)}`,
      textClass: "text-sky-700",
      badgeClass: "from-sky-500 to-blue-600",
      ringClass: "ring-sky-100",
      icon: DollarSign,
      hideValue: true,
    },
    {
      label: "Transactions",
      value: displayStats.totalSales,
      textClass: "text-amber-700",
      badgeClass: "from-amber-500 to-orange-600",
      ringClass: "ring-amber-100",
      icon: Receipt,
    },
  ];

  return (
    <div className="space-y-3">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setShowValues((prev) => !prev)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 sm:w-auto"
        >
          {showValues ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {showValues ? "Hide Values" : "Show Values"}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
            className={`flex items-center justify-between gap-3 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm ring-1 ${item.ringClass} backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg`}
          >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-600">{item.label}</p>
                <p className={`mt-1 break-words text-2xl font-bold tracking-tight ${item.textClass}`}>
                  {item.hideValue && !showValues ? "Rs ****" : item.value}
                </p>
              </div>

              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.badgeClass} shadow-lg shadow-slate-200/60 sm:h-12 sm:w-12`}
              >
                <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalesStates;
