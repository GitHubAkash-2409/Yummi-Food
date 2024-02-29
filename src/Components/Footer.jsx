import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-black text-white'>
        <div className='grid grid-cols-2 md:grid-cols-4 py-10 pl-12'>
        
            <div>
                <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Yummi<span className='text-[#fbc531]'>Food</span></h2>
                <p className='text-[15px] md:text-[20px] text-[gray] '>© 2024 Aka Technologies Pvt. Ltd.</p>
            </div>

            <div>
                <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Company</h2>
                <p className='text-[15px] md:text-[20px] mb-2 text-[gray] cursor-pointer'>About</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[gray] cursor-pointer'>Careers</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[gray] cursor-pointer'>Teams</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[gray] cursor-pointer'>Yummi One</p>
            </div>

            <div>
                <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Help & Support</h2>
                <p className='text-[15px] md:text-[20px] mb-2 text-[gray] cursor-pointer'>Company</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[gray] cursor-pointer'>Partner With Us</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[gray] cursor-pointer'>Ride With Us</p>
            </div>

            <div>
                <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>We Deliver to:</h2>
                <p className='text-[15px] md:text-[20px] mb-2 text-[gray] cursor-pointer'>Banglore</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[gray] cursor-pointer'>Delhi</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[gray] cursor-pointer'>Pune</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[gray] cursor-pointer'>Mumbai</p>
                <p className='text-[15px] md:text-[20px] mb-2 text-[gray] cursor-pointer'>Gurgaon</p>
            </div>


        </div>
        
    </div>
  )
}

export default Footer