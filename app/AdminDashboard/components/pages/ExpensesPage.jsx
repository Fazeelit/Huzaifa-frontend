"use client";

import React, { useEffect, useMemo, useState } from "react";
import ExpenseCard from "../expense/ExpenseCard";
import ExpensesTable from "../expense/ExpenseTable";
import ExpenseCreateModal from "../expense/ExpenseCreateModal";
import { apiRequest } from "./../../authservice/api";

import { Eye, EyeOff, Plus, TrendingDown, Receipt, Search } from "lucide-react";
import { usePermissions } from "../../authservice/usePermissions";
import { blockedButtonClass, blockedButtonProps } from "../../authservice/permissions";

const ExpensesPage = () => {
  const { crud } = usePermissions();
  const { canCreate, canEdit, canDelete } = crud("EXPENSE");
  const [expenses, setExpenses] = useState([]);
  const [categorySearch, setCategorySearch] = useState("");
  const [showSummaryValues, setShowSummaryValues] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const fetchExpenses = async ({ silent = false } = {}) => {
    try {
      const response = await apiRequest("/expenses", { method: "GET" });
      if (response?.success) {
        setExpenses(response.data || []);
      } else if (!silent) {
        console.error("Failed to fetch expenses:", response?.message);
      }
    } catch (error) {
      if (!silent) {
        console.error("Failed to fetch expenses:", error);
      }
    }
  };

  useEffect(() => {
    fetchExpenses();

    const intervalId = setInterval(() => {
      fetchExpenses({ silent: true });
    }, 5000);

    const handleFocus = () => fetchExpenses({ silent: true });
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchExpenses({ silent: true });
      }
    };

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Handle save (create or update)
  const handleSave = (expense) => {
    if (editData) {
      // Update existing expense
      setExpenses((prev) =>
        prev.map((e) => (e.id === editData.id ? { ...expense, id: editData.id } : e))
      );
    } else {
      // Add new expense
      setExpenses((prev) => [...prev, { ...expense, id: Date.now() }]);
    }
    setEditData(null);
    setModalOpen(false);
  };

  // Handle edit click
  const handleEdit = (expense) => {
    if (!canEdit) return;
    setEditData(expense);
    setModalOpen(true);
  };

  const handleDelete = async (expense) => {
    if (!canDelete) return;
    if (!expense?._id) return;

    try {
      const response = await apiRequest(`/expenses/deleteExpense/${expense._id}`, {
        method: "DELETE",
      });

      if (response?.success === false) {
        console.error("Delete expense failed:", response?.message);
      } else {
        setExpenses((prev) => prev.filter((e) => e._id !== expense._id));
      }
    } catch (error) {
      console.error("Delete expense failed:", error);
    }
  };

  const filteredExpenses = useMemo(() => {
    const term = categorySearch.trim().toLowerCase();
    if (!term) return expenses;

    return expenses.filter((expense) =>
      String(expense?.category || "").toLowerCase().includes(term)
    );
  }, [expenses, categorySearch]);

  return (
    <main className="space-y-6 p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Expenses</h1>
          <p className="text-slate-600 mt-1">Track and manage business expenses</p>
        </div>
        <button
          className={`inline-flex h-9 w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg hover:border-none hover:from-blue-600 hover:to-blue-700 sm:w-auto ${blockedButtonClass} blocked-action`}
          onClick={() => {
            if (!canCreate) return;
            setEditData(null); // Ensure create modal
            setModalOpen(true);
          }}
          {...blockedButtonProps(canCreate)}
        >
          <Plus className="w-5 h-5" />
          Add Expense
        </button>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setShowSummaryValues((prev) => !prev)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50 sm:w-auto"
        >
          {showSummaryValues ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {showSummaryValues ? "Hide Values" : "Show Values"}
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <ExpenseCard
          title="This Month"
          value="$0.00"
          icon={<TrendingDown className="w-6 h-6 text-white" />}
          iconBg="bg-gradient-to-br from-red-500 to-red-600"
          textColor="text-red-600"
        />
        <ExpenseCard
          title="Total Expenses"
          value={expenses.length}
          hideValue={true}
          showValue={showSummaryValues}
          icon={<Receipt className="w-6 h-6 text-white" />}
          iconBg="bg-gradient-to-br from-slate-500 to-slate-600"
          textColor="text-slate-900"
        />
        <ExpenseCard title="Top Category" value="" />
      </div>

      {/* Search */}
      <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-sm">
        <label htmlFor="expense-category-search" className="sr-only">
          Search by category
        </label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            id="expense-category-search"
            type="text"
            value={categorySearch}
            onChange={(e) => setCategorySearch(e.target.value)}
            placeholder="Search by category"
            className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100"
          />
        </div>
      </div>

      {/* Expenses Table */}
      <ExpensesTable
        data={filteredExpenses}
        onEdit={handleEdit}
        onDelete={handleDelete}
        canEdit={canEdit}
        canDelete={canDelete}
      />

      {/* Modal */}
      {modalOpen && (canCreate || canEdit) && (
        <ExpenseCreateModal
          isOpen={modalOpen}
          editData={editData}
          onClose={() => {
            setModalOpen(false);
            setEditData(null);
          }}
          onSave={handleSave}
        />
      )}
    </main>
  );
};

export default ExpensesPage;
