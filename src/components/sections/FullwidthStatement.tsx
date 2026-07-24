'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ChatMessage {
  sender: 'prospect' | 'buddy'
  text: string
  time: string
}

const conversation: ChatMessage[] = [
  { sender: 'prospect', text: 'Hey Buddy!', time: '09:12' },
  { sender: 'prospect', text: 'Je had ons op Instagram benaderd en we zouden het gesprek even voort te zetten op WhatsApp. X Digital.', time: '09:12' },
  { sender: 'prospect', text: 'Zoals gezegd wij halen onze opdrachten nu vooral uit referrals en advertenties.', time: '09:13' },
  { sender: 'prospect', text: 'We zijn een creative agency, heb je daar vaker meegewerkt?', time: '09:13' },
  { sender: 'prospect', text: 'En hoe zou jij dat voor ons aanpakken?', time: '09:14' },
  { sender: 'buddy', text: 'Hey X Digital!', time: '09:16' },
  { sender: 'buddy', text: 'Ja, dat patroon herken ik. Referrals en advertenties werken vaak goed, maar ze zijn lastig voorspelbaar.', time: '09:16' },
  { sender: 'buddy', text: 'Ik zou eerst jullie bureau goed leren kennen, welke projecten het beste passen, waarom klanten uiteindelijk voor jullie kiezen.', time: '09:17' },
  { sender: 'buddy', text: 'Van daaruit zoek ik iedere dag bedrijven die op die klanten lijken. Niet om zoveel mogelijk berichten te sturen. Maar om de juiste gesprekken te starten.', time: '09:18' },
  { sender: 'buddy', text: 'Voor een vergelijkbaar creatief bureau zorgde ik binnen een maand voor zes nieuwe kennismakingen. Zij deden de pitches. Ik vulde de agenda.', time: '09:19' },
  { sender: 'prospect', text: 'Wij werken het liefst voor creators die een eigen product hebben, wij helpen dan met de branding van dat product.', time: '09:24' },
  { sender: 'buddy', text: 'Dat is juist heel waardevolle informatie, dan ga ik daar volledig op zoeken.', time: '09:26' },
  { sender: 'buddy', text: 'Creators die een eigen merk lanceren. Influencers die al een product verkopen. Merken die samenwerken met creators of bedrijven waarbij de branding nog niet meegroeit met hun succes.', time: '09:27' },
  { sender: 'prospect', text: 'We vinden het eigenlijk nog interessanter als een influencer al een merk heeft, maar de branding veel beter kan.', time: '09:32' },
  { sender: 'buddy', text: 'Dat is misschien nog wel een betere niche er is al een product, er zijn al klanten alleen het merk groeit nog niet mee.', time: '09:34' },
  { sender: 'buddy', text: 'Dan richt ik mij op creators waarvan de uitstraling achterblijft bij hun groei.', time: '09:35' },
  { sender: 'buddy', text: 'Ik benader ze niet met een standaard verkooppraatje.', time: '09:35' },
  { sender: 'buddy', text: 'Maar met een persoonlijk verhaal dat laat zien waarom juist dit het juiste moment is om hun merk verder te ontwikkelen. En wat jullie voor eerdere klanten hebben gedaan.', time: '09:36' },
  { sender: 'buddy', text: 'Is het een idee om binnenkort een meeting in te plannen? Dan kunnen we er wat dieper op ingaan en kijken of het echt een match is.', time: '09:37' },
]

export default function FullwidthStatement() {
  const sectionRef = useRef<HTMLElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const chatRef = useRef<HTMLDivElement>(null)
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.buddy-in-action-heading', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
      gsap.fromTo('.buddy-in-action-buddy', { opacity: 0, scale: 0.96 }, {
        opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
      })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${conversation.length * 120}px`,
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress
          const count = Math.min(
            conversation.length,
            Math.floor(progress * (conversation.length + 1))
          )
          setVisibleCount(count)
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [visibleCount])

  return (
    <section
      ref={sectionRef}
      className="px-5 sm:px-6 lg:px-16 xl:px-24"
      style={{ paddingTop: 'clamp(80px, 12vw, 140px)', paddingBottom: 'clamp(60px, 8vw, 100px)' }}
    >
      <div className="max-w-[1500px] mx-auto">

        {/* Header — large prominent label only */}
        <div className="buddy-in-action-heading opacity-0 text-center" style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <h2
            className="text-text-primary font-bold uppercase tracking-widest"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)', lineHeight: '1.1', letterSpacing: '0.12em' }}
          >
            Buddy in action
          </h2>
        </div>

        {/* Phone + Buddy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start justify-items-center">

          {/* iPhone */}
          <div ref={phoneRef} className="relative" style={{ width: 'clamp(320px, 30vw, 400px)' }}>
            {/* Phone frame */}
            <div
              className="relative rounded-[40px] overflow-hidden"
              style={{
                backgroundColor: '#1A1A1A',
                padding: '12px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {/* Screen */}
              <div
                className="rounded-[30px] overflow-hidden"
                style={{ backgroundColor: '#ECE5DD' }}
              >
                {/* WhatsApp header */}
                <div
                  className="flex items-center gap-3"
                  style={{
                    backgroundColor: '#075E54',
                    padding: '14px 16px',
                  }}
                >
                  <div
                    className="flex-shrink-0 rounded-full overflow-hidden"
                    style={{ width: '32px', height: '32px' }}
                  >
                    <Image
                      src="/images/buddy casual.png"
                      alt="Buddy"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p style={{ color: '#fff', fontSize: '14px', fontWeight: 600, lineHeight: '1.2' }}>Buddy</p>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', lineHeight: '1.2' }}>online</p>
                  </div>
                </div>

                {/* Chat area */}
                <div
                  ref={chatRef}
                  className="flex flex-col gap-2 overflow-y-auto"
                  style={{
                    height: 'clamp(420px, 50vh, 560px)',
                    padding: '12px 10px',
                    scrollbarWidth: 'none',
                  }}
                >
                  {conversation.slice(0, visibleCount).map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.sender === 'buddy' ? 'justify-end' : 'justify-start'}`}
                      style={{
                        animation: 'chatFadeIn 300ms ease-out forwards',
                      }}
                    >
                      <div
                        className="relative"
                        style={{
                          backgroundColor: msg.sender === 'buddy' ? '#DCF8C6' : '#fff',
                          borderRadius: msg.sender === 'buddy' ? '12px 4px 12px 12px' : '4px 12px 12px 12px',
                          padding: '8px 10px 4px',
                          maxWidth: '82%',
                          boxShadow: '0 1px 1px rgba(0,0,0,0.06)',
                        }}
                      >
                        <p style={{ fontSize: '13px', lineHeight: '1.45', color: '#1B1B1B' }}>
                          {msg.text}
                        </p>
                        <p
                          className="text-right"
                          style={{ fontSize: '10px', color: '#8C8C8C', marginTop: '2px' }}
                        >
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input bar */}
                <div
                  className="flex items-center gap-2"
                  style={{
                    backgroundColor: '#F0F0F0',
                    padding: '8px 10px',
                    borderTop: '1px solid rgba(0,0,0,0.06)',
                  }}
                >
                  <div
                    className="flex-1 rounded-full"
                    style={{
                      backgroundColor: '#fff',
                      padding: '8px 14px',
                      fontSize: '12px',
                      color: '#8C8C8C',
                    }}
                  >
                    Typ een bericht
                  </div>
                  <div
                    className="flex-shrink-0 rounded-full flex items-center justify-center"
                    style={{ width: '32px', height: '32px', backgroundColor: '#075E54' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buddy — desktop, mirrored position from right */}
          <div className="buddy-in-action-buddy opacity-0 hidden lg:flex items-end justify-center" style={{ alignSelf: 'center' }}>
            <div className="relative" style={{ width: 'clamp(360px, 32vw, 520px)', aspectRatio: '700/920' }}>
              <Image
                src="/images/buddy on phone.png"
                alt="Buddy aan de telefoon"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Buddy — mobile */}
        <div className="buddy-in-action-buddy opacity-0 flex justify-center lg:hidden mt-10">
          <div className="relative w-full max-w-[300px] aspect-[700/920]">
            <Image
              src="/images/buddy on phone.png"
              alt="Buddy aan de telefoon"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes chatFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
