"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"

// Dynamically import components that aren't needed for initial render
const DynamicPricing = dynamic(() => import("@/components/pricing"), {
  ssr: false,
  loading: () => <div className="py-20 md:py-32 flex items-center justify-center">Loading pricing options...</div>,
})

const DynamicPortfolio = dynamic(() => import("@/components/portfolio"), {
  ssr: false,
  loading: () => <div className="py-20 md:py-32 flex items-center justify-center">Loading portfolio...</div>,
})

export default function DynamicSections() {
  return (
    <>
      <Suspense
        fallback={<div className="py-20 md:py-32 flex items-center justify-center">Loading pricing options...</div>}
      >
        <DynamicPricing />
      </Suspense>
      <Suspense fallback={<div className="py-20 md:py-32 flex items-center justify-center">Loading portfolio...</div>}>
        <DynamicPortfolio />
      </Suspense>
    </>
  )
}
