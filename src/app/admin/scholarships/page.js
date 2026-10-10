
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import {
    reviewScholarship,
    verifyScholarship,
    updateScholarshipDetails,
    updateApprovedScholarshipLink,
  } from "./actions";
import DiscoverButton from "./DiscoverButton";
import EditScholarshipForm from "./EditScholarshipForm";

export const dynamic = "force-dynamic";

export default async function ScholarshipAdminPage() {
  const supabase = await createSupabaseServerClient();

  // Verify the logged-in user
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/login");
  }

  // Verify administrator access
  const { data: admin, error: adminError } = await supabase
    .from("admin_users")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (adminError || !admin) {
    redirect("/");
  }

  // Get scholarship counts
  const statuses = ["pending", "approved", "rejected"];

  const counts = await Promise.all(
    statuses.map(async (status) => {
      const { count, error } = await supabase
        .from("scholarships")
        .select("*", { count: "exact", head: true })
        .eq("status", status);

      if (error) {
        throw new Error(
          `Unable to load ${status} scholarships: ${error.message}`
        );
      }

      return count ?? 0;
    })
  );

  const [pendingCount, approvedCount, rejectedCount] = counts;


  // Retrieve scholarships awaiting approval
  const { data: pendingScholarships, error: pendingError } =
    await supabase
      .from("scholarships")
      .select(
        "id, title, organization, award_amount, deadline, eligibility, application_url, source_url, verification_status"
      )
      .eq("status", "pending")
      .order("discovered_at", { ascending: false });

  if (pendingError) {
    throw new Error(
      `Unable to load pending scholarships: ${pendingError.message}`
    );
  }

// Retrieve approved scholarships for editing application links
const { data: approvedScholarships, error: approvedError } =
  await supabase
    .from("scholarships")
    .select("id, title, organization, application_url")
    .eq("status", "approved")
    .eq("verification_status", "verified")
    .order("published_at", { ascending: false });

if (approvedError) {
  throw new Error(
    `Unable to load approved scholarships: ${approvedError.message}`
  );
}
  return (
    <main className="min-h-screen bg-[#FAF8F4] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <a
          href="/"
          className="text-[#244A3F] hover:underline"
        >
          ← Back to The First-Gen Guide
        </a>

        <div className="mt-10 mb-10">
          <p className="text-[#B36B45] font-semibold mb-3">
            ADMIN DASHBOARD
          </p>

          <h1 className="text-4xl font-bold text-[#244A3F]">
            Scholarship Review Center
          </h1>

          <p className="text-gray-600 mt-4">
            Review scholarships discovered by AI before
            publishing them to The First-Gen Guide.
          </p>
        </div>
        <DiscoverButton />
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {[
            { label: "Pending Review", value: pendingCount },
            { label: "Approved", value: approvedCount },
            { label: "Rejected", value: rejectedCount },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-6 shadow-sm"
            >
              <p className="text-gray-500">{item.label}</p>
              <p className="text-3xl font-bold mt-3 text-[#244A3F]">
                {item.value}
              </p>
            </div>
          ))}
        </div>

       
<div className="bg-white rounded-2xl p-8 shadow-sm">
<h2 className="text-2xl font-bold mb-6 text-[#244A3F]">
  Scholarships Awaiting Review
</h2>

  {pendingScholarships.length === 0 ? (
    <p className="text-gray-500">
      No scholarships awaiting review yet.
      AI-discovered opportunities will appear here.
    </p>
  ) : (
    <div className="space-y-6">
      {pendingScholarships.map((scholarship) => (
        <div
          key={scholarship.id}
          className="border border-gray-200 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-[#244A3F]">
            {scholarship.title}
          </h3>

          <div className="mt-3">
  <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
    {scholarship.verification_status === "verified"
      ? "✓ Verified"
      : scholarship.verification_status === "needs_review"
        ? "Needs Review"
        : "⚠ Unverified"}
  </span>
</div>

          <p className="text-gray-600 mt-2">
            {scholarship.organization || "Organization not specified"}
          </p>

          <div className="mt-4 space-y-2 text-sm text-gray-800">
            <p>
              <strong>Award:</strong>{" "}
              {scholarship.award_amount || "Not specified"}
            </p>

            <p>
              <strong>Deadline:</strong>{" "}
              {scholarship.deadline || "Not verified"}
            </p>

            <p>
              <strong>Eligibility:</strong>{" "}
              {scholarship.eligibility || "Not verified"}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-5">
            {scholarship.source_url && (
              <a
                href={scholarship.source_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#244A3F] underline"
              >
                View Source ↗
              </a>
            )}

            {scholarship.application_url && (
              <a
                href={scholarship.application_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#244A3F] underline"
              >
                Application ↗
              </a>
            )}
          </div>

 
{scholarship.verification_status !== "verified" && (
 
<EditScholarshipForm
  scholarship={scholarship}
  updateAction={updateScholarshipDetails}
/>
)}

{scholarship.verification_status !== "verified" && (
  <form
    action={verifyScholarship}

    className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4"
  >
    <p className="mb-3 text-sm font-medium text-gray-800">
      Before verifying, confirm the scholarship's
      official provider, eligibility requirements,
      deadline, and application link.
    </p>

    <label className="flex items-start gap-2 text-sm text-gray-800">
      <input
        type="checkbox"
        name="confirmed"
        value="yes"
        required
        className="mt-1"
      />
      I have reviewed the official scholarship source
      and confirmed its details.
    </label>

    <input
      type="hidden"
      name="scholarship_id"
      value={scholarship.id}
    />

    <button
      type="submit"
      className="mt-4 rounded-full bg-[#244A3F] px-5 py-2 text-white hover:opacity-90"
    >
      ✓ Mark as Verified
    </button>
  </form>
)}
        
<form action={reviewScholarship} className="mt-6 flex flex-wrap gap-3">
  <input
    type="hidden"
    name="scholarship_id"
    value={scholarship.id}
  />




  <button
  type="submit"
  name="decision"
  value="approved"
  disabled={scholarship.verification_status !== "verified"}
  className={`px-5 py-2 rounded-full ${
    scholarship.verification_status === "verified"
      ? "bg-[#244A3F] text-white hover:opacity-90"
      : "bg-gray-200 text-gray-500 cursor-not-allowed"
  }`}
>
  {scholarship.verification_status === "verified"
    ? "✓ Approve"
    : "🔒 Verify Before Approval"}
</button>

<button
  type="submit"
  name="decision"
  value="rejected"
  className="rounded-full border border-red-300 px-5 py-2 font-medium text-red-700 hover:bg-red-50"
>
  ✕ Reject Scholarship
</button>

</form>

        </div>
      ))}
    </div>
  )}
</div>

        {/* Approved scholarship application links */}
        <section className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="mb-3 text-2xl font-bold text-[#244A3F]">
            Approved Scholarships
          </h2>

          <p className="mb-6 text-gray-600">
            Add or update application links without changing
            a scholarship's approved status.
          </p>

          {approvedScholarships.length === 0 ? (
            <p className="text-gray-500">
              No approved scholarships found.
            </p>
          ) : (
            <div className="space-y-6">
              {approvedScholarships.map((scholarship) => (
                <div
                  key={scholarship.id}
                  className="rounded-xl border border-gray-200 p-5"
                >
                  <h3 className="font-bold text-[#244A3F]">
                    {scholarship.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">
                    {scholarship.organization}
                  </p>

                  <form
                    action={updateApprovedScholarshipLink}
                    className="mt-4 space-y-3"
                  >
                    <input
                      type="hidden"
                      name="scholarship_id"
                      value={scholarship.id}
                    />

                    <label
                      htmlFor={`application-${scholarship.id}`}
                      className="block text-sm font-medium text-gray-700"
                    >
                      Application URL
                    </label>

                    <input
  id={`application-${scholarship.id}`}
  type="url"
  name="application_url"
  defaultValue={scholarship.application_url || ""}
  placeholder="https://example.com/apply"
  required
  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400"
/>

{scholarship.application_url && (
  <a
    href={scholarship.application_url}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block text-sm font-medium text-[#244A3F] underline break-all hover:text-[#B36B45]"
  >
    View Current Application Link ↗
  </a>
)}

                    <button
                      type="submit"
                      className="rounded-full bg-[#244A3F] px-5 py-2 text-white hover:opacity-90"
                    >
                      Save Application Link
                    </button>
                  </form>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
