import Image from 'next/image'
import Particles from './particles'
import Illustration from '@/public/images/glow-bottom.svg'
import ContactForm from './contact-form'

export default function ContactFormV2() {
  return (
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        { /* Particles animation */}
        <Particles className="absolute inset-0 -z-10" />

        { /* Illustration */}
        <div className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
            <Image src={Illustration} className="max-w-none" width={2146} priority alt="Hero Illustration" />
          </div>
        </div>

        <div className="pt-32 pb-16 md:pt-52 md:pb-32">

          { /* Hero content */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6" data-aos="fade-down">
            <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4" data-aos="fade-down">Take your business to the moon.</h1>

                <ContactForm />
            </div>
          </div>

        </div>
      </div>
  )
}