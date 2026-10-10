
"use client";

import { useRef, useState } from "react";

export default function EditScholarshipForm({
  scholarship,
  updateAction,
}) {
  const detailsRef = useRef(null);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setSaving(true);
    setSaved(false);
    setError("");

    try {
      const formData = new FormData(event.currentTarget);

      await updateAction(formData);

      detailsRef.current.open = false;
      setSaved(true);
    } catch (err) {
      setError(err.message || "Unable to save changes.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mt-6">
      {saved && (
        <p
          role="status"
          className="mb-3 rounded-lg bg-green-50 p-3 text-sm font-medium text-green-800"
        >
          ✓ Scholarship details saved successfully!
        </p>
      )}

      {error && (
        <p role="alert" className="mb-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <details
        ref={detailsRef}
        className="rounded-xl border border-gray-200 p-4"
      >
        <summary className="cursor-pointer font-semibold text-[#244A3F]">
          ✏️ Edit Scholarship Details
        </summary>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <input
            type="hidden"
            name="scholarship_id"
            value={scholarship.id}
          />

          {[
            ["Scholarship Name", "title"],
            ["Organization", "organization"],
            ["Award Amount", "award_amount"],
            ["Eligibility Requirements", "eligibility"],
            ["Application URL", "application_url"],
          ].map(([label, name]) => (
            <label key={name} className="block">
              <span className="mb-1 block text-sm font-medium text-gray-800">
                {label}
              </span>
              <input
                type="text"
                name={name}
                defaultValue={scholarship[name] || ""}
                required={name === "title"}
                className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900"
              />
            </label>
          ))}

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-gray-800">
              Application Deadline
            </span>
            <input
              type="date"
              name="deadline"
              defaultValue={scholarship.deadline || ""}
              className="w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900"
            />
          </label>

          <button
            type="submit"
            disabled={saving}
            className="rounded-full bg-[#244A3F] px-6 py-3 font-medium text-white disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Scholarship Details"}
          </button>
        </form>
      </details>
    </div>
  );
}
