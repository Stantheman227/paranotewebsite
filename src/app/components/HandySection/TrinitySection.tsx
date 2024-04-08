import React from "react";
import Image from "next/image";

function TrinitySection() {
  return (
    <div className="p-5 flex flex-col items-center text-white">
      <div className="h-full w-full flex flex-[20%] flex-col mb-5">
        <h2 className="text-3xl font-bold tracking-tighter mb-5">
          Notiere & Markiere direkt in deinem Gesetzbuch.
        </h2>
        <p>
          In deiner Menubar App, kannst du auf all deine Notizen, Markierungen,
          Verweise usw. zugreifen und sie organisieren. Außerdem, hast du von
          hier Zugriff auf alle weiteren Funktionen.
        </p>
      </div>
      <div className="h-full w-full flex items-start justify-center ">
        <div className="h-full w-full relative rounded-xl">
          <Image
            src={"/Paranote_Homescreen.png"}
            alt="Bild für Notizen"
            priority={true}
            width={982}
            height={1492}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
export default TrinitySection;
