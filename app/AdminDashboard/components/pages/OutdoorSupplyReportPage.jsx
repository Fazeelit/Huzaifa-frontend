"use client";

import React, { useEffect, useMemo, useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { BarChart3, CalendarRange, FileDown, Package, TrendingUp, Truck } from "lucide-react";
import { apiRequest } from "../../authservice/api";
import { hasPermission, parseStoredPermissions } from "../../authservice/permissions";
import { formatDateDDMMYYYY } from "../../utils/formatting";

const formatCurrency = (value) =>
  `Rs. ${Number(value || 0).toLocaleString("en-PK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const formatDateInput = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const buildDefaultDates = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return {
    start: new Date(today),
    end: new Date(today),
  };
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

const getDayKey = (value) => {
  const date = parseLocalDate(value);
  if (!date) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getSaleQuantity = (item) => {
  const derivedQuantity = Number(item?.receivedQuantity || 0) - Number(item?.returnedQuantity || 0);
  return Math.max(Number(item?.saleQuantity ?? derivedQuantity ?? 0), 0);
};

const getArray = (response) =>
  Array.isArray(response?.data)
    ? response.data
    : Array.isArray(response?.data?.data)
    ? response.data.data
    : Array.isArray(response?.sales)
    ? response.sales
    : Array.isArray(response)
    ? response
    : [];

const getSaleItems = (sale) =>
  Array.isArray(sale?.products) ? sale.products : Array.isArray(sale?.items) ? sale.items : [];

const getSaleTotal = (sale) =>
  Number(sale?.totalAmount ?? sale?.total ?? sale?.grandTotal ?? sale?.subtotal ?? 0) || 0;

const isOutdoorSupplySale = (sale, supplierNames) => {
  const customerName = String(sale?.customerName || sale?.customer?.name || "").trim().toLowerCase();
  if (customerName) {
    if (supplierNames.has(customerName)) return true;
    if (customerName === "outdoor supply") return true;
  }

  return getSaleItems(sale).some((item) => {
    const hasOutdoorQuantityFields =
      item?.receivedQuantity !== undefined ||
      item?.returnedQuantity !== undefined ||
      item?.returnedQty !== undefined ||
      item?.returnQty !== undefined ||
      item?.quantityReturned !== undefined;

    return hasOutdoorQuantityFields;
  });
};

const buildOutdoorSuppliesFromSales = (sales, suppliers) => {
  const supplierNames = new Set(
    (Array.isArray(suppliers) ? suppliers : [])
      .map((supplier) => String(supplier?.supplierName || "").trim().toLowerCase())
      .filter(Boolean)
  );

  const outdoorSales = (Array.isArray(sales) ? sales : []).filter((sale) => {
    return isOutdoorSupplySale(sale, supplierNames);
  });

  const groupedSupplies = new Map();

  outdoorSales.forEach((sale, saleIndex) => {
    const saleDate = sale?.saleDate || sale?.createdAt || "";
    const customerName = String(sale?.customerName || sale?.customer?.name || "Outdoor Supply").trim() || "Outdoor Supply";
    const invoiceNumber =
      String(sale?.invoiceNo || sale?.invoiceNumber || sale?._id || `OUTDOOR-SALE-${saleIndex + 1}`).trim() ||
      `OUTDOOR-SALE-${saleIndex + 1}`;
    const groupKey = [getDayKey(saleDate), customerName.toLowerCase(), invoiceNumber.toLowerCase()].join("::");
    const existing = groupedSupplies.get(groupKey) || {
      id: `outdoor-report-${groupKey}`,
      supplierId: "",
      supplierName: customerName,
      routeName: "",
      invoiceNumber,
      supplyDate: saleDate,
      items: [],
      totalBill: 0,
      createdSaleId: "",
      createdSaleInvoiceNo: invoiceNumber,
      createdAt: sale?.createdAt || saleDate || new Date().toISOString(),
    };

    existing.totalBill += Number(sale?.totalAmount || sale?.total || 0);
    existing.createdSaleId = String(existing.createdSaleId || sale?._id || "").trim();
    existing.items.push(
      ...getSaleItems(sale).map((item, itemIndex) => {
        const quantity = Math.max(
          Number(item?.chargedQuantity ?? item?.quantity ?? item?.qty ?? 0) || 0,
          0
        );
        const returnedQuantity = Math.max(
          Number(
            item?.returnedQuantity ??
              item?.returnedQty ??
              item?.returnQty ??
              item?.quantityReturned ??
              0
          ) || 0,
          0
        );

        return {
          id: `${sale?._id || saleIndex}-${item?.productId?._id || item?.productId || itemIndex}`,
          productId: item?.productId?._id || item?.productId || "",
          productName: item?.name || item?.productName || "Item",
          manufacturer: String(item?.manufacturer || "").trim(),
          receivedQuantity: quantity,
          returnedQuantity,
          saleQuantity: Math.max(quantity - returnedQuantity, 0),
          price: Number(item?.purchasePrice ?? item?.price ?? item?.salePrice ?? 0),
          totalPrice:
            Number(item?.totalPrice ?? item?.total ?? 0) ||
            Number(item?.price ?? item?.salePrice ?? 0) * quantity,
        };
      })
    );

    groupedSupplies.set(groupKey, existing);
  });

  return Array.from(groupedSupplies.values());
};

const buildProductLookup = (products) => {
  const map = new Map();

  products.forEach((product) => {
    const keys = [
      product?._id,
      product?.id,
      String(product?.name || "").trim().toLowerCase(),
    ].filter(Boolean);

    keys.forEach((key) => {
      if (!map.has(String(key))) {
        map.set(String(key), product);
      }
    });
  });

  return map;
};

const reportCardStyles = [
  "from-blue-600 to-cyan-500",
  "from-amber-500 to-orange-500",
  "from-emerald-600 to-teal-500",
];

export default function OutdoorSupplyReportPage() {
  const { start: defaultStart, end: defaultEnd } = buildDefaultDates();
  const [startDate, setStartDate] = useState(formatDateInput(defaultStart));
  const [endDate, setEndDate] = useState(formatDateInput(defaultEnd));
  const [outdoorSupplies, setOutdoorSupplies] = useState([]);
  const [outdoorSuppliers, setOutdoorSuppliers] = useState([]);
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOutdoorData = async () => {
      try {
        const [suppliersResponse, suppliesResponse] = await Promise.all([
          apiRequest("/outdoor-supply-management/suppliers", {
            method: "GET",
            suppressErrorToast: true,
          }),
          apiRequest("/outdoor-supply-management", {
            method: "GET",
            suppressErrorToast: true,
          }),
        ]);

        const supplierRows = Array.isArray(suppliersResponse?.data)
          ? suppliersResponse.data
          : Array.isArray(suppliersResponse)
            ? suppliersResponse
            : [];
        const supplyRows = Array.isArray(suppliesResponse?.data)
          ? suppliesResponse.data
          : Array.isArray(suppliesResponse)
            ? suppliesResponse
            : [];

        setOutdoorSuppliers(supplierRows);
        setOutdoorSupplies(supplyRows);
      } catch (error) {
        console.error("Failed to fetch outdoor supply report data:", error);
        setOutdoorSuppliers([]);
        setOutdoorSupplies([]);
      }
    };

    const fetchSales = async () => {
      try {
        const response = await apiRequest("/sales", {
          method: "GET",
          suppressErrorToast: true,
        });
        setSales(getArray(response));
      } catch (error) {
        console.error("Failed to fetch sales for outdoor supply report:", error);
        setSales([]);
      }
    };

    const fetchProducts = async () => {
      const permissions = parseStoredPermissions();
      const canProductView = hasPermission("PRODUCT_VIEW", permissions);

      if (!canProductView) {
        setProducts([]);
        return;
      }

      try {
        const response = await apiRequest("/products", {
          method: "GET",
          suppressErrorToast: true,
        });
        setProducts(getArray(response));
      } catch (error) {
        console.error("Failed to fetch products for outdoor supply report:", error);
        setProducts([]);
      }
    };

    const load = async () => {
      setLoading(true);
      await Promise.all([fetchOutdoorData(), fetchProducts(), fetchSales()]);
      setLoading(false);
    };

    load();
  }, []);

  const reportData = useMemo(() => {
    const start = parseLocalDate(startDate);
    const end = parseLocalDate(endDate);

    if (!start || !end) {
      return {
        filteredSupplies: [],
        summary: {
          dailyOutdoorSale: 0,
          dailyOutdoorPendingProducts: 0,
          dailyOutdoorProfit: 0,
        },
        dailyRows: [],
      };
    }

    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);

    const productLookup = buildProductLookup(products);
    const salesByKey = new Map();

    sales.forEach((sale) => {
      [sale?._id, sale?.invoiceNo, sale?.invoiceNumber]
        .map((value) => String(value || "").trim())
        .filter(Boolean)
        .forEach((key) => {
          salesByKey.set(key, sale);
        });
    });

    const resolvedSupplies = (outdoorSupplies.length
      ? outdoorSupplies
      : buildOutdoorSuppliesFromSales(sales, outdoorSuppliers)).map((supply) => {
      const linkedSale =
        [
          supply?.createdSaleId,
          supply?.createdSaleInvoiceNo,
          supply?.invoiceNumber,
        ]
          .map((value) => salesByKey.get(String(value || "").trim()))
          .find(Boolean) || null;

      const resolvedTotalBill =
        Number(supply?.totalBill || 0) > 0
          ? Number(supply?.totalBill || 0)
          : getSaleTotal(linkedSale);
      const reportDate =
        linkedSale?.saleDate ||
        linkedSale?.createdAt ||
        supply?.supplyDate ||
        supply?.createdAt ||
        "";

      return {
        ...supply,
        linkedSale,
        reportDate,
        totalBill: resolvedTotalBill,
      };
    });

    const filteredSupplies = resolvedSupplies.filter((supply) => {
      const supplyDate = parseLocalDate(supply?.reportDate || supply?.supplyDate || supply?.createdAt);
      return supplyDate && supplyDate >= start && supplyDate <= end;
    });

    const dailyMap = new Map();

    filteredSupplies.forEach((supply) => {
      const dateKey = getDayKey(supply?.reportDate || supply?.supplyDate || supply?.createdAt);
      const supplyDate = parseLocalDate(supply?.reportDate || supply?.supplyDate || supply?.createdAt);
      const bucket = dailyMap.get(dateKey) || {
        dateKey,
        dateLabel: supplyDate ? formatDateDDMMYYYY(supplyDate) : "-",
        bills: 0,
        suppliers: new Set(),
        items: 0,
        outdoorSale: 0,
        pendingProducts: 0,
        outdoorProfit: 0,
      };

      bucket.bills += 1;
      bucket.suppliers.add(String(supply?.supplierName || "").trim() || "Outdoor Supplier");
      bucket.outdoorSale += Number(supply?.totalBill || 0);

      const items = Array.isArray(supply?.items) ? supply.items : [];
      const saleItems = Array.isArray(supply?.linkedSale?.products) ? supply.linkedSale.products : [];
      bucket.items += items.length;

      items.forEach((item) => {
        const saleQuantity = getSaleQuantity(item);
        bucket.pendingProducts += saleQuantity;
      });

      if (saleItems.length) {
        saleItems.forEach((item) => {
          const quantity = Math.max(Number(item?.quantity || item?.qty || 0) || 0, 0);
          const salePrice = Number(item?.salePrice ?? item?.price ?? 0) || 0;
          const purchasePrice = Number(item?.purchasePrice ?? 0) || 0;
          bucket.outdoorProfit += Math.max(salePrice - purchasePrice, 0) * quantity;
        });
      } else {
        items.forEach((item) => {
          const saleQuantity = getSaleQuantity(item);
          const product =
            productLookup.get(String(item?.productId || "")) ||
            productLookup.get(String(item?.productName || "").trim().toLowerCase());
          const salesUnitPrice = Number(item?.price || 0);
          const purchasePrice = Number(product?.purchasePrice ?? product?.cost ?? item?.purchasePrice ?? 0);
          bucket.outdoorProfit += Math.max(salesUnitPrice - purchasePrice, 0) * saleQuantity;
        });
      }

      dailyMap.set(dateKey, bucket);
    });

    const dailyRows = Array.from(dailyMap.values())
      .sort((a, b) => a.dateKey.localeCompare(b.dateKey))
      .map((entry) => ({
        ...entry,
        supplierCount: entry.suppliers.size,
      }));

    const summary = dailyRows.reduce(
      (acc, row) => {
        acc.dailyOutdoorSale += row.outdoorSale;
        acc.dailyOutdoorPendingProducts += row.pendingProducts;
        acc.dailyOutdoorProfit += row.outdoorProfit;
        return acc;
      },
      {
        dailyOutdoorSale: 0,
        dailyOutdoorPendingProducts: 0,
        dailyOutdoorProfit: 0,
      }
    );

    return { filteredSupplies, summary, dailyRows };
  }, [endDate, outdoorSupplies, outdoorSuppliers, products, sales, startDate]);

  const handleExportPdf = () => {
    const { summary, dailyRows } = reportData;
    const doc = new jsPDF("l", "mm", "a4");
    const generatedAt = new Date().toLocaleString("en-PK");

    doc.setFontSize(18);
    doc.text("Outdoor Supply Report", 14, 18);
    doc.setFontSize(10);
    doc.text(`From: ${startDate}  To: ${endDate}`, 14, 26);
    doc.text(`Generated: ${generatedAt}`, 14, 32);

    autoTable(doc, {
      startY: 38,
      head: [["Metric", "Value"]],
      body: [
        ["Daily Outdoor Sale", formatCurrency(summary.dailyOutdoorSale)],
        ["Daily Outdoor Pending Products", String(summary.dailyOutdoorPendingProducts)],
        ["Daily Outdoor Profit", formatCurrency(summary.dailyOutdoorProfit)],
      ],
      styles: {
        fontSize: 10,
        cellPadding: 3,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
      },
      headStyles: {
        fillColor: [37, 99, 235],
        textColor: [255, 255, 255],
      },
      columnStyles: {
        0: { cellWidth: 90 },
        1: { cellWidth: 60, halign: "right" },
      },
    });

    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 8,
      head: [[
        "Date",
        "Bills",
        "Suppliers",
        "Items",
        "Outdoor Sale",
        "Pending Products",
        "Outdoor Profit",
      ]],
      body: dailyRows.length
        ? dailyRows.map((row) => [
            row.dateLabel,
            String(row.bills),
            String(row.supplierCount),
            String(row.items),
            formatCurrency(row.outdoorSale),
            String(row.pendingProducts),
            formatCurrency(row.outdoorProfit),
          ])
        : [["-", "-", "-", "-", "No outdoor supply report data found for the selected date range.", "-", "-"]],
      styles: {
        fontSize: 9,
        cellPadding: 2.5,
        textColor: [0, 0, 0],
        lineColor: [0, 0, 0],
        lineWidth: 0.1,
      },
      headStyles: {
        fillColor: [15, 23, 42],
        textColor: [255, 255, 255],
      },
    });

    doc.save(`Outdoor_Supply_Report_${startDate}_to_${endDate}.pdf`);
  };

  const cards = [
    {
      title: "Daily Outdoor Sale",
      value: formatCurrency(reportData.summary.dailyOutdoorSale),
      icon: Truck,
    },
    {
      title: "Daily Outdoor Pending Products",
      value: String(reportData.summary.dailyOutdoorPendingProducts),
      icon: Package,
    },
    {
      title: "Daily Outdoor Profit",
      value: formatCurrency(reportData.summary.dailyOutdoorProfit),
      icon: TrendingUp,
    },
  ];

  if (loading) {
    return (
      <main className="p-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-500 shadow-sm">
          Loading outdoor supply report...
        </div>
      </main>
    );
  }

  return (
    <main className="space-y-6 p-6">
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-sky-50 via-white to-emerald-50 p-6 shadow-sm">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sky-700 shadow-sm">
              <BarChart3 className="h-4 w-4" />
              Outdoor Supply Report
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Outdoor Supply Report</h1>
            <p className="mt-1 text-sm text-slate-600">
              Track outdoor sale, pending products, and expected outdoor profit with date-wise export.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end">
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                From Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
                className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-blue-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
                To Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(event) => setEndDate(event.target.value)}
                className="h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={handleExportPdf}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700"
            >
              <FileDown className="h-4 w-4" />
              Export PDF
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className={`rounded-3xl bg-gradient-to-br ${reportCardStyles[index]} p-5 text-white shadow-lg`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-white/80">{card.title}</p>
                  <p className="mt-3 text-3xl font-bold">{card.value}</p>
                  <p className="mt-2 text-xs text-white/75">
                    Selected range: {startDate} to {endDate}
                  </p>
                </div>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                  <Icon className="h-6 w-6" />
                </span>
              </div>
            </div>
          );
        })}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Outdoor Supply Daily Report</h2>
            <p className="text-sm text-slate-500">
              Date-wise outdoor supply summary with bills, pending products, and expected profit.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            <CalendarRange className="h-4 w-4" />
            {startDate} to {endDate}
          </div>
        </div>

        {reportData.dailyRows.length === 0 ? (
          <div className="px-5 py-12 text-center">
            <div className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
              <BarChart3 className="h-6 w-6" />
            </div>
            <p className="text-base font-semibold text-slate-900">No outdoor supply report found.</p>
            <p className="mt-1 text-sm text-slate-500">
              Change the date range or save outdoor supply bills to see the report here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr className="text-left text-slate-600">
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold">Bills</th>
                  <th className="px-4 py-3 font-semibold">Suppliers</th>
                  <th className="px-4 py-3 font-semibold">Items</th>
                  <th className="px-4 py-3 font-semibold">Daily Outdoor Sale</th>
                  <th className="px-4 py-3 font-semibold">Daily Outdoor Pending Products</th>
                  <th className="px-4 py-3 font-semibold">Daily Outdoor Profit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {reportData.dailyRows.map((row) => (
                  <tr key={row.dateKey} className="align-top">
                    <td className="px-4 py-3 font-semibold text-slate-900">{row.dateLabel}</td>
                    <td className="px-4 py-3 text-slate-700">{row.bills}</td>
                    <td className="px-4 py-3 text-slate-700">{row.supplierCount}</td>
                    <td className="px-4 py-3 text-slate-700">{row.items}</td>
                    <td className="px-4 py-3 font-semibold text-slate-900">{formatCurrency(row.outdoorSale)}</td>
                    <td className="px-4 py-3 font-semibold text-amber-700">{row.pendingProducts}</td>
                    <td className="px-4 py-3 font-semibold text-emerald-700">{formatCurrency(row.outdoorProfit)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}
