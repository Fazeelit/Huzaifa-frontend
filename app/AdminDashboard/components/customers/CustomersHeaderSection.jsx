"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  ChevronRight,
  Download,
  Eye,
  EyeOff,
  Star,
  TrendingUp,
  UserPlus,
  Users,
} from "lucide-react";

export default function CustomersHeaderSection({
  stats,
  canCreateCustomer = true,
  onExport,
}) {
  const [showValues, setShowValues] = useState(false);

  return (
    <div className="mb-3">
      <nav className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 mb-4">
        <Link href="/AdminDashboard" className="hover:text-blue-600 dark:hover:text-blue-400">Dashboard</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-gray-900 dark:text-white font-medium">Customers</span>
      </nav>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-3">
          <div className="p-2.5 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl shadow-md">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div className="min-w-0">
            <h1 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
              Customer Management
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
              Manage your customer relationships and track their laptop preferences
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 sm:flex-row">
          <Link
            href={canCreateCustomer ? "/AdminDashboard/customers/add" : "#"}
            aria-disabled={!canCreateCustomer}
            onClick={(event) => {
              if (!canCreateCustomer) event.preventDefault();
            }}
            className={`inline-flex w-full flex-row flex-nowrap items-center justify-center gap-2 whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-semibold transition-all sm:w-auto ${
              canCreateCustomer
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            <UserPlus className="w-4 h-4" />
            <span>Add Customer</span>
          </Link>

          <button
            onClick={onExport}
            className="flex w-full flex-row flex-nowrap items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3.5 py-2 text-sm text-white shadow-md transition-all duration-300 hover:from-violet-600 hover:to-fuchsia-600 hover:shadow-lg hover:-translate-y-0.5 sm:w-auto"
          >
            <Download className="w-4 h-4" />
            <span>Export List</span>
          </button>

        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <button
          type="button"
          onClick={() => setShowValues((prev) => !prev)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 dark:border-gray-700 dark:bg-gray-800/90 dark:text-gray-200 dark:hover:bg-gray-800 sm:w-auto"
        >
          {showValues ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {showValues ? "Hide Values" : "Show Values"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
        <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 rounded-xl p-3 shadow-lg shadow-blue-500/25 border border-white/30 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-base font-bold text-white">Total</span>
            <div className="p-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl">
              <Users className="w-5 h-5 text-white" />
            </div>
          </div>

          <p className="text-xs text-white/85">Registered Customers</p>
          <p className="text-xl font-bold text-white">{stats.total}</p>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 via-green-500 to-blue-500 rounded-xl p-3 shadow-lg shadow-emerald-500/25 border border-white/30 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-base font-bold text-white">Active</span>
            <div className="p-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-white/85">Active Customers</p>
          <p className="text-xl font-bold text-white">{stats.active}</p>
        </div>

        <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 rounded-xl p-3 shadow-lg shadow-orange-500/25 border border-white/30 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-base font-bold text-white">Revenue</span>
            <div className="p-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-white/85">Total Revenue</p>
          <p className="text-xl font-bold text-white">
            {showValues ? `PKR ${stats.totalSpent.toLocaleString()}` : "PKR ****"}
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 rounded-xl p-3 shadow-lg shadow-rose-500/25 border border-white/30 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-base font-bold text-white">Satisfaction</span>
            <div className="p-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg">
              <Star className="w-5 h-5 text-white" />
            </div>
          </div>
          <p className="text-xs text-white/85">Avg. Satisfaction</p>
          <p className="text-xl font-bold text-white">
            {showValues ? `${stats.avgSatisfaction}%` : "****"}
          </p>
        </div>
      </div>
    </div>
  );
}


