import React from 'react'
import { motion } from "framer-motion";
type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
    initial ={{
        opacity:0
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1, 0.2,0.4, 0.8, 0.1, 1],
        borderRadius: ["20%","20%","50%","80%","20%"]
    }}
    transition={{
        duration:2.5
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333333] h-[200px] w-[200px] rounded-full mt-72  animate-ping '  />
        <div className='absolute border border-[#333333] h-[300px] w-[300px] rounded-full mt-72  animate-ping '  />
        <div className='absolute border border-[#333333] h-[500px] w-[500px] rounded-full mt-72  animate-ping '  />
        <div className='border border-[#f7ab0a] rounded-full opacity-20 h-[550px] w-[550px] xl:h-[650px] xl:w-[650px] absolute mt-96 animate-pulse '/>
        <div className='absolute border border-[#333333] h-[800px] w-[800px] rounded-full mt-72  animate-ping ' />
    </motion.div>
  )
}