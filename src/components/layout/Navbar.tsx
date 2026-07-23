'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCalendly } from '@/components/ui/CalendlyProvider'

const navLinks = [
  { label: 'Home', href: '/', type: 'link' as const },
  { label: 'Hoe ik werk', href: '#hoe-ik-werk', type: 'scroll' as const },
  { label: 'Mijn CV', href: '/mijn-cv', type: 'link' as const },
  { label: 'Buddy Check', href: '/buddy-check', type: 'link' as const },
  { label: 'Contact', href: '#contact', type: 'scroll' as const },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { open: openCalendly } = useCalendly()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-primary/90 backdrop-blur-md border-b border-border' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-16 xl:px-24 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Logo.png"
            alt="Buddy"
            width={200}
            height={64}
            className="h-12 sm:h-16 w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.type === 'link' ? (
              <Link
                key={link.label}
                href={link.href}
                className="text-body-sm text-text-primary font-medium hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-body-sm text-text-primary font-medium hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="hidden md:block">
          <button
            onClick={openCalendly}
            className="bg-text-primary text-white hover:bg-[#333] text-sm font-medium transition-all duration-200 rounded-button inline-flex items-center gap-2 px-6 py-3"
          >
            Neem mij aan
          </button>
        </div>

        <button
          className="md:hidden text-text-primary flex items-center justify-center w-11 h-11"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-bg-primary z-40 flex flex-col items-center justify-center gap-6 sm:gap-8">
          {navLinks.map((link, i) =>
            link.type === 'link' ? (
              <Link
                key={link.label}
                href={link.href}
                className="text-2xl sm:text-display-md text-text-primary font-bold opacity-0 animate-[fadeSlideIn_0.4s_ease_forwards]"
                onClick={() => setMenuOpen(false)}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-2xl sm:text-display-md text-text-primary font-bold opacity-0 animate-[fadeSlideIn_0.4s_ease_forwards]"
                onClick={() => setMenuOpen(false)}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {link.label}
              </a>
            )
          )}
          <button
            onClick={() => { setMenuOpen(false); openCalendly() }}
            className="bg-text-primary text-white hover:bg-[#333] text-body-sm font-medium transition-all duration-200 rounded-button mt-4 px-8 py-4 min-h-[48px] opacity-0 animate-[fadeSlideIn_0.4s_ease_forwards]"
            style={{ animationDelay: `${navLinks.length * 0.06}s` }}
          >
            Neem mij aan
          </button>
        </div>
      )}
    </nav>
  )
}
