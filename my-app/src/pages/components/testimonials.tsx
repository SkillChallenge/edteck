"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Manzi Jack",
    title: "Product Designer, Kigali",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 2,
    name: "Manzi Jack",
    title: "Product Designer, Kigali",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 3,
    name: "Manzi Jack",
    title: "Product Designer, Kigali",
    avatar: "/placeholder.svg?height=48&width=48",
    },
  
]

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-[#0A1832] text-3xl md:text-4xl font-bold mb-4">
            Users are in Love with Skills Challenges Program
          </h2>
          <p className="text-gray-600 text-lg">
            See what our clients say about working with us. Their success speaks for our dedication and expertise.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Cards Container */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-none w-full md:w-[calc(33.333%-16px)] snap-center">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video mb-6 bg-[#3B82F6] rounded-xl overflow-hidden">
                    <button className="absolute inset-0 flex items-center justify-center group">
                      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 group-hover:bg-white transition-colors">
                        <Play className="w-6 h-6 text-[#3B82F6] ml-1" />
                      </div>
                    </button>
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#3B82F6] overflow-hidden">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-[#0A1832] font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-600 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeSlide ? "bg-[#3B82F6]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

