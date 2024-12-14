import React, { useState } from "react";
import { FaTh } from "react-icons/fa";
import { HiMiniBarsArrowDown } from "react-icons/hi2";
import PaginatedItems from "../../component/Paginated/PaginatedItems";

const PTopBar = ({ className = "" }) => {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [view, setView] = useState("grid");
  const [columns, setColumns] = useState(4); 

  const handlePerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
  };

  const toggleView = () => {
    if (view === "grid") {
      setColumns((prev) => (prev === 4 ? 3 : 4)); // Toggle columns between 3 and 4
    }
    setView("grid");
  };

  return (
    <>
      <div className="">
      <div className={ ` mb-10 ${className}`}>
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-gray-300 space-y-4 lg:space-y-0">
          <div>
            <span className="font-Poppins text-sm text-primary lg:ml-4">
              Items 1-{itemsPerPage} of 20
            </span>
          </div>

          <div className="flex flex-wrap  items-center justify-center lg:justify-end space-x-4 space-y-2 lg:space-y-0">

            <div className="relative w-full sm:w-auto">
            <label className="text-gray-600 mr-2" htmlFor="perPage">
            Sort By:
              </label>
              <select
                id="perPage"
                value={itemsPerPage}
                onChange={handlePerPageChange}
                className="w-full sm:w-auto border bg-white border-primary text-black rounded-md py-1 px-2 font-Poppins text-sm font-semibold leading-[1.70em] focus:outline-none focus:ring-2 focus:ring-blue"
              >
                <option value="6">Position</option>
                <option value="36">36 per page</option>
                <option value="48">48 per page</option>
                <option value="60">60 per page</option>
              </select> 

              <label className="text-gray-600 mr-2" htmlFor="perPage">
                Show:
              </label>
              <select
                id="perPage"
                value={itemsPerPage}
                onChange={handlePerPageChange}
                className="w-full sm:w-auto border bg-white border-primary text-black rounded-md py-1 px-2 font-Poppins text-sm font-semibold leading-[1.70em] focus:outline-none focus:ring-2 focus:ring-blue"
              >
                <option value="6">6 per page</option>
                <option value="36">36 per page</option>
                <option value="48">48 per page</option>
                <option value="60">60 per page</option>
              </select>
            </div>

            <div className="flex space-x-2 w-full sm:w-auto justify-center">
              <div className="flex items-center justify-end space-x-4">
                <button
                  onClick={toggleView}
                  className={`p-2 border rounded ${view === "grid" ? "bg-blue text-white" : "bg-gray-200 text-black"
                    }`}
                >
                  <FaTh size={18} />
                </button>

                <button
                  onClick={() => setView("list")}
                  className={`p-2 border rounded ${view === "list" ? "bg-blue text-white" : "bg-gray-200 text-black"
                    }`}
                >
                  <HiMiniBarsArrowDown size={18}  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="PaginatedItems mt-4">
        <PaginatedItems itemsPerPage={itemsPerPage} view={view} columns={columns} />
      </div>
      </div>
    </>
  );
};

export default PTopBar;
