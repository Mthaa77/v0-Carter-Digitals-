import type { Metadata } from "next"
import Link from "next/link"
import PremiumHeader from "@/components/premium-header"
import Footer from "@/components/footer"
import { MapPin, Globe, ShoppingCart, Palette, Megaphone, FileText } from "lucide-react"
import { ServiceStructuredData } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: "Website Design & Development Durban | Carter Digitals",
  description:
    "Professional website design and development services in Durban. Custom, responsive, SEO-optimized websites for businesses in KwaZulu-Natal.",
  keywords: [
    "website design Durban",
    "web development Durban",
    "website designer Umhlanga",
    "web developer Ballito",
    "ecommerce website Durban",
    "responsive web design KwaZulu-Natal",
    "SEO website development Durban",
    "affordable website design Durban",
  ],
  alternates: {
    canonical: "https://carterdigitals.com/services/durban",
  },
}

export default function DurbanPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ServiceStructuredData
        name="Website Design & Development in Durban"
        description="Professional website design and development services for businesses in Durban and across KwaZulu-Natal."
        url="https://carterdigitals.com/services/durban"
        provider="Carter Digitals"
        price="R4,999"
      />

      <PremiumHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--primary)_0%,_transparent_70%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
              Website Design & Development in Durban
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-foreground/80">
              Custom, responsive websites for businesses across Durban and KwaZulu-Natal
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
              >
                Get a Quote
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 font-medium hover:bg-white/20 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Web Services in Durban</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-6 w-6 text-primary" />,
                title: "Website Design & Development",
                description: "Custom websites that are beautiful, functional, and optimized for conversions and SEO.",
                link: "/services/websites",
              },
              {
                icon: <ShoppingCart className="h-6 w-6 text-primary" />,
                title: "E-commerce Development",
                description:
                  "Online stores with seamless checkout experiences, inventory management, and payment processing.",
                link: "/services/ecommerce",
              },
              {
                icon: <Palette className="h-6 w-6 text-primary" />,
                title: "Logo & Brand Identity",
                description:
                  "Professional brand identity design that captures your essence and resonates with your audience.",
                link: "/services/branding",
              },
              {
                icon: <Megaphone className="h-6 w-6 text-primary" />,
                title: "Digital Marketing",
                description:
                  "Strategic digital marketing campaigns to increase visibility, drive traffic, and generate leads.",
                link: "/services/marketing",
              },
              {
                icon: <FileText className="h-6 w-6 text-primary" />,
                title: "Content Creation",
                description: "Engaging content creation for websites, social media, blogs, and marketing materials.",
                link: "/services/content",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M2 3h20" />
                    <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                    <path d="m7 21 5-5 5 5" />
                  </svg>
                ),
                title: "Professional Presentations",
                description: "Compelling presentations that help you pitch your ideas with confidence and style.",
                link: "/services/presentations",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/20 group"
              >
                <div className="p-3 rounded-full bg-primary/10 inline-block mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-foreground/80 mb-4">{service.description}</p>
                <Link href={service.link} className="flex items-center text-primary font-medium group-hover:underline">
                  <span>Learn more</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Areas We Serve in Durban</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            We provide professional web design and development services to businesses throughout Durban and surrounding
            areas:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              "Umhlanga",
              "Ballito",
              "Westville",
              "Morningside",
              "Berea",
              "Pinetown",
              "Amanzimtoti",
              "Hillcrest",
              "La Lucia",
              "Umdloti",
              "Phoenix",
              "Chatsworth",
            ].map((area, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center"
              >
                <p>{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Carter Digitals in Durban</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Local Expertise",
                description: "We understand the Durban market and create websites that resonate with local audiences.",
              },
              {
                title: "Affordable Pricing",
                description:
                  "Competitive rates without compromising on quality, designed to fit Durban business budgets.",
              },
              {
                title: "Responsive Support",
                description: "Quick response times and dedicated support for all our Durban clients.",
              },
              {
                title: "SEO Optimization",
                description: "We optimize your website to rank well in local Durban and South African searches.",
              },
              {
                title: "Custom Solutions",
                description: "Tailored web solutions that address the specific needs of your Durban business.",
              },
              {
                title: "Proven Results",
                description: "A portfolio of successful projects for businesses across Durban and KwaZulu-Natal.",
              },
            ].map((point, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
                <p className="text-foreground/80">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Web Project in Durban?</h2>
            <p className="text-xl mb-8 text-foreground/80">
              Contact us today to discuss how we can help you achieve your business goals with a professional,
              SEO-optimized website.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-primary text-white font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
