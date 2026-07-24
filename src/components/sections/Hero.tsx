'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import Label from '@/components/ui/Label'
import { useCalendly } from '@/components/ui/CalendlyProvider'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { open: openCalendly } = useCalendly()
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = sectionRef.current?.querySelectorAll('.hero-word')
      if (words) {
        gsap.fromTo(
          words,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: 'power3.out' }
        )
      }
      gsap.fromTo('.hero-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.6, ease: 'power3.out' })
      gsap.fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.9, ease: 'power3.out' })
      gsap.fromTo('.hero-buddy', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: 'power3.out' })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex items-center px-5 sm:px-6 lg:px-16 xl:px-24"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center py-24 sm:py-32 lg:py-0">
        {/* Left — Buddy */}
        <div
          className="hero-buddy opacity-0 flex justify-center lg:justify-end relative order-first lg:order-none"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className="relative w-full max-w-[640px] aspect-[640/850]">
            <Image
              src="/images/buddy casual.png"
              alt="Buddy — jullie digitale commerciële collega"
              fill
              className="object-contain transition-opacity duration-200"
              style={{ opacity: hovering ? 0 : 1 }}
              priority
            />
            <Image
              src="/images/buddy hand.png"
              alt="Buddy zwaait"
              fill
              className="object-contain transition-opacity duration-200"
              style={{ opacity: hovering ? 1 : 0 }}
              priority
            />
          </div>
        </div>

        {/* Right — Content */}
        <div className="flex flex-col items-start">
          <div className="mb-6">
            <Label>JULLIE NIEUWE DIGITALE COMMERCI&#203;LE COLLEGA</Label>
          </div>

          {/* Speech bubble */}
          <div className="relative bg-text-primary rounded-[24px] px-8 py-8 max-w-[520px]">
            <div
              className="absolute w-5 h-5 bg-text-primary rotate-45 rounded-bl-[4px]"
              style={{ left: '-10px', top: '40px' }}
            />
            <h1 className="text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.1] tracking-[-0.02em] text-white relative z-10 font-extrabold">
              {['Hoi,', 'ik', 'ben', 'Buddy.'].map((word, i) => (
                <span key={i} className="hero-word inline-block mr-[0.3em] opacity-0">
                  {word}
                </span>
              ))}
              <br />
              {['Ik', 'kom', 'graag', 'bij', 'jullie', 'werken.'].map((word, i) => (
                <span key={i + 4} className="hero-word inline-block mr-[0.3em] opacity-0">
                  {word}
                </span>
              ))}
            </h1>
          </div>

          <p className="hero-sub opacity-0 text-body-md leading-[1.6] text-text-secondary max-w-[540px] mt-6 sm:mt-8">
            Ik ga voor jullie op zoek naar nieuwe klanten.
            <br /><br />
            Maar voordat ik mezelf namens jullie voorstel, wil ik eerst begrijpen wie jullie zijn.
            <br /><br />
            Ik leer jullie bedrijf kennen, neem jullie tone of voice over en bouw relaties op via e-mail, LinkedIn, Instagram of WhatsApp.
            <br /><br />
            Terwijl jullie gewoon doen waar jullie goed in zijn.
          </p>

          <div className="hero-cta opacity-0 mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={openCalendly}
              className="bg-text-primary text-white hover:bg-[#333] px-7 py-4 text-base font-medium transition-all duration-200 rounded-button inline-flex items-center justify-center gap-2 min-h-[48px]"
            >
              Neem mij aan
            </button>
            <button
              onClick={openCalendly}
              className="border border-accent text-accent hover:bg-accent hover:text-white px-7 py-4 text-base font-medium transition-all duration-200 rounded-button inline-flex items-center justify-center gap-2 min-h-[48px]"
            >
              Spreek mij over hoe ik werk
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-label text-accent uppercase tracking-widest animate-pulse">
          scroll verder
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-transparent" />
      </div>
    </section>
  )
}
