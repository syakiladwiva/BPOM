// src/pages/UserNilai.jsx
import React, { useState } from "react";
import { UserCircle } from "lucide-react";

const UserNilai = () => {
  // Dummy data hasil nilai (simulasi dari PembimbingNilai)
  const [nilai] = useState({
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
      total: 712, // jumlah semua aspek
      rataRata: 89.0, // total / 8
      catatan: "Sangat baik dalam disiplin, cepat memahami materi, dan aktif.",
    },
    sertifikat: "Belum Dibuat", // bisa "Belum Dibuat" atau "Sudah Dibuat"
  });

  // State untuk protes nilai
  const [protes, setProtes] = useState("");
  const [protesList, setProtesList] = useState([
    {
      tanggal: "09/09/2025, 09:30",
      isi: "Nilai praktek kerja saya kurang sesuai.",
      status: "Diterima",
    },
    {
      tanggal: "08/09/2025, 14:10",
      isi: "Mohon tinjau ulang nilai komunikasi saya.",
      status: "Ditolak",
    },
  ]);

  const handleKirimProtes = () => {
    if (!protes.trim()) return alert("Isi alasan protes dulu!");
    const newProtes = {
      tanggal: new Date().toLocaleString(),
      isi: protes,
      status: "Pending", // default saat baru dikirim
    };
    setProtesList([...protesList, newProtes]);
    setProtes("");
    alert("Protes nilai berhasil dikirim ✅");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-2xl font-semibold text-blue-900">
          Hasil Penilaian
        </h1>
        <div className="flex items-center gap-2 text-gray-700">
          <UserCircle className="w-6 h-6 text-blue-900" />
          <span className="hidden sm:inline">{nilai.nama}</span>
        </div>
      </div>

      {/* Detail Nilai */}
      <div className="bg-white shadow rounded-lg p-6 space-y-6 border">
        {/* Info umum */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <p>
            <b>Nama:</b> {nilai.nama}
          </p>
          <p>
            <b>Divisi:</b> {nilai.divisi}
          </p>
          <p>
            <b>Proyek:</b> {nilai.proyek}
          </p>
        </div>

        {/* Kedisiplinan */}
        <div>
          <h3 className="font-semibold mb-3 text-lg border-b pb-2 text-blue-900">
            Kedisiplinan
          </h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="border rounded-lg p-4 bg-gray-50">
              <p className="text-sm font-medium">Kehadiran</p>
              <p className="text-2xl font-bold text-blue-900">
                {nilai.nilai.kehadiran}
              </p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <p className="text-sm font-medium">Taat Jadwal</p>
              <p className="text-2xl font-bold text-blue-900">
                {nilai.nilai.taatJadwal}
              </p>
            </div>
          </div>
        </div>

        {/* Kegiatan Selama Praktek */}
        <div>
          <h3 className="font-semibold mb-3 text-lg border-b pb-2 text-blue-900">
            Kegiatan Selama Praktek
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="border rounded-lg p-4 bg-gray-50">
              <p className="text-sm font-medium">Penguasaan Materi</p>
              <p className="text-2xl font-bold text-blue-900">
                {nilai.nilai.penguasaanMateri}
              </p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <p className="text-sm font-medium">Praktek Kerja</p>
              <p className="text-2xl font-bold text-blue-900">
                {nilai.nilai.praktekKerja}
              </p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <p className="text-sm font-medium">Inisiatif</p>
              <p className="text-2xl font-bold text-blue-900">
                {nilai.nilai.inisiatif}
              </p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <p className="text-sm font-medium">Komunikasi</p>
              <p className="text-2xl font-bold text-blue-900">
                {nilai.nilai.komunikasi}
              </p>
            </div>
          </div>
        </div>

        {/* Kemampuan Membuat Laporan */}
        <div>
          <h3 className="font-semibold mb-3 text-lg border-b pb-2 text-blue-900">
            Kemampuan Membuat Laporan
          </h3>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="border rounded-lg p-4 bg-gray-50">
              <p className="text-sm font-medium">Laporan Kerja</p>
              <p className="text-2xl font-bold text-blue-900">
                {nilai.nilai.laporanKerja}
              </p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <p className="text-sm font-medium">Presentasi</p>
              <p className="text-2xl font-bold text-blue-900">
                {nilai.nilai.presentasi}
              </p>
            </div>
          </div>
        </div>

        {/* Total & Rata-rata */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2 border-b pb-2 text-blue-900">
            Hasil Akhir
          </h3>
          <p className="text-sm text-gray-600">
            Jumlah Nilai: {nilai.nilai.total}
          </p>
          <span className="inline-block text-3xl font-bold text-blue-900 bg-blue-100 px-6 py-2 rounded-full mt-2">
            {nilai.nilai.rataRata}
          </span>
        </div>

        {/* Catatan */}
        <div>
          <h3 className="font-semibold mb-2 border-b pb-2 text-blue-900">
            Catatan Pembimbing
          </h3>
          <p className="text-gray-700 text-sm bg-gray-50 p-3 rounded-lg border">
            {nilai.nilai.catatan}
          </p>
        </div>

        {/* Sertifikat */}
        <div>
          <h3 className="font-semibold mb-2 border-b pb-2 text-blue-900">
            Status Sertifikat
          </h3>
          <span
            className={`px-4 py-2 inline-block rounded-full text-sm font-medium ${
              nilai.sertifikat === "Sudah Dibuat"
                ? "bg-blue-100 text-blue-900"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {nilai.sertifikat}
          </span>
        </div>

        {/* Form Protes */}
        <div>
          <h3 className="font-semibold mb-2 border-b pb-2 text-blue-900">
            Ajukan Komplain Nilai{" "}
            <span className="text-gray-500 text-sm">(opsional)</span>
          </h3>
          <textarea
            value={protes}
            onChange={(e) => setProtes(e.target.value)}
            placeholder="Tuliskan alasan protes Anda (boleh dikosongkan)..."
            className="w-full border rounded p-3 text-sm bg-gray-50 focus:ring-2 focus:ring-blue-900 focus:outline-none"
          />
          <button
            onClick={handleKirimProtes}
            disabled={!protes.trim()}
            className={`mt-2 px-4 py-2 rounded text-white ${
              protes.trim()
                ? "bg-blue-900 hover:bg-blue-800"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Kirim Komplain
          </button>
        </div>

        {/* Riwayat Protes */}
        {protesList.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2 border-b pb-2 text-blue-900">
              Riwayat Komplain Anda
            </h3>
            <ul className="space-y-2">
              {protesList.map((p, i) => (
                <li
                  key={i}
                  className="border rounded-lg p-3 bg-gray-50 flex flex-col sm:flex-row sm:justify-between sm:items-center"
                >
                  <div>
                    <p className="text-sm">
                      <b>{p.tanggal}:</b> {p.isi}
                    </p>
                  </div>
                  <span
                    className={`mt-2 sm:mt-0 px-3 py-1 text-xs rounded-full font-medium text-center ${
                      p.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : p.status === "Diterima"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {p.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserNilai;
