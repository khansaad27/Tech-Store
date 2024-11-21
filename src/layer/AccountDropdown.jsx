import React, { useState, useEffect, useRef } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Menu items array
  const menuItems = [
    { label: "My Account", path: "/" },
    { label: "My Wish List (0)", path: "/" },
    { label: "Compare (0)", path: "/" },
    { label: "Create an Account", path: "/" },
    { label: "Sign In", path: "/" },
  ];
  
  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <span
        className="text-[30px] md:text-black text-white cursor-pointer"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <RiAccountCircleLine />
      </span>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute md:-right-4 -right-2 mt-2 w-48 py-2 bg-white border border-gray-200 rounded-md shadow-lg z-10"
          role="menu"
          aria-labelledby="account-menu"
        >
          <div className="absolute top-0 md:right-6 right-4 transform -translate-y-2 w-4 h-4 bg-white border-t border-l border-gray-200 rotate-45"></div>

          <ul className="py-1">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2  hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                <Link to={item.path} className="block accountDropdown ">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
