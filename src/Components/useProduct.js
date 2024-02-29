import axios from "axios";
import { useQuery } from "react-query";

export  function featuredProduct() {
  return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
}
export  function featuredSingleProduct(id) {
  return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
}

export function useProducts(key, fn) {
   return useQuery(key, fn, { select: (data) => data.data.data });
}
