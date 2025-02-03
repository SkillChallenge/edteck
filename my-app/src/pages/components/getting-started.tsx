import Image from "next/image"

const steps = [
  {
    number: 1,
    title: "Sign up on Umurava Platform",
    description: "Submit your completed project for evaluation",
    image: "/placeholder.svg?height=300&width=300&text=Login+Form",
  },
  {
    number: 2,
    title: "Browse Open Challenges",
    description:
      "Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals",
    image: "/placeholder.svg?height=300&width=300&text=Challenges+Grid",
  },
  {
    number: 3,
    title: "Register and Participate",
    description: "Sign up for the challenge and start working on the project.",
  },
  {
    number: 4,
    title: "Submit your work",
    description: "Submit your completed project for evaluation",
  },
  {
    number: 5,
    title: "Receive Feedback and Recognition",
    description: "Get feedback on your work and celebrate your achievements",
  },
]

export function GettingStarted() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#0A1832] text-3xl md:text-4xl font-bold">How to Get Started</h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
  {/* First Column: Step 1 and Step 2 stacked vertically */}
  <div className="space-y-12">
    {/* Step 1 */}
    <div className="relative grid gap-3 items-start border border-gray-300 p-6 rounded-lg shadow-md h-80">
  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#3B82F6] text-white text-sm font-medium">
    Step 1
  </div>
  <h3 className="text-xl font-bold text-[#0A1832]">Sign up on Umurava Platform</h3>
  <p className="text-gray-600">Submit your completed project for evaluation</p>
</div>


    {/* Step 2 */}
    <div className="relative grid gap-8 items-start border border-gray-300 p-6 rounded-lg shadow-md h-80">
      <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#3B82F6] text-white text-sm font-medium">
        Step 2
      </div>
      <h3 className="text-xl font-bold text-[#0A1832]">Browser Open Challenges</h3>
      <p className="text-gray-600">Description for Step 2</p>
    </div>
  </div>

  {/* Second Column: Step 3, Step 4, and Step 5 next to Step 1 and Step 2 */}
  <div className="space-y-12">
    {/* Step 3 */}
    <div className="relative grid gap-8 items-start border border-gray-300 p-6 rounded-lg shadow-md">
      <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#3B82F6] text-white text-sm font-medium">
        Step 3
      </div>
      <h3 className="text-xl font-bold text-[#0A1832]">Register and Participate</h3>
      <p className="text-gray-600">Description for Step 3</p>
    </div>

    {/* Step 4 */}
    <div className="relative grid gap-8 items-start border border-gray-300 p-6 rounded-lg shadow-md">
      <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#3B82F6] text-white text-sm font-medium">
        Step 4
      </div>
      <h3 className="text-xl font-bold text-[#0A1832]">Submit your work</h3>
      <p className="text-gray-600">Description for Step 4</p>
    </div>

    {/* Step 5 */}
    <div className="relative grid gap-8 items-start border border-gray-300 p-6 rounded-lg shadow-md">
      <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#3B82F6] text-white text-sm font-medium">
        Step 5
      </div>
      <h3 className="text-xl font-bold text-[#0A1832]">Receive Feedback and Recognition</h3>
      <p className="text-gray-600">Description for Step 5</p>
    </div>
  </div>
</div>

      </div>
    </section>
  )
}

