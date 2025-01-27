import MealCards from '@/components/cards/mealCards'
import React from 'react'

const MealGrid = () => {
  return (
    <div className="md:flex max-w-[1070px] mx-auto bg-[#FFF8F2] gap-10 px-4 py-2 md:p-12 rounded-[14px]">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1 relative">
      {/* Gradient div above cards */}
      <div className="w-full h-full absolute bg-custom-gradient z-10 pointer-events-none" />
      
      {/* Cards */}
      {Array.from({ length: 9 }).map((_, index) => (
        <div  className="relative z-0 hover:z-20">
 <MealCards
          key={index}
          size="sm"
         
        />
        </div>
       
      ))}
    </div>
  
    {/* Image */}
    <div>
      <img src="/grey-shirt-human.png" alt="Grey shirt human" className='w-full object-cover' />
    </div>
  </div>
   
  )
}

export default MealGrid