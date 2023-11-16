import axios from "axios";

// API--------------------
const BASE_URL = "https://fakestoreapi.com";

// All Products function
export const getAllProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);

  return response.data;
};

// All ProductsID function
export const getProductId = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);

  return response.data;
};
// // All ProductsImage function
// export const getProductImage = async (id) => {
//   const response = await axios.get(`${BASE_URL}/products/${id}/image`);

//   return response.data;
// };
