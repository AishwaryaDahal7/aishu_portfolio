import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aishwarya Dahal | Software Engineering Portfolio",
  description:
    "Personal portfolio of Aishwarya Dahal — Software Engineering student, aspiring full-stack developer, and modern web builder.",
  keywords: [
    "Aishwarya Dahal",
    "portfolio",
    "software engineer",
    "web developer",
    "Next.js",
    "full-stack",
  ],
  authors: [{ name: "Aishwarya Dahal" }],
  openGraph: {
    title: "Aishwarya Dahal | Software Engineering Portfolio",
    description: "Building modern, clean, and purposeful software solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-[#EFF6FF] text-[#0F172A] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
