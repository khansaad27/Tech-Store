import React, { useState } from "react";
import CustomCard from "../../layer/ProductCard/CustomCard";



const CustomBuilds = ({ products = [] }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => setShowAll((prevState) => !prevState);

  return (
    <div className="my-5 p-4">

      {!showAll ? (
       <div className="w-full lg:w-1/4 mb-4">
       <CustomCard
         onClick={toggleShowAll} // Pass the toggle function
         title="Custom Builds"
         buttonText={showAll ? "Show Less" : "See All Products"}
         image="/assets/CustomeBuilds/p001.svg" // Corrected path
       />

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

export default CustomBuilds;
