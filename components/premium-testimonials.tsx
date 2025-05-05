"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight, Quote, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { AnimatedButton } from "@/components/ui/animated-button"

interface Testimonial {
  id: number
  name: string
  company: string
  position: string
  image: string
  quote: string
  rating: number
  colorClass: string
  industry?: string
  results?: {
    metric: string
    value: string
    icon: React.ReactNode
    color: string
  }[]
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Founder & CEO",
    company: "Bloom Fashion Boutique",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Carter Digitals transformed our online presence completely. Our e-commerce store now converts at 3x our previous rate, and the user experience has received countless compliments from our customers. The attention to detail and strategic approach to our brand positioning exceeded all expectations.",
    rating: 5,
    colorClass: "from-primary/20 to-primary/5 border-primary/30",
    industry: "Fashion Retail",
    results: [
      {
        metric: "Conversion Rate",
        value: "+215%",
        icon: <ArrowRight className="h-4 w-4" />,
        color: "text-primary",
      },
      {
        metric: "Monthly Revenue",
        value: "+180%",
        icon: <ArrowRight className="h-4 w-4" />,
        color: "text-green-500",
      },
      {
        metric: "Customer Retention",
        value: "+65%",
        icon: <ArrowRight className="h-4 w-4" />,
        color: "text-blue-500",
      },
    ],
  },
  {
    id: 2,
    name: "Michael Thompson",
    position: "CEO",
    company: "NexTech Solutions",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Working with Carter Digitals was a game-changer for our startup. Their branding expertise helped us establish a strong identity in a competitive market. The logo and website they created perfectly capture our vision and have been instrumental in securing our Series A funding round.",
    rating: 5,
    colorClass: "from-blue-500/20 to-blue-500/5 border-blue-500/30",
    industry: "Technology",
    results: [
      {
        metric: "Investor Meetings",
        value: "+400%",
        icon: <ArrowRight className="h-4 w-4" />,
        color: "text-blue-500",
      },
      {
        metric: "Brand Recognition",
        value: "+250%",
        icon: <ArrowRight className="h-4 w-4" />,
        color: "text-primary",
      },
      {
        metric: "Funding Secured",
        value: "R12M",
        icon: <ArrowRight className="h-4 w-4" />,
        color: "text-green-500",
      },
    ],
  },
  {
    id: 3,
    name: "Jessica Williams",
    position: "Owner",
    company: "Savory Bistro & Grill",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The website Carter Digitals created for our restaurant has been instrumental in growing our business. The online reservation system works flawlessly, and the design beautifully showcases our food and atmosphere. Since launch, our bookings have increased by 85% and we've seen a significant reduction in no-shows.",
    rating: 5,
    colorClass: "from-purple-500/20 to-purple-500/5 border-purple-500/30",
    industry: "Restaurant & Hospitality",
    results: [
      {
        metric: "Online Bookings",
        value: "+85%",
        icon: <ArrowRight className="h-4 w-4" />,
        color: "text-purple-500",
      },
      {
        metric: "No-show Rate",
        value: "-60%",
        icon: <ArrowRight className="h-4 w-4" />,
        color: "text-green-500",
      },
      {
        metric: "New Customers",
        value: "+120%",
        icon: <ArrowRight className="h-4 w-4" />,
        color: "text-primary",
      },
    ],
  },
  {
    id: 4,
    name: "David Chen",
    position: "Founder",
    company: "Artisan Marketplace",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "After struggling with our previous website, Carter Digitals built us an e-commerce platform that's both beautiful and functional. Sales have increased by 200% since launch, and the CMS makes managing products a breeze. Their ongoing support has been exceptional, addressing any issues within hours.",
    rating: 5,
    colorClass: "from-green-500/20 to-green-500/5 border-green-500/30",
    industry: "E-commerce",
    results: [
      {
        metric: "Online Sales",
        value: "+200%",
        icon: <ArrowRight className="h-4 w-4" />,
        color: "text-green-500",
      },
      {
        metric: "Cart Abandonment",
        value: "-65%",
        icon: <ArrowRight className="h-4 w-4" />,
        color: "text-blue-500",
      },
      {
        metric: "Average Order Value",
        value: "+45%",
        icon: <ArrowRight className="h-4 w-4" />,
        color: "text-primary",
      },
    ],
  },
]

export default function PremiumTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const [isHovering, setIsHovering] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2, margin: "-100px 0px" })

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (autoplay && !isHovering) {
      autoplayRef.current = setInterval(nextTestimonial, 8000)
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 md:py-36 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background z-0"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=50')] bg-repeat opacity-5 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background to-transparent z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] z-0"></div>
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px] z-0"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-purple-500/5 blur-[80px] z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="px-4 py-1.5 rounded-full text-sm font-medium mb-4 inline-block bg-orange-500/10 text-orange-500 border border-orange-500/20 shadow-lg shadow-orange-500/5">
            CLIENT SUCCESS STORIES
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Transforming <span className="text-gradient-primary">Digital Experiences</span> Into Results
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our clients don't just get beautiful designs—they get measurable business outcomes that drive growth and
            success.
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="relative"
              >
                <motion.div
                  variants={itemVariants}
                  className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl opacity-50 z-0"
                ></motion.div>
                <motion.div
                  variants={itemVariants}
                  className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl opacity-50 z-0"
                ></motion.div>

                <Card
                  className={cn(
                    "premium-card p-1 overflow-visible",
                    "bg-gradient-to-br",
                    testimonials[activeIndex].colorClass,
                    "shadow-2xl",
                  )}
                >
                  <CardContent className="glassmorphism p-8 rounded-2xl relative overflow-hidden">
                    {/* Decorative quote marks */}
                    <div className="absolute top-4 right-4 text-primary/10">
                      <Quote className="h-24 w-24 opacity-20" />
                    </div>

                    <div className="mb-8 flex justify-between items-start relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/10 shadow-lg">
                          <Image
                            src={testimonials[activeIndex].image || "/placeholder.svg"}
                            alt={testimonials[activeIndex].name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-xl">{testimonials[activeIndex].name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonials[activeIndex].position}</p>
                          <p className="text-sm font-medium">{testimonials[activeIndex].company}</p>
                          <Badge variant="outline" className="mt-1 text-xs">
                            {testimonials[activeIndex].industry}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-5 w-5",
                              i < testimonials[activeIndex].rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-muted-foreground",
                            )}
                          />
                        ))}
                      </div>
                    </div>

                    <blockquote className="text-xl italic mb-8 leading-relaxed relative z-10">
                      "{testimonials[activeIndex].quote}"
                    </blockquote>

                    {testimonials[activeIndex].results && (
                      <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mt-8 relative z-10">
                        {testimonials[activeIndex].results.map((result, idx) => (
                          <div
                            key={idx}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-lg"
                          >
                            <div className={`text-2xl font-bold ${result.color} mb-1`}>{result.value}</div>
                            <div className="text-sm text-muted-foreground">{result.metric}</div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {/* Animated gradient border */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden z-0">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="space-y-8"
              >
                <motion.div variants={itemVariants}>
                  <h3 className="text-3xl font-bold mb-4">Real Results for Real Businesses</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Don't just take our word for it. Here's what our clients have achieved after working with us. We
                    measure our success by the impact we make on your business.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "w-3 h-3 rounded-full transition-all duration-300",
                        index === activeIndex
                          ? "bg-primary w-10"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
                      )}
                      onClick={() => handleManualNavigation(() => setActiveIndex(index))}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </motion.div>

                <motion.div variants={itemVariants} className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full premium-btn-outline micro-bounce h-12 w-12"
                    onClick={() => handleManualNavigation(prevTestimonial)}
                  >
                    <ChevronLeft className="h-5 w-5" />
                    <span className="sr-only">Previous testimonial</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full premium-btn-outline micro-bounce h-12 w-12"
                    onClick={() => handleManualNavigation(nextTestimonial)}
                  >
                    <ChevronRight className="h-5 w-5" />
                    <span className="sr-only">Next testimonial</span>
                  </Button>
                </motion.div>

                <motion.div variants={itemVariants} className="pt-8">
                  <AnimatedButton
                    gradientFrom="from-orange-500"
                    gradientTo="to-rose-500"
                    glowColor="rgba(255, 140, 0, 0.5)"
                    className="rounded-xl"
                  >
                    Become Our Next Success Story <ArrowRight className="h-4 w-4 ml-1" />
                  </AnimatedButton>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-semibold mb-10">Trusted By Industry Leaders</h3>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative w-32 h-32 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-full blur-xl opacity-70"></div>
                <div className="absolute inset-0 border border-white/10 rounded-full"></div>
                <Image
                  src={`/placeholder-logo.svg?height=128&width=128`}
                  alt={`Client logo ${i}`}
                  fill
                  className="object-contain relative z-10 p-4"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
