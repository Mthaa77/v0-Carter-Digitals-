"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"
import { CheckCircle2, Loader2 } from "lucide-react"

interface PricingFormProps {
  packageName: string
  price: string
  onClose: () => void
}

export default function PricingForm({ packageName, price, onClose }: PricingFormProps) {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create FormData object from the form
      const formElement = e.currentTarget
      const formDataObj = new FormData(formElement)

      // Add package details
      formDataObj.append("packageName", packageName)
      formDataObj.append("price", price)

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

      setIsSubmitted(true)

      toast({
        title: "Request submitted!",
        description: `We'll contact you about the ${packageName} package soon.`,
      })

      // Reset form after 2 seconds and close
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
        setIsSubmitted(false)
        onClose()
      }, 2000)
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  return (
    <div className="p-4">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6" name="pricing">
          <input type="hidden" name="form-name" value="pricing" />
          <input type="hidden" name="packageName" value={packageName} />
          <input type="hidden" name="price" value={price} />

          <div className="space-y-2 text-center mb-6">
            <h3 className="text-2xl font-bold">{packageName} Package</h3>
            <p className="text-muted-foreground">
              Complete this form to get started with our {packageName.toLowerCase()} package at {price}
            </p>
          </div>

          <div className="space-y-4">
            <div className="floating-label">
              <Input
                id="name"
                name="name"
                placeholder=" "
                value={formData.name}
                onChange={handleChange}
                required
                className="input-3d"
              />
              <Label htmlFor="name">Full Name</Label>
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
                className="input-3d"
              />
              <Label htmlFor="email">Email Address</Label>
            </div>

            <div className="floating-label">
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder=" "
                value={formData.phone}
                onChange={handleChange}
                className="input-3d"
              />
              <Label htmlFor="phone">Phone Number (Optional)</Label>
            </div>

            <div className="floating-label">
              <Textarea
                id="message"
                name="message"
                placeholder=" "
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="input-3d pt-6"
              />
              <Label htmlFor="message">Project Details</Label>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={onClose} className="btn-3d">
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="btn-3d">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing
                </>
              ) : (
                "Submit Request"
              )}
            </Button>
          </div>
        </form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-10 text-center"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-6">
            Your request for the {packageName} package has been submitted. We'll contact you shortly to discuss the next
            steps.
          </p>
        </motion.div>
      )}
    </div>
  )
}
