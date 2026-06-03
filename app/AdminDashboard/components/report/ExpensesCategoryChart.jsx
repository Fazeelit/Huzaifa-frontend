"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { apiRequest } from "../../authservice/api";
import { hasPermission, parseStoredPermissions } from "../../authservice/permissions";

const COLORS = [
  "#0EA5E9", "#F87171", "#34D399", "#FBBF24", "#A78BFA",
  "#F472B6", "#A3E635", "#FCD34D", "#60A5FA", "#818CF8",
  "#F59E0B", "#E11D48",
];

const formatDateInput = (date) => date.toISOString().split("T")[0];

const buildDefaultDates = () => {
  const end = new Date();
  end.setHours(0, 0, 0, 0);
  const start = new Date(end);
  start.setDate(start.getDate() - 29);
  return { start, end };
};

const isExcludedFebDay = (date) => {
  if (!date) return false;
  return date.getMonth() === 1 && (date.getDate() === 28 || date.getDate() === 29);
};

const parseLocalDate = (value) => {
  if (!value) return null;

  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : new Date(value);
  }

  const normalized = String(value).trim();
  const isoMatch = normalized.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) {
    const [, yyyy, mm, dd] = isoMatch;
    const date = new Date(Number(yyyy), Number(mm) - 1, Number(dd));
    return Number.isNaN(date.getTime()) ? null : date;
  }

  const parsed = new Date(normalized);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const getExpenseAmount = (expense) =>
  Number(expense?.amount ?? expense?.totalamount ?? 0);

const getExpenseDate = (expense) =>
  parseLocalDate(expense?.date || expense?.createdAt);

const normalizeExpense = (expense) => ({
  ...expense,
  amountValue: getExpenseAmount(expense),
  expenseDate: getExpenseDate(expense),
  categoryLabel: expense?.category || "Other",
  descriptionLabel: expense?.description || "-",
});

const ExpensesCategoryChart = () => {
  const { start: defaultStart, end: defaultEnd } = buildDefaultDates();
  const chartHostRef = useRef(null);
  const [chartReady, setChartReady] = useState(false);
  const [chartSize, setChartSize] = useState({ width: 0, height: 288 });
  const [startDate, setStartDate] = useState(formatDateInput(defaultStart));
  const [endDate, setEndDate] = useState(formatDateInput(defaultEnd));
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      const permissions = parseStoredPermissions();
      const canExpenseView = hasPermission("EXPENSE_VIEW", permissions);

      if (!canExpenseView) {
        setExpenses([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await apiRequest("/expenses", { method: "GET" });

        if (response?.success === false) {
          console.error("Failed to fetch expenses:", response?.message);
          setExpenses([]);
          return;
        }

        const rawExpenses = Array.isArray(response?.data)
          ? response.data
          : Array.isArray(response?.data?.data)
          ? response.data.data
          : [];

        setExpenses(rawExpenses.map(normalizeExpense));
      } catch (error) {
        console.error("Failed to fetch expenses:", error);
        setExpenses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  const filteredExpenses = useMemo(() => {
    const start = parseLocalDate(startDate);
    const end = parseLocalDate(endDate);

    if (!start || !end) return [];

    end.setHours(23, 59, 59, 999);

    return expenses.filter((expense) => {
      if (!expense.expenseDate) return false;
      if (isExcludedFebDay(expense.expenseDate)) return false;
      return expense.expenseDate >= start && expense.expenseDate <= end;
    });
  }, [expenses, startDate, endDate]);

  const chartData = useMemo(() => {
    const categoryMap = filteredExpenses.reduce((acc, expense) => {
      acc[expense.categoryLabel] = (acc[expense.categoryLabel] || 0) + expense.amountValue;
      return acc;
    }, {});

    return Object.entries(categoryMap).map(([category, value]) => ({
      category,
      value,
    }));
  }, [filteredExpenses]);

  const totalExpenseAmount = useMemo(
    () => filteredExpenses.reduce((sum, expense) => sum + expense.amountValue, 0),
    [filteredExpenses]
  );

  useEffect(() => {
    const node = chartHostRef.current;
    if (!node) return undefined;

    const updateChartReady = () => {
      const { width, height } = node.getBoundingClientRect();
      setChartSize({
        width: Math.max(Math.floor(width), 0),
        height: Math.max(Math.floor(height), 288),
      });
      setChartReady(width > 0 && height > 0);
    };

    updateChartReady();

    const observer = new ResizeObserver(updateChartReady);
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const handleExportExpenseReport = () => {
    const doc = new jsPDF();
    const generatedAt = new Date().toLocaleString("en-IN");

    doc.setFontSize(18);
    doc.text("Expense Report", 14, 20);
    doc.setFontSize(11);
    doc.text(`From: ${startDate}  To: ${endDate}`, 14, 28);
    doc.text(`Total Expenses: PKR ${totalExpenseAmount.toFixed(2)}`, 14, 34);
    doc.text(`Generated: ${generatedAt}`, 14, 40);

    autoTable(doc, {
      startY: 48,
      tableWidth: 180,
      head: [["Category", "Amount (PKR)"]],
      body: chartData.length
        ? chartData.map((row) => [row.category, row.value.toFixed(2)])
        : [["No data", "0.00"]],
      styles: {
        fontSize: 10,
        cellPadding: 3,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
        halign: "center",
      },
      headStyles: {
        fillColor: [37, 99, 235],
        textColor: [255, 255, 255],
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
        halign: "center",
      },
      columnStyles: {
        0: { halign: "center", cellWidth: 90 },
        1: { halign: "center" },
      },
    });

    let runningBalance = 0;
    const expenseRows = filteredExpenses.map((expense, index) => {
      runningBalance += expense.amountValue;

      return [
        index + 1,
        expense.expenseDate ? expense.expenseDate.toLocaleDateString("en-IN") : "-",
        expense.vendor || "-",
        expense.categoryLabel,
        expense.descriptionLabel,
        expense.amountValue.toFixed(2),
        runningBalance.toFixed(2),
      ];
    });

    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 8,
      tableWidth: 180,
      head: [["#", "Date", "Vendor", "Category", "Description", "Amount (PKR)", "Balance"]],
      body: expenseRows.length
        ? expenseRows
        : [["", "", "", "No expenses found for the selected date range.", "", "", ""]],
      styles: {
        fontSize: 9,
        cellPadding: 2.5,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
        halign: "center",
      },
      headStyles: {
        fillColor: [15, 23, 42],
        textColor: [255, 255, 255],
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
        halign: "center",
      },
      columnStyles: {
        0: { halign: "center", cellWidth: 10 },
        1: { halign: "center", cellWidth: 22 },
        2: { halign: "center", cellWidth: 28 },
        3: { halign: "center", cellWidth: 24 },
        4: { halign: "center", cellWidth: 46 },
        5: { halign: "center", cellWidth: 25 },
        6: { halign: "center", cellWidth: 25 },
      },
    });

    doc.save(`Expense_Report_${startDate}_to_${endDate}.pdf`);
  };

  if (loading) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white/80 p-6 text-center shadow-lg backdrop-blur">
        Loading expense data...
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white/80 shadow-lg backdrop-blur">
      <div className="flex flex-col gap-3 p-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Expenses by Category</h3>
          <p className="text-sm text-gray-500">
            {startDate} to {endDate}
          </p>
          <p className="text-sm font-medium text-gray-700">
            Total: PKR {totalExpenseAmount.toFixed(2)}
          </p>
        </div>

        <div className="flex flex-wrap items-end gap-2 sm:justify-end">
          <label className="flex flex-col gap-1 text-xs font-medium text-gray-600">
            From
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              max={endDate}
              className="h-9 rounded-md border border-gray-300 px-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </label>

          <label className="flex flex-col gap-1 text-xs font-medium text-gray-600">
            To
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              min={startDate}
              className="h-9 rounded-md border border-gray-300 px-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </label>

          <button
            type="button"
            onClick={handleExportExpenseReport}
            className="h-9 rounded-md bg-blue-600 px-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Export Expense Report
          </button>
        </div>
      </div>

      <div ref={chartHostRef} className="h-72 min-h-72 w-full min-w-0 overflow-hidden p-6 pt-0">
        {chartData.length === 0 ? (
          <div className="flex h-full items-center justify-center text-sm text-gray-600">
            No expense data available for the selected date range
          </div>
        ) : chartReady ? (
          <PieChart width={chartSize.width} height={chartSize.height}>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="category"
              cx="50%"
              cy="50%"
              outerRadius={80}
              innerRadius={40}
              paddingAngle={3}
              label={({ category, value }) =>
                `${category} ${(
                  totalExpenseAmount > 0 ? (value / totalExpenseAmount) * 100 : 0
                ).toFixed(1)}%`
              }
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`${entry.category}-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `PKR ${Number(value || 0).toFixed(2)}`} />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        ) : null}
      </div>
    </div>
  );
};

export default ExpensesCategoryChart;
