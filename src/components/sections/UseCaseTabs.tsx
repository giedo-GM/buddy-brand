'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const prompts = [
  { question: 'Zie je een interessant bedrijf?', cta: 'APP ME DE WEBSITE.' },
  { question: 'Twijfel je over een prospect?', cta: 'APP ME.' },
  { question: 'Benieuwd hoe het met een lead staat?', cta: 'APP ME.' },
  { question: 'Wil je weten waar ik vandaag mee bezig ben?', cta: 'APP ME.' },
  { question: 'Wil je dat ik contact opneem met een klant?', cta: 'APP ME.' },
]

export default function UseCaseTabs() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.appme-heading', { y: 24, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
      gsap.fromTo('.appme-prompt', { y: 14, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.appme-list', start: 'top 85%' },
      })
      gsap.fromTo('.appme-buddy', { opacity: 0, scale: 0.96 }, {
        opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
      })
      gsap.fromTo('.appme-closing', { y: 12, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, ease: 'power3.out',
        scrollTrigger: { trigger: '.appme-closing', start: 'top 92%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="px-5 sm:px-6 lg:px-16 xl:px-24"
      style={{ paddingTop: 'clamp(60px, 8vw, 120px)', paddingBottom: 'clamp(60px, 8vw, 120px)' }}
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">

          {/* Left — Copy */}
          <div style={{ maxWidth: '560px', paddingLeft: 'clamp(20px, 4vw, 80px)' }}>
            {/* Headline */}
            <h2
              className="appme-heading opacity-0 text-text-primary font-bold uppercase"
              style={{
                fontSize: 'clamp(1.6rem, 3.5vw, 2.6rem)',
                lineHeight: '1.08',
                letterSpacing: '0.06em',
              }}
            >
              Ik ben altijd
              <br />
              bereikbaar.
            </h2>

            {/* APP ME prompts */}
            <div className="appme-list" style={{ marginTop: 'clamp(28px, 3.5vw, 44px)' }}>
              <div className="flex flex-col" style={{ gap: 'clamp(16px, 2vw, 24px)' }}>
                {prompts.map((prompt, i) => (
                  <div key={i} className="appme-prompt opacity-0">
                    <p
                      className="text-text-secondary"
                      style={{ fontSize: '13px', lineHeight: '1.5' }}
                    >
                      {prompt.question}
                    </p>
                    <p
                      className="text-text-primary font-bold uppercase"
                      style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
                        lineHeight: '1.15',
                        letterSpacing: '0.04em',
                        marginTop: '2px',
                      }}
                    >
                      {prompt.cta}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing */}
            <div className="appme-closing opacity-0" style={{ marginTop: 'clamp(28px, 3.5vw, 44px)' }}>
              <p
                className="text-text-secondary"
                style={{
                  fontSize: '13px',
                  lineHeight: '1.8',
                  maxWidth: '360px',
                }}
              >
                Ik werk gewoon mee.
                <br />
                Ik houd jullie CRM bij.
                <br />
                Ik volg leads op.
                <br />
                Ik plan afspraken.
                <br /><br />
                En als jullie iets nodig hebben...
                <br />
                stuur je me gewoon een appje.
              </p>
            </div>
          </div>

          {/* Right — Buddy desktop */}
          <div className="appme-buddy opacity-0 hidden lg:flex items-center justify-center" style={{ width: 'clamp(360px, 30vw, 480px)' }}>
            <div className="relative w-full aspect-[600/744]">
              <Image
                src="/images/Buddy laptop.png"
                alt="Buddy werkt op zijn laptop"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Buddy — mobile */}
        <div className="appme-buddy opacity-0 flex justify-center lg:hidden mt-8">
          <div className="relative w-full max-w-[280px] aspect-[600/744]">
            <Image
              src="/images/Buddy laptop.png"
              alt="Buddy werkt op zijn laptop"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
