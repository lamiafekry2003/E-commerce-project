
import React,{ useState }from 'react'
import Loading from '../Loading';
import Product from '../Product';
import { useProducts,featuredProduct } from '../useProduct';
import { Helmet } from 'react-helmet';

export default function Products() {
  let [page, setPage] = useState(1)
  let{data,isLoading,error,isError,isFetched}=useProducts(['product',page],featuredProduct)
  let [searchedArr, setSearchedArr] = useState([])
  function search(e) {
    let term = e.target.value
    let newArr = data?.filter((ele) => ele?.title.toLowerCase().trim().includes(term.toLowerCase().trim()))
    setSearchedArr(newArr)
  }
  function getPageNum(event){
    let page=event.target.getAttribute('PageNum')
    setPage(page);
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
      {/* ---------------------------------------- */}
      <nav aria-label="Page  navigation example">
            <ul className="pagination mt-5 justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item cursor-pointer"><a className="page-link" onClick={() => setPage(1)}>1</a></li>
              <li className="page-item cursor-pointer"><a className="page-link" onClick={() => setPage(2)} >2</a></li>

              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
      
    </div>
  )
}
