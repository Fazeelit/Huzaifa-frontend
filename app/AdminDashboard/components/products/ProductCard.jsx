"use client"; // required for client-side state

import React from "react";

export default function ProductCard({ title, count, color, Icon, compactValue = false }) {
  const tone = {
    blue: {
      badge: "from-sky-500 to-blue-600",
      ring: "ring-sky-100",
      count: "text-sky-700",
    },
    pink: {
      badge: "from-fuchsia-500 to-pink-600",
      ring: "ring-pink-100",
      count: "text-pink-700",
    },
    amber: {
      badge: "from-amber-500 to-orange-600",
      ring: "ring-amber-100",
      count: "text-amber-700",
    },
    red: {
      badge: "from-rose-500 to-red-600",
      ring: "ring-red-100",
      count: "text-red-700",
    },
    emerald: {
      badge: "from-emerald-500 to-green-600",
      ring: "ring-emerald-100",
      count: "text-emerald-700",
    },
    violet: {
      badge: "from-violet-500 to-indigo-600",
      ring: "ring-violet-100",
      count: "text-violet-700",
    },
  }[color] || {
    badge: "from-slate-500 to-slate-600",
    ring: "ring-slate-100",
    count: "text-slate-900",
  };

  return (
    <div className={`group rounded-2xl border border-white/80 bg-white/90 backdrop-blur-sm shadow-sm ring-1 ${tone.ring} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg`}>
      <div className="p-4 md:p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-600">{title}</p>
            <p className={`mt-1 ${compactValue ? "text-xl" : "text-2xl"} font-bold tracking-tight ${tone.count}`}>{count}</p>
          </div>
          <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${tone.badge} shadow-lg shadow-slate-200/60 flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
