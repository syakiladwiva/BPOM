// src/pages/AdminPembimbing.jsx
import { useState } from "react";
import { UserCircle } from "lucide-react";

const dummyPembimbing = [
  {
    id: 1,
    nama: "Budi Santoso",
    divisi: "IT Support",
    nohp: "08123456789",
    email: "budi@email.com",
    users: ["Andi Pratama", "Siti Aisyah"],
  },
  {
    id: 2,
    nama: "Rina Marlina",
    divisi: "Finance",
    nohp: "08987654321",
    email: "rina@email.com",
    users: ["Siti Aisyah"],
  },
];

const dummyUsers = [
  "Andi Pratama",
  "Siti Aisyah",
  "Dewi Lestari",
  "Rudi Hartono",
];

export default function AdminPembimbing() {
  const [pembimbing, setPembimbing] = useState(dummyPembimbing);
  const [selectedPembimbing, setSelectedPembimbing] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const openDetail = (data) => {
    setSelectedPembimbing(data);
    setIsDetailOpen(true);
  };

  const openEdit = (data) => {
    setSelectedPembimbing(data);
    setIsEditOpen(true);
  };

  const saveEdit = () => {
    setPembimbing((prev) =>
      prev.map((p) => (p.id === selectedPembimbing.id ? selectedPembimbing : p))
    );
    setIsEditOpen(false);
  };

  const addPembimbing = (newPembimbing) => {
    setPembimbing((prev) => [
      ...prev,
      { ...newPembimbing, id: prev.length + 1, users: [] },
    ]);
  };

  const removeUser = (user) => {
    setSelectedPembimbing((prev) => ({
      ...prev,
      users: prev.users.filter((u) => u !== user),
    }));
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-blue-900">
          Daftar Pembimbing
        </h1>
        <div className="flex items-center gap-2 text-blue-900">
          <UserCircle className="w-6 h-6" />
          <span className="hidden sm:inline">Admin</span>
        </div>
      </div>

      <div className="mb-4">
        <button
          onClick={() => setIsAddOpen(true)}
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
        >
          + Tambah Pembimbing
        </button>
      </div>

      {/* Table (Desktop) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Nama</th>
              <th className="p-2 border">Divisi</th>
              <th className="p-2 border">Jumlah User</th>
              <th className="p-2 border">No HP</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {pembimbing.map((p) => (
              <tr key={p.id} className="text-center">
                <td className="p-2 border">{p.nama}</td>
                <td className="p-2 border">{p.divisi}</td>
                <td className="p-2 border">{p.users.length}</td>
                <td className="p-2 border">{p.nohp}</td>
                <td className="p-2 border">{p.email}</td>
                <td className="p-2 border space-x-2">
                  <button
                    onClick={() => openDetail(p)}
                    className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
                  >
                    Detail
                  </button>
                  <button
                    onClick={() => openEdit(p)}
                    className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
                  >
                    Edit / Assign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card List (Mobile) */}
      <div className="grid gap-4 md:hidden">
        {pembimbing.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-lg shadow p-4 border text-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-blue-900">{p.nama}</h2>
              <span className="text-xs px-2 py-1 rounded bg-gray-200">
                {p.divisi}
              </span>
            </div>
            <p>
              <b>No HP:</b> {p.nohp}
            </p>
            <p>
              <b>Email:</b> {p.email}
            </p>
            <p>
              <b>User Dibimbing:</b> {p.users.length}
            </p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => openDetail(p)}
                className="flex-1 px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
              >
                Detail
              </button>
              <button
                onClick={() => openEdit(p)}
                className="flex-1 px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail */}
      {isDetailOpen && selectedPembimbing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg mx-2 sm:mx-0 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">
              Detail Pembimbing
            </h2>
            <p>
              <b>Nama:</b> {selectedPembimbing.nama}
            </p>
            <p>
              <b>Divisi:</b> {selectedPembimbing.divisi}
            </p>
            <p>
              <b>No HP:</b> {selectedPembimbing.nohp}
            </p>
            <p>
              <b>Email:</b> {selectedPembimbing.email}
            </p>
            <p className="mt-3 font-semibold">User yang dibimbing:</p>
            <ul className="list-disc list-inside text-sm">
              {selectedPembimbing.users.length > 0 ? (
                selectedPembimbing.users.map((u, i) => <li key={i}>{u}</li>)
              ) : (
                <li className="text-gray-500">Belum ada user</li>
              )}
            </ul>
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

      {/* Modal Edit */}
      {isEditOpen && selectedPembimbing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm mx-2 sm:mx-0">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">
              Edit Pembimbing
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block font-medium">Nama</label>
                <input
                  type="text"
                  value={selectedPembimbing.nama}
                  onChange={(e) =>
                    setSelectedPembimbing({
                      ...selectedPembimbing,
                      nama: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block font-medium">Divisi</label>
                <input
                  type="text"
                  value={selectedPembimbing.divisi}
                  onChange={(e) =>
                    setSelectedPembimbing({
                      ...selectedPembimbing,
                      divisi: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block font-medium">No HP</label>
                <input
                  type="text"
                  value={selectedPembimbing.nohp}
                  onChange={(e) =>
                    setSelectedPembimbing({
                      ...selectedPembimbing,
                      nohp: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block font-medium">Email</label>
                <input
                  type="text"
                  value={selectedPembimbing.email}
                  onChange={(e) =>
                    setSelectedPembimbing({
                      ...selectedPembimbing,
                      email: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block font-medium">Assign User</label>
                <select
                  onChange={(e) => {
                    const user = e.target.value;
                    if (user && !selectedPembimbing.users.includes(user)) {
                      setSelectedPembimbing({
                        ...selectedPembimbing,
                        users: [...selectedPembimbing.users, user],
                      });
                    }
                  }}
                  className="w-full p-2 border rounded"
                >
                  <option value="">-- Pilih User --</option>
                  {dummyUsers.map((u, i) => (
                    <option key={i} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <p className="font-medium">User dibimbing:</p>
                <ul className="space-y-1">
                  {selectedPembimbing.users.map((u, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center border px-2 py-1 rounded"
                    >
                      <span>{u}</span>
                      <button
                        onClick={() => removeUser(u)}
                        className="px-2 py-1 bg-blue-900 text-white text-xs rounded hover:bg-blue-800"
                      >
                        Hapus
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 text-right space-x-2">
              <button
                onClick={() => setIsEditOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Batal
              </button>
              <button
                onClick={saveEdit}
                className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Tambah */}
      {isAddOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm mx-2 sm:mx-0">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">
              Tambah Pembimbing
            </h2>
            <TambahPembimbingForm
              onSave={(data) => {
                addPembimbing(data);
                setIsAddOpen(false);
              }}
              onCancel={() => setIsAddOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

// Form Tambah Pembimbing
function TambahPembimbingForm({ onSave, onCancel }) {
  const [form, setForm] = useState({
    nama: "",
    divisi: "",
    nohp: "",
    email: "",
  });

  return (
    <div className="space-y-3">
      <div>
        <label className="block font-medium">Nama</label>
        <input
          type="text"
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Divisi</label>
        <input
          type="text"
          value={form.divisi}
          onChange={(e) => setForm({ ...form, divisi: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-medium">No HP</label>
        <input
          type="text"
          value={form.nohp}
          onChange={(e) => setForm({ ...form, nohp: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Email</label>
        <input
          type="text"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mt-4 text-right space-x-2">
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Batal
        </button>
        <button
          onClick={() => onSave(form)}
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
        >
          Simpan
        </button>
      </div>
    </div>
  );
}
