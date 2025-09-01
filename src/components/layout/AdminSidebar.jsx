import { useState } from "react";
import { Home, Users, User, FileText, BarChart2, Settings } from "lucide-react";

export default function AdminSidebar() {
  const [open, setOpen] = useState(false);
  const currentPath = window.location.pathname; // path aktif

  return (
    <div className="flex">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden 
        hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform 
          bg-blue-900 text-white ${
            open ? "translate-x-0" : "-translate-x-full"
          } sm:translate-x-0`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          {/* Logo / Title */}
          <div className="flex items-center justify-center mb-6">
            <span className="text-lg font-bold tracking-wide">E-MAGANG</span>
          </div>

          {/* Menu List */}
          <ul className="space-y-2 text-sm font-medium">
            <li>
              <a
                href="/AdminBeranda"
                className={`flex items-center p-2 rounded-lg ${
                  currentPath === "/AdminBeranda"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Home className="w-5 h-5 mr-3" />
                Beranda
              </a>
            </li>
            <li>
              <a
                href="/AdminPelamar"
                className={`flex items-center p-2 rounded-lg ${
                  currentPath === "/AdminPelamar"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Users className="w-5 h-5 mr-3" />
                Pelamar
              </a>
            </li>
            <li>
              <a
                href="/AdminUser"
                className={`flex items-center p-2 rounded-lg ${
                  currentPath === "/AdminUser" ? "bg-blue-700" : "hover:bg-blue-700"
                }`}
              >
                <User className="w-5 h-5 mr-3" />
                User
              </a>
            </li>
            <li>
              <a
                href="/AdminPembimbing"
                className={`flex items-center p-2 rounded-lg ${
                  currentPath === "/AdminPembimbing"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <User className="w-5 h-5 mr-3" />
                Pembimbing
              </a>
            </li>
            <li>
              <a
                href="/AdminSertifikat"
                className={`flex items-center p-2 rounded-lg ${
                  currentPath === "/AdminSertifikat"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <FileText className="w-5 h-5 mr-3" />
                Sertifikat
              </a>
            </li>
            <li>
              <a
                href="/AdminLaporan"
                className={`flex items-center p-2 rounded-lg ${
                  currentPath === "/AdminLAporan"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <BarChart2 className="w-5 h-5 mr-3" />
                Laporan dan Riwayat
              </a>
            </li>
            <li>
              <a
                href="/AdminKelola"
                className={`flex items-center p-2 rounded-lg ${
                  currentPath === "/AdminKelola"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Settings className="w-5 h-5 mr-3" />
                Kelola Akun
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      {/* <div className="p-4 sm:ml-64 w-full">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg">
          <h1 className="text-xl font-bold text-gray-700">Halaman Konten</h1>
        </div>
      </div> */}
    </div>
  );
}
