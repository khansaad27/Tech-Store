import React from 'react'

const LiFooter = ( { href, className, children }) => {
  return (
    <li className='group' >

    <Link href={href} className={` liFront  text-primary hover:text-white transition-all duration-300 ${className}`} >
      {children}
    </Link>

  </li>

  )
}

export default LiFooter