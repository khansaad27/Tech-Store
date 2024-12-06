import React from 'react'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Services from '../component/Services/Services'

const RootLayOut = () => {
  return (
    <div  >
      <Header />
       <Outlet />
      <Services />
      <Footer />
    </div>
  )
}

export default RootLayOut