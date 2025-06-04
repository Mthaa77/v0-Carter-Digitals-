import type React from "react"
import Link from "next/link"
import { ChevronRight, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import SectionIntro from "@/components/section-intro"

interface ServiceTemplateProps {
  service: {
    id: string
    title: string
    description: string
    icon: React.ReactNode
    activeIcon: React.ReactNode
    color: string
    features: {
      title: string
      description: string
      icon: React.ReactNode
    }[]
    benefits: string[]
    process: {
      title: string
      description: string
      icon?: React.ReactNode
    }[]
    faq: {
      question: string
      answer: string
    }[]
    examples: {
      title: string
      description: string
      image: string
      features: string[]
    }[]
  }
}

export default function ServiceTemplate({ service }: ServiceTemplateProps) {
  return (
    <main className="flex-1">
      {/* Breadcrumb extension */}
      <div className="bg-muted/30 border-b">
        <div className="container py-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/services" className="hover:text-foreground transition-colors">
              Services
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 pt-24 pb-16">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl pointer-events-none"></div>

        <div className="container relative">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-primary/20 to-blue-500/20 text-primary hover:from-primary/30 hover:to-blue-500/30 transition-colors">
              SERVICE
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">{service.description}</p>

            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90"
              >
                Get Started
              </Button>
              <Link href="/contact" passHref>
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <SectionIntro
            badge="FEATURES"
            title="What We Offer"
            description="Our comprehensive service includes everything you need for success."
            colorClass="bg-primary/10 text-primary"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <Card key={index} className="bg-background/60 backdrop-blur border-primary/20 shadow-lg h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-500/10 text-blue-500">BENEFITS</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our {service.title}</h2>
              <p className="text-muted-foreground mb-8">
                Our service is designed to deliver exceptional results and provide significant advantages for your
                business.
              </p>

              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mt-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button className="mt-8 bg-blue-500 hover:bg-blue-600">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-background border border-border rounded-3xl overflow-hidden shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Client Success</h3>
                <div className="space-y-6">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <span className="font-bold text-blue-500">AB</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Acme Business</h4>
                        <p className="text-sm text-muted-foreground">Technology Sector</p>
                      </div>
                    </div>
                    <p className="italic text-muted-foreground">
                      "The {service.title} service from Carter Digitals transformed our business operations and helped
                      us achieve our goals faster than expected."
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="bg-background p-3 rounded-md text-center">
                        <p className="text-2xl font-bold text-primary">+45%</p>
                        <p className="text-xs text-muted-foreground">Conversion Rate</p>
                      </div>
                      <div className="bg-background p-3 rounded-md text-center">
                        <p className="text-2xl font-bold text-blue-500">+68%</p>
                        <p className="text-xs text-muted-foreground">Revenue Growth</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <SectionIntro
            badge="PROCESS"
            title="How We Work"
            description="Our streamlined process ensures efficient delivery and exceptional results."
            colorClass="bg-purple-500/10 text-purple-500"
          />

          <div className="mt-16 relative">
            {/* Connection line */}
            <div className="absolute top-12 left-[39px] w-0.5 h-[calc(100%-96px)] bg-gradient-to-b from-primary via-blue-500 to-purple-500 hidden md:block"></div>

            <div className="space-y-12">
              {service.process.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-12 relative">
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r from-primary via-blue-500 to-purple-500 p-0.5 z-10">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-500">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <SectionIntro
            badge="EXAMPLES"
            title="What We Can Create For You"
            description="Explore examples of our work and what we can achieve for your business."
            colorClass="bg-green-500/10 text-green-500"
          />

          <Tabs defaultValue="example1" className="mt-12">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8">
              {service.examples.map((example, index) => (
                <TabsTrigger
                  key={index}
                  value={`example${index + 1}`}
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/10 data-[state=active]:to-blue-500/10 data-[state=active]:text-primary"
                >
                  {example.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {service.examples.map((example, index) => (
              <TabsContent key={index} value={`example${index + 1}`} className="border rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{example.title}</h3>
                    <p className="text-muted-foreground mb-6">{example.description}</p>

                    <h4 className="font-medium mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {example.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className="mt-6">View Similar Projects</Button>
                  </div>

                  <div className="bg-background rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={example.image || "/placeholder.svg"}
                      alt={example.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <SectionIntro
            badge="FAQ"
            title="Frequently Asked Questions"
            description="Get answers to common questions about our services."
            colorClass="bg-amber-500/10 text-amber-500"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.faq.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-blue-500/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your project and how our {service.title} service can help you achieve your
            goals.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" passHref>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90"
              >
                Contact Us
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
