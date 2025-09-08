// src/pages/UserKalender.jsx
import React, { useState } from "react";
import { CalendarDays, UserCircle } from "lucide-react";

const UserKalender = () => {
  // Dummy data agenda (nanti ambil dari backend)
  const [agenda] = useState([
    {
      tanggal: "10-09-2025",
      kegiatan: "Orientasi Mahasiswa",
      jenis: "Orientasi",
    },
    {
      tanggal: "15-09-2025",
      kegiatan: "Workshop React JS",
      jenis: "Workshop",
    },
    {
      tanggal: "30-09-2025",
      kegiatan: "Deadline Proposal Proyek",
      jenis: "Deadline",
    },
    {
      tanggal: "05-10-2025",
      kegiatan: "Presentasi Kemajuan",
      jenis: "Presentasi",
    },
  ]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-2xl font-semibold text-blue-900">
          Kalender Kegiatan
        </h1>
        <div className="flex items-center gap-2 text-gray-700">
          <UserCircle className="w-6 h-6 text-blue-900" />
          <span>User</span>
        </div>
      </div>

      {/* Daftar Agenda */}
      <div className="bg-white shadow rounded-lg p-4 border">
        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2 text-blue-900">
          <CalendarDays className="w-5 h-5 text-blue-900" /> Jadwal Kegiatan
        </h3>
        {agenda.length === 0 ? (
          <p className="text-gray-500 text-sm">Belum ada agenda kegiatan.</p>
        ) : (
          <>
            {/* Tabel untuk desktop */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100 text-blue-900">
                  <tr>
                    <th className="border px-2 py-2">Tanggal</th>
                    <th className="border px-2 py-2">Kegiatan</th>
                    <th className="border px-2 py-2">Jenis</th>
                  </tr>
                </thead>
                <tbody>
                  {agenda.map((a, i) => (
                    <tr key={i} className="text-center">
                      <td className="border px-2 py-2">{a.tanggal}</td>
                      <td className="border px-2 py-2">{a.kegiatan}</td>
                      <td className="border px-2 py-2">{a.jenis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Card untuk mobile */}
            <div className="space-y-3 md:hidden">
              {agenda.map((a, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-3 shadow-sm bg-gray-50"
                >
                  <p className="text-sm">
                    <span className="font-semibold text-blue-900">
                      Tanggal:
                    </span>{" "}
                    {a.tanggal}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-blue-900">
                      Kegiatan:
                    </span>{" "}
                    {a.kegiatan}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-blue-900">Jenis:</span>{" "}
                    {a.jenis}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
        <p className="text-xs text-gray-500 mt-3">
          ⚠️ User hanya bisa melihat jadwal, tidak bisa mengubah.
        </p>
      </div>
    </div>
  );
};

export default UserKalender;
