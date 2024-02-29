import axios from "axios";
import toast from "react-hot-toast";
import { useMutation, useQuery ,useQueryClient} from "react-query";

let baseURL = "https://ecommerce.routemisr.com/api/v1";
let token = localStorage.getItem("userToken");
// add to card 
export function addToCart(productId) {
  return axios.post(`${baseURL}/cart`, { productId }, { headers: { token } });
}
// checkOut
export function checkOut({id,shippingAddress}) {
    return axios.post(`${baseURL}/orders/checkout-session/${id}?url=http://localhost:3000`,{shippingAddress},{ headers: { token } });
}
// get cart
export function getCart() {
    return axios.get(`${baseURL}/cart`, {
        headers: {
            token
        }
    })
}

// remove products from card
export function removeprodCart(id) {
    return axios.delete(`${baseURL}/cart/${id}`,{ headers: { token } });
}
// clear
export function clearCart() {
    return axios.delete(`${baseURL}/cart`, {
        headers: {
            token
        }
    })
}

// update card 
export function updateprodCart({id,count}) {
    return axios.put(`${baseURL}/cart/${id}`,{count},{ headers: { token } });
}


export function useCartCurd(fn){
    // Access the client
  const queryClient = useQueryClient()
    return useMutation(fn,
        {onSuccess:(data)=>
            {toast.success(data?.data?.message,{
                duration: 4000,
                position: 'top-center'},queryClient.invalidateQueries('getCart'))}
        },
        {onError:(data)=>
           { toast.error(data?.message)}
        }
        )
}
export function useGetCart(key,fn){
    return useQuery(key,fn)
}

