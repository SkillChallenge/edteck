import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Sidebar from "../dashComponents/Sidebar";

const EditChallenge = () => {
  const router = useRouter();
  const { id } = router.query;

  const [formData, setFormData] = useState({
    title: "Design a Dashboard for Sokofund",
    deadline: "2024-12-24",
    duration: "7 Days",
    prize: "150",
    email: "talent@umurava.africa",
    brief:
      "A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa is partnering with Umurava to run a Skills Challenge for Product Design. This Fintech Company offers Payroll Management System to Employers and Embedded Financial services and products to Employees and Gig Workers across Africa.",
    description: `• User Interface Design for each step
• Creating wireframes to outline the basic structure and layout of the web and mobile app.
• Designing visually appealing and user-friendly interfaces for the web and mobile apps focusing on usability and user experience.
• Ensuring the web application works seamlessly across web, mobile, and tablet devices.
• Provide a feedback session for in-development guidance`,
    requirements: `• UX research to understand Project Requirements
• Understanding User Needs
• Understanding Business Goals
• Determine interaction between users
• Requirements Catalog`,
    deliverables:
      "The Product Designer will provide all documents and deliverables to the client before the review meetings",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to update the challenge
    console.log("Updated challenge data:", formData);
    // After successful update, redirect to the challenge details page
    router.push(`/challenges/${id}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-[240px]">
        {/* Header Navigation */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-4">
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
              <span className="text-blue-600">Create New Challenge</span>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-semibold mb-6">Edit a Challenge</h1>
          <p className="text-gray-600 mb-8">
            Fill out these details to build your broadcast
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Challenge Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Challenge/Hackathon Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Deadline
                </label>
                <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Money Prize
                </label>
                <input
                  type="text"
                  name="prize"
                  value={formData.prize}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Project Brief */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Brief
              </label>
              <textarea
                name="brief"
                value={formData.brief}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                Keep this simple of 50 character
              </p>
            </div>

            {/* Project Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                Keep this simple of 250 character
              </p>
            </div>

            {/* Project Requirements */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Requirements
              </label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                Keep this simple of 500 character
              </p>
            </div>

            {/* Deliverables */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Deliverables
              </label>
              <textarea
                name="deliverables"
                value={formData.deliverables}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                Keep this simple of 500 character
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => router.back()}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Update Challenge
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditChallenge;
