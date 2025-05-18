import React from "react";
import Loading from "../Loading";
import Product from "../Product";
import { useProducts, featuredProduct } from "../useProduct";
import MainSlider from "../../MainSlider";
import GategorySlider from "../../GategorySlider";
import { Helmet } from "react-helmet";
export default function Home() {
  let { data, isLoading, error, isError} = useProducts(
    "product",
    featuredProduct
  );
  // console.log(data)

  if (isLoading) return <Loading></Loading>;

  if (isError) return <h2 className="text-center">{error.message}</h2>;

  return (
    <div className="container">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <MainSlider />
      <GategorySlider />
      <div className="row gy-2 gx-0 my-5">
        {data?.map((prod) => (
          <Product key={prod._id} prod={prod}></Product>
        ))}
      </div>
    </div>
  );
}
