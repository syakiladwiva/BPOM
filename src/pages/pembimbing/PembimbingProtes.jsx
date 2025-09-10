// src/pages/pembimbing/PembimbingProtes.jsx
import { useState } from "react";
import { UserCircle } from "lucide-react";

const PembimbingProtes = () => {
  const [protesList, setProtesList] = useState([
    {
      id: 1,
      nama: "Andi Saputra",
      divisi: "IT",
      proyek: "Sistem Inventaris",
      nilai: {
        kehadiran: 90,
        taatJadwal: 85,
        penguasaanMateri: 88,
        praktekKerja: 92,
        inisiatif: 87,
        komunikasi: 89,
        laporanKerja: 91,
        presentasi: 90,
        total: 712,
        rataRata: 89,
        catatan: "Sangat baik, aktif, dan cepat memahami materi.",
      },
      komplain: {
        isi: "Nilai komunikasi saya seharusnya lebih tinggi.",
        tanggal: "2025-09-05 10:30",
      },
      status: "Pending", // Pending | Disetujui | Ditolak
    },
  ]);

  const [selected, setSelected] = useState(null); // user yang dipilih untuk revisi
  const [form, setForm] = useState({});

  const handleSetuju = (protes) => {
    setSelected(protes);
    setForm({ ...protes.nilai }); // isi form dengan nilai lama
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSimpan = () => {
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

    setProtesList((prev) =>
      prev.map((p) =>
        p.id === selected.id
          ? {
              ...p,
              nilai: { ...form, total, rataRata },
              status: "Disetujui",
            }
          : p
      )
    );
    setSelected(null);
    alert("✅ Nilai berhasil diperbarui.");
  };

  const handleBatal = () => {
    setSelected(null); // tutup form revisi
  };

  const handleTolak = (id) => {
    setProtesList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: "Ditolak" } : p))
    );
    alert("❌ Komplain ditolak.");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-2xl font-semibold text-blue-900">
          Komplain Nilai User
        </h1>
        <div className="flex items-center gap-2 text-gray-700">
          <UserCircle className="w-6 h-6 text-blue-900" />
          <span className="hidden sm:inline">Pembimbing</span>
        </div>
      </div>

      {/* Daftar Protes */}
      <div className="bg-white shadow rounded-lg p-4">
        {protesList.map((p) => (
          <div
            key={p.id}
            className="border rounded-lg p-4 mb-4 bg-gray-50 shadow-sm"
          >
            <h3 className="font-semibold text-blue-900">{p.nama}</h3>
            <p className="text-sm">Divisi: {p.divisi}</p>
            <p className="text-sm">Proyek: {p.proyek}</p>
            <p className="text-sm mt-2">
              <b>Komplain:</b> {p.komplain.isi}
            </p>
            <p className="text-xs text-gray-500">{p.komplain.tanggal}</p>

            {/* Status */}
            <p className="mt-2 text-sm">
              <b>Status:</b>{" "}
              <span
                className={`px-2 py-1 rounded text-xs ${
                  p.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : p.status === "Disetujui"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {p.status}
              </span>
            </p>

            {/* Aksi */}
            {p.status === "Pending" && (
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => handleSetuju(p)}
                  className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800 text-sm"
                >
                  Setuju
                </button>
                <button
                  onClick={() => handleTolak(p.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-500 text-sm"
                >
                  Tolak
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Form Revisi Nilai */}
      {selected && (
        <div className="bg-white shadow rounded-lg p-6 mt-6">
          <h3 className="font-semibold text-blue-900 mb-3">
            Revisi Nilai: {selected.nama}
          </h3>

          {/* Input Nilai */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "kehadiran",
              "taatJadwal",
              "penguasaanMateri",
              "praktekKerja",
              "inisiatif",
              "komunikasi",
              "laporanKerja",
              "presentasi",
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
          <div className="mt-4 flex gap-2">
            <button
              onClick={handleSimpan}
              className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
            >
              Simpan
            </button>
            <button
              onClick={handleBatal}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Batal
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PembimbingProtes;
