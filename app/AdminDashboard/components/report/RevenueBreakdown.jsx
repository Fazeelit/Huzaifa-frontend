"use client";

import React, { useEffect, useState } from "react";
import { apiRequest } from "./../../authservice/api";
import {
  hasPermission,
  parseStoredPermissions,
} from "../../authservice/permissions";

const getRollingWindowDays = (baseDate = new Date()) => {
  const month = baseDate.getMonth();
  if (month !== 1) return 30;

  const year = baseDate.getFullYear();
  return new Date(year, 2, 0).getDate();
};

const getRollingWindow = (baseDate = new Date()) => {
  const days = getRollingWindowDays(baseDate);
  const start = new Date(baseDate);
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - (days - 1));

  const end = new Date(baseDate);
  end.setHours(23, 59, 59, 999);

  return { start, end, days };
};

const calculateSaleProfit = (sale, products) =>
  sale.products?.reduce((sum, productLine) => {
    const product = products.find(
      (item) =>
        item._id === productLine.productId || item.name === productLine.name
    );
    const chargedQuantity = Math.max(
      Number(productLine.chargedQuantity ?? productLine.quantity ?? productLine.qty ?? 0) -
        Number(productLine.returnedQuantity ?? 0),
      0
    );
    const deductedQuantity = Math.max(
      Number(productLine.quantity ?? productLine.qty ?? 0) -
        Number(productLine.returnedQuantity ?? 0),
      0
    );
    const unitCost = Number(
      productLine.purchasePrice ??
        productLine.cost ??
        product?.purchasePrice ??
        product?.cost ??
        0
    );
    const unitPrice = Number(
      productLine.salePrice ??
        productLine.price ??
        product?.salePrice ??
        product?.price ??
        0
    );

    return sum + unitPrice * chargedQuantity - unitCost * deductedQuantity;
  }, 0) || 0;

const RevenueBreakdown = () => {
  const [revenueItems, setRevenueItems] = useState([
    {
      label: "Pharmacy Sales",
      value: "Rs.0.00",
      bg: "bg-blue-50",
      text: "text-blue-600",
    },
    {
      label: "Pharmacy Profit",
      value: "Rs.0.00",
      bg: "bg-purple-50",
      text: "text-purple-600",
    },
  ]);

  useEffect(() => {
    const fetchRevenue = async () => {
      try {
        const permissions = parseStoredPermissions();
        const canSaleView = hasPermission("SALE_VIEW", permissions);
        const canProductView = hasPermission("PRODUCT_VIEW", permissions);
        const { start, end, days } = getRollingWindow(new Date());

        const [salesRes, productsRes] = await Promise.all([
          canSaleView ? apiRequest("/sales") : Promise.resolve({ data: [] }),
          canProductView ? apiRequest("/products") : Promise.resolve({ data: [] }),
        ]);

        const salesData = Array.isArray(salesRes?.data)
          ? salesRes.data
          : Array.isArray(salesRes?.data?.data)
          ? salesRes.data.data
          : [];

        const productsData = Array.isArray(productsRes?.data)
          ? productsRes.data
          : Array.isArray(productsRes?.data?.data)
          ? productsRes.data.data
          : [];

        const rollingSales = salesData.filter((sale) => {
          const saleDate = new Date(sale.saleDate || sale.createdAt || sale.date);
          return saleDate >= start && saleDate <= end;
        });

        const pharmacySalesTotal = rollingSales.reduce(
          (acc, sale) =>
            acc +
            Number(
              sale.totalAmount ?? sale.grandTotal ?? sale.paidAmount ?? 0
            ),
          0
        );

        const pharmacyProfitTotal = rollingSales.reduce(
          (acc, sale) => acc + calculateSaleProfit(sale, productsData),
          0
        );

        setRevenueItems([
          {
            label: "Pharmacy Sales",
            value: `Rs.${(pharmacySalesTotal / days).toFixed(2)}`,
            bg: "bg-blue-50",
            text: "text-blue-600",
          },
          {
            label: "Pharmacy Profit",
            value: `Rs.${(pharmacyProfitTotal / days).toFixed(2)}`,
            bg: "bg-purple-50",
            text: "text-purple-600",
          },
        ]);
      } catch (error) {
        console.error("Error fetching revenue data:", error);
      }
    };

    fetchRevenue();
  }, []);

  return (
    <div className="rounded-xl border-0 bg-white/80 text-card-foreground shadow-lg backdrop-blur">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="font-semibold leading-none tracking-tight">
          Revenue Breakdown
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 p-6 pt-0 md:grid-cols-2">
        {revenueItems.map((item) => (
          <div key={item.label} className={`rounded-xl p-4 text-center ${item.bg}`}>
            <p className="mb-1 text-sm text-slate-600">{item.label}</p>
            <p className={`text-2xl font-bold ${item.text}`}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueBreakdown;
