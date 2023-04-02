import React from 'react'
import { motion } from 'framer-motion'
import { Projects } from '@/typings'
import { urlFor } from '@/sanity'
import Link from 'next/link'

type Props = {
    projects: Projects[]
}

function Project({projects}: Props) {
    console.log(projects)

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


        <h2 className='text-gray-500 uppercase tracking-[20px] md:tracking-[30px] font-semibold absolute top-24 text-2xl md:text-3xl '>Projects</h2>

        <div className='relative w-full flex overflow-scroll scroll-smooth scrollbar-thin scrollbar-track-gray-600 scrollbar-thumb-[#f7ab0a]/50 scrollbar-rounded-[10px]  overflow-y-hidden snap-x snap-mandatory z-20 '>{
                projects?.map((project) => (
                    // eslint-disable-next-line react/jsx-key
                    <div
                        key={project._id}
                    className='w-screen flex-shrink-0 snap-center  flex flex-col space-y-5 justify-center items-center p-20 md:p-44 h-screen' >
                
                    <Link href={ project.linkToBuil} target='_blank' >
                        <motion.img 
                        initial={{opacity:0,y:-300}}
                        whileInView={{opacity:1,y:0}}
                        transition={{duration:1.5}}
                        viewport={{ once: true}}
                        src={String(urlFor(project.image))} alt="" 
                        className='w-40 h-40 mt-20 lg:mt-0'
                        />
                        </Link>
                        <div className='space-y-6 px-0 md:px-10 max-w-6xl '>
                            <h4 className='text-4xl font-bold text-center tracking-[3px]'><span className='underline decoration-[#f7ab0a]/50 underline-offset-4 '>{project.title}</span></h4>
                            
                            <div className="flex items-center space-x-2 justify-center">

                            {
                                project?.technologies.map((tech) => (
                                    <img className='h-10 w-10' key={tech._id} src={String(urlFor(tech.image))} alt="" />
                                ))
                            }
                            </div>

                            {
                                project.summary && 
                                project.summary.map((sum: string) => (
                                    <p className='text-sm text-center  '>{sum.children[0].text}</p>
                                ))
                            }
                            
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