import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Check, Bot, Users, Calendar, MessageSquare, Shield, Zap, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Virtual Assistants | Carter Digitals",
  description:
    "Automate your business operations with AI-powered Virtual Assistants. Our virtual assistants can handle calls, messages, scheduling, and more.",
}

export default function VirtualAssistantsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-background/80">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--primary)_0%,_transparent_70%)]"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
              <Bot className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <Badge className="mb-4 px-4 py-1 bg-primary/10 text-primary border-primary/20 rounded-full">
              NEW SERVICE
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
              Virtual Assistants
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-foreground/80">
              Automate your business operations with intelligent AI-powered virtual assistants that can handle calls,
              messages, scheduling, and more.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="#pricing"
                className="px-8 py-3 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
              >
                View Pricing
              </Link>
              <Link
                href="#demo"
                className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 font-medium hover:bg-white/20 transition-all duration-300"
              >
                See Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-6 w-6 text-primary" />,
                title: "24/7 Availability",
                description:
                  "Never miss a customer interaction again. Our virtual assistants are available around the clock to handle inquiries and provide assistance.",
              },
              {
                icon: <MessageSquare className="h-6 w-6 text-primary" />,
                title: "Natural Conversations",
                description:
                  "Advanced AI technology enables natural, human-like conversations that provide a seamless experience for your customers.",
              },
              {
                icon: <Calendar className="h-6 w-6 text-primary" />,
                title: "Appointment Scheduling",
                description:
                  "Virtual assistants can schedule, reschedule, and cancel appointments, syncing directly with your calendar system.",
              },
              {
                icon: <Users className="h-6 w-6 text-primary" />,
                title: "Customer Recognition",
                description:
                  "The system recognizes returning customers and personalizes interactions based on previous conversations.",
              },
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Secure Integration",
                description:
                  "Seamlessly and securely integrates with your existing business systems, CRM, and databases.",
              },
              {
                icon: <Zap className="h-6 w-6 text-primary" />,
                title: "Multi-Channel Support",
                description:
                  "Our virtual assistants can communicate across multiple channels including voice, chat, email, and social media.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/20 overflow-hidden group"
              >
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="p-3 rounded-full bg-primary/10 inline-block mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-foreground/80">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Setup & Integration",
                description:
                  "We configure the virtual assistant to understand your business, services, and common customer inquiries.",
              },
              {
                step: "02",
                title: "Training & Testing",
                description: "The AI is trained on your specific use cases and tested thoroughly before deployment.",
              },
              {
                step: "03",
                title: "Deployment & Monitoring",
                description: "Once live, we continuously monitor performance and make improvements as needed.",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/20 overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="text-5xl font-bold text-primary/20 mb-4">{step.step}</div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-foreground/80">{step.description}</p>
                  </CardContent>
                </Card>
                {index < 2 && (
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

      {/* Use Cases Section */}
      <section className="py-20 bg-background" id="use-cases">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Customer Support",
                description:
                  "Handle common inquiries, troubleshoot issues, and escalate complex problems to human agents when necessary.",
                icon: <Users className="h-6 w-6 text-primary" />,
              },
              {
                title: "Appointment Management",
                description:
                  "Allow customers to schedule, reschedule, or cancel appointments without human intervention.",
                icon: <Calendar className="h-6 w-6 text-primary" />,
              },
              {
                title: "Lead Qualification",
                description:
                  "Screen potential customers, gather information, and qualify leads before passing to sales teams.",
                icon: <MessageSquare className="h-6 w-6 text-primary" />,
              },
              {
                title: "Order Processing",
                description:
                  "Take orders over multiple channels, process payments, and update inventory systems automatically.",
                icon: <Zap className="h-6 w-6 text-primary" />,
              },
            ].map((useCase, index) => (
              <Card
                key={index}
                className="border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/20 overflow-hidden group"
              >
                <CardContent className="p-6">
                  <div className="p-3 rounded-full bg-primary/10 inline-block mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-foreground/80">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/90" id="pricing">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Pricing</h2>
          <p className="text-center text-foreground/80 max-w-3xl mx-auto mb-16">
            Choose the plan that best fits your business needs. All plans include setup, training, and ongoing support.
          </p>

          <Tabs defaultValue="packages" className="max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="packages" className="rounded-l-full">
                Service Packages
              </TabsTrigger>
              <TabsTrigger value="hosting" className="rounded-r-full">
                Hosting & Maintenance
              </TabsTrigger>
            </TabsList>

            <TabsContent value="packages">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-2 border-primary/10 transition-all duration-300 shadow-lg overflow-hidden">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Standard Package</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">R3,999</span>
                      <span className="text-foreground/70"> one-time setup</span>
                    </div>
                    <p className="mb-6 text-foreground/80">
                      Perfect for small businesses looking to automate basic customer interactions.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {[
                        "Virtual assistant setup and configuration",
                        "Basic call and message handling",
                        "Up to 3 custom scenarios",
                        "Business hours configuration",
                        "Basic reporting",
                        "Email notifications",
                        "WhatsApp integration",
                        "Facebook Messenger integration",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="block w-full py-3 text-center rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </CardContent>
                </Card>

                <Card className="border-2 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 transition-all duration-300 shadow-lg relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Premium Package</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">R6,999</span>
                      <span className="text-foreground/70"> one-time setup</span>
                    </div>
                    <p className="mb-6 text-foreground/80">
                      Advanced features for businesses with complex customer interaction needs.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {[
                        "Everything in Standard Package",
                        "Unlimited custom scenarios",
                        "CRM integration",
                        "Calendar integration",
                        "Advanced call routing",
                        "Multi-channel support",
                        "Priority support",
                        "Detailed analytics dashboard",
                        "SEO optimized responses",
                        "Custom voice and personality",
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-5 w-5 text-primary mr-2 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="block w-full py-3 text-center rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="hosting">
              <Card className="border-2 border-primary/20 bg-primary/5 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Annual Hosting & Maintenance</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">R1,799</span>
                    <span className="text-foreground/70"> per year</span>
                  </div>
                  <p className="mb-6 text-foreground/80">
                    Keep your virtual assistant running smoothly with our comprehensive hosting and maintenance plan.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-3">
                      <h4 className="font-semibold">Hosting Includes:</h4>
                      <ul className="space-y-2">
                        {[
                          "Secure cloud hosting",
                          "Domain name registration",
                          "SSL certificate",
                          "99.9% uptime guarantee",
                          "Daily backups",
                        ].map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="h-4 w-4 text-primary mr-2 shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Maintenance Includes:</h4>
                      <ul className="space-y-2">
                        {[
                          "Monthly performance reports",
                          "Regular AI model updates",
                          "Technical support",
                          "Security patches",
                          "Minor content updates",
                        ].map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="h-4 w-4 text-primary mr-2 shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="block w-full py-3 text-center rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                  >
                    Add to Your Package
                  </Link>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-primary/10 max-w-5xl mx-auto">
            <h4 className="text-xl font-semibold mb-3">Additional Information</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>Both packages include initial training and setup of the Virtual Assistant system.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>Monthly maintenance and support plans available starting at R499/month.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>Custom enterprise solutions available for businesses with specific requirements.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How accurate is the AI in understanding customers?",
                answer:
                  "Our Virtual Assistants use advanced natural language processing technology with over 95% accuracy in understanding customer intent and responding appropriately.",
              },
              {
                question: "Can the virtual assistant transfer to human agents when needed?",
                answer:
                  "Yes, the AI can seamlessly transfer interactions to human agents based on predefined criteria or when it detects that human intervention is necessary.",
              },
              {
                question: "How long does it take to set up a Virtual Assistant?",
                answer:
                  "The standard setup process takes approximately 1-2 weeks, including configuration, training, and testing to ensure optimal performance.",
              },
              {
                question: "Can the virtual assistant handle multiple interactions simultaneously?",
                answer:
                  "Yes, one of the key advantages of Virtual Assistants is their ability to handle multiple interactions simultaneously, eliminating wait times for customers.",
              },
              {
                question: "Is the system secure and compliant with privacy regulations?",
                answer:
                  "Yes, our Virtual Assistant system is designed with security and privacy in mind, complying with relevant data protection regulations and implementing encryption for all sensitive information.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-primary/10 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-foreground/80">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/90" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 px-4 py-1 bg-primary/10 text-primary border-primary/20 rounded-full">
                GET STARTED
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Customer Experience?</h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Contact us today to discuss how our Virtual Assistants can help your business provide exceptional
                service 24/7.
              </p>
            </div>

            <Card className="border-2 border-primary/10 bg-white/5 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" name="name" className="h-12 rounded-xl border-primary/20 bg-white/5" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      className="h-12 rounded-xl border-primary/20 bg-white/5"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="h-12 rounded-xl border-primary/20 bg-white/5"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" name="company" className="h-12 rounded-xl border-primary/20 bg-white/5" />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="message">Tell us about your needs</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="rounded-xl border-primary/20 bg-white/5"
                      placeholder="Describe your business and how you'd like to use our Virtual Assistants..."
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Button
                      type="submit"
                      className="w-full md:w-auto px-8 py-3 h-auto rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                    >
                      Request a Consultation
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 font-medium hover:bg-white/20 transition-all duration-300"
              >
                Explore Other Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
