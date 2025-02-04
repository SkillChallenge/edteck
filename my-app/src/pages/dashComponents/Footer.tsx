import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#002147] text-white py-16">
      <div className="container mx-auto px-40">
        {/* Top section with logo and social icons */}
        <div className="flex justify-between items-center mb-12">
          <div className="w-16 h-16">
            <Image
              src="/Flogo.png"
              alt="Logo"
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://www.instagram.com" className="hover:opacity-80 transition-opacity">
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.2c3.168 0 3.539.013 4.789.07 1.252.057 2.15.239 2.86.509a5.426 5.426 0 0 1 1.974 1.974c.27.71.452 1.608.509 2.86.057 1.25.07 1.621.07 4.789s-.013 3.539-.07 4.789c-.057 1.252-.239 2.15-.509 2.86a5.426 5.426 0 0 1-1.974 1.974c-.71.27-1.608.452-2.86.509-1.25.057-1.621.07-4.789.07s-3.539-.013-4.789-.07c-1.252-.057-2.15-.239-2.86-.509a5.426 5.426 0 0 1-1.974-1.974c-.27-.71-.452-1.608-.509-2.86-.057-1.25-.07-1.621-.07-4.789s.013-3.539.07-4.789c.057-1.252.239-2.15.509-2.86a5.426 5.426 0 0 1 1.974-1.974c.71-.27 1.608-.452 2.86-.509 1.25-.057 1.621-.07 4.789-.07zm0-2.2c-3.265 0-3.66.013-4.94.073-1.284.061-2.343.275-3.22.636-1.005.385-1.87.93-2.62 1.68-.75.75-1.31 1.62-1.68 2.62-.361.877-.575 1.936-.636 3.22-.061 1.28-.073 1.674-.073 4.94s.013 3.66.073 4.94c.061 1.284.275 2.343.636 3.22.385 1.005.93 1.87 1.68 2.62.75.75 1.62 1.31 2.62 1.68.877.361 1.936.575 3.22.636 1.28.061 1.674.073 4.94.073s3.66-.013 4.94-.073c1.284-.061 2.343-.275 3.22-.636 1.005-.385 1.87-.93 2.62-1.68.75-.75 1.31-1.62 1.68-2.62.361-.877.575-1.936.636-3.22.061-1.28.073-1.674.073-4.94s-.013-3.66-.073-4.94c-.061-1.284-.275-2.343-.636-3.22a5.426 5.426 0 0 0-1.68-2.62c-.75-.75-1.62-1.31-2.62-1.68-1.005-.361-1.936-.575-3.22-.636-1.28-.061-1.674-.073-4.94-.073zM12 6.3a5.7 5.7 0 1 0 5.7 5.7 5.7 5.7 0 0 0-5.7-5.7zm0 9.6a3.9 3.9 0 1 1 3.9-3.9 3.9 3.9 0 0 1-3.9 3.9zm6.3-9.9a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9z" />
  </svg>
  <span className="sr-only">Instagram</span>
</Link>

            <Link href="#" className="hover:opacity-80 transition-opacity">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm-1.536 16.234h-2.197v-7.07h2.197v7.07zm-1.1-8.046c-.72 0-1.19-.49-1.19-1.1 0-.623.487-1.1 1.19-1.1.72 0 1.19.477 1.19 1.1 0 .61-.47 1.1-1.19 1.1zm8.87 8.046h-2.18v-3.916c0-.9-.322-1.516-1.13-1.516-.614 0-.98.415-1.14.817-.06.142-.075.34-.075.54v4.075h-2.18v-4.83c0-.86-.028-1.582-.056-2.24h1.89l.1 1.485h.044c.297-.7 1.024-1.516 2.24-1.516 1.482 0 2.59.97 2.59 3.054v4.047z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>

        {/* Main footer content */}
        <div className="pt-10 mb-20 grid grid-cols-1 border-t border-white/40 md:grid-cols-3 gap-8">
          {/* Address Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Our Address</h2>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 5L2 11l7 3m11-9l-7 13V8l7-3" />
                </svg>
                career@tickets.com
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 21s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 7.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="9" r="3" />
                </svg>
                89 KG 14 Ave, Kigali
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +250 700 000
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <nav className="space-y-3">
              <Link href="/" className="block hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/program" className="block hover:text-blue-400 transition-colors">
                Program
              </Link>
              <Link href="/about" className="block hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="block hover:text-blue-400 transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Join our newsletter to keep up to date with us!</h2>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="flex-grow px-3 py-2 bg-white text-black rounded"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom footer */}
        <div className=" mb-2 pt-4 border-t border-white/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">Copyright © All Rights Reserved SawaPay 2024.</p>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-blue-400 transition-colors">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}