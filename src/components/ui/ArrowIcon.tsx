'use client'

import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ArrowIcon({ className }: { className?: string }) {
  return <ArrowRight size={16} className={cn('text-accent', className)} />
}
