// src/services/magangService.js
const API_URL = "http://localhost:8000/api";

export const magangService = {
  async register(payload) {
    try {
      const isFormData = payload instanceof FormData;

      const res = await fetch(`${API_URL}/magang`, {
        method: "POST",
        body: isFormData ? payload : JSON.stringify(payload),
        headers: {
          Accept: "application/json", // 🔑 WAJIB supaya Laravel tau ini request API
          ...(isFormData ? {} : { "Content-Type": "application/json" }),
        },
      });

      const result = await res.json();

      if (!res.ok) {
        throw {
          status: res.status,
          message: result.message || "Terjadi kesalahan saat mendaftar magang",
          errors: result.errors || null,
        };
      }

      return result;
    } catch (err) {
      console.error("❌ Error magangService.register:", err);
      throw err;
    }
  },
};

export default magangService;
