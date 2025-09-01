import { Link } from "react-router-dom";
import cewek_guest from "../../../assets/images/cewek_guest.png";

export default function IntroSection() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16">
        {/* Kiri: Teks */}
        <div className="md:w-1/2 text-left -mt-6 md:-mt-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight tracking-tight">
            PROGRAM MAGANG BPOM DI PADANG
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-md leading-relaxed">
            Kesempatan belajar, berkontribusi, dan mengembangkan potensi bersama
            Badan Pengawas Obat dan Makanan Republik Indonesia
          </p>

          <div className="mt-8 flex justify-start">
            <Link
              to="/Daftar"
              className="bg-blue-900 text-white px-8 py-4 rounded-md shadow hover:bg-blue-800 transition text-lg"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>

        {/* Kanan: Gambar */}
        <div className="md:w-1/2 flex justify-end mt-10 md:mt-0">
          <img
            src={cewek_guest}
            alt="Program Magang BPOM"
            className="w-[320px] md:w-[420px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}