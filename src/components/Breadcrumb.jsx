// src/components/Breadcrumb.js
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Breadcrumb = () => {
  return (
    <div className="text-gray-600 flex items-center justify-start ml-4 mt-4">
      <span className="text-gray-600">Home</span>
      <IoIosArrowForward className="mx-2" />
      <span className="text-gray-600">Shop</span>
      <IoIosArrowForward className="mx-2" />
      <span className="text-gray-600">Men</span>
      <IoIosArrowForward className="mx-2" />
      <span className="text-customPurple">T-shirts</span>
    </div>
  );
};

export default Breadcrumb;
