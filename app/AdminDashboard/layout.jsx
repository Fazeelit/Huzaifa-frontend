// app/AdminDashboard/layout.jsx
"use client"; // ensure this is a client component

import MainLayout from "./components/MainLayout";
import "../globals.css";

export default function AdminLayout({ children }) {
  return <MainLayout>{children}</MainLayout>;
}
