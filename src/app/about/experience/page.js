export default function ExperiencePage() {
    return (
      <main className="min-h-screen bg-[#F7F3ED] text-[#1F2933]">
  
        {/* Navigation */}
        <header className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-[#244A3F]">
            The First-Gen Guide
          </a>
  
          <nav className="flex gap-6 text-sm font-medium">
            <a href="/college" className="hover:text-[#B36B45]">
              College
            </a>
  
            <a href="/career" className="hover:text-[#B36B45]">
              Career
            </a>
  
            <a href="/about" className="hover:text-[#B36B45]">
              About Me
            </a>
  
            <a href="/feedback" className="hover:text-[#B36B45]">
              Give Feedback
            </a>
          </nav>
        </header>
  
  
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 py-20">
  
          <p className="text-[#B36B45] font-semibold mb-4">
            MY EXPERIENCE
          </p>
  
          <h1 className="text-5xl md:text-6xl font-bold text-[#244A3F] leading-tight mb-8">
            Where business, technology, and people come together.
          </h1>
  
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            My career has given me experience across technology, business
            analysis, data, operations, and financial services. Across those
            roles, I've focused on understanding problems, working with
            stakeholders, improving processes, and using technology to create
            practical solutions.
          </p>
  
        </section>
  
  
        {/* Skills */}
        <section className="max-w-4xl mx-auto px-6 pb-20">
  
          <p className="text-[#B36B45] font-semibold mb-3">
            WHAT I WORK WITH
          </p>
  
          <h2 className="text-3xl font-bold text-[#244A3F] mb-8">
            Skills & Technology
          </h2>
  
          <div className="flex flex-wrap gap-3">
  
            {[
              "Business Analysis",
              "Requirements Gathering",
              "User Stories",
              "Agile / Scrum",
              "Process Improvement",
              "Stakeholder Management",
              "Power BI",
              "SQL",
              "Anaplan",
              "Microsoft Power Platform",
              "UAT & Testing",
              "Data Analysis",
              "Product Development",
              "AI & Prompt Engineering",
              "Next.js",
              "React",
              "Git & GitHub",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
  
          </div>
  
        </section>
  
  
        {/* Career Journey */}
        <section className="max-w-4xl mx-auto px-6 pb-20">
  
          <p className="text-[#B36B45] font-semibold mb-3">
            CAREER JOURNEY
          </p>
  
          <h2 className="text-3xl font-bold text-[#244A3F] mb-10">
            Experience that's shaped how I work.
          </h2>
  
  
          <div className="space-y-6">
  
            {/* UW Credit Union */}
            <div className="bg-white rounded-2xl p-8">
  
              <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-2xl font-bold">
                    Financial Specialist
                  </h3>
  
                  <p className="text-[#B36B45] font-semibold">
                    UW Credit Union
                  </p>
                </div>
  
                <p className="text-gray-500">
                  2026 – Present
                </p>
              </div>
  
              <p className="text-gray-600 leading-relaxed">
                Work directly with members to understand financial needs,
                provide account and lending support, complete financial
                transactions, and help members navigate banking products and
                services. This experience has strengthened my customer
                discovery, communication, and relationship-building skills.
              </p>
  
            </div>
  
  
            {/* PartsBadger */}
            <div className="bg-white rounded-2xl p-8">
  
              <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-2xl font-bold">
                    IT Business Analyst
                  </h3>
  
                  <p className="text-[#B36B45] font-semibold">
                    PartsBadger
                  </p>
                </div>
  
                <p className="text-gray-500">
                  2025 – 2026
                </p>
              </div>
  
              <p className="text-gray-600 leading-relaxed">
                Supported technology initiatives by translating business
                needs into user stories and requirements. Worked with an
                Agile development team on Customer Portal initiatives and
                facilitated daily Scrum meetings to help coordinate work
                across the team.
              </p>
  
            </div>
  
  
            {/* FIS */}
            <div className="bg-white rounded-2xl p-8">
  
              <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-2xl font-bold">
                    Business Process Analyst
                  </h3>
  
                  <p className="text-[#B36B45] font-semibold">
                    FIS
                  </p>
                </div>
  
                <p className="text-gray-500">
                  2025
                </p>
              </div>
  
              <p className="text-gray-600 leading-relaxed">
                Worked on process and technology initiatives involving
                requirements, user stories, testing, process documentation,
                and reporting. Used SQL, Dynamics data, and Power BI to
                support reporting and business analysis.
              </p>
  
            </div>
  
  
            {/* Rockwell Sales Planning */}
            <div className="bg-white rounded-2xl p-8">
  
              <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-2xl font-bold">
                    Sales Planning Specialist
                  </h3>
  
                  <p className="text-[#B36B45] font-semibold">
                    Rockwell Automation
                  </p>
                </div>
  
                <p className="text-gray-500">
                  2022 – 2024
                </p>
              </div>
  
              <p className="text-gray-600 leading-relaxed">
                Supported sales planning and territory processes by working
                across business teams, documenting processes, consolidating
                planning and HR information, and supporting forecasting and
                reporting through Power BI.
              </p>
  
            </div>
  
  
            {/* Rockwell Anaplan */}
            <div className="bg-white rounded-2xl p-8">
  
              <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-2xl font-bold">
                    Anaplan Analyst
                  </h3>
  
                  <p className="text-[#B36B45] font-semibold">
                    Rockwell Automation
                  </p>
                </div>
  
                <p className="text-gray-500">
                  2020 – 2022
                </p>
              </div>
  
              <p className="text-gray-600 leading-relaxed">
                Built and supported Anaplan solutions, worked with business
                stakeholders on enhancements, supported data integration and
                validation, and participated across product ownership,
                development, testing, and production support activities.
              </p>
  
            </div>
  
  
            {/* Rockwell ITLDP */}
            <div className="bg-white rounded-2xl p-8">
  
              <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-2xl font-bold">
                    IT Leadership Development Program
                  </h3>
  
                  <p className="text-[#B36B45] font-semibold">
                    Rockwell Automation
                  </p>
                </div>
  
                <p className="text-gray-500">
                  2018 – 2019
                </p>
              </div>
  
              <p className="text-gray-600 leading-relaxed">
                Rotated through technology-focused assignments and gained
                experience with enterprise systems, analytics, innovation,
                training, and cross-functional technology initiatives.
              </p>
  
            </div>
  
          </div>
  
        </section>
  
  
        {/* Featured Project */}
        <section className="max-w-4xl mx-auto px-6 pb-20">
  
          <div className="bg-[#244A3F] text-white rounded-2xl p-8 md:p-10">
  
            <p className="text-[#E7B08E] font-semibold mb-3">
              FEATURED PROJECT
            </p>
  
            <h2 className="text-3xl font-bold mb-5">
              The First-Gen Guide
            </h2>
  
            <p className="text-gray-200 text-lg leading-relaxed mb-6">
              I designed and built The First-Gen Guide as a digital resource
              for first-generation students and early-career professionals.
              The project combines content, product thinking, web development,
              and artificial intelligence.
            </p>
  
            <p className="text-gray-200 leading-relaxed mb-8">
              I built the site using Next.js, React, JavaScript, Tailwind CSS,
              Git/GitHub, Vercel, Formspree, and the OpenAI API. I also
              developed an AI Resume Experience Translator designed to turn
              everyday descriptions of experience into professional resume
              language while avoiding unsupported accomplishments or metrics.
            </p>
  
            <a
              href="/tools/resume-translator"
              className="inline-block bg-white text-[#244A3F] px-7 py-3 rounded-full font-semibold hover:opacity-90"
            >
              Try the AI Resume Translator →
            </a>
  
          </div>
  
        </section>
  
  
        {/* Education */}
        <section className="max-w-4xl mx-auto px-6 pb-24">
  
          <p className="text-[#B36B45] font-semibold mb-3">
            EDUCATION
          </p>
  
          <h2 className="text-3xl font-bold text-[#244A3F] mb-8">
            Business foundation. Technical education.
          </h2>
  
          <div className="grid md:grid-cols-2 gap-6">
  
            <div className="bg-white rounded-2xl p-7">
              <h3 className="text-xl font-bold mb-2">
                M.S. Computing
              </h3>
  
              <p className="text-gray-600">
                Data Science & Cybersecurity
              </p>
  
              <p className="text-gray-500 mt-2">
                Marquette University
              </p>
            </div>
  
  
            <div className="bg-white rounded-2xl p-7">
              <h3 className="text-xl font-bold mb-2">
                B.A. Business Management & Analytics
              </h3>
  
              <p className="text-gray-500">
                Alverno College
              </p>
            </div>
  
          </div>
  
        </section>
  
      </main>
    );
  }