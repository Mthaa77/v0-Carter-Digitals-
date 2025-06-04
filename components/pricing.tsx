"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Clock, Calendar, Server, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PricingForm from "./pricing-form"
import SectionIntro from "./section-intro"

interface PricingPlan {
  title: string
  price: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
  cms?: boolean
  colorClass?: string
}

interface HourlyRate {
  title: string
  rate: string
  description: string
  bestFor: string[]
  cta: string
  popular?: boolean
  colorClass?: string
}

interface HostingPlan {
  title: string
  price: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
  colorClass?: string
}

interface PricingProps {
  type: "website" | "ecommerce"
}

const websitePlans: PricingPlan[] = [
  {
    title: "Basic",
    price: "R1,899 - R2,999",
    description: "Perfect for simple landing pages and personal sites",
    features: [
      "1-2 pages",
      "Mobile-optimized",
      "Contact form with email notifications",
      "WhatsApp integration",
      "SEO optimized",
      "2 revisions",
      "Fast delivery",
    ],
    cta: "Get Started",
    colorClass: "from-blue-500/20 to-blue-500/5 border-blue-500/30",
  },
  {
    title: "Essential",
    price: "R3,500 - R6,500",
    description: "Ideal for small businesses and professionals",
    features: [
      "3-5 pages",
      "1 flyer/logo design",
      "Advanced SEO setup",
      "Mobile responsive",
      "Contact form with email notifications",
      "WhatsApp & Facebook integration",
      "4 revisions",
      "Social media integration",
    ],
    cta: "Most Popular",
    popular: true,
    colorClass: "from-primary/20 to-primary/5 border-primary/30",
  },
  {
    title: "Premium",
    price: "R7,000 - R9,500",
    description: "Complete solution for growing businesses",
    features: [
      "6+ pages",
      "CMS integration",
      "WhatsApp & Facebook integration",
      "Advanced SEO optimization",
      "Contact form with email notifications",
      "Blog setup",
      "Analytics dashboard",
      "Unlimited revisions",
    ],
    cta: "Get Premium",
    cms: true,
    colorClass: "from-purple-500/20 to-purple-500/5 border-purple-500/30",
  },
  {
    title: "AI Call Agents",
    price: "R3,999",
    description: "Intelligent virtual agents that handle calls for your business",
    features: [
      "24/7 call answering",
      "Natural voice AI technology",
      "Appointment scheduling",
      "Call routing capabilities",
      "Custom voice & script setup",
      "WhatsApp integration",
      "Installation & training included",
    ],
    cta: "Get Started",
    colorClass: "from-indigo-500/20 to-indigo-500/5 border-indigo-500/30",
  },
]

const ecommercePlans: PricingPlan[] = [
  {
    title: "Starter Store",
    price: "R4,999 - R7,000",
    description: "Launch your online store quickly",
    features: [
      "Up to 10 products",
      "Payment gateway integration",
      "Shopping cart & checkout",
      "Mobile responsive",
      "SEO optimized product pages",
      "Contact form with email notifications",
      "WhatsApp integration",
      "Basic product management",
    ],
    cta: "Start Selling",
    colorClass: "from-green-500/20 to-green-500/5 border-green-500/30",
  },
  {
    title: "Pro Store",
    price: "R9,999 - R18,000",
    description: "Full-featured store for serious sellers",
    features: [
      "Unlimited products",
      "CMS dashboard",
      "Advanced SEO optimization",
      "WhatsApp & Facebook integration",
      "Contact form with email notifications",
      "Live chat integration",
      "Admin training",
      "Inventory management",
    ],
    cta: "Go Pro",
    popular: true,
    cms: true,
    colorClass: "from-primary/20 to-primary/5 border-primary/30",
  },
  {
    title: "Enterprise",
    price: "R20,000+",
    description: "Custom solution for large businesses",
    features: [
      "Multivendor capabilities",
      "ERP/API integrations",
      "Custom CMS development",
      "Advanced SEO strategy",
      "WhatsApp & Facebook integration",
      "Contact form with email notifications",
      "Mobile app options",
      "Complete branding suite",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Contact Us",
    cms: true,
    colorClass: "from-orange-500/20 to-orange-500/5 border-orange-500/30",
  },
]

const hourlyRates: HourlyRate[] = [
  {
    title: "Standard Rate",
    rate: "R350/hour",
    description: "Perfect for ongoing projects and regular updates",
    bestFor: [
      "Website maintenance",
      "Content updates",
      "Small design changes",
      "Bug fixes",
      "Performance optimization",
    ],
    cta: "Book Hours",
    colorClass: "from-blue-500/20 to-blue-500/5 border-blue-500/30",
  },
  {
    title: "Priority Rate",
    rate: "R500/hour",
    description: "For urgent projects that need immediate attention",
    bestFor: [
      "Urgent fixes",
      "Same-day delivery",
      "After-hours support",
      "Weekend availability",
      "Priority communication",
    ],
    cta: "Get Priority",
    popular: true,
    colorClass: "from-primary/20 to-primary/5 border-primary/30",
  },
  {
    title: "Consultation",
    rate: "R250/hour",
    description: "Strategic advice and planning for your digital projects",
    bestFor: [
      "Digital strategy sessions",
      "Website audits",
      "SEO consultations",
      "Conversion optimization",
      "Project planning",
    ],
    cta: "Book Consultation",
    colorClass: "from-purple-500/20 to-purple-500/5 border-purple-500/30",
  },
]

const hostingPlans: HostingPlan[] = [
  {
    title: "Annual Hosting & Domain",
    price: "R1,799/year",
    description: "Complete hosting solution for your website",
    features: [
      "Domain name registration/renewal",
      "Fast & reliable web hosting",
      "SSL certificate included",
      "Email accounts setup",
      "Regular backups",
      "Security monitoring",
      "Technical support",
      "99.9% uptime guarantee",
    ],
    cta: "Get Hosting",
    popular: true,
    colorClass: "from-green-500/20 to-green-500/5 border-green-500/30",
  },
]

function PricingSection({ type, onSelectPlan }: PricingProps & { onSelectPlan: (plan: PricingPlan) => void }) {
  const plans = type === "website" ? websitePlans : ecommercePlans

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
        >
          <Card
            className={`h-full flex flex-col relative overflow-hidden ${
              plan.popular
                ? "shadow-xl shadow-primary/30 border-2 border-primary/50"
                : "shadow-lg hover:shadow-xl transition-all duration-300"
            }`}
          >
            {/* Colorful background gradient */}
            <div
              className={`absolute inset-0 opacity-20 ${
                plan.popular
                  ? "bg-gradient-to-br from-primary via-purple-400 to-pink-500"
                  : `bg-gradient-to-br ${plan.colorClass || "from-blue-500/20 to-blue-500/5"}`
              }`}
            />

            {/* Animated glow effect for popular plan */}
            {plan.popular && (
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 animate-pulse-slow -z-10"></div>
            )}

            {/* Glass overlay */}
            <div className="absolute inset-0 backdrop-blur-[1px] bg-white/5 dark:bg-black/5"></div>

            <CardHeader className="relative z-10">
              {plan.popular && (
                <div className="absolute -right-12 top-5 bg-gradient-to-r from-primary to-purple-500 text-white px-12 py-1 rotate-45 transform shadow-md text-sm font-medium">
                  POPULAR
                </div>
              )}
              {plan.popular && (
                <Badge className="self-start mb-2 bg-gradient-to-r from-primary to-purple-500 border-0">
                  Most Popular
                </Badge>
              )}
              <CardTitle className={`text-2xl ${plan.popular ? "text-primary" : ""}`}>{plan.title}</CardTitle>
              <CardDescription className="text-lg">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow relative z-10">
              <div className={`text-3xl font-bold mb-6 ${plan.popular ? "text-gradient-primary" : ""}`}>
                {plan.price}
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`flex items-center justify-center h-5 w-5 rounded-full mr-2 shrink-0 ${
                        plan.popular
                          ? "bg-gradient-to-r from-primary to-purple-500 text-white"
                          : "bg-green-500/20 text-green-500"
                      }`}
                    >
                      <Check className="h-3 w-3" />
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              {plan.cms && (
                <Badge variant="outline" className="mt-4 bg-primary/10 text-primary border border-primary/30">
                  + CMS Included
                </Badge>
              )}
            </CardContent>
            <CardFooter className="relative z-10">
              <Button
                className={`w-full transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
                    : "bg-background hover:bg-accent text-foreground border border-input hover:-translate-y-1 hover:shadow-md"
                }`}
                variant={plan.popular ? "default" : "outline"}
                onClick={() => onSelectPlan(plan)}
              >
                {plan.cta}
              </Button>
            </CardFooter>

            {/* Corner accents for popular plan */}
            {plan.popular && (
              <>
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
              </>
            )}
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

function HourlyRatesSection({ onSelectHourly }: { onSelectHourly: (rate: HourlyRate) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {hourlyRates.map((rate, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`${rate.popular ? "md:-mt-4 md:mb-4" : ""}`}
        >
          <Card
            className={`h-full flex flex-col relative overflow-hidden ${
              rate.popular
                ? "shadow-xl shadow-primary/30 border-2 border-primary/50"
                : "shadow-lg hover:shadow-xl transition-all duration-300"
            }`}
          >
            {/* Colorful background gradient */}
            <div
              className={`absolute inset-0 opacity-20 ${
                rate.popular
                  ? "bg-gradient-to-br from-primary via-purple-400 to-pink-500"
                  : `bg-gradient-to-br ${rate.colorClass || "from-blue-500/20 to-blue-500/5"}`
              }`}
            />

            {/* Animated glow effect for popular plan */}
            {rate.popular && (
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 animate-pulse-slow -z-10"></div>
            )}

            {/* Glass overlay */}
            <div className="absolute inset-0 backdrop-blur-[1px] bg-white/5 dark:bg-black/5"></div>

            <CardHeader className="relative z-10">
              {rate.popular && (
                <div className="absolute -right-12 top-5 bg-gradient-to-r from-primary to-purple-500 text-white px-12 py-1 rotate-45 transform shadow-md text-sm font-medium">
                  POPULAR
                </div>
              )}
              {rate.popular && (
                <Badge className="self-start mb-2 bg-gradient-to-r from-primary to-purple-500 border-0">
                  Most Popular
                </Badge>
              )}
              <div className="flex items-center gap-2 mb-2">
                <div className={`p-2 rounded-full ${rate.popular ? "bg-primary/20" : "bg-muted"}`}>
                  <Clock className={`h-5 w-5 ${rate.popular ? "text-primary" : ""}`} />
                </div>
                <CardTitle className={`text-2xl ${rate.popular ? "text-primary" : ""}`}>{rate.title}</CardTitle>
              </div>
              <CardDescription className="text-lg">{rate.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow relative z-10">
              <div className={`text-3xl font-bold mb-6 ${rate.popular ? "text-gradient-primary" : ""}`}>
                {rate.rate}
              </div>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Best for:</h4>
                <ul className="space-y-3">
                  {rate.bestFor.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className={`flex items-center justify-center h-5 w-5 rounded-full mr-2 shrink-0 ${
                          rate.popular
                            ? "bg-gradient-to-r from-primary to-purple-500 text-white"
                            : "bg-green-500/20 text-green-500"
                        }`}
                      >
                        <Check className="h-3 w-3" />
                      </div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button
                className={`w-full transition-all duration-300 ${
                  rate.popular
                    ? "bg-gradient-to-r from-primary via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
                    : "bg-background hover:bg-accent text-foreground border border-input hover:-translate-y-1 hover:shadow-md"
                }`}
                variant={rate.popular ? "default" : "outline"}
                onClick={() => onSelectHourly(rate)}
              >
                {rate.cta}
              </Button>
            </CardFooter>

            {/* Corner accents for popular plan */}
            {rate.popular && (
              <>
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
              </>
            )}
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

function HostingSection({ onSelectHosting }: { onSelectHosting: (plan: HostingPlan) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-12 max-w-xl mx-auto">
      {hostingPlans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className="h-full flex flex-col relative overflow-hidden shadow-xl shadow-green-500/20 border-2 border-green-500/30">
            {/* Colorful background gradient */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-green-400 via-green-300 to-teal-500" />

            {/* Animated glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-teal-500 to-emerald-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 animate-pulse-slow -z-10"></div>

            {/* Glass overlay */}
            <div className="absolute inset-0 backdrop-blur-[1px] bg-white/5 dark:bg-black/5"></div>

            <CardHeader className="relative z-10">
              {plan.popular && (
                <div className="absolute -right-12 top-5 bg-gradient-to-r from-green-500 to-teal-500 text-white px-12 py-1 rotate-45 transform shadow-md text-sm font-medium">
                  RECOMMENDED
                </div>
              )}
              {plan.popular && (
                <Badge className="self-start mb-2 bg-gradient-to-r from-green-500 to-teal-500 border-0">
                  Recommended
                </Badge>
              )}
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-full bg-green-500/20">
                  <Server className="h-5 w-5 text-green-500" />
                </div>
                <CardTitle className="text-2xl text-green-600">{plan.title}</CardTitle>
              </div>
              <CardDescription className="text-lg">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow relative z-10">
              <div className="text-3xl font-bold mb-6 text-gradient-green">{plan.price}</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                {plan.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start mb-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-center h-5 w-5 rounded-full mr-2 shrink-0 bg-gradient-to-r from-green-500 to-teal-500 text-white">
                      <Check className="h-3 w-3" />
                    </div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="relative z-10">
              <Button
                className="w-full transition-all duration-300 bg-gradient-to-r from-green-500 via-teal-500 to-emerald-500 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-1"
                onClick={() => onSelectHosting(plan)}
              >
                {plan.cta}
              </Button>
            </CardFooter>

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-500"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-green-500"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500"></div>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

export default function Pricing() {
  const [pricingType, setPricingType] = useState<"website" | "ecommerce">("website")
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null)
  const [selectedHourly, setSelectedHourly] = useState<HourlyRate | null>(null)
  const [selectedHosting, setSelectedHosting] = useState<HostingPlan | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [pricingTab, setPricingTab] = useState<"packages" | "hourly" | "hosting">("packages")

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan)
    setSelectedHourly(null)
    setSelectedHosting(null)
    setIsDialogOpen(true)
  }

  const handleSelectHourly = (rate: HourlyRate) => {
    setSelectedHourly(rate)
    setSelectedPlan(null)
    setSelectedHosting(null)
    setIsDialogOpen(true)
  }

  const handleSelectHosting = (plan: HostingPlan) => {
    setSelectedHosting(plan)
    setSelectedPlan(null)
    setSelectedHourly(null)
    setIsDialogOpen(true)
  }

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
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <SectionIntro
          badge="PRICING OPTIONS"
          title="Flexible Pricing for Your Needs"
          description="Choose from our project-based packages or hourly rates. We offer transparent pricing designed to provide maximum value while fitting your budget."
          colorClass="bg-green-500/10 text-green-500"
        />

        <Tabs
          defaultValue="packages"
          value={pricingTab}
          onValueChange={(value) => setPricingTab(value as "packages" | "hourly" | "hosting")}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-[500px]">
              <TabsTrigger value="packages" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Project Packages</span>
              </TabsTrigger>
              <TabsTrigger value="hourly" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Hourly Rates</span>
              </TabsTrigger>
              <TabsTrigger value="hosting" className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>Hosting</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="packages" className="focus-visible:outline-none focus-visible:ring-0">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-4 bg-background p-2 rounded-full shadow-sm">
                <Button
                  variant={pricingType === "website" ? "default" : "ghost"}
                  onClick={() => setPricingType("website")}
                  className="rounded-full btn-3d"
                >
                  Website
                </Button>
                <Switch
                  checked={pricingType === "ecommerce"}
                  onCheckedChange={(checked) => setPricingType(checked ? "ecommerce" : "website")}
                  id="pricing-toggle"
                />
                <Button
                  variant={pricingType === "ecommerce" ? "default" : "ghost"}
                  onClick={() => setPricingType("ecommerce")}
                  className="rounded-full btn-3d"
                >
                  E-commerce
                </Button>
              </div>
            </div>

            <PricingSection type={pricingType} onSelectPlan={handleSelectPlan} />
          </TabsContent>

          <TabsContent value="hourly" className="focus-visible:outline-none focus-visible:ring-0">
            <div className="mb-8 text-center max-w-2xl mx-auto">
              <p className="text-muted-foreground">
                Need ongoing support or smaller tasks? Our hourly rates are perfect for maintenance, updates, and
                consultations. All hourly work includes detailed time tracking and regular progress reports.
              </p>
            </div>

            <HourlyRatesSection onSelectHourly={handleSelectHourly} />
          </TabsContent>

          <TabsContent value="hosting" className="focus-visible:outline-none focus-visible:ring-0">
            <div className="mb-8 text-center max-w-2xl mx-auto">
              <p className="text-muted-foreground">
                Secure, reliable hosting for your website with everything you need in one package. Includes domain
                registration, SSL certificate, and technical support.
              </p>
            </div>

            <HostingSection onSelectHosting={handleSelectHosting} />
          </TabsContent>
        </Tabs>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">Need a custom solution? Contact us for a personalized quote.</p>
          <Button
            size="lg"
            variant="outline"
            className="btn-3d bg-gradient-to-r from-green-500/20 to-green-500/5 border-2 border-green-500/30 text-foreground hover:text-green-500"
            onClick={(e) => scrollToSection(e as any, "contact")}
          >
            Request Custom Quote
          </Button>
        </motion.div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          {selectedPlan && (
            <PricingForm
              packageName={selectedPlan.title}
              price={selectedPlan.price}
              onClose={() => setIsDialogOpen(false)}
            />
          )}
          {selectedHourly && (
            <PricingForm
              packageName={selectedHourly.title}
              price={selectedHourly.rate}
              onClose={() => setIsDialogOpen(false)}
            />
          )}
          {selectedHosting && (
            <PricingForm
              packageName={selectedHosting.title}
              price={selectedHosting.price}
              onClose={() => setIsDialogOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
