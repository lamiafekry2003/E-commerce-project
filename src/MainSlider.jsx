import React from "react";
import Slider from "react-slick";
import slid1 from "./assessts/slider-image-1.jpeg";
import slid2 from "./assessts/slider-image-2.jpeg";
import slid3 from "./assessts/slider-image-3.jpeg";
import binne1 from "./assessts/assortment-citrus-fruits.png";
import binne2 from "./assessts/grocery-banner-2.jpeg";
import { Carousel } from 'react-responsive-carousel';
export default function MainSlider() {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   autoplay:true,
  //   autoplaySpeed:1000,
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    
  // };
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };
  return (
    <>
    <div className="slider-container">
      <div className="row gx-0">
       <div className="col-md-9">
        {/* <Slider {...settings}> */}
        <Carousel showArrows={false} autoPlay showThumbs={false}  infiniteLoop >
          <img src={slid1} height={450} className="w-100" alt="" />
          <img src={slid2} height={450} className="w-100" alt="" />
          <img src={slid3} height={450} className="w-100" alt="" />
          </Carousel>
        {/* </Slider> */}
        </div>
        <div className="col-md-3">
        <img src={binne1} className="w-100" height={225} alt="" />
        <img src={binne2} className="w-100" height={225} alt="" />
      </div>
      </div>
    </div>
        {/* <div className="row gx-0">
       <div className="col-md-9">
        <Slider {...settings}>
          <img src={slid1} height={450} className="w-100" alt="" />
          <img src={slid2} height={450} className="w-100" alt="" />
          <img src={slid3} height={450} className="w-100" alt="" />
        </Slider>
      </div>  */}
      {/* <div className="col-md-3">
        <img src={binne1} className="w-100" height={225} alt="" />
        <img src={binne2} className="w-100" height={225} alt="" />
      </div> */}
    
    </>
    
  );
}
