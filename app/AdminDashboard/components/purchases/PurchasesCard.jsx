"use client";


import React from "react";

export default function PurchasesCard({ title, count, color, Icon }) {
  const gradientFrom = `from-${color}-500`;
  const gradientTo = `to-${color}-600`;

  return (
    <div className="cursor-pointer rounded-xl border-0 bg-white/80 text-card-foreground shadow-lg backdrop-blur transition-transform hover:scale-105">
      <div className="p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="break-words text-sm text-slate-600">{title}</p>

            <p
              className={`mt-1 break-words text-2xl font-bold sm:text-3xl ${
                color === "red"
                  ? "text-red-600"
                  : color === "green"
                  ? "text-emerald-600"
                  : color === "amber"
                  ? "text-amber-600"
                  : color === "blue"
                  ? "text-blue-600"
                  : color === "pink"
                  ? "text-pink-600"
                  : "text-slate-900"
              }`}
            >
              {count}
            </p>
          </div>

          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br sm:h-12 sm:w-12 ${gradientFrom} ${gradientTo}`}
          >
            <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
