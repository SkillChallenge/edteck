'use client'

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
            <div className="bg-[#4285F4] p-8 relative h-[160px]">
              <span className="absolute right-3 top-3 bg-[#22C55E] text-white text-xs font-medium px-3 py-1 rounded-full">
                Open
              </span>
              <div className="flex items-center">
                <svg className="w-12 h-12" viewBox="0 0 32 32" fill="none">
                  <path 
                    d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" 
                    fill="white"
                  />
                  <path 
                    d="M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z" 
                    fill="#4285F4"
                  />
                </svg>
                <span className="text-white ml-3 text-2xl font-medium">Umurava</span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 space-y-4">
              <h3 className="font-medium text-[#1E293B] text-lg">
                {challenge.title}
              </h3>

              <div>
                <p className="text-[#64748B] text-sm mb-2">Skills Needed:</p>
                <div className="flex flex-wrap gap-2">
                  {challenge.skills.map((skill: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | null | undefined> | null | undefined, i: Key | null | undefined) => (
                    <span 
                      key={i}
                      className="bg-[#F1F5F9] text-[#475569] text-sm px-3 py-1 rounded-full border border-[#E2E8F0]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[#64748B] text-sm mb-1">Seniority Level:</p>
                <p className="text-[#475569] text-sm">
                  {challenge.seniority}
                </p>
              </div>

              <div>
                <p className="text-[#64748B] text-sm mb-1">Timeline:</p>
                <p className="text-[#475569] text-sm">
                  {challenge.timeline}
                </p>
              </div>

              <button 
                className="w-full bg-[#4285F4] hover:bg-[#4285F4]/90 text-white py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                View Challenge
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center">
        <button className="inline-flex items-center justify-center px-6 py-2.5 border border-[#4285F4] text-[#4285F4] rounded-lg text-sm font-medium hover:bg-[#4285F4] hover:text-white transition-colors">
          View More
        </button>
      </div>
    </section>
  )
}