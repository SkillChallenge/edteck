import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Sidebar from "../dashComponents/Sidebar";

// Define types for better type safety
interface ChallengeFormData {
  title: string;
  deadline: string;
  duration: string;
  prize: string;
  email: string;
  brief: string;
  description: string;
  requirements: string;
  deliverables: string;
}

interface FormFieldConfig {
  label: string;
  name: keyof ChallengeFormData;
  type: string;
  rows?: number;
  placeholder?: string;
  helperText?: string;
  required?: boolean;
}

const EditChallenge = () => {
  const router = useRouter();
  const { id } = router.query;

  const [formData, setFormData] = useState<ChallengeFormData>({
    title: "Design a Dashboard for Sokofund",
    deadline: "2024-12-24",
    duration: "7 Days",
    prize: "150",
    email: "talent@umurava.africa",
    brief: "A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa is partnering with Umurava to run a Skills Challenge for Product Design. This Fintech Company offers Payroll Management System to Employers and Embedded Financial services and products to Employees and Gig Workers across Africa.",
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
    deliverables: "The Product Designer will provide all documents and deliverables to the client before the review meetings",
  });

  // Form field configurations for easy maintenance and reusability
  const formFields: FormFieldConfig[] = [
    {
      label: "Challenge/Hackathon Title",
      name: "title",
      type: "text",
      required: true,
    },
    {
      label: "Deadline",
      name: "deadline",
      type: "date",
      required: true,
    },
    {
      label: "Duration",
      name: "duration",
      type: "text",
      placeholder: "e.g., 7 Days",
      required: true,
    },
    {
      label: "Money Prize",
      name: "prize",
      type: "text",
      placeholder: "e.g., 150",
      required: true,
    },
    {
      label: "Contact Email",
      name: "email",
      type: "email",
      required: true,
    },
    {
      label: "Project Brief",
      name: "brief",
      type: "textarea",
      rows: 4,
      helperText: "Keep this simple of 50 character",
      required: true,
    },
    {
      label: "Project Description",
      name: "description",
      type: "textarea",
      rows: 6,
      helperText: "Keep this simple of 250 character",
      required: true,
    },
    {
      label: "Project Requirements",
      name: "requirements",
      type: "textarea",
      rows: 6,
      helperText: "Keep this simple of 500 character",
      required: true,
    },
    {
      label: "Deliverables",
      name: "deliverables",
      type: "textarea",
      rows: 4,
      helperText: "Keep this simple of 500 character",
      required: true,
    },
  ];

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
    try {
      // Add loading state and error handling here
      // await updateChallenge(id, formData);
      router.push(`/challenges/${id}`);
    } catch (error) {
      console.error("Failed to update challenge:", error);
      // Add error notification here
    }
  };

  const renderField = (field: FormFieldConfig) => {
    const commonProps = {
      name: field.name,
      value: formData[field.name],
      onChange: handleChange,
      required: field.required,
      placeholder: field.placeholder,
      className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
    };

    return (
      <div key={field.name} className={field.type === "textarea" ? "col-span-2" : undefined}>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {field.type === "textarea" ? (
          <textarea {...commonProps} rows={field.rows} />
        ) : (
          <input {...commonProps} type={field.type} />
        )}
        {field.helperText && (
          <p className="text-sm text-gray-500 mt-1">{field.helperText}</p>
        )}
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-[240px]">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b">
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
              <Link href="/challenges" className="text-gray-500 hover:text-gray-700">
                Challenges & Hackathons
              </Link>
              <span className="text-gray-500">/</span>
              <span className="text-blue-600">Edit Challenge</span>
            </div>
          </div>
        </nav>

        {/* Main Form */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-2xl font-semibold mb-6">Edit Challenge</h1>
          <p className="text-gray-600 mb-8">
            Update the challenge details below
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {formFields.map(renderField)}
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