import React from 'react'

const AboutUs = () => {
  return (
    <>
      <div className='mt-[100px]'>
        <h1 className=' font-semibold text-[30px] mx-auto py-3 px-16'>Driving the force of <span className=' text-[#fbc531]'>assortment</span></h1>
        <p className=' text-[20px] text-[#676662] mx-auto py-5 px-16'>For over a decade now, we've been  empowering our customers in discovering new tastes and experiences across countries. By putting together meticulous information for our customers, we enable them to make an informed choice.</p>
      </div>

      <div>
        <h1 className='text-[35px] font-semibold px-16 py-3'>Who are we?</h1>
        <div className='flex gap-8 py-3 px-16 items-center flex-wrap-reverse sm:flex-nowrap'>
          
            <p className='text-[18px] text-[#676662]'>Launched in 2024, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
          
          <img src='https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp' alt='' className='sm:w-[full] md:w-[400px] lg:w-[600px] rounded-md'/>
        </div>
      </div>

      <div>
        <h1 className='text-[36px] font-extrabold px-16 py-2'>From our blog</h1>
        <p className='text-[18px] text-[#676662] px-16 py-1'>Explore our blog for insightful articles, personal reflections, impactful resources, and ideas that inspire us at Zomato</p>
      </div>


      <div className='flex gap-4 justify-center flex-wrap'>

        <div>
          <div className='w-[300px] h-[160px] bg-[#4b7bec] rounded-md flex justify-between gap-3 p-4 m-4 cursor-pointer'>
              <div>
                  <p className='text-white text-[14px] font-bold'>A tale of Scale</p>
                  <p className='text-white text-[11px]'>Behind the scene at YummiFood Tech for NYE 2024</p>
              </div>
              <div>
                  <img src='https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?t=st=1709217778~exp=1709221378~hmac=adba2a80dabe46969cde6d34921ddad72a37a60307327442533fe093f46fa3a9&w=996' className='rounded w-[180px] h-[100px]' />
              </div>    
          </div>
        </div> 

        <div className='w-[300px] h-[160px] bg-[#B33771] rounded-md flex justify-between p-4 m-4 cursor-pointer'>
            <div>
                <p className='text-white text-[14px] font-bold'>Migration to Dynamo Demo</p>
                <p className='text-white text-[11px]'>Behind the scene at YummiFood Tech for NYE 2024</p>
            </div>
            <div>
                <img src='https://www.shutterstock.com/shutterstock/photos/1086943037/display_1500/stock-photo-links-with-a-hand-in-a-dark-light-background-1086943037.jpg' className='rounded w-[180px] h-[100px]' />
            </div>    
        </div>

        <div className='w-[300px] h-[160px] bg-[#3B3B98] rounded-md flex justify-between p-4 m-4 cursor-pointer'>
            <div>
                <p className='text-white text-[14px] font-bold'>Yummi Food</p>
                <p className='text-white text-[11px]'>Behind the scene at YummiFood Tech for NYE 2024</p>
            </div>
            <div>
                <img src='https://img.freepik.com/premium-photo/plate-hot-biryani-with-copy-space-whit-background_987842-1969.jpg?w=826' className='rounded w-[180px] h-[100px]' />
            </div>    
        </div>


      </div>


      
     
    </>
  )
}

export default AboutUs