import React from 'react'
import { Button } from '../button/button'

export const Footer = () => {
  return (
    <footer className='bg-grey0 text-whiteFixed h-24 w-full'>
        <div className='container flex justify-between items-center mx-auto h-24'>
            <h2 className='text-3xl font-bold'>Motors <span className='text-lg'>Shop</span></h2>
            <p>&copy; 2023 Todos os direitos reservados.</p>
            <Button className='bg-gray-800 w-9 h-9 rounded' type='button' text='^'/>
        </div>
    </footer>
  )
}
