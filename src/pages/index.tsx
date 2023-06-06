import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Footer/>
    </main>
  )
}
