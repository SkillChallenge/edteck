import { Plus } from "lucide-react";
import Image from "next/image";
import Sidebar from "../dashComponents/Sidebar";
import SearchBar from "../dashComponents/Header";
import Link from "next/link";

type Skill = "UI/UX Design" | "User Research" | "Frontend Development" | "Backend Development";

type Challenge = {
  title: string;
  skills: Skill[];
  seniority: string;
  timeline: string;
};

type ChallengeTab = {
  name: string;
  count: number;
  icon: string;
};

const challengeTabs: ChallengeTab[] = [
  { name: "All Challenge", count: 0, icon: "📋" },
  { name: "Completed Challenge", count: 0, icon: "✓" },
  { name: "Open Challenge", count: 0, icon: "🔓" },
  { name: "Ongoing Challenge", count: 0, icon: "⏳" },
];

const challenges: Challenge[] = Array(6).fill({
  title: "Design a Dashboard for SokoFund",
  skills: ["UI/UX Design", "User Research", "User Research"],
  seniority: "Junior, Intermediate, Senior",
  timeline: "15 Days",
});

export default function ChallengePage() {
  return (
    <div className="flex min-h-screen bg-[#F8F9FA]">
      {/* Sidebar - Fixed width */}
      <div className="w-60 flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content Area - Centered */}
      <div className="flex-1 max-w-6xl mx-auto bg-white">
        <SearchBar />
        {/* Main Content */}
        <div className="p-6">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-xl font-semibold text-gray-900">Challenges</h1>
            <p className="mt-1 text-sm text-gray-500">
              Join a challenge or a hackathon to gain valuable work experience.
            </p>
          </div>
          <br />

          {/* Challenge Tabs and Create Button */}
          <div className="flex flex-wrap items-center gap-10 mb-6">
            <div className="flex flex-wrap gap-2">
              {challengeTabs.map((tab) => (
                <button
                  key={tab.name}
                  className="inline-flex items-center px-3 py-4 text-sm rounded-xl bg-[#4169E1]/10 text-black hover:bg-[#5169E1]/20"
                >
                  <span className="mr-1.5">{tab.icon}</span>
                  {tab.name}
                  <span className="ml-1.5 px-1.5 py-0.5 text-xs rounded-full bg-white">{tab.count}</span>
                </button>
              ))}
            </div>
            <Link href="/challenges/createChallenge">
              <button className="inline-flex items-center px-3 py-4 text-sm bg-[#4169E1] text-white rounded-xl hover:bg-[#4169E1]/90">
                <Plus className="w-4 h-4 mr-1.5" />
                Create New Challenge
              </button>
            </Link>
          </div>

          {/* Challenges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
                <div className="relative h-[200px] bg-[#4169E1] flex items-center justify-center">
                  <span className="absolute right-2 top-2 bg-[#0F973D] text-white text-xs font-medium px-4 py-2 rounded-full">
                    Open
                  </span>
                  <Image
                    src="/White-transplarent-words 3 (1) 1.png"
                    alt="Umurava Logo"
                    width={200}
                    height={600}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-3">{challenge.title}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-bold mb-1.5">Skills Needed:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {challenge.skills.map((skill: Skill, idx: number) => (
                          <span
                            key={`${skill}-${idx}`}
                            className="px-2 py-0.5 bg-[#4169E1]/10 text-[#4169E1] text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="text-xs font-bold mb-1">Seniority Level:</p>
                      <p className="text-xs text-gray-500">{challenge.seniority}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="text-xs font-bold mb-1">Timeline:</p>
                      <p className="text-xs text-gray-500">{challenge.timeline}</p>
                    </div>
                    <Link href="/challenges/details">
                      <button className="w-auto px-6 bg-[#4285F4] hover:bg-[#4285F4]/90 text-white py-2.5 rounded-xl text-sm font-medium transition">
                        View Challenge
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-between items-center">
            <button className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-700">Previous</button>
            <button className="px-3 py-1.5 text-sm bg-[#4169E1] text-white rounded-md hover:bg-[#4169E1]/90">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
