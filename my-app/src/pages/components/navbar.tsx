"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Challenge & Hackathons", href: "/challenges" },
  { name: "For Educational Institutions", href: "/for-learning" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/Umurava logo.png"
                alt="Umurava Logo"
                width={120}
                height={40}
                className="h-8 w-auto sm:h-10"
              />
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm lg:text-base font-medium ${
                  activeLink === link.name
                    ? "text-[#2B71F0] border-b-2 border-[#2B71F0]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                onClick={() => setActiveLink(link.name)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/signup"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#0A1832] hover:bg-[#152347] transition-colors"
            >
              Join the Program
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeLink === link.name
                      ? "text-[#2B71F0] bg-blue-50"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  onClick={() => {
                    setActiveLink(link.name)
                    setIsMenuOpen(false)
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/join"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#0A1832] hover:bg-[#152347] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Join the Program
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
