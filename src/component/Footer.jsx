import React, { useState } from 'react'
import Button from '../layer/Button';
import Container from '../layer/Container';
import { RiArrowDropDownLine, RiInstagramFill } from 'react-icons/ri';
import { AiFillFacebook } from 'react-icons/ai';
import paypal from '../../public/assets/pay/paypal.svg';
import visa from '../../public/assets/pay/visa.svg';
import maestro from '../../public/assets/pay/maestro.svg';
import discover from '../../public/assets/pay/discover.svg';
import americanExpress from '../../public/assets/pay/american-express.svg';
import Image from '../layer/Image';
import CustomLink from '../layer/CustomLink';



const Footer = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [pCParts, setPCParts] = useState(false);
  const [desktop, setDesktop] = useState(false);
  const [laptops, setLaptops] = useState(false);
  const [address, setAddress] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const pcToggle = () => setPCParts((prev) => !prev);
  const desktopToggle = () => setDesktop((prev) => !prev);
  const laptopsToggle = () => setLaptops((prev) => !prev);
  const addressToggle = () => setAddress((prev) => !prev);

  // //////////////////////////////////////////////////
  const [dropdownTitle] = useState("Information ");
  const dropdownLinks = [
    { text: "About Us", href: "/" },
    { text: "About Zip", href: "/" },
    { text: "Privacy Policy", href: "/" },
    { text: "Search", href: "/" },
    { text: "Terms", href: "/" },
    { text: "Orders and Returns", href: "/" },
    { text: "Contact Us", href: "/" },
    { text: "Newsletter Subscription", href: "/" },
  ];
  // ////////////////////////////////////////////////////
  const [dropdownTitle2] = useState("PC Parts");
  const dropdownLinks2 = [
    { text: "CPUS", href: "/" },
    { text: "Add On Cards", href: "/" },
    { text: "Hard Drives (Internal)", href: "/" },
    { text: "Graphic Cards", href: "/" },
    { text: "Keyboards / Mice", href: "/" },
    { text: "Cases / Power Supplies / Cooling", href: "/" },
    { text: "RAM (Memory)", href: "/" },
    { text: "Software", href: "/" },
    { text: "Speakers / Headsets", href: "/" },
    { text: "Motherboards", href: "/" },
  ];
  // //////////////////////////////////////////////////////
  const [dropdownTitle3] = useState("Desktop PCs");
  const dropdownLinks3 = [
    { text: "Custom PCs", href: "/" },
    { text: "Servers", href: "/" },
    { text: "MSI All-In-One PCs", href: "/" },
    { text: "HP/Compaq PCs", href: "/" },
    { text: "ASUS PCs", href: "/" },
    { text: "Tecs PCs", href: "/" },
  ];
  // //////////////////////////////////////////////////////
  const [dropdownTitle4] = useState("Laptops");
  const dropdownLinks4 = [
    { text: "Everyday Use Notebooks", href: "/" },
    { text: "MSI Workstation Series", href: "/" },
    { text: "MSI Prestige Series", href: "/" },
    { text: "Tablets and Pads", href: "/" },
    { text: "Netbooks", href: "/" },
    { text: "Infinity Gaming Notebooks", href: "/" },
  ];
  // ///////////////////////////////////////////////////
  const [dropdownTitle5] = useState("Address");
  const dropdownLinks5 = [
    { text: "1234 Street Address, City Address, 1234" },
  ];
  const dropdownLinks5A = [
    { text: "Monday-Thursday: 9:00 AM – 5:30 PM" },
  ];
  const dropdownLinks5AA = [
    { text: "Friday: 9:00 AM - 6:00 PM" },
    { text: "Saturday: 11:00 AM – 5:00 PM" },
  ];
  // /////////////////////////////////////////////////
  const paymentLogos = [
    { src: paypal, alt: 'Paypal' },
    { src: visa, alt: 'Visa' },
    { src: maestro, alt: 'Maestro' },
    { src: discover, alt: 'Discover' },
    { src: americanExpress, alt: 'American Express' },
  ];
  // ////////////////////////////////////////////////
  return (
    <footer className="bg-black md:block devFlex-col items-center   text-white md:py-12 py-9 px-6" >
      <Container className='md:block devFlex-col justify-between md:flex-row  gap-y-4 '>
        <div className="text-center md:mb-8">
          <div className=" devFlex  justify-between md:flex-row flex-col gap-y-4 ">
            <div className="text-start md:block devFlex-col justify-center gap-1  ">
              <h2 className="md:text-4xl text-lg font-Poppins font-medium leading-[1.3em] ">Sign Up To Our Newsletter.</h2>
              <p className="text-gray-400 md:text-base text-xs font-Poppins font-light  leading-[1.32em]  md:pt-2 ">Be the first to hear about the latest offers.</p>
            </div>
            <div className=" md:mt-4 flex justify-center items-center gap-x-3  ">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2  md:w-80 w-[178px] rounded-md font-Poppins font-light text-sm  leading-5 bg-black border border-gray-600 text-white "
              />
              <Button url='/' className=" px-6 py-2 font-Poppins  rounded-full ">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className=' flex flex-col ' >
          <div className="md:grid grid-cols-5 devFlex-col gap-y-4  text-sm text-gray-300">
            <div className='1 drop-Down-Border  '>
              <div className="md:block hidden ">
                <h3 className="fontLI mb-4 ">{dropdownTitle}   </h3>
                <ul className='liFront'>
                  {dropdownLinks.map((link, index) => (
                    <li key={index}><a href={link.href} className="hoverCont">{link.text}</a></li>
                  ))}
                </ul>
              </div>
              <details className="dropdown dropdownClass md:hidden block" onToggle={handleToggle}>
                <summary className=" bttn  fontLI relative" aria-label={dropdownTitle}>
                  {dropdownTitle}
                  <RiArrowDropDownLine className={` text-white text-[23px] absolute top-[31%] right-0 -translate-y-[50%] md:hidden  block   ${isOpen ? 'scale-y-[-1]' : ''} `} />
                </summary>
                <ul className=" devFlex-col gap-y-2 mb-3 pl-2  bg-black text-white border-none  w-full  z-[1]">
                  {dropdownLinks.map((link, index) => (
                    <li key={index}><a className="hoverCont" href={link.href}>{link.text}</a></li>
                  ))}
                </ul>
              </details>

            </div>
            <div className='2 drop-Down-Border'>
              <div className="md:block hidden">
                <h3 className="fontLI mb-4">{dropdownTitle2}</h3>
                <ul className='liFront'>
                  {dropdownLinks2.map((link, index) => (
                    <li key={index}><a href={link.href} className="hoverCont">{link.text}</a></li>
                  ))}
                </ul>
              </div>
              <details className="dropdown dropdownClass md:hidden block" onToggle={pcToggle}>
                <summary className="bttn  fontLI relative" aria-label={dropdownTitle2}>
                  {dropdownTitle2}
                  <RiArrowDropDownLine className={` text-white text-[23px] absolute top-[31%] right-0 -translate-y-[50%] md:hidden  block   ${pCParts ? 'scale-y-[-1]' : ''} `} />
                </summary>
                <ul className="devFlex-col gap-y-2 mb-3 pl-2  bg-black text-white border-none  w-full  z-[1]">
                  {dropdownLinks2.map((link, index) => (
                    <li key={index}><a className="hoverCont" href={link.href}>{link.text}</a></li>
                  ))}
                </ul>
              </details>
            </div>
            <div className='3 drop-Down-Border'>
              <div className="md:block hidden">
                <h3 className="fontLI mb-4">{dropdownTitle3}</h3>
                <ul className='liFront'>
                  {dropdownLinks3.map((link, index) => (
                    <li key={index}><a href={link.href} className="hoverCont ">{link.text}</a></li>
                  ))}
                </ul>
              </div>
              <details className="dropdown dropdownClass md:hidden block" onToggle={desktopToggle}>
                <summary className="bttn  fontLI relative " aria-label={dropdownTitle3}>
                  {dropdownTitle3}
                  <RiArrowDropDownLine className={` text-white text-[23px] absolute top-[31%] right-0 -translate-y-[50%] md:hidden  block   ${desktop ? 'scale-y-[-1]' : ''} `} />
                </summary>
                <ul className="devFlex-col gap-y-2 mb-3 pl-2  bg-black text-white border-none  w-full  z-[1]">
                  {dropdownLinks3.map((link, index) => (
                    <li key={index}><a className="hoverCont" href={link.href}>{link.text}</a></li>
                  ))}
                </ul>
              </details>
            </div>
            <div className='4 drop-Down-Border'>
              <div className="md:block hidden">
                <h3 className="fontLI mb-4">{dropdownTitle4}</h3>
                <ul className='liFront'>
                  {dropdownLinks4.map((link, index) => (
                    <li key={index}><a href={link.href} className="hoverCont">{link.text}</a></li>
                  ))}
                </ul>
              </div>
              <details className="dropdown dropdownClass md:hidden block" onToggle={laptopsToggle}>
                <summary className="bttn  fontLI relative" aria-label={dropdownTitle4}>
                  {dropdownTitle4}
                  <RiArrowDropDownLine className={` text-white text-[23px] absolute top-[31%] right-0 -translate-y-[50%] md:hidden  block   ${laptops ? 'scale-y-[-1]' : ''} `} />
                </summary>
                <ul className="devFlex-col gap-y-2 mb-3 pl-2  bg-black text-white border-none  w-full  z-[1]">
                  {dropdownLinks4.map((link, index) => (
                    <li key={index}><a className="hoverCont" href={link.href}>{link.text}</a></li>
                  ))}
                </ul>
              </details>
            </div>
            <div className='5 drop-Down-Border'>
              <div className="md:block hidden">
                <h3 className="fontLI mb-4">{dropdownTitle5}</h3>
                <div className="liFront">
                  <address>
                    <div className="flex flex-wrap items-start ">
                      {dropdownLinks5.map((link, index) => (
                        <p className='liFront' key={index}> Address: <a className="hoverCont" href={link.href}>{link.text}</a></p>
                      ))}
                    </div>
                    <CustomLink className='text-blueLight' label="Phones" type="phone" href="+0012345678" />
                    <div className="flex flex-wrap items-start">
                      {dropdownLinks5A.map((link, index) => (
                        <p className='liFront' key={index}> We are open: <a className="hoverCont" href={link.href}>{link.text}</a></p>
                      ))}
                    </div>
                    <ul className="whitespace-wrap " >
                      {dropdownLinks5AA.map((link, index) => (
                        <li key={index}><a className="hoverCont" href={link.href}>{link.text}</a></li>
                      ))}
                    </ul>
                    <CustomLink className='text-blueLight ' label="E-mail" type="email" href="shop@email.com" />
                  </address>
                </div>
              </div>
              <details className=" dropdownClass md:hidden block " onToggle={addressToggle}>
                <summary className=" bttn fontLI relative">
                  {dropdownTitle5}
                  <RiArrowDropDownLine className={` text-white text-[23px] absolute top-[31%] right-0 -translate-y-[50%] md:hidden  block   ${address ? 'scale-y-[-1]' : ''} `} />
                </summary>
                <div className="liFront   mb-3 pl-2  bg-black text-white border-none  w-full  z-[1]">
                  <address className='devFlex-col gap-y-1'>
                    <div className="flex flex-wrap items-start">
                      {dropdownLinks5.map((link, index) => (
                        <p key={index}><a className="hoverCont" href={link.href}>{link.text}</a></p>
                      ))}
                    </div>
                    <CustomLink className='text-blueLight' label="Phones" type="phone" href="+0012345678" />
                    <div className="flex flex-wrap items-start">
                      {dropdownLinks5A.map((link, index) => (
                        <p key={index}><a className="hoverCont" href={link.href}>{link.text}</a></p>
                      ))}
                    </div>
                    <ul className="whitespace-wrap " >
                      {dropdownLinks5AA.map((link, index) => (
                        <li key={index}><a className="hoverCont" href={link.href}>{link.text}</a></li>
                      ))}
                    </ul>
                    <CustomLink className='text-blueLight liFront' label="E-mail" type="email" href="shop@email.com" />
                  </address>
                </div>
              </details>
            </div>
          </div>
        </div>
        <div className=" devFlex-col items-center gap-y-4 md:mt-9  md:border-t border-gray-700">
          <div className=" md:mt-8 devFlex justify-between md:gap-0 gap-[115px]  w-full">
            <div className="flex gap-[0.6875em]  ">
              <a href="/" className="text-primary"><AiFillFacebook /></a>
              <a href="/" className="text-primary"><RiInstagramFill /></a>
            </div>
            <div className="md:flex gap-[0.625em]  hidden  ">
              {paymentLogos.map((logo, index) => (
                <Image key={index} href="/" src={logo.src} alt={logo.alt} className="w-12 h-auto" />
              ))}
            </div>
            <div className=" fontS text-gray-400 text-[10px] leading-[1.32em] ">
              <p>Copyright © 2020 Shop Pty. Ltd.</p>
            </div>
          </div>
          <div>
            <div className="flex gap-[0.625em] md:hidden ">
              {paymentLogos.map((logo, index) => (
                <Image key={index} href="/" src={logo.src} alt={logo.alt} className="w-12 h-auto" />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer