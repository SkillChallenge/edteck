"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const skills = [
  { name: "UI/UX Design", href: "#" },
  { name: "Data Science", href: "#" },
  { name: "Graphic Design", href: "#" },
  { name: "Data Analysis & Research", href: "#" },
  { name: "Animation", href: "#" },
  { name: "Videography & Photography", href: "#" },
  { name: "Data Science", href: "#" },
  { name: "AI & Machine Learning", href: "#" },
  { name: "Web3", href: "#" },
  { name: "Digital Marketing & Communications", href: "#" },
]

const projects = [
  {
    id: 1,
    logo: "/sf-logo.png",
    title: "Smart Finance Platform",
    description:
      "The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.",
    image:
      "",
  },
  // More projects can be added here
]

export function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState("UI/UX Design")
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A1832] mb-3 sm:mb-4 leading-tight px-4">
            Skills Challenges Cover various in-demand skills
            <br className="hidden sm:block" />
            and Careers for the digital economy
          </h2>
          <p className="text-gray-500 text-base sm:text-lg px-4">
            Explore the projects that various talents are working on.
          </p>
        </div>

        {/* Skills Tags Container */}
        <div className="overflow-x-auto pb-4 mb-8 sm:mb-12 -mx-4 px-4 sm:px-0 sm:overflow-x-visible">
          {/* Skills Tags */}
          <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 min-w-max sm:min-w-0">
            {skills.map((skill) => (
              <button
                key={skill.name}
                onClick={() => setActiveSkill(skill.name)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm whitespace-nowrap font-medium transition-colors
                  ${
                    skill.name === activeSkill
                      ? "bg-[#3B82F6] text-white"
                      : "bg-[#F3F4F6] text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {skill.name}
              </button>
            ))}
          </div>
        </div>

        {/* Project Showcase */}
        <div className="bg-[#F3F4F6] rounded-2xl p-6 sm:p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              {/* Logo */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Image
                  src="/placeholder.svg?height=32&width=32&text=sf"
                  alt="Smart Finance logo"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded"
                />
              </div>

              {/* Description */}
              <p className="text-gray-600 text-base sm:text-lg">{projects[currentSlide].description}</p>

              {/* Learn More Link */}
              <Link
                href="#"
                className="inline-flex items-center text-[#3B82F6] font-medium hover:text-blue-700 transition-colors group"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Dashboard Image */}
            <div className="relative mt-4 md:mt-0">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Dashboard"
                alt="Dashboard interface"
                width={800}
                height={600}
                className="rounded-lg shadow-lg w-full"
                priority
              />
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8 sm:mt-12">
            {[0, 1, 2, 3].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors
                  ${index === currentSlide ? "bg-[#3B82F6]" : "bg-gray-300"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

