import React from 'react'
import BackgroudCircles from './BackgroudCircles'
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Link from "next/link"
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    pageInfo: PageInfo
}

function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi! I'm ${pageInfo?.name}`,
            "Frontend Master",
            "Web3 Enthusiast",
            "Open Source Contributor",
            "A Life Long Learner"
        ],
        loop:true,
        delaySpeed:2500,
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
        
        className='relative rounded-full h-24 w-24 md:h-52 md:w-52 mb-8 mx-auto object-cover '
        src={String(urlFor(pageInfo?.heroImage))} alt="" />

        <div className='z-20'>
        <h2 className='text-xs md:text-base uppercase text-gray-500 pb-2 md:tracking-[20px] tracking-[10px] font-extrabold '>{pageInfo?.role}</h2>

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