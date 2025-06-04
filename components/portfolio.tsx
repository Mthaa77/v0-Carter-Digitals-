"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView, useMotionValue } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, X, ExternalLink, Maximize2, Play, Pause } from "lucide-react"
import SectionIntro from "./section-intro"

type PortfolioCategory = "all" | "web" | "logo" | "flyer" | "presentation"

interface PortfolioItem {
  id: number
  title: string
  category: Exclude<PortfolioCategory, "all">
  image: string
  description: string
  client: string
  challenge: string
  solution: string
  results?: string
  colorClass: string
  technologies?: string[]
  year: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "E-commerce Website",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    description: "A fully responsive e-commerce website with custom product filtering and checkout.",
    client: "Fashion Boutique",
    challenge:
      "The client was losing sales with an outdated website that wasn't mobile-friendly and had a complicated checkout process.",
    solution:
      "We designed a modern, responsive e-commerce platform with streamlined product navigation and a simplified checkout flow.",
    results: "150% increase in online sales within 3 months and 65% reduction in cart abandonment rate.",
    colorClass: "bg-primary/10 text-primary border-primary/30",
    technologies: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    year: "2024",
  },
  {
    id: 2,
    title: "Corporate Identity",
    category: "logo",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complete brand identity including logo, business cards, and letterhead.",
    client: "Tech Startup",
    challenge:
      "The startup struggled to differentiate itself in a crowded market with inconsistent branding across platforms.",
    solution: "We created a distinctive visual identity with a memorable logo and comprehensive brand guidelines.",
    results: "Successfully secured Series A funding with new brand identity and increased brand recognition by 40%.",
    colorClass: "bg-blue-500/10 text-blue-500 border-blue-500/30",
    technologies: ["Adobe Illustrator", "Figma", "Brand Strategy"],
    year: "2024",
  },
  {
    id: 3,
    title: "Event Flyer",
    category: "flyer",
    image: "/placeholder.svg?height=600&width=800",
    description: "Eye-catching event flyer design with QR code integration.",
    client: "Music Festival",
    challenge:
      "Previous event marketing materials failed to generate excitement or convey the festival's unique atmosphere.",
    solution: "We designed vibrant, attention-grabbing flyers with integrated QR codes linking to ticket sales.",
    results: "Event sold out within 48 hours of flyer distribution, 300% increase in social media mentions.",
    colorClass: "bg-purple-500/10 text-purple-500 border-purple-500/30",
    technologies: ["Adobe Photoshop", "InDesign", "QR Integration"],
    year: "2023",
  },
  {
    id: 4,
    title: "Investor Pitch Deck",
    category: "presentation",
    image: "/placeholder.svg?height=600&width=800",
    description: "Professional pitch deck design with custom animations and infographics.",
    client: "Health Tech Startup",
    challenge:
      "The company's technical founders struggled to communicate their complex solution in an engaging, investor-friendly way.",
    solution:
      "We created a visually compelling presentation that simplified complex concepts with custom infographics.",
    results:
      "Secured R5 million in funding after presentation, with investors specifically praising the clarity of communication.",
    colorClass: "bg-green-500/10 text-green-500 border-green-500/30",
    technologies: ["PowerPoint", "After Effects", "Data Visualization"],
    year: "2024",
  },
  {
    id: 5,
    title: "Restaurant Website",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    description: "Responsive website with online reservation system and menu management.",
    client: "Gourmet Restaurant",
    challenge:
      "The restaurant was losing potential customers who couldn't easily view menus or make reservations on mobile devices.",
    solution:
      "We built a mobile-first website with an intuitive reservation system and visually appealing menu displays.",
    results: "30% increase in bookings within the first month and 45% reduction in phone call inquiries.",
    colorClass: "bg-pink-500/10 text-pink-500 border-pink-500/30",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
    year: "2023",
  },
  {
    id: 6,
    title: "Product Brochure",
    category: "flyer",
    image: "/placeholder.svg?height=600&width=800",
    description: "Multi-page product brochure with detailed specifications and pricing.",
    client: "Manufacturing Company",
    challenge:
      "Technical product information was presented in a boring, text-heavy format that customers found difficult to understand.",
    solution:
      "We redesigned their product materials with visual hierarchy, infographics, and compelling product photography.",
    results: "Generated 45 qualified leads from brochure distribution and reduced sales cycle by 20%.",
    colorClass: "bg-orange-500/10 text-orange-500 border-orange-500/30",
    technologies: ["InDesign", "Photoshop", "3D Rendering"],
    year: "2023",
  },
  {
    id: 7,
    title: "SaaS Dashboard",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    description: "Modern analytics dashboard with real-time data visualization.",
    client: "Analytics Platform",
    challenge: "Complex data needed to be presented in an intuitive, actionable format for non-technical users.",
    solution: "We designed a clean, modern dashboard with interactive charts and customizable widgets.",
    results: "User engagement increased by 85% and customer retention improved by 40%.",
    colorClass: "bg-cyan-500/10 text-cyan-500 border-cyan-500/30",
    technologies: ["React", "D3.js", "TypeScript", "GraphQL"],
    year: "2024",
  },
  {
    id: 8,
    title: "Mobile App Design",
    category: "presentation",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complete mobile app UI/UX design with interactive prototypes.",
    client: "Fitness Startup",
    challenge: "Creating an engaging fitness app that motivates users to maintain their workout routines.",
    solution: "We designed a gamified interface with social features and personalized workout recommendations.",
    results: "App achieved 100K downloads in first month with 4.8-star rating on app stores.",
    colorClass: "bg-indigo-500/10 text-indigo-500 border-indigo-500/30",
    technologies: ["Figma", "Principle", "Lottie", "User Research"],
    year: "2024",
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all")
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const filteredItems =
    activeCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredItems.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay, filteredItems.length])

  useEffect(() => {
    if (selectedItem) {
      const index = filteredItems.findIndex((item) => item.id === selectedItem.id)
      setCurrentIndex(index)
    }
  }, [selectedItem, filteredItems])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      mouseX.set((e.clientX - rect.left - rect.width / 2) / 20)
      mouseY.set((e.clientY - rect.top - rect.height / 2) / 20)
    }
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const categoryColors = {
    all: "from-primary to-blue-500",
    web: "from-primary to-violet-500",
    logo: "from-blue-500 to-sky-400",
    flyer: "from-purple-500 to-pink-400",
    presentation: "from-green-500 to-emerald-400",
  }

  const categoryBgColors = {
    web: "bg-primary text-white",
    logo: "bg-blue-500 text-white",
    flyer: "bg-purple-500 text-white",
    presentation: "bg-green-500 text-white",
  }

  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 bg-background relative overflow-hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Futuristic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary),0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary),0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        {/* Particle Effects */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <SectionIntro
            badge="OUR PORTFOLIO"
            title="Immersive Project Showcase"
            description="Experience our work in a whole new dimension. Navigate through our premium projects with our futuristic 3D carousel."
            colorClass="bg-purple-500/10 text-purple-500"
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="p-2 glassmorphism rounded-full backdrop-blur-xl border border-white/20">
            <div className="flex gap-2">
              {(["all", "web", "logo", "flyer", "presentation"] as const).map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category ? "text-white shadow-lg" : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeCategory === category && (
                    <motion.div
                      layoutId="activeCategory"
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${categoryColors[category]}`}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 capitalize">{category === "all" ? "All Work" : category}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3D Carousel Container */}
        <motion.div
          className="relative h-[600px] perspective-1000"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Carousel Controls */}
          <div className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2">
            <motion.button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full glassmorphism backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>

          <div className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2">
            <motion.button
              onClick={goToNext}
              className="w-12 h-12 rounded-full glassmorphism backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Auto-play Control */}
          <div className="absolute top-4 right-4 z-20">
            <motion.button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="w-10 h-10 rounded-full glassmorphism backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </motion.button>
          </div>

          {/* 3D Carousel Items */}
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {filteredItems.map((item, index) => {
                const offset = index - currentIndex
                const absOffset = Math.abs(offset)
                const isActive = index === currentIndex

                return (
                  <motion.div
                    key={item.id}
                    className="absolute cursor-pointer"
                    style={{
                      zIndex: isActive ? 10 : 5 - absOffset,
                    }}
                    initial={{
                      rotateY: offset * 45,
                      x: offset * 300,
                      z: -absOffset * 200,
                      opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.3,
                      scale: isActive ? 1 : 1 - absOffset * 0.1,
                    }}
                    animate={{
                      rotateY: offset * 45,
                      x: offset * 300,
                      z: -absOffset * 200,
                      opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.3,
                      scale: isActive ? 1 : 1 - absOffset * 0.1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.8,
                    }}
                    onClick={() => isActive && setSelectedItem(item)}
                    whileHover={
                      isActive
                        ? {
                            scale: 1.05,
                            rotateX: 5,
                            y: -10,
                          }
                        : {}
                    }
                  >
                    <Card className="w-80 h-96 overflow-hidden border-0 bg-transparent shadow-none">
                      <div className="relative w-full h-full glassmorphism backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden group">
                        {/* Holographic Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Image Container */}
                        <div className="relative h-64 w-full overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />

                          {/* Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                          {/* Category Badge */}
                          <div className="absolute top-4 right-4">
                            <Badge className={`${categoryBgColors[item.category]} shadow-lg backdrop-blur-sm`}>
                              {item.category}
                            </Badge>
                          </div>

                          {/* Year Badge */}
                          <div className="absolute top-4 left-4">
                            <Badge
                              variant="outline"
                              className="bg-black/20 border-white/20 text-white backdrop-blur-sm"
                            >
                              {item.year}
                            </Badge>
                          </div>
                        </div>

                        {/* Content */}
                        <CardContent className="p-6 relative">
                          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-300 mb-3">{item.client}</p>
                          <p className="text-sm text-gray-400 line-clamp-2 mb-4">{item.description}</p>

                          {/* Technologies */}
                          {item.technologies && (
                            <div className="flex flex-wrap gap-1 mb-4">
                              {item.technologies.slice(0, 3).map((tech) => (
                                <Badge
                                  key={tech}
                                  variant="outline"
                                  className="text-xs bg-white/5 border-white/20 text-white"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          )}

                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setSelectedItem(item)
                                }}
                              >
                                View Details
                              </Button>
                            </motion.div>
                          )}
                        </CardContent>

                        {/* Shine Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {filteredItems.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-white/30 hover:bg-white/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Project Counter */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-muted-foreground">
            Project <span className="text-primary font-bold">{currentIndex + 1}</span> of{" "}
            <span className="text-primary font-bold">{filteredItems.length}</span>
          </p>
        </motion.div>
      </div>

      {/* Enhanced Modal */}
      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent
          className={`max-w-6xl p-0 overflow-hidden glassmorphism backdrop-blur-xl border border-white/20 ${
            isFullscreen ? "fixed inset-0 rounded-none max-h-screen h-screen" : "rounded-3xl"
          }`}
        >
          {selectedItem && (
            <div className={`relative ${isFullscreen ? "h-full flex flex-col" : ""}`}>
              {/* Modal Controls */}
              <div className="absolute top-6 right-6 z-50 flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full glassmorphism backdrop-blur-xl border border-white/20 text-white hover:bg-white/10"
                  onClick={() => setIsFullscreen(!isFullscreen)}
                >
                  <Maximize2 className="h-4 w-4" />
                </Button>
                <DialogClose asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-10 w-10 rounded-full glassmorphism backdrop-blur-xl border border-white/20 text-white hover:bg-white/10"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </DialogClose>
              </div>

              <div className={`${isFullscreen ? "flex-grow overflow-auto" : ""}`}>
                {/* Hero Image */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                  <div className={`relative ${isFullscreen ? "h-[50vh]" : "h-[400px]"} w-full`}>
                    <Image
                      src={selectedItem.image || "/placeholder.svg"}
                      alt={selectedItem.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                    <div>
                      <div className="flex gap-2 mb-4">
                        <Badge className={`${categoryBgColors[selectedItem.category]}`}>{selectedItem.category}</Badge>
                        <Badge variant="outline" className="bg-white/5 border-white/20">
                          {selectedItem.year}
                        </Badge>
                      </div>
                      <DialogTitle className="text-4xl mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {selectedItem.title}
                      </DialogTitle>
                      <DialogDescription className="text-xl text-gray-300">{selectedItem.client}</DialogDescription>
                    </div>
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 glassmorphism backdrop-blur-xl border border-white/20 text-white hover:bg-white/10"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Visit Project</span>
                    </Button>
                  </div>

                  {/* Technologies */}
                  {selectedItem.technologies && (
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-3 text-white">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="bg-white/5 border-white/20 text-white">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <motion.div
                      className="p-6 rounded-2xl glassmorphism backdrop-blur-xl border border-red-500/20 relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full blur-2xl" />
                      <h4 className="font-semibold text-xl mb-3 flex items-center gap-2 text-white">
                        <span className="inline-block w-2 h-2 rounded-full bg-red-500" />
                        The Challenge
                      </h4>
                      <p className="text-gray-300">{selectedItem.challenge}</p>
                    </motion.div>

                    <motion.div
                      className="p-6 rounded-2xl glassmorphism backdrop-blur-xl border border-primary/20 relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
                      <h4 className="font-semibold text-xl mb-3 flex items-center gap-2 text-white">
                        <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                        Our Solution
                      </h4>
                      <p className="text-gray-300">{selectedItem.solution}</p>
                    </motion.div>
                  </div>

                  {/* Results */}
                  {selectedItem.results && (
                    <motion.div
                      className="p-6 rounded-2xl glassmorphism backdrop-blur-xl border border-green-500/20 relative overflow-hidden mb-6"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full blur-2xl" />
                      <h4 className="font-semibold text-xl mb-3 flex items-center gap-2 text-white">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                        Results Achieved
                      </h4>
                      <p className="text-gray-300">{selectedItem.results}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
