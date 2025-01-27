import React from 'react'
import { Button } from '../ui/button'

const HomeFooter = () => {
  return (
    <footer className='shadow-[0px_20px_28px_0px_#00000014] border border-[#EDEFFC] mt-20 px-5 pb-3 pt-14 md:py-10 rounded-[14px] md:flex justify-between items-center mx-auto'>
        <p className='text-[32px]'>
        Signup to <br className='md:hidden'/> <span className='text-white sofia-sans bg-[#5F63E1] rounded-[40px] border-[2px] px-3 py-[2px] border-black max-w-[1140px]'>chowafrica</span> <br className='md:hidden'/> and say <br /> <span className='text-white sofia-sans bg-black rounded-[40px] border-[2px] px-3 py-[2px] border-[#009F79]'>goodbye 👋🏽</span>  to <br className='md:hidden'/> mealtime stress.
        </p>
        <Button className="px-[50px] py-3 md:py-6 border-[2px] border-white mt-20 md:mt-0 shadow-[0px_4px_12px_0px_#0000003D]">
    JOIN WAITLIST
  </Button>
    </footer>
  )
}

export default HomeFooter