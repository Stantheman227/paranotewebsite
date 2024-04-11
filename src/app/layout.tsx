import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Paranote",
    template: "%s | Paranote",
  },
  description: "Dein Digitaler Assistent für das Jurastudium",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      {/* <head>
        <link rel="icon" href="/favicon.ico" sizes="60x60" />
      </head> */}

      <body className={inter.className}>
        {children} <Analytics />
      </body>
    </html>
  );
}
