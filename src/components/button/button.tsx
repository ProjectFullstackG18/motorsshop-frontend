import React from 'react'

interface IButtonProps {
    type: "button" | "submit"
    text: string
    callback: () => void
}

export const button = ({type, text, callback}: IButtonProps) => {
  return (
    <button type={type} onClick={callback}>
        {text}
    </button>
  )
}
