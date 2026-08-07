'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useCalendly } from '@/components/ui/CalendlyProvider'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { open: openCalendly } = useCalendly()

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    let duration = 0

    const init = () => {
      duration = video.duration
      if (!duration || !isFinite(duration)) return

      // Scroll-driven video seeking via GSAP ScrollTrigger
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          video.currentTime = self.progress * duration
        },
      })

      // Intro text fade out (0% - 15% scroll)
      gsap.fromTo('#hero-intro',
        { opacity: 1 },
        {
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '15% top',
            scrub: true,
          },
        }
      )

      // Outro text fade in (60% - 70% scroll)
      gsap.fromTo('#hero-outro',
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: '60% top',
            end: '70% top',
            scrub: true,
          },
        }
      )

      // CTA slide in (70% - 80% scroll)
      gsap.fromTo('#hero-cta',
        { xPercent: 120, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: '70% top',
            end: '80% top',
            scrub: true,
          },
        }
      )
    }

    // Play/pause trick to unlock video seeking on mobile
    const activate = () => {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.then(() => {
          video.pause()
          init()
        }).catch(() => {
          init()
        })
      } else {
        video.pause()
        init()
      }
    }

    if (video.readyState >= 1) {
      activate()
    } else {
      video.addEventListener('loadedmetadata', activate, { once: true })
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === section) st.kill()
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero-scroll-section"
      style={{ position: 'relative', height: '500vh' }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: '#000',
        }}
      >
        <video
          ref={videoRef}
          id="hero-video"
          src="/hero.mp4"
          muted
          playsInline
          preload="auto"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        <div
          id="hero-intro"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            textAlign: 'center',
            padding: '0 24px 12vh',
          }}
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
          <p
            style={{
              color: '#fff',
              fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
              fontWeight: 400,
              textShadow: '0 1px 10px rgba(0,0,0,0.5)',
              marginBottom: '0.8em',
            }}
          >
            Jullie digitale collega.
          </p>
          <p
            style={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: 'clamp(1.05rem, 2vw, 1.4rem)',
              fontStyle: 'italic',
              textShadow: '0 1px 8px rgba(0,0,0,0.4)',
              maxWidth: 500,
            }}
          >
            Iedereen weet dat ze moeten prospecten. Niemand doet het.
          </p>
        </div>

        <div
          id="hero-outro"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            textAlign: 'center',
            padding: '0 24px 6vh',
            opacity: 0,
            pointerEvents: 'none',
          }}
        >
          <p
            style={{
              color: '#fff',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 600,
              marginBottom: '0.5em',
            }}
          >
            Jullie focussen op vandaag.
          </p>
          <h2
            style={{
              color: '#fff',
              fontSize: 'clamp(2rem, 5.5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              textShadow: '0 2px 20px rgba(0,0,0,0.5)',
              marginBottom: '1em',
              maxWidth: 700,
            }}
          >
            Ik werk alvast aan morgen.
          </h2>
          <button
            id="hero-cta"
            onClick={openCalendly}
            style={{
              color: '#fff',
              fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
              fontWeight: 600,
              padding: '14px 36px',
              border: '2px solid #fff',
              borderRadius: 6,
              backgroundColor: 'transparent',
              letterSpacing: '0.04em',
              transition: 'background-color 0.25s ease, color 0.25s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fff'
              e.currentTarget.style.color = '#1B1B1B'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = '#fff'
            }}
          >
            Maak kennis met Buddy
          </button>
        </div>
      </div>
    </section>
  )
}
