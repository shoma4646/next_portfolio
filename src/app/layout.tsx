import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shoma | Full-Stack Developer",
  description:
    "Full-Stack Developer with 7+ years of experience. Specializing in TypeScript, React, Next.js, and AWS.",
  keywords: [
    "Full-Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
    "NestJS",
    "Go",
    "AWS",
  ],
  authors: [{ name: "Shoma" }],
  openGraph: {
    title: "Shoma | Full-Stack Developer",
    description:
      "Full-Stack Developer with 7+ years of experience. Specializing in TypeScript, React, Next.js, and AWS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Noto+Sans+JP:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
