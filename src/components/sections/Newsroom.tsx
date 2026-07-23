'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useCalendly } from '@/components/ui/CalendlyProvider'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const statements = [
  'Ik ben niet ziek.',
  'Ik heb geen vakantie.',
  'Ik hoef geen salaris.',
  'Ik kost geen recruitment fee.',
  'Ik ben van jou.',
  'Ik word beter maar ik ga niet weg.',
]

export default function Newsroom() {
  const sectionRef = useRef<HTMLElement>(null)
  const { open: openCalendly } = useCalendly()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.mag-image', { opacity: 0, scale: 1.02 }, {
        opacity: 1, scale: 1, duration: 1.4, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })
      gsap.fromTo('.mag-text > *', { y: 24, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="waarom-buddy"
      className="relative overflow-hidden"
    >
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{ height: '120px', background: 'linear-gradient(to bottom, #F2EDE6, transparent)', zIndex: 2 }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '120px', background: 'linear-gradient(to top, #F2EDE6, transparent)', zIndex: 2 }}
      />

      {/* Magazine spread */}
      <div className="relative" style={{ minHeight: '88vh' }}>
        {/* Full-width background image */}
        <div className="mag-image opacity-0 absolute inset-0">
          <Image
            src="/images/buddy 247.png"
            alt="Buddy is er 24/7"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right-side text overlay */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '88vh' }}>
          <div className="hidden lg:block" />
          <div
            className="mag-text flex flex-col justify-center"
            style={{
              padding: 'clamp(60px, 8vw, 100px) clamp(20px, 5vw, 10%) clamp(60px, 8vw, 100px) clamp(20px, 5vw, 80px)',
              background: 'linear-gradient(to right, rgba(242,237,230,0.85) 0%, rgba(242,237,230,0.92) 12%, rgba(242,237,230,0.97) 28%, #F2EDE6 48%)',
            }}
          >
            <p
              className="uppercase"
              style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', color: '#8C6239' }}
            >
              Over Buddy
            </p>

            <h2
              className="text-text-primary"
              style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)', fontWeight: 700, lineHeight: '1.05', letterSpacing: '-0.03em', marginTop: '36px', maxWidth: '520px' }}
            >
              Ik ben er 24/7
            </h2>

            <div style={{ marginTop: '64px', maxWidth: '520px' }}>
              {statements.map((statement) => (
                <p
                  key={statement}
                  className="text-text-primary"
                  style={{ fontSize: '20px', fontWeight: 500, lineHeight: '2.4' }}
                >
                  {statement}
                </p>
              ))}
              <p
                className="text-text-primary"
                style={{ fontSize: '20px', fontWeight: 500, lineHeight: '1.6', marginTop: '16px' }}
              >
                Ik hoef geen kerstpakket.
                <br />
                <span className="text-text-secondary">
                  Geef die maar aan een gezin dat het kan gebruiken.
                </span>
              </p>
            </div>

            <div style={{ marginTop: 'clamp(36px, 5vw, 56px)' }}>
              <button
                onClick={openCalendly}
                className="bg-text-primary text-white hover:bg-[#333] px-8 py-3.5 text-body-sm font-medium transition-all duration-200 rounded-button inline-flex items-center gap-2 min-h-[48px]"
              >
                Let&apos;s do business together &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
