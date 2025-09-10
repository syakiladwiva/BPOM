// src/pages/UserAbsensi.jsx
import React, { useState } from "react";
import { CalendarDays, UserCircle, Filter } from "lucide-react";

const UserAbsensi = () => {
  // Dummy data absensi
  const [absensi] = useState([
    { id: 1, tanggal: "2025-09-01", status: "Hadir" },
    { id: 2, tanggal: "2025-09-02", status: "Tidak Hadir" },
    { id: 3, tanggal: "2025-09-03", status: "Pending" },
    { id: 4, tanggal: "2025-09-04", status: "Hadir" },
  ]);

  const [filterTanggal, setFilterTanggal] = useState("");

  // Warna status
  const getStatusStyle = (status) => {
    switch (status) {
      case "Hadir":
        return "bg-green-100 text-green-700";
      case "Tidak Hadir":
        return "bg-red-100 text-red-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // Data setelah difilter
  const filteredAbsensi = filterTanggal
    ? absensi.filter((a) => a.tanggal === filterTanggal)
    : absensi;

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen max-w-full overflow-x-hidden">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-lg sm:text-2xl font-semibold text-blue-900">
          Absensi Saya
        </h1>
        <div className="flex items-center gap-2 text-gray-700">
          <UserCircle className="w-6 h-6 flex-shrink-0 text-blue-900" />
          <span className="text-sm sm:text-base">User</span>
        </div>
      </div>

      {/* Filter Tanggal */}
      <div className="mb-4 flex items-center gap-2">
        <Filter className="w-5 h-5 text-blue-900" />
        <input
          type="date"
          value={filterTanggal}
          onChange={(e) => setFilterTanggal(e.target.value)}
          className="border rounded px-2 py-1 text-sm sm:text-base"
        />
        {filterTanggal && (
          <button
            onClick={() => setFilterTanggal("")}
            className="px-3 py-1 bg-blue-900 text-white rounded text-sm hover:bg-blue-800"
          >
            Reset
          </button>
        )}
      </div>

      {/* Tabel Absensi */}
      <div className="bg-white shadow rounded-lg p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 flex items-center gap-2 text-blue-900">
          <CalendarDays className="w-5 h-5 text-blue-900 flex-shrink-0" /> Rekap
          Absensi
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm sm:text-base">
            <thead className="bg-gray-100 text-blue-900">
              <tr className="text-left">
                <th className="border px-3 py-2">Tanggal</th>
                <th className="border px-3 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredAbsensi.length > 0 ? (
                filteredAbsensi.map((a) => (
                  <tr key={a.id} className="hover:bg-gray-50">
                    <td className="border px-3 py-2">{a.tanggal}</td>
                    <td className="border px-3 py-2">
                      <span
                        className={`px-2 py-1 rounded text-xs sm:text-sm ${getStatusStyle(
                          a.status
                        )}`}
                      >
                        {a.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="2"
                    className="text-center text-gray-500 py-3 border"
                  >
                    Tidak ada data absensi untuk tanggal tersebut.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-3">
          ⚠️ Absensi hanya bisa dilihat, tidak bisa diubah.
        </p>
      </div>
    </div>
  );
};

export default UserAbsensi;
