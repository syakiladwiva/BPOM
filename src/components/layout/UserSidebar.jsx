import { useState } from "react";
import {
  Home,
  BookOpen,
  Calendar,
  ClipboardList,
  FileText,
  Star,
  Settings,
  ListChecks,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

export default function UserSidebar() {
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
                to="/UserBeranda"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/UserBeranda"
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
                to="/UserProyek"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/UserProyek"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <ClipboardList className="w-5 h-5 mr-3" />
                Proyek
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/UserAbsensi"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/UserAbsensi"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <BookOpen className="w-5 h-5 mr-3" />
                Absensi
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/UserKalender"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/UserKalender"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Calendar className="w-5 h-5 mr-3" />
                Kalender Kegiatan
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/UserNilai"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/UserNilai"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Star className="w-5 h-5 mr-3" />
                Nilai
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/UserLogbook"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/UserLogbook"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <ListChecks className="w-5 h-5 mr-3" />
                Logbook
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/UserSertifikat"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/UserSertifikat"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <FileText className="w-5 h-5 mr-3" />
                Sertifikat & Feedback
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/UserProfil"
                onClick={handleClose}
                className={`flex items-center p-2 rounded-lg ${
                  location.pathname === "/UserProfil"
                    ? "bg-blue-700"
                    : "hover:bg-blue-700"
                }`}
              >
                <Settings className="w-5 h-5 mr-3" />
                Profil
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
