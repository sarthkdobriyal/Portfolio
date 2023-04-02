import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  pageInfo: PageInfo
}

type Para = {
  children : Array<Text>,
  _key: string
}
type Text = {
  text: string
}

function About({pageInfo}: Props) {
  // console.log(pageInfo)

  return (
    <motion.div 
    initial={{
        
      opacity:0
  }}
  animate={{
      
      opacity:1,
  }}
  transition={{
      duration:3.5
  }}
    className='h-screen flex flex-col md:flex-row md:text-left  justify-evenly items-center relative text-center '>

      <div className='w-full absolute top-[30%] bg-[#f7ab0a]/5 left-0 h-[300px] skew-y-12'>
      </div>
      
        <h2 className='text-gray-500 uppercase tracking-[20px] md:tracking-[30px] font-semibold absolute top-16 md:top-24 text-2xl md:text-3xl text-center' >About</h2>

          
        <motion.img
        initial={{
            x:-200,
            opacity:0
        }}
        whileInView={{
            x:0,
            opacity:1,
        }}
        transition={{
            duration:0.8
        }}
        src={String(urlFor(pageInfo.dp))}
        className='mt-24 md:mt-12 lg:mt-16 md:mb-0 flex-shrink-0  w-44 h-44 rounded-full object-scale-down md:object-contain md:rounded-lg md:w-80 md:h-80 xl:w-[400px] xl:h-[400px] md:ml-24 '/>

      <div className='md:mt-21 mt-0 space-y-4 px-0 md:px-10'>
            <h4 className='font-semibold text-2xl md:text-3xl md:mt-16 italic'>Here is a <span className='underline underline-offset-8 decoration-[#f7ab0a]/50'>little</span> background </h4>
            {
              pageInfo.content.map((para: Para) => (
                <p
                key={para._key}
                className='xl:text-sm md:text-1xl text-xs'
                >{para.children[0].text}</p>

              ))
            }
            
        </div>
          
        



    </motion.div>
  )
}

export default About