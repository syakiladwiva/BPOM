// src/pages/UserPembimbing.jsx
import React from "react";
import { UserCircle } from "lucide-react";

const UserPembimbing = () => {
  // Data dummy pembimbing (nanti bisa diambil dari backend)
  const pembimbing = {
    nama: "Budi Santoso",
    divisi: "IT",
    email: "budi.santoso@perusahaan.com",
    kontak: "021-1234567",
    jumlahUser: 5,
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-2xl font-semibold text-blue-900">
          Profil Pembimbing
        </h1>
        <div className="flex items-center gap-2 text-gray-700">
          <UserCircle className="w-6 h-6" />
          <span>User</span>
        </div>
      </div>

      {/* Tabel (Desktop) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Nama</th>
              <th className="p-2 border">Divisi</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Kontak</th>
              <th className="p-2 border">Jumlah User</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="p-2 border">{pembimbing.nama}</td>
              <td className="p-2 border">{pembimbing.divisi}</td>
              <td className="p-2 border">{pembimbing.email}</td>
              <td className="p-2 border">{pembimbing.kontak}</td>
              <td className="p-2 border">{pembimbing.jumlahUser}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Card (Mobile) */}
      <div className="md:hidden bg-white shadow rounded-lg p-6 text-sm">
        <h3 className="font-semibold text-lg mb-2">📌 Informasi Utama</h3>
        <p>
          <span className="font-medium">Nama:</span> {pembimbing.nama}
        </p>
        <p>
          <span className="font-medium">Divisi:</span> {pembimbing.divisi}
        </p>

        <h3 className="font-semibold text-lg mt-4 mb-2">📞 Kontak</h3>
        <p>
          <span className="font-medium">Email:</span> {pembimbing.email}
        </p>
        <p>
          <span className="font-medium">Nomor Kantor:</span> {pembimbing.kontak}
        </p>

        <h3 className="font-semibold text-lg mt-4 mb-2">👥 User Dibimbing</h3>
        <p>
          Saat ini membimbing{" "}
          <span className="font-bold">{pembimbing.jumlahUser}</span> user aktif.
        </p>
      </div>
    </div>
  );
};

export default UserPembimbing;