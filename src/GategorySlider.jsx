import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useProducts, featuredProduct } from "./Components/useProduct";
import Slider from "react-slick";
export default function MainSlider() {
  function getAllProduct() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }
  let { data } = useQuery("allGateory", getAllProduct, {
    select: (data) => data?.data?.data,
  });

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    focusOnSelect: true,
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 6,
    // slidesToScroll: 6,
  };
  return (
    <div className="row my-5">
      <Slider {...settings}>
        {data?.map((cat) => (
          <div key={cat._id}>
            <img src={cat.image} className="w-100" height={200} alt="" />
            <h5 className="my-3  text-main">{cat.name}</h5>
          </div>
        ))}
      </Slider>
    </div>
  );
}
