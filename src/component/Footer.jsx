import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      {/* Newsletter Signup */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Sign Up To Our Newsletter.</h2>
        <p className="text-gray-400">Be the first to hear about the latest offers.</p>
        <div className="mt-4 flex justify-center items-center">
          <input 
            type="email" 
            placeholder="Your Email" 
            className="px-4 py-2 w-80 rounded-md border border-gray-600 text-black"
          />
          <button className="ml-4 px-6 py-2 bg-blue-600 rounded-full text-white hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>

      {/* Links and Information */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm text-gray-300">
        <div>
          <h3 className="font-semibold text-white mb-4">Information</h3>
          <ul>
            <li><a href="#" className="hover:text-white">About Us</a></li>
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
          <h3 className="font-semibold text-white mb-4">PC Parts</h3>
          <ul>
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
          <h3 className="font-semibold text-white mb-4">Desktop PCs</h3>
          <ul>
            <li><a href="#" className="hover:text-white">Custom PCs</a></li>
            <li><a href="#" className="hover:text-white">Servers</a></li>
            <li><a href="#" className="hover:text-white">HP/Compaq PCs</a></li>
            <li><a href="#" className="hover:text-white">ASUS PCs</a></li>
            <li><a href="#" className="hover:text-white">Tec PCs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Laptops</h3>
          <ul>
            <li><a href="#" className="hover:text-white">Everyday Use Notebooks</a></li>
            <li><a href="#" className="hover:text-white">MSI Workstation Series</a></li>
            <li><a href="#" className="hover:text-white">Tablets and Pads</a></li>
            <li><a href="#" className="hover:text-white">Netbooks</a></li>
            <li><a href="#" className="hover:text-white">Infinity Gaming Notebooks</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Address</h3>
          <ul>
            <li>Address: 1234 Street Adress City, 1234</li>
            <li>Phone: (00) 1234 5678</li>
            <li>Open: Monday-Thursday 9:00 AM - 5:30 PM</li>
            <li>Friday: 9:00 AM - 6:00 PM</li>
            <li>Saturday: 11:00 AM - 5:00 PM</li>
            <li>Email: shop@email.com</li>
          </ul>
        </div>
      </div>

      {/* Social Media & Payment Methods */}
      <div className="mt-8 flex justify-between items-center border-t border-gray-700 pt-6">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">Instagram</a>
        </div>
        <div className="flex space-x-4">
          <img src="path-to-paypal-logo" alt="PayPal" className="w-10" />
          <img src="path-to-visa-logo" alt="Visa" className="w-10" />
          <img src="path-to-mastercard-logo" alt="Mastercard" className="w-10" />
          <img src="path-to-amex-logo" alt="Amex" className="w-10" />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4 text-gray-400">
        <p>Copyright © 2020 Shop Pty. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer