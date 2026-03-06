import { useRouter } from "next/router";

export default function BlogDetail() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Detail Blog</h1>
      <p>Slug artikel: {slug}</p>
    </div>
  );
}