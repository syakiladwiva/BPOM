// src/pages/PembimbingRiwayat.jsx
import { useState } from "react";
import { UserCircle } from "lucide-react";

const dummyRiwayat = [
  {
    id: 1,
    nama: "Andi Saputra",
    divisi: "IT",
    periode: "01 Maret 2025 – 31 Mei 2025",
    proyek: "Aplikasi Monitoring Gudang",
    nilaiAkhir: "A",
    sertifikat: "Sudah diberikan",
    detail: {
      absensi: [
        { tanggal: "01-03-2025", keterangan: "Hadir" },
        { tanggal: "02-03-2025", keterangan: "Hadir" },
        { tanggal: "03-03-2025", keterangan: "Izin" },
      ],
      nilai: "A",
      proyek: "Aplikasi Monitoring Gudang (selesai & diuji coba)",
      catatan: "Rajin, mandiri, dan hasil proyek sangat baik.",
    },
  },
  {
    id: 2,
    nama: "Budi Santoso",
    divisi: "Keuangan",
    periode: "15 Februari 2025 – 15 Mei 2025",
    proyek: "Sistem Laporan Keuangan",
    nilaiAkhir: "B+",
    sertifikat: "Belum diberikan",
    detail: {
      absensi: [
        { tanggal: "15-02-2025", keterangan: "Hadir" },
        { tanggal: "16-02-2025", keterangan: "Hadir" },
      ],
      nilai: "B+",
      proyek: "Sistem Laporan Keuangan (selesai & digunakan internal)",
      catatan: "Perlu bimbingan lebih, tapi cukup rajin.",
    },
  },
];

export default function PembimbingRiwayat() {
  const [riwayat] = useState(dummyRiwayat);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const openDetail = (user) => {
    setSelectedUser(user);
    setIsDetailOpen(true);
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-blue-900">
          Riwayat User Bimbingan
        </h1>
        <div className="flex items-center gap-2 text-gray-700">
          <UserCircle className="w-6 h-6 text-blue-900" />
          <span className="hidden sm:inline">Pembimbing</span>
        </div>
      </div>

      {/* Table (Desktop) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Nama</th>
              <th className="p-2 border">Divisi</th>
              <th className="p-2 border">Periode</th>
              <th className="p-2 border">Proyek</th>
              <th className="p-2 border">Nilai Akhir</th>
              <th className="p-2 border">Sertifikat</th>
              <th className="p-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {riwayat.map((u) => (
              <tr key={u.id} className="text-center">
                <td className="p-2 border">{u.nama}</td>
                <td className="p-2 border">{u.divisi}</td>
                <td className="p-2 border">{u.periode}</td>
                <td className="p-2 border">{u.proyek}</td>
                <td className="p-2 border">{u.nilaiAkhir}</td>
                <td className="p-2 border">{u.sertifikat}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => openDetail(u)}
                    className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card List (Mobile) */}
      <div className="grid gap-4 md:hidden">
        {riwayat.map((u) => (
          <div
            key={u.id}
            className="bg-white rounded-lg shadow p-4 border text-sm"
          >
            <h2 className="font-semibold text-blue-900 mb-1">{u.nama}</h2>
            <p>
              <b>Divisi:</b> {u.divisi}
            </p>
            <p>
              <b>Periode:</b> {u.periode}
            </p>
            <p>
              <b>Proyek:</b> {u.proyek}
            </p>
            <p>
              <b>Nilai Akhir:</b> {u.nilaiAkhir}
            </p>
            <p>
              <b>Sertifikat:</b> {u.sertifikat}
            </p>
            <button
              onClick={() => openDetail(u)}
              className="mt-3 w-full px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
            >
              Detail
            </button>
          </div>
        ))}
      </div>

      {/* Modal Detail */}
      {isDetailOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg mx-2 sm:mx-0 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">
              Detail Riwayat User
            </h2>
            <div className="space-y-2 text-sm">
              <p>
                <b>Nama:</b> {selectedUser.nama}
              </p>
              <p>
                <b>Divisi:</b> {selectedUser.divisi}
              </p>
              <p>
                <b>Periode:</b> {selectedUser.periode}
              </p>
              <p>
                <b>Proyek:</b> {selectedUser.detail.proyek}
              </p>
              <p>
                <b>Nilai Akhir:</b> {selectedUser.detail.nilai}
              </p>
              <p>
                <b>Catatan Pembimbing:</b> {selectedUser.detail.catatan}
              </p>
            </div>

            {/* Absensi Final */}
            <h3 className="text-md font-semibold text-blue-900 mt-4 mb-2">
              Absensi Final
            </h3>
            <table className="w-full text-sm border border-gray-200 mb-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Tanggal</th>
                  <th className="p-2 border">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {selectedUser.detail.absensi.map((a, idx) => (
                  <tr key={idx} className="text-center">
                    <td className="p-2 border">{a.tanggal}</td>
                    <td className="p-2 border">{a.keterangan}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4 text-right">
              <button
                onClick={() => setIsDetailOpen(false)}
                className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
