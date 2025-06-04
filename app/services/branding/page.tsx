import { Palette, FileImage, Eye, PenTool, Target, LayoutGrid } from "lucide-react"
import ServicePageTemplate from "../service-page-template"
import { featureIcons } from "@/lib/service-icons"

export const metadata = {
  title: "Logo & Brand Kits | Carter Digitals",
  description: "Professional brand identity design that captures your essence and resonates with your audience.",
}

export default function BrandingPage() {
  return (
    <ServicePageTemplate
      icon={<Palette className="h-6 w-6" />}
      title="Logo & Brand Kits"
      description="Professional brand identity design that captures your essence and resonates with your audience."
      heroBackground="from-pink-950/30 to-background/80"
      features={[
        {
          icon: <FileImage className="h-6 w-6 text-primary" />,
          title: "Logo Design",
          description: "Distinctive, memorable logos that communicate your brand's values and personality.",
        },
        {
          icon: <Eye className="h-6 w-6 text-primary" />,
          title: "Visual Identity",
          description: "Comprehensive visual systems including color palettes, typography, and graphic elements.",
        },
        {
          icon: <PenTool className="h-6 w-6 text-primary" />,
          title: "Brand Guidelines",
          description: "Detailed documentation for consistent application of your brand across all touchpoints.",
        },
        {
          icon: <featureIcons.content className="h-6 w-6 text-primary" />,
          title: "Brand Messaging",
          description: "Clear, compelling messaging that communicates your brand's unique value proposition.",
        },
        {
          icon: <Target className="h-6 w-6 text-primary" />,
          title: "Brand Strategy",
          description: "Strategic positioning to differentiate your brand and connect with your target audience.",
        },
        {
          icon: <LayoutGrid className="h-6 w-6 text-primary" />,
          title: "Brand Assets",
          description: "Custom templates for business cards, letterheads, social media, and marketing materials.",
        },
      ]}
      pricing={[
        {
          title: "Logo Design",
          price: "R2,499",
          description: "Professional logo design for businesses just starting their branding journey.",
          features: [
            "3 initial logo concepts",
            "2 rounds of revisions",
            "Final logo in multiple formats",
            "Basic color variations",
            "Simple brand guidelines",
            "Full copyright ownership",
            "14-day turnaround",
          ],
        },
        {
          title: "Brand Identity",
          price: "R4,999",
          description: "Comprehensive brand identity package for established businesses looking to refine their image.",
          popular: true,
          features: [
            "5 initial logo concepts",
            "3 rounds of revisions",
            "Extended logo variations",
            "Color palette development",
            "Typography selection",
            "Business card design",
            "Letterhead design",
            "Comprehensive brand guidelines",
            "Full copyright ownership",
            "21-day turnaround",
          ],
        },
        {
          title: "Complete Brand Package",
          price: "R9,999",
          description: "All-inclusive branding solution for businesses seeking a cohesive professional identity.",
          features: [
            "All Brand Identity features",
            "Brand messaging development",
            "Social media profile design",
            "Email signature design",
            "Presentation template",
            "Brand strategy document",
            "Marketing collateral templates",
            "Brand style guide website",
            "Implementation consultation",
            "30-day turnaround",
          ],
        },
      ]}
      process={[
        {
          step: "01",
          title: "Discovery",
          description: "We research your industry, audience, and competitors to understand your unique positioning.",
        },
        {
          step: "02",
          title: "Concept",
          description: "We develop initial brand concepts based on your values, target audience, and goals.",
        },
        {
          step: "03",
          title: "Refinement",
          description: "We collaborate with you to refine the selected concept into a polished brand identity.",
        },
        {
          step: "04",
          title: "Delivery",
          description: "We provide a complete brand package with guidelines for consistent implementation.",
        },
      ]}
    />
  )
}
