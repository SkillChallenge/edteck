import Image from "next/image"
import { ChevronDown, ChevronRight } from "lucide-react"
import Sidebar from "./dashComponents/Sidebar"
import SearchBar from "./dashComponents/Header"

type Skill = "UI/UX Design" | "User Research" | "Frontend Development" | "Backend Development"

type Challenge = {
  title: string
  skills: Skill[]
  seniority: string
  timeline: string
}

const challenges: Challenge[] = Array(3).fill({
  title: "Design a Dashboard for SokoFund",
  skills: ["UI/UX Design", "User Research","User Research"],
  seniority: "Junior, Intermediate, Senior",
  timeline: "15 Days",
})

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      {/* Sidebar - Fixed width */}
      <div className="w-60 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 max-w-7xl mx-auto bg-white">
        <SearchBar />

        {/* Main Content */}
        <div className="p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Welcome back Hilaire,</h1>
            <p className="mt-1 text-gray-600">Build Work Experience through Skills Challenges</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Total Challenge Stats */}
            <div className="bg-white p-4 rounded-xl border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">This Week</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#4285F4]/10 rounded-lg">
                  <svg className="h-6 w-6 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-600">Total Challenge</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-semibold">29,405</span>
                    <span className="text-sm text-green-500">↑ 15%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Participants Stats */}
            <div className="bg-white p-4 rounded-xl border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">This Week</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#4285F4]/10 rounded-lg">
                  <svg className="h-6 w-6 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-600">Total Participants</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-semibold">29,405</span>
                    <span className="text-sm text-green-500">↑ 15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Challenge Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Completed Challenges */}
            <div className="bg-white p-4 rounded-xl border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">Last 30 days</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#4285F4]/10 rounded-lg">
                  <svg className="h-6 w-6 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-600">Completed Challenges</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-semibold">5,837</span>
                    <span className="text-sm text-green-500">↑ 15%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Open Challenges */}
            <div className="bg-white p-4 rounded-xl border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">Last 30 days</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#4285F4]/10 rounded-lg">
                  <svg className="h-6 w-6 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-600">Open Challenges</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-semibold">5,837</span>
                    <span className="text-sm text-green-500">↑ 15%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ongoing Challenges */}
            <div className="bg-white p-4 rounded-xl border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-600">Last 30 days</span>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-[#4285F4]/10 rounded-lg">
                  <svg className="h-6 w-6 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-600">Ongoing Challenges</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-semibold">5,837</span>
                    <span className="text-sm text-green-500">↑ 15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Challenges Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Challenges</h2>
              <button className="text-[#4285F4] text-sm font-medium flex items-center gap-1">
                See all
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Challenges Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
                  <div className="bg-[#4285F4] p-6 relative h-[200px] border border-[#E2E8F0] mx-4 mt-4 rounded-xl">
                    <span className="absolute right-2 top-2 bg-[#0F973D] text-white text-xs font-medium px-4 py-2 rounded-full">
                      Open
                    </span>
                    <div className="flex items-center justify-center h-full">
                      <Image
                        src="/White-transplarent-words 3 (1) 1.png"
                        alt="Umurava"
                        width={200}
                        height={600}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <h3 className="font-medium text-[#1E293B] text-base">{challenge.title}</h3>
                    <div>
                      <p className="text-[#1E293B]  font-bold text-xs mb-1">Skills Needed:</p>
                      <div className="flex flex-wrap gap-1">
                        {challenge.skills.map((skill, i) => (
                          <span key={i} className="bg-[#4285F4]/10 text-[#4285F4] text-xs px-2 py-0.5 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1">
                        <p className="text-[#1E293B] text-xs font-bold">Seniority:</p>
                        <p className="text-black text-xs">{challenge.seniority}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <p className="text-[#1E293B] text-xs font-bold">Timeline:</p>
                        <p className="text-black text-xs">{challenge.timeline}</p>
                      </div>
                    </div>
                    <hr className="border-t border-[#E2E8F0]" />
                    <button className="w-auto bg-[#4285F4] hover:bg-[#4285F4]/90 text-white py-3 px-6 rounded-xl text-xs font-medium transition">
                      View Challenge
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

