import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://paranote.de"),
  title: {
    default: "Paranote",
    template: "%s | Paranote",
  },
  description:
    "Dein Digitaler Assistent für das Jurastudium und darüber hinaus. Paranote extrahiert Paragrafen aus PDF-Dateien und zeigt sie die als PopUps direkt neber deiner PDF an. Du kannst direkt Markierungen und Notizen erstellen und zwischen deinen Gesetzbüchern hin und her springen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        {children} <Analytics /> <SpeedInsights />
      </body>
    </html>
  );
}
