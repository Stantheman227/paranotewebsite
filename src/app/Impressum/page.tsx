import React from "react";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Impressum() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow p-5">
        <Image
          src={"/logo_lm.svg"}
          height={70}
          width={140}
          alt="Paranote_logo"
        />
        <div className="mt-2 mb-2">
          <h1 className="text-3xl font-extrabold tracking-tight">Impressum</h1>
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Angaben gemäß § 5 TMG
          </h2>
          <p>Paranote GbR</p>
          <p>Marmstorfer Weg 128</p>
          <p>21077 Hamburg</p>
          <p>Deutschland</p>
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Kontaktmöglichkeiten
          </h2>
          <p>E-Mail: mail@paranote.de</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
