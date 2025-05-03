"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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
          <Button asChild className="rounded-full h-14 w-14 shadow-lg bg-green-500 hover:bg-green-600 btn-3d">
            <a href="https://wa.me/27724026893" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
              <MessageSquare className="h-6 w-6" />
            </a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
