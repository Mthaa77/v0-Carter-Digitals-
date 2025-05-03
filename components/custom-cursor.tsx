"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import useMousePosition from "@/hooks/use-mouse-position"
import { isMobileDevice } from "@/lib/performance"

export default function CustomCursor() {
  const { x, y } = useMousePosition()
  const [isMobile, setIsMobile] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    setIsMobile(isMobileDevice())

    // Track hover state for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('a, button, [role="button"], input, select, textarea') !== null
      setIsHovering(isInteractive)
    }

    const handleMouseOut = () => {
      setIsHovering(false)
    }

    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [])

  // Don't render on mobile devices
  if (isMobile) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-primary/20 pointer-events-none z-50 hidden md:block"
        animate={{
          x: x - 12,
          y: y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
          mass: 0.5,
        }}
      />

      {/* Cursor outline */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary/30 pointer-events-none z-50 hidden md:block"
        animate={{
          x: x - 20,
          y: y - 20,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
          mass: 0.8,
        }}
      />
    </>
  )
}
