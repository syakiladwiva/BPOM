// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import Logo from "../../assets/images/logo_bpom.jpg";
import { getCsrfCookie, login } from "../../services/loginServices"; // ✅ pakai loginService.js

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ Ambil CSRF dulu (wajib untuk Sanctum)
      await getCsrfCookie();

      // 2️⃣ Request login ke backend
      const res = await login(email, password);
      const data = res.data;

      if (!data.status) {
        alert(data.message || "Login gagal");
        return;
      }

      // 3️⃣ Simpan token + user info
      if (data.token) localStorage.setItem("token", data.token);
      if (data.user) {
        localStorage.setItem("role", data.user.role);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      // 4️⃣ Redirect sesuai role
      switch (data.user?.role) {
        case "admin":
          navigate("/AdminBeranda");
          break;
        case "pembimbing":
          navigate("/PembimbingBeranda");
          break;
        case "user":
          navigate("/UserBeranda");
          break;
        default:
          alert("Role tidak dikenali!");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert(
        err.response?.data?.message || "Terjadi kesalahan koneksi ke server!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f8ff]">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className="w-12 h-12" />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Enter your credentials to access your account.
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
            <Mail className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-transparent outline-none text-sm"
              required
            />
          </div>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
            <Lock className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full bg-transparent outline-none text-sm"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Lupa password */}
        <p className="mt-4 text-center text-sm text-gray-500">
          Forgot your password?{" "}
          <a
            href="/forgot-password"
            className="text-blue-600 hover:underline font-medium"
          >
            Reset Password
          </a>
        </p>
      </div>
    </div>
  );
}
