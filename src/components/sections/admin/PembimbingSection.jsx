import { useState } from "react";

const dummyPembimbing = [
  {
    id: 1,
    nama: "Budi Santoso",
    divisi: "IT Support",
    nohp: "08123456789",
    email: "budi@email.com",
    users: ["Andi Pratama", "Siti Aisyah"],
  },
  {
    id: 2,
    nama: "Rina Marlina",
    divisi: "Finance",
    nohp: "08987654321",
    email: "rina@email.com",
    users: ["Siti Aisyah"],
  },
];

const dummyDivisi = [
  { id: 1, nama: "IT Support" },
  { id: 2, nama: "Finance" },
  { id: 3, nama: "Marketing" },
];

export default function PembimbingSection() {
  const [pembimbing, setPembimbing] = useState(dummyPembimbing);
  const [divisi] = useState(dummyDivisi);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const addPembimbing = (newPembimbing) => {
    setPembimbing((prev) => [
      ...prev,
      { ...newPembimbing, id: prev.length + 1, users: [] },
    ]);
  };

  return (
    <section>
      <div className="mb-4">
        <button
          onClick={() => setIsAddOpen(true)}
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
        >
          + Tambah Pembimbing
        </button>
      </div>

      {/* Table Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Nama</th>
              <th className="p-2 border">Divisi</th>
              <th className="p-2 border">Jumlah User</th>
              <th className="p-2 border">No HP</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {pembimbing.map((p) => (
              <tr key={p.id} className="text-center">
                <td className="p-2 border">{p.nama}</td>
                <td className="p-2 border">{p.divisi}</td>
                <td className="p-2 border">{p.users.length}</td>
                <td className="p-2 border">{p.nohp}</td>
                <td className="p-2 border">{p.email}</td>
                <td className="p-2 border space-x-2">
                  <button className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800">
                    Detail
                  </button>
                  <button className="px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800">
                    Edit / Assign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card Mobile */}
      <div className="grid gap-4 md:hidden">
        {pembimbing.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-lg shadow p-4 border text-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-blue-900">{p.nama}</h2>
              <span className="text-xs px-2 py-1 rounded bg-gray-200">
                {p.divisi}
              </span>
            </div>
            <p>
              <b>No HP:</b> {p.nohp}
            </p>
            <p>
              <b>Email:</b> {p.email}
            </p>
            <p>
              <b>User Dibimbing:</b> {p.users.length}
            </p>
            <div className="flex gap-2 mt-3">
              <button className="flex-1 px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800">
                Detail
              </button>
              <button className="flex-1 px-3 py-1 bg-blue-900 text-white rounded hover:bg-blue-800">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Tambah Pembimbing */}
      {isAddOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-sm mx-2 sm:mx-0">
            <h2 className="text-xl font-semibold mb-4 text-blue-900">
              Tambah Pembimbing
            </h2>
            <TambahPembimbingForm
              divisi={divisi}
              onSave={(data) => {
                addPembimbing(data);
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

function TambahPembimbingForm({ divisi, onSave, onCancel }) {
  const [form, setForm] = useState({
    nama: "",
    divisi: "",
    nohp: "",
    email: "",
  });

  return (
    <div className="space-y-3">
      <div>
        <label className="block font-medium">Nama</label>
        <input
          type="text"
          value={form.nama}
          onChange={(e) => setForm({ ...form, nama: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Divisi</label>
        <select
          value={form.divisi}
          onChange={(e) => setForm({ ...form, divisi: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Pilih Divisi --</option>
          {divisi.map((d) => (
            <option key={d.id} value={d.nama}>
              {d.nama}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block font-medium">No HP</label>
        <input
          type="text"
          value={form.nohp}
          onChange={(e) => setForm({ ...form, nohp: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block font-medium">Email</label>
        <input
          type="text"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 border rounded"
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
