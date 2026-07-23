'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isMobile = window.matchMedia('(pointer: coarse)').matches
    if (isMobile) return

    const el = cursorRef.current
    if (!el) return

    const style = document.createElement('style')
    style.textContent = '*, *::before, *::after { cursor: none !important; }'
    document.head.appendChild(style)

    let raf = 0
    let mx = -100
    let my = -100

    const render = () => {
      el.style.transform = `translate3d(${mx}px, ${my}px, 0)`
      raf = 0
    }

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      el.style.opacity = '1'
      if (!raf) raf = requestAnimationFrame(render)
    }

    const onOver = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest(
        'a, button, [role="button"], input, textarea, select, label[for], [tabindex]'
      )
      el.dataset.hover = t ? '1' : ''
    }

    const onLeave = () => { el.style.opacity = '0' }
    const onEnter = () => { el.style.opacity = '1' }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      style.remove()
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] pen-cursor"
      style={{ top: 0, left: 0, opacity: 0, willChange: 'transform' }}
    >
      {/*
        The pen tip (nib point) sits at SVG coord (2, 30).
        We offset the SVG by (-2, -30) so the tip aligns with the mouse.
      */}
      <svg
        width="28"
        height="32"
        viewBox="0 0 28 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'translate(-2px, -30px)' }}
      >
        {/* Nib — sharp tip pointing down-left */}
        <path d="M2 30L5 22L9.5 26Z" fill="#8C6239" />
        {/* Pen barrel */}
        <line x1="6" y1="21.5" x2="21" y2="4" stroke="#1B1B1B" strokeWidth="2.2" strokeLinecap="round" />
        {/* Cap */}
        <line x1="19.5" y1="6.5" x2="23" y2="2.5" stroke="#8C6239" strokeWidth="2.8" strokeLinecap="round" />
        {/* Clip */}
        <line x1="12" y1="14" x2="16.5" y2="9" stroke="#1B1B1B" strokeWidth="0.7" strokeLinecap="round" opacity="0.25" />
      </svg>

      <style jsx>{`
        .pen-cursor[data-hover="1"] svg {
          filter: drop-shadow(0 0 4px rgba(140,98,57,0.4));
        }
      `}</style>
    </div>
  )
}
