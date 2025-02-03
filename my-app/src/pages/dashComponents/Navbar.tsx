import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Umurava"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link
              href="/challenges"
              className="text-gray-600 hover:text-gray-900"
            >
              Challenge & Hackathons
            </Link>
            <Link
              href="/learning"
              className="text-gray-600 hover:text-gray-900"
            >
              For Learning Institutions
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
          </div>

          {/* Join Program Button */}
          <div>
            <Link
              href="/join"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#0A1B3F] hover:bg-blue-900"
            >
              Join the Program
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
