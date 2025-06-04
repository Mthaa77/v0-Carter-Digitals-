"use client"

import Link from "next/link"

const Header = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    {
      name: "Blog",
      href: "/blog",
    },
  ]

  const scrollToSection = (e: any, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="bg-gray-100 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          My Website
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
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            Blog
          </Link>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>
        {/* Mobile Navigation - Assuming this is within a Radix UI Sheet component */}
        {/* Example structure - adjust based on your actual implementation */}
        {/* <SheetContent side="bottom" className="border-t border-muted md:hidden">
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
            <Link
              href="/blog"
              onClick={() => {
                document.querySelector("[data-radix-collection-item]")?.click() // Close sheet
              }}
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              Blog
            </Link>
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
        </SheetContent> */}
      </div>
    </header>
  )
}

export default Header
