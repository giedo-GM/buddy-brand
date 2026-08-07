'use client'

import Link from 'next/link'
import { useCalendly } from '@/components/ui/CalendlyProvider'

const marqueeItems = [
  'IK LEER JULLIE BEDRIJF KENNEN',
  'IK ONDERZOEK PROSPECTS',
  'IK VIND KANSEN',
  'IK VERGELIJK MET EERDERE CASES',
  'IK SCHRIJF PERSOONLIJKE BERICHTEN',
  'IK STEL MEZELF VOOR',
  'IK VOLG OP',
  'IK VERGEET NIEMAND',
  'IK PLAN AFSPRAKEN',
  'IK WERK 24/7',
  'IK LEER ELKE DAG BIJ',
  'IK WORD STEEDS SLIMMER',
  'IK DENK MEE',
  'IK BRENG MENSEN BIJ ELKAAR',
  'IK BOUW RELATIES',
  'IK DOE MIJN HUISWERK',
  'IK ZIE KANSEN',
  'IK GEEF NIET OP',
  'IK GROEI MET JULLIE MEE',
  'IK BLIJF',
  'IK BEN BUDDY',
]

export default function CTA() {
  const { open: openCalendly } = useCalendly()
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems]

  return (
    <section
      id="contact"
      className="text-center relative px-5 sm:px-6 lg:px-16 xl:px-24"
      style={{ backgroundColor: '#8C6239', paddingTop: 'clamp(48px, 8vw, 120px)', paddingBottom: 'clamp(48px, 8vw, 100px)' }}
    >
      <div className="max-w-[900px] mx-auto relative">
        <p
          className="uppercase"
          style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em', color: '#E7E1D8' }}
        >
          EVEN KENNISMAKEN?
        </p>

        <h2
          className="mt-10"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: '1.05', letterSpacing: '-0.04em', color: '#F2EDE6' }}
        >
          Jullie zoeken geen tool.
          <br />
          Jullie zoeken iemand die het gewoon doet.
        </h2>

        <p
          className="mx-auto text-left sm:text-center"
          style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', lineHeight: '1.8', maxWidth: '700px', marginTop: '40px', color: '#E7E1D8' }}
        >
          Iemand die jullie bedrijf snapt.
          <br />
          Die weet wie jullie ideale klant is.
          <br />
          Die elke dag nieuwe gesprekken start.
          <br />
          En die niet stopt als het vrijdagmiddag is.
        </p>

        <p
          className="mx-auto text-left sm:text-center"
          style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', lineHeight: '1.8', maxWidth: '700px', marginTop: '32px', color: '#E7E1D8' }}
        >
          Ik neem geen vakantie.
          <br />
          Ik word nooit ziek.
          <br />
          Ik vraag geen loonsverhoging.
          <br />
          En ik lever vanaf dag &eacute;&eacute;n.
        </p>

        <p
          className="mx-auto text-left sm:text-center"
          style={{ fontSize: 'clamp(20px, 1.8vw, 26px)', lineHeight: '1.6', maxWidth: '700px', marginTop: '40px', color: '#F2EDE6', fontWeight: 600 }}
        >
          Jullie enige risico?
          <br />
          Dat jullie agenda voller wordt dan verwacht.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto" style={{ marginTop: 'clamp(36px, 5vw, 56px)' }}>
          <button
            onClick={openCalendly}
            className="px-10 py-4 text-base font-medium transition-all duration-200 hover:opacity-90 min-h-[48px] flex items-center justify-center"
            style={{ backgroundColor: '#F2EDE6', color: '#1B1B1B', borderRadius: '999px' }}
          >
            Neem mij aan &rarr;
          </button>
          <Link
            href="/mijn-cv"
            className="px-10 py-4 text-base font-medium transition-all duration-200 hover:opacity-90 inline-flex items-center justify-center min-h-[48px]"
            style={{ backgroundColor: 'transparent', color: '#F2EDE6', borderRadius: '999px', border: '1.5px solid #E7E1D8' }}
          >
            Bekijk mijn cv
          </Link>
        </div>

        <p
          style={{ fontSize: '15px', lineHeight: '1.7', color: '#E7E1D8', opacity: 0.7, marginTop: '48px', fontStyle: 'italic' }}
        >
          PS: Ik hoef geen kerstpakket.
          <br />
          Geef die maar aan een gezin dat het kan gebruiken.
        </p>
      </div>

      <div className="overflow-hidden" style={{ marginTop: '120px' }}>
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: 'marquee 90s linear infinite',
            width: 'max-content',
          }}
        >
          {items.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center uppercase"
              style={{ color: '#E7E1D8', fontSize: '15px', fontWeight: 600, letterSpacing: '0.12em', marginLeft: '28px', marginRight: '28px', opacity: 0.5 }}
            >
              {item}
              <span style={{ marginLeft: '56px', opacity: 0.4 }}>&bull;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
