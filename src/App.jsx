import React from 'react';
import Home from './Page/Home';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayOut from './component/RootLayOut';
import MsiWsSeries from './Page/MsiWsSeries';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route index element={<Home />} />
      <Route path='/MsiWsSeries' element={<MsiWsSeries />} />


    </Route>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
