import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Hero = () => {

    const imgData = [
        {
            url:"https://source.unsplash.com/1600x1000/?salad"
        },
        {
            url:"https://source.unsplash.com/1600x1000/?burger"
        },
        {
            url:"https://source.unsplash.com/1600x1000/?pizza"
        },
        {
            url:"https://source.unsplash.com/1600x1000/?cake"
        },
        {
            url:"https://source.unsplash.com/1600x1000/?dosa"
        }
    ];


    const [slider, setSlider] = useState(0);

    const handleNext = () => {
        setSlider(slider === imgData.length - 1 ? 0 : slider + 1);
    };

    const handlePrev = () => {
        setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
    };


    useEffect(() => {
        const intervalId = setInterval(() => {
            handleNext();
        }, 3000);
    
        return () => clearInterval(intervalId);
    }, [slider]);
    



  return (
    <div className='mt-[100px]'>
        <div className='w-[90%] mx-auto sm:h-[40vh] md:h-[70vh] lg:h-[80vh] my-5 relative'>

            {
                imgData.map((item, index)=>(
                    <div key={index} className={`${slider === index? "block":"hidden"}`}>
                    <img src={item.url} alt="" className='w-full h-[80vh] object-cover rounded-2xl'/>
                    </div>
                ))
            }
            

            <div className='w-full mx-auto h-[80vh] opacity-50 bg-black absolute top-0 left-0 rounded-2xl'></div>


            <div className=' absolute top-[50%] text-[20px] md:text-[30px] text-center w-full text-white font-semibold flex justify-center'>
            <h1>Welcome to the World of Tasty and Fresh Food</h1>
            </div>

            
            <div className='flex justify-between w-full px-5 absolute top-[50%] text-white'>
                <MdChevronLeft size={30} className='cursor-pointer' onClick={handlePrev}/>
                <MdChevronRight size={30} className='cursor-pointer' onClick={handleNext}/>
            </div>

        </div>
    </div>
  )
}

export default Hero;