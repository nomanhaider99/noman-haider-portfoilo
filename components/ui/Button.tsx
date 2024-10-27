import React from 'react'

interface ButtonProps {
    text: string,
    secondary?: boolean
}

const Button: React.FC<ButtonProps> = ({ 
    text,
    secondary
}) => {
  return (
    <button
        className={`text-white rounded-full px-6 py-2 shadow-md ${
            secondary 
            ? 'bg-transparent border-[0.5px] border-zinc-100' 
            : 'bg-lightpurple border-none'
        }`}
    >
        {text}
    </button>
  )
}

export default Button
