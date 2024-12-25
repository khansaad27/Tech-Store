import React from 'react'
import Container from '../layer/Container'
import Breadcrumb from '../layer/Breadcrumb'
import TopBg from '../component/topbg/TopBg'
import PTopBar from '../layer/productTopBar/PTopBar'
import Filter from '../layer/Filter/Filter'


const MsiWsSeries = () => {
  return (
    <div>
      <Container >
        <TopBg />
        <Breadcrumb />
        <Filter/>
      </Container>
    </div>
  )
}

export default MsiWsSeries

// import React from 'react';
// import ProductCard from '../../layer/ProductCard/ProductCard';

// const products = [
//   {
//     id: 1,
//     name: "EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
//     originalPrice: "$599.00",
//     price: "$499.00",
//     stock: "In stock",
//     reviews: 1,
//     image: '/assets/Desktops/d02.svg',
//   },

// ];

// const PaginatedItemsProduct = () => {
//   return (
//     <div className="py-8 md:mx-0 mx-3 overflow-hidden">
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1  gap-4">
//         {products.map((product) => (
//           <ProductCard key={product.id} {...product} />
//         ))}
//       </div>
//     </div>
//   );
// };
// export default PaginatedItemsProduct