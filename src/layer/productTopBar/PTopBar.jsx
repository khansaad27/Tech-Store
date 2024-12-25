import React, { useState } from "react";
import { FaTh } from "react-icons/fa";
import { HiMiniBarsArrowDown } from "react-icons/hi2";
import PaginatedItems from "../../component/Paginated/PaginatedItems";

const PTopBar = ({ className = "" }) => {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [view, setView] = useState("grid");
  const [columns, setColumns] = useState(5);
  const [selectedOption, setSelectedOption] = useState("Position");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handlePerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
  };

  const columnView = (viewType) => {
    if (viewType === "grid") {
      setColumns(5);
      setView("grid");
    } else {
      setColumns(1);
      setView("list");
    }
  };

  return (
    <div className={`mb-10 ${className}`}>
      <div className="flex flex-wrap items-center justify-between pb-4 border-b border-gray-300 space-y-4 lg:space-y-0 overflow-hidden">
        <div>
          <span className="font-Poppins text-sm text-primary lg:ml-4">
            Items 1-{itemsPerPage} of 20
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4">
          {/* Sort By Dropdown */}
          <div className="relative w-full sm:w-auto border border-primary py-2 px-3 rounded-md">
            <label
              className="text-primary mr-2 text-sm block sm:inline"
              htmlFor="sortBy"
            >
              Sort By:
            </label>
            <select
              id="sortBy"
              value={selectedOption}
              onChange={handleChange}
              className="w-full sm:w-auto bg-white text-black font-Poppins text-sm font-semibold leading-[1.70em] focus:outline-none focus:ring-2 focus:ring-blue"
            >
              <option value="Position">Position</option>
              <option value="Price">Price</option>
              <option value="Rating">Rating</option>
              <option value="Date">Date</option>
            </select>
          </div>

          {/* Items Per Page Dropdown */}
          <div className=" md:block hidden relative w-full sm:w-auto border border-primary py-2 px-3 rounded-md">
            <label
              className="text-primary mr-2 text-sm block sm:inline"
              htmlFor="perPage"
            >
              Items Per Page:
            </label>
            <select
              id="perPage"
              value={itemsPerPage}
              onChange={handlePerPageChange}
              className="w-full sm:w-auto bg-white text-black font-Poppins text-sm font-semibold leading-[1.70em] focus:outline-none focus:ring-2 focus:ring-blue"
            >
              <option value="6">6 per page</option>
              <option value="36">36 per page</option>
              <option value="48">48 per page</option>
              <option value="60">60 per page</option>
            </select>
          </div>

          {/* Grid/List View Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => columnView("grid")}
              className={`p-2 border rounded ${view === "grid" ? "bg-blue text-white" : "bg-gray-200 text-black"
                }`}
            >
              <FaTh size={18} />
            </button>

            <button
              onClick={() => columnView("list")}
              className={`p-2 border rounded ${view === "list" ? "bg-blue text-white" : "bg-gray-200 text-black"
                }`}
            >
              <HiMiniBarsArrowDown size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="PaginatedItems mt-4">
        <PaginatedItems
          itemsPerPage={itemsPerPage}
          view={view}
          columns={columns}
          sortOption={selectedOption}
        />
      </div>
    </div>
  );
};

export default PTopBar;




