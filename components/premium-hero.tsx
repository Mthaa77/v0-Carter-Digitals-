"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, MousePointer, Play } from "lucide-react"
import OptimizedImage from "./optimized-image"
import { cn } from "@/lib/utils"
import { isMobileDevice, isLowEndDevice, throttle } from "@/lib/performance"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function PremiumHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isLowEnd, setIsLowEnd] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  // Detect device capabilities on mount
  useEffect(() => {
    setIsLowEnd(isLowEndDevice())
    setIsMobile(isMobileDevice())

    const handleScroll = throttle(() => {
      if (window.scrollY > 10 && !hasScrolled) {
        setHasScrolled(true)
      }
    }, 100)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasScrolled])

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

  // Interactive particle background
  useEffect(() => {
    // Skip canvas animation on low-end devices
    if (isLowEnd || isMobile || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas || !containerRef.current) return
      canvas.width = containerRef.current.offsetWidth
      canvas.height = containerRef.current.offsetHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle system
    const particles: Particle[] = []
    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000))

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speedX = Math.random() * 0.5 - 0.25
        this.speedY = Math.random() * 0.5 - 0.25
        this.color = `rgba(255, 102, 0, ${Math.random() * 0.2 + 0.1})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Connect particles with lines if they're close enough
    function connectParticles() {
      if (!ctx) return
      const maxDistance = 100

      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 102, 0, ${0.1 * (1 - distance / maxDistance)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    let animationId: number

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      connectParticles()
      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationId)
    }
  }, [isLowEnd, isMobile])

  // Parallax effect for decorative elements
  useEffect(() => {
    // Skip parallax on low-end devices
    if (isLowEnd || isMobile) return

    const handleMouseMove = throttle((e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { width, height, left, top } = containerRef.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      const elements = containerRef.current.querySelectorAll(".parallax-element")
      elements.forEach((el) => {
        const strength = Number.parseFloat(el.getAttribute("data-strength") || "20")
        const element = el as HTMLElement
        element.style.transform = `translate(${x * strength}px, ${y * strength}px)`
      })
    }, 30)

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [isLowEnd, isMobile])

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Interactive particle background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-70"
        style={{ display: isLowEnd || isMobile ? "none" : "block" }}
      />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/5 z-0"></div>

      {/* Futuristic grid pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 grid grid-cols-12 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full border-r border-primary/20"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-full border-b border-primary/20"></div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-[100px] parallax-element"
        data-strength="30"
      ></div>
      <div
        className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-blue-500/5 blur-[80px] parallax-element"
        data-strength="20"
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-purple-500/5 blur-[60px] parallax-element"
        data-strength="40"
      ></div>

      {/* Geometric shapes */}
      <div
        className="absolute top-[20%] right-[15%] w-16 h-16 border border-primary/20 rounded-md rotate-45 parallax-element"
        data-strength="15"
      ></div>
      <div
        className="absolute bottom-[25%] left-[10%] w-24 h-24 border border-blue-500/20 rounded-full parallax-element"
        data-strength="25"
      ></div>
      <div
        className="absolute top-[30%] left-[20%] w-12 h-12 border border-purple-500/20 rotate-12 parallax-element"
        data-strength="35"
      ></div>

      <motion.div
        style={{ y, opacity, scale }}
        className="container relative z-10 mx-auto px-4 flex flex-col items-center"
      >
        <div className="flex flex-col items-center justify-between gap-8 md:gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium backdrop-blur-sm border border-primary/20">
                PREMIUM DIGITAL EXPERIENCES
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="block mb-2">Transform Your</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-orange-400 to-rose-500">
                Digital Experience
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              We craft premium websites that convert visitors into loyal customers, elevating your brand to new heights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className={cn(
                  "text-base group relative overflow-hidden",
                  "bg-gradient-to-r from-primary via-orange-400 to-rose-500",
                  "hover:from-rose-500 hover:via-orange-400 hover:to-primary",
                  "border-0 shadow-lg shadow-primary/20 h-14 px-8",
                )}
                onClick={(e) => scrollToSection(e as any, "services")}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Our Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="text-base border-2 border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:border-white/20 h-14 px-8 group"
                onClick={() => setIsVideoOpen(true)}
              >
                <span className="flex items-center gap-2">
                  <Play className="h-4 w-4 transition-transform group-hover:scale-110" /> Watch Showreel
                </span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative w-full max-w-4xl mt-8 md:mt-16"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 z-0 opacity-60"></div>

              <OptimizedImage
                src="/placeholder.svg?height=800&width=1600"
                alt="Premium Website Design"
                width={1600}
                height={800}
                className="object-cover w-full aspect-[16/8] transition-transform duration-700 group-hover:scale-105"
                priority={true}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Websites That Convert</h3>
                <p className="text-white/80 max-w-lg">
                  Our designs don't just look premium—they deliver measurable results and ROI.
                </p>
              </div>

              {/* Interactive hover effect */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 backdrop-blur-sm p-4 rounded-full">
                  <Play className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl z-0 parallax-element"
              data-strength="10"
            ></div>
            <div
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl z-0 parallax-element"
              data-strength="15"
            ></div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <AnimatePresence>
          {!hasScrolled && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
              <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                className="bg-white/10 backdrop-blur-sm rounded-full p-2"
              >
                <ChevronDown className="h-6 w-6 text-muted-foreground" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Custom cursor effect */}
        {!isMobile && !isLowEnd && (
          <motion.div
            className="fixed hidden md:flex items-center justify-center pointer-events-none z-50"
            style={{
              left: -20,
              top: -20,
              width: 40,
              height: 40,
            }}
            animate={{
              x: typeof window !== "undefined" ? window.mouseX - 20 : 0,
              y: typeof window !== "undefined" ? window.mouseY - 20 : 0,
            }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <div className="w-10 h-10 rounded-full border-2 border-primary/50 flex items-center justify-center">
              <MousePointer className="h-4 w-4 text-primary/70" />
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Video modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black border-white/10">
          <div className="aspect-video w-full">
            <div className="w-full h-full flex items-center justify-center text-white">
              <p>Your showreel video would play here</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
