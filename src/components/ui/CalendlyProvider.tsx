'use client'

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import CalendlyOverlay from './CalendlyOverlay'

const CalendlyContext = createContext<{ open: () => void }>({ open: () => {} })

export function useCalendly() {
  return useContext(CalendlyContext)
}

export default function CalendlyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const value = useMemo(() => ({ open }), [open])

  return (
    <CalendlyContext.Provider value={value}>
      {children}
      <CalendlyOverlay isOpen={isOpen} onClose={close} />
    </CalendlyContext.Provider>
  )
}
