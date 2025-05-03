// Throttle function to limit how often a function can be called
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => ReturnType<T> | undefined {
  let inThrottle = false
  let lastResult: ReturnType<T>

  return function (this: any, ...args: Parameters<T>): ReturnType<T> | undefined {
    if (!inThrottle) {
      lastResult = func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
    return lastResult
  }
}

// Debounce function to delay execution until after a period of inactivity
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return function (this: any, ...args: Parameters<T>): void {
    const later = () => {
      timeout = null
      func.apply(this, args)
    }
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}

// Check if the device is a mobile device
export function isMobileDevice(): boolean {
  if (typeof window === "undefined") return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

// Check if the device has a low-end CPU
export function isLowEndDevice(): boolean {
  if (typeof window === "undefined") return false

  // Check for hardware concurrency (number of logical CPU cores)
  const hardwareConcurrency = navigator.hardwareConcurrency || 4

  // Consider devices with 4 or fewer cores as low-end
  return hardwareConcurrency <= 4
}

// Adjust animation settings based on device capabilities
export function getAnimationSettings() {
  const isLowEnd = isLowEndDevice()
  const isMobile = isMobileDevice()

  return {
    enableHeavyAnimations: !isLowEnd && !isMobile,
    enableParallax: !isLowEnd,
    reducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    transitionDuration: isLowEnd ? 0.3 : 0.5,
    staggerDelay: isLowEnd ? 0.05 : 0.1,
  }
}
