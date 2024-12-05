import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {

          const pathTo = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <li key={index} style={{ marginLeft: 5 }}>
              <span> &gt; </span>
              <Link to={pathTo}>{value}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
