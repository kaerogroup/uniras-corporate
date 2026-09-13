import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UNIRAS SDN. BHD. | Digital Products, Applications & Business Systems",
  description:
    "UNIRAS SDN. BHD. builds digital products, applications, business systems and intelligent workflows for modern organisations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
