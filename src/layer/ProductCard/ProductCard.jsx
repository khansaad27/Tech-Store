import React from "react";
import { FaStar, FaRegStar, FaCheck, FaHeart } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import Image from "../Image";
import Button from "../Button";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiBarChart2 } from "react-icons/fi";

const ProductCard = ({
  name,
  price,
  originalPrice,
  stock,
  reviews,
  image,
}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-[6px_6px_12px_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_16px_rgba(0,0,0,0.3)] transition-transform transform  w-full h-[400px] group relative overflow-hidden">
      {/* Stock Status */}
      <div
        className={`${stock === "In stock" ? "text-color-9" : "text-color-8"
          } mb-2 flex items-center text-sm sm:text-base`}
      >
        {stock === "In stock" ? (
          <FaCheck className="bg-color-9 text-white border border-color-9 rounded-full mr-1" />
        ) : (
          <MdCall className="bg-color-8 text-white border border-color-8 rounded-full mr-1" />
        )}
        <p>{stock}</p>
      </div>

      
      <div className="md:w-[150px] md:h-[150px] mb-2 mx-auto relative">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-md"
        />

       
      </div>
      <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {/* Heart Icon */}
          <button className=" p-2 rounded-full shadow-md border border-primary hover:bg-color-5">
            <FaHeart className="text-gray-500 w-5 h-5" />
          </button>
          {/* Analytics Icon */}
          <button className=" p-2 rounded-full border border-primary shadow-md hover:bg-color-5">
            <FiBarChart2 className="text-gray-500 w-5 h-5" />
          </button>
        </div>

      {/* Reviews */}
      <div className="flex justify-between items-center space-x-2 mb-2">
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <span key={index}>
              {index < reviews ? (
                <FaStar className="text-[#E9A426]" />
              ) : (
                <FaRegStar className="text-[#E9A426]" />
              )}
            </span>
          ))}
        </div>
        <p className="font-Poppins text-xs sm:text-sm leading-[2.2em] text-color-5">
          Reviews ({reviews})
        </p>
      </div>

      {/* Product Name */}
      <h3 className="liFront text-black text-sm sm:text-base mb-2">{name}</h3>

      {/* Pricing */}
      <div className="sm:text-left">
        {originalPrice && (
          <p className="text-xs sm:text-sm text-color-10 line-through">
            {originalPrice}
          </p>
        )}
        <p className="text-sm sm:text-base text-black">{price}</p>
      </div>
      {/* Add to Cart */}
      <Button className="flex items-center justify-center   absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
      <RiShoppingCartLine  className="w-4 h-4  scale-x-[-1]" />
        <span>Add To Cart</span>
      </Button>
    </div>
  );
};

export default ProductCard;
