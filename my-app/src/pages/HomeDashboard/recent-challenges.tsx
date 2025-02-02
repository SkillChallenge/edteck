import Image from "next/image"
import Link from "next/link"

const challenges = [
  {
    id: 1,
    title: "Design a Dashboard for SokoFund, Fintech Product",
    skills: ["UI/UX Design", "User Research"],
    seniority: "Junior, Intermediate, Senior",
    timeline: "15 Days",
  },
  {
    id: 2,
    title: "Design a Dashboard for SokoFund for a Fintech Product",
    skills: ["UI/UX Design", "User Research"],
    seniority: "Junior, Intermediate, Senior",
    timeline: "15 Days",
  },
  {
    id: 3,
    title: "Design a Dashboard for SokoFund for a Fintech Product",
    skills: ["UI/UX Design", "User Research"],
    seniority: "Junior, Intermediate, Senior",
    timeline: "15 Days",
  },
]

export function RecentChallenges() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Recent Challenges</h2>
        <Link href="/challenges" className="text-blue-600 hover:underline">
          See all
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="bg-white rounded-lg border border-gray-100 overflow-hidden">
            <div className="relative h-48 bg-blue-600">
              <span className="absolute top-4 right-4 px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                Open
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src="/Umurava logo.png" alt="Umurava Logo" width={160} height={40} className="w-40" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-4">{challenge.title}</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Skills Needed:</p>
                  <div className="flex flex-wrap gap-2">
                    {challenge.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">Seniority Level:</p>
                  <p className="text-sm">{challenge.seniority}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">Timeline:</p>
                  <p className="text-sm">{challenge.timeline}</p>
                </div>

                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  View Challenge
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

