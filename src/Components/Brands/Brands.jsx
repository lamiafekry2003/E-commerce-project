import React, { useContext } from 'react'
import { counterContext } from '../../CounterContext'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { useQuery } from 'react-query'
import Loading from '../Loading'
import { Link } from 'react-router-dom'
export default function Brands() {
  function getBrands(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }
  let{data,refetch,isLoading,error,isError}=useQuery('getbrands',getBrands,{
    select:(data)=>data?.data?.data,
    // enabled:false
    // data not show even do event onQuery:refetch
  })
  if (isLoading) return <Loading></Loading>;

  if (isError) return <h2 className='text-center'>{error.message}</h2>;

  console.log(data)
  
  // console.log(x)
  return (
    // onClick={()=>refetch()
    <div className='container'>
      <Helmet>
        <title>Brands</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <h1 className='text-center  my-3 text-main fw-bold cursor-pointer' >Brands</h1>
      <div className="row">
        {data?.map((brand)=><div key={brand?._id} className='col-md-3 text-center'>
         <div className='product  cursor-pointer p-2'>
          <Link to={`/brands/${brand?._id}`}>
           <img src={brand.image} alt="" />
           <p className='text-center fw-bold'>{brand.name}</p>
           </Link>
         </div>
        </div>)}
      </div>
    </div>
  )
}
