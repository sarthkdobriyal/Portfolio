import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean,
}

export default function Skill({ directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
    <motion.img 
    initial={{
        x: directionLeft ? -100 : 200,
        opacity:0
    }}
    whileInView={{
        x:0,
        opacity:1
    }}
    transition={{
        duration:0.5
    }}
    className="w-14 h-14  rounded-full border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
    src ="https://cdn.worldvectorlogo.com/logos/react-2.svg"
    />

    <div className='absolute opacity-0 group-hover:opacity-80 group-hover:bg-gray-600 h-14 w-14 rounded-full '>
        <div className='flex items-center justify-center h-full w-full'>
            <p className='text-1xl font-bold text-white opacity-100 transition duration-300 ease-in-out'>100%</p>
        </div>
    </div>
    
</div>
  )
}