import React from 'react'
import Container from '../layer/Container'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { ImFacebook2 } from 'react-icons/im'
import { AiFillInstagram } from 'react-icons/ai'

const TopBar = () => {

  return (
    <div className="bg-black md:py-4 py-2 md:px-6 px-3" >
      <Container className=" devFlex md:justify-between justify-end md:gap-2 gap-6 ">

        <div className='devFlex md:gap-1' >
          <span className="fontSize text-[#ACACAC] ">Mon–Thu: </span>

          <span className="fontSize text-[#ffff]"> 9:00 AM – 5:30 PM </span>

          <IoIosArrowDown className=" text-white  cursor-pointer md:ml-1" />
        </div>
        <div className='devFlex gap-1 ' >
          <p className="fontSize text-[#ACACAC] hidden md:block ">Visit our showroom in 1234 Street Address City, 1234</p>
          <span className="underline  fontSize text-[#ffff] "><Link>Contact Us</Link></span>
        </div>

        <div className=' hidden md:block pr-1  '>
          <div className='devFlex  gap-4 ' >
            <span className="fontSize text-[#ffffff] ">Call Us: </span>
            <span className="fontSize text-[#ffff]"> (00) 1234 5678 </span>
            <div className=" devFlex gap-1 text-white">
              <ImFacebook2 />
              <AiFillInstagram className='text-xl' />
            </div>
          </div>

        </div>

      </Container>
    </div>
  )
}

export default TopBar 