// src/pages/PembimbingBeranda.jsx
import React from "react";
import { Users, CheckCircle, Calendar, UserCircle } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function PembimbingBeranda() {
  // Data dummy ringkasan
  const summary = {
    aktif: 12,
    selesai: 8,
    reminder: "Meeting bimbingan - 05 Sept 2025, 10:00 WIB",
  };

  // Data untuk grafik bar (status user)
  const statusData = [
    { name: "Aktif", jumlah: 12 },
    { name: "Selesai", jumlah: 8 },
    { name: "Belum Mulai", jumlah: 5 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-2xl font-semibold text-blue-900">
          Dashboard Pembimbing
        </h1>
        <div className="flex items-center gap-2 text-blue-900">
          <UserCircle className="w-6 h-6" />
          <span>Pembimbing</span>
        </div>
      </div>

      {/* Ringkasan Cepat */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow p-5 border flex items-center">
          <Users className="w-10 h-10 text-blue-900 mr-4" />
          <div>
            <p className="text-gray-500 text-sm">User Aktif</p>
            <p className="text-2xl font-bold text-blue-900">{summary.aktif}</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-5 border flex items-center">
          <CheckCircle className="w-10 h-10 text-blue-900 mr-4" />
          <div>
            <p className="text-gray-500 text-sm">User Selesai</p>
            <p className="text-2xl font-bold text-blue-900">
              {summary.selesai}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-5 border flex items-center">
          <Calendar className="w-10 h-10 text-blue-900 mr-4" />
          <div>
            <p className="text-gray-500 text-sm">Reminder Terdekat</p>
            <p className="text-sm font-medium text-blue-900">
              {summary.reminder}
            </p>
          </div>
        </div>
      </div>

      {/* Grafik Bar */}
      <div className="bg-white rounded-2xl shadow p-6 border">
        <h2 className="text-lg font-semibold text-blue-900 mb-4">
          Status User
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={statusData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="jumlah" fill="#1e3a8a" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PembimbingBeranda;
