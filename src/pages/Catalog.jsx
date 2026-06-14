import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function Catalog() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold text-[#1F3552] mb-8">
        Katalog Outfit
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-60 w-full object-cover"
            />

            <div className="p-4">

              <h3 className="font-semibold text-[#1F3552]">
                {product.name}
              </h3>

             <p className="text-2xl mt-4 text-gray-700">
  Rp{product.price.toLocaleString("id-ID")} / hari
</p>

            <Link
              to={`/product/${product.id}`}
              className="block text-center w-full mt-4 bg-[#1F3552] text-white py-2 rounded-lg"
            >
                Detail
            </Link>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}