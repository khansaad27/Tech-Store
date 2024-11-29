import React from "react";
import { Link } from "react-router-dom"; // Or 'next/link' for Next.js
import Image from "../Image";

const ZipBanner = () => {
  return (
    <div className="md:m-0 m-3  flex items-center  justify-center md:flex-row  flex-col  gap-y-4 bg-color-1 py-5 px-4 my-4 rounded-md shadow-lg">
      <Image
        src="/assets/ZipBanner/zpb.svg"
        alt="Zip Logo"
        className="md:w-[77px] md:h-[27px] mr-2  "
      />
        <div className="md:block hidden mx-2 h-5 border-l border-[#00AEB8] rounded-md "></div>
      <span className="liFront text-[#272560]">
        <strong className=" font-Poppins font-semibold text-sm ">own </strong> it now , up to 6 months interest free
      </span>
      <Link
        to="/learn-more" 
        className="ml-2 liFront text-[#272560] underline "
      >
        learn more
      </Link>
    </div>
  );
};

export default ZipBanner;

