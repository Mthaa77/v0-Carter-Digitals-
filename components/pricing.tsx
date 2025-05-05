"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Clock, Calendar } from "lucide-react"
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

interface PricingProps {
  type: "website" | "ecommerce"
}

const websitePlans: PricingPlan[] = [
  {
    title: "Basic",
    price: "R1,500 - R2,500",
    description: "Perfect for simple landing pages and personal sites",
    features: ["1-2 pages", "Mobile-optimized", "Contact form", "2 revisions", "Fast delivery"],
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
      "Basic SEO setup",
      "Mobile responsive",
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
      "WhatsApp chat integration",
      "SEO optimization",
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
      "SEO optimized product pages",
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

function PricingSection({ type, onSelectPlan }: PricingProps & { onSelectPlan: (plan: PricingPlan) => void }) {
  const plans = type === "website" ? websitePlans : ecommercePlans

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card
            className={`h-full flex flex-col card-3d bg-gradient-to-br ${plan.colorClass || ""} ${
              plan.popular ? "shadow-lg shadow-primary/20" : ""
            }`}
          >
            <CardHeader>
              {plan.popular && <Badge className="self-start mb-2 bg-primary">Most Popular</Badge>}
              <CardTitle className="text-2xl">{plan.title}</CardTitle>
              <CardDescription className="text-lg">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-3xl font-bold mb-6">{plan.price}</div>
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className={`h-5 w-5 ${plan.popular ? "text-primary" : "text-green-500"} mr-2 shrink-0`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.cms && (
                <Badge variant="outline" className="mt-4 bg-primary/10 text-primary">
                  + CMS Included
                </Badge>
              )}
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full btn-3d ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary to-orange-400 hover:from-orange-400 hover:to-primary"
                    : "bg-background hover:bg-accent text-foreground border border-input"
                }`}
                variant={plan.popular ? "default" : "outline"}
                onClick={() => onSelectPlan(plan)}
              >
                {plan.cta}
              </Button>
            </CardFooter>
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
        >
          <Card
            className={`h-full flex flex-col card-3d bg-gradient-to-br ${rate.colorClass || ""} ${
              rate.popular ? "shadow-lg shadow-primary/20" : ""
            }`}
          >
            <CardHeader>
              {rate.popular && <Badge className="self-start mb-2 bg-primary">Most Popular</Badge>}
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5" />
                <CardTitle className="text-2xl">{rate.title}</CardTitle>
              </div>
              <CardDescription className="text-lg">{rate.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-3xl font-bold mb-6">{rate.rate}</div>
              <div className="mb-4">
                <h4 className="font-medium mb-2">Best for:</h4>
                <ul className="space-y-2">
                  {rate.bestFor.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`h-5 w-5 ${rate.popular ? "text-primary" : "text-green-500"} mr-2 shrink-0`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full btn-3d ${
                  rate.popular
                    ? "bg-gradient-to-r from-primary to-orange-400 hover:from-orange-400 hover:to-primary"
                    : "bg-background hover:bg-accent text-foreground border border-input"
                }`}
                variant={rate.popular ? "default" : "outline"}
                onClick={() => onSelectHourly(rate)}
              >
                {rate.cta}
              </Button>
            </CardFooter>
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
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [pricingTab, setPricingTab] = useState<"packages" | "hourly">("packages")

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlan(plan)
    setSelectedHourly(null)
    setIsDialogOpen(true)
  }

  const handleSelectHourly = (rate: HourlyRate) => {
    setSelectedHourly(rate)
    setSelectedPlan(null)
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
          onValueChange={(value) => setPricingTab(value as "packages" | "hourly")}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-[400px]">
              <TabsTrigger value="packages" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Project Packages</span>
              </TabsTrigger>
              <TabsTrigger value="hourly" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Hourly Rates</span>
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
        </DialogContent>
      </Dialog>
    </section>
  )
}
