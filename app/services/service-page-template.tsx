"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { handleSmoothScroll } from "@/lib/smooth-scroll"

interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

interface PricingTier {
  title: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  buttonText?: string
  colorClass?: string
}

interface Process {
  step: string
  title: string
  description: string
}

interface ServicePageProps {
  icon: React.ReactNode
  title: string
  description: string
  heroBackground?: string
  features: Feature[]
  process?: Process[]
  pricing: PricingTier[]
  faq?: { question: string; answer: string }[]
}

export default function ServicePageTemplate({
  icon,
  title,
  description,
  heroBackground = "from-background to-background/80",
  features,
  process = [
    {
      step: "01",
      title: "Discovery",
      description: "We learn about your business goals and requirements to create a tailored solution.",
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "We create mockups and plan the implementation process.",
    },
    {
      step: "03",
      title: "Development",
      description: "Our team brings your vision to life with expert execution and attention to detail.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We launch your project and provide ongoing support to ensure success.",
    },
  ],
  pricing,
  faq = [
    {
      question: "How long does the process take?",
      answer: "The timeline varies depending on the project scope, but we typically deliver within 4-8 weeks.",
    },
    {
      question: "What is your payment process?",
      answer: "We require a 50% deposit to start the project, with the remaining balance due upon completion.",
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we offer various support packages to ensure your project continues to perform optimally.",
    },
    {
      question: "Can I request revisions?",
      answer: "Yes, our pricing includes a specific number of revision rounds to ensure your complete satisfaction.",
    },
    {
      question: "What if I need additional services?",
      answer: "We can always expand the scope of your project or add new services as needed.",
    },
  ],
}: ServicePageProps) {
  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className={`relative py-20 overflow-hidden bg-gradient-to-b ${heroBackground}`}>
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--primary)_0%,_transparent_70%)]"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
              {React.cloneElement(icon as React.ReactElement, { className: "h-8 w-8 text-primary animate-pulse" })}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
              {title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-foreground/80">{description}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-6 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                onClick={(e) => handleSmoothScroll(e as any, "pricing")}
              >
                View Pricing
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 font-medium hover:bg-white/20 transition-all duration-300"
                onClick={(e) => handleSmoothScroll(e as any, "contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/20"
              >
                <div className="p-3 rounded-full bg-primary/10 inline-block mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/20 h-full"
                >
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-foreground/80">{step.description}</p>
                </motion.div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="px-4 py-1.5 rounded-full text-sm font-medium mb-4 inline-block bg-primary/10 text-primary border border-primary/20 shadow-3d">
              PRICING
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transparent Pricing for Your <span className="text-gradient-primary">Project</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the package that best fits your business needs and budget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl border-2 ${
                  tier.popular
                    ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 shadow-lg"
                    : "bg-white/5 backdrop-blur-sm border-white/20"
                } transition-all duration-300`}
              >
                {tier.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{tier.title}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                </div>
                <p className="mb-6 text-foreground/80">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full py-6 rounded-full ${
                    tier.popular
                      ? "bg-primary text-white shadow-lg shadow-primary/20 hover:shadow-primary/40"
                      : "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20"
                  } transition-all duration-300`}
                  asChild
                >
                  <Link href="/contact">{tier.buttonText || "Get Started"}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-primary/10 max-w-3xl mx-auto">
            <h4 className="text-xl font-semibold mb-3">Looking for a custom solution?</h4>
            <p className="mb-4">
              We understand that every business has unique needs. Contact us for a custom quote tailored to your
              specific requirements.
            </p>
            <Button asChild className="bg-primary text-white">
              <Link href="/contact">Request Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                <p className="text-foreground/80">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-foreground/80">
              Contact us today to discuss your project and how we can help you achieve your business goals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="px-8 py-6 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="px-8 py-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 font-medium hover:bg-white/20 transition-all duration-300"
              >
                <Link href="/services">Explore Other Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
