export default function About() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1832] mb-4">
            Experience a New Way of Building Work Experience
          </h2>
          <p className="text-gray-600 text-lg">
            Join Skills Challenges Program to accelerate your career growth and become part of Africa&apos;s largest
            workforce of digital professionals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="space-y-6">
          {/* Large Card */}
          <div className="bg-[#3B82F6] rounded-lg p-6 sm:p-8 border border-blue-300 shadow-lg">
            <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-blue-200">
              <svg className="w-6 h-6 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold mb-4">Build a Strong Portfolio and Hand-On Experience</h3>
            <p className="text-white/90">
              Tackle real-world projects through challenges and hackathons that mirror real world challenges faced by
              businesses and organizations. Therefore, showcase your skills and accomplishments to potential employers
              and clients through a portfolio of completed projects.
            </p>
          </div>

          {/* Two Column Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Employment Path Card */}
            <div className="bg-[#3B82F6] rounded-lg p-6 sm:p-8 border border-blue-300 shadow-lg">
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-blue-200">
                <svg className="w-6 h-6 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Enhance Your Employment Path</h3>
              <p className="text-white/90">
                Develop the in-demand skills and build a strong portfolio to increase your chances of landing your dream
                job or contract.
              </p>
            </div>

            {/* Recognition Card */}
            <div className="bg-[#3B82F6] rounded-lg p-6 sm:p-8 border border-blue-300 shadow-lg">
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-blue-200">
                <svg className="w-6 h-6 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-white text-xl font-bold mb-4">Earn Recognition and Prizes</h3>
              <p className="text-white/90">
                Earn both Money and Knowledge Prizes by participating in various contests and competitions by working on
                real world projects and hackathons from our partner companies & organizations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

