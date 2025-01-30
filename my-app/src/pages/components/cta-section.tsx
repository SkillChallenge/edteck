import Image from "next/image"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative bg-[#3B82F6] rounded-2xl overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-400/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-400/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:h-[400px] rounded-xl overflow-hidden">
            <Image
              src="/Rectangle 4386 1.png"
              alt="Students collaborating on a project"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Ready to Unlock Your Career Potential Today!
            </h2>
            <p className="text-white/90 text-lg">
              Join a challenge or a hackathon to gain valuable work experience, build an impressive portfolio and
              increase your chances to land job opportunities and accelerate your career growth
            </p>
            <Link
              href="/challenges"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md bg-white text-blue-600 hover:bg-blue-50 transition-colors"
            >
              View Challenge
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

