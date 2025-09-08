// src/pages/AdminSertifikat.jsx
import React, { useState } from "react";
import { UserCircle } from "lucide-react"; // icon admin

const AdminSertifikat = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      nama: "Syakila Dwiva",
      divisi: "IT",
      tanggalSelesai: "2025-08-01",
      statusSertifikat: "Belum Dibuat",
    },
    {
      id: 2,
      nama: "Andi Pratama",
      divisi: "Keuangan",
      tanggalSelesai: "2025-08-10",
      statusSertifikat: "Sudah Dibuat",
    },
    {
      id: 3,
      nama: "Siti Aisyah",
      divisi: "Marketing",
      tanggalSelesai: "2025-07-25",
      statusSertifikat: "Sudah Dibuat",
    },
    {
      id: 4,
      nama: "Rudi Hartono",
      divisi: "HR",
      tanggalSelesai: "2025-08-15",
      statusSertifikat: "Belum Dibuat",
    },
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleUpload = (id) => {
    alert(`Upload sertifikat untuk user ID: ${id}`);
  };

  const handleGenerate = (id) => {
    alert(`Generate sertifikat otomatis untuk user ID: ${id}`);
  };

  const handleTandai = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, statusSertifikat: "Sudah Dibuat" } : user
      )
    );
  };

  const handleKirim = (id) => {
    alert(`Sertifikat user ID ${id} dikirim (user sudah bisa download).`);
  };

  const openDetail = (user) => {
    setSelectedUser(user);
    setIsDetailOpen(true);
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-blue-900">
          Manajemen Sertifikat
        </h1>
        <div className="flex items-center gap-2 text-blue-900">
          <UserCircle className="w-6 h-6" />
          <span className="hidden sm:inline">Admin</span>
        </div>
      </div>

      {/* Tabel Sertifikat (Desktop) */}
      <div className="hidden md:block overflow-x-auto rounded-lg shadow">
        <table className="w-full border border-gray-200 text-sm">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-3 border">Nama</th>
              <th className="p-3 border">Divisi</th>
              <th className="p-3 border">Tanggal Selesai</th>
              <th className="p-3 border">Status Sertifikat</th>
              <th className="p-3 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center hover:bg-blue-50">
                <td className="p-3 border">{user.nama}</td>
                <td className="p-3 border">{user.divisi}</td>
                <td className="p-3 border">{user.tanggalSelesai}</td>
                <td className="p-3 border">{user.statusSertifikat}</td>
                <td className="p-3 border space-x-2">
                  <button
                    onClick={() => handleUpload(user.id)}
                    className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs sm:text-sm"
                  >
                    Upload
                  </button>
                  <button
                    onClick={() => handleGenerate(user.id)}
                    className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs sm:text-sm"
                  >
                    Generate
                  </button>
                  <button
                    onClick={() => handleTandai(user.id)}
                    className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs sm:text-sm"
                  >
                    Tandai
                  </button>
                  <button
                    onClick={() => handleKirim(user.id)}
                    disabled={user.statusSertifikat !== "Sudah Dibuat"}
                    className={`px-3 py-1 rounded text-white text-xs sm:text-sm ${
                      user.statusSertifikat === "Sudah Dibuat"
                        ? "bg-blue-900 hover:bg-blue-800"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Kirim
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card List (Mobile) */}
      <div className="grid gap-4 md:hidden">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow p-4 border text-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-blue-900">{user.nama}</h2>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  user.statusSertifikat === "Sudah Dibuat"
                    ? "bg-blue-100 text-blue-900"
                    : "bg-blue-50 text-blue-800"
                }`}
              >
                {user.statusSertifikat}
              </span>
            </div>
            <p>
              <b>Divisi:</b> {user.divisi}
            </p>
            <p>
              <b>Selesai:</b> {user.tanggalSelesai}
            </p>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                onClick={() => handleUpload(user.id)}
                className="px-3 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs"
              >
                Upload
              </button>
              <button
                onClick={() => handleGenerate(user.id)}
                className="px-3 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs"
              >
                Generate
              </button>
              <button
                onClick={() => handleTandai(user.id)}
                className="px-3 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs"
              >
                Tandai
              </button>
              <button
                onClick={() => handleKirim(user.id)}
                disabled={user.statusSertifikat !== "Sudah Dibuat"}
                className={`px-3 py-2 rounded text-white text-xs ${
                  user.statusSertifikat === "Sudah Dibuat"
                    ? "bg-blue-900 hover:bg-blue-800"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Kirim
              </button>
            </div>

            <button
              onClick={() => openDetail(user)}
              className="w-full mt-3 px-3 py-2 bg-blue-100 text-blue-900 rounded hover:bg-blue-200 text-xs"
            >
              Lihat Detail
            </button>
          </div>
        ))}
      </div>

      {/* Modal Detail */}
      {isDetailOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg mx-2 sm:mx-0 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">
              Detail Sertifikat
            </h2>
            <div className="space-y-3">
              <p>
                <b>Nama:</b> {selectedUser.nama}
              </p>
              <p>
                <b>Divisi:</b> {selectedUser.divisi}
              </p>
              <p>
                <b>Tanggal Selesai:</b> {selectedUser.tanggalSelesai}
              </p>
              <p>
                <b>Status Sertifikat:</b>{" "}
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    selectedUser.statusSertifikat === "Sudah Dibuat"
                      ? "bg-blue-100 text-blue-900"
                      : "bg-blue-50 text-blue-800"
                  }`}
                >
                  {selectedUser.statusSertifikat}
                </span>
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2">
              <button
                onClick={() => handleUpload(selectedUser.id)}
                className="px-3 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 text-sm"
              >
                Upload
              </button>
              <button
                onClick={() => handleGenerate(selectedUser.id)}
                className="px-3 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 text-sm"
              >
                Generate
              </button>
              <button
                onClick={() => handleTandai(selectedUser.id)}
                className="px-3 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 text-sm"
              >
                Tandai
              </button>
              <button
                onClick={() => handleKirim(selectedUser.id)}
                disabled={selectedUser.statusSertifikat !== "Sudah Dibuat"}
                className={`px-3 py-2 rounded text-white text-sm ${
                  selectedUser.statusSertifikat === "Sudah Dibuat"
                    ? "bg-blue-900 hover:bg-blue-800"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Kirim
              </button>
            </div>
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
};

export default AdminSertifikat;