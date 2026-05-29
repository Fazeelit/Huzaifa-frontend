"use client";

import { useState, useEffect } from "react";
import {
  Package,
  PackageCheck,
  TriangleAlert,
  TrendingDown,
  HandCoins,
  BadgeDollarSign,
} from "lucide-react";

import ProductCard from "../products/ProductCard";
import ProductTable from "../products/ProductTable";
import ProductEditModel from "../products/ProductEditModel";
import ProductModel from "../products/ProductModel";
import ProductMasterModal from "../products/ProductMasterModal";
import ProductFilter from "../products/ProductFilter";
import { apiRequest } from "./../../authservice/api";
import { usePermissions } from "../../authservice/usePermissions";
import { blockedButtonClass, blockedButtonProps } from "../../authservice/permissions";

export default function ProductsPage() {
  const { crud } = usePermissions();
  const { canCreate, canEdit, canDelete } = crud("PRODUCT");
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [batchSearchTerm, setBatchSearchTerm] = useState("");
  const [purchaseStartDate, setPurchaseStartDate] = useState("");
  const [purchaseEndDate, setPurchaseEndDate] = useState("");
  const [filter, setFilter] = useState("All");

  const [modalOpen, setModalOpen] = useState(false);
  const [bulkStockOpen, setBulkStockOpen] = useState(false);
  const [masterProductOpen, setMasterProductOpen] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  /* ---------------- FETCH PRODUCTS ---------------- */
  const fetchProducts = async ({ silent = false } = {}) => {
    try {
      const res = await apiRequest("/products", { method: "GET" });
      setProducts(res.data.data || res.data);
    } catch (err) {
      if (!silent) {
        setErrorMessage(
          err?.response?.data?.message || "Failed to fetch products"
        );
        setShowError(true);
      }
    }
  };

  useEffect(() => {
    fetchProducts();

    const intervalId = setInterval(() => {
      fetchProducts({ silent: true });
    }, 5000);

    const handleFocus = () => fetchProducts({ silent: true });
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchProducts({ silent: true });
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

  /* ---------------- FILTERING ---------------- */
  const filteredProducts = products.filter((p) => {
    const normalizedSearch = String(searchTerm || "").toLowerCase();
    const normalizedBatchSearch = String(batchSearchTerm || "").toLowerCase();
    const matchesSearch =
      String(p.name || "").toLowerCase().includes(normalizedSearch) ||
      String(p.code || "").toLowerCase().includes(normalizedSearch) ||
      String(p.category || "").toLowerCase().includes(normalizedSearch);
    const matchesBatch = String(p.bno || "").toLowerCase().includes(normalizedBatchSearch);

    const purchaseDate = p.date || p.purchaseDate || p.createdAt;
    const productDate = purchaseDate ? new Date(purchaseDate) : null;
    const matchesPurchaseStart =
      !purchaseStartDate || (productDate && productDate >= new Date(`${purchaseStartDate}T00:00:00`));
    const matchesPurchaseEnd =
      !purchaseEndDate ||
      (productDate && productDate <= new Date(`${purchaseEndDate}T23:59:59.999`));

    const matchesFilter =
      filter === "All" ||
      (filter === "Active" && String(p.status || "").toLowerCase() === "active") ||
      (filter === "Low Stock" && Number(p.stock) <= 10 && Number(p.stock) > 0)  ||
      (filter === "Out of Stock" && Number(p.stock) === 0);

    return matchesSearch && matchesBatch && matchesPurchaseStart && matchesPurchaseEnd && matchesFilter;
  });

  /* ---------------- EDIT ACTION ---------------- */
  const openEditModal = (product) => {
    if (!canEdit) return;
    setEditingProductId(product._id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingProductId(null);
    fetchProducts(); // refresh list after update
  };

  /* ---------------- NEW PRODUCT ACTION ---------------- */
  const openBulkStockModal = () => {
    if (!canCreate) return;
    setBulkStockOpen(true);
  };

  const closeBulkStockModal = () => {
    setBulkStockOpen(false);
    fetchProducts();
  };

  const openMasterProductModal = () => {
    if (!canCreate) return;
    setMasterProductOpen(true);
  };

  const closeMasterProductModal = () => {
    setMasterProductOpen(false);
    fetchProducts(); // refresh list after adding new product
  };

  const openDeleteModal = (product) => {
    if (!canDelete || !product?._id) return;
    setDeleteProduct(product);
  };

  const closeDeleteModal = () => {
    setDeleteProduct(null);
  };

  const handleDeleteProduct = async () => {
    if (!canDelete || !deleteProduct?._id) return;

    try {
      await apiRequest(`/products/deleteProduct/${deleteProduct._id}`, { method: "DELETE" });
      closeDeleteModal();
      fetchProducts();
    } catch (err) {
      setErrorMessage(
        err?.response?.data?.message || "Failed to delete product"
      );
      setShowError(true);
      closeDeleteModal();
    }
  };

  /* ---------------- STATS ---------------- */
  const inStockProducts = products.filter((p) => Number(p.stock) >= 1);
  const totalPurchaseAmount = products.reduce((sum, product) => {
    const purchasePrice = Number(product.purchasePrice ?? product.cost ?? 0);
    const stock = Number(product.stock ?? 0);
    return sum + purchasePrice * stock;
  }, 0);
  const expectedProfit = products.reduce((sum, product) => {
    const purchasePrice = Number(product.purchasePrice ?? product.cost ?? 0);
    const salePrice = Number(product.salePrice ?? product.price ?? 0);
    const stock = Number(product.stock ?? 0);
    const perUnitExpectedProfit = (salePrice - purchasePrice) * 0.5;
    return sum + perUnitExpectedProfit * stock;
  }, 0);

  const stats = [
    {
      title: "Total Products",
      count: inStockProducts.length,
      color: "blue",
      Icon: Package,
    },
    {
      title: "Active Products",
      count: inStockProducts.filter((p) => String(p.status || "").toLowerCase() === "active").length,
      color: "pink",
      Icon: PackageCheck,
    },
    {
      title: "Low Stock",
      count: inStockProducts.filter((p) => Number(p.stock) <= 10).length,
      color: "amber",
      Icon: TriangleAlert,
    },
    {
      title: "Out of Stock",
      count: products.filter((p) => Number(p.stock) === 0).length,
      color: "red",
      Icon: TrendingDown,
    },
    {
      title: "All Products Purchase Amount",
      count: `Rs. ${totalPurchaseAmount.toFixed(2)}`,
      color: "emerald",
      Icon: HandCoins,
    },
    {
      title: "Total Expected Profit",
      count: `Rs. ${expectedProfit.toFixed(2)}`,
      color: "violet",
      Icon: BadgeDollarSign,
    },
  ];

  return (
    <main className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-cyan-50 via-white to-sky-100 p-3 shadow-sm sm:p-4 lg:p-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-cyan-200/40 via-sky-200/20 to-transparent" />
      {/* ERROR MODAL */}
      {showError && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
          <div className="rounded-2xl border border-red-100 bg-white p-6 text-center shadow-xl">
            <TriangleAlert className="w-12 h-12 text-red-600 mx-auto mb-2" />
            <h2 className="font-bold text-red-700">Error</h2>
            <p className="text-slate-600">{errorMessage}</p>
            <button
              onClick={() => setShowError(false)}
              className="mt-4 rounded-xl bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* DELETE CONFIRM MODAL */}
      {deleteProduct && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xl w-[92%] max-w-md">
            <h2 className="font-bold text-slate-900 text-lg">Delete Product</h2>
            <p className="mt-2 text-slate-600">
              Are you sure want to delet <span className="font-bold text-slate-900">{deleteProduct.name}</span>?
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <button
                onClick={handleDeleteProduct}
                className="rounded-xl bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700"
              >
                Yes
              </button>
              <button
                onClick={closeDeleteModal}
                className="rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="relative mb-6 flex flex-col justify-between gap-4 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-sm backdrop-blur-sm md:flex-row md:p-5">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Product Inventory</h1>
          <p className="mt-1 text-slate-600">Manage your product catalog</p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <button
            onClick={openMasterProductModal}
            className={`h-11 w-full rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 px-5 text-sm font-semibold text-white shadow-md shadow-cyan-200/70 transition hover:-translate-y-0.5 hover:from-sky-700 hover:to-cyan-700 sm:w-auto ${blockedButtonClass} blocked-action`}
            {...blockedButtonProps(canCreate)}
          >
            + Add Product Master
          </button>
          <button
            onClick={openBulkStockModal}
            className={`h-11 w-full rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-5 text-sm font-semibold text-white shadow-md shadow-emerald-200/70 transition hover:-translate-y-0.5 hover:from-emerald-700 hover:to-green-700 sm:w-auto ${blockedButtonClass} blocked-action`}
            {...blockedButtonProps(canCreate)}
          >
            + Bulk Stock From Bill
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2 xl:grid-cols-6">
        {stats.map((stat, i) => (
          <ProductCard key={i} {...stat} />
        ))}
      </div>

      <div className="rounded-2xl border border-white/80 bg-white/90 p-2 shadow-sm backdrop-blur-sm md:p-3">
        <ProductFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          batchSearchTerm={batchSearchTerm}
          setBatchSearchTerm={setBatchSearchTerm}
          purchaseStartDate={purchaseStartDate}
          setPurchaseStartDate={setPurchaseStartDate}
          purchaseEndDate={purchaseEndDate}
          setPurchaseEndDate={setPurchaseEndDate}
          filter={filter}
          setFilter={setFilter}
        />
      </div>

      {/* TABLE */}
      <div className="mt-4 rounded-2xl border border-white/80 bg-white/90 p-2 shadow-sm backdrop-blur-sm md:p-3">
        <ProductTable
          products={filteredProducts}
          onEdit={openEditModal}
          onDelete={openDeleteModal}
          canEdit={canEdit}
          canDelete={canDelete}
        />
      </div>

      {/* EDIT MODAL */}
      {modalOpen && editingProductId && canEdit && (
        <ProductEditModel productId={editingProductId} onClose={closeModal} />
      )}

      {bulkStockOpen && canCreate && <ProductModel onClose={closeBulkStockModal} />}
      {masterProductOpen && canCreate && (
        <ProductMasterModal onClose={closeMasterProductModal} onSaved={fetchProducts} />
      )}
    </main>
  );
}
