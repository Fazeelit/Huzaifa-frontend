"use client";

import React, { useEffect, useState } from "react";
import { Noto_Nastaliq_Urdu } from "next/font/google";
import { AlertTriangle, CheckCircle, X } from "lucide-react";
import { apiRequest } from "../../authservice/api";

const urduFormFont = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const urduInputStyle = {
  fontFamily: `"Urdu Noori Nastaliq", "Noori Nastaliq", "Jameel Noori Nastaleeq", ${urduFormFont.style.fontFamily}, serif`,
};

const fieldClass =
  "min-h-10 w-full rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-sm leading-6 text-black shadow-sm outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-100";
const labelClass = "mb-1 block text-xs font-semibold uppercase tracking-wide text-black";
const categoryOptions = [
  "Engine Parts", "Brake Parts", "Clutch Parts", "Transmission Parts", "Suspension Parts", "Steering Parts", "Electrical Parts", "Battery Parts", "Fuel System Parts", "Exhaust Parts", "Cooling System Parts", "Chain & Sprockets", "Wheel & Tire Parts", "Lighting Parts", "Body Parts", "Handlebar Parts", "Seat Parts", "Filters", "Belts & Hoses", "Lubricants & Oils", "Safety & Riding Gear", "Mirrors", "Foot Pegs", "Side Stand & Center Stand", "Accessories"

];
const unitOptions = [
  "Piece", "Set", "Pair", "Pack", "Box", "Dozen", "Kilogram", "Gram", "Liter", "Milliliter", "Meter", "Centimeter", "Inch", "Foot", "Roll", "Bottle", "Can", "Bag", "Carton", "Unit"
];
const statusOptions = ["Active", "Inactive"];
const shelfOptions = Array.from({ length: 100 }, (_, index) => String(index + 1));
const urduTextFields = new Set(["manufacturer"]);
const optionalFields = new Set(["bno", "mfg", "exp"]);
const leftAlignedFields = new Set(["manufacturer"]);

const isValidMMYY = (value) => /^(0[1-9]|1[0-2])[./]\d{2}$/.test(String(value || "").trim());

const normalizeUrduText = (value) =>
  String(value || "")
    .replace(/[\u200B-\u200D\u2060\uFEFF]/g, "")
    .replace(/[ \t]+/g, " ");

const sanitizeCodeSegment = (value, fallback = "XXX", maxLength = 3) => {
  const normalized = String(value || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");

  if (!normalized) return fallback;
  return normalized.slice(0, maxLength).padEnd(maxLength, "X");
};

const generateProductCode = (category, seed) => {
  const categoryCode = sanitizeCodeSegment(category, "AUT", 3);
  return `${categoryCode}-${seed}`;
};

const ProductMasterModal = ({ onClose, onSaved }) => {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [codeSeed] = useState(() => String(Date.now() % 1000).padStart(3, "0"));

  const [formData, setFormData] = useState({
    name: "",
    packSize: "",
    shelf: "",
    code: "",
    category: "Engine Parts",
    unit: "Piece",
    purchasePrice: "",
    retailSalePrice: "",
    wholeSalePrice: "",
    stock: "",
    manufacturer: "",
    bno: "",
    mfg: "",
    exp: "",
    date: new Date().toISOString().slice(0, 10),
    status: "Active",
    description: "",
    discountAllowed: false,
    maxAllowedDiscount: "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      code: generateProductCode(prev.category, codeSeed),
    }));
  }, [codeSeed, formData.category]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: urduTextFields.has(name) ? normalizeUrduText(value) : value,
    }));
  };

  const toggleDiscountAllowed = () => {
    setFormData((prev) => ({
      ...prev,
      discountAllowed: !prev.discountAllowed,
      maxAllowedDiscount: !prev.discountAllowed ? prev.maxAllowedDiscount : "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      (formData.mfg && !isValidMMYY(formData.mfg)) ||
      (formData.exp && !isValidMMYY(formData.exp))
    ) {
      setErrorMessage("MFG and EXP must be in MM.YY format (example: 05.26).");
      setShowError(true);
      return;
    }

    if (formData.discountAllowed) {
      const maxDiscount = Number(formData.maxAllowedDiscount);
      if (!Number.isFinite(maxDiscount) || maxDiscount < 0 || maxDiscount > 100) {
        setErrorMessage("Max Allowed Discount must be between 0 and 100.");
        setShowError(true);
        return;
      }
    }

    try {
      setLoading(true);
      await apiRequest("/products/createProduct", {
        method: "POST",
        data: {
          ...formData,
          name: normalizeUrduText(formData.name).trim(),
          manufacturer: normalizeUrduText(formData.manufacturer).trim(),
          shelf: Number(formData.shelf || 0),
          purchasePrice: Number(formData.purchasePrice || 0),
          retailSalePrice: Number(formData.retailSalePrice || 0),
          wholeSalePrice: Number(formData.wholeSalePrice || 0),
          stock: Number(formData.stock || 0),
          discountAllowed: Boolean(formData.discountAllowed),
          maxAllowedDiscount: formData.discountAllowed ? Number(formData.maxAllowedDiscount || 0) : 0,
        },
      });

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onSaved?.();
        onClose?.();
      }, 1200);
    } catch (err) {
      setErrorMessage(err?.message || "Failed to create product.");
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    ["name", "Product Name"],
    ["packSize", "Paking Size"],
    ["unit", "Unit"],
    ["category", "Category"],
    ["shelf", "Shelf Number"],
    ["code", "Product Code"],
    ["stock", "Opening Stock"],
    ["purchasePrice", "Purchase Price"],
    ["retailSalePrice", "Retail Sale Price"],
    ["wholeSalePrice", "Whole Sale Price"],
    ["manufacturer", "Manufacturer"],
    ["date", "Date"],
    ["status", "Status"],
  ];

  return (
    <>
      {showSuccess && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
          <div className="rounded-2xl border border-emerald-100 bg-white p-6 text-center shadow-xl">
            <CheckCircle className="mx-auto mb-2 h-12 w-12 text-green-600" />
            <p className="font-semibold text-slate-800">Product master data saved successfully</p>
          </div>
        </div>
      )}

      {showError && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40">
          <div className="rounded-2xl border border-red-100 bg-white p-6 text-center shadow-xl">
            <AlertTriangle className="mx-auto mb-2 h-12 w-12 text-red-600" />
            <p className="text-slate-600">{errorMessage}</p>
            <button
              onClick={() => setShowError(false)}
              className="mt-4 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

        <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-slate-900/50 p-3 backdrop-blur-sm sm:p-4">
        <div className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/80 bg-white shadow-2xl">
          <div className="flex items-center justify-between gap-3 rounded-t-2xl bg-gradient-to-r from-sky-600 to-cyan-600 p-4 text-white sm:p-6">
            <h2 className="min-w-0 text-xl font-bold sm:text-2xl">Add Product Master Data</h2>
            <button type="button" onClick={onClose} className="rounded-lg p-1 transition hover:bg-white/20">
              <X />
            </button>
          </div>

          <div className="overflow-y-auto p-4 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                {fields.map(([key, label]) => (
                  <div key={key}>
                    <label className={labelClass}>{label}</label>
                    {key === "category" ? (
                      <select
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        className={fieldClass}
                        style={urduInputStyle}
                        required
                      >
                        {categoryOptions.map((option, index) => (
                          <option key={`${option}-${index}`} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : key === "unit" ? (
                      <select
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        className={fieldClass}
                        style={urduInputStyle}
                        required
                      >
                        {unitOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : key === "status" ? (
                      <select
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        className={fieldClass}
                        style={urduInputStyle}
                        required
                      >
                        {statusOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : key === "shelf" ? (
                      <select
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        className={fieldClass}
                        style={urduInputStyle}
                        required
                      >
                        
                        {shelfOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        name={key}
                        value={formData[key]}
                        onChange={handleChange}
                        readOnly={key === "code"}
                        type={key === "date" ? "date" : "text"}
                        lang={urduTextFields.has(key) ? "ur" : undefined}
                        dir={leftAlignedFields.has(key) ? "ltr" : urduTextFields.has(key) ? "rtl" : "ltr"}
                        className={`${
                          key === "code" ? `${fieldClass} bg-slate-100 text-black` : fieldClass
                        } ${leftAlignedFields.has(key) ? "text-left" : ""}`}
                        style={urduInputStyle}
                        placeholder={
                          key === "mfg" || key === "exp" ? "MM.YY (example: 05.26)" : undefined
                        }
                        required={!optionalFields.has(key)}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className={labelClass}>Discount Allowed</label>
                  <button
                    type="button"
                    onClick={toggleDiscountAllowed}
                    className={`relative inline-flex h-7 w-12 items-center rounded-full transition ${
                      formData.discountAllowed ? "bg-emerald-500" : "bg-slate-300"
                    }`}
                    aria-pressed={formData.discountAllowed}
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${
                        formData.discountAllowed ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
                <div>
                  <label className={labelClass}>Max Allowed Discount (%)</label>
                  <input
                    name="maxAllowedDiscount"
                    type="number"
                    min={0}
                    max={100}
                    step="0.01"
                    value={formData.maxAllowedDiscount}
                    onChange={handleChange}
                    disabled={!formData.discountAllowed}
                    className={`${fieldClass} ${
                      formData.discountAllowed ? "" : "cursor-not-allowed bg-slate-100 text-black"
                    }`}
                    style={urduInputStyle}
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="h-10 w-full rounded-xl border border-slate-300 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className={`h-10 w-full rounded-xl px-4 text-sm font-semibold text-white transition sm:w-auto ${
                    loading
                      ? "bg-slate-400"
                      : "bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700"
                  }`}
                >
                  {loading ? "Saving..." : "Save Master Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductMasterModal;
