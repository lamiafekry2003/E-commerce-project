import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";
import 'react-multi-carousel/lib/styles.css';

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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="row my-5 d-none d-md-block">
      <Slider {...settings} className="no">
        {data?.map((cat) => (
          <div key={cat._id} className="slider">
            <img src={cat.image} className="w-100" height={200} alt="" />
            <h5 className="my-3 text-main">{cat.name}</h5>
          </div>
        ))}
      </Slider>
    </div>
  );
}