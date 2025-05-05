"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, Clock, Award, Zap, Users, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { AnimatedButton } from "@/components/ui/animated-button"
import { handleSmoothScroll } from "@/lib/smooth-scroll"

export default function PremiumWelcome() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2, margin: "-100px 0px" })

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
    <section id="welcome" ref={sectionRef} className="py-24 md:py-36 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background z-0"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=50&width=50')] bg-repeat opacity-5 z-0"></div>

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
          <Badge className="px-4 py-1.5 rounded-full text-sm font-medium mb-4 inline-block bg-primary/10 text-primary border border-primary/20 shadow-lg shadow-primary/5">
            THE CARTER DIGITALS DIFFERENCE
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Elevate Your Brand With <span className="text-gradient-primary">Premium Digital Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We craft exceptional digital experiences that transform businesses, drive growth, and create lasting
            impressions in today's competitive landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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

            <motion.div variants={itemVariants} className="relative z-10">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 z-0 opacity-60"></div>
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Kabelo Kadiaka - Founder of Carter Digitals"
                  width={800}
                  height={800}
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-1 w-12 bg-primary rounded-full"></div>
                    <span className="text-sm font-medium text-primary">FOUNDER & VISIONARY</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Kabelo Kadiaka</h3>
                  <p className="text-lg text-white/90 mb-4">Digital Strategist & Creative Director</p>
                  <p className="text-white/80 max-w-lg">
                    With over a decade of experience transforming businesses through strategic digital solutions, Kabelo
                    leads our team in creating exceptional experiences that drive measurable results.
                  </p>
                </div>

                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
              </div>

              {/* Floating achievement cards */}
              <div className="absolute -top-6 -right-6 z-20">
                <Card className="premium-card bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 shadow-lg p-3 max-w-[200px] micro-bounce">
                  <CardContent className="p-0 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Award-Winning</p>
                      <p className="text-xs text-muted-foreground">Digital Excellence</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute -bottom-6 -left-6 z-20">
                <Card className="premium-card bg-gradient-to-br from-blue-500/20 to-blue-500/5 border-blue-500/30 shadow-lg p-3 max-w-[200px] micro-bounce">
                  <CardContent className="p-0 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Users className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">500+ Clients</p>
                      <p className="text-xs text-muted-foreground">Worldwide Success</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-3xl font-bold">
                Transforming Visions Into <span className="text-gradient-primary">Digital Reality</span>
              </h3>
              <p className="text-lg">
                At Carter Digitals, we don't just build websites—we craft digital experiences that elevate brands, drive
                engagement, and deliver measurable business outcomes. Our premium approach combines strategic thinking,
                cutting-edge technology, and creative excellence.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-xl font-semibold">Our Premium Approach:</h4>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 shadow-lg micro-bounce">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h5 className="font-medium">Strategic Digital Presence</h5>
                    <p className="text-muted-foreground">
                      We create purposeful digital experiences that align with your business goals and resonate with
                      your target audience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 shadow-lg micro-bounce">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Zap className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h5 className="font-medium">Conversion-Focused Design</h5>
                    <p className="text-muted-foreground">
                      Every pixel serves a purpose—to guide visitors through your sales funnel and transform them into
                      loyal customers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 shadow-lg micro-bounce">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <Shield className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h5 className="font-medium">Premium Support & Guidance</h5>
                    <p className="text-muted-foreground">
                      Our relationship extends beyond project completion with ongoing support and strategic guidance for
                      continued success.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mt-8">
              <Card className="premium-card bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/30 shadow-lg micro-bounce">
                <CardContent className="p-4 flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Fast Delivery</h4>
                    <p className="text-sm text-muted-foreground">Projects completed in days, not months</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="premium-card bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/30 shadow-lg micro-bounce">
                <CardContent className="p-4 flex items-start space-x-3">
                  <Award className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Results Focused</h4>
                    <p className="text-sm text-muted-foreground">Measurable business outcomes</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <AnimatedButton onClick={(e) => handleSmoothScroll(e as any, "services")} className="rounded-xl">
                Explore Our Premium Services <ArrowRight className="h-4 w-4 ml-1" />
              </AnimatedButton>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
