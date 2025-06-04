"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Calendar, Clock, User, ArrowRight, Eye, Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    slug: "future-of-web-design-ai-machine-learning",
    title: "The Future of Web Design: AI and Machine Learning Integration",
    excerpt:
      "Discover how artificial intelligence and machine learning are revolutionizing web design, from automated layouts to personalized user experiences.",
    content: "Full blog content here...", // Will be used in individual post pages
    author: "Carter Digitals Team",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "Technology",
    tags: ["AI", "Machine Learning", "Web Design", "Future Tech"],
    image: "/blog/ai-web-design.jpg",
    views: 1250,
    likes: 89,
    color: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-900/20 to-pink-900/20",
  },
  {
    id: 2,
    slug: "ecommerce-success-converting-visitors-customers-2024",
    title: "E-commerce Success: Converting Visitors to Customers in 2024",
    excerpt:
      "Learn the latest conversion optimization strategies that are driving e-commerce success in 2024, including UX design principles and psychological triggers.",
    content: "Full blog content here...",
    author: "Carter Digitals Team",
    publishDate: "2024-01-10",
    readTime: "12 min read",
    category: "E-commerce",
    tags: ["E-commerce", "Conversion", "UX Design", "Sales"],
    image: "/blog/ecommerce-conversion.jpg",
    views: 2100,
    likes: 156,
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-900/20 to-cyan-900/20",
  },
  {
    id: 3,
    slug: "mobile-first-design-business-needs-2024",
    title: "Mobile-First Design: Why Your Business Needs It Now",
    excerpt:
      "Explore why mobile-first design is no longer optional but essential for business success, with real-world examples and implementation strategies.",
    content: "Full blog content here...",
    author: "Carter Digitals Team",
    publishDate: "2024-01-05",
    readTime: "10 min read",
    category: "Design",
    tags: ["Mobile Design", "Responsive", "UX", "Business Strategy"],
    image: "/blog/mobile-first-design.jpg",
    views: 1800,
    likes: 134,
    color: "from-green-500 to-emerald-500",
    bgGradient: "from-green-900/20 to-emerald-900/20",
  },
]

interface BlogCardProps {
  post: (typeof blogPosts)[0]
  index: number
}

function BlogCard({ post, index }: BlogCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 300 }
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card Container */}
      <div
        className={`relative h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br ${post.bgGradient} backdrop-blur-xl border border-white/10 shadow-2xl`}
      >
        {/* Holographic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-80`} />
          <div className="absolute inset-0 bg-black/20" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${post.color} text-white`}>
              {post.category}
            </span>
          </div>

          {/* Stats */}
          <div className="absolute top-4 right-4 z-10 flex space-x-2">
            <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
              <Eye className="w-3 h-3 text-white" />
              <span className="text-xs text-white">{post.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1 bg-black/30 backdrop-blur-sm rounded-full px-2 py-1">
              <Heart className="w-3 h-3 text-white" />
              <span className="text-xs text-white">{post.likes}</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4 line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
            {post.title}
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-full text-xs bg-white/10 text-gray-300 border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishDate).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Read More Button */}
          <Button
            asChild
            className={`w-full bg-gradient-to-r ${post.color} hover:opacity-90 text-white rounded-full py-3 font-semibold group/btn transition-all duration-300`}
          >
            <Link href={`/blog/${post.slug}`}>
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* 3D Transform Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl border border-white/20"
          style={{
            transform: "translateZ(50px)",
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Floating Glow Effect */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${post.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`}
      />
    </motion.div>
  )
}

export default function BlogGrid() {
  return (
    <div className="relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          Latest Insights
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Deep-dive articles on web design, development, and digital strategy from our expert team
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 perspective-1000">
        {blogPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-16">
        <Button
          asChild
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300"
        >
          <Link href="/blog/archive">
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
    </div>
  )
}
