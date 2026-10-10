
"use client";

import { useState } from "react";

export default function ScholarshipSearch({ scholarships = [] }) {
  const [search, setSearch] = useState("");

  const filteredScholarships = scholarships.filter((scholarship) => {
    const searchableText = [
      scholarship.title,
      scholarship.organization,
      scholarship.eligibility,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(search.trim().toLowerCase());
  });

  return (
    <div>
      <div className="mb-8">
        <label
          htmlFor="scholarship-search"
          className="mb-2 block text-sm font-semibold text-[#244A3F]"
        >
          Search Scholarships
        </label>

        <input
          id="scholarship-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by name, organization, or eligibility..."
          className="w-full rounded-xl border border-[#E7E3DC] bg-white px-5 py-4 text-gray-900 outline-none focus:border-[#244A3F]"
        />

        <p className="mt-3 text-sm text-gray-600">
          {filteredScholarships.length} scholarship
          {filteredScholarships.length === 1 ? "" : "s"} found
        </p>
      </div>

      {filteredScholarships.length === 0 ? (
        <p className="rounded-xl bg-white p-6 text-gray-700">
          No scholarships match your search. Try another keyword.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredScholarships.map((scholarship) => (
            <article
              key={scholarship.id}
              className="rounded-2xl border border-[#E7E3DC] bg-white p-6 shadow-sm"
            >
              <span className="inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800">
                ✓ Verified
              </span>

              <h2 className="mt-4 text-xl font-bold">
                {scholarship.title}
              </h2>

              {scholarship.organization && (
                <p className="mt-2 text-sm text-gray-600">
                  {scholarship.organization}
                </p>
              )}

              {scholarship.award_amount && (
                <p className="mt-4 text-2xl font-bold text-[#B36B45]">
                  {scholarship.award_amount}
                </p>
              )}

              {scholarship.deadline && (
                <p className="mt-3 text-sm text-gray-700">
                  <strong>Deadline:</strong> {scholarship.deadline}
                </p>
              )}

              {scholarship.eligibility && (
                <div className="mt-4">
                  <h3 className="text-sm font-semibold">
                    Eligibility
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-700">
                    {scholarship.eligibility}
                  </p>
                </div>
              )}

              {scholarship.application_url ? (
                <a
                  href={scholarship.application_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-full bg-[#244A3F] px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                >
                  View Scholarship ↗
                </a>
              ) : (
                <p className="mt-6 text-sm text-gray-500">
                  Application link coming soon.
                </p>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
