"use client";

import { LayoutDashboard, Menu } from "lucide-react";

export default function Topbar({
  title,
  onTopIconClick,
  titleIcon: TitleIcon = LayoutDashboard,
}) {
  return (
    <header
      className={`
        sticky top-0 z-[35] h-16 sm:h-20
        flex items-center justify-between gap-3
        px-3 sm:px-6
        bg-gradient-to-r from-white via-slate-50 to-white/95
        backdrop-blur-md border-b border-slate-200 shadow-sm
        w-full
      `}
    >
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
        <button
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 sm:h-10 sm:w-10"
          onClick={onTopIconClick}
          aria-label="Toggle sidebar"
        >
          <Menu size={20} />
        </button>

        <button
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-600/10 text-blue-600 transition hover:bg-blue-600/20 sm:h-9 sm:w-9"
          onClick={onTopIconClick}
          aria-label="Toggle sidebar collapse"
          title="Toggle sidebar"
        >
          <TitleIcon size={16} />
        </button>
        <div className="min-w-0 leading-tight">
          <p className="truncate text-[10px] uppercase tracking-wider text-slate-500 sm:text-[11px]">
            Admin Panel
          </p>
          <h1 className="truncate text-sm font-semibold text-slate-800 sm:text-lg">
            {title}
          </h1>
        </div>
      </div>

      <div className="hidden shrink-0 sm:flex items-center">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 mr-2" />
        <span className="text-xs font-medium text-slate-500">Live</span>
      </div>
    </header>
  );
}
