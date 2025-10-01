// src/pages/Grafik.jsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function GrafikSection() {
  // Data divisi + kuota pemagang
  const data = [
    { divisi: "Administrasi", kuota: 10 },
    { divisi: "Keuangan", kuota: 8 },
    { divisi: "SDM", kuota: 6 },
    { divisi: "Pengawasan", kuota: 12 },
    { divisi: "Laboratorium", kuota: 15 },
    { divisi: "IT & Data", kuota: 7 },
  ];

  return (
    <div className="p-6 bg-white shadow rounded-xl">
      <h2 className="text-xl font-bold mb-4 text-center">
        Kuota Pemagang per Divisi BPOM
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="divisi" angle={-15} textAnchor="end" interval={0} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="kuota" fill="#4F46E5" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
