import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import ScrollToTop from "react-scroll-to-top";

export default function Layout() {
  return (
    <div className='parent '>
      <Navbar/>
      <Outlet/>
      <ScrollToTop smooth color="white" style={{backgroundColor:'#0aad0a',fontWeight:'bold'}}/>
      <Footer/>
    </div>
  )
}
