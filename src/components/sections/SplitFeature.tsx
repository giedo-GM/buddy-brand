'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import ArrowIcon from '@/components/ui/ArrowIcon'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function SplitFeature() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.split-img', { x: -60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })
      gsap.fromTo('.split-text', { x: 60, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="split-feature"
      style={{ paddingTop: 'clamp(80px, 12vw, 180px)', paddingBottom: 'clamp(80px, 12vw, 180px)' }}
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">

          {/* Left — Team image */}
          <div className="split-img opacity-0">
            <div
              className="relative overflow-hidden shadow-[0_8px_40px_rgba(27,27,27,0.10)] lg:-ml-[5%]"
              style={{
                borderRadius: '10px',
              }}
            >
              <Image
                src="/images/Buddyteam.png"
                alt="Buddy samen met het team"
                width={900}
                height={640}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right — Text */}
          <div className="split-text opacity-0 flex flex-col justify-center max-w-[540px]">
            <h2
              className="text-text-primary font-bold"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.15', letterSpacing: '-0.02em', marginBottom: '28px' }}
            >
              Ik ben geen vervanging van jullie team
            </h2>
            <p className="text-text-secondary" style={{ fontSize: '17px', lineHeight: '1.8' }}>
              Ik doe in een paar minuten wat een accountmanager soms uren kost.
            </p>
            <ul className="mt-6 pl-1 flex flex-col gap-2 list-disc list-inside" style={{ fontSize: '17px', lineHeight: '1.8' }}>
              <li className="text-text-secondary">Ik onderzoek.</li>
              <li className="text-text-secondary">Ik vergelijk.</li>
              <li className="text-text-secondary">Ik denk na.</li>
              <li className="text-text-secondary">Ik stel mezelf voor.</li>
            </ul>
            <p className="text-text-secondary mt-6" style={{ fontSize: '17px', lineHeight: '1.8' }}>
              En zodra iemand wil kennismaken — is het podium voor jullie.
              <br />
              Daar zijn mensen nog altijd beter in dan ik.
            </p>
            <p className="text-text-secondary mt-6" style={{ fontSize: '17px', lineHeight: '1.8' }}>
              En eerlijk? Dat vind ik helemaal prima.
            </p>
            <a
              href="#mijn-opdrachtgevers"
              className="inline-flex items-center gap-2 text-accent text-body-md mt-10 transition-all duration-200 group hover:underline hover:underline-offset-4"
            >
              Bekijk mijn opdrachtgevers
              <ArrowIcon className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
