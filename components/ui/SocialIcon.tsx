import Link from 'next/link'
import React from 'react'

interface SocialIconProps {
    title: string,
    icon: any,
    href: string
}

const SocialIcon: React.FC<SocialIconProps> = ({
    title,
    icon,
    href
}) => {
  return (
    <Link href={href}>
      <div className='w-full py-2 flex gap-5 items-center border-b-[1px] border-zinc-400/40 cursor-pointer hover:bg-zinc-800 hover:scale-110 transition-transform'>
        <h1 className='md:text-8xl text-6xl font-extrabold text-white'>{title}</h1>
        <div>{icon}</div>
      </div>
    </Link>
  )
}

export default SocialIcon