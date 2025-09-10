import React, { useState } from "react";
import { UserCircle } from "lucide-react";
import jsPDF from "jspdf";

const AdminSertifikat = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      nama: "Syakila Dwiva",
      divisi: "IT",
      tanggalSelesai: "2025-08-01",
      statusSertifikat: "Belum Dibuat",
    },
    {
      id: 2,
      nama: "Andi Pratama",
      divisi: "Keuangan",
      tanggalSelesai: "2025-08-10",
      statusSertifikat: "Sudah Dibuat",
    },
  ]);

  const handleGenerate = (id) => {
    const user = users.find((u) => u.id === id);

    if (!user) return;

    // 1. Buat dokumen PDF
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("SERTIFIKAT MAGANG", 105, 30, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Diberikan kepada: ${user.nama}`, 20, 60);
    doc.text(`Divisi: ${user.divisi}`, 20, 70);
    doc.text(`Tanggal Selesai: ${user.tanggalSelesai}`, 20, 80);

    doc.setFontSize(10);
    doc.text("Dokumen ini hanya contoh dummy sertifikat.", 20, 100);

    // 2. Simpan PDF ke file download
    doc.save(`sertifikat_${user.nama}.pdf`);

    // 3. Update status di state
    setUsers(
      users.map((u) =>
        u.id === id ? { ...u, statusSertifikat: "Sudah Dibuat" } : u
      )
    );

    alert(`Sertifikat untuk ${user.nama} berhasil digenerate.`);
  };

  const handleKirim = (id) => {
    const user = users.find((u) => u.id === id);
    alert(`Sertifikat ${user?.nama} berhasil dikirim (dummy).`);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Manajemen Sertifikat</h1>
      <table className="w-full border text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Nama</th>
            <th className="p-2 border">Divisi</th>
            <th className="p-2 border">Tanggal Selesai</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="text-center">
              <td className="p-2 border">{u.nama}</td>
              <td className="p-2 border">{u.divisi}</td>
              <td className="p-2 border">{u.tanggalSelesai}</td>
              <td className="p-2 border">{u.statusSertifikat}</td>
              <td className="p-2 border space-x-2">
                <button
                  onClick={() => handleGenerate(u.id)}
                  className="px-3 py-1 bg-blue-900 text-white rounded"
                >
                  Generate
                </button>
                <button
                  onClick={() => handleKirim(u.id)}
                  disabled={u.statusSertifikat !== "Sudah Dibuat"}
                  className={`px-3 py-1 rounded text-white ${
                    u.statusSertifikat === "Sudah Dibuat"
                      ? "bg-green-600 hover:bg-green-500"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  Kirim
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminSertifikat;
