"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Award, Users, Settings, HelpCircle, Share2, LogOut } from "lucide-react"
import Image from "next/image"

const navigationItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Challenges & Hackathons", href: "/challenges", icon: Award },
  { name: "Community", href: "/community", icon: Users },
]

const bottomNavigationItems = [
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Help Center", href: "/help", icon: HelpCircle },
  { name: "Refer family & friends", href: "/refer", icon: Share2 },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed left-0 top-0 h-screen w-[250px] bg-blue-600 text-white p-4 flex flex-col">
      {/* Logo */}
      <div className="mb-8">
        <Image src="/Umurava logo.png" alt="Umurava Logo" width={120} height={40} className="w-32" />
      </div>

      {/* Main Navigation */}
      <nav className="space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* Bottom Navigation */}
      <div className="mt-auto space-y-1">
        {bottomNavigationItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </div>

      {/* User Profile */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center px-4 py-3">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="User avatar"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="ml-3">
            <p className="font-medium">Hilaire Sh</p>
            <p className="text-sm text-white/70">hilaire@uidesign</p>
          </div>
          <LogOut className="w-5 h-5 ml-auto cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

