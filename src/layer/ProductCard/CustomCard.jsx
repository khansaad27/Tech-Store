import React from "react";



const CustomCard = ({ title, buttonText, image, onClick }) => {


  return (
    <div
      onClick={() => {
        console.log("CustomCard clicked!");
        if (onClick) onClick();
      }}
      className="relative md:w-[233px] w-full p-[4.5rem] md:h-[350px] rounded-md shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-transform cursor-pointer"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-around text-white text-center px-4 pb-4">
        <h3 className="font-Poppins text-[22px] font-bold">{title}</h3>
        <button className="hover:text-purple-700 text-sm font-semibold underline py-2 px-4 rounded-md transition-all">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CustomCard;


