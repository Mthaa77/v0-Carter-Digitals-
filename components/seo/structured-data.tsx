interface WebPageStructuredDataProps {
  title: string
  description: string
  url: string
  imageUrl?: string
  datePublished?: string
  dateModified?: string
}

export function WebPageStructuredData({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
}: WebPageStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    ...(imageUrl && { image: imageUrl }),
    ...(datePublished && { datePublished: datePublished }),
    ...(dateModified && { dateModified: dateModified }),
    isPartOf: {
      "@type": "WebSite",
      name: "Carter Digitals",
      url: "https://carterdigitals.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Carter Digitals",
      logo: {
        "@type": "ImageObject",
        url: "https://carterdigitals.com/logo.png",
      },
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

interface ServiceStructuredDataProps {
  name: string
  description: string
  url: string
  provider: string
  areaServed?: string[]
  price?: string
  imageUrl?: string
}

export function ServiceStructuredData({
  name,
  description,
  url,
  provider,
  areaServed = ["South Africa", "Johannesburg", "Cape Town", "Durban", "Pretoria"],
  price,
  imageUrl,
}: ServiceStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    url: url,
    provider: {
      "@type": "Organization",
      name: provider,
      url: "https://carterdigitals.com",
    },
    areaServed: areaServed,
    ...(price && {
      offers: {
        "@type": "Offer",
        price: price.replace(/[^0-9]/g, ""),
        priceCurrency: "ZAR",
      },
    }),
    ...(imageUrl && { image: imageUrl }),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

interface FAQStructuredDataProps {
  questions: {
    question: string
    answer: string
  }[]
}

export function FAQStructuredData({ questions }: FAQStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
