"use client";

import Link from "next/link";
import { Eye, Laptop, Star, Trash2, Edit } from "lucide-react";

export default function CustomersGridView({
  paginatedCustomers,
  setViewCustomer,
  getStatusBadge,
  handleDeleteCustomer,
  canEditCustomer = true,
  canDeleteCustomer = true,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {paginatedCustomers.map((customer) => (
        <div
          key={customer.id}
          className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-xl border border-white/70 dark:border-gray-700/70 overflow-hidden hover:border-blue-400 hover:shadow-xl shadow-lg shadow-black/5 transition-all duration-300"
        >
          <div className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-md transform group-hover:scale-105 transition-transform">
                  <span className="text-lg font-bold text-white">
                    {customer.name?.charAt(0)}
                  </span>
                </div>
                {customer.tags?.includes("VIP") && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Star className="w-2.5 h-2.5 text-white" />
                  </div>
                )}
              </div>
            </div>

            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">
              {customer.name}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2.5">
              Customer since{" "}
              {customer.customerSince
                ? new Date(customer.customerSince).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })
                : "-"}
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {getStatusBadge(customer.status)}
              {customer.tags?.slice(0, 2).map((tag) => (
                <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium">
                  {tag}
                </span>
              ))}
              {customer.tags?.length > 2 && (
                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium">
                  +{customer.tags.length - 2}
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-2.5 mb-3">
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Total Pending</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">
                  PKR {(Number(customer.exactPendingAmount) || 0).toLocaleString()}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-2.5">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Satisfaction</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-yellow-500" />
                  {customer.satisfaction || 0}%
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
              <Laptop className="w-3.5 h-3.5" />
              <span className="truncate flex-1">Last: {customer.lastPurchase}</span>
            </div>

            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <Link
                  href={`/AdminDashboard/customers/${customer.id}`}
                  className="flex-1 px-3 py-1.5 rounded-lg text-center text-xs font-medium transition bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 flex items-center justify-center gap-2"
                >
                  <Eye className="w-3.5 h-3.5" />
                  View
                </Link>
                <Link
                  href={canEditCustomer ? `/AdminDashboard/customers/Edit?id=${customer.id}` : "#"}
                  aria-disabled={!canEditCustomer}
                  onClick={(event) => {
                    if (!canEditCustomer) event.preventDefault();
                  }}
                  className={`flex-1 px-3 py-1.5 rounded-lg text-center text-xs font-medium transition flex items-center justify-center gap-2 ${
                    canEditCustomer
                      ? "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/50"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <Edit className="w-3.5 h-3.5" />
                  Edit
                </Link>
                <button
                  onClick={() => handleDeleteCustomer(customer)}
                  disabled={!canDeleteCustomer}
                  className={`p-1.5 rounded-lg transition ${
                    canDeleteCustomer
                      ? "bg-red-100 dark:bg-red-900/20 text-red-600 hover:bg-red-200 dark:hover:bg-red-900/40"
                      : "bg-gray-100 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

