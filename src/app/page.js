export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#1F2937]">

      {/* Navigation */}
      
<nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-6">
  <a
    href="/"
    className="text-xl font-bold text-[#244A3F] whitespace-nowrap"
  >
    The First-Gen Guide
  </a>

  {/* Desktop Navigation */}
  <div className="hidden lg:flex items-center gap-6 text-sm">
  <a href="/college">College</a>
<a href="/scholarships">Scholarships</a>
<a href="/career">Career</a>
<a href="/community">Community</a>

    {/* Resources Dropdown */}
    <details className="relative group">
      <summary className="cursor-pointer list-none hover:text-[#B36B45]">
        Resources ▾
      </summary>

      <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-lg p-4 z-50 flex flex-col gap-4">
        <a href="/tools/resume-translator">Resume Tool</a>
        <a href="/about">About Me</a>
        <a href="/feedback">Give Feedback</a>
      </div>
    </details>

    <a href="/login" className="hover:text-[#B36B45]">
      Log In
    </a>

    <a
      href="/signup"
      className="bg-[#244A3F] text-white px-5 py-2 rounded-full hover:opacity-90"
    >
      Sign Up
    </a>
  </div>

  {/* Mobile / Tablet Navigation */}
  <details className="relative lg:hidden">
    <summary className="cursor-pointer list-none text-[#244A3F] font-semibold">
      ☰ Menu
    </summary>

    <div className="absolute right-0 top-full mt-3 w-56 bg-white rounded-xl shadow-lg p-5 z-50 flex flex-col gap-4">
    <a href="/college" className="hover:text-[#B36B45]">
  College
</a>

<a href="/scholarships" className="hover:text-[#B36B45]">
  Scholarships
</a>

<a href="/career" className="hover:text-[#B36B45]">
  Career
</a>
      <a href="/community">Community</a>
      <a href="/tools/resume-translator">Resume Tool</a>
      <a href="/about">About Me</a>
      <a href="/feedback">Give Feedback</a>
      <a href="/login">Log In</a>
      <a href="/signup" className="font-bold text-[#244A3F]">
        Sign Up
      </a>
    </div>
  </details>
</nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-8 py-24 text-center">

        <p className="text-[#B36B45] font-semibold mb-4">
          BUILT FOR FIRST-GEN STUDENTS & PROFESSIONALS
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Being first-gen means figuring out a lot for the first time.
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          The First-Gen Guide helps you navigate college, careers,
          money, and corporate life with practical advice for the
          things nobody taught us.
        </p>

        <a
          href="#journey"
          className="inline-block bg-[#244A3F] text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90"
        >
          Start Your Journey →
        </a>

      </section>


      {/* Resume Translator Feature */}
      <section className="max-w-6xl mx-auto px-8 pb-20">

        <div className="bg-[#244A3F] text-white rounded-3xl p-10 md:p-14">

          <p className="text-[#E7B08E] font-semibold mb-3">
            FREE AI TOOL
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-5">
                Turn your experience into resume-ready language.
              </h2>

              <p className="text-lg text-gray-200 leading-relaxed">
                Describe your job, internship, volunteer work, class
                project, or side hustle in your own words. Our Resume
                Experience Translator helps turn it into professional
                resume bullets without making up experience you don't have.
              </p>
            </div>

            <div className="md:text-right">
              <a
                href="/tools/resume-translator"
                className="inline-block bg-white text-[#244A3F] px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90"
              >
                Try the Resume Translator →
              </a>

              <p className="text-sm text-gray-300 mt-4">
                Free to try. No resume jargon required.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Journey Section */}
      <section id="journey" className="max-w-6xl mx-auto px-8 py-20">

        <div className="text-center mb-12">

          <p className="text-[#B36B45] font-semibold mb-3">
            START YOUR JOURNEY
          </p>

          <h2 className="text-4xl font-bold">
            Where are you right now?
          </h2>

          <p className="text-gray-600 mt-4">
            Start with where you are. We'll help you figure out what comes next.
          </p>

        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <a
            href="/college"
            className="block bg-white p-7 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="text-3xl mb-4">🎓</div>

            <h3 className="text-xl font-bold mb-3">
              I'm in college
            </h3>

            <p className="text-gray-600">
              Internships, networking, choosing your path, and preparing
              for life after graduation.
            </p>
          </a>


          <a
            href="/career"
            className="block bg-white p-7 rounded-2xl shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="text-3xl mb-4">🔎</div>

            <h3 className="text-xl font-bold mb-3">
              I'm job searching
            </h3>

            <p className="text-gray-600">
              Resumes, interviews, salaries, and finding opportunities
              you're actually qualified for.
            </p>
          </a>


          <div className="bg-white p-7 rounded-2xl shadow-sm">
            <div className="text-3xl mb-4">💼</div>

            <h3 className="text-xl font-bold mb-3">
              I'm starting my career
            </h3>

            <p className="text-gray-600">
              Benefits, mentors, corporate culture, performance reviews,
              and everything nobody explains.
            </p>
          </div>


          <div className="bg-white p-7 rounded-2xl shadow-sm">
            <div className="text-3xl mb-4">🚀</div>

            <h3 className="text-xl font-bold mb-3">
              I'm ready for more
            </h3>

            <p className="text-gray-600">
              Promotions, certifications, graduate school, career pivots,
              and growing your income.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}