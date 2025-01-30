'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Facebook, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
  }

  return (
    <footer className="bg-[#001333] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-16">
          {/* Logo */}
          <Link href="/" className="block">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#4285F4"/>
              <path d="M18 14H12V34H18V14Z" fill="white"/>
              <path d="M36 14H30V34H36V14Z" fill="white"/>
            </svg>
          </Link>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#001333] hover:bg-[#4285F4] hover:text-white transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#001333] hover:bg-[#4285F4] hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm6.608 16.608h-3.216v-3.216h-6.784v3.216H5.392V7.392h3.216v3.216h6.784V7.392h3.216v9.216z"/>
              </svg>
            </Link>
            <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#001333] hover:bg-[#4285F4] hover:text-white transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#001333] hover:bg-[#4285F4] hover:text-white transition-colors">
              <Youtube size={20} />
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Address</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>career@tickets.com</span>
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>89 KG 14 Ave, Kigali</span>
              </p>
              <p className="flex items-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+250 700 000</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <nav className="space-y-4">
              <Link href="/" className="block hover:text-[#4285F4] transition-colors">Home</Link>
              <Link href="/program" className="block hover:text-[#4285F4] transition-colors">Program</Link>
              <Link href="/about" className="block hover:text-[#4285F4] transition-colors">About</Link>
              <Link href="/contact" className="block hover:text-[#4285F4] transition-colors">Contact Us</Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Join our newsletter to keep up to date with us!</h3>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg bg-white text-[#001333]"
                required
              />
              <button 
                type="submit"
                className="px-6 py-2 bg-[#4285F4] text-white rounded-lg hover:bg-[#4285F4]/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-sm text-white/80 mb-4 md:mb-0">
            Copyright © All Rights Reserved SawaPay 2024.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}