"use client";

import { ChevronDown, Grid3x3, List, RefreshCw, Search, SlidersHorizontal, Tag, X } from "lucide-react";

export default function CustomersFilterBar({
  searchTerm,
  setSearchTerm,
  showFilters,
  setShowFilters,
  sortBy,
  setSortBy,
  sortOptions,
  viewMode,
  setViewMode,
  statusFilters,
  selectedStatus,
  setSelectedStatus,
  tagFilters,
  selectedTag,
  setSelectedTag
}) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-xl shadow-lg shadow-black/5 border border-white/70 dark:border-gray-700/70 p-4 mb-4">
      <div className="flex flex-col gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search by name, email, phone, CNIC, address, or last purchase..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-lg border border-gray-200/80 dark:border-gray-700 bg-white/90 dark:bg-gray-900/80 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-2 rounded-lg border flex items-center gap-2 transition text-sm ${showFilters
              ? "border-blue-500 bg-blue-50/70 dark:bg-blue-900/20 text-blue-600"
              : "border-gray-200/80 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span className="font-medium">Filters</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200/80 dark:border-gray-700 bg-white/90 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm font-medium focus:outline-none focus:border-blue-500"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <div className="flex ml-auto border border-gray-200/80 dark:border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-2 transition flex items-center gap-2 text-sm ${viewMode === "grid"
                ? "bg-blue-500 text-white"
                : "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <Grid3x3 className="w-4 h-4" />
              <span className="hidden sm:inline">Grid</span>
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-3 py-2 transition flex items-center gap-2 text-sm ${viewMode === "list"
                ? "bg-blue-500 text-white"
                : "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">List</span>
            </button>
          </div>
        </div>

        {showFilters && (
            <div className="mt-3 pt-3 border-t border-gray-200/70 dark:border-gray-700 space-y-3">
            <div>
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Status</p>
              <div className="flex flex-wrap gap-2">
                {statusFilters.map((filter) => (
                  <button
                    key={filter.value}
                    onClick={() => setSelectedStatus(filter.value)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium inline-flex items-center gap-2 transition ${selectedStatus === filter.value
                      ? "bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {filter.icon ? <filter.icon className="w-3.5 h-3.5" /> : null}
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Customer Tags</p>
              <div className="flex flex-wrap gap-2">
                {tagFilters.map((tag) => (
                  <button
                    key={tag.value}
                    onClick={() => setSelectedTag(tag.value)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium flex items-center gap-2 transition ${selectedTag === tag.value
                      ? "bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-md"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    {tag.value !== "All" && <Tag className="w-3.5 h-3.5" />}
                    {tag.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedStatus("all");
                setSelectedTag("All");
                setSearchTerm("");
              }}
              className="text-blue-600 dark:text-blue-400 text-xs font-medium flex items-center gap-2 hover:underline"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
