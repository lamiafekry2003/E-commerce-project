import React, { useState } from 'react'
import { Bars } from 'react-loader-spinner'
import { Helmet } from 'react-helmet';
import { checkOut, getCart, useCartCurd, useGetCart } from '../useCart';
export default function Address() {
    const [details,setDetails]=useState('');
    const [phone,setPhone]=useState('');
    const [city,setCity]=useState('')
    const [loading, setLoading] = useState(false);
    let {data}=useGetCart('getCart',getCart)
    // console.log(data)
    let {mutate,data:addr}=useCartCurd(checkOut);
    function addAddress(e){
        e.preventDefault();
        let shippingAddress={
            details,phone,city
        }
        mutate({id:data?.data?.data?._id,shippingAddress})
        console.log(addr)
        if(addr?.data?.status === 'success') {
            window.location.href = addr?.data?.session?.url
        }
        
        // console.log(data?.data?.data?._id)
        // console.log(shippingAddress)
    }
  return (
    <div className='container py-4'>
      <Helmet>
        <title>Address</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
        <div className="row">
            <div className="col-md-12 mt-5 p-5">
             <form action="" className="w-75 mx-auto my-4">
                <h4 className="mb-2 font-weight-bolder text-center fw-bold fs-2">Your Address :</h4>
                <label htmlFor="details">Details-Address</label>
                <input type="text"name="details"id="details"className="form-control mb-3" onChange={(e)=>setDetails(e.target.value)}/>
                <label htmlFor="phone">Phone</label>
                <input type="tel"name="phone"id="phone"className="form-control mb-3" onChange={(e)=>setPhone(e.target.value)}/>
                <label htmlFor="city">City</label>
                <input type="text"name="city"id="city"className="form-control mb-3" onChange={(e)=>setCity(e.target.value)}/>
                <button
              className="btn text-white green-color ms-auto d-block"
              type="submit" onClick={addAddress}
            >
              {loading ? (
                <Bars
                  height="20"
                  width="40"
                  color="white"
                  ariaLabel="bars-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                ></Bars>
              ) : (
                "CheckOut"
              )}
            </button>
             </form>
            </div>
        </div>
    </div>
  )
}
