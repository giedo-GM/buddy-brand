'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const steps = [
  {
    label: 'DAGELIJKS',
    title: 'Ik onderzoek bedrijven.',
    lines: [
      'Iedere dag verdiep ik me in tientallen bedrijven.',
      '',
      'Ik lees websites.',
      'Ik bekijk LinkedIn.',
      'Ik volg nieuws.',
      'Ik ontdek groeisignalen.',
      '',
      'Ik probeer te begrijpen waar jullie écht waarde kunnen toevoegen.',
    ],
  },
  {
    label: 'DAGELIJKS',
    title: 'Ik herken kansen.',
    lines: [
      'Niet ieder bedrijf is interessant.',
      '',
      'Ik zoek naar signalen.',
      'Nieuwe funding.',
      'Nieuwe vacatures.',
      'Een productlancering.',
      'Een groeifase.',
      '',
      'Of een uitdaging waarbij jullie ervaring direct van waarde kan zijn.',
    ],
  },
  {
    label: 'DAGELIJKS',
    title: 'Ik start gesprekken.',
    lines: [
      'Soms via e-mail.',
      'Soms via LinkedIn.',
      'Soms via Instagram.',
      'Soms via WhatsApp.',
      '',
      'Ik kies het kanaal dat het beste past.',
      '',
      'En ik communiceer zoals jullie dat zelf zouden doen.',
    ],
  },
  {
    label: 'DOORLOPEND',
    title: 'Ik bouw relaties.',
    lines: [
      'Niet iedereen heeft vandaag tijd.',
      '',
      'Dus blijf ik rustig in contact.',
      'Ik luister.',
      'Ik denk mee.',
      'Ik volg op.',
      '',
      'Net zolang totdat het juiste moment daar is.',
    ],
  },
]

export default function SplitFeature() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.timeline-col', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.timeline-grid', start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="split-feature"
      style={{ paddingTop: 'clamp(40px, 6vw, 100px)', paddingBottom: 'clamp(40px, 6vw, 100px)' }}
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-16 xl:px-24">

        <div className="timeline-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div key={i} className="timeline-col opacity-0" style={{ position: 'relative' }}>

              {/* Timeline dot + line */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 32, position: 'relative', height: 12 }}>
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    backgroundColor: '#8C6239',
                    flexShrink: 0,
                    zIndex: 1,
                  }}
                />
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block"
                    style={{
                      position: 'absolute',
                      left: 12,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: 'calc(100%)',
                      height: 1,
                      backgroundColor: '#D4CEC5',
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingRight: 'clamp(16px, 3vw, 40px)' }}>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    color: '#8C6239',
                    textTransform: 'uppercase',
                    marginBottom: 12,
                  }}
                >
                  {step.label}
                </p>
                <h3
                  className="text-text-primary"
                  style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.25rem)', fontWeight: 700, lineHeight: 1.3, marginBottom: 16 }}
                >
                  {step.title}
                </h3>
                <div>
                  {step.lines.map((line, j) =>
                    line === '' ? (
                      <div key={j} style={{ height: 12 }} />
                    ) : (
                      <p
                        key={j}
                        className="text-text-secondary"
                        style={{ fontSize: 'clamp(14px, 1.1vw, 16px)', lineHeight: 1.7 }}
                      >
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
