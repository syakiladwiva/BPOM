import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import Logo from "../../assets/images/logo_bpom.jpg";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy data login
    if (email === "admin" && password === "admin1234") {
      navigate("/AdminBeranda");
    } else if (email === "pembimbing" && password === "pembimbing1234") {
      navigate("/PembimbingBeranda");
    } else if (email === "user" && password === "user1234") {
      navigate("/UserBeranda");
    } else {
      alert("Username atau Password salah!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f8ff]">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className="w-12 h-12" />
        </div>

        {/* Judul */}
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
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your username"
              className="w-full bg-transparent outline-none text-sm"
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
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
          >
            Sign In
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