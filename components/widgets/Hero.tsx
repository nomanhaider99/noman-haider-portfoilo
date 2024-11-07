import React from 'react'
import Button from '../ui/Button'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='w-full flex flex-col justify-center md:px-40 px-4 pt-24'>
        <h1 className='md:text-7xl text-5xl tracking-tighter text-center font-extrabold text-white'>Full-Stack <span className='text-yellow-400'>Developer</span> Ready to Build Your Next Big Idea</h1>
        <p className='text-zinc-200 font-light text-center my-2'>From Frontend to Backend, Delivering Seamless Experiences</p>
        {/* Buttons */}
        <div className='w-full flex gap-5 justify-center'>
          <Button
            text='Hire now'
           />
          <Link href={"/about"}>
            <Button
              text='See Projects'
              secondary
            />
          </Link>
        </div>
        {/* Shades */}
        <div className="flex justify-between">
          <div className="absoulte w-[15vw] h-[15vw] bg-zinc-400 rounded-full blur-[15vw] md:blur-[10vw]"></div>
          <div className="absoulte w-[15vw] h-[15vw] bg-zinc-400 rounded-full blur-[15vw] md:blur-[10vw]"></div>
        </div>
    </div>
  )
}

export default Hero