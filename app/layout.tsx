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
  title: "Carter Digitals | Premium Web Experiences That Convert",
  description:
    "South African creative agency crafting beautiful, functional, and conversion-focused digital experiences for global entrepreneurs and businesses.",
  openGraph: {
    title: "Carter Digitals | Premium Web Experiences That Convert",
    description:
      "South African creative agency crafting beautiful, functional, and conversion-focused digital experiences for global entrepreneurs and businesses.",
    url: "https://carterdigitals.com",
    siteName: "Carter Digitals",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Carter Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
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
