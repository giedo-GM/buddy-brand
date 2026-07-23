'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const tabs = [
  {
    label: 'Prospectie',
    title: 'Ik vind de juiste bedrijven',
    body: 'Ik ben altijd op zoek naar bedrijven waar ik denk dat jullie echt iets kunnen betekenen. Zie ik een mooie kans? Dan ga ik aan het werk.',
  },
  {
    label: 'Onderzoek',
    title: 'Ik doe mijn huiswerk',
    body: 'Ik ben nogal nieuwsgierig. Dus voordat ik iemand een bericht stuur zoek ik eerst alles uit wat ik kan vinden. Dat werkt een stuk beter.',
  },
  {
    label: 'Outreach',
    title: 'Ik stuur geen massamails',
    body: 'Ik schrijf nooit twee keer dezelfde mail. Dat zou ik zelf ook irritant vinden. Iedere introductie is gebaseerd op mijn onderzoek én jullie ervaring.',
  },
  {
    label: 'Opvolging',
    title: 'Ik geef niet op',
    body: 'Na een aantal maanden ga ik nog eens kijken of er nu wel een behoefte is. Gewoon uit interesse. Niet pushen. Soms is de timing simpelweg anders.',
  },
]

export default function UseCaseTabs() {
  const [active, setActive] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.usecase-heading', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(contentRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' })
    }
  }, [active])

  return (
    <section
      ref={sectionRef}
      className="px-5 sm:px-6 lg:px-16 xl:px-24"
      style={{ paddingTop: 'clamp(80px, 12vw, 160px)', paddingBottom: 'clamp(80px, 12vw, 160px)' }}
    >
      <div className="max-w-[1500px] mx-auto">
        <h2 className="usecase-heading opacity-0 text-display-lg font-bold text-text-primary mb-12">
          Wat ik voor jullie doe
        </h2>

        <div className="flex gap-1 sm:gap-2 border-b border-border overflow-x-auto max-w-full lg:max-w-[55%] -mx-5 px-5 sm:mx-0 sm:px-0" style={{ marginBottom: 'clamp(24px, 4vw, 40px)' }}>
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              className={`px-3 sm:px-6 py-3 sm:py-4 text-body-sm font-medium whitespace-nowrap transition-colors duration-200 border-b-2 ${
                active === i
                  ? 'text-text-primary border-accent'
                  : 'text-text-secondary border-transparent hover:text-text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: 'clamp(40px, 8vw, 120px)' }}>
          {/* Left — Text */}
          <div className="max-w-[650px]">
            <h3
              className="text-text-primary font-bold"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.15', letterSpacing: '-0.02em' }}
            >
              {tabs[active].title}
            </h3>
            <p
              className="text-text-secondary"
              style={{ fontSize: '17px', lineHeight: '1.8', marginTop: '32px' }}
            >
              {tabs[active].body}
            </p>
          </div>

          {/* Right — Buddy */}
          <div className="flex justify-center lg:justify-end" style={{ marginTop: 'clamp(-40px, -8vw, -160px)' }}>
            <div className="relative w-full max-w-[600px] aspect-[600/744]">
              <Image
                src="/images/Buddy laptop.png"
                alt="Buddy werkt op zijn laptop"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
