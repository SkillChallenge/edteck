"use client";
import Link from "next/link";
import { Navbar } from "./components/navbar";
import Footer from "./dashComponents/Footer";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";


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


const ChallengeCard = ({ challenge }: { challenge: Challenge }) => {
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
      {/* Card Header */}
      <div className="bg-[#2B71F0] p-8 relative h-[200px] border border-[#E2E8F0] mx-5 mt-4 rounded-xl">
      <span className="absolute right-2 top-2 bg-[#0F973D] text-white text-xs font-medium px-4 py-2 rounded-full">
                    Open
                  </span>
        <br />
        <br />
        <div className="flex items-center">
          <Image
            src="/White-transplarent-words 3 (1) 1.png"
            alt="Umurava"
            width={200}
            height={60}
            className="object-contain"
          />


        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-[#0A1B3F] text-sm font-bold text-lg">{challenge.title}</h3>

        {/* Skills Section */}
        <div>
          <p className="text-[#0A1B3F] text-sm font-bold">Skills Needed:</p>
          <div className="flex items-center gap-1  ">
            {challenge.skills.map((skill: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | null | undefined> | null | undefined, i: Key | null | undefined) => (
              <span
                key={i}
                className="bg-[#2B71F0]/10 text-[#4285F4] text-sm px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Seniority & Timeline */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="text-[#0A1B3F] text-sm font-bold ">Seniority:</p>
            <p className="text-[#64748B] text-sm capitalize">{challenge.seniority}</p>
          </div>
          <br />
          <div className="flex items-center gap-1">
            <p className="text-[#0A1B3F] text-sm font-bold ">Timeline:</p>
            <p className="text-[#64748B] text-sm capitalize">{challenge.timeline}</p>
          </div>
        </div>
        <br />

        <hr className="border-t border-[#E2E8F0]" />

        {/* View Challenge Button */}
        <button className="w-auto px-6 bg-[#2B71F0] hover:bg-[2B71F0]/90 text-white py-2.5 rounded-xl text-sm font-medium transition">
          View Challenge
        </button>
      </div>
    </div>
  );
};





