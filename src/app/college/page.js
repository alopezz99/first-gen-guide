export default function CollegePage() {
    return (
      <main className="min-h-screen bg-[#F7F3ED] text-[#1F2933]">
  
        {/* Header */}
        <header className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-[#244A3F]">
            The First-Gen Guide
          </a>
  
          <nav className="flex gap-6 text-sm font-medium">
            <a href="/college" className="text-[#B36B45]">
              College
            </a>
  
            <a href="/career" className="hover:text-[#B36B45]">
              Career
            </a>
  
            <span>Money</span>
            <span>Corporate Life</span>
          </nav>
        </header>
  
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <p className="text-[#B36B45] font-semibold mb-3">
            COLLEGE
          </p>
  
          <h1 className="text-4xl md:text-6xl font-bold text-[#244A3F] mb-6">
            College has a hidden rulebook.
          </h1>
  
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            From choosing a major to finding internships, learn the things
            nobody always explains when you're the first in your family
            navigating college.
          </p>
        </section>
  
        {/* College Guides */}
        <section className="max-w-5xl mx-auto px-6 pb-20">
  
          <h2 className="text-3xl font-bold text-[#244A3F] mb-8">
            College Guides
          </h2>
  
          <div className="grid md:grid-cols-2 gap-6">
  
            {/* Guide 1 */}
            <a
              href="/college/how-college-works"
              className="block bg-white p-6 rounded-2xl hover:shadow-md transition"
            >
              <p className="text-sm text-[#B36B45] font-semibold mb-2">
                GETTING STARTED
              </p>
  
              <h3 className="text-xl font-bold mb-2">
                How Does College Actually Work?
              </h3>
  
              <p className="text-gray-600">
                Credits, prerequisites, advisors, office hours and the college
                language nobody expects you to already know.
              </p>
  
              <p className="text-[#244A3F] font-semibold mt-4">
                Read guide →
              </p>
            </a>
  
            {/* Guide 2 */}
            <a
              href="/college/choosing-a-major"
              className="block bg-white p-6 rounded-2xl hover:shadow-md transition"
            >
              <p className="text-sm text-[#B36B45] font-semibold mb-2">
                CHOOSING YOUR PATH
              </p>
  
              <h3 className="text-xl font-bold mb-2">
                Choosing a Major Without Having Your Life Figured Out
              </h3>
  
              <p className="text-gray-600">
                Your major doesn't require you to have your entire career
                planned at eighteen.
              </p>
  
              <p className="text-[#244A3F] font-semibold mt-4">
                Read guide →
              </p>
            </a>
  
            {/* Guide 3 */}
            <a
              href="/college/scholarships-student-loans"
              className="block bg-white p-6 rounded-2xl hover:shadow-md transition"
            >
              <p className="text-sm text-[#B36B45] font-semibold mb-2">
                PAYING FOR COLLEGE
              </p>
  
              <h3 className="text-xl font-bold mb-2">
                Scholarships &amp; Student Loans
              </h3>
  
              <p className="text-gray-600">
                Understand your options before assuming college is
                unaffordable or borrowing more than you need.
              </p>
  
              <p className="text-[#244A3F] font-semibold mt-4">
                Read guide →
              </p>
            </a>
  
            {/* Guide 4 */}
            <a
              href="/college/internships"
              className="block bg-white p-6 rounded-2xl hover:shadow-md transition"
            >
              <p className="text-sm text-[#B36B45] font-semibold mb-2">
                BUILDING EXPERIENCE
              </p>
  
              <h3 className="text-xl font-bold mb-2">
                Internships — Start Earlier Than You Think
              </h3>
  
              <p className="text-gray-600">
                You don't need the perfect background to start building
                professional experience.
              </p>
  
              <p className="text-[#244A3F] font-semibold mt-4">
                Read guide →
              </p>
            </a>
  
            {/* Guide 5 */}
            <a
              href="/college/finding-mentors"
              className="block bg-white p-6 rounded-2xl hover:shadow-md transition"
            >
              <p className="text-sm text-[#B36B45] font-semibold mb-2">
                PEOPLE
              </p>
  
              <h3 className="text-xl font-bold mb-2">
                Finding Mentors
              </h3>
  
              <p className="text-gray-600">
                Mentors don't always arrive with the official title of mentor.
                Learn how professional relationships develop.
              </p>
  
              <p className="text-[#244A3F] font-semibold mt-4">
                Read guide →
              </p>
            </a>
  
            {/* Guide 6 */}
            <a
              href="/college/resume-with-little-experience"
              className="block bg-white p-6 rounded-2xl hover:shadow-md transition"
            >
              <p className="text-sm text-[#B36B45] font-semibold mb-2">
                EXPERIENCE
              </p>
  
              <h3 className="text-xl font-bold mb-2">
                Build a Resume With Little Experience
              </h3>
  
              <p className="text-gray-600">
                Campus jobs, class projects, volunteering and leadership can
                all become professional experience.
              </p>
  
              <p className="text-[#244A3F] font-semibold mt-4">
                Read guide →
              </p>
            </a>
  
          </div>
  
        </section>
  
      </main>
    );
  }