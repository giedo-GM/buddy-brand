'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useCalendly } from '@/components/ui/CalendlyProvider'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const { open: openCalendly } = useCalendly()

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    if (isMobile !== false) return
    const section = sectionRef.current
    const video = videoRef.current
    const content = contentRef.current
    if (!section || !video || !content) return

    const init = () => {
      const duration = video.duration || 12

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          video.currentTime = self.progress * duration
        },
      })

      gsap.fromTo(content,
        { opacity: 1, y: 0 },
        {
          opacity: 0, y: -24, ease: 'power1.in',
          scrollTrigger: { trigger: section, start: 'top top', end: '15% top', scrub: true },
        }
      )

      gsap.fromTo('#hero-outro',
        { opacity: 0 },
        {
          opacity: 1, ease: 'none',
          scrollTrigger: { trigger: section, start: '60% top', end: '70% top', scrub: true },
        }
      )

      gsap.fromTo('#hero-cta',
        { xPercent: 120, opacity: 0 },
        {
          xPercent: 0, opacity: 1, ease: 'none',
          scrollTrigger: { trigger: section, start: '70% top', end: '80% top', scrub: true },
        }
      )
    }

    const activate = () => {
      video.play().then(() => { video.pause(); init() }).catch(() => init())
    }

    if (video.readyState >= 1) {
      activate()
    } else {
      video.addEventListener('loadedmetadata', activate, { once: true })
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [isMobile])

  if (isMobile === null) return <div style={{ height: '100vh', backgroundColor: '#000' }} />

  if (isMobile) {
    return (
      <section className="relative" style={{ height: '100vh', backgroundColor: '#0a0a0a' }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative" style={{ width: '65%', maxWidth: 320, aspectRatio: '9/16' }}>
            <Image
              src="/images/Buddy laptop.png"
              alt="Buddy"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
        <div
          className="absolute inset-0 flex flex-col items-center justify-end text-center"
          style={{ padding: '0 24px 10vh' }}
        >
          <h1
            style={{
              color: '#fff',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
              marginBottom: '0.3em',
            }}
          >
            BUDDY
          </h1>
          <p style={{ color: '#fff', fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: 400, textShadow: '0 1px 10px rgba(0,0,0,0.5)', marginBottom: '0.8em' }}>
            Jullie digitale collega.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(1.05rem, 2vw, 1.4rem)', fontStyle: 'italic', textShadow: '0 1px 8px rgba(0,0,0,0.4)', maxWidth: 500 }}>
            Iedereen weet dat ze moeten prospecten. Niemand doet het.
          </p>
          <button
            onClick={openCalendly}
            className="hover:bg-white hover:text-[#1B1B1B] transition-colors duration-200"
            style={{
              color: '#fff',
              fontSize: '1rem',
              fontWeight: 600,
              padding: '14px 36px',
              border: '2px solid #fff',
              borderRadius: 6,
              backgroundColor: 'transparent',
              letterSpacing: '0.04em',
              cursor: 'pointer',
              marginTop: '2em',
            }}
          >
            Maak kennis met Buddy
          </button>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} id="hero-scroll-section" className="relative" style={{ height: '600vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden" style={{ backgroundColor: '#000' }}>
        <video
          ref={videoRef}
          src="/hero.mp4"
          preload="auto"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

        <div
          ref={contentRef}
          id="hero-intro"
          className="absolute inset-0 flex flex-col items-center justify-end text-center"
          style={{ padding: '0 24px 12vh' }}
        >
          <h1
            style={{
              color: '#fff',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
              marginBottom: '0.3em',
            }}
          >
            BUDDY
          </h1>
          <p style={{ color: '#fff', fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', fontWeight: 400, textShadow: '0 1px 10px rgba(0,0,0,0.5)', marginBottom: '0.8em' }}>
            Jullie digitale collega.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(1.05rem, 2vw, 1.4rem)', fontStyle: 'italic', textShadow: '0 1px 8px rgba(0,0,0,0.4)', maxWidth: 500 }}>
            Iedereen weet dat ze moeten prospecten. Niemand doet het.
          </p>
        </div>

        <div
          id="hero-outro"
          className="absolute inset-0 flex flex-col items-center justify-end text-center"
          style={{ padding: '0 24px 6vh', opacity: 0, pointerEvents: 'none' }}
        >
          <p style={{ color: '#fff', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 600, marginBottom: '0.5em' }}>
            Jullie focussen op vandaag.
          </p>
          <h2 style={{ color: '#fff', fontSize: 'clamp(2rem, 5.5vw, 4rem)', fontWeight: 800, lineHeight: 1.15, textShadow: '0 2px 20px rgba(0,0,0,0.5)', marginBottom: '1em', maxWidth: 700 }}>
            Ik werk alvast aan morgen.
          </h2>
          <button
            id="hero-cta"
            onClick={openCalendly}
            className="hover:bg-white hover:text-[#1B1B1B] transition-colors duration-200"
            style={{
              color: '#fff',
              fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
              fontWeight: 600,
              padding: '14px 36px',
              border: '2px solid #fff',
              borderRadius: 6,
              backgroundColor: 'transparent',
              letterSpacing: '0.04em',
              cursor: 'pointer',
            }}
          >
            Maak kennis met Buddy
          </button>
        </div>
      </div>
    </section>
  )
}
