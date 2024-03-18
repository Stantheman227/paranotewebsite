import React from "react";
import Image from "next/image";

function TrinitySection() {
  return (
    <div className="p-5 flex flex-col items-center text-white">
      <div className="h-full w-full flex flex-[20%] flex-col">
        <h2 className="text-3xl font-bold tracking-tighter mb-5">
          Notiere Markiere und Kommentiere
        </h2>
        <p>blablabal</p>
      </div>
      <div className="h-full w-full flex flex-[80%] items-center justify-center">
        <div className="relative max-w-full h-full w-[80%] overflow-hidden">
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
export default TrinitySection;
