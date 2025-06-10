import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shatakshi - ML Engineer & AI Specialist",
  description: "Machine Learning Engineer specializing in AI solutions, data science, and scalable ML systems. Passionate about building innovative technology solutions.",
  keywords: ["Machine Learning", "AI Engineer", "Data Science", "Python", "TensorFlow", "PyTorch", "MLOps"],
  authors: [{ name: "Shatakshi" }],
  creator: "Shatakshi",
  openGraph: {
    title: "Shatakshi - ML Engineer & AI Specialist",
    description: "Machine Learning Engineer specializing in AI solutions, data science, and scalable ML systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@shatakshi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
