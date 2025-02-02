import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import Sidebar from "../../components/Sidebar";

const ChallengeDetails = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 ml-[240px]">
          {/* Header Navigation */}
          <div className="bg-white">
            <div className="max-w-7xl mx-auto">
              {/* Top Navigation */}
              <div className="border-b">
                <div className="px-4 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => router.back()}
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
                    <Link
                      href="/challenges"
                      className="text-gray-500 hover:text-gray-700"
                    >
                      Challenges & Hackathons
                    </Link>
                    <span className="text-gray-500">/</span>
                    <span className="text-blue-600">
                      Design a Dashboard for Sokofund
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      className="px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                      onClick={() => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this challenge?"
                          )
                        ) {
                          console.log("Delete challenge");
                        }
                      }}
                    >
                      Delete
                    </button>
                    <Link
                      href={`/challenges/edit/${router.query.id}`}
                      className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>

              {/* Search and Filter */}
              <div className="px-4 py-2 flex items-center justify-between">
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
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-3 gap-6">
              {/* Left Column - Challenge Details */}
              <div className="col-span-2 space-y-6">
                {/* Logo and Title */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="bg-blue-600 p-16 flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="Umurava"
                      width={200}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Project Brief : Payroll and HR Management System
                    </h2>
                    <p className="text-gray-600">
                      A Fintech company that is developing a Digital Financial
                      Platform designed for businesses and their workforce in
                      Africa is partnering with Umurava to run a Skills
                      Challenge for Product Design. This Fintech Company offers
                      Payroll Management System to Employers and Embedded
                      Financial services and products to Employees and Gig
                      Workers across Africa.
                    </p>
                  </div>
                </div>

                {/* Tasks Section */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Tasks:</h3>
                  <div className="space-y-4">
                    <h4 className="font-medium">Product Requirements</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                      <li>UX research to understand Project Requirements</li>
                      <li>Understanding User Needs</li>
                      <li>Understanding Business Goals</li>
                      <li>Determine interaction between users</li>
                      <li>Requirements Catalog</li>
                    </ul>
                  </div>
                </div>

                {/* Product Design Section */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Product Design:
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>User Interface Design for each step</li>
                    <li>
                      Creating wireframes to outline the basic structure and
                      layout of the web and mobile app.
                    </li>
                    <li>
                      Designing visually appealing and user-friendly interfaces
                      for the web and mobile apps focusing on usability and user
                      experience.
                    </li>
                    <li>
                      Ensuring the web application works seamlessly across web,
                      mobile, and tablet devices.
                    </li>
                    <li>
                      Provide a feedback session for in-development guidance
                    </li>
                  </ul>
                </div>

                {/* Deliverables Sections */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Deliverables:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Requirements Catalog and User Interaction Diagram</li>
                    <li>User Interface Mockups</li>
                    <li>Payroll and HR System Design Completed</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Deliverables:</h3>
                  <p className="text-gray-600">
                    The Product Designer will provide all documents and
                    deliverables to the client before the review meetings
                  </p>
                </div>

                {/* Note Section */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">NOTE:</h3>
                  <p className="text-gray-600">
                    Find Product Requirements Summary and Features Description
                    for Saway Pay{" "}
                    <Link href="#" className="text-blue-600 hover:underline">
                      HERE
                    </Link>
                  </p>
                </div>
              </div>

              {/* Right Column - Key Instructions */}
              <div className="space-y-6">
                {/* Key Instructions Card */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Key Instructions:
                  </h3>
                  <p className="text-gray-600 mb-6">
                    You are free to schedule the clarification call with the
                    team via this
                  </p>

                  {/* Contact Details */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">talent@umurava.africa</div>
                        <div className="text-sm text-gray-500">
                          Contact Email
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">Web design</div>
                        <div className="text-sm text-gray-500">
                          Challenge Category
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">7 Days</div>
                        <div className="text-sm text-gray-500">Duration</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium">$150 - $400</div>
                        <div className="text-sm text-gray-500">Money Prize</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Participants Section */}
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Participants</h3>
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
                      250
                    </span>
                  </div>

                  <div className="space-y-4">
                    {/* Participant Item */}
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <div className="text-sm font-medium">Hilaire Sh</div>
                        <div className="text-xs text-gray-500">
                          Product Designer
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <div className="text-sm font-medium">
                          Christian Manzi
                        </div>
                        <div className="text-xs text-gray-500">
                          UI/UX Designer
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <div className="text-sm font-medium">Jolly Mutesi</div>
                        <div className="text-xs text-gray-500">
                          Content Creator
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <div className="text-sm font-medium">
                          Dr. Samuel Smith
                        </div>
                        <div className="text-xs text-gray-500">
                          Mental Health Professional
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <div className="text-sm font-medium">Dr. Lily Chen</div>
                        <div className="text-xs text-gray-500">
                          Dermatologist
                        </div>
                      </div>
                    </div>

                    <button className="w-full py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded">
                      View All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChallengeDetails;
