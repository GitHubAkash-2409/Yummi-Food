import React from 'react'
import {mealData} from "../Data/data"

const OurFood = ({handleAdd}) => {
  return (
    <>
    <div className='w-[90%] mx-auto mt-[100px]'>
      <div>
        <h2 className='text-center text-[#fbc531] text-3xl font-bold py-5'>Our Food</h2>
      </div>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 py-6 gap-2'>
        {
          mealData.map((meal)=>(
            <div className='flex justify-center flex-col items-center'>
              <div>
              <img src={meal.img} alt='' className='w-[250px] h-[200px] object-cover rounded-md'/> 
              </div>
              <div>
              <p className='text-xl font-semibold uppercase'>{meal.title}</p>
              <p className='text-xl font-semibold uppercase'>{meal.price}</p>
              <button className='bg-black w-[80px] text-white rounded-md my-6 py-[12px] text-[12px] hover:text-[#fbc531] font-semibold' onClick={handleAdd}>Add to Cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default OurFood