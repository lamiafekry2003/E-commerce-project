// import React from "react";
// import slid1 from "./assessts/slider-image-1.jpeg";
// import slid2 from "./assessts/slider-image-2.jpeg";
// import slid3 from "./assessts/slider-image-3.jpeg";
// import binne1 from "./assessts/assortment-citrus-fruits.png";
// import binne2 from "./assessts/grocery-banner-2.jpeg";
// import { Carousel } from 'react-responsive-carousel';
// export default function MainSlider() {
//   return (
//     <>
//     <div className="slider-container">
//       <div className="row gx-0">
//        <div className="col-md-9">
//         <Carousel showArrows={false} autoPlay showThumbs={false}  infiniteLoop >
//           <img src={slid1} height={450} className="w-100" alt="" />
//           <img src={slid2} height={450} className="w-100" alt="" />
//           <img src={slid3} height={450} className="w-100" alt="" />
//           </Carousel>
//         </div>
//         <div className="col-md-3">
//         <img src={binne1} className="w-100" height={225} alt="" />
//         <img src={binne2} className="w-100" height={225} alt="" />
//       </div>
//       </div>
//     </div>
//     </>
    
//   );
// }
import React from "react";
import slid1 from "./assessts/slider-image-1.jpeg";
import slid2 from "./assessts/slider-image-2.jpeg";
import slid3 from "./assessts/slider-image-3.jpeg";
import binne1 from "./assessts/assortment-citrus-fruits.png";
import binne2 from "./assessts/grocery-banner-2.jpeg";
import { Carousel } from 'react-responsive-carousel';

export default function MainSlider() {
  return (
    <div className="slider-container">
      <div className="row gx-0">
        {/* Carousel for both mobile and desktop */}
        <div className="col-12 col-md-9">
          <Carousel showArrows={false} autoPlay showThumbs={false} infiniteLoop>
            <img src={slid1} height={450} className="w-100" alt="Slider 1" />
            <img src={slid2} height={450} className="w-100" alt="Slider 2" />
            <img src={slid3} height={450} className="w-100" alt="Slider 3" />
          </Carousel>
        </div>
        {/* Two images for desktop only */}
        <div className="col-md-3 d-none d-md-block">
          <img src={binne1} className="w-100" height={225} alt="Banner 1" />
          <img src={binne2} className="w-100" height={225} alt="Banner 2" />
        </div>
      </div>
    </div>
  );
}