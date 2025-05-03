"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export default function NewsletterBar() {
  const { toast } = useToast()
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (email) {
      setIsSubmitting(true)

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        toast({
          title: "Success!",
          description: "You've been subscribed to our newsletter.",
        })
        setEmail("")
      }, 1500)
    }
  }

  return (
    <section className="py-8 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Join 500+ founders getting free design tips</h3>
            <p className="text-muted-foreground">Subscribe to our newsletter for weekly insights and updates.</p>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
            <div className="floating-label relative flex-1">
              <Input
                type="email"
                id="newsletter-email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-3d"
              />
              <label
                htmlFor="newsletter-email"
                className="absolute text-sm text-muted-foreground top-1/2 -translate-y-1/2 left-3 transition-all duration-200 pointer-events-none"
              >
                Enter your email
              </label>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="btn-3d bg-gradient-to-r from-primary to-orange-400 hover:from-orange-400 hover:to-primary"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Subscribing...
                </>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
