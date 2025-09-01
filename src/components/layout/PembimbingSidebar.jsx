import { useState } from "react";
import {
  Home,
  Users,
  Clock,
  Folder,
  Calendar,
  FileText,
  BarChart2,
} from "lucide-react";

export default function PembimbingSidebar() {
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
                href="/PembimbingBeranda"
                className={`flex items-center p-2 rounded-lg ${
                  currentPath === "/PembimbingBeranda"
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
                href="/PembimbingUser"
                className={`flex items-center p-2 rounded-lg ${
                  currentPath === "/PembimbingUser"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Users className="w-5 h-5 mr-3" />
                Data User Bimbingan
              </a>
            </li>
            <li>
              <a
                href="/PembimbingRiwayat"
                className={`flex items-center p-2 rounded-lg ${
                  currentPath === "/PembimbingRiwayat"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Clock className="w-5 h-5 mr-3" />
                Riwayat Bimbingan
              </a>
            </li>
            <li>
              <a
                href="/PembimbingProyek"
                className={`flex items-center p-2 rounded-lg ${
                  currentPath === "/PembimbingProyek"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Folder className="w-5 h-5 mr-3" />
                Proyek
              </a>
            </li>
            <li>
              <a
                href="/PembimbingAbsensi"
                className={`flex items-center p-2 rounded-lg ${
                  currentPath === "/PembimbingAbsensi"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Calendar className="w-5 h-5 mr-3" />
                Absensi
              </a>
            </li>
            <li>
              <a
                href="/PembimbingNilai"
                className={`flex items-center p-2 rounded-lg ${
                  currentPath === "/PembimbingNilai"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <BarChart2 className="w-5 h-5 mr-3" />
                Nilai
              </a>
            </li>
            <li>
              <a
                href="/PembimbingKalender"
                className={`flex items-center p-2 rounded-lg ${
                  currentPath === "/PembimbingKalender"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Calendar className="w-5 h-5 mr-3" />
                Kalender
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}