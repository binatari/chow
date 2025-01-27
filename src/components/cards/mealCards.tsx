import React from 'react'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { motion } from 'framer-motion'; // Importing Framer Motion
import { Icons } from '../ui/icons';
import { mealCardProps } from '@/lib/types';

const MealCards = ({size = 'lg'}:mealCardProps) => {
    const isLargeCard = size === 'lg'
  return (
    <motion.div
    className={` bg-contain overflow-hidden  ${isLargeCard ? 'group px-4 pb-8  min-w-[280px]' : ''}`}
    layout
    initial={ isLargeCard && { height: 350, backgroundPositionX: 'center', backgroundPositionY: 'bottom', backgroundSize:'cover',}} // Initial state
    transition={ isLargeCard ? {
      height: { type: 'spring', stiffness: 100, damping: 25, duration: 2 },
      backgroundImage: { duration: 2 },
    } : undefined} // Smooth transition
    whileHover={ isLargeCard ? {
      height: 509,
      backgroundImage: 'url(/phone-clean.png)',
      backgroundRepeat:'no-repeat',
      backgroundPositionY: 'top',
      backgroundSize:'cover'
    } : undefined }
  >
    <Card className="p-3 group-hover:bg-transparent group-hover:mt-40 group-hover:shadow-none group-hover:border-none pb-4">
      <motion.div
        className={`bg-[#F4F3E8] group-hover:bg-transparent rounded-[14px] flex justify-center ${ isLargeCard ? 'py-12' : 'py-'}`}
      >
        <img
          src="/food.png"
          className={isLargeCard ? "h-[100px]" : 'w-full max-w-[61px]'}
        />
      </motion.div>
      <div>
      <p
        className={`font-bold max-w-[289px]  ${ !isLargeCard ?  'text-[7px] mt-1' : 'mb-2 mt-3'}`}
      >
        Naija Special Fried Rice with Shrimps
      </p>
        <Badge  className={`bg-[#D6D5CA] rounded-[14px]  ${ !isLargeCard ?  'text-[4px]' : 'mb-2'}`}>🍲 Continental</Badge>
        <span className={`flex gap-1 text-[#858786] sofia-sans text-xs items-center ${ !isLargeCard && 'text-[4px]'}`}>
            <Icons.ThumbsUp/>
            120picks
        <Icons.Circle/>
        Approx. ₦3,000
        </span>
      </div>
    
    </Card>
  </motion.div>
  )
}

export default MealCards