'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useCalendly } from '@/components/ui/CalendlyProvider'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const monthlyFeatures = [
  'Volledige onboarding op jullie bedrijf',
  'Multichannel outreach (e-mail, LinkedIn, WhatsApp)',
  'Persoonlijke benadering per prospect',
  'Continue optimalisatie en rapportage',
  'Garantie: minimaal 9 meetings in 90 dagen of geld terug',
]

const onceFeatures = [
  'Alles uit het maandelijkse pakket',
  'Full ownership — geen maandelijkse kosten',
  'Jullie data blijft 100% van jullie',
  'Levenslange updates',
]

export default function Guarantee() {
  const sectionRef = useRef<HTMLElement>(null)
  const { open: openCalendly } = useCalendly()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pricing-card', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.pricing-cards', start: 'top 80%' },
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
      style={{ backgroundColor: '#0a0a0a', paddingTop: 'clamp(60px, 10vw, 140px)', paddingBottom: 'clamp(60px, 10vw, 140px)' }}
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-16 xl:px-24">

        <h2
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 700, color: '#fff', textAlign: 'center', letterSpacing: '-0.02em', marginBottom: 'clamp(40px, 6vw, 64px)' }}
        >
          E&eacute;n collega. Twee manieren om samen te werken.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-12 lg:gap-16 items-center">

          {/* LEFT — Pricing cards */}
          <div className="pricing-cards grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 1 — Maandelijks (highlighted) */}
            <div
              className="pricing-card"
              style={{
                background: '#1a1a1a',
                borderRadius: 16,
                border: '1px solid rgba(140,98,57,0.4)',
                padding: 'clamp(28px, 3vw, 40px)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transform: 'scale(1.03)',
                boxShadow: '0 0 40px rgba(140,98,57,0.12)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#8C6239',
                  color: '#fff',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  padding: '5px 16px',
                  borderRadius: 20,
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                Meest gekozen
              </div>

              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', color: '#8C6239', textTransform: 'uppercase', marginBottom: 16 }}>
                Maandelijks
              </p>
              <p style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                &euro;444
                <span style={{ fontSize: '0.45em', fontWeight: 400, color: '#666', marginLeft: 4 }}>/ maand</span>
              </p>
              <p style={{ fontSize: 15, color: '#999', lineHeight: 1.6, marginTop: 8, marginBottom: 24 }}>
                Buddy werkt voor jullie. Maandelijks opzegbaar.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                {monthlyFeatures.map((f) => (
                  <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#4ade80', fontSize: 14, lineHeight: '1.6', flexShrink: 0 }}>&#10003;</span>
                    <span style={{ color: '#ccc', fontSize: 14, lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={openCalendly}
                style={{
                  marginTop: 28,
                  padding: '14px 24px',
                  borderRadius: 8,
                  border: 'none',
                  backgroundColor: '#fff',
                  color: '#0a0a0a',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e0e0e0' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#fff' }}
              >
                Start met Buddy
              </button>
            </div>

            {/* Card 2 — Eenmalig */}
            <div
              className="pricing-card"
              style={{
                background: '#1a1a1a',
                borderRadius: 16,
                border: '1px solid #2a2a2a',
                padding: 'clamp(28px, 3vw, 40px)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', color: '#8C6239', textTransform: 'uppercase', marginBottom: 16 }}>
                Eenmalig
              </p>
              <p style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                &euro;4.444
                <span style={{ fontSize: '0.45em', fontWeight: 400, color: '#666', marginLeft: 4 }}>eenmalig</span>
              </p>
              <p style={{ fontSize: 15, color: '#999', lineHeight: 1.6, marginTop: 8, marginBottom: 24 }}>
                Buddy is van jullie. Voor altijd.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                {onceFeatures.map((f) => (
                  <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <span style={{ color: '#4ade80', fontSize: 14, lineHeight: '1.6', flexShrink: 0 }}>&#10003;</span>
                    <span style={{ color: '#ccc', fontSize: 14, lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={openCalendly}
                style={{
                  marginTop: 28,
                  padding: '14px 24px',
                  borderRadius: 8,
                  border: '1px solid #fff',
                  backgroundColor: 'transparent',
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.color = '#0a0a0a' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#fff' }}
              >
                Buddy in huis halen
              </button>
            </div>
          </div>

          {/* RIGHT — Buddy hand */}
          <div className="guarantee-buddy opacity-0 flex justify-center">
            <div className="relative w-full max-w-[720px] aspect-[720/960]">
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
