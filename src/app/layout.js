import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

  export const metadata = {
    metadataBase: new URL("https://first-gen-guide-nu.vercel.app"),
  
    title: {
      default: "The First-Gen Guide | College, Career & Financial Resources",
      template: "%s | The First-Gen Guide",
    },
  
    description:
      "Helping first-generation college students navigate scholarships, internships, career development, financial literacy, and professional life.",
  
    keywords: [
      "first-generation college students",
      "first-gen college guide",
      "scholarships for first-generation students",
      "college success resources",
      "internship advice",
      "career development",
      "resume tips",
      "financial literacy for students",
      "first-generation professionals",
      "college mentorship",
    ],
  
    openGraph: {
      title: "The First-Gen Guide",
      description:
        "College, career, and financial resources for first-generation students and professionals.",
      url: "https://first-gen-guide-nu.vercel.app",
      siteName: "The First-Gen Guide",
      type: "website",
    },
  
    robots: {
      index: true,
      follow: true,
    },
  };

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
