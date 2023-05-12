export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with us today and let us help you grow your business',
}

import ContactForm from "@/components/contact-form";
import Particles from "@/components/particles";
import Image from 'next/image'
import Illustration from '@/public/images/glow-bottom.svg'

export default function Contact({ 

}) {
  return (
    <>
      <section>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          { /* Particles animation */}
          <Particles className="absolute inset-0 -z-10" />

          { /* Illustration */}
          <div className="absolute inset-0 -z-10 -mx-28 rounded-b-[3rem] pointer-events-none overflow-hidden opacity-25" aria-hidden="true">
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 -z-10">
              <Image src={Illustration} className="max-w-none" width={2146} priority alt="Hero Illustration" />
            </div>
          </div>

          <div className="pt-32 pb-16 md:pt-32 md:pb-32">

            { /* Hero content */}
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6" data-aos="fade-down">
                <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4" data-aos="fade-down">
                  Contact Us
                </h1>
                <p className=" text-base text-slate-300 mb-8 aos-init aos-animate" data-aos="fade-down" data-aos-delay="200">
                  Give us your details below and we will get back to you as soon as possible.
                </p>
                { /* Contact Form */}
                <ContactForm />
                { /* Contact Form alternative */}
                <div className="flex items-center my-6 px-16">
                  <div className="border-t border-slate-600 grow mr-3" aria-hidden="true"></div>
                  <div className="text-sm text-slate-500 italic">or</div>
                  <div className="border-t border-slate-600 grow ml-3" aria-hidden="true"></div>
                </div>
                { /* Feel free to send us an email */}
                <p className=" text-base text-slate-300 mb-4 aos-init aos-animate font-extralight" data-aos="fade-down" data-aos-delay="200">
                  Feel free to send us an email at <span className="font-semibold">info@procreativelaunch.com</span> 
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}