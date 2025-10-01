// src/services/loginService.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
  withCredentials: true, // penting untuk Sanctum
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// 🔒 Ambil CSRF cookie
export const getCsrfCookie = () => API.get("/sanctum/csrf-cookie");

// 🔑 Login
export const login = (email, password) =>
  API.post("/api/login", { email, password });

// 🚪 Logout
export const logout = () => API.post("/api/logout");

// 📝 Register
export const register = (payload) => API.post("/api/register", payload);

export default API;
