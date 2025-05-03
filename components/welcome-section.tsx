"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Shield, Clock, Award, CheckCircle2 } from "lucide-react"

export default function WelcomeSection() {
  // Smooth scroll function for CTA button
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
      id="welcome"
      className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 inline-block">
              THE CARTER DIGITALS DIFFERENCE
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Stop Losing Customers to Outdated Digital Experiences
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Your business deserves a digital presence that works as hard as you do. One that turns visitors into
            customers while you sleep.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Kabelo Kadiaka - Founder of Carter Digitals"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-full z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Meet <span className="text-gradient">Kabelo Kadiaka</span>, Your Digital Problem Solver
            </h3>
            <p className="text-lg">
              I've seen too many businesses struggle with websites that look outdated, load slowly, and fail to convert
              visitors. As the founder of Carter Digitals, I've helped hundreds of entrepreneurs transform their digital
              presence from a liability into their strongest asset.
            </p>

            <div className="space-y-4 mt-4">
              <h4 className="text-xl font-semibold">How I Solve Your Digital Problems:</h4>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <p className="font-medium">Replacing outdated designs with modern, conversion-focused experiences</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="font-medium">Fixing slow-loading websites that frustrate your visitors</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-medium">Creating clear messaging that speaks directly to your customers' needs</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <p className="font-medium">Building strategic digital assets that generate leads while you sleep</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
                <CardContent className="p-4 flex items-start space-x-3">
                  <Zap className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Fast Delivery</h4>
                    <p className="text-sm text-muted-foreground">Get your project completed in days, not months</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
                <CardContent className="p-4 flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-blue-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Results Focused</h4>
                    <p className="text-sm text-muted-foreground">Designs that convert visitors to customers</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
                <CardContent className="p-4 flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-purple-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Ongoing Support</h4>
                    <p className="text-sm text-muted-foreground">I'm with you long after your project launches</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20">
                <CardContent className="p-4 flex items-start space-x-3">
                  <Award className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Affordable Rates</h4>
                    <p className="text-sm text-muted-foreground">Premium quality without the premium price</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              className="mt-6 btn-3d bg-gradient-to-r from-primary to-orange-400 hover:from-orange-400 hover:to-primary"
              onClick={(e) => scrollToSection(e as any, "services")}
            >
              <span className="flex items-center gap-2">
                See How I Can Help You <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
