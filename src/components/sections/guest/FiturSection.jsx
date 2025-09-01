import { Link } from "react-router-dom";

import daftar_icon from "../../../assets/images/daftar_icon.png";
import status_icon from "../../../assets/images/status_icon.png";
import download_icon from "../../../assets/images/download_icon.png";

export default function FiturSection() {
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

        {/* Card 3 */}
        <Link
          to="/Download"
          className="block bg-blue-100 rounded-xl p-6 shadow hover:shadow-lg transition text-center"
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
        </Link>
      </div>
    </section>
  );
}