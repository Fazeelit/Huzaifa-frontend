const OUTDOOR_SUPPLIERS_KEY = "outdoorSuppliers";
const OUTDOOR_SUPPLIES_KEY = "outdoorSupplies";

const isBrowser = () => typeof window !== "undefined";

const readStorageArray = (key) => {
  if (!isBrowser()) return [];

  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writeStorageArray = (key, value) => {
  if (!isBrowser()) return;
  window.localStorage.setItem(key, JSON.stringify(Array.isArray(value) ? value : []));
};

const createId = (prefix) =>
  `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;

export const getOutdoorSuppliers = () => readStorageArray(OUTDOOR_SUPPLIERS_KEY);

export const saveOutdoorSupplier = (supplier) => {
  const nextSupplier = {
    id: supplier?.id || createId("outsupplier"),
    supplierName: String(supplier?.supplierName || "").trim(),
    phoneNo: String(supplier?.phoneNo || "").trim(),
    gariNo: String(supplier?.gariNo || "").trim(),
    routeName: String(supplier?.routeName || "").trim(),
    monthlyPay: Number(supplier?.monthlyPay || 0),
    commission: Number(supplier?.commission || 0),
    address: String(supplier?.address || "").trim(),
    notes: String(supplier?.notes || "").trim(),
    createdAt: supplier?.createdAt || new Date().toISOString(),
  };

  const current = getOutdoorSuppliers();
  writeStorageArray(OUTDOOR_SUPPLIERS_KEY, [nextSupplier, ...current]);
  return nextSupplier;
};

export const getOutdoorSupplies = () => readStorageArray(OUTDOOR_SUPPLIES_KEY);

export const getOutdoorSupplyById = (supplyId) =>
  getOutdoorSupplies().find((entry) => String(entry?.id) === String(supplyId)) || null;

export const saveOutdoorSupply = (supply) => {
  const nextSupply = {
    id: supply?.id || createId("outsupply"),
    supplierId: String(supply?.supplierId || "").trim(),
    supplierName: String(supply?.supplierName || "").trim(),
    routeName: String(supply?.routeName || "").trim(),
    invoiceNumber: String(supply?.invoiceNumber || "").trim(),
    supplyDate: supply?.supplyDate || new Date().toISOString(),
    items: Array.isArray(supply?.items) ? supply.items : [],
    totalBill: Number(supply?.totalBill || 0),
    createdSaleId: String(supply?.createdSaleId || "").trim(),
    createdSaleInvoiceNo: String(supply?.createdSaleInvoiceNo || "").trim(),
    createdAt: supply?.createdAt || new Date().toISOString(),
  };

  const current = getOutdoorSupplies();
  writeStorageArray(OUTDOOR_SUPPLIES_KEY, [nextSupply, ...current]);
  return nextSupply;
};

export const updateOutdoorSupply = (supplyId, updates) => {
  const current = getOutdoorSupplies();
  const next = current.map((entry) =>
    String(entry?.id) === String(supplyId)
      ? {
          ...entry,
          ...(typeof updates === "function" ? updates(entry) : updates),
        }
      : entry
  );
  writeStorageArray(OUTDOOR_SUPPLIES_KEY, next);
  return next.find((entry) => String(entry?.id) === String(supplyId)) || null;
};

export const deleteOutdoorSupply = (supplyId) => {
  const current = getOutdoorSupplies();
  const next = current.filter((entry) => String(entry?.id) !== String(supplyId));
  writeStorageArray(OUTDOOR_SUPPLIES_KEY, next);
  return next;
};

export const getOutdoorSupplySalePayload = (supply) => {
  const normalizedItems = (Array.isArray(supply?.items) ? supply.items : []).filter(
    (item) => Number(item?.saleQuantity || 0) > 0
  );
  const subtotal = normalizedItems.reduce(
    (sum, item) => sum + Number(item?.totalPrice || 0),
    0
  );
  const invoiceNo =
    String(supply?.invoiceNumber || "").trim() ||
    `OUT-${Math.random().toString(16).slice(2, 8).toUpperCase()}`;

  return {
    invoiceNo,
    products: normalizedItems.map((item) => ({
      productId: item?.productId || undefined,
      name: item?.productName || "",
      manufacturer: item?.manufacturer || "",
      quantity: Number(item?.saleQuantity || 0),
      purchasePrice: Number(item?.price || 0),
      price: Number(item?.price || 0),
      totalPrice: Number(item?.totalPrice || 0),
      returnedQuantity: Number(item?.returnedQuantity || 0),
      receivedQuantity: Number(item?.receivedQuantity || 0),
    })),
    subtotal,
    discount: 0,
    totalAmount: subtotal,
    paidAmount: subtotal,
    returnAmount: 0,
    customerName: String(supply?.supplierName || "Outdoor Supply"),
    paymentMethod: "Cash",
    paymentStatus: "Paid",
  };
};
