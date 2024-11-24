
import React from "react";
import ProductCard from "./ProductCard";


const ProductListPage = ({ products }) => {
  return (
    <div className="py-8">
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            originalPrice={product.originalPrice}
            price={product.price}
            stock={product.stock}
            reviews={product.reviews}
            image={product.image}
            availabilityClass={product.availabilityClass}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
