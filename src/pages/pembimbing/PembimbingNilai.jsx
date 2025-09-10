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

  const [selectedUser, setSelectedUser] = useState(null);

  const [form, setForm] = useState({
    kehadiran: "",
    taatJadwal: "",
    penguasaanMateri: "",
    praktekKerja: "",
    inisiatif: "",
    komunikasi: "",
    laporanKerja: "",
    presentasi: "",
    catatan: "",
  });

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSimpanNilai = () => {
    if (!selectedUser) return;

    const aspek = [
      "kehadiran",
      "taatJadwal",
      "penguasaanMateri",
      "praktekKerja",
      "inisiatif",
      "komunikasi",
      "laporanKerja",
      "presentasi",
    ];

    const total = aspek.reduce((acc, key) => acc + Number(form[key] || 0), 0);
    const rataRata = (total / aspek.length).toFixed(2);

    alert(
      `Nilai berhasil disimpan untuk ${selectedUser.nama}! Nilai rata-rata ${rataRata}.`
    );

    setUsersAktif(usersAktif.filter((u) => u.id !== selectedUser.id));
    setSelectedUser(null);
    setForm({
      kehadiran: "",
      taatJadwal: "",
      penguasaanMateri: "",
      praktekKerja: "",
      inisiatif: "",
      komunikasi: "",
      laporanKerja: "",
      presentasi: "",
      catatan: "",
    });
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
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm hidden md:table">
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

            {/* Mobile card */}
            <div className="space-y-3 md:hidden">
              {usersAktif.map((user) => (
                <div
                  key={user.id}
                  className="border rounded-lg p-3 shadow-sm bg-gray-50"
                >
                  <p className="text-sm font-semibold">{user.nama}</p>
                  <p className="text-sm">Divisi: {user.divisi}</p>
                  <p className="text-sm">Periode: {user.periode}</p>
                  <p className="text-sm">Proyek: {user.proyek}</p>
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="mt-2 w-full px-3 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 text-sm"
                  >
                    Nilai
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Form Penilaian */}
      {selectedUser && (
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-3 text-blue-900">
            Form Penilaian: {selectedUser.nama}
          </h3>

          {/* Kategori 1 */}
          <h4 className="font-medium text-blue-900 mt-2 mb-1">Kedisiplinan</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["kehadiran", "taatJadwal"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type="number"
                  name={field}
                  value={form[field]}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2 text-sm"
                  placeholder="0 - 100"
                />
              </div>
            ))}
          </div>

          {/* Kategori 2 */}
          <h4 className="font-medium text-blue-900 mt-4 mb-1">
            Kegiatan Selama Praktek
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "penguasaanMateri",
              "praktekKerja",
              "inisiatif",
              "komunikasi",
            ].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type="number"
                  name={field}
                  value={form[field]}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2 text-sm"
                  placeholder="0 - 100"
                />
              </div>
            ))}
          </div>

          {/* Kategori 3 */}
          <h4 className="font-medium text-blue-900 mt-4 mb-1">
            Kemampuan Membuat Laporan
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["laporanKerja", "presentasi"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium capitalize">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type="number"
                  name={field}
                  value={form[field]}
                  onChange={handleInputChange}
                  className="w-full border rounded p-2 text-sm"
                  placeholder="0 - 100"
                />
              </div>
            ))}
          </div>

          {/* Catatan */}
          <div className="mt-4">
            <label className="block text-sm font-medium">Catatan</label>
            <textarea
              name="catatan"
              value={form.catatan}
              onChange={handleInputChange}
              className="w-full border rounded p-2 text-sm"
              placeholder="Catatan tambahan..."
            />
          </div>

          {/* Tombol */}
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
    </div>
  );
};

export default PembimbingNilai;
