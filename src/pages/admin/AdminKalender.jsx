// src/pages/AdminKalender.jsx
import React, { useState } from "react";
import {
  CalendarDays,
  UserCircle,
  PlusCircle,
  PencilLine,
  Trash2,
  ListOrdered,
} from "lucide-react";

const AdminKalender = () => {
  const [agenda, setAgenda] = useState([]);
  const [newAgenda, setNewAgenda] = useState({
    tanggal: "",
    kegiatan: "",
    jenis: "Orientasi",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const jenisOptions = ["Orientasi", "Workshop", "Presentasi", "Deadline"];

  const handleChange = (e) => {
    setNewAgenda({ ...newAgenda, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!newAgenda.tanggal || !newAgenda.kegiatan) return;

    if (editingIndex !== null) {
      const updated = [...agenda];
      updated[editingIndex] = newAgenda;
      setAgenda(updated);
      setEditingIndex(null);
    } else {
      setAgenda([...agenda, newAgenda]);
    }

    setNewAgenda({ tanggal: "", kegiatan: "", jenis: "Orientasi" });
  };

  const handleEdit = (index) => {
    setNewAgenda(agenda[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setAgenda(agenda.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-2xl font-semibold text-blue-900 flex items-center gap-2">
          <CalendarDays className="w-6 h-6 text-blue-900" />
          Kalender Kegiatan
        </h1>
        <div className="flex items-center gap-2 text-gray-700">
          <UserCircle className="w-6 h-6 text-blue-900" />
          <span className="hidden sm:inline">Admin</span>
        </div>
      </div>

      {/* Form Input */}
      <div className="bg-white shadow rounded-lg p-6 mb-6 border">
        <h3 className="font-semibold mb-3 text-blue-900 flex items-center gap-2">
          {editingIndex !== null ? (
            <>
              <PencilLine className="w-5 h-5 text-blue-900" /> Edit Agenda
            </>
          ) : (
            <>
              <PlusCircle className="w-5 h-5 text-blue-900" /> Tambah Agenda
            </>
          )}
        </h3>
        <div className="grid gap-3 md:grid-cols-3">
          <input
            type="date"
            name="tanggal"
            value={newAgenda.tanggal}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
          />
          <input
            type="text"
            name="kegiatan"
            placeholder="Nama kegiatan"
            value={newAgenda.kegiatan}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
          />
          <select
            name="jenis"
            value={newAgenda.jenis}
            onChange={handleChange}
            className="border rounded px-3 py-2 w-full text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
          >
            {jenisOptions.map((j, i) => (
              <option key={i} value={j}>
                {j}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleSave}
          className="mt-4 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 w-full md:w-auto text-sm"
        >
          {editingIndex !== null ? "Simpan Perubahan" : "Tambah Agenda"}
        </button>
      </div>

      {/* Daftar Agenda */}
      <div className="bg-white shadow rounded-lg p-6 border">
        <h3 className="text-lg font-semibold mb-3 text-blue-900 flex items-center gap-2">
          <ListOrdered className="w-5 h-5 text-blue-900" /> Daftar Agenda
        </h3>
        {agenda.length === 0 ? (
          <p className="text-gray-500 text-sm">Belum ada agenda kegiatan.</p>
        ) : (
          <>
            {/* Tabel untuk desktop */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100 text-blue-900">
                  <tr>
                    <th className="border px-2 py-2">Tanggal</th>
                    <th className="border px-2 py-2">Kegiatan</th>
                    <th className="border px-2 py-2">Jenis</th>
                    <th className="border px-2 py-2">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {agenda.map((a, i) => (
                    <tr key={i} className="text-center">
                      <td className="border px-2 py-2">{a.tanggal}</td>
                      <td className="border px-2 py-2">{a.kegiatan}</td>
                      <td className="border px-2 py-2">{a.jenis}</td>
                      <td className="border px-2 py-2 space-x-2">
                        <button
                          onClick={() => handleEdit(i)}
                          className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-xs"
                        >
                          <PencilLine className="w-4 h-4" /> Edit
                        </button>
                        <button
                          onClick={() => handleDelete(i)}
                          className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs"
                        >
                          <Trash2 className="w-4 h-4" /> Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Card untuk mobile */}
            <div className="space-y-3 md:hidden">
              {agenda.map((a, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-3 shadow-sm bg-gray-50"
                >
                  <p className="text-sm">
                    <span className="font-semibold text-blue-900">
                      Tanggal:
                    </span>{" "}
                    {a.tanggal}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-blue-900">
                      Kegiatan:
                    </span>{" "}
                    {a.kegiatan}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold text-blue-900">Jenis:</span>{" "}
                    {a.jenis}
                  </p>
                  <div className="mt-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(i)}
                      className="flex-1 flex items-center justify-center gap-1 bg-yellow-500 text-white px-3 py-2 rounded hover:bg-yellow-600 text-sm"
                    >
                      <PencilLine className="w-4 h-4" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(i)}
                      className="flex-1 flex items-center justify-center gap-1 bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 text-sm"
                    >
                      <Trash2 className="w-4 h-4" /> Hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminKalender;
