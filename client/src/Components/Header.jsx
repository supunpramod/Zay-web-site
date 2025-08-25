import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaSearch, FaCartArrowDown, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Nav */}
      <nav className=" hidden lg:block bg-gray-900 text-white py-2  sticky top-0 z-50 ">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-12">

        {/* <div className="container mx-auto flex justify-between items-center px-12"> */}

          <div className="flex items-center space-x-4 text-sm">
            <span className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a href="mailto:info@company.com" className="hover:underline">
                info@company.com
              </a>
            </span>
            <span className="flex items-center">
              <FaPhone className="mr-2" />
              <a href="tel:010-020-0340" className="hover:underline">
                010-020-0340
              </a>
            </span>
          </div>
          <div className="flex space-x-4 ">
            <a href="https://fb.com/templatemo" target="_blank" rel="noreferrer" className="hover:text-green-400">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-green-400">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-green-400">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-green-400">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Navbar */}
      <nav className=" w-full bg-white shadow sticky top-0 z-50 ">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-12 py-6 ">
          {/* Logo */}
          <a href="index.html" className="text-green-600 text-2xl font-bold">
            Zay
          </a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Nav Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:space-x-8`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 text-gray-700 font-medium ">
              <li><a href="index.html" className="hover:text-green-600"><Link to="/">Home</Link></a></li>
              <li><a href="about.html" className="hover:text-green-600"><Link to="/about">About</Link></a></li>
              <li><a href="shop.html" className="hover:text-green-600">Shop</a></li>
              <li><a href="contact.html" className="hover:text-green-600">Contact</a></li>
            </ul>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4 mt-3 lg:mt-0 lg:ml-6">
              {/* Search Icon */}
              <button className="text-gray-800">
                <FaSearch />
              </button>

              {/* Cart Icon */}
              <a href="#" className="relative text-gray-800">
                <FaCartArrowDown />
                <span className="absolute -top-2 -right-2 bg-gray-200 text-gray-900 text-xs rounded-full px-1">
                  7
                </span>
              </a>

              {/* User Icon */}
              <a href="#" className="relative text-gray-800">
                <FaUser />
                <span className="absolute -top-2 -right-3 bg-gray-200 text-gray-900 text-xs rounded-full px-1">
                  +99
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
