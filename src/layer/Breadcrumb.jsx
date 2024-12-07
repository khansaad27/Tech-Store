import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="font-Poppins text-black py-6 md:pl-0 pl-3">
      

      {/* Breadcrumb Links */}
      <ul className="flex list-none p-0 text-[12px]">
        <li>
          <Link to="/" className="text-blue-500">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const pathTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <li key={index} className="ml-2">
              <span className="text-blue"> &gt; </span>
              <Link to={pathTo} className="text-black">
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Display the First Segment */}
      <span className="font-Poppins font-semibold text-black text-[32px] py-5 block">
        {pathnames[0] ? pathnames[0].charAt(0).toUpperCase() + pathnames[0].slice(1) : "Home"}
      </span>
    </nav>
  );
};

export default Breadcrumb;
