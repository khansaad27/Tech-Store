import React from "react";
import { FaHeadset, FaUserCircle, FaTag } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaHeadset className="text-white text-4xl" />,
      title: "Product Support",
      description: "Up to 3 years on-site warranty available for your peace of mind.",
    },
    {
      icon: <FaUserCircle className="text-white text-4xl" />,
      title: "Personal Account",
      description: "With big discounts, free delivery, and a dedicated support specialist.",
    },
    {
      icon: <FaTag className="text-white text-4xl" />,
      title: "Amazing Savings",
      description: "Up to 70% off new Products, you can be sure of the best price.",
    },
  ];

  return (
    <div className="devFlex justify-center  py-14">
      <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 gap-8 max-w-6xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="devFlex-col items-center text-center space-y-4"
          >
            <div className="bg-blue p-4 rounded-full devFlex justify-center">
              {service.icon}
            </div>
            <h3 className=" font-Poppins font-bold  text-lg  text-black  ">{service.title}</h3>
            <p className=" w-[256px] font-Poppins  text-sm  text-black">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
