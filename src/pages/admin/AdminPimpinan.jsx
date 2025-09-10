// src/pages/AdminPimpinan.jsx
import { useState } from "react";
import { UserCircle, PlusCircle } from "lucide-react";

const AdminPimpinan = () => {
  const [pimpinan, setPimpinan] = useState([
    {
      id: 1,
      nama: "Dr. Budi Santoso",
      jabatan: "Kepala BPOM",
      kantor: "BPOM Pusat",
      tandaTangan: "tanda_budi.png",
      status: "Aktif",
    },
    {
      id: 2,
      nama: "Dewi Kurnia, M.Si",
      jabatan: "Sekretaris",
      kantor: "BPOM Padang",
      tandaTangan: "tanda_dewi.png",
      status: "Nonaktif",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newData, setNewData] = useState({
    nama: "",
    jabatan: "",
    kantor: "",
    tandaTangan: null,
    status: "Aktif",
  });

  // Tambah pimpinan baru
  const handleTambah = () => {
    if (!newData.nama || !newData.jabatan || !newData.kantor) {
      alert("Lengkapi semua data dulu!");
      return;
    }
    const idBaru = pimpinan.length + 1;
    setPimpinan([
      ...pimpinan,
      { ...newData, id: idBaru, tandaTangan: newData.tandaTangan?.name || "" },
    ]);
    setNewData({
      nama: "",
      jabatan: "",
      kantor: "",
      tandaTangan: null,
      status: "Aktif",
    });
    setIsModalOpen(false);
  };

  // Ubah status aktif/nonaktif
  const toggleStatus = (id) => {
    setPimpinan(
      pimpinan.map((p) =>
        p.id === id
          ? { ...p, status: p.status === "Aktif" ? "Nonaktif" : "Aktif" }
          : p
      )
    );
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-blue-900">
          Manajemen Pimpinan
        </h1>
        <div className="flex items-center gap-2 text-blue-900">
          <UserCircle className="w-6 h-6" />
          <span className="hidden sm:inline">Admin</span>
        </div>
      </div>

      {/* Tombol Tambah */}
      <div className="mb-4 text-right">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 text-sm"
        >
          <PlusCircle className="w-5 h-5" /> Tambah Pimpinan
        </button>
      </div>

      {/* Tabel (Desktop) */}
      <div className="hidden md:block overflow-x-auto rounded-lg shadow">
        <table className="w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100 text-blue-900">
            <tr>
              <th className="p-2 border">Nama Pimpinan</th>
              <th className="p-2 border">Jabatan</th>
              <th className="p-2 border">Kantor</th>
              <th className="p-2 border">Tanda Tangan</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {pimpinan.map((p) => (
              <tr key={p.id} className="text-center hover:bg-blue-50">
                <td className="p-2 border">{p.nama}</td>
                <td className="p-2 border">{p.jabatan}</td>
                <td className="p-2 border">{p.kantor}</td>
                <td className="p-2 border">
                  {p.tandaTangan ? (
                    <span className="text-blue-900">{p.tandaTangan}</span>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="p-2 border">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      p.status === "Aktif"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="p-2 border">
                  <button
                    onClick={() => toggleStatus(p.id)}
                    className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs"
                  >
                    {p.status === "Aktif" ? "Nonaktifkan" : "Aktifkan"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card List (Mobile) */}
      <div className="grid gap-4 md:hidden">
        {pimpinan.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-lg shadow p-4 border text-sm"
          >
            <p className="font-semibold text-blue-900">{p.nama}</p>
            <p>Jabatan: {p.jabatan}</p>
            <p>Kantor: {p.kantor}</p>
            <p>
              Status:{" "}
              <span
                className={`px-2 py-1 rounded text-xs ${
                  p.status === "Aktif"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {p.status}
              </span>
            </p>
            <div className="mt-2">
              <button
                onClick={() => toggleStatus(p.id)}
                className="w-full px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs"
              >
                {p.status === "Aktif" ? "Nonaktifkan" : "Aktifkan"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Tambah Pimpinan */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md mx-2 sm:mx-0">
            <h2 className="text-lg font-semibold mb-4 text-blue-900">
              Tambah Data Pimpinan
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <label className="block font-medium">Nama Pimpinan</label>
                <input
                  type="text"
                  value={newData.nama}
                  onChange={(e) =>
                    setNewData({ ...newData, nama: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <label className="block font-medium">Jabatan</label>
                <input
                  type="text"
                  value={newData.jabatan}
                  onChange={(e) =>
                    setNewData({ ...newData, jabatan: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  placeholder="Contoh: Kepala BPOM"
                />
              </div>
              <div>
                <label className="block font-medium">Kantor</label>
                <input
                  type="text"
                  value={newData.kantor}
                  onChange={(e) =>
                    setNewData({ ...newData, kantor: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                  placeholder="Contoh: BPOM Padang"
                />
              </div>
              <div>
                <label className="block font-medium">
                  Tanda Tangan (Latar Transparan, PNG 300x300)
                </label>
                <input
                  type="file"
                  accept="image/png"
                  onChange={(e) =>
                    setNewData({ ...newData, tandaTangan: e.target.files[0] })
                  }
                  className="w-full text-sm"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Batal
              </button>
              <button
                onClick={handleTambah}
                className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPimpinan;
