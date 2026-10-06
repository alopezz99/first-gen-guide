"use client";

import { useState } from "react";

export default function ResumeTranslatorPage() {
  const [experience, setExperience] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function translateExperience() {
    if (!experience.trim()) {
      setError("Please describe your experience first.");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    try {
      const response = await fetch("/api/resume-translator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          experience: experience,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setResult(data.result);
    } catch (err) {
      setError(
        err.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function startOver() {
    setExperience("");
    setResult("");
    setError("");
  }

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

          <a href="/feedback" className="hover:text-[#B36B45]">
            Give Feedback
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <section className="max-w-3xl mx-auto px-6 py-14">

        <p className="text-[#B36B45] font-semibold mb-3">
          FIRST-GEN TOOLKIT
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#244A3F] leading-tight mb-5">
          Resume Experience Translator
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Not sure how to make your experience sound professional?
          Start by explaining it the way you normally would.
        </p>

        <p className="text-gray-600 leading-relaxed mb-10">
          The Resume Experience Translator will help identify the
          professional value behind your experience and turn it into
          stronger resume language.
        </p>

        {/* Input Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">

          <label className="block text-lg font-bold mb-2">
            What did you do?
          </label>

          <p className="text-sm text-gray-500 mb-4">
            Don't worry about sounding professional. Tell us what you
            actually did at your job, internship, volunteer experience,
            class project or organization.
          </p>

          <textarea
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            rows="7"
            placeholder="Example: I worked at a store where I helped customers find products, answered questions, stocked shelves and trained new employees."
            className="w-full border border-gray-300 rounded-xl p-4 mb-5 focus:outline-none focus:ring-2 focus:ring-[#244A3F]"
          ></textarea>

          <button
            type="button"
            onClick={translateExperience}
            disabled={loading}
            className="w-full bg-[#244A3F] text-white py-4 rounded-xl font-semibold hover:opacity-90 disabled:opacity-50"
          >
            {loading
              ? "Translating your experience..."
              : "Translate My Experience →"}
          </button>

          {error && (
            <p className="text-red-600 mt-4">
              {error}
            </p>
          )}

        </div>

        {/* Results */}
        {result && (
          <div className="mt-10">

            <p className="text-sm text-[#B36B45] font-semibold mb-3">
              YOUR RESUME BULLETS
            </p>

            <h2 className="text-3xl font-bold text-[#244A3F] mb-6">
              Here's how you could describe that experience.
            </h2>

            <div className="bg-[#244A3F] text-white rounded-2xl p-8">

              <div className="whitespace-pre-line text-lg leading-8">
                {result}
              </div>

            </div>

            <div className="bg-white rounded-2xl p-6 mt-5">

              <p className="font-bold text-[#244A3F] mb-2">
                Before putting this on your resume
              </p>

              <p className="text-gray-600 leading-relaxed">
                Review each bullet and make sure it accurately describes
                what you did. If you know numbers — like how many customers
                you helped, people you trained, projects you completed or
                time you saved — add them to make your experience even
                stronger.
              </p>

            </div>

            <button
              type="button"
              onClick={startOver}
              className="mt-6 border border-[#244A3F] text-[#244A3F] px-6 py-3 rounded-full font-semibold hover:bg-[#244A3F] hover:text-white"
            >
              Translate Another Experience
            </button>

          </div>
        )}

        {/* Example */}
        <div className="mt-16 border-t border-gray-300 pt-10">

          <p className="text-sm text-[#B36B45] font-semibold mb-3">
            NOT SURE WHAT TO WRITE?
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Write it like you're explaining it to a friend.
          </h2>

          <div className="bg-white rounded-2xl p-6">

            <p className="text-sm text-gray-500 font-semibold mb-2">
              FOR EXAMPLE
            </p>

            <p className="text-gray-700 italic">
              "I worked at a restaurant and took orders, handled money,
              helped customers when there were problems and sometimes
              trained new employees."
            </p>

          </div>

          <p className="text-gray-600 leading-relaxed mt-6">
            You don't need to know the right resume words. That's what
            the translator is here to help with.
          </p>

        </div>

      </section>

    </main>
  );
}