import React from "react";
import Image from "next/image";

function PopUpSection() {
  return (
    <div className="scroll-section p-5 flex flex-col items-center text-white h-screen bg-black">
      <div className="h-full w-full text-center flex flex-[20%] flex-col p-5">
        <h2 className="text-3xl font-bold tracking-tighter mb-4">
          Gesetztestexte direkt als Pop-up{" "}
        </h2>
        <p>
          Die gefundenen Paragraphen werden dir direkt als Pop-up angezeigt. Du
          kannst direkt mit ihnen interagieren.
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
export default PopUpSection;
