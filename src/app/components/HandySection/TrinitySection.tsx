import React from "react";
import Image from "next/image";

function TrinitySection() {
  return (
    <div className="p-5 flex flex-col items-center text-white">
      <div className="h-full w-full flex flex-[20%] flex-col">
        <h2 className="text-3xl font-bold tracking-tighter mb-5">
          Notiere, Markiere und Organisiere
        </h2>
        <p>
          Erstelle Notizen und Markierungen zu Gesetzestexten und greife auf sie
          zu.
        </p>
      </div>
      <div className="h-full w-full flex flex-[80%] items-center justify-center">
        <div className="relative max-w-full h-full w-[80%] overflow-hidden">
          <Image
            src={"/Paranote_Homescreen.png"}
            alt="Bild für Notizen"
            height={1492}
            width={982}
            priority={true}
          />
          <Image
            src={"/Notiz1_Paranote.png"}
            alt="Bild für Paranote"
            height={249}
            width={839}
            priority={true}
          />
          <Image
            src={"/Notiz2_Paranote.png"}
            alt="Bild für Notizen"
            height={249}
            width={839}
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
export default TrinitySection;
