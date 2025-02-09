"use client"

import Image from "next/image"

const GettingStarted = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-[#0A1B3F] text-4xl font-bold text-center mb-20">How to Get Started</h2>

      <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
        {/* Left Column */}
        <div className="space-y-12">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <span className="inline-block px-4 py-1 bg-[#2B71F0] text-white rounded-2xl text-sm font-medium mb-4">
              Step 1
            </span>
            <h3 className="text-[#0A1B3F] text-2xl font-bold mb-3">Sign up on Umurava Platform</h3>
            <p className="text-[#64748B] leading-relaxed mb-8">Submit your completed project for evaluation</p>
            <div className="relative h-[200px] w-medium">
              <Image src="/frame1.png" alt="Umurava Platform Login" fill className="object-contain" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
  <span className="inline-block px-4 py-1 bg-[#2B71F0] text-white rounded-2xl border-5 text-sm font-medium mb-4">
    Step 2
  </span>
  <h3 className="text-[#0A1B3F] text-2xl font-bold mb-3">Browse Open Challenges</h3>
  <p className="text-[#64748B] leading-relaxed mb-8">
    Explore the range of challenges and hackathons and choose one that aligns with your interests and career
    goals
  </p>
  <div className="relative h-[calc(200px-2rem)] w-[calc(100%-2rem)]">
    <Image src="/frame2.png" alt="Challenges Dashboard" layout="fill" objectFit="contain" className="absolute top-0 left-0" />
  </div>
</div>

        </div>

        {/* Right Column */}
        <div className="space-y-12">
          {/* Step 3 */}
          <div className="bg-white rounded-4xl p-8  border border-gray-200 h-[250px]">
            <span className="inline-block px-4 py-1 bg-[#2B71F0] text-white rounded-2xl text-sm font-medium mb-4">
              Step 3
            </span>
            <h3 className="text-[#0A1B3F] text-2xl font-bold mb-3">Register and Participate</h3>
            <p className="text-[#64748B] leading-relaxed">
              Sign up for the challenge and start working on the project.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 h-[250px]">
            <span className="inline-block px-4 py-1 bg-[#2B71F0] text-white rounded-2xl text-sm font-medium mb-4">
              Step 4
            </span>
            <h3 className="text-[#0A1B3F] text-2xl font-bold mb-3">Submit your work</h3>
            <p className="text-[#64748B] leading-relaxed">Submit your completed project for evaluation</p>
          </div>

          {/* Step 5 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 h-[250px]">
            <span className="inline-block px-4 py-1 bg-[#2B71F0] text-white rounded-2xl text-sm font-medium mb-4">
              Step 5
            </span>
            <h3 className="text-[#0A1B3F] text-2xl font-bold mb-3">Receive Feedback and Recognition</h3>
            <p className="text-[#64748B] leading-relaxed">Get feedback on your work and celebrate your achievements</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GettingStarted

