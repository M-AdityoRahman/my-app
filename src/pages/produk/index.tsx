import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../../views/produk";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

// const fetcher = (url : string) => fetch(url).then((res) => res.json());
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
    <div>
      <TampilanProduk products={isLoading ? [] : data.data} /> {/* Kondisi yang membuat skeleton muncul*/}
    </div>
  );
};

export default kategori;