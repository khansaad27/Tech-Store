import React from 'react'

const Button = ({ children, className, url }) => {
  const handleClick = () => {
    window.location.href = url;
  }
  return (
    <button onClick={handleClick} className={` py-2 px-6 font-Poppins font-semibold text-sm   border-2 border-blue text-blue rounded-full hover:bg-blue hover:text-white transition duration-300 ${className}`} >
      {children}
    </button>
  );
};

export default Button