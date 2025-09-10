// src/pages/pembimbing/PembimbingRiwayatNilai.jsx
import { useState } from "react";
import { UserCircle, Search } from "lucide-react";

const PembimbingRiwayatNilai = () => {
  // Dummy data riwayat (nanti bisa ambil dari backend)
  const [riwayat] = useState([
    {
      id: 1,
      nama: "Andi Saputra",
      divisi: "IT",
      proyek: "Sistem Inventaris",
      nilai: { rataRata: 87.5, catatan: "Sangat baik dan disiplin." },
    },
    {
      id: 2,
      nama: "Budi Santoso",
      divisi: "Keuangan",
      proyek: "Aplikasi Laporan Keuangan",
      nilai: { rataRata: 82.25, catatan: "Butuh peningkatan komunikasi." },
    },
    {
      id: 3,
      nama: "Citra Dewi",
      divisi: "HRD",
      proyek: "Sistem Rekrutmen",
      nilai: { rataRata: 90, catatan: "Aktif dan komunikatif." },
    },
  ]);

  const [search, setSearch] = useState("");

  // Filter berdasarkan nama atau divisi
  const filteredRiwayat = riwayat.filter(
    (user) =>
      user.nama.toLowerCase().includes(search.toLowerCase()) ||
      user.divisi.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-blue-900">
          Riwayat Penilaian User
        </h1>
        <div className="flex items-center gap-2 text-gray-700">
          <UserCircle className="w-6 h-6 text-blue-900" />
          <span className="hidden sm:inline">Pembimbing</span>
        </div>
      </div>

      {/* Filter */}
      <div className="mb-4 flex items-center gap-2">
        <div className="relative flex-1 max-w-sm">
          <input
            type="text"
            placeholder="Cari berdasarkan nama atau divisi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-lg py-2 pl-9 pr-3 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
          />
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      {/* Tabel Riwayat */}
      <div className="bg-white shadow rounded-lg p-4">
        {filteredRiwayat.length === 0 ? (
          <p className="text-gray-500 text-sm">Tidak ada data ditemukan.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm hidden md:table">
              <thead className="bg-gray-100 text-blue-900">
                <tr>
                  <th className="border px-2 py-1">Nama</th>
                  <th className="border px-2 py-1">Divisi</th>
                  <th className="border px-2 py-1">Proyek</th>
                  <th className="border px-2 py-1">Nilai Rata-rata</th>
                  <th className="border px-2 py-1">Catatan</th>
                </tr>
              </thead>
              <tbody>
                {filteredRiwayat.map((user) => (
                  <tr key={user.id} className="text-center">
                    <td className="border px-2 py-1">{user.nama}</td>
                    <td className="border px-2 py-1">{user.divisi}</td>
                    <td className="border px-2 py-1">{user.proyek}</td>
                    <td className="border px-2 py-1 font-semibold text-blue-900">
                      {user.nilai.rataRata}
                    </td>
                    <td className="border px-2 py-1">{user.nilai.catatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile Card */}
            <div className="space-y-3 md:hidden">
              {filteredRiwayat.map((user) => (
                <div
                  key={user.id}
                  className="border rounded-lg p-3 shadow-sm bg-gray-50"
                >
                  <p className="text-sm font-semibold">{user.nama}</p>
                  <p className="text-sm">Divisi: {user.divisi}</p>
                  <p className="text-sm">Proyek: {user.proyek}</p>
                  <p className="text-sm">
                    Nilai Rata-rata:{" "}
                    <span className="text-blue-900 font-semibold">
                      {user.nilai.rataRata}
                    </span>
                  </p>
                  <p className="text-sm">Catatan: {user.nilai.catatan}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PembimbingRiwayatNilai;
