import React from "react";
import Button from "../../layer/Button";


const Testimonial = () => {
  return (
    <div className="flex justify-center mt-11  mx-4p  px-3 ">
      <div className="text-center bg-color-1   shadow-md rounded-lg  py-7 md:py-14 px-5 md:px-28 ">
        <div className=" flex items-start md:gap-x-6 gap-x-4  ">
          <img
            src='/assets/Testimonial/t.svg'
            alt=''
            className=" w-[46px]  object-cover rounded-md"
          />
          <p className=" md:w-[850px] w-[256px] text-start font-Poppins md:text-lg text-[13px] text-black ">
            My first order arrived today in perfect condition. From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch. Such great service. I look forward to shopping on your site in the future and would highly recommend it.
          </p>
        </div>
        <p className="text-right mt-4 font-Poppins text-sm text-black">- Tama Brown</p>
        <div className=" dev-jus ">
          <div className="mt-6 flex justify-center">
            <Button className=" px-6 py-2 ">
              Leave Us A Review
            </Button>
          </div>
          <div className="mt-6 flex justify-center space-x-2">
            <span className="h-2 w-2 bg-blue rounded-full"></span>
            <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
            <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
