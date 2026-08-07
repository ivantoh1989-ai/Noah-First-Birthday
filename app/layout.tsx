import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700"
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noah Turns ONE | Safari Birthday Celebration",
  description:
    "Join Toh Yue Jian Noah's first birthday celebration at Keepers Cove, Singapore.",
  keywords: [
    "Noah First Birthday",
    "Safari Birthday",
    "Wild One",
    "Baby Birthday Invitation"
  ],
  authors: [
    {
      name: "Emily Ang & Toh Ivan"
    }
  ],
  openGraph: {
    title: "Noah Turns ONE 🦁",
    description:
      "A wild adventure awaits as Noah celebrates his first birthday!",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
