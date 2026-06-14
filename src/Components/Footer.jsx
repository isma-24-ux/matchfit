export default function Footer() {
  return (
    <footer className="bg-[#1F3552] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <h2 className="text-2xl font-bold">
          MatchFit
        </h2>

        <p className="mt-3 text-gray-300">
          Solusi Outfit Tanpa Harus Membeli
        </p>

        <div className="mt-6 space-y-2">
          <p>📧 Email: matchfit@gmail.com</p>
          <p>📷 Instagram: @matchfit.id</p>
          <p>📱 WhatsApp: 087794284882</p>
        </div>

        <hr className="my-6 border-gray-500" />

        <p className="text-sm text-gray-400 text-center">
          © 2026 MatchFit. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}