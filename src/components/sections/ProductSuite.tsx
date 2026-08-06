'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useCalendly } from '@/components/ui/CalendlyProvider'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const cards = [
  {
    label: 'ALTIJD ACTIEF',
    title: 'Ik blijf bezig.',
    lines: [
      'Nieuwe bedrijven ontdekken.',
      'Nieuwe gesprekken starten.',
      'Nieuwe relaties opbouwen.',
      'Iedere werkdag opnieuw.',
    ],
    rotate: '-1.5deg',
  },
  {
    label: 'IK WORD SLIMMER',
    title: 'Ik leer iedere dag.',
    lines: [
      'Ieder gesprek maakt mij beter.',
      'Ik begrijp jullie markt steeds beter.',
      'Ik herken sneller de juiste klanten.',
      'En ik weet steeds beter welke aanpak werkt.',
    ],
    rotate: '1deg',
  },
  {
    label: 'MIJN DOEL',
    title: 'Ik vul jullie agenda.',
    lines: [
      'Mijn doel is niet zoveel mogelijk berichten versturen.',
      'Mijn doel is kwalitatieve kennismakingen.',
      'Zodra iemand wil praten, staat de afspraak in jullie agenda.',
    ],
    rotate: '-0.8deg',
  },
]

export default function ProductSuite() {
  const sectionRef = useRef<HTMLElement>(null)
  const { open: openCalendly } = useCalendly()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.ps-buddy', { opacity: 0, scale: 0.95 }, {
        opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })
      gsap.fromTo('.need-block', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: '.need-block', start: 'top 80%' },
      })
      gsap.fromTo('.sticky-note', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.sticky-grid', start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hoe-ik-werk"
      className="px-5 sm:px-6 lg:px-16 xl:px-24"
      style={{ paddingTop: 'clamp(80px, 12vw, 160px)', paddingBottom: 'clamp(80px, 12vw, 180px)' }}
    >
      <div className="max-w-[1500px] mx-auto">

        {/* Intro — text left, Buddy right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center" style={{ marginBottom: 'clamp(60px, 10vw, 120px)' }}>
          <div>
            <h2
              className="text-text-primary"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em', maxWidth: 520 }}
            >
              Multichannel outreach met de juiste invalshoek voor elke prospect,
              <br />
              <span className="text-text-secondary" style={{ fontWeight: 400 }}>wat kost jou dat maandelijks?</span>
            </h2>

            <p
              className="text-text-primary"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginTop: 'clamp(32px, 5vw, 48px)', letterSpacing: '-0.02em' }}
            >
              Buddy kost &euro;444 per maand.
            </p>
            <p className="text-text-secondary" style={{ fontSize: 'clamp(15px, 1.2vw, 18px)', lineHeight: 1.8, marginTop: 12 }}>
              Geen vakantie. Geen ziektedagen. Geen opzegtermijn.
            </p>

            <div
              style={{
                marginTop: 'clamp(28px, 4vw, 40px)',
                paddingLeft: 28,
                borderLeft: '3px solid #8C6239',
              }}
            >
              <p className="text-text-primary" style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)', fontWeight: 600, lineHeight: 1.5 }}>
                En een garantie die geen enkele SDR je geeft:
                <br />
                Minimaal 5 gekwalificeerde meetings in 90 dagen.
                <br />
                Of je geld terug.
              </p>
            </div>

            <p className="text-text-secondary" style={{ fontSize: 'clamp(15px, 1.2vw, 18px)', lineHeight: 1.8, marginTop: 'clamp(28px, 4vw, 40px)' }}>
              Ik vervang niemand.
              <br />
              Ik zorg dat jullie salesteam meer deals sluit.
              <br />
              Terwijl ik de afspraken boek.
            </p>

            <button
              onClick={openCalendly}
              className="bg-text-primary text-white hover:bg-[#333] px-8 py-3.5 text-body-sm font-medium transition-all duration-200 rounded-button inline-flex items-center gap-2 min-h-[48px]"
              style={{ marginTop: 'clamp(32px, 5vw, 48px)' }}
            >
              Maak kennis met Buddy &rarr;
            </button>
          </div>

          <div className="ps-buddy opacity-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] aspect-[560/680]">
              <Image
                src="/images/Buddy working.png"
                alt="Buddy aan het werk"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Wat ik van jullie nodig heb */}
        <div className="need-block opacity-0" style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <p
            className="uppercase"
            style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', color: '#8C6239', marginBottom: 16 }}
          >
            WAT IK VAN JULLIE NODIG HEB
          </p>
          <p className="text-text-secondary" style={{ fontSize: 'clamp(17px, 1.3vw, 19px)', lineHeight: 2, marginTop: 24 }}>
            Een duidelijk Ideal Customer Profile.
            <br />
            Een goede knowledge base over jullie bedrijf, doelgroep en propositie.
            <br />
            En ruimte in jullie agenda voor nieuwe afspraken.
          </p>
          <p className="text-text-primary" style={{ fontSize: 'clamp(17px, 1.3vw, 19px)', lineHeight: 2, marginTop: 24, fontWeight: 600 }}>
            Dat is alles. De rest doe ik.
          </p>
        </div>

        {/* Bottom cards */}
        <div className="sticky-grid grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 lg:gap-14" style={{ marginTop: 'clamp(60px, 10vw, 120px)' }}>
          {cards.map((card) => (
            <div
              key={card.label}
              className="sticky-note opacity-0"
              style={{
                backgroundColor: '#EDE9E2',
                borderRadius: '6px',
                padding: 'clamp(28px, 4vw, 40px) clamp(24px, 3.5vw, 36px)',
                transform: `rotate(${card.rotate})`,
                boxShadow: '0 2px 12px rgba(27,27,27,0.06), 0 1px 3px rgba(27,27,27,0.04)',
              }}
            >
              <p
                className="uppercase"
                style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', color: '#8C6239', marginBottom: '16px' }}
              >
                {card.label}
              </p>
              <h4
                className="text-text-primary"
                style={{ fontSize: '17px', fontWeight: 700, lineHeight: '1.4' }}
              >
                {card.title}
              </h4>
              <div style={{ marginTop: '16px' }}>
                {card.lines.map((line, j) => (
                  <p
                    key={j}
                    className="text-text-secondary"
                    style={{ fontSize: '15px', lineHeight: '1.7', marginTop: j > 0 ? '6px' : '0' }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
