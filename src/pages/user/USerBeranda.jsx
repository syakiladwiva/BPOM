// src/pages/UserBeranda.jsx
import React from "react";
import { UserCircle, CalendarDays, Briefcase } from "lucide-react";

const UserBeranda = () => {
  // Data dummy, nanti bisa diganti dari backend
  const user = {
    nama: "Andi Saputra",
    divisi: "IT",
    periode: "10 Sep 2025 - 10 Des 2025",
    pembimbing: { nama: "Budi Santoso", divisi: "IT" },
    kegiatanTerdekat: {
      tanggal: "15 Sep 2025",
      kegiatan: "Workshop React.js",
    },
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-2xl font-semibold text-blue-900">Beranda</h1>
        <div className="flex items-center gap-2 text-gray-700">
          <UserCircle className="w-6 h-6" />
          <span>User</span>
        </div>
      </div>

      {/* Grid Card */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profil Singkat */}
        <div className="bg-white rounded-2xl shadow p-6 border text-center">
          <h3 className="text-gray-700 font-semibold mb-3">Profil Singkat</h3>
          <UserCircle className="w-12 h-12 text-blue-900 mx-auto mb-3" />
          <p>
            <span className="font-medium">Nama:</span> {user.nama}
          </p>
          <p>
            <span className="font-medium">Divisi:</span> {user.divisi}
          </p>
          <p>
            <span className="font-medium">Periode:</span> {user.periode}
          </p>
        </div>

        {/* Info Pembimbing */}
        <div className="bg-white rounded-2xl shadow p-6 border text-center">
          <h3 className="text-gray-700 font-semibold mb-3">Info Pembimbing</h3>
          <Briefcase className="w-12 h-12 text-blue-900 mx-auto mb-3" />
          <p>
            <span className="font-medium">Nama:</span> {user.pembimbing.nama}
          </p>
          <p>
            <span className="font-medium">Divisi:</span>{" "}
            {user.pembimbing.divisi}
          </p>
        </div>

        {/* Reminder Kegiatan */}
        <div className="bg-white rounded-2xl shadow p-6 border text-center">
          <h3 className="text-gray-700 font-semibold mb-3">
            Reminder Terdekat
          </h3>
          <CalendarDays className="w-12 h-12 text-blue-900 mx-auto mb-3" />
          {user.kegiatanTerdekat ? (
            <p>
              <span className="font-medium">
                {user.kegiatanTerdekat.tanggal}
              </span>{" "}
              - {user.kegiatanTerdekat.kegiatan}
            </p>
          ) : (
            <p className="text-gray-500">Tidak ada kegiatan terdekat.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserBeranda;
