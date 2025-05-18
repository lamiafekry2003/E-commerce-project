// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import Loading from './Loading';
// import { addToCart, useCartCurd } from './useCart'
// import {  useWishList,addToWishList } from "./useWishlist";
// export default function Product({prod}){
//   let {mutate,isLoading}=useCartCurd(addToCart)
//   let {mutate:wish ,data ,isLoading:fav}=useWishList(addToWishList)
//   console.log(data?.data)
//   const [heart , setHeart] = useState(false)
//   console.log(data?.data?.message)
//   if(isLoading) return <Loading></Loading>
//   if(fav) return <Loading></Loading>
//     // console.log(item)
//     return <div className="col-md-2">
//       <div className="product  cursor-pointer p-2">
//         {/* {!heart?<i className='fa-solid fa-heart-pulse heart text-main'onClick={()=>{wish(prod._id) ; setHeart(heart)}}></i>:<i className='fa-solid fa-heart heart text-main'onClick={()=>{ setHeart(heart)}}></i>} */}
//        <i className={!heart?"fa-solid fa-heart-pulse heart text-main":"fa-solid fa-heart heart text-main"} onClick={()=>{wish(prod._id) ; setHeart(!heart)}}></i>
//         <Link to={`/productDetails/${prod?._id}`}>
//         <img src={prod?.imageCover} className='w-100' alt={prod?.title} />
//         <h2 className='h5 text-main '>{prod?.category?.name}</h2>
//         <p>{prod?.title}</p>
//         <div className="box d-flex justify-content-between">
//           <span>{prod?.price} EGP</span>
//           <span>
         
//             <i className='fa-solid fa-star rating-color'></i>
//              {prod?.ratingsAverage} 
//             </span>
//         </div>
//         </Link>
//         <button className='btn  btn-bord ' onClick={()=>{mutate(prod._id)}}>Add To Card</button>
//       </div>
//     </div>
//   }
 import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading';
import { addToCart, useCartCurd } from './useCart'
import { useWishList, addToWishList } from "./useWishlist";
export default function Product({prod}){
  let {mutate,isLoading}=useCartCurd(addToCart)
  let {mutate:wish ,data ,isLoading:fav}=useWishList(addToWishList)
  console.log(data?.data)
  const [heart , setHeart] = useState(false)
  console.log(data?.data?.message)
  if(isLoading) return <Loading></Loading>
  if(fav) return <Loading></Loading>
    // console.log(item)
    return <div className="col-6 col-md-2">
      <div className="product cursor-pointer p-2">
        {/* {!heart?<i className='fa-solid fa-heart-pulse heart text-main'onClick={()=>{wish(prod._id) ; setHeart(heart)}}></i>:<i className='fa-solid fa-heart heart text-main'onClick={()=>{ setHeart(heart)}}></i>} */}
       <i className={!heart?"fa-solid fa-heart-pulse heart text-main":"fa-solid fa-heart heart text-main"} onClick={()=>{wish(prod._id) ; setHeart(!heart)}}></i>
        <Link to={`/productDetails/${prod?._id}`}>
        <img src={prod?.imageCover} className='w-100' alt={prod?.title} />
        <h2 className='h5 text-main '>{prod?.category?.name}</h2>
        <p>{prod?.title}</p>
        <div className="box d-flex justify-content-between">
          <span>{prod?.price} EGP</span>
          <span>
            <i className='fa-solid fa-star rating-color'></i>
             {prod?.ratingsAverage} 
            </span>
        </div>
        </Link>
        <button className='btn btn-bord my-2' onClick={()=>{mutate(prod._id)}}>Add To Card</button>
      </div>
    </div>
  }