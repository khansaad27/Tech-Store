import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Slider from "react-slick";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

// Custom Next Arrow for the slider
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="arrow-button-next"
    >
      <MdOutlineKeyboardArrowRight size={20} />
    </div>
  );
}

// Custom Previous Arrow for the slider
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="arrow-button-prv"
    >
      <MdOutlineKeyboardArrowLeft size={20} />
    </div>
  );
}

const ProductList = ({ products }) => {
  const [showAll, setShowAll] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 5 } },

      { breakpoint: 768, settings: { slidesToShow: 3 } },

      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const showAllProducts = () => setShowAll(!showAll);

  return (
    <div className="py-8  overflow-hidden">
      <div className="flex justify-between mb-6">
        <h2 className="font-Poppins text-black text-[22px] font-semibold">New Products</h2>
        <Link
          onClick={showAllProducts}
          className="liFront text-blue leading-[1.15em] hover:underline block"
        >
          {showAll ? "Show Less" : "See All New Products"}
        </Link>
      </div>

      {!showAll ? (
        <div className="relative w-full overflow-hidden    ">
          <Slider {...settings}  className=" product-slider ">
            {products.map((product) => (
              <div key={product.id}  className="px-2"  > 
                <ProductCard {...product} />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
