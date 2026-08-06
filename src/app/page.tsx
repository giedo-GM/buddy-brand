import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Foundation from '@/components/sections/Foundation'
import ProductSuite from '@/components/sections/ProductSuite'
import SplitFeature from '@/components/sections/SplitFeature'
import FullwidthStatement from '@/components/sections/FullwidthStatement'
import Guarantee from '@/components/sections/Guarantee'
import CTA from '@/components/sections/CTA'
import FAQ from '@/components/sections/FAQ'
import PixelDissolve from '@/components/ui/PixelDissolve'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PixelDissolve
          colors={['#F2EDE6', '#E7E1D8', '#DDD7CE', '#D4CEC5', '#C9C2B8']}
          bg="#8C6239"
        />
        <Foundation />
        <ProductSuite />
        <Guarantee />
        <SplitFeature />
        <FullwidthStatement />
        <PixelDissolve
          colors={['#F2EDE6', '#E7E1D8', '#DDD7CE', '#D4CEC5', '#C9C2B8']}
          bg="#8C6239"
        />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
