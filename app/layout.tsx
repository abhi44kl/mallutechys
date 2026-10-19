
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://mallutechys.com"),
  title: {
    default: "MalluTechys | Technology, Innovation & Opportunity",
    template: "%s | MalluTechys",
  },
  description:
    "Learn about technology, AI, digital skills, useful tools, and innovation through practical guides for students, creators, and entrepreneurs.",
  applicationName: "MalluTechys",
  openGraph: {
    type: "website",
    siteName: "MalluTechys",
    title: "MalluTechys | Technology, Innovation & Opportunity",
    description:
      "Practical guides to technology, AI, digital skills, useful tools, and innovation.",
    url: "/",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
