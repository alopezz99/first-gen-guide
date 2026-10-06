export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#1F2937]">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold">
          The First-Gen Guide
        </div>

        <div className="hidden md:flex gap-8 items-center">
        <a href="/career" className="hover:opacity-60">Career</a>
          <a href="#" className="hover:opacity-60">Money</a>
          <a href="#" className="hover:opacity-60">Corporate Life</a>
          <a href="#" className="hover:opacity-60">Education</a>

          <button className="bg-[#244A3F] text-white px-5 py-2 rounded-full">
            Start Here
          </button>
        </div>
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

        <button className="bg-[#244A3F] text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90">
          Start Your Journey →
        </button>

      </section>


      {/* Journey Section */}
      <section className="max-w-6xl mx-auto px-8 py-20">

        <div className="text-center mb-12">
          <p className="text-[#B36B45] font-semibold mb-3">
            YOUR JOURNEY
          </p>

          <h2 className="text-4xl font-bold">
            Where are you right now?
          </h2>

          <p className="text-gray-600 mt-4">
            Start with where you are. We'll help you figure out what comes next.
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white p-7 rounded-2xl shadow-sm">
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="text-xl font-bold mb-3">
              I'm in college
            </h3>
            <p className="text-gray-600">
              Internships, networking, choosing your path, and preparing
              for life after graduation.
            </p>
          </div>


          <div className="bg-white p-7 rounded-2xl shadow-sm">
            <div className="text-3xl mb-4">🔎</div>
            <h3 className="text-xl font-bold mb-3">
              I'm job searching
            </h3>
            <p className="text-gray-600">
              Resumes, interviews, salaries, and finding opportunities
              you're actually qualified for.
            </p>
          </div>


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