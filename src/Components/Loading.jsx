import React from "react";
import { Bars } from "react-loader-spinner";
import img1 from '../assessts/freshcart-logo.svg'
export default function Loading() {
  return (
    <div className="loading">
      <img src={img1} alt="" width={300}/>
      {/* <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      /> */}
    </div>
  );
}
