import React from "react";
import { useNavigate } from "react-router-dom";
import ViewBar from "../ViewBar/ViewBar";

const PTopBar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center  justify-between py-4  border-b border-gray-300">
      <div className=" devFlex ">
        <button
          onClick={() => navigate(-1)}
          className="font-Poppins text-sm  px-[90px] font-semibold text-black hover:underline"
        >
          &lt; Back
        </button>
        <span className=" font-Poppins text-sm text-primary">Items 1-5 of 81</span>
      </div>
      


      {/* Right Controls */}
      <div className="flex items-center space-x-4">
        {/* Sort By Dropdown */}
        <div className="relative">
          <select
            className="border bg-white border-primary text-black rounded-md py-1 px-2  font-Poppins text-sm font-semibold leading-[1.70em] focus:outline-none focus:ring-2 focus:ring-blue"
          >
            <option value="position">Position</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>

        {/* Items Per Page Dropdown */}
        <div className="relative">
          <select
            className="border bg-white  border-primary text-black rounded-md py-1 px-2 font-Poppins text-sm font-semibold leading-[1.70em] focus:outline-none focus:ring-2 focus:ring-blue"
          >
            <option value="36">36 per page</option>
            <option value="48">48 per page</option>
            <option value="60">60 per page</option>
          </select>
        </div>

        {/* View Options */}
        <div className="flex space-x-2">
          <ViewBar />
        </div>
      </div>
    </div>

  );
};

export default PTopBar;
