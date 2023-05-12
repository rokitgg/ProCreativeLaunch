export const metadata = {
  title: 'Home',
  description: 'Find the best SEO, Marketing, IT, Design and Development solutions for your business.',
}

import Hero from '@/components/hero'
import Brands from '@/components/brands'
import Features from '@/components/features'
import Features02 from '@/components/features-02'
import Features03 from '@/components/features-03'
import TestimonialsCarousel from '@/components/testimonials-carousel'
import Features04 from '@/components/features-04'
import Pricing from '@/components/pricing'
import Testimonials from '@/components/testimonials'
import Cta from '@/components/cta'



export default function Home({ 

}) {
  return (
    <>
      <Hero />
      <Brands />
      <Features />
      <Features02 />
      <Features03 />
      <TestimonialsCarousel />
      <Features04 />
      { /* <Pricing /> */ } { /* Commented out because it's not ready yet */ }
      <Testimonials />
      <Cta />
    </>
  )
}
