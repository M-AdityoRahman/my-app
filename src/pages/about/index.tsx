import Link from "next/link";
import { useRouter } from "next/router";

export default function About() {
  const { push } = useRouter();

  const handlerLogout = () => {
    // ✅ Hapus cookie isLogin saat logout
    document.cookie = "isLogin=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    push("/auth/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Halaman About</h1>
      <p><strong>Nama Mahasiswa:</strong> Muhammad Adityo Rahman</p>
      <p><strong>NIM:</strong> 2341720177</p>
      <p><strong>Program Studi:</strong> D4 Teknik Informatika</p>
      <br />
      <button
        onClick={handlerLogout}
        style={{ color: "white", background: "red", padding: "8px 16px", borderRadius: "6px", cursor: "pointer" }}
      >
        Logout
      </button>
      <br /><br />
      <Link href="/">Kembali ke Home</Link>
    </div>
  );
};