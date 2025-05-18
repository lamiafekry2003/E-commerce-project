import React, { useContext } from 'react'
import appstor from '../../assessts/appst.png'
import googleplay from '../../assessts/images (1).png'
import { userContext } from '../../UserContext';
export default function Footer() {
     const { user } = useContext(userContext);
  return (
    <>
      {user ? (
        <div className='bg-main-light py-4'>
          <div className="container">
            <h4 className='fw-bold'>Get The Fresh CartApp</h4>
            <p className='lead' style={{color:'#6f787f'}}>we will send you a link, open it on your phone to download the app</p>
            <form action="">
              <div className="row">
                <div className="col-md-10 mt-2">
                  <input type="text" className='form-control' placeholder='Email' />
                </div>
                <div className="col-md-2 mt-2">
                  <button className='btn text-white green-color'>Share App Link</button>
                </div>
              </div>
            </form>
            <hr className='mt-4' style={{color:'#a7acb0'}}/>
            <div className="icon my-auto">
              <div className="row">
                <div className="col-md-6 d-flex mt-2">
                  <p className='mx-3 fw-bold'>Payment Partners</p>
                  <i className="fa-brands fa-amazon-pay  mt-3 fa-xl"></i>
                  <i className="fa-brands fa-paypal mt-3 mx-2 fa-xl"></i>
                  <i className="fa-brands fa-cc-mastercard  mt-3 mx-2 fa-xl"></i>
                  <i className="fa-brands fa-cc-visa mt-3 mx-2 fa-xl"></i>
                </div>
                <div className="col-md-6 d-flex  justify-content-end" >
                  <p className='mt-2 fw-bold mx-3'>Get delivers With fresh card</p>
                  <img src={appstor} className='mt-2 mx-2' style={{width:'80px',height:'25px'}} alt="" />
                  <img src={googleplay} className='mt-2 mx-2' style={{width:'80px',height:'25px'}} alt="" />
                </div>
              </div>
            </div>
            <hr className='mt-4' style={{color:'#a7acb0'}}/>
            <div className="row">
              <div className="col-md-12 d-flex justify-content-center">
                <p className='fw-bold my-auto' >Crtead By <span style={{color:'#0aad0a'}}>Flash@.com</span></p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

