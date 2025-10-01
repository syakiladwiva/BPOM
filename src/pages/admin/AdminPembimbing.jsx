import { useState } from "react";
import { UserCircle } from "lucide-react";
import PembimbingSection from "../../components/sections/admin/PembimbingSection";
import DivisiSection from "../../components/sections/admin/DivisiSection";

export default function AdminPembimbing() {
  const [activeTab, setActiveTab] = useState("pembimbing");

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-blue-900">
          {activeTab === "pembimbing" ? "Daftar Pembimbing" : "Daftar Divisi"}
        </h1>
        <div className="flex items-center gap-2 text-blue-900">
          <UserCircle className="w-6 h-6" />
          <span className="hidden sm:inline">Admin</span>
        </div>
      </div>

      {/* Tab Menu */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("pembimbing")}
          className={`px-4 py-2 rounded text-sm sm:text-base ${
            activeTab === "pembimbing"
              ? "bg-blue-900 text-white"
              : "bg-blue-100 text-blue-900 hover:bg-blue-200"
          }`}
        >
          Pembimbing
        </button>
        <button
          onClick={() => setActiveTab("divisi")}
          className={`px-4 py-2 rounded text-sm sm:text-base ${
            activeTab === "divisi"
              ? "bg-blue-900 text-white"
              : "bg-blue-100 text-blue-900 hover:bg-blue-200"
          }`}
        >
          Divisi
        </button>
      </div>

      {/* Content */}
      {activeTab === "pembimbing" ? <PembimbingSection /> : <DivisiSection />}
    </div>
  );
}
