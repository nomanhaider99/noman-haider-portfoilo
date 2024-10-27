import React from 'react'
import Logo from '../ui/Logo'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center md:px-20 px-4 py-6'>
        {/* Logo */}
        <div>
            <Logo />
        </div>
        {/* Links */}
        <div className='flex gap-5 text-xs font-light text-zinc-300'>
            <Link href={"/"}><h4 className='cursor-pointer hidden md:block'>Home</h4></Link>
            <Link href={"/about"}><h4 className='cursor-pointer'>About</h4></Link>
            <Link href={"/contact"}><h4 className='cursor-pointer'>Contact</h4></Link>
        </div>
    </div>
  )
}

export default Header