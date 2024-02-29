import React from 'react'
import Hero from './Hero'
import FoodSlider from './FoodSlider'
import Delivery from './Delivery'


const Home = ({handleAdd}) => {
  return (
    <div>
         <Hero/>
         <FoodSlider handleAdd={handleAdd}/>
         <Delivery/>
         
    </div>
  )
}

export default Home