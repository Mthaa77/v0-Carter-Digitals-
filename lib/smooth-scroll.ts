import type React from "react"
/**
 * Smoothly scrolls to an element with the given ID
 * Works on both desktop and mobile devices
 */
export function smoothScrollToElement(id: string, offset = 100): void {
  const element = document.getElementById(id)
  if (!element) return

  // Get the element's position relative to the viewport
  const rect = element.getBoundingClientRect()

  // Calculate the absolute position by adding the current scroll position
  const absoluteTop = rect.top + window.scrollY

  // Calculate the target position with offset
  const targetPosition = absoluteTop - offset

  // Get the current scroll position
  const startPosition = window.scrollY

  // Calculate distance to scroll
  const distance = targetPosition - startPosition

  // Duration in milliseconds
  const duration = 1000

  // Start time
  let startTime: number | null = null

  // Animation function
  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)

    // Easing function - easeInOutQuad
    const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)

    window.scrollTo(0, startPosition + distance * easeInOutQuad(progress))

    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  // Start animation
  requestAnimationFrame(animation)
}

/**
 * Handles smooth scrolling for anchor links
 * @param e The click event
 * @param id The ID of the element to scroll to
 * @param offset Optional offset from the top (default: 100px)
 */
export function handleSmoothScroll(e: React.MouseEvent<HTMLAnchorElement>, id: string, offset = 100): void {
  e.preventDefault()
  smoothScrollToElement(id, offset)
}
