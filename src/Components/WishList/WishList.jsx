// import React, { useState } from "react";
// import {
//   getWishlist,
//   removeprodWish,
//   useGetWish,
//   useWishList,
// } from "../useWishlist";
// import Loading from "../Loading";
// import { Link } from "react-router-dom";
// import { addToCart, useCartCurd } from "../useCart";
// import { Helmet } from "react-helmet";
// import empty from '../../assessts/preview.png'
// export default function WishList() {
//   let { data, isError, error, isLoading } = useGetWish(
//     "getWishlist",
//     getWishlist
//   );
//   let { mutate ,isLoading:add} = useCartCurd(addToCart);
//   let { mutate: remove,isLoading:remv } = useWishList(removeprodWish);
//      console.log(data?.data?.data)
//   if (isLoading) return <Loading></Loading>;
//   if (add) return <Loading></Loading>;
//   if (remv) return <Loading></Loading>;
//   if (isError) return <h2>{error?.message}</h2>;
//   return (
//     <div className="container">
//       <Helmet>
//         <title>Favourite</title>
//         <meta name="description" content="Helmet application" />
//       </Helmet>
//       {data?.data?.data.length >0 ?<div className="row gy-2 mt-5 p-5 d-flex justify-content-center ">
//         {data?.data?.data?.map((prod) => (
//           <div className="col-md-2">
//             <div className="product  cursor-pointer p-2 ">
//               <i
//                 className="fa-solid fa-heart heart text-main"
//                 onClick={() => {
//                   remove(prod._id);
//                 }}
//               ></i>
//               <Link to={`/productDetails/${prod?._id}`}>
//                 <img
//                   src={prod?.imageCover}
//                   className="w-100"
//                   alt={prod?.title}
//                 />
//                 <h2 className="h5 text-main ">{prod?.category?.name}</h2>
//                 <p>{prod?.title}</p>
//                 <div className="box d-flex justify-content-between">
//                   <span>{prod?.price} EGP</span>
//                   <span>
//                     <i className="fa-solid fa-star rating-color"></i>
//                     {prod?.ratingsAverage}
//                   </span>
//                 </div>
//               </Link>
//               <button
//                 className="btn btn-bord my-2"
//                 onClick={() => {
//                   mutate(prod._id);
//                 }}
//               >
//                 Add To Card
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>:<div className=" mt-5 ">
//            <h2 className="pt-5 text-main text-center fw-bold">No Favourite Product</h2>
//            <img src={empty} alt="empty" className='w-75 noorder' />
//           </div>}
      
//     </div>
//   );
// }
import React, { useState } from "react";
import {
  getWishlist,
  removeprodWish,
  useGetWish,
  useWishList,
} from "../useWishlist";
import Loading from "../Loading";
import { Link } from "react-router-dom";
import { addToCart, useCartCurd } from "../useCart";
import { Helmet } from "react-helmet";
import empty from '../../assessts/preview.png';

export default function WishList() {
  let { data, isError, error, isLoading } = useGetWish("getWishlist", getWishlist);
  let { mutate, isLoading: add } = useCartCurd(addToCart);
  let { mutate: remove, isLoading: remv } = useWishList(removeprodWish);
  console.log(data?.data?.data);

  if (isLoading) return <Loading />;
  if (add) return <Loading />;
  if (remv) return <Loading />;
  if (isError) return <h2>{error?.message}</h2>;

  return (
    <div className="container">
      <Helmet>
        <title>Favourite</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      {data?.data?.data.length > 0 ? (
        <div className="row gy-2 mt-5 pt-5 p-2 d-flex justify-content-center">
          {data?.data?.data?.map((prod) => (
            <div className="col-6 col-md-2" key={prod._id}>
              <div className="product cursor-pointer p-2">
                <i
                  className="fa-solid fa-heart heart text-main"
                  onClick={() => {
                    remove(prod._id);
                  }}
                ></i>
                <Link to={`/productDetails/${prod?._id}`}>
                  <img
                    src={prod?.imageCover}
                    className="w-100"
                    alt={prod?.title}
                  />
                  <h2 className="h5 text-main">{prod?.category?.name}</h2>
                  <p>{prod?.title}</p>
                  <div className="box d-flex justify-content-between">
                    <span>{prod?.price} EGP</span>
                    <span>
                      <i className="fa-solid fa-star rating-color"></i>
                      {prod?.ratingsAverage}
                    </span>
                  </div>
                </Link>
                <button
                  className="btn btn-bord my-2"
                  onClick={() => {
                    mutate(prod._id);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-5">
          <h2 className="pt-5 text-main text-center fw-bold">No Favourite Product</h2>
          <img src={empty} alt="empty" className="w-75 noorder" />
        </div>
      )}
    </div>
  );
}