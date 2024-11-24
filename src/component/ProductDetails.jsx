import React from 'react'
import ProductList from '../layer/ProductCard/ProductList ';


const ProductDetails = () => {
  const products = [
    {
      id: 1,
      name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      originalPrice:"$599.00" ,
      price: "$499.00",
      stock: "In stock",
      reviews: 1,
      image:'/assets/product/p01.svg' ,
      availabilityClass: "text-color-9",
    },
    {
      id: 2,
      name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      originalPrice:"$599.00" ,
      price: "$499.00",
      stock: "Check availability",
      reviews: 2,
      image: "/assets/product/p04.svg", 
      availabilityClass: "text-color-8",
    },
    {
      id: 3,
      name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      originalPrice:"$599.00" ,
      price: "$499.00",
      stock: "In stock",
      reviews: 3,
      image:'/assets/product/p02.svg' ,
      availabilityClass: "text-color-9",
    },
    {
      id: 4,
      name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      originalPrice:"$599.00" ,
      price: "$499.00",
      stock: "Check availability",
      reviews: 4,
      image: "/assets/product/p03.svg", 
      availabilityClass: "text-color-8",
    },
    {
      id: 5,
      name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      originalPrice:"$599.00" ,
      price: "$499.00",
      stock: "In stock",
      reviews: 5,
      image:'/assets/product/p04.svg' ,
      availabilityClass: "text-color-9",
    },
    {
      id: 6,
      name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      originalPrice:"$599.00" ,
      price: "$499.00",
      stock: "Check availability",
      reviews: 0,
      image: "/assets/product/p03.svg", 
      availabilityClass: "text-color-8",
    },
    {
      id: 7,
      name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      originalPrice:"$599.00" ,
      price: "$499.00",
      stock: "Check availability",
      reviews: 5,
      image: "/assets/product/p01.svg", 
      availabilityClass: "text-color-8",
    },
    {
      id: 8,
      name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      originalPrice:"$599.00" ,
      price: "$499.00",
      stock: "Check availability",
      reviews: 3,
      image: "/assets/product/p02.svg", 
      availabilityClass: "text-color-8",
    },
    {
      id: 9,
      name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      originalPrice:"$599.00" ,
      price: "$499.00",
      stock: "Check availability",
      reviews: 4,
      image: "/assets/product/p04.svg", 
      availabilityClass: "text-color-8",
    },
  
  ];

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductDetails