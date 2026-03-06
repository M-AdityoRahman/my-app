import { useRouter } from "next/router";

const halamanKategori = () => {
  const { query } = useRouter();
  const slug = query.slug as string[] | undefined;

  return (
    <div>
      <h1>Halaman Kategori</h1>
      {slug && slug.length > 0 ? (
        <ul>
          {slug.map((segment, index) => (
            <li key={index}>
              Segmen {index + 1}: <strong>{segment}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>Tidak ada parameter kategori.</p>
      )}
    </div>
  );
};

export default halamanKategori;