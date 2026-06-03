"use client";

import React, { useState, useEffect } from "react";
import { apiRequest } from "../../authservice/api";
import { hasPermission, parseStoredPermissions } from "../../authservice/permissions";
import { listLabOrders } from "../../authservice/labApi";

const PeriodSummary = () => {
  const [summaryItems, setSummaryItems] = useState([
    { label: "Sales Transactions", value: 0 },
    { label: "Tests Conducted", value: 0 },
    { label: "Total Expenses", value: 0 },
  ]);

  useEffect(() => {
    const fetchPeriodData = async () => {
      try {
        const today = new Date();
        const startDate = new Date();
        startDate.setDate(today.getDate() - 30);
        const permissions = parseStoredPermissions();

        const canSaleView = hasPermission("SALE_VIEW", permissions);
        const canTestView = hasPermission("TEST_VIEW", permissions);
        const canExpenseView = hasPermission("EXPENSE_VIEW", permissions);

        // ---------------- SALES (COMPLETED ONLY) ----------------
        const salesRes = canSaleView ? await apiRequest("/sales") : { data: [] };
        const salesData = Array.isArray(salesRes?.data)
          ? salesRes.data
          : Array.isArray(salesRes?.data?.data)
          ? salesRes.data.data
          : [];

        const completedSalesLast30 = salesData.filter((sale) => {
          const saleDate = new Date(sale.saleDate || sale.createdAt || sale.date);
          const isCompleted =
            (sale.status && sale.status.toLowerCase() === "completed") ||
            (sale.paymentStatus && sale.paymentStatus.toLowerCase() === "paid");

          return isCompleted && saleDate >= startDate;
        });

        // ---------------- TESTS ----------------
        const testsRes = canTestView
          ? await listLabOrders({ suppressErrorToast: true, suppressErrorLog: true })
          : [];
        const testsData = Array.isArray(testsRes)
          ? testsRes
          : Array.isArray(testsRes?.data)
          ? testsRes.data
          : Array.isArray(testsRes?.data?.data)
          ? testsRes.data.data
          : [];

        const testsLast30 = testsData.filter(
          (t) => new Date(t.createdAt || t.date) >= startDate
        );

        // ---------------- EXPENSES ----------------
        const expensesRes = canExpenseView ? await apiRequest("/expenses") : { data: [] };
        const expensesData = Array.isArray(expensesRes?.data)
          ? expensesRes.data
          : Array.isArray(expensesRes?.data?.data)
          ? expensesRes.data.data
          : [];

        const expensesLast30 = expensesData.filter(
          (e) => new Date(e.createdAt || e.date) >= startDate
        );

        const totalExpenses = expensesLast30.reduce(
          (sum, e) => sum + Number(e.totalamount || 0),
          0
        );

        setSummaryItems([
          { label: "Sales Transactions", value: completedSalesLast30.length },
          { label: "Tests Conducted", value: testsLast30.length },
          { label: "Total Expenses", value: totalExpenses.toFixed(2) },
        ]);
      } catch (error) {
        console.error("Failed to fetch period summary:", error);
      }
    };

    fetchPeriodData();
  }, []);

  return (
    <div className="rounded-xl text-card-foreground border-0 shadow-lg bg-white/80 backdrop-blur">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="font-semibold leading-none tracking-tight text-lg">
          Period Summary (Last 30 Days)
        </div>
      </div>

      <div className="p-6 pt-0 grid grid-cols-2 md:grid-cols-3 gap-4">
        {summaryItems.map((item) => (
          <div
            key={item.label}
            className="text-center p-4 bg-slate-50 rounded-lg"
          >
            <p className="text-sm text-slate-600 mb-1">{item.label}</p>
            <p className="text-xl font-bold text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeriodSummary;
