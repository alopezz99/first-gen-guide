export default function HowCollegeWorksPage() {
    return (
      <main className="min-h-screen bg-[#F7F3ED] text-[#1F2933]">
  
        {/* Header */}
        <header className="max-w-4xl mx-auto px-6 py-8">
          <a href="/" className="text-xl font-bold text-[#244A3F]">
            The First-Gen Guide
          </a>
        </header>
  
        {/* Article */}
        <article className="max-w-3xl mx-auto px-6 py-12">
  
          <a
            href="/college"
            className="text-[#B36B45] font-semibold"
          >
            ← College
          </a>
  
          <p className="text-[#B36B45] font-semibold mt-12 mb-4">
            GETTING STARTED
          </p>
  
          <h1 className="text-4xl md:text-5xl font-bold text-[#244A3F] leading-tight mb-6">
            How Does College Actually Work?
          </h1>
  
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            College comes with its own language, expectations, and unwritten
            rules. If nobody in your family has gone through it before, you're
            often expected to figure those things out while you're already
            trying to succeed.
          </p>
  
          <div className="space-y-12 text-lg leading-8">
  
            <section>
              <h2 className="text-3xl font-bold text-[#244A3F] mb-4">
                Learn the language
              </h2>
  
              <p>
                College has terminology that may be completely new to you.
                Credits help measure progress toward your degree. Prerequisites
                are courses you need to complete before taking another class.
                Your major is your primary area of study, while a minor is a
                smaller secondary area of focus.
              </p>
            </section>
  
            <section className="bg-white p-8 rounded-2xl">
              <p className="text-sm text-[#B36B45] font-bold mb-4">
                QUICK TRANSLATION
              </p>
  
              <div className="space-y-4">
                <p>
                  <strong>Credits:</strong> Units that count toward completing
                  your degree.
                </p>
  
                <p>
                  <strong>Prerequisite:</strong> A course you must complete
                  before taking another course.
                </p>
  
                <p>
                  <strong>Office hours:</strong> Time professors set aside for
                  students to ask questions or get help.
                </p>
  
                <p>
                  <strong>Academic advisor:</strong> Someone who can help you
                  understand degree requirements and plan your courses.
                </p>
              </div>
            </section>
  
            <section>
              <h2 className="text-3xl font-bold text-[#244A3F] mb-4">
                Know who can help you
              </h2>
  
              <p>
                Professors, academic advisors, career services, financial aid
                staff, tutors, and classmates can all become part of your
                support system. Asking for help isn't a sign that you don't
                belong in college. Learning where to go for answers is part
                of learning how college works.
              </p>
            </section>
  
            <section>
              <h2 className="text-3xl font-bold text-[#244A3F] mb-4">
                The unwritten curriculum
              </h2>
  
              <p>
                Some of the most important parts of college aren't written in
                a syllabus. Learning to email professors professionally,
                attend office hours, build relationships, ask questions, and
                use campus resources can make a major difference in your
                experience.
              </p>
            </section>
  
            <section className="bg-[#244A3F] text-white p-8 rounded-2xl">
              <p className="text-sm font-bold mb-3">
                FIRST-GEN REMINDER
              </p>
  
              <p className="text-xl font-semibold">
                You aren't expected to magically know how every part of college
                works. Learning how to navigate the system is a skill in itself.
              </p>
            </section>
  
          </div>
  
          <div className="border-t border-gray-300 mt-16 pt-8">
            <a
              href="/college"
              className="text-[#B36B45] font-semibold"
            >
              ← Back to College Guides
            </a>
          </div>
  
        </article>
  
      </main>
    );
  }