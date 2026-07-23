'use client'

import { useEffect, useCallback } from 'react'

interface CalendlyOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export default function CalendlyOverlay({ isOpen, onClose }: CalendlyOverlayProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Panel sliding from right */}
      <div
        className="absolute top-0 right-0 bottom-0 bg-white shadow-2xl animate-slideIn"
        style={{ width: 'min(480px, 90vw)' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Sluiten"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1B1B1B" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Calendly iframe */}
        <iframe
          src="https://calendly.com/giedom1991?hide_gdpr_banner=1&background_color=f2ede6&text_color=1b1b1b&primary_color=8c6239"
          className="w-full h-full border-0"
          title="Plan een kennismaking met Buddy"
        />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  )
}
