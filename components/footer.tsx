"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp, Mail, Phone, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { handleSmoothScroll } from "@/lib/smooth-scroll"
import { Input } from "@/components/ui/input"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-background to-background/90 py-16 border-t border-white/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 futuristic-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-[100px]"></div>
      <div className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full bg-blue-500/5 blur-[80px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Footer top section with logo and newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-12 border-b border-white/10">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center">
              <div className="relative w-10 h-10 mr-2 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary">CD</span>
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse"></div>
              </div>
              <span className="text-xl font-bold tracking-tight">Carter Digitals</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Professional web design and development services across South Africa. Elevate your brand with cutting-edge
              digital solutions.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <h3 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/5 border-white/10 rounded-full"
              />
              <Button className="rounded-full bg-primary hover:bg-primary/90">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="reveal-on-scroll space-y-4">
            <h3 className="text-lg font-semibold mb-4 inline-flex items-center">
              <span className="w-8 h-0.5 bg-primary mr-2"></span>
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/websites"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Website Design & Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/branding"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Logo & Brand Identity
                </Link>
              </li>
              <li>
                <Link
                  href="/services/marketing"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/content"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Content Creation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/virtual-assistants"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Virtual Assistants
                </Link>
              </li>
              <li>
                <Link
                  href="/services/presentations"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Professional Presentations
                </Link>
              </li>
            </ul>
          </div>

          <div className="reveal-on-scroll space-y-4">
            <h3 className="text-lg font-semibold mb-4 inline-flex items-center">
              <span className="w-8 h-0.5 bg-primary mr-2"></span>
              Locations
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/johannesburg"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Website Design Johannesburg
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cape-town"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Website Design Cape Town
                </Link>
              </li>
              <li>
                <Link
                  href="/services/durban"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Website Design Durban
                </Link>
              </li>
              <li>
                <Link
                  href="/services/pretoria"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Website Design Pretoria
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  All South Africa Locations
                </Link>
              </li>
            </ul>
          </div>

          <div className="reveal-on-scroll space-y-4">
            <h3 className="text-lg font-semibold mb-4 inline-flex items-center">
              <span className="w-8 h-0.5 bg-primary mr-2"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToTop()
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Home
                </a>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => handleSmoothScroll(e, "pricing")}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleSmoothScroll(e, "portfolio")}
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Portfolio
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="reveal-on-scroll space-y-4">
            <h3 className="text-lg font-semibold mb-4 inline-flex items-center">
              <span className="w-8 h-0.5 bg-primary mr-2"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">072 402 6893</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">kadiakakabelo4@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-muted-foreground">Mon-Fri: 9am - 6pm SAST</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">South Africa</p>
                </div>
              </li>
            </ul>

            <div className="mt-6 space-y-3">
              <h4 className="font-semibold">Follow Us</h4>
              <div className="flex space-x-3">
                <Link
                  href="https://facebook.com/carterdigitals"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} Carter Digitals. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>
              Crafted by <span className="font-semibold text-gradient-primary">Kabelo Kadiaka</span>
            </span>
            <span className="hidden sm:inline">|</span>
            <span>SA born, globally focused.</span>
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className={cn(
            "fixed bottom-6 right-6 rounded-full shadow-lg z-10",
            "backdrop-blur-md bg-primary/10 border-primary/20 hover:bg-primary/20",
            "transition-all duration-300 hover:scale-110",
          )}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </div>
    </footer>
  )
}
