// src/pages/AdminPelamar.jsx
import { useState, useEffect } from "react";
import { UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const dummyPembimbing = ["Drs. Ahmad", "Ir. Dewi", "Bapak Joko", "Ibu Sari"];

export default function AdminPelamar() {
  const [pelamar, setPelamar] = useState([]);
  const [selectedPelamar, setSelectedPelamar] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [pembimbing, setPembimbing] = useState("");

  const navigate = useNavigate();

  // Buat instance axios dengan token
  const api = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  // 🚀 Ambil data dari backend
  useEffect(() => {
    const fetchPelamar = async () => {
      try {
        const res = await api.get("/detail-pelamar");
        const mapped = res.data.map((d) => ({
          id: d.id,
          noFormulir: d.magang?.no_formulir || "-",
          nama: d.nama,
          divisi: d.divisi_tujuan,
          tanggalDaftar: d.created_at
            ? new Date(d.created_at).toISOString().slice(0, 10)
            : "-",
          status: d.status || "Belum Diproses",
          pembimbing: d.pembimbing || "",
          detail: {
            nama: d.nama,
            nik: d.nik,
            nim: d.nim,
            noHp: d.no_hp,
            universitas: d.universitas,
            alamatUniv: d.alamat_univ,
            jurusan: d.jurusan,
            semester: d.semester,
            divisiTujuan: d.divisi_tujuan,
            waktuMulai: d.waktu_mulai,
            waktuSelesai: d.waktu_selesai,
            proposal: d.proposal,
            surat: d.surat,
          },
        }));
        setPelamar(mapped);
      } catch (err) {
        console.error("Gagal fetch pelamar:", err);
      }
    };
    fetchPelamar();
  }, []);

  const openDetail = (data) => {
    setSelectedPelamar(data);
    setPembimbing(data.pembimbing || "");
    setIsDetailOpen(true);
  };

  const updateStatus = (status) => {
    setSelectedPelamar((prev) => ({ ...prev, status }));
  };

  const handleSave = async () => {
    if (selectedPelamar.status === "Diterima" && !pembimbing) {
      alert("⚠️ Harap pilih pembimbing terlebih dahulu!");
      return;
    }

    try {
      // 🚀 Update status ke backend
      await api.put(`/detail-pelamar/${selectedPelamar.id}`, {
        status_pengajuan: selectedPelamar.status,
        pembimbing: pembimbing,
      });

      // Update data di state frontend
      setPelamar((prev) =>
        prev.map((p) =>
          p.id === selectedPelamar.id
            ? { ...p, status: selectedPelamar.status, pembimbing }
            : p
        )
      );
      setSelectedPelamar((prev) => ({ ...prev, pembimbing }));

      alert("Perubahan berhasil disimpan ✅");

      if (selectedPelamar.status === "Diterima" && pembimbing) {
        navigate("/AdminKelola");
      } else {
        setIsDetailOpen(false);
      }
    } catch (err) {
      console.error("Gagal update status:", err);
      alert("❌ Gagal update status");
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-blue-900">
          Daftar Pelamar
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
              <th className="p-2 border">No Formulir</th>
              <th className="p-2 border">Nama</th>
              <th className="p-2 border">Divisi</th>
              <th className="p-2 border">Tanggal Daftar</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {pelamar.map((p) => (
              <tr key={p.id} className="text-center">
                <td className="p-2 border">{p.noFormulir}</td>
                <td className="p-2 border">{p.nama}</td>
                <td className="p-2 border">{p.divisi}</td>
                <td className="p-2 border">{p.tanggalDaftar}</td>
                <td className="p-2 border">{p.status}</td>
                <td className="p-2 border">
                  <button
                    onClick={() => openDetail(p)}
                    className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card List (Mobile) */}
      <div className="grid gap-4 md:hidden">
        {pelamar.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-lg shadow p-4 border text-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-blue-900">{p.nama}</h2>
              <span className="text-xs px-2 py-1 rounded bg-gray-200">
                {p.status}
              </span>
            </div>
            <p>
              <b>No Formulir:</b> {p.noFormulir}
            </p>
            <p>
              <b>Divisi:</b> {p.divisi}
            </p>
            <p>
              <b>Tgl Daftar:</b> {p.tanggalDaftar}
            </p>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => openDetail(p)}
                className="flex-1 px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800"
              >
                Detail
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail */}
      {isDetailOpen && selectedPelamar && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg mx-2 sm:mx-0 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">
              Detail Pelamar
            </h2>
            <div className="space-y-2 text-sm">
              <p>
                <b>Nama:</b> {selectedPelamar.detail.nama}
              </p>
              <p>
                <b>NIK:</b> {selectedPelamar.detail.nik}
              </p>
              <p>
                <b>NIM:</b> {selectedPelamar.detail.nim}
              </p>
              <p>
                <b>No HP:</b> {selectedPelamar.detail.noHp}
              </p>
              <p>
                <b>Universitas:</b> {selectedPelamar.detail.universitas}
              </p>
              <p>
                <b>Alamat Univ:</b> {selectedPelamar.detail.alamatUniv}
              </p>
              <p>
                <b>Jurusan:</b> {selectedPelamar.detail.jurusan}
              </p>
              <p>
                <b>Semester:</b> {selectedPelamar.detail.semester}
              </p>
              <p>
                <b>Divisi Tujuan:</b> {selectedPelamar.detail.divisiTujuan}
              </p>
              <p>
                <b>Waktu Mulai:</b> {selectedPelamar.detail.waktuMulai}
              </p>
              <p>
                <b>Waktu Selesai:</b> {selectedPelamar.detail.waktuSelesai}
              </p>
              <p>
                <b>Proposal:</b> {selectedPelamar.detail.proposal}
              </p>
              <p>
                <b>Surat:</b> {selectedPelamar.detail.surat}
              </p>

              {/* Status Selector */}
              <div className="mt-3">
                <label className="block font-medium mb-1">Status:</label>
                <select
                  value={selectedPelamar.status}
                  onChange={(e) => updateStatus(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  {[
                    "Belum Diproses",
                    "Sedang Diproses",
                    "Diterima",
                    "Ditolak",
                  ].map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              {/* Assign Pembimbing */}
              {selectedPelamar.status === "Diterima" && (
                <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                  <h3 className="font-semibold mb-2 text-blue-900">
                    Assign Pembimbing
                  </h3>
                  <select
                    value={pembimbing}
                    onChange={(e) => setPembimbing(e.target.value)}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">-- Pilih Pembimbing --</option>
                    {dummyPembimbing.map((nama) => (
                      <option key={nama} value={nama}>
                        {nama}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Tombol */}
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setIsDetailOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Tutup
              </button>
              <button
                onClick={handleSave}
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
