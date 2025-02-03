import Image from "next/image";
import Link from "next/link";
import { Navbar } from "./components/navbar";
import Footer from "../components/Footer";

const ForLearningInstitutions = () => {
  const keyOfferings = [
    {
      title: "Employability and Career Development Opportunities",
      description:
        "Projects give students real experience working with companies and organizations, enhancing their professional readiness and providing them access to job markets and services.",
      icon: "📊",
    },
    {
      title: "Practical Application of Classroom Knowledge",
      description:
        "The Skills Challenges bridge the gap between theoretical learning and practical application, reinforcing what students learn in their academic courses.",
      icon: "📚",
    },
    {
      title: "Students & Trainees Engagement",
      description:
        "Involve and incorporate Skills Challenges into your courses to give trainees and students hands-on experience and skills mastery. Competition and collaboration drive engagement in real-world projects and activities aligned to their learning journey.",
      icon: "👥",
    },
    {
      title: "Access to the Industry Experts & Mentors",
      description:
        "Skills Challenges expose students to industry experts and mentors who offer guidance, support, and insights on the needs of global talents. This can help students gain a better understanding of their career field.",
      icon: "🤝",
    },
    {
      title: "Skills Assessments",
      description:
        "Embed our project-based tests and skills assessment tools directly into your curriculum.",
      icon: "📝",
    },
  ];

  const integrationSteps = [
    "As Career Development and Job Readiness Program",
    "As Skills Assessments Method after a course or a term",
    "As extracurricular activities to complement academic courses",
    "As the portfolio of the Students",
    "As part of Capstone Projects or final-year assignments",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-[#0A1B3F] mb-6">
                Accelerate Your Students and Trainees's Employability and Career
                Growth through Project-based Learning Solution
              </h1>
              <p className="text-gray-600 mb-8">
                We partner with Universities, Schools, and Training Institutions
                to build the work experience of their students and trainees
                through project based learning challenges and hackathons
              </p>
              <Link
                href="/partner-with-us"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Partner with us
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/learning-institutions-hero.jpg"
                alt="Students Learning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Key Offerings Section */}
        <section className="py-16 bg-gray-50 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#0A1B3F] mb-12">
              Key Offerings & Benefits:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyOfferings.map((offering, index) => (
                <div
                  key={index}
                  className="bg-blue-600 rounded-lg p-8 text-white h-full"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-6 text-2xl">
                    {offering.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{offering.title}</h3>
                  <p className="text-blue-100">{offering.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Institutions Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-[#0A1B3F] mb-12">
              Join a few Educational Institutions using Skills Challenges by
              Umurava
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
              {/* Add partner logos here */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
                <div key={index} className="w-32 h-16 relative">
                  <Image
                    src={`/partners/partner-${index}.png`}
                    alt={`Partner ${index}`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-16 bg-gray-50 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0A1B3F] mb-8">
                How Skills Challenges Program can Be Integrated into your
                Learning Institution
              </h2>
              <div className="space-y-4">
                {integrationSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-600">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/integration-preview.png"
                alt="Integration Preview"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to transform your learning institution?
            </h2>
            <Link
              href="/lets-partner"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors font-semibold"
            >
              Let's Partner
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ForLearningInstitutions;
