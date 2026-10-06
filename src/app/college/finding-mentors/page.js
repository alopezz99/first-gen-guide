export default function FindingMentorsPage() {
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
            PEOPLE
          </p>
  
          <h1 className="text-4xl md:text-5xl font-bold text-[#244A3F] leading-tight mb-6">
            Finding Mentors
          </h1>
  
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Having someone you can turn to for advice can make college and the
            transition into your career much easier. But finding a mentor
            doesn't have to mean formally asking someone, "Will you be my
            mentor?"
          </p>
  
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Mentors can come from unexpected places
            </h2>
  
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A mentor might be a professor, supervisor, coworker, advisor,
              coach or someone you meet through a professional organization.
              Sometimes mentorship develops naturally through conversations
              and shared experiences.
            </p>
  
            <p className="text-lg text-gray-700 leading-relaxed">
              Pay attention to the people who are willing to answer your
              questions, give you thoughtful feedback and help you understand
              situations you haven't encountered before.
            </p>
          </section>
  
          {/* Mentor Examples */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl p-7">
  
              <p className="text-sm text-[#B36B45] font-semibold mb-5">
                A MENTOR COULD BE
              </p>
  
              <div className="space-y-5">
  
                <div>
                  <h3 className="font-bold text-lg">
                    A professor
                  </h3>
                  <p className="text-gray-600">
                    Someone who understands your field and can help you explore
                    academic and career opportunities.
                  </p>
                </div>
  
                <div>
                  <h3 className="font-bold text-lg">
                    A supervisor
                  </h3>
                  <p className="text-gray-600">
                    Someone who sees your work firsthand and can help you
                    develop professionally.
                  </p>
                </div>
  
                <div>
                  <h3 className="font-bold text-lg">
                    Someone further along in their career
                  </h3>
                  <p className="text-gray-600">
                    A person who has already navigated some of the situations
                    you're encountering for the first time.
                  </p>
                </div>
  
                <div>
                  <h3 className="font-bold text-lg">
                    A peer
                  </h3>
                  <p className="text-gray-600">
                    Mentorship doesn't always have to come from someone much
                    older or more senior than you.
                  </p>
                </div>
  
              </div>
            </div>
          </section>
  
          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              You don't need to ask for mentorship immediately
            </h2>
  
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Start by building a relationship. Ask thoughtful questions,
              attend office hours, stay in touch with people you've worked
              with and show genuine interest in learning from them.
            </p>
  
            <p className="text-lg text-gray-700 leading-relaxed">
              Over time, you may realize that someone has already become a
              mentor without either of you ever officially using that word.
            </p>
          </section>
  
          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Ask specific questions
            </h2>
  
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Instead of asking someone to tell you everything about their
              career, make your questions specific. It makes conversations
              easier and usually leads to more useful advice.
            </p>
  
            <div className="bg-white rounded-2xl p-7">
  
              <p className="text-sm text-[#B36B45] font-semibold mb-4">
                QUESTIONS YOU COULD ASK
              </p>
  
              <ul className="space-y-3 text-gray-700">
                <li>
                  • How did you get started in your career?
                </li>
  
                <li>
                  • What skills should I focus on developing while I'm in college?
                </li>
  
                <li>
                  • Is there anything you wish you had done differently early
                  in your career?
                </li>
  
                <li>
                  • What should I look for when applying for internships?
                </li>
  
                <li>
                  • Would you be willing to give me feedback on my resume?
                </li>
              </ul>
  
            </div>
          </section>
  
          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Stay in touch
            </h2>
  
            <p className="text-lg text-gray-700 leading-relaxed">
              Relationships don't have to disappear when a class, internship
              or job ends. Send an occasional update. Thank people when their
              advice helps you. Congratulate them when they accomplish
              something. Strong professional relationships are built over time.
            </p>
          </section>
  
          {/* First-Gen Reminder */}
          <section className="bg-[#244A3F] text-white rounded-2xl p-8 mb-12">
  
            <p className="text-sm font-semibold text-[#E8C9B5] mb-3">
              FIRST-GEN REMINDER
            </p>
  
            <h2 className="text-2xl font-bold mb-3">
              You don't have to figure everything out alone.
            </h2>
  
            <p className="text-lg leading-relaxed text-gray-100">
              Other students may have family members who can explain college,
              corporate careers or professional networking to them. If you
              don't have that built-in network, you can build one. Professors,
              coworkers, supervisors and mentors can become part of the
              community you turn to for guidance.
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