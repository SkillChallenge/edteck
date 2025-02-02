import Link from "next/link";
import Sidebar from "./dashComponents/Sidebar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-[240px] p-8">
        <h1 className="text-2xl font-bold mb-6">Welcome to Umurava</h1>
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Available Challenges</h2>
          <div className="space-y-4">
            <Link
              href="/challenges/1"
              className="block p-4 border rounded-lg hover:bg-gray-50"
            >
              <h3 className="font-medium">Design a Dashboard for Sokofund</h3>
              <p className="text-gray-600 text-sm mt-1">
                Payroll and HR Management System Challenge
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
