import React from 'react'

interface IButtonProps {
    type: "button" | "submit"
    className?: string
    text: string
    callback?: () => void
}

export const Button = ({type, text, className, callback}: IButtonProps) => {
  return (
    <button className={className} type={type} onClick={callback}>
        {text}
    </button>
  )
}
