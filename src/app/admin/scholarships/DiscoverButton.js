
"use client";

import { useState } from "react";

export default function DiscoverButton() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [scholarships, setScholarships] = useState([]);
  const [error, setError] = useState("");

  async function discoverScholarships() {
    setLoading(true);
    setError("");
    setResults([]);
    setScholarships([]);

    try {
      const response = await fetch("/api/scholarships/discover", {
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Search failed.");
      }

      setResults(data.results || []);
      setScholarships(data.scholarships || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mb-10">
      <button
        type="button"
        onClick={discoverScholarships}
        disabled={loading}
        className="bg-[#244A3F] text-white px-6 py-3 rounded-full font-semibold disabled:opacity-50"
      >
        {loading ? "Searching..." : "🔎 Discover Scholarships"}
      </button>

      {error && (
        <p className="mt-4 text-red-600">{error}</p>
      )}

      {results.length > 0 && (
        <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">
            Search Results ({results.length})
          </h2>

          <div className="space-y-5">
            {results.map((result, index) => (
              <div
                key={`${result.url}-${index}`}
                className="border-b border-gray-200 pb-4"
              >
                <h3 className="font-semibold text-[#244A3F]">
                  {result.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {result.description}
                </p>

                <a
                  href={result.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm underline"
                >
                  View Website ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

{scholarships.length > 0 && (
  <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
    <h2 className="text-2xl font-bold text-[#244A3F] mb-2">
      AI-Extracted Scholarships
    </h2>

    <p className="text-sm text-gray-500 mb-6">
      These are preliminary AI findings. Verify details
      on the official scholarship website before approving.
    </p>

    <div className="space-y-6">
      {scholarships.map((scholarship, index) => (
        <div
          key={`${scholarship.source_url}-${index}`}
          className="border border-gray-200 rounded-xl p-5"
        >
          <h3 className="text-xl font-bold text-[#244A3F]">
            {scholarship.title || "Scholarship name not verified"}
          </h3>

          <div className="mt-4 space-y-2 text-sm text-gray-800">
            <p>
              <strong>Organization:</strong>{" "}
              {scholarship.organization || "Not verified"}
            </p>

            <p>
              <strong>Award:</strong>{" "}
              {scholarship.award_amount || "Not verified"}
            </p>

            <p>
              <strong>Deadline:</strong>{" "}
              {scholarship.deadline || "Not verified"}
            </p>

            <p>
              <strong>Eligibility:</strong>{" "}
              {scholarship.eligibility || "Not verified"}
            </p>

            <p>
              <strong>First-gen specific:</strong>{" "}
              {scholarship.first_gen_specific ? "Yes" : "Not confirmed"}
            </p>
          </div>

          {scholarship.source_url && (
            <a
              href={scholarship.source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[#244A3F] underline"
            >
              View Source ↗
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
)}

    </div>
  );
}
