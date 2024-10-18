import React from 'react'
import { Link } from 'react-router-dom';


const Image = ({ href, src, alt, imgClassName,className}) => {
  return (
    <Link to={href} className={`${className}`} >

      <picture>

        <img src={src} alt={alt}  className={`w-full  h-auto ${imgClassName}`} />

      </picture>

    </Link>
  );
};

export default Image