import React from "react";
import Image from "next/image";

function ScriptSection() {
  return (
    <div className="scroll-section p-5 flex flex-col items-center text-white h-screen">
      <div className="h-full w-full flex flex-[20%] flex-col p-5 text-center">
        <h2 className="text-3xl font-bold tracking-tighter mb-4">
          ParaScout erkennt Paragrafen in deiner PDF
        </h2>
        <p>
          ParaScout ist ein Algorithmus, der für dich die Paragrafen in deinem
          Dokument findet.
        </p>
      </div>
      <div className="h-full w-full flex flex-[80%] items-center justify-center">
        <div className="relative max-w-full h-full w-[80%] mb-4 overflow-hidden">
          <Image
            src="/Paranote_PDF_SVG.svg"
            alt="JuraScript mit Markierten Paragrafen"
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
export default ScriptSection;
