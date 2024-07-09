import React from 'react';
import cloth1 from '../Assets/cloth1.svg';
import cloth2 from '../Assets/cloth2.svg';
import cloth3 from '../Assets/cloth3.svg';
import cloth4 from '../Assets/cloth4.svg';

function More() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto px-5 mt-10'>
            {/* Item 1 */}
            <div className='mb-8'>
                <img src={cloth1} alt='Cloth 1' className='w-full h-auto mb-4' />
                <div>
                    <h2 className='text-customPurple font-bold text-xl mb-2'>Polo with Contrast Trims</h2>
                    <div className='flex items-center mb-2'>
                        <div className='text-yellow-400'>&#9733;&#9733;&#9733;&#9733;</div>
                        <span className='ml-1'>4.0/5</span>
                    </div>
                    <div className='flex gap-3'>
                        <p className='text-black font-bold text-xl'>$212</p>
                        <p className='text-gray-500 text-xl line-through'>$242</p>
                    </div>
                </div>
            </div>

            {/* Item 2 */}
            <div className='mb-8'>
                <img src={cloth2} alt='Cloth 2' className='w-full h-auto mb-4' />
                <div>
                    <h2 className='text-customPurple font-bold text-xl mb-2'>Gradient Graphic T-shirt</h2>
                    <div className='flex items-center mb-2'>
                        <div className='text-yellow-400'>&#9733;&#9733;&#9733;&#9733;&#9734;</div>
                        <span className='ml-1'>3.5/5</span>
                    </div>
                    <div className='flex gap-3'>
                        <p className='text-black font-bold text-xl'>$145</p>
                    </div>
                </div>
            </div>

            {/* Item 3 */}
            <div className='mb-8'>
                <img src={cloth3} alt='Cloth 3' className='w-full h-auto mb-4' />
                <div>
                    <h2 className='text-customPurple font-bold text-xl mb-2'>Polo with Tipping Details</h2>
                    <div className='flex items-center mb-2'>
                        <div className='text-yellow-400'>&#9733;&#9733;&#9733;&#9733;&#9734;</div>
                        <span className='ml-1'>4.5/5</span>
                    </div>
                    <div className='flex gap-3'>
                        <p className='text-black font-bold text-xl'>$180</p>
                    </div>
                </div>
            </div>

            {/* Item 4 */}
            <div className='mb-8'>
                <img src={cloth4} alt='Cloth 4' className='w-full h-auto mb-4' />
                <div>
                    <h2 className='text-customPurple font-bold text-xl mb-2'>Black Striped T-shirt</h2>
                    <div className='flex items-center mb-2'>
                        <div className='text-yellow-400'>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                        <span className='ml-1'>5.0/5</span>
                    </div>
                    <div className='flex gap-3'>
                        <p className='text-black font-bold text-xl'>$120</p>
                        <p className='text-gray-500 text-xl line-through'>$150</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default More;
