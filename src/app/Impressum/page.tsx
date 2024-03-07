import React from "react";
import Footer from "../components/Footer";

export default function Impressum() {
  return (
    <main className="h-full w-full">
      <div className=" px-4 py-12 md:py-24 lg:py-32">
        <div className="prose prose-gray max-w-none mx-auto">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight">
                Impressum
              </h1>
            </div>
            <div className="space-y-2">
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
        </div>
      </div>
      <Footer />
    </main>
  );
}
