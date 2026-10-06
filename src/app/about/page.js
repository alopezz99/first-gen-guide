export default function AboutPage() {
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
  
            <a href="/about" className="text-[#B36B45]">
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
            THE PERSON BEHIND THE GUIDE
          </p>
  
          <h1 className="text-5xl md:text-6xl font-bold text-[#244A3F] leading-tight mb-8">
            Hi, I'm Alma.
          </h1>
  
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            I'm a first-generation college graduate with a background in
            business, technology, data, and financial services. I created
            The First-Gen Guide to share the things I had to learn by
            figuring them out along the way.
          </p>
  
        </section>
  
  
        {/* My Story */}
        <section className="max-w-4xl mx-auto px-6 pb-16">
  
          <div className="bg-white rounded-2xl p-8 md:p-10">
  
            <p className="text-[#B36B45] font-semibold mb-3">
              MY STORY
            </p>
  
            <h2 className="text-3xl font-bold text-[#244A3F] mb-6">
              My path hasn't been perfectly linear.
            </h2>
  
            <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
  
              <p>
                I earned my bachelor's degree in Business Management &
                Analytics and later pursued a master's degree in Computing
                with a focus on Data Science and Cybersecurity.
              </p>
  
              <p>
                Throughout my career, I've worked across technology,
                business analysis, sales operations, data, and financial
                services. Each experience has helped me better understand
                how businesses operate, how technology can solve problems,
                and how important it is to make complex information easier
                for people to understand.
              </p>
  
              <p>
                But getting here also meant learning many things that
                weren't taught in a classroom — how to navigate corporate
                environments, find mentors, build a professional network,
                advocate for myself, understand benefits, evaluate
                opportunities, and continue building my career.
              </p>
  
            </div>
  
          </div>
  
        </section>
  
  
        {/* Education */}
        <section className="max-w-4xl mx-auto px-6 pb-16">
  
          <p className="text-[#B36B45] font-semibold mb-3">
            EDUCATION
          </p>
  
          <h2 className="text-3xl font-bold text-[#244A3F] mb-8">
            Where I started.
          </h2>
  
          <div className="grid md:grid-cols-2 gap-6">
  
            <div className="bg-white rounded-2xl p-7">
              <p className="text-sm text-[#B36B45] font-semibold mb-2">
                UNDERGRADUATE
              </p>
  
              <h3 className="text-xl font-bold mb-2">
                Business Management & Analytics
              </h3>
  
              <p className="text-gray-600">
                Alverno College
              </p>
            </div>
  
  
            <div className="bg-white rounded-2xl p-7">
              <p className="text-sm text-[#B36B45] font-semibold mb-2">
                GRADUATE
              </p>
  
              <h3 className="text-xl font-bold mb-2">
                M.S. in Computing
              </h3>
  
              <p className="text-gray-600">
                Data Science & Cybersecurity
              </p>
  
              <p className="text-gray-600">
                Marquette University
              </p>
            </div>
  
          </div>
  
        </section>
  
  
        {/* Career */}
        <section className="max-w-4xl mx-auto px-6 pb-16">
  
          <div className="bg-[#244A3F] text-white rounded-2xl p-8 md:p-10">
  
            <p className="text-[#E7B08E] font-semibold mb-3">
              MY CAREER
            </p>
  
            <h2 className="text-3xl font-bold mb-5">
              Business + technology has always been the intersection
              that interests me.
            </h2>
  
            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              My experience includes business analysis, process
              improvement, data and reporting, Agile teams, requirements
              gathering, technology implementations, financial services,
              and working with stakeholders to turn business needs into
              practical solutions.
            </p>
  
            <a
              href="/about/experience"
              className="inline-block bg-white text-[#244A3F] px-7 py-3 rounded-full font-semibold hover:opacity-90"
            >
              View My Experience →
            </a>
  
          </div>
  
        </section>
  
  
        {/* Why I Built This */}
        <section className="max-w-4xl mx-auto px-6 pb-24">
  
          <p className="text-[#B36B45] font-semibold mb-3">
            WHY I BUILT THIS
          </p>
  
          <h2 className="text-3xl font-bold text-[#244A3F] mb-6">
            I wanted to build the resource I wish I had.
          </h2>
  
          <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
  
            <p>
              Being first-gen can mean entering spaces where everyone
              seems to know rules you were never taught. I wanted to make
              some of those rules easier to understand.
            </p>
  
            <p>
              The First-Gen Guide started with my own experiences and
              eventually became something bigger: a place where students
              and early-career professionals can find practical guidance
              and tools for navigating college and their careers.
            </p>
  
            <p>
              I'm also using this project to continue developing my own
              skills in product development, artificial intelligence,
              web development, user experience, and technology.
            </p>
  
          </div>
  
        </section>
  
      </main>
    );
  }