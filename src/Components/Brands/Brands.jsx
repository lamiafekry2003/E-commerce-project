import React, { useContext } from "react";
import { counterContext } from "../../CounterContext";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../Loading";
export default function Brands() {
  function getBrands() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`);
  }
  let { data, refetch, isLoading, error, isError } = useQuery(
    "getbrands",
    getBrands,
    {
      select: (data) => data?.data?.data,
      // enabled:false
      // data not show even do event onQuery:refetch
    }
  );

  // data not show even do event onQuery:refetch
  if (isLoading) return <Loading></Loading>;

  if (isError) return <h2 className="text-center">{error.message}</h2>;

  console.log(data);

  // console.log(x)
  return (
    // onClick={()=>refetch()
    <div className="container">
      <Helmet>
        <title>Brands</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <h1 className="text-center mt-5 p-5 text-main fw-bold cursor-pointer">
        Brands
      </h1>
      <div className="row">
        {data?.map((brand) => (
          <div key={brand?._id} className="col-md-3 text-center">
            <div className="product  cursor-pointer p-1">
              <div data-bs-toggle="modal" data-bs-target={"#" + brand?.name}>
                <img src={brand.image} alt="" />
                <p className="text-center text-main fw-bold">{brand.name}</p>
              </div>
            </div>
          </div>
        ))}
        {data?.map((brand) => (
          <>
            <div
              class="modal fade"
              id={brand?.name}
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  <div class="modal-body">
                    <img src={brand?.image} alt="" className="w-100" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
