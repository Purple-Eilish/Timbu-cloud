import React from 'react';
import Twitter from '../Assets/Twitter.svg';
import Facebook from '../Assets/fb.svg';
import Instagram from '../Assets/ig.svg';
import Github from '../Assets/git.svg';
import Visa from '../Assets/visa.svg';
import Mastercard from '../Assets/mastercard.svg';
import Paypal from '../Assets/paypal.svg';
import Gpay from '../Assets/gpay.svg';
import Applepay from '../Assets/applepay.svg';

function Footer() {
    return (
        <div className='px-5 mt-10'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-5'>
                <div className='flex flex-col gap-5 w-full md:w-1/4'>
                    <div className="text-customPurple font-bold text-lg md:text-xl">
                        TIMBU CLOUD SHOP
                    </div>
                    <p className="text-gray-500">From everyday essentials to standout pieces, we offer a variety of options to suit your personal style.</p>
                    <div className='flex gap-1 mt-2'>
                        <img src={Twitter} alt="Twitter" className="h-6 w-6" />
                        <img src={Facebook} alt="Facebook" className="h-6 w-6" />
                        <img src={Instagram} alt="Instagram" className="h-6 w-6" />
                        <img src={Github} alt="Github" className="h-6 w-6" />
                    </div>
                </div>

                <div className='flex flex-col gap-5 md:ml-12'>
                    <div className="text-customPurple font-medium text-md md:text-lg">
                        COMPANY
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500">About</p>
                        <p className="text-gray-500">Features</p>
                        <p className="text-gray-500">Works</p>
                        <p className="text-gray-500">Career</p>
                    </div>
                </div>

                <div className='flex flex-col gap-5 md:ml-12'>
                    <div className="text-customPurple font-medium text-md md:text-lg">
                        HELP
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500">Customer Support</p>
                        <p className="text-gray-500">Delivery Details</p>
                        <p className="text-gray-500">Terms & Conditions</p>
                        <p className="text-gray-500">Privacy Policy</p>
                    </div>
                </div>

                <div className='flex flex-col gap-5 md:ml-12'>
                    <div className="text-customPurple font-medium text-md md:text-lg">
                        FAQ
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-500">Account</p>
                        <p className="text-gray-500">Manage Deliveries</p>
                        <p className="text-gray-500">Orders</p>
                        <p className="text-gray-500">Payments</p>
                    </div>
                </div>
            </div>
            <hr className="my-4 border-gray-300" />
            <div className='flex justify-between items-center mt-4 md:mt-0 mb-10 flex-wrap'>
                <p className="text-gray-500">Timbu Cloud Shop. © 2015-2023, All Rights Reserved</p>
                <div className="flex gap-1">
                    <img src={Visa} alt="" className="h-6 w-6" />
                    <img src={Mastercard} alt="" className="h-6 w-6" />
                    <img src={Paypal} alt="" className="h-6 w-6" />
                    <img src={Applepay} alt="" className="h-6 w-6" />
                    <img src={Gpay} alt="" className="h-6 w-6" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
