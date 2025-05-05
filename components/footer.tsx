"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { handleSmoothScroll } from "@/lib/smooth-scroll"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-background py-12 border-t border-white/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 futuristic-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-[100px]"></div>
      <div className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-blue-500/5 blur-[80px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="reveal-on-scroll">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, "services")}
                  className="text-muted-foreground hover:text-primary transition-colors micro-slide"
                >
                  Website Design & Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, "services")}
                  className="text-muted-foreground hover:text-primary transition-colors micro-slide"
                >
                  E-commerce Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, "services")}
                  className="text-muted-foreground hover:text-primary transition-colors micro-slide"
                >
                  Logo & Brand Identity
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, "services")}
                  className="text-muted-foreground hover:text-primary transition-colors micro-slide"
                >
                  Flyers & Digital Media
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, "services")}
                  className="text-muted-foreground hover:text-primary transition-colors micro-slide"
                >
                  Professional Presentations
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, "services")}
                  className="text-muted-foreground hover:text-primary transition-colors micro-slide"
                >
                  CV/Resume Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, "services")}
                  className="text-muted-foreground hover:text-primary transition-colors micro-slide"
                >
                  Copywriting & SEO
                </a>
              </li>
            </ul>
          </div>

          <div className="reveal-on-scroll">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToTop()
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors micro-slide"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleSmoothScroll(e, "services")}
                  className="text-muted-foreground hover:text-primary transition-colors micro-slide"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => handleSmoothScroll(e, "pricing")}
                  className="text-muted-foreground hover:text-primary transition-colors micro-slide"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleSmoothScroll(e, "portfolio")}
                  className="text-muted-foreground hover:text-primary transition-colors micro-slide"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "contact")}
                  className="text-muted-foreground hover:text-primary transition-colors micro-slide"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors micro-slide">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors micro-slide">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="reveal-on-scroll">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <strong className="text-foreground">Phone:</strong> 072 402 6893
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Email:</strong> kadiakakabelo4@gmail.com
              </li>
              <li className="text-muted-foreground">
                <strong className="text-foreground">Hours:</strong> Mon-Fri: 9am - 6pm SAST
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="https://facebook.com/carterdigitals" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full premium-btn-outline micro-bounce">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full premium-btn-outline micro-bounce">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full premium-btn-outline micro-bounce">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full premium-btn-outline micro-bounce">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Carter Digitals. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted by <span className="font-semibold text-gradient-primary">Kabelo Kadiaka</span> for Carter Digitals —
            SA born, globally focused.
          </p>
        </div>

        <Button
          variant="outline"
          size="icon"
          className={cn(
            "fixed bottom-6 right-6 rounded-full shadow-lg z-10 premium-btn-outline",
            "backdrop-blur-md bg-background/50 border-white/10",
          )}
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
          <span className="sr-only">Back to top</span>
        </Button>
      </div>
    </footer>
  )
}
