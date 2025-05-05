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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <ScrollAnimations />
      <PremiumHeader />
      <PremiumHero />
      <PremiumWelcome />
      <InteractiveServices />
      <DynamicSections />
      <PremiumTestimonials />
      <WhyUs />
      <EnhancedContact />
      <Footer />
    </main>
  )
}
