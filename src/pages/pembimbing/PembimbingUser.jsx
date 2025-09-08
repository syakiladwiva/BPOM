// src/pages/PembimbingUser.jsx
import { useState } from "react";
import { UserCircle } from "lucide-react";

const dummyUserAktif = [
  {
    id: 1,
    nama: "Syakila Dwiva",
    email: "syakila@example.com",
    noHp: "081234567890",
    divisi: "IT",
    periode: "01 Juli 2025 – 30 September 2025",
    proyek: "Sistem Absensi Online",
    status: "Berjalan",
    absensi: [
      { tanggal: "01-08-2025", keterangan: "Hadir" },
      { tanggal: "02-08-2025", keterangan: "Hadir" },
      { tanggal: "03-08-2025", keterangan: "Izin" },
    ],
    progres: "50% selesai – backend API sudah dibuat.",
    catatan: "Bagus, aktif mengerjakan tugas.",
  },
  {
    id: 2,
    nama: "Budi Santoso",
    email: "budi@example.com",
    noHp: "081298765432",
    divisi: "Keuangan",
    periode: "15 Juli 2025 – 15 Oktober 2025",
    proyek: "Laporan Keuangan Otomatis",
    status: "Belum mulai",
    absensi: [{ tanggal: "01-08-2025", keterangan: "Hadir" }],
    progres: "Belum ada progres.",
    catatan: "Baru mulai, perlu arahan awal.",
  },
];

export default function PembimbingUser() {
  const [users] = useState(dummyUserAktif);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const openDetail = (user) => {
    setSelectedUser(user);
    setIsDetailOpen(true);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-2xl font-semibold text-blue-900">
          Data User Bimbingan
        </h1>
        <div className="flex items-center gap-2 text-gray-700">
          <UserCircle className="w-6 h-6 text-blue-900" />
          <span>Pembimbing</span>
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
              <th className="p-2 border">Status Proyek</th>
              <th className="p-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="text-center">
                <td className="p-2 border">{u.nama}</td>
                <td className="p-2 border">{u.divisi}</td>
                <td className="p-2 border">{u.periode}</td>
                <td className="p-2 border">{u.proyek}</td>
                <td className="p-2 border">{u.status}</td>
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
        {users.map((u) => (
          <div
            key={u.id}
            className="bg-white rounded-lg shadow p-4 border text-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-blue-900">{u.nama}</h2>
              <span className="text-xs px-2 py-1 rounded bg-blue-900 text-white">
                {u.status}
              </span>
            </div>
            <p>
              <b>Divisi:</b> {u.divisi}
            </p>
            <p>
              <b>Periode:</b> {u.periode}
            </p>
            <p>
              <b>Proyek:</b> {u.proyek}
            </p>
            <div className="mt-3">
              <button
                onClick={() => openDetail(u)}
                className="w-full px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
              >
                Detail
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail */}
      {isDetailOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg mx-2 sm:mx-0 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">
              Detail User Aktif
            </h2>
            <div className="space-y-2 text-sm">
              <p>
                <b>Nama:</b> {selectedUser.nama}
              </p>
              <p>
                <b>Email:</b> {selectedUser.email}
              </p>
              <p>
                <b>No HP:</b> {selectedUser.noHp}
              </p>
              <p>
                <b>Divisi:</b> {selectedUser.divisi}
              </p>
              <p>
                <b>Periode:</b> {selectedUser.periode}
              </p>
              <p>
                <b>Proyek:</b> {selectedUser.proyek}
              </p>
              <p>
                <b>Status Proyek:</b> {selectedUser.status}
              </p>
              <p>
                <b>Progres:</b> {selectedUser.progres}
              </p>
              <p>
                <b>Catatan Pembimbing:</b> {selectedUser.catatan}
              </p>
            </div>

            {/* Riwayat Absensi */}
            <h3 className="text-md font-semibold text-blue-900 mt-4 mb-2">
              Riwayat Absensi
            </h3>
            <table className="w-full text-sm border border-gray-200 mb-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Tanggal</th>
                  <th className="p-2 border">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {selectedUser.absensi.map((a, idx) => (
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
