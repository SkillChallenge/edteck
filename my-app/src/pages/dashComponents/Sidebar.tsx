import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  return (
    <div className="fixed left-0 top-0 h-screen w-[240px] bg-[#4169E1] text-white flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <Link href="/" className="text-2xl font-bold">
          <Image
            src="/Rectangle.png"
            alt="Logo"
            width={32}
            height={32}
            className="text-white"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <Link
          href="/dashboard"
          className={`flex items-center px-6 py-3 text-sm ${
            router.pathname === "/dashboard"
              ? "bg-blue-700 font-medium"
              : "hover:bg-blue-700"
          }`}
        >
          <svg
            className="w-5 h-5 mr-3"
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
          Dashboard
        </Link>

        <Link
          href="/challenges/Hackton"
          className={`flex items-center px-6 py-3 text-sm ${
            router.pathname.includes("/challenges")
              ? "bg-blue-700 font-medium"
              : "hover:bg-blue-700"
          }`}
        >
          <svg
            className="w-5 h-5 mr-3"
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
          Challenges & Hackathons
        </Link>

        <Link
          href="/community"
          className={`flex items-center px-6 py-3 text-sm ${
            router.pathname === "/community"
              ? "bg-blue-700 font-medium"
              : "hover:bg-blue-700"
          }`}
        >
          <svg
            className="w-5 h-5 mr-3"
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
          Community
        </Link>
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto">
        <Link
          href="/settings"
          className={`flex items-center px-6 py-3 text-sm ${
            router.pathname === "/settings"
              ? "bg-blue-700 font-medium"
              : "hover:bg-blue-700"
          }`}
        >
          <svg
            className="w-5 h-5 mr-3"
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
          Settings
        </Link>

        <Link
          href="/help"
          className={`flex items-center px-6 py-3 text-sm ${
            router.pathname === "/help"
              ? "bg-blue-700 font-medium"
              : "hover:bg-blue-700"
          }`}
        >
          <svg
            className="w-5 h-5 mr-3"
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
          Help Center
        </Link>

        <Link
          href="/refer"
          className={`flex items-center px-6 py-3 text-sm ${
            router.pathname === "/refer"
              ? "bg-blue-700 font-medium"
              : "hover:bg-blue-700"
          }`}
        >
          <svg
            className="w-5 h-5 mr-3"
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
          Refer family & friends
        </Link>

        {/* User Profile */}
        <div className="border-t border-blue-600 mt-4 pt-4 px-6 pb-6">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-300 mr-3">
              {/* Add user avatar image here */}
            </div>
            <div>
              <div className="text-sm font-medium">Hilaire Sh</div>
              <div className="text-xs text-blue-200">hilaire@uidesign</div>
            </div>
            <svg
              className="w-5 h-5 ml-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
