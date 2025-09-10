import { useState } from "react";
import { UserCircle } from "lucide-react"; // icon admin

export default function AdminKelola() {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      username: "admin1",
      nama: "Budi Santoso",
      role: "Admin",
      status: "Aktif",
      tanggal: "2025-01-10",
    },
    {
      id: 2,
      username: "mentor01",
      nama: "Siti Aminah",
      role: "Pembimbing",
      status: "Aktif",
      tanggal: "2025-02-01",
    },
    {
      id: 3,
      username: "user123",
      nama: "Andi Wijaya",
      role: "User",
      status: "Nonaktif",
      tanggal: "2025-03-05",
    },
  ]);

  const [form, setForm] = useState({
    nama: "",
    email: "",
    username: "",
    password: "",
    role: "User",
    divisi: "",
  });

  const [filterRole, setFilterRole] = useState("Semua");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!form.nama || !form.username) return alert("Lengkapi data dulu!");
    const newAccount = {
      id: accounts.length + 1,
      username: form.username,
      nama: form.nama,
      role: form.role,
      status: "Aktif",
      tanggal: new Date().toISOString().split("T")[0],
    };
    setAccounts([...accounts, newAccount]);
    setForm({
      nama: "",
      email: "",
      username: "",
      password: "",
      role: "User",
      divisi: "",
    });
  };

  // Filter akun berdasarkan role
  const filteredAccounts =
    filterRole === "Semua"
      ? accounts
      : accounts.filter((acc) => acc.role === filterRole);

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-blue-900">
          Kelola Akun
        </h1>
        <div className="flex items-center gap-2 text-blue-900">
          <UserCircle className="w-6 h-6" />
          <span className="hidden sm:inline">Admin</span>
        </div>
      </div>

      {/* Filter Role */}
      <div className="mb-4 flex items-center gap-2">
        <label className="font-medium text-sm">Filter Role:</label>
        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="Semua">Semua</option>
          <option value="Admin">Admin</option>
          <option value="Pembimbing">Pembimbing</option>
          <option value="User">User</option>
        </select>
      </div>

      {/* Daftar Akun */}
      <div className="bg-white shadow rounded-xl p-4 mb-6">
        <h2 className="text-lg font-semibold text-blue-900 mb-4">
          Daftar Akun
        </h2>

        {/* Tabel (Desktop) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg text-sm">
            <thead className="bg-blue-100 text-blue-900">
              <tr>
                <th className="p-2 border">Username</th>
                <th className="p-2 border">Nama</th>
                <th className="p-2 border">Role</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Tanggal Dibuat</th>
                <th className="p-2 border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredAccounts.map((acc) => (
                <tr key={acc.id} className="text-center">
                  <td className="p-2 border">{acc.username}</td>
                  <td className="p-2 border">{acc.nama}</td>
                  <td className="p-2 border">{acc.role}</td>
                  <td className="p-2 border">{acc.status}</td>
                  <td className="p-2 border">{acc.tanggal}</td>
                  <td className="p-2 border space-x-2">
                    <button className="px-2 py-1 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs">
                      Detail
                    </button>
                    <button className="px-2 py-1 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs">
                      Edit
                    </button>
                    <button className="px-2 py-1 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs">
                      Reset Password
                    </button>
                    <button className="px-2 py-1 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs">
                      Nonaktifkan
                    </button>
                    <button className="px-2 py-1 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs">
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredAccounts.length === 0 && (
            <p className="text-center text-gray-500 mt-3 text-sm">
              Tidak ada akun dengan role {filterRole}.
            </p>
          )}
        </div>

        {/* Card List (Mobile) */}
        <div className="grid gap-4 md:hidden">
          {filteredAccounts.map((acc) => (
            <div
              key={acc.id}
              className="bg-white rounded-lg shadow p-4 border text-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-blue-900">{acc.nama}</h2>
                <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-900">
                  {acc.role}
                </span>
              </div>
              <p>
                <b>Username:</b> {acc.username}
              </p>
              <p>
                <b>Status:</b> {acc.status}
              </p>
              <p>
                <b>Tanggal:</b> {acc.tanggal}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <button className="flex-1 px-2 py-1 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs">
                  Detail
                </button>
                <button className="flex-1 px-2 py-1 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs">
                  Edit
                </button>
                <button className="flex-1 px-2 py-1 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs">
                  Reset
                </button>
                <button className="flex-1 px-2 py-1 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs">
                  Nonaktif
                </button>
                <button className="flex-1 px-2 py-1 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs">
                  Hapus
                </button>
              </div>
            </div>
          ))}
          {filteredAccounts.length === 0 && (
            <p className="text-center text-gray-500 mt-3 text-sm">
              Tidak ada akun dengan role {filterRole}.
            </p>
          )}
        </div>
      </div>

      {/* Form Tambah Akun */}
      <div className="bg-white shadow rounded-xl p-4">
        <h2 className="text-lg font-semibold text-blue-900 mb-4">
          Tambah Akun Baru
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="nama"
            placeholder="Nama"
            value={form.nama}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="Admin">Admin</option>
            <option value="Pembimbing">Pembimbing</option>
            <option value="User">User</option>
          </select>
        </div>
        <button
          onClick={handleAdd}
          className="mt-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
        >
          Tambah Akun
        </button>
      </div>
    </div>
  );
}
