// src/Pages/CartPage.jsx
import React, { useState } from 'react';
import ShortNavbar from '../components/shortNavbar';
import ResponsiveNavbar from '../components/ResponsiveNavbar';
import Breadcrumb from '../components/Breadcrumb';
import AddButton from '../components/addButton';
import Image1 from '../Assets/image 1.svg';
import Shirt from '../Assets/shirt.svg';
import Trouser from '../Assets/trouser.svg';
import Newsletter from '../components/newsletter';
import Footer from '../components/footer';
import { FaUser } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import Visa from '../Assets/visa.svg';
import Mastercard from '../Assets/mastercard.svg';
import Paypal from '../Assets/paypal.svg';
import Gpay from '../Assets/gpay.svg';
import Applepay from '../Assets/applepay.svg';
import Delete from '../Assets/delete.svg';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'One Life Graphic T-shirt',
            size: 'Large',
            color: 'Brown',
            price: 260,
            image: Image1,
        },
        {
            id: 2,
            name: 'Vertical Striped Shirt',
            size: 'Medium',
            color: 'Blue',
            price: 180,
            image: Shirt,
        },
        {
            id: 3,
            name: 'SKINNY FIT JEANS',
            size: 'Small',
            color: 'Red',
            price: 150,
            image: Trouser,
        },
    ]);

    const [showCheckoutModal, setShowCheckoutModal] = useState(false);

    const handleRemoveItem = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
    };

    const handleCheckout = () => {
        setShowCheckoutModal(true);
    };

    const handleCloseModal = () => {
        setShowCheckoutModal(false);
    };

    return (
        <div>
            <ShortNavbar />
            <ResponsiveNavbar />
            <Breadcrumb />
            <div className="text-customPurple font-bold text-3xl px-5 md:text-4xl mt-7  text-center md:text-left">
                Your Cart
            </div>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col px-4 border-gray-300 border m-5 py-4 rounded-2xl  md:w-4/6 overflow-x-auto">
                    {cartItems.map((item) => (
                        <>
                            <div key={item.id} className="flex gap-3 items-center">
                                <img src={item.image} alt={item.name} className="w-32 h-32 md:w-56 md:h-40" />
                                <div className="flex flex-col gap-2 flex-1">
                                    <h2 className="text-customPurple font-bold text-sm sm:text-sm">{item.name}</h2>
                                    <p><span className="text-customPurple">Size:</span> <span className="text-gray-500">{item.size}</span></p>
                                    <p><span className="text-customPurple">Color:</span> <span className="text-gray-500">{item.color}</span></p>
                                    <p className="text-black font-bold text-lg sm:text-sm">${item.price}</p>
                                </div>
                                <div className="flex flex-col gap-2 justify-between ml-auto items-end">
                                    <button onClick={() => handleRemoveItem(item.id)}><img src={Delete} alt="Delete" /></button>
                                    <AddButton />
                                </div>
                            </div>
                            <hr className="my-4 border-gray-300" />
                        </>
                    ))}
                </div>
                <div className="flex flex-col gap-5 px-5 border-gray-300 border m-5 py-4 rounded-2xl md:w-2/6">
                    <h2 className="text-customPurple font-bold text-lg md:text-2xl">Order Summary</h2>
                    <div className="flex justify-between">
                        <p className="text-gray-500">Subtotal</p>
                        <p className="text-customPurple font-bold text-lg md:text-xl">${calculateSubtotal()}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500">Discount(-20%)</p>
                        <p className="text-[#FF3333] font-bold text-lg md:text-xl">-${calculateDiscount()}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-gray-500">Delivery Fee</p>
                        <p className="text-customPurple font-bold text-lg md:text-xl">$20</p>
                    </div>
                    <hr className="my-4 border-gray-300" />
                    <div className="flex justify-between">
                        <p className="text-customPurple font-bold">Total</p>
                        <p className="text-customPurple font-bold text-lg md:text-xl">${calculateTotal()}</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-[#F0F0F0] text-gray-500 w-4/5 py-2 rounded-2xl">Add Promo Code</button>
                        <button onClick={handleCheckout} className="bg-customPurple text-white w-1/5 py-2 rounded-2xl">Apply</button>
                    </div>
                    <button onClick={handleCheckout} className="bg-customPurple text-white w-full py-2 rounded-2xl mt-4">Go to Checkout</button>
                </div>
            </div>
            <Newsletter />
            <Footer />

            {showCheckoutModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#280051] bg-opacity-75">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex items-center mb-4">
                            <FaUser className="text-lg mt-3 mr-2" />
                            <h2 className="text-customPurple text-2xl font-bold">
                                Your Checkout
                            </h2>
                        </div>
                        <div className="flex flex-col gap-4">
                            {/* Order summary */}
                            <div className="border rounded-lg p-4">
                                <h3 className="text-lg font-bold text-customPurple mb-2">Order Summary</h3>
                                <div className="flex justify-between mb-2">
                                    <p className="text-gray-600">Subtotal</p>
                                    <p className="text-customPurple font-bold">${calculateSubtotal()}</p>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <p className="text-gray-600">Discount(-20%)</p>
                                    <p className="text-[#FF3333] font-bold">-${calculateDiscount()}</p>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <p className="text-gray-600">Delivery Fee</p>
                                    <p className="text-customPurple font-bold">$20</p>
                                </div>
                                <hr className="my-2 border-gray-300" />
                                <div className="flex justify-between">
                                    <p className="text-customPurple font-bold">Total</p>
                                    <p className="text-customPurple font-bold">${calculateTotal()}</p>
                                </div>
                            </div>
                            {/* Payment methods */}
                            <div className="border rounded-lg p-4">
                                <h3 className="text-lg font-bold text-customPurple mb-2">Payment Methods</h3>
                                <div className="flex items-center mb-2">
                                    <img src={Visa} alt="Visa" className="w-10 h-10 mr-2" />
                                    <p>Visa ending in 6789</p>
                                    <div className="bg-green-500 rounded-full h-5 w-5 flex items-center justify-center text-white ml-auto">
                                        ✓
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <img src={Mastercard} alt="Mastercard" className="w-10 h-10" />
                                    <img src={Paypal} alt="Paypal" className="w-10 h-10" />
                                    <img src={Applepay} alt="Applepay" className="w-10 h-10" />
                                    <img src={Gpay} alt="Gpay" className="w-10 h-10" />
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <p className="text-[#5464F9]">Update Credit and Debit Card</p>
                                    <IoIosArrowForward className="text-[#5464F9] ml-auto" />
                                </div>
                            </div>
                            {/* Cancellation policy */}
                            <div className="text-gray-600 mt-2">
                                <p className="mb-1">Cancellation Policy:</p>
                                <p>If you are responsible for cancelling the link, the Connection fee will be non-refundable. <span className="text-[#5464F9] cursor-pointer">Learn More</span></p>
                            </div>
                            {/* Checkout button */}
                            <button onClick={handleCloseModal} className="bg-[#280051] text-white px-4 py-2 rounded-md w-full mt-4">
                                Securely make payment
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );







    function calculateSubtotal() {
        return cartItems.reduce((total, item) => total + item.price, 0);
    }

    function calculateDiscount() {
        return Math.floor(calculateSubtotal() * 0.2);
    }

    function calculateTotal() {
        return calculateSubtotal() - calculateDiscount() + 20;
    }
};

export default CartPage;
