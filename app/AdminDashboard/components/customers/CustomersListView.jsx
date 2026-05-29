"use client";

import Link from "next/link";
import { Edit, Eye, Mail, Phone, Trash2 } from "lucide-react";

const formatSpent = (value) => `PKR ${(Number(value) || 0).toLocaleString()}`;

export default function CustomersListView({
  paginatedCustomers,
  getStatusBadge,
  handleDeleteCustomer,
  canEditCustomer = true,
  canDeleteCustomer = true,
  setViewCustomer,
}) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-xl border border-white/70 dark:border-gray-700/70 overflow-hidden shadow-lg shadow-black/5">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px]">
          <thead className="bg-white/60 dark:bg-gray-700/50">
            <tr>
              <th className="px-4 py-2 text-left text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
              <th className="px-4 py-2 text-left text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Contact</th>
              <th className="px-4 py-2 text-left text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-4 py-2 text-left text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Last Purchase</th>
              <th className="px-4 py-2 text-left text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total Spent</th>
              <th className="px-4 py-2 text-left text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Satisfaction</th>
              <th className="px-4 py-2 text-right text-[11px] font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {paginatedCustomers.map((customer) => (
              <tr
                key={customer.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
              >
                <td className="px-4 py-2">
                    <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">
                        {customer.name?.charAt(0)}
                      </span>
                    </div>
                      <div className="min-w-0">
                        <p className="break-words font-medium text-gray-900 dark:text-white">
                          {customer.name}
                        </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Since{" "}
                        {customer.customerSince
                          ? new Date(customer.customerSince).toLocaleDateString("en-US", {
                              month: "short",
                              year: "numeric",
                            })
                          : "-"}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-2">
                  <div className="space-y-1">
                      <p className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 shrink-0" />
                        {customer.email || "-"}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 shrink-0" />
                        {customer.phone || "-"}
                      </p>
                  </div>
                </td>

                <td className="px-4 py-2">{getStatusBadge(customer.status)}</td>

                <td className="px-4 py-2">
                  <p className="text-xs font-medium text-gray-900 dark:text-white">
                    {customer.lastPurchase || "No purchases yet"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Since{" "}
                    {customer.customerSince
                      ? new Date(customer.customerSince).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })
                      : "-"}
                  </p>
                </td>

                <td className="px-4 py-2">
                  <p className="text-xs font-bold text-green-600 dark:text-green-400">
                    {formatSpent(customer.totalSpent)}
                  </p>
                </td>

                <td className="px-4 py-2">
                  <p className="text-xs font-medium text-gray-900 dark:text-white">
                    {customer.satisfaction || 0}%
                  </p>
                </td>

                <td className="px-4 py-2 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/AdminDashboard/customers/${customer.id}`}
                      className="p-1.5 rounded-lg transition hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={canEditCustomer ? `/AdminDashboard/customers/Edit?id=${customer.id}` : "#"}
                      aria-disabled={!canEditCustomer}
                      onClick={(event) => {
                        if (!canEditCustomer) event.preventDefault();
                      }}
                      className={`p-1.5 rounded-lg transition ${
                        canEditCustomer
                          ? "hover:bg-gray-100 dark:hover:bg-gray-700"
                          : "text-gray-300 bg-gray-100 cursor-not-allowed"
                      }`}
                    >
                      <Edit className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => handleDeleteCustomer(customer)}
                      disabled={!canDeleteCustomer}
                      className={`p-1.5 rounded-lg transition ${
                        canDeleteCustomer
                          ? "hover:bg-red-100 dark:hover:bg-red-900/20 text-red-600"
                          : "text-gray-300 bg-gray-100 cursor-not-allowed"
                      }`}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
