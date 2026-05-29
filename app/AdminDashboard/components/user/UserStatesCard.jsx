"use client";

import React from "react";

const UserStatesCard = ({ title, value, icon, bgGradient, textColor }) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex items-center justify-between gap-3 p-4">
        <div className="min-w-0 flex-1">
          <p className="text-xs tracking-wide uppercase text-slate-500">{title}</p>
          <p className={`mt-1 break-words text-2xl font-extrabold sm:text-3xl ${textColor}`}>{value}</p>
        </div>
        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-md sm:h-12 sm:w-12 ${bgGradient}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default UserStatesCard;
