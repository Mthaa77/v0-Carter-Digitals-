"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Phone,
  Mail,
  Facebook,
  Loader2,
  Send,
  CheckCircle2,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
  AlertCircle,
  Bell,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

const contactMethods = [
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Call Us",
    description: "Talk to our team directly",
    value: "072 402 6893",
    link: "tel:+27724026893",
    color: "bg-primary/10 text-primary border-primary/20",
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email Us",
    description: "Send us a detailed message",
    value: "kadiakakabelo4@gmail.com",
    link: "mailto:kadiakakabelo4@gmail.com",
    color: "bg-secondary/10 text-secondary border-secondary/20",
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "WhatsApp",
    description: "Chat with us instantly",
    value: "WhatsApp Chat",
    link: "https://wa.me/27724026893",
    color: "bg-accent/10 text-accent border-accent/20",
  },
  {
    icon: <Facebook className="h-5 w-5" />,
    title: "Facebook",
    description: "Connect on social media",
    value: "Carter Digitals",
    link: "https://facebook.com/carterdigitals",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  },
]

const projectTypes = [
  { value: "website", label: "Website Design" },
  { value: "ecommerce", label: "E-commerce Store" },
  { value: "branding", label: "Logo & Branding" },
  { value: "flyer", label: "Flyer & Digital Media" },
  { value: "presentation", label: "Presentation" },
  { value: "cv", label: "CV/Resume Design" },
  { value: "copywriting", label: "Copywriting" },
  { value: "virtual-assistants", label: "Virtual Assistants" },
  { value: "other", label: "Other Services" },
]

const budgetRanges = [
  { value: "under-5k", label: "Under R5,000", color: "bg-green-500/10 text-green-500 border-green-500/20" },
  { value: "5k-10k", label: "R5,000 - R10,000", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  { value: "10k-20k", label: "R10,000 - R20,000", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
  { value: "over-20k", label: "Over R20,000", color: "bg-primary/10 text-primary border-primary/20" },
]

interface FormState {
  name: string
  email: string
  phone: string
  projectType: string
  budget: string
  message: string
}

export default function EnhancedContact() {
  const { toast } = useToast()
  const router = useRouter()
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState("form")
  const [formErrors, setFormErrors] = useState<Partial<FormState>>({})
  const formRef = useRef<HTMLFormElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (formErrors[name as keyof FormState]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (formErrors[name as keyof FormState]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const errors: Partial<FormState> = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Please enter a valid email"
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      toast({
        title: "Please check your form",
        description: "Some fields need your attention",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Create FormData object from the form
      const formElement = e.currentTarget
      const formDataObj = new FormData(formElement)

      // Send the form data to Netlify
      const response = await fetch("/__forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formDataObj as any).toString(),
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      // Show success state
      setIsSubmitted(true)

      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      })

      // Reset form after 5 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          budget: "",
          message: "",
        })
        setIsSubmitted(false)
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFullContactPage = () => {
    router.push("/contact")
  }

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
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 lg:py-32 relative overflow-hidden animated-bg">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/10 blur-[100px] floating-element"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/10 blur-[120px] floating-element-delay-2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-[150px] floating-element-delay-1"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="px-4 py-1.5 rounded-full text-sm font-medium mb-4 inline-block bg-primary/10 text-primary border border-primary/20 shadow-3d">
            GET IN TOUCH
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 tracking-tight">
            Let's Create Something <span className="text-gradient-primary">Amazing Together</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your digital presence? We're just a message away from turning your vision into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Contact methods column */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-semibold">How to Reach Us</h3>
              <p className="text-muted-foreground">
                Choose the method that works best for you. We're available Monday to Friday, 9am to 6pm SAST.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactMethods.map((method, index) => (
                <motion.div key={method.title} variants={itemVariants} className="reveal-on-scroll" custom={index}>
                  <Card className={`h-full card-3d border-2 ${method.color} shadow-3d shadow-3d-hover`}>
                    <CardContent className="p-4 flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-full ${method.color} flex items-center justify-center shrink-0 shadow-3d pulse-glow`}
                      >
                        {method.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold">{method.title}</h4>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                        <a
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium hover:text-primary flex items-center gap-1 micro-bounce"
                        >
                          {method.value} <ArrowRight className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="space-y-4 mt-8">
              <Card className="card-3d border-2 border-primary/20 bg-primary/5 shadow-3d">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Business Hours</h4>
                      <p className="text-sm text-muted-foreground">Monday - Friday: 9am - 6pm SAST</p>
                      <p className="text-sm text-muted-foreground">Weekend consultations by appointment</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-sm text-muted-foreground">South Africa</p>
                      <p className="text-sm text-muted-foreground">Remote services worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Bell className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium">Response Time</h4>
                      <p className="text-sm text-muted-foreground">We respond to all inquiries within 24 hours</p>
                      <p className="text-sm text-muted-foreground">Email notifications for all form submissions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button
                onClick={handleFullContactPage}
                className="w-full btn-3d bg-gradient-to-r from-primary/80 to-primary/60 text-white hover:from-primary hover:to-primary/80"
              >
                Visit Full Contact Page <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact form column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 mb-4 md:mb-6 bg-background/50 backdrop-blur-md border border-white/20 rounded-full p-1 w-full max-w-md mx-auto">
                <TabsTrigger
                  value="form"
                  className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Contact Form
                </TabsTrigger>
                <TabsTrigger
                  value="quick"
                  className="rounded-full data-[state=active]:bg-secondary data-[state=active]:text-white"
                >
                  Quick Chat
                </TabsTrigger>
              </TabsList>

              <TabsContent value="form" className="focus-visible:outline-none focus-visible:ring-0">
                <Card className="card-3d border-2 border-white/20 bg-white/5 backdrop-blur-md shadow-3d overflow-hidden">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex flex-col items-center justify-center py-10 text-center"
                      >
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 pulse-glow">
                          <CheckCircle2 className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground mb-6 max-w-md">
                          Thank you for reaching out. We've received your message and will get back to you as soon as
                          possible. You'll receive an email confirmation shortly.
                        </p>
                        <Button
                          onClick={() => setIsSubmitted(false)}
                          className="btn-3d bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-primary"
                        >
                          Send Another Message
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        name="contact"
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        {/* Hidden input required for Netlify forms */}
                        <input type="hidden" name="form-name" value="contact" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <div className="floating-label input-focus-animation">
                              <Input
                                id="name"
                                name="name"
                                placeholder=" "
                                value={formData.name}
                                onChange={handleChange}
                                className={cn(
                                  "premium-input h-14 rounded-2xl",
                                  formErrors.name ? "border-red-500 border-2" : "",
                                )}
                              />
                              <Label
                                htmlFor="name"
                                className={cn(
                                  formErrors.name ? "text-red-500" : "",
                                  formData.name ? "text-primary" : "",
                                )}
                              >
                                Your Name
                              </Label>
                            </div>
                            {formErrors.name && (
                              <p className="text-red-500 text-xs flex items-center gap-1 ml-1 mt-1">
                                <AlertCircle className="h-3 w-3" /> {formErrors.name}
                              </p>
                            )}
                          </div>

                          <div className="space-y-2">
                            <div className="floating-label input-focus-animation">
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder=" "
                                value={formData.email}
                                onChange={handleChange}
                                className={cn(
                                  "premium-input h-14 rounded-2xl",
                                  formErrors.email ? "border-red-500 border-2" : "",
                                )}
                              />
                              <Label
                                htmlFor="email"
                                className={cn(
                                  formErrors.email ? "text-red-500" : "",
                                  formData.email ? "text-primary" : "",
                                )}
                              >
                                Your Email
                              </Label>
                            </div>
                            {formErrors.email && (
                              <p className="text-red-500 text-xs flex items-center gap-1 ml-1 mt-1">
                                <AlertCircle className="h-3 w-3" /> {formErrors.email}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Phone Number Field */}
                        <div className="space-y-2">
                          <div className="floating-label input-focus-animation">
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder=" "
                              value={formData.phone}
                              onChange={handleChange}
                              className="premium-input h-14 rounded-2xl"
                            />
                            <Label htmlFor="phone" className={formData.phone ? "text-primary" : ""}>
                              Phone Number (Optional)
                            </Label>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label className="text-sm font-medium">Project Type</Label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                            {projectTypes.slice(0, 6).map((type) => (
                              <Button
                                key={type.value}
                                type="button"
                                variant={formData.projectType === type.value ? "default" : "outline"}
                                onClick={() => handleSelectChange("projectType", type.value)}
                                className={cn(
                                  "h-auto py-3 justify-start text-xs md:text-sm rounded-xl btn-3d",
                                  formData.projectType === type.value
                                    ? "bg-primary text-white"
                                    : "border-white/20 bg-white/5",
                                )}
                                name="projectType"
                                value={type.value}
                              >
                                <span>{type.label}</span>
                              </Button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Label>Budget Range</Label>
                          <RadioGroup
                            onValueChange={(value) => handleSelectChange("budget", value)}
                            value={formData.budget}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                            name="budget"
                          >
                            {budgetRanges.map((range) => (
                              <div
                                key={range.value}
                                className={cn(
                                  "flex items-center space-x-2 card-3d p-3 border-2",
                                  formData.budget === range.value ? range.color : "border-white/10 bg-white/5",
                                  "micro-bounce cursor-pointer",
                                )}
                                onClick={() => handleSelectChange("budget", range.value)}
                              >
                                <RadioGroupItem value={range.value} id={range.value} />
                                <Label htmlFor={range.value} className="cursor-pointer">
                                  {range.label}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <div className="floating-label input-focus-animation">
                            <Textarea
                              id="message"
                              name="message"
                              placeholder=" "
                              rows={4}
                              value={formData.message}
                              onChange={handleChange}
                              className={cn(
                                "premium-input pt-6 min-h-[120px] rounded-2xl",
                                formErrors.message ? "border-red-500 border-2" : "",
                              )}
                            />
                            <Label
                              htmlFor="message"
                              className={cn(
                                formErrors.message ? "text-red-500" : "",
                                formData.message ? "text-primary" : "",
                              )}
                            >
                              Tell us about your project
                            </Label>
                          </div>
                          {formErrors.message && (
                            <p className="text-red-500 text-xs flex items-center gap-1 ml-1 mt-1">
                              <AlertCircle className="h-3 w-3" /> {formErrors.message}
                            </p>
                          )}
                        </div>

                        <div className="text-sm text-muted-foreground flex items-start gap-2 p-3 bg-primary/5 rounded-xl border border-primary/10">
                          <Bell className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                          <p>You'll receive an email confirmation when your message is submitted.</p>
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-14 btn-3d bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-primary rounded-2xl"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending Message...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" /> Send Message
                            </>
                          )}
                        </Button>
                      </motion.form>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="quick" className="focus-visible:outline-none focus-visible:ring-0">
                <Card className="card-3d border-2 border-secondary/20 bg-secondary/5 shadow-3d">
                  <CardContent className="p-6 md:p-8 text-center">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 pulse-glow">
                      <MessageSquare className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Need a Quick Response?</h3>
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      For immediate assistance, connect with us directly on WhatsApp. We typically respond within
                      minutes during business hours.
                    </p>
                    <Button
                      asChild
                      className="btn-3d bg-gradient-to-r from-secondary to-accent text-white hover:from-accent hover:to-secondary h-14 px-8 rounded-2xl"
                    >
                      <a
                        href="https://wa.me/27724026893"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <MessageSquare className="h-5 w-5" /> Chat on WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
