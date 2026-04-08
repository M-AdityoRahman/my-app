const daftarProduk = [
  { id: 1, nama: "Produk A", harga: "Rp 100.000" },
  { id: 2, nama: "Produk B", harga: "Rp 200.000" },
  { id: 3, nama: "Produk C", harga: "Rp 300.000" },
];

const MainSection = () => {
  return (
    <section style={{ padding: "2rem" }}>
      <h2 style={{ marginBottom: "1rem" }}>Daftar Produk</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
        }}
      >
        {daftarProduk.map((produk) => (
          <div
            key={produk.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              textAlign: "center",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{produk.nama}</h3>
            <p style={{ color: "#3498db", marginTop: "0.5rem" }}>
              {produk.harga}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainSection;