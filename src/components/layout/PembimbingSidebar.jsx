// src/components/PembimbingSidebar.jsx
import { useState } from "react";
import {
  Home,
  Users,
  Clock,
  Folder,
  Calendar,
  BarChart2,
  User,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

export default function PembimbingSidebar() {
  const [open, setOpen] = useState(false);
  const [openNilai, setOpenNilai] = useState(false); // untuk dropdown nilai
  const location = useLocation();

  // Tutup sidebar otomatis setelah pilih menu (khusus mobile)
  const handleClose = () => {
    if (window.innerWidth < 640) {
      setOpen(false);
    }
  };

  return (
    <div className="flex">
      {/* Toggle Button (Mobile) */}
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="fixed top-3 left-3 z-50 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden 
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
              <NavLink
                to="/PembimbingBeranda"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/PembimbingBeranda"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Home className="w-5 h-5 mr-3" />
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/PembimbingUser"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/PembimbingUser"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Users className="w-5 h-5 mr-3" />
                Data User Bimbingan
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/PembimbingRiwayat"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/PembimbingRiwayat"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Clock className="w-5 h-5 mr-3" />
                Riwayat Bimbingan
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/PembimbingProyek"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/PembimbingProyek"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Folder className="w-5 h-5 mr-3" />
                Proyek
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/PembimbingAbsensi"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/PembimbingAbsensi"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Calendar className="w-5 h-5 mr-3" />
                Absensi
              </NavLink>
            </li>

            {/* Dropdown Nilai */}
            <li>
              <button
                onClick={() => setOpenNilai(!openNilai)}
                className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-blue-700"
              >
                <div className="flex items-center">
                  <BarChart2 className="w-5 h-5 mr-3" />
                  Nilai
                </div>
                {openNilai ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {openNilai && (
                <ul className="ml-8 mt-2 space-y-1 text-sm">
                  <li>
                    <NavLink
                      to="/PembimbingNilai"
                      onClick={handleClose}
                      className={`block p-2 rounded-lg ${
                        location.pathname === "/PembimbingNilai"
                          ? "bg-blue-700"
                          : "hover:bg-blue-700"
                      }`}
                    >
                      Penilaian
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/PembimbingProtes"
                      onClick={handleClose}
                      className={`block p-2 rounded-lg ${
                        location.pathname === "/PembimbingProtes"
                          ? "bg-blue-700"
                          : "hover:bg-blue-700"
                      }`}
                    >
                      Komplain User
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/PembimbingRiwayatNilai"
                      onClick={handleClose}
                      className={`block p-2 rounded-lg ${
                        location.pathname === "/PembimbingRiwayatNilai"
                          ? "bg-blue-700"
                          : "hover:bg-blue-700"
                      }`}
                    >
                      Riwayat Penilaian
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink
                to="/PembimbingKalender"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/PembimbingKalender"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Calendar className="w-5 h-5 mr-3" />
                Kalender
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/PembimbingProfil"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/PembimbingProfil"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <User className="w-5 h-5 mr-3" />
                Profil
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}