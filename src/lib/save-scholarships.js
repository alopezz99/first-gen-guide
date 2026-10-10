
import "server-only";

export async function saveDiscoveredScholarships(
  supabase,
  scholarships
) {
  let saved = 0;
  let skipped = 0;

  for (const scholarship of scholarships) {
    // Only save candidates with a name and source.
    if (!scholarship.title || !scholarship.source_url) {
      skipped++;
      continue;
    }

    // Require a valid public web URL.
    let sourceUrl;

    try {
      const url = new URL(scholarship.source_url);

      if (!["https:", "http:"].includes(url.protocol)) {
        skipped++;
        continue;
      }

      url.hash = "";
      sourceUrl = url.toString();
    } catch {
      skipped++;
      continue;
    }

    // Check for an existing record from this source.
    const { data: existing, error: lookupError } =
      await supabase
        .from("scholarships")
        .select("id")
        .eq("source_url", sourceUrl)
        .limit(1);

    if (lookupError) {
      throw new Error(
        `Duplicate check failed: ${lookupError.message}`
      );
    }

    if (existing.length > 0) {
      skipped++;
      continue;
    }

    const { error } = await supabase
      .from("scholarships")
      .insert({
        title: scholarship.title,
        organization: scholarship.organization || null,
       
// These details require confirmation from the
// official scholarship provider before publication.
award_amount: null,
deadline: null,
eligibility: null,
first_gen_specific: false,

        source_url: sourceUrl,
        
        status: "pending",
        verification_status: "unverified",
        discovery_method: "ai",
        ai_extracted_at: new Date().toISOString(),
      });

    if (error) {
      throw new Error(
        `Unable to save scholarship: ${error.message}`
      );
    }

    saved++;
  }

  return { saved, skipped };
}
