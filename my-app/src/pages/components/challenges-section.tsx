"use client"
import Link from "next/link"
import Image from "next/image"
import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react"

const challenges = Array(3).fill({
  title: "Design a Dashboard for SokoFund",
  skills: ["UI/UX Design", "User Research", "User Research"],
  seniority: "(Junior, Intermediate, Senior)",
  timeline: "15 Days",
})

export default function Component() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-2xl mx-auto">
        <h2 className="text-[#0A1B3F] text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Explore Challenges & Hackathons
        </h2>
        <p className="text-[#64748B] text-base sm:text-lg">
          Join Skills Challenges Program to accelerate your career growth and become part of Africa&apos;s largest
          workforce of digital professionals.
        </p>
      </div>

      {/* Challenge Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {challenges.map((challenge, index) => (
          <div key={index} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
            {/* Card Header */}
            <div className="bg-[#2B71F0] p-4 sm:p-6 md:p-8 relative h-[150px] sm:h-[175px] md:h-[200px] border border-[#E2E8F0] mx-3 sm:mx-4 md:mx-5 mt-3 sm:mt-4 rounded-xl flex items-center justify-center">
              <span className="absolute right-2 top-2 bg-[#0F973D] text-white text-xs font-medium px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full">
                Open
              </span>
              <Image
                src="/White-transplarent-words 3 (1) 1.png"
                alt="Umurava Logo"
                width={150}
                height={450}
                className="w-3/4 h-auto"
              />
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
              <h3 className="text-[#0A1B3F] font-bold text-base sm:text-lg">{challenge.title}</h3>

              <div>
                <p className="text-[#0A1B3F] text-sm font-bold">Skills Needed:</p>
                <div className="flex flex-wrap items-center gap-1 mt-1">
                  {challenge.skills.map(
                    (
                      skill:
                        | string
                        | number
                        | boolean
                        | ReactElement<unknown, string | JSXElementConstructor<unknown>>
                        | Iterable<ReactNode>
                        | ReactPortal
                        | null
                        | undefined,
                      i: Key | null | undefined,
                    ) => (
                      <span key={i} className="bg-[#2B71F0]/10 text-[#4285F4] text-xs px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex items-center gap-1">
                  <p className="text-[#1E293B] text-sm font-bold">Seniority:</p>
                  <p className="text-[#64748B] text-sm capitalize">{challenge.seniority}</p>
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-[#1E293B] text-sm font-bold">Timeline:</p>
                  <p className="text-[#64748B] text-sm capitalize">{challenge.timeline}</p>
                </div>
              </div>

              <hr className="border-t border-[#E2E8F0]" />

              <button className="w-full sm:w-auto px-4 sm:px-6 bg-[#2B71F0] hover:bg-[#4285F4]/90 text-white py-2 sm:py-2.5 rounded-xl text-sm font-medium transition">
                View Challenge
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center">
        <Link href="./challenges">
          <button className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-[#4285F4] text-[#4285F4] rounded-xl text-sm font-medium hover:bg-[#4285F4] hover:text-white transition-colors">
            View More
          </button>
        </Link>
      </div>
    </section>
  )
}

