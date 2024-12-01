import React, { useState, useEffect } from "react";
import CustomCard from "../../layer/ProductCard/CustomCard";
import ProductCard from "../../layer/ProductCard/ProductCard";

const CustomBuilds = ({ products = [], isLoading = false }) => {
  const [showAll, setShowAll] = useState(false);
  const [productsToShow, setProductsToShow] = useState(2); // Default for small screens

  const customCardShowAll = () => setShowAll((prevState) => !prevState);

  useEffect(() => {
    const updateProductsToShow = () => {
      if (window.innerWidth >= 768) {
        setProductsToShow(5); // Medium screens and above
      } else {
        setProductsToShow(2); // Small screens
      }
    };


    updateProductsToShow();
    window.addEventListener("resize", updateProductsToShow);

    return () => window.removeEventListener("resize", updateProductsToShow);
  }, []);

  return (
    <div className="my-5">
      <div className="flex flex-col sm:flex-row gap-6 md:p-0 md:py-4  p-4">
        <div>
          <CustomCard
            onClick={customCardShowAll}
            title="Custom Builds"
            buttonText={showAll ? "Show Less" : "See All Products"}
            image="/assets/CustomeBuilds/p001.svg"
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 md:justify-center md:items-center">
          {isLoading ? (
            <p className="text-center font-Poppins font-semibold text-sm text-black">Loading products...</p>
          ) : products.length > 0 ? (
            products.slice(0, productsToShow).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          ) : (
            <p className="text-center font-Poppins font-semibold text-sm text-black">No products available.</p>
          )}
        </div>
      </div>

      {showAll && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {products.slice(productsToShow).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomBuilds;

