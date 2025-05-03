"use client"

import { useState, useEffect } from "react"
import { throttle } from "@/lib/performance"

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl"

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

export default function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })

  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>("xs")

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return

    // Set initial values
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    // Update breakpoint
    const updateBreakpoint = (width: number) => {
      if (width >= breakpoints["2xl"]) return "2xl"
      if (width >= breakpoints.xl) return "xl"
      if (width >= breakpoints.lg) return "lg"
      if (width >= breakpoints.md) return "md"
      if (width >= breakpoints.sm) return "sm"
      return "xs"
    }

    setCurrentBreakpoint(updateBreakpoint(window.innerWidth))

    // Throttled resize handler
    const handleResize = throttle(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      setCurrentBreakpoint(updateBreakpoint(window.innerWidth))
    }, 200)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Helper functions
  const isAbove = (breakpoint: Breakpoint) => windowSize.width >= breakpoints[breakpoint]
  const isBelow = (breakpoint: Breakpoint) => windowSize.width < breakpoints[breakpoint]

  return {
    width: windowSize.width,
    height: windowSize.height,
    breakpoint: currentBreakpoint,
    isAbove,
    isBelow,
    isMobile: isBelow("md"),
    isTablet: isAbove("md") && isBelow("lg"),
    isDesktop: isAbove("lg"),
  }
}
