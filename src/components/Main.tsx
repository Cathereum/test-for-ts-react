import { createContext, useEffect, useState } from "react";
import { fetchData } from "../API/APIdata";
import { Iproduct } from "../interfaces/interfaces";
import { Loader } from "./Loader";
import { Modal } from "./Modal";
import { OpenModalBtn } from "./OpenModalBtn";
import { ProductList } from "./ProductList";

type ProductsContextProps = {
  loading: boolean;
  productsData: Iproduct[];
  setProductsData: React.Dispatch<React.SetStateAction<Iproduct[]>>;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ProductsContext = createContext<ProductsContextProps>({
  loading: false,
  productsData: [],
  setProductsData: () => {},
  modal: false,
  setModal: () => {},
});

export const Main = () => {
  const [productsData, setProductsData] = useState<Iproduct[]>([]);
  const [modal, setModal] = useState(true);

  const getProductsData = async () => {
    setLoading(true);
    const response = await fetchData();
    setProductsData(response);
    setLoading(false);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProductsData();
  }, []);

  console.log(modal);
  return (
    <ProductsContext.Provider
      value={{ productsData, loading, setProductsData, modal, setModal }}
    >
      <div className="container mx-auto max-w-2xl pt-5">
        {loading ? <Loader /> : <ProductList />}
        {modal && <Modal />}
        <OpenModalBtn />
      </div>
    </ProductsContext.Provider>
  );
};
