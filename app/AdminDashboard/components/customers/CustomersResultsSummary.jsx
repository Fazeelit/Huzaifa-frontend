"use client";

export default function CustomersResultsSummary({
  paginatedCustomers,
  filteredCustomers,
  searchTerm
}) {
  return (
    <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <p className="inline-flex flex-wrap items-center gap-2 rounded-lg border border-white/70 bg-white/70 px-3 py-1.5 text-xs text-gray-600 shadow-sm backdrop-blur dark:border-gray-700/70 dark:bg-gray-800/70 dark:text-gray-400">
        Showing <span className="font-semibold text-gray-900 dark:text-white">
          {paginatedCustomers.length}
        </span> of <span className="font-semibold text-gray-900 dark:text-white">
          {filteredCustomers.length}
        </span> customers
        {searchTerm && ` matching "${searchTerm}"`}
      </p>

    </div>
  );
}
