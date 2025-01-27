import MealCards from '@/components/cards/mealCards'
import { motion } from 'framer-motion'


const greenCards = [
    '/green-card-1.svg',
     '/green-card-2.svg',
     '/green-card-3.svg'
]
const MealGrid = () => {

      // Define the staggered animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger each child by 0.2s
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 0,
    },
    visible: {
      opacity: 1,
      x: 2, // Translate 2px to the right
      transition: {
        duration: 0.5, // Animation duration for each card
        ease: "easeInOut",
      },
    }}
  return (
    <div className="md:flex max-w-[1070px] mx-auto bg-[#FFF8F2] gap-10 px-4 py-2 md:p-12 rounded-[14px] relative overflow-hidden">
        <img className='absolute top-10 -left-20' src='/top-text.svg'/>
        <img className='absolute bottom-0 -right-10' src='/bottom-text.svg'/>
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
    <div className='relative rounded-[14px]'>
        <div className='rounded-[14px] bg-white overflow-hidden h-full  w-full px-3 py-1'>
        <img src="/grey-shirt-human.png" alt="Grey shirt human" className='w-full object-cover h-full rounded-[14px]' />  
        </div>

      <motion.div
      className="space-y-1 absolute bottom-20 -left-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }} // Trigger animation once when 50% of container is in view
    >
      {greenCards.map((card, index) => (
        <motion.img
          key={index}
          src={card}
          variants={{...itemVariants, visible:{
            ...itemVariants.visible,
            x: 20 * index
          }}} // Apply animation to each image
        />
      ))}
    </motion.div>
    <motion.div
      className="space-y-1 absolute top-10 -right-5"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }} // Trigger animation once when 50% of container is in view
    >
      
        <motion.img
          src={'/orange-card.svg'}
          variants={{...itemVariants, visible:{
            ...itemVariants.visible,
            x: 40 
          }}} // Apply animation to each image
        />
    </motion.div>
    </div>
  </div>
   
  )
}

export default MealGrid