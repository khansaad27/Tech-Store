import React from "react";
import CustomBuild from '../../component/product/CustomeBuilds'


const CustomBuildsProductDetail = () => {
  const products = [
    {
      id: 1,
      name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      originalPrice: "$599.00",
      price: "$499.00",
      stock: "In stock",
      reviews: 1,
      image: '/assets/CustomeBuilds/cbp01.svg',
    },
    {
      id: 2,
      name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      originalPrice: "$599.00",
      price: "$499.00",
      stock: "Check availability",
      reviews: 2,
      image: "/assets/CustomeBuilds/cbp02.svg",
    },
    {
      id: 3,
      name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      originalPrice: "$599.00",
      price: "$499.00",
      stock: "In stock",
      reviews: 3,
      image: '/assets/CustomeBuilds/cbp03.svg',
    },
    {
      id: 4,
      name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      originalPrice: "$599.00",
      price: "$499.00",
      stock: "Check availability",
      reviews: 4,
      image: "/assets/CustomeBuilds/cbp04.svg",
    },
    {
      id: 5,
      name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      originalPrice: "$599.00",
      price: "$499.00",
      stock: "In stock",
      reviews: 5,
      image: '/assets/CustomeBuilds/cbp05.svg',
    },
    {
      id: 6,
      name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      originalPrice: "$599.00",
      price: "$499.00",
      stock: "In stock",
      reviews: 0,
      image: '/assets/CustomeBuilds/cbp03.svg',
    },
    {
      id: 7,
      name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      originalPrice: "$599.00",
      price: "$499.00",
      stock: "In stock",
      reviews: 5,
      image: '/assets/CustomeBuilds/cbp04.svg',
    },
    {
      id: 8,
      name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      originalPrice: "$599.00",
      price: "$499.00",
      stock: "In stock",
      reviews: 3,
      image: '/assets/CustomeBuilds/cbp02.svg',
    },
    {
      id: 9,
      name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      originalPrice: "$599.00",
      price: "$499.00",
      stock: "In stock",
      reviews: 4,
      image: '/assets/CustomeBuilds/cbp05.svg',
    },
    {
      id: 10,
      name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      originalPrice: "$599.00",
      price: "$499.00",
      stock: "In stock",
      reviews: 4,
      image: '/assets/CustomeBuilds/cbp03.svg',
    },

  ];

  return (
    <div>

      <CustomBuild products={products} />
    </div>
  );
};

export default CustomBuildsProductDetail;

