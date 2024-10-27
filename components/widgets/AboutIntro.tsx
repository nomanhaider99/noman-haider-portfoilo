import { techs } from '@/data/techs'
import React from 'react'
import SkillBox from '../ui/skillBox'

const AboutIntro = () => {
  return (
    <div className='md:px-20 px-4 pt-20 w-full flex flex-col'>
        <h1 className='text-3xl font-extrabold text-white tracking-tight'>Full Stack <span className='text-yellow-400'>Next.js</span> & <span className='text-yellow-400'>React</span> Developer</h1>
        <p className='text-zinc-400 md:w-[70%] w-full text-justify my-2 font-light text-sm tracking-tight'>
I am a full-stack Next.js developer with a strong foundation in web development technologies, including React, Next.js, CSS, and Tailwind CSS. My expertise extends to utilizing various UI frameworks such as ShadCN, Aceternity UI, and Material UI to create engaging and user-friendly interfaces. I am proficient in managing databases with MongoDB and PostgreSQL, employing ORMs like Prisma and Drizzle to streamline data interactions. With a passion for building efficient and scalable applications, I strive to deliver high-quality solutions that meet the needs of users and clients alike.</p>
        <div className='md:w-[50%] w-full grid grid-cols-4 gap-2 my-4'>
          {
            techs.map((tech, index) => (
              <SkillBox
                  key={index}
                  text={tech.title}
               />
            ))
          }
        </div>
        {/* Shades */}
        <div className="flex justify-between absolute">
          <div className="absoulte w-[15vw] h-[15vw] bg-zinc-400 rounded-full blur-[10vw]"></div>
          <div className="absoulte w-[15vw] h-[15vw] bg-zinc-400 rounded-full blur-[10vw]"></div>
        </div>
    </div>
  )
}

export default AboutIntro