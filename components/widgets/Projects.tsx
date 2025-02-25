import { projectsData } from '@/data/projects'
import React from 'react'
import ProjectCard from '../ui/ProjectCard'

const Projects = () => {
  return (
    <div className='w-full md:px-20 px-4 flex flex-col items-center gap-10 mt-4'>
        {/* Heading */}
        <div className='text-5xl font-extrabold text-white tracking-tight'>Top Projects</div>
        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {
            projectsData.map((project, index) => (
              <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  icon={project.icon}
                  href={project.href}
               />
            ))
          }
        </div>
    </div>
  )
}

export default Projects