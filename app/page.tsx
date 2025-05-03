import PremiumHeader from "@/components/premium-header"
import PremiumHero from "@/components/premium-hero"
import WelcomeSection from "@/components/welcome-section"
import InteractiveServices from "@/components/interactive-services"
import Testimonials from "@/components/testimonials"
import WhyUs from "@/components/why-us"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollAnimations from "@/components/scroll-animations"
import DynamicSections from "@/components/dynamic-sections"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <ScrollAnimations />
      <PremiumHeader />
      <PremiumHero />
      <WelcomeSection />
      <InteractiveServices />
      <DynamicSections />
      <Testimonials />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  )
}
