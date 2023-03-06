import { useContext } from "react";
import { ProductsContext } from "./Main";

export const OpenModalBtn = () => {
  const { setModal } = useContext(ProductsContext);

  return (
    <button
      onClick={() => setModal(true)}
      type="button"
      className="fixed bottom-5 right-5 py-2 px-4 rounded-full bg-red-700 text-white text-2xl"
    >
      Add Product
    </button>
  );
};
