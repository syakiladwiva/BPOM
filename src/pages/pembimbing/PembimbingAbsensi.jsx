// src/pages/PembimbingAbsensi.jsx
import React, { useState } from "react";

const PembimbingAbsensi = () => {
  // Data dummy
  const dummyAbsensi = [
    {
      nama: "Syakila Dwiva",
      tanggal: "2025-09-01",
      aktivitas: "Mengikuti briefing pagi",
      statusAbsensi: "hadir",
    },
    {
      nama: "Rina Lestari",
      tanggal: "2025-09-02",
      aktivitas: "Mengerjakan laporan harian",
      statusAbsensi: "tidak hadir",
    },
    {
      nama: "Budi Santoso",
      tanggal: "2025-09-03",
      aktivitas: "Presentasi project",
      statusAbsensi: "pending",
    },
  ];

  const [permintaan, setPermintaan] = useState(dummyAbsensi);

  const handleUpdate = (id, status) => {
    setPermintaan((prev) =>
      prev.map((p, i) => (i === id ? { ...p, statusAbsensi: status } : p))
    );
  };

  // Filter untuk pisahkan pending dan riwayat
  const pendingRequests = permintaan.filter(
    (p) => p.statusAbsensi === "pending"
  );
  const riwayatAbsensi = permintaan.filter(
    (p) => p.statusAbsensi !== "pending"
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Permintaan Absensi */}
      <h1 className="text-2xl font-semibold text-blue-900 mb-6">
        Permintaan Absensi
      </h1>

      <div className="bg-white rounded-2xl shadow p-6 border overflow-x-auto mb-10">
        {pendingRequests.length === 0 ? (
          <p className="text-gray-500 text-sm">
            Tidak ada permintaan absensi yang pending.
          </p>
        ) : (
          <table className="min-w-full border border-black text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-black px-3 py-2">Nama</th>
                <th className="border border-black px-3 py-2">Tanggal</th>
                <th className="border border-black px-3 py-2">Aktivitas</th>
                <th className="border border-black px-3 py-2">Status</th>
                <th className="border border-black px-3 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {pendingRequests.map((p, i) => (
                <tr key={i} className="text-center">
                  <td className="border border-black px-3 py-2">{p.nama}</td>
                  <td className="border border-black px-3 py-2">{p.tanggal}</td>
                  <td className="border border-black px-3 py-2">
                    {p.aktivitas}
                  </td>
                  <td className="border border-black px-3 py-2 text-yellow-600 font-medium">
                    Pending
                  </td>
                  <td className="border border-black px-3 py-2">
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() =>
                          handleUpdate(permintaan.indexOf(p), "hadir")
                        }
                        className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
                      >
                        Terima
                      </button>
                      <button
                        onClick={() =>
                          handleUpdate(permintaan.indexOf(p), "tidak hadir")
                        }
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Tolak
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Riwayat Absensi */}
      <h2 className="text-xl font-semibold text-blue-900 mb-4">
        Riwayat Absensi
      </h2>

      <div className="bg-white rounded-2xl shadow p-6 border overflow-x-auto">
        {riwayatAbsensi.length === 0 ? (
          <p className="text-gray-500 text-sm">Belum ada riwayat absensi.</p>
        ) : (
          <table className="min-w-full border border-black text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-black px-3 py-2">Nama</th>
                <th className="border border-black px-3 py-2">Tanggal</th>
                <th className="border border-black px-3 py-2">Aktivitas</th>
                <th className="border border-black px-3 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {riwayatAbsensi.map((p, i) => (
                <tr key={i} className="text-center">
                  <td className="border border-black px-3 py-2">{p.nama}</td>
                  <td className="border border-black px-3 py-2">{p.tanggal}</td>
                  <td className="border border-black px-3 py-2">
                    {p.aktivitas}
                  </td>
                  <td className="border border-black px-3 py-2">
                    {p.statusAbsensi === "hadir" && (
                      <span className="text-green-600 font-medium">Hadir</span>
                    )}
                    {p.statusAbsensi === "tidak hadir" && (
                      <span className="text-red-600 font-medium">
                        Tidak Hadir
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PembimbingAbsensi;
