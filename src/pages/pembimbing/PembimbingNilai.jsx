// src/pages/pembimbing/PembimbingNilai.jsx
import { useState } from "react";
import { UserCircle } from "lucide-react";

const PembimbingNilai = () => {
  const [usersAktif, setUsersAktif] = useState([
    {
      id: 1,
      nama: "Andi Saputra",
      divisi: "IT",
      periode: "10 Sep 2025 - 10 Des 2025",
      proyek: "Sistem Inventaris",
    },
    {
      id: 2,
      nama: "Budi Santoso",
      divisi: "Keuangan",
      periode: "15 Sep 2025 - 15 Des 2025",
      proyek: "Aplikasi Laporan Keuangan",
    },
  ]);

  const [riwayat, setRiwayat] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [form, setForm] = useState({
    pengetahuan: "",
    keterampilan: "",
    sikap: "",
    disiplin: "",
    catatan: "",
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSimpanNilai = () => {
    if (!selectedUser) return;

    const aspek = ["pengetahuan", "keterampilan", "sikap", "disiplin"];
    const total = aspek.reduce((acc, key) => acc + Number(form[key] || 0), 0);
    const nilaiAkhir = (total / aspek.length).toFixed(2);

    const newRiwayat = {
      ...selectedUser,
      nilai: { ...form, nilaiAkhir },
    };

    setRiwayat([...riwayat, newRiwayat]);
    setUsersAktif(usersAktif.filter((u) => u.id !== selectedUser.id));
    setSelectedUser(null);
    setForm({
      pengetahuan: "",
      keterampilan: "",
      sikap: "",
      disiplin: "",
      catatan: "",
    });
    alert(
      `Nilai berhasil disimpan! Nilai akhir ${nilaiAkhir}. User dipindahkan ke Riwayat Bimbingan.`
    );
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-blue-900">
          Penilaian User
        </h1>
        <div className="flex items-center gap-2 text-gray-700">
          <UserCircle className="w-6 h-6 text-blue-900" />
          <span className="hidden sm:inline">Pembimbing</span>
        </div>
      </div>

      {/* Tabel User Aktif */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h3 className="font-semibold mb-3 text-blue-900">
          User Aktif yang Akan Selesai
        </h3>
        {usersAktif.length === 0 ? (
          <p className="text-gray-500 text-sm">Tidak ada user untuk dinilai.</p>
        ) : (
          <>
            {/* Tabel untuk desktop */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100 text-blue-900">
                  <tr>
                    <th className="border px-2 py-1">Nama</th>
                    <th className="border px-2 py-1">Divisi</th>
                    <th className="border px-2 py-1">Periode</th>
                    <th className="border px-2 py-1">Proyek</th>
                    <th className="border px-2 py-1">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {usersAktif.map((user) => (
                    <tr key={user.id} className="text-center">
                      <td className="border px-2 py-1">{user.nama}</td>
                      <td className="border px-2 py-1">{user.divisi}</td>
                      <td className="border px-2 py-1">{user.periode}</td>
                      <td className="border px-2 py-1">{user.proyek}</td>
                      <td className="border px-2 py-1">
                        <button
                          onClick={() => setSelectedUser(user)}
                          className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800 text-xs"
                        >
                          Nilai
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Card untuk mobile */}
            <div className="space-y-3 md:hidden">
              {usersAktif.map((user) => (
                <div
                  key={user.id}
                  className="border rounded-lg p-3 shadow-sm bg-gray-50"
                >
                  <p className="text-sm">
                    <span className="font-semibold">Nama:</span> {user.nama}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Divisi:</span> {user.divisi}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Periode:</span>{" "}
                    {user.periode}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Proyek:</span> {user.proyek}
                  </p>
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="mt-2 w-full px-3 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 text-sm"
                  >
                    Nilai
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Form Penilaian */}
      {selectedUser && (
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-3 text-blue-900">
            Form Penilaian: {selectedUser.nama}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["pengetahuan", "keterampilan", "sikap", "disiplin"].map(
              (field) => (
                <div key={field}>
                  <label className="block text-sm font-medium capitalize">
                    {field}
                  </label>
                  <input
                    type="number"
                    name={field}
                    value={form[field]}
                    onChange={handleInputChange}
                    className="w-full border rounded p-2 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                    placeholder="0 - 100"
                  />
                </div>
              )
            )}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium">Catatan</label>
            <textarea
              name="catatan"
              value={form.catatan}
              onChange={handleInputChange}
              className="w-full border rounded p-2 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
              placeholder="Catatan tambahan..."
            />
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleSimpanNilai}
              className="flex-1 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
            >
              Simpan Nilai
            </button>
            <button
              onClick={() => setSelectedUser(null)}
              className="flex-1 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Batal
            </button>
          </div>
        </div>
      )}

      {/* Riwayat Bimbingan */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="font-semibold mb-3 text-blue-900">
          Riwayat User Bimbingan
        </h3>
        {riwayat.length === 0 ? (
          <p className="text-gray-500 text-sm">Belum ada user yang dinilai.</p>
        ) : (
          <>
            {/* Tabel untuk desktop */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100 text-blue-900">
                  <tr>
                    <th className="border px-2 py-1">Nama</th>
                    <th className="border px-2 py-1">Divisi</th>
                    <th className="border px-2 py-1">Proyek</th>
                    <th className="border px-2 py-1">Nilai Akhir</th>
                    <th className="border px-2 py-1">Catatan</th>
                  </tr>
                </thead>
                <tbody>
                  {riwayat.map((user, index) => (
                    <tr key={index} className="text-center">
                      <td className="border px-2 py-1">{user.nama}</td>
                      <td className="border px-2 py-1">{user.divisi}</td>
                      <td className="border px-2 py-1">{user.proyek}</td>
                      <td className="border px-2 py-1 font-semibold text-blue-900">
                        {user.nilai.nilaiAkhir}
                      </td>
                      <td className="border px-2 py-1">{user.nilai.catatan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Card untuk mobile */}
            <div className="space-y-3 md:hidden">
              {riwayat.map((user, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-3 shadow-sm bg-gray-50"
                >
                  <p className="text-sm">
                    <span className="font-semibold">Nama:</span> {user.nama}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Divisi:</span> {user.divisi}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Proyek:</span> {user.proyek}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Nilai Akhir:</span>{" "}
                    <span className="text-blue-900 font-semibold">
                      {user.nilai.nilaiAkhir}
                    </span>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Catatan:</span>{" "}
                    {user.nilai.catatan}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PembimbingNilai;
