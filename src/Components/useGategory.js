import { useQuery } from "react-query";
import axios from "axios";
let baseUrl='https://ecommerce.routemisr.com/api/v1'

// get all gategory
export function getAllGategory() {
    return axios.get(`${baseUrl}/categories`);
}
// getsingleGategory
export function getSingleGategory(id) {
    return axios.get(`${baseUrl}/categories/${id}`);
}
export function useGetGat(key,fn){
    return useQuery(key,fn)
}