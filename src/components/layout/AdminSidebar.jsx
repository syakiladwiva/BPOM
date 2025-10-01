import { useState } from "react";
import {
  Home,
  Users,
  User,
  FileText,
  BarChart2,
  Settings,
  UserCircle,
  Briefcase,
  CalendarDays, // 👉 tambahkan icon kalender
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

export default function AdminSidebar() {
  const [open, setOpen] = useState(false);
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
                to="/AdminBeranda"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/AdminBeranda"
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
                to="/AdminPelamar"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/AdminPelamar"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Users className="w-5 h-5 mr-3" />
                Pelamar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AdminUser"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/AdminUser"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <User className="w-5 h-5 mr-3" />
                User
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AdminPembimbing"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/AdminPembimbing"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <User className="w-5 h-5 mr-3" />
                Pembimbing dan Divisi
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AdminSertifikat"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/AdminSertifikat"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <FileText className="w-5 h-5 mr-3" />
                Sertifikat
              </NavLink>
            </li>

            {/* ✅ Menu baru Pimpinan */}
            <li>
              <NavLink
                to="/AdminPimpinan"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/AdminPimpinan"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Briefcase className="w-5 h-5 mr-3" />
                Pimpinan
              </NavLink>
            </li>

            {/* ✅ Menu baru Agenda */}
            <li>
              <NavLink
                to="/AdminKalender"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/AdminKalender"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <CalendarDays className="w-5 h-5 mr-3" />
                Agenda
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/AdminLaporan"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/AdminLaporan"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <BarChart2 className="w-5 h-5 mr-3" />
                Laporan dan Riwayat
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AdminKelola"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/AdminKelola"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Settings className="w-5 h-5 mr-3" />
                Kelola Akun
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/AdminProfil"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/AdminProfil"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <UserCircle className="w-5 h-5 mr-3" />
                Profil
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
