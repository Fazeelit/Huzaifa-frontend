"use client";

import { LayoutDashboard, Menu, RefreshCw } from "lucide-react";

export default function Topbar({
  title,
  onTopIconClick,
  titleIcon: TitleIcon = LayoutDashboard,
  onSyncClick,
  pendingSyncCount = 0,
  syncing = false,
}) {
  return (
    <header
      className={`
        sticky top-0 z-[35] min-h-16 sm:h-20
        flex items-center justify-between gap-3
        px-3 py-2 sm:px-6 sm:py-0
        bg-gradient-to-r from-white via-slate-50 to-white/95
        backdrop-blur-md border-b border-slate-200 shadow-sm
        w-full
      `}
    >
      <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
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

      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={onSyncClick}
          disabled={syncing}
          className={`inline-flex min-w-0 max-w-full items-center gap-1.5 rounded-xl px-2.5 py-2 text-sm font-semibold text-white shadow-md transition disabled:cursor-not-allowed disabled:opacity-60 sm:gap-2 sm:px-3 sm:text-base ${
            pendingSyncCount > 0 || syncing
              ? "border border-blue-200 bg-blue-600 shadow-blue-600/20 hover:bg-blue-700"
              : "border border-red-300 bg-red-600 shadow-red-400/20 hover:bg-red-500"
          }`}
        >
          <RefreshCw
            size={14}
            className={syncing ? "animate-spin" : ""}
          />
          <span className="truncate text-xs sm:text-sm md:text-base">
            {syncing ? "Syncing..." : "Sync Data"}
          </span>
          <span className="rounded-full bg-red-600 px-1.5 py-0.5 text-xs font-normal text-white sm:text-sm">
            {pendingSyncCount}
          </span>
        </button>

        <div className="hidden shrink-0 sm:flex items-center">
          <span
            className={`mr-2 h-2.5 w-2.5 rounded-full ${
              pendingSyncCount > 0 ? "bg-amber-500" : "bg-emerald-500"
            }`}
          />
          <span className="text-xs font-medium text-slate-500">
            {pendingSyncCount > 0 ? `${pendingSyncCount} Pending` : "Live"}
          </span>
        </div>
      </div>
    </header>
  );
}
