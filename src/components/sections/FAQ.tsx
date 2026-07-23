'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Label from '@/components/ui/Label'
import { useCalendly } from '@/components/ui/CalendlyProvider'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const faqs = [
  {
    question: 'Begrijpt Buddy mijn bedrijf echt?',
    answer: [
      'Dat klopt. Daarom krijg ik ook een onboarding.',
      'Net als een nieuwe collega leer ik jullie bedrijf kennen.',
      'Jullie klanten.\nJullie cases.\nJullie manier van werken.\nJullie taal.',
      'Alleen groei ik daarna sneller.',
      'Want ik vergeet niets.',
    ],
  },
  {
    question: 'We hebben al een salesteam.',
    answer: [
      'Mooi.',
      'Ik ben er niet om jullie team te vervangen.',
      'Ik doe juist het werk dat vaak blijft liggen.',
      'Bedrijven onderzoeken.\nProspects vinden.\nPersoonlijke outreach.\nOpvolging.',
      'Jullie team kan zich focussen op gesprekken en deals.',
      'Ik zorg dat de agenda gevuld wordt.',
    ],
  },
  {
    question: 'We werken al met een leadgeneratiebureau.',
    answer: [
      'Dat kan.',
      'Maar stel jezelf eens deze vraag:',
      'Wat heb je over twaalf maanden nog in handen?',
      'Buddy bouwt kennis op binnen jullie eigen bedrijf.',
      'De data blijft.\nDe kennis blijft.\nDe werkwijze blijft.',
      'En ik blijf gewoon voor jullie werken.',
    ],
  },
  {
    question: 'We hebben geen tijd voor een lange implementatie.',
    answer: [
      'Dat begrijpen we.',
      'Daarom werken we met vaste formats voor jullie ideale klantprofiel, dienstverlening, cases en knowledge base.',
      'Voor de meeste bedrijven kost de onboarding slechts een paar uur.',
      'Daarna kan ik aan het werk.',
    ],
  },
  {
    question: 'Stapt Buddy straks over naar een ander bedrijf?',
    answer: [
      'Nee.',
      'Ik solliciteer nergens.',
      'Ik blijf gewoon bij jullie.',
      'Altijd.',
    ],
  },
  {
    question: 'Kan ik zien waar Buddy mee bezig is?',
    answer: [
      'Zeker.',
      'Stuur me gewoon een WhatsApp.',
      'Vraag naar een lead.\nVraag naar de pipeline.\nVraag waarom ik een bepaald bedrijf heb gekozen.',
      'Ik geef je direct een update.',
    ],
  },
  {
    question: 'Wordt Buddy beter naarmate we langer samenwerken?',
    answer: [
      'Dat is misschien wel mijn grootste voordeel.',
      'Hoe langer ik voor jullie werk, hoe beter ik begrijp welke klanten bij jullie passen, welke voorbeelden overtuigen en welke bezwaren vaak terugkomen.',
      'Iedere samenwerking maakt mij slimmer.',
    ],
  },
  {
    question: 'Wat als Buddy een keer offline is?',
    answer: [
      'Dat gebeurt gelukkig bijna nooit.',
      'Maar mocht ik toch even niet bereikbaar zijn, stuur dan gewoon een mail naar:',
      '**matty@mybuddy.works**',
      'Mijn collega Matty zorgt ervoor dat ik zo snel mogelijk weer aan het werk ben.',
      'Waarschijnlijk ben ik alweer online voordat je koffie op is.',
    ],
  },
  {
    question: 'Wat als Buddy geen resultaten haalt?',
    answer: [
      'Daarom werk ik met een garantie.',
      'Plan ik binnen 60 dagen geen drie kwalitatieve afspraken met bedrijven die echt bij jullie passen?',
      'Dan krijg je gewoon je volledige investering terug.',
    ],
  },
  {
    question: 'Kan ik eerst kennismaken?',
    answer: [
      'Graag zelfs.',
      'Plan een kennismaking.',
      'Dan laat ik zien hoe ik werk, hoe ik bedrijven selecteer en hoe ik nieuwe klanten voor jullie vind.',
      'Misschien zijn we wel een goede match.',
    ],
  },
]

function renderText(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="text-text-primary font-semibold">{part.slice(2, -2)}</strong>
    }
    return part.includes('\n') ? (
      <span key={i}>
        {part.split('\n').map((line, j) => (
          <span key={j}>
            {j > 0 && <br />}
            {line}
          </span>
        ))}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  })
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const { open: openCalendly } = useCalendly()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-header > *', { y: 24, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })
      gsap.fromTo('.faq-item', { y: 20, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out',
        scrollTrigger: { trigger: '.faq-list', start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      ref={sectionRef}
      className="px-5 sm:px-6 lg:px-16 xl:px-24"
      style={{ paddingTop: 'clamp(80px, 12vw, 160px)', paddingBottom: 'clamp(80px, 12vw, 160px)' }}
    >
      <div className="max-w-[800px] mx-auto">

        {/* Header */}
        <div className="faq-header text-center" style={{ marginBottom: 'clamp(40px, 6vw, 80px)' }}>
          <Label>FAQ</Label>
          <h2
            className="text-text-primary mt-5"
            style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 700, lineHeight: '1.05', letterSpacing: '-0.025em' }}
          >
            Veelgestelde vragen aan Buddy
          </h2>
          <p
            className="text-text-secondary mt-6"
            style={{ fontSize: '20px', lineHeight: '1.7' }}
          >
            Misschien vroeg je je dit ook al af.
          </p>
        </div>

        {/* Accordion */}
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="faq-item opacity-0"
                style={{ borderTop: '1px solid rgba(27,27,27,0.08)' }}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left group min-h-[48px]"
                  style={{ padding: 'clamp(20px, 3vw, 28px) 0' }}
                >
                  <h3
                    className="text-text-primary pr-8"
                    style={{ fontSize: '18px', fontWeight: 600, lineHeight: '1.4' }}
                  >
                    {faq.question}
                  </h3>
                  <div
                    className="flex-shrink-0 transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8C6239" strokeWidth="2" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? '600px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease',
                  }}
                >
                  <div style={{ paddingBottom: '32px' }}>
                    {faq.answer.map((paragraph, j) => (
                      <p
                        key={j}
                        className="text-text-secondary"
                        style={{ fontSize: '17px', lineHeight: '1.8', marginTop: j > 0 ? '12px' : '0' }}
                      >
                        {renderText(paragraph)}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}

          {/* Last border */}
          <div style={{ borderTop: '1px solid rgba(27,27,27,0.08)' }} />
        </div>

        {/* Bottom CTA */}
        <div className="text-center" style={{ marginTop: 'clamp(48px, 6vw, 80px)' }}>
          <h3
            className="text-text-primary"
            style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', fontWeight: 700, lineHeight: '1.3' }}
          >
            Staat jouw vraag er niet tussen?
          </h3>
          <p
            className="text-text-secondary mt-4"
            style={{ fontSize: '18px', lineHeight: '1.7' }}
          >
            App me gewoon.
            <br />
            Dat werkt meestal sneller dan een FAQ.
          </p>
          <div style={{ marginTop: '36px' }}>
            <button
              onClick={openCalendly}
              className="bg-text-primary text-white hover:bg-[#333] px-8 py-3.5 text-body-sm font-medium transition-all duration-200 rounded-button inline-flex items-center gap-2 min-h-[48px]"
            >
              Neem mij aan
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
