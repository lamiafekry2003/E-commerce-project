import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import ScrollToTop from "react-scroll-to-top";

export default function Layout() {
  return (
    <div className=''>
     <Navbar></Navbar>
     <div className="parent">
     <Outlet/>
     <ScrollToTop smooth style={{backgroundColor:'#0aad0a'}} color='white'/>
     </div>
      <Footer/>
    </div>
    
  )
}
