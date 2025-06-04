import type { Metadata } from "next"
import { ShoppingCart, CreditCard, Package, Users, BarChart, Shield } from "lucide-react"
import ServicePageTemplate from "../service-page-template"
import { featureIcons } from "@/lib/service-icons"
import { ServiceStructuredData, FAQStructuredData } from "@/components/seo/structured-data"

export const metadata: Metadata = {
  title: "E-commerce Website Development South Africa | Carter Digitals",
  description:
    "Professional e-commerce website development services in South Africa. Custom online stores with secure payment processing, inventory management, and mobile optimization.",
  keywords: [
    "e-commerce website development South Africa",
    "online store development Johannesburg",
    "e-commerce solutions Cape Town",
    "shopping cart integration",
    "payment gateway integration South Africa",
    "mobile e-commerce development",
    "WooCommerce development South Africa",
  ],
  alternates: {
    canonical: "https://carterdigitals.com/services/ecommerce",
  },
}

export default function EcommercePage() {
  const faqItems = [
    {
      question: "Which e-commerce platform do you use?",
      answer:
        "We work with various platforms including WooCommerce, Shopify, and custom solutions depending on your specific needs and requirements.",
    },
    {
      question: "Can you migrate my existing store to a new platform?",
      answer:
        "Yes, we offer migration services that include transferring products, customer data, and order history to your new store.",
    },
    {
      question: "How long does it take to build an e-commerce store?",
      answer:
        "The timeline varies depending on complexity, but typically ranges from 4-12 weeks from concept to launch.",
    },
    {
      question: "Do you offer marketing services for my online store?",
      answer:
        "Yes, we provide marketing services including SEO, PPC, email marketing, and social media marketing to drive traffic to your store.",
    },
    {
      question: "Can I manage the store myself after it's built?",
      answer: "We build user-friendly admin systems and provide training so you can confidently manage your store.",
    },
  ]

  return (
    <>
      <ServiceStructuredData
        name="E-commerce Website Development"
        description="Custom online stores with seamless checkout experiences, inventory management, and payment processing for South African businesses."
        url="https://carterdigitals.com/services/ecommerce"
        provider="Carter Digitals"
        price="R14,999"
      />

      <FAQStructuredData questions={faqItems} />

      <ServicePageTemplate
        icon={<ShoppingCart className="h-6 w-6" />}
        title="E-commerce Development"
        description="Custom online stores with seamless checkout experiences, inventory management, and payment processing."
        heroBackground="from-purple-950/30 to-background/80"
        features={[
          {
            icon: <CreditCard className="h-6 w-6 text-primary" />,
            title: "Secure Payments",
            description: "Integration with trusted payment gateways to provide secure and convenient checkout options.",
          },
          {
            icon: <Package className="h-6 w-6 text-primary" />,
            title: "Inventory Management",
            description: "Robust systems to track stock levels, manage products, and automate inventory updates.",
          },
          {
            icon: <featureIcons.mobile className="h-6 w-6 text-primary" />,
            title: "Mobile Shopping",
            description: "Responsive design that provides an optimal shopping experience on all devices.",
          },
          {
            icon: <Users className="h-6 w-6 text-primary" />,
            title: "Customer Accounts",
            description: "User-friendly account creation, order history, and personalized shopping experiences.",
          },
          {
            icon: <BarChart className="h-6 w-6 text-primary" />,
            title: "Analytics & Reporting",
            description: "Comprehensive data on sales, customer behavior, and store performance.",
          },
          {
            icon: <Shield className="h-6 w-6 text-primary" />,
            title: "Security",
            description: "Advanced security measures to protect customer data and prevent fraud.",
          },
        ]}
        pricing={[
          {
            title: "Starter Store",
            price: "R14,999",
            description: "Essential e-commerce functionality for small businesses just starting to sell online.",
            features: [
              "Up to 100 products",
              "Responsive design",
              "Basic payment gateway integration",
              "Product management system",
              "Order tracking",
              "Customer accounts",
              "Basic shipping options",
              "30 days of support",
              "WhatsApp integration",
              "SEO optimized",
            ],
          },
          {
            title: "Business Store",
            price: "R24,999",
            description: "Comprehensive solution for established businesses looking to scale their online sales.",
            popular: true,
            features: [
              "Up to 500 products",
              "Custom design",
              "Multiple payment options",
              "Advanced inventory management",
              "Discount codes and promotions",
              "Automated email notifications",
              "Multiple shipping methods",
              "Product reviews and ratings",
              "90 days of support",
              "WhatsApp & Facebook integration",
              "SEO optimized",
            ],
          },
          {
            title: "Enterprise Store",
            price: "R49,999",
            description: "Full-featured solution for large businesses with complex e-commerce requirements.",
            features: [
              "Unlimited products",
              "Custom shopping experience",
              "Multi-currency support",
              "Advanced analytics dashboard",
              "CRM integration",
              "Abandoned cart recovery",
              "Subscription products",
              "Loyalty program",
              "Marketplace features",
              "1 year of priority support",
              "WhatsApp & Facebook integration",
              "SEO optimized",
            ],
          },
        ]}
        process={[
          {
            step: "01",
            title: "Planning",
            description:
              "We analyze your products, target market, and business goals to create a strategic e-commerce plan.",
          },
          {
            step: "02",
            title: "Store Design",
            description:
              "We design a user-friendly, conversion-optimized store layout focused on showcasing your products.",
          },
          {
            step: "03",
            title: "Development",
            description: "Our team builds your store with secure payments, inventory management, and user accounts.",
          },
          {
            step: "04",
            title: "Launch & Growth",
            description: "We launch your store and provide strategies to drive traffic and increase conversions.",
          },
        ]}
        faq={faqItems}
      />
    </>
  )
}
