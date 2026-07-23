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
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_6fr_7fr] items-center gap-10 lg:gap-12">

          {/* Left — Label + Title + Subtitle */}
          <div className="found-col opacity-0 text-center lg:text-left">
            <span className="text-label uppercase tracking-widest font-semibold" style={{ color: '#E7E1D8' }}>
              WIE BEN IK
            </span>
            <h2
              className="font-bold mt-6 max-w-[600px] mx-auto lg:mx-0"
              style={{ color: '#F2EDE6', fontSize: 'clamp(1.75rem, 3.8vw, 3.2rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
            >
              Voordat ik ook maar &#233;&#233;n e-mail verstuur, wil ik eerst begrijpen wie jullie zijn.
            </h2>
            <p className="text-body-md mt-5 max-w-[500px]" style={{ color: '#E7E1D8' }}>
              Ik geloof niet in standaard outreach. Nooit gedaan ook.
            </p>
          </div>

          {/* Center — Buddy */}
          <div className="found-col opacity-0 flex justify-center overflow-visible">
            <div className="relative w-full max-w-[480px] aspect-[480/680] -mx-4 lg:-mx-16">
              <Image
                src="/images/Buddy onboarding.png"
                alt="Buddy tijdens onboarding"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right — Text balloon with left arrow */}
          <div className="found-col opacity-0 flex justify-center lg:justify-end">
            <div
              className="relative max-w-[440px] rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
              style={{
                backgroundColor: 'rgba(0,0,0,0.15)',
                padding: '40px',
              }}
            >
              {/* Arrow pointing left toward Buddy */}
              <div
                className="absolute w-5 h-5 rotate-45 rounded-bl-[4px]"
                style={{ backgroundColor: 'rgba(0,0,0,0.15)', left: '-10px', top: '48px' }}
              />

              <p className="text-body-md leading-[1.7]" style={{ color: '#E7E1D8' }}>
                Als ik ergens kom werken, wil ik eerst weten met wie ik samenwerk.
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <p className="text-body-md leading-[1.7]" style={{ color: '#E7E1D8' }}>Wat maken jullie?</p>
                <p className="text-body-md leading-[1.7]" style={{ color: '#E7E1D8' }}>Waar zijn jullie goed in?</p>
                <p className="text-body-md leading-[1.7]" style={{ color: '#E7E1D8' }}>Welke klanten maken jullie het gelukkigst?</p>
                <p className="text-body-md leading-[1.7]" style={{ color: '#E7E1D8' }}>Welke projecten zouden jullie morgen zo weer doen?</p>
              </div>
              <p className="text-body-md leading-[1.7] mt-6" style={{ color: '#E7E1D8' }}>
                Pas als ik jullie echt begrijp, durf ik mezelf namens jullie voor te stellen.
              </p>
              <a
                href="#hoe-ik-werk"
                className="inline-flex items-center gap-2 text-body-md mt-8 transition-opacity duration-200 hover:opacity-80 group"
                style={{ color: '#F2EDE6' }}
              >
                Lees hoe ik werk
                <ArrowIcon className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
