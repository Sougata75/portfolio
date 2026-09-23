import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sougata Bhunia | Full-Stack Software Engineer",
  description: "Portfolio of Sougata Bhunia, a bilingual (English & Japanese) Full-Stack Developer specializing in React, Next.js, TypeScript, and scalable web architecture.",
  keywords: [
    "Sougata Bhunia",
    "Full-Stack Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "TypeScript",
    "Bilingual Software Engineer",
    "Japanese speaking developer",
    "Web Development"
  ],
  authors: [{ name: "Sougata Bhunia" }],
  creator: "Sougata Bhunia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-gold-eight-v0eo1t96vz.vercel.app/",
    title: "Sougata Bhunia | Full-Stack Software Engineer",
    description: "Bilingual Full-Stack Developer specializing in React, Next.js, and TypeScript. View my projects and engineering experience.",
    siteName: "Sougata Bhunia Portfolio",
    images: [
      {
        url: "/seoBanner.png",
        width: 1200,
        height: 630,
        alt: "Sougata Bhunia - Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sougata Bhunia | Full-Stack Software Engineer",
    description: "Bilingual Full-Stack Developer specializing in React, Next.js, and TypeScript.",
    images: ["/seoBanner"],
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {

  const messages = await getMessages();
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body>
        <NextIntlClientProvider messages={messages}>
        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
