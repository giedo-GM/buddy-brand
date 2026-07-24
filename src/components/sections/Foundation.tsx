'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import ArrowIcon from '@/components/ui/ArrowIcon'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Foundation() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.found-col', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="wie-ben-ik"
      className="w-full"
      style={{ backgroundColor: '#8C6239' }}
    >
      <div
        className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-16 xl:px-24"
        style={{ paddingTop: 'clamp(80px, 12vw, 160px)', paddingBottom: 'clamp(80px, 12vw, 160px)' }}
      >
        {/* Top — Centered title block */}
        <div className="found-col opacity-0 text-center mb-10">
          <span className="text-label uppercase tracking-widest font-semibold" style={{ color: '#E7E1D8' }}>
            WIE BEN IK
          </span>
          <h2
            className="font-bold mt-6 max-w-[800px] mx-auto"
            style={{ color: '#F2EDE6', fontSize: 'clamp(1.75rem, 3.8vw, 3.2rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
          >
            Ik leer jullie eerst kennen.
          </h2>
          <p
            className="mt-5 max-w-[600px] mx-auto"
            style={{ color: '#F2EDE6', fontSize: '17px', lineHeight: '1.7' }}
          >
            Voordat ik namens jullie praat, wil ik eerst begrijpen wie jullie zijn.
          </p>
          <p className="text-body-md mt-3 max-w-[600px] mx-auto" style={{ color: '#E7E1D8' }}>
            Ik geloof niet in standaard outreach. Nooit gedaan ook.
          </p>
        </div>

        {/* Bottom — Card + Buddy side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_2fr] items-end gap-0">

          {/* Card */}
          <div className="found-col opacity-0">
            <div
              className="relative w-full rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
              style={{
                backgroundColor: 'rgba(0,0,0,0.15)',
                padding: 'clamp(24px, 3vw, 36px) clamp(32px, 4vw, 48px)',
              }}
            >
              {/* Block 1 — Onboarding */}
              <p className="text-body-md leading-[1.7]" style={{ color: '#E7E1D8' }}>
                Als ik ergens kom werken, wil ik eerst weten met wie ik samenwerk.
              </p>
              <div className="mt-3 flex flex-col gap-0.5">
                <p className="text-body-md leading-[1.7]" style={{ color: '#E7E1D8' }}>Daarom begin ik met een onboarding.</p>
                <p className="text-body-md leading-[1.7]" style={{ color: '#E7E1D8' }}>Samen bouwen we een knowledge base op.</p>
                <p className="text-body-md leading-[1.7]" style={{ color: '#E7E1D8' }}>We bepalen jullie ideale klant (ICP).</p>
                <p className="text-body-md leading-[1.7]" style={{ color: '#E7E1D8' }}>Ik leer jullie diensten, cases en expertise kennen.</p>
              </div>

              {/* Divider */}
              <div className="my-5" style={{ borderTop: '1px solid rgba(231,225,216,0.15)' }} />

              {/* Block 2 — Research intro */}
              <p className="text-body-md leading-[1.7] mb-3" style={{ color: '#E7E1D8' }}>
                Daarna verdiep ik me verder.
              </p>

              {/* Two-column bullet list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0.5">
                <p className="text-body-md leading-[1.7]" style={{ color: '#E7E1D8' }}>&#x2022; Ik lees jullie website.</p>
                <p className="text-body-md leading-[1.7]" style={{ color: '#E7E1D8' }}>&#x2022; Ik ontdek hoe jullie communiceren.</p>
                <p className="text-body-md leading-[1.7]" style={{ color: '#E7E1D8' }}>&#x2022; Ik bekijk jullie LinkedIn.</p>
                <p className="text-body-md leading-[1.7]" style={{ color: '#E7E1D8' }}>&#x2022; Ik leer hoe de founders schrijven.</p>
                <p className="text-body-md leading-[1.7]" style={{ color: '#E7E1D8' }}>&#x2022; Ik scroll door jullie socials.</p>
                <p className="text-body-md leading-[1.7]" style={{ color: '#E7E1D8' }}>&#x2022; Ik herken welke woorden jullie vaak gebruiken.</p>
                <p className="text-body-md leading-[1.7]" style={{ color: '#E7E1D8' }}>&#x2022; Ik lees eerdere cases.</p>
                <p className="text-body-md leading-[1.7]" style={{ color: '#E7E1D8' }}>&#x2022; Ik begrijp hoe jullie klanten aanspreken.</p>
              </div>

              {/* Divider */}
              <div className="my-5" style={{ borderTop: '1px solid rgba(231,225,216,0.15)' }} />

              {/* Conclusion */}
              <p
                className="leading-[1.5] font-semibold"
                style={{ color: '#F2EDE6', fontSize: '17px' }}
              >
                Pas als ik het gevoel heb dat ik onderdeel ben van het team, stel ik mezelf namens jullie voor.
              </p>

              <a
                href="#hoe-ik-werk"
                className="inline-flex items-center gap-2 text-body-md mt-5 transition-opacity duration-200 hover:opacity-80 group"
                style={{ color: '#F2EDE6' }}
              >
                Lees hoe ik werk
                <ArrowIcon className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Buddy — right side, aligned to bottom of card */}
          <div className="found-col opacity-0 hidden lg:flex justify-center lg:-ml-16">
            <div className="relative w-full max-w-[460px] aspect-[480/680]">
              <Image
                src="/images/Buddy onboarding.png"
                alt="Buddy tijdens onboarding"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Buddy — mobile */}
          <div className="found-col opacity-0 flex justify-center lg:hidden mt-10">
            <div className="relative w-full max-w-[300px] aspect-[480/680]">
              <Image
                src="/images/Buddy onboarding.png"
                alt="Buddy tijdens onboarding"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
