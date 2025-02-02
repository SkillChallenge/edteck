"use client";
import Link from "next/link";
import { Navbar } from "./components/navbar";
import Footer from "./components/footer";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

interface Challenge {
  title: string;
  skills: string[];
  seniority: string;
  timeline: string;
}

const challenges: Challenge[] = Array(12).fill({
  title: "Design a Dashboard for SokoFund",
  skills: ["UI/UX Design", "User Research", "User Research"],
  seniority: "Junior, Intermediate, Senior",
  timeline: "15 Days",
});

export default function ChallengesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] px-2 md:px-4">
      <Navbar />

      <div className="container max-w-7xl mx-auto">
        <div className="mb-8 mt-32">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="flex items-center gap-1 hover:text-gray-900">
              <ChevronLeft className="h-4 w-4" />
              Go Back
            </Link>
            <span>/</span>
            <span className="text-gray-900">Challenges & Hackathons</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {challenges.map((challenge, index) => (
            <div key={index} className="w-full">
              <ChallengeCard challenge={challenge} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

function ChallengeCard({ challenge }: { challenge: Challenge }) {
  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden w-full">
      {/* Header - Blue Section */}
      <div className="bg-[#4285F4] px-6 py-6 relative flex flex-col items-center justify-center text-white">
        <span className="absolute right-3 top-3 bg-[#22C55E] text-white text-xs font-medium px-3 py-1 rounded-full">
          Open
        </span>
        <div className="flex flex-col items-center">
          <Image
            src="/Umurava logo.png"
            alt="Umurava Logo"
            width={120}
            height={40}
            className="h-8 w-auto sm:h-10"
          />
         
        </div>
      </div>

      {/* Card Content */}
      <div className="px-6 py-5 space-y-4">
        <h3 className="font-semibold text-[#1E293B] text-lg">{challenge.title}</h3>

        {/* Skills Section */}
        <div>
          <p className="text-black text-xs font-semibold mb-2">Skills Needed:</p>
          <div className="flex flex-wrap gap-2">
            {challenge.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-[#EFF6FF] text-[#4285F4] text-xs px-3 py-1 rounded-full border border-[#4285F4] whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Seniority Level */}
        <div>
          <p className="text-black text-xs font-semibold">Seniority Level:</p>
          <p className="text-[#475569] text-sm font-medium">{challenge.seniority}</p>
        </div>

        {/* Timeline */}
        <div>
          <p className="text-black text-xs font-semibold">Timeline:</p>
          <p className="text-[#475569] text-sm font-medium">{challenge.timeline}</p>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-[#E2E8F0] mx-6"></div>

      {/* Button */}
      <div className="px-6 pb-6 pt-4 flex justify-center">
  <button className="bg-[#4285F4] hover:bg-[#4285F4]/90 text-white max-w-[200px] w-full py-3 rounded-lg text-sm font-medium transition">
    View Challenge
  </button>
</div>


    </div>
  );
}
