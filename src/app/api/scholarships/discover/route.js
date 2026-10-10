
import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { extractScholarship } from "@/lib/scholarship-ai";
import { saveDiscoveredScholarships } from "@/lib/save-scholarships";
import { fetchScholarshipPage } from "@/lib/scholarship-page";

export async function POST() {
  const supabase = await createSupabaseServerClient();

  // Require a logged-in user.
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json(
      { error: "Please log in first." },
      { status: 401 }
    );
  }

  // Only administrators can discover and save scholarships.
  const { data: admin, error: adminError } = await supabase
    .from("admin_users")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (adminError || !admin) {
    return NextResponse.json(
      { error: "Administrator access required." },
      { status: 403 }
    );
  }

  const apiKey = process.env.BRAVE_SEARCH_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Brave Search API key is missing." },
      { status: 500 }
    );
  }

  try {
    
    const query ="Wisconsin Milwaukee scholarships college students first generation 2026 2027 application";

    const params = new URLSearchParams({
      q: query,
      count: "10",
    });

    const response = await fetch(
      `https://api.search.brave.com/res/v1/web/search?${params}`,
      {
        headers: {
          Accept: "application/json",
          "X-Subscription-Token": apiKey,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(
        `Brave Search returned status ${response.status}`
      );
    }

    const data = await response.json();

    const results = (data.web?.results || []).map((item) => ({
      title: item.title,
      url: item.url,
      description: item.description,
    }));

    // Exclude several known scholarship directory patterns.
    const directoryPatterns = [
      /\/scholarships\/by-demographics\//i,
      /\/scholarships\/first-generation-college-student-scholarships/i,
      /\/financial-aid\/college-scholarships\/scholarships-by-type\//i,
      /\/scholarships\/types\//i,
      /\/plan-for-college\/scholarships\//i,
    ];

    const candidates = results
      .filter((result) => {
        try {
          const url = new URL(result.url);

          return !directoryPatterns.some((pattern) =>
            pattern.test(url.pathname)
          );
        } catch {
          return false;
        }
      })
      .slice(0, 3);

    // Limit AI extraction to three results during testing.
    const scholarships = [];

    for (const result of candidates) {
      try {
       
const pageText = await fetchScholarshipPage(result.url);
console.log(
    "Scholarship page:",
    result.url,
    "Characters retrieved:",
    pageText?.length ?? 0
  );

const extracted = await extractScholarship({
  ...result,
  description: pageText
    ? `Search snippet: ${result.description || ""}

Official webpage text:
${pageText}`
    : result.description,
});


        // Skip results without an identifiable scholarship.
        if (
          typeof extracted.title !== "string" ||
          extracted.title.trim().length === 0
        ) {
          continue;
        }

        scholarships.push({
          ...extracted,
          title: extracted.title.trim(),
          source_url: result.url,
        });
      } catch (error) {
        console.error(
          "AI extraction failed for a search result:",
          error
        );
      }
    }

    // Save only pending, unverified discoveries.
    const saveResult = await saveDiscoveredScholarships(
      supabase,
      scholarships
    );

    return NextResponse.json({
      query,
      count: results.length,
      results,
      scholarships,
      saved: saveResult.saved,
      skipped: saveResult.skipped,
    });
  } catch (error) {
    console.error("Scholarship discovery error:", error);

    return NextResponse.json(
      { error: "Scholarship search failed." },
      { status: 500 }
    );
  }
}
