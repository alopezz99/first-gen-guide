export default function FeedbackPage() {
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
  
            <a href="/feedback" className="text-[#B36B45]">
              Give Feedback
            </a>
          </nav>
        </header>
  
        {/* Feedback Content */}
        <section className="max-w-2xl mx-auto px-6 py-16">
  
          <p className="text-[#B36B45] font-semibold mb-3">
            HELP SHAPE THE GUIDE
          </p>
  
          <h1 className="text-4xl md:text-5xl font-bold text-[#244A3F] leading-tight mb-6">
            I'd love your feedback.
          </h1>
  
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            The First-Gen Guide is still growing. Your feedback can help
            make it more useful for first-generation students and
            professionals navigating college, careers, money and
            professional life.
          </p>
  
          {/* Feedback Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
  
            <form
              action="https://formspree.io/f/xljggjpj"
              method="POST"
              className="space-y-7"
            >
  
              <div>
                <label className="block font-semibold mb-2">
                  What best describes you?
                </label>
  
                <select
                  name="audience"
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 bg-white"
                >
                  <option value="">Choose one</option>
                  <option value="Current college student">
                    Current college student
                  </option>
                  <option value="Recent graduate">Recent graduate</option>
                  <option value="Early-career professional">
                    Early-career professional
                  </option>
                  <option value="Experienced professional">
                    Experienced professional
                  </option>
                  <option value="Parent or family member">
                    Parent or family member
                  </option>
                  <option value="Educator or mentor">
                    Educator or mentor
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
  
              <div>
                <label className="block font-semibold mb-2">
                  What was most helpful?
                </label>
  
                <textarea
                  name="most_helpful"
                  rows="4"
                  required
                  placeholder="Tell me what stood out to you..."
                  className="w-full border border-gray-300 rounded-xl p-3"
                ></textarea>
              </div>
  
              <div>
                <label className="block font-semibold mb-2">
                  Was anything confusing or difficult to use?
                </label>
  
                <textarea
                  name="confusing"
                  rows="4"
                  placeholder="Navigation, wording, design, content..."
                  className="w-full border border-gray-300 rounded-xl p-3"
                ></textarea>
              </div>
  
              <div>
                <label className="block font-semibold mb-2">
                  What would you like to see added?
                </label>
  
                <textarea
                  name="suggestions"
                  rows="4"
                  placeholder="Topics, tools, resources or features..."
                  className="w-full border border-gray-300 rounded-xl p-3"
                ></textarea>
              </div>
  
              <div>
                <label className="block font-semibold mb-2">
                  How useful is The First-Gen Guide?
                </label>
  
                <select
                  name="rating"
                  required
                  className="w-full border border-gray-300 rounded-xl p-3 bg-white"
                >
                  <option value="">Choose a rating</option>
                  <option value="5 - Extremely useful">
                    5 — Extremely useful
                  </option>
                  <option value="4 - Very useful">
                    4 — Very useful
                  </option>
                  <option value="3 - Somewhat useful">
                    3 — Somewhat useful
                  </option>
                  <option value="2 - A little useful">
                    2 — A little useful
                  </option>
                  <option value="1 - Not useful yet">
                    1 — Not useful yet
                  </option>
                </select>
              </div>
  
              <button
                type="submit"
                className="w-full bg-[#244A3F] text-white py-4 rounded-xl font-semibold hover:opacity-90"
              >
                Send Feedback
              </button>
  
            </form>
  
          </div>
  
          <p className="text-center text-gray-500 mt-8">
            Thank you for helping make this resource better.
          </p>
  
        </section>
  
      </main>
    );
  }