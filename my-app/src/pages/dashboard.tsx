import { Search, Users } from "lucide-react"
import Image from "next/image"
import Sidebar from "./dashComponents/Sidebar"

interface Challenge {
  title: string
  skills: string[]
  seniority: string
  timeline: string
}

const challenges: Challenge[] = [
  {
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research"],
    seniority: "Junior, Intermediate, Senior",
    timeline: "15 Days",
  },
  {
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research"],
    seniority: "Junior, Intermediate, Senior",
    timeline: "15 Days",
  },
  {
    title: "Design a Dashboard for SokoFund",
    skills: ["UI/UX Design", "User Research"],
    seniority: "Junior, Intermediate, Senior",
    timeline: "15 Days",
  },
]

export default function DashboardPage() {
  return (
    <div className=" flex-1">
      <Sidebar />
      {/* Top Search Bar */}
      <div className="  mx-auto px-4 py-16 flex items-center justify-between border-b ">
        <div className="relative flex-1 max-w-1xl">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            placeholder="Search here..."
            className="h-10 w-full rounded-md border border-gray-200 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="rounded-full p-2 hover:bg-gray-100">
            <div className="h-5 w-5 rounded-full bg-gray-500" />
          </button>
          <button className="rounded-full p-2 hover:bg-gray-100">
            <div className="h-5 w-5 rounded-full bg-gray-700" />
          </button>
        </div>
      </div>

      <div className="space-y-8 p-8 pt-6">
        <div className="flex flex-col space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Welcome back Hilaire,</h2>
          <p className="text-gray-500">Build Work Experience through Skills Challenges</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Total Challenge Card */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-blue-100 p-2">
                    <Users className="h-4 w-4 text-blue-500" />
                  </div>
                  <span className="text-sm text-gray-500">Total Challenge</span>
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-semibold">29,405</h3>
                  <span className="text-sm text-green-500">↑ 15%</span>
                </div>
              </div>
              <select className="rounded-md border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option value="this-week">This Week</option>
                <option value="last-week">Last Week</option>
                <option value="last-month">Last Month</option>
              </select>
            </div>
          </div>

          {/* Total Participants Card */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-blue-100 p-2">
                    <Users className="h-4 w-4 text-blue-500" />
                  </div>
                  <span className="text-sm text-gray-500">Total Participants</span>
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-semibold">29,405</h3>
                  <span className="text-sm text-green-500">↑ 15%</span>
                </div>
              </div>
              <select className="rounded-md border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                <option value="this-week">This Week</option>
                <option value="last-week">Last Week</option>
                <option value="last-month">Last Month</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {/* Completed Challenges Card */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="space-y-1">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-blue-100 p-2">
                  <Users className="h-4 w-4 text-blue-500" />
                </div>
                <span className="text-sm text-gray-500">Completed Challenges</span>
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-semibold">5,837</h3>
                <span className="text-sm text-green-500">↑ 15%</span>
              </div>
            </div>
            <select className="mt-4 w-full rounded-md border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="last-30-days">Last 30 days</option>
              <option value="last-60-days">Last 60 days</option>
              <option value="last-90-days">Last 90 days</option>
            </select>
          </div>

          {/* Open Challenges Card */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="space-y-1">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-blue-100 p-2">
                  <Users className="h-4 w-4 text-blue-500" />
                </div>
                <span className="text-sm text-gray-500">Open Challenges</span>
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-semibold">5,837</h3>
                <span className="text-sm text-green-500">↑ 15%</span>
              </div>
            </div>
            <select className="mt-4 w-full rounded-md border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="last-30-days">Last 30 days</option>
              <option value="last-60-days">Last 60 days</option>
              <option value="last-90-days">Last 90 days</option>
            </select>
          </div>

          {/* Ongoing Challenges Card */}
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <div className="space-y-1">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-blue-100 p-2">
                  <Users className="h-4 w-4 text-blue-500" />
                </div>
                <span className="text-sm text-gray-500">Ongoing Challenges</span>
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-semibold">5,837</h3>
                <span className="text-sm text-green-500">↑ 15%</span>
              </div>
            </div>
            <select className="mt-4 w-full rounded-md border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="last-30-days">Last 30 days</option>
              <option value="last-60-days">Last 60 days</option>
              <option value="last-90-days">Last 90 days</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">Recent Challenges</h3>
            <button className="text-blue-500 hover:underline">See all</button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {challenges.map((challenge, index) => (
              <div key={index} className="overflow-hidden rounded-lg border bg-white shadow-sm">
                <div className="aspect-video bg-blue-500">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Homepage%20-%20Dashboard-opTSFKN9azcB8de3AF45ZdvRrlkySl.png"
                    alt="Challenge thumbnail"
                    width={400}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-500">Open</span>
                    </div>
                    <h4 className="font-semibold">{challenge.title}</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm text-gray-500">Skills Needed:</div>
                      <div className="flex flex-wrap gap-2">
                        {challenge.skills.map((skill) => (
                          <span key={skill} className="rounded-full border px-2.5 py-0.5 text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-500">Seniority Level:</div>
                      <div className="text-sm">{challenge.seniority}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-500">Timeline:</div>
                      <div className="text-sm">{challenge.timeline}</div>
                    </div>
                    <button className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      View Challenge
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

