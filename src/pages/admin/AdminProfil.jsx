import { useState } from "react";

export default function AdminProfil() {
  const [profile, setProfile] = useState({
    nama: "Admin E-Magang",
    email: "admin@email.com",
  });

  const [password, setPassword] = useState({
    lama: "",
    baru: "",
    konfirmasi: "",
  });

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
    // TODO: arahkan ke halaman login atau hapus session
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Pengaturan Admin</h2>

      {/* Ubah Profil */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-4">Ubah Profil</h3>
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
