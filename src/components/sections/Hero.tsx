'use client'

import { useEffect, useRef } from 'react'
import { useCalendly } from '@/components/ui/CalendlyProvider'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { open: openCalendly } = useCalendly()

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    let scrollHandler: (() => void) | null = null
    let videoDuration = 0

    const attachScroll = () => {
      scrollHandler = () => {
        const rect = section.getBoundingClientRect()
        const progress = Math.max(0, Math.min(1, -rect.top / (section.offsetHeight - window.innerHeight)))

        if (videoDuration > 0 && video.readyState >= 2) {
          video.currentTime = progress * videoDuration
        }

        const introEl = document.getElementById('hero-intro')
        const outroEl = document.getElementById('hero-outro')
        const ctaEl = document.getElementById('hero-cta')

        if (introEl) {
          const introOp = progress <= 0.3 ? 1 : progress <= 0.4 ? 1 - (progress - 0.3) / 0.1 : 0
          introEl.style.opacity = String(introOp)
          introEl.style.pointerEvents = introOp < 0.1 ? 'none' : 'auto'
        }

        if (outroEl) {
          const outroOp = Math.min(1, progress >= 0.6 ? (progress - 0.6) / 0.1 : 0)
          outroEl.style.opacity = String(outroOp)
          outroEl.style.pointerEvents = outroOp < 0.1 ? 'none' : 'auto'
        }

        if (ctaEl) {
          const ctaProgress = progress >= 0.7 ? Math.min(1, (progress - 0.7) / 0.1) : 0
          ctaEl.style.transform = `translateX(${(1 - ctaProgress) * 120}%)`
          ctaEl.style.opacity = String(ctaProgress)
        }
      }

      window.addEventListener('scroll', scrollHandler, { passive: true })
      scrollHandler()
    }

    const initVideo = () => {
      videoDuration = video.duration
      if (!videoDuration || !isFinite(videoDuration)) return
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.then(() => {
          video.pause()
          video.currentTime = 0
        }).catch(() => {})
      } else {
        video.pause()
        video.currentTime = 0
      }
    }

    // Always attach scroll handler for text animations
    attachScroll()

    // Set up video seeking when ready
    if (video.readyState >= 2) {
      initVideo()
    } else {
      video.addEventListener('loadeddata', initVideo, { once: true })
    }

    return () => {
      if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler)
      }
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
              color: '#1B1B1B',
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
              transform: 'translateX(120%)',
              opacity: 0,
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
