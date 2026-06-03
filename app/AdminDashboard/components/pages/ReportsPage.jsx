"use client";

import React from "react";

import SummaryCards from "../report/SummaryCards";
import CashReportSection from "../report/CashReportSection";
import SalesStatementSection from "../report/SalesStatementSection";
import ExpensesCategoryChart from "../report/ExpensesCategoryChart";
import ProfitLossReportSection from "../report/ProfitLossReportSection";
import PeriodSummary from "../report/PeriodSummary";

const ReportsPage = () => {
  return (
    <main className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Reports & Analytics</h1>
      </div>

      <SummaryCards />
      <CashReportSection />
      <SalesStatementSection />
      <ExpensesCategoryChart />
      <ProfitLossReportSection />
      <PeriodSummary />
    </main>
  );
};

export default ReportsPage;
