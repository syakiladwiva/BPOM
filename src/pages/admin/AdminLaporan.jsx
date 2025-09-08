// src/pages/AdminLaporan.jsx
import React, { useState } from "react";
import { UserCircle } from "lucide-react";

const AdminLaporan = () => {
  const [activeTab, setActiveTab] = useState("riwayat");
  const [selectedTable, setSelectedTable] = useState("semua");
  const [filterType, setFilterType] = useState("semua");
  const [filterValue, setFilterValue] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  // === Dummy Data ===
  const [logAktivitas] = useState([
    {
      id: 1,
      tanggal: "2025-08-01",
      admin: "Admin1",
      aksi: "Menerima pelamar Syakila",
    },
    {
      id: 2,
      tanggal: "2025-08-05",
      admin: "Admin2",
      aksi: "Membuat sertifikat untuk Aeri",
    },
    {
      id: 3,
      tanggal: "2025-07-15",
      admin: "Admin1",
      aksi: "Menolak pelamar Kim Minji",
    },
  ]);

  const [pelamar] = useState([
    {
      id: 1,
      nama: "Syakila Dwiva",
      universitas: "UI",
      jurusan: "TI",
      formulir: "F-001",
      divisi: "IT",
      status: "Diterima",
      tanggal: "2025-07-01",
    },
    {
      id: 2,
      nama: "Kim Minji",
      universitas: "Yonsei",
      jurusan: "Akuntansi",
      formulir: "F-002",
      divisi: "Keuangan",
      status: "Ditolak",
      tanggal: "2025-07-10",
    },
    {
      id: 3,
      nama: "Lee Haeun",
      universitas: "UGM",
      jurusan: "Sistem Informasi",
      formulir: "F-003",
      divisi: "IT",
      status: "Diterima",
      tanggal: "2025-07-15",
    },
  ]);

  const [userAktif] = useState([
    {
      id: 1,
      nama: "Han Jisung",
      divisi: "IT",
      pembimbing: "Pak Budi",
      periode: "Jul - Des 2025",
      proyek: "Sistem Absensi",
      kehadiran: "95%",
      progress: "80%",
      tanggalMulai: "2025-07-01",
    },
    {
      id: 2,
      nama: "Park Jihyo",
      divisi: "Humas",
      pembimbing: "Bu Sari",
      periode: "Jul - Des 2025",
      proyek: "Media Sosial",
      kehadiran: "90%",
      progress: "75%",
      tanggalMulai: "2025-07-05",
    },
  ]);

  const [userSelesai] = useState([
    {
      id: 1,
      nama: "Syakila Dwiva",
      divisi: "IT",
      pembimbing: "Pak Budi",
      periode: "Jan - Jun 2025",
      nilai: "A",
      sertifikat: "Sudah Dibuat",
      tglSertifikat: "2025-07-02",
      tanggalSelesai: "2025-06-30",
    },
    {
      id: 2,
      nama: "Aeri Uchinaga",
      divisi: "Humas",
      pembimbing: "Bu Sari",
      periode: "Feb - Jul 2025",
      nilai: "B+",
      sertifikat: "Belum Dibuat",
      tglSertifikat: "-",
      tanggalSelesai: "2025-07-31",
    },
  ]);

  const [userDitolak] = useState([
    {
      id: 1,
      nama: "Kim Minji",
      formulir: "F-002",
      divisi: "Keuangan",
      tanggalTolak: "2025-07-15",
      alasan: "Tidak sesuai kualifikasi",
    },
    {
      id: 2,
      nama: "Park Sunghoon",
      formulir: "F-004",
      divisi: "IT",
      tanggalTolak: "2025-07-20",
      alasan: "Jadwal tidak sesuai",
    },
  ]);

  const [pembimbing] = useState([
    {
      id: 1,
      nama: "Pak Budi",
      divisi: "IT",
      jumlahUser: 5,
      selesai: 3,
      rataNilai: "A-",
    },
    {
      id: 2,
      nama: "Bu Sari",
      divisi: "Humas",
      jumlahUser: 3,
      selesai: 2,
      rataNilai: "B+",
    },
  ]);

  // Fungsi untuk filter data
  const applyFilter = (data, dateField) => {
    if (filterType === "tanggal" && dateFilter) {
      const filterDate = new Date(dateFilter);
      return data.filter((item) => {
        if (!item[dateField]) return false;
        const itemDate = new Date(item[dateField]);
        return itemDate.toDateString() === filterDate.toDateString();
      });
    } else if (filterType === "bulan" && filterValue) {
      const [year, month] = filterValue.split("-");
      return data.filter((item) => {
        if (!item[dateField]) return false;
        const itemDate = new Date(item[dateField]);
        return (
          itemDate.getFullYear() === parseInt(year) &&
          itemDate.getMonth() + 1 === parseInt(month)
        );
      });
    } else if (filterType === "tahun" && filterValue) {
      const year = parseInt(filterValue);
      return data.filter((item) => {
        if (!item[dateField]) return false;
        const itemDate = new Date(item[dateField]);
        return itemDate.getFullYear() === year;
      });
    }
    return data;
  };

  // Data yang sudah difilter
  const filteredLogAktivitas = applyFilter(logAktivitas, "tanggal");
  const filteredPelamar = applyFilter(pelamar, "tanggal");
  const filteredUserAktif = applyFilter(userAktif, "tanggalMulai");
  const filteredUserSelesai = applyFilter(userSelesai, "tanggalSelesai");
  const filteredUserDitolak = applyFilter(userDitolak, "tanggalTolak");

  // Komponen Card untuk Mobile View
  const CardRiwayatAktivitas = () => (
    <div className="grid gap-4 md:hidden">
      {filteredLogAktivitas.map((log) => (
        <div
          key={log.id}
          className="bg-white rounded-lg shadow p-4 border text-sm"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-blue-900">{log.admin}</h3>
            <span className="text-xs text-gray-500">{log.tanggal}</span>
          </div>
          <p className="text-gray-700">{log.aksi}</p>
        </div>
      ))}
    </div>
  );

  const CardRiwayatSelesai = () => (
    <div className="grid gap-4 md:hidden">
      {filteredUserSelesai.map((user) => (
        <div
          key={user.id}
          className="bg-white rounded-lg shadow p-4 border text-sm"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-blue-900">{user.nama}</h3>
            <span className="text-xs text-gray-500">{user.tanggalSelesai}</span>
          </div>
          <p>
            <b>Divisi:</b> {user.divisi}
          </p>
          <p>
            <b>Pembimbing:</b> {user.pembimbing}
          </p>
          <p>
            <b>Periode:</b> {user.periode}
          </p>
          <p>
            <b>Nilai:</b> {user.nilai}
          </p>
          <p>
            <b>Sertifikat:</b> {user.sertifikat}
          </p>
        </div>
      ))}
    </div>
  );

  const CardRiwayatDitolak = () => (
    <div className="grid gap-4 md:hidden">
      {filteredUserDitolak.map((user) => (
        <div
          key={user.id}
          className="bg-white rounded-lg shadow p-4 border text-sm"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-blue-900">{user.nama}</h3>
            <span className="text-xs text-gray-500">{user.tanggalTolak}</span>
          </div>
          <p>
            <b>Formulir:</b> {user.formulir}
          </p>
          <p>
            <b>Divisi:</b> {user.divisi}
          </p>
          <p>
            <b>Alasan:</b> {user.alasan}
          </p>
        </div>
      ))}
    </div>
  );

  const CardPelamar = () => (
    <div className="grid gap-4 md:hidden">
      {filteredPelamar.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-lg shadow p-4 border text-sm"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-blue-900">{p.nama}</h3>
            <span
              className={`text-xs px-2 py-1 rounded ${
                p.status === "Diterima"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {p.status}
            </span>
          </div>
          <p>
            <b>Universitas:</b> {p.universitas}
          </p>
          <p>
            <b>Jurusan:</b> {p.jurusan}
          </p>
          <p>
            <b>Formulir:</b> {p.formulir}
          </p>
          <p>
            <b>Divisi:</b> {p.divisi}
          </p>
          <p>
            <b>Tanggal:</b> {p.tanggal}
          </p>
        </div>
      ))}
    </div>
  );

  const CardUserAktif = () => (
    <div className="grid gap-4 md:hidden">
      {filteredUserAktif.map((u) => (
        <div
          key={u.id}
          className="bg-white rounded-lg shadow p-4 border text-sm"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-blue-900">{u.nama}</h3>
            <span className="text-xs text-gray-500">{u.tanggalMulai}</span>
          </div>
          <p>
            <b>Divisi:</b> {u.divisi}
          </p>
          <p>
            <b>Pembimbing:</b> {u.pembimbing}
          </p>
          <p>
            <b>Periode:</b> {u.periode}
          </p>
          <p>
            <b>Proyek:</b> {u.proyek}
          </p>
          <p>
            <b>Kehadiran:</b> {u.kehadiran}
          </p>
          <p>
            <b>Progress:</b> {u.progress}
          </p>
        </div>
      ))}
    </div>
  );

  const CardUserSelesai = () => (
    <div className="grid gap-4 md:hidden">
      {filteredUserSelesai.map((u) => (
        <div
          key={u.id}
          className="bg-white rounded-lg shadow p-4 border text-sm"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-blue-900">{u.nama}</h3>
            <span className="text-xs text-gray-500">{u.tanggalSelesai}</span>
          </div>
          <p>
            <b>Divisi:</b> {u.divisi}
          </p>
          <p>
            <b>Pembimbing:</b> {u.pembimbing}
          </p>
          <p>
            <b>Periode:</b> {u.periode}
          </p>
          <p>
            <b>Nilai:</b> {u.nilai}
          </p>
          <p>
            <b>Sertifikat:</b> {u.sertifikat}
          </p>
          <p>
            <b>Tgl Sertifikat:</b> {u.tglSertifikat}
          </p>
        </div>
      ))}
    </div>
  );

  const CardUserDitolak = () => (
    <div className="grid gap-4 md:hidden">
      {filteredUserDitolak.map((u) => (
        <div
          key={u.id}
          className="bg-white rounded-lg shadow p-4 border text-sm"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-blue-900">{u.nama}</h3>
            <span className="text-xs text-gray-500">{u.tanggalTolak}</span>
          </div>
          <p>
            <b>Formulir:</b> {u.formulir}
          </p>
          <p>
            <b>Divisi:</b> {u.divisi}
          </p>
          <p>
            <b>Alasan:</b> {u.alasan}
          </p>
        </div>
      ))}
    </div>
  );

  const CardPembimbing = () => (
    <div className="grid gap-4 md:hidden">
      {pembimbing.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-lg shadow p-4 border text-sm"
        >
          <h3 className="font-semibold text-blue-900 mb-2">{p.nama}</h3>
          <p>
            <b>Divisi:</b> {p.divisi}
          </p>
          <p>
            <b>Jumlah User:</b> {p.jumlahUser}
          </p>
          <p>
            <b>Selesai:</b> {p.selesai}
          </p>
          <p>
            <b>Rata Nilai:</b> {p.rataNilai}
          </p>
        </div>
      ))}
    </div>
  );

  // Komponen Tabel untuk Desktop View
  const TableRiwayatAktivitas = () => (
    <div className="hidden md:block overflow-x-auto rounded-lg shadow">
      <table className="w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Tanggal</th>
            <th className="p-3 border">Admin</th>
            <th className="p-3 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredLogAktivitas.map((log) => (
            <tr key={log.id} className="text-center hover:bg-gray-50">
              <td className="p-3 border">{log.tanggal}</td>
              <td className="p-3 border">{log.admin}</td>
              <td className="p-3 border">{log.aksi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const TableRiwayatSelesai = () => (
    <div className="hidden md:block overflow-x-auto rounded-lg shadow">
      <table className="w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Nama</th>
            <th className="p-3 border">Divisi</th>
            <th className="p-3 border">Pembimbing</th>
            <th className="p-3 border">Periode</th>
            <th className="p-3 border">Nilai</th>
            <th className="p-3 border">Sertifikat</th>
            <th className="p-3 border">Tanggal Selesai</th>
          </tr>
        </thead>
        <tbody>
          {filteredUserSelesai.map((user) => (
            <tr key={user.id} className="text-center hover:bg-gray-50">
              <td className="p-3 border">{user.nama}</td>
              <td className="p-3 border">{user.divisi}</td>
              <td className="p-3 border">{user.pembimbing}</td>
              <td className="p-3 border">{user.periode}</td>
              <td className="p-3 border">{user.nilai}</td>
              <td className="p-3 border">{user.sertifikat}</td>
              <td className="p-3 border">{user.tanggalSelesai}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const TableRiwayatDitolak = () => (
    <div className="hidden md:block overflow-x-auto rounded-lg shadow">
      <table className="w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Nama</th>
            <th className="p-3 border">No Formulir</th>
            <th className="p-3 border">Divisi</th>
            <th className="p-3 border">Tanggal Tolak</th>
            <th className="p-3 border">Alasan</th>
          </tr>
        </thead>
        <tbody>
          {filteredUserDitolak.map((user) => (
            <tr key={user.id} className="text-center hover:bg-gray-50">
              <td className="p-3 border">{user.nama}</td>
              <td className="p-3 border">{user.formulir}</td>
              <td className="p-3 border">{user.divisi}</td>
              <td className="p-3 border">{user.tanggalTolak}</td>
              <td className="p-3 border">{user.alasan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const TablePelamar = () => (
    <div className="hidden md:block overflow-x-auto rounded-lg shadow">
      <table className="w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Nama</th>
            <th className="p-3 border">Universitas</th>
            <th className="p-3 border">Jurusan</th>
            <th className="p-3 border">No Formulir</th>
            <th className="p-3 border">Divisi</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Tanggal Daftar</th>
          </tr>
        </thead>
        <tbody>
          {filteredPelamar.map((p) => (
            <tr key={p.id} className="text-center hover:bg-gray-50">
              <td className="p-3 border">{p.nama}</td>
              <td className="p-3 border">{p.universitas}</td>
              <td className="p-3 border">{p.jurusan}</td>
              <td className="p-3 border">{p.formulir}</td>
              <td className="p-3 border">{p.divisi}</td>
              <td className="p-3 border">{p.status}</td>
              <td className="p-3 border">{p.tanggal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const TableUserAktif = () => (
    <div className="hidden md:block overflow-x-auto rounded-lg shadow">
      <table className="w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Nama</th>
            <th className="p-3 border">Divisi</th>
            <th className="p-3 border">Pembimbing</th>
            <th className="p-3 border">Periode</th>
            <th className="p-3 border">Proyek</th>
            <th className="p-3 border">Kehadiran</th>
            <th className="p-3 border">Progress</th>
            <th className="p-3 border">Tanggal Mulai</th>
          </tr>
        </thead>
        <tbody>
          {filteredUserAktif.map((u) => (
            <tr key={u.id} className="text-center hover:bg-gray-50">
              <td className="p-3 border">{u.nama}</td>
              <td className="p-3 border">{u.divisi}</td>
              <td className="p-3 border">{u.pembimbing}</td>
              <td className="p-3 border">{u.periode}</td>
              <td className="p-3 border">{u.proyek}</td>
              <td className="p-3 border">{u.kehadiran}</td>
              <td className="p-3 border">{u.progress}</td>
              <td className="p-3 border">{u.tanggalMulai}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const TableUserSelesai = () => (
    <div className="hidden md:block overflow-x-auto rounded-lg shadow">
      <table className="w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Nama</th>
            <th className="p-3 border">Divisi</th>
            <th className="p-3 border">Pembimbing</th>
            <th className="p-3 border">Periode</th>
            <th className="p-3 border">Nilai</th>
            <th className="p-3 border">Sertifikat</th>
            <th className="p-3 border">Tanggal Sertifikat</th>
            <th className="p-3 border">Tanggal Selesai</th>
          </tr>
        </thead>
        <tbody>
          {filteredUserSelesai.map((u) => (
            <tr key={u.id} className="text-center hover:bg-gray-50">
              <td className="p-3 border">{u.nama}</td>
              <td className="p-3 border">{u.divisi}</td>
              <td className="p-3 border">{u.pembimbing}</td>
              <td className="p-3 border">{u.periode}</td>
              <td className="p-3 border">{u.nilai}</td>
              <td className="p-3 border">{u.sertifikat}</td>
              <td className="p-3 border">{u.tglSertifikat}</td>
              <td className="p-3 border">{u.tanggalSelesai}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const TableUserDitolak = () => (
    <div className="hidden md:block overflow-x-auto rounded-lg shadow">
      <table className="w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Nama</th>
            <th className="p-3 border">No Formulir</th>
            <th className="p-3 border">Divisi</th>
            <th className="p-3 border">Tanggal Tolak</th>
            <th className="p-3 border">Alasan</th>
          </tr>
        </thead>
        <tbody>
          {filteredUserDitolak.map((u) => (
            <tr key={u.id} className="text-center hover:bg-gray-50">
              <td className="p-3 border">{u.nama}</td>
              <td className="p-3 border">{u.formulir}</td>
              <td className="p-3 border">{u.divisi}</td>
              <td className="p-3 border">{u.tanggalTolak}</td>
              <td className="p-3 border">{u.alasan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const TablePembimbing = () => (
    <div className="hidden md:block overflow-x-auto rounded-lg shadow">
      <table className="w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Nama</th>
            <th className="p-3 border">Divisi</th>
            <th className="p-3 border">Jumlah User</th>
            <th className="p-3 border">Selesai</th>
            <th className="p-3 border">Rata Nilai</th>
          </tr>
        </thead>
        <tbody>
          {pembimbing.map((p) => (
            <tr key={p.id} className="text-center hover:bg-gray-50">
              <td className="p-3 border">{p.nama}</td>
              <td className="p-3 border">{p.divisi}</td>
              <td className="p-3 border">{p.jumlahUser}</td>
              <td className="p-3 border">{p.selesai}</td>
              <td className="p-3 border">{p.rataNilai}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-blue-900">
          Laporan & Riwayat
        </h1>
        <div className="flex items-center gap-2 text-blue-900">
          <UserCircle className="w-6 h-6" />
          <span className="hidden sm:inline">Admin</span>
        </div>
      </div>

      {/* Tab Menu */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("riwayat")}
          className={`px-4 py-2 rounded text-sm sm:text-base ${
            activeTab === "riwayat"
              ? "bg-blue-900 text-white"
              : "bg-blue-100 text-blue-900 hover:bg-blue-200"
          }`}
        >
          Riwayat
        </button>
        <button
          onClick={() => setActiveTab("laporan")}
          className={`px-4 py-2 rounded text-sm sm:text-base ${
            activeTab === "laporan"
              ? "bg-blue-900 text-white"
              : "bg-blue-100 text-blue-900 hover:bg-blue-200"
          }`}
        >
          Laporan
        </button>
      </div>

      {/* Filter Controls */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-3 text-blue-900">
          Filter Data
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Dropdown Pilih Tabel */}
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Pilih Tabel
            </label>
            <select
              value={selectedTable}
              onChange={(e) => setSelectedTable(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            >
              {activeTab === "riwayat" ? (
                <>
                  <option value="semua">Semua Tabel</option>
                  <option value="aktivitas">Riwayat Aktivitas Admin</option>
                  <option value="selesai">Riwayat User Selesai Magang</option>
                  <option value="ditolak">Riwayat User Ditolak</option>
                </>
              ) : (
                <>
                  <option value="semua">Semua Tabel</option>
                  <option value="pelamar">Laporan Pelamar</option>
                  <option value="aktif">Laporan User Aktif</option>
                  <option value="selesai">Laporan User Selesai</option>
                  <option value="ditolak">Laporan User Ditolak</option>
                  <option value="pembimbing">Laporan Pembimbing</option>
                </>
              )}
            </select>
          </div>

          {/* Dropdown Tipe Filter */}
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              Tipe Filter
            </label>
            <select
              value={filterType}
              onChange={(e) => {
                setFilterType(e.target.value);
                setFilterValue("");
                setDateFilter("");
              }}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="semua">Semua</option>
              <option value="tanggal">Tanggal</option>
              <option value="bulan">Bulan & Tahun</option>
              <option value="tahun">Tahun</option>
            </select>
          </div>

          {/* Input Filter Berdasarkan Tipe */}
          <div>
            <label className="block text-sm font-medium text-blue-900 mb-1">
              {filterType === "tanggal"
                ? "Pilih Tanggal"
                : filterType === "bulan"
                ? "Pilih Bulan & Tahun"
                : filterType === "tahun"
                ? "Pilih Tahun"
                : "Filter"}
            </label>
            {filterType === "tanggal" && (
              <input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              />
            )}
            {filterType === "bulan" && (
              <input
                type="month"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              />
            )}
            {filterType === "tahun" && (
              <input
                type="number"
                min="2020"
                max="2030"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                placeholder="Tahun (contoh: 2025)"
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
              />
            )}
            {(filterType === "semua" || !filterType) && (
              <input
                type="text"
                disabled
                placeholder="Pilih tipe filter"
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-100 text-sm"
              />
            )}
          </div>

          {/* Tombol Reset Filter */}
          <div className="flex items-end">
            <button
              onClick={() => {
                setFilterType("semua");
                setFilterValue("");
                setDateFilter("");
              }}
              className="w-full p-2 bg-blue-100 text-blue-900 rounded-md hover:bg-blue-200 text-sm"
            >
              Reset Filter
            </button>
          </div>
        </div>
      </div>

      {/* === RIWAYAT === */}
      {activeTab === "riwayat" && (
        <div className="space-y-6">
          {selectedTable === "semua" ? (
            <>
              <h2 className="text-xl font-semibold text-blue-900">
                Riwayat Aktivitas Admin
              </h2>
              <CardRiwayatAktivitas />
              <TableRiwayatAktivitas />

              <h2 className="text-xl font-semibold text-blue-900 mt-8">
                Riwayat User Selesai Magang
              </h2>
              <CardRiwayatSelesai />
              <TableRiwayatSelesai />

              <h2 className="text-xl font-semibold text-blue-900 mt-8">
                Riwayat User Ditolak
              </h2>
              <CardRiwayatDitolak />
              <TableRiwayatDitolak />
            </>
          ) : selectedTable === "aktivitas" ? (
            <>
              <CardRiwayatAktivitas />
              <TableRiwayatAktivitas />
            </>
          ) : selectedTable === "selesai" ? (
            <>
              <CardRiwayatSelesai />
              <TableRiwayatSelesai />
            </>
          ) : selectedTable === "ditolak" ? (
            <>
              <CardRiwayatDitolak />
              <TableRiwayatDitolak />
            </>
          ) : null}
        </div>
      )}

      {/* === LAPORAN === */}
      {activeTab === "laporan" && (
        <div className="space-y-6">
          {selectedTable === "semua" ? (
            <>
              <h2 className="text-xl font-semibold text-blue-900">
                Laporan Pelamar
              </h2>
              <CardPelamar />
              <TablePelamar />

              <h2 className="text-xl font-semibold text-blue-900 mt-8">
                Laporan User Aktif
              </h2>
              <CardUserAktif />
              <TableUserAktif />

              <h2 className="text-xl font-semibold text-blue-900 mt-8">
                Laporan User Selesai
              </h2>
              <CardUserSelesai />
              <TableUserSelesai />

              <h2 className="text-xl font-semibold text-blue-900 mt-8">
                Laporan User Ditolak
              </h2>
              <CardUserDitolak />
              <TableUserDitolak />

              <h2 className="text-xl font-semibold text-blue-900 mt-8">
                Laporan Pembimbing
              </h2>
              <CardPembimbing />
              <TablePembimbing />
            </>
          ) : selectedTable === "pelamar" ? (
            <>
              <CardPelamar />
              <TablePelamar />
            </>
          ) : selectedTable === "aktif" ? (
            <>
              <CardUserAktif />
              <TableUserAktif />
            </>
          ) : selectedTable === "selesai" ? (
            <>
              <CardUserSelesai />
              <TableUserSelesai />
            </>
          ) : selectedTable === "ditolak" ? (
            <>
              <CardUserDitolak />
              <TableUserDitolak />
            </>
          ) : selectedTable === "pembimbing" ? (
            <>
              <CardPembimbing />
              <TablePembimbing />
            </>
          ) : null}
        </div>
      )}

      {/* Export */}
      <div className="flex justify-end mt-6 gap-3 flex-wrap">
        <button className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 text-sm sm:text-base">
          Export Excel
        </button>
        <button className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 text-sm sm:text-base">
          Export PDF
        </button>
      </div>
    </div>
  );
};

export default AdminLaporan;