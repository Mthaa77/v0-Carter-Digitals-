"use client"

import { useEffect, useRef, useState } from "react"
import { throttle, isMobileDevice, isLowEndDevice } from "@/lib/performance"

export default function ScrollAnimations() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [isLowEnd, setIsLowEnd] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect device capabilities
    setIsLowEnd(isLowEndDevice())
    setIsMobile(isMobileDevice())

    // Use different thresholds based on device capabilities
    const threshold = isLowEnd || isMobile ? 0.05 : 0.1

    // Initialize the intersection observer with throttled callback
    const handleIntersection = throttle((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Add the 'revealed' class when the element is in view
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.classList.add("revealed")
          })
          // Unobserve after animation is triggered
          observerRef.current?.unobserve(entry.target)
        }
      })
    }, 100)

    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold, // Trigger when element is visible
    })

    // Select all elements with the 'reveal-on-scroll' class
    const elements = document.querySelectorAll(".reveal-on-scroll")
    elements.forEach((el) => {
      observerRef.current?.observe(el)
    })

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // Apply staggered animations to children of elements with 'stagger-children' class
  useEffect(() => {
    // Skip heavy animations on low-end devices
    if (isLowEnd || isMobile) return

    const staggerContainers = document.querySelectorAll(".stagger-children")
    const staggerDelay = isLowEnd ? 0.05 : 0.1

    staggerContainers.forEach((container) => {
      const children = Array.from(container.children)
      children.forEach((child, index) => {
        if (child instanceof HTMLElement) {
          child.style.transitionDelay = `${index * staggerDelay}s`
        }
      })
    })
  }, [isLowEnd, isMobile])

  return null
}
