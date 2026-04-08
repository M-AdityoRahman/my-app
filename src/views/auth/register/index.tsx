import Link from "next/link";
import { useRouter } from "next/router";

const TampilanRegister = () => {
  const { push } = useRouter();

  return (
    // 1. flex  2. flex-col  3. justify-center  4. items-center  5. min-h-screen
    // 6. bg-blue-50  7. gap-4  8. shadow-md  9. rounded-xl  10. text-blue-700
    <div className="flex flex-col justify-center items-center min-h-screen bg-blue-50">
      <div className="bg-white shadow-md rounded-xl p-8 w-80 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-blue-700 text-center">
          Halaman Register
        </h1>
        <input
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Nama Lengkap"
        />
        <input
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="email"
          placeholder="Email"
        />
        <input
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="password"
          placeholder="Password"
        />
        <button
          onClick={() => push("/auth/login")}
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Daftar
        </button>
        <p className="text-center text-sm text-gray-500">
          Sudah punya akun?{" "}
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            Login di sini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default TampilanRegister;