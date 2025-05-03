"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { HeartHandshake, Rocket, DollarSign, Globe, Flag } from "lucide-react"
import SectionIntro from "./section-intro"

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
  colorClass: string
}

function Feature({ icon, title, description, index, colorClass }: FeatureProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start gap-4"
    >
      <div className={`w-12 h-12 rounded-full ${colorClass} flex items-center justify-center shrink-0`}>{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  )
}

export default function WhyUs() {
  const features = [
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Personal Dev Support",
      description: "We provide ongoing support and guidance even after your project is complete.",
      colorClass: "bg-primary/10 text-primary",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Fast Turnaround",
      description:
        "We understand the importance of time and deliver projects efficiently without compromising quality.",
      colorClass: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Affordable Excellence",
      description: "Premium quality digital solutions at competitive prices tailored to your budget.",
      colorClass: "bg-green-500/10 text-green-500",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "100% Remote Execution",
      description: "Work with us from anywhere in the world with our seamless remote collaboration process.",
      colorClass: "bg-purple-500/10 text-purple-500",
    },
    {
      icon: <Flag className="h-6 w-6" />,
      title: "Premium South African Talent",
      description: "Access to top-tier South African creative professionals with global experience.",
      colorClass: "bg-orange-500/10 text-orange-500",
    },
  ]

  return (
    <section id="why-us" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <SectionIntro
          badge="WHY CHOOSE US"
          title="What Makes Us Different"
          description="We're not just another digital agency. Here's what sets us apart and makes us the right choice for your business."
          colorClass="bg-pink-500/10 text-pink-500"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              colorClass={feature.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
