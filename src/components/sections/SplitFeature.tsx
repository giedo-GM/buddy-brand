'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

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
      style={{ paddingTop: 'clamp(60px, 10vw, 140px)', paddingBottom: 'clamp(60px, 10vw, 140px)' }}
    >
      <div className="max-w-[1500px] mx-auto px-5 sm:px-6 lg:px-16 xl:px-24">

        {/* Full-width title */}
        <h2
          className="text-text-primary font-bold text-center"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', lineHeight: '1.15', letterSpacing: '-0.02em', marginBottom: 'clamp(40px, 6vw, 72px)' }}
        >
          Ik vervang jullie team niet. Ik versterk het.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-20 items-center">

          {/* Left — Team image with soft right-edge fade */}
          <div className="split-img opacity-0">
            <div
              className="relative overflow-hidden lg:-ml-[5%]"
              style={{ borderRadius: '10px' }}
            >
              <Image
                src="/images/Buddyteam.png"
                alt="Buddy samen met het team"
                width={900}
                height={640}
                className="w-full h-auto object-cover"
              />
              {/* Soft fade on right edge */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, transparent 60%, #F2EDE6)',
                }}
              />
            </div>
          </div>

          {/* Right — Text */}
          <div className="split-text opacity-0 flex flex-col justify-center max-w-[480px]">
            <p className="text-text-secondary" style={{ fontSize: 'clamp(17px, 1.3vw, 19px)', lineHeight: '2' }}>
              Ik onderzoek bedrijven.
              <br />
              Ik start gesprekken.
              <br />
              Ik volg leads op.
            </p>
            <p className="text-text-secondary" style={{ fontSize: 'clamp(17px, 1.3vw, 19px)', lineHeight: '2', marginTop: 'clamp(20px, 2.5vw, 32px)' }}>
              En zodra iemand wil kennismaken, staat de afspraak in jullie agenda.
            </p>
            <p className="text-text-primary font-medium" style={{ fontSize: 'clamp(17px, 1.3vw, 19px)', lineHeight: '2', marginTop: 'clamp(32px, 4vw, 48px)' }}>
              Maar ik ben er ook gewoon voor jullie.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
