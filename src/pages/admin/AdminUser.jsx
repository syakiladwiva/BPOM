// src/pages/AdminUser.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCircle } from "lucide-react";

const dummyUsers = [
  {
    id: 1,
    nama: "Andi Pratama",
    divisi: "IT Support",
    pembimbing: "Budi Santoso",
    status: "Ada Akun",
    detail: {
      nama: "Andi Pratama",
      nik: "1234567890",
      nim: "2022610042",
      noHp: "081234567890",
      universitas: "Universitas Andalas",
      alamatUniv: "Padang, Sumbar",
      jurusan: "Informatika",
      semester: "7",
      divisi: "IT Support",
      pembimbing: "Budi Santoso",
      tanggalMulai: "01 Juli 2025",
      tanggalSelesai: "30 September 2025",
    },
  },
  {
    id: 2,
    nama: "Siti Aisyah",
    divisi: "Finance",
    pembimbing: "Rina Marlina",
    status: "Tidak Ada Akun",
    detail: {
      nama: "Siti Aisyah",
      nik: "9876543210",
      nim: "2022610043",
      noHp: "081298765432",
      universitas: "Politeknik Negeri Padang",
      alamatUniv: "Padang, Sumbar",
      jurusan: "Akuntansi",
      semester: "5",
      divisi: "Finance",
      pembimbing: "Rina Marlina",
      tanggalMulai: "15 Juni 2025",
      tanggalSelesai: "15 September 2025",
    },
  },
];

export default function AdminUser() {
  const [users, setUsers] = useState(dummyUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const navigate = useNavigate();

  const openDetail = (data) => {
    setSelectedUser(data);
    setIsDetailOpen(true);
  };

  const openEdit = (data) => {
    setSelectedUser(data);
    setIsEditOpen(true);
  };

  const saveEdit = () => {
    setUsers((prev) =>
      prev.map((u) => (u.id === selectedUser.id ? selectedUser : u))
    );
    setIsEditOpen(false);
  };

  const nonaktifkanUser = (id) => {
    console.log(`User dengan ID ${id} dinonaktifkan`);
  };

  const buatAkun = (id) => {
    console.log(`Buat akun untuk user dengan ID ${id}`);
    navigate("/AdminKelola");
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-blue-900">
          Daftar User Aktif
        </h1>
        <div className="flex items-center gap-2 text-blue-900">
          <UserCircle className="w-6 h-6" />
          <span className="hidden sm:inline">Admin</span>
        </div>
      </div>

      {/* Table (Desktop) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Nama</th>
              <th className="p-2 border">Divisi</th>
              <th className="p-2 border">Pembimbing</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="text-center">
                <td className="p-2 border">{u.nama}</td>
                <td className="p-2 border">{u.divisi}</td>
                <td className="p-2 border">{u.pembimbing}</td>
                <td className="p-2 border">{u.status}</td>
                <td className="p-2 border space-x-2">
                  <button
                    onClick={() => openDetail(u)}
                    className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
                  >
                    Detail
                  </button>
                  <button
                    onClick={() => openEdit(u)}
                    className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
                  >
                    Edit
                  </button>
                  {u.status === "Ada Akun" ? (
                    <button
                      onClick={() => nonaktifkanUser(u.id)}
                      className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
                    >
                      Nonaktifkan
                    </button>
                  ) : (
                    <button
                      onClick={() => buatAkun(u.id)}
                      className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
                    >
                      Buat Akun
                    </button>
                  )}
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
              <span className="text-xs px-2 py-1 rounded bg-gray-200">
                {u.status}
              </span>
            </div>
            <p>
              <b>Divisi:</b> {u.divisi}
            </p>
            <p>
              <b>Pembimbing:</b> {u.pembimbing}
            </p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => openDetail(u)}
                className="flex-1 px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
              >
                Detail
              </button>
              <button
                onClick={() => openEdit(u)}
                className="flex-1 px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
              >
                Edit
              </button>
              {u.status === "Ada Akun" ? (
                <button
                  onClick={() => nonaktifkanUser(u.id)}
                  className="flex-1 px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
                >
                  Nonaktifkan
                </button>
              ) : (
                <button
                  onClick={() => buatAkun(u.id)}
                  className="flex-1 px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
                >
                  Buat Akun
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail */}
      {isDetailOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg mx-2 sm:mx-0 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">
              Detail User
            </h2>
            <div className="space-y-2 text-sm">
              {Object.entries(selectedUser.detail).map(([key, value]) => {
                // Sembunyikan kontak dan progres
                if (key === "kontak" || key === "progres") return null;
                return (
                  <p key={key}>
                    <b>{key.charAt(0).toUpperCase() + key.slice(1)}:</b> {value}
                  </p>
                );
              })}
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

      {/* Modal Edit */}
      {isEditOpen && selectedUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm mx-2 sm:mx-0">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">
              Edit User
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <label className="block font-medium">Divisi</label>
                <input
                  type="text"
                  value={selectedUser.divisi}
                  onChange={(e) =>
                    setSelectedUser({ ...selectedUser, divisi: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block font-medium">Pembimbing</label>
                <input
                  type="text"
                  value={selectedUser.pembimbing}
                  onChange={(e) =>
                    setSelectedUser({
                      ...selectedUser,
                      pembimbing: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded"
                />
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
    </div>
  );
}
