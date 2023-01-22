import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
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
      
        <h2 className='text-gray-500 uppercase tracking-[20px] md:tracking-[30px] font-semibold absolute top-24 text-2xl md:text-3xl ' >About</h2>

          
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
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png" 
        className='mt-32 md:mt-12 lg:mt-16 md:mb-0 flex-shrink-0  w-28 h-28 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[300px] xl:h-[300px] md:ml-24 '/>

      <div className='md:mt-21 mt-0 space-y-4 px-0 md:px-10'>
            <h4 className='font-semibold text-2xl md:text-3xl md:mt-16 italic'>Here is a <span className='underline underline-offset-8 decoration-[#f7ab0a]/50'>little</span> background </h4>
            <p
            className='xl:text-base md:text-1xl text-sm'
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur tempora consectetur, autem impedit nihil dolorum architecto dolore soluta nulla saepe accusamus. Nobis cumque hic voluptates quidem animi autem eligendi consequatur assumenda eaque provident, vitae, in quae atque harum unde! Eos exercitationem, at voluptates, nihil voluptatem delectus tempore placeat praesentium facere dicta ducimus odio totam illum velit quidem in labore pariatur mollitia! Repellendus velit necessitatibus debitis nemo atque inventore vel corporis numquam laudantium. Magni aliquid amet impedit tempore dolore, minus aspernatur reprehenderit nemo molestiae magnam soluta. Dignissimos voluptatibus totam fugiat, quis amet sunt debitis fuga expedita nulla ut quo quos non rerum fugit cum omnis nihil ipsum harum excepturi. Modi.</p>
        </div>
          
        



    </motion.div>
  )
}

export default About