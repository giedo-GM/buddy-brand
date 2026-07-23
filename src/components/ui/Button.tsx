'use client'

import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: React.ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-text-primary text-white hover:bg-[#333]',
  secondary: 'border border-accent text-accent hover:bg-accent hover:text-white',
  ghost: 'text-accent hover:text-accent-hover',
}

export default function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-8 py-3.5 text-body-sm font-medium transition-all duration-200 rounded-button inline-flex items-center gap-2 min-h-[48px]',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
