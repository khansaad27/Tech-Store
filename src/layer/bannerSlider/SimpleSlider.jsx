import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from "react-slick";
import Image from '../Image';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import oneSlider from '../../../public/assets/slider/slider.svg';

// Custom Next Arrow
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
    className="bg-[#252931]/50 text-white rounded-l-full p-2"
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: "0",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 1,
        width: "36px", 
        height: "48px",
      }}
    >
      <MdOutlineKeyboardArrowRight size={20} />
    </div>
  );
}

// Custom Previous Arrow
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
    className="bg-[#252931]/50 text-white rounded-r-full p-2"
    onClick={onClick}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      left: "0",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      zIndex: 1,
      width: "36px", 
      height: "48px",
      }}
    >
      <MdOutlineKeyboardArrowLeft size={20} />
    </div>
  );
}

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: function (i) {
      return (
        <div className="w-[12px] h-[12px] bg-transparent border-2 border-[#32a877] rounded-full  transition duration-300 ease-in-out"></div>
      );
    },
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="slider-wrapper md:mt-0 mt-3 mb-3 md:mx-0 mx-4 ">
      <Slider {...settings}>
        <div>
          <Image src={oneSlider} alt="Slider Image 1" />
        </div>
        <div>
          <Image src={oneSlider} alt="Slider Image 2" />
        </div>
        <div>
          <Image src={oneSlider} alt="Slider Image 3" />
        </div>
      </Slider>
    </div>
  );
}