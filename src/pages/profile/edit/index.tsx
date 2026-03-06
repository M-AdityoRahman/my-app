import Link from "next/link";

export default function EditProfilePage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit Profile</h1>
      <p>Halaman untuk mengedit data profile.</p>

      <Link href="/profile">
        <button>Kembali ke Profile</button>
      </Link>
    </div>
  );
}