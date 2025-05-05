"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"
import { motion } from "framer-motion"

interface AnimatedButtonProps extends ButtonProps {
  glowColor?: string
  gradientFrom?: string
  gradientTo?: string
  children: React.ReactNode
}

export function AnimatedButton({
  glowColor = "rgba(124, 58, 237, 0.5)",
  gradientFrom = "from-primary",
  gradientTo = "to-secondary",
  className,
  children,
  ...props
}: AnimatedButtonProps) {
  return (
    <Button
      className={cn(
        "relative overflow-hidden rounded-2xl btn-3d",
        `bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white`,
        `hover:${gradientTo} hover:${gradientFrom}`,
        "border-0 shadow-lg h-14 px-8",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <motion.span
        className="absolute inset-0 bg-white/20"
        initial={{ y: "100%" }}
        animate={{ y: ["100%", "-100%"] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          duration: 2,
          ease: "linear",
        }}
      />
      <span
        className="absolute inset-0 rounded-2xl"
        style={{
          boxShadow: `0 0 20px ${glowColor}`,
          opacity: 0.7,
        }}
      />
    </Button>
  )
}
