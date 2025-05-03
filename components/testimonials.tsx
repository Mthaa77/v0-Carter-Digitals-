"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionIntro from "./section-intro"

interface Testimonial {
  id: number
  name: string
  company: string
  image: string
  quote: string
  rating: number
  colorClass: string
  position?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Founder",
    company: "Fashion Boutique",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Carter Digitals transformed our online presence. Our new website not only looks stunning but has significantly increased our conversion rates. The team was professional, responsive, and delivered beyond our expectations.",
    rating: 5,
    colorClass: "from-primary/20 to-primary/5 border-primary/30",
  },
  {
    id: 2,
    name: "Michael Thompson",
    position: "CEO",
    company: "Tech Startup",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Working with Carter Digitals was a game-changer for our startup. Their branding expertise helped us establish a strong identity in a competitive market. The logo and website they created perfectly capture our vision.",
    rating: 5,
    colorClass: "from-blue-500/20 to-blue-500/5 border-blue-500/30",
  },
  {
    id: 3,
    name: "Jessica Williams",
    position: "Owner",
    company: "Restaurant Owner",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The website Carter Digitals created for our restaurant has been instrumental in growing our business. The online reservation system works flawlessly, and the design beautifully showcases our food and atmosphere.",
    rating: 4,
    colorClass: "from-purple-500/20 to-purple-500/5 border-purple-500/30",
  },
  {
    id: 4,
    name: "David Chen",
    position: "Founder",
    company: "E-commerce Store",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "After struggling with our previous website, Carter Digitals built us an e-commerce platform that's both beautiful and functional. Sales have increased by 200% since launch, and the CMS makes managing products a breeze.",
    rating: 5,
    colorClass: "from-green-500/20 to-green-500/5 border-green-500/30",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const [isHovering, setIsHovering] = useState(false)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (autoplay && !isHovering) {
      autoplayRef.current = setInterval(nextTestimonial, 5000)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, isHovering])

  const handleManualNavigation = (callback: () => void) => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      setAutoplay(false)
    }
    callback()
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionIntro
          badge="CLIENT SUCCESS STORIES"
          title="Real Results for Real Businesses"
          description="Don't just take our word for it. Here's what our clients have achieved after working with us."
          colorClass="bg-orange-500/10 text-orange-500"
        />

        <div className="relative max-w-6xl mx-auto mt-12">
          {/* Background decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none"></div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary/20"></div>
                  <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-blue-500/20"></div>

                  <Card className={`bg-gradient-to-br ${testimonials[activeIndex].colorClass} p-1 card-3d`}>
                    <CardContent className="bg-background/95 backdrop-blur p-8 rounded-lg">
                      <div className="mb-6 flex justify-between items-start">
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white dark:border-gray-800">
                            <Image
                              src={testimonials[activeIndex].image || "/placeholder.svg"}
                              alt={testimonials[activeIndex].name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{testimonials[activeIndex].name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonials[activeIndex].position}</p>
                            <p className="text-sm font-medium">{testimonials[activeIndex].company}</p>
                          </div>
                        </div>
                        <div className="text-primary">
                          <Quote className="h-10 w-10 opacity-20" />
                        </div>
                      </div>

                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonials[activeIndex].rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>

                      <blockquote className="text-lg italic mb-6">"{testimonials[activeIndex].quote}"</blockquote>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">What Our Clients Are Saying</h3>
                  <p className="text-muted-foreground">
                    We've helped businesses of all sizes transform their digital presence and achieve real results.
                    Here's what some of our happy clients have to say about working with Carter Digitals.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === activeIndex
                            ? "bg-primary w-8"
                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }`}
                        onClick={() => handleManualNavigation(() => setActiveIndex(index))}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full btn-3d"
                      onClick={() => handleManualNavigation(prevTestimonial)}
                    >
                      <ChevronLeft className="h-5 w-5" />
                      <span className="sr-only">Previous testimonial</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full btn-3d"
                      onClick={() => handleManualNavigation(nextTestimonial)}
                    >
                      <ChevronRight className="h-5 w-5" />
                      <span className="sr-only">Next testimonial</span>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-20">
            <h3 className="text-xl font-semibold text-center mb-8">Trusted By</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="relative w-24 h-24 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                >
                  <Image
                    src={`/placeholder-logo.svg?height=100&width=100`}
                    alt={`Client logo ${i}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
