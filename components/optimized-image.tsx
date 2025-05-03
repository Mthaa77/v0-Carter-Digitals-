"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad"> {
  lowQualitySrc?: string
  transitionDuration?: number
}

export default function OptimizedImage({
  src,
  alt,
  className,
  lowQualitySrc,
  transitionDuration = 500,
  priority = false,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLowQualityLoaded, setIsLowQualityLoaded] = useState(false)

  // Reset loaded state when src changes
  useEffect(() => {
    setIsLoaded(false)
  }, [src])

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {lowQualitySrc && !isLoaded && (
        <Image
          src={lowQualitySrc || "/placeholder.svg"}
          alt={alt}
          className={cn("transition-opacity duration-300", isLowQualityLoaded ? "opacity-100" : "opacity-0")}
          onLoad={() => setIsLowQualityLoaded(true)}
          fill={props.fill}
          width={!props.fill ? props.width : undefined}
          height={!props.fill ? props.height : undefined}
          style={{
            objectFit: props.style?.objectFit || "cover",
          }}
        />
      )}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        className={cn("transition-opacity", isLoaded ? "opacity-100" : "opacity-0")}
        style={{
          transitionDuration: `${transitionDuration}ms`,
          ...props.style,
        }}
        onLoad={() => setIsLoaded(true)}
        priority={priority}
        {...props}
      />
    </div>
  )
}
