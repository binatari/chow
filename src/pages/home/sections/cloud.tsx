import { Icons } from '@/components/ui/icons'
import React from 'react'

const Cloud = () => {
  return (
    <div className='mb-10'>
         <div className='text-center  space-y-3 flex flex-col justify-center items-center'>
        <p className="text-[15px] flex items-center justify-center gap-2 text-center">
        <Icons.Star className='text-black text-[8px] md:text-base' />
        Join the chow africa waitlist
        <Icons.Star />
        </p>
        <h1 className='font-medium md:text-6xl text-[32px]'>
        <span className='md:hidden'>Are you {' '}</span>
        tired of <br className='md:hidden'/> eating the
        <span className='md:hidden'>{' '} same <br className='md:hidden'/> dishes {' '}</span>
        <span className='text-white sofia-sans bg-[#D87023] rounded-[17px] border-[2px] px-4 py-1 border-black text-[22px] md:hidden'>

everyday?
</span>
        </h1>
        <span className='text-white sofia-sans bg-[#D87023] rounded-[40px] border-[4px] px-5 py-1 border-black text-5xl hidden md:block'>

           🍛 same dishes everyday? 🍝
        </span>
        <p className='sofia-sans font-medium text-sm md:text-base'>
        Do you crave new and exciting dishes? Look no further! Chow is the <br/> perfect solution for discovering your next dish.
        </p>
        </div>
    </div>
  )
}

export default Cloud