"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Facebook, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import SectionIntro from "./section-intro"
import { cn } from "@/lib/utils"

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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

      // Show success message
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: "",
      })
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

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background futuristic-grid"
    >
      <div className="container mx-auto px-4">
        <div className="reveal-on-scroll">
          <SectionIntro
            badge="GET IN TOUCH"
            title="Let's Start Your Digital Journey"
            description="Ready to stop losing customers to outdated digital experiences? Contact us today for a free consultation and quote."
            colorClass="bg-blue-500/10 text-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1 reveal-on-scroll"
          >
            <Card className="h-full premium-card bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
              <CardHeader>
                <CardTitle>Contact Kabelo Kadiaka</CardTitle>
                <CardDescription>Developer & Digital Expert</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 premium-card p-3 micro-bounce">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone / WhatsApp</p>
                    <a href="tel:+27724026893" className="font-medium hover:text-primary">
                      072 402 6893
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 premium-card p-3 micro-bounce">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:kadiakakabelo4@gmail.com" className="font-medium hover:text-blue-500">
                      kadiakakabelo4@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 premium-card p-3 micro-bounce">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <Facebook className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Facebook</p>
                    <div className="space-y-1">
                      <a
                        href="https://facebook.com/kabelo.gee.kadiaka"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block font-medium hover:text-purple-500"
                      >
                        Kabelo Gee Kadiaka
                      </a>
                      <a
                        href="https://facebook.com/carterdigitals"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block font-medium hover:text-purple-500"
                      >
                        Carter Digitals
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Available Monday to Friday, 9am to 6pm SAST. Weekend consultations available by appointment.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className={cn(
                      "w-full premium-btn-outline",
                      "bg-gradient-to-r from-green-500/20 to-green-500/5",
                      "border-green-500/30 hover:text-green-500",
                    )}
                  >
                    <a
                      href="https://wa.me/27724026893"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Chat on WhatsApp</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2 reveal-on-scroll"
          >
            <Card className="premium-card bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form name="contact" onSubmit={handleSubmit} className="space-y-6">
                  {/* Hidden input required for Netlify forms */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="floating-label">
                      <Input
                        id="name"
                        name="name"
                        placeholder=" "
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="premium-input"
                      />
                      <Label htmlFor="name">Your Name</Label>
                    </div>
                    <div className="floating-label">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder=" "
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="premium-input"
                      />
                      <Label htmlFor="email">Your Email</Label>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("projectType", value)}
                      value={formData.projectType}
                      name="projectType"
                    >
                      <SelectTrigger id="projectType" className="premium-input">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent className="glassmorphism">
                        <SelectItem value="website">Website</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="branding">Logo & Branding</SelectItem>
                        <SelectItem value="flyer">Flyer & Digital Media</SelectItem>
                        <SelectItem value="presentation">Presentation</SelectItem>
                        <SelectItem value="cv">CV/Resume Design</SelectItem>
                        <SelectItem value="copywriting">Copywriting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4">
                    <Label>Budget Range</Label>
                    <RadioGroup
                      onValueChange={(value) => handleSelectChange("budget", value)}
                      value={formData.budget}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      name="budget"
                    >
                      <div className="flex items-center space-x-2 premium-card p-2 micro-bounce">
                        <RadioGroupItem value="under-5k" id="under-5k" />
                        <Label htmlFor="under-5k">Under R5,000</Label>
                      </div>
                      <div className="flex items-center space-x-2 premium-card p-2 micro-bounce">
                        <RadioGroupItem value="5k-10k" id="5k-10k" />
                        <Label htmlFor="5k-10k">R5,000 - R10,000</Label>
                      </div>
                      <div className="flex items-center space-x-2 premium-card p-2 micro-bounce">
                        <RadioGroupItem value="10k-20k" id="10k-20k" />
                        <Label htmlFor="10k-20k">R10,000 - R20,000</Label>
                      </div>
                      <div className="flex items-center space-x-2 premium-card p-2 micro-bounce">
                        <RadioGroupItem value="over-20k" id="over-20k" />
                        <Label htmlFor="over-20k">Over R20,000</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="floating-label">
                    <Textarea
                      id="message"
                      name="message"
                      placeholder=" "
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="premium-input pt-6"
                    />
                    <Label htmlFor="message">Tell us about your project</Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full btn-3d",
                      "bg-gradient-to-r from-primary via-orange-400 to-rose-500",
                      "hover:from-rose-500 hover:via-orange-400 hover:to-primary",
                      "border-0 shadow-lg shadow-primary/20",
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending Message...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
