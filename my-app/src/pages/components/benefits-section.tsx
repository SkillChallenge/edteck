"use client"

import Image from "next/image"

export default function Component() {
  const benefits = [
    {
      icon: "/Case Round.png",
      title: "Enhance Your Employment Path",
      description: "Network with other talented individuals and learn from their experiences",
    },
    {
      icon: "/Diploma.png",
      title: "Earn Recognition and Prizes",
      description: "Gain valuable experience and knowledge to advance your career in the digital economy",
    },
    {
      icon: "/Graph New Up.png",
      title: "Personal Growth",
      description: "Challenge yourself, learn new skills, and expand your professional network",
    },
    {
      icon: "/Medal Ribbons Star.png",
      title: "Learn from Industry Experts",
      description:
        "Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces",
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Text Content */}
      <div className="max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 text-center">
        <h2 className="text-[#0A1B3F] text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
          What else can I gain from participating in Skills Challenges ?
        </h2>
        <p className="text-[#64748B] text-base sm:text-lg">
          Join Skills Challenges Program to accelerate your career growth and become part of Africa&apos;s largest
          workforce of digital professionals.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mt-4 sm:mt-8 lg:mt-0">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-2 sm:space-y-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2B71F0] rounded-lg flex items-center justify-center">
                <Image
                  src={benefit.icon || "/placeholder.svg"}
                  alt={benefit.title}
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </div>
              <h3 className="text-[#0A1B3F] text-base sm:text-lg font-semibold">{benefit.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* UI Mockup */}
        <div className="relative mt-8 lg:mt-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#4285F4]/5 rounded-full blur-3xl"></div>
          <div className="relative">
            <Image
              src="/skill section banner 1.png"
              alt="Umurava Platform Interface"
              width={800}
              height={600}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

