import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Project({}: Props) {

    const projects = [1,2,3,4,5]


  return (
    <motion.div
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:1.3
    }}
    className='h-screen flex flex-col justify-evenly items-center text-center relative overflow-hidden max-w-full mx-auto z-0 '>


        <h2 className='text-gray-500 uppercase tracking-[20px] md:tracking-[30px] font-semibold absolute top-24 text-2xl md:text-3xl '>Project</h2>

        <div className='relative w-full flex overflow-scroll scroll-smooth scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-[#f7ab0a]/50 scrollbar-rounded-[10px]  overflow-y-hidden snap-x snap-mandatory z-20 '>{
                projects.map((project) => (
                    // eslint-disable-next-line react/jsx-key
                    <div
                    
                    className='w-screen flex-shrink-0 snap-center  flex flex-col space-y-5 justify-center items-center p-20 md:p-44 h-screen' >
                
                        <motion.img 
                        initial={{opacity:0,y:-300}}
                        whileInView={{opacity:1,y:0}}
                        transition={{duration:1.5}}
                        viewport={{ once: true}}
                        src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" 
                        className='w-40 h-40 mt-20 lg:mt-0'
                        />

                        <div className='space-y-6 px-0 md:px-10 max-w-6xl '>
                            <h4 className='text-4xl font-bold text-center tracking-[3px]'><span className='underline decoration-[#f7ab0a]/50 underline-offset-4 '>Project</span> Title</h4>
                            <p className='text-sm text-center  '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, deleniti obcaecati? Non, repellat magnam sint in cumque quis impedit sed dolores reiciendis architecto magni dolorem facere modi numquam fugiat unde, dolor esse recusandae eius? Maxime totam voluptatem dolor modi eius!</p>
                        </div>

                    </div>
                ))
            }



        </div>
            <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[300px] -skew-y-12'>
            </div>  

    </motion.div>
  )
}

export default Project