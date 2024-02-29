import { Navigate } from "react-router-dom";

 export default function ProtactedRouter({children}){
    if(!localStorage.getItem('userToken')){
        return <Navigate to={'/'} ></Navigate>
    }else{
        return children
    }
 
}