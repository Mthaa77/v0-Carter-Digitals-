"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import SectionIntro from "./section-intro"

type PortfolioCategory = "all" | "web" | "logo" | "flyer" | "presentation"

interface PortfolioItem {
  id: number
  title: string
  category: Exclude<PortfolioCategory, "all">
  image: string
  description: string
  client: string
  challenge: string
  solution: string
  results?: string
  colorClass: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "E-commerce Website",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    description: "A fully responsive e-commerce website with custom product filtering and checkout.",
    client: "Fashion Boutique",
    challenge:
      "The client was losing sales with an outdated website that wasn't mobile-friendly and had a complicated checkout process.",
    solution:
      "We designed a modern, responsive e-commerce platform with streamlined product navigation and a simplified checkout flow.",
    results: "150% increase in online sales within 3 months and 65% reduction in cart abandonment rate.",
    colorClass: "bg-primary/10 text-primary border-primary/30",
  },
  {
    id: 2,
    title: "Corporate Identity",
    category: "logo",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complete brand identity including logo, business cards, and letterhead.",
    client: "Tech Startup",
    challenge:
      "The startup struggled to differentiate itself in a crowded market with inconsistent branding across platforms.",
    solution: "We created a distinctive visual identity with a memorable logo and comprehensive brand guidelines.",
    results: "Successfully secured Series A funding with new brand identity and increased brand recognition by 40%.",
    colorClass: "bg-blue-500/10 text-blue-500 border-blue-500/30",
  },
  {
    id: 3,
    title: "Event Flyer",
    category: "flyer",
    image: "/placeholder.svg?height=600&width=800",
    description: "Eye-catching event flyer design with QR code integration.",
    client: "Music Festival",
    challenge:
      "Previous event marketing materials failed to generate excitement or convey the festival's unique atmosphere.",
    solution: "We designed vibrant, attention-grabbing flyers with integrated QR codes linking to ticket sales.",
    results: "Event sold out within 48 hours of flyer distribution, 300% increase in social media mentions.",
    colorClass: "bg-purple-500/10 text-purple-500 border-purple-500/30",
  },
  {
    id: 4,
    title: "Investor Pitch Deck",
    category: "presentation",
    image: "/placeholder.svg?height=600&width=800",
    description: "Professional pitch deck design with custom animations and infographics.",
    client: "Health Tech Startup",
    challenge:
      "The company's technical founders struggled to communicate their complex solution in an engaging, investor-friendly way.",
    solution:
      "We created a visually compelling presentation that simplified complex concepts with custom infographics.",
    results:
      "Secured R5 million in funding after presentation, with investors specifically praising the clarity of communication.",
    colorClass: "bg-green-500/10 text-green-500 border-green-500/30",
  },
  {
    id: 5,
    title: "Restaurant Website",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    description: "Responsive website with online reservation system and menu management.",
    client: "Gourmet Restaurant",
    challenge:
      "The restaurant was losing potential customers who couldn't easily view menus or make reservations on mobile devices.",
    solution:
      "We built a mobile-first website with an intuitive reservation system and visually appealing menu displays.",
    results: "30% increase in bookings within the first month and 45% reduction in phone call inquiries.",
    colorClass: "bg-pink-500/10 text-pink-500 border-pink-500/30",
  },
  {
    id: 6,
    title: "Product Brochure",
    category: "flyer",
    image: "/placeholder.svg?height=600&width=800",
    description: "Multi-page product brochure with detailed specifications and pricing.",
    client: "Manufacturing Company",
    challenge:
      "Technical product information was presented in a boring, text-heavy format that customers found difficult to understand.",
    solution:
      "We redesigned their product materials with visual hierarchy, infographics, and compelling product photography.",
    results: "Generated 45 qualified leads from brochure distribution and reduced sales cycle by 20%.",
    colorClass: "bg-orange-500/10 text-orange-500 border-orange-500/30",
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("all")
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  const filteredItems =
    activeCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  const categoryColors = {
    all: "bg-gradient-to-r from-primary to-blue-500",
    web: "bg-primary",
    logo: "bg-blue-500",
    flyer: "bg-purple-500",
    presentation: "bg-green-500",
  }

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <SectionIntro
          badge="OUR PORTFOLIO"
          title="See Our Work In Action"
          description="Don't just take our word for it. Browse our recent projects and see the real results we've delivered for businesses just like yours."
          colorClass="bg-purple-500/10 text-purple-500"
        />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(["all", "web", "logo", "flyer", "presentation"] as const).map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`capitalize btn-3d ${activeCategory === category ? categoryColors[category] : ""}`}
            >
              {category === "all" ? "All Work" : category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                className="cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <Card className={`overflow-hidden h-full card-3d border-2 ${item.colorClass}`}>
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`${
                          item.category === "web"
                            ? "bg-primary"
                            : item.category === "logo"
                              ? "bg-blue-500"
                              : item.category === "flyer"
                                ? "bg-purple-500"
                                : "bg-green-500"
                        } text-white`}
                      >
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.client}</p>
                    <p className="line-clamp-2">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
          <DialogContent className="max-w-4xl">
            {selectedItem && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedItem.title}</DialogTitle>
                  <DialogDescription className="text-lg">{selectedItem.client}</DialogDescription>
                </DialogHeader>
                <div className="relative h-[400px] w-full my-4 rounded-lg overflow-hidden">
                  <Image
                    src={selectedItem.image || "/placeholder.svg"}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-destructive/10 rounded-lg">
                      <h4 className="font-semibold mb-2">The Challenge:</h4>
                      <p>{selectedItem.challenge}</p>
                    </div>
                    <div className={`p-4 ${selectedItem.colorClass} rounded-lg`}>
                      <h4 className="font-semibold mb-2">Our Solution:</h4>
                      <p>{selectedItem.solution}</p>
                    </div>
                  </div>

                  {selectedItem.results && (
                    <div className="p-4 bg-green-500/10 text-green-500 rounded-lg">
                      <h4 className="font-semibold mb-2">Results:</h4>
                      <p>{selectedItem.results}</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
