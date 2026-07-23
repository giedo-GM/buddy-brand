'use client'

import { useEffect, useMemo, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const DEFAULT_COLORS = ['#E7E1D8', '#DDD7CE', '#D4CEC5', '#C9C2B8', '#8C6239']
const BLOCK_SIZE = 40

interface PixelDissolveProps {
  className?: string
  colors?: string[]
  bg?: string
}

export default function PixelDissolve({ className = '', colors, bg }: PixelDissolveProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const palette = useMemo(() => colors || DEFAULT_COLORS, [colors])

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const W = container.offsetWidth
    const H = container.offsetHeight
    canvas.width = W
    canvas.height = H

    const cols = Math.ceil(W / BLOCK_SIZE)
    const rows = Math.ceil(H / BLOCK_SIZE)

    const blocks: { x: number; y: number; color: string; opacity: number; rowIndex: number }[] = []
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        blocks.push({
          x: c * BLOCK_SIZE,
          y: r * BLOCK_SIZE,
          color: palette[Math.floor(Math.random() * palette.length)],
          opacity: 1,
          rowIndex: r,
        })
      }
    }

    function draw() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const block of blocks) {
        ctx.globalAlpha = block.opacity
        ctx.fillStyle = block.color
        ctx.fillRect(block.x, block.y, BLOCK_SIZE - 1, BLOCK_SIZE - 1)
      }
      ctx.globalAlpha = 1
    }

    draw()

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1.5,
      },
    })

    for (let r = rows - 1; r >= 0; r--) {
      const rowBlocks = blocks.filter((b) => b.rowIndex === r)
      const shuffled = [...rowBlocks].sort(() => Math.random() - 0.5)
      tl.to(
        shuffled,
        {
          opacity: 0,
          duration: 0.4,
          stagger: 0.02,
          ease: 'power2.in',
          onUpdate: draw,
        },
        r * 0.05
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === container) st.kill()
      })
    }
  }, [palette])

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: '160px', backgroundColor: bg || 'transparent' }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}
