export default function ChoosingAMajorPage() {
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
            CHOOSING YOUR PATH
          </p>
  
          <h1 className="text-4xl md:text-5xl font-bold text-[#244A3F] leading-tight mb-6">
            Choosing a Major Without Having Your Life Figured Out
          </h1>
  
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Choosing a major can feel like you're being asked to decide your
            entire future before you've even had the chance to experience it.
            You don't need to have everything figured out right now.
          </p>
  
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Your major is a starting point
            </h2>
  
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              When you're the first in your family to navigate college, choosing
              a major can feel especially intimidating. You may not have someone
              at home who can explain which majors lead to which careers or what
              different industries actually look like.
            </p>
  
            <p className="text-lg text-gray-700 leading-relaxed">
              Remember that choosing a major is not the same thing as choosing
              one job that you must do for the rest of your life. Your education,
              experiences, internships and skills can lead you in directions you
              may not even know exist yet.
            </p>
          </section>
  
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Start with what you know about yourself
            </h2>
  
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Instead of asking yourself what you're supposed to major in, start
              by thinking about the subjects, problems and types of work that
              interest you.
            </p>
  
            <div className="bg-white rounded-2xl p-7">
              <p className="text-sm text-[#B36B45] font-semibold mb-4">
                QUESTIONS TO ASK YOURSELF
              </p>
  
              <ul className="space-y-3 text-gray-700">
                <li>• What classes do I actually enjoy?</li>
                <li>• What subjects make me curious enough to learn more?</li>
                <li>• Do I enjoy working with people, numbers, technology or ideas?</li>
                <li>• What kind of problems do I like solving?</li>
                <li>• What kind of lifestyle do I eventually want?</li>
              </ul>
            </div>
          </section>
  
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Research the careers behind the major
            </h2>
  
            <p className="text-lg text-gray-700 leading-relaxed">
              Don't choose a major based only on the name of the degree.
              Research the careers connected to it. Look at real job
              descriptions, required skills, typical salaries and the kinds of
              companies that hire people with that background.
            </p>
          </section>
  
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Give yourself permission to explore
            </h2>
  
            <p className="text-lg text-gray-700 leading-relaxed">
              Take electives. Join organizations. Talk to professors. Attend
              career fairs. Try an internship. These experiences can teach you
              more about what you want than staring at a list of majors ever
              will.
            </p>
          </section>
  
          {/* First-Gen Reminder */}
          <section className="bg-[#244A3F] text-white rounded-2xl p-8 mb-12">
            <p className="text-sm font-semibold text-[#E8C9B5] mb-3">
              FIRST-GEN REMINDER
            </p>
  
            <h2 className="text-2xl font-bold mb-3">
              You are allowed to change direction.
            </h2>
  
            <p className="text-lg leading-relaxed text-gray-100">
              Changing your major, discovering a new interest or realizing that
              your original plan isn't right for you does not mean you failed.
              It means you learned something about yourself.
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