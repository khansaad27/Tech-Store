import React, { useState } from 'react';
import Image from '../layer/Image';
import logo from '../../public/assets/logo/1.svg';
import logo2 from '../../public/assets/logo/Logo.svg';
import Container from '../layer/Container';
import Li from '../layer/Li';
import { NavLink } from 'react-router-dom';
import Button from '../layer/Button';
import { IoCloseSharp, IoSearch } from 'react-icons/io5';
import { FiShoppingCart } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import SearchInput from '../layer/SearchInput ';
import AccountDropdown from '../layer/AccountDropdown';

const NavBar = () => {
  // State for toggling the search bar
  const [searchActive, setSearchActive] = useState(false);

  // State for toggling the dropdown menu (mobile view)
  const [dropDown, setDropDown] = useState(false);


  // Toggle the search bar's visibility
  const CloseSearch = () => {
    setSearchActive((prev) => !prev);
  };

  // Toggle the dropdown menu's visibility
  const barClick = () => {
    setDropDown((prev) => !prev);
  };

  // Array of navigation menu items
  const menuItems = [
    { href: "/hello", label: "Laptops" },
    { href: "/bng", label: "Desktop PCs" },
    { href: "/networking-devices", label: "Networking Devices" },
    { href: "/printers", label: "Printers & Scanners" },
    { href: "/pc-parts", label: "PC Parts" },
    { href: "/all-products", label: "All Other Products" },
    { href: "/repairs", label: "Repairs" },
  ];
  /////////////////////////////////////

  return (
    <nav className="border-b border-primary md:bg-[#FFFFFF] bg-blue">
      <Container className="devFlex  justify-between  md:py-4 py-2 md:px-6 px-3 relative">
        {/* Left Section: Logo and Mobile Menu Button */}
        <div className='  '>
          {/* Mobile Menu Button */}
          <div className="pr-3 cursor-pointer">
            <FaBars onClick={barClick} className="block md:hidden text-white" />
          </div>
          {/* Logo for Desktop View */}
          <Image href="/" src={logo} alt="Logo" className="hidden md:block w-10 " />
          <div className="md:bg-transparent  bg-blue absolute  left-4   -top-2  rounded-t-full -translate-y-1/2">
            {/* Logo for Mobile View */}
            <Image href="/" src={logo2} alt="Logo" className="md:hidden block" />
          </div>
        </div>

        {/* Search Bar or Menu Items */}
        {searchActive ? (
          // Search Bar (Visible when searchActive is true)
          <SearchInput />
        ) : (
          // Navigation Links (Visible on Desktop view when searchActive is false)
          <ul className="md:flex hidden space-x-6 py-[15px] font-semibold text-gray-700">
            {menuItems.map((item) => (
              <Li
                key={item.href}>
                <NavLink
                  to={item.href} // Use `to` for NavLink
                  className={({ isActive }) =>
                    isActive
                      ? '  text-blue  ' // Active link styling
                      : ' text-black ' // Default link styling
                  }
                >
                  {item.label}
                </NavLink>
              </Li>
            ))}
          </ul>
        )}

        {/* Right Section: Buttons and Icons */}
        <div className="devFlex space-x-6">
          {/* "Our Deals" Button (Visible on Desktop view) */}
          {!searchActive && <Button url="/" className="hidden md:block">Our Deals</Button>}
          <div className="devFlex md:gap-7 gap-2 ml-2">
            {/* Search Icon (Toggles search bar visibility) */}
            {searchActive ? (
              <span
                onClick={CloseSearch}
                className="text-xl cursor-pointer transition-transform duration-300"
              >
                <IoCloseSharp className="md:text-black  text-white" />
              </span>
            ) : (
              <span
                onClick={CloseSearch}
                className="text-xl cursor-pointer md:text-black text-white transition-transform duration-300"
              >
                <IoSearch />
              </span>
            )}

            {/* Shopping Cart Icon */}
            <span className="text-xl cursor-pointer relative">
              <FiShoppingCart className="text-[30px] md:text-black text-white scale-x-[-1]" />
              {/* Cart Item Count Badge */}
              <span className="absolute -top-2 -right-3 md:bg-blue bg-white md:text-white text-blue text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </span>

            {/* Account Icon */}
            <AccountDropdown />

          </div>
        </div>

        {/* Dropdown Menu for Mobile View */}
        {dropDown && (
          <div className="md:static absolute -top-[33px] left-0 w-[299px] pb-[240px] bg-white z-50 p-6 flex flex-col gap-y-[13px] md:hidden">
            {/* Dropdown Header */}
            <div className="flex justify-between items-center border-b pb-6 border-[#CACDD8]">
              <Image href="/" src={logo} alt="Logo" className="pl-[6px] w-10 h-10" />
              <IoCloseSharp
                onClick={barClick}
                className="text-black text-3xl cursor-pointer"
              />
            </div>

            {/* Dropdown Menu Items */}
            <ul className="space-y-2 text-lg font-semibold">
              {menuItems.map((item) => (
                <Li
                  key={item.href}
                  href={item.href}
                  className="group pt-3 pb-2 hover:bg-[#F5F7FF] hover:pl-[10px] devFlex justify-between transition-all duration-300"
                >
                  <span className="devFlex gap-1">
                    <MdOutlineKeyboardArrowLeft
                      className="opacity-0 group-hover:opacity-100 text-[#6C757D] transition-all duration-300"
                    />
                    {item.label}
                  </span>
                  <MdOutlineKeyboardArrowRight
                    className="text-[#6C757D] group-hover:opacity-0 transition-all"
                  />
                </Li>
              ))}
            </ul>

            {/* "Our Deals" Button */}
            <Button url="/" className="self-start !px-14 ml-[10px]">Our Deals</Button>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default NavBar;
