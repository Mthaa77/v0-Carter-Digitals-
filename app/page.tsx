import Header from "@/components/header"
import Hero from "@/components/hero"
import WelcomeSection from "@/components/welcome-section"
import InteractiveServices from "@/components/interactive-services"
import Pricing from "@/components/pricing"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import WhyUs from "@/components/why-us"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <WelcomeSection />
      <InteractiveServices />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  )
}
