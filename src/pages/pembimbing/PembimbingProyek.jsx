// src/pages/PembimbingProyek.jsx
import { useState } from "react";
import { UserCircle } from "lucide-react";

const dummyUsers = [
  {
    id: 1,
    nama: "Syakila Dwiva",
    divisi: "IT",
    proyek: "Sistem Absensi",
    deskripsi: "Membuat sistem absensi dengan integrasi QR Code.",
    deadline: "2025-09-30",
    status: "Berjalan",
    progres: [
      { tanggal: "01-08-2025", deskripsi: "Setup awal database" },
      { tanggal: "05-08-2025", deskripsi: "Integrasi login user" },
    ],
  },
  {
    id: 2,
    nama: "Rizky Ananda",
    divisi: "Keuangan",
    proyek: "",
    deskripsi: "",
    deadline: "",
    status: "Belum mulai",
    progres: [],
  },
];

// fungsi style status badge
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

export default function PembimbingProyek() {
  const [users, setUsers] = useState(dummyUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isProgresOpen, setIsProgresOpen] = useState(false);
  const [isAssignOpen, setIsAssignOpen] = useState(false);

  // state form assign
  const [formProyek, setFormProyek] = useState({
    nama: "",
    deskripsi: "",
    deadline: "",
  });

  // Buka modal progres
  const openProgres = (user) => {
    setSelectedUser(user);
    setIsProgresOpen(true);
  };

  // Buka modal assign proyek
  const openAssign = (user) => {
    setSelectedUser(user);
    setFormProyek({
      nama: user.proyek || "",
      deskripsi: user.deskripsi || "",
      deadline: user.deadline || "",
    });
    setIsAssignOpen(true);
  };

  // Assign proyek baru
  const assignProyek = () => {
    if (!formProyek.nama.trim()) return;
    setUsers(
      users.map((u) =>
        u.id === selectedUser.id
          ? {
              ...u,
              proyek: formProyek.nama,
              deskripsi: formProyek.deskripsi,
              deadline: formProyek.deadline,
              // status default ketika assign
              status: "Belum mulai",
            }
          : u
      )
    );
    setFormProyek({ nama: "", deskripsi: "", deadline: "" });
    setIsAssignOpen(false);
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-blue-900">
          Manajemen Proyek User
        </h1>
        <div className="flex items-center gap-2 text-gray-700">
          <UserCircle className="w-6 h-6 text-blue-900" />
          <span className="hidden sm:inline">Pembimbing</span>
        </div>
      </div>

      {/* Table Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Nama</th>
              <th className="p-2 border">Divisi</th>
              <th className="p-2 border">Proyek</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="text-center">
                <td className="p-2 border">{u.nama}</td>
                <td className="p-2 border">{u.divisi}</td>
                <td className="p-2 border">{u.proyek || "-"}</td>
                <td className="p-2 border">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      u.status === "Berjalan"
                        ? "bg-green-500"
                        : u.status === "Selesai"
                        ? "bg-blue-500"
                        : "bg-gray-400"
                    }`}
                  >
                    {u.status}
                  </span>
                </td>
                <td className="p-2 border space-x-2">
                  <button
                    onClick={() => openAssign(u)}
                    className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
                  >
                    Assign
                  </button>
                  <button
                    onClick={() => openProgres(u)}
                    className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
                  >
                    Progres
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card List Mobile */}
      <div className="grid gap-4 md:hidden">
        {users.map((u) => (
          <div
            key={u.id}
            className="bg-white rounded-lg shadow p-4 border text-sm"
          >
            <h2 className="font-semibold text-blue-900 mb-1">{u.nama}</h2>
            <p>
              <b>Divisi:</b> {u.divisi}
            </p>
            <p>
              <b>Proyek:</b> {u.proyek || "-"}
            </p>
            <p>
              <b>Status:</b>{" "}
              <span
                className={`px-2 py-1 rounded text-white ${
                  u.status === "Berjalan"
                    ? "bg-green-500"
                    : u.status === "Selesai"
                    ? "bg-blue-500"
                    : "bg-gray-400"
                }`}
              >
                {u.status}
              </span>
            </p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => openAssign(u)}
                className="flex-1 px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
              >
                Assign
              </button>
              <button
                onClick={() => openProgres(u)}
                className="flex-1 px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
              >
                Progres
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Progres */}
      {isProgresOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg mx-2 sm:mx-0 max-h-[90vh] overflow-y-auto relative">
            {/* Status badge pojok kanan atas */}
            <span
              className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs sm:text-sm ${getStatusStyle(
                selectedUser.status
              )}`}
            >
              {selectedUser.status}
            </span>

            <h2 className="text-xl font-semibold mb-4 text-blue-900">
              Progres Proyek – {selectedUser.nama}
            </h2>
            {selectedUser.progres.length > 0 ? (
              <ul className="list-disc ml-5 space-y-1 text-sm">
                {selectedUser.progres.map((p, idx) => (
                  <li key={idx}>
                    <b>{p.tanggal}:</b> {p.deskripsi}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Belum ada progres dicatat.</p>
            )}
            <div className="mt-4 text-right">
              <button
                onClick={() => setIsProgresOpen(false)}
                className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Assign */}
      {isAssignOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md mx-2 sm:mx-0">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">
              Assign Proyek – {selectedUser.nama}
            </h2>

            {/* Form Assign tanpa status */}
            <div className="space-y-3 text-sm">
              <div>
                <label className="block font-medium mb-1">Nama Proyek</label>
                <input
                  type="text"
                  value={formProyek.nama}
                  onChange={(e) =>
                    setFormProyek({ ...formProyek, nama: e.target.value })
                  }
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Deskripsi</label>
                <textarea
                  value={formProyek.deskripsi}
                  onChange={(e) =>
                    setFormProyek({ ...formProyek, deskripsi: e.target.value })
                  }
                  className="w-full border px-3 py-2 rounded"
                  rows="3"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Deadline</label>
                <input
                  type="date"
                  value={formProyek.deadline}
                  onChange={(e) =>
                    setFormProyek({ ...formProyek, deadline: e.target.value })
                  }
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
            </div>

            {/* Tombol */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setIsAssignOpen(false)}
                className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
              >
                Batal
              </button>
              <button
                onClick={assignProyek}
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
}
