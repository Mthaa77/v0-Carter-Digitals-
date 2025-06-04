import { FileText, PenTool, ImageIcon, Video, Copy, Layers } from "lucide-react"
import ServicePageTemplate from "../service-page-template"
import { featureIcons } from "@/lib/service-icons"

export const metadata = {
  title: "Content Creation | Carter Digitals",
  description: "Engaging content creation for websites, social media, blogs, and marketing materials.",
}

export default function ContentPage() {
  return (
    <ServicePageTemplate
      icon={<FileText className="h-6 w-6" />}
      title="Content Creation"
      description="Engaging content creation for websites, social media, blogs, and marketing materials."
      heroBackground="from-orange-950/30 to-background/80"
      features={[
        {
          icon: <PenTool className="h-6 w-6 text-primary" />,
          title: "Copywriting",
          description: "Persuasive, clear, and engaging copy that resonates with your target audience.",
        },
        {
          icon: <featureIcons.blog className="h-6 w-6 text-primary" />,
          title: "Blog Articles",
          description: "Valuable, SEO-optimized blog content that establishes your expertise.",
        },
        {
          icon: <ImageIcon className="h-6 w-6 text-primary" />,
          title: "Visual Content",
          description: "Eye-catching graphics, infographics, and images that enhance your message.",
        },
        {
          icon: <Video className="h-6 w-6 text-primary" />,
          title: "Video Scripts",
          description: "Compelling scripts for video content that engages viewers and drives action.",
        },
        {
          icon: <Copy className="h-6 w-6 text-primary" />,
          title: "Email Campaigns",
          description: "Effective email content that nurtures leads and drives conversions.",
        },
        {
          icon: <Layers className="h-6 w-6 text-primary" />,
          title: "Content Strategy",
          description: "Strategic planning for content that aligns with your business goals.",
        },
      ]}
      pricing={[
        {
          title: "Basic Content Package",
          price: "R2,999",
          description: "Essential content creation for small businesses and startups.",
          features: [
            "Website copy (up to 5 pages)",
            "2 blog articles (500 words each)",
            "5 social media posts",
            "Basic SEO optimization",
            "1 round of revisions",
            "14-day delivery",
          ],
        },
        {
          title: "Business Content Package",
          price: "R5,999",
          description: "Comprehensive content solution for established businesses.",
          popular: true,
          features: [
            "Website copy (up to 10 pages)",
            "4 blog articles (800 words each)",
            "10 social media posts",
            "Email newsletter template",
            "Advanced SEO optimization",
            "2 rounds of revisions",
            "Content calendar",
            "21-day delivery",
          ],
        },
        {
          title: "Premium Content Package",
          price: "R9,999",
          description: "All-inclusive content solution for businesses seeking maximum impact.",
          features: [
            "Website copy (up to 20 pages)",
            "8 blog articles (1000+ words each)",
            "20 social media posts",
            "3 email campaigns",
            "1 lead magnet creation",
            "Premium SEO optimization",
            "Unlimited revisions",
            "Content strategy document",
            "Monthly content calendar",
            "30-day delivery",
          ],
        },
      ]}
      process={[
        {
          step: "01",
          title: "Content Audit",
          description: "We analyze your existing content and identify opportunities for improvement.",
        },
        {
          step: "02",
          title: "Strategy Development",
          description: "We create a content strategy aligned with your business goals and target audience.",
        },
        {
          step: "03",
          title: "Content Creation",
          description: "Our team produces high-quality content based on the approved strategy.",
        },
        {
          step: "04",
          title: "Implementation & Optimization",
          description: "We publish the content and continuously optimize for maximum engagement and results.",
        },
      ]}
    />
  )
}
