import React from 'react';
import Home from './Page/Home';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayOut from './component/RootLayOut';
// import ProductListPage from './layer/ProductCard/ProductListPage ';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route index element={<Home />} />
      {/* <Route path="/products" element={<ProductListPage products={products} />} /> */}
    </Route>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
