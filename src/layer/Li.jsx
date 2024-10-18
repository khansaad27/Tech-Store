import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({ href, className, children }) => {
  return (

    <li className='group' >

      <Link href={href} className={` font-Poppins font-semibold text-sm text-black hover:text-blue transition-all duration-300 ${className}`} >
        {children}
      </Link>

    </li>


  )
}

export default Li