import Link from "next/link"
import type { Metadata } from "next"
import { animatedServiceIcons } from "@/lib/service-icons"

export const metadata: Metadata = {
  title: "Professional Web Design & Development Services | Carter Digitals South Africa",
  description:
    "Comprehensive web design and development services in South Africa. From responsive websites to e-commerce solutions, we offer affordable, SEO-optimized web services in Johannesburg, Cape Town, and Durban.",
  keywords: [
    "website design services South Africa",
    "web development company Johannesburg",
    "affordable website design Cape Town",
    "e-commerce website development South Africa",
    "WordPress website design services",
    "responsive web design South Africa",
    "SEO website development",
    "custom website development Durban",
    "business website design South Africa",
  ],
  alternates: {
    canonical: "https://carterdigitals.com/services",
  },
}

export default function ServicesPage() {
  // Convert the animatedServiceIcons object to an array with IDs
  const serviceIconsArray = Object.entries(animatedServiceIcons).map(([id, icons]) => ({
    id,
    title: id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, " "),
    icon: icons.icon,
    activeIcon: icons.activeIcon,
    description: getServiceDescription(id),
  }))

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-background/80">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_var(--primary)_0%,_transparent_70%)]"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
              Professional Web Design & Development Services
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-foreground/80">
              Comprehensive digital solutions to elevate your brand and grow your business across South Africa
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Web Design & Development Services</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            From responsive website design to e-commerce development, we offer affordable, SEO-optimized web solutions
            for businesses in Johannesburg, Cape Town, Durban, and across South Africa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceIconsArray.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/20"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 mr-4">
                    <div className="group-hover:hidden">{service.icon}</div>
                    <div className="hidden group-hover:block">{service.activeIcon}</div>
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-foreground/80 mb-4">{service.description}</p>
                <div className="flex items-center text-primary font-medium">
                  <span>Learn more</span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Web Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We learn about your business, goals, and requirements to create a tailored solution.",
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a comprehensive strategy and roadmap for your project.",
              },
              {
                step: "03",
                title: "Implementation",
                description: "Our team brings your vision to life with expert execution and attention to detail.",
              },
              {
                step: "04",
                title: "Growth",
                description: "We provide ongoing support and optimization to ensure continued success.",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/20 h-full">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-foreground/80">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Web Design & Development Across South Africa
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            We provide professional web design and development services to businesses throughout South Africa, with
            specialized focus on these major cities:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                city: "Johannesburg",
                description: "Web development services for businesses in South Africa's economic hub.",
              },
              {
                city: "Cape Town",
                description: "Affordable website design for businesses in the Mother City.",
              },
              {
                city: "Durban",
                description: "Custom website development for KwaZulu-Natal businesses.",
              },
              {
                city: "Pretoria",
                description: "Professional web design services for the administrative capital.",
              },
            ].map((location, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/20"
              >
                <h3 className="text-xl font-semibold mb-3">{location.city}</h3>
                <p className="text-foreground/80">{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Web Project?</h2>
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
    </div>
  )
}

// Helper function to get service descriptions
function getServiceDescription(serviceId: string): string {
  const descriptions: Record<string, string> = {
    websites:
      "Custom website design and development tailored to your brand and business goals. SEO-optimized and mobile-responsive for businesses across South Africa.",
    ecommerce:
      "Powerful online stores with seamless checkout experiences, inventory management, and secure payment processing for South African businesses.",
    branding:
      "Comprehensive brand identity design including logos, color schemes, typography, and brand guidelines to make your business stand out.",
    marketing:
      "Strategic digital marketing campaigns to increase visibility, drive traffic, and generate qualified leads for your South African business.",
    content:
      "Engaging content creation for websites, social media, blogs, and marketing materials that resonates with your target audience.",
    "virtual-assistants":
      "Intelligent AI-powered virtual assistants that can answer calls, schedule appointments, and provide information 24/7.",
    presentations:
      "Professional presentation design for pitches, meetings, conferences, and training sessions that make an impact.",
  }

  return (
    descriptions[serviceId] ||
    "Innovative digital solutions to help your business grow and succeed in the competitive South African market."
  )
}
