"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react"

interface PricingFormProps {
  packageName: string
  price: string
  onClose: () => void
}

interface FormState {
  name: string
  email: string
  phone: string
  message: string
}

export default function PricingForm({ packageName, price, onClose }: PricingFormProps) {
  const { toast } = useToast()
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formErrors, setFormErrors] = useState<Partial<FormState>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
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
            <h3 className="text-2xl font-bold">{packageName}</h3>
            <p className="text-muted-foreground">
              Complete this form to get started with our {packageName.toLowerCase()} at {price}
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="floating-label">
                <Input
                  id="name"
                  name="name"
                  placeholder=" "
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`input-3d ${formErrors.name ? "border-red-500 border-2" : ""}`}
                />
                <Label htmlFor="name" className={formErrors.name ? "text-red-500" : ""}>
                  Full Name
                </Label>
              </div>
              {formErrors.name && (
                <p className="text-red-500 text-xs flex items-center gap-1 ml-1">
                  <AlertCircle className="h-3 w-3" /> {formErrors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <div className="floating-label">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`input-3d ${formErrors.email ? "border-red-500 border-2" : ""}`}
                />
                <Label htmlFor="email" className={formErrors.email ? "text-red-500" : ""}>
                  Email Address
                </Label>
              </div>
              {formErrors.email && (
                <p className="text-red-500 text-xs flex items-center gap-1 ml-1">
                  <AlertCircle className="h-3 w-3" /> {formErrors.email}
                </p>
              )}
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
            <Button
              type="submit"
              disabled={isSubmitting}
              className="btn-3d bg-gradient-to-r from-primary to-secondary text-white hover:from-secondary hover:to-primary"
            >
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
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 pulse-glow">
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
