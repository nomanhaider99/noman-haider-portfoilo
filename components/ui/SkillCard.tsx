import React from 'react'

interface SkillCardProps {
    icon: any,
    title: string
}

const SkillCard: React.FC<SkillCardProps> = ({
    icon,
    title
}) => {
  return (
    <div className='p-5 h-28 w-28 rounded-full bg-zinc-700/30 border-none shadow-md flex justify-center items-center'>
        <div className='flex flex-col items-center'>
            {/* Icon */}
            <div>{icon}</div>
            {/* Title */}
            <div className='text-white text-lg font-extrabold tracking-tight'>{title}</div>
        </div>
    </div>
  )
}

export default SkillCard