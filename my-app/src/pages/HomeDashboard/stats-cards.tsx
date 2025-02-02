import { FileText } from "lucide-react"

const stats = [
  { title: "Completed Challenges", value: "05" },
  { title: "Open Challenges", value: "200" },
  { title: "Ongoing Challenges", value: "200" },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white rounded-lg p-6 border border-gray-100 flex items-center justify-between"
        >
          <div>
            <p className="text-sm text-gray-600">{stat.title}</p>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <FileText className="w-5 h-5 text-blue-600" />
          </div>
        </div>
      ))}
    </div>
  )
}

