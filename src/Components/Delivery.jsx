import React from 'react';

const Delivery = () => {
  return (
    <div className='w-full py-16 px-4'>
        <h3 className='text-[#fbc531] font-bold text-2xl text-center'>Quick Delivery App
        </h3>
        <div className='grid grid-cols-2 w-[70%] mx-auto my-10 gap-10'>
            <img src='https://source.unsplash.com/featured/?mobile' className='w-[350px] aspect-auto mix-blend-color-burn' />
            <div className='flex flex-col justify-center'>
                <p className='font-bold text-[green] text-[20px] md:text-[30px]'>Get the App</p>
                <h2 className='sm:text-5xl
                md:text-3xl lg:text-5xl py-2 font-bold'>The Fastest Food Delivery in India</h2>
                <button className='bg-black sm:w-[100px] md:w-[150px] text-white rounded-md my-6 py-[15px] sm:text-[10px] md:text-[20px] hover:text-[#fbc531] font-semibold'>Get Started</button>
            </div>
        </div>
    </div>
  );
};

export default Delivery