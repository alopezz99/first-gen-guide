
import { createSupabaseServerClient } from "@/lib/supabase-server";
import ScholarshipSearch from "./ScholarshipSearch";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Scholarships | The First-Gen Guide",
  description:
    "Explore verified scholarships to help pay for college.",
};

export default async function ScholarshipsPage() {
  const supabase = await createSupabaseServerClient();

  const { data: scholarships, error } = await supabase
    .from("scholarships")
    .select(
      "id, title, organization, award_amount, deadline, eligibility, application_url"
    )
    .eq("status", "approved")
    .eq("verification_status", "verified")
    .order("deadline", {
      ascending: true,
      nullsFirst: false,
    });

  if (error) {
    console.error("Scholarships loading error:", error.message);
  }

  return (
    <main className="min-h-screen bg-[#FAF8F4] px-6 py-12 text-[#244A3F]">
      <div className="mx-auto max-w-5xl">
        <a href="/" className="text-sm underline">
          ← Back to Home
        </a>

        <div className="mb-10 mt-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#B36B45]">
            The First-Gen Guide
          </p>

          <h1 className="text-4xl font-bold">
            Find Your Scholarship
          </h1>

          <p className="mt-4 max-w-2xl text-gray-700">
            Discover scholarship opportunities to help fund
            your education. Every scholarship listed here
            has been reviewed before publication.
          </p>
        </div>

        {error ? (
          <p className="rounded-xl bg-white p-6 text-red-700">
            We couldn't load scholarships right now.
            Please try again later.
          </p>
        ) : scholarships?.length === 0 ? (
          <p className="rounded-xl bg-white p-6 text-gray-700">
            No scholarships are available yet. Check back soon!
          </p>
        ) : (
          <ScholarshipSearch scholarships={scholarships ?? []} />
        )}
      </div>
    </main>
  );
}
