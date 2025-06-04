import type { Metadata } from "next"
import PremiumHeader from "@/components/premium-header"
import PremiumHero from "@/components/premium-hero"
import PremiumWelcome from "@/components/premium-welcome"
import InteractiveServices from "@/components/interactive-services"
import PremiumTestimonials from "@/components/premium-testimonials"
import WhyUs from "@/components/why-us"
import EnhancedContact from "@/components/enhanced-contact"
import Footer from "@/components/footer"
import ScrollAnimations from "@/components/scroll-animations"
import DynamicSections from "@/components/dynamic-sections"
import Link from "next/link"
import { animatedServiceIcons } from "@/lib/service-icons"

export const metadata: Metadata = {
  title: "Carter Digitals | Professional Website Design & Development South Africa",
  description:
    "Award-winning website design and development services in South Africa. We create responsive, SEO-optimized websites for businesses in Johannesburg, Cape Town, and Durban. Get affordable web solutions that convert.",
  keywords: [
    "website design South Africa",
    "web development company Johannesburg",
    "affordable website design Cape Town",
    "e-commerce website development South Africa",
    "responsive web design South Africa",
    "SEO website development",
    "professional web developer near me",
  ],
}

export default function Home() {
  // Convert the animatedServiceIcons object to an array with IDs
  const serviceIconsArray = Object.entries(animatedServiceIcons).map(([id, icons]) => ({
    id,
    title: id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, " "),
    icon: icons.icon,
    activeIcon: icons.activeIcon,
  }))

  return (
    <main className="flex min-h-screen flex-col">
      <ScrollAnimations />
      <PremiumHeader />
      <PremiumHero />
      <PremiumWelcome />
      <InteractiveServices />
      <div className="container mx-auto my-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {serviceIconsArray.map((service) => (
          <div key={service.id} className="relative group">
            <Link
              href={`/services/${service.id}`}
              className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/20"
            >
              <div className="mb-3 p-3 rounded-full bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="group-hover:hidden">{service.icon}</div>
                <div className="hidden group-hover:block">{service.activeIcon}</div>
              </div>
              <h3 className="text-center font-medium">{service.title}</h3>
            </Link>
          </div>
        ))}
      </div>
      <DynamicSections />
      <PremiumTestimonials />
      <WhyUs />
      <EnhancedContact />
      <Footer />
    </main>
  )
}
