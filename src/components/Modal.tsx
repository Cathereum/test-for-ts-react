import axios from "axios";
import { useContext, useState } from "react";
import { Iproduct } from "../interfaces/interfaces";
import { ProductsContext } from "./Main";

const newProduct: Iproduct = {
  id: Date.now(),
  title: "new product added",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
};

export const Modal = () => {
  const { setProductsData, setModal } = useContext(ProductsContext);
  const [value, setValue] = useState("");

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const submitHendler = async (event: React.FormEvent) => {
    event.preventDefault();
    newProduct.title = value;
    const response = await axios.post<Iproduct>(
      "https://fakestoreapi.com/products",
      newProduct
    );
    setProductsData((prev: Iproduct[]) => [...prev, response.data]);
    setValue("");
    setModal(false);
  };

  return (
    <div
      onClick={() => setModal(false)}
      className="fixed bg-black/50 top-0 left-0 bottom-0 right-0"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[500px] p-5 rounded bg-white top-20 left-1/2 -translate-x-1/2 absolute"
      >
        <form onSubmit={submitHendler} className="flex flex-col gap-2">
          Create new product:
          <input
            type="text"
            className="border py-2 px-4 mb-2 outline-0"
            placeholder="Enter product title"
            value={value}
            onChange={inputHandler}
          />
          <button
            type="submit"
            className="border py-2 px-4 bg-green-400 hover:bg-green-500"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};
