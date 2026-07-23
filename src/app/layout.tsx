import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CalendlyProvider from '@/components/ui/CalendlyProvider'
import CustomCursor from '@/components/ui/CustomCursor'

const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Buddy — Jullie digitale commerciële collega',
  description: 'Ik ga voor jullie op zoek naar nieuwe klanten. Ik onderzoek bedrijven, stel mezelf voor, houd contact en zorg ervoor dat er uiteindelijk een afspraak in jullie agenda staat.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <body className={`${bodyFont.variable} antialiased`}>
        <CalendlyProvider>
          {children}
          <CustomCursor />
        </CalendlyProvider>
      </body>
    </html>
  )
}
