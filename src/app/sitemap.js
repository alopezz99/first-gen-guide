export default function sitemap() {
    const baseUrl = "https://first-gen-guide-nu.vercel.app";
  
    const pages = [
      "",
      "/college",
      "/career",
      "/community",
    ];
  
    return pages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: page === "" ? 1 : 0.8,
    }));
  }