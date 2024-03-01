import React from 'react'
import axios from 'axios';
import Loading from './Loading';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export default function BrandDetails() {
    const { id } = useParams();
    function getSpecificBrands(id){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
      }
      let{data,isLoading,error,isError}=useQuery('getSpecificbrands',()=> getSpecificBrands(id),{
        select:(data)=>data?.data?.data,
         // data not show even do event onQuery:refetch
      })
      console.log(data)
      if (isLoading) return <Loading></Loading>;
    
      if (isError) return <h2>{error.message}</h2>;
      return (
        <div className="container">
          <Helmet>
            <title>BrandDetails</title>
            <meta name="description" content="Helmet application" />
        </Helmet>
          <div className="row align-items-center my-3 main-color">
            {/* <img src={data.image} alt="" /> */}
           <div className="col-md-4">
             <img src={data.image} className='w-100' alt="" />
           </div>
           {/* <div className="col-md-8">
            <div className=" d-flex justify-content-between">
            <h3 className="fw-bold ">{data?.name}</h3>
            <div className='d-flex justify-content-between flex-column'>
             <p className='fw-bold'>CreatedAt : <span className='text-main fw-bold'>{data?.createdAt}</span></p>
             <p className='fw-bold'>updatedAt : <span className='text-main fw-bold'>{data?.updatedAt}</span></p>
            </div> */}
            <div className="col-md-8">
             <h3 className='fw-bold my-4'>{data?.name}</h3> 
             <p>updatedAt: <span className='text-main fw-bold'>{data?.updatedAt}</span></p>
            </div>
          </div>
           </div>
          // </div>
        // </div>
      );
}
