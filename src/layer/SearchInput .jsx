import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  const [placeholderText, setPlaceholderText] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setPlaceholderText("Search entire store here...");
      } else {
        setPlaceholderText("Search here...");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex-grow md:mx-7 relative">
      <IoSearch className="cursor-pointer md:text-black text-primary absolute md:right-7 right-[85%] top-1/2 -translate-y-1/2" />
      <input
        type="text"
        className="w-full bg-F5 md:py-4 py-2 md:px-7 px-10 text-primary text-sm font-Poppins border border-primary rounded-full focus:outline-none"
        placeholder={placeholderText}
      />
    </div>
  );
};

export default SearchInput;
