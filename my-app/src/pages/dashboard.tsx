import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState("This Week");
  const [periodStats, setPeriodStats] = useState("Last 30 days");

  const stats = {
    totalChallenge: {
      count: 29405,
      increase: 15,
    },
    totalParticipants: {
      count: 29405,
      increase: 15,
    },
    completedChallenges: {
      count: 5837,
      increase: 15,
    },
    openChallenges: {
      count: 5837,
      increase: 15,
    },
    ongoingChallenges: {
      count: 5837,
      increase: 15,
    },
  };

  const recentChallenges = [
    {
      id: 1,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research"],
      seniority: "Junior, Intermediate, Senior",
      timeline: "15 Days",
      status: "Open",
    },
    {
      id: 2,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research", "User Research"],
      seniority: "Junior, Intermediate, Senior",
      timeline: "15 Days",
      status: "Open",
    },
    {
      id: 3,
      title: "Design a Dashboard for SokoFund",
      skills: ["UI/UX Design", "User Research", "User Research"],
      seniority: "Junior, Intermediate, Senior",
      timeline: "15 Days",
      status: "Open",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 w-64 bg-blue-600 text-white">
        <div className="p-6">
          <Image
            src="/logo.png"
            alt="Umurava Logo"
            width={120}
            height={40}
            className="mb-12"
          />

          <nav className="space-y-4">
            <Link
              href="/dashboard"
              className="flex items-center space-x-3 text-white py-2 px-4 bg-blue-700 rounded-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Dashboard</span>
            </Link>

            <Link
              href="/challenges"
              className="flex items-center space-x-3 text-white/80 py-2 px-4 hover:bg-blue-700 rounded-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <span>Challenges & Hackathons</span>
            </Link>

            <Link
              href="/community"
              className="flex items-center space-x-3 text-white/80 py-2 px-4 hover:bg-blue-700 rounded-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>Community</span>
            </Link>
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
          <Link
            href="/settings"
            className="flex items-center space-x-3 text-white/80 py-2 px-4 hover:bg-blue-700 rounded-lg"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Settings</span>
          </Link>

          <Link
            href="/help"
            className="flex items-center space-x-3 text-white/80 py-2 px-4 hover:bg-blue-700 rounded-lg"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Help Center</span>
          </Link>

          <Link
            href="/refer"
            className="flex items-center space-x-3 text-white/80 py-2 px-4 hover:bg-blue-700 rounded-lg"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span>Refer family & friends</span>
          </Link>

          <div className="border-t border-blue-500 pt-4">
            <div className="flex items-center space-x-3 p-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                HS
              </div>
              <div>
                <div className="text-sm font-medium">Hilaire Sh</div>
                <div className="text-xs text-white/60">hilaire@uidesign</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back Hilaire,
            </h1>
            <p className="text-gray-600">
              Build Work Experience through Skills Challenges
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-200">
              <img
                src="/avatar.jpg"
                alt="Profile"
                className="w-full h-full rounded-full"
              />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-600">Total Challenge</h3>
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="text-sm text-gray-600 border-none bg-transparent"
              >
                <option>This Week</option>
                <option>This Month</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="flex items-end space-x-2">
              <div className="text-3xl font-bold">
                {stats.totalChallenge.count}
              </div>
              <div className="text-green-500 text-sm">
                ↑ {stats.totalChallenge.increase}%
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-600">Total Participants</h3>
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="text-sm text-gray-600 border-none bg-transparent"
              >
                <option>This Week</option>
                <option>This Month</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="flex items-end space-x-2">
              <div className="text-3xl font-bold">
                {stats.totalParticipants.count}
              </div>
              <div className="text-green-500 text-sm">
                ↑ {stats.totalParticipants.increase}%
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-600">Completed Challenges</h3>
              <select
                value={periodStats}
                onChange={(e) => setPeriodStats(e.target.value)}
                className="text-sm text-gray-600 border-none bg-transparent"
              >
                <option>Last 30 days</option>
                <option>Last 60 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="flex items-end space-x-2">
              <div className="text-3xl font-bold">
                {stats.completedChallenges.count}
              </div>
              <div className="text-green-500 text-sm">
                ↑ {stats.completedChallenges.increase}%
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-600">Open Challenges</h3>
              <select
                value={periodStats}
                onChange={(e) => setPeriodStats(e.target.value)}
                className="text-sm text-gray-600 border-none bg-transparent"
              >
                <option>Last 30 days</option>
                <option>Last 60 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="flex items-end space-x-2">
              <div className="text-3xl font-bold">
                {stats.openChallenges.count}
              </div>
              <div className="text-green-500 text-sm">
                ↑ {stats.openChallenges.increase}%
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-gray-600">Ongoing Challenges</h3>
              <select
                value={periodStats}
                onChange={(e) => setPeriodStats(e.target.value)}
                className="text-sm text-gray-600 border-none bg-transparent"
              >
                <option>Last 30 days</option>
                <option>Last 60 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="flex items-end space-x-2">
              <div className="text-3xl font-bold">
                {stats.ongoingChallenges.count}
              </div>
              <div className="text-green-500 text-sm">
                ↑ {stats.ongoingChallenges.increase}%
              </div>
            </div>
          </div>
        </div>

        {/* Recent Challenges */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              Recent Challenges
            </h2>
            <Link
              href="/challenges"
              className="text-blue-600 hover:text-blue-700"
            >
              See all →
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {recentChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className="bg-blue-600 rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Image
                      src="/umurava-white.png"
                      alt="Umurava"
                      width={120}
                      height={30}
                      className="mb-4"
                    />
                    <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-white rounded-full">
                      {challenge.status}
                    </span>
                  </div>
                  <div className="space-y-4 text-white">
                    <h3 className="text-lg font-semibold">
                      {challenge.title}
                    </h3>
                    <div>
                      <div className="text-sm opacity-90 mb-2">
                        Skills Needed:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {challenge.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm bg-white text-blue-600 rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm opacity-90 mb-1">
                        Seniority Level:
                      </div>
                      <div className="text-sm">
                        {challenge.seniority}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm opacity-90 mb-1">
                        Timeline:
                      </div>
                      <div className="text-sm">
                        {challenge.timeline}
                      </div>
                    </div>
                    <button className="w-full py-2 px-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
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
  );
};

export default Dashboard;
