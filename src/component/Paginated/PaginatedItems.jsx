import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "../../layer/ProductCard/ProductCard";


const items = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
}));

const PaginatedItems = ({ itemsPerPage, view, columns }) => {
  const [itemOffset, setItemOffset] = useState(0);

  // Calculate the current items and total page count
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Handle page change
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {/* Render products dynamically */}
      <div
        className={`grid gap-4 ${
          view === "grid"
            ? `grid-cols-${columns}`
            : "grid-cols-1"
        }`}
      >
        {currentItems.map((item) => (
          <div key={item.id}>
            <ProductCard product={item} />
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <ReactPaginate
        breakLabel={<span className="mx-2 text-primary">...</span>}
        nextLabel={
          <span className="devFlex justify-center w-9 h-9 bg-color-1 border border-primary rounded-full cursor-pointer">
            &gt;
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <span className="devFlex justify-center w-9 h-9 bg-color-1 border border-primary rounded-full cursor-pointer">
            &lt;
          </span>
        }
        renderOnZeroPageCount={null}
        containerClassName="devFlex justify-center space-x-2 my-4"
        pageClassName="w-9 h-9"
        pageLinkClassName="devFlex justify-center w-9 h-9 rounded-full text-black border border-primary"
        activeLinkClassName="bg-color-1 text-black font-bold border-0 outline-none"
        previousClassName="cursor-pointer"
        nextClassName="cursor-pointer"
        breakClassName="text-primary"
      />
    </>
  );
};

export default PaginatedItems;
