// src/pages/UserSertifikat.jsx
import React, { useState } from "react";
import {
  UserCircle,
  Star,
  Lock,
  FileDown,
  MessageSquareText,
  GraduationCap,
} from "lucide-react";

const UserSertifikat = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [pendapat, setPendapat] = useState("");
  const [saran, setSaran] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !pendapat.trim()) {
      return alert("Harap isi rating dan pendapat terlebih dahulu!");
    }
    setFeedbackSubmitted(true);
    alert("Terima kasih atas feedback Anda! Sertifikat sekarang bisa diunduh.");
  };

  const handleDownload = () => {
    alert("📄 Sertifikat berhasil diunduh dan juga dikirim ke email Anda.");
    // TODO: integrasi backend untuk generate dan kirim sertifikat
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-2xl font-semibold text-blue-900">
          Sertifikat & Feedback
        </h1>
        <div className="flex items-center gap-2 text-gray-700">
          <UserCircle className="w-6 h-6 text-blue-900" />
          <span>User</span>
        </div>
      </div>

      {/* Feedback Form */}
      {!feedbackSubmitted && (
        <div className="bg-white shadow rounded-lg p-6 mb-6 border">
          <h3 className="font-semibold mb-3 text-blue-900 flex items-center gap-2">
            <MessageSquareText className="w-5 h-5 text-blue-900" />
            Feedback Program Magang
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Rating */}
            <div>
              <label className="block mb-1 font-medium text-sm text-blue-900">
                Rating Layanan E-Magang
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-6 h-6 cursor-pointer ${
                      (hover || rating) >= star
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(null)}
                  />
                ))}
              </div>
            </div>

            {/* Pendapat */}
            <div>
              <label className="block mb-1 font-medium text-sm text-blue-900">
                Pendapat tentang program magang
              </label>
              <textarea
                value={pendapat}
                onChange={(e) => setPendapat(e.target.value)}
                className="w-full border rounded p-2 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                placeholder="Tulis pengalaman Anda..."
                rows="3"
              />
            </div>

            {/* Saran */}
            <div>
              <label className="block mb-1 font-medium text-sm text-blue-900">
                Masukan dan Saran (opsional)
              </label>
              <textarea
                value={saran}
                onChange={(e) => setSaran(e.target.value)}
                className="w-full border rounded p-2 text-sm focus:ring-2 focus:ring-blue-900 focus:outline-none"
                placeholder="Saran untuk program..."
                rows="2"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 text-sm"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      )}

      {/* Download Sertifikat */}
      <div className="bg-white shadow rounded-lg p-6 border">
        <h3 className="font-semibold mb-3 text-blue-900 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-blue-900" />
          Download Sertifikat
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          {feedbackSubmitted
            ? "Feedback sudah diberikan. Silakan unduh sertifikat Anda."
            : "Anda harus mengisi feedback terlebih dahulu sebelum bisa mengunduh sertifikat."}
        </p>
        <button
          onClick={handleDownload}
          disabled={!feedbackSubmitted}
          className={`flex items-center gap-2 px-4 py-2 rounded text-sm ${
            feedbackSubmitted
              ? "bg-blue-900 text-white hover:bg-blue-800"
              : "bg-gray-300 text-white cursor-not-allowed"
          }`}
        >
          {feedbackSubmitted ? (
            <>
              <FileDown className="w-4 h-4" /> Download Sertifikat
            </>
          ) : (
            <>
              <Lock className="w-4 h-4" /> Terkunci
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default UserSertifikat;
