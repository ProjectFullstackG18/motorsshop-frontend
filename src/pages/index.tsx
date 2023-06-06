import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import { Button } from '@/components/button/button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Header>
        <Button text='Fazer Login' type='button' className="font-semibold"/>
        <Button text='Cadastrar' type='button' className="border-2 border-gray-500 rounded w-36 h-10 font-semibold"/>
      </Header>
      {/* <Footer/> */}
    </main>
  )
}
