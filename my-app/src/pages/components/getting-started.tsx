import Image from "next/image"

export function GettingStarted() {
  const steps = [
    {
      number: 1,
      title: "Sign up on Umurava Platform",
      description: "Submit your completed project for evaluation",
      image: {
        url: "/Frame 1618868159 1.png",
        width: 200,
        height: 150,
        alt: "Login form interface",
      },
    },
    {
      number: 2,
      title: "Browse Open Challenges",
      description:
        "Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals",
      image: {
        url: "/Challenges & Hackathons  Page 1 (1).png",
        width: 200,
        height: 150,
        alt: "Challenges dashboard interface",
      },
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

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">How to Get Started</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          {steps.slice(0, 2).map((step) => (
            <div key={step.number} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm relative">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">
                  Step {step.number}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600 pr-24">{step.description}</p>
              </div>

              {step.image && (
                <div className="relative w-full mt-40">
                  <div className="absolute bottom-0 right-0 w-1/3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-200">
                      <Image
                        src={step.image.url}
                        alt={step.image.alt}
                        width={step.image.width}
                        height={step.image.height}
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {steps.slice(2).map((step) => (
            <div key={step.number} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm relative">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-full">
                  Step {step.number}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>

              {step.image && (
                <div className="relative w-full mt-4">
                  <div className="absolute bottom-0 right-0 w-1/3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-gray-200">
                      <Image
                        src={step.image.url}
                        alt={step.image.alt}
                        width={step.image.width}
                        height={step.image.height}
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
