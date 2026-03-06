import Link from "next/link";


export default function About() {
  return (
    <div style={{ padding: "20px"}}>
      <h1>Halaman About</h1>
      <p><strong>Nama Mahasiswa:</strong> Muhammad Adityo Rahman</p>
      <p><strong>NIM:</strong> 2341720177</p>
      <p><strong>Program Studi:</strong> D4 Teknik Informatika</p>

      <Link href="/">Kembali ke Home</Link>
    </div>
  );
}
