import { skillsData } from '@/data/skills'
import React from 'react'
import SkillCard from '../ui/SkillCard'

const Skills = () => {
  return (
    <div className='w-full px-20 flex flex-col items-center gap-10 pt-20'>
         {/* Heading */}
         <div className='md:text-5xl text-4xl text-center font-extrabold text-white tracking-tight'>Technologies <span className='text-yellow-500'>&</span> Frameworks</div>
        {/* Skills */}
        <div className='grid grid-cols-2 lg:grid-cols-8 gap-8 md:gap-4'>
          {
            skillsData.map((skill, index) => (
              <SkillCard
                  key={index}
                  icon={skill.icon}
                  title={skill.title}
               />
            ))
          }
        </div>
    </div>
  )
}

export default Skills