import React from 'react'
import { Button } from '../button/button'

export const Footer = () => {
  return (
    <footer className='bg-grey0 text-whiteFixed h-48 md:h-28 w-full mt-4 pt-4'>
        <div className='container flex justify-between items-center flex-col gap-10 md:flex-row mx-auto h-24'>
            <h2 className='text-3xl font-bold'>Motors <span className='text-lg'>Shop</span></h2>
            <p>&copy; 2023 Todos os direitos reservados.</p>
            <Button className='bg-grey1 w-9 h-9 rounded' type='button' text='^'/>
        </div>
    </footer>
  )
}
