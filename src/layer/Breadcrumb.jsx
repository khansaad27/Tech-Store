import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="font-Poppins text-[12px] text-black py-6 md:pl-0 pl-3 ">
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li>
          <Link to="/" className="text-blue-500">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const pathTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <li key={index} style={{ marginLeft: 5 }}>
              <span className="text-blue"> &gt; </span>
              <Link to={pathTo} className="text-black">
                {value}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
