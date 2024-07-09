import React, { useState } from 'react';

const CartQuantityButton = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center">
      <button
        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-lg outline-none"
        onClick={decreaseQuantity}
      >
        -
      </button>
      <span className="bg-gray-200 text-gray-700 px-3 py-1">{quantity}</span>
      <button
        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-lg outline-none"
        onClick={increaseQuantity}
      >
        +
      </button>
     

    </div>
  );
};

export default CartQuantityButton;
