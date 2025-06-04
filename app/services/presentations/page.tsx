import { Layout, LineChart, ImageIcon, Film, Send } from "lucide-react"
import ServicePageTemplate from "../service-page-template"
import { featureIcons } from "@/lib/service-icons"

export const metadata = {
  title: "Professional Presentations | Carter Digitals",
  description: "Custom presentation design for pitches, meetings, conferences, and training sessions.",
}

export default function PresentationsPage() {
  const PresentationIcon = () => (
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
    >
      <path d="M2 3h20" />
      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
      <path d="m7 21 5-5 5 5" />
    </svg>
  )

  return (
    <ServicePageTemplate
      icon={<PresentationIcon />}
      title="Professional Presentations"
      description="Compelling presentations that help you pitch your ideas with confidence and style."
      heroBackground="from-blue-950/30 to-background/80"
      features={[
        {
          icon: <Layout className="h-6 w-6 text-primary" />,
          title: "Custom Design",
          description: "Professionally designed slides that align with your brand and enhance your message.",
        },
        {
          icon: <featureIcons.content className="h-6 w-6 text-primary" />,
          title: "Content Strategy",
          description: "Strategic structure and content flow that tells a compelling story.",
        },
        {
          icon: <LineChart className="h-6 w-6 text-primary" />,
          title: "Data Visualization",
          description: "Clear, impactful charts and graphs that make complex information easy to understand.",
        },
        {
          icon: <ImageIcon className="h-6 w-6 text-primary" />,
          title: "Visual Elements",
          description: "Custom graphics, icons, and imagery that reinforce your key points.",
        },
        {
          icon: <Film className="h-6 w-6 text-primary" />,
          title: "Animations",
          description: "Smooth, purposeful animations that engage your audience and emphasize important points.",
        },
        {
          icon: <Send className="h-6 w-6 text-primary" />,
          title: "Delivery Support",
          description: "Speaker notes, talking points, and presentation coaching to ensure success.",
        },
      ]}
      pricing={[
        {
          title: "Basic Presentation",
          price: "R2,499",
          description: "Essential presentation design for simple pitches and meetings.",
          features: [
            "Up to 15 slides",
            "Basic template customization",
            "Standard graphics and charts",
            "Simple animations",
            "1 revision round",
            "7-day turnaround",
            "PowerPoint & PDF formats",
          ],
        },
        {
          title: "Professional Presentation",
          price: "R4,999",
          description: "Comprehensive presentation solution for important pitches and conferences.",
          popular: true,
          features: [
            "Up to 30 slides",
            "Custom template design",
            "Advanced data visualization",
            "Custom icons and graphics",
            "Professional animations",
            "Speaker notes",
            "2 revision rounds",
            "10-day turnaround",
            "Multiple file formats",
          ],
        },
        {
          title: "Premium Presentation",
          price: "R9,999",
          description: "All-inclusive presentation package for high-stakes presentations.",
          features: [
            "Up to 50 slides",
            "Premium custom design",
            "Advanced storytelling structure",
            "Premium data visualization",
            "Custom illustrations",
            "Complex animations",
            "Speaker notes & talking points",
            "Presentation coaching session",
            "Unlimited revisions",
            "14-day turnaround",
            "All file formats & editable source files",
          ],
        },
      ]}
      process={[
        {
          step: "01",
          title: "Content Review",
          description: "We analyze your content and objectives to plan an effective presentation structure.",
        },
        {
          step: "02",
          title: "Design Concept",
          description: "We create a custom design concept aligned with your brand and presentation goals.",
        },
        {
          step: "03",
          title: "Development",
          description: "Our team builds the full presentation with professional design, graphics, and animations.",
        },
        {
          step: "04",
          title: "Finalization",
          description: "We refine the presentation based on your feedback and prepare it for delivery.",
        },
      ]}
    />
  )
}
