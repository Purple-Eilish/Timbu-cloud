import React from 'react';

function Rating() {
    return (
        <>
            <div className='flex justify-between px-5 mt-20'>
                <div className='text-xl text-gray-600'>Product Details</div>
                <div className='text-xl text-black border-b border-black'>Rating & Reviews</div>
                <div className='text-xl text-gray-600'>FAQs</div>
            </div>
            <div className='border-b'></div>
            <div className='reviews flex justify-between w-full mt-10 px-5'>
                <p>All Reviews <spann className='text-gray-400'>(451)</spann></p>
                <div className='flex gap-6'>
                    {/* <div className="r"> */}
                        <div className="filter w-8 h-8 rounded-full bg-gray-400 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4 7a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm2 4a1 1 0 0 1 0 2h6a1 1 0 0 1 0-2H6zM5 3a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2H5z" clipRule="evenodd" />
                            </svg>
                        </div>

                    {/* </div> */}
                    <div className="filter  rounded-2xl bg-gray-400 px-4 py-1">Latest</div>
                    <div className="filter rounded-2xl bg-[#280051] px-4 py-1 text-white">Write a Review</div>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 mx-5'>
                {/* Card 1 */}
                <div className='bg-white border border-[#0000001A] rounded-md  p-6'>
                    <div className=' items-center mb-4'>
                        <div className='text-yellow-400'>
                            {/* Replace with your star icon or rating component */}
                            ★★★★★
                        </div>
                        <div className="flex">
                            <div className='ml-2 font-bold text-lg'>Firdaous</div>
                            <div className=' ml-3'>
                                {/* Replace with your verified icon */}
                                <div className='bg-green-500 rounded-full h-6 w-6 flex items-center justify-center text-white'>
                                    ✓
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-gray-700 mb-4'>
                        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                    </div>
                    <div className='text-gray-500 text-sm'>Posted on July 10, 2024</div>
                </div>

                {/* Card 2 */}
                <div className='bg-white border border-[#0000001A] rounded-md  p-6'>
                    <div className=' items-center mb-4'>
                        <div className='text-yellow-400'>
                            {/* Replace with your star icon or rating component */}
                            ★★★★★
                        </div>
                        <div className="flex">
                            <div className='ml-2 font-bold text-lg'>Firdaous</div>
                            <div className=' ml-3'>
                                {/* Replace with your verified icon */}
                                <div className='bg-green-500 rounded-full h-6 w-6 flex items-center justify-center text-white'>
                                    ✓
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-gray-700 mb-4'>
                        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                    </div>
                    <div className='text-gray-500 text-sm'>Posted on July 10, 2024</div>
                </div>


                <div className='bg-white border border-[#0000001A] rounded-md  p-6'>
                    <div className=' items-center mb-4'>
                        <div className='text-yellow-400'>
                            {/* Replace with your star icon or rating component */}
                            ★★★★★
                        </div>
                        <div className="flex">
                            <div className='ml-2 font-bold text-lg'>Firdaous</div>
                            <div className=' ml-3'>
                                {/* Replace with your verified icon */}
                                <div className='bg-green-500 rounded-full h-6 w-6 flex items-center justify-center text-white'>
                                    ✓
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-gray-700 mb-4'>
                        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                    </div>
                    <div className='text-gray-500 text-sm'>Posted on July 10, 2024</div>
                </div>



                <div className='bg-white border border-[#0000001A] rounded-md  p-6'>
                    <div className=' items-center mb-4'>
                        <div className='text-yellow-400'>
                            {/* Replace with your star icon or rating component */}
                            ★★★★★
                        </div>
                        <div className="flex">
                            <div className='ml-2 font-bold text-lg'>Firdaous</div>
                            <div className=' ml-3'>
                                {/* Replace with your verified icon */}
                                <div className='bg-green-500 rounded-full h-6 w-6 flex items-center justify-center text-white'>
                                    ✓
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-gray-700 mb-4'>
                        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                    </div>
                    <div className='text-gray-500 text-sm'>Posted on July 10, 2024</div>
                </div>


                <div className='bg-white border border-[#0000001A] rounded-md  p-6'>
                    <div className=' items-center mb-4'>
                        <div className='text-yellow-400'>
                            {/* Replace with your star icon or rating component */}
                            ★★★★★
                        </div>
                        <div className="flex">
                            <div className='ml-2 font-bold text-lg'>Firdaous</div>
                            <div className=' ml-3'>
                                {/* Replace with your verified icon */}
                                <div className='bg-green-500 rounded-full h-6 w-6 flex items-center justify-center text-white'>
                                    ✓
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-gray-700 mb-4'>
                        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                    </div>
                    <div className='text-gray-500 text-sm'>Posted on July 10, 2024</div>
                </div>


                <div className='bg-white border border-[#0000001A] rounded-md  p-6'>
                    <div className=' items-center mb-4'>
                        <div className='text-yellow-400'>
                            {/* Replace with your star icon or rating component */}
                            ★★★★★
                        </div>
                        <div className="flex">
                            <div className='ml-2 font-bold text-lg'>Firdaous</div>
                            <div className=' ml-3'>
                                {/* Replace with your verified icon */}
                                <div className='bg-green-500 rounded-full h-6 w-6 flex items-center justify-center text-white'>
                                    ✓
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-gray-700 mb-4'>
                        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                    </div>
                    <div className='text-gray-500 text-sm'>Posted on July 10, 2024</div>
                </div>
            </div>
            <button className='border-gray-400 rounded-2xl flex m-auto border px-4 py-2 mt-10'>Load More Reviews</button>
        </>
    );
}

export default Rating;
