"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Sidebar from "../dashComponents/Sidebar";
import SearchBar from "../dashComponents/Header"

const CreateChallenge = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
    duration: "",
    prize: "",
    email: "",
    description: "",
    brief: "",
    tasks: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="mb-40 flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-[240px]">
        <SearchBar />
        {/* Header Navigation */}
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
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
            <div className="ml-4 flex items-center">
              <span className="text-gray-500">/</span>
              <Link
                href="/challenges"
                className="ml-2 text-gray-500 hover:text-gray-700"
              >
                Challenges & Hackathons
              </Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-blue-600">Create New Challenge</span>
            </div>
          </div>
        </div>

        {/* Main Form */}
        {/* <div className=" b-2 max-w-3xl mx-auto px-4 py-8"> */}
        <div className="border-t-2 border-l-2 border-r-2 max-w-3xl mx-auto px-4 py-8">

          <h1 className="ml-48 text-lg text-gray-600 mb-6">
            Fill out these details to build your broadcast
          </h1>

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
                placeholder="Enter Title"
              />
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-2 gap-4">
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
                  placeholder="Duration"
                />
              </div>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-2 gap-4">
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
                  placeholder="Prize"
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
                  placeholder="Email"
                />
              </div>
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                placeholder="Enter text here..."
              />
              <p className="text-sm text-gray-500 mt-1">
                Keep this simple of 250 character
              </p>
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                placeholder="Enter text here..."
              />
              <p className="text-sm text-gray-500 mt-1">
                Keep this simple of 50 character
              </p>
            </div>

            {/* Project Description & Tasks */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Description & Tasks
              </label>
              <textarea
                name="tasks"
                value={formData.tasks}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                placeholder="Enter text here..."
              />
              <p className="text-sm text-gray-500 mt-1">
                Keep this simple of 500 character
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => router.back()}
                className=" rounded-3xl flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className=" rounded-3xl flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Create Challenge
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateChallenge;
