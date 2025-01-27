import { Icons } from '@/components/ui/icons'
import { motion } from 'framer-motion';
import React from 'react'

const CloudAnimation = () => {
    return (
      <motion.div
      initial={{ x: "-100%" }} // Start off-screen to the left
      animate={{ x: "100%" }}  // Move to the right side off-screen
       transition={{
        duration: 10, // Time for one full loop
        ease: "linear", // Smooth constant speed
        repeat: Infinity, // Infinite loop
      }} className='absolute w-full bottom-0 left-0 flex justify-between'>
        {/* Cloud 1 */}
        <img
          src="/cloud1.svg" // Replace with the path to your first cloud image
          alt="Cloud 1"
          
        />
  
        {/* Cloud 2 */}
        <img
          src="/cloud2.svg" // Replace with the path to your second cloud image
          alt="Cloud 2"
        />
      </motion.div>
    );
  }

const Cloud = () => {
  return (
    <div className="mb-10 relative">
    {/* Cloud animation in the background */}
    <div className="absolute top-0 left-0 w-full h-full z-0 hidden md:block">
      <CloudAnimation />
    </div>

    {/* Content above the cloud animation */}
    <div className="text-center space-y-3 flex flex-col justify-center items-center z-20 relative">
      <p className="text-[15px] flex items-center justify-center gap-2 text-center">
        <Icons.Star className="text-black text-[8px] md:text-base" />
        Join the chow africa waitlist
        <Icons.Star />
      </p>
      <h1 className="font-medium md:text-6xl text-[32px]">
        <span className="md:hidden">Are you {' '}</span>
        tired of <br className="md:hidden" /> eating the
        <span className="md:hidden">{' '} same <br className="md:hidden" /> dishes {' '}</span>
        <span className="text-white sofia-sans bg-[#D87023] rounded-[17px] border-[2px] px-4 py-1 border-black text-[22px] md:hidden">
          everyday?
        </span>
      </h1>
      <span className="text-white sofia-sans bg-[#D87023] rounded-[40px] border-[4px] px-5 py-1 border-black text-5xl hidden md:block">
        🍛 same dishes everyday? 🍝
      </span>
      <p className="sofia-sans font-medium text-sm md:text-base">
        Do you crave new and exciting dishes? Look no further! Chow is the <br /> perfect solution for discovering your next dish.
      </p>
    </div>
  </div>
  )
}

export default Cloud