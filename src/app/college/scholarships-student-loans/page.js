export default function ScholarshipsStudentLoansPage() {
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
            PAYING FOR COLLEGE
          </p>
  
          <h1 className="text-4xl md:text-5xl font-bold text-[#244A3F] leading-tight mb-6">
            Scholarships &amp; Student Loans
          </h1>
  
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Paying for college can be one of the most confusing parts of the
            entire experience. Before assuming you can't afford college—or
            accepting every loan you're offered—learn what your options actually
            mean.
          </p>
  
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Start by understanding the real cost
            </h2>
  
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Tuition is only one part of the cost of college. Books, fees,
              transportation, housing, food and everyday expenses can all affect
              how much money you'll actually need.
            </p>
  
            <p className="text-lg text-gray-700 leading-relaxed">
              Before deciding how much to borrow, look at the full picture.
              Knowing what you actually need can help you avoid taking on debt
              simply because it was offered to you.
            </p>
          </section>
  
          {/* Quick Breakdown */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl p-7">
  
              <p className="text-sm text-[#B36B45] font-semibold mb-5">
                KNOW THE DIFFERENCE
              </p>
  
              <div className="space-y-5">
  
                <div>
                  <h3 className="font-bold text-lg">
                    Scholarships
                  </h3>
                  <p className="text-gray-600">
                    Money awarded to help pay for school that generally does not
                    need to be repaid.
                  </p>
                </div>
  
                <div>
                  <h3 className="font-bold text-lg">
                    Grants
                  </h3>
                  <p className="text-gray-600">
                    Financial aid that generally does not need to be repaid and
                    may be based on financial need or other eligibility.
                  </p>
                </div>
  
                <div>
                  <h3 className="font-bold text-lg">
                    Student Loans
                  </h3>
                  <p className="text-gray-600">
                    Money you borrow for your education that must eventually be
                    repaid, usually with interest.
                  </p>
                </div>
  
              </div>
            </div>
          </section>
  
          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Don't assume scholarships aren't for you
            </h2>
  
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Scholarships aren't only for students with perfect grades or
              extraordinary achievements. Opportunities can be based on your
              major, community involvement, background, career interests,
              leadership and many other factors.
            </p>
  
            <p className="text-lg text-gray-700 leading-relaxed">
              Search through your college, local organizations, professional
              associations and community groups. Smaller scholarships can add up,
              and sometimes they have fewer applicants than the huge national
              scholarships everyone knows about.
            </p>
          </section>
  
          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">
              Be careful with student loans
            </h2>
  
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              A student loan can make college possible, but borrowing money today
              affects your finances after graduation. Before accepting a loan,
              understand how much you're borrowing and what repayment could look
              like later.
            </p>
  
            <p className="text-lg text-gray-700 leading-relaxed">
              You don't necessarily have to accept the full amount offered to
              you. If you need less, borrowing less can make a meaningful
              difference after college.
            </p>
          </section>
  
          {/* Questions */}
          <section className="mb-12">
            <div className="bg-white rounded-2xl p-7">
  
              <p className="text-sm text-[#B36B45] font-semibold mb-4">
                BEFORE YOU BORROW
              </p>
  
              <ul className="space-y-3 text-gray-700">
                <li>• How much money do I actually need?</li>
                <li>• What type of loan am I accepting?</li>
                <li>• What is the interest rate?</li>
                <li>• When will repayment begin?</li>
                <li>• Approximately how much will I owe when I graduate?</li>
                <li>• Are there scholarships or grants I haven't applied for yet?</li>
              </ul>
  
            </div>
          </section>
  
          {/* Reminder */}
          <section className="bg-[#244A3F] text-white rounded-2xl p-8 mb-12">
  
            <p className="text-sm font-semibold text-[#E8C9B5] mb-3">
              FIRST-GEN REMINDER
            </p>
  
            <h2 className="text-2xl font-bold mb-3">
              Asking questions about money is smart.
            </h2>
  
            <p className="text-lg leading-relaxed text-gray-100">
              Financial aid can feel like another language when nobody has
              explained it to you before. You are allowed to ask the financial
              aid office to explain your award, your loans and your options
              before you agree to anything.
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