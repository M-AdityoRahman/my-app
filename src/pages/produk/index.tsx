import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";
import dynamic from "next/dynamic";

// const fetcher = (url : string) => fetch(url).then((res) => res.json());

const TampilanProduk = dynamic(
  () => import("../../views/produk"),
  {
    loading: () => <p>Memuat produk...</p>, // fallback saat komponen belum siap
    ssr: false, // komponen hanya dirender di sisi client
  }
);
const kategori = () => {
  // const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  // }, []);

  // const fetchProducts = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch("/api/produk");
  //     const responsedata = await response.json();
  //     setProducts(responsedata.data);
  //   } catch (error) {
  //     console.error("Error fetching produk:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const {data, error,isLoading} = useSWR("api/produk", fetcher); // CSR
  // cek apakah data, error dan isLoading sudah benar
  // console.log("data:", data);
  // console.log("error:", error);
  // console.log("isLoading:", isLoading);
  

  return (
    <div data-testid="product-page">  
      <h1 data-testid="title">Daftar Produk</h1>  
      <TampilanProduk products={isLoading ? [] : data?.data} />
    </div>
  );
};

export default kategori;