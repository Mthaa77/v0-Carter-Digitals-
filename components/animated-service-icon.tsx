"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface AnimatedServiceIconProps {
  icon: React.ReactNode
  activeIcon: React.ReactNode
  title?: string
  description?: string
  size?: "sm" | "md" | "lg"
  animate?: boolean
}

export default function AnimatedServiceIcon({
  icon,
  activeIcon,
  title,
  description,
  size = "md",
  animate = true,
}: AnimatedServiceIconProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Periodically animate the icon
  useEffect(() => {
    if (!animate) return

    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 2000)
    }, 10000)

    return () => clearInterval(interval)
  }, [animate])

  const sizeClasses = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
  }

  return (
    <motion.div
      className="flex flex-col items-center"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => {
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 2000)
      }}
    >
      <motion.div
        className={`rounded-full bg-gradient-to-br from-primary/10 to-primary/5 ${sizeClasses[size]}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isAnimating ? { y: [0, -5, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className={isHovered || isAnimating ? "hidden" : "block"}>{icon}</div>
        <div className={isHovered || isAnimating ? "block" : "hidden"}>{activeIcon}</div>
      </motion.div>
      {title && (
        <motion.h3
          className="mt-2 font-medium text-center"
          animate={isAnimating ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
      )}
      {description && <p className="mt-1 text-sm text-center text-muted-foreground">{description}</p>}
    </motion.div>
  )
}
