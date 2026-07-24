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

const activities = [
  {
    label: 'DAGELIJKS',
    title: 'Ik onderzoek bedrijven.',
    body: 'Iedere dag verdiep ik me in tientallen bedrijven.\n\nIk lees websites.\nIk bekijk LinkedIn.\nIk volg nieuws.\nIk ontdek groeisignalen.\n\nIk probeer te begrijpen waar jullie écht waarde kunnen toevoegen.',
  },
  {
    label: 'DAGELIJKS',
    title: 'Ik herken kansen.',
    body: 'Niet ieder bedrijf is interessant.\n\nIk zoek naar signalen.\nNieuwe funding.\nNieuwe vacatures.\nEen productlancering.\nEen groeifase.\n\nOf een uitdaging waarbij jullie ervaring direct van waarde kan zijn.',
  },
  {
    label: 'DAGELIJKS',
    title: 'Ik start gesprekken.',
    body: 'Soms via e-mail.\nSoms via LinkedIn.\nSoms via Instagram.\nSoms via WhatsApp.\n\nIk kies het kanaal dat het beste past.\n\nEn ik communiceer zoals jullie dat zelf zouden doen.',
  },
  {
    label: 'DOORLOPEND',
    title: 'Ik bouw relaties.',
    body: 'Niet iedereen heeft vandaag tijd.\n\nDus blijf ik rustig in contact.\nIk luister.\nIk denk mee.\nIk volg op.\n\nNet zolang totdat het juiste moment daar is.',
  },
]

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
              Zo ziet mijn
              <br />
              werkdag eruit.
            </h2>
            <p className="text-body-md text-text-secondary leading-relaxed max-w-[520px] mt-8">
              Terwijl jullie werken aan klanten, ben ik de hele dag bezig met het vinden van de volgende.
            </p>
            <p className="text-body-md text-text-secondary leading-relaxed max-w-[520px] mt-4">
              Ik onderzoek bedrijven.
              <br />
              Ik herken commerci&#235;le signalen.
              <br />
              Ik start gesprekken.
              <br />
              Ik bouw relaties.
            </p>
            <p className="text-body-md text-text-secondary leading-relaxed max-w-[520px] mt-4">
              En zodra iemand wil kennismaken, zet ik een afspraak in jullie agenda.
            </p>
            <p className="text-body-md text-text-secondary leading-relaxed max-w-[520px] mt-4">
              Iedere dag onderzoek ik tientallen bedrijven.
              <br />
              Niet om zoveel mogelijk berichten te versturen.
              <br />
              Maar om de juiste gesprekken te starten.
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

        {/* Activity cards */}
        <div className="timeline-track relative">
          {/* Line */}
          <div
            className="hidden lg:block absolute left-0 right-0"
            style={{ top: '28px', height: '1px', backgroundColor: 'rgba(27,27,27,0.12)' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0">
            {activities.map((activity) => (
              <div key={activity.title} className="timeline-step opacity-0 relative lg:pr-10">
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
                  {activity.label}
                </p>

                <h3
                  className="text-text-primary"
                  style={{ fontSize: '18px', fontWeight: 700, lineHeight: '1.3', marginTop: '12px' }}
                >
                  {activity.title}
                </h3>

                <p
                  className="text-text-secondary whitespace-pre-line"
                  style={{ fontSize: '15px', lineHeight: '1.7', marginTop: '12px' }}
                >
                  {activity.body}
                </p>
              </div>
            ))}
          </div>
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
