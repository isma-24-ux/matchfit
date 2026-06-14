import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-red-500">
          Produk tidak ditemukan
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <div className="grid md:grid-cols-2 gap-10">

        {/* Gambar Produk */}
        <img
          src={product.image}
          alt={product.name}
          className="rounded-2xl shadow w-full h-[500px] object-cover"
        />

        {/* Detail Produk */}
        <div>

          <h1 className="text-4xl font-bold text-[#1F3552]">
            {product.name}
          </h1>

          <p className="text-2xl mt-4 text-gray-700">
            Rp{product.price.toLocaleString("id-ID")} / hari
          </p>

          {/* Ukuran */}
          <h3 className="font-semibold mt-8 mb-3">
            Pilih Ukuran
          </h3>

          <div className="flex gap-3 flex-wrap">

            {["S", "M", "L", "XL"].map((size) => (

              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-lg transition
                ${
                  selectedSize === size
                    ? "bg-[#1F3552] text-white border-[#1F3552]"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {size}
              </button>

            ))}

          </div>

          <p className="mt-3 text-gray-600">
            Ukuran dipilih:
            <span className="font-semibold ml-2">
              {selectedSize || "-"}
            </span>
          </p>

          {/* Warna */}
          <h3 className="font-semibold mt-8 mb-3">
            Pilih Warna
          </h3>

          <div className="flex gap-3 flex-wrap">

            {product.colors?.map((color) => (

              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2 border rounded-lg transition
                ${
                  selectedColor === color
                    ? "bg-[#1F3552] text-white border-[#1F3552]"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {color}
              </button>

            ))}

          </div>

          <p className="mt-3 text-gray-600">
            Warna dipilih:
            <span className="font-semibold ml-2">
              {selectedColor || "-"}
            </span>
          </p>

          {/* Deskripsi */}
          <h3 className="font-semibold mt-8 mb-3">
            Deskripsi
          </h3>

          <p className="text-gray-600 leading-7">
            Outfit ini cocok digunakan untuk seminar,
            wisuda, organisasi, kondangan, maupun
            acara formal lainnya. Seluruh outfit telah
            melalui proses pengecekan kualitas dan
            perawatan sebelum disewakan.
          </p>

          {/* Tombol Sewa */}
          {selectedSize && selectedColor ? (

            <Link
              to="/checkout"
              state={{
                product,
                selectedSize,
                selectedColor,
              }}
              className="inline-block mt-8 bg-[#1F3552] text-white px-8 py-3 rounded-lg hover:bg-[#16283f]"
            >
              Sewa Sekarang
            </Link>

          ) : (

            <button
              disabled
              className="mt-8 bg-gray-400 text-white px-8 py-3 rounded-lg cursor-not-allowed"
            >
              Pilih Ukuran & Warna Dulu
            </button>

          )}

        </div>

      </div>

    </div>
  );
}