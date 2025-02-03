import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500 leading-tight">
            Build Work Experience through Skills Challenges Program
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Enhance your Employability and Accelerate your Career Growth by working on Hands-on projects & hackathons
            from various businesses & organizations.
          </p>
          <div>
          <Link
  href="/get-started"
  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-500 hover:bg-blue-600 transition-colors"
>
  Get Started
</Link>

          </div>
        </div>

        {/* Right Column */}
        <div className="relative">
          <div className="relative">
            <Image
              src="/students working on project.png"
              alt="People collaborating on projects"
              width={600}
              height={400}
              className="rounded-lg"
              priority
            />

            {/* Stats Overlay */}
            <div className="absolute bottom-4 left-4 bg-white rounded-full py-2 px-4 shadow-lg flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                ))}
              </div>
              <div className="pl-2">
                <p className="font-semibold">20K+</p>
                <p className="text-sm text-gray-600">Talents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

