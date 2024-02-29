import React from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../Loading";
import noorder from "../../assessts/preview.png";
import { Helmet } from "react-helmet";
export default function Orders() {
  const { id } = jwtDecode(localStorage.getItem("userToken"));
  console.log(id)

  function getAllOrders(id) {
    return axios.get(
      `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`
    );
  }
  let { data, isLoading, isError, error } = useQuery("allorders", () =>
    getAllOrders(id)
  );
  if (isLoading) return <Loading></Loading>;

  if (isError) return <h2>{error.message}</h2>;
  // console.log(data?.data);
  return (
    <div className="container">
      <Helmet>
        <title>Orders</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      {data?.data?.length > 0 ? (
        <>
          <h2 className="fw-bold text-center mt-5 p-5 text-main">All Order</h2>
          {data?.data?.map((order) => (
            <div className="row  d-flex justify-content-center " key={order.id}>
              <div className="order shadow-lg bg-body-tertiary rounded p-4 my-5">
                <div className="d-flex align-items-center justify-content-between">
                  <h2 className="fw-bold h1"># {order.id}</h2>
                  <p className="">
                    Order Created :{" "}
                    <span className="text-main fw-bold">{order.createdAt}</span>
                  </p>
                  {/* <h4 className='fw-bold   text-main '>Processing</h4> */}
                </div>
                <p>
                  You Have Order{" "}
                  <span className="fw-bold text-main">
                    {order.cartItems.length}
                  </span>{" "}
                  items..
                </p>
                <div className="row">
                  {order?.cartItems?.map((item) => (
                    <div className="col-md-2">
                      <img
                        src={item?.product?.imageCover}
                        alt=""
                        className=" w-100"
                      />
                      <h2 className="h5 text-main my-1 text-center">
                        {item?.product?.category?.name}
                      </h2>
                      <p className="text-center">{item?.product?.title}</p>
                      <div className="box d-flex justify-content-between">
                        <span>{item?.price} EGP</span>
                        <span>
                          <i className="fa-solid fa-star rating-color"></i>
                          {item?.product?.ratingsAverage}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <hr />

                <p>
                  <strong>Total amount : </strong>
                  <span className="text-main fw-bold">
                    {order.totalOrderPrice} EGP
                  </span>
                </p>
                <p>
                  <strong>payment Method Type : </strong>
                  <span className="text-main fw-bold">
                    {order.paymentMethodType}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </>
      ) : (
          <div className=" mt-5 ">
           <h2 className="pt-5 text-main text-center fw-bold">No Order Found</h2>
           <img src={noorder} alt="noorder" className='w-75 noorder' />
          </div>
        // <img src={noorder} alt="noorder" className='w-50 noorder' />
      )}
    </div>
  );
}
