"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 left-6 z-50"
        >
          <Button
            asChild
            className={cn(
              "rounded-full h-14 w-14 shadow-lg micro-bounce",
              "bg-gradient-to-r from-green-500 to-emerald-600",
              "hover:from-emerald-600 hover:to-green-500",
              "border-0 shadow-lg shadow-green-500/20",
            )}
          >
            <a
              href="https://wa.me/27724026893"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/10 rounded-full animate-pulse-slow"></span>
              <MessageSquare className="h-6 w-6" />
            </a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
