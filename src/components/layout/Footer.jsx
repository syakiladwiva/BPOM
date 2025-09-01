import map_icon from "../../assets/images/map_icon.png";
import call_icon from "../../assets/images/call_icon.png";
import twitter_logo from "../../assets/images/twitter_logo.png";
import youtube_logo from "../../assets/images/youtube_logo.png";
import instagram_logo from "../../assets/images/instagram_logo.png";
import facebook_logo from "../../assets/images/facebook_logo.png";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white w-full">
      <div className="max-w-7xl mx-auto w-full px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-white/30">
        {/* BPOM Padang */}
        <div>
          <h2 className="text-lg font-semibold mb-3">BPOM Padang</h2>
          <div className="flex items-start gap-2">
            <img src={map_icon} alt="map" className="w-5 h-5 mt-1" />
            <p className="text-sm leading-relaxed">
              Jalan Gajah Mada, Gunung Pangilun, Nanggalo, Gn. Pangilun,
              <br />
              Kec. Padang Utara, Kota Padang,
              <br />
              Sumatera Barat 25173
            </p>
          </div>
        </div>

        {/* Kontak */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Kontak</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <img src={call_icon} alt="phone" className="w-5 h-5" />
              (xxxx) xxxxxx
            </li>
            <li className="flex items-center gap-2">
              <img src={twitter_logo} alt="twitter" className="w-5 h-5" />
              @bbpom_padang
            </li>
            <li className="flex items-center gap-2">
              <img src={youtube_logo} alt="youtube" className="w-5 h-5" />
              @balaibesarpomdipadang4670
            </li>
            <li className="flex items-center gap-2">
              <img src={instagram_logo} alt="instagram" className="w-5 h-5" />
              (xxxx) xxxxxx
            </li>
            <li className="flex items-center gap-2">
              <img src={facebook_logo} alt="facebook" className="w-5 h-5" />
              (xxxx) xxxxxx
            </li>
          </ul>
        </div>

        {/* Pengunjung */}
        <div className="flex flex-col justify-center md:justify-start">
          <h2 className="text-lg font-semibold mb-3">Pengunjung</h2>
          <p className="text-sm">Hari ini : 101</p>
          <p className="text-sm">Bulan ini : 13251</p>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="max-w-7xl mx-auto w-full px-6 py-4 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 text-sm">
        <a href="/" className="hover:underline">
          Beranda
        </a>
        <a href="/Daftar" className="hover:underline">
          Daftar
        </a>
        <a href="Status" className="hover:underline">
          Cek Status
        </a>
      </div>
    </footer>
  );
}