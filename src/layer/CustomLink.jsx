import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({ label, type, href,className }) => {
  if (type === 'email') {
    return (
      <p >
        <strong>{label}:</strong> <a  className={className} href={`mailto:${href}`}>{href}</a>
      </p>
    );
  } else if (type === 'phone') {
    return (
      <p>
        <strong>{label}:</strong> <a className={className}  href={`tel:${href}`}>{href}</a>
      </p>
    );
  } else {
    return (
      <p>
        <strong>{label}:</strong> <Link className={className} to={href}>{href}</Link>
      </p>
    );
  }
};

export default CustomLink;
