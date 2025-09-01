import GuestBeranda from "./pages/guest/GuestBeranda";
import GuestDaftar from "./pages/guest/GuestDaftar";
import GuestCekStatus from "./pages/guest/GuestCekStatus";
import GuestDownload from "./pages/guest/GuestDownload";
import AdminBeranda from "./pages/admin/AdminBeranda";
import GuestLayout from "./components/GuestLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminLayout from "./components/AdminLayout";
import Login from "./pages/auth/login";
import PembimbingBeranda from "./pages/pembimbing/PembimbingBeranda";
import UserBeranda from "./pages/user/UserBeranda";
import AdminKelola from "./pages/admin/AdminKelola";
import AdminLaporan from "./pages/admin/AdminLaporan";
import AdminPelamar from "./pages/admin/AdminPelamar";
import AdminPembimbing from "./pages/admin/AdminPembimbing";
import AdminSertifikat from "./pages/admin/AdminSertifikat";
import AdminUser from "./pages/admin/AdminUser";
import PembimbingLayout from "./components/PembimbingLayout";
import UserLayout from "./components/UserLayout";
import PembimbingAbsensi from "./pages/pembimbing/PembimbingAbsensi";
import PembimbingKalender from "./pages/pembimbing/PembimbingKalender";
import PembimbingNilai from "./pages/pembimbing/PembimbingNilai";
import PembimbingProyek from "./pages/pembimbing/PembimbingProyek";
import PembimbingRiwayat from "./pages/pembimbing/PembimbingRiwayat";
import PembimbingUser from "./pages/pembimbing/PembimbingUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />

        {/* Guest */}
        <Route element={<GuestLayout />}>
          <Route path="/" element={<GuestBeranda />} />
          <Route path="/Daftar" element={<GuestDaftar />} />
          <Route path="/Status" element={<GuestCekStatus />} />
          <Route path="/Download" element={<GuestDownload />} />
        </Route>

        {/* Admin */}
        <Route element={<AdminLayout />}>
          <Route path="/AdminBeranda" element={<AdminBeranda />} />
          <Route path="/AdminKelola" element={<AdminKelola />} />
          <Route path="/AdminLaporan" element={<AdminLaporan />} />
          <Route path="/AdminPelamar" element={<AdminPelamar />} />
          <Route path="/AdminPembimbing" element={<AdminPembimbing />} />
          <Route path="/AdminSertifikat" element={<AdminSertifikat />} />
          <Route path="/AdminUser" element={<AdminUser />} />
        </Route>

        {/* Pembimbing */}
        <Route element={<PembimbingLayout />}>
          <Route path="/PembimbingBeranda" element={<PembimbingBeranda />} />
          <Route path="/PembimbingAbsensi" element={<PembimbingAbsensi />} />
          <Route path="/PembimbingKalender" element={<PembimbingKalender />} />
          <Route path="/PembimbingNilai" element={<PembimbingNilai />} />
          <Route path="/PembimbingProyek" element={<PembimbingProyek />} />
          <Route path="/PembimbingRiwayat" element={<PembimbingRiwayat />} />
          <Route path="/PembimbingUser" element={<PembimbingUser />} />
        </Route>

        {/* User */}
        <Route element={<UserLayout />}>
          <Route path="/UserBeranda" element={<UserBeranda />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
