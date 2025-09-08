// src/pages/UserProfil.jsx
import { useState } from "react";

export default function UserProfil() {
  const [profile, setProfile] = useState({
    nama: "User Magang",
    email: "user@email.com",
    nim: "123456789",
    jurusan: "Teknik Informatika",
  });

  const [password, setPassword] = useState({
    lama: "",
    baru: "",
    konfirmasi: "",
  });

  // Data dummy pembimbing (nanti bisa dari backend)
  const pembimbing = {
    nama: "Budi Santoso",
    divisi: "IT",
    email: "budi.santoso@perusahaan.com",
    kontak: "021-1234567",
    jumlahUser: 5,
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    alert("Profil berhasil diperbarui ✅");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password.baru !== password.konfirmasi) {
      alert("Password baru dan konfirmasi tidak sama ❌");
      return;
    }
    alert("Password berhasil diganti ✅");
  };

  const handleLogout = () => {
    alert("Anda telah logout 🚪");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <h2 className="text-xl font-bold mb-4">Pengaturan User</h2>

      {/* Info Pembimbing */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Informasi Pembimbing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium">Nama</p>
            <p className="text-gray-700">{pembimbing.nama}</p>
          </div>
          <div>
            <p className="font-medium">Divisi</p>
            <p className="text-gray-700">{pembimbing.divisi}</p>
          </div>
          <div>
            <p className="font-medium">Email</p>
            <p className="text-gray-700">{pembimbing.email}</p>
          </div>
          <div>
            <p className="font-medium">Kontak</p>
            <p className="text-gray-700">{pembimbing.kontak}</p>
          </div>
          <div>
            <p className="font-medium">Jumlah User Dibimbing</p>
            <p className="text-gray-700">{pembimbing.jumlahUser} orang</p>
          </div>
        </div>
      </div>

      {/* Profil User */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Profil User</h3>
        <form onSubmit={handleProfileSubmit} className="space-y-4">
          {/* Nama */}
          <div>
            <label className="block text-sm font-medium mb-1">Nama</label>
            <input
              type="text"
              name="nama"
              value={profile.nama}
              onChange={handleProfileChange}
              className="w-full border rounded p-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="w-full border rounded p-2"
            />
          </div>

          {/* NIM */}
          <div>
            <label className="block text-sm font-medium mb-1">NIM</label>
            <input
              type="text"
              name="nim"
              value={profile.nim}
              onChange={handleProfileChange}
              className="w-full border rounded p-2"
            />
          </div>

          {/* Jurusan */}
          <div>
            <label className="block text-sm font-medium mb-1">Jurusan</label>
            <input
              type="text"
              name="jurusan"
              value={profile.jurusan}
              onChange={handleProfileChange}
              className="w-full border rounded p-2"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Simpan Perubahan
          </button>
        </form>
      </div>

      {/* Ganti Password */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Ganti Password</h3>
        <form onSubmit={handlePasswordSubmit} className="space-y-4">
          {/* Password Lama */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password Lama
            </label>
            <input
              type="password"
              name="lama"
              value={password.lama}
              onChange={handlePasswordChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Password Baru */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password Baru
            </label>
            <input
              type="password"
              name="baru"
              value={password.baru}
              onChange={handlePasswordChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          {/* Konfirmasi Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Konfirmasi Password Baru
            </label>
            <input
              type="password"
              name="konfirmasi"
              value={password.konfirmasi}
              onChange={handlePasswordChange}
              className="w-full border rounded p-2"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Ganti Password
          </button>
        </form>
      </div>

      {/* Logout */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Akun</h3>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
