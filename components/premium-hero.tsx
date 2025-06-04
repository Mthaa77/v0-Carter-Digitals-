"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

// Simple animated gradient button
const AnimatedGradientButton = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
  className?: string
}) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "relative overflow-hidden text-base group",
        "bg-gradient-to-r from-primary via-orange-400 to-rose-500",
        "hover:from-rose-500 hover:via-orange-400 hover:to-primary",
        "border-0 shadow-lg shadow-primary/20 h-14 px-8 transition-all duration-300",
        "hover:shadow-xl hover:shadow-primary/30 hover:scale-105",
        className,
      )}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Button>
  )
}

export default function PremiumHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Simple parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

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
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-primary/10"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundSize: "60px 60px",
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), 
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          }}
        ></div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center"
      >
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
            <span className="px-6 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
              ✨ Premium Digital Solutions
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block mb-4 text-foreground">We Build</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-orange-400 to-rose-500">
              Digital Excellence
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Transform your business with stunning websites that convert visitors into customers. We craft premium
            digital experiences that drive growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <AnimatedGradientButton onClick={(e) => scrollToSection(e as any, "services")}>
              Start Your Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </AnimatedGradientButton>

            <Button
              variant="outline"
              size="lg"
              className="text-base border-2 h-14 px-8 hover:bg-primary/5 transition-all duration-300"
              onClick={(e) => scrollToSection(e as any, "portfolio")}
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Featured Project Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
              <div className="aspect-[16/9] overflow-hidden">
                <motion.img
                  src="/images/develop-your-websites-using-nextjs-and-tailwindcss.png"
                  alt="Premium Web Application Design Showcase"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                />
              </div>

              {/* Overlay with project info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Modern Dashboard Application</h3>
                  <p className="text-white/90 text-sm">Built with Next.js, React, and Tailwind CSS</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50"
          >
            {[
              { value: "250+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "5+", label: "Years Experience" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="bg-primary/10 backdrop-blur-sm rounded-full p-2"
          >
            <ChevronDown className="h-5 w-5 text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
