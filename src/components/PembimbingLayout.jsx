import React from "react";
import { Outlet } from "react-router-dom";
import PembimbingSidebar from "./layout/PembimbingSidebar";

function PembimbingLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <PembimbingSidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:ml-64 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}

export default PembimbingLayout;
