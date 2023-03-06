import axios from "axios";
import { Iproduct } from "../interfaces/interfaces";

export const fetchData = async () => {
  const response = await axios.get<Iproduct[]>(
    "https://fakestoreapi.com/products?limit=6"
  );
  return response.data;
};
