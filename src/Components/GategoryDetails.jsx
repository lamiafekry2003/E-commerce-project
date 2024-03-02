import React from 'react'
import { getSingleGategory, useGetGat } from './useGategory'
import { useParams} from 'react-router-dom'
import Loading from './Loading'
import { Helmet } from "react-helmet";
export default function GategoryDetails() {
  const { id } = useParams();
    let {data,isLoading ,isError ,error} =useGetGat('gategoryDetails',()=>getSingleGategory(id),
        )
        if(isLoading)
   return <Loading></Loading>
  

  if(isError)
   return <h2>{error.message}</h2>

    console.log(data)
  return (
    <div className='container mt-5 p-5'>
      <Helmet>
        <title>UpdatePassword</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
        <div className="row align-items-center  main-color">
         <div className="col-md-4">
            <img src={data?.data?.data?.image} alt="" className="w-75 my-1" />
         </div>
         <div className="col-md-8">
             <h3 className='fw-bold my-4'>{data?.data?.data?.name}</h3> 
             <p>updatedAt: <span className='text-main fw-bold'>{data?.data?.data?.updatedAt}</span></p>
         </div>
        </div>
    </div>
  )
}
