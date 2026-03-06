import Link from "next/link";

export default function ProfilePage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Halaman Profile</h1>
      <p>Ini adalah halaman profile.</p>

      <Link href="/profile/edit">
        <button>Edit Profile</button>
      </Link>
    </div>
  );
}