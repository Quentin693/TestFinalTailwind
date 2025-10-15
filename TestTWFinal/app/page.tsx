import Header from '@/components/Header'
import Hero from '@/components/Hero'
import WhoWeAre from '@/components/WhoWeAre'
import PropertyShowcase from '@/components/PropertyShowcase'
import Leadership from '@/components/Leadership'
import Partners from '@/components/Partners'
import Blog from '@/components/Blog'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhoWeAre />
      <PropertyShowcase />
      <Leadership />
      <Partners />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

