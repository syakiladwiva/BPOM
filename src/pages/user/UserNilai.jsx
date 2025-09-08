// src/pages/UserNilai.jsx
import React, { useState } from "react";
import { UserCircle } from "lucide-react";

const UserNilai = () => {
  // Dummy data hasil nilai (nanti bisa diambil dari backend)
  const [nilai] = useState({
    pengetahuan: 85,
    keterampilan: 88,
    sikap: 90,
    disiplin: 92,
    nilaiAkhir: 88.75,
    catatan: "Sangat baik, cepat memahami instruksi, dan disiplin waktu.",
    sertifikat: "Tersedia",
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-2xl font-semibold text-blue-900">
          Hasil Penilaian
        </h1>
        <div className="flex items-center gap-2 text-gray-700">
          <UserCircle className="w-6 h-6 text-blue-900" />
          <span className="hidden sm:inline">User</span>
        </div>
      </div>

      {/* Detail Nilai */}
      <div className="bg-white shadow rounded-lg p-6 space-y-6 border">
        {/* Aspek Penilaian */}
        <div>
          <h3 className="font-semibold mb-4 text-lg border-b pb-2 text-blue-900">
            Aspek Penilaian
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="border rounded-lg p-4 bg-gray-50">
              <p className="text-sm font-medium">Pengetahuan</p>
              <p className="text-2xl font-bold text-blue-900">
                {nilai.pengetahuan}
              </p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <p className="text-sm font-medium">Keterampilan</p>
              <p className="text-2xl font-bold text-blue-900">
                {nilai.keterampilan}
              </p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <p className="text-sm font-medium">Sikap</p>
              <p className="text-2xl font-bold text-blue-900">{nilai.sikap}</p>
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <p className="text-sm font-medium">Disiplin</p>
              <p className="text-2xl font-bold text-blue-900">
                {nilai.disiplin}
              </p>
            </div>
          </div>
        </div>

        {/* Nilai Akhir */}
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2 border-b pb-2 text-blue-900">
            Nilai Akhir
          </h3>
          <span className="inline-block text-3xl font-bold text-blue-900 bg-blue-100 px-6 py-2 rounded-full">
            {nilai.nilaiAkhir}
          </span>
        </div>

        {/* Catatan */}
        <div>
          <h3 className="font-semibold mb-2 border-b pb-2 text-blue-900">
            Catatan Pembimbing
          </h3>
          <p className="text-gray-700 text-sm bg-gray-50 p-3 rounded-lg border">
            {nilai.catatan}
          </p>
        </div>

        {/* Sertifikat */}
        <div>
          <h3 className="font-semibold mb-2 border-b pb-2 text-blue-900">
            Status Sertifikat
          </h3>
          <span
            className={`px-4 py-2 inline-block rounded-full text-sm font-medium ${
              nilai.sertifikat === "Tersedia"
                ? "bg-blue-100 text-blue-900"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {nilai.sertifikat}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserNilai;
