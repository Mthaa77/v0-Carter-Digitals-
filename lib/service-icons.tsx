import type { ReactNode } from "react"
import {
  Palette,
  ShoppingCart,
  Globe,
  FileText,
  Presentation,
  Clock,
  Users,
  Calendar,
  Settings,
  MessageSquare,
  Bot,
  Headphones,
  Zap,
  Shield,
  BarChart,
} from "lucide-react"

export const featureIcons = {
  availability: <Clock className="h-5 w-5 text-primary" />,
  conversations: <MessageSquare className="h-5 w-5 text-primary" />,
  calendar: <Calendar className="h-5 w-5 text-primary" />,
  users: <Users className="h-5 w-5 text-primary" />,
  business: <Settings className="h-5 w-5 text-primary" />,
  voice: <Headphones className="h-5 w-5 text-primary" />,
  support: <Headphones className="h-5 w-5 text-primary" />,
  settings: <Settings className="h-5 w-5 text-primary" />,
  security: <Shield className="h-5 w-5 text-primary" />,
  analytics: <BarChart className="h-5 w-5 text-primary" />,
  speed: <Zap className="h-5 w-5 text-primary" />,
}

interface AnimatedServiceIcon {
  icon: ReactNode
  activeIcon: ReactNode
}

export const animatedServiceIcons: Record<string, AnimatedServiceIcon> = {
  websites: {
    icon: <Globe className="h-4 w-4" />,
    activeIcon: <Globe className="h-4 w-4 text-white" />,
  },
  ecommerce: {
    icon: <ShoppingCart className="h-4 w-4" />,
    activeIcon: <ShoppingCart className="h-4 w-4 text-white" />,
  },
  branding: {
    icon: <Palette className="h-4 w-4" />,
    activeIcon: <Palette className="h-4 w-4 text-white" />,
  },
  marketing: {
    icon: <BarChart className="h-4 w-4" />,
    activeIcon: <BarChart className="h-4 w-4 text-white" />,
  },
  content: {
    icon: <FileText className="h-4 w-4" />,
    activeIcon: <FileText className="h-4 w-4 text-white" />,
  },
  presentations: {
    icon: <Presentation className="h-4 w-4" />,
    activeIcon: <Presentation className="h-4 w-4 text-white" />,
  },
  "virtual-assistants": {
    icon: <Bot className="h-4 w-4" />,
    activeIcon: <Bot className="h-4 w-4 text-white" />,
  },
}
