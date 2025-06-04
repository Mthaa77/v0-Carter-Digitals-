import { Search, Mail, Users, BarChart4, Megaphone } from "lucide-react"
import ServicePageTemplate from "../service-page-template"
import { featureIcons } from "@/lib/service-icons"

export const metadata = {
  title: "Digital Marketing | Carter Digitals",
  description: "Strategic digital marketing campaigns to increase visibility, drive traffic, and generate leads.",
}

export default function MarketingPage() {
  return (
    <ServicePageTemplate
      icon={<Megaphone className="h-6 w-6" />}
      title="Digital Marketing Services"
      description="Strategic digital marketing campaigns to increase visibility, drive traffic, and generate qualified leads."
      heroBackground="from-green-950/30 to-background/80"
      features={[
        {
          icon: <Search className="h-6 w-6 text-primary" />,
          title: "Search Engine Optimization",
          description: "Improve your search rankings and drive organic traffic through targeted SEO strategies.",
        },
        {
          icon: <featureIcons.marketing className="h-6 w-6 text-primary" />,
          title: "Social Media Marketing",
          description: "Build brand awareness and engage with your audience on key social platforms.",
        },
        {
          icon: <Mail className="h-6 w-6 text-primary" />,
          title: "Email Marketing",
          description: "Nurture leads and drive conversions with targeted email campaigns and automations.",
        },
        {
          icon: <featureIcons.analytics className="h-6 w-6 text-primary" />,
          title: "Paid Advertising",
          description: "Maximize ROI with strategic PPC campaigns across search and social platforms.",
        },
        {
          icon: <Users className="h-6 w-6 text-primary" />,
          title: "Content Marketing",
          description: "Attract and engage your target audience with valuable, relevant content.",
        },
        {
          icon: <BarChart4 className="h-6 w-6 text-primary" />,
          title: "Analytics & Reporting",
          description: "Gain insights into campaign performance with comprehensive data analysis.",
        },
      ]}
      pricing={[
        {
          title: "Starter Package",
          price: "R3,999/mo",
          description: "Essential digital marketing services for small businesses with limited budgets.",
          features: [
            "Basic SEO optimization",
            "Social media management (2 platforms)",
            "Monthly content creation (2 posts)",
            "Monthly performance report",
            "Google Analytics setup",
            "Email marketing setup",
            "3-month minimum commitment",
          ],
        },
        {
          title: "Growth Package",
          price: "R7,999/mo",
          description: "Comprehensive marketing solution for businesses looking to scale their online presence.",
          popular: true,
          features: [
            "Advanced SEO strategy",
            "Social media management (4 platforms)",
            "Weekly content creation",
            "Email marketing campaigns",
            "PPC campaign management",
            "Competitor analysis",
            "Bi-weekly performance reporting",
            "Conversion rate optimization",
            "6-month minimum commitment",
          ],
        },
        {
          title: "Premium Package",
          price: "R14,999/mo",
          description: "All-inclusive marketing solution for businesses seeking maximum digital growth.",
          features: [
            "All Growth Package features",
            "Custom marketing strategy",
            "Daily social media management",
            "Premium content creation",
            "Advanced PPC campaigns",
            "Marketing automation",
            "Lead generation campaigns",
            "Customer journey mapping",
            "Weekly strategy calls",
            "12-month minimum commitment",
          ],
        },
      ]}
      process={[
        {
          step: "01",
          title: "Audit & Strategy",
          description: "We analyze your current marketing efforts and develop a customized strategy for your goals.",
        },
        {
          step: "02",
          title: "Implementation",
          description: "We execute the marketing plan across your chosen channels with expert attention to detail.",
        },
        {
          step: "03",
          title: "Optimization",
          description: "We continuously monitor performance and optimize campaigns for maximum ROI.",
        },
        {
          step: "04",
          title: "Reporting & Growth",
          description: "We provide transparent reporting on results and recommendations for continued growth.",
        },
      ]}
    />
  )
}
