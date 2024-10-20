import React from 'react'
import Button from '../layer/Button';
import Container from '../layer/Container';
import { RiInstagramFill } from 'react-icons/ri';
import { AiFillFacebook } from 'react-icons/ai';
import paypal from '../../public/assets/pay/paypal.svg'
import visa from '../../public/assets/pay/visa.svg'
import maestro from '../../public/assets/pay/maestro.svg'
import discover from '../../public/assets/pay/discover.svg'
import americanExpress from '../../public/assets/pay/american-express.svg'
import Image from '../layer/Image'
import CustomLink from '../layer/CustomLink';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6" >
      <Container className=''>
        <div className="text-center mb-8">
          <div className=" devFlex justify-between  ">
            <div className="text-start">
              <h2 className="text-4xl font-Poppins font-semibold">Sign Up To Our Newsletter.</h2>
              <p className="text-gray-400 pt-2">Be the first to hear about the latest offers.</p>
            </div>
            <div className="mt-4 flex justify-center items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 w-80 rounded-md border border-gray-600 text-black"
              />
              <Button className="ml-4 px-6 py-2 font-Poppins  rounded-full ">
                Subscribe
              </Button>
            </div>
          </div>
        </div>


        <div >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-gray-300">
            <div>
              <h3 className="fontLI text-primary mb-4">Information</h3>
              <ul className='fontH1 '>
                <li><a href="#" className=" hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">About Zip</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Search</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Orders and Returns</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Newsletter Subscription</a></li>
              </ul>
            </div>
            <div>
              <h3 className="fontLI text-primary mb-4">PC Parts</h3>
              <ul className='fontH1 '>
                <li><a href="#" className="hover:text-white">CPUs</a></li>
                <li><a href="#" className="hover:text-white">Hard Drives</a></li>
                <li><a href="#" className="hover:text-white">Graphic Cards</a></li>
                <li><a href="#" className="hover:text-white">Keyboards / Mice</a></li>
                <li><a href="#" className="hover:text-white">RAM (Memory)</a></li>
                <li><a href="#" className="hover:text-white">Software</a></li>
                <li><a href="#" className="hover:text-white">Motherboards</a></li>
              </ul>
            </div>
            <div>
              <h3 className="fontLI text-primary mb-4">Desktop PCs</h3>
              <ul className='fontH1 '>
                <li><a href="#" className="hover:text-white">Custom PCs</a></li>
                <li><a href="#" className="hover:text-white">Servers</a></li>
                <li><a href="#" className="hover:text-white">HP/Compaq PCs</a></li>
                <li><a href="#" className="hover:text-white">ASUS PCs</a></li>
                <li><a href="#" className="hover:text-white">Tec PCs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="fontLI text-primary mb-4">Laptops</h3>
              <ul className='fontH1 '>
                <li><a href="#" className="hover:text-white">Everyday Use Notebooks</a></li>
                <li><a href="#" className="hover:text-white">MSI Workstation Series</a></li>
                <li><a href="#" className="hover:text-white">Tablets and Pads</a></li>
                <li><a href="#" className="hover:text-white">Netbooks</a></li>
                <li><a href="#" className="hover:text-white">Infinity Gaming Notebooks</a></li>
              </ul>
            </div>
            <div>
              <h3 className="fontLI text-primary mb-4">Address</h3>
              <div class="contact-info">
                <p><strong>Address:</strong> 1234 Street Address, City Address, 1234</p>
                <CustomLink className='text-blueLight  ' label="Phones" type="phone" href="+0012345678" />
                <div className="flex flex-wrap items-start">
                  <p className=" whitespace-nowrap mr-2">We are open:</p>
                  <p className="whitespace-nowrap">Monday-Thursday: 9:00 AM – 5:30 PM</p>
                </div>
                <ul>
                  <li>Friday: 9:00 AM – 6:00 PM</li>
                  <li>Saturday: 11:00 AM – 5:00 PM</li>
                </ul>

                <CustomLink className='text-blueLight ' label="E-mail" type="email" href="shop@email.com" />

              </div>

            </div>
          </div>
        </div>


        <div className="mt-8 flex justify-between items-center border-t border-gray-700 pt-6">
          <div className="flex space-x-4">
            <a href="#" className="text-primary"><AiFillFacebook /></a>
            <a href="#" className="text-primary"><RiInstagramFill /></a>
          </div>
          <div className="flex space-x-4">
            <Image href='/' src={paypal} alt='src' />
            <Image href='/' src={visa} alt='src' />
            <Image href='/' src={maestro} alt='src' />
            <Image href='/' src={discover} alt='src' />
            <Image href='/' src={americanExpress} alt='src' />
          </div>
          <div className=" fontS text-gray-400">
            <p>Copyright © 2020 Shop Pty. Ltd.</p>
          </div>
        </div>



      </Container>
    </footer>
  );
};

export default Footer