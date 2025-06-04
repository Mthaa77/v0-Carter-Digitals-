"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown, ExternalLink, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import { isMobileDevice, isLowEndDevice, throttle } from "@/lib/performance"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useTheme } from "next-themes"

// Particle system
class Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  alpha: number
  canvas: HTMLCanvasElement

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.size = Math.random() * 2 + 0.5
    this.speedX = Math.random() * 0.5 - 0.25
    this.speedY = Math.random() * 0.5 - 0.25
    this.alpha = Math.random() * 0.5 + 0.2
    this.color = `rgba(255, 102, 0, ${this.alpha})`
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY

    // Wrap around edges
    if (this.x < 0) this.x = this.canvas.width
    if (this.x > this.canvas.width) this.x = 0
    if (this.y < 0) this.y = this.canvas.height
    if (this.y > this.canvas.height) this.y = 0
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
  }
}

// 3D Text effect component
const GradientText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const textRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  useEffect(() => {
    const handleMouseMove = throttle((e: MouseEvent) => {
      if (!textRef.current) return
      const { left, top, width, height } = textRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5
      setRotateX(y * 10) // Rotate based on mouse position
      setRotateY(-x * 10)
    }, 50)

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={textRef}
      className={cn("relative perspective-1000", className)}
      style={{
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  )
}

// Animated gradient button
const AnimatedGradientButton = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
  className?: string
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!buttonRef.current) return
      const { left, top } = buttonRef.current.getBoundingClientRect()
      setMousePosition({ x: e.clientX - left, y: e.clientY - top })
    }

    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return (
    <Button
      ref={buttonRef}
      onClick={onClick}
      className={cn(
        "relative overflow-hidden text-base group",
        "bg-gradient-to-r from-primary via-orange-400 to-rose-500",
        "hover:from-rose-500 hover:via-orange-400 hover:to-primary",
        "border-0 shadow-lg shadow-primary/20 h-14 px-8",
        className,
      )}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span
        className="absolute inset-0 overflow-hidden rounded-md"
        style={{
          background: `radial-gradient(circle 80px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), transparent)`,
        }}
      ></span>
      <span className="absolute inset-0 overflow-hidden rounded-md">
        <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
      </span>
    </Button>
  )
}

// Floating element with physics
const FloatingElement = ({
  children,
  className,
  delay = 0,
  amplitude = 20,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  amplitude?: number
}) => {
  const y = useMotionValue(0)
  const x = useMotionValue(0)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const startAnimation = () => {
      // Random movement with physics
      const animateY = () => {
        const newY = Math.sin(Date.now() * 0.001 + delay) * amplitude
        y.set(newY)
        requestAnimationFrame(animateY)
      }

      const animateX = () => {
        const newX = Math.sin(Date.now() * 0.0015 + delay + 1) * (amplitude * 0.5)
        x.set(newX)
        requestAnimationFrame(animateX)
      }

      requestAnimationFrame(animateY)
      requestAnimationFrame(animateX)
    }

    timeoutId = setTimeout(startAnimation, delay * 1000)

    return () => clearTimeout(timeoutId)
  }, [y, x, delay, amplitude])

  return (
    <motion.div style={{ y, x }} className={className}>
      {children}
    </motion.div>
  )
}

export default function PremiumHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isLowEnd, setIsLowEnd] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const isInView = useInView(containerRef)
  const { theme } = useTheme()

  // Mouse position for interactive effects
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring physics for mouse movement
  const smoothMouseX = useSpring(mouseX, { stiffness: 100, damping: 25 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 100, damping: 25 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  // Rotation based on mouse position
  const rotateX = useTransform(smoothMouseY, [0, 1], [5, -5])
  const rotateY = useTransform(smoothMouseX, [0, 1], [-5, 5])

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

  // Update mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = throttle((e: MouseEvent) => {
      if (!containerRef.current) return
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()

      // Normalize mouse position between 0 and 1
      const x = Math.max(0, Math.min(1, (e.clientX - left) / width))
      const y = Math.max(0, Math.min(1, (e.clientY - top) / height))

      mouseX.set(x)
      mouseY.set(y)
      setMousePosition({ x: e.clientX - left, y: e.clientY - top })
    }, 50)

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  // Interactive particle background
  useEffect(() => {
    // Skip canvas animation on low-end devices
    if (isLowEnd || isMobile || !canvasRef.current || !isInView) return

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

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas))
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
        particle.draw(ctx)
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
  }, [isLowEnd, isMobile, isInView])

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
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Interactive particle background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-70"
        style={{ display: isLowEnd || isMobile ? "none" : "block" }}
      />

      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 z-1 opacity-40"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(var(--primary-rgb), 0.3) 0%, transparent 60%)`,
          transition: "background 0.3s ease-out",
        }}
      ></div>

      {/* Futuristic grid pattern */}
      <div className="absolute inset-0 z-1 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundSize: "50px 50px",
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            transform: `perspective(1000px) rotateX(${rotateX.get() * 0.2}deg) rotateY(${rotateY.get() * 0.2}deg)`,
          }}
        ></div>
      </div>

      {/* Floating elements */}
      <FloatingElement
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[100px] z-0"
        delay={0.2}
        amplitude={30}
      />
      <FloatingElement
        className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-blue-500/10 blur-[80px] z-0"
        delay={0.5}
        amplitude={20}
      />
      <FloatingElement
        className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-purple-500/10 blur-[60px] z-0"
        delay={0.8}
        amplitude={40}
      />

      {/* Geometric shapes with parallax */}
      <motion.div
        className="absolute top-[20%] right-[15%] w-16 h-16 border border-primary/20 rounded-md z-0"
        style={{
          rotate: 45,
          x: useTransform(smoothMouseX, [0, 1], [15, -15]),
          y: useTransform(smoothMouseY, [0, 1], [15, -15]),
        }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[10%] w-24 h-24 border border-blue-500/20 rounded-full z-0"
        style={{
          x: useTransform(smoothMouseX, [0, 1], [25, -25]),
          y: useTransform(smoothMouseY, [0, 1], [25, -25]),
        }}
      />
      <motion.div
        className="absolute top-[30%] left-[20%] w-12 h-12 border border-purple-500/20 z-0"
        style={{
          rotate: 12,
          x: useTransform(smoothMouseX, [0, 1], [35, -35]),
          y: useTransform(smoothMouseY, [0, 1], [35, -35]),
        }}
      />

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
                ELEVATE YOUR DIGITAL PRESENCE
              </span>
            </motion.div>

            <GradientText className="mb-6">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="block mb-2 text-white">Transform Your</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-orange-400 to-rose-500">
                  Digital Experience
                </span>
              </motion.h1>
            </GradientText>

            <motion.p
              className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto font-light"
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
              <AnimatedGradientButton onClick={(e) => scrollToSection(e as any, "services")}>
                Explore Our Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </AnimatedGradientButton>

              <Button
                variant="outline"
                size="lg"
                className="text-base border-2 border-white/10 backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:border-white/20 h-14 px-8 group relative overflow-hidden"
                onClick={() => setIsVideoOpen(true)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="h-4 w-4 transition-transform group-hover:scale-110" /> Watch Showreel
                </span>
                <span className="absolute inset-0 overflow-hidden">
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle 80px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent)`,
                    }}
                  ></span>
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* 3D Floating Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative w-full max-w-4xl mt-8 md:mt-16 perspective-1000"
            style={{
              transform: `perspective(1000px) rotateX(${rotateX.get() * 0.5}deg) rotateY(${rotateY.get() * 0.5}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* Main project showcase */}
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm group">
              <div
                className="absolute inset-0 z-0 opacity-60"
                style={{
                  background: `linear-gradient(135deg, 
                    rgba(var(--primary-rgb), 0.2), 
                    transparent 50%, 
                    rgba(var(--secondary-rgb), 0.1))`,
                }}
              ></div>

              <div className="relative aspect-[16/8] overflow-hidden">
                <motion.div className="w-full h-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.7 }}>
                  <img
                    src="/images/develop-your-websites-using-nextjs-and-tailwindcss.png"
                    alt="Premium Web Application Design - Responsive Multi-Device Showcase"
                    className="object-cover w-full h-full"
                  />
                </motion.div>

                {/* Holographic overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                  style={{
                    background: `linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent)`,
                    backgroundSize: "200% 200%",
                    animation: "shimmer 2s infinite linear",
                  }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Modern Web Application</h3>
                <p className="text-white/80 max-w-lg">
                  Responsive dashboard design built with Next.js and Tailwind CSS, featuring data visualization and user
                  management
                </p>

                <div className="flex gap-2 mt-4">
                  <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs">Next.js</span>
                  <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs">Tailwind CSS</span>
                  <span className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs">React</span>
                </div>
              </div>

              {/* Interactive hover effect */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 backdrop-blur-sm p-4 rounded-full">
                  <ExternalLink className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>

            {/* Floating project cards */}
            <motion.div
              className="absolute -top-10 -right-10 w-48 h-32 rounded-lg overflow-hidden border border-white/10 shadow-xl z-0"
              style={{
                x: useTransform(smoothMouseX, [0, 1], [0, -10]),
                y: useTransform(smoothMouseY, [0, 1], [0, -10]),
                rotate: -5,
              }}
            >
              <img
                src="/images/jewelry-website-template.png"
                alt="Jewelry e-commerce design showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-2 left-3 text-white text-sm font-medium">E-Commerce</div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 -left-8 w-40 h-28 rounded-lg overflow-hidden border border-white/10 shadow-xl z-0"
              style={{
                x: useTransform(smoothMouseX, [0, 1], [0, 10]),
                y: useTransform(smoothMouseY, [0, 1], [0, 10]),
                rotate: 8,
              }}
            >
              <img
                src="/images/react-nextjs-web-application.png"
                alt="Agency website design showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-2 left-3 text-white text-sm font-medium">Agency Site</div>
            </motion.div>
          </motion.div>

          {/* Stats counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            {[
              { value: "250+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "15+", label: "Industry Awards" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-white/80 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="bg-white/10 backdrop-blur-sm rounded-full p-2"
          >
            <ChevronDown className="h-6 w-6 text-white/80" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Video modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-5xl p-0 bg-black border-white/10">
          <div className="aspect-video w-full">
            <div className="w-full h-full flex items-center justify-center text-white">
              <video
                autoPlay
                controls
                className="w-full h-full object-cover"
                poster="/placeholder.svg?height=1080&width=1920"
              >
                <source src="/videos/hero-background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
