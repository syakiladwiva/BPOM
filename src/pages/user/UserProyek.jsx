// src/pages/UserProyek.jsx
import React, { useState } from "react";
import { FileText, Upload, UserCircle, History, Paperclip } from "lucide-react";

// Fungsi untuk style badge status
const getStatusStyle = (status) => {
  switch (status) {
    case "Selesai":
      return "bg-green-100 text-green-700";
    case "Berjalan":
      return "bg-yellow-100 text-yellow-700";
    case "Belum mulai":
      return "bg-gray-200 text-gray-700";
    default:
      return "bg-gray-200 text-gray-700";
  }
};

const UserProyek = () => {
  const [proyek, setProyek] = useState({
    nama: "Sistem Absensi Online",
    deskripsi:
      "Proyek ini bertujuan membuat sistem absensi berbasis web dengan integrasi QR Code untuk memudahkan pencatatan kehadiran.",
    deadline: "30 September 2025",
    status: "Berjalan",
  });

  const [progressList, setProgressList] = useState([
    {
      id: 1,
      tanggal: "05-09-2025",
      deskripsi: "Sudah menyelesaikan setup environment & database.",
      file: null,
    },
  ]);
  const [deskripsi, setDeskripsi] = useState("");
  const [file, setFile] = useState(null);

  // ubah status proyek
  const handleStatusChange = (e) => {
    setProyek({ ...proyek, status: e.target.value });
  };

  // simpan progress baru
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!deskripsi.trim()) return;

    const newProgress = {
      id: progressList.length + 1,
      tanggal: new Date().toLocaleDateString("id-ID"),
      deskripsi,
      file: file ? file.name : null,
    };

    setProgressList([...progressList, newProgress]);
    setDeskripsi("");
    setFile(null);
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen max-w-full overflow-x-hidden">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-lg sm:text-2xl font-semibold text-blue-900 break-words">
          Proyek Saya
        </h1>
        <div className="flex items-center gap-2 text-gray-700">
          <UserCircle className="w-6 h-6 flex-shrink-0 text-blue-900" />
          <span className="text-sm sm:text-base">User</span>
        </div>
      </div>

      {/* Detail Proyek */}
      <div className="bg-white shadow rounded-2xl p-5 sm:p-6 mb-6 relative">
        {/* Badge status pojok kanan atas */}
        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs sm:text-sm ${getStatusStyle(
            proyek.status
          )}`}
        >
          {proyek.status}
        </span>

        <h2 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2 text-blue-900">
          <FileText className="w-5 h-5 text-blue-900 flex-shrink-0" />
          Detail Proyek
        </h2>
        <div className="space-y-2 text-sm sm:text-base">
          <p>
            <span className="font-medium">Nama:</span> {proyek.nama}
          </p>
          <p>
            <span className="font-medium">Deskripsi:</span> {proyek.deskripsi}
          </p>
          <p>
            <span className="font-medium">Deadline:</span> {proyek.deadline}
          </p>

          <div className="flex items-center gap-2 mt-2">
            <span className="font-medium">Status:</span>
            <select
              value={proyek.status}
              onChange={handleStatusChange}
              className="border px-3 py-1 rounded-lg text-sm focus:ring focus:ring-blue-200"
            >
              <option value="Belum mulai">Belum mulai</option>
              <option value="Berjalan">Berjalan</option>
              <option value="Selesai">Selesai</option>
            </select>
          </div>
        </div>
      </div>

      {/* Form Update Progress */}
      <div className="bg-white shadow rounded-2xl p-5 sm:p-6 mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 flex items-center gap-2 text-blue-900">
          <Upload className="w-5 h-5 text-blue-900 flex-shrink-0" />
          Update Progress
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            placeholder="Tulis progress terbaru..."
            className="w-full border rounded-lg p-2 text-sm break-words focus:ring focus:ring-blue-200"
            rows="3"
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="block text-sm text-gray-600"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 w-full sm:w-auto"
          >
            Simpan Progress
          </button>
        </form>
      </div>

      {/* Riwayat Progress */}
      <div className="bg-white shadow rounded-2xl p-5 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 flex items-center gap-2 text-blue-900">
          <History className="w-5 h-5 text-blue-900 flex-shrink-0" />
          Riwayat Progress
        </h2>
        {progressList.length === 0 ? (
          <p className="text-gray-500 text-sm">Belum ada progress tercatat.</p>
        ) : (
          <ul className="space-y-3">
            {progressList.map((p) => (
              <li
                key={p.id}
                className="border rounded-lg p-3 text-sm bg-gray-50 break-words"
              >
                <p className="font-medium text-blue-900">{p.tanggal}</p>
                <p>{p.deskripsi}</p>
                {p.file && (
                  <p className="text-xs text-gray-600 mt-1 break-words flex items-center gap-1">
                    <Paperclip className="w-4 h-4 text-blue-900" />
                    <span className="underline cursor-pointer">{p.file}</span>
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserProyek;
