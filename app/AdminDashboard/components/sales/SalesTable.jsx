"use client";

import React, { useEffect, useState } from "react";
import SalesRow from "./SalesRow";
import { apiRequest } from "./../../authservice/api";
import { formatDateDDMMYYYY } from "../../utils/formatting";

const getChargedSaleQuantity = (product = {}) =>
  Math.max(
    Number(product?.chargedQuantity ?? product?.quantity ?? product?.qty ?? 0) -
      Number(product?.returnedQuantity || 0),
    0
  );

const getDeductedSaleQuantity = (product = {}) =>
  Math.max(Number(product?.quantity ?? product?.qty ?? 0) - Number(product?.returnedQuantity || 0), 0);

const SalesTable = ({
  sales,
  search = "",
  filter = "all",
  onInvoiceClick,
  selectedSaleIds = [],
  setSelectedSaleIds,
}) => {
  const [allSales, setAllSales] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;
  const hasProvidedSales = Array.isArray(sales);
  const todayStr = formatDateDDMMYYYY(new Date());

  // Fetch all sales once
  useEffect(() => {
    if (hasProvidedSales) return;

    const fetchSales = async () => {
      try {
        const res = await apiRequest("/sales", { method: "GET" });
        if (res?.success) {
          // Calculate profit for each sale
          const enriched = res.data.map((sale) => {
            const profit =
              sale.products?.reduce((sum, p) => {
                const chargedQuantity = getChargedSaleQuantity(p);
                const deductedQuantity = getDeductedSaleQuantity(p);
                return sum + Number(p.salePrice || 0) * chargedQuantity - Number(p.purchasePrice || 0) * deductedQuantity;
              }, 0) || 0;
            return { ...sale, profit };
          });
          setAllSales(enriched);
        }
      } catch (err) {
        console.error("Failed to fetch sales:", err);
      }
    };

    fetchSales();
  }, []);

  // Filter sales by search and date
  const filteredSales = hasProvidedSales
    ? sales
    : allSales.filter((sale) => {
      const matchSearch =
        (sale.invoiceNumber?.toString().toLowerCase().includes(search.toLowerCase()) || false) ||
        (sale.customerName?.toLowerCase().includes(search.toLowerCase()) || false);

      const saleDateStr = formatDateDDMMYYYY(sale.createdAt);
      const matchFilter = filter === "all" || (filter === "today" && saleDateStr === todayStr);

      return matchSearch && matchFilter;
    });

  const totalPages = Math.max(1, Math.ceil(filteredSales.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedSales = filteredSales.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const paginatedSaleIds = paginatedSales.map((sale) => String(sale._id || sale.invoiceNumber || ""));
  const hasPaginatedSales = paginatedSaleIds.length > 0;
  const allVisibleSelected =
    hasPaginatedSales && paginatedSaleIds.every((id) => selectedSaleIds.includes(id));

  // Reset page only when explicit filters change (not on live refresh data updates).
  useEffect(() => {
    setCurrentPage(1);
  }, [search, filter]);

  useEffect(() => {
    if (typeof setSelectedSaleIds !== "function") return;
    const validIds = new Set(filteredSales.map((sale) => String(sale._id || sale.invoiceNumber || "")));
    setSelectedSaleIds((prev) => prev.filter((id) => validIds.has(id)));
  }, [filteredSales, setSelectedSaleIds]);

  // Keep current page valid if total pages shrink after filtering.
  useEffect(() => {
    setCurrentPage((prev) => Math.min(prev, totalPages));
  }, [totalPages]);

  const goToPrevPage = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goToNextPage = () => setCurrentPage((p) => Math.min(totalPages, p + 1));
  const toggleSaleSelection = (saleId) => {
    if (typeof setSelectedSaleIds !== "function") return;
    setSelectedSaleIds((prev) =>
      prev.includes(saleId) ? prev.filter((id) => id !== saleId) : [...prev, saleId]
    );
  };

  const toggleVisibleSelections = () => {
    if (typeof setSelectedSaleIds !== "function") return;
    setSelectedSaleIds((prev) => {
      if (allVisibleSelected) {
        return prev.filter((id) => !paginatedSaleIds.includes(id));
      }

      return [...new Set([...prev, ...paginatedSaleIds])];
    });
  };

  return (
    <div className="overflow-x-auto rounded-2xl border border-white/80 bg-white/95 shadow-sm backdrop-blur-sm">
      <table className="w-full min-w-[900px] whitespace-nowrap text-sm">
        <thead className="sticky top-0 z-10 bg-slate-900">
          <tr>
            {[
              "",
              "Invoice",
              "Date & Time",
              "Customer",
              "Items",
              "Payment",
              "Amount",
              "Profit",
              "Status",
            ].map((h, index) => (
              <th key={`${h}-${index}`} className="h-11 px-3 text-left text-xs font-bold uppercase tracking-wide text-white">
                {index === 0 ? (
                  <input
                    type="checkbox"
                    checked={allVisibleSelected}
                    onChange={toggleVisibleSelections}
                    disabled={!hasPaginatedSales}
                    aria-label="Select all sales on current page"
                    className="h-4 w-4 cursor-pointer rounded border-slate-300 text-sky-600 focus:ring-sky-500 disabled:cursor-not-allowed"
                  />
                ) : (
                  h
                )}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {paginatedSales.length > 0 ? (
            paginatedSales.map((sale) => (
              <SalesRow
                key={sale._id}
                sale={sale}
                onInvoiceClick={onInvoiceClick}
                isSelected={selectedSaleIds.includes(String(sale._id || sale.invoiceNumber || ""))}
                onToggleSelect={toggleSaleSelection}
              />
            ))
          ) : (
            <tr>
              <td colSpan="9" className="p-6 text-center text-slate-500">
                No sales found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {filteredSales.length > 0 && (
        <div className="flex flex-col items-stretch gap-2 border-t border-slate-200 p-3 sm:flex-row sm:items-center sm:justify-end">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className="h-9 w-full rounded-lg border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
          >
            Prev
          </button>
          <span className="text-center text-xs font-semibold text-slate-600">
            Page {currentPage} / {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="h-9 w-full rounded-lg border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default SalesTable;
