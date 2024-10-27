import React from 'react'
import Button from './Button'

interface ProjectCardProps {
    title: string,
    description: string,
    icon: any
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    icon
}) => {
  return (
    <div className='md:w-[30vw] w-full bg-shadeblue rounded-xl border-t-[4px] border-lightpurple p-4 py-6 gap-5 flex justify-between'>
        {/* Icon */}
        <div>
            {icon}
        </div>
        {/* Text */}
        <div className='flex flex-col justify-between gap-2'>
            <h1 className='text-lg font-medium text-white tracking-tight'>{title}</h1>
            <p className='text-zinc-400 text-sm font-light'>{description}</p>
            <Button
                text='Browse project'
                secondary
             />
        </div>
    </div>
  )
}

export default ProjectCard