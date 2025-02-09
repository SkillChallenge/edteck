'use client'

import Image from "next/image"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react"

const challenges = Array(3).fill({
  title: "Design a Dashboard for SokoFund",
  skills: ["UI/UX Design", "User Research", "User Research"],
  seniority: "(Junior, Intermediate, Senior)",
  timeline: "15 Days"
})

export default function Component() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-[#0A1B3F] text-4xl font-bold mb-4">
          Explore Challenges & Hackathons
        </h2>
        <p className="text-[#64748B] text-lg">
          Join Skills Challenges Program to accelerate your career growth and become part of Africa&apos;s largest workforce of digital professionals.
        </p>
      </div>

      {/* Challenge Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden"
          >
            {/* Card Header */}
            <div className="bg-[#4285F4] p-8 relative h-[200px] border border-[#E2E8F0] mx-5 mt-4 rounded-xl flex items-center justify-center">
              <span className="absolute right-3 top-3 bg-[#22C55E] text-white text-xs font-medium px-3 py-1 rounded-full">
                Open
              </span>
              <Image
                src="/White-transplarent-words 3 (1) 1.png"
                alt="Umurava Logo"
                width={200}
                height={600}
              />
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-4">
              <h3 className="font-medium text-[#1E293B] text-lg">
                {challenge.title}
              </h3>

              <div>
                <p className="text-[#1E293B] text-sm mb-2">Skills Needed:</p>
                <div className="flex items-center gap-1">
                  {challenge.skills.map((skill: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | null | undefined> | null | undefined, i: Key | null | undefined) => (
                    <span
                      key={i}
                      className="bg-[#4285F4]/10 text-[#4285F4] text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <p className="text-[#1E293B] text-sm font-bold">Seniority:</p>
                  <p className="text-black text-sm capitalize">{challenge.seniority}</p>
                </div>
                <br />
                <div className="flex items-center gap-1">
                  <p className="text-[#1E293B] text-sm font-bold">Timeline:</p>
                  <p className="text-black text-sm capitalize">{challenge.timeline}</p>
                </div>
              </div>

              <hr className="border-t border-[#E2E8F0]" />

              <button
                className="w-auto px-6 bg-[#4285F4] hover:bg-[#4285F4]/90 text-white py-2.5 rounded-xl text-sm font-medium transition"
              >
                View Challenge
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center">
        <button
          className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-[#4285F4] text-[#4285F4] rounded-xl text-sm font-medium hover:bg-[#4285F4] hover:text-white transition-colors"
        >
          View More
        </button>
      </div>
    </section>
  )
}