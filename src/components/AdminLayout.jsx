import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./layout/AdminSidebar";

function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:ml-64 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
