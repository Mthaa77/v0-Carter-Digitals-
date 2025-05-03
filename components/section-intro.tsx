"use client"

import { motion } from "framer-motion"

interface SectionIntroProps {
  badge: string
  title: string
  description: string
  align?: "center" | "left"
  colorClass?: string
}

export default function SectionIntro({
  badge,
  title,
  description,
  align = "center",
  colorClass = "bg-primary/10 text-primary",
}: SectionIntroProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="inline-block"
      >
        <span className={`px-4 py-1 ${colorClass} rounded-full text-sm font-medium mb-4 inline-block`}>{badge}</span>
      </motion.div>
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      <motion.p
        className={`text-lg text-muted-foreground ${align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl"}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </div>
  )
}
