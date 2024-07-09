// src/components/ShortNavbar.js
import React, { useState } from 'react';

const ShortNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-customPurple text-white w-full flex justify-center items-center h-10 relative">
      <p className="text-center text-sm">
        Sign up and get 20% off your first order.{' '}
        <a href="#" className="underline">
          Sign Up Now
        </a>
      </p>
      <button 
        onClick={() => setIsVisible(false)} 
        className="absolute right-4 text-white text-sm"
      >
        &times;
      </button>
    </div>
  );
};

export default ShortNavbar;
