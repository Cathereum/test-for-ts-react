import { Iproduct } from "../interfaces/interfaces";
import { ProductItem } from "./ProductItem";
import { useContext } from "react";
import { ProductsContext } from "./Main";

export const ProductList = () => {
  const { productsData } = useContext(ProductsContext);

  return (
    <div>
      {productsData.map((product: Iproduct) => (
        <ProductItem key={product.title} product={product} />
      ))}
    </div>
  );
};
