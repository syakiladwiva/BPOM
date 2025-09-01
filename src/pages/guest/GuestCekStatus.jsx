import { useState } from "react";
// (opsional) ganti path gambar di bawah ini agar sesuai dengan aset kamu
import cekStatusImg from "../../assets/images/cewek_guest.png";
// Jika belum pakai lucide-react, hapus import di bawah & icon pada ResultCard
import { CheckCircle2, Clock, XCircle } from "lucide-react";

export default function GuestCekStatus() {
  const [nik, setNik] = useState("");
  const [nim, setNim] = useState("");
  const [errors, setErrors] = useState({ nik: "", nim: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // { status: 'diproses'|'diterima'|'ditolak', keterangan?: string }

  const validate = () => {
    const e = { nik: "", nim: "" };
    if (!nik.trim()) e.nik = "NIK wajib diisi.";
    // Validasi dasar NIK 16 digit (opsional – silakan sesuaikan)
    if (nik && !/^\d{16}$/.test(nik)) e.nik = "NIK harus 16 digit angka.";

    if (!nim.trim()) e.nim = "NIM wajib diisi.";
    setErrors(e);
    return !e.nik && !e.nim;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);
    if (!validate()) return;

    setLoading(true);
    try {
      // === Ganti blok ini dengan API kamu ===
      // Contoh mock: tentukan status berdasar digit terakhir NIK
      const last = Number(nik.slice(-1));
      const status =
        last % 3 === 0 ? "diterima" : last % 3 === 1 ? "diproses" : "ditolak";
      await new Promise((r) => setTimeout(r, 600)); // efek loading kecil
      setResult({
        status,
        keterangan:
          status === "diterima"
            ? "Selamat! Berkas kamu lolos verifikasi."
            : status === "diproses"
            ? "Permohonan sedang ditinjau oleh panitia."
            : "Maaf, permohonan belum dapat diterima.",
      });
      // =======================================
    } finally {
      setLoading(false);
    }
  };

  const ResultCard = () => {
    if (!result) return null;

    const map = {
      diproses: {
        label: "Diproses",
        icon: <Clock className="w-5 h-5" />,
        cls: "bg-yellow-50 text-yellow-800 border-yellow-200",
      },
      diterima: {
        label: "Diterima",
        icon: <CheckCircle2 className="w-5 h-5" />,
        cls: "bg-green-50 text-green-800 border-green-200",
      },
      ditolak: {
        label: "Ditolak",
        icon: <XCircle className="w-5 h-5" />,
        cls: "bg-red-50 text-red-800 border-red-200",
      },
    };

    const m = map[result.status];
    return (
      <div className={`mt-6 border rounded-xl p-4 ${m.cls}`}>
        <div className="flex items-center gap-2 font-semibold">
          {m.icon}
          <span>Status: {m.label}</span>
        </div>
        <p className="text-sm mt-1">{result.keterangan}</p>
      </div>
    );
  };

  return (
    <section className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Kiri: Teks + Form */}
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 leading-tight">
              CEK STATUS MAGANG BPOM PADANG
            </h1>
            <p className="mt-3 text-blue-900/90">
              Masukkan <span className="font-semibold">NIK</span> dan{" "}
              <span className="font-semibold">NIM</span> untuk mengecek status
              pendaftaran magang.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm max-w-xl"
            >
              {/* NIK */}
              <div className="mb-4">
                <label
                  htmlFor="nik"
                  className="block text-sm font-semibold text-blue-900 mb-1"
                >
                  NIK
                </label>
                <input
                  id="nik"
                  name="nik"
                  inputMode="numeric"
                  maxLength={16}
                  value={nik}
                  onChange={(e) => setNik(e.target.value.replace(/[^\d]/g, ""))}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  placeholder="Masukkan NIK (16 digit)"
                />
                {errors.nik && (
                  <p className="mt-1 text-sm text-red-600">{errors.nik}</p>
                )}
              </div>

              {/* NIM */}
              <div className="mb-6">
                <label
                  htmlFor="nim"
                  className="block text-sm font-semibold text-blue-900 mb-1"
                >
                  NIM
                </label>
                <input
                  id="nim"
                  name="nim"
                  value={nim}
                  onChange={(e) => setNim(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
                  placeholder="Masukkan NIM"
                />
                {errors.nim && (
                  <p className="mt-1 text-sm text-red-600">{errors.nim}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-900 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 disabled:opacity-60"
              >
                {loading ? "Memeriksa..." : "Cek Status"}
              </button>

              {/* Hasil */}
              <ResultCard />
            </form>
          </div>

          {/* Kanan: Ilustrasi */}
          <div className="hidden md:block md:w-1/3">
            <img
              src={cekStatusImg}
              alt="Cek Status Magang"
              className="w-full max-w-xs mx-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
