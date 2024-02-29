
import React,{ useState }from 'react'
import Loading from '../Loading';
import Product from '../Product';
import { useProducts,featuredProduct } from '../useProduct';
import { Helmet } from 'react-helmet';

export default function Products() {

  let{data,isLoading,error,isError,isFetched}=useProducts('product',featuredProduct)
  let [searchedArr, setSearchedArr] = useState([])
  function search(e) {
    let term = e.target.value
    let newArr = data?.filter((ele) => ele?.title.toLowerCase().trim().includes(term.toLowerCase().trim()))
    setSearchedArr(newArr)
  }

  if(isLoading)
   return <Loading></Loading>
  

  if(isError)
   return <h2>{error.message}</h2>

  return (
    <div className='container'>
      <Helmet>
        <title>Products</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
      <div className='w-75 mx-auto  mt-5 p-5 form-group has-search'>
      <span className="fa fa-search form-control-feedback"></span>
        <input type="text" className='form-control 'placeholder='search' onChange={search} />
      </div>
      <div className="row gy-5">
        {/* {searchedArr.length ? searchedArr?.map((prod)=><Product key={prod._id} prod={prod}></Product>)} */}
        {
          searchedArr.length ? searchedArr?.map((prod) => <Product key={prod._id} prod={prod}></Product>) : data?.map((prod) => <Product key={prod._id} prod={prod}></Product>)
        }
      </div>
      
    </div>
  )
}
