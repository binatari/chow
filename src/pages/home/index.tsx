import React from 'react'
import Hero from './sections/hero'
import Cloud from './sections/cloud'
import MealGrid from './sections/mealGrid'
import HomeFooter from '@/components/footer/homeFooter'

const Home = () => {
  return (
    <div className='min-h-screen px-3 md:px-0'>
        <Hero/>
        <Cloud/>
        <MealGrid/>
        <HomeFooter/>
    </div>
  )
}

export default Home