import React from "react";
import { Users, UserCheck, UserCircle } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function AdminBeranda() {
  // Dummy data pelamar per bulan
  const data = [
    { bulan: "Jan", jumlah: 40 },
    { bulan: "Feb", jumlah: 55 },
    { bulan: "Mar", jumlah: 75 },
    { bulan: "Apr", jumlah: 50 },
    { bulan: "Mei", jumlah: 90 },
    { bulan: "Jun", jumlah: 100 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-2xl font-semibold text-blue-900">Beranda</h1>
        <div className="flex items-center gap-2 text-blue-900">
          <UserCircle className="w-6 h-6" />
          <span>Admin</span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Jumlah Pelamar */}
        <div className="bg-white rounded-2xl shadow p-5 border">
          <h2 className="text-blue-900 font-medium mb-3">Jumlah Pelamar</h2>
          <p className="text-3xl font-bold text-blue-900">25</p>
          <div className="flex justify-between text-sm mt-3 border-t pt-2 text-blue-900">
            <div>
              <p className="font-medium">Belum Diproses</p>
              <p>5</p>
            </div>
            <div>
              <p className="font-medium">Sedang Diproses</p>
              <p>10</p>
            </div>
          </div>
        </div>

        {/* Jumlah User */}
        <div className="bg-white rounded-2xl shadow p-5 border flex flex-col items-center">
          <h2 className="text-blue-900 font-medium mb-3">Jumlah User</h2>
          <Users className="w-10 h-10 text-blue-900 mb-2" />
          <p className="text-3xl font-bold text-blue-900">25</p>
        </div>

        {/* Jumlah Pembimbing */}
        <div className="bg-white rounded-2xl shadow p-5 border flex flex-col items-center">
          <h2 className="text-blue-900 font-medium mb-3">Jumlah Pembimbing</h2>
          <UserCheck className="w-10 h-10 text-blue-900 mb-2" />
          <p className="text-3xl font-bold text-blue-900">25</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-2xl shadow p-5 border">
        <h2 className="text-blue-900 font-medium mb-4">
          Jumlah Pelamar per Bulan
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
            <XAxis dataKey="bulan" stroke="#1e3a8a" />
            <YAxis stroke="#1e3a8a" />
            <Tooltip
              contentStyle={{ borderRadius: "8px", borderColor: "#1e3a8a" }}
            />
            <Legend />
            <Bar dataKey="jumlah" fill="#1e3a8a" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AdminBeranda;
 