import Image from "next/image";
import Link from "next/link";
import  Navbar  from "./components/navbar";
import Footer from "./dashComponents/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Our Story Section */}
        <section className="py-32 px-4 md:px-8">
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
                src="/video.svg"
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
              <div className="bg-[#2B71F0] rounded-lg p-8 text-white">
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
              <div className="bg-[#2B71F0] rounded-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Bridging Education and Employment
                </h3>
                <p className="text-blue-100">
                  Traditional education doesn&apos;t always prepare talents for the
                  demands of the tech and digital economy, and we are providing
                  in-demand skills through Skills Challenge.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#2B71F0] rounded-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">
                  Preparing Talents for Global Job Markets
                </h3>
                <p className="text-blue-100">
                  We are ensuring that African talents shine globally, and
                  that&apos;s why we are equipping them with global technical
                  experience and helping them stand out.
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
                senior talents with an opportunity to showcase their skills on
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
                src="/Challenges & Hackathons  Page.png"
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
