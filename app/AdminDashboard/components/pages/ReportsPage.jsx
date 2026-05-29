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
    <main className="mx-auto w-full max-w-full space-y-5 p-3 sm:p-4 lg:max-w-4xl">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold sm:text-2xl">Reports & Analytics</h1>
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
