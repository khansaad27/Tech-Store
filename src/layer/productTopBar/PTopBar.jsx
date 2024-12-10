import React from "react";
import { useNavigate } from "react-router-dom";
import ViewBar from "../ViewBar/ViewBar";

const PTopBar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap items-center justify-between py-4 border-b border-gray-300 space-y-4 lg:space-y-0">
      {/* Left Section */}
      <div className="flex flex-wrap items-center justify-center lg:justify-start space-y-2 lg:space-y-0">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="font-Poppins text-sm px-6 lg:px-[90px] font-semibold text-black hover:underline"
        >
          &lt; Back
        </button>
        {/* Item Range Info */}
        <span className="font-Poppins text-sm text-primary lg:ml-4">
          Items 1-20 of 20
        </span>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap items-center justify-center lg:justify-end space-x-4 space-y-2 lg:space-y-0">
        {/* Sort By Dropdown */}
        <div className="relative w-full sm:w-auto">
          <label className="text-gray-600 mr-2" htmlFor="sort">
            Sort By:
          </label>
          <select
            id="sort"
            className="w-full sm:w-auto border bg-white border-primary text-black rounded-md py-1 px-2 font-Poppins text-sm font-semibold leading-[1.70em] focus:outline-none focus:ring-2 focus:ring-blue"
          >
            <option value="position">Position</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>

        {/* Items Per Page Dropdown */}
        <div className="relative w-full sm:w-auto">
          <label className="text-gray-600 mr-2" htmlFor="perPage">
            Show:
          </label>
          <select
            id="perPage"
            className="w-full sm:w-auto border bg-white border-primary text-black rounded-md py-1 px-2 font-Poppins text-sm font-semibold leading-[1.70em] focus:outline-none focus:ring-2 focus:ring-blue"
          >
            <option value="20">20 per page</option>
            <option value="36">36 per page</option>
            <option value="48">48 per page</option>
            <option value="60">60 per page</option>
          </select>
        </div>

        {/* View Options */}
        <div className="flex space-x-2 w-full sm:w-auto justify-center">
          <ViewBar />
        </div>
      </div>
    </div>
  );
};

export default PTopBar;

