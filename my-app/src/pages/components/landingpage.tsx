import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="max-w-full mx-[150px]">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Build Work Experience through Skills Challenges Program
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Enhance your Employability and Accelerate your Career Growth by working on Hands-on projects &
                hackathons from various businesses & organizations.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="/get-started"
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src="/students working on project.png"
                alt="People collaborating on projects"
                layout="fill"
                objectFit="cover"
                priority
              />
              <div className="absolute bottom-4 left-4 flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium shadow-lg">
                <div className="flex -space-x-2 mr-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="inline-block h-8 w-8 rounded-full border-2 border-white bg-gray-200" />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">20K+</p>
                  <p className="text-xs text-gray-500">Talents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

