import Image from "next/image";
import Link from "next/link";
import  Navbar  from "./components/navbar";
import Footer from "./dashComponents/Footer";

const ForLearningInstitutions = () => {
  const keyOfferings = [
    {
      title: "Employability and Career Development Opportunities",
      description:
        "Projects give students real experience working with companies and organizations, enhancing their professional readiness and providing them access to job markets and services.",
      icon: "/frame4.png",
    },
    {
      title: "Practical Application of Classroom Knowledge",
      description:
        "The Skills Challenges bridge the gap between theoretical learning and practical application, reinforcing what students learn in their academic courses.",
      icon: "/frame4.png",
    },
    {
      title: "Students & Trainees Engagement",
      description:
        "Involve and incorporate Skills Challenges into your courses to give trainees and students hands-on experience and skills mastery. Competition and collaboration drive engagement in real-world projects and activities aligned to their learning journey.",
      icon: "/frame4.png",
    },
    {
      title: "Access to the Industry Experts & Mentors",
      description:
        "Skills Challenges expose students to industry experts and mentors who offer guidance, support, and insights on the needs of global talents. This can help students gain a better understanding of their career field.",
      icon: "/frame4.png",
      customWidth: "md:col-span-2", // Updated for larger width on medium and larger screens
    },
    {
      title: "Skills Assessments",
      description:
        "Embed our project-based tests and skills assessment tools directly into your curriculum.",
      icon: "/frame4.png",
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
        <section className="py-32 px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-[#0A1B3F] mb-6">
                Accelerate Your Students and Trainees&apos;s Employability and Career
                Growth through Project-based Learning Solution
              </h1>
              <p className="text-gray-600 mb-8">
                We partner with Universities, Schools, and Training Institutions
                to build the work experience of their students and trainees
                through project-based learning challenges and hackathons.
              </p>
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-[#2B71F0] text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Partner with us
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/Rectangle 4409.png"
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
                  className={`bg-[#2B71F0] rounded-2xl p-8 text-white h-full ${offering.customWidth ? offering.customWidth : ""}`}
                >
                  {/* Icon with increased size and rounded corners */}
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-3xl">
                    <Image
                      src={offering.icon}
                      alt={`${offering.title} Icon`}
                      width={40} // Increased size
                      height={40} // Increased size
                    />
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
              {[...Array(12)].map((_, index) => (
                <div key={index} className="w-32 h-16 relative">
                  <Image
                    src={`/partners/partner-${index + 1}.png`}
                    alt={`Partner ${index + 1}`}
                    layout="intrinsic"
                    width={128}
                    height={64}
                    className="object-contain"
                  />
                </div>
              ))}
               {/* Center the last partner */}
      <div className="col-span-full flex justify-center mt-12">
        <div className="w-32 h-16 relative">
          <Image
            src="/partners/partner-13.png"
            alt="Partner 13"
            layout="intrinsic"
            width={128}
            height={64}
            className="object-contain"
          />
        </div>
      </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
  <div className="max-w-5xl mx-auto mb-16 text-center">
    <h2 className="text-[#0A1B3F] text-3xl lg:text-4xl font-bold mb-4 leading-tight">
      How Skills Challenges Program can Be Integrated into your Learning Institution
    </h2>
    <br />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="space-y-4">
          {integrationSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#2B71F0] text-white flex items-center justify-center flex-shrink-0">
                {index + 1}
              </div>
              <p className="text-gray-600">{step}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative ml-10 h-[400px]">
        <Image
          src="/skill.png"
          alt="Integration Preview"
          fill
          className="object-contain"
        />
      </div>
    </div>
  </div>
</section>


        {/* CTA Section */}
        <section className="py-16 bg-[#2B71F0] px-4 max-w-7xl mb-16 mx-auto rounded-3xl">
          <div className="max-w-5xl mx-auto  text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to transform your learning institution?
            </h2>
            <Link
              href="/about"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-md hover:bg-gray-100 transition-colors font-semibold"
            >
              Let&apos;s Partner
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ForLearningInstitutions;
