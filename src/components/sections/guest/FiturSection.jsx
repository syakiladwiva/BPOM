// src/components/sections/guest/FiturSection.jsx
import { jsPDF } from "jspdf";
import { Link } from "react-router-dom";

import daftar_icon from "../../../assets/images/daftar_icon.png";
import status_icon from "../../../assets/images/status_icon.png";
import download_icon from "../../../assets/images/download_icon.png";

export default function FiturSection() {
  const handleDownload = () => {
    const doc = new jsPDF("p", "mm", "a4");

    // Warna utama
    const blue900 = "#1e3a8a"; // tailwind blue-900
    const blue100 = "#dbeafe";

    // Judul
    doc.setFillColor(blue900);
    doc.rect(0, 0, 210, 30, "F"); // banner header
    doc.setTextColor("#ffffff");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("Alur Pendaftaran Magang", 105, 20, { align: "center" });

    // Step Cards
    const steps = [
      {
        no: 1,
        title: "Isi Formulir Online",
        desc: "Buka website dan lengkapi formulir pendaftaran magang.",
      },
      {
        no: 2,
        title: "Verifikasi Data",
        desc: "Admin memverifikasi data dan dokumen yang diajukan.",
      },
      {
        no: 3,
        title: "Cek Status",
        desc: "Pantau status pengajuan magang melalui menu status.",
      },
      {
        no: 4,
        title: "Konfirmasi & Mulai",
        desc: "Jika diterima, ikuti instruksi dan mulai kegiatan magang.",
      },
    ];

    let yPos = 50;
    steps.forEach((step) => {
      // Card background
      doc.setFillColor(blue100);
      doc.roundedRect(20, yPos, 170, 30, 3, 3, "F");

      // Step number circle
      doc.setFillColor(blue900);
      doc.circle(30, yPos + 15, 8, "F");
      doc.setTextColor("#ffffff");
      doc.setFontSize(12);
      doc.text(String(step.no), 30, yPos + 19, { align: "center" });

      // Title + Desc
      doc.setTextColor(blue900);
      doc.setFont("helvetica", "bold");
      doc.text(step.title, 45, yPos + 12);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text(step.desc, 45, yPos + 20);

      yPos += 40;
    });

    // Footer
    doc.setFillColor(blue900);
    doc.rect(0, 280, 210, 17, "F");
    doc.setTextColor("#ffffff");
    doc.setFontSize(10);
    doc.text("© 2025 BPOM - Sistem Magang Online", 105, 290, {
      align: "center",
    });

    // Simpan PDF
    doc.save("alur-pendaftaran.pdf");
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-12">
        Fitur Kami
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <Link
          to="/Daftar"
          className="block bg-blue-100 rounded-xl p-6 shadow hover:shadow-lg transition text-center"
        >
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Daftar Online
          </h3>
          <img
            src={daftar_icon}
            alt="Daftar Online"
            className="mx-auto w-16 h-16 mb-4"
          />
          <p className="text-blue-900 font-medium">
            Mulai pendaftaran magang secara online.
          </p>
        </Link>

        {/* Card 2 */}
        <Link
          to="/Status"
          className="block bg-blue-100 rounded-xl p-6 shadow hover:shadow-lg transition text-center"
        >
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Cek Status
          </h3>
          <img
            src={status_icon}
            alt="Cek Status"
            className="mx-auto w-16 h-16 mb-4"
          />
          <p className="text-blue-900 font-medium">
            Pantau status pengajuan magang kamu.
          </p>
        </Link>

        {/* Card 3 - Download */}
        <button
          onClick={handleDownload}
          className="block w-full bg-blue-100 rounded-xl p-6 shadow hover:shadow-lg transition text-center"
        >
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Download Alur Daftar
          </h3>
          <img
            src={download_icon}
            alt="Alur Daftar"
            className="mx-auto w-16 h-16 mb-4"
          />
          <p className="text-blue-900 font-medium">
            Lihat langkah-langkah proses pendaftaran.
          </p>
        </button>
      </div>
    </section>
  );
}
