import React from 'react'
import {motion} from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import { Social } from '@/typings';

type Props = {
    socials: Social[],
}

function Header({socials}: Props) {
  return (
    <header className=' w-screen sticky top-0  flex flex-row  justify-between mt-8 '>
        <motion.div className="flex flex-row items-center ml-6 xl:ml-44 md:ml-24"
            initial={{
                x:-500,
                opacity:0,
                scale:0
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1
            }}
            transition={{
                duration:1.5
            }}>
                {/* Socials */}

                {
                    socials.map((social) => (
                        <SocialIcon 
                        key={social._id}
                        url={social.url}
                        fgColor='gray'
                        bgColor='transparent' />
                    ))
                }
                             


        </motion.div>

        
            <motion.div className="relative flex flex-row items-center text-gray-400 cursor-pointer mr-6 xl:mr-44 md:mr-32"
                initial={{
                    opacity:0,
                    x:900,
                    scale:0
                }}
                animate={{
                    opacity:1,
                    x:0,
                    scale:1
                }}
                transition={{
                    duration:1.5
                }}>
               
                <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'/>
            
            
           <Link href="#contacts"><p className='text-xs xl:text-lg'>Get in Touch</p></Link>


            </motion.div>

    </header>
  )
}

export default Header