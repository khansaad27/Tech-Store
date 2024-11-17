import React, { useState } from 'react';
import Image from '../layer/Image';
import logo from '../../public/assets/logo/1.svg';
import logo2 from '../../public/assets/logo/Logo.svg';
import Container from '../layer/Container';
import Li from '../layer/Li';
import Button from '../layer/Button';
import { IoCloseSharp, IoSearch } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi';
import { RiAccountCircleLine } from 'react-icons/ri';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const CloseSearch = () => {
    setSearchActive((prev) => !prev);
  };

  const barClick = () => {
    setDropDown((prev) => !prev);
  };

  return (
    <nav className="border-b border-primary md:bg-[#FFFFFF] bg-blue">
      <Container className="devFlex justify-between md:py-4 py-2 md:px-6 px-3 relative">
        {/* Left Section */}
        <div>
          <div className="pr-3 cursor-pointer">
            <FaBars onClick={barClick} className="block md:hidden text-white" />
          </div>
          <div className="md:bg-transparent bg-blue md:static absolute left-4 -top-2 md:rounded-none rounded-t-full -translate-y-1/2">
            <Image href="/" src={logo} alt="Logo" className="hidden md:block w-10 h-10" />
            <Image href="/" src={logo2} alt="Logo" className="md:hidden block" />
          </div>
        </div>

        {
          searchActive ?
            (
              <div className="flex-grow md:mx-7  relative  ">
                <IoSearch className=' cursor-pointer md:text-black text-primary  absolute md:right-7 right-[85%] top-1/2 -translate-y-1/2' />
                <input type="text" className=' w-full bg-F5  md:py-4 py-2 md:px-7 px-11 text-primary text-sm font-Poppins border border-primary rounded-full focus:outline-none' placeholder='Search   here...' />
              </div>
            ) : (

              <ul className={`md:flex hidden space-x-6 py-[15px] font-semibold text-gray-700 
                }`}
              >
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


        {/* Right Section */}
        <div className="devFlex space-x-6">
          {!searchActive && <Button className="hidden md:block">Our Deals</Button>}
          <div className="devFlex md:gap-7 gap-2 ml-2">
            {searchActive ? (
              <span
                onClick={CloseSearch}
                className="text-xl cursor-pointer transition-transform duration-300"
              >
                <IoCloseSharp className="md:text-blue text-white" />
              </span>
            ) : (
              <span
                onClick={CloseSearch}
                className="text-xl cursor-pointer md:text-black text-white transition-transform duration-300"
              >
                <IoSearch />
              </span>
            )}
            <span className="text-xl cursor-pointer relative">
              <FiShoppingCart className="text-[30px] md:text-black text-white scale-x-[-1]" />
              <span className="absolute -top-2 -right-3 md:bg-blue bg-white md:text-white text-blue text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </span>
            <span className="text-[30px] md:text-black text-white cursor-pointer">
              <RiAccountCircleLine />
            </span>
          </div>
        </div>

        {/* Full-Screen Dropdown Menu (Mobile Only) */}
        {dropDown && (
          <div className=" md:static absolute -top-[33px] left-0 w-full max-w-md  pb-[240px] bg-white z-50 p-6 flex flex-col  gap-y-[13px] md:hidden">
            <div className="flex justify-between items-center border-b pb-6 border-[#CACDD8]">
              <Image href="/" src={logo} alt="Logo" className=" pl-[6px] w-10 h-10" />
              <IoCloseSharp
                onClick={barClick}
                className="text-black text-3xl cursor-pointer"
              />
            </div>
            <ul className=" space-y-4 text-lg font-semibold pl-[10px] ">
              <Li href="/laptops">Laptops</Li>
              <Li href="/desktops">Desktop PCs</Li>
              <Li href="/networking-devices">Networking Devices</Li>
              <Li href="/printers">Printers & Scanners</Li>
              <Li href="/pc-parts">PC Parts</Li>
              <Li href="/all-products">All Other Products</Li>
              <Li href="/repairs">Repairs</Li>
            </ul>
            <Button className=" self-start px-14 ml-[10px]  ">Our Deals</Button>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default NavBar;
