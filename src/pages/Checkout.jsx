import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Checkout() {
  const location = useLocation();
const [buktiTransfer, setBuktiTransfer] = useState(null);
  const product = location.state?.product;
  const selectedColor = location.state?.selectedColor;
  const selectedSize = location.state?.selectedSize;

  const [paymentMethod, setPaymentMethod] = useState("");

  const [nama, setNama] = useState("");
  const [nomorWa, setNomorWa] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tanggalSewa, setTanggalSewa] = useState("");
  const [durasi, setDurasi] = useState(1);
const [metodePengambilan, setMetodePengambilan] =
  useState("Diantar");
 const ongkir =
  metodePengambilan === "Diantar"
    ? 5000
    : 0;

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-red-500">
          Belum ada produk yang dipilih
        </h1>

        <p className="mt-4 text-gray-600">
          Silakan pilih produk terlebih dahulu dari katalog.
        </p>
      </div>
    );
  }

 const hargaPerHari = product.price;

const hargaProduk = hargaPerHari * durasi;

const total = hargaProduk + ongkir;

  const handleBayar = () => {

  if (
    !nama ||
    !nomorWa ||
    !email ||
    !alamat ||
    !tanggalSewa
  ) {
    alert("Lengkapi seluruh data penyewa terlebih dahulu!");
    return;
  }

  if (!paymentMethod) {
    alert("Pilih metode pembayaran terlebih dahulu!");
    return;
  }
  if (
  paymentMethod !== "Cash" &&
  !buktiTransfer
) {
  alert("Upload bukti transfer terlebih dahulu!");
  return;
}

  // lanjut kirim ke WhatsApp

    const pesan = `
*PESANAN MATCHFIT*

👤 Nama: ${nama}
📱 WhatsApp: ${nomorWa}
📧 Email: ${email}

📍 Alamat:
${alamat}

📅 Tanggal Sewa: ${tanggalSewa}
⏳ Durasi Sewa: ${durasi}

👗 Produk: ${product.name}
📏 Ukuran: ${selectedSize}
🎨 Warna: ${selectedColor}
⏳ Durasi Sewa: ${durasi} Hari
📦 Metode Pengambilan: ${metodePengambilan}

💳 Metode Pembayaran: ${paymentMethod}

💰 Subtotal: Rp${hargaProduk.toLocaleString("id-ID")}
🚚 Ongkir: Rp${ongkir.toLocaleString("id-ID")}
✅ Total: Rp${total.toLocaleString("id-ID")}

Terima kasih.
`;
const handleBayar = async () => {

  const reader = new FileReader();

  reader.readAsDataURL(buktiTransfer);

  reader.onload = async () => {

    const base64 = reader.result.split(",")[1];

    const formData = new FormData();

    formData.append("file", base64);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbx7SFhs0WghTGS46FSTAE57Pc-LyAspLJny_VY0dtkrXBF8s69M_3Kf5UuovB_ju--j/exec",
      {
        method: "POST",
        body: formData,
      }
    );

    const linkFile = await response.text();

    const pesan = `
PESANAN MATCHFIT

Nama: ${nama}

Bukti Transfer:
${linkFile}
`;

    window.open(
      `https://wa.me/6287794284882?text=${encodeURIComponent(pesan)}`,
      "_blank"
    );
  };
};
    window.open(
      `https://wa.me/6287794284882?text=${encodeURIComponent(pesan)}`,
      "_blank"
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold text-[#1F3552] mb-8">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* DATA PENYEWA */}
        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-semibold mb-6">
            Data Penyewa
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Nama Lengkap"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full border p-3 rounded-lg"
               required
            />

            <input
              type="text"
              placeholder="Nomor WhatsApp"
              value={nomorWa}
              onChange={(e) => setNomorWa(e.target.value)}
              className="w-full border p-3 rounded-lg"
               required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-3 rounded-lg"
               required
            />

            <textarea
              placeholder="Alamat Lengkap"
              rows="4"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="date"
              value={tanggalSewa}
              onChange={(e) => setTanggalSewa(e.target.value)}
              className="w-full border p-3 rounded-lg"
               required
            />

           <select
            value={durasi}
            onChange={(e) => setDurasi(Number(e.target.value))}
            className="w-full border p-3 rounded-lg"
            >
            <option value={1}>1 Hari</option>
            <option value={3}>3 Hari</option>
            <option value={5}>5 Hari</option>
            <option value={7}>7 Hari</option>
            </select>
<h3 className="font-semibold mt-6 mb-3">
  Metode Pengambilan
</h3>

<div className="space-y-3">

  <label className="block border p-3 rounded-lg">

    <input
      type="radio"
      name="pengambilan"
      value="Diantar"
      checked={metodePengambilan === "Diantar"}
      onChange={(e) =>
        setMetodePengambilan(e.target.value)
      }
       required
    />

    <span className="ml-3">
      Diantar ke Alamat (+Rp5.000)
    </span>

  </label>

  <label className="block border p-3 rounded-lg">

    <input
      type="radio"
      name="pengambilan"
      value="Ambil di Tempat"
      checked={
        metodePengambilan === "Ambil di Tempat"
      }
      onChange={(e) =>
        setMetodePengambilan(e.target.value)
      }
       required
    />

    <span className="ml-3">
      Ambil di Tempat (Gratis)
    </span>

  </label>

</div>
          </div>

        </div>

        {/* RINGKASAN PESANAN */}
        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-semibold mb-6">
            Ringkasan Pesanan
          </h2>

          <div className="space-y-3">

            <p className="font-semibold text-lg">
              {product.name}
            </p>

            <p>
              Ukuran : {selectedSize}
            </p>
            <p>
            Warna : {selectedColor}
            </p>
            <p>
            Durasi : {durasi} Hari
            </p>
            <p>
            Metode :
            {metodePengambilan}
            </p>
            <hr />

           <p>
  Harga per hari :
  Rp{hargaPerHari.toLocaleString("id-ID")}
</p>

<p>
  Durasi :
  {durasi} Hari
</p>

<p>
  Subtotal :
  Rp{hargaProduk.toLocaleString("id-ID")}
</p>

<p>
  Biaya Pengiriman :
  Rp{ongkir.toLocaleString("id-ID")}
</p>

<h3 className="font-bold text-lg">
  Total :
  Rp{total.toLocaleString("id-ID")}
</h3>

          </div>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            Metode Pembayaran
          </h2>

          <div className="space-y-3">

            <label className="block border p-4 rounded-lg">
              <input
                type="radio"
                name="payment"
                value="SeaBank"
                onChange={(e) => setPaymentMethod(e.target.value)}
                
              />
              <span className="ml-3">SeaBank</span>
            </label>

            <label className="block border p-4 rounded-lg">
              <input
                type="radio"
                name="payment"
                value="BRI"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="ml-3">BRI</span>
            </label>

            <label className="block border p-4 rounded-lg">
              <input
                type="radio"
                name="payment"
                value="DANA"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="ml-3">DANA</span>
            </label>

            <label className="block border p-4 rounded-lg">
              <input
                type="radio"
                name="payment"
                value="ShopeePay"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="ml-3">ShopeePay</span>
            </label>
            <label className="block border p-4 rounded-lg">
  <input
    type="radio"
    name="payment"
    value="Cash"
    onChange={(e) => setPaymentMethod(e.target.value)}
  />
  <span className="ml-3">Cash</span>
</label>

          </div>

          {paymentMethod && (
            <div className="mt-6 border rounded-lg p-4 bg-gray-50">

              <h3 className="font-bold mb-3">
                Instruksi Pembayaran
              </h3>

              <p>Metode: {paymentMethod}</p>

              <p>
                Total:
                Rp{total.toLocaleString("id-ID")}
              </p>

              <div className="mt-3">

                {paymentMethod === "SeaBank" && (
                  <p>SeaBank : 901372180778</p>
                )}

                {paymentMethod === "BRI" && (
                  <p>BRI : 028501120381502</p>
                )}

                {paymentMethod === "DANA" && (
                  <p>DANA : 087794284882</p>
                )}

                {paymentMethod === "ShopeePay" && (
                  <p>ShopeePay : 087794284882</p>
                )}
                {paymentMethod === "Cash" && (
  <p>
    Pembayaran dilakukan secara tunai saat
    pengambilan atau saat outfit diantar.
  </p>
)}

              </div>

{paymentMethod !== "Cash" && (
  <div className="mt-4">

    <label className="block mb-2">
      Upload Bukti Transfer
    </label>

    <input
  type="file"
  onChange={(e) =>
    setBuktiTransfer(e.target.files[0])
  }
  className="w-full border p-2 rounded"
/>

  </div>
)}

            </div>
          )}

          <button
            onClick={handleBayar}
            className="w-full mt-6 bg-[#1F3552] text-white py-3 rounded-lg hover:bg-[#16283f]"
          >
            Bayar Sekarang
          </button>

        </div>

      </div>

    </div>
  );
}