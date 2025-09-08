import React from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "./layout/UserSidebar";

function UserLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <UserSidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:ml-64 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}

export default UserLayout;
