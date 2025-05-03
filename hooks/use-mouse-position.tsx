"use client"

import { useState, useEffect } from "react"
import { throttle } from "@/lib/performance"

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Throttled mouse move handler for better performance
    const handleMouseMove = throttle((e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Store in window for global access
      window.mouseX = e.clientX
      window.mouseY = e.clientY
    }, 10)

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return mousePosition
}
