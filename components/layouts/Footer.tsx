import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FaThreads, FaUpwork } from 'react-icons/fa6'
import Logo from '../ui/Logo'
import Link from 'next/link'

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
            <Link href={"https://www.linkedin.com/in/nomanhaider99/"}><FaLinkedin size={35} color='#fff' className='cursor-pointer' /></Link>
            <Link href={"https://github.com/nomanhaider99"}><FaGithub size={35} color='#fff' className='cursor-pointer' /></Link>
            <Link href={"https://www.threads.net/@noman.haider99"}><FaThreads size={35} color='#fff' className='cursor-pointer' /></Link>
            <Link href={"https://www.upwork.com/freelancers/~01f5e655a4979b3856"}><FaUpwork size={35} color='#fff' className='cursor-pointer' /></Link>
        </div>
    </div>
  )
}

export default Footer