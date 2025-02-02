import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./components/navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Our Story Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0A1B3F] mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                With 3 years of experience matching African digital talents to
                local and global job markets, we still remain with a big number
                of jobs that remain unfilled due to the lack of experienced
                African Talents.
              </p>
              <p className="text-gray-600">
                Driven by our mission to place skilled and professional digital
                talent, we created Skills Challenges as a project-based learning
                solution for talents to gain real-world experience, solve
                problems, and build portfolios so that they become ready for
                global job markets.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/about-image.jpg"
                alt="Umurava Skills Challenges"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Why we are solving this problem Section */}
        <section className="py-16 bg-gray-50 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#0A1B3F] mb-12">
              Why we are solving this problem
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-blue-600 rounded-lg p-8 text-white">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Bridging the Experience Gap
                </h3>
                <p className="text-blue-100">
                  Many talents acquired theoretical knowledge and are rejected
                  from jobs because they lack work experience and are not able
                  to put in actions what they acquired in the schools.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-blue-600 rounded-lg p-8 text-white">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Bridging Education and Employment
                </h3>
                <p className="text-blue-100">
                  Traditional education doesn't always prepare talents for the
                  demands of the tech and digital economy and we are providing
                  in-demand skills through Skills Challenge.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-blue-600 rounded-lg p-8 text-white">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Preparing Talents for Global Job Markets
                </h3>
                <p className="text-blue-100">
                  We are ensuring that African talents shine globally and that's
                  why we are equipping them with global technical experience and
                  standout globally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Challenges Program Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0A1B3F] mb-6">
                Skills Challenges Program is built on the Umurava Talent
                Marketplace Platform
              </h2>
              <p className="text-gray-600 mb-6">
                A Project-based Learning Solution aimed at providing young and
                senior talents with an opportunity to showcase their skills to
                real-world projects and challenges from our partner companies
                and organizations.
              </p>
              <p className="text-gray-600 mb-8">
                Umurava Skills Challenges enables young talents to build a
                portfolio and experience that increases their readiness to
                access job opportunities and projects.
              </p>
              <Link
                href="/get-started"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/platform-preview.png"
                alt="Umurava Platform Preview"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
