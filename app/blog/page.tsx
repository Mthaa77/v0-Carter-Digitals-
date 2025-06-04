import type { Metadata } from "next"
import BlogGrid from "@/components/blog-grid"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Web Design & Development Blog | Carter Digitals | Expert Insights South Africa",
  description:
    "Stay updated with the latest web design trends, development techniques, and digital marketing insights from Carter Digitals. Expert advice for South African businesses.",
  keywords: [
    "web design blog",
    "web development tutorials",
    "digital marketing insights",
    "South Africa web design",
    "responsive design tips",
    "e-commerce development",
    "SEO optimization",
    "UI/UX design trends",
    "website performance",
    "mobile-first design",
  ],
  openGraph: {
    title: "Web Design & Development Blog | Carter Digitals",
    description:
      "Expert insights on web design, development, and digital marketing. Stay ahead with Carter Digitals' professional blog.",
    url: "https://carterdigitals.com/blog",
    siteName: "Carter Digitals",
    images: [
      {
        url: "/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Carter Digitals Blog - Web Design & Development Insights",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  alternates: {
    canonical: "https://carterdigitals.com/blog",
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
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,105,180,0.1),transparent_50%)]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Design Insights
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Expert insights on web design, development, and digital marketing from South Africa's leading creative
              agency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                <Link href="#latest-posts">Latest Posts</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact">Get Expert Advice</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500" />
      </section>

      {/* Blog Grid Section */}
      <section id="latest-posts" className="py-20">
        <div className="container mx-auto px-6">
          <BlogGrid />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest web design insights delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
            />
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Carter Digitals Blog",
            url: "https://carterdigitals.com/blog",
            description: "Expert insights on web design, development, and digital marketing from Carter Digitals",
            author: {
              "@type": "Organization",
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
          }),
        }}
      />
    </div>
  )
}
