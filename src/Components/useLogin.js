import axios from "axios";
import { useMutation,useQueryClient } from "react-query";
import toast from "react-hot-toast";
export function forget(email){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,{email})
}
export function useForget(fn){
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