import React from "react";




const CustomCard = ({ title, buttonText, image }) => {


  return (
    <div
      className="relative w-[233px] h-[350px] rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-around text-white text-center px-4">
        <h3 className="font-Poppins text-[22px] font-bold text-center mb-2">
          {title}
        </h3>
        <button

          className="hover:text-purple-700 text-sm font-semibold underline py-2 px-4 rounded-lg transition-all"
        >
          {buttonText}
        </button>
      </div>
     
    </div>
  );
};

export default CustomCard;
