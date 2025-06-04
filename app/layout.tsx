import type React from "react"
import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import WhatsAppButton from "@/components/whatsapp-button"
import CustomCursor from "@/components/custom-cursor"

// Add global types for mouse position
declare global {
  interface Window {
    mouseX: number
    mouseY: number
  }
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Carter Digitals | Professional Website Design & Development South Africa",
  description:
    "South African creative agency crafting beautiful, responsive, and SEO-optimized websites for businesses. Affordable web design services in Johannesburg, Cape Town, and Durban.",
  keywords: [
    "website design South Africa",
    "web development company Johannesburg",
    "affordable website design Cape Town",
    "e-commerce website development South Africa",
    "WordPress website design services",
    "responsive web design South Africa",
    "SEO website development",
    "custom website development Durban",
    "business website design South Africa",
    "professional web developer near me",
  ],
  openGraph: {
    title: "Carter Digitals | Professional Website Design & Development South Africa",
    description:
      "South African creative agency crafting beautiful, responsive, and SEO-optimized websites for businesses. Affordable web design services in Johannesburg, Cape Town, and Durban.",
    url: "https://carterdigitals.com",
    siteName: "Carter Digitals",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Carter Digitals - Professional Website Design & Development South Africa",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://carterdigitals.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebDesignCompany",
              name: "Carter Digitals",
              url: "https://carterdigitals.com",
              logo: "https://carterdigitals.com/logo.png",
              description:
                "South African creative agency crafting beautiful, responsive, and SEO-optimized websites for businesses.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "South Africa",
              },
              telephone: "+27724026893",
              email: "kadiakakabelo4@gmail.com",
              priceRange: "R1,899 - R20,000+",
              sameAs: [
                "https://facebook.com/carterdigitals",
                "https://instagram.com/carterdigitals",
                "https://twitter.com/carterdigitals",
                "https://linkedin.com/company/carterdigitals",
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
              areaServed: ["Johannesburg", "Cape Town", "Durban", "Pretoria", "South Africa"],
            }),
          }}
        />
      </head>
      <body className={cn("min-h-screen font-sans antialiased", poppins.variable, playfair.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <WhatsAppButton />
          <CustomCursor />
          <Toaster />
          <div id="scroll-animations-observer" className="hidden" />
        </ThemeProvider>
      </body>
    </html>
  )
}
