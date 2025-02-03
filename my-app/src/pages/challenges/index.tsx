import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";

const ChallengesPage = () => {
  const challenges = Array(12).fill({
    title: "Design a Dashboard for SokoFund",
    skills: ["UX/UI Design", "User Research", "User Research"],
    seniority: "(Junior, Intermediate, Senior)",
    timeline: "15 Days",
    status: "Open",
  });

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Breadcrumb */}
        <div className="border-b bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => window.history.back()}
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
                Go Back
              </button>
              <span className="text-gray-500">/</span>
              <span className="text-blue-600">Challenges & Hackathons</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Search and Filter */}
          <div className="flex justify-between items-center mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="pl-10 pr-4 py-2 border rounded-lg w-[300px]"
              />
              <svg
                className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
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
            <button className="flex items-center px-4 py-2 text-sm text-gray-600 border rounded-lg hover:bg-gray-50">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filter
            </button>
          </div>

          {/* Grid of Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden border hover:shadow-md transition-shadow duration-200"
              >
                {/* Card Header with Logo */}
                <div className="bg-blue-600 p-8 relative">
                  <Image
                    src="/logo.png"
                    alt="Umurava"
                    width={150}
                    height={40}
                    className="h-8 w-auto"
                  />
                  <span className="absolute top-3 right-3 px-3 py-1 text-xs font-medium text-white bg-green-500 rounded-full">
                    {challenge.status}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-4 space-y-4">
                  {/* Title */}
                  <h3 className="font-medium">{challenge.title}</h3>

                  {/* Skills Section */}
                  <div>
                    <div className="text-sm font-bold text-gray-800 mb-2">
                      Skills Needed:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {challenge.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Seniority Level */}
                  <div>
                    <div className="text-sm">
                      <span className="font-bold text-gray-800">
                        Seniority Level:
                      </span>
                      <span className="ml-1">{challenge.seniority}</span>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <div className="text-sm font-bold text-gray-800 mb-1">
                      Timeline:
                    </div>
                    <div className="text-sm">{challenge.timeline}</div>
                  </div>

                  {/* View Challenge Button */}
                  <Link
                    href={`/challenges/${index + 1}`}
                    className="block w-full text-center py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    View Challenge
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChallengesPage;
