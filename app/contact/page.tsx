import type { Metadata } from "next"
import PremiumHeader from "@/components/premium-header"
import Footer from "@/components/footer"
import EnhancedContact from "@/components/enhanced-contact"

export const metadata: Metadata = {
  title: "Contact Us | Website Design & Development South Africa | Carter Digitals",
  description:
    "Get in touch with Carter Digitals for professional website design and development services in South Africa. Request a quote for your web project in Johannesburg, Cape Town, or Durban.",
  keywords: [
    "contact web developer South Africa",
    "website design quote Johannesburg",
    "web development services Cape Town",
    "hire web designer Durban",
    "website development company contact",
    "professional web developer near me",
  ],
  alternates: {
    canonical: "https://carterdigitals.com/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PremiumHeader />

      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Carter Digitals</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team for professional website design and development services across South Africa.
              We serve clients in Johannesburg, Cape Town, Durban, and nationwide.
            </p>
          </div>
        </div>
      </section>

      <EnhancedContact />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Service Areas</h2>
              <p className="mb-4">
                We provide professional web design and development services throughout South Africa, with specialized
                focus on these major cities:
              </p>
              <ul className="space-y-2">
                <li>• Johannesburg - Web development services for businesses in South Africa's economic hub</li>
                <li>• Cape Town - Affordable website design for businesses in the Mother City</li>
                <li>• Durban - Custom website development for KwaZulu-Natal businesses</li>
                <li>• Pretoria - Professional web design services for the administrative capital</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Services</h2>
              <p className="mb-4">
                From responsive website design to e-commerce development, we offer comprehensive web solutions:
              </p>
              <ul className="space-y-2">
                <li>• Custom Website Design & Development</li>
                <li>• E-commerce Website Development</li>
                <li>• WordPress Website Design</li>
                <li>• Responsive Web Design</li>
                <li>• SEO Website Development</li>
                <li>• Logo & Brand Identity Design</li>
                <li>• Virtual Assistants & AI Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
