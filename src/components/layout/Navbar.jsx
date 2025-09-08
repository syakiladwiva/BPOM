import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo_bpom.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Fungsi untuk menutup menu mobile
  const closeMobileMenu = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Navbar fixed */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-gray-200 shadow">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            onClick={closeMobileMenu} // Tutup menu ketika logo diklik
          >
            <img src={Logo} className="h-15 w-auto" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              E-magang
            </span>
          </a>

          {/* Toggle Button Mobile */}
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
            rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={open}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Menu Items */}
          <div
            className={`${open ? "block" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul
              className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg 
              bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse 
              md:mt-1 md:items-center md:border-0 
              md:bg-white"
            >
              {/* Beranda */}
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm md:p-0 ${
                      isActive
                        ? "text-white bg-blue-900 md:bg-transparent md:text-blue-900"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-900"
                    }`
                  }
                  onClick={closeMobileMenu} // Tutup menu ketika link diklik
                >
                  Beranda
                </NavLink>
              </li>

              {/* Daftar */}
              <li>
                <NavLink
                  to="/Daftar"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm md:p-0 ${
                      isActive
                        ? "text-white bg-blue-900 md:bg-transparent md:text-blue-900"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-900"
                    }`
                  }
                  onClick={closeMobileMenu} // Tutup menu ketika link diklik
                >
                  Daftar
                </NavLink>
              </li>

              {/* Cek Status */}
              <li>
                <NavLink
                  to="/Status"
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm md:p-0 ${
                      isActive
                        ? "text-white bg-blue-900 md:bg-transparent md:text-blue-900"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-900"
                    }`
                  }
                  onClick={closeMobileMenu} // Tutup menu ketika link diklik
                >
                  Cek Status
                </NavLink>
              </li>

              {/* Login Button */}
              <li>
                <a
                  href="/Login"
                  className="flex items-center justify-center gap-2 px-5 py-2 text-white bg-blue-900
                  rounded-full hover:bg-blue-800 transition-colors"
                  onClick={closeMobileMenu} // Tutup menu ketika button login diklik
                >
                  Login <ArrowRight size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer biar konten gak ketutup navbar */}
      <div className="pt-20"></div>
    </>
  );
}