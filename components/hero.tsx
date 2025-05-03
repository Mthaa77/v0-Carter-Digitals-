"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  // Smooth scroll function for CTA buttons
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for header
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5 z-0"></div>

      {/* Subtle animated shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-blue-500/5"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  CARTER DIGITALS
                </span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="block">Your outdated website is</span>
                <span className="text-gradient">costing you customers.</span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl mb-8 text-muted-foreground max-w-xl mx-auto md:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                We transform struggling digital experiences into conversion-focused websites that turn visitors into
                paying clients.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button
                size="lg"
                className="text-base group relative overflow-hidden btn-3d bg-gradient-to-r from-primary to-orange-400 hover:from-orange-400 hover:to-primary"
                onClick={(e) => scrollToSection(e as any, "services")}
              >
                <span className="relative z-10 flex items-center gap-2">
                  See What We Can Do <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base btn-3d border-2 border-primary/50 hover:border-primary"
                onClick={(e) => scrollToSection(e as any, "contact")}
              >
                Get a Free Quote
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-1 relative max-w-md"
          >
            <div className="relative z-10">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Modern Website Design"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full z-0"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
