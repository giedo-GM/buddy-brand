'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Label from '@/components/ui/Label'
import ArrowIcon from '@/components/ui/ArrowIcon'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const steps = [
  {
    label: 'STAP 1',
    title: 'Ik leer jullie kennen',
    body: 'Ik krijg een onboarding, bekijk jullie cases en leer jullie diensten kennen voordat ik namens jullie contact opneem.',
  },
  {
    label: 'STAP 2',
    title: 'Ik zoek de juiste bedrijven',
    body: 'Geen willekeurige lijsten. Ik selecteer bedrijven waarvan ik denk dat jullie echt iets kunnen betekenen.',
  },
  {
    label: 'STAP 3',
    title: 'Ik onderzoek grondig',
    body: 'Website, LinkedIn, nieuws, vacatures, groeifase en commerciële kansen. Ik wil begrijpen waar ik waarde kan toevoegen.',
  },
  {
    label: 'STAP 4',
    title: 'Ik vergelijk met jullie ervaring',
    body: 'Ik vergelijk iedere prospect met projecten die jullie eerder succesvol hebben uitgevoerd.',
  },
  {
    label: 'STAP 5',
    title: 'Ik neem contact op',
    body: 'Pas als ik overtuigd ben dat er een goede match is, stuur ik een persoonlijk bericht en start ik het gesprek.',
  },
]

const stickies = [
  {
    label: 'ALTIJD ACTIEF',
    title: 'Ik vergeet nooit een follow-up.',
    lines: [
      'Niet iedereen heeft vandaag tijd.',
      'Dus wacht ik rustig af en probeer ik het later nog eens.',
      'Niet irritant.',
      'Gewoon op het juiste moment.',
    ],
    rotate: '-1.5deg',
  },
  {
    label: 'IK WORD SLIMMER',
    title: 'Hoe langer ik voor jullie werk, hoe beter ik jullie leer kennen.',
    lines: [
      'Ik ontdek welke klanten goed bij jullie passen.',
      'Welke voorbeelden het beste werken.',
      'Welke bezwaren vaak terugkomen.',
      'Hoe beter jullie input, hoe beter mijn output.',
      'We zijn tenslotte collega’s.',
    ],
    rotate: '1deg',
  },
  {
    label: 'ALTIJD COLLEGA',
    title: 'Ik ga nooit meer weg.',
    lines: [
      'Hoe langer we samenwerken, hoe beter ik jullie bedrijf leer kennen.',
      'Ik groei met jullie mee.',
      'Ik leer van iedere opdracht.',
      'En ik word iedere dag slimmer.',
      'Samen bouwen we aan duurzame groei.',
    ],
    rotate: '-0.8deg',
  },
]

export default function ProductSuite() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.ps-buddy', { opacity: 0, scale: 0.95 }, {
        opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })
      gsap.fromTo('.timeline-step', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.timeline-track', start: 'top 80%' },
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
            <Label>HOE IK WERK</Label>
            <h2
              className="text-text-primary font-bold mt-5 max-w-[500px]"
              style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', lineHeight: '1.05', letterSpacing: '-0.025em' }}
            >
              Ik werk in
              <br />
              vijf stappen
            </h2>
            <p className="text-body-md text-text-secondary leading-relaxed max-w-[520px] mt-8">
              Iedere opdracht begint hetzelfde. Ik leer jullie kennen, zoek de juiste bedrijven, onderzoek ze grondig, vergelijk ze met wat jullie eerder hebben gedaan en neem dan pas contact op. Geen templates. Geen massamails.
            </p>
            <p className="text-body-md text-text-secondary leading-relaxed max-w-[520px] mt-4">
              Gewoon goed accountmanagement.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-accent hover:text-accent-hover text-body-md mt-6 transition-colors group">
              Bekijk mijn volledige werkwijze
              <ArrowIcon className="group-hover:translate-x-1 transition-transform" />
            </a>
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

        {/* Horizontal timeline */}
        <div className="timeline-track relative">
          {/* Line */}
          <div
            className="hidden lg:block absolute left-0 right-0"
            style={{ top: '28px', height: '1px', backgroundColor: 'rgba(27,27,27,0.12)' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-0">
            {steps.map((step) => (
              <div key={step.label} className="timeline-step opacity-0 relative lg:pr-10">
                {/* Dot */}
                <div className="hidden lg:flex items-center justify-start mb-8">
                  <div
                    style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: '#8C6239',
                      border: '3px solid #F2EDE6',
                      boxShadow: '0 0 0 1px rgba(140,98,57,0.3)',
                    }}
                  />
                </div>

                <p
                  className="uppercase"
                  style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', color: '#8C6239' }}
                >
                  {step.label}
                </p>

                <h3
                  className="text-text-primary"
                  style={{ fontSize: '18px', fontWeight: 700, lineHeight: '1.3', marginTop: '12px' }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-text-secondary"
                  style={{ fontSize: '15px', lineHeight: '1.7', marginTop: '12px' }}
                >
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky notes */}
        <div className="sticky-grid grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 lg:gap-14" style={{ marginTop: 'clamp(60px, 10vw, 120px)' }}>
          {stickies.map((sticky) => (
            <div
              key={sticky.label}
              className="sticky-note opacity-0"
              style={{
                backgroundColor: '#EDE9E2',
                borderRadius: '6px',
                padding: 'clamp(28px, 4vw, 40px) clamp(24px, 3.5vw, 36px)',
                transform: `rotate(${sticky.rotate})`,
                boxShadow: '0 2px 12px rgba(27,27,27,0.06), 0 1px 3px rgba(27,27,27,0.04)',
              }}
            >
              <p
                className="uppercase"
                style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', color: '#8C6239', marginBottom: '16px' }}
              >
                {sticky.label}
              </p>
              <h4
                className="text-text-primary"
                style={{ fontSize: '17px', fontWeight: 700, lineHeight: '1.4' }}
              >
                {sticky.title}
              </h4>
              <div style={{ marginTop: '16px' }}>
                {sticky.lines.map((line, j) => (
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
