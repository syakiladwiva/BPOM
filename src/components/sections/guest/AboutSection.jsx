import aboutImg from "../../../assets/images/cewek_guest.png";

export default function AboutSection() {
  return (
    <section className="w-full bg-white min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16">
        {/* Kiri: Teks */}
        <div className="md:w-1/2 text-left -mt-6 md:-mt-10">
          <h2 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight tracking-tight">
            Tentang E-magang
          </h2>
          <p className="mt-6 text-blue-900 text-lg max-w-md leading-relaxed">
            E-Magang BPOM Padang adalah platform resmi untuk pendaftaran,
            pengelolaan, dan pemantauan kegiatan magang. Memudahkan peserta
            mengakses informasi, mengunggah dokumen, dan berinteraksi dengan
            pembimbing secara praktis.
          </p>
        </div>

        {/* Kanan: Gambar */}
        <div className="md:w-1/2 flex justify-end mt-10 md:mt-0">
          <img
            src={aboutImg}
            alt="Tentang E-magang"
            className="w-[320px] md:w-[420px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
