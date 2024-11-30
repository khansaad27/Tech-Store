import React from "react";
import { FaStar, FaRegStar, FaCheck } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import Image from "../Image";




const ProductCard = ({
  name,
  price,
  originalPrice,
  stock,
  reviews,
  image,
}) => {


  return (
    <div className="bg-white p-4 rounded-md shadow-md hover:shadow-md transition-transform transform hover:scale-105 w-full  h-auto  ">
      <div
        className={`${stock === "In stock" ? "text-color-9" : "text-color-8"
          } mb-2 flex items-center text-sm sm:text-base`}
      >
        {stock === "In stock" ? (
          <FaCheck className="bg-color-9 text-white border border-color-9 rounded-full mr-1" />
        ) : (
          <MdCall className="bg-color-8 text-white border border-color-8 rounded-full mr-1" />
        )}
        <p  >{stock}</p>
      </div>

      {/* Image container */}
      <div className=" md:w-[150px] md:h-[150px]  mb-2 mx-auto">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-md"
        />
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
      <div className=" sm:text-left">
        {originalPrice && (
          <p className="text-xs sm:text-sm text-color-10 line-through">
            {originalPrice}
          </p>
        )}
        <p className="text-sm sm:text-base text-black">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
