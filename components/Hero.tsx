import React from 'react'
import BackgroudCircles from './BackgroudCircles'
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Link from "next/link"

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi! The Name's Sarthak Dobriyal",
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore />"
        ],
        loop:true,
        delaySpeed:2000,
    });
  return (
    <div className='h-screen flex flex-col items-center justify-center overflow-hidden text-center '>
        <BackgroudCircles />

        <motion.img 
        initial={{
            opacity:0,
            y:-200,
            scale:0,
        }}
        animate={{
            opacity:1,
            y:0,
            scale:1
        }}
        transition={{
            duration:1.5
        }}
        
        className='relative rounded-full h-24 w-24 md:h-32 md:w-32 mb-8 mx-auto object-cover '
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />

        <div className='z-20'>
        <h2 className='text-xs md:text-base uppercase text-gray-500 pb-2 md:tracking-[20px] tracking-[10px] font-extrabold '>Software Engineer</h2>

        <h1 className='text-2xl md:text-3xl lg:text-6xl'>
        <span className='font-bold  text-center'>{text}</span>
        <Cursor cursorColor='gray' />
        </h1>

        <div className='pt-5'>
            
            <Link href="#about">
            <button className='heroButton'>About</button>
            </Link>
            <Link href="#experience">
             <button className='heroButton'>Experience</button>
            </Link>
            <Link href="#skills">
            <button className='heroButton'>Skills</button>
            </Link>
            <Link href="#projects">
            <button className='heroButton'>Projects</button>
            </Link>
        </div>

        </div>



    </div>
  )
}

export default Hero