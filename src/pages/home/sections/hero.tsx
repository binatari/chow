import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { Input } from '@/components/ui/input';
import { useInView, motion, } from 'framer-motion';
import Marquee from 'react-fast-marquee'
import { useRef } from 'react'
import MealCards from '@/components/cards/mealCards';


const AnimatedSVG = () => {
    const ref = useRef(null); // Ref for in-view detection
    const isInView = useInView(ref, { once: true }); // Animate only once when in view
  
    return (
      <div className='absolute md:-bottom-2 md:-left-10  -left-3 bottom-2' ref={ref}>
        
        <motion.svg
          width="268"
          height="12"
          viewBox="0 0 268 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={'w-[109px] h-[2.8px] md:w-[268px] md:h-[12px]'}
        >
          <motion.path
            d="M1 9.00003C91.3333 4.83337 270.5 -0.999968 264.5 9.00003"
            stroke="#D87023"
            strokeWidth="6"
            initial={{ pathLength: 0 }} // Start with no path drawn
            animate={{ pathLength: isInView ? 1 : 0 }} // Draw full path when in view
            transition={{
              duration: 1, // Animation duration
              ease: "easeInOut", // Smooth easing
            }}
          />
        </motion.svg>
      </div>
    );
  };

const  CircularPathAnimation = () => {
  const circleVariants = {
    hidden: {
      strokeDasharray: 1130, // Total circumference of the circle
      strokeDashoffset: 1130, // Start with the path hidden
    },
    visible: {
      strokeDashoffset: 0, // Fully reveal the path
      transition: {
        duration: 2, // Adjust duration for animation speed
        ease: "easeInOut", // Smooth ease
      },
    },
  };

  return (
    <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="309"
    height="368"
    viewBox="0 0 309 368"
    variants={circleVariants}
    initial='hidden'
    animate='visible'
    className={'absolute bottom-24 -left-8 md:block hidden'}
  >
    <motion.circle
      cx="154.5"  
      cy="184"   
      r="154.5"   
      stroke="#D87023" 
      stroke-width="5"  
      fill="none" 
    />
  </motion.svg>
  );
}


const Hero = () => {
  return (
    <div className='min-h-screen bg-[#0E0E0E] rounded-3xl bg-[url(/rings.png)] bg-cover bg-repeat flex flex-col items-center justify-between mb-36  relative pt-20 md:pt-[150px] md:pb-[500px] overflow-hidden'>
        <CircularPathAnimation/>
        <div className='hidden md:block'/>
        <div className='text-center text-white space-y-3 px-2 md:px-0'>
        <p className="text-[8px] md:text-[15px] flex items-center justify-center gap-2 text-center">
  <Icons.Star />
  Join the Chow Africa waitlist
  <Icons.Star />
</p>
        <h1 className='font-medium text-[40px] md:text-8xl'>
        Find chow, <span className='courgette text-[#009F79] inline-block relative'>Asap <AnimatedSVG/>
</span>
        </h1>
        <p className='sofia-sans text-sm md:text-xl'>
        The patient dog eats left overs. Be the first to know when we <br/> launch. Join our Waitlist 😎
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center md:h-[50px] mt-20">
  <Input
    placeholder="Enter your email"
    className="flex-1 h-full text-black rounded-lg max-w-[327px] py-4 md:py-0"
  />
  <Button className="px-[50px] py-3  h-full border-[2px] border-white">
    JOIN WAITLIST
  </Button>
</div>
        </div>
        <div/>
        <div className=' absolute w-full bottom-0 left-0  overflow-visible '>
               <Marquee className='overflow-hidden grid gap-4 items-end'>
                <MealCards/>
                <MealCards/>
                <MealCards/>
                <MealCards/>
                <MealCards/>
                <MealCards/>
                <MealCards/>
                <MealCards/>
                <MealCards/>
               </Marquee>
        </div>
    </div>
  )
}

export default Hero