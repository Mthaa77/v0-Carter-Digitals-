"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import {
  Globe,
  Palette,
  FileImage,
  Presentation,
  FileText,
  PenTool,
  ShoppingCart,
  Smartphone,
  Zap,
  Search,
  ArrowRight,
  Check,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import SectionIntro from "./section-intro"
import { cn } from "@/lib/utils"

interface ServiceFeature {
  title: string
  description: string
  icon: React.ReactNode
}

interface ServiceExample {
  title: string
  description: string
  features: string[]
  image: string
  color: string
}

interface Service {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  features: ServiceFeature[]
  examples: ServiceExample[]
}

const services: Service[] = [
  {
    id: "websites",
    title: "Website Design",
    description: "Custom websites that convert visitors into customers",
    icon: <Globe className="h-6 w-6" />,
    color: "from-primary to-orange-400",
    features: [
      {
        title: "Responsive Design",
        description: "Websites that look amazing on all devices",
        icon: <Smartphone className="h-5 w-5" />,
      },
      {
        title: "Fast Loading",
        description: "Optimized for speed to reduce bounce rates",
        icon: <Zap className="h-5 w-5" />,
      },
      {
        title: "SEO Friendly",
        description: "Built to rank higher in search engines",
        icon: <Search className="h-5 w-5" />,
      },
    ],
    examples: [
      {
        title: "Business Website",
        description: "Professional website for established businesses",
        features: ["5-7 pages", "Contact form", "About section", "Services showcase"],
        image: "/placeholder.svg?height=300&width=400",
        color: "border-primary/30 bg-primary/5",
      },
      {
        title: "Portfolio Site",
        description: "Showcase your work with style",
        features: ["Project gallery", "Testimonials", "Bio section", "Contact page"],
        image: "/placeholder.svg?height=300&width=400",
        color: "border-blue-500/30 bg-blue-500/5",
      },
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Online stores that drive sales and growth",
    icon: <ShoppingCart className="h-6 w-6" />,
    color: "from-blue-500 to-purple-500",
    features: [
      {
        title: "Secure Checkout",
        description: "Safe and simple payment processing",
        icon: <Check className="h-5 w-5" />,
      },
      {
        title: "Inventory Management",
        description: "Easy product management system",
        icon: <ShoppingCart className="h-5 w-5" />,
      },
      {
        title: "Mobile Shopping",
        description: "Optimized for shopping on any device",
        icon: <Smartphone className="h-5 w-5" />,
      },
    ],
    examples: [
      {
        title: "Boutique Store",
        description: "Perfect for small to medium inventory",
        features: ["Product catalog", "Shopping cart", "Payment gateway", "Order tracking"],
        image: "/placeholder.svg?height=300&width=400",
        color: "border-purple-500/30 bg-purple-500/5",
      },
      {
        title: "Large Marketplace",
        description: "Multi-vendor platform for larger businesses",
        features: ["Vendor management", "Advanced filtering", "User accounts", "Reviews system"],
        image: "/placeholder.svg?height=300&width=400",
        color: "border-green-500/30 bg-green-500/5",
      },
    ],
  },
  {
    id: "branding",
    title: "Branding",
    description: "Distinctive visual identity that makes you memorable",
    icon: <Palette className="h-6 w-6" />,
    color: "from-green-500 to-teal-500",
    features: [
      {
        title: "Logo Design",
        description: "Unique, memorable logo creation",
        icon: <Palette className="h-5 w-5" />,
      },
      {
        title: "Brand Guidelines",
        description: "Comprehensive style guide for your brand",
        icon: <FileText className="h-5 w-5" />,
      },
      {
        title: "Visual Identity",
        description: "Cohesive look across all platforms",
        icon: <FileImage className="h-5 w-5" />,
      },
    ],
    examples: [
      {
        title: "Startup Branding",
        description: "Complete brand package for new businesses",
        features: ["Logo design", "Color palette", "Typography", "Brand guidelines"],
        image: "/placeholder.svg?height=300&width=400",
        color: "border-teal-500/30 bg-teal-500/5",
      },
      {
        title: "Rebranding",
        description: "Refresh your existing brand identity",
        features: ["Brand audit", "Logo redesign", "Updated guidelines", "Transition strategy"],
        image: "/placeholder.svg?height=300&width=400",
        color: "border-pink-500/30 bg-pink-500/5",
      },
    ],
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Materials that get your message across effectively",
    icon: <FileImage className="h-6 w-6" />,
    color: "from-purple-500 to-pink-500",
    features: [
      {
        title: "Social Media",
        description: "Eye-catching graphics for social platforms",
        icon: <FileImage className="h-5 w-5" />,
      },
      {
        title: "Print Materials",
        description: "Brochures, flyers, and business cards",
        icon: <FileText className="h-5 w-5" />,
      },
      {
        title: "Digital Ads",
        description: "Banners and advertisements that convert",
        icon: <Zap className="h-5 w-5" />,
      },
    ],
    examples: [
      {
        title: "Campaign Package",
        description: "Cohesive materials for marketing campaigns",
        features: ["Social media graphics", "Email templates", "Landing page", "Digital ads"],
        image: "/placeholder.svg?height=300&width=400",
        color: "border-indigo-500/30 bg-indigo-500/5",
      },
      {
        title: "Event Promotion",
        description: "Materials to promote your next event",
        features: ["Event flyers", "Social announcements", "Tickets design", "Follow-up materials"],
        image: "/placeholder.svg?height=300&width=400",
        color: "border-amber-500/30 bg-amber-500/5",
      },
    ],
  },
  {
    id: "content",
    title: "Content Creation",
    description: "Compelling content that engages and converts",
    icon: <PenTool className="h-6 w-6" />,
    color: "from-amber-500 to-yellow-500",
    features: [
      {
        title: "Copywriting",
        description: "Persuasive text that drives action",
        icon: <PenTool className="h-5 w-5" />,
      },
      {
        title: "SEO Content",
        description: "Content optimized for search engines",
        icon: <Search className="h-5 w-5" />,
      },
      {
        title: "Blog Articles",
        description: "Engaging posts that build authority",
        icon: <FileText className="h-5 w-5" />,
      },
    ],
    examples: [
      {
        title: "Website Copy",
        description: "Professional copy for your entire website",
        features: ["Homepage messaging", "About page", "Services descriptions", "Call-to-actions"],
        image: "/placeholder.svg?height=300&width=400",
        color: "border-yellow-500/30 bg-yellow-500/5",
      },
      {
        title: "Content Strategy",
        description: "Ongoing content creation and management",
        features: ["Blog calendar", "SEO articles", "Email newsletters", "Social media content"],
        image: "/placeholder.svg?height=300&width=400",
        color: "border-cyan-500/30 bg-cyan-500/5",
      },
    ],
  },
  {
    id: "presentations",
    title: "Presentations",
    description: "Slide decks that impress and persuade",
    icon: <Presentation className="h-6 w-6" />,
    color: "from-cyan-500 to-blue-500",
    features: [
      {
        title: "Pitch Decks",
        description: "Compelling presentations for investors",
        icon: <Presentation className="h-5 w-5" />,
      },
      {
        title: "Sales Decks",
        description: "Presentations that help close deals",
        icon: <ShoppingCart className="h-5 w-5" />,
      },
      {
        title: "Training Materials",
        description: "Educational presentations for your team",
        icon: <FileText className="h-5 w-5" />,
      },
    ],
    examples: [
      {
        title: "Investor Pitch",
        description: "Presentation designed to secure funding",
        features: ["Problem/solution slides", "Market analysis", "Financial projections", "Team bios"],
        image: "/placeholder.svg?height=300&width=400",
        color: "border-blue-500/30 bg-blue-500/5",
      },
      {
        title: "Corporate Presentation",
        description: "Professional slides for business use",
        features: ["Company overview", "Product/service showcase", "Case studies", "Contact information"],
        image: "/placeholder.svg?height=300&width=400",
        color: "border-violet-500/30 bg-violet-500/5",
      },
    ],
  },
]

export default function InteractiveServices() {
  const [activeService, setActiveService] = useState(services[0].id)
  const [hoveredExample, setHoveredExample] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

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

  const currentService = services.find((service) => service.id === activeService) || services[0]

  return (
    <section id="services" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionIntro
          badge="OUR SERVICES"
          title="What Can We Create For You?"
          description="Explore our interactive services showcase to discover how we can transform your digital presence with modern, conversion-focused solutions."
          colorClass="bg-blue-500/10 text-blue-500"
        />

        <div ref={containerRef} className="mt-12 relative">
          {/* Floating decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none"></div>

          <Tabs defaultValue={services[0].id} value={activeService} onValueChange={setActiveService} className="w-full">
            <div className="mb-8 overflow-x-auto pb-4 no-scrollbar">
              <TabsList className="bg-background border border-border p-1 inline-flex w-auto min-w-full md:min-w-0">
                {services.map((service) => (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className="data-[state=active]:bg-gradient-to-r relative group"
                    style={
                      {
                        "--tw-gradient-from": `var(--${service.id}-gradient-from, hsl(var(--primary)))`,
                        "--tw-gradient-to": `var(--${service.id}-gradient-to, hsl(var(--primary)))`,
                      } as React.CSSProperties
                    }
                  >
                    <span className="flex items-center gap-2">
                      {service.icon}
                      {service.title}
                    </span>
                    <style jsx global>{`
                      [data-state="active"][value="${service.id}"] {
                        --${service.id}-gradient-from: ${service.color.split(" ")[0].replace("from-", "")};
                        --${service.id}-gradient-to: ${service.color.split(" ")[1].replace("to-", "")};
                        --tw-text-opacity: 1;
                        color: white;
                      }
                    `}</style>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {services.map((service) => (
              <TabsContent
                key={service.id}
                value={service.id}
                className="focus-visible:outline-none focus-visible:ring-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="sticky top-32"
                    >
                      <div className={`p-1 rounded-xl bg-gradient-to-r ${service.color}`}>
                        <Card className="bg-background/95 backdrop-blur border-0 p-6">
                          <div className="mb-6">
                            <div
                              className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${service.color} text-white mb-4`}
                            >
                              {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                            <p className="text-muted-foreground">{service.description}</p>
                          </div>

                          <div className="space-y-4">
                            <h4 className="font-medium">Key Features:</h4>
                            {service.features.map((feature, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div
                                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-gradient-to-r ${service.color} text-white`}
                                >
                                  {feature.icon}
                                </div>
                                <div>
                                  <h5 className="font-medium">{feature.title}</h5>
                                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                          <Button
                            className={`mt-6 w-full bg-gradient-to-r ${service.color} text-white hover:opacity-90 transition-opacity`}
                            onClick={(e) => scrollToSection(e as any, "contact")}
                          >
                            <span className="flex items-center gap-2">
                              Get a Quote <ArrowRight className="h-4 w-4" />
                            </span>
                          </Button>
                        </Card>
                      </div>
                    </motion.div>
                  </div>

                  <div className="lg:col-span-2">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                      <div className="col-span-full mb-2">
                        <h3 className="text-xl font-medium">Example Projects</h3>
                        <p className="text-muted-foreground">Explore what we can create for you</p>
                      </div>

                      {service.examples.map((example, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="group"
                          onMouseEnter={() => setHoveredExample(`${service.id}-${index}`)}
                          onMouseLeave={() => setHoveredExample(null)}
                        >
                          <div
                            className={`rounded-xl border-2 ${example.color} overflow-hidden transition-all duration-300 ${hoveredExample === `${service.id}-${index}` ? "shadow-lg scale-[1.02]" : ""}`}
                          >
                            <div className="relative aspect-video w-full overflow-hidden">
                              <img
                                src={example.image || "/placeholder.svg"}
                                alt={example.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                              <div className="absolute bottom-4 left-4">
                                <Badge className={`bg-gradient-to-r ${service.color} text-white`}>
                                  {example.title}
                                </Badge>
                              </div>
                            </div>
                            <CardContent className="p-4">
                              <h4 className="font-medium mb-2">{example.description}</h4>
                              <ul className="space-y-1">
                                {example.features.map((feature, i) => (
                                  <li key={i} className="flex items-center gap-2 text-sm">
                                    <Check className="h-4 w-4 text-green-500" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </div>
                        </motion.div>
                      ))}

                      <div className="col-span-full mt-4">
                        <Card className={cn("border border-dashed p-6 bg-muted/30 text-center")}>
                          <h4 className="font-medium mb-2">Need something custom?</h4>
                          <p className="text-muted-foreground mb-4">
                            We can create tailored solutions for your specific needs
                          </p>
                          <Button
                            variant="outline"
                            className="mx-auto"
                            onClick={(e) => scrollToSection(e as any, "contact")}
                          >
                            Discuss Your Project
                          </Button>
                        </Card>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
