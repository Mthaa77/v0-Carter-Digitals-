"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

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
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-4 md:px-8",
        scrolled ? "glassmorphism shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 md:h-12 md:w-12">
            <Image src="/logo.png" alt="Carter Digitals" width={48} height={48} className="object-contain" />
          </div>
          <span className="font-bold text-lg md:text-xl">Carter Digitals</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, "services")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Services
          </a>
          <a
            href="#pricing"
            onClick={(e) => scrollToSection(e, "pricing")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </a>
          <a
            href="#portfolio"
            onClick={(e) => scrollToSection(e, "portfolio")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Button asChild className="btn-3d">
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
              Get a Quote
            </a>
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-12">
                <a
                  href="#services"
                  onClick={(e) => {
                    document.querySelector("[data-radix-collection-item]")?.click() // Close sheet
                    scrollToSection(e, "services")
                  }}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Services
                </a>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    document.querySelector("[data-radix-collection-item]")?.click() // Close sheet
                    scrollToSection(e, "pricing")
                  }}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#portfolio"
                  onClick={(e) => {
                    document.querySelector("[data-radix-collection-item]")?.click() // Close sheet
                    scrollToSection(e, "portfolio")
                  }}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    document.querySelector("[data-radix-collection-item]")?.click() // Close sheet
                    scrollToSection(e, "contact")
                  }}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  Contact
                </a>
                <Button asChild className="mt-4 btn-3d">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      document.querySelector("[data-radix-collection-item]")?.click() // Close sheet
                      scrollToSection(e, "contact")
                    }}
                  >
                    Get a Quote
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
