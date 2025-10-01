import GuestBeranda from "./pages/guest/GuestBeranda";
import GuestDaftar from "./pages/guest/GuestDaftar";
import GuestCekStatus from "./pages/guest/GuestCekStatus";
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
import UserAbsensi from "./pages/user/UserAbsensi";
import UserKalender from "./pages/user/UserKalender";
import UserLogbook from "./pages/user/UserLogbook";
import UserNilai from "./pages/user/UserNilai";
import UserProfil from "./pages/user/UserProfil";
import UserProyek from "./pages/user/UserProyek";
import UserSertifikat from "./pages/user/UserSertifikat";
import AdminProfil from "./pages/admin/AdminProfil";
import PembimbingProfil from "./pages/pembimbing/PembimbingProfil";
import PembimbingProtes from "./pages/pembimbing/PembimbingProtes";
import PembimbingRiwayatNilai from "./pages/pembimbing/PembimbingRiwayatNilai";
import AdminPimpinan from "./pages/admin/AdminPimpinan";
import AdminKalender from "./pages/admin/AdminKalender"

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
          <Route path="/AdminProfil" element={<AdminProfil />} />
          <Route path="/AdminPimpinan" element={<AdminPimpinan />} />
          <Route path="/AdminKalender" element={<AdminKalender />} />
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
          <Route path="/PembimbingProfil" element={<PembimbingProfil />} />
          <Route path="/PembimbingProtes" element={<PembimbingProtes />} />
          <Route path="/PembimbingRiwayatNilai" element={<PembimbingRiwayatNilai />} />
        </Route>

        {/* User */}
        <Route element={<UserLayout />}>
          <Route path="/UserBeranda" element={<UserBeranda />} />
          <Route path="/UserAbsensi" element={<UserAbsensi />} />
          <Route path="/UserKalender" element={<UserKalender />} />
          <Route path="/UserLogbook" element={<UserLogbook />} />
          <Route path="UserNilai" element={<UserNilai />} />
          <Route path="UserProfil" element={<UserProfil />} />
          <Route path="UserProyek" element={<UserProyek />} />
          <Route path="UserSertifikat" element={<UserSertifikat />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
