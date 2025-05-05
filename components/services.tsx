"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Globe, Palette, FileImage, Presentation, FileText, PenTool } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import SectionIntro from "./section-intro"
import { handleSmoothScroll } from "@/lib/smooth-scroll"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  painPoint: string
  solution: string
  delay: number
  colorClass: string
}

function ServiceCard({ icon, title, description, painPoint, solution, delay, colorClass }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <Card
        className={`card-hover card-3d h-full border-2 ${colorClass}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader>
          <motion.div
            className={`w-12 h-12 rounded-full ${colorClass} flex items-center justify-center mb-4`}
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardDescription className="text-base">{description}</CardDescription>

          <div className="space-y-2">
            <div className="bg-destructive/10 text-destructive p-3 rounded-md text-sm">
              <strong>Pain Point:</strong> {painPoint}
            </div>
            <div className={`${colorClass} p-3 rounded-md text-sm`}>
              <strong>Our Solution:</strong> {solution}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-primary">
            Learn more →
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default function Services() {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Website Design & Development",
      description: "Custom websites that are beautiful, functional, and optimized for conversions and SEO.",
      painPoint: "Outdated websites that fail to convert visitors into customers, costing you sales every day.",
      solution: "Conversion-focused designs that guide visitors through your sales funnel with clear CTAs.",
      colorClass: "border-primary/20 bg-primary/5 text-primary",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Logo + Brand Kits",
      description: "Professional brand identity design that captures your essence and resonates with your audience.",
      painPoint: "Generic branding that fails to differentiate your business from competitors.",
      solution: "Distinctive visual identity that makes your brand instantly recognizable and memorable.",
      colorClass: "border-blue-500/20 bg-blue-500/5 text-blue-500",
    },
    {
      icon: <FileImage className="h-6 w-6" />,
      title: "Flyers & Digital Media",
      description: "Eye-catching digital and print materials that effectively communicate your message.",
      painPoint: "Marketing materials that get ignored because they lack visual appeal and clarity.",
      solution: "Attention-grabbing designs that communicate your value proposition at a glance.",
      colorClass: "border-purple-500/20 bg-purple-500/5 text-purple-500",
    },
    {
      icon: <Presentation className="h-6 w-6" />,
      title: "Professional Decks & Presentations",
      description: "Compelling presentations that help you pitch your ideas with confidence and style.",
      painPoint: "Lost opportunities due to unprofessional presentations that fail to impress stakeholders.",
      solution: "Polished, persuasive presentations that help you secure deals and funding.",
      colorClass: "border-green-500/20 bg-green-500/5 text-green-500",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "CV/Resume Design",
      description: "Stand out from the crowd with professionally designed resumes that get you noticed.",
      painPoint: "Qualified candidates being overlooked because their resume doesn't stand out.",
      solution: "Eye-catching resume designs that highlight your skills and experience effectively.",
      colorClass: "border-pink-500/20 bg-pink-500/5 text-pink-500",
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Copywriting & SEO Sales Copy",
      description: "Persuasive content that drives engagement, conversions, and search engine rankings.",
      painPoint: "Website content that fails to engage visitors or rank well in search results.",
      solution: "Compelling copy that speaks to your customers' needs while boosting your SEO performance.",
      colorClass: "border-orange-500/20 bg-orange-500/5 text-orange-500",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <SectionIntro
          badge="OUR SERVICES"
          title="Digital Solutions That Drive Results"
          description="We solve digital problems that are costing you customers and revenue. Our comprehensive range of services helps your business stand out and convert more effectively."
          colorClass="bg-blue-500/10 text-blue-500"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              painPoint={service.painPoint}
              solution={service.solution}
              delay={index}
              colorClass={service.colorClass}
            />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="btn-3d bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500"
            onClick={(e) => handleSmoothScroll(e as any, "contact")}
          >
            Discuss Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
