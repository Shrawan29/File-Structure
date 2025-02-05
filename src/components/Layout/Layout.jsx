import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
const Layout = () => {
  return (
    <div className=' stick min-h-screen  flex-col overflow-hidden'>
    <Navbar/>
    
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout