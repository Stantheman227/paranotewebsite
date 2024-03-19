import React from "react";
import Image from "next/image";

function ScriptSection() {
  return (
    <div className="flex flex-col text-white p-5">
      <div className="h-full w-full flex flex-[20%] flex-col">
        <h2 className="text-3xl font-bold tracking-tighter mb-5">
          ParaScout erkennt Paragrafen in deiner PDF
        </h2>
        <p>
          ParaScout ist der Algorithmus, der für dich die Paragrafen in deinen
          Dokumenten findet.
        </p>
      </div>
      <div className="h-full w-full p-5 flex flex-[80%] items-center justify-center">
        <div className="flex items-center justify-center relative w-full overflow-hidden rounded-md">
          <Image
            src="/JuraScriptMarkiert.png"
            alt="JuraScript mit Markierten Paragrafen"
            height={500}
            width={400}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
export default ScriptSection;
