'use client'

import Link from 'next/link'
import Image from 'next/image'

const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'Hoe ik werk', href: '/#hoe-ik-werk' },
  { label: 'Mijn CV', href: '/mijn-cv' },
  { label: 'Buddy Check', href: '/buddy-check' },
  { label: 'Contact', href: '/#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">

          {/* Column 1 — Logo + intro */}
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <Image
              src="/images/Logo.png"
              alt="Buddy"
              width={160}
              height={48}
              className="h-12 w-auto object-contain"
              style={{ maxWidth: '160px' }}
            />
            <p className="text-body-sm text-text-secondary max-w-xs" style={{ lineHeight: '1.8' }}>
              Jullie digitale commerci&#235;le collega.
            </p>
            <p className="text-body-sm text-text-secondary max-w-xs" style={{ lineHeight: '1.8' }}>
              Ik leer jullie bedrijf kennen.
              <br />
              Ik vind nieuwe klanten.
              <br />
              Ik plan afspraken.
              <br />
              En ik blijf iedere dag slimmer worden.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-text-tertiary hover:text-text-primary transition-colors" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="text-text-tertiary hover:text-text-primary transition-colors" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Bedrijf */}
          <div className="text-center md:text-left">
            <h4 className="font-mono-label text-label text-text-tertiary uppercase tracking-widest mb-4">Bedrijf</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Buddy USPs */}
          <div className="text-center md:text-left">
            <h4 className="font-mono-label text-label text-text-tertiary uppercase tracking-widest mb-4">Buddy</h4>
            <ul className="flex flex-col gap-3">
              {[
                'Werkt 24/7',
                'Geen templates',
                'Persoonlijke outreach',
                'Case-based prospecting',
                '100% eigendom van jullie bedrijf',
                '3 afspraken garantie',
              ].map((item) => (
                <li key={item} className="text-body-sm text-text-secondary">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Buddy Check */}
          <div className="text-center md:text-left">
            <h4 className="font-mono-label text-label text-text-tertiary uppercase tracking-widest mb-3">
              Ben ik de juiste collega?
            </h4>
            <p className="text-body-sm text-text-secondary" style={{ lineHeight: '1.8' }}>
              Beantwoord vijf korte vragen.
            </p>
            <p className="text-body-sm text-text-secondary mt-3" style={{ lineHeight: '1.8' }}>
              Ik stuur je persoonlijk een e-mail met mijn eerste indruk, de kansen die ik zie en hoe ik jullie zou aanpakken.
            </p>
            <Link
              href="/buddy-check"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover text-body-sm mt-5 transition-colors font-medium"
            >
              &rarr; Doe de Buddy Check
            </Link>
          </div>
        </div>

        <div className="mt-10 sm:mt-16 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-text-tertiary">&copy; 2026 Buddy. Alle rechten voorbehouden.</p>
          <div className="flex gap-6">
            <a href="#" className="text-body-sm text-text-tertiary hover:text-text-secondary transition-colors">Privacybeleid</a>
            <a href="#" className="text-body-sm text-text-tertiary hover:text-text-secondary transition-colors">Algemene voorwaarden</a>
            <a href="#" className="text-body-sm text-text-tertiary hover:text-text-secondary transition-colors">Cookiebeleid</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
