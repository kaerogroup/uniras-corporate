import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UNIRAS SDN. BHD. | Digital Products, Applications & Business Systems",
  description:
    "UNIRAS SDN. BHD. is a Malaysian technology company building digital products, business applications, operational systems and AI-assisted workflows.",
  keywords: [
    "UNIRAS",
    "software development Malaysia",
    "application development",
    "business systems",
    "digital product engineering",
    "AI automation",
  ],
  openGraph: {
    title: "UNIRAS SDN. BHD. | Digital Products, Applications & Business Systems",
    description:
      "Software built around how business actually works — digital products, applications and operational systems by UNIRAS SDN. BHD.",
    type: "website",
    locale: "en_MY",
    siteName: "UNIRAS SDN. BHD.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-MY">
      <body>{children}</body>
    </html>
  );
}
