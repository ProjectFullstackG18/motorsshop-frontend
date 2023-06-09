import React, { ReactNode, useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"

interface IHeaderProps {
    children: ReactNode
}

export const Header = ({children}: IHeaderProps) => {
    const [open, setOpen] = useState(false)
    console.log(open)
  return (
    <header className='h-20 border-b-2'>
        <div className=' pl-2 pr-2 max-w-screen-2xl mx-auto flex justify-between items-center h-full'>
            <h2 className='text-3xl font-bold'>Motors <span className='text-lg text-purple-700'>Shop</span></h2>
            <div className={`md:flex  duration-500 ${open ? `flex absolute w-full justify-evenly p-2 m-0 border-b-2 border-l-0 duration-500 mt-40` :  "hidden h-full duration-500 top-[-100%] "} items-center justify-between gap-8 border-l-2 border-gray-300 pl-16`}>
                {children}
            </div>
            <div className='md:hidden flex' onClick={() => setOpen(!open)}>
                {open ? <AiOutlineClose/>: <GiHamburgerMenu />}
            </div>
        </div>
    </header>
  )
}
