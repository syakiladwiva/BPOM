import { useState } from "react";

const dummyDivisi = [
  { id: 1, nama: "IT Support", kuota: 2, maxKuota: 5 },
  { id: 2, nama: "Finance", kuota: 1, maxKuota: 3 },
  { id: 3, nama: "Marketing", kuota: 3, maxKuota: 4 },
  { id: 4, nama: "HR", kuota: 1, maxKuota: 2 },
  { id: 5, nama: "Operations", kuota: 4, maxKuota: 6 },
];

export default function DivisiSection() {
  const [divisi, setDivisi] = useState(dummyDivisi);
  const [isAddOpen, setIsAddOpen] = useState(false);

  // Tambah divisi baru (kuota awal = 0)
  const addDivisi = (newDivisi) => {
    setDivisi((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        nama: newDivisi.nama,
        kuota: 0, // selalu mulai dari 0
        maxKuota: Number(newDivisi.maxKuota) || 0,
      },
    ]);
  };

  return (
    <section>
      <div className="mb-4">
        <button
          onClick={() => setIsAddOpen(true)}
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
        >
          + Tambah Divisi
        </button>
      </div>

      {/* Table Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">No</th>
              <th className="p-2 border">Nama Divisi</th>
              <th className="p-2 border">Kuota Pemagang</th>
              <th className="p-2 border">Maksimal Kuota</th>
            </tr>
          </thead>
          <tbody>
            {divisi.map((d, i) => (
              <tr key={d.id} className="text-center">
                <td className="p-2 border">{i + 1}</td>
                <td className="p-2 border">{d.nama}</td>
                <td className="p-2 border">{d.kuota}</td>
                <td className="p-2 border">{d.maxKuota}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card Mobile */}
      <div className="grid gap-4 md:hidden">
        {divisi.map((d, i) => (
          <div
            key={d.id}
            className="bg-white rounded-lg shadow p-4 border text-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-blue-900">{d.nama}</h2>
              <span className="text-xs px-2 py-1 rounded bg-gray-200">
                No: {i + 1}
              </span>
            </div>
            <p className="text-gray-700 text-sm">
              Kuota: <span className="font-semibold">{d.kuota}</span> /{" "}
              <span className="font-semibold">{d.maxKuota}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Modal Tambah Divisi */}
      {isAddOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm mx-2 sm:mx-0">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">
              Tambah Divisi
            </h2>
            <TambahDivisiForm
              onSave={(data) => {
                addDivisi(data);
                setIsAddOpen(false);
              }}
              onCancel={() => setIsAddOpen(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
}

function TambahDivisiForm({ onSave, onCancel }) {
  const [form, setForm] = useState({
    nama: "",
    maxKuota: "",
  });

  return (
    <div className="space-y-3">
      <div>
        <label className="block font-medium">Nama Divisi</label>
        <input
          type="text"
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
          className="w-full p-2 border rounded"
          placeholder="Masukkan nama divisi"
        />
      </div>
      <div>
        <label className="block font-medium">Maksimal Kuota</label>
        <input
          type="number"
          value={form.maxKuota}
          onChange={(e) => setForm({ ...form, maxKuota: e.target.value })}
          className="w-full p-2 border rounded"
          placeholder="Masukkan maksimal kuota"
        />
      </div>
      <div className="mt-4 text-right space-x-2">
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Batal
        </button>
        <button
          onClick={() => onSave(form)}
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
        >
          Simpan
        </button>
      </div>
    </div>
  );
}
