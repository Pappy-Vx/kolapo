import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import ClientWrapper from "@/components/ClientWrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kolapo Kolawole | .NET Developer · AI Researcher · Full Stack Engineer",
  description:
    "MSc Researcher & Software Engineer passionate about building resilient, scalable systems. Specializing in .NET, React, Next.js, Python, TensorFlow, and enterprise-grade architectures.",
  keywords: [
    "Software Engineer",
    ".NET Developer",
    "Full Stack Developer",
    "AI Researcher",
    "React Developer",
    "Next.js",
    "C#",
    "ASP.NET Core",
    "Python",
    "TensorFlow",
    "Machine Learning",
    "Kolapo Kolawole",
  ],
  icons: {
    icon: [{ url: "/kola.jpg", type: "image/jpg" }],
  },
  openGraph: {
    title: "Kolapo Kolawole | .NET Developer · AI Researcher",
    description:
      "Engineering intelligent systems that scale — one architecture at a time.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} antialiased noise-overlay`} suppressHydrationWarning>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
