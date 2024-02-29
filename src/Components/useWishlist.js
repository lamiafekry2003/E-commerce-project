import axios from "axios";
import toast from "react-hot-toast";
import { useMutation, useQuery ,useQueryClient} from "react-query";

let baseURL = "https://ecommerce.routemisr.com/api/v1";
let token = localStorage.getItem("userToken");

// add to wishlist
export function addToWishList(productId) {
  return axios.post(
    `${baseURL}/wishlist`,
    { productId },
    { headers: { token }}
  );
}
// get wishlist
export function getWishlist(){
    return axios.get(`${baseURL}/wishlist`,{ headers: { token } })
}
// remove products from card
export function removeprodWish(id) {
  return axios.delete(`${baseURL}/wishlist/${id}`,{ headers: { token } });
}
export function useWishList(fn) {
  // Access the client
  const queryClient = useQueryClient()
  return useMutation(
    fn,
    {onSuccess:(data)=>
      {toast.success(data?.data?.message,{
          duration: 4000,
          position: 'top-center'},queryClient.invalidateQueries('getWishlist'))}
  },
  {onError:(data)=>
     { toast.error(data?.message)}
  }
  )
}
export function useGetWish(key,fn){
  return useQuery(key,fn)
}
