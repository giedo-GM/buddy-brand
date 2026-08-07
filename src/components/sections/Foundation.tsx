'use client'

import { useEffect, useRef } from 'react'

const cards = [
  {
    headline: 'Leert jullie bedrijf kennen',
    content: (
      <div style={{ background: '#111', borderRadius: 12, border: '1px solid #2a2a2a', padding: '24px', width: '100%' }}>
        <p style={{ color: '#fff', fontWeight: 700, fontSize: 18, marginBottom: 4 }}>brightweb</p>
        <p style={{ color: '#999', fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
          Full-service digital agency gespecialiseerd in webdesign, branding en online marketing voor het MKB. Actief sinds 2016.
        </p>
        <p style={{ color: '#8C6239', fontSize: 13, marginBottom: 12 }}>Buddy bestudeert concurrenten...</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ color: '#4ade80', fontSize: 14 }}>&#10003; pixelmakers</span>
          <span style={{ color: '#4ade80', fontSize: 14 }}>&#10003; studioflowt</span>
        </div>
      </div>
    ),
  },
  {
    headline: 'Bepaalt jullie ideale klant',
    content: (
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2a2a2a' }}>
              <th style={{ color: '#666', fontWeight: 600, textAlign: 'left', padding: '8px 12px', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Segment</th>
              <th style={{ color: '#666', fontWeight: 600, textAlign: 'right', padding: '8px 12px', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Fit Score</th>
            </tr>
          </thead>
          <tbody>
            {[['Software', '94%'], ['Recruitment', '89%'], ['Digital agencies', '87%'], ['IT Consultants', '82%']].map(([seg, score]) => (
              <tr key={seg} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ color: '#e0e0e0', padding: '10px 12px' }}>{seg}</td>
                <td style={{ color: '#4ade80', padding: '10px 12px', textAlign: 'right', fontWeight: 600 }}>{score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
  {
    headline: 'Vindt de juiste mensen',
    content: (
      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, width: '100%' }}>
        {[
          { init: 'RV', name: 'Ruben Verhoeven', role: 'Directeur', company: 'X digital', email: 'ruben@x-digital.nl' },
          { init: 'LB', name: 'Lisa de Boer', role: 'Marketing Manager', company: 'MMigrations', email: 'lisa@mmigrations.nl' },
          { init: 'MH', name: 'Marc Hendriks', role: 'Eigenaar', company: 'bloom', email: 'marc@bloom.nl' },
          { init: 'SP', name: 'Sandra Peters', role: 'Commercieel Directeur', company: 'westra', email: 'sandra@westra.nl' },
        ].map((p) => (
          <div key={p.init} style={{ background: '#111', borderRadius: 10, border: '1px solid #2a2a2a', padding: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#8C6239', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 700 }}>{p.init}</div>
              <span style={{ color: '#fff', fontWeight: 600, fontSize: 14 }}>{p.name}</span>
            </div>
            <p style={{ color: '#888', fontSize: 12, marginBottom: 2 }}>{p.role} &middot; {p.company}</p>
            <p style={{ color: '#8C6239', fontSize: 12 }}>{p.email}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    headline: 'Schrijft persoonlijke berichten',
    content: (
      <div style={{ background: '#111', borderRadius: 12, border: '1px solid #2a2a2a', padding: '24px', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80' }} />
          <span style={{ color: '#888', fontSize: 12 }}>Nieuw bericht</span>
        </div>
        <p style={{ color: '#fff', fontWeight: 600, fontSize: 15, marginBottom: 16 }}>X digital collab</p>
        <div style={{ borderTop: '1px solid #2a2a2a', paddingTop: 16 }}>
          <p style={{ color: '#e0e0e0', fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>Hoi Ruben,</p>
          <p style={{ color: '#e0e0e0', fontSize: 14, lineHeight: 1.7 }}>
            Zag dat X Digital een paar mooie namen als klant erbij hebben gekregen. Ik kan zorgen dat jullie pipeline altijd gevuld blijft met zulke klanten.
          </p>
        </div>
      </div>
    ),
  },
  {
    headline: 'Handelt reacties af en boekt meetings',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
        {[
          { dir: 'in', text: 'Hoe onderscheiden jullie je van andere bureaus?' },
          { dir: 'out', text: 'Ik geloof niet in standaard outreach — elk bericht is maatwerk.' },
          { dir: 'in', text: 'Interessant, kan volgende week dinsdag 10:00?' },
          { dir: 'out', text: 'Dinsdag 10:00 past perfect, uitnodiging volgt zo.' },
        ].map((msg, i) => (
          <div
            key={i}
            style={{
              alignSelf: msg.dir === 'out' ? 'flex-end' : 'flex-start',
              background: msg.dir === 'out' ? '#8C6239' : '#1a1a1a',
              color: '#fff',
              padding: '10px 16px',
              borderRadius: 14,
              fontSize: 14,
              lineHeight: 1.5,
              maxWidth: '85%',
              border: msg.dir === 'in' ? '1px solid #2a2a2a' : 'none',
            }}
          >
            {msg.text}
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, alignSelf: 'flex-end', marginTop: 4 }}>
          <span style={{ color: '#4ade80', fontSize: 13 }}>&#10003; Meeting geboekt</span>
          <span style={{ color: '#666', fontSize: 13 }}>&middot; Di 10:00</span>
        </div>
      </div>
    ),
  },
  {
    headline: 'Leert wat werkt en schaalt op',
    content: (
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #2a2a2a' }}>
              <th style={{ color: '#666', fontWeight: 600, textAlign: 'left', padding: '8px 12px', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Campagne</th>
              <th style={{ color: '#666', fontWeight: 600, textAlign: 'right', padding: '8px 12px', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {['Software MKB', 'Recruitment', 'Digital agencies', 'IT consultants'].map((camp) => (
              <tr key={camp} style={{ borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ color: '#e0e0e0', padding: '10px 12px' }}>{camp}</td>
                <td style={{ color: '#4ade80', padding: '10px 12px', textAlign: 'right', fontWeight: 600 }}>Schalen &#x1F7E2;</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
]

export default function Foundation() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const cardEls = section.querySelectorAll<HTMLDivElement>('.stack-card')

    const onScroll = () => {
      cardEls.forEach((card, i) => {
        const rect = card.getBoundingClientRect()
        const viewH = window.innerHeight
        const progress = Math.max(0, Math.min(1, (viewH - rect.top) / viewH))

        if (i < cardEls.length - 1) {
          const nextRect = cardEls[i + 1].getBoundingClientRect()
          const coverProgress = Math.max(0, Math.min(1, (viewH - nextRect.top) / (viewH * 0.5)))
          const scale = 1 - coverProgress * 0.04
          const brightness = 1 - coverProgress * 0.3
          card.style.transform = `scale(${scale})`
          card.style.filter = `brightness(${brightness})`
        }

        const inner = card.querySelector<HTMLDivElement>('.stack-card-inner')
        if (inner) {
          inner.style.opacity = String(Math.min(1, progress * 2))
          inner.style.transform = `translateY(${(1 - Math.min(1, progress * 2)) * 30}px)`
        }
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: '#8C6239' }}
    >
      <style>{`
        @media (max-width: 768px) {
          .stack-card {
            position: relative !important;
            top: auto !important;
          }
          .stack-card-inner {
            grid-template-columns: 1fr !important;
            overflow: hidden;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ position: 'sticky', top: 0, zIndex: 10, textAlign: 'center', padding: 'clamp(50px, 8vw, 80px) 0', backgroundColor: '#8C6239' }}>
          <span style={{ color: '#F2EDE6', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Hoe ik werk
          </span>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, marginTop: 12, letterSpacing: '-0.02em' }}>
            Van onboarding tot afspraak
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, paddingBottom: 'clamp(60px, 10vw, 120px)' }}>
          {cards.map((card, i) => (
            <div
              key={i}
              className="stack-card"
              style={{
                position: 'sticky',
                top: `${200 + i * 20}px`,
                zIndex: i + 1,
                marginBottom: 40,
              }}
            >
              <div
                className="stack-card-inner"
                style={{
                  background: '#1a1a1a',
                  borderRadius: 16,
                  border: '1px solid #2a2a2a',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  padding: 'clamp(24px, 4vw, 40px)',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1.2fr',
                  gap: 'clamp(20px, 4vw, 48px)',
                  alignItems: 'center',
                  opacity: 0,
                  transform: 'translateY(30px)',
                  transition: 'opacity 0.1s, transform 0.1s',
                }}
              >
                <div>
                  <span style={{ color: '#8C6239', fontSize: 13, fontWeight: 600, marginBottom: 8, display: 'block' }}>
                    Stap {i + 1}
                  </span>
                  <h3 style={{ color: '#fff', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, lineHeight: 1.2 }}>
                    {card.headline}
                  </h3>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {card.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
