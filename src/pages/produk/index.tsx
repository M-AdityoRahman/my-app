import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../views/produk";

const produk = () => {
  const [isLogin, setIsLogin] = useState(true); // set false untuk aktifkan redirect
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  return <TampilanProduk />;
};

export default produk;