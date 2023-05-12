'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import { useAuth } from '@/hooks/auth'
import { Toaster, toast } from 'sonner';



export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 1000,
      easing: 'ease-out-cubic',
    })
  })

  return (
    <>
      <Header />
      <Toaster position='bottom-right' closeButton />
        <main className="grow">

          {children}

        </main>
      <Footer />
    </>
  )
}
