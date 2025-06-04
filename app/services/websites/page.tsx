import type { Metadata } from "next"
import { Globe, Palette, Rocket, Code, Lock } from "lucide-react"
import ServicePageTemplate from "../service-page-template"
import { featureIcons } from "@/lib/service-icons"
import { ServiceStructuredData } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: "Professional Website Design & Development South Africa | Carter Digitals",
  description:
    "Custom, responsive website design and development services for businesses across South Africa. SEO-optimized, mobile-friendly websites that convert visitors into customers.",
  keywords: [
    "website design South Africa",
    "web development company Johannesburg",
    "affordable website design Cape Town",
    "responsive web design South Africa",
    "SEO website development",
    "custom website development Durban",
    "business website design South Africa",
    "professional web developer near me",
  ],
  alternates: {
    canonical: "https://carterdigitals.com/services/websites",
  },
}

export default function WebsitesPage() {
  return (
    <>
      <ServiceStructuredData
        name="Website Design & Development"
        description="Custom websites that are beautiful, functional, and optimized for conversions and SEO across South Africa."
        url="https://carterdigitals.com/services/websites"
        provider="Carter Digitals"
        price="R4,999"
      />

      <ServicePageTemplate
        icon={<Globe className="h-6 w-6" />}
        title="Website Design & Development"
        description="Custom websites that are beautiful, functional, and optimized for conversions and SEO."
        heroBackground="from-blue-950/30 to-background/80"
        features={[
          {
            icon: <Palette className="h-6 w-6 text-primary" />,
            title: "Custom Design",
            description: "Unique, branded designs that reflect your business identity and engage your audience.",
          },
          {
            icon: <featureIcons.responsive className="h-6 w-6 text-primary" />,
            title: "Responsive Development",
            description: "Websites that look and function perfectly on all devices, from desktops to smartphones.",
          },
          {
            icon: <Rocket className="h-6 w-6 text-primary" />,
            title: "Performance Optimization",
            description: "Lightning-fast loading speeds that improve user experience and search engine rankings.",
          },
          {
            icon: <featureIcons.seo className="h-6 w-6 text-primary" />,
            title: "SEO Friendly",
            description:
              "Built with search engine optimization in mind to help your business rank higher in search results.",
          },
          {
            icon: <Code className="h-6 w-6 text-primary" />,
            title: "Clean Code",
            description: "Well-structured, maintainable code that ensures stability and future extensibility.",
          },
          {
            icon: <Lock className="h-6 w-6 text-primary" />,
            title: "Security",
            description: "Enhanced security measures to protect your website and user data from threats.",
          },
        ]}
        pricing={[
          {
            title: "Basic",
            price: "R4,999",
            description: "Perfect for small businesses needing a professional online presence.",
            features: [
              "5-page responsive website",
              "Mobile-friendly design",
              "Contact form with email notifications",
              "Social media integration",
              "Basic SEO setup",
              "Google Analytics",
              "30 days of support",
              "WhatsApp integration",
              "SEO optimized",
            ],
          },
          {
            title: "Business",
            price: "R9,999",
            description: "Comprehensive solution for growing businesses with more advanced needs.",
            popular: true,
            features: [
              "10-page responsive website",
              "Custom design mockups",
              "Content management system",
              "Blog/news section",
              "Newsletter integration",
              "Advanced SEO setup",
              "Speed optimization",
              "Google Analytics & Search Console",
              "90 days of support",
              "WhatsApp & Facebook integration",
              "SEO optimized",
            ],
          },
          {
            title: "Premium",
            price: "R19,999",
            description: "Enterprise-grade solution with advanced features and optimizations.",
            features: [
              "20-page responsive website",
              "Custom animations",
              "Advanced CMS with user roles",
              "Multi-language support",
              "Payment gateway integration",
              "Comprehensive SEO strategy",
              "Advanced security features",
              "Performance monitoring",
              "1 year of priority support",
              "Monthly performance reports",
              "WhatsApp & Facebook integration",
              "SEO optimized",
            ],
          },
        ]}
        process={[
          {
            step: "01",
            title: "Discovery",
            description: "We analyze your business goals, target audience, and competition to create a strategic plan.",
          },
          {
            step: "02",
            title: "Design",
            description: "We create wireframes and design mockups for your approval before development begins.",
          },
          {
            step: "03",
            title: "Development",
            description: "Our team builds your website with clean code, responsive design, and optimized performance.",
          },
          {
            step: "04",
            title: "Launch & Support",
            description: "We launch your website and provide ongoing support to ensure everything runs smoothly.",
          },
        ]}
      />
    </>
  )
}
