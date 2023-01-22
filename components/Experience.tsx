import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from '@/components/ExperienceCard'



type Props = {}

function Experience({}: Props) {
  return (
    <motion.div
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1,
    }}
    transition={{
        duration:1.3
    }}
    className='h-screen relative flex justify-center flex-col  items-center md:flex-row overflow-hidden max-w-full px-10 mx-auto text-left'>
        
        <h2 className='text-gray-500 uppercase tracking-[20px] md:tracking-[30px] font-semibold absolute top-24 text-2xl md:text-3xl '>Experience</h2>

        <div className='flex   scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-[#f7ab0a]/50 space-x-5 px-8  md:px-36 lg:px-60 xl:px-48 snap-x snap-mandatory w-full h-3/4 mt-32 '>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>




    </motion.div>
  )
}

export default Experience