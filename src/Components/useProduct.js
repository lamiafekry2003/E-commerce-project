import axios from "axios";
import { useQuery } from "react-query";

export  function featuredProduct(quaryData) {
  return axios.get(`https://ecommerce.routemisr.com/api/v1/products?page=${quaryData.queryKey[1]}`);
}
export  function featuredSingleProduct(id) {
  return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
}

export function useProducts(key, fn) {
   return useQuery(key, fn, { select: (data) => data.data.data });
}
