import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import PaginatedProductD from '../PaginatProduct/PaginatedProductD';


const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 141, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems, columns }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <div key={index} className={`col-span-1 ${columns === 1 ? "w-full" : ""}`}>
            <PaginatedProductD />
          </div>
        ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage, view, columns }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };


  return (
    <>
  
    
      <div className={`grid grid-cols-${columns} gap-3`}>
        <Items currentItems={currentItems} columns={columns} />
      </div>

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
}

export default PaginatedItems;
