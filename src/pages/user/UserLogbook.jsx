// src/pages/UserLogbook.jsx
import React, { useState } from "react";
import { UserCircle, FileDown, NotebookPen } from "lucide-react";

const UserLogbook = ({ onSubmitLogbook }) => {
  const [logbook, setLogbook] = useState([]);
  const [form, setForm] = useState({
    tanggal: "",
    aktivitas: "",
    jamMulai: "",
    jamSelesai: "",
    kendala: "",
    catatan: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.tanggal || !form.aktivitas || !form.jamMulai || !form.jamSelesai)
      return alert("Isi semua field wajib!");

    const newLog = { ...form, statusAbsensi: "pending" };
    setLogbook([...logbook, newLog]);

    // kirim ke pembimbing (notifikasi absensi)
    if (onSubmitLogbook) onSubmitLogbook(newLog);

    setForm({
      tanggal: "",
      aktivitas: "",
      jamMulai: "",
      jamSelesai: "",
      kendala: "",
      catatan: "",
    });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-2xl font-semibold text-blue-900">Logbook Harian</h1>
        <div className="flex items-center gap-2 text-gray-700">
          <UserCircle className="w-6 h-6 text-blue-900" />
          <span className="hidden sm:inline">User</span>
        </div>
      </div>

      {/* Form Input */}
      <div className="bg-white shadow rounded-lg p-6 mb-6 border">
        <h3 className="font-semibold mb-3 flex items-center gap-2 text-blue-900">
          <NotebookPen className="w-5 h-5 text-blue-900" /> Isi Logbook
        </h3>
        <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
          <input
            type="date"
            name="tanggal"
            value={form.tanggal}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
          />
          <input
            type="text"
            name="aktivitas"
            placeholder="Aktivitas"
            value={form.aktivitas}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
          />
          <input
            type="time"
            name="jamMulai"
            value={form.jamMulai}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
          />
          <input
            type="time"
            name="jamSelesai"
            value={form.jamSelesai}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
          />
          <input
            type="text"
            name="kendala"
            placeholder="Kendala (opsional)"
            value={form.kendala}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full text-sm sm:col-span-2 focus:ring-2 focus:ring-blue-900 focus:outline-none"
          />
          <textarea
            name="catatan"
            placeholder="Catatan tambahan..."
            value={form.catatan}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full text-sm sm:col-span-2 focus:ring-2 focus:ring-blue-900 focus:outline-none"
            rows="2"
          />
          <button
            type="submit"
            className="sm:col-span-2 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 text-sm"
          >
            Simpan Logbook
          </button>
        </form>
      </div>

      {/* Daftar Logbook */}
      <div className="bg-white shadow rounded-lg p-6 border">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-lg text-blue-900 flex items-center gap-2">
            <NotebookPen className="w-5 h-5 text-blue-900" /> Rekap Logbook
          </h3>
          {logbook.length > 0 && (
            <button
              disabled
              className="flex items-center gap-2 bg-gray-300 text-white px-3 py-2 rounded text-sm cursor-not-allowed"
              title="Fitur export PDF belum aktif"
            >
              <FileDown className="w-4 h-4" /> Export PDF
            </button>
          )}
        </div>

        {logbook.length === 0 ? (
          <p className="text-gray-500 text-sm">Belum ada logbook dicatat.</p>
        ) : (
          <div className="space-y-3">
            {logbook.map((row, i) => (
              <div
                key={i}
                className="border rounded-lg p-3 shadow-sm bg-gray-50"
              >
                <p className="text-sm">
                  <span className="font-semibold text-blue-900">Tanggal:</span>{" "}
                  {row.tanggal}
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-blue-900">
                    Aktivitas:
                  </span>{" "}
                  {row.aktivitas}
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-blue-900">Jam:</span>{" "}
                  {row.jamMulai} - {row.jamSelesai}
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-blue-900">Status:</span>{" "}
                  {row.statusAbsensi}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserLogbook;
