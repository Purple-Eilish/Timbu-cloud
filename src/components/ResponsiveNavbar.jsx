// src/components/ResponsiveNavbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaChevronDown } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { MdSearch } from 'react-icons/md';

const ResponsiveNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-customPurple font-bold text-lg md:text-xl">
          TIMBU CLOUD SHOP
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-6 items-center ml-10 justify-end">
          <div className="flex items-center space-x-1">
            <span>Shop</span>
            <FaChevronDown />
          </div>
          <span>On Sale</span>
          <span>New Arrivals</span>
          <span>Brands</span>
        </div>

        {/* Search bar */}
        <div className="hidden md:flex flex-1 mx-4 justify-end">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-200 text-gray-700 rounded-full px-4 py-2 focus:outline-none"
            />
            <MdSearch className="absolute top-0 right-0 mt-2 mr-4 text-gray-700" />
          </div>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/cart">
            <FaShoppingCart className="text-xl" />
          </Link>
          <FaUser className="text-xl" />
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-xl">
            {menuOpen ? <IoMdClose /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 mt-4">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-1">
              <span>Shop</span>
              <FaChevronDown />
            </div>
            <span>On Sale</span>
            <span>New Arrivals</span>
            <span>Brands</span>
            <div className="relative w-full mt-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-200 text-gray-700 rounded-full px-4 py-2 focus:outline-none"
              />
              <MdSearch className="absolute top-0 right-0 mt-2 mr-4 text-gray-700" />
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <Link to="/cart">
                <FaShoppingCart className="text-xl" />
              </Link>
              <FaUser className="text-xl" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveNavbar;
