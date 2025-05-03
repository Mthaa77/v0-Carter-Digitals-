"use client"

import type React from "react"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Smooth scroll function for navigation links
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
    <footer className="bg-background py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Website Design & Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  E-commerce Solutions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Logo & Brand Identity
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Flyers & Digital Media
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Professional Presentations
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  CV/Resume Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Copywriting & SEO
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => scrollToSection(e, "pricing")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => scrollToSection(e, "portfolio")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
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
                  <Button variant="outline" size="icon" className="rounded-full btn-3d">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full btn-3d">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full btn-3d">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full btn-3d">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Carter Digitals. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted by <span className="font-semibold">Kabelo Kadiaka</span> for Carter Digitals — SA born, globally
            focused.
          </p>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-6 right-6 rounded-full shadow-lg z-10 btn-3d"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-5 w-5" />
          <span className="sr-only">Back to top</span>
        </Button>
      </div>
    </footer>
  )
}
