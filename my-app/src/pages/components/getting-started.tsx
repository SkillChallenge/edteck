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
        <div className="grid gap-12 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="relative grid md:grid-cols-2 gap-8 items-start">
              {/* Step Content */}
              <div className={`space-y-4 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#3B82F6] text-white text-sm font-medium">
                  Step {step.number}
                </div>
                <h3 className="text-xl font-bold text-[#0A1832]">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>

              {/* Step Image */}
              {step.image && (
                <div className={`relative ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="relative aspect-[4/3] w-full max-w-md mx-auto">
                    <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-contain" />
                  </div>
                </div>
              )}

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-4 top-12 bottom-0 w-px bg-gray-200 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

