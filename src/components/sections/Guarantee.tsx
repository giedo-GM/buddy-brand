'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Label from '@/components/ui/Label'
import { useCalendly } from '@/components/ui/CalendlyProvider'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Guarantee() {
  const sectionRef = useRef<HTMLElement>(null)
  const { open: openCalendly } = useCalendly()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.guarantee-text > *', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
      })
      gsap.fromTo('.guarantee-buddy', { opacity: 0, scale: 0.96 }, {
        opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-bg-primary"
      style={{ paddingTop: 'clamp(80px, 14vw, 200px)', paddingBottom: 'clamp(80px, 14vw, 200px)' }}
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[11fr_9fr] items-center gap-12 lg:gap-20">

          {/* Left — Text */}
          <div className="guarantee-text flex flex-col" style={{ maxWidth: '600px' }}>
            <Label>MIJN GARANTIE</Label>

            <h2
              className="text-text-primary"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 700, lineHeight: '1.15', letterSpacing: '-0.025em', marginTop: '32px' }}
            >
              Ik geloof niet in mooie beloftes.
              <br />
              Ik geloof in resultaten.
            </h2>

            <div style={{ marginTop: '48px' }}>
              <p className="text-text-secondary" style={{ fontSize: '18px', lineHeight: '1.9' }}>
                Voordat ik ergens begin, kijk ik eerst of ik echt kansen zie.
              </p>
              <p className="text-text-secondary" style={{ fontSize: '18px', lineHeight: '1.9', marginTop: '16px' }}>
                Pas als ik denk dat ik jullie kan helpen, ga ik voor jullie werken.
              </p>
              <p className="text-text-secondary" style={{ fontSize: '18px', lineHeight: '1.9', marginTop: '16px' }}>
                Daarom durf ik ook een echte garantie te geven.
              </p>
              <p className="text-text-primary" style={{ fontSize: '18px', lineHeight: '1.9', marginTop: '16px', fontWeight: 600 }}>
                Geef me 60 dagen.
              </p>
            </div>

            {/* Editorial quote — the guarantee */}
            <div
              style={{
                marginTop: '48px',
                marginBottom: '48px',
                paddingLeft: '28px',
                borderLeft: '3px solid #8C6239',
              }}
            >
              <p
                className="text-text-primary"
                style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', fontWeight: 600, lineHeight: '1.5' }}
              >
                Minimaal 3 kwalitatieve afspraken in 60 dagen.
                <br />
                Anders krijg je je volledige investering terug.
              </p>
            </div>

            <div>
              <p className="text-text-secondary" style={{ fontSize: '18px', lineHeight: '1.9' }}>
                Boek ik in die periode niet minimaal <strong className="text-text-primary font-semibold">3 kwalitatieve afspraken</strong> met bedrijven die écht bij jullie passen?
              </p>
              <p className="text-text-secondary" style={{ fontSize: '18px', lineHeight: '1.9', marginTop: '16px' }}>
                Dan krijgen jullie gewoon je volledige investering terug.
              </p>
              <p className="text-text-primary" style={{ fontSize: '18px', lineHeight: '1.9', marginTop: '32px', fontWeight: 500 }}>
                Geen kleine lettertjes.
                <br />
                Geen discussie.
                <br />
                Dat risico neem ik.
                <br />
                Niet jullie.
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

          {/* Right — Buddy hand */}
          <div className="guarantee-buddy opacity-0 flex justify-center">
            <div className="relative w-full max-w-[720px] aspect-[720/960]" style={{ marginTop: 'clamp(0px, 4vw, 80px)' }}>
              <Image
                src="/images/buddy hand.png"
                alt="Buddy steekt zijn hand uit"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
