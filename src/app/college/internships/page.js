export default function InternshipsPage() {
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
  
        {/* Article */}
        <article className="max-w-3xl mx-auto px-6 py-12">
  
          <a
            href="/college"
            className="text-[#244A3F] font-semibold hover:underline"
          >
            ← College
          </a>
  
          <p className="text-sm text-[#B36B45] font-semibold mt-12 mb-4">
            BUILDING EXPERIENCE
          </p>
  
          <h1 className="text-4xl md:text-5xl font-bold text-[#244A3F] leading-tight mb-6">
            Internships — Start Earlier Than You Think
          </h1>
  
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            One of the biggest advantages you can give yourself in college is
            gaining experience before graduation. You don't have to wait until
            senior year—or until you feel completely qualified—to start.
          </p>
  
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Why internships matter
            </h2>
  
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              College teaches you knowledge. Internships give you a chance to
              see how that knowledge is used in the real world.
            </p>
  
            <p className="text-lg text-gray-700 leading-relaxed">
              They can help you build professional skills, meet people in your
              field and figure out what kinds of jobs you actually enjoy. They
              also give you something valuable to talk about when you begin
              applying for full-time jobs.
            </p>
          </section>
  
          {/* Start Earlier */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Start looking earlier than you think
            </h2>
  
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A common mistake is assuming internships are only for juniors and
              seniors. You can start exploring opportunities much earlier.
            </p>
  
            <p className="text-lg text-gray-700 leading-relaxed">
              Even if you aren't ready to apply yet, looking at internship
              postings can show you what employers are asking for. That gives
              you time to start building those skills while you're still in
              school.
            </p>
          </section>
  
          {/* Where to Look */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl p-7">
  
              <p className="text-sm text-[#B36B45] font-semibold mb-4">
                WHERE TO START
              </p>
  
              <ul className="space-y-3 text-gray-700">
                <li>• Your college career center</li>
                <li>• College career fairs</li>
                <li>• Professors and academic departments</li>
                <li>• Company career websites</li>
                <li>• LinkedIn and online job boards</li>
                <li>• Professional and student organizations</li>
                <li>• People you've met through school or work</li>
              </ul>
  
            </div>
          </section>
  
          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              You don't need a perfect resume
            </h2>
  
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              One of the hardest parts of applying for your first internship is
              feeling like you don't have enough experience to qualify for
              experience.
            </p>
  
            <p className="text-lg text-gray-700 leading-relaxed">
              Your resume can include class projects, part-time jobs,
              volunteering, student organizations and leadership experience.
              The goal is to show what you've learned, what you've contributed
              and what skills you're developing.
            </p>
          </section>
  
          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Your first internship doesn't have to be perfect
            </h2>
  
            <p className="text-lg text-gray-700 leading-relaxed">
              Your first opportunity may not be at your dream company or have
              your dream title. That's okay. Think about what you can learn,
              which skills you can build and what experience you can carry into
              your next opportunity.
            </p>
          </section>
  
          {/* Action Plan */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl p-7">
  
              <p className="text-sm text-[#B36B45] font-semibold mb-4">
                YOUR INTERNSHIP STARTER PLAN
              </p>
  
              <div className="space-y-5">
  
                <div>
                  <h3 className="font-bold">
                    1. Look at internship postings
                  </h3>
                  <p className="text-gray-600">
                    Find five internships related to fields you're interested in.
                  </p>
                </div>
  
                <div>
                  <h3 className="font-bold">
                    2. Look for patterns
                  </h3>
                  <p className="text-gray-600">
                    Write down the skills and qualifications that appear
                    repeatedly.
                  </p>
                </div>
  
                <div>
                  <h3 className="font-bold">
                    3. Build one skill
                  </h3>
                  <p className="text-gray-600">
                    Pick one skill you see frequently and find a way to practice
                    it through a class, project or organization.
                  </p>
                </div>
  
                <div>
                  <h3 className="font-bold">
                    4. Apply before you feel completely ready
                  </h3>
                  <p className="text-gray-600">
                    You don't have to meet every qualification to submit an
                    application.
                  </p>
                </div>
  
              </div>
            </div>
          </section>
  
          {/* First-Gen Reminder */}
          <section className="bg-[#244A3F] text-white rounded-2xl p-8 mb-12">
  
            <p className="text-sm font-semibold text-[#E8C9B5] mb-3">
              FIRST-GEN REMINDER
            </p>
  
            <h2 className="text-2xl font-bold mb-3">
              Experience doesn't only come from internships.
            </h2>
  
            <p className="text-lg leading-relaxed text-gray-100">
              If you've worked while attending school, helped your family,
              volunteered, completed projects or taken leadership roles, you've
              already developed skills. Part of building your career is learning
              how to recognize and communicate them.
            </p>
  
          </section>
  
          <a
            href="/college"
            className="text-[#244A3F] font-semibold hover:underline"
          >
            ← Back to College Guides
          </a>
  
        </article>
  
      </main>
    );
  }