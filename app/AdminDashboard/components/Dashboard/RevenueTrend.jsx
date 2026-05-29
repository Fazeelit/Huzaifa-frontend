"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { apiRequest } from "./../../authservice/api";
import { usePermissions } from "../../authservice/usePermissions";
import { listLabOrders } from "../../authservice/labApi";
import { formatDateDDMMYYYY } from "../../utils/formatting";

/**
 * Normalize API response
 */
const getArray = (res) =>
  Array.isArray(res?.data)
    ? res.data
    : Array.isArray(res?.data?.data)
    ? res.data.data
    : [];

const RevenueTrend = () => {
  const [data, setData] = useState([]);
  const chartHostRef = useRef(null);
  const [chartReady, setChartReady] = useState(false);
  const [chartSize, setChartSize] = useState({ width: 0, height: 300 });
  const { can } = usePermissions();
  const isCompactChart = chartSize.width > 0 && chartSize.width < 480;

  useEffect(() => {
    const fetchRevenue = async () => {
      try {
        const canSaleView = can("SALE_VIEW");
        const canTestView = can("TEST_VIEW");

        const safeFetch = async (endpoint, allowed) => {
          if (!allowed) return { data: [] };
          try {
            return await apiRequest(endpoint, {
              suppressErrorToast: true,
              suppressErrorLog: true,
            });
          } catch {
            return { data: [] };
          }
        };

        const [salesRes, testsRes] = await Promise.all([
          safeFetch("/sales", canSaleView),
          canTestView ? listLabOrders({ suppressErrorToast: true, suppressErrorLog: true }) : Promise.resolve([]),
        ]);

        const sales = getArray(salesRes);
        const tests = Array.isArray(testsRes) ? testsRes : getArray(testsRes);

        // Get last 7 days
        const today = new Date();
        const last7Days = Array.from({ length: 7 }).map((_, i) => {
          const d = new Date();
          d.setDate(today.getDate() - (6 - i)); // oldest first
          d.setHours(0, 0, 0, 0);
          return d;
        });

        const revenueData = last7Days.map((day) => {
          const dayStr = formatDateDDMMYYYY(day);

          // Calculate revenue for the day
          const dayRevenue =
            sales
              .filter(
                (s) =>
                  new Date(s.createdAt).toDateString() === day.toDateString()
              )
              .reduce((sum, s) => sum + Number(s.profit || 0), 0) +
            tests
              .filter(
                (t) =>
                  new Date(t.createdAt).toDateString() === day.toDateString()
              )
              .reduce((sum, t) => sum + Number(t.totalfee || 0), 0);

          return { date: dayStr, revenue: dayRevenue };
        });

        setData(revenueData);
      } catch (error) {
        setData([]);
      }
    };

    fetchRevenue();
  }, [can]);

  useEffect(() => {
    const node = chartHostRef.current;
    if (!node) return undefined;

    const updateChartReady = () => {
      const { width, height } = node.getBoundingClientRect();
      const resolvedHeight = width > 0 && width < 640 ? 240 : Math.max(Math.floor(height), 300);
      setChartSize({
        width: Math.max(Math.floor(width), 0),
        height: resolvedHeight,
      });
      setChartReady(width > 0 && height > 0);
    };

    updateChartReady();

    const observer = new ResizeObserver(updateChartReady);
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm backdrop-blur-sm sm:p-6">
      <div className="mb-4 text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
        Revenue Trend (Last 7 Days)
      </div>
      <div ref={chartHostRef} className="h-[240px] min-h-[240px] w-full min-w-0 overflow-hidden sm:h-[300px] sm:min-h-[300px]">
        {chartReady ? (
          <LineChart
            width={chartSize.width}
            height={chartSize.height}
            data={data}
            margin={{
              top: 5,
              right: isCompactChart ? 8 : 20,
              bottom: isCompactChart ? 20 : 5,
              left: isCompactChart ? -16 : 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="date"
              stroke="#64748b"
              tick={{ fontSize: isCompactChart ? 10 : 12 }}
              interval="preserveStartEnd"
              angle={isCompactChart ? -20 : 0}
              textAnchor={isCompactChart ? "end" : "middle"}
              height={isCompactChart ? 46 : 30}
            />
            <YAxis
              stroke="#64748b"
              tick={{ fontSize: isCompactChart ? 10 : 12 }}
              width={isCompactChart ? 44 : 60}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 12px rgba(15,23,42,0.08)",
              }}
            />
            {!isCompactChart ? <Legend /> : null}
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#14B8A6"
              strokeWidth={3}
              dot={{ r: isCompactChart ? 3 : 5 }}
            />
          </LineChart>
        ) : null}
      </div>
    </div>
  );
};

export default RevenueTrend;
