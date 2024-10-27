import React from 'react'

interface SkillBoxProps {
    text: string
}

const SkillBox: React.FC<SkillBoxProps> = ({ text }) => {
  return (
    <div className='px-1 text-center py-1 text-xs rounded bg-white/30 text-white'>{text}</div>
  )
}

export default SkillBox