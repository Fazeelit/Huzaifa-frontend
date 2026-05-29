"use client";
import React, { useEffect, useState } from "react";
import { apiRequest } from "./../../authservice/api";

const ExpenseCard = ({ title, icon, iconBg, textColor, hideValue = false, showValue = true }) => {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const response = await apiRequest("/expenses", { method: "GET" });
      if (response?.success) {
        const expenses = response.data || [];
        let computedValue = 0;

        // Compute value based on card title
        switch (title.toLowerCase()) {
          case "total expenses":
            computedValue = expenses.reduce(
              (acc, exp) => acc + Number(exp.amount || 0),
              0
            );
            break;
          case "pending payments":
            computedValue = expenses
              .filter((exp) => exp.paymentStatus === "Pending")
              .reduce((acc, exp) => acc + Number(exp.amount || 0), 0);
            break;
          case "completed payments":
            computedValue = expenses
              .filter((exp) => exp.paymentStatus === "Completed")
              .reduce((acc, exp) => acc + Number(exp.amount || 0), 0);
            break;
          default:
            computedValue = expenses.length; // fallback: show total count
        }

        setValue(computedValue);
      } else {
        throw new Error(response?.message || "Failed to fetch expenses");
      }
    } catch (err) {
      console.error("ExpenseCard fetch error:", err);
      setError(err?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="rounded-xl border-0 bg-white/80 p-4 shadow-lg backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-sm text-slate-600">{title}</p>
          {loading ? (
            <p className={`mt-1 break-words text-2xl font-bold ${textColor}`}>...</p>
          ) : error ? (
            <p className="mt-1 break-words text-sm text-red-600">{error}</p>
          ) : (
            <p className={`mt-1 break-words text-2xl font-bold ${textColor}`}>
              {hideValue && !showValue ? "****" : value.toLocaleString()}
            </p>
          )}
        </div>
        {icon && (
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12 ${iconBg}`}
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseCard;
