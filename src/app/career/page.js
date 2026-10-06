export default function CareerPage() {
    return (
      <main className="min-h-screen bg-[#FAF8F4] text-[#1F2937]">
  
        <nav className="max-w-6xl mx-auto px-8 py-6">
          <a href="/" className="text-xl font-bold">
            The First-Gen Guide
          </a>
        </nav>
  
        <section className="max-w-4xl mx-auto px-8 py-20">
  
          <p className="text-[#B36B45] font-semibold mb-3">
            CAREER
          </p>
  
          <h1 className="text-5xl font-bold mb-6">
            Starting your career shouldn't require a secret handbook.
          </h1>
  
          <p className="text-xl text-gray-600 mb-16">
            Practical guidance for finding opportunities, getting hired,
            and building a career when you're figuring it out for the first time.
          </p>
  
          <h2 className="text-3xl font-bold mb-8">
            Start here
          </h2>
  
          <div className="space-y-5">
  
          <a
  href="/career/first-professional-job"
  className="block bg-white p-6 rounded-2xl hover:shadow-md transition"
>
  <p className="text-sm text-[#B36B45] font-semibold mb-2">
    JOB SEARCH
  </p>

  <h3 className="text-xl font-bold">
    Finding Your First Professional Job
  </h3>

  <p className="text-gray-500 mt-2">
    Learn how to turn your education, skills, and experiences into your
    first professional opportunity.
  </p>

  <p className="text-[#244A3F] font-semibold mt-4">
    Read guide →
  </p>
</a>
  
            <div className="bg-white p-6 rounded-2xl">
              <p className="text-sm text-[#B36B45] font-semibold mb-2">
                RESUME
              </p>
              <h3 className="text-xl font-bold">
                Building Your First Professional Resume
              </h3>
            </div>
  
            <div className="bg-white p-6 rounded-2xl">
              <p className="text-sm text-[#B36B45] font-semibold mb-2">
                NETWORKING
              </p>
              <h3 className="text-xl font-bold">
                Networking When You Don't Have Connections
              </h3>
            </div>
  
            <div className="bg-white p-6 rounded-2xl">
              <p className="text-sm text-[#B36B45] font-semibold mb-2">
                MONEY
              </p>
              <h3 className="text-xl font-bold">
                Understanding Your First Job Offer
              </h3>
            </div>
  
          </div>
  
        </section>
  
      </main>
    );
  }