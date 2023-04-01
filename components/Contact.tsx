import React from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '@/typings';

type Inputs = {
    name: string;
  email: string;
  subject:string;
  message:string;
}

type Props = {
  pageInfo: PageInfo
}

function Contact({pageInfo}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:dobriyalsarthaksa.8@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
    } 


  return (
    <motion.div 
    className='h-screen flex justify-evenly items-center relative flex-col md:flex-row mx-auto max-w-7xl px-10 '>
        
        <h3 className='text-gray-500 uppercase tracking-[20px] md:tracking-[30px] font-semibold absolute top-24 text-2xl md:text-3xl '>Contact Me</h3>


        <div className='flex flex-col space-y-8 justify-start items-center mt-16 '>

        <h4 className='text-xl lg:text-3xl font-bold italic text-center   '>
            I will solve all your technical difficulties.{" "}
            <span className='underline underline-offset-4 decoration-[#f7ab0a]/50'>Let&apos;s Connect</span>
        </h4>

        <div className='space-y-2 text-left '>
            <div className='flex items-center space-x-2 '>
            <PhoneIcon className="h-5 w-5 text-[#f7ab0a]/50 animate-pulse" /> 
            <p className='text-sm lg:text-lg'>{pageInfo?.phoneNumber}</p>
            </div>
            <div className='flex items-center space-x-2 '>
            <EnvelopeIcon className="h-5 w-5 text-[#f7ab0a]/50 animate-pulse" /> 
            <p className='text-sm lg:text-lg'>{pageInfo?.email}</p>
            </div>
            <div className='flex items-center space-x-2 '>
            <MapPinIcon className="h-5 w-5 text-[#f7ab0a]/50 animate-pulse" /> 
            <p className='text-sm lg:text-lg'>{pageInfo?.address}</p>
            </div>
        </div>


        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
        <div className='space-x-2 flex '>
                <input {...register('name')} className='contactInput' placeholder='Name' type="text" />
                <input {...register('email')} className='contactInput' placeholder='Email' type="email" />
            </div>
            <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
            <textarea {...register('message')} placeholder='Message' className='contactInput resize-none'></textarea>
            <button type="submit" className='bg-[#f7ab0a]/50 py-2 rounded-md text-black font-bold tracking-[5px] text-lg hover:opacity-80'>Submit</button>
        </form>


        </div>



    </motion.div>

  )
}

export default Contact