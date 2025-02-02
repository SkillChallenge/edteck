"use client"

import { Bell } from "lucide-react"
import Image from "next/image"

export function DashboardHeader() {
  return (
    <header className="h-16 border-b bg-white px-8 flex items-center justify-between">
      <div className="w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <Image
          src="/placeholder.svg?height=32&width=32"
          alt="User avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </header>
  )
}

