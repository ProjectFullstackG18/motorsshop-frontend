import React, { ReactNode } from 'react'

interface IHeaderProps {
    children: ReactNode
}

export const Header = ({children}: IHeaderProps) => {
  return (
    <header className='h-20 border-b-2'>
        <div className=' pl-2 pr-2 max-w-screen-2xl mx-auto flex justify-between items-center h-full'>
            <h2 className='text-3xl font-bold'>Motors <span className='text-lg text-purple-700'>Shop</span></h2>
            <div className='flex items-center justify-between gap-8 border-l-2 border-gray-300 h-full pl-16'>
                {children}
            </div>
        </div>
    </header>
  )
}
