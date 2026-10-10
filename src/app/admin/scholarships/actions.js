
"use server";

import { revalidatePath } from "next/cache";
import { createSupabaseServerClient } from "@/lib/supabase-server";

export async function reviewScholarship(formData) {
  const supabase = await createSupabaseServerClient();

  // Verify the user's identity on the server
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw new Error("You must be logged in.");
  }

  // Verify administrator permissions
  const { data: admin, error: adminError } = await supabase
    .from("admin_users")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (adminError || !admin) {
    throw new Error("Administrator access required.");
  }

  // Accept only the two permitted actions
  const decision = formData.get("decision");
  const id = Number(formData.get("scholarship_id"));

  if (
    !["approved", "rejected"].includes(decision) ||
    !Number.isSafeInteger(id) ||
    id <= 0
  ) {
    throw new Error("Invalid scholarship review request.");
  }

  const { data, error } = await supabase
    .from("scholarships")
    .update({
      status: decision,
      published_at:
        decision === "approved" ? new Date().toISOString() : null,
    })
    .eq("id", id)
    .eq("status", "pending")
    .select("id");

  if (error) {
    throw new Error(`Unable to review scholarship: ${error.message}`);
  }

  if (!data || data.length !== 1) {
    throw new Error("Scholarship not found or already reviewed.");
  }

  revalidatePath("/admin/scholarships");
  revalidatePath("/scholarships");
}

export async function verifyScholarship(formData) {
    "use server";
  
    const supabase = await createSupabaseServerClient();
  
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();
  
    if (authError || !user) {
      throw new Error("You must be logged in.");
    }
  
    // Only administrators can verify scholarships.
    const { data: admin, error: adminError } = await supabase
      .from("admin_users")
      .select("user_id")
      .eq("user_id", user.id)
      .maybeSingle();
  
    if (adminError || !admin) {
      throw new Error("Administrator access required.");
    }
  
    const scholarshipId = Number(formData.get("scholarship_id"));
    const confirmed = formData.get("confirmed") === "yes";
  
    if (!Number.isSafeInteger(scholarshipId) ||
        scholarshipId <= 0 ||
        !confirmed) {
      throw new Error("Valid scholarship and confirmation required.");
    }
  
    const { data: updated, error } = await supabase
      .from("scholarships")
      .update({
        verification_status: "verified",
        verified_at: new Date().toISOString(),
      })
      .eq("id", scholarshipId)
      .eq("status", "pending")
      .neq("verification_status", "verified")
      .select("id")
      .maybeSingle();
  
    if (error) {
      throw new Error(`Verification failed: ${error.message}`);
    }
  
    if (!updated) {
      throw new Error("Scholarship is not eligible for verification.");
    }
  
    revalidatePath("/admin/scholarships");
  }
  
export async function updateScholarshipDetails(formData) {
    "use server";
  
    const supabase = await createSupabaseServerClient();
  
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();
  
    if (authError || !user) {
      throw new Error("You must be logged in.");
    }
  
    // Only administrators can edit scholarship details.
    const { data: admin, error: adminError } = await supabase
      .from("admin_users")
      .select("user_id")
      .eq("user_id", user.id)
      .maybeSingle();
  
    if (adminError || !admin) {
      throw new Error("Administrator access required.");
    }
  
    const scholarshipId = Number(formData.get("scholarship_id"));
  
    if (!Number.isSafeInteger(scholarshipId) || scholarshipId <= 0) {
      throw new Error("Invalid scholarship ID.");
    }
  
    const title = String(formData.get("title") || "").trim();
    const organization = String(
      formData.get("organization") || ""
    ).trim();
    const awardAmount = String(
      formData.get("award_amount") || ""
    ).trim();
    const eligibility = String(
      formData.get("eligibility") || ""
    ).trim();
    const applicationUrl = String(
      formData.get("application_url") || ""
    ).trim();
    const deadline = String(formData.get("deadline") || "").trim();
  
    if (!title) {
      throw new Error("Scholarship title is required.");
    }
  
    if (deadline && !/^\d{4}-\d{2}-\d{2}$/.test(deadline)) {
      throw new Error("Deadline must use YYYY-MM-DD format.");
    }
  
    if (applicationUrl) {
      try {
        const parsed = new URL(applicationUrl);
  
        if (!["https:", "http:"].includes(parsed.protocol)) {
          throw new Error("Invalid URL protocol.");
        }
      } catch {
        throw new Error("Enter a valid application URL.");
      }
    }
  
    const { data: updated, error } = await supabase
      .from("scholarships")
      .update({
        title,
        organization: organization || null,
        award_amount: awardAmount || null,
        eligibility: eligibility || null,
        application_url: applicationUrl || null,
        deadline: deadline || null,
        verification_status: "unverified",
        verified_at: null,
      })
      .eq("id", scholarshipId)
      .eq("status", "pending")
      .select("id")
      .maybeSingle();
  
    if (error) {
      throw new Error(`Unable to update scholarship: ${error.message}`);
    }
  
    if (!updated) {
      throw new Error("Pending scholarship not found.");
    }
  
    revalidatePath("/admin/scholarships");
  }
  export async function updateApprovedScholarshipLink(formData) {
    "use server";
  
    const supabase = await createSupabaseServerClient();
  
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();
  
    if (authError || !user) {
      throw new Error("You must be logged in.");
    }
  
    const { data: admin, error: adminError } = await supabase
      .from("admin_users")
      .select("user_id")
      .eq("user_id", user.id)
      .maybeSingle();
  
    if (adminError || !admin) {
      throw new Error("Administrator access required.");
    }
  
    const scholarshipId = Number(formData.get("scholarship_id"));
    const applicationUrl = String(
      formData.get("application_url") || ""
    ).trim();
  
    if (!Number.isSafeInteger(scholarshipId) || scholarshipId <= 0) {
      throw new Error("Invalid scholarship ID.");
    }
  
    if (!applicationUrl) {
      throw new Error("Application URL is required.");
    }
  
    try {
      const parsed = new URL(applicationUrl);
  
      if (parsed.protocol !== "https:") {
        throw new Error("HTTPS required.");
      }
    } catch {
      throw new Error("Enter a valid HTTPS application URL.");
    }
  
    const { data: updated, error } = await supabase
      .from("scholarships")
      .update({ application_url: applicationUrl })
      .eq("id", scholarshipId)
      .eq("status", "approved")
      .eq("verification_status", "verified")
      .select("id")
      .maybeSingle();
  
    if (error) {
      throw new Error(`Unable to save application link: ${error.message}`);
    }
  
    if (!updated) {
      throw new Error("Approved scholarship not found.");
    }
  
    revalidatePath("/admin/scholarships");
    revalidatePath("/scholarships");
  }