import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../UserContext";
import { Helmet } from "react-helmet";
import {
  clearCart,
  getCart,
  removeprodCart,
  updateprodCart,
  useCartCurd,
  useGetCart,
} from "../useCart";
import Loading from "../Loading";
import emptycart from "../../assessts/preview.png";

export default function Cart() {
  let { open, setOpen } = useContext(userContext);
  let { data, isError, isLoading } = useGetCart("getCart", getCart);
  // console.log(data)
  let {
    mutate,
    // data: deletedData,
    isLoading: removecard,
  } = useCartCurd(removeprodCart);
  let { mutate: clear, isLoading: isclear } = useCartCurd(clearCart);
  // console.log(deletedData?.data?.status)
  let {
    mutate: updatedata,
    // data: updatedData,
    isLoading: isubdate,
  } = useCartCurd(updateprodCart);
  if (isLoading) return <Loading></Loading>;
  if (isubdate) return <Loading></Loading>;
  if (removecard) return <Loading></Loading>;
  if (isclear) return <Loading></Loading>;


  if (isError)
    return (
      <div className=" mt-5 ">
        <h2 className=" text-main text-center fw-bold">Cart Empty</h2>
        <img src={emptycart} alt="emptycart" className="w-75 noorder" />
      </div>
    );

  return (
    <div>
      <Helmet>
        <title>Cart</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      {/* this cart */}
      {data?.data?.numOfCartItems === 0 ? (
        <div className="  ">
         <h2 className=" text-main text-center fw-bold">Cart Empty</h2>
         <img src={emptycart} alt="emptycart" className="w-75 noorder" />
      </div>
      ) : (
        <h2 className="text-center fw-bold text-main mt-5  p-5">Shop Cart</h2>
      )}
      {/* aside cart */}
      <aside
        className={data?.data?.numOfCartItems ? "main-color" : "fff"}
        style={
          open
            ? { right: "0", transition: "right .5s" }
            : { right: "-100%", transition: "right .5s" }
        }
      >
        <i
          className="fa-solid fa-close p-3 fa-2x curser"
          onClick={() => {
            setOpen(false);
          }}
        ></i>
        <div className="container">
          {data?.data?.numOfCartItems ? (
            <>
              <h3 className="fw-bold">Shop Cart :</h3>
              <p className="fw-bold my-1">
                Number of All Items :{" "}
                <span className="text-main">
                  {data?.data?.numOfCartItems} item
                </span>
              </p>
              <p className="text-main fw-bold">
                Total Cart Price : {data?.data?.data?.totalCartPrice} EGP
              </p>
              <button
                className="btn btn-bord fw-bold clear ms-auto d-block "
                onClick={clear}
              >
                <i className="fa-solid text-main fa-trash me-auto"></i> Clear
                Cart
              </button>
              {data?.data?.data?.products?.map((prod) => (
                <div key={prod.product._id} className=" row my-3 ">
                  <div className="col-md-8">
                    <div className="row gy-3 ">
                      <div className="col-md-2">
                        <img
                          src={prod?.product?.imageCover}
                          className="w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-md-10 my-auto">
                        <p className="fw-bold">{prod.product.title}</p>
                        <p className="fw-bold text-main">
                          Price : {prod.price} EGP
                        </p>
                        <p className="fw-bold">
                          <i
                            class="fa-solid  fa-trash-can text-main mx-2 cursor-pointer"
                            onClick={() => {
                              mutate(prod.product._id);
                            }}
                          ></i>
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 ms-auto d-flex justify-content-end my-auto">
                    <div>
                      <button
                        className="btn btn-bord"
                        onClick={() =>
                          prod.count === prod.quantity
                            ? prod.count
                            : updatedata({
                                id: prod.product._id,
                                count: prod.count + 1,
                              })
                        }
                      >
                        +
                      </button>
                      <span className="mx-3">{prod.count}</span>
                      <button
                        className="btn btn-bord"
                        onClick={() =>
                          prod.count === 1
                            ? mutate(prod.product._id)
                            : updatedata({
                                id: prod.product._id,
                                count: prod.count - 1,
                              })
                        }
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <hr className="container w-100 my-2" />
                </div>
              ))}
              <Link to="/address" className="btn btn-bord fw-bold  my-3 w-25">
                <span className="fw-bold ">CheckOut</span>
                <i className="fa-brands  text-main me-auto fa-cc-visa mt-3 mx-2 fa-xl"></i>
              </Link>
            </>
          ) : (
            <div className=" mt-5 ">
              <h2 className=" text-main text-center fw-bold">Cart Empty</h2>
              <img src={emptycart} alt="emptycart" className="w-75 noorder" />
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
