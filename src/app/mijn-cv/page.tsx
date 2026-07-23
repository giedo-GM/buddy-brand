'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function MijnCvPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-primary">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-16 xl:px-24" style={{ paddingTop: 'clamp(100px, 10vw, 140px)', paddingBottom: 'clamp(60px, 8vw, 120px)' }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover text-body-md transition-colors mb-12"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Terug naar home
          </Link>

          <h1
            className="text-text-primary font-bold"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.1', letterSpacing: '-0.03em' }}
          >
            Mijn CV
          </h1>

          <div className="mt-12">
            <Image
              src="/images/CV Buddy.png"
              alt="CV van Buddy"
              width={1100}
              height={1400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
