// src/Pages/ProductPage.jsx
import React, { useState } from 'react';
import ResponsiveNavbar from '../components/ResponsiveNavbar';
import ShortNavbar from '../components/shortNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Image1 from '../Assets/image 1.svg';
import Image2 from '../Assets/image 2.svg';
import Image3 from '../Assets/image 3.svg';
import Rating from '../components/rating';
import More from '../components/more';
import Newsletter from '../components/newsletter';
import Footer from '../components/footer';
import AddButton from '../components/addButton'

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(Image1);
  const [selectedSize, setSelectedSize] = useState('Large'); // Default size
  const [selectedColor, setSelectedColor] = useState('#280051'); // Default color
  const [quantity, setQuantity] = useState(1);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    // Logic to add selected product to cart
    console.log(`Adding to cart: ${selectedImage}, Size: ${selectedSize}, Color: ${selectedColor}, Quantity: ${quantity}`);
    // You can implement your cart functionality here
  };

  return (
    <div className="container mx-auto">
      <ShortNavbar />
      <ResponsiveNavbar />
      <Breadcrumb />

      <div className="flex flex-wrap mt-8">
        {/* First Column */}
        <div className="w-full md:w-1/6 p-4">
          {/* Row 1 */}
          <div className="mb-4">
            <div
              className={`border cursor-pointer ${selectedImage === Image1 ? 'border-black rounded-sm' : 'border-transparent'
                }`}
              onClick={() => handleImageClick(Image1)}
            >
              <img
                src={Image1}
                alt="Product Image 1"
                className="w-full h-32 object-cover rounded-md"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="mb-4">
            <div
              className={`border cursor-pointer ${selectedImage === Image2 ? 'border-black rounded-sm' : 'border-transparent'
                }`}
              onClick={() => handleImageClick(Image2)}
            >
              <img
                src={Image2}
                alt="Product Image 2"
                className="w-full h-32 object-cover rounded-md"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div>
            <div
              className={`border cursor-pointer ${selectedImage === Image3 ? 'border-black rounded-sm' : 'border-transparent'
                }`}
              onClick={() => handleImageClick(Image3)}
            >
              <img
                src={Image3}
                alt="Product Image 3"
                className="w-full h-32 object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="w-full md:w-1/3 p-4 flex items-center justify-center">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected Product Image"
              className="w-full h-auto object-cover rounded-md"
            />
          )}
        </div>

        {/* Third Column */}
        <div className="w-full md:w-1/2 p-4">
          <div className="mb-4">
            <h2 className="text-customPurple font-bold text-2xl">
              One Life Graphic T-shirt
            </h2>
            <div className="flex items-center mt-2">
              <div className="text-yellow-400">
                &#9733;&#9733;&#9733;&#9733;&#9734;
              </div>
              <span className="ml-1">4.5/5</span>
            </div>
            <div className="flex gap-3 mt-2 items-center">
              <p className="text-black font-bold text-xl">$260</p>
              <p className="text-gray-500 text-xl line-through">$300</p>
              <button className="bg-[#FF33331A] text-white px-4 py-2 rounded-md">
                -40%
              </button>
            </div>
            <div className="mt-2">
              This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
            </div>
            <hr className="my-4 border-gray-300" />
          </div>

          {/* Color Options */}
          <div className="mb-4">
            <p>Select Colors</p>
            <div className="flex gap-3 mt-2">
              <div
                className={`rounded-full w-10 h-10 cursor-pointer ${selectedColor === '#4F4631' ? 'border-2 border-black' : ''}`}
                style={{ backgroundColor: '#4F4631' }}
                onClick={() => handleColorChange('#4F4631')}
              ></div>
              <div
                className={`rounded-full w-10 h-10 cursor-pointer ${selectedColor === '#314F4A' ? 'border-2 border-black' : ''}`}
                style={{ backgroundColor: '#314F4A' }}
                onClick={() => handleColorChange('#314F4A')}
              ></div>
              <div
                className={`rounded-full w-10 h-10 cursor-pointer ${selectedColor === '#31344F' ? 'border-2 border-black' : ''}`}
                style={{ backgroundColor: '#31344F' }}
                onClick={() => handleColorChange('#31344F')}
              ></div>
            </div>
          </div>
          <hr className="my-4 border-gray-300" />

          {/* Size Options */}
          <div className="mb-4">
            <p>Choose Size</p>
            <div className="flex flex-wrap gap-3 mt-2">
              <button
                className={`bg-[#F0F0F0] text-[#00000099] rounded-2xl px-6 py-1 ${selectedSize === 'Small' ? 'border-2 border-black' : ''}`}
                onClick={() => handleSizeChange('Small')}
              >
                Small
              </button>
              <button
                className={`bg-[#F0F0F0] text-[#00000099] rounded-2xl px-6 py-1 ${selectedSize === 'Medium' ? 'border-2 border-black' : ''}`}
                onClick={() => handleSizeChange('Medium')}
              >
                Medium
              </button>
              <button
                className={`bg-[#280051] text-white rounded-2xl px-6 py-1 ${selectedSize === 'Large' ? 'border-2 border-black' : ''}`}
                onClick={() => handleSizeChange('Large')}
              >
                Large
              </button>
              <button
                className={`bg-[#F0F0F0] text-[#00000099] rounded-2xl px-6 py-1 ${selectedSize === 'X-Large' ? 'border-2 border-black' : ''}`}
                onClick={() => handleSizeChange('X-Large')}
              >
                X-Large
              </button>
            </div>
          </div>
          <hr className="my-4 border-gray-300" />

          <hr className="my-4 border-gray-300" />

          {/* Add to Cart Button */}
          <div className="flex gap-5">
            <AddButton id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="border border-gray-300 rounded-md px-3 py-1 w-20" />
            <button
              className="bg-[#280051] rounded-2xl text-white px-12 py-2"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Additional Components */}
      <Rating />
      <More />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;
