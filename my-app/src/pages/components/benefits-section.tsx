'use client'

import { Briefcase, Medal, Target, Users } from 'lucide-react'
import Image from 'next/image'

export default function Component() {
  const benefits = [
    {
      icon: Briefcase,
      title: "Enhance Your Employment Path",
      description: "Network with other talented individuals and learn from their experiences"
    },
    {
      icon: Medal,
      title: "Earn Recognition and Prizes",
      description: "Gain valuable experience and knowledge to advance your career in the digital economy;"
    },
    {
      icon: Target,
      title: "Personal Growth",
      description: "Challenge yourself, learn new skills, and expand your professional network."
    },
    {
      icon: Users,
      title: "Learn from Industry Experts",
      description: "Access valuable insights and guidance from experienced professionals in the digital careers fields and spaces."
    }
  ]

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          {/* Text Content */}
          <div className="text-center lg:text-left mb-12">
            <h2 className="text-[#0A1B3F] text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              What else can I gain from participating in Skills Challenges ?
            </h2>
            <p className="text-[#64748B] text-lg">
              Join Skills Challenges Program to accelerate your career growth and become part of Africa&apos;s largest workforce of digital professionals.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="space-y-4">
                <div className="w-14 h-14 bg-[#4285F4] rounded-lg flex items-center justify-center">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[#0A1B3F] text-xl font-semibold">
                  {benefit.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* UI Mockup */}
        <div className="relative">
          <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-[#4285F4]/10 rounded-full blur-3xl"></div>
          <div className="relative w-full h-[400px]">
  <Image
    src="/skill section banner 1.png"
    alt="Umurava Platform Interface"
    fill
    className="object-cover rounded-xl shadow-2xl"
  />
</div>

        </div>
      </div>
    </section>
  )
}