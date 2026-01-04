import axios from "axios";

const API_URL = "https://fakestoreapi.com/products"

export const fetchURL = async () => {
     const res = await axios.get(API_URL);
     return res.data;
}