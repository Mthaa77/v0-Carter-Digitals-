import type React from "react"
import { ServicesSidebar } from "@/components/services-sidebar"
import PremiumHeader from "@/components/premium-header"
import Footer from "@/components/footer"

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <PremiumHeader />
      <div className="flex flex-1 flex-col md:flex-row">
        <ServicesSidebar />
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
    </div>
  )
}
