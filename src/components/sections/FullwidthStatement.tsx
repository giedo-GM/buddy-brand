'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Label from '@/components/ui/Label'
import Button from '@/components/ui/Button'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function FullwidthStatement() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.wa-text > *', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
      })
      gsap.fromTo('.wa-buddy', { opacity: 0, scale: 0.96 }, {
        opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="px-5 sm:px-6 lg:px-16 xl:px-24"
      style={{ paddingTop: 'clamp(80px, 14vw, 200px)', paddingBottom: 'clamp(80px, 14vw, 200px)' }}
    >
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[11fr_9fr] items-center gap-12 lg:gap-20">

          {/* Left — Text */}
          <div className="wa-text flex flex-col" style={{ maxWidth: '620px' }}>
            <Label>JE KAN MIJ GEWOON BEREIKEN VIA WHATSAPP</Label>

            <h2
              className="text-text-primary"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 700, lineHeight: '1.15', letterSpacing: '-0.025em', marginTop: '32px' }}
            >
              Zie je een interessant bedrijf?
              <br />
              App mij gewoon de website.
            </h2>

            <p
              className="text-text-secondary"
              style={{ fontSize: '19px', lineHeight: '1.8', marginTop: '40px' }}
            >
              Dan zorg ik dat er straks een afspraak in jouw agenda staat.
            </p>

            {/* WhatsApp items */}
            <div style={{ marginTop: 'clamp(32px, 5vw, 56px)' }} className="flex flex-col" >

              <div>
                <p className="text-text-secondary" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  Wil je weten hoe het met een lead staat?
                </p>
                <p className="text-text-primary" style={{ fontSize: '18px', lineHeight: '1.8', fontWeight: 600 }}>
                  App me.
                </p>
                <p className="text-text-secondary" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  Dan geef ik je direct een update.
                </p>
              </div>

              <div style={{ marginTop: '36px' }}>
                <p className="text-text-secondary" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  Wil je een update van je pipeline?
                </p>
                <p className="text-text-primary" style={{ fontSize: '18px', lineHeight: '1.8', fontWeight: 600 }}>
                  App me.
                </p>
                <p className="text-text-secondary" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  Dan laat ik je zien waar ik mee bezig ben, wat er loopt en welke kansen eraan komen.
                </p>
              </div>

              <div style={{ marginTop: '36px' }}>
                <p className="text-text-secondary" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  Heb je een vraag over een prospect?
                </p>
                <p className="text-text-primary" style={{ fontSize: '18px', lineHeight: '1.8', fontWeight: 600 }}>
                  App me.
                </p>
                <p className="text-text-secondary" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  Dan zoek ik het meteen voor je uit.
                </p>
              </div>
            </div>

            {/* Closing */}
            <div style={{ marginTop: '56px' }}>
              <p className="text-text-primary" style={{ fontSize: '20px', lineHeight: '1.8', fontWeight: 500 }}>
                Meer hoef je niet te doen.
                <br />
                Ik doe de rest.
              </p>
            </div>

            <div style={{ marginTop: '48px' }}>
              <Button variant="primary" className="min-h-[48px]">App Buddy via WhatsApp &rarr;</Button>
            </div>
          </div>

          {/* Right — Buddy on Phone */}
          <div className="wa-buddy opacity-0 flex justify-center lg:justify-end" style={{ marginTop: 'clamp(-20px, -3vw, -60px)' }}>
            <div className="relative w-full max-w-[700px] aspect-[700/920]">
              <Image
                src="/images/buddy on phone.png"
                alt="Buddy aan de telefoon"
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
