import React from 'react';

function Newsletter() {
    return (
        <div className='px-5 mt-10'>
            <div className='bg-[#280051] px-10 py-8 rounded-2xl flex flex-col md:flex-row md:items-center'>
                <div className='mb-4 md:mb-0 md:mr-8'>
                    <p className='text-3xl font-bold text-white'>
                        STAY UPTO DATE ABOUT OUR <br /> LATEST OFFERS
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:justify-end md:ml-auto">
                    <input
                        type="text"
                        placeholder="Enter your email address"
                        className="bg-white text-[#280051] px-6 py-3 rounded-3xl outline-none mb-4 md:mb-0 md:mr-2"
                    />
                    <button
                        className="bg-white text-[#280051] px-6 py-3 rounded-3xl outline-none"
                    >
                        Subscribe to Newsletter
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
