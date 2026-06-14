import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-3xl font-bold text-[#1F3552]"
        >
          MatchFit
        </Link>

        <div className="flex gap-8">

          <Link to="/">Beranda</Link>

          <Link to="/catalog">Katalog</Link>

          <Link to="/about">Tentang Kami</Link>

        </div>

        <Link
          to="/login"
          className="bg-[#1F3552] text-white px-5 py-2 rounded-lg"
        >
          Login
        </Link>

      </div>

    </nav>
  );
}