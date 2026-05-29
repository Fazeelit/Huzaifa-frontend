// app/dashboard/page.tsx
"use client";

import MainLayout from "../components/MainLayout";
import Dashboard from "../components/pages/Dashboard";

export default function DashboardPage() {
  return (
    <MainLayout>
      <Dashboard />
    </MainLayout>
  );
}
