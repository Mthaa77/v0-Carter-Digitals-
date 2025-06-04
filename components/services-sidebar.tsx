"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { animatedServiceIcons } from "@/lib/service-icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Bot, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ServicesSidebar() {
  const pathname = usePathname()
  // Convert the animatedServiceIcons object to an array with IDs
  const serviceIconsArray = Object.entries(animatedServiceIcons).map(([id, icons]) => ({
    id,
    title: id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, " "),
    icon: icons.icon,
    activeIcon: icons.activeIcon,
    isNew: id === "virtual-assistants", // Mark the virtual assistants as new
  }))

  // Add the renamed service if it's not already in the array
  const hasVirtualAssistants = serviceIconsArray.some((service) => service.id === "virtual-assistants")

  if (!hasVirtualAssistants) {
    serviceIconsArray.push({
      id: "virtual-assistants",
      title: "Virtual Assistants",
      icon: <Bot className="h-4 w-4" />,
      activeIcon: <Bot className="h-4 w-4" />,
      isNew: true,
    })
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar className="hidden md:flex" variant="sidebar" collapsible="icon">
        <SidebarHeader className="p-4">
          <Link href="/services" className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-bold text-xl">Our Services</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>All Services</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {serviceIconsArray.map((service) => (
                  <SidebarMenuItem key={service.id}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === `/services/${service.id}`}
                      tooltip={service.title}
                    >
                      <Link href={`/services/${service.id}`} className="flex items-center gap-2 relative">
                        <span className="relative">
                          {pathname === `/services/${service.id}` ? service.activeIcon : service.icon}
                          {service.isNew && (
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
                          )}
                        </span>
                        <span className="flex items-center gap-2">
                          {service.title}
                          {service.isNew && (
                            <Badge className="h-5 text-xs bg-primary/10 text-primary border-primary/20 px-1.5">
                              NEW
                            </Badge>
                          )}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="font-medium">Need help?</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Contact us for a free consultation about your project
              </p>
              <Button asChild size="sm" className="w-full">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </CardContent>
          </Card>
        </SidebarFooter>
      </Sidebar>

      {/* Mobile navigation */}
      <div className="block md:hidden p-4 bg-background border-b">
        <div className="flex items-center justify-between">
          <Link href="/services" className="font-bold text-xl flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span>Our Services</span>
          </Link>
          <SidebarTrigger />
        </div>
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 service-scroll-container">
          {serviceIconsArray.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className={`flex items-center gap-1 whitespace-nowrap px-3 py-1.5 rounded-full text-sm ${
                pathname === `/services/${service.id}` ? "bg-primary text-white" : "bg-background border border-border"
              } relative`}
            >
              <span className="w-4 h-4">
                {pathname === `/services/${service.id}` ? service.activeIcon : service.icon}
              </span>
              <span>{service.title}</span>
              {service.isNew && pathname !== `/services/${service.id}` && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </SidebarProvider>
  )
}
