// import React,{useState} from "react";
// import { useParams } from "react-router-dom";
// import { useProducts, featuredSingleProduct } from "./useProduct";
// import Loading from "./Loading";
// import { addToCart, useCartCurd } from './useCart'
// import {  useWishList,addToWishList } from "./useWishlist";
// import { Helmet } from "react-helmet";
// import { Carousel } from 'react-responsive-carousel';
// export default function ProductDetails() {
//   let {mutate,isLoading:add}=useCartCurd(addToCart)
//   let {mutate:wish,isLoading:favo}=useWishList(addToWishList)
//   const [heart , setHeart] = useState(false)
//   const { id } = useParams();
//   // console.log(id)
//   let { isLoading, isError, error, data } = useProducts("productDetails", () =>
//     featuredSingleProduct(id)
//   );
//   if (isLoading) return <Loading></Loading>;
//   if (add) return <Loading></Loading>;
//   if (favo) return <Loading></Loading>;

//   if (isError) return <h2 className="text-center">{error.message}</h2>;
//   return (
//     <div className="container">
//       <Helmet>
//         <title>ProductDetails</title>
//         <meta name="description" content="Helmet application" />
//     </Helmet>
//       <div className="row align-items-center my-3">
//         <div className="col-md-4 mt-5">
//           <Carousel showArrows={false} autoPlay infiniteLoop >
//           {data?.images.map((img)=><img className="w-100" src={img} alt={img}/>)}
//           </Carousel>
//         </div>
//         <div className="col-md-8 ">
//           <div className="d-flex justify-content-between">
//            <h3 className="fw-bold ">{data?.title}</h3>
//            <i className={!heart?"fa-solid fa-heart-pulse heart text-main":"fa-solid fa-heart heart text-main"} onClick={()=>{wish(data._id) ; setHeart(!heart)}}></i>
//           </div>
//           <p style={{color:'#969696'}}>{data?.description}</p>
//           <div className="d-flex justify-content-between ">
//             <span className="fw-bold text-main">{data?.category?.name}</span>
//             <span className="fw-bold text-main" >{data?.quantity} Piece</span>
//           </div>
//           <div className="box d-flex justify-content-between">
//             <span className="fw-bold">{data.price} EGP</span>
//             <span>
//               <i className="fa-solid fa-star rating-color"></i>
//               {data.ratingsAverage}
//             </span>
//           </div>
//           <button className="btn btn-bord form-control my-3 fw-bold" onClick={()=>{mutate(data._id)}}>Add To Card</button>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts, featuredSingleProduct } from "./useProduct";
import Loading from "./Loading";
import { addToCart, useCartCurd } from './useCart';
import { useWishList, addToWishList } from "./useWishlist";
import { Helmet } from "react-helmet";
import { Carousel } from 'react-responsive-carousel';

export default function ProductDetails() {
  let { mutate, isLoading: add } = useCartCurd(addToCart);
  let { mutate: wish, isLoading: favo } = useWishList(addToWishList);
  const [heart, setHeart] = useState(false);
  const { id } = useParams();
  let { isLoading, isError, error, data } = useProducts("productDetails", () =>
    featuredSingleProduct(id)
  );

  if (isLoading || add || favo) return <Loading />;
  if (isError) return <h2 className="text-center">{error.message}</h2>;

  return (
    <div className="container py-4">
      <Helmet>
        <title>{data?.title || "Product Details"}</title>
        <meta name="description" content={data?.description || "View product details on our e-commerce platform"} />
      </Helmet>
      <div className="row align-items-center my-3">
        <div className="col-12 col-md-4 mt-5">
          <Carousel showArrows={false} autoPlay infiniteLoop>
            {data?.images.map((img, index) => (
              <img
                key={index}
                className="object-fit-cover mx-auto w-100"
                
                src={img}
                alt={data?.title ? `${data.title} ${index + 1}` : ""}
              />
            ))}
          </Carousel>
        </div>
        <div className="col-12 col-md-8 mt-3 mt-md-0">
          <h3 className="fw-bold text-center text-md-start">{data?.title}</h3>
          <p className="text-muted">{data?.description}</p>
          <div className="d-flex justify-content-between">
            <span className="fw-bold text-main">{data?.category?.name}</span>
            <span className="fw-bold text-main">{data?.quantity} Piece</span>
          </div>
          <div className="box d-flex justify-content-between">
            <span className="fw-bold">{data?.price} EGP</span>
            <span>
              <i className="fa-solid fa-star rating-color"></i>
              {data?.ratingsAverage}
            </span>
          </div>
          <div className="d-flex justify-content-between align-items-center my-3">
            <button
              className="btn btn-bord w-75 fw-bold"
              onClick={() => mutate(data._id)}
            >
              Add To Cart
            </button>
            <i
              className={heart ? "fa-solid fa-heart heart text-main fs-3" : "fa-solid fa-heart-pulse heart text-main fs-3"}
              onClick={() => { wish(data._id); setHeart(!heart); }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}