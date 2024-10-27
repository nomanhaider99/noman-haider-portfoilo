import AboutIntro from '@/components/widgets/AboutIntro'
import Education from '@/components/widgets/Education'
import Goals from '@/components/widgets/Goals'
import Interests from '@/components/widgets/Interests'
import Portfolio from '@/components/widgets/Portfolio'
import React from 'react'

const AboutPage = () => {
  return (
    <div className='w-full flex flex-col'>
      <AboutIntro />
      <Interests />
      <Education />
      <Portfolio />
      <Goals />
    </div>
  )
}

export default AboutPage