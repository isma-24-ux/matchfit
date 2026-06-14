import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#1F3552] leading-tight">
            Solusi Outfit
            <br />
            Tanpa Harus Membeli
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Sewa outfit sesuai acara, tampil stylish tanpa harus membeli.
            Praktis, hemat, dan ramah lingkungan.
          </p>

          <div className="flex gap-4 mt-8">

            <Link
              to="/catalog"
              className="bg-[#1F3552] text-white px-6 py-3 rounded-lg"
            >
              Jelajahi Outfit
            </Link>

            <Link
              to="/checkout"
              className="border border-[#1F3552] px-6 py-3 rounded-lg"
            >
              Cara Sewa
            </Link>

          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
            alt="Fashion"
            className="rounded-3xl shadow-lg"
          />
        </div>

      </section>

      {/* Fitur */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-[#1F3552]">
              Banyak Pilihan Outfit
            </h3>
            <p className="text-gray-600 mt-2">
              Sesuai berbagai acara.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-[#1F3552]">
              Ukuran Lengkap
            </h3>
            <p className="text-gray-600 mt-2">
              Tersedia berbagai ukuran.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-[#1F3552]">
              Antar & Ambil
            </h3>
            <p className="text-gray-600 mt-2">
              Fleksibel sesuai kebutuhan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-[#1F3552]">
              Aman & Terpercaya
            </h3>
            <p className="text-gray-600 mt-2">
              Outfit berkualitas.
            </p>
          </div>

        </div>

      </section>

      {/* Kategori */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-bold text-[#1F3552] mb-8">
          Kategori Acara
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">

          {[
            "Wisuda",
            "Seminar",
            "Kondangan",
            "Formal",
            "Organisasi",
            "Photoshoot"
          ].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}