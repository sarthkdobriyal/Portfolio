import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

function ExperienceCard({}: Props) {
  return (

    <article className='w-[350px] md:w-[500px] lg:w-[650px] xl:w-[900px] px-16  bg-[#262626] h-full flex flex-col flex-shrink-0 items-center space-y-3 py-8 mx-auto justify-start overflow-hidden hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200  snap-center  '>

<motion.img
    initial={{
        y:-100,
        opacity:0

    }} 
    transition={{duration:1.2}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='w-24 h-24  rounded-full  xl:w-[150px] xl:h-[150px] object-cover object-top '
    src="https://i.pinimg.com/originals/08/61/b7/0861b76ad6e3b156c2b9d61feb6af864.jpg" alt="" />


<div className='px-0 md:px:10 ' >
        <h4 className='text-2xl font-bold text-center'>CEO of PAPAFAM</h4>
        <p className='font-bold text-1xl mt-1 text-center'>PAPAFAM</p>
        <div className='flex space-x-2 my-1 justify-center'>
                {/* tech used */}
            <motion.img className='h-6 w-6 rounded-full' src="https://freesvg.org/img/1673880012bald-mans-head.png" alt="" />
            <motion.img className='h-6 w-6 rounded-full' src="https://freesvg.org/img/1673880012bald-mans-head.png" alt="" />
            <motion.img className='h-6 w-6 rounded-full' src="https://freesvg.org/img/1673880012bald-mans-head.png" alt="" />
            <motion.img className='h-6 w-6 rounded-full' src="https://freesvg.org/img/1673880012bald-mans-head.png" alt="" />
            
        </div>
        <p className='uppercase py-2 text-gray-300 text-center'>Started from - Ended ON</p>
        <ul className='list-disc space-y-2 ml-5 text-xs'>
            <li>SUmmary POintSUmmary POintSUmmary POintSUmmary POintSUmmary POint</li>
            <li>SUmmary POintSUmmary POintSUmmary POintSUmmary POintSUmmary POint</li>
            <li>SUmmary POintSUmmary POintSUmmary POintSUmmary POintSUmmary POint</li>
        </ul>
    </div>



    </article>
    
  )
}

export default ExperienceCard