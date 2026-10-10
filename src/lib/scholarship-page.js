
import "server-only";

export async function fetchScholarshipPage(url) {
  try {
    const parsed = new URL(url);

    if (parsed.protocol !== "https:") {
      return null;
    }

    // For this initial version, only fetch a known
    // scholarship provider's public website.
    const allowedHosts = new Set([
      "www.nshss.org",
    ]);

    if (!allowedHosts.has(parsed.hostname)) {
      return null;
    }

    const response = await fetch(parsed.toString(), {
      method: "GET",
      redirect: "manual",
      cache: "no-store",
      headers: {
        Accept: "text/html",
      },
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      return null;
    }

    const contentType =
      response.headers.get("content-type") || "";

    if (!contentType.includes("text/html")) {
      return null;
    }

    const html = await response.text();

    // Extract a limited amount of readable text.
    const text = html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 12000);

    return text || null;
  } catch (error) {
    console.error("Scholarship page fetch failed:", error);
    return null;
  }
}
