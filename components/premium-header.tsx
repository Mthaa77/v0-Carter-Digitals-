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
import { motion, AnimatePresence } from "framer-motion"

export default function PremiumHeader() {
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

  const navItems = [
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 px-4 md:px-8",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-10 w-10 md:h-12 md:w-12 overflow-hidden rounded-xl">
            <Image
              src="/logo.png"
              alt="Carter Digitals"
              width={48}
              height={48}
              className="object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-lg md:text-xl overflow-hidden"
          >
            Carter Digitals
          </motion.span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <AnimatePresence>
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.1 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sm font-medium rounded-full px-4 hover:bg-primary/10 hover:text-primary transition-colors"
                  asChild
                >
                  <a href={`#${item.id}`} onClick={(e) => scrollToSection(e, item.id)}>
                    {item.name}
                  </a>
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Button
            asChild
            className={cn(
              "btn-3d rounded-full",
              "bg-gradient-to-r from-primary via-orange-400 to-rose-500",
              "hover:from-rose-500 hover:via-orange-400 hover:to-primary",
              "border-0 shadow-md shadow-primary/20",
            )}
          >
            <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
              Get a Quote
            </a>
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] border-l border-border/50 backdrop-blur-md bg-background/95"
            >
              <nav className="flex flex-col gap-6 mt-12">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      document.querySelector("[data-radix-collection-item]")?.click() // Close sheet
                      scrollToSection(e, item.id)
                    }}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <Button
                  asChild
                  className={cn(
                    "mt-4 btn-3d",
                    "bg-gradient-to-r from-primary via-orange-400 to-rose-500",
                    "hover:from-rose-500 hover:via-orange-400 hover:to-primary",
                    "border-0 shadow-md shadow-primary/20",
                  )}
                >
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
