import { useState } from "react";
import { Iproduct } from "../interfaces/interfaces";

type ProductItemProps = {
  product: Iproduct;
};

export const ProductItem = ({ product }: ProductItemProps) => {
  const [descrId, setDescrId] = useState<number | null>(null);

  const btnClickHandler = (id: number) => {
    setDescrId((descrId) => (descrId === product.id ? null : product.id));
  };
  return (
    <div className="border py-2 px-4 flex flex-col items-center mb-2 gap-2">
      <h1 className="font-bold">{product.title}</h1>
      <img className="w-1/6" src={product.image} alt={product.title} />
      {descrId === product.id && <p>{product.description}</p>}
      <span className="font-bold"> Price: {product.price} $</span>
      <button
        onClick={() => btnClickHandler(product.id)}
        className={
          descrId === product.id
            ? "border py-2 px-4 bg-blue-400"
            : "border py-2 px-4 bg-yellow-400"
        }
      >
        {descrId ? `Hide descr` : `Show descr`}
      </button>
    </div>
  );
};
