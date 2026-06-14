export default function Login() {
  return (
    <div className="max-w-md mx-auto py-20">

      <div className="bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold text-[#1F3552] mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-6"
        />

        <button className="w-full bg-[#1F3552] text-white py-3 rounded-lg">
          Login
        </button>

      </div>

    </div>
  );
}