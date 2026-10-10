export default function robots() {
    const baseUrl = "https://first-gen-guide-nu.vercel.app";
  
    return {
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: ["/login", "/signup", "/profile"],
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    };
  }