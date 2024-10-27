import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaThreads, FaUpwork } from 'react-icons/fa6'
import Logo from '../ui/Logo'

const Footer = () => {
  return (
    <div className='w-full flex justify-between md:px-20 px-4 items-center py-10 bg-shadeblue/30 mt-10 rounded-xl'>
        {/* Name Email etc */}
        <div className='flex flex-col justify-between gap-10'>
            <Logo />
            <div>
                <p className='text-sm font-light text-zinc-400'>noman567n@gmail.com</p>
                <p className='text-sm font-light text-zinc-400'>+92 318 2454773</p>
            </div>
        </div>
        {/* Socials */}
        <div className='grid grid-cols-2 gap-5'>
            <FaLinkedin size={35} color='#fff' className='cursor-pointer' />
            <FaTwitter size={35} color='#fff' className='cursor-pointer' />
            <FaThreads size={35} color='#fff' className='cursor-pointer' />
            <FaUpwork size={35} color='#fff' className='cursor-pointer' />
        </div>
    </div>
  )
}

export default Footer