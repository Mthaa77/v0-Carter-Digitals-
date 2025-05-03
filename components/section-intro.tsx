"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

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
    <div className={cn("mb-16", align === "center" ? "text-center" : "text-left")}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="inline-block"
      >
        <span
          className={cn("px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block backdrop-blur-sm", colorClass)}
        >
          {badge}
        </span>
      </motion.div>
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {title.includes(" ") ? (
          <>
            {title.split(" ").slice(0, -2).join(" ")}{" "}
            <span
              className={cn(
                "bg-clip-text text-transparent",
                colorClass.includes("primary")
                  ? "bg-gradient-to-r from-primary via-orange-400 to-rose-500"
                  : colorClass.includes("blue")
                    ? "bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500"
                    : colorClass.includes("green")
                      ? "bg-gradient-to-r from-green-500 via-emerald-400 to-teal-500"
                      : colorClass.includes("purple")
                        ? "bg-gradient-to-r from-purple-500 via-violet-400 to-indigo-500"
                        : colorClass.includes("orange")
                          ? "bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500"
                          : "bg-gradient-to-r from-primary via-orange-400 to-rose-500",
              )}
            >
              {title.split(" ").slice(-2).join(" ")}
            </span>
          </>
        ) : (
          title
        )}
      </motion.h2>
      <motion.p
        className={cn(
          "text-lg md:text-xl text-muted-foreground",
          align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl",
          "font-light",
        )}
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
