// src/pages/PembimbingAbsensi.jsx
import React, { useState } from "react";
import { UserCircle } from "lucide-react";

const PembimbingAbsensi = () => {
  const [users] = useState([
    {
      id: 1,
      nama: "Andi Saputra",
      divisi: "IT",
      periode: "10 Sep 2025 - 10 Des 2025",
    },
    {
      id: 2,
      nama: "Budi Santoso",
      divisi: "Keuangan",
      periode: "15 Sep 2025 - 15 Des 2025",
    },
  ]);

  const [absensiHariIni, setAbsensiHariIni] = useState({});
  const [keteranganHariIni, setKeteranganHariIni] = useState({});
  const [riwayatAbsensi, setRiwayatAbsensi] = useState([]);

  const handleAbsensiChange = (id, status) => {
    setAbsensiHariIni((prev) => ({ ...prev, [id]: status }));
  };

  const handleKeteranganChange = (id, value) => {
    setKeteranganHariIni((prev) => ({ ...prev, [id]: value }));
  };

  const handleSimpanAbsensi = () => {
    const tanggal = new Date().toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const absensiBaru = users.map((user) => ({
      ...user,
      tanggal,
      status: absensiHariIni[user.id] || "Belum dipilih",
      keterangan: keteranganHariIni[user.id] || "-",
    }));

    setRiwayatAbsensi((prev) => [...prev, ...absensiBaru]);
    setAbsensiHariIni({});
    setKeteranganHariIni({});
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-blue-900">
          Absensi User
        </h1>
        <div className="flex items-center gap-2 text-gray-700">
          <UserCircle className="w-6 h-6 text-blue-900" />
          <span className="hidden sm:inline">Pembimbing</span>
        </div>
      </div>

      {/* Absensi Hari Ini */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <h3 className="font-semibold mb-3 text-blue-900">Absensi Hari Ini</h3>

        {/* Desktop - Tabel */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100 text-blue-900">
              <tr>
                <th className="border px-2 py-1">Nama</th>
                <th className="border px-2 py-1">Divisi</th>
                <th className="border px-2 py-1">Periode</th>
                <th className="border px-2 py-1">Status</th>
                <th className="border px-2 py-1">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="text-center">
                  <td className="border px-2 py-1">{user.nama}</td>
                  <td className="border px-2 py-1">{user.divisi}</td>
                  <td className="border px-2 py-1">{user.periode}</td>
                  <td className="border px-2 py-1">
                    <select
                      value={absensiHariIni[user.id] || ""}
                      onChange={(e) =>
                        handleAbsensiChange(user.id, e.target.value)
                      }
                      className="border rounded px-2 py-1 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                    >
                      <option value="">Pilih</option>
                      <option value="Hadir">Hadir</option>
                      <option value="Izin">Izin</option>
                      <option value="Sakit">Sakit</option>
                      <option value="Alpha">Alpha</option>
                    </select>
                  </td>
                  <td className="border px-2 py-1">
                    <input
                      type="text"
                      value={keteranganHariIni[user.id] || ""}
                      onChange={(e) =>
                        handleKeteranganChange(user.id, e.target.value)
                      }
                      placeholder="Isi keterangan..."
                      className="border rounded px-2 py-1 w-full text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile - Card */}
        <div className="space-y-3 md:hidden">
          {users.map((user) => (
            <div
              key={user.id}
              className="border rounded-lg p-3 shadow-sm bg-gray-50"
            >
              <p className="text-sm">
                <span className="font-semibold">Nama:</span> {user.nama}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Divisi:</span> {user.divisi}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Periode:</span> {user.periode}
              </p>
              <div className="mt-2">
                <label className="block text-sm font-semibold mb-1">
                  Status:
                </label>
                <select
                  value={absensiHariIni[user.id] || ""}
                  onChange={(e) => handleAbsensiChange(user.id, e.target.value)}
                  className="w-full border rounded px-2 py-2 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                >
                  <option value="">Pilih</option>
                  <option value="Hadir">Hadir</option>
                  <option value="Izin">Izin</option>
                  <option value="Sakit">Sakit</option>
                  <option value="Alpha">Alpha</option>
                </select>
              </div>
              <div className="mt-2">
                <label className="block text-sm font-semibold mb-1">
                  Keterangan:
                </label>
                <input
                  type="text"
                  value={keteranganHariIni[user.id] || ""}
                  onChange={(e) =>
                    handleKeteranganChange(user.id, e.target.value)
                  }
                  placeholder="Isi keterangan..."
                  className="w-full border rounded px-2 py-2 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleSimpanAbsensi}
          className="mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 w-full md:w-auto"
        >
          Simpan Absensi Hari Ini
        </button>
      </div>

      {/* Riwayat Absensi */}
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold mb-3 text-blue-900">Riwayat Absensi</h3>

        {riwayatAbsensi.length === 0 ? (
          <p className="text-gray-500 text-sm">Belum ada data absensi.</p>
        ) : (
          <>
            {/* Desktop - Tabel */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100 text-blue-900">
                  <tr>
                    <th className="border px-2 py-1">Tanggal</th>
                    <th className="border px-2 py-1">Nama</th>
                    <th className="border px-2 py-1">Divisi</th>
                    <th className="border px-2 py-1">Status</th>
                    <th className="border px-2 py-1">Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {riwayatAbsensi.map((absen, index) => (
                    <tr key={index} className="text-center">
                      <td className="border px-2 py-1">{absen.tanggal}</td>
                      <td className="border px-2 py-1">{absen.nama}</td>
                      <td className="border px-2 py-1">{absen.divisi}</td>
                      <td className="border px-2 py-1 text-blue-900 font-semibold">
                        {absen.status}
                      </td>
                      <td className="border px-2 py-1">{absen.keterangan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile - Card */}
            <div className="space-y-3 md:hidden">
              {riwayatAbsensi.map((absen, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-3 shadow-sm bg-gray-50"
                >
                  <p className="text-sm">
                    <span className="font-semibold">Tanggal:</span>{" "}
                    {absen.tanggal}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Nama:</span> {absen.nama}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Divisi:</span>{" "}
                    {absen.divisi}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Status:</span>{" "}
                    <span className="text-blue-900 font-semibold">
                      {absen.status}
                    </span>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Keterangan:</span>{" "}
                    {absen.keterangan}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PembimbingAbsensi;
