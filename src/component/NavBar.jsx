import React, { useState } from 'react'
import Image from '../layer/Image';
import logo from '../../public/assets/logo/1.svg'
import logo2 from '../../public/assets/logo/Logo.svg'
import Container from '../layer/Container';
import Li from '../layer/Li';
import Button from '../layer/Button';
import { IoCloseSharp, IoSearch } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi';
import { RiAccountCircleLine } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {

  const [searchActive, setSearchActive] = useState(false);

  const CloseSearch = () => {
    setSearchActive(!searchActive)
  }

  return (
    <nav className='border-b border-primary '>
      <Container className="devFlex justify-between   md:py-4 py-2 md:px-6 px-3  md:bg-[#FFFFFF]  bg-blue relative" >
        <div className=" pr-3   ">
          <FaBars className='block md:hidden  text-white ' />
        </div>
        <div className=" md:bg-transparent bg-blue md:static absolute left-4 -top-2 md:rounded-none rounded-t-full -translate-y-1/2">
          <Image href='/' src={logo} alt="src" className=" hidden md:block w-10 h-10  " />
          <Image href='/' src={logo2} alt="src" className=" md:hidden block" />
        </div>

        {
          searchActive ?
            (
              <div  className="flex-grow md:mx-7  relative  ">
                <IoSearch className=' cursor-pointer md:text-black text-primary  absolute md:right-7 right-[85%] top-1/2 -translate-y-1/2' />
                <input type="text"  className=' w-full  md:py-4 py-2 md:px-7 px-11 text-primary text-sm font-Poppins border border-primary rounded-full focus:outline-none' placeholder='Search   here...' />
              </div>
            ) : (
              <ul className="hidden md:flex space-x-6 py-[15px] font-semibold text-gray-700">
                <Li href="/laptops" className='text-blue' >Laptops</Li>
                <Li href="/desktops" className='' >Desktop PCs</Li>
                <Li href="/networking-devices" className='' >Networking Devices</Li>
                <Li href="/printers" className='' >Printers & Scanners</Li>
                <Li href="/pc-parts" className='' >PC Parts</Li>
                <Li href="/all-products" className='' >All Other Products</Li>
                <Li href="/repairs" className='' >Repairs</Li>
              </ul>
            )
        }



        <div className="devFlex space-x-6">
          {
            !searchActive && (
              <Button className=' md:block hidden '  >
                Our Deals
              </Button>
            )
          }

          <div className="devFlex  md:gap-7 gap-2 ml-2 ">
            {
              searchActive ?
                (
                  <span onClick={CloseSearch} className="text-xl cursor-pointer   transition-transform duration-300  "><IoCloseSharp className=' md:text-blue text-white ' /></span>
                ) : (
                  <span onClick={CloseSearch} className="text-xl cursor-pointer  transition-transform duration-300  "><IoSearch /></span>
                )
            }

            <span className="text-xl cursor-pointer  relative ">

              <FiShoppingCart className='text-[30px] md:text-black text-white   scale-x-[-1]' />
              <span className="absolute -top-2 -right-3 md:bg-blue bg-white md:text-white text-blue text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">2</span>

            </span>
            <span className=" text-[30px] md:text-black text-white cursor-pointer "><RiAccountCircleLine /></span>
          </div>
        </div>
      </Container>
    </nav>
  );
};


export default NavBar