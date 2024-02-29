import React,{useState} from "react";
import { useParams } from "react-router-dom";
import { useProducts, featuredSingleProduct } from "./useProduct";
import Loading from "./Loading";
import { addToCart, useCartCurd } from './useCart'
import {  useWishList,addToWishList } from "./useWishlist";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import { Carousel } from 'react-responsive-carousel';
export default function ProductDetails() {
  let {mutate}=useCartCurd(addToCart)
  let {mutate:wish}=useWishList(addToWishList)
  const [heart , setHeart] = useState(false)
  const { id } = useParams();
  // console.log(id)
  let { isLoading, isError, error, data } = useProducts("productDetails", () =>
    featuredSingleProduct(id)
  );
  if (isLoading) return <Loading></Loading>;

  if (isError) return <h2>{error.message}</h2>;
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   // autoplay:true,
  //   autoplaySpeed:1500,
  //   focusOnSelect:true,
   
  // };

  return (
    <div className="container">
      <Helmet>
        <title>ProductDetails</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <div className="row align-items-center my-3">
        <div className="col-md-4 mt-5">
          {/* <img src={data?.imageCover} className="w-100" alt="" /> */}
          {/* <Slider {...settings} className="mb-3"> */}
          <Carousel showArrows={false}  autoPlay infiniteLoop >
          {data?.images.map((img)=><img className="w-100" src={img} alt={img}/>)}
          </Carousel>
            
          {/* </Slider> */}
        </div>
        <div className="col-md-8 ">
          <div className="d-flex justify-content-between">
           <h3 className="fw-bold ">{data?.title}</h3>
           <i className={!heart?"fa-solid fa-heart-pulse heart text-main":"fa-solid fa-heart heart text-main"} onClick={()=>{wish(data._id) ; setHeart(!heart)}}></i>
          </div>
          <p style={{color:'#969696'}}>{data?.description}</p>
          <div className="d-flex justify-content-between ">
            <span className="fw-bold text-main">{data?.category?.name}</span>
            <span className="fw-bold text-main" >{data?.quantity} Piece</span>
          </div>
          <div className="box d-flex justify-content-between">
            <span className="fw-bold">{data.price} EGP</span>
            <span>
              <i className="fa-solid fa-star rating-color"></i>
              {data.ratingsAverage}
            </span>
          </div>
          <button className="btn btn-bord form-control my-3 fw-bold" onClick={()=>{mutate(data._id)}}>Add To Card</button>
        </div>
      </div>
    </div>
  );
}
