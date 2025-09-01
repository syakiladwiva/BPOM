import { useState } from "react";
import { Upload } from "lucide-react";
import daftarImg from "../../assets/images/cewek_guest.png"; // sesuaikan path

export default function GuestDaftar() {
  const [formData, setFormData] = useState({
    nama: "",
    nik: "",
    nim: "",
    hp: "",
    universitas: "",
    alamatUniv: "",
    jurusan: "",
    semester: "",
    divisi: "",
    mulai: "",
    selesai: "",
    proposal: null,
    surat: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] || formData[key] === "") {
        newErrors[key] = "Wajib diisi";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return; // stop kalau ada error
    console.log("Form Submitted:", formData);
  };

  const Label = ({ children }) => (
    <label className="block text-sm font-semibold text-blue-900 mb-1">
      {children}
    </label>
  );

  const InputError = ({ message }) =>
    message ? <p className="text-sm text-red-600 mt-1">{message}</p> : null;

  return (
    <section className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Judul */}
        <div className="text-center md:text-left md:mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            FORMULIR PENDAFTARAN MAGANG <br /> BPOM PADANG
          </h1>
          <p className="mt-4 text-blue-900 text-base">
            Silahkan isi data diri dan kelengkapan dokumen <br /> untuk
            mendaftar program magang
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-2/3 bg-white shadow-md rounded-xl p-6 md:p-8 border border-gray-200"
          >
            {/* Data Diri */}
            <h2 className="font-bold text-blue-900 mb-4">Data Diri</h2>
            <div className="mb-4">
              <Label>Nama</Label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
              <InputError message={errors.nama} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <Label>NIK</Label>
                <input
                  type="text"
                  name="nik"
                  value={formData.nik}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
                <InputError message={errors.nik} />
              </div>
              <div>
                <Label>NIM</Label>
                <input
                  type="text"
                  name="nim"
                  value={formData.nim}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
                <InputError message={errors.nim} />
              </div>
              <div>
                <Label>Nomor HP</Label>
                <input
                  type="text"
                  name="hp"
                  value={formData.hp}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
                <InputError message={errors.hp} />
              </div>
            </div>

            {/* Data Pendidikan */}
            <h2 className="font-bold text-blue-900 mb-4">Data Pendidikan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label>Universitas / Sekolah</Label>
                <input
                  type="text"
                  name="universitas"
                  value={formData.universitas}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
                <InputError message={errors.universitas} />
              </div>
              <div>
                <Label>Alamat Universitas / Sekolah</Label>
                <input
                  type="text"
                  name="alamatUniv"
                  value={formData.alamatUniv}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
                <InputError message={errors.alamatUniv} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label>Jurusan</Label>
                <input
                  type="text"
                  name="jurusan"
                  value={formData.jurusan}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
                <InputError message={errors.jurusan} />
              </div>
              <div>
                <Label>Semester</Label>
                <input
                  type="text"
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
                <InputError message={errors.semester} />
              </div>
            </div>

            {/* Detail Magang */}
            <h2 className="font-bold text-blue-900 mb-4">Detail Magang</h2>
            <div className="mb-4">
              <Label>Divisi Tujuan</Label>
              <select
                name="divisi"
                value={formData.divisi}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="">Pilih Divisi</option>
                <option value="Divisi A">Divisi A</option>
                <option value="Divisi B">Divisi B</option>
              </select>
              <InputError message={errors.divisi} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <Label>Waktu Mulai</Label>
                <input
                  type="date"
                  name="mulai"
                  value={formData.mulai}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
                <InputError message={errors.mulai} />
              </div>
              <div>
                <Label>Waktu Selesai</Label>
                <input
                  type="date"
                  name="selesai"
                  value={formData.selesai}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
                <InputError message={errors.selesai} />
              </div>
            </div>

            {/* Dokumen Pendukung */}
            <h2 className="font-bold text-blue-900 mb-4">Dokumen Pendukung</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <Label>Unggah Proposal</Label>
                <label className="flex items-center gap-2 border rounded-lg px-4 py-2 cursor-pointer bg-gray-50">
                  <Upload className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-600">Pilih file...</span>
                  <input
                    type="file"
                    name="proposal"
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>
                <InputError message={errors.proposal} />
              </div>
              <div>
                <Label>Unggah Surat Permohonan</Label>
                <label className="flex items-center gap-2 border rounded-lg px-4 py-2 cursor-pointer bg-gray-50">
                  <Upload className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-600">Pilih file...</span>
                  <input
                    type="file"
                    name="surat"
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>
                <InputError message={errors.surat} />
              </div>
            </div>

            {/* Tombol */}
            <button
              type="submit"
              className="w-full bg-blue-900 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Daftar Sekarang
            </button>
          </form>

          {/* Gambar */}
          <div className="hidden md:block md:w-1/3">
            <img
              src={daftarImg}
              alt="Daftar Magang"
              className="w-full max-w-sm mx-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}